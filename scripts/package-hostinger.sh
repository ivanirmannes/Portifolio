#!/usr/bin/env bash

# Interrompe o empacotamento se qualquer etapa falhar ou usar uma variável ausente.
set -euo pipefail

# Resolve a raiz do repositório a partir deste script para aceitar execução de qualquer pasta.
project_root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
archive_path="${project_root}/Portifolio-Hostinger.zip"
staging_dir="$(mktemp -d)"

# Remove a pasta temporária mesmo quando o comando termina com erro.
trap 'rm -rf "$staging_dir"' EXIT

# Lista explicitamente os arquivos necessários para servir o site estático.
site_files=(
  index.html
  style.css
  script.js
  assets/image/ivanir-sobre.webp
  assets/image/devburguer/xbacon.png
  assets/image/devburguer/bacon-egg.png
)

# Copia os arquivos mantendo seus caminhos relativos dentro da área temporária.
for file in "${site_files[@]}"; do
  mkdir -p "${staging_dir}/$(dirname "$file")"
  cp "${project_root}/${file}" "${staging_dir}/${file}"
done

# Gera o ZIP na raiz do projeto com index.html no primeiro nível do arquivo.
(
  cd "$staging_dir"
  zip -qr "$archive_path" "${site_files[@]}"
)

# Informa onde ficou o pacote pronto para envio ao hPanel.
printf 'Pacote da Hostinger atualizado: %s\n' "$archive_path"

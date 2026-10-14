# Portfólio — Ivanir Mannes

Portfólio pessoal de desenvolvimento web. A página reúne apresentação profissional, habilidades, projetos acadêmicos e trabalhos realizados para clientes.

## Acessar o site

Depois de habilitar o GitHub Pages, o site do projeto fica disponível em:

**https://ivanirmannes.github.io/Portifolio/**

## Tecnologias

- HTML5 para a estrutura e o conteúdo;
- CSS3 para o layout responsivo, componentes visuais e adaptações para telas menores;
- JavaScript para o menu móvel e atualização automática do ano no rodapé;
- Google Fonts para as fontes Manrope e DM Mono.

O projeto não usa framework, gerenciador de pacotes nem etapa de build. Os arquivos publicados são servidos diretamente pelo GitHub Pages ou pela Hostinger.

## Estrutura do projeto

```text
.
├── index.html              # Conteúdo e estrutura da página
├── style.css               # Estilos, layout e responsividade
├── script.js               # Interações do menu e ano do rodapé
├── mannes-live-index.html  # Cópia da página usada no domínio principal
├── mannes-live-style.css   # Cópia dos estilos do domínio principal
├── mannes-www-index.html   # Cópia da página usada no domínio www
├── scripts/
│   └── package-hostinger.sh # Gera o pacote para envio à Hostinger
└── assets/
    └── image/              # Fotos e imagens usadas no portfólio
        ├── devburguer/     # Imagens do projeto DevBurguer
        └── ivanir-sobre.webp
```

## Visualizar localmente

Com Python 3 instalado, inicie um servidor local na pasta do projeto:

```bash
python3 -m http.server 8000
```

Depois, abra [http://localhost:8000](http://localhost:8000) no navegador. Também é possível abrir `index.html` diretamente, mas o servidor local reproduz melhor o funcionamento de um site hospedado.

## Publicar no GitHub Pages

O repositório já contém `index.html` na raiz e pode ser publicado sem compilação:

1. Envie os arquivos para a branch `main` do repositório `ivanirmannes/Portifolio`.
2. No GitHub, abra **Settings → Pages**.
3. Em **Build and deployment**, selecione **Deploy from a branch**.
4. Escolha a branch `main` e a pasta `/(root)`, depois salve.
5. Aguarde a publicação e acesse o endereço indicado na página de configurações do Pages.

As alterações na branch e na pasta configuradas são publicadas pelo GitHub Pages. Consulte a [documentação oficial de configuração do GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site) se as opções da interface forem diferentes.

## Publicar na Hostinger

O site é estático e não precisa de instalação ou compilação no servidor. Para gerar um pacote pronto para envio, execute na raiz do repositório:

```bash
./scripts/package-hostinger.sh
```

O comando cria `Portifolio-Hostinger.zip` com a página principal, estilos, JavaScript e imagens usados por ela. No hPanel da Hostinger, abra o Gerenciador de arquivos do domínio, envie o ZIP para `public_html` e extraia os arquivos nessa pasta. Confirme que `index.html` ficou diretamente em `public_html`, e não em uma subpasta.

Os arquivos `mannes-live-index.html`, `mannes-live-style.css` e `mannes-www-index.html` são cópias destinadas às configurações atuais dos domínios. Ao alterar a página ou os estilos, mantenha essas cópias sincronizadas com `index.html` e `style.css` antes de enviar os arquivos.

## Manutenção

- Edite o conteúdo em `index.html`, os estilos em `style.css` e as interações em `script.js`.
- Preserve os caminhos relativos dos arquivos para que funcionem tanto no GitHub Pages, em um subcaminho do domínio, quanto na raiz da hospedagem Hostinger.
- Atualize as cópias específicas dos domínios quando editar `index.html` ou `style.css`.
- Mantenha no pacote da Hostinger somente os arquivos referenciados pela página publicada; o script de empacotamento lista esses arquivos explicitamente.

## Projetos apresentados

- **Controle financeiro com IA** — demonstração web;
- **Tempo e Temperatura** — demonstração web;
- **Reciclagem** — demonstração web;
- **Super Mario** — site de serviços residenciais e reparos;
- **DevBurguer Front-end** — aplicação React em desenvolvimento, com imagens dos produtos;
- **DevBurguer API** — repositório público do back-end;
- **Ivanir Mannes** e **Stillus em Drywall** — projetos profissionais.

Os links de demonstração, código e contato ficam no próprio `index.html`.

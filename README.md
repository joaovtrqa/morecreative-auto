# More Creative — Site Institucional

Segundo site, separado do seu portfólio pessoal. Mesmo processo de deploy que você já fez uma vez — dessa vez deve ser mais rápido.

## Passo a passo (resumido — você já sabe o processo)

1. Crie um **novo** repositório no GitHub (ex: `morecreative-institucional`). Não reutilize o do site 1.
2. Selecione TODO o conteúdo desta pasta (exceto `node_modules`) e arraste para "Upload files" no GitHub — lembre de mostrar arquivos ocultos no seu explorador de arquivos antes, para o `.eleventy.js` e `.gitignore` irem juntos.
3. No Netlify, "Add new site" → importe esse novo repositório.
4. Depois do primeiro deploy: Project configuration → Visitor access → mude para Público (senão o /admin não funciona, como aconteceu da primeira vez).
5. Project configuration → Identity → Enable Identity → Registration: Invite only → Services → Enable Git Gateway.
6. Convide seu e-mail, e use o mesmo truque do site 1 se o link do convite não abrir direto em `/admin`: copie o link, adicione `/admin/` antes do `#`, cole no navegador.
7. Acesse `seu-novo-site.netlify.app/admin` e comece a adicionar os trabalhos automotivos (Photography, Film, Motorsport, Events).

## O que já está pronto

- Home com hero, 4 blocos de serviço (Photography/Film/Motorsport/Events), case Flow Boost em destaque
- Página Trabalhos com filtro por categoria
- Página O que fazemos, Sobre (institucional, sem foco no João), Contato
- Case Flow Boost já cadastrado (sem mídia ainda — adicione pelo painel)
- Imagem de capa do hero é um placeholder temporário — troque pelo painel assim que tiver uma foto/vídeo automotivo real

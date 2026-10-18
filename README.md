# Site da Clínica Rocha Galvão

Site estático (HTML, CSS e JavaScript puros) preparado para o GitHub Pages, com o domínio **rochagalvao.med.br**.
Não há servidor, banco de dados nem etapa de compilação: o que está nesta pasta é exatamente o que vai ao ar.

## Estrutura

```
index.html            página única (abertura, a clínica, especialidades, como agendar, contato)
404.html              página para endereços inexistentes
CNAME                 domínio do site (rochagalvao.med.br)
.nojekyll             diz ao GitHub Pages para publicar os arquivos como estão
robots.txt            permite indexação e aponta o sitemap
sitemap.xml           mapa do site para buscadores
site.webmanifest      nome, cores e ícones para celulares
assets/css/style.css  estilos (paleta e tipografia do Manual de Marca)
assets/js/main.js     menu do celular, destaque do item ativo e ano do rodapé
assets/fonts/         Lora e Plus Jakarta Sans (licença OFL, arquivos na pasta)
assets/img/           logos em SVG, favicons e imagem de compartilhamento (og-image.png)
```

## Publicar no GitHub Pages

1. Crie um repositório no GitHub (por exemplo `rochagalvao-site`). Em contas pessoais gratuitas, o GitHub Pages exige repositório **público**.
2. Envie **todo o conteúdo desta pasta** para a raiz do repositório (incluindo os arquivos ocultos `.nojekyll` e `CNAME`). Pode ser pelo botão *Add file → Upload files*, pelo GitHub Desktop ou pelo git:
   ```bash
   git init
   git add .
   git commit -m "Site da Clínica Rocha Galvão"
   git branch -M main
   git remote add origin https://github.com/SEU-USUARIO/rochagalvao-site.git
   git push -u origin main
   ```
3. No repositório, abra **Settings → Pages**. Em *Build and deployment*, escolha **Source: Deploy from a branch**, ramo **main**, pasta **/ (root)** e salve.
4. Em *Custom domain*, digite `rochagalvao.med.br` e salve. O GitHub cria/confere o arquivo `CNAME` (que já está aqui).
5. Configure o DNS do domínio (próximo passo). Quando o GitHub mostrar *DNS check successful*, marque **Enforce HTTPS**. O certificado é emitido automaticamente; pode levar de alguns minutos a algumas horas.

Enquanto o domínio não estiver apontado, o site já funciona em `https://SEU-USUARIO.github.io/rochagalvao-site/` — todos os caminhos são relativos.

## DNS do domínio rochagalvao.med.br

No painel onde o domínio é administrado (para `.med.br`, normalmente o próprio Registro.br, em *Editar zona DNS*), crie os registros abaixo. Os endereços são os publicados pelo GitHub na documentação oficial do GitHub Pages.

| Tipo  | Nome | Valor |
|-------|------|-------|
| A     | @    | 185.199.108.153 |
| A     | @    | 185.199.109.153 |
| A     | @    | 185.199.110.153 |
| A     | @    | 185.199.111.153 |
| AAAA  | @    | 2606:50c0:8000::153 |
| AAAA  | @    | 2606:50c0:8001::153 |
| AAAA  | @    | 2606:50c0:8002::153 |
| AAAA  | @    | 2606:50c0:8003::153 |
| CNAME | www  | SEU-USUARIO.github.io |

Observações:

- `@` representa o domínio sem prefixo (rochagalvao.med.br). Alguns painéis pedem o campo em branco em vez de `@`.
- O registro `www` aponta para `SEU-USUARIO.github.io` (sem o nome do repositório). Com ele, `www.rochagalvao.med.br` redireciona automaticamente para `rochagalvao.med.br`.
- Se já existir um registro A ou CNAME antigo para `@` ou `www`, remova-o antes.
- A propagação do DNS costuma levar de minutos a 24 horas.

## Como editar o conteúdo

Todo o texto está em `index.html`, organizado por seção com comentários `<!-- ... -->`. Edite com qualquer editor de texto e envie o arquivo de novo ao repositório; o site atualiza em cerca de um minuto.

Dois blocos estão prontos, mas desativados (dentro de comentários HTML), à espera das informações:

- **Horário de atendimento** — na seção *Contato e como chegar*, procure `HORÁRIO DE ATENDIMENTO`.
- **Convênios** — logo abaixo, procure `CONVÊNIOS`.

Para ativar, retire o `<!--` do início e o `-->` do fim do bloco e ajuste o texto.

Também há um modelo de seção **Corpo clínico** desativado ao final da seção *Especialidades* (procure `EQUIPE`). Pelas normas de publicidade médica do CFM, cada médico(a) deve aparecer com o CRM e, ao anunciar a especialidade, com o RQE.

Outros pontos de edição frequentes:

- **Mensagem pré-preenchida do WhatsApp**: nos links `https://wa.me/5527996949814?text=...` (o texto está codificado para URL; `%20` é espaço).
- **Mapa**: o `iframe` da seção de contato usa o endereço da clínica; se o Google mostrar o ponto fora do lugar, troque o parâmetro `q=` pelas coordenadas (`q=-19.5xxxx,-40.6xxxx`).
- **Ano do rodapé**: preenchido automaticamente pelo JavaScript; sem JavaScript, vale o ano escrito no HTML.

## Identidade visual

- Paleta: Verde Rocha `#0F3B3A`, Verde Salva `#4E8F80`, Terracota `#C9704E`, Areia `#E9E1D3`, Grafite `#1F2A2C`, Branco Gelo `#F8F6F1`.
- Tipografia: Lora (títulos) e Plus Jakarta Sans (texto), hospedadas no próprio site — nada é carregado de terceiros além do mapa do Google.
- Logos: versões em SVG na pasta `assets/img`, geradas a partir da biblioteca de logos do Manual de Marca (Opção 3 · Convergência). As cores de impressão (CMYK/Pantone) e as regras de aplicação continuam no manual.

## Avisos legais

O rodapé traz a razão social, o CNPJ, o registro da clínica no CRM-ES e o nome e CRM da diretora técnica, conforme as normas de publicidade médica do CFM. Mantenha essas linhas em qualquer alteração.

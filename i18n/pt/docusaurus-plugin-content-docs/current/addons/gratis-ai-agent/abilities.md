---
title: Referência de capacidades
sidebar_position: 2
_i18n_hash: 1a83460648ea789162af417c6b11eecc
---
# Referência de Abilities

Abilities são as ações atómicas que Gratis AI Agent pode invocar na sua instalação WordPress. Cada ability é uma classe PHP registada que expõe um esquema JSON — o agente lê este esquema em tempo de execução para compreender que parâmetros são necessários e o que a ability devolve.

Esta página documenta todas as abilities incluídas com Gratis AI Agent v1.9.0.

---

## Tipos de publicação personalizados {#custom-post-types}

Estas abilities gerem tipos de publicação personalizados (CPTs) registados através do agente. Os registos são persistidos na tabela de opções do WordPress para que sobrevivam à desativação e reativação do plugin.

### `register_post_type` {#registerposttype}

Regista um novo tipo de publicação personalizado.

**Parâmetros**

| Parâmetro | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| `slug` | string | Sim | A chave do tipo de publicação (máx. 20 caracteres, sem maiúsculas, sem espaços) |
| `singular_label` | string | Sim | Nome singular legível por humanos, por exemplo `Portfolio Item` |
| `plural_label` | string | Sim | Nome plural legível por humanos, por exemplo `Portfolio Items` |
| `public` | boolean | Não | Se o tipo de publicação é acessível publicamente. Predefinição `true` |
| `supports` | array | Não | Funcionalidades a suportar: `title`, `editor`, `thumbnail`, `excerpt`, `comments`, `revisions`, `custom-fields`. Predefinição `["title","editor"]` |
| `has_archive` | boolean | Não | Se uma página de arquivo do tipo de publicação está ativada. Predefinição `false` |
| `menu_icon` | string | Não | Classe Dashicons ou URL para o ícone do menu de administração. Predefinição `"dashicons-admin-post"` |
| `rewrite_slug` | string | Não | slug de URL para o tipo de publicação. Por predefinição, usa `slug` |

**Exemplo**

```json
{
  "slug": "portfolio",
  "singular_label": "Portfolio Item",
  "plural_label": "Portfolio Items",
  "public": true,
  "supports": ["title", "editor", "thumbnail"],
  "has_archive": true,
  "menu_icon": "dashicons-portfolio"
}
```

**Devolve** `{ "success": true, "slug": "portfolio" }`

---

### `list_post_types` {#listposttypes}

Devolve todos os tipos de publicação personalizados registados pelo agente.

**Parâmetros** — nenhum

**Devolve**

```json
{
  "post_types": [
    {
      "slug": "portfolio",
      "singular_label": "Portfolio Item",
      "plural_label": "Portfolio Items",
      "public": true
    }
  ]
}
```

---

### `delete_post_type` {#deleteposttype}

Anula o registo de um tipo de publicação personalizado previamente registado pelo agente. As publicações existentes desse tipo permanecem na base de dados, mas deixam de estar acessíveis através do tipo de publicação.

**Parâmetros**

| Parâmetro | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| `slug` | string | Sim | A chave do tipo de publicação a remover |

**Devolve** `{ "success": true, "slug": "portfolio" }`

---

## Taxonomias personalizadas {#custom-taxonomies}

Estas abilities gerem taxonomias personalizadas. Tal como os CPTs, os registos de taxonomias são persistidos.

### `register_taxonomy` {#registertaxonomy}

Regista uma nova taxonomia personalizada.

**Parâmetros**

| Parâmetro | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| `slug` | string | Sim | A chave da taxonomia (máx. 32 caracteres) |
| `singular_label` | string | Sim | Nome singular legível por humanos, por exemplo `Project Category` |
| `plural_label` | string | Sim | Nome plural legível por humanos, por exemplo `Project Categories` |
| `post_types` | array | Sim | slugs dos tipos de publicação aos quais esta taxonomia deve ser associada |
| `hierarchical` | boolean | Não | `true` para estilo de categoria, `false` para estilo de etiqueta. Predefinição `true` |
| `public` | boolean | Não | Se os termos são acessíveis publicamente. Predefinição `true` |
| `rewrite_slug` | string | Não | slug de URL para a taxonomia. Por predefinição, usa `slug` |

**Exemplo**

```json
{
  "slug": "project-category",
  "singular_label": "Project Category",
  "plural_label": "Project Categories",
  "post_types": ["portfolio"],
  "hierarchical": true
}
```

**Devolve** `{ "success": true, "slug": "project-category" }`

---

### `list_taxonomies` {#listtaxonomies}

Devolve todas as taxonomias personalizadas registadas pelo agente.

**Parâmetros** — nenhum

**Devolve**

```json
{
  "taxonomies": [
    {
      "slug": "project-category",
      "singular_label": "Project Category",
      "post_types": ["portfolio"],
      "hierarchical": true
    }
  ]
}
```

---

### `delete_taxonomy` {#deletetaxonomy}

Anula o registo de uma taxonomia personalizada previamente registada pelo agente.

**Parâmetros**

| Parâmetro | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| `slug` | string | Sim | A chave da taxonomia a remover |

**Devolve** `{ "success": true, "slug": "project-category" }`

---

## Sistema de design {#design-system}

As abilities do sistema de design modificam a apresentação visual do site WordPress — desde CSS personalizado a padrões de blocos e ao logótipo do site.

### `inject_custom_css` {#injectcustomcss}

Acrescenta CSS ao `<head>` do site através de `wp_add_inline_style`. O CSS é armazenado na opção `gratis_ai_agent_custom_css` e removido da fila de forma limpa quando a ability é reposta.

**Parâmetros**

| Parâmetro | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| `css` | string | Sim | CSS válido a injetar |
| `label` | string | Não | Etiqueta legível por humanos para este bloco de CSS, usada em registos de depuração. Predefinição `"agent-injected"` |
| `replace` | boolean | Não | Se `true`, substitui todo o CSS previamente injetado. Predefinição `false` (acrescenta) |

**Exemplo**

```json
{
  "css": ":root { --primary: #1a1a2e; --accent: #e94560; } body { font-family: 'Inter', sans-serif; }",
  "label": "brand-colours",
  "replace": false
}
```

**Devolve** `{ "success": true, "bytes": 96 }`

---

### `add_block_pattern` {#addblockpattern}

Regista um padrão de blocos reutilizável na biblioteca de padrões do WordPress.

**Parâmetros**

| Parâmetro | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| `slug` | string | Sim | Identificador do padrão, por exemplo `gratis/hero-dark` |
| `title` | string | Sim | Nome do padrão legível por humanos mostrado no editor |
| `content` | string | Sim | Marcação de blocos serializada (HTML) para o padrão |
| `categories` | array | Não | slugs de categorias de padrões, por exemplo `["featured", "hero"]` |
| `description` | string | Não | Descrição curta mostrada no seletor de padrões |
| `keywords` | array | Não | Palavras-chave de pesquisa |

**Devolve** `{ "success": true, "slug": "gratis/hero-dark" }`

---

### `list_block_patterns` {#listblockpatterns}

Lista todos os padrões de blocos registados pelo agente.

**Parâmetros** — nenhum

**Devolve**

```json
{
  "patterns": [
    {
      "slug": "gratis/hero-dark",
      "title": "Dark Hero",
      "categories": ["hero"]
    }
  ]
}
```

---

### `set_site_logo` {#setsitelogo}

Define o logótipo do site WordPress para um ID de anexo fornecido ou um URL de imagem remoto. Quando é fornecido um URL, a imagem é transferida e importada para a Biblioteca de Media.

**Parâmetros**

| Parâmetro | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| `attachment_id` | integer | Não | ID de um anexo existente da Biblioteca de Media |
| `url` | string | Não | URL de imagem remoto a importar e definir como logótipo |

Um de `attachment_id` ou `url` deve ser fornecido.

**Devolve** `{ "success": true, "attachment_id": 42 }`

---

### `apply_theme_json_preset` {#applythemejsonpreset}

Aplica uma predefinição nomeada de cor/tipografia ao `theme.json` (ou `global-styles`) do tema ativo. As predefinições são conjuntos selecionados mantidos pela equipa Gratis AI Agent.

**Parâmetros**

| Parâmetro | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| `preset` | string | Sim | Nome da predefinição, por exemplo `minimal-dark`, `warm-editorial`, `corporate-blue` |
| `merge` | boolean | Não | Se `true`, junta com os valores existentes em vez de substituir. Predefinição `false` |

**Predefinições disponíveis**

| Predefinição | Descrição |
|---|---|
| `minimal-dark` | Fundo quase preto, texto branco, uma única cor de destaque |
| `warm-editorial` | Fundo branco quente, títulos com serifa, cores de destaque terrosas |
| `corporate-blue` | Paleta azul-marinho e branca com tipografia profissional |
| `vibrant-startup` | Gradientes vivos, cantos arredondados, tipo sans-serif moderno |
| `classic-blog` | Cinzentos neutros, altura de linha confortável, espaçamento de layout tradicional |

**Devolve** `{ "success": true, "preset": "minimal-dark" }`

---

## Estilos globais {#global-styles}

As capacidades de Estilos globais leem e escrevem valores de theme.json através da API de Estilos globais do WordPress, afetando todos os blocos e templates em todo o site.

### `get_global_styles` {#getglobalstyles}

Devolve a configuração atual dos estilos globais.

**Parâmetros**

| Parâmetro | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| `path` | string | Não | Ponteiro JSON para um valor específico, por exemplo `/color/palette` ou `/typography/fontSizes`. Devolve o objeto inteiro se omitido. |

**Devolve** o objeto completo de estilos globais ou o valor em `path`.

---

### `set_global_styles` {#setglobalstyles}

Atualiza um ou mais valores na configuração de estilos globais.

**Parâmetros**

| Parâmetro | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| `path` | string | Sim | Ponteiro JSON para o valor a definir, por exemplo `/color/palette` |
| `value` | any | Sim | O novo valor |

**Exemplo** — adicionar uma cor à paleta

```json
{
  "path": "/color/palette",
  "value": [
    { "slug": "primary", "color": "#1a1a2e", "name": "Primary" },
    { "slug": "accent",  "color": "#e94560", "name": "Accent" }
  ]
}
```

**Devolve** `{ "success": true, "path": "/color/palette" }`

---

### `reset_global_styles` {#resetglobalstyles}

Repõe todas as alterações de estilos globais aplicadas pelo agente, restaurando as predefinições do tema.

**Parâmetros** — nenhum

**Devolve** `{ "success": true }`

---

## Menus de navegação {#navigation-menus}

As capacidades de Menu de navegação criam e gerem menus de navegação WordPress e os respetivos itens.

### `create_menu` {#createmenu}

Cria um novo menu de navegação WordPress.

**Parâmetros**

| Parâmetro | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| `name` | string | Sim | Nome do menu, por exemplo `Primary Navigation` |
| `location` | string | Não | Localização do tema a atribuir a este menu, por exemplo `primary` |

**Devolve** `{ "success": true, "menu_id": 7 }`

---

### `update_menu` {#updatemenu}

Renomeia um menu ou reatribui-o a uma localização do tema.

**Parâmetros**

| Parâmetro | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| `menu_id` | integer | Sim | ID do menu a atualizar |
| `name` | string | Não | Novo nome do menu |
| `location` | string | Não | Localização do tema a atribuir ou reatribuir |

**Devolve** `{ "success": true, "menu_id": 7 }`

---

### `add_menu_item` {#addmenuitem}

Adiciona um item a um menu de navegação existente.

**Parâmetros**

| Parâmetro | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| `menu_id` | integer | Sim | ID do menu de destino |
| `type` | string | Sim | Tipo de item: `custom`, `post_type` ou `taxonomy` |
| `title` | string | Não | Rótulo para o item de menu (obrigatório para o tipo `custom`) |
| `url` | string | Não | URL para itens `custom` |
| `object_id` | integer | Não | ID de publicação ou ID de termo para itens `post_type`/`taxonomy` |
| `parent_id` | integer | Não | ID do item de menu sob o qual aninhar este item |
| `position` | integer | Não | Posição de base zero no menu |

**Devolve** `{ "success": true, "item_id": 12 }`

---

### `remove_menu_item` {#removemenuitem}

Remove um item de um menu de navegação.

**Parâmetros**

| Parâmetro | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| `item_id` | integer | Sim | ID do item de menu a remover |

**Devolve** `{ "success": true, "item_id": 12 }`

---

### `list_menus` {#listmenus}

Lista todos os menus de navegação WordPress, incluindo as respetivas localizações de tema atribuídas.

**Parâmetros** — nenhum

**Devolve**

```json
{
  "menus": [
    {
      "menu_id": 7,
      "name": "Primary Navigation",
      "location": "primary",
      "item_count": 5
    }
  ]
}
```

---

## Gestão de opções {#options-management}

As capacidades de opções leem e escrevem opções WordPress via `get_option` / `update_option`. Uma lista de bloqueio de segurança integrada impede a modificação acidental de definições críticas.

### `get_option` {#getoption}

Lê uma opção WordPress.

**Parâmetros**

| Parâmetro | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| `option_name` | string | Sim | A chave da opção, por exemplo `blogname` |

**Devolve** `{ "option_name": "blogname", "value": "My Site" }`

Devolve um erro se `option_name` estiver na lista de bloqueio de segurança.

---

### `set_option` {#setoption}

Escreve uma opção WordPress.

**Parâmetros**

| Parâmetro | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| `option_name` | string | Sim | A chave da opção |
| `value` | any | Sim | O novo valor (serializado automaticamente para arrays/objetos) |
| `autoload` | string | Não | `"yes"` ou `"no"`. A predefinição preserva a definição de autoload existente |

Devolve um erro se `option_name` estiver na lista de bloqueio de segurança.

**Devolve** `{ "success": true, "option_name": "blogname" }`

---

### `delete_option` {#deleteoption}

Elimina uma opção do WordPress.

**Parâmetros**

| Parâmetro | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| `option_name` | string | Sim | A chave da opção a eliminar |

Devolve um erro se `option_name` estiver na lista de bloqueio de segurança.

**Devolve** `{ "success": true, "option_name": "my_custom_option" }`

---

### `list_options` {#listoptions}

Lista opções do WordPress que correspondem a um padrão.

**Parâmetros**

| Parâmetro | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| `pattern` | string | Não | Padrão SQL LIKE para filtrar nomes de opções, por exemplo `gratis_%`. Devolve todas as opções se omitido (use com cautela em bases de dados grandes). |
| `limit` | integer | Não | Número máximo de resultados. Predefinição `50`, máximo `500` |

**Devolve**

```json
{
  "options": [
    { "option_name": "gratis_ai_agent_version", "autoload": "yes" }
  ],
  "total": 1
}
```

---

## Gestão de Conteúdo {#content-management}

As capacidades de Gestão de Conteúdo criam e editam publicações e páginas do WordPress. Os IDs das publicações são devolvidos para que passos subsequentes em planos com múltiplas capacidades possam referenciar o conteúdo criado.

### `create_post` {#createpost}

Cria uma nova publicação, página ou entrada de tipo de publicação personalizado do WordPress.

**Parâmetros**

| Parâmetro | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| `title` | string | Sim | Título da publicação |
| `content` | string | Não | Corpo da publicação — aceita texto simples, HTML ou marcação de blocos serializada |
| `status` | string | Não | `draft`, `publish`, `pending`, `private`. Predefinição `draft` |
| `post_type` | string | Não | Slug do tipo de publicação, por exemplo `post`, `page` ou qualquer CPT registado. Predefinição `post` |
| `excerpt` | string | Não | Resumo curto mostrado em arquivos e resultados de pesquisa |
| `categories` | array | Não | Array de nomes ou IDs de categorias a atribuir |
| `tags` | array | Não | Array de nomes ou IDs de etiquetas a atribuir |
| `author` | integer | Não | ID de utilizador do WordPress a definir como autor da publicação. Por predefinição, usa o utilizador atual |
| `date` | string | Não | Data de publicação em formato ISO 8601, por exemplo `2026-05-01T09:00:00` |
| `page_template` | string | Não | Ficheiro de modelo a atribuir a esta publicação ou página, por exemplo `page-full-width.php`. Só é relevante quando `post_type` é `page` ou um CPT que suporte modelos de página. |

**Exemplo**

```json
{
  "title": "Welcome to Our New Site",
  "content": "<!-- wp:paragraph --><p>Hello world!</p><!-- /wp:paragraph -->",
  "status": "publish",
  "post_type": "page",
  "page_template": "page-full-width.php"
}
```

**Devolve** `{ "success": true, "post_id": 42, "permalink": "https://example.com/welcome/" }`

---

### `update_post` {#updatepost}

Atualiza uma publicação ou página existente do WordPress.

**Parâmetros**

| Parâmetro | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| `post_id` | integer | Sim | ID da publicação a atualizar |
| `title` | string | Não | Novo título da publicação |
| `content` | string | Não | Novo corpo da publicação |
| `status` | string | Não | Novo estado: `draft`, `publish`, `pending`, `private` |
| `excerpt` | string | Não | Novo excerto |
| `categories` | array | Não | Substituir a lista completa de categorias por este array de nomes ou IDs |
| `tags` | array | Não | Substituir a lista completa de etiquetas por este array de nomes ou IDs |
| `page_template` | string | Não | Novo ficheiro de modelo a atribuir a esta publicação ou página, por exemplo `page-full-width.php`. Passe uma string vazia para remover a atribuição de modelo e reverter para a predefinição do tema. |

**Exemplo** — alterar o modelo após a criação

```json
{
  "post_id": 42,
  "page_template": "page-full-width.php"
}
```

**Devolve** `{ "success": true, "post_id": 42 }`

---

### `batch_create_posts` {#batchcreateposts}

Cria várias publicações numa única chamada de capacidade, reduzindo idas e voltas durante a criação de sites ou a importação de conteúdo em massa. As publicações são criadas em sequência; se uma falhar, as outras continuam e a falha é reportada no array de resultados.

**Parâmetros**

| Parâmetro | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| `posts` | array | Sim | Array de objetos de publicação, cada um aceitando os mesmos parâmetros que `create_post` |
| `stop_on_error` | boolean | Não | Se `true`, parar o processamento após a primeira falha. Predefinição `false` |

**Exemplo**

```json
{
  "posts": [
    {
      "title": "About Us",
      "post_type": "page",
      "status": "publish",
      "page_template": "page-full-width.php"
    },
    {
      "title": "Services",
      "post_type": "page",
      "status": "publish"
    },
    {
      "title": "Contact",
      "post_type": "page",
      "status": "publish"
    }
  ]
}
```

**Devolve**

```json
{
  "created": 3,
  "failed": 0,
  "results": [
    { "success": true, "post_id": 42, "title": "About Us" },
    { "success": true, "post_id": 43, "title": "Services" },
    { "success": true, "post_id": 44, "title": "Contact" }
  ]
}
```

---

### `set_featured_image` {#setfeaturedimage}

Atribui uma imagem destacada (miniatura da publicação) a uma publicação ou página existente. Aceita um ID de anexo existente da Biblioteca Multimédia ou um URL de imagem remoto; quando é fornecido um URL, a imagem é descarregada e importada automaticamente.

**Parâmetros**

| Parâmetro | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| `post_id` | integer | Sim | ID da publicação ou página a atualizar |
| `attachment_id` | integer | Não | ID de um anexo existente da Biblioteca Multimédia |
| `url` | string | Não | URL de imagem remoto a importar e definir como imagem destacada |
| `alt_text` | string | Não | Texto alternativo a aplicar ao anexo se for importado a partir de um URL |

Um de `attachment_id` ou `url` deve ser fornecido.

**Devolve** `{ "success": true, "post_id": 42, "attachment_id": 17 }`

---

### `create_contact_form` {#createcontactform}

Cria um formulário de contacto usando o plugin de formulários ativo (Contact Form 7, WPForms, Fluent Forms ou Gravity Forms, dependendo do que estiver instalado). Devolve um shortcode que pode ser incorporado em qualquer publicação ou página.

**Parâmetros**

| Parâmetro | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| `title` | string | Sim | Nome do formulário apresentado no admin do plugin de formulário |
| `fields` | array | Sim | Lista ordenada de campos do formulário (ver objeto de campo abaixo) |
| `recipient` | string | Não | Endereço de email para receber submissões. Por predefinição, usa o email de admin do WordPress |
| `subject` | string | Não | Linha de assunto do email. Suporta os placeholders `[your-name]` e `[your-subject]` ao usar Contact Form 7 |
| `confirmation_message` | string | Não | Mensagem apresentada após uma submissão bem-sucedida. Predefinição: `"Thank you for your message. We'll be in touch soon."` |

**Objeto de campo**

| Chave | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| `name` | string | Sim | Nome interno do campo / chave de máquina |
| `label` | string | Sim | Rótulo legível por humanos apresentado no formulário |
| `type` | string | Sim | `text`, `email`, `tel`, `textarea`, `select`, `checkbox`, `radio`, `file`, `date` |
| `required` | boolean | Não | Se o campo tem de ser preenchido antes da submissão. Predefinição `false` |
| `options` | array | Não | Opções para campos `select`, `checkbox` e `radio` |
| `placeholder` | string | Não | Texto de placeholder para inputs do tipo texto |

**Exemplo**

```json
{
  "title": "Restaurant Booking Enquiry",
  "fields": [
    { "name": "your-name",    "label": "Name",             "type": "text",     "required": true },
    { "name": "your-email",   "label": "Email",            "type": "email",    "required": true },
    { "name": "party-size",   "label": "Party size",       "type": "select",   "options": ["1–2", "3–5", "6–10", "10+"] },
    { "name": "your-message", "label": "Special requests", "type": "textarea", "required": false }
  ],
  "recipient": "bookings@example.com",
  "subject": "New booking enquiry from [your-name]"
}
```

**Devolve**

```json
{
  "success": true,
  "form_id": 3,
  "shortcode": "[contact-form-7 id=\"3\" title=\"Restaurant Booking Enquiry\"]"
}
```

---

## Revisão visual {#visual-review}

As capacidades de Revisão visual permitem que o agente capture capturas de ecrã de páginas live e as analise, possibilitando revisão de design autónoma, comparações antes/depois e verificações de regressão visual sem exigir qualquer extensão de browser.

### `capture_screenshot` {#capturescreenshot}

Captura uma captura de ecrã de uma página WordPress num URL indicado usando um browser headless do lado do servidor. A imagem é guardada na Biblioteca de média e é devolvido um URL de CDN.

**Parâmetros**

| Parâmetro | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| `url` | string | Sim | URL completo da página para capturar a captura de ecrã, por exemplo `https://example.com/about/` |
| `width` | integer | Não | Largura do viewport em píxeis. Predefinição `1280` |
| `height` | integer | Não | Altura do viewport em píxeis. Predefinição `800` |
| `full_page` | boolean | Não | Captura a página rolável completa em vez de apenas o viewport. Predefinição `false` |
| `delay_ms` | integer | Não | Milissegundos a aguardar após o carregamento da página antes de capturar, útil para conteúdo animado. Predefinição `500` |
| `label` | string | Não | Rótulo legível por humanos guardado com o anexo na Biblioteca de média |

**Devolve**

```json
{
  "success": true,
  "attachment_id": 88,
  "url": "https://example.com/wp-content/uploads/2026/04/screenshot-about.png",
  "width": 1280,
  "height": 800
}
```

---

### `compare_screenshots` {#comparescreenshots}

Recebe duas capturas de ecrã e devolve uma pontuação de diferença visual mais uma imagem de diferença que destaca as regiões alteradas. Útil para confirmar que uma alteração de design produziu o resultado esperado ou para detetar regressões não intencionais.

**Parâmetros**

| Parâmetro | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| `before_url` | string | Sim | URL da página a capturar como o estado "antes" |
| `after_url` | string | Sim | URL da página a capturar como o estado "depois". Pode ser o mesmo URL se comparar ao longo do tempo |
| `width` | integer | Não | Largura do viewport para ambas as capturas. Predefinição `1280` |
| `threshold` | float | Não | Limiar de diferença de píxeis (0.0–1.0). Píxeis dentro desta tolerância são considerados inalterados. Predefinição `0.1` |

**Devolve**

```json
{
  "success": true,
  "diff_score": 0.04,
  "changed_pixels": 2340,
  "total_pixels": 1024000,
  "diff_attachment_id": 91,
  "diff_url": "https://example.com/wp-content/uploads/2026/04/diff-about.png"
}
```

Um `diff_score` de `0.0` significa nenhuma alteração visível; `1.0` significa que todos os píxeis mudaram.

---

### `review_page_design` {#reviewpagedesign}

Captura uma captura de ecrã de uma página e envia-a para o modelo de linguagem para análise visual. Devolve uma avaliação estruturada que abrange layout, tipografia, utilização de cor e preocupações de acessibilidade.

**Parâmetros**

| Parâmetro | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| `url` | string | Sim | URL completo da página a rever |
| `focus` | string | Não | Lista separada por vírgulas de áreas de revisão a enfatizar: `layout`, `typography`, `colour`, `accessibility`, `mobile`. Predefinição: todas as áreas |
| `width` | integer | Não | Largura do viewport. Predefinição `1280` |

**Devolve**

```json
{
  "success": true,
  "screenshot_url": "https://example.com/wp-content/uploads/2026/04/review-about.png",
  "assessment": {
    "overall": "The page structure is clean and readable. Two accessibility issues detected.",
    "layout": "Good visual hierarchy. Hero section is prominent.",
    "typography": "Body text is 15px — consider increasing to 16px for readability.",
    "colour": "Contrast ratio on the CTA button (#fff on #4a90e2) is 3.1:1 — below the WCAG AA threshold of 4.5:1.",
    "accessibility": ["Low contrast on CTA button", "Missing alt text on hero image"],
    "suggestions": ["Darken the CTA button to #1a5cb0 to pass WCAG AA", "Add descriptive alt text to the hero image"]
  }
}
```

---

## Capacidades instaláveis {#installable-abilities}

O Registo de capacidades instaláveis permite-lhe estender o agente com pacotes de capacidades adicionais distribuídos como plugins WordPress. Cada pacote regista uma ou mais capacidades usando a API de capacidades padrão.

### `list_available_abilities` {#listavailableabilities}

Devolve o catálogo de pacotes de capacidades disponíveis para instalação a partir do registo.

**Parâmetros**

| Parâmetro | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| `category` | string | Não | Filtrar por categoria: `ecommerce`, `seo`, `media`, `social`, `developer` |

**Devolve**

```json
{
  "packs": [
    {
      "slug": "gratis-ai-agent-woocommerce",
      "name": "WooCommerce Abilities",
      "category": "ecommerce",
      "version": "1.0.0",
      "abilities": ["create_product", "update_pricing", "manage_inventory"],
      "installed": false
    }
  ]
}
```

---

### `install_ability` {#installability}

Transfere e ativa um pacote de capacidades a partir do registo.

**Parâmetros**

| Parâmetro | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| `slug` | string | Sim | Slug da extensão do pacote de capacidades |

**Devolve** `{ "success": true, "slug": "gratis-ai-agent-woocommerce", "abilities_added": 3 }`

---

### `recommend_plugin` {#recommendplugin}

Consulta o registo de capacidades para encontrar a melhor extensão para um caso de utilização descrito e, opcionalmente, instala-a.

**Parâmetros**

| Parâmetro | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| `description` | string | Sim | Descrição em linguagem natural da funcionalidade pretendida |
| `install` | boolean | Não | Se `true`, instala imediatamente a extensão recomendada. Predefinição `false` |

**Exemplo**

```json
{
  "description": "I need a contact form with file upload support and spam protection",
  "install": false
}
```

**Devolve**

```json
{
  "recommendation": {
    "slug": "contact-form-7",
    "name": "Contact Form 7",
    "reason": "Widely adopted, supports file uploads, and integrates with Akismet for spam filtering.",
    "alternatives": ["wpforms-lite", "fluent-forms"]
  }
}
```

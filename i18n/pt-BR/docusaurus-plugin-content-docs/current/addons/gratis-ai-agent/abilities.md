---
title: Referência de habilidades
sidebar_position: 2
_i18n_hash: 1a83460648ea789162af417c6b11eecc
---
# Referência de habilidades {#abilities-reference}

Habilidades são as ações atômicas que Gratis AI Agent pode invocar na sua instalação WordPress. Cada habilidade é uma classe PHP registrada que expõe um esquema JSON — o agente lê esse esquema em tempo de execução para entender quais parâmetros são necessários e o que a habilidade retorna.

Esta página documenta todas as habilidades incluídas no Gratis AI Agent v1.9.0.

---

## Tipos de post personalizados {#custom-post-types}

Estas habilidades gerenciam tipos de post personalizados (CPTs) registrados por meio do agente. Os registros são persistidos na tabela de opções do WordPress para que sobrevivam à desativação e reativação do plug-in.

### `register_post_type` {#registerposttype}

Registra um novo tipo de post personalizado.

**Parâmetros**

| Parâmetro | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| `slug` | string | Sim | A chave do tipo de post (máx. 20 caracteres, sem maiúsculas, sem espaços) |
| `singular_label` | string | Sim | Nome singular legível por humanos, ex.: `Portfolio Item` |
| `plural_label` | string | Sim | Nome plural legível por humanos, ex.: `Portfolio Items` |
| `public` | boolean | Não | Se o tipo de post é acessível publicamente. Padrão `true` |
| `supports` | array | Não | Recursos a oferecer suporte: `title`, `editor`, `thumbnail`, `excerpt`, `comments`, `revisions`, `custom-fields`. Padrão `["title","editor"]` |
| `has_archive` | boolean | Não | Se uma página de arquivo do tipo de post está habilitada. Padrão `false` |
| `menu_icon` | string | Não | Classe Dashicons ou URL para o ícone do menu administrativo. Padrão `"dashicons-admin-post"` |
| `rewrite_slug` | string | Não | Slug de URL para o tipo de post. O padrão é `slug` |

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

**Retorna** `{ "success": true, "slug": "portfolio" }`

---

### `list_post_types` {#listposttypes}

Retorna todos os tipos de post personalizados registrados pelo agente.

**Parâmetros** — nenhum

**Retorna**

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

Remove o registro de um tipo de post personalizado registrado anteriormente pelo agente. Posts existentes desse tipo permanecem no banco de dados, mas não ficam mais acessíveis por meio do tipo de post.

**Parâmetros**

| Parâmetro | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| `slug` | string | Sim | A chave do tipo de post a remover |

**Retorna** `{ "success": true, "slug": "portfolio" }`

---

## Taxonomias personalizadas {#custom-taxonomies}

Estas habilidades gerenciam taxonomias personalizadas. Assim como CPTs, os registros de taxonomia são persistidos.

### `register_taxonomy` {#registertaxonomy}

Registra uma nova taxonomia personalizada.

**Parâmetros**

| Parâmetro | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| `slug` | string | Sim | A chave da taxonomia (máx. 32 caracteres) |
| `singular_label` | string | Sim | Nome singular legível por humanos, ex.: `Project Category` |
| `plural_label` | string | Sim | Nome plural legível por humanos, ex.: `Project Categories` |
| `post_types` | array | Sim | Slugs de tipos de post aos quais esta taxonomia deve ser anexada |
| `hierarchical` | boolean | Não | `true` para estilo de categoria, `false` para estilo de tag. Padrão `true` |
| `public` | boolean | Não | Se os termos são acessíveis publicamente. Padrão `true` |
| `rewrite_slug` | string | Não | Slug de URL para a taxonomia. O padrão é `slug` |

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

**Retorna** `{ "success": true, "slug": "project-category" }`

---

### `list_taxonomies` {#listtaxonomies}

Retorna todas as taxonomias personalizadas registradas pelo agente.

**Parâmetros** — nenhum

**Retorna**

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

Remove o registro de uma taxonomia personalizada registrada anteriormente pelo agente.

**Parâmetros**

| Parâmetro | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| `slug` | string | Sim | A chave da taxonomia a remover |

**Retorna** `{ "success": true, "slug": "project-category" }`

---

## Sistema de design {#design-system}

As habilidades do sistema de design modificam a apresentação visual do site WordPress — de CSS personalizado a padrões de bloco e o logotipo do site.

### `inject_custom_css` {#injectcustomcss}

Acrescenta CSS ao `<head>` do site via `wp_add_inline_style`. O CSS é armazenado na opção `gratis_ai_agent_custom_css` e removido da fila de forma limpa quando a habilidade é redefinida.

**Parâmetros**

| Parâmetro | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| `css` | string | Sim | CSS válido a injetar |
| `label` | string | Não | Rótulo legível por humanos para este bloco de CSS, usado em logs de depuração. Padrão `"agent-injected"` |
| `replace` | boolean | Não | Se `true`, substitui todo o CSS injetado anteriormente. Padrão `false` (acrescenta) |

**Exemplo**

```json
{
  "css": ":root { --primary: #1a1a2e; --accent: #e94560; } body { font-family: 'Inter', sans-serif; }",
  "label": "brand-colours",
  "replace": false
}
```

**Retorna** `{ "success": true, "bytes": 96 }`

---

### `add_block_pattern` {#addblockpattern}

Registra um padrão de bloco reutilizável na biblioteca de padrões do WordPress.

**Parâmetros**

| Parâmetro | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| `slug` | string | Sim | Identificador do padrão, ex.: `gratis/hero-dark` |
| `title` | string | Sim | Nome do padrão legível por humanos mostrado no editor |
| `content` | string | Sim | Marcação de bloco serializada (HTML) para o padrão |
| `categories` | array | Não | Slugs de categorias de padrão, ex.: `["featured", "hero"]` |
| `description` | string | Não | Breve descrição mostrada no seletor de padrões |
| `keywords` | array | Não | Palavras-chave de busca |

**Retorna** `{ "success": true, "slug": "gratis/hero-dark" }`

---

### `list_block_patterns` {#listblockpatterns}

Lista todos os padrões de bloco registrados pelo agente.

**Parâmetros** — nenhum

**Retorna**

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

Define o logo do site WordPress como um ID de anexo fornecido ou uma URL de imagem remota. Quando uma URL é fornecida, a imagem é baixada e importada para a Biblioteca de Mídia.

**Parâmetros**

| Parâmetro | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| `attachment_id` | integer | Não | ID de um anexo existente da Biblioteca de Mídia |
| `url` | string | Não | URL de imagem remota a importar e definir como logo |

Um de `attachment_id` ou `url` deve ser fornecido.

**Retorna** `{ "success": true, "attachment_id": 42 }`

---

### `apply_theme_json_preset` {#applythemejsonpreset}

Aplica uma predefinição nomeada de cor/tipografia ao `theme.json` do tema ativo (ou `global-styles`). As predefinições são pacotes selecionados mantidos pela equipe do Gratis AI Agent.

**Parâmetros**

| Parâmetro | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| `preset` | string | Sim | Nome da predefinição, por exemplo, `minimal-dark`, `warm-editorial`, `corporate-blue` |
| `merge` | boolean | Não | Se `true`, mescla com os valores existentes em vez de substituir. Padrão `false` |

**Predefinições disponíveis**

| Predefinição | Descrição |
|---|---|
| `minimal-dark` | Fundo quase preto, texto branco, uma única cor de destaque |
| `warm-editorial` | Fundo branco quente, títulos com serifa, cores de destaque terrosas |
| `corporate-blue` | Paleta azul-marinho e branca com tipografia profissional |
| `vibrant-startup` | Gradientes vivos, cantos arredondados, tipo moderno sem serifa |
| `classic-blog` | Cinzas neutros, altura de linha confortável, espaçamento de layout tradicional |

**Retorna** `{ "success": true, "preset": "minimal-dark" }`

---

## Estilos globais {#global-styles}

As habilidades de Estilos globais leem e gravam valores de theme.json por meio da WordPress Global Styles API, afetando todos os blocos e modelos em todo o site.

### `get_global_styles` {#getglobalstyles}

Retorna a configuração atual de estilos globais.

**Parâmetros**

| Parâmetro | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| `path` | string | Não | Ponteiro JSON para um valor específico, por exemplo, `/color/palette` ou `/typography/fontSizes`. Retorna o objeto inteiro se omitido. |

**Retorna** o objeto completo de estilos globais ou o valor em `path`.

---

### `set_global_styles` {#setglobalstyles}

Atualiza um ou mais valores na configuração de estilos globais.

**Parâmetros**

| Parâmetro | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| `path` | string | Sim | Ponteiro JSON para o valor a definir, por exemplo, `/color/palette` |
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

**Retorna** `{ "success": true, "path": "/color/palette" }`

---

### `reset_global_styles` {#resetglobalstyles}

Redefine todas as alterações de estilos globais aplicadas pelo agente, restaurando os padrões do tema.

**Parâmetros** — nenhum

**Retorna** `{ "success": true }`

---

## Menus de navegação {#navigation-menus}

As habilidades de Menu de navegação criam e gerenciam menus de navegação do WordPress e seus itens.

### `create_menu` {#createmenu}

Cria um novo menu de navegação do WordPress.

**Parâmetros**

| Parâmetro | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| `name` | string | Sim | Nome do menu, por exemplo, `Primary Navigation` |
| `location` | string | Não | Localização do tema para atribuir este menu, por exemplo, `primary` |

**Retorna** `{ "success": true, "menu_id": 7 }`

---

### `update_menu` {#updatemenu}

Renomeia um menu ou o reatribui a uma localização do tema.

**Parâmetros**

| Parâmetro | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| `menu_id` | integer | Sim | ID do menu a atualizar |
| `name` | string | Não | Novo nome do menu |
| `location` | string | Não | Localização do tema a atribuir ou reatribuir |

**Retorna** `{ "success": true, "menu_id": 7 }`

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
| `object_id` | integer | Não | ID do post ou ID do termo para itens `post_type`/`taxonomy` |
| `parent_id` | integer | Não | ID do item de menu sob o qual aninhar este item |
| `position` | integer | Não | Posição baseada em zero no menu |

**Retorna** `{ "success": true, "item_id": 12 }`

---

### `remove_menu_item` {#removemenuitem}

Remove um item de um menu de navegação.

**Parâmetros**

| Parâmetro | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| `item_id` | integer | Sim | ID do item de menu a remover |

**Retorna** `{ "success": true, "item_id": 12 }`

---

### `list_menus` {#listmenus}

Lista todos os menus de navegação do WordPress, incluindo suas localizações de tema atribuídas.

**Parâmetros** — nenhum

**Retorna**

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

## Gerenciamento de opções {#options-management}

As habilidades de opções leem e gravam opções do WordPress via `get_option` / `update_option`. Uma lista de bloqueio de segurança integrada impede a modificação acidental de configurações críticas.

### `get_option` {#getoption}

Lê uma opção do WordPress.

**Parâmetros**

| Parâmetro | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| `option_name` | string | Sim | A chave da opção, por exemplo, `blogname` |

**Retorna** `{ "option_name": "blogname", "value": "My Site" }`

Retorna um erro se `option_name` estiver na lista de bloqueio de segurança.

---

### `set_option` {#setoption}

Grava uma opção do WordPress.

**Parâmetros**

| Parâmetro | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| `option_name` | string | Sim | A chave da opção |
| `value` | any | Sim | O novo valor (serializado automaticamente para arrays/objetos) |
| `autoload` | string | Não | `"yes"` ou `"no"`. O padrão preserva a configuração de autoload existente |

Retorna um erro se `option_name` estiver na lista de bloqueio de segurança.

**Retorna** `{ "success": true, "option_name": "blogname" }`

---

### `delete_option` {#deleteoption}

Exclui uma opção do WordPress.

**Parâmetros**

| Parâmetro | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| `option_name` | string | Sim | A chave da opção a ser excluída |

Retorna um erro se `option_name` estiver na lista de bloqueio de segurança.

**Retorna** `{ "success": true, "option_name": "my_custom_option" }`

---

### `list_options` {#listoptions}

Lista opções do WordPress que correspondem a um padrão.

**Parâmetros**

| Parâmetro | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| `pattern` | string | Não | Padrão SQL LIKE para filtrar nomes de opções, por exemplo, `gratis_%`. Retorna todas as opções se omitido (use com cautela em bancos de dados grandes). |
| `limit` | integer | Não | Número máximo de resultados. Padrão `50`, máximo `500` |

**Retorna**

```json
{
  "options": [
    { "option_name": "gratis_ai_agent_version", "autoload": "yes" }
  ],
  "total": 1
}
```

---

## Gerenciamento de conteúdo {#content-management}

Os recursos de Gerenciamento de conteúdo criam e editam publicações e páginas do WordPress. IDs de publicações são retornados para que etapas subsequentes em planos com múltiplos recursos possam referenciar o conteúdo criado.

### `create_post` {#createpost}

Cria uma nova publicação, página ou entrada de tipo de publicação personalizada do WordPress.

**Parâmetros**

| Parâmetro | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| `title` | string | Sim | Título da publicação |
| `content` | string | Não | Corpo da publicação — aceita texto simples, HTML ou marcação de bloco serializada |
| `status` | string | Não | `draft`, `publish`, `pending`, `private`. Padrão `draft` |
| `post_type` | string | Não | Slug do tipo de publicação, por exemplo, `post`, `page` ou qualquer CPT registrado. Padrão `post` |
| `excerpt` | string | Não | Resumo curto exibido em arquivos e resultados de busca |
| `categories` | array | Não | Array de nomes ou IDs de categorias a atribuir |
| `tags` | array | Não | Array de nomes ou IDs de tags a atribuir |
| `author` | integer | Não | ID de usuário do WordPress a definir como autor da publicação. O padrão é o usuário atual |
| `date` | string | Não | Data de publicação em formato ISO 8601, por exemplo, `2026-05-01T09:00:00` |
| `page_template` | string | Não | Arquivo de template a atribuir a esta publicação ou página, por exemplo, `page-full-width.php`. Só faz sentido quando `post_type` é `page` ou um CPT que oferece suporte a templates de página. |

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

**Retorna** `{ "success": true, "post_id": 42, "permalink": "https://example.com/welcome/" }`

---

### `update_post` {#updatepost}

Atualiza uma publicação ou página existente do WordPress.

**Parâmetros**

| Parâmetro | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| `post_id` | integer | Sim | ID da publicação a atualizar |
| `title` | string | Não | Novo título da publicação |
| `content` | string | Não | Novo corpo da publicação |
| `status` | string | Não | Novo status: `draft`, `publish`, `pending`, `private` |
| `excerpt` | string | Não | Novo resumo |
| `categories` | array | Não | Substitui a lista completa de categorias por este array de nomes ou IDs |
| `tags` | array | Não | Substitui a lista completa de tags por este array de nomes ou IDs |
| `page_template` | string | Não | Novo arquivo de template a atribuir a esta publicação ou página, por exemplo, `page-full-width.php`. Passe uma string vazia para remover a atribuição de template e reverter para o padrão do tema. |

**Exemplo** — alterar o template após a criação

```json
{
  "post_id": 42,
  "page_template": "page-full-width.php"
}
```

**Retorna** `{ "success": true, "post_id": 42 }`

---

### `batch_create_posts` {#batchcreateposts}

Cria várias publicações em uma única chamada de recurso, reduzindo idas e vindas durante criações de sites ou importação de conteúdo em massa. As publicações são criadas em sequência; se uma falhar, as outras continuam e a falha é relatada no array de resultados.

**Parâmetros**

| Parâmetro | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| `posts` | array | Sim | Array de objetos de publicação, cada um aceitando os mesmos parâmetros que `create_post` |
| `stop_on_error` | boolean | Não | Se `true`, interrompe o processamento após a primeira falha. Padrão `false` |

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

**Retorna**

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

Atribui uma imagem destacada (miniatura da publicação) a uma publicação ou página existente. Aceita um ID de anexo existente da Biblioteca de mídia ou uma URL de imagem remota; quando uma URL é fornecida, a imagem é baixada e importada automaticamente.

**Parâmetros**

| Parâmetro | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| `post_id` | integer | Sim | ID da publicação ou página a atualizar |
| `attachment_id` | integer | Não | ID de um anexo existente da Biblioteca de mídia |
| `url` | string | Não | URL de imagem remota para importar e definir como imagem destacada |
| `alt_text` | string | Não | Texto alternativo a aplicar ao anexo se ele for importado de uma URL |

Um de `attachment_id` ou `url` deve ser fornecido.

**Retorna** `{ "success": true, "post_id": 42, "attachment_id": 17 }`

---

### `create_contact_form` {#createcontactform}

Cria um formulário de contato usando o plugin de formulário ativo (Contact Form 7, WPForms, Fluent Forms ou Gravity Forms, dependendo de qual está instalado). Retorna um shortcode que pode ser incorporado em qualquer publicação ou página.

**Parâmetros**

| Parâmetro | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| `title` | string | Sim | Nome do formulário mostrado no admin do plugin de formulário |
| `fields` | array | Sim | Lista ordenada de campos do formulário (veja o objeto Campo abaixo) |
| `recipient` | string | Não | Endereço de email para receber envios. O padrão é o email do admin do WordPress |
| `subject` | string | Não | Linha de assunto do email. Suporta os placeholders `[your-name]` e `[your-subject]` ao usar Contact Form 7 |
| `confirmation_message` | string | Não | Mensagem exibida após um envio bem-sucedido. Padrão: `"Thank you for your message. We'll be in touch soon."` |

**Objeto Campo**

| Chave | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| `name` | string | Sim | Nome interno do campo / chave de máquina |
| `label` | string | Sim | Rótulo legível por humanos mostrado no formulário |
| `type` | string | Sim | `text`, `email`, `tel`, `textarea`, `select`, `checkbox`, `radio`, `file`, `date` |
| `required` | boolean | Não | Se o campo deve ser preenchido antes do envio. Padrão `false` |
| `options` | array | Não | Opções para campos `select`, `checkbox` e `radio` |
| `placeholder` | string | Não | Texto de placeholder para entradas do tipo texto |

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

**Retorna**

```json
{
  "success": true,
  "form_id": 3,
  "shortcode": "[contact-form-7 id=\"3\" title=\"Restaurant Booking Enquiry\"]"
}
```

---

## Revisão Visual {#visual-review}

Os recursos de Revisão Visual permitem que o agente capture screenshots de páginas ao vivo e as analise, possibilitando revisão de design autônoma, comparações de antes/depois e verificações de regressão visual sem exigir qualquer extensão de navegador.

### `capture_screenshot` {#capturescreenshot}

Captura uma screenshot de uma página do WordPress em uma determinada URL usando um navegador headless no lado do servidor. A imagem é salva na Biblioteca de Mídia e uma URL de CDN é retornada.

**Parâmetros**

| Parâmetro | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| `url` | string | Sim | URL completa da página para capturar a screenshot, por exemplo, `https://example.com/about/` |
| `width` | integer | Não | Largura da viewport em pixels. Padrão `1280` |
| `height` | integer | Não | Altura da viewport em pixels. Padrão `800` |
| `full_page` | boolean | Não | Capturar a página rolável completa em vez de apenas a viewport. Padrão `false` |
| `delay_ms` | integer | Não | Milissegundos a aguardar após o carregamento da página antes de capturar, útil para conteúdo animado. Padrão `500` |
| `label` | string | Não | Rótulo legível por humanos armazenado com o anexo na Biblioteca de Mídia |

**Retorna**

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

Recebe duas screenshots e retorna uma pontuação de diferença visual, além de uma imagem de diferença destacando as regiões alteradas. Útil para confirmar que uma alteração de design produziu o resultado esperado ou para detectar regressões indesejadas.

**Parâmetros**

| Parâmetro | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| `before_url` | string | Sim | URL da página a capturar como o estado "antes" |
| `after_url` | string | Sim | URL da página a capturar como o estado "depois". Pode ser a mesma URL se estiver comparando ao longo do tempo |
| `width` | integer | Não | Largura da viewport para ambas as capturas. Padrão `1280` |
| `threshold` | float | Não | Limite de diferença de pixels (0.0–1.0). Pixels dentro dessa tolerância são considerados inalterados. Padrão `0.1` |

**Retorna**

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

Um `diff_score` de `0.0` significa nenhuma alteração visível; `1.0` significa que todos os pixels mudaram.

---

### `review_page_design` {#reviewpagedesign}

Captura uma screenshot de uma página e a envia ao modelo de linguagem para análise visual. Retorna uma avaliação estruturada cobrindo layout, tipografia, uso de cores e preocupações de acessibilidade.

**Parâmetros**

| Parâmetro | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| `url` | string | Sim | URL completa da página a revisar |
| `focus` | string | Não | Lista separada por vírgulas de áreas de revisão a enfatizar: `layout`, `typography`, `colour`, `accessibility`, `mobile`. Padrão: todas as áreas |
| `width` | integer | Não | Largura da viewport. Padrão `1280` |

**Retorna**

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

## Recursos Instaláveis {#installable-abilities}

O Registro de Recursos Instaláveis permite estender o agente com pacotes de recursos adicionais distribuídos como plugins do WordPress. Cada pacote registra um ou mais recursos usando a API de recursos padrão.

### `list_available_abilities` {#listavailableabilities}

Retorna o catálogo de pacotes de recursos disponíveis para instalação a partir do registro.

**Parâmetros**

| Parâmetro | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| `category` | string | Não | Filtrar por categoria: `ecommerce`, `seo`, `media`, `social`, `developer` |

**Retorna**

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

Baixa e ativa um pacote de habilidades a partir do registro.

**Parâmetros**

| Parâmetro | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| `slug` | string | Sim | Slug da extensão do pacote de habilidades |

**Retorna** `{ "success": true, "slug": "gratis-ai-agent-woocommerce", "abilities_added": 3 }`

---

### `recommend_plugin` {#recommendplugin}

Consulta o registro de habilidades para encontrar a melhor extensão para um caso de uso descrito e, opcionalmente, instalá-la.

**Parâmetros**

| Parâmetro | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| `description` | string | Sim | Descrição em linguagem natural da funcionalidade desejada |
| `install` | boolean | Não | Se `true`, instala a extensão recomendada imediatamente. O padrão é `false` |

**Exemplo**

```json
{
  "description": "I need a contact form with file upload support and spam protection",
  "install": false
}
```

**Retorna**

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

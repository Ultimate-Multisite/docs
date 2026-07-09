---
title: Fanondroana ny fahaiza-manao
sidebar_position: 2
_i18n_hash: 1a83460648ea789162af417c6b11eecc
---
# Fanondroana Abilities {#abilities-reference}

Ny Abilities dia asa fototra azon'ny Gratis AI Agent antsoina ao amin'ny fametrahana WordPress anao. Ny ability tsirairay dia kilasy PHP voasoratra anarana izay mampiseho JSON schema — mamaky ity schema ity amin'ny runtime ny agent mba hahatakatra izay parameters ilaina sy izay averin'ilay ability.

Ity pejy ity dia manoratra ny abilities rehetra miaraka amin'ny Gratis AI Agent v1.9.0.

---

## Karazana Lahatsoratra Manokana {#custom-post-types}

Ireo abilities ireo dia mitantana karazana lahatsoratra manokana (CPTs) voasoratra anarana amin'ny alalan'ny agent. Tehirizina ao amin'ny tabilao safidy WordPress ny fisoratana anarana ka mitoetra na dia esorina sy averina ampandehanana aza ny plugin.

### `register_post_type` {#registerposttype}

Manoratra anarana karazana lahatsoratra manokana vaovao.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | Ny lakilen'ny karazana lahatsoratra (farafahabetsany 20 tarehintsoratra, tsy misy litera lehibe, tsy misy elanelana) |
| `singular_label` | string | Yes | Anarana tokana mora vakin'olombelona, oh. `Portfolio Item` |
| `plural_label` | string | Yes | Anarana maro mora vakin'olombelona, oh. `Portfolio Items` |
| `public` | boolean | No | Raha azo idiran'ny besinimaro ilay karazana lahatsoratra. Default `true` |
| `supports` | array | No | Endri-javatra tohanana: `title`, `editor`, `thumbnail`, `excerpt`, `comments`, `revisions`, `custom-fields`. Default `["title","editor"]` |
| `has_archive` | boolean | No | Raha alefa ny pejy tahiry ho an'ny karazana lahatsoratra. Default `false` |
| `menu_icon` | string | No | Kilasy Dashicons na URL ho an'ny kisary menu admin. Default `"dashicons-admin-post"` |
| `rewrite_slug` | string | No | URL slug ho an'ny karazana lahatsoratra. Mivadika ho `slug` raha tsy voafaritra |

**Ohatra**

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

**Mamerina** `{ "success": true, "slug": "portfolio" }`

---

### `list_post_types` {#listposttypes}

Mamerina ny karazana lahatsoratra manokana rehetra nosoratan'ny agent anarana.

**Parameters** — tsy misy

**Mamerina**

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

Manafoana ny fisoratana anarana karazana lahatsoratra manokana efa nosoratan'ny agent anarana teo aloha. Mijanona ao amin'ny database ny lahatsoratra efa misy amin'io karazana io, saingy tsy azo idirana intsony amin'ny alalan'ilay karazana lahatsoratra.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | Ny lakilen'ny karazana lahatsoratra esorina |

**Mamerina** `{ "success": true, "slug": "portfolio" }`

---

## Taxonomies Manokana {#custom-taxonomies}

Ireo abilities ireo dia mitantana taxonomies manokana. Toy ny CPTs, tehirizina ny fisoratana anarana taxonomy.

### `register_taxonomy` {#registertaxonomy}

Manoratra anarana taxonomy manokana vaovao.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | Ny lakilen'ny taxonomy (farafahabetsany 32 tarehintsoratra) |
| `singular_label` | string | Yes | Anarana tokana mora vakin'olombelona, oh. `Project Category` |
| `plural_label` | string | Yes | Anarana maro mora vakin'olombelona, oh. `Project Categories` |
| `post_types` | array | Yes | Slug-n'ny karazana lahatsoratra tokony hampifandraisana ity taxonomy ity |
| `hierarchical` | boolean | No | `true` ho an'ny endrika sokajy, `false` ho an'ny endrika tag. Default `true` |
| `public` | boolean | No | Raha azo idiran'ny besinimaro ny terms. Default `true` |
| `rewrite_slug` | string | No | URL slug ho an'ny taxonomy. Mivadika ho `slug` raha tsy voafaritra |

**Ohatra**

```json
{
  "slug": "project-category",
  "singular_label": "Project Category",
  "plural_label": "Project Categories",
  "post_types": ["portfolio"],
  "hierarchical": true
}
```

**Mamerina** `{ "success": true, "slug": "project-category" }`

---

### `list_taxonomies` {#listtaxonomies}

Mamerina ny taxonomies manokana rehetra nosoratan'ny agent anarana.

**Parameters** — tsy misy

**Mamerina**

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

Manafoana ny fisoratana anarana taxonomy manokana efa nosoratan'ny agent anarana teo aloha.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | Ny lakilen'ny taxonomy esorina |

**Mamerina** `{ "success": true, "slug": "project-category" }`

---

## Rafitra Famolavolana {#design-system}

Ny abilities an'ny rafitra famolavolana dia manova ny fanehoana hita maso ny site WordPress — manomboka amin'ny CSS manokana ka hatramin'ny block patterns sy ny logo-n'ny site.

### `inject_custom_css` {#injectcustomcss}

Manampy CSS ao amin'ny `<head>` an'ny site amin'ny alalan'ny `wp_add_inline_style`. Tehirizina ao amin'ny safidy `gratis_ai_agent_custom_css` ny CSS ary esorina amin'ny fomba madio rehefa averina amin'ny voalohany ilay ability.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `css` | string | Yes | CSS manan-kery ampidirina |
| `label` | string | No | Marika mora vakin'olombelona ho an'ity block CSS ity, ampiasaina amin'ny debug logs. Default `"agent-injected"` |
| `replace` | boolean | No | Raha `true`, manolo ny CSS nampidirina rehetra teo aloha. Default `false` (manampy amin'ny farany) |

**Ohatra**

```json
{
  "css": ":root { --primary: #1a1a2e; --accent: #e94560; } body { font-family: 'Inter', sans-serif; }",
  "label": "brand-colours",
  "replace": false
}
```

**Mamerina** `{ "success": true, "bytes": 96 }`

---

### `add_block_pattern` {#addblockpattern}

Manoratra anarana block pattern azo ampiasaina indray ao amin'ny tranombokin'ny pattern WordPress.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | Famantarana pattern, oh. `gratis/hero-dark` |
| `title` | string | Yes | Anaran'ny pattern mora vakin'olombelona aseho ao amin'ny editor |
| `content` | string | Yes | Markup block voasérialiser (HTML) ho an'ny pattern |
| `categories` | array | No | Slug-n'ny sokajy pattern, oh. `["featured", "hero"]` |
| `description` | string | No | Famaritana fohy aseho ao amin'ny mpifidy pattern |
| `keywords` | array | No | Teny fototra fikarohana |

**Mamerina** `{ "success": true, "slug": "gratis/hero-dark" }`

---

### `list_block_patterns` {#listblockpatterns}

Mitanisa ny block patterns rehetra nosoratan'ny agent anarana.

**Parameters** — tsy misy

**Mamerina**

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

Mametraka ny logo an'ny tranonkala WordPress ho attachment ID nomena na URL sary lavitra. Rehefa URL no omena dia alaina ilay sary ary ampidirina ao amin'ny Media Library.

**Masontsivana**

| Masontsivana | Karazana | Takiana | Famaritana |
|---|---|---|---|
| `attachment_id` | integer | Tsia | ID an'ny attachment Media Library efa misy |
| `url` | string | Tsia | URL sary lavitra hafarana sy hapetraka ho logo |

Tsy maintsy omena ny iray amin'ny `attachment_id` na `url`.

**Mamerina** `{ "success": true, "attachment_id": 42 }`

---

### `apply_theme_json_preset` {#applythemejsonpreset}

Mampihatra preset loko/typography voatonona amin'ny `theme.json` (na `global-styles`) an'ny theme mavitrika. Ny preset dia fonosana voafantina tantanin'ny ekipan'ny Gratis AI Agent.

**Masontsivana**

| Masontsivana | Karazana | Takiana | Famaritana |
|---|---|---|---|
| `preset` | string | Eny | Anaran'ny preset, oh. `minimal-dark`, `warm-editorial`, `corporate-blue` |
| `merge` | boolean | Tsia | Raha `true`, atambaro amin'ny sanda efa misy fa tsy soloina. Default `false` |

**Preset misy**

| Preset | Famaritana |
|---|---|
| `minimal-dark` | Lafika saika mainty, lahatsoratra fotsy, loko accent tokana |
| `warm-editorial` | Lafika fotsy malefaka mafana, lohateny serif, loko accent manakaiky ny natiora |
| `corporate-blue` | Palette manga navy sy fotsy miaraka amin'ny typography matihanina |
| `vibrant-startup` | Gradients mamirapiratra, zorony boribory, karazana sans-serif maoderina |
| `classic-blog` | Volondavenona neutral, line-height mampahazo aina, elanelana layout nentim-paharazana |

**Mamerina** `{ "success": true, "preset": "minimal-dark" }`

---

## Global Styles {#global-styles}

Ny fahaizan'ny Global Styles dia mamaky sy manoratra sanda theme.json amin'ny alalan'ny WordPress Global Styles API, ka misy fiantraikany amin'ny blocks sy templates rehetra manerana ny tranonkala.

### `get_global_styles` {#getglobalstyles}

Mamerina ny fikirakirana global styles amin'izao fotoana izao.

**Masontsivana**

| Masontsivana | Karazana | Takiana | Famaritana |
|---|---|---|---|
| `path` | string | Tsia | JSON pointer mankany amin'ny sanda manokana, oh. `/color/palette` na `/typography/fontSizes`. Mamerina ny object manontolo raha tsy omena. |

**Mamerina** ny object global styles feno na ny sanda ao amin'ny `path`.

---

### `set_global_styles` {#setglobalstyles}

Manavao sanda iray na maromaro ao amin'ny fikirakirana global styles.

**Masontsivana**

| Masontsivana | Karazana | Takiana | Famaritana |
|---|---|---|---|
| `path` | string | Eny | JSON pointer mankany amin'ny sanda hapetraka, oh. `/color/palette` |
| `value` | any | Eny | Ny sanda vaovao |

**Ohatra** — manampy loko amin'ny palette

```json
{
  "path": "/color/palette",
  "value": [
    { "slug": "primary", "color": "#1a1a2e", "name": "Primary" },
    { "slug": "accent",  "color": "#e94560", "name": "Accent" }
  ]
}
```

**Mamerina** `{ "success": true, "path": "/color/palette" }`

---

### `reset_global_styles` {#resetglobalstyles}

Mamerina amin'ny voalohany ny fanovana global styles rehetra nampiharin'ny agent, ka mamerina ny default an'ny theme.

**Masontsivana** — tsy misy

**Mamerina** `{ "success": true }`

---

## Menio Fivezivezena {#navigation-menus}

Ny fahaizan'ny Menio Fivezivezena dia mamorona sy mitantana menio nav WordPress sy ny item ao anatiny.

### `create_menu` {#createmenu}

Mamorona menio fivezivezena WordPress vaovao.

**Masontsivana**

| Masontsivana | Karazana | Takiana | Famaritana |
|---|---|---|---|
| `name` | string | Eny | Anaran'ny menio, oh. `Primary Navigation` |
| `location` | string | Tsia | Toerana theme hanendrena ity menio ity, oh. `primary` |

**Mamerina** `{ "success": true, "menu_id": 7 }`

---

### `update_menu` {#updatemenu}

Manova anaran'ny menio na manendry azy indray amin'ny toerana theme.

**Masontsivana**

| Masontsivana | Karazana | Takiana | Famaritana |
|---|---|---|---|
| `menu_id` | integer | Eny | ID an'ny menio havaozina |
| `name` | string | Tsia | Anaran'ny menio vaovao |
| `location` | string | Tsia | Toerana theme hanendrena na hanendrena indray |

**Mamerina** `{ "success": true, "menu_id": 7 }`

---

### `add_menu_item` {#addmenuitem}

Manampy item amin'ny menio fivezivezena efa misy.

**Masontsivana**

| Masontsivana | Karazana | Takiana | Famaritana |
|---|---|---|---|
| `menu_id` | integer | Eny | ID an'ny menio kendrena |
| `type` | string | Eny | Karazana item: `custom`, `post_type`, na `taxonomy` |
| `title` | string | Tsia | Marika ho an'ny item menio (takiana ho an'ny karazana `custom`) |
| `url` | string | Tsia | URL ho an'ny item `custom` |
| `object_id` | integer | Tsia | Post ID na term ID ho an'ny item `post_type`/`taxonomy` |
| `parent_id` | integer | Tsia | ID an'ny item menio hametrahana ity item ity ao ambaniny |
| `position` | integer | Tsia | Toerana manomboka amin'ny aotra ao amin'ny menio |

**Mamerina** `{ "success": true, "item_id": 12 }`

---

### `remove_menu_item` {#removemenuitem}

Manala item iray amin'ny menio fivezivezena.

**Masontsivana**

| Masontsivana | Karazana | Takiana | Famaritana |
|---|---|---|---|
| `item_id` | integer | Eny | ID an'ny item menio hesorina |

**Mamerina** `{ "success": true, "item_id": 12 }`

---

### `list_menus` {#listmenus}

Mitanisa ny menio fivezivezena WordPress rehetra, anisan'izany ny toerana theme nanendrena azy.

**Masontsivana** — tsy misy

**Mamerina**

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

## Fitantanana Options {#options-management}

Ny fahaizan'ny Options dia mamaky sy manoratra options WordPress amin'ny alalan'ny `get_option` / `update_option`. Blocklist fiarovana efa ao anatiny no misoroka fanovana tsy nahy amin'ny fikirana manan-danja.

### `get_option` {#getoption}

Mamaky option WordPress iray.

**Masontsivana**

| Masontsivana | Karazana | Takiana | Famaritana |
|---|---|---|---|
| `option_name` | string | Eny | Ny key an'ny option, oh. `blogname` |

**Mamerina** `{ "option_name": "blogname", "value": "My Site" }`

Mamerina hadisoana raha ao amin'ny blocklist fiarovana ny `option_name`.

---

### `set_option` {#setoption}

Manoratra option WordPress iray.

**Masontsivana**

| Masontsivana | Karazana | Takiana | Famaritana |
|---|---|---|---|
| `option_name` | string | Eny | Ny key an'ny option |
| `value` | any | Eny | Ny sanda vaovao (atao serialised ho azy ho an'ny arrays/objects) |
| `autoload` | string | Tsia | `"yes"` na `"no"`. Ny default dia mitahiry ny fikirana autoload efa misy |

Mamerina hadisoana raha ao amin'ny safety blocklist ny `option_name`.

**Mamerina** `{ "success": true, "option_name": "blogname" }`

---

### `delete_option` {#deleteoption}

Mamafa option WordPress iray.

**Masontsivana**

| Masontsivana | Karazana | Takiana | Famaritana |
|---|---|---|---|
| `option_name` | string | Eny | Ny lakilen'ny option hofafana |

Mamerina hadisoana raha ao amin'ny safety blocklist ny `option_name`.

**Mamerina** `{ "success": true, "option_name": "my_custom_option" }`

---

### `list_options` {#listoptions}

Mitanisa options WordPress mifanaraka amin'ny lamina iray.

**Masontsivana**

| Masontsivana | Karazana | Takiana | Famaritana |
|---|---|---|---|
| `pattern` | string | Tsia | Lamina SQL LIKE hanivanana ny anaran'ny option, ohatra `gratis_%`. Mamerina ny options rehetra raha tsy omena (ampiasao amim-pitandremana amin'ny tahiry angona lehibe). |
| `limit` | integer | Tsia | Isan'ny vokatra ambony indrindra. Default `50`, ambony indrindra `500` |

**Mamerina**

```json
{
  "options": [
    { "option_name": "gratis_ai_agent_version", "autoload": "yes" }
  ],
  "total": 1
}
```

---

## Fitantanana Votoaty {#content-management}

Ny fahaiza-manao Fitantanana Votoaty dia mamorona sy manitsy lahatsoratra sy pejy WordPress. Averina ny ID-n'ny lahatsoratra mba hahafahan'ny dingana manaraka ao amin'ny drafitra misy fahaiza-manao maro manondro ilay votoaty noforonina.

### `create_post` {#createpost}

Mamorona lahatsoratra WordPress vaovao, pejy, na fidirana karazana lahatsoratra manokana.

**Masontsivana**

| Masontsivana | Karazana | Takiana | Famaritana |
|---|---|---|---|
| `title` | string | Eny | Lohatenin'ny lahatsoratra |
| `content` | string | Tsia | Vatan'ny lahatsoratra — manaiky lahatsoratra tsotra, HTML, na block markup voaserialise |
| `status` | string | Tsia | `draft`, `publish`, `pending`, `private`. Default `draft` |
| `post_type` | string | Tsia | Slug-n'ny karazana lahatsoratra, ohatra `post`, `page`, na CPT voasoratra anarana. Default `post` |
| `excerpt` | string | Tsia | Famintinana fohy aseho ao amin'ny arisiva sy valin'ny fikarohana |
| `categories` | array | Tsia | Array misy anaran-tsokajy na ID hatokana |
| `tags` | array | Tsia | Array misy anaran'ny tag na ID hatokana |
| `author` | integer | Tsia | ID-n'ny mpampiasa WordPress hapetraka ho mpanoratra ny lahatsoratra. Default dia ny mpampiasa ankehitriny |
| `date` | string | Tsia | Daty famoahana amin'ny endrika ISO 8601, ohatra `2026-05-01T09:00:00` |
| `page_template` | string | Tsia | Rakitra template hatokana amin'ity lahatsoratra na pejy ity, ohatra `page-full-width.php`. Manan-danja ihany rehefa `post_type` dia `page` na CPT manohana template pejy. |

**Ohatra**

```json
{
  "title": "Welcome to Our New Site",
  "content": "<!-- wp:paragraph --><p>Hello world!</p><!-- /wp:paragraph -->",
  "status": "publish",
  "post_type": "page",
  "page_template": "page-full-width.php"
}
```

**Mamerina** `{ "success": true, "post_id": 42, "permalink": "https://example.com/welcome/" }`

---

### `update_post` {#updatepost}

Manavao lahatsoratra na pejy WordPress efa misy.

**Masontsivana**

| Masontsivana | Karazana | Takiana | Famaritana |
|---|---|---|---|
| `post_id` | integer | Eny | ID-n'ny lahatsoratra havaozina |
| `title` | string | Tsia | Lohatenin'ny lahatsoratra vaovao |
| `content` | string | Tsia | Vatan'ny lahatsoratra vaovao |
| `status` | string | Tsia | Sata vaovao: `draft`, `publish`, `pending`, `private` |
| `excerpt` | string | Tsia | Excerpt vaovao |
| `categories` | array | Tsia | Soloy amin'ity array misy anarana na ID ity ny lisitry ny sokajy manontolo |
| `tags` | array | Tsia | Soloy amin'ity array misy anarana na ID ity ny lisitry ny tag manontolo |
| `page_template` | string | Tsia | Rakitra template vaovao hatokana amin'ity lahatsoratra na pejy ity, ohatra `page-full-width.php`. Alefaso string banga hanesorana ny fanendrena template ary hiverenana amin'ny default-n'ny theme. |

**Ohatra** — ovay ny template aorian'ny famoronana

```json
{
  "post_id": 42,
  "page_template": "page-full-width.php"
}
```

**Mamerina** `{ "success": true, "post_id": 42 }`

---

### `batch_create_posts` {#batchcreateposts}

Mamorona lahatsoratra maro ao anatin'ny antso fahaiza-manao tokana, mampihena ny fifanakalozana mandritra ny fananganana tranonkala na fanafarana votoaty betsaka. Foronina misesy ny lahatsoratra; raha tsy mahomby ny iray dia mitohy ny hafa ary taterina ao amin'ny array valiny ilay tsy fahombiazana.

**Masontsivana**

| Masontsivana | Karazana | Takiana | Famaritana |
|---|---|---|---|
| `posts` | array | Eny | Array misy zavatra lahatsoratra, izay samy manaiky ireo masontsivana mitovy amin'ny `create_post` |
| `stop_on_error` | boolean | Tsia | Raha `true`, ajanony ny fanodinana aorian'ny tsy fahombiazana voalohany. Default `false` |

**Ohatra**

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

**Mamerina**

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

Manendry sary asongadina (thumbnail-n'ny lahatsoratra) amin'ny lahatsoratra na pejy efa misy. Manaiky ID-n'ny attachment efa misy ao amin'ny Media Library na URL sary lavitra; rehefa URL no omena, dia alaina sy ampidirina ho azy ilay sary.

**Masontsivana**

| Masontsivana | Karazana | Takiana | Famaritana |
|---|---|---|---|
| `post_id` | integer | Eny | ID-n'ny lahatsoratra na pejy havaozina |
| `attachment_id` | integer | Tsia | ID-n'ny attachment efa misy ao amin'ny Media Library |
| `url` | string | Tsia | URL sary lavitra hafarana sy hapetraka ho sary asongadina |
| `alt_text` | string | Tsia | Lahatsoratra alt hampiharina amin'ny attachment raha hafarana avy amin'ny URL izany |

Tsy maintsy omena ny iray amin'ny `attachment_id` na `url`.

**Mamerina** `{ "success": true, "post_id": 42, "attachment_id": 17 }`

---

### `create_contact_form` {#createcontactform}

Mamorona contact form amin'ny alalan'ny plugin form mavitrika (Contact Form 7, WPForms, Fluent Forms, na Gravity Forms, arakaraka izay napetraka). Mamerina shortcode azo ampidirina ao amin'izay lahatsoratra na pejy rehetra.

**Masontsivana**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `title` | string | Yes | Anaran'ny endrika aseho ao amin'ny admin an'ny plugin endrika |
| `fields` | array | Yes | Lisitra voalamina amin'ny saha endrika (jereo ny zavatra Field etsy ambany) |
| `recipient` | string | No | Adiresy email handray fandefasana. Miverina ho azy amin'ny email admin an'ny WordPress |
| `subject` | string | No | Andalana lohahevitra email. Manohana placeholder `[your-name]` sy `[your-subject]` rehefa mampiasa Contact Form 7 |
| `confirmation_message` | string | No | Hafatra aseho aorian'ny fandefasana nahomby. Default: `"Thank you for your message. We'll be in touch soon."` |

**Zavatra Field**

| Key | Type | Required | Description |
|---|---|---|---|
| `name` | string | Yes | Anaran-tsaha anatiny / lakilen'ny milina |
| `label` | string | Yes | Label mora vakin'olombelona aseho amin'ny endrika |
| `type` | string | Yes | `text`, `email`, `tel`, `textarea`, `select`, `checkbox`, `radio`, `file`, `date` |
| `required` | boolean | No | Raha tsy maintsy fenoina ny saha alohan'ny fandefasana. Default `false` |
| `options` | array | No | Safidy ho an'ny saha `select`, `checkbox`, ary `radio` |
| `placeholder` | string | No | Lahatsoratra placeholder ho an'ny fampidirana karazana lahatsoratra |

**Ohatra**

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

**Mamerina**

```json
{
  "success": true,
  "form_id": 3,
  "shortcode": "[contact-form-7 id=\"3\" title=\"Restaurant Booking Enquiry\"]"
}
```

---

## Fanamarinana ara-pijery {#visual-review}

Ny fahaizan'ny Fanamarinana ara-pijery dia mamela ny agent haka screenshots amin'ny pejy mivantana sy hamakafaka azy ireo, ahafahana manao fanamarinana famolavolana mahaleo tena, fampitahana taloha/aoriana, ary fanamarinana visual regression tsy mila browser extension.

### `capture_screenshot` {#capturescreenshot}

Maka screenshot amin'ny pejy WordPress amin'ny URL nomena amin'ny alalan'ny browser headless eo amin'ny server. Tehirizina ao amin'ny Media Library ny sary ary averina ny URL CDN.

**Paramètre**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `url` | string | Yes | URL feno amin'ny pejy hakana screenshot, ohatra `https://example.com/about/` |
| `width` | integer | No | Sakan'ny viewport amin'ny pixel. Default `1280` |
| `height` | integer | No | Haavon'ny viewport amin'ny pixel. Default `800` |
| `full_page` | boolean | No | Maka ny pejy manontolo azo ahodina fa tsy ny viewport fotsiny. Default `false` |
| `delay_ms` | integer | No | Milisecond hiandrasana aorian'ny fidiran'ny pejy alohan'ny fakana, ilaina amin'ny votoaty mihetsika. Default `500` |
| `label` | string | No | Label mora vakin'olombelona tehirizina miaraka amin'ny attachment ao amin'ny Media Library |

**Mamerina**

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

Maka screenshot roa ary mamerina isa diff ara-pijery miampy sary diff manasongadina faritra niova. Ilaina amin'ny fanamafisana fa namokatra ny vokatra nandrasana ny fiovana famolavolana na amin'ny fitadiavana regression tsy nokasaina.

**Paramètre**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `before_url` | string | Yes | URL an'ny pejy hakana ho toy ny toe-javatra "before" |
| `after_url` | string | Yes | URL an'ny pejy hakana ho toy ny toe-javatra "after". Mety ho URL mitovy raha mampitaha amin'ny fotoana samihafa |
| `width` | integer | No | Sakan'ny viewport ho an'ireo fakana roa. Default `1280` |
| `threshold` | float | No | Fetran'ny fahasamihafan'ny pixel (0.0–1.0). Ny pixel ao anatin'ity fandeferana ity dia heverina ho tsy niova. Default `0.1` |

**Mamerina**

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

Ny `diff_score` mitentina `0.0` dia midika fa tsy misy fiovana hita maso; `1.0` dia midika fa niova ny pixel rehetra.

---

### `review_page_design` {#reviewpagedesign}

Maka screenshot amin'ny pejy iray ary mandefa azy amin'ny maodely fiteny ho an'ny famakafakana ara-pijery. Mamerina fanombanana voarindra mandrakotra firafitra, typographie, fampiasana loko, ary ahiahy momba ny fahazoana idirana.

**Paramètre**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `url` | string | Yes | URL feno amin'ny pejy hojerena |
| `focus` | string | No | Lisitra sarahin-koma amin'ny faritra fanamarinana hohamafisina: `layout`, `typography`, `colour`, `accessibility`, `mobile`. Default: faritra rehetra |
| `width` | integer | No | Sakan'ny viewport. Default `1280` |

**Mamerina**

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

## Fahaiza-manao azo apetraka {#installable-abilities}

Ny Registry Fahaiza-manao azo apetraka dia mamela anao hanitatra ny agent amin'ny fonosana fahaiza-manao fanampiny zaraina ho WordPress plugins. Ny fonosana tsirairay dia manoratra fahaiza-manao iray na maromaro amin'ny fampiasana ny API fahaiza-manao mahazatra.

### `list_available_abilities` {#listavailableabilities}

Mamerina ny katalaogin'ny fonosana fahaiza-manao azo apetraka avy amin'ny registry.

**Paramètre**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `category` | string | Tsia | Sivanina araka ny sokajy: `ecommerce`, `seo`, `media`, `social`, `developer` |

**Mamerina**

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

Misintona sy mampihetsika fonosana fahaiza-manao avy amin’ny rejistra.

**Masontsivana**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Eny | Slug an’ny plugin fonosana fahaiza-manao |

**Mamerina** `{ "success": true, "slug": "gratis-ai-agent-woocommerce", "abilities_added": 3 }`

---

### `recommend_plugin` {#recommendplugin}

Manontany ny rejistra fahaiza-manao mba hahitana ny plugin tsara indrindra ho an’ny tranga fampiasana voafaritra ary, raha ilaina, mametraka azy.

**Masontsivana**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `description` | string | Eny | Famaritana amin’ny fiteny voajanahary momba ny fiasana irina |
| `install` | boolean | Tsia | Raha `true`, mametraka avy hatrany ny plugin atolotra. Sanda default `false` |

**Ohatra**

```json
{
  "description": "I need a contact form with file upload support and spam protection",
  "install": false
}
```

**Mamerina**

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

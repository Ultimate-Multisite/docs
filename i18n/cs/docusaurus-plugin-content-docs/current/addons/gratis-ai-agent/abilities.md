---
title: Referenční dokumentace schopností
sidebar_position: 2
_i18n_hash: 1a83460648ea789162af417c6b11eecc
---
# Reference schopností {#abilities-reference}

Schopnosti jsou atomární akce, které Gratis AI Agent může provést na vaší instalaci WordPressu. Každá schopnost je zaregistrovaná PHP třída, která vystavuje JSON schématický popis (schema) — agent tento schéma čte během běhu programu, abych pochopil, jaké parametry jsou vyžadovány a co schopnost vrátí.

Tato stránka dokumentuje všechny schopnosti, které se dodávají s Gratis AI Agent v verzi v1.9.0.

---

## Custom Post Types (Vlastní typy příspěvků) {#custom-post-types}

Tyto schopnosti spravují vlastní typy příspěvků (CPT), které jsou zaregistrovány pomocí agenta. Registrace se ukládá do tabulky nastavení WordPressu, takže přežijí deaktivaci a opětovné aktivování pluginu.

### `register_post_type` {#registerposttype}

Registruje nový vlastní typ příspěvku.

**Parametry**

| Parametr | Typ | Požadováno | Popis |
|---|---|---|---|
| `slug` | string | Ano | Klíč typu příspěvku (max 20 znaků, bez velkých písmen, bez mezer) |
| `singular_label` | string | Ano | Člověkečitelné jednovollé jméno, např. `Portfolio Item` |
| `plural_label` | string | Ano | Člověkečitelné množné jméno, např. `Portfolio Items` |
| `public` | boolean | Ne | zda je typ příspěvku veřejně dostupný. Výchozí hodnota `true` |
| `supports` | array | Ne | funkce, které podporuje: `title`, `editor`, `thumbnail`, `excerpt`, `comments`, `revisions`, `custom-fields`. Výchozí hodnota `["title","editor"]` |
| `has_archive` | boolean | Ne | zda je aktivní archiv příspěvků typu. Výchozí hodnota `false` |
| `menu_icon` | string | Ne | třída Dashicons nebo URL pro ikonu v admin menu. Výchozí hodnota `"dashicons-admin-post"` |
| `rewrite_slug` | string | Ne | URL slug pro typ příspěvku. Po výchozím hodnotě je to `slug` |

**Příklad**

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

**Vrací hodnotu** `{ "success": true, "slug": "portfolio" }`

---

### `list_post_types` {#listposttypes}

Vrací všechny vlastní typy příspěvků zaregistrované agentem.

**Parametry** — žádné

**Vrací hodnota**

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

Odregistruje vlastní typ příspěvku, který byl previously zaregistrován agentem. Existující příspěvky tohoto typu zůstávají v databázi, ale již nejsou přístupné přes tento typ příspěvků.

**Parametry**

| Parametr | Typ | Požadováno | Popis |
|---|---|---|---|
| `slug` | string | Ano | Klíč typu příspěvku k odstranění |

**Vrací hodnota** `{ "success": true, "slug": "portfolio" }`

---

## Custom Taxonomies (Vlastní taxonomie) {#custom-taxonomies}

Tyto schopnosti spravují vlastní taxonomie. Jako CPT jsou i registrace taxonomie trvalé.

### `register_taxonomy` {#registertaxonomy}

Registruje novou vlastní taxonomie.

**Parametry**

Design system abilities modify the vizuální prezentaci webu WordPress — od vlastního CSS po vzory bloků a logo stránky.

### `inject_custom_css` {#listtaxonomies}

Přidává CSS do `<head>` stránky pomocí funkce `wp_add_inline_style`. CSS je uložen v optionu `gratis_ai_agent_custom_css` a při resetování schopnosti se čistě vymaže.

**Parametry**

| Parametr | Typ | Požadováno | Popis |
|---|---|---|---|
| `css` | string | Ano | Platný CSS k vložení |
| `label` | string | Ne | Čitelné označení pro tento blok CSS, použité v debug logy. Výchozí hodnota `"agent-injected"` |
| `replace` | boolean | Ne | Pokud je `true`, nahrazuje veškerý previously vložený CSS. Výchozí hodnota `false` (připojit) |

**Příklad**

```json
{
  "css": ":root { --primary: #1a1a2e; --accent: #e94560; } body { font-family: 'Inter', sans-serif; }",
  "label": "brand-colours",
  "replace": false
}
```

**Vrací** `{ "success": true, "bytes": 96 }`

---

### `add_block_pattern` {#deletetaxonomy}

Registruje znovu použitý vzor bloku do knihovny vzorů WordPress.

**Parametry**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | Identifikátor vzoru, např. `gratis/hero-dark` |
| `title` | string | Yes | Člověkečitelné jméno vzoru zobrazené v editoru |
| `content` | string | Yes | Serializovaný markup bloku (HTML) pro vzor |
| `categories` | array | No | Slagy kategorií vzoru, např. `["featured", "hero"]` |
| `description` | string | No | Krátký popis zobrazený v vyhledávači vzorů |
| `keywords` | array | No | Klíčová slova pro vyhledávání |

**Vrací hodnoty** `{ "success": true, "slug": "gratis/hero-dark" }`

---

### `list_block_patterns` {#design-system}

Uvádí všechny vzory bloků zaregistrované agentem.

**Parametry** — žádné

**Vrací hodnoty**

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

### `set_site_logo` {#injectcustomcss}

Nastavuje logo webu WordPress na daný ID přílohy nebo vzdálenou URL adresu obrázku. Pokud je poskytnuta URL, obrázek je stoupen a importován do knihovny médií (Media Library).

**Parametry**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `attachment_id` | integer | Ne | ID existující přílohy v knihovně médií |
| `url` | string | Ne | Vzdálená URL adresa obrázku pro import a nastavení jako logo |

Musíte poskytnout buď `attachment_id`, nebo `url`.

**Vrací hodnoty** `{ "success": true, "attachment_id": 42 }`

---

### `apply_theme_json_preset` {#addblockpattern}

Aplikuje pojmenovaný předdefinovaný vzhled (barva/typografie) do souboru `theme.json` (nebo `global-styles`) aktuální temy. Předdefinované styly jsou balíčky vytvořené týmem Gratis AI Agentu.

**Parametry**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `preset` | string | Ne | Jméno předdefinovaného stylu, např. `minimal-dark`, `warm-editorial`, `corporate-blue` |
| `merge` | boolean | Ne | Pokud je `true`, spojuje se s existujícími hodnotami namísto jejich nahrazení. Po výchozím nastavení je `false`. |

**Dostupné předdefinované styly**

| Preset | Popis |
|---|---|
| `minimal-dark` | Tmavý pozad, bílý text, jedna akcentní barva |
| `warm-editorial` | Teplý off-bílí pozad, serif nadpisy, zemité akcentní barvy |
| `corporate-blue` | Modrá a bílá paleta s profesionální typografií |
| `vibrant-startup` | Světlé gradienty, zaoblené rohy, moderní bezserif fonty |
| `classic-blog` | Neutrální šedé, pohodlná výška řádku, tradiční rozložení textu |

**Vrací hodnoty** `{ "success": true, "preset": "minimal-dark" }`

---

## Globální styly (Global Styles) {#listblockpatterns}

Funkce Globální styly čtou a zapisují hodnoty v souboru `theme.json` pomocí API WordPress Global Styles, což ovlivňuje všechny bloky a šablony celého webu.

### `get_global_styles` {#setsitelogo}

Vrací aktuální konfiguraci globálních stylů.

**Parametry**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `path` | string | Ne | JSON ukazatel na konkrétní hodnotu, např. `/color/palette` nebo `/typography/fontSizes`. Pokud není uvedeno, vrátí celý objekt. |

**Vrací hodnoty** celý objekt globálních stylů nebo hodnotu v `path`.

---

### `set_global_styles` {#applythemejsonpreset}

### `reset_global_styles` {#global-styles}

Resetuje všechny změny globálních stylů aplikovaných agentem, obnovuje výchozí styly tématu.

**Parametry** — žádné

**Vrací** `{ "success": true }`

---

## Navigační menu {#getglobalstyles}

Funkce pro navigace menu vytvářejí a spravují navigační menu WordPress a jejich položky.

### `create_menu` {#setglobalstyles}

Vytvoří nové navigační menu WordPress.

**Parametry**

| Parametr | Typ | Požadováno | Popis |
|---|---|---|---|
| `name` | string | Ano | Název menu, např. `Primary Navigation` |
| `location` | string | Ne | Lokace tématu, do které se toto menu přiřadí, např. `primary` |

**Vrací** `{ "success": true, "menu_id": 7 }`

---

### `update_menu` {#resetglobalstyles}

Změní název menu nebo ho přenavrhne na jinou lokaci tématu.

**Parametry**

| Parametr | Typ | Požadováno | Popis |
|---|---|---|---|
| `menu_id` | integer | Ano | ID menu, které chcete aktualizovat |
| `name` | string | Ne | Nový název menu |
| `location` | string | Ne | Lokace tématu, do které se menu přiřadí nebo přenavrhne |

**Vrací** `{ "success": true, "menu_id": 7 }`

---

### `add_menu_item` {#navigation-menus}

Přidá položku do existující navigační nabídky.

**Parametry**

| Parametr | Typ | Požadováno | Popis |
|---|---|---|---|
| `menu_id` | integer | Ano | ID cílového menu |
| `type` | string | Ano | Typ položky: `custom`, `post_type` nebo `taxonomy` |
| `title` | string | Ne | Název pro položku v menu (nutné pro typ `custom`) |
| `url` | string | Ne | URL pro položky typu `custom` |
| `object_id` | integer | Ne | ID příspěvku nebo terminu pro položky typu `post_type`/`taxonomy` |
| `parent_id` | integer | Ne | ID položky menu, pod kterou se tato položka bude vkládena |
| `position` | integer | Ne | Základní pozice (číslo od nuly) v menu |

**Vrací** `{ "success": true, "item_id": 12 }`

---

### `remove_menu_item` {#createmenu}

Odstraní položku z navigačního menu.

**Parametry**

| Parametr | Typ | Požadováno | Popis |
|---|---|---|---|
| `item_id` | integer | Ano | ID položky menu, kterou chcete odstranit |

**Vrací** `{ "success": true, "item_id": 12 }`

---

### `list_menus` {#updatemenu}

Seznam všech navigačních menu WordPress včetně jejich přiřazených lokalit v tématu.

**Parametry** — žádné

**Vrací**

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

## Správa možností (Options Management) {#addmenuitem}

Funkce pro možnosti čtou a zapisují nastavení WordPress pomocí `get_option` / `update_option`. Vytvořena je vnitřní bezpečnostní blokem, který zabraňuje náhodné úpravě kritických nastavení.

### `get_option` {#removemenuitem}

Čte se WordPress option (volbu).

**Parametry**

| Parametr | Typ | Požadováno | Popis |
|---|---|---|---|
| `option_name` | string | Ano | Klíč volby, např. `blogname` |

**Vrací hodnoty** `{ "option_name": "blogname", "value": "Moje webová stránka" }`

Vrací chybu, pokud je `option_name` v seznamu bezpečnostních bloků.

---

### `set_option` {#listmenus}

Zapisuje WordPress option (volbu).

**Parametry**

| Parametr | Typ | Požadováno | Popis |
|---|---|---|---|
| `option_name` | string | Ano | Klíč volby |
| `value` | any | Ano | Nová hodnota (automaticky serializována pro arrayy/objekty) |
| `autoload` | string | Ne | `"yes"` nebo `"no"`. Po výchozím nastavení zachovává se nastavení autoload. |

Vrací chybu, pokud je `option_name` v seznamu bezpečnostních bloků.

**Vrací hodnoty** `{ "success": true, "option_name": "blogname" }`

---

### `delete_option` {#options-management}

Smazá WordPress option (volbu).

**Parametry**

| Parametr | Typ | Požadováno | Popis |
|---|---|---|---|
| `option_name` | string | Ano | Klíč volby, který chcete smazat |

Vrací chybu, pokud je `option_name` v seznamu bezpečnostních bloků.

**Vrací hodnoty** `{ "success": true, "option_name": "my_custom_option" }`

---

### `list_options` {#getoption}

Seznamuje WordPress option (volby) odpovídající určitému vzoru.

**Parametry**

| Parametr | Typ | Požadováno | Popis |
|---|---|---|---|
| `pattern` | string | Ne | SQL LIKE vzorec pro filtrování názvů volb, např. `gratis_%`. Vrací všechny volby, pokud není uvedeno (používat s opatrností u velkých databází). |
| `limit` | integer | Ne | Maximální počet výsledků. Po výchozím nastavení 50, max 500 |

**Vrací hodnoty**

```json
{
  "options": [
    { "option_name": "gratis_ai_agent_version", "autoload": "yes" }
  ],
  "total": 1
}
```

---

## Content Management (Správa obsahu) {#setoption}

Možnosti správy obsahu vytvářejí a upravují WordPress příspěvky a stránky. Vrací se ID příspěvků, abyste v následných kroku plánu s více možnostmi mohli odkazovat na vytvořený obsah.

### `create_post` {#deleteoption}

Vytvoří nový WordPress příspěvek, stránku nebo záznam typu vlastního obsahu (custom post type).

**Parametry**

| Parametr | Typ | Požadováno | Popis |
|---|---|---|---|
| `title` | string | Ano | Titul příspěvku |
| `content` | string | Ne | Tělo příspěvku – přijímá text, HTML nebo serializovaný markup bloků |
| `status` | string | Ne | `draft` (návrh), `publish` (publikováno), `pending` (očekává), `private` (privátní). Po výchozím nastavení `draft`. |
| `post_type` | string | Ne | Slug typu příspěvku, např. `post`, `page` nebo jakýkoli zaregistrovaný CPT. Po výchozím nastavení `post`. |
| `excerpt` | string | Ne | Krátké shrnutí zobrazené v archivu a výsledcích vyhledávání |
| `categories` | array | Ne | Pole s názvy nebo ID kategorií, které chcete přiřadit |
| `tags` | array | Ne | Pole s názvy nebo ID tagů, které chcete přiřadit |
| `author` | integer | Ne | ID uživatele WordPressu, který bude příspěvkem autor. Po výchozím nastavení aktuální uživatel |
| `date` | string | Ne | Datum publikace v formátu ISO 8601, např. `2026-05-01T09:00:00` |
| `page_template` | string | Ne | Soubor šablony přiřazený příspěvku nebo stránce, např. `page-full-width.php`. Značný pouze tehdy, když je `post_type` `page` nebo CPT, který podporuje šablony stránek. |

**Příklad**

### `update_post` {#listoptions}

Aktualizuje existující WordPress příspěvek nebo stránku.

**Parametry**

| Parametr | Typ | Požadováno | Popis |
|---|---|---|---|
| `post_id` | integer | Ano | ID příspěvku, který chcete aktualizovat |
| `title` | string | Ne | Nový název příspěvku |
| `content` | string | Ne | Nový obsah příspěvku |
| `status` | string | Ne | Nový stav: `draft`, `publish`, `pending`, `private` |
| `excerpt` | string | Ne | Nový výpis (excerpt) |
| `categories` | array | Ne | Nahraď seznam kategorií novým polem s názvy nebo ID |
| `tags` | array | Ne | Nahraď seznam tagů novým polem s názvy nebo ID |
| `page_template` | string | Ne | Nový šablonový soubor přiřazený příspěvku nebo stránce, např. `page-full-width.php`. Odeslání prázdného řetězce odstraní přiřazení šablony a vrátí se k výchozímu šabloně v tématu. |

**Příklad** — změna šablony po vytvoření

```json
{
  "post_id": 42,
  "page_template": "page-full-width.php"
}
```

**Vrací hodnota** `{ "success": true, "post_id": 42 }`

---

### `batch_create_posts` {#content-management}

Vytvoří více příspěvků v rámci jednoho volání funkce, což zrychluje proces při stavbě webu nebo při náročném importu velkého množství obsahu. Příspěvky se vytvářejí postupně; pokud selže jeden, zpracování pokračuje a chyba bude uvedena v výsledném seznamu.

**Parametry**

| Parametr | Typ | Požadováno | Popis |
|---|---|---|---|
| `posts` | array | Ano | Pole s objekty příspěvků, každý přijímá stejné parametry jako funkce `create_post` |
| `stop_on_error` | boolean | Ne | Pokud je `true`, zpracování se zastaví po prvním selhání. Výchozí hodnota `false` |

**Příklad**

```json
{
  "posts": [
    {
      "title": "O nás",
      "post_type": "page",
      "status": "publish",
      "page_template": "page-full-width.php"
    },
    {
      "title": "Služby",
      "post_type": "page",
      "status": "publish"
    },
    {
      "title": "Kontakt",
      "post_type": "page",
      "status": "publish"
    }
  ]
}
```

**Vrací hodnota**

```json
{
  "created": 3,
  "failed": 0,
  "results": [
    { "success": true, "post_id": 42, "title": "O nás" },
    { "success": true, "post_id": 43, "title": "Služby" },
    { "success": true, "post_id": 44, "title": "Kontakt" }
  ]
}
```

---

### `set_featured_image` {#createpost}

Připojuje hlavní obrázek (náhled příspěvku) k existujícímu příspěvku nebo stránce. Přijímá ID existující položky v Media Library nebo URL vzdáleného obrázku; pokud je poskytnuta URL, obrázek bude automaticky stoupen a importován.

**Parametry**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `post_id` | integer | Yes | ID of the post or page to update |
| `attachment_id` | integer | No | ID of an existing Media Library attachment |
| `url` | string | No | Adresa obrázku z externího zdroje pro import a nastavení jako hlavní obrázek |
| `alt_text` | string | No | Text pro alternativní text, pokud se obrázek importuje z URL adresy |

Musíte poskytnout buď `attachment_id`, nebo `url`.

**Vrací hodnoty** `{ "success": true, "post_id": 42, "attachment_id": 17 }`

---

### `create_contact_form` {#updatepost}

Tento prvek vytvoří kontaktní formulář pomocí aktivního pluginu pro formuláře (Contact Form 7, WPForms, Fluent Forms nebo Gravity Forms, v závislosti na tom, který je nainstalován). Vrací krátký kód, který můžete vložit do jakéhokoli příspěvku nebo stránky.

**Parametry**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `title` | string | Yes | Název formuláře zobrazený v adminu pluginu pro formuláře |
| `fields` | array | Yes | Seřazený seznam polí formuláře (podívejte se na objekt Field níže) |
| `recipient` | string | No | E-mailová adresa, na kterou budou odesílány příspěvky. Po výchozím nastavení je to e-mail adminu WordPressu |
| `subject` | string | No | Předmět e-mailové zprávy. Podporuje placeholder `[your-name]` a `[your-subject]` při používání Contact Form 7 |
| `confirmation_message` | string | No | Zpráva zobrazitelná po úspěšném odeslání. Po výchozím nastavení: `"Děkujeme za Vaši zprávu. Budeme se vám brzy zeptat."` |

**Objekt Field (Pole)**

| Klíč | Typ | Required | Description |
|---|---|---|---|
| `name` | string | Yes | Interní název pole / strojový klíč |
| `label` | string | Yes | Čitelné označení zobrazené na formuláři pro uživatele |
| `type` | string | Yes | `text`, `email`, `tel`, `textarea`, `select`, `checkbox`, `radio`, `file`, `date` |
| `required` | boolean | No | Značí, zda musí být pole vyplněno před odesláním. Po výchozím nastavení `false` |
| `options` | array | No | Možnosti pro pole typu `select`, `checkbox` a `radio` |
| `placeholder` | string | No | Textový placeholder pro vstupy typu text |

**Příklad**

```json
{
  "title": "Dotaz na rezervaci restaurace",
  "fields": [
    { "name": "your-name",    "label": "Jméno",             "type": "text",     "required": true },
    { "name": "your-email",   "label": "E-mail",            "type": "email",    "required": true },
    { "name": "party-size",   "label": "Počet osob",       "type": "select",   "options": ["1–2", "3–5", "6–10", "10+"] },
    { "name": "your-message", "label": "Osobní požadavky", "type": "textarea", "required": false }
  ],
  "recipient": "bookings@example.com",
  "subject": "Nová rezervace z dotazu od [your-name]"
}
```

**Vrací hodnoty**

```json
{
  "success": true,
  "form_id": 3,
  "shortcode": "[contact-form-7 id=\"3\" title=\"Dotaz na rezervaci restaurace\"]"
}
```

---

## Vizualní přehled (Visual Review) {#batchcreateposts}

Funkce Vizualního přehledu umožňuje agentovi zachytit snímky obrazovky živých stránek a analyzovat je. To umožňuje autonomní revizi návrhů, srovnání před/po a kontrolu vizuální regrese bez nutnosti externí rozšíření pro prohlížeče.

### `capture_screenshot` {#setfeaturedimage}

### `compare_screenshots` {#createcontactform}

Tato funkce vezme dvě snímky obrazovky a vrátí skóre vizuálního rozdílu plus obrázek, který zvýrazňuje změněné oblasti. Je užitečná pro potvrzení, že změna návrhu vedla k očekávanému výsledku nebo pro detekci nechtěných regresí.

**Parametry**

| Parametr | Typ | Požadováno | Popis |
|---|---|---|---|
| `before_url` | string | Ano | URL stránky, kterou snímek obrazovky zachytíte jako stav „před“. |
| `after_url` | string | Ano | URL stránky, kterou snímek obrazovky zachytíte jako stav „po“. Může být stejná URL při srovnávání v čase. |
| `width` | integer | Ne | Šířka okna pro oba snímky. Po výchozím hodnotě je 1280. |
| `threshold` | float | Ne | Průsvitový práh rozdílu (od 0,0 do 1,0). Pixely v tomto tolerovaném rozmezí se považují za nezměněné. Po výchozím nastavení je 0,1. |

**Vrací hodnoty**

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

`diff_score` na hodnotě `0.0` znamená žádnou viditelnou změnu; `1.0` znamená, že se změnily všechny pixely.

---

### `review_page_design` {#visual-review}

Tato funkce zachytí snímek obrazovky stránky a odesme ho jazykovému modelu pro vizuální analýzu. Vrací strukturovanou hodnocení zahrnující rozvržení, typografii, používání barev a aspekty přístupnosti (accessibility).

**Parametry**

| Parametr | Typ | Požadováno | Popis |
|---|---|---|---|
| `url` | string | Ano | Celá URL stránky, kterou je třeba zhodnotit. |
| `focus` | string | Ne | Rozdělený seznam oblastí pro zvýraznění: `layout`, `typography`, `colour`, `accessibility`, `mobile`. Po výchozím nastavení jsou všechny oblasti. |
| `width` | integer | Ne | Šířka okna. Po výchozím nastavení je 1280. |

**Vrací hodnoty**

## Instalovatelné schopnosti {#capturescreenshot}

Registrování instalovatelných schopností vám umožňuje rozšířit agent o další balíčky schopností, které jsou distribuovány jako WordPress pluginy. Każdy balíček se registruje jednu nebo více schopností pomocí standardního ability API.

### `list_available_abilities` {#comparescreenshots}

Vrací katalog dostupných balíčků schopností k instalaci z registru.

**Parametry**

| Parametr | Typ | Požadováno | Popis |
|---|---|---|---|
| `category` | string | Ne | Filtrovat podle kategorie: `ecommerce`, `seo`, `media`, `social`, `developer` |

**Vrací hodnota**

```json
{
  "packs": [
    {
      "slug": "gratis-ai-agent-woocommerce",
      "name": "WooCommerce Schopnosti",
      "category": "ecommerce",
      "version": "1.0.0",
      "abilities": ["create_product", "update_pricing", "manage_inventory"],
      "installed": false
    }
  ]
}
```

---

### `install_ability` {#reviewpagedesign}

Stahuje a aktivuje balíček schopností z registru.

**Parametry**

| Parametr | Typ | Požadováno | Popis |
|---|---|---|---|
| `slug` | string | Ano | Slug pluginu s balíčkem schopností |

**Vrací hodnota** `{ "success": true, "slug": "gratis-ai-agent-woocommerce", "abilities_added": 3 }`

---

### `recommend_plugin` {#installable-abilities}

Dotazuje na registru schopností a najde nejlepší plugin pro popsaný případ použití a volitelně ho nainstaluje.

**Parametry**

| Parametr | Typ | Požadováno | Popis |
|---|---|---|---|
| `description` | string | Ano | Deskripce požadované funkcionality v přirozeném jazyce |
| `install` | boolean | Ne | Pokud je `true`, plugin se okamžitě nainstaluje. Výchozí hodnota `false` |

**Příklad**

```json
{
  "description": "Potřebuji formulář pro kontakt s podporou nahrávání souborů a ochranou proti spamům",
  "install": false
}
```

**Vrací hodnota**

```json
{
  "recommendation": {
    "slug": "contact-form-7",
    "name": "Contact Form 7",
    "reason": "Široce přijímaný, podporuje nahrávání souborů a integruje se s Akismet pro filtraci spamu.",
    "alternatives": ["wpforms-lite", "fluent-forms"]
  }
}
```

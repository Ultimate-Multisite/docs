---
title: Dokumentacja możliwości
sidebar_position: 2
_i18n_hash: 1a83460648ea789162af417c6b11eecc
---
# Dokumentacja abilities

Abilities to atomowe działania, które Gratis AI Agent może wywoływać w Twojej instalacji WordPress. Każda ability jest zarejestrowaną klasą PHP, która udostępnia schemat JSON — agent odczytuje ten schemat w czasie działania, aby zrozumieć, jakie parametry są wymagane i co zwraca ability.

Ta strona dokumentuje wszystkie abilities dostarczane z Gratis AI Agent v1.9.0.

---

## Niestandardowe typy wpisów {#custom-post-types}

Te abilities zarządzają niestandardowymi typami wpisów (CPT) zarejestrowanymi przez agenta. Rejestracje są utrwalane w tabeli opcji WordPress, dzięki czemu przetrwają dezaktywację i ponowną aktywację pluginu.

### `register_post_type` {#registerposttype}

Rejestruje nowy niestandardowy typ wpisu.

**Parametry**

| Parametr | Typ | Wymagane | Opis |
|---|---|---|---|
| `slug` | string | Tak | Klucz typu wpisu (maks. 20 znaków, bez wielkich liter, bez spacji) |
| `singular_label` | string | Tak | Czytelna dla człowieka nazwa w liczbie pojedynczej, np. `Portfolio Item` |
| `plural_label` | string | Tak | Czytelna dla człowieka nazwa w liczbie mnogiej, np. `Portfolio Items` |
| `public` | boolean | Nie | Czy typ wpisu jest publicznie dostępny. Domyślnie `true` |
| `supports` | array | Nie | Obsługiwane funkcje: `title`, `editor`, `thumbnail`, `excerpt`, `comments`, `revisions`, `custom-fields`. Domyślnie `["title","editor"]` |
| `has_archive` | boolean | Nie | Czy strona archiwum typu wpisu jest włączona. Domyślnie `false` |
| `menu_icon` | string | Nie | Klasa Dashicons lub URL ikony menu administracyjnego. Domyślnie `"dashicons-admin-post"` |
| `rewrite_slug` | string | Nie | Slug URL dla typu wpisu. Domyślnie `slug` |

**Przykład**

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

**Zwraca** `{ "success": true, "slug": "portfolio" }`

---

### `list_post_types` {#listposttypes}

Zwraca wszystkie niestandardowe typy wpisów zarejestrowane przez agenta.

**Parametry** — brak

**Zwraca**

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

Wyrejestrowuje niestandardowy typ wpisu wcześniej zarejestrowany przez agenta. Istniejące wpisy tego typu pozostają w bazie danych, ale nie są już dostępne przez typ wpisu.

**Parametry**

| Parametr | Typ | Wymagane | Opis |
|---|---|---|---|
| `slug` | string | Tak | Klucz typu wpisu do usunięcia |

**Zwraca** `{ "success": true, "slug": "portfolio" }`

---

## Niestandardowe taksonomie {#custom-taxonomies}

Te abilities zarządzają niestandardowymi taksonomiami. Podobnie jak CPT, rejestracje taksonomii są utrwalane.

### `register_taxonomy` {#registertaxonomy}

Rejestruje nową niestandardową taksonomię.

**Parametry**

| Parametr | Typ | Wymagane | Opis |
|---|---|---|---|
| `slug` | string | Tak | Klucz taksonomii (maks. 32 znaki) |
| `singular_label` | string | Tak | Czytelna dla człowieka nazwa w liczbie pojedynczej, np. `Project Category` |
| `plural_label` | string | Tak | Czytelna dla człowieka nazwa w liczbie mnogiej, np. `Project Categories` |
| `post_types` | array | Tak | Slugi typów wpisów, do których ta taksonomia powinna być dołączona |
| `hierarchical` | boolean | Nie | `true` dla stylu kategorii, `false` dla stylu tagów. Domyślnie `true` |
| `public` | boolean | Nie | Czy terminy są publicznie dostępne. Domyślnie `true` |
| `rewrite_slug` | string | Nie | Slug URL dla taksonomii. Domyślnie `slug` |

**Przykład**

```json
{
  "slug": "project-category",
  "singular_label": "Project Category",
  "plural_label": "Project Categories",
  "post_types": ["portfolio"],
  "hierarchical": true
}
```

**Zwraca** `{ "success": true, "slug": "project-category" }`

---

### `list_taxonomies` {#listtaxonomies}

Zwraca wszystkie niestandardowe taksonomie zarejestrowane przez agenta.

**Parametry** — brak

**Zwraca**

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

Wyrejestrowuje niestandardową taksonomię wcześniej zarejestrowaną przez agenta.

**Parametry**

| Parametr | Typ | Wymagane | Opis |
|---|---|---|---|
| `slug` | string | Tak | Klucz taksonomii do usunięcia |

**Zwraca** `{ "success": true, "slug": "project-category" }`

---

## System projektowy {#design-system}

Abilities systemu projektowego modyfikują wizualną prezentację witryny WordPress — od niestandardowego CSS po wzorce bloków i logo witryny.

### `inject_custom_css` {#injectcustomcss}

Dołącza CSS do `<head>` witryny za pomocą `wp_add_inline_style`. CSS jest przechowywany w opcji `gratis_ai_agent_custom_css` i poprawnie usuwany z kolejki, gdy ability zostanie zresetowana.

**Parametry**

| Parametr | Typ | Wymagane | Opis |
|---|---|---|---|
| `css` | string | Tak | Poprawny CSS do wstrzyknięcia |
| `label` | string | Nie | Czytelna dla człowieka etykieta tego bloku CSS, używana w logach debugowania. Domyślnie `"agent-injected"` |
| `replace` | boolean | Nie | Jeśli `true`, zastępuje cały wcześniej wstrzyknięty CSS. Domyślnie `false` (dołącza) |

**Przykład**

```json
{
  "css": ":root { --primary: #1a1a2e; --accent: #e94560; } body { font-family: 'Inter', sans-serif; }",
  "label": "brand-colours",
  "replace": false
}
```

**Zwraca** `{ "success": true, "bytes": 96 }`

---

### `add_block_pattern` {#addblockpattern}

Rejestruje wielokrotnego użytku wzorzec bloku w bibliotece wzorców WordPress.

**Parametry**

| Parametr | Typ | Wymagane | Opis |
|---|---|---|---|
| `slug` | string | Tak | Identyfikator wzorca, np. `gratis/hero-dark` |
| `title` | string | Tak | Czytelna dla człowieka nazwa wzorca wyświetlana w edytorze |
| `content` | string | Tak | Serializowany znacznik bloków (HTML) dla wzorca |
| `categories` | array | Nie | Slugi kategorii wzorców, np. `["featured", "hero"]` |
| `description` | string | Nie | Krótki opis wyświetlany w selektorze wzorców |
| `keywords` | array | Nie | Słowa kluczowe wyszukiwania |

**Zwraca** `{ "success": true, "slug": "gratis/hero-dark" }`

---

### `list_block_patterns` {#listblockpatterns}

Wyświetla listę wszystkich wzorców bloków zarejestrowanych przez agenta.

**Parametry** — brak

**Zwraca**

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

Ustawia logo witryny WordPress na podane ID załącznika lub zdalny URL obrazu. Gdy podany jest URL, obraz jest pobierany i importowany do Biblioteki mediów.

**Parametry**

| Parametr | Typ | Wymagane | Opis |
|---|---|---|---|
| `attachment_id` | integer | Nie | ID istniejącego załącznika w Bibliotece mediów |
| `url` | string | Nie | URL zdalnego obrazu do zaimportowania i ustawienia jako logo |

Należy podać jedno z `attachment_id` albo `url`.

**Zwraca** `{ "success": true, "attachment_id": 42 }`

---

### `apply_theme_json_preset` {#applythemejsonpreset}

Stosuje nazwany preset kolorów/typografii do `theme.json` aktywnego motywu (lub `global-styles`). Presety to wyselekcjonowane pakiety utrzymywane przez zespół Gratis AI Agent.

**Parametry**

| Parametr | Typ | Wymagane | Opis |
|---|---|---|---|
| `preset` | string | Tak | Nazwa presetu, np. `minimal-dark`, `warm-editorial`, `corporate-blue` |
| `merge` | boolean | Nie | Jeśli `true`, scal z istniejącymi wartościami zamiast je zastępować. Domyślnie `false` |

**Dostępne presety**

| Preset | Opis |
|---|---|
| `minimal-dark` | Niemal czarne tło, biały tekst, pojedynczy kolor akcentu |
| `warm-editorial` | Ciepłe złamane białe tło, nagłówki szeryfowe, ziemiste kolory akcentu |
| `corporate-blue` | Granatowo-biała paleta z profesjonalną typografią |
| `vibrant-startup` | Jasne gradienty, zaokrąglone rogi, nowoczesny krój bezszeryfowy |
| `classic-blog` | Neutralne szarości, wygodna wysokość linii, tradycyjne odstępy układu |

**Zwraca** `{ "success": true, "preset": "minimal-dark" }`

---

## Style globalne {#global-styles}

Możliwości stylów globalnych odczytują i zapisują wartości theme.json przez WordPress Global Styles API, wpływając na wszystkie bloki i szablony w całej witrynie.

### `get_global_styles` {#getglobalstyles}

Zwraca bieżącą konfigurację stylów globalnych.

**Parametry**

| Parametr | Typ | Wymagane | Opis |
|---|---|---|---|
| `path` | string | Nie | Wskaźnik JSON do konkretnej wartości, np. `/color/palette` lub `/typography/fontSizes`. Zwraca cały obiekt, jeśli pominięto. |

**Zwraca** pełny obiekt stylów globalnych lub wartość w `path`.

---

### `set_global_styles` {#setglobalstyles}

Aktualizuje jedną lub więcej wartości w konfiguracji stylów globalnych.

**Parametry**

| Parametr | Typ | Wymagane | Opis |
|---|---|---|---|
| `path` | string | Tak | Wskaźnik JSON do wartości do ustawienia, np. `/color/palette` |
| `value` | any | Tak | Nowa wartość |

**Przykład** — dodaj kolor do palety

```json
{
  "path": "/color/palette",
  "value": [
    { "slug": "primary", "color": "#1a1a2e", "name": "Primary" },
    { "slug": "accent",  "color": "#e94560", "name": "Accent" }
  ]
}
```

**Zwraca** `{ "success": true, "path": "/color/palette" }`

---

### `reset_global_styles` {#resetglobalstyles}

Resetuje wszystkie zastosowane przez agenta zmiany stylów globalnych, przywracając domyślne ustawienia motywu.

**Parametry** — brak

**Zwraca** `{ "success": true }`

---

## Menu nawigacyjne {#navigation-menus}

Możliwości menu nawigacyjnego tworzą menu nawigacyjne WordPress i ich elementy oraz nimi zarządzają.

### `create_menu` {#createmenu}

Tworzy nowe menu nawigacyjne WordPress.

**Parametry**

| Parametr | Typ | Wymagane | Opis |
|---|---|---|---|
| `name` | string | Tak | Nazwa menu, np. `Primary Navigation` |
| `location` | string | Nie | Lokalizacja motywu, do której przypisać to menu, np. `primary` |

**Zwraca** `{ "success": true, "menu_id": 7 }`

---

### `update_menu` {#updatemenu}

Zmienia nazwę menu lub przypisuje je ponownie do lokalizacji motywu.

**Parametry**

| Parametr | Typ | Wymagane | Opis |
|---|---|---|---|
| `menu_id` | integer | Tak | ID menu do aktualizacji |
| `name` | string | Nie | Nowa nazwa menu |
| `location` | string | Nie | Lokalizacja motywu do przypisania lub ponownego przypisania |

**Zwraca** `{ "success": true, "menu_id": 7 }`

---

### `add_menu_item` {#addmenuitem}

Dodaje element do istniejącego menu nawigacyjnego.

**Parametry**

| Parametr | Typ | Wymagane | Opis |
|---|---|---|---|
| `menu_id` | integer | Tak | ID docelowego menu |
| `type` | string | Tak | Typ elementu: `custom`, `post_type` lub `taxonomy` |
| `title` | string | Nie | Etykieta elementu menu (wymagana dla typu `custom`) |
| `url` | string | Nie | URL dla elementów `custom` |
| `object_id` | integer | Nie | ID wpisu lub ID terminu dla elementów `post_type`/`taxonomy` |
| `parent_id` | integer | Nie | ID elementu menu, pod którym zagnieździć ten element |
| `position` | integer | Nie | Pozycja w menu liczona od zera |

**Zwraca** `{ "success": true, "item_id": 12 }`

---

### `remove_menu_item` {#removemenuitem}

Usuwa element z menu nawigacyjnego.

**Parametry**

| Parametr | Typ | Wymagane | Opis |
|---|---|---|---|
| `item_id` | integer | Tak | ID elementu menu do usunięcia |

**Zwraca** `{ "success": true, "item_id": 12 }`

---

### `list_menus` {#listmenus}

Wyświetla listę wszystkich menu nawigacyjnych WordPress, w tym przypisane im lokalizacje motywu.

**Parametry** — brak

**Zwraca**

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

## Zarządzanie opcjami {#options-management}

Możliwości opcji odczytują i zapisują opcje WordPress przez `get_option` / `update_option`. Wbudowana lista blokowania bezpieczeństwa zapobiega przypadkowej modyfikacji krytycznych ustawień.

### `get_option` {#getoption}

Odczytuje opcję WordPress.

**Parametry**

| Parametr | Typ | Wymagane | Opis |
|---|---|---|---|
| `option_name` | string | Tak | Klucz opcji, np. `blogname` |

**Zwraca** `{ "option_name": "blogname", "value": "My Site" }`

Zwraca błąd, jeśli `option_name` znajduje się na liście blokowania bezpieczeństwa.

---

### `set_option` {#setoption}

Zapisuje opcję WordPress.

**Parametry**

| Parametr | Typ | Wymagane | Opis |
|---|---|---|---|
| `option_name` | string | Tak | Klucz opcji |
| `value` | any | Tak | Nowa wartość (serializowana automatycznie dla tablic/obiektów) |
| `autoload` | string | Nie | `"yes"` lub `"no"`. Domyślnie zachowuje istniejące ustawienie autoload |

Zwraca błąd, jeśli `option_name` znajduje się na bezpieczeństwa blocklist.

**Zwraca** `{ "success": true, "option_name": "blogname" }`

---

### `delete_option` {#deleteoption}

Usuwa opcję WordPress.

**Parametry**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `option_name` | string | Yes | Klucz opcji do usunięcia |

Zwraca błąd, jeśli `option_name` znajduje się na bezpieczeństwa blocklist.

**Zwraca** `{ "success": true, "option_name": "my_custom_option" }`

---

### `list_options` {#listoptions}

Wyświetla opcje WordPress pasujące do wzorca.

**Parametry**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `pattern` | string | No | Wzorzec SQL LIKE do filtrowania nazw opcji, np. `gratis_%`. Zwraca wszystkie opcje, jeśli pominięto (używaj ostrożnie w dużych bazach danych). |
| `limit` | integer | No | Maksymalna liczba wyników. Domyślnie `50`, maks. `500` |

**Zwraca**

```json
{
  "options": [
    { "option_name": "gratis_ai_agent_version", "autoload": "yes" }
  ],
  "total": 1
}
```

---

## Zarządzanie treścią {#content-management}

Możliwości zarządzania treścią tworzą i edytują wpisy oraz strony WordPress. ID wpisów są zwracane, aby kolejne kroki w planach obejmujących wiele możliwości mogły odwoływać się do utworzonej treści.

### `create_post` {#createpost}

Tworzy nowy wpis WordPress, stronę lub pozycję niestandardowego typu wpisu.

**Parametry**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `title` | string | Yes | Tytuł wpisu |
| `content` | string | No | Treść wpisu — akceptuje zwykły tekst, HTML lub serializowane znaczniki bloków |
| `status` | string | No | `draft`, `publish`, `pending`, `private`. Domyślnie `draft` |
| `post_type` | string | No | Slug typu wpisu, np. `post`, `page` lub dowolny zarejestrowany CPT. Domyślnie `post` |
| `excerpt` | string | No | Krótkie podsumowanie wyświetlane w archiwach i wynikach wyszukiwania |
| `categories` | array | No | Tablica nazw lub ID kategorii do przypisania |
| `tags` | array | No | Tablica nazw lub ID tagów do przypisania |
| `author` | integer | No | ID użytkownika WordPress do ustawienia jako autor wpisu. Domyślnie bieżący użytkownik |
| `date` | string | No | Data publikacji w formacie ISO 8601, np. `2026-05-01T09:00:00` |
| `page_template` | string | No | Plik szablonu do przypisania do tego wpisu lub strony, np. `page-full-width.php`. Ma znaczenie tylko wtedy, gdy `post_type` to `page` lub CPT obsługujący szablony stron. |

**Przykład**

```json
{
  "title": "Welcome to Our New Site",
  "content": "<!-- wp:paragraph --><p>Hello world!</p><!-- /wp:paragraph -->",
  "status": "publish",
  "post_type": "page",
  "page_template": "page-full-width.php"
}
```

**Zwraca** `{ "success": true, "post_id": 42, "permalink": "https://example.com/welcome/" }`

---

### `update_post` {#updatepost}

Aktualizuje istniejący wpis lub stronę WordPress.

**Parametry**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `post_id` | integer | Yes | ID wpisu do zaktualizowania |
| `title` | string | No | Nowy tytuł wpisu |
| `content` | string | No | Nowa treść wpisu |
| `status` | string | No | Nowy status: `draft`, `publish`, `pending`, `private` |
| `excerpt` | string | No | Nowy zajawka |
| `categories` | array | No | Zastąp pełną listę kategorii tą tablicą nazw lub ID |
| `tags` | array | No | Zastąp pełną listę tagów tą tablicą nazw lub ID |
| `page_template` | string | No | Nowy plik szablonu do przypisania do tego wpisu lub strony, np. `page-full-width.php`. Przekaż pusty ciąg, aby usunąć przypisanie szablonu i przywrócić domyślne ustawienie motywu. |

**Przykład** — zmień szablon po utworzeniu

```json
{
  "post_id": 42,
  "page_template": "page-full-width.php"
}
```

**Zwraca** `{ "success": true, "post_id": 42 }`

---

### `batch_create_posts` {#batchcreateposts}

Tworzy wiele wpisów w jednym wywołaniu możliwości, zmniejszając liczbę połączeń zwrotnych podczas budowania witryn lub masowego importu treści. Wpisy są tworzone sekwencyjnie; jeśli jeden się nie powiedzie, pozostałe są kontynuowane, a niepowodzenie jest zgłaszane w tablicy wyników.

**Parametry**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `posts` | array | Yes | Tablica obiektów wpisów, z których każdy akceptuje te same parametry co `create_post` |
| `stop_on_error` | boolean | No | Jeśli `true`, zatrzymaj przetwarzanie po pierwszym niepowodzeniu. Domyślnie `false` |

**Przykład**

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

**Zwraca**

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

Przypisuje obrazek wyróżniający (miniaturę wpisu) do istniejącego wpisu lub strony. Akceptuje istniejący ID załącznika z Media Library albo zdalny URL obrazu; gdy podany jest URL, obraz jest automatycznie pobierany i importowany.

**Parametry**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `post_id` | integer | Yes | ID wpisu lub strony do zaktualizowania |
| `attachment_id` | integer | No | ID istniejącego załącznika Media Library |
| `url` | string | No | Zdalny URL obrazu do zaimportowania i ustawienia jako obrazek wyróżniający |
| `alt_text` | string | No | Tekst alternatywny do zastosowania do załącznika, jeśli zostanie zaimportowany z URL |

Należy podać jedno z `attachment_id` lub `url`.

**Zwraca** `{ "success": true, "post_id": 42, "attachment_id": 17 }`

---

### `create_contact_form` {#createcontactform}

Tworzy formularz kontaktowy przy użyciu aktywnego plugin formularzy (Contact Form 7, WPForms, Fluent Forms lub Gravity Forms, zależnie od tego, który jest zainstalowany). Zwraca shortcode, który można osadzić w dowolnym wpisie lub na stronie.

**Parametry**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `title` | string | Yes | Nazwa formularza wyświetlana w panelu administracyjnym pluginu formularzy |
| `fields` | array | Yes | Uporządkowana lista pól formularza (zobacz obiekt pola poniżej) |
| `recipient` | string | No | Adres e-mail do otrzymywania zgłoszeń. Domyślnie adres e-mail administratora WordPress |
| `subject` | string | No | Wiersz tematu e-maila. Obsługuje placeholdery `[your-name]` i `[your-subject]` podczas używania Contact Form 7 |
| `confirmation_message` | string | No | Komunikat wyświetlany po pomyślnym przesłaniu. Domyślnie: `"Thank you for your message. We'll be in touch soon."` |

**Obiekt pola**

| Key | Type | Required | Description |
|---|---|---|---|
| `name` | string | Yes | Wewnętrzna nazwa pola / klucz maszynowy |
| `label` | string | Yes | Czytelna dla człowieka etykieta wyświetlana w formularzu |
| `type` | string | Yes | `text`, `email`, `tel`, `textarea`, `select`, `checkbox`, `radio`, `file`, `date` |
| `required` | boolean | No | Czy pole musi zostać wypełnione przed przesłaniem. Domyślnie `false` |
| `options` | array | No | Opcje dla pól `select`, `checkbox` i `radio` |
| `placeholder` | string | No | Tekst placeholdera dla danych wejściowych typu tekstowego |

**Przykład**

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

**Zwraca**

```json
{
  "success": true,
  "form_id": 3,
  "shortcode": "[contact-form-7 id=\"3\" title=\"Restaurant Booking Enquiry\"]"
}
```

---

## Przegląd wizualny {#visual-review}

Możliwości Przeglądu wizualnego pozwalają agentowi przechwytywać zrzuty ekranu działających stron i je analizować, umożliwiając autonomiczny przegląd projektu, porównania przed/po oraz kontrole regresji wizualnej bez wymagania żadnego rozszerzenia przeglądarki.

### `capture_screenshot` {#capturescreenshot}

Przechwytuje zrzut ekranu strony WordPress pod podanym URL-em za pomocą serwerowej przeglądarki headless. Obraz jest zapisywany w Media Library i zwracany jest URL CDN.

**Parametry**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `url` | string | Yes | Pełny URL strony do zrzutu ekranu, np. `https://example.com/about/` |
| `width` | integer | No | Szerokość viewportu w pikselach. Domyślnie `1280` |
| `height` | integer | No | Wysokość viewportu w pikselach. Domyślnie `800` |
| `full_page` | boolean | No | Przechwyć pełną przewijaną stronę zamiast samego viewportu. Domyślnie `false` |
| `delay_ms` | integer | No | Liczba milisekund oczekiwania po załadowaniu strony przed przechwyceniem, przydatna dla animowanych treści. Domyślnie `500` |
| `label` | string | No | Czytelna dla człowieka etykieta przechowywana z załącznikiem w Media Library |

**Zwraca**

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

Przyjmuje dwa zrzuty ekranu i zwraca wynik różnicy wizualnej oraz obraz różnic wyróżniający zmienione obszary. Przydatne do potwierdzania, że zmiana projektu przyniosła oczekiwany rezultat, lub do wykrywania niezamierzonych regresji.

**Parametry**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `before_url` | string | Yes | URL strony do przechwycenia jako stan „przed” |
| `after_url` | string | Yes | URL strony do przechwycenia jako stan „po”. Może być tym samym URL-em, jeśli porównanie dotyczy różnych momentów w czasie |
| `width` | integer | No | Szerokość viewportu dla obu przechwyceń. Domyślnie `1280` |
| `threshold` | float | No | Próg różnicy pikseli (0,0–1,0). Piksele mieszczące się w tej tolerancji są uznawane za niezmienione. Domyślnie `0.1` |

**Zwraca**

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

`diff_score` o wartości `0.0` oznacza brak widocznej zmiany; `1.0` oznacza zmianę każdego piksela.

---

### `review_page_design` {#reviewpagedesign}

Przechwytuje zrzut ekranu strony i wysyła go do modelu językowego w celu analizy wizualnej. Zwraca ustrukturyzowaną ocenę obejmującą układ, typografię, użycie kolorów i kwestie dostępności.

**Parametry**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `url` | string | Yes | Pełny URL strony do przeglądu |
| `focus` | string | No | Lista obszarów przeglądu rozdzielona przecinkami, które należy podkreślić: `layout`, `typography`, `colour`, `accessibility`, `mobile`. Domyślnie: wszystkie obszary |
| `width` | integer | No | Szerokość viewportu. Domyślnie `1280` |

**Zwraca**

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

## Możliwości instalowalne {#installable-abilities}

Rejestr możliwości instalowalnych pozwala rozszerzyć agenta o dodatkowe pakiety możliwości dystrybuowane jako pluginy WordPress. Każdy pakiet rejestruje jedną lub więcej możliwości przy użyciu standardowego API możliwości.

### `list_available_abilities` {#listavailableabilities}

Zwraca katalog pakietów możliwości dostępnych do instalacji z rejestru.

**Parametry**

| Parametr | Typ | Wymagane | Opis |
|---|---|---|---|
| `category` | string | Nie | Filtruj według kategorii: `ecommerce`, `seo`, `media`, `social`, `developer` |

**Zwraca**

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

Pobiera i aktywuje pakiet zdolności z rejestru.

**Parametry**

| Parametr | Typ | Wymagane | Opis |
|---|---|---|---|
| `slug` | string | Tak | slug pluginu pakietu zdolności |

**Zwraca** `{ "success": true, "slug": "gratis-ai-agent-woocommerce", "abilities_added": 3 }`

---

### `recommend_plugin` {#recommendplugin}

Odpytuje rejestr zdolności, aby znaleźć najlepszy plugin dla opisanego przypadku użycia i opcjonalnie go zainstalować.

**Parametry**

| Parametr | Typ | Wymagane | Opis |
|---|---|---|---|
| `description` | string | Tak | Opis pożądanego działania w języku naturalnym |
| `install` | boolean | Nie | Jeśli `true`, natychmiast instaluje rekomendowany plugin. Domyślnie `false` |

**Przykład**

```json
{
  "description": "I need a contact form with file upload support and spam protection",
  "install": false
}
```

**Zwraca**

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

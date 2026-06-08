---
title: Beépített ügynökök
sidebar_position: 12
_i18n_hash: 4852fdc3ddd1a44a574c100846e84dc5
---
# Beépített Ügynökök

A Gratis AI Agent v1.9.0 öt beépített ügynököt tartalmaz, amelyek mindegyike egy fókuszált eszközcsoporttal, egy személyre szabott rendszeres utasítással és a terület gyakori feladatainak megfelelő indító javaslatokkal rendelkezik. Az ügynökek közötti váltás megváltoztatja az asszisztens képességét és válaszadását – és ezt semmi konfiguráció nélkül teheti meg.

## Mi az Ügynök?

Az ügynök egy nevetett konfigurációs profil, amely ötvözi a következőket:

- **Eszközök (Tools)** — az eszközök, amelyeket az ügynök használhat (például egy Tartalomíró hozzáfér a poszt létrehozási képességekhez; egy Design Studio hozzáfér a CSS és a theme.json képességekhez)
- **Rendszeres utasítás (System prompt)** — az utasítások, amelyek meghatározzák az ügynök hangulatát, prioritásait és korlátait
- **Javaslatok (Suggestions)** — előreírt utasítások, amelyeket a chat felületen láthat, hogy gyorsan elindíthessen

## Az Ügynök Kiválasztóhoz való hozzáférés

1. Nyissa meg a **Gratis AI Agent** panelét a WordPress admin oldali sávban.
2. Kattintson az **ügynök ikonra** a chat fejlécének bal felső részén (az ikon megváltozik, hogy tükrözze az aktív ügynöket).
3. Az **Ügynök Kiválasztó** egy űrtáblás felülrajzítással nyílik. Minden ügynök ikonjával, nevével és egy soros leírásával szerepel.
4. Kattintson egy ügynök sorára, hogy aktiválja. A chat fejléc azonnal frissül.

Ügynökeket váltani lehet a beszélgetés közepén is – az új ügynök rendszeres utasítása a következő üzenetről érvényes.

## Az Öt Beépített Ügynök

### Tartalomíró (Content Writer)

**Fókusz:** Posztok, oldalak és kapcsolatfelvételi űrlapok létrehozása és szerkesztése.

**Elérhető eszközök:** `create_post`, `update_post`, `batch_create_posts`, `set_featured_image`, `create_contact_form`, `get_option`, `list_post_types`

**Mit csinál jól:**
- Blogposztok vázlatból vagy rövid leírásból történő kidrafthoodása és közzétéllése
- Landoló oldalak csoportos létrehozása egy új oldalhoz
- Kapcsolattartási és érdeklődés űrlapok építése
- Featured képek beállítása posztokhoz egy URL vagy keresés alapján

**Indító javaslatok:**
- *Írjon 500 szavas blogposztot a WordPress multisite előnyeiről.*
- *Létrehoz egy "Rólunk", "Szolgáltatások" és "Kapcsolat" oldalt, és közzétegye őket.*
- *Egy foglalási érdeklődés űrlapot kell hozzáadni a Kapcsolat oldalhoz.*

---

### Oldalépítő (Site Builder)

**Fókusz:** Weboldal létrehozása elejt végéig egyetlen utasításból.

**Elérhető eszközök:** `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`, `create_post`, `batch_create_posts`, `register_post_type`, `create_menu`, `add_menu_item`, `inject_custom_css`, `apply_theme_json_preset`, `install_ability`, `recommend_plugin`, `create_contact_form`

**Mit csinál jól:**
- Multi-fázisú weboldalépítési terv generálása a leírt üzleti típus alapján
- Minden fázis autonóm végrehajtása – struktúra, tartalom, navigáció, design
- Hibákból való visszaállás a terv közepén, anélkül, hogy kézi beavatkozásra lenne szükség
- Ajánlott pluginok telepítése a folyamat részeként
- Kapcsolattartási űrlapok létrehozása közvetlenül a chat felületéről (Superdav AI Agent v1.10.0+)

**Indító javaslatok:**
- *Építsen egy fotóportfólió oldalt egy galéria post type-al, egy foglalási oldallal és egy kapcsolatfelvételi űrlappal.*
- *Létrehozjon egy éttermi weboldalt online menüvel, nyitvatartással és asztalfoglalási érdeklődés űrlappal.*
- *Állítsen be egy független konzultációs oldalt szolgáltatási oldalakkal, portfólió szekcióval és bloggal.*
- *Adjon hozzá egy kapcsolatfelvételi űrlapot a Kapcsolat oldalhoz az oldalépítő segítségével.*

---

### Design Studio

**Fókusz:** Vizsualizációs testreszabás – színek, tipográfia, CSS és blokkmusterok.

**Elérhető eszközök:** `inject_custom_css`, `apply_theme_json_preset`, `get_global_styles`, `set_global_styles`, `reset_global_styles`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `capture_screenshot`, `review_page_design`

**Mit csinál jól:**
- Nevezett téma előállítások alkalmazása (minimal-dark, warm-editorial, corporate-blue, vibrant-startup, classic-blog)
- Globális tipográfia és színelet finomhangolása a theme.json segítségével
- Custom CSS beépítése márka-specifikus átírásokhoz
- Oldal képernyőképe készítése és designproblémák szempontjából áttekintése

**Indító javaslatok:**
- *Alkalmazza az „warm-editorial” előállítást, majd állítsa be a fő színt a #2d6a4f-re.*
- *Készítsen egy képernyőképet az oldalon, és mondja el, mit javíthatok.*
- *Létrehozjon egy újrahasznosítható hősblokk musteret teljes szélességű háttérképpel és középre helyezett címmel.*

---

### Plugin Manager

**Fókusz:** WordPress pluginek felfedezése, telepítése és kezelése.

**Elérhető eszközök:** `list_available_abilities`, `install_ability`, `recommend_plugin`, `get_option`, `set_option`

**Mit csinál jól:**
- Ajánlott a legjobb pluginet a leírt felhasználási területhez
- Képességi csomagok telepítése a regisztrációból
- Elérhető képességi katalógus böngészése kategóriák szerint

**Indító javaslatok:**
- *Mi a legjobb plugin egy tagságkönyvhez?*
- *Telepíteni a WooCommerce képességi csomagot.*
- *Mutassa meg az összes elérhető e-commerce képességi csomagot.*

---

### Support Assistant

**Fókusz:** Válaszok adása az oldal tartalmáról, beállításairól és a WordPress konfigurációjáról.

**Elérhető eszközök:** `get_option`, `list_options`, `list_post_types`, `list_taxonomies`, `list_menus`, `list_available_abilities`

**Mit csinál jól:**
- Az aktuális oldali beállítások és opciók lekérdezése
- Elmagyarázza, milyen post type-ok, taxonomiek és menük vannak konfigurálva az oldalon
- "Mit csinál ez a beállítás?" kérdésekre válaszol élő értékek olvasásával
- Olvasásra szánt diagnosztikai rétegként szolgál a változtatások előtt

**Indító javaslatok:**
- *Milyen pluginek és beállítások vannak jelenleg aktívak ezen az oldalon?*
- *Listázza az összes regisztrált custom post type-ot ezen az oldalon.*
- *Milyen navigációs menük léteznek, és hol vannak hozzárendelve?*

---

## Ügynökok Testreszabása

Minden beépített ügynöket a `gratis_ai_agent_agents` szűrő segítségével kiterjeszhetjük vagy helyettesíthetjük.

### Egy meglévő ügynökhez egy custom rendszeres utasítás hozzáadása

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    if ( isset( $agents['content-writer'] ) ) {
        $agents['content-writer']['system_prompt'] .= "\n\nAlways write in British English and use the Oxford comma.";
    }
    return $agents;
} );
```

### Egy új ügynök regisztrálása

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    $agents['seo-specialist'] = [
        'name'          => 'SEO Specialist',
        'description'   => 'Optimises posts and pages for search engines.',
        'icon'          => 'dashicons-search',
        'tools'         => [ 'get_option', 'set_option', 'create_post', 'update_post', 'list_post_types' ],
        'system_prompt' => 'You are an SEO specialist. Focus on keyword optimisation, meta descriptions, and structured data.',
        'suggestions'   => [
            'Review the homepage title and meta description.',
            'Suggest title tag improvements for the five most recent posts.',
        ],
    ];
    return $agents;
} );
```

Az új ügynök azonnal látható az Ügynök Kiválasztóban, miután a szűrő fut.

### Egy beépített ügynök eltávolítása

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    unset( $agents['plugin-manager'] );
    return $agents;
} );
```

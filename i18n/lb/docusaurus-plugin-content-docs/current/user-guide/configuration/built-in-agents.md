---
title: Integrierti Agenten
sidebar_position: 12
_i18n_hash: 4852fdc3ddd1a44a574c100846e84dc5
---
# Inhäi-Agenten

Gratis AI Agent v1.9.0 schieft fünf integrierti Agenten mit, jede vorab konfiguriert mit eme spezifische Set vo Tools, eme individuell gschaltete System Prompt und Startvorschläg, wo uf üblichi Ufgabe in dere Bereich abgstimmt sind. D'Umschaltig zwüsche de Agenten ändert, was de Assistent mache kann und wie er reagiert – ohni dass Sie irgendetwas konfiguriere müesse.

## Was isch en Agent?

Jede Agent isch en benannti Konfigurationsprofil, wo folgendes kombiniert:

- **Tools** — d'Fähigkeite, wo de Agent ufrufe darf (z.B. hät en Content Writer Zuegang zu Post-Erstelligsfähikeiten; en Design Studio hät Zuegang zu CSS und theme.json Fähigkeite)
- **System prompt** — Aawisige, wo de Ton, d'Prioritäte und d'Beschränkige vom Agenten festlege
- **Suggestions** — vorab gschriebeni Prompts, wo im Chat-Interface zeigt wärde, um Ihne schnäll z'starte

## Zuegang zum Agent Picker

1. Öffne s'Panel **Gratis AI Agent** i de WordPress Admin Sidebar.
2. Klicke uf s'**agent icon** i de obe links vom Chat Header (s'Icon ändert sich, um de aktive Agent widerzspiegle).
3. De **Agent Picker** öffnet sich als Form-Tabelle Overlay. Jede Agent isch mit sim Icon, Name und eme einzeilige Beschribig ufglischtet.
4. Klicke uf en Agent-Reihe, um ihn z'aktiviere. De Chat Header wird sofort aktualisiert.

Sie chönd au zwüsche de Konversation Agenten umschalte – de System Prompt vom neue Agent tritt ab em nächste Nachricht in Kraft.

## D'Fünf integrierte Agenten

### Content Writer

**Fokus:** Erstelle und bearbeite vo Posts, Seite und Kontaktformular.

**Verfügbari Tools:** `create_post`, `update_post`, `batch_create_posts`, `set_featured_image`, `create_contact_form`, `get_option`, `list_post_types`

**Was guet macht:**
- Blogposts usschriebe und veröffentliche us ere Kurzbeschriibig oder Struktur
- Stapel vo Landing Pages für e neui Site erstelle
- Kontakt- und Anfrageformular aabou
- Featured Images uf Posts usere URL oder Suechi setze

**Startvorschläg:**
- *Schriib en 500-Wort-Blogpost über d'Vorteil vo WordPress Multisite.*
- *Erstelle e Über, Dienstleistige und Kontaktseite und veröffentliche die.*
- *Füeg es Buchigsanfrageformular zur Kontaktseite bi.*

---

### Site Builder

**Fokus:** End-to-End Website-Erstelllig us ere einzelne Ufgab.

**Verfügbari Tools:** `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`, `create_post`, `batch_create_posts`, `register_post_type`, `create_menu`, `add_menu_item`, `inject_custom_css`, `apply_theme_json_preset`, `install_ability`, `recommend_plugin`, `create_contact_form`

**Was guet macht:**
- E mehphasige Site-Erstelligsplan für e beschribte Gschäftsart generiere
- Jede Phase automatisch usfüehre — Struktur, Inhalt, Navigation, Design
- Us Fehlern mitten im Plan wiederherstelle ohni manuelli Iigriff z'brauche
- Empfohleni Plugins als Teil vo de Erstelllig installiere
- Kontaktformular direkt us de Chat-Schnittstell erstelle (Superdav AI Agent v1.10.0+)

**Startvorschläg:**
- *E Fotografie-Portfolio-Site mit eme Galerie Post Type, ere Buchigsseite und eme Kontaktformular ufbaue.*
- *E Restaurant-Website mit em Online-Menü, Öffnungszite und eme Tischreservierigsanfrageformular erstelle.*
- *E Freelance-Beratigs-Site mit Dienstleistungsseiten, eme Portfolio-Abschnitt und eme Blog ufboue.*
- *Mit em Site Builder es Kontaktformular zur Kontaktseite hinzufüge.*

---

### Design Studio

**Fokus:** Visuelli Anpassig — Farbe, Typografie, CSS und Blockmuster.

**Verfügbari Tools:** `inject_custom_css`, `apply_theme_json_preset`, `get_global_styles`, `set_global_styles`, `reset_global_styles`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `capture_screenshot`, `review_page_design`

**Was es guet macht:**
- Namensbasierti theme presets (minimal-dark, warm-editorial, corporate-blue, vibrant-startup, classic-blog) aawende
- Globali Typografie und Farbpalette feinjustiere via theme.json
- Custom CSS iinjize für brand-spezifischi Üeberlegige
- E Screenshot vo ere Seite mache und die für Designproblem überprüefe

**Startvorschläg:**
- *Wende d'warm-editorial preset a und set de primäri Farb uf #2d6a4f.*
- *Mache en Screenshot vo de Homepage und säg mir, was du verbessere würdsch.*
- *Erstelle en wiederverwendbare hero block pattern mit eme vollbreiti Hintergrundbild und ere zentrierte Überschrift.*

---

### Plugin Manager

**Fokus:** WordPress plugins finde, installiere und verwalte.

**Verfügbari Tools:** `list_available_abilities`, `install_ability`, `recommend_plugin`, `get_option`, `set_option`

**Was es guet macht:**
- De beschti Plugin für en beschribte Anwendungsfall empfehle
- Ability packs us em Registry installiere
- De verfügbari ability catalogue nach Kategorie durchsuchen

**Startvorschläg:**
- *Was isch s'beschti Plugin für en Mitgliedschaftsdirektorium?*
- *Installier de WooCommerce abilities pack.*
- *Zeig mir alli verfügbare ecommerce ability packs.*

---

### Support Assistant

**Fokus:** Froge zu Site Inhalt, Iistellige und WordPress Konfiguration beantworte.

**Verfügbari Tools:** `get_option`, `list_options`, `list_post_types`, `list_taxonomies`, `list_menus`, `list_available_abilities`

**Was guet:**
- Aktuelli Site-Iistellige und -Optionen abrufe.
- Erkläre, was Post Types, Taxonomien und Menüs uf de Site konfiguriert sind.
- Froge wie "was macht die Iistellig?" beantworte, indem live Wärt gläse wärde.
- Als leslichi Diagnose-Schicht vor Änderige diene.

**Startvorschläg:**
- *Welchi Plugins und Iistellige sind aktuell uf dere Site aktiv?*
- *List all d'Custom Post Types, wo uf dere Site registriert sind.*
- *Welchi Navigationsmenüs git es und wo sind die zuewiese?*

---

## Customising Agents (Agenten anpasse)

Jede integrierti Agent chan dur de Filter `gratis_ai_agent_agents` erweitert oder ersetzt wärde.

### Eigene System Prompt zu eme bestehende Agent hinzufüge

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    if ( isset( $agents['content-writer'] ) ) {
        $agents['content-writer']['system_prompt'] .= "\n\nAlways write in British English and use the Oxford comma.";
    }
    return $agents;
} );
```

### Ene neui Agent registriere

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

De nöi Agent chunnt sofort nach em Filter lauft, i de Agent Picker.

### Entferne en integrierte Agent

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    unset( $agents['plugin-manager'] );
    return $agents;
} );
```

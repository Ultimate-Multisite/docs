---
title: Vbudované agenti
sidebar_position: 12
_i18n_hash: 4852fdc3ddd1a44a574c100846e84dc5
---
# Vstredné Agenti

Gratis AI Agent v1.9.0 obsahuje päť štvorcov agentov, z ktorých každý je predkonfigurovaný s konkrétnym súborom nástrojov, špeciálnym systémovým promptom a návrhmi na začiatok, ktoré sú určené pre bežné úlohy v danej oblasti. Premienenie medzi agentmi zmení to, čo asistent môže robiť a ako odpovedá — bez toho, aby ste museli nič konfigurárovať.

## Čo je Agent?

Každý agent je menovo konfiguračný profil, ktorý kombinuje:

- **Nástroje (Tools)** — schopnosti, ktoré agent má právo vybrať (napríklad Content Writer má prístup k schopnostiam vytvárania obsahu; Design Studio má prístup k CSS a theme.json).
- **Systémový prompt** — pokyny, ktoré nastavujú tón, priority a obmedzenia agenta.
- **Návrhy (Suggestions)** — predpísané prompty zobrazené v chate, aby ste sa rýchlo začali.

## Prístup k Výberu Agentov

1. Otvorte panel **Gratis AI Agent** v laterálnej paneli WordPress admin.
2. Kliknite na **ikónu agenta** v ľavom hornom rohu hlavičky chatu (ikóna sa zmení, aby odrážala aktívneho agenta).
3. Otevrie sa **Agent Picker** ako prepojenie v podobe tabulky s formulárom. Každý agent je uvedený so svojou ikonou, názvom a jednoradovým popisom.
4. Kliknite na riadok agenta, aby ste ho aktivovali. Hlavička chatu sa okamžite aktualizuje.

Možete tiež premeniť agent v priebehu konverzácie — systémový prompt nového agenta bude platť od nasledujúcej správy.

## Päť Vstredných Agentov

### Content Writer (Vytvárač Obsahu)

**Fokus:** Vytváranie a upravovanie prístupov, stránok a formulárov kontaktov.

**Dostupné nástroje:** `create_post`, `update_post`, `batch_create_posts`, `set_featured_image`, `create_contact_form`, `get_option`, `list_post_types`

**Čo robí dobre:**
- Návrh a publikovanie blogových príspevkov z krátkeho návrhu alebo štruktúry
- Vytváranie sad (batch) landing stran pre novú webovku
- Vytváranie formulárov na kontakt a dotazy
- Nastavenie pôvodných obrázkov na príspevky z URL alebo vyhľadávania

**Počátečné návrhy:**
- *Napísať blogový príspevok o výhodách WordPress multisite s 500 slovami.*
- *Vytvoriť stránku O nás, Služby a Kontakt a zverejniť ich.*
- *Pridaj formulár na rezerváciu dotazov na kontaktnú stránku.*

---

### Site Builder (Budovateľ webu)

**Zamiera sa na:** Kompletnú tvorbu webovej stránky z jedného popisu.

**Dostupné nástroje:** `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`, `create_post`, `batch_create_posts`, `register_post_type`, `create_menu`, `add_menu_item`, `inject_custom_css`, `apply_theme_json_preset`, `install_ability`, `recommend_plugin`, `create_contact_form`

**Čo robí dobre:**
- Generovanie plánu budovania webovej stránky v niekoľkých fázach pre popísaný typ firmy
- Autonomné vykonávanie každej fázy — štruktúra, obsah, navigácia, dizajn
- Vyhnutie sa chybám počas plánovania bez potreby manuálnej intervencie
- Instalácia odporúčaných pluginov ako súčasť budovania
- Vytváranie formulárov na kontakt priamo z chatového rozhrania (Superdav AI Agent v1.10.0+)

**Počátečné návrhy:**
- *Vytvoriť portfoliálny web s fotografiami, typom príspevku galéria, stránkou pre rezervácie a formulárom na kontakt.*
- *Vytvoriť webu reštaurácie s online menu, pracovnými hodinami a formulárom na dotaz o rezerváciu stolu.*
- *Nastaviť web s konzultáciami pre nezávislé firmy so stránkami služieb, sekciou portfolia a blogom.*
- *Pridaj formulár na kontakt na kontaktnú stránku pomocou Site Builderu.*

---

### Design Studio (Stúdiá dizajnu)

**Zamiera sa na:** Visuálnu personalizáciu — farby, typografie, CSS a blokové vzory.

**Dostupné nástroje:** `inject_custom_css`, `apply_theme_json_preset`, `get_global_styles`, `set_global_styles`, `reset_global_styles`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `capture_screenshot`, `review_page_design`

**Čo robí dobre:**
- Aplikovanie preddefinovaných šablon (napr. minimal-dark, warm-editorial, corporate-blue, vibrant-startup, classic-blog)
- Dolepňovanie globálnej typografie a palety farieb pomocou theme.json
- Injekcia prispôsobeného CSS pre nadpisové zmeny na značku
- Zber snímky obrazovky stránky a jej prehodnotenie na vizuálne problémy

**Počátečné návrhy:**
- *Aplikujte šablon warm-editorial a potom nastavte primárnu farbu na #2d6a4f.*
- *Zberte snímku obrazovky domáce stránky a povedzte mi, čo by ste zlepšili.*
- *Vytvorte opakovaný blok vzoru hero s plným šírkou pozadovým obrázkom a centrálným nadpisom.*

---

### Plugin Manager (Manažér doplnkov)

**Zaměření:** Odhalenie, inštalácia a správa WordPress pluginov.

**Dostupné nástroje:** `list_available_abilities`, `install_ability`, `recommend_plugin`, `get_option`, `set_option`

**Čo robí dobre:**
- Doporučovanie najlepšieho doplnku pre popísaný prípad použitia
- Inštalácia balíkov schopností z registru
- Prehliadka dostupného katalógu schopností podľa kategórií

**Počátečné návrhy:**
- *Aký je najlepšie doplnok na členovskú dizajnovú stránku?*
- *Inštalujte balík schopností WooCommerce.*
- *Zákažte mi všetky dostupné balíky schopností e-commerce.*

---

### Support Assistant (Asistent podporky)

**Zaměření:** Odpovedanie na otázky týkajúce obsahu stránky, nastavení a konfiguračného WordPress.

**Dostupné nástroje:** `get_option`, `list_options`, `list_post_types`, `list_taxonomies`, `list_menus`, `list_available_abilities`

**Čo robí dobre:**
- Hľadá aktuálne nastavenia a možnosti stránky.
- Vysvetľuje, aké post-typy, taxonomie a mená sú na stránke.
- Odpovedá na otázky typu „čo to nastavenie robí?“ čítanie živých hodnôt.
- Slúži ako čitateľný diagnostický vrstva pred zmenou.

**Počiatokové návrhy:**
- *Aký plugin a nastavenia sú momentálne aktívne na tejto stránke?*
- *Vypísať všetky prispôsobené post-typy zaregistrované na tejto stránke.*
- *Aká navigácia mená existujú a kde sú priradené?*

---

## Prispôsobenie agentov (Customising Agents)

Každý vbudovaný agent sa dá rozšíriť alebo nahradiť pomocou filtru `gratis_ai_agent_agents`.

### Pridanie vlastného systémového promptu do existujúceho agenta

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    if ( isset( $agents['content-writer'] ) ) {
        $agents['content-writer']['system_prompt'] .= "\n\nAlways write in British English and use the Oxford comma.";
    }
    return $agents;
} );
```

### Registrácia nového agenta

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    $agents['seo-specialist'] = [
        'name'          => 'SEO Specialist',
        'description'   => 'Optimalizuje posty a stránky pre vyhľadávače.',
        'icon'          => 'dashicons-search',
        'tools'         => [ 'get_option', 'set_option', 'create_post', 'update_post', 'list_post_types' ],
        'system_prompt' => 'Jsi SEO špecialista. Zameraj sa na optimalizáciu kľúčových slov, metaopisy a štruktúrované dáta.',
        'suggestions'   => [
            'Prejdite prehlédnutie názvu stránky a metaopisu.',
            'Navrhnutie zlepšenia tagu názvu pre päť najnovších postov.',
        ],
    ];
    return $agents;
} );
```

Nový agent sa objaví okamžite po vykonaní filtra v vyvolaní voči Agent Picker.

### Odstrenenie vbuilt instantného agenta

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    unset( $agents['plugin-manager'] );
    return $agents;
} );
```

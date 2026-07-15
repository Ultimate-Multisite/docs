---
title: Vstavaní agenti
sidebar_position: 12
_i18n_hash: a89717a9bbb03aa1da4d264e01acf11a
---
# Vstavaní agenti

Gratis AI Agent v1.9.0 obsahuje päť vstavaných agentov, každý je predkonfigurovaný so zameranou sadou nástrojov, prispôsobeným systémovým promptom a úvodnými návrhmi zodpovedajúcimi bežným úlohám v danej oblasti. Prepínanie medzi agentmi mení to, čo môže asistent robiť a ako odpovedá — bez akejkoľvek konfigurácie z vašej strany. Superdav AI Agent v1.18.0 môže do týchto pracovných postupov pridať nástroje zohľadňujúce rozvrh, záznamy pripomienok, schvaľovacie brány a SMS upozornenia, keď sú nakonfigurované súvisiace integrácie.

## Čo je agent? {#what-is-an-agent}

Každý agent je pomenovaný konfiguračný profil, ktorý kombinuje:

- **Nástroje** — schopnosti, ktoré agent môže vyvolať (napr. Content Writer má prístup k schopnostiam vytvárania príspevkov; Design Studio má prístup k schopnostiam CSS a theme.json)
- **Systémový prompt** — pokyny, ktoré určujú tón, priority a obmedzenia agenta
- **Návrhy** — predpripravené prompty zobrazené v chatovom rozhraní, ktoré vám pomôžu rýchlo začať

## Prístup k výberu agenta {#accessing-the-agent-picker}

1. Otvorte panel **Gratis AI Agent** v bočnom paneli administrácie WordPress.
2. Kliknite na **ikonu agenta** v ľavom hornom rohu hlavičky chatu (ikona sa mení podľa aktívneho agenta).
3. **Výber agenta** sa otvorí ako prekrytie vo forme tabuľky formulára. Každý agent je uvedený so svojou ikonou, názvom a jednoriadkovým popisom.
4. Kliknutím na riadok agenta ho aktivujete. Hlavička chatu sa okamžite aktualizuje.

Agentov môžete prepínať aj uprostred konverzácie — systémový prompt nového agenta sa uplatní od nasledujúcej správy.

## Päť vstavaných agentov {#the-five-built-in-agents}

### Content Writer {#content-writer}

**Zameranie:** Vytváranie a úprava príspevkov, stránok a kontaktných formulárov.

**Dostupné nástroje:** `create_post`, `update_post`, `batch_create_posts`, `set_featured_image`, `create_contact_form`, `get_option`, `list_post_types`. So zapnutými integráciami Superdav AI Agent v1.18.0 môžu byť pre schválené pracovné postupy dostupné aj nakonfigurovaný kontext kalendára, schvaľovacie brány, pripomienky a nástroje SMS upozornení.

**V čom vyniká:**
- Písanie návrhov a publikovanie blogových príspevkov podľa zadania alebo osnovy
- Vytváranie dávok vstupných stránok pre novú stránku
- Tvorba kontaktných a dopytových formulárov
- Nastavovanie ilustračných obrázkov pri príspevkoch z URL alebo vyhľadávania
- Písanie následných správ po udalosti z nakonfigurovaného kontextu Google Calendar a následné pozastavenie na schválenie pred odoslaním upozornení

**Úvodné návrhy:**
- *Napíš 500-slovný blogový príspevok o výhodách WordPress multisite.*
- *Vytvor stránky O nás, Služby a Kontakt a publikuj ich.*
- *Pridaj na stránku Kontakt formulár dopytu na rezerváciu.*
- *Priprav pripomienku pre účastníkov zajtrajšej nakonfigurovanej udalosti v kalendári a pred jej odoslaním počkaj na schválenie.*

---

### Site Builder {#site-builder}

**Zameranie:** Kompletná tvorba webovej stránky z jedného promptu.

**Dostupné nástroje:** `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`, `create_post`, `batch_create_posts`, `register_post_type`, `create_menu`, `add_menu_item`, `inject_custom_css`, `apply_theme_json_preset`, `install_ability`, `recommend_plugin`, `create_contact_form`. So Superdav AI Agent v1.18.0 môžu byť dostupné nakonfigurované nástroje spravovanej služby, schvaľovania, pripomienok, kalendára a SMS tam, kde ich správcovia povolia.

**V čom vyniká:**
- Generovanie viacfázového plánu tvorby webu pre opísaný typ podnikania
- Autonómne vykonanie každej fázy — štruktúra, obsah, navigácia, dizajn
- Zotavenie sa z chýb uprostred plánu bez potreby manuálneho zásahu
- Inštalácia odporúčaných pluginov ako súčasť tvorby
- Vytváranie kontaktných formulárov priamo z chatového rozhrania (Superdav AI Agent v1.10.0+)
- Koordinácia pripomienok spustenia alebo následnej komunikácie s účastníkmi bez duplicitných upozornení, keď sú povolené schvaľovacie brány a záznamy pripomienok

**Úvodné návrhy:**
- *Vytvor web portfólia fotografa s typom príspevku galéria, rezervačnou stránkou a kontaktným formulárom.*
- *Vytvor web reštaurácie s online menu, otváracími hodinami a dopytovým formulárom na rezerváciu stola.*
- *Nastav web pre nezávislé poradenstvo so stránkami služieb, sekciou portfólia a blogom.*
- *Pridaj kontaktný formulár na stránku Kontakt pomocou site buildera.*
- *Po schválení kontrolného zoznamu spustenia webu pošli SMS pripomienku nakonfigurovanému kontaktu zainteresovanej osoby.*

---

### Design Studio {#design-studio}

**Zameranie:** Vizuálne prispôsobenie — farby, typografia, CSS a vzory blokov.

**Dostupné nástroje:** `inject_custom_css`, `apply_theme_json_preset`, `get_global_styles`, `set_global_styles`, `reset_global_styles`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `capture_screenshot`, `review_page_design`

**V čom vyniká:**
- Aplikovanie pomenovaných predvolieb témy (minimal-dark, warm-editorial, corporate-blue, vibrant-startup, classic-blog)
- Jemné dolaďovanie globálnej typografie a farebných paliet cez theme.json
- Vkladanie vlastného CSS pre úpravy špecifické pre značku
- Vytvorenie snímky obrazovky stránky a jej posúdenie z hľadiska dizajnových problémov

**Úvodné návrhy:**
- *Použi predvoľbu warm-editorial a potom nastav primárnu farbu na #2d6a4f.*
- *Urob snímku obrazovky domovskej stránky a povedz mi, čo by si zlepšil.*
- *Vytvor opakovane použiteľný vzor hero bloku s obrázkom na pozadí na plnú šírku a centrovaným nadpisom.*

### Plugin Manager {#plugin-manager}

**Zameranie:** Vyhľadávanie, inštalácia a správa WordPress pluginov.

**Dostupné nástroje:** `list_available_abilities`, `install_ability`, `recommend_plugin`, `get_option`, `set_option`

**V čom vyniká:**
- Odporúčanie najlepšieho pluginu pre opísaný prípad použitia
- Inštalácia balíkov schopností z registra
- Prehliadanie dostupného katalógu schopností podľa kategórie

**Úvodné návrhy:**
- *Aký je najlepší plugin pre adresár členstiev?*
- *Nainštaluj balík schopností WooCommerce.*
- *Ukáž mi všetky dostupné balíky schopností pre ecommerce.*

---

### Support Assistant {#support-assistant}

**Zameranie:** Odpovedanie na otázky o obsahu stránky, nastaveniach a konfigurácii WordPress.

**Dostupné nástroje:** `get_option`, `list_options`, `list_post_types`, `list_taxonomies`, `list_menus`, `list_available_abilities`

**Čo robí dobre:**
- Vyhľadávanie aktuálnych nastavení a možností webu
- Vysvetľovanie, aké typy príspevkov, taxonómie a menu sú nakonfigurované na webe
- Odpovedanie na otázky typu „čo robí toto nastavenie?“ čítaním živých hodnôt
- Slúži ako diagnostická vrstva iba na čítanie pred vykonaním zmien

**Úvodné návrhy:**
- *Aké pluginy a nastavenia sú momentálne aktívne na tomto webe?*
- *Vypíš všetky vlastné typy príspevkov registrované na tomto webe.*
- *Aké navigačné menu existujú a kde sú priradené?*

---

## Integrácie automatizácie Superdav {#superdav-automation-integrations}

Keď sú nakonfigurované integrácie Superdav AI Agent v1.18.0, vstavaní agenti sa môžu zapojiť do bezpečnejších automatizačných pracovných postupov zohľadňujúcich plánovanie:

- **Nástroje na čítanie Google Calendar** umožňujú agentom skontrolovať nakonfigurované kalendáre a udalosti pred prípravou nadväzujúcej práce.
- **Mapovanie kontaktov a účastníkov** pomáha priradiť účastníkov udalosti k používateľom WordPress alebo známym kontaktom.
- **Brány ľudského schválenia** pozastavia citlivé akcie, kým ich oprávnený používateľ neskontroluje a nepotvrdí.
- **Záznamy pripomienok** zabraňujú duplicitným upozorneniam, keď sa naplánované úlohy opakujú alebo spúšťajú znova.
- **TextBee SMS upozornenia** odosielajú nakonfigurované textové správy iba vtedy, keď sú povolené SMS prihlasovacie údaje a oprávnenia pracovného postupu.

Odporúčaný pracovný postup: požiadajte agenta, aby pripravil správu alebo akciu, skontrolujte výzvu na schválenie a potom povoľte pokračovanie schválenej akcie. Pri opakujúcich sa pripomienkach nechajte zapnutú deduplikáciu pripomienok, aby tá istá udalosť alebo kontakt nebol opakovane upozorňovaný.

---

## Prispôsobenie agentov {#customising-agents}

Každý vstavaný agent môže byť rozšírený alebo nahradený prostredníctvom filtra `gratis_ai_agent_agents`.

### Pridanie vlastnej systémovej výzvy k existujúcemu agentovi {#adding-a-custom-system-prompt-to-an-existing-agent}

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    if ( isset( $agents['content-writer'] ) ) {
        $agents['content-writer']['system_prompt'] .= "\n\nAlways write in British English and use the Oxford comma.";
    }
    return $agents;
} );
```

### Registrácia nového agenta {#registering-a-new-agent}

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

Nový agent sa zobrazí v Agent Picker okamžite po spustení filtra.

### Odstránenie vstavaného agenta {#removing-a-built-in-agent}

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    unset( $agents['plugin-manager'] );
    return $agents;
} );
```

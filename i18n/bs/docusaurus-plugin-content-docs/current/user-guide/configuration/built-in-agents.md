---
title: Ugrađeni agenti
sidebar_position: 12
_i18n_hash: 4852fdc3ddd1a44a574c100846e84dc5
---
# Ugrađeni Agenti

Gratis AI Agent v1.9.0 dolazi sa pet ugrađenih agenata, svaki od kojih je unaprijed konfigurisan sa fokusiranim setom alata, prilagođenim sistem promptom i početnim predlozima usklađenim sa uobičajenim zadacima u toj oblasti. Prebacivanje između agenata mijenja ono što asistent može da radi i kako odgovara — bez ikakve konfiguracije sa vaše strane.

## Šta je Agent?

Svaki agent je imenovani profil konfiguracije koji kombinuje:

- **Alati (Tools)** — sposobnosti koje agent smije da pozove (npr. Content Writer ima pristup mogućnostima kreiranja sadržaja; Design Studio ima pristup CSS i theme.json mogućnostima)
- **Sistem prompt (System prompt)** — uputstva koja postavljaju ton, prioritete i ograničenja agenta
- **Predlozi (Suggestions)** — unaprijed napisani promptovi prikazani u chat interfejsu kako bi vam pomogli da brzo počnete

## Pristup Agent Picker-u

1. Otvorite panel **Gratis AI Agent** u WordPress admin sidebar-u.
2. Kliknite na **agent ikonu** u gornjem lijevom uglu chat zaglavlja (ikona se mijenja kako bi odražavala aktivnog agenta).
3. **Agent Picker** se otvara kao overlay u obliku tabele. Svaki agent je naveden sa svojom ikonom, imenom i jednoj liniji opisa.
4. Kliknite na red agenta da ga aktivirate. Chat zaglavlje se odmah ažurira.

Možete prebacivati agente i tokom razgovora — sistem prompt novog agenta stupa na snagu od sljedeće poruke.

## Pet Ugrađenih Agenta

### Content Writer

**Fokus:** Kreiranje i uređivanje postova, stranica i kontakt formulara.

**Dostupni alati:** `create_post`, `update_post`, `batch_create_posts`, `set_featured_image`, `create_contact_form`, `get_option`, `list_post_types`

**Šta radi dobro:**
- Izrada i objavljivanje blog postova na osnovu sažetka ili nacrta
- Kreiranje serija odredišnih stranica (landing pages) za novi sajt
- Izgradnja kontakt i upitnika formulara
- Postavljanje glavnih slika (featured images) na postove iz URL-a ili pretrage

**Početni predlozi:**
- *Napišite blog post od 500 riječi o prednostima WordPress multisite.*
- *Kreirajte stranice o nama, usluge i kontakt i objavite ih.*
- *Dodajte formular za upite o rezervaciji na stranicu za kontakt.*

---

### Site Builder

**Fokus:** Kreiranje cijelog sajta od jednog prompta.

**Dostupni alati:** `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`, `create_post`, `batch_create_posts`, `register_post_type`, `create_menu`, `add_menu_item`, `inject_custom_css`, `apply_theme_json_preset`, `install_ability`, `recommend_plugin`, `create_contact_form`

**Šta radi dobro:**
- Generisanje višefaznog plana izgradnje sajta za opisani tip poslovanja
- Izvršavanje svake faze autonomno — struktura, sadržaj, navigacija, dizajn
- Oporavak od grešaka usred plana bez potrebe za ručnom intervencijom
- Instaliranje preporučenih pluginova kao dio izgradnje
- Kreiranje kontakt formulara direktno iz chat interfejsa (Superdav AI Agent v1.10.0+)

**Početni predlozi:**
- *Izgradite sajt za portfolio fotografa sa tipom postova galerija, stranicom za rezervaciju i kontakt formularom.*
- *Kreirajte sajt restorana sa online menijem, radnim satima i formularom za upite o rezervaciji stola.*
- *Postavite sajt za freelance savjetovanje sa stranicama usluga, sekcijom portfolija i blogom.*
- *Dodajte kontakt formular na stranicu za kontakt koristeći site builder.*

---

### Design Studio

**Fokus:** Vizuelna prilagodba — boje, tipografija, CSS i blok obrasci.

**Dostupni alati:** `inject_custom_css`, `apply_theme_json_preset`, `get_global_styles`, `set_global_styles`, `reset_global_styles`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `capture_screenshot`, `review_page_design`

**Šta radi dobro:**
- Primjena imenovanih tema predizmeta (minimal-dark, warm-editorial, corporate-blue, vibrant-startup, classic-blog)
- Finelajning globalne tipografije i palete boja putem theme.json-a
- Ubacivanje prilagođenog CSS-a za specifične izmjene brenda
- Snimanje snimka ekrana stranice i pregledavanje dizajna na probleme

**Početni predlozi:**
- *Primijenite predizmet warm-editorial, a zatim postavite primarnu boju na #2d6a4f.*
- *Snimite snimak ekrana početne stranice i recite mi šta biste poboljšali.*
- *Kreirajte ponovno upotrebljiv hero blok obrasac sa punoj širini pozadinskom slikom i centriranim naslovom.*

---

### Plugin Manager

**Fokus:** Otkrivanje, instaliranje i upravljanje WordPress pluginovima.

**Dostupni alati:** `list_available_abilities`, `install_ability`, `recommend_plugin`, `get_option`, `set_option`

**Šta radi dobro:**
- Preporučivanje najboljeg plugin-a za opisani slučaj upotrebe
- Instaliranje paketa mogućnosti (ability packs) iz registra
- Pregled dostupnog kataloga mogućnosti po kategorijama

**Početni predlozi:**
- *Koji je najbolji plugin za direktorijum članstva (membership directory)?*
- *Instalirajte WooCommerce ability pack.*
- *Prikažite sve dostupne e-commerce ability pakete.*

---

### Support Assistant

**Fokus:** Odgovaranje na pitanja o sadržaju sajta, podešavanjima i WordPress konfiguraciji.

**Dostupni alati:** `get_option`, `list_options`, `list_post_types`, `list_taxonomies`, `list_menus`, `list_available_abilities`

**Šta radi dobro:**
- Pregled trenutnih postavki i opcija sajta
- Objašnjavanje šta su post tipovi, taksonomije i meniji konfigurisani na sajtu
- Odgovaranje na pitanja "šta radi ovo podešavanje?" čitanjem živih vrijednosti
- Uloga kao samo-čitački dijagnostički sloj prije nego što se nešto promijeni

**Početni predlozi:**
- *Koje pluginove i postavke su trenutno aktivne na ovom sajtu?*
- *Navedite sve custom post tipove registrovane na ovom sajtu.*
- *Koje navigacione menije postoje i gdje su dodijeljeni?*

---

## Prilagođavanje Agenta

Svaki ugrađeni agent može se proširiti ili zamijeniti putem filtera `gratis_ai_agent_agents`.

### Dodavanje custom sistem prompt-a postojećem agentu

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    if ( isset( $agents['content-writer'] ) ) {
        $agents['content-writer']['system_prompt'] .= "\n\nAlways write in British English and use the Oxford comma.";
    }
    return $agents;
} );
```

### Registracija novog agenta

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

Novi agent se pojavljuje u Agent Picker-u odmah nakon što filter prođe.

### Uklanjanje ugrađenog agenta

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    unset( $agents['plugin-manager'] );
    return $agents;
} );
```

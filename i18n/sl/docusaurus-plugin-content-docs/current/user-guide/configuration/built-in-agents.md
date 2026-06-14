---
title: Vgrajeni agenti
sidebar_position: 12
_i18n_hash: 4852fdc3ddd1a44a574c100846e84dc5
---
# Vgraženi Agenti

Gratis AI Agent v1.9.0 prinaša pet vgrajenih agentov, ki so predkonfigurisani z fokusiranim skupinom orodij, prilagojenim sistemnim promptom in začetnimi predlogi, prilagojenimi pogostim zadetkom v tem območju. Preklapanje med agenti spremeni, kaj asistent lahko naredi in kako bo odgovarjal — brez kakršne koli konfiguracije z vaše strani.

## Kaj je Agent?

Vsak agent je imenovani profil konfiguracije, ki združuje:

- **Orodja (Tools)** — sposobnosti, ki mu je dovoljeno uporabiti (npr. Content Writer ima dostop do sposobnosti ustvarjanja postov; Design Studio ima dostop do CSS in theme.json sposobnosti)
- **Sistemni prompt** — navodila, ki določajo ton, prioritete in omejitve agenta
- **Predlogi (Suggestions)** — predpisani prompti, ki se prikazujejo v spletnem interfejsu za pomoč pri hitrem začetku

## Dostop do Agent Pickera

1. Odprite panel **Gratis AI Agent** v strani admina WordPressa.
2. Kliknite na **ikono agenta** v zgornjem levi kotu razpoložljivosti za chat (ikona se spremeni, da odraža aktivnega agenta).
3. Se **Agent Picker** odpre kot overlay z tabelo. Vsak agent je naveden z svojo ikono, imenom in enostavnim opisom.
4. Kliknite na red agenta, da ga aktivirate. Zgornji naslov chat se takoj spremeni.

Morate lahko preklapate agente tudi v tekuči pogovori — sistemni prompt novega agenta začne delovati z naslednje sporočilo.

## Pet Vgrajenih Agentov

### Content Writer (Ustvarjalec vsebine)

**Fokus:** Ustvarjanje in ureditev postov, strani in kontaktnih form.

**Dostopna orodja:** `create_post`, `update_post`, `batch_create_posts`, `set_featured_image`, `create_contact_form`, `get_option`, `list_post_types`

**Kaj je dober:**
- Pisanje in objavljanje blog postov iz kratke opise ali strukture
- Ustvarjanje skupin stran (landing pages) za novo spletno mesto
- Izgradnja formularjev za stik in vprašanja
- Ustavljanje predstavitvenih slik na članke iz URL ali iskanja

**Nasveti za začetek:**
- *Napišite blog post o koristi WordPress multisite.*
- *Ustvarite stran "O nas", "Usluge" in "Stik" in jih objavite.*
- *Dodajte formular za rezervacijo vprašanja na stran "Stik".*

---

### Site Builder (Izgradilno orodje)

**Fokus:** Celostna kreitev spletnega mesta iz enega opisa.

**Dostopni orodja:** `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`, `create_post`, `batch_create_posts`, `register_post_type`, `create_menu`, `add_menu_item`, `inject_custom_css`, `apply_theme_json_preset`, `install_ability`, `recommend_plugin`, `create_contact_form`

**Kaj je dober:**
- Generiranje multi-faze načrta za grad spletnega mesta za opisan tip podjetja
- Samostojno izvajanje vsake faze — struktura, vsebina, navigacija, dizajn
- Odpravljanje napak sredov prometra brez potrebe po ručnih intervencijah
- Instaliranje priporočanih pluginov kot del gradnje
- Ustvarjanje formularjev za stik neposredno iz interfejsa čata (Superdav AI Agent v1.10.0+)

**Nasveti za začetek:**
- *Ustvarite portfolio spletno mesto z tipom postovja galerija, stranjo za rezervacije in formularjem za stik.*
- *Ustvarite spletno mesto za restavracijo z online menijem, urami delovanja in formularjem za vprašanje o rezervaciji stolovja.*
- *Ustavite spletno mesto za freelanc consulting s stranmi za storitve, oddelkom portfolio in blogom.*
- *Dodajte formular za stik na stran "Stik" z uporabo Site Builderja.*

---

### Design Studio (Studija dizajna)

**Fokus:** Vizualna prilagoditev — barve, tipografija, CSS in blokovni vzorci.

**Dostopne orodja:** `inject_custom_css`, `apply_theme_json_preset`, `get_global_styles`, `set_global_styles`, `reset_global_styles`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `capture_screenshot`, `review_page_design`

**Kaj dobro delajo:**
- Uporabljajo imenovane teme (minimal-dark, warm-editorial, corporate-blue, vibrant-startup, classic-blog)
- Upoštevajo fine-tuning globalne tipografije in palete barv preko theme.json
- Vnosijo prilagojeno CSS za nadomestitve specifične za blagarno
- Obrazuje zaslon strani in ga pregledujejo na težave dizajna

**Začetni predlogi:**
- *Uporabite preset warm-editorial in nato postavite primarno barvo na #2d6a4f.*
- *Obrazujte zaslon domače strani in povejte mi, kaj bi izboljšali.*
- *Ustvarite ponavljajoč blok pattern z polno širino ozadja slike in središčnim naslovom.*

---

### Plugin Manager (Upravljalec pluginov)

**Fokus:** Odskrvarjanje, instaliranje in upravljanje WordPress pluginov.

**Dostopne orodje:** `list_available_abilities`, `install_ability`, `recommend_plugin`, `get_option`, `set_option`

**Kaj dobro delajo:**
- Predlagajo najboljši plugin za opisano uporabo
- Instalirajo ability packs iz registracije
- Pregledujejo dostopni katalog sposobnosti po kategorijah

**Začetni predlogi:**
- *Kakšen je najboljši plugin za membership directory?*
- *Instalirajte ability pack WooCommerce.*
- *Pokažite mi vse dostopne ability packs za e-trgovino.*

---

### Support Assistant (Asistent za podporo)

**Fokus:** Odgovarjanje na vprašanja o vsebini strani, nastavitvah in konfiguraciji WordPressa.

**Dostopna orodja:** `get_option`, `list_options`, `list_post_types`, `list_taxonomies`, `list_menus`, `list_available_abilities`

**Kaj dobro deluje:**
- Iskanje trenutnih nastavitev in možnosti spletnega mesta.
- Pojasnavanje, kaj so konfigurirani tipovi postov (post types), taksonomije (taxonomies) in meniji.
- Odgovranje na vprašanja "kaj to nastavitvo dela?" s branjem živih vrednosti.
- Delovanje kot samo za čitanje diagnostični sloj pred opravljanjem sprememb.

**Začetne predlogi:**
- *Kakva pluginov in nastavitev so trenutno aktiv na tem spletnem mestu?*
- *Navedite vse prilagojene tipove postov, ki so registrirani na tem spletnem mestu.*
- *Kakšne navigacijske menije obstajajo in k kam so nameščeni?*

---

## Prilagajanje agentov (Customising Agents)

Vsak vgrajen agent lahko razširite ali zamenjate prek filtra `gratis_ai_agent_agents`.

### Dodavanje prilagojen sistemne prompt-e na obstojevega agenta

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    if ( isset( $agents['content-writer'] ) ) {
        $agents['content-writer']['system_prompt'] .= "\n\nAlways write in British English and use the Oxford comma.";
    }
    return $agents;
} );
```

### Registracija novega agenta

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    $agents['seo-specialist'] = [
        'name'          => 'SEO Specialist',
        'description'   => 'Optimizira postave in strani za iskalne vesolje.',
        'icon'          => 'dashicons-search',
        'tools'         => [ 'get_option', 'set_option', 'create_post', 'update_post', 'list_post_types' ],
        'system_prompt' => 'Ste SEO specialist. Osredotočite se na optimizacijo ključnih besed, meta opise in strukturiran podatke.',
        'suggestions'   => [
            'Preverite naslov domače strani in meta opis.',
            'Predlagajte izboljšave naslova za pet najnovejših postov.',
        ],
    ];
    return $agents;
} );
```

Novi agent se pojavlja v Agent Pickerju takoj po temeljitvi filtri.

### Odstranjevanje zgrajenega agenta

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    unset( $agents['plugin-manager'] );
    return $agents;
} );
```

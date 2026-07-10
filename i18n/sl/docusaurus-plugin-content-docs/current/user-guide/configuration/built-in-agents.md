---
title: Vgrajeni agenti
sidebar_position: 12
_i18n_hash: a89717a9bbb03aa1da4d264e01acf11a
---
# Vgrajeni agenti {#built-in-agents}

Gratis AI Agent v1.9.0 vključuje pet vgrajenih agentov, vsak pa je vnaprej konfiguriran z osredotočenim naborom orodij, prilagojenim sistemskim pozivom in začetnimi predlogi, usklajenimi s pogostimi opravili na tem področju. Preklapljanje med agenti spremeni, kaj lahko pomočnik naredi in kako odgovarja — brez kakršne koli konfiguracije z vaše strani. Superdav AI Agent v1.18.0 lahko tem potekom dela doda orodja, ki upoštevajo urnik, zapise opomnikov, odobritvene prehode in SMS obvestila, ko so povezane integracije konfigurirane.

## Kaj je agent? {#what-is-an-agent}

Vsak agent je imenovan konfiguracijski profil, ki združuje:

- **Orodja** — zmožnosti, ki jih agent sme priklicati (npr. pisec vsebin ima dostop do zmožnosti ustvarjanja objav; oblikovalski studio ima dostop do zmožnosti CSS in theme.json)
- **Sistemski poziv** — navodila, ki določajo agentov ton, prednostne naloge in omejitve
- **Predlogi** — vnaprej napisani pozivi, prikazani v vmesniku klepeta, da lahko hitro začnete

## Dostop do izbirnika agentov {#accessing-the-agent-picker}

1. Odprite ploščo **Gratis AI Agent** v stranski vrstici skrbništva WordPress.
2. Kliknite **ikono agenta** v zgornjem levem kotu glave klepeta (ikona se spremeni, da odraža aktivnega agenta).
3. **Izbirnik agentov** se odpre kot prekrivni sloj v obliki tabele obrazca. Vsak agent je naveden s svojo ikono, imenom in enovrstičnim opisom.
4. Kliknite vrstico agenta, da ga aktivirate. Glava klepeta se takoj posodobi.

Agente lahko zamenjate tudi sredi pogovora — sistemski poziv novega agenta začne veljati od naslednjega sporočila.

## Pet vgrajenih agentov {#the-five-built-in-agents}

### Pisec vsebin {#content-writer}

**Fokus:** Ustvarjanje in urejanje objav, strani in kontaktnih obrazcev.

**Razpoložljiva orodja:** `create_post`, `update_post`, `batch_create_posts`, `set_featured_image`, `create_contact_form`, `get_option`, `list_post_types`. Z omogočenimi integracijami Superdav AI Agent v1.18.0 so lahko za odobrene poteke dela na voljo tudi konfiguriran kontekst koledarja, odobritveni prehodi, opomniki in orodja za SMS obvestila.

**Kaj dobro opravlja:**
- Priprava osnutkov in objava blogovskih objav iz povzetka ali osnutka
- Ustvarjanje paketov ciljnih strani za novo spletno mesto
- Gradnja kontaktnih obrazcev in obrazcev za povpraševanje
- Nastavljanje izpostavljenih slik na objavah iz URL-ja ali iskanja
- Priprava sporočil za nadaljnje obveščanje po dogodku iz konfiguriranega konteksta Google Calendar, nato premor za odobritev pred pošiljanjem obvestil

**Začetni predlogi:**
- *Napiši 500-besedno blogovsko objavo o prednostih WordPress multisite.*
- *Ustvari strani O nas, Storitve in Kontakt ter jih objavi.*
- *Dodaj obrazec za povpraševanje o rezervaciji na stran Kontakt.*
- *Pripravi opomnik za udeležence jutrišnjega konfiguriranega dogodka v koledarju in počakaj na odobritev, preden ga pošlješ.*

---

### Graditelj spletnega mesta {#site-builder}

**Fokus:** Celovito ustvarjanje spletnega mesta iz enega samega poziva.

**Razpoložljiva orodja:** `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`, `create_post`, `batch_create_posts`, `register_post_type`, `create_menu`, `add_menu_item`, `inject_custom_css`, `apply_theme_json_preset`, `install_ability`, `recommend_plugin`, `create_contact_form`. S Superdav AI Agent v1.18.0 so lahko na voljo konfigurirana orodja za upravljane storitve, odobritve, opomnike, koledar in SMS, kjer jih omogočijo skrbniki.

**Kaj dobro opravlja:**
- Ustvarjanje večfaznega načrta gradnje spletnega mesta za opisano vrsto podjetja
- Samostojno izvajanje vsake faze — struktura, vsebina, navigacija, oblikovanje
- Okrevanje po napakah sredi načrta brez potrebe po ročnem posredovanju
- Nameščanje priporočenih pluginov kot del gradnje
- Ustvarjanje kontaktnih obrazcev neposredno iz vmesnika klepeta (Superdav AI Agent v1.10.0+)
- Usklajevanje opomnikov ob zagonu ali nadaljnjega obveščanja udeležencev brez podvojenih obvestil, ko so omogočeni odobritveni prehodi in zapisi opomnikov

**Začetni predlogi:**
- *Zgradi spletno mesto za fotografski portfelj z vrsto objave za galerijo, stranjo za rezervacije in kontaktnim obrazcem.*
- *Ustvari spletno mesto restavracije s spletnim menijem, odpiralnim časom in obrazcem za povpraševanje o rezervaciji mize.*
- *Nastavi spletno mesto za samostojno svetovanje s stranmi storitev, razdelkom portfelja in blogom.*
- *Dodaj kontaktni obrazec na stran Kontakt z uporabo graditelja spletnega mesta.*
- *Ko je kontrolni seznam za zagon spletnega mesta odobren, pošlji SMS opomnik konfiguriranemu kontaktu deležnika.*

---

### Oblikovalski studio {#design-studio}

**Fokus:** Vizualna prilagoditev — barve, tipografija, CSS in vzorci blokov.

**Razpoložljiva orodja:** `inject_custom_css`, `apply_theme_json_preset`, `get_global_styles`, `set_global_styles`, `reset_global_styles`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `capture_screenshot`, `review_page_design`

**Kaj dobro opravlja:**
- Uporaba imenovanih prednastavitev theme (minimal-dark, warm-editorial, corporate-blue, vibrant-startup, classic-blog)
- Natančno prilagajanje globalne tipografije in barvnih palet prek theme.json
- Vstavljanje prilagojenega CSS za preglasitve, specifične za blagovno znamko
- Zajem posnetka zaslona strani in pregled glede oblikovalskih težav

**Začetni predlogi:**
- *Uporabi prednastavitev warm-editorial in nato nastavi primarno barvo na #2d6a4f.*
- *Naredi posnetek zaslona domače strani in mi povej, kaj bi izboljšal.*
- *Ustvari ponovno uporabljiv vzorec hero bloka s sliko ozadja čez celotno širino in sredinsko poravnanim naslovom.*

### Upravitelj pluginov {#plugin-manager}

**Fokus:** Odkrivanje, nameščanje in upravljanje WordPress pluginov.

**Razpoložljiva orodja:** `list_available_abilities`, `install_ability`, `recommend_plugin`, `get_option`, `set_option`

**Kaj dobro opravlja:**
- Priporočanje najboljšega plugina za opisan primer uporabe
- Nameščanje paketov zmožnosti iz registra
- Brskanje po razpoložljivem katalogu zmožnosti po kategorijah

**Začetni predlogi:**
- *Kateri je najboljši plugin za imenik članstva?*
- *Namesti paket zmožnosti WooCommerce.*
- *Pokaži mi vse razpoložljive pakete zmožnosti za e-trgovino.*

---

### Pomočnik za podporo {#support-assistant}

**Fokus:** Odgovarjanje na vprašanja o vsebini spletnega mesta, nastavitvah in konfiguraciji WordPress.

**Razpoložljiva orodja:** `get_option`, `list_options`, `list_post_types`, `list_taxonomies`, `list_menus`, `list_available_abilities`

**Kaj dobro opravlja:**
- Pregled trenutnih nastavitev in možnosti spletnega mesta
- Razlaga, katere vrste objav, taksonomije in meniji so konfigurirani na spletnem mestu
- Odgovarjanje na vprašanja »kaj počne ta nastavitev?« z branjem živih vrednosti
- Deluje kot diagnostična plast samo za branje pred izvajanjem sprememb

**Začetni predlogi:**
- *Kateri plugin-i in nastavitve so trenutno aktivni na tem spletnem mestu?*
- *Naštej vse vrste objav po meri, registrirane na tem spletnem mestu.*
- *Kateri navigacijski meniji obstajajo in kje so dodeljeni?*

---

## Integracije za avtomatizacijo Superdav {#superdav-automation-integrations}

Ko so integracije Superdav AI Agent v1.18.0 konfigurirane, lahko vgrajeni agenti sodelujejo v varnejših avtomatizacijskih potekih dela, ki upoštevajo urnik:

- **Orodja za branje Google Calendar** omogočajo agentom, da pregledajo konfigurirane koledarje in dogodke, preden pripravijo nadaljnje delo.
- **Preslikava stikov in udeležencev** pomaga ujemati udeležence dogodkov z uporabniki WordPress ali znanimi stiki.
- **Vrata za človeško odobritev** zaustavijo občutljiva dejanja, dokler jih pooblaščeni uporabnik ne pregleda in potrdi.
- **Zapisi opomnikov** preprečujejo podvojena obvestila, ko se načrtovana opravila znova zaženejo ali ponovijo.
- **TextBee SMS obvestila** pošljejo konfigurirana besedilna sporočila samo, ko so omogočene SMS poverilnice in dovoljenja poteka dela.

Priporočen potek dela: prosite agenta, naj pripravi sporočilo ali dejanje, preglejte poziv za odobritev, nato dovolite, da se odobreno dejanje nadaljuje. Pri ponavljajočih se opomnikih naj bo odstranjevanje podvojitev opomnikov omogočeno, da isti dogodek ali stik ni večkrat obveščen.

---

## Prilagajanje agentov {#customising-agents}

Vsakega vgrajenega agenta je mogoče razširiti ali zamenjati prek filtra `gratis_ai_agent_agents`.

### Dodajanje sistemskega poziva po meri obstoječemu agentu {#adding-a-custom-system-prompt-to-an-existing-agent}

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    if ( isset( $agents['content-writer'] ) ) {
        $agents['content-writer']['system_prompt'] .= "\n\nAlways write in British English and use the Oxford comma.";
    }
    return $agents;
} );
```

### Registracija novega agenta {#registering-a-new-agent}

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

Novi agent se prikaže v izbirniku agentov takoj po zagonu filtra.

### Odstranjevanje vgrajenega agenta {#removing-a-built-in-agent}

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    unset( $agents['plugin-manager'] );
    return $agents;
} );
```

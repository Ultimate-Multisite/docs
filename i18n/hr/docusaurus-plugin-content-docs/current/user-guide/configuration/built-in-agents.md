---
title: Ugrađeni agensi
sidebar_position: 12
_i18n_hash: 4852fdc3ddd1a44a574c100846e84dc5
---
# Ugrađeni Agenti

Gratis AI Agent v1.9.0 dolazi s pet ugrađenih agenata, svaki predkonfiguran sa fokusiranim setom alata, prilagođenim sistem promptom i početnim prijedlogima koji su usklađeni s uobičajenim zadacima u toj oblasti. Prebacivanje između agenata mijenja što asistent može učiniti i kako će reagirati — bez potrebe za bilo kakvom konfiguracijom sa vaše strane.

## Što je Agent?

Svaki agent je imenovani profil konfiguracije koji kombinuje:

- **Alate (Tools)** — sposobnosti koje agent smije pozvati (npr. Content Writer ima pristup mogućnostima kreiranja sadržaja; Design Studio ima pristup CSS i theme.json sposobnostima)
- **Sistem prompt** — upute koje postavljaju ton, prioritete i ograničenja agenta
- **Prijedloge (Suggestions)** — unaprijedređeni promptovi prikazani u chat sučelju kako biste brzo počeli

## Pristup Agent Odabiru

1. Otvorite panel **Gratis AI Agent** u bočnom paneli WordPress admina.
2. Kliknite na **ikonicu agenta** u gornjem lijevom dijelu zaglavlja chat prozora (ikona se mijenja kako bi odražavala aktivnog agenta).
3. Otvori se **Agent Picker** kao overlay s tabelom formulara. Svaki agent je naveden sa svojom ikonom, imenom i jednosrednim opisom.
4. Kliknite na red agenta da ga aktivirate. Zaglavlje chat prozora se odmah ažurira.

Možete mijenjati agente sredinom razgovora — sistem prompt novog agenta stupa na snagu od sljedeće poruke.

## Pet Ugrađenih Agenata

### Content Writer (Pisac Sadržaja)

**Fokus:** Kreiranje i uređivanje postova, stranica i kontakt formulara.

**Dostupni alati:** `create_post`, `update_post`, `batch_create_posts`, `set_featured_image`, `create_contact_form`, `get_option`, `list_post_types`

**Što dobro radi:**
- Radite i objavljujete blogove na temelju kratkog opisa ili okvireza
- Kreirate grupe landing stranica za novi sajt
- Grade kontaktne i upitne forme
- Postavljate slike s posebnim imenom na objave iz URL-a ili pretraživanja

**Početni prijedlozi:**
- *Napišite blog post od 500 riječi o koristima WordPress multisite.*
- *Kreirajte stranice O nama, Usluge i Kontakt stranicu i objavite ih.*
- *Dodajte upitnu formu za rezervaciju na Kontakt stranicu pomoću Site Buildera.*

---

### Site Builder (Građak Sajta)

**Fokus:** Kreiranje cijelog sajta od jednog upita.

**Dostupna alata:** `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`, `create_post`, `batch_create_posts`, `register_post_type`, `create_menu`, `add_menu_item`, `inject_custom_css`, `apply_theme_json_preset`, `install_ability`, `recommend_plugin`, `create_contact_form`

**Što dobro radi:**
- Generira plan izgradnje sajta u više faza za opisanu vrstu poslovanja
- Autonomno izvršava svaku fazu — strukturu, sadržaj, navigaciju, dizajn
- Opravlja greške sredinom plana bez potrebe za ručnim intervencijom
- Instalira preporučene pluginove kao dio izgradnje sajta
- Kreira kontaktne forme direktno iz chat sučelja (Superdav AI Agent v1.10.0+)

**Početni prijedlozi:**
- *Izgradite fotografski portfolio sa post tipom galerije, stranicom za rezervacije i kontaktnom formom.*
- *Kreirajte web stranicu za restoran s online menijem, radnim vremenom i upitnom formom za rezervaciju stolova.*
- *Postavite web stranicu za freelanc consulting s uobičajenim stranicama usluga, odjeljkom portfolio i blogom.*
- *Dodajte kontakt formu na Kontakt stranicu pomoću Site Buildera.*

---

### Design Studio (Studija Dizajna)

**Fokus:** Vizualna prilagodba — boje, tipografija, CSS i blokovi dizajna.

**Dostupni alati:** `inject_custom_css`, `apply_theme_json_preset`, `get_global_styles`, `set_global_styles`, `reset_global_styles`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `capture_screenshot`, `review_page_design`

**Što dobro radi:**
- Primjenjivanje imenovanih tema predložaka (minimal-dark, warm-editorial, corporate-blue, vibrant-startup, classic-blog)
- Finulno podešavanje globalne tipografije i palete boja putem theme.json-a
- Umetanje prilagođenog CSS-a za nadoknade specifične za brend
- Uzimanje snimka zaslona stranice i pregledavanje na probleme dizajna

**Početni prijedlozi:**
- *Primijenite predložak warm-editorial i zatim postavite primarnu boju na #2d6a4f.*
- *Uzmi snimak početne stranice i recite mi što biste poboljšali.*
- *Kreirajte ponovljiv obrazac hero bloka s punopanskim pozadinskim slikom i centriranim naslovom.*

---

### Plugin Manager (Upravitelj dodataka)

**Fokus:** Otkrivanje, instaliranje i upravljanje WordPress pluginovima.

**Dostupni alati:** `list_available_abilities`, `install_ability`, `recommend_plugin`, `get_option`, `set_option`

**Što dobro radi:**
- Preporučivanje najboljeg plugin za opisan slučaj korištenja
- Instaliranje paketa sposobnosti iz registara
- Pregledavanje dostupnog kataloga sposobnosti po kategorijama

**Početni prijedlozi:**
- *Koji je najbolji plugin za dizinativni direktorij?*
- *Instalirajte WooCommerce ability pack.*
- *Pokažite mi sve dostupne e-trgovine ability packs.*

---

### Support Assistant (Asistent za podršku)

**Fokus:** Odgovaranje na pitanja o sadržaju stranice, postavkama i WordPress konfiguraciji.

**Dostupni alati:** `get_option`, `list_options`, `list_post_types`, `list_taxonomies`, `list_menus`, `list_available_abilities`

**Što dobro radi:**
- Pregleduje trenutne postavke i opcije stranice.
- Objašnjava što su post tipovi, taksonomije i meniji konfigurirani na stranici.
- Odgovara na pitanja "što ova postavka radi?" čitajući stvarne vrijednosti.
- Služi kao samo za čitanje dijagnostički sloj prije promjene bilo čega.

**Početni prijedlozi:**
- *Koje pluginove i postavke su trenutno aktivne na ovoj stranici?*
- *Navedi sve prilagođene post tipove registrirane na ovoj stranici.*
- *Koje navigacijska menije postoje i gdje su dodijeljene?*

---

## Prilagođavanje agenata (Customising Agents)

Svaki ugrađeni agent se može proširiti ili zamijeniti putem filtera `gratis_ai_agent_agents`.

### Dodavanje prilagođenog system prompt-a postojećem agentu

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    if ( isset( $agents['content-writer'] ) ) {
        $agents['content-writer']['system_prompt'] .= "\n\nAlways write in British English and use the Oxford comma.";
    }
    return $agents;
} );
```

### Registriranje novog agenta

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    $agents['seo-specialist'] = [
        'name'          => 'SEO Specialist',
        'description'   => 'Optimizira objave i stranice za motore pretraživanja.',
        'icon'          => 'dashicons-search',
        'tools'         => [ 'get_option', 'set_option', 'create_post', 'update_post', 'list_post_types' ],
        'system_prompt' => 'Ti si SEO specijalist. Fokusiraj se na optimizaciju ključnih riječi, meta opise i strukturiran podatke.',
        'suggestions'   => [
            'Pregledaj naslov početne stranice i meta opis.',
            'Predlaži poboljšanja za title tagove za pet najnovijih objaka.',
        ],
    ];
    return $agents;
} );
```

Novi agent se pojavljuje odmah nakon što se filter izvrši u izborniku agenata.

### Uključi ugrađeni agent

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    unset( $agents['plugin-manager'] );
    return $agents;
} );
```

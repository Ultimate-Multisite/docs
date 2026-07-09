---
title: Ugrađeni agenti
sidebar_position: 12
_i18n_hash: a89717a9bbb03aa1da4d264e01acf11a
---
# Ugrađeni agenti

Gratis AI Agent v1.9.0 isporučuje se s pet ugrađenih agenata, svaki unaprijed konfiguriran s usmjerenim skupom alata, prilagođenim sistemskim promptom i početnim prijedlozima usklađenima s uobičajenim zadacima u tom području. Prebacivanje između agenata mijenja što asistent može učiniti i kako odgovara — bez ikakve konfiguracije s vaše strane. Superdav AI Agent v1.18.0 može dodati alate svjesne rasporeda, zapise podsjetnika, vrata za odobrenje i SMS obavijesti tim tijekovima rada kada su povezane integracije konfigurirane.

## Što je agent?

Svaki agent je imenovani konfiguracijski profil koji kombinira:

- **Alati** — sposobnosti koje agent smije pozvati (npr. Content Writer ima pristup sposobnostima stvaranja objava; Design Studio ima pristup CSS i theme.json sposobnostima)
- **Sistemski prompt** — upute koje postavljaju ton, prioritete i ograničenja agenta
- **Prijedlozi** — unaprijed napisani promptovi prikazani u sučelju chata kako bi vam pomogli da brzo započnete

## Pristup odabiru agenta

1. Otvorite panel **Gratis AI Agent** u bočnoj traci WordPress administracije.
2. Kliknite **ikonu agenta** u gornjem lijevom kutu zaglavlja chata (ikona se mijenja kako bi odražavala aktivnog agenta).
3. **Odabir agenta** otvara se kao sloj obrasca-tablice. Svaki agent naveden je sa svojom ikonom, nazivom i opisom u jednom retku.
4. Kliknite redak agenta kako biste ga aktivirali. Zaglavlje chata odmah se ažurira.

Agente možete promijeniti i usred razgovora — sistemski prompt novog agenta stupa na snagu od sljedeće poruke.

## Pet ugrađenih agenata

### Content Writer

**Fokus:** Stvaranje i uređivanje objava, stranica i kontaktnih obrazaca.

**Dostupni alati:** `create_post`, `update_post`, `batch_create_posts`, `set_featured_image`, `create_contact_form`, `get_option`, `list_post_types`. Uz omogućene integracije Superdav AI Agent v1.18.0, konfigurirani kontekst kalendara, vrata za odobrenje, podsjetnici i alati za SMS obavijesti također mogu biti dostupni odobrenim tijekovima rada.

**U čemu je dobar:**
- Pisanje nacrta i objavljivanje blog objava iz sažetka ili skice
- Stvaranje serija odredišnih stranica za novu web-stranicu
- Izrada kontaktnih obrazaca i obrazaca za upite
- Postavljanje istaknutih slika na objave iz URL-a ili pretraživanja
- Pisanje nacrta poruka za praćenje događaja iz konfiguriranog konteksta Google Calendar, zatim pauziranje radi odobrenja prije slanja obavijesti

**Početni prijedlozi:**
- *Napiši blog objavu od 500 riječi o prednostima WordPress multisite.*
- *Izradi stranice O nama, Usluge i Kontakt te ih objavi.*
- *Dodaj obrazac za upit o rezervaciji na stranicu Kontakt.*
- *Napiši nacrt podsjetnika za sudionike sutrašnjeg konfiguriranog kalendarskog događaja i pričekaj odobrenje prije slanja.*

---

### Site Builder

**Fokus:** Izrada web-stranice od početka do kraja iz jednog prompta.

**Dostupni alati:** `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`, `create_post`, `batch_create_posts`, `register_post_type`, `create_menu`, `add_menu_item`, `inject_custom_css`, `apply_theme_json_preset`, `install_ability`, `recommend_plugin`, `create_contact_form`. Uz Superdav AI Agent v1.18.0, konfigurirani alati za upravljanu uslugu, odobrenje, podsjetnik, kalendar i SMS mogu biti dostupni ondje gdje ih administratori omoguće.

**U čemu je dobar:**
- Generiranje višefaznog plana izrade web-stranice za opisanu vrstu poslovanja
- Autonomno izvršavanje svake faze — struktura, sadržaj, navigacija, dizajn
- Oporavak od pogrešaka usred plana bez potrebe za ručnom intervencijom
- Instaliranje preporučenih plugina kao dijela izrade
- Stvaranje kontaktnih obrazaca izravno iz sučelja chata (Superdav AI Agent v1.10.0+)
- Koordiniranje podsjetnika za lansiranje ili praćenja sudionika bez dvostrukih obavijesti kada su omogućena vrata za odobrenje i zapisi podsjetnika

**Početni prijedlozi:**
- *Izradi web-stranicu za fotografski portfolio s vrstom objave galerije, stranicom za rezervacije i kontaktnim obrascem.*
- *Izradi web-stranicu restorana s online jelovnikom, radnim vremenom i obrascem za upit o rezervaciji stola.*
- *Postavi web-stranicu za freelance savjetovanje sa stranicama usluga, odjeljkom portfolija i blogom.*
- *Dodaj kontaktni obrazac na stranicu Kontakt koristeći site builder.*
- *Nakon što je kontrolni popis za lansiranje site odobren, pošalji SMS podsjetnik konfiguriranom kontaktu dionika.*

---

### Design Studio

**Fokus:** Vizualna prilagodba — boje, tipografija, CSS i blok-uzorci.

**Dostupni alati:** `inject_custom_css`, `apply_theme_json_preset`, `get_global_styles`, `set_global_styles`, `reset_global_styles`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `capture_screenshot`, `review_page_design`

**U čemu je dobar:**
- Primjena imenovanih presetova teme (minimal-dark, warm-editorial, corporate-blue, vibrant-startup, classic-blog)
- Fino podešavanje globalne tipografije i paleta boja putem theme.json
- Umetanje prilagođenog CSS-a za nadjačavanja specifična za brend
- Snimanje zaslona stranice i pregled radi problema s dizajnom

**Početni prijedlozi:**
- *Primijeni preset warm-editorial, a zatim postavi primarnu boju na #2d6a4f.*
- *Napravi snimku zaslona početne stranice i reci mi što bi poboljšao.*
- *Izradi višekratno upotrebljiv hero blok-uzorak sa slikom pozadine pune širine i centriranim naslovom.*

### Plugin Manager

**Fokus:** Otkrivanje, instaliranje i upravljanje WordPress pluginima.

**Dostupni alati:** `list_available_abilities`, `install_ability`, `recommend_plugin`, `get_option`, `set_option`

**U čemu je dobar:**
- Preporučivanje najboljeg plugina za opisani slučaj upotrebe
- Instaliranje paketa sposobnosti iz registra
- Pregledavanje dostupnog kataloga sposobnosti po kategoriji

**Početni prijedlozi:**
- *Koji je najbolji plugin za direktorij članstva?*
- *Instaliraj paket WooCommerce sposobnosti.*
- *Prikaži mi sve dostupne pakete sposobnosti za e-trgovinu.*

---

### Support Assistant

**Fokus:** Odgovaranje na pitanja o sadržaju web-stranice, postavkama i WordPress konfiguraciji.

**Dostupni alati:** `get_option`, `list_options`, `list_post_types`, `list_taxonomies`, `list_menus`, `list_available_abilities`

**Što dobro radi:**
- Dohvaćanje trenutačnih postavki i opcija sitea
- Objašnjavanje koji su tipovi objava, taksonomije i izbornici konfigurirani na siteu
- Odgovaranje na pitanja "što ova postavka radi?" čitanjem živih vrijednosti
- Služenje kao dijagnostički sloj samo za čitanje prije uvođenja promjena

**Početni prijedlozi:**
- *Koji su pluginovi i postavke trenutačno aktivni na ovom siteu?*
- *Navedite sve prilagođene tipove objava registrirane na ovom siteu.*
- *Koji navigacijski izbornici postoje i gdje su dodijeljeni?*

---

## Superdav automatizacijske integracije

Kada su konfigurirane integracije Superdav AI Agent v1.18.0, ugrađeni agenti mogu sudjelovati u sigurnijim automatizacijskim tijekovima rada svjesnima rasporeda:

- **Alati za čitanje Google Calendar** omogućuju agentima da pregledaju konfigurirane kalendare i događaje prije izrade nacrta daljnjeg rada.
- **Mapiranje kontakata i sudionika** pomaže povezati sudionike događaja s WordPress korisnicima ili poznatim kontaktima.
- **Vrata za ljudsko odobrenje** pauziraju osjetljive radnje dok ih ovlašteni korisnik ne pregleda i potvrdi.
- **Zapisi podsjetnika** sprječavaju duplicirane obavijesti kada se zakazani poslovi ponovno pokušaju izvršiti ili ponavljaju.
- **TextBee SMS obavijesti** šalju konfigurirane tekstualne poruke samo kada su SMS vjerodajnice i dozvole tijeka rada omogućene.

Preporučeni tijek rada: zamolite agenta da pripremi poruku ili radnju, pregledajte upit za odobrenje, zatim dopustite nastavak odobrene radnje. Za ponavljajuće podsjetnike ostavite deduplikaciju podsjetnika omogućenom kako se isti događaj ili kontakt ne bi više puta obavještavao.

---

## Prilagodba agenata

Svaki ugrađeni agent može se proširiti ili zamijeniti putem filtera `gratis_ai_agent_agents`.

### Dodavanje prilagođenog system prompta postojećem agentu

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

Novi agent pojavljuje se u Agent Picker odmah nakon što se filter pokrene.

### Uklanjanje ugrađenog agenta

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    unset( $agents['plugin-manager'] );
    return $agents;
} );
```

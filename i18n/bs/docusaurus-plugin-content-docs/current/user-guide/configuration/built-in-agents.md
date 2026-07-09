---
title: Ugrađeni agenti
sidebar_position: 12
_i18n_hash: a89717a9bbb03aa1da4d264e01acf11a
---
# Ugrađeni agenti

Gratis AI Agent v1.9.0 isporučuje pet ugrađenih agenata, svaki unaprijed konfigurisan s fokusiranim skupom alata, prilagođenim sistemskim promptom i početnim prijedlozima usklađenim s uobičajenim zadacima u toj oblasti. Prebacivanje između agenata mijenja šta asistent može raditi i kako odgovara — bez ikakve konfiguracije s vaše strane. Superdav AI Agent v1.18.0 može dodati alate svjesne rasporeda, zapise podsjetnika, kapije odobrenja i SMS obavještenja ovim tokovima rada kada su povezane integracije konfigurisane.

## Šta je agent?

Svaki agent je imenovani konfiguracijski profil koji kombinuje:

- **Alati** — sposobnosti koje agent smije pozivati (npr. Content Writer ima pristup sposobnostima kreiranja objava; Design Studio ima pristup CSS i theme.json sposobnostima)
- **Sistemski prompt** — instrukcije koje određuju ton, prioritete i ograničenja agenta
- **Prijedlozi** — unaprijed napisani promptovi prikazani u chat interfejsu kako bi vam pomogli da brzo počnete

## Pristup biraču agenata

1. Otvorite panel **Gratis AI Agent** u WordPress admin bočnoj traci.
2. Kliknite **ikonu agenta** u gornjem lijevom uglu zaglavlja chata (ikona se mijenja kako bi odražavala aktivnog agenta).
3. **Birač agenata** se otvara kao preklopni form-table. Svaki agent je naveden sa svojom ikonom, nazivom i opisom u jednom redu.
4. Kliknite red agenta da ga aktivirate. Zaglavlje chata se odmah ažurira.

Također možete promijeniti agente usred razgovora — sistemski prompt novog agenta stupa na snagu od sljedeće poruke.

## Pet ugrađenih agenata

### Content Writer

**Fokus:** Kreiranje i uređivanje objava, stranica i kontakt formi.

**Dostupni alati:** `create_post`, `update_post`, `batch_create_posts`, `set_featured_image`, `create_contact_form`, `get_option`, `list_post_types`. S omogućenim integracijama Superdav AI Agent v1.18.0, konfigurisan kontekst kalendara, kapije odobrenja, podsjetnici i alati za SMS obavještenja također mogu biti dostupni odobrenim tokovima rada.

**Šta dobro radi:**
- Skiciranje i objavljivanje blog objava na osnovu brifa ili nacrta
- Kreiranje grupa landing stranica za novu stranicu
- Izrada kontakt i upitnih formi
- Postavljanje istaknutih slika na objavama iz URL-a ili pretrage
- Skiciranje poruka za praćenje događaja iz konfigurisanog Google Calendar konteksta, zatim pauziranje radi odobrenja prije slanja obavještenja

**Početni prijedlozi:**
- *Napiši blog objavu od 500 riječi o prednostima WordPress multisite.*
- *Kreiraj stranice O nama, Usluge i Kontakt i objavi ih.*
- *Dodaj formu za upit o rezervaciji na stranicu Kontakt.*
- *Skiciraj podsjetnik za učesnike na sutrašnjem konfigurisanom kalendarskom događaju i sačekaj odobrenje prije slanja.*

---

### Site Builder

**Fokus:** Kreiranje web stranice od početka do kraja iz jednog prompta.

**Dostupni alati:** `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`, `create_post`, `batch_create_posts`, `register_post_type`, `create_menu`, `add_menu_item`, `inject_custom_css`, `apply_theme_json_preset`, `install_ability`, `recommend_plugin`, `create_contact_form`. Uz Superdav AI Agent v1.18.0, konfigurisani alati za upravljane usluge, odobrenja, podsjetnike, kalendar i SMS mogu biti dostupni tamo gdje ih administratori omoguće.

**Šta dobro radi:**
- Generisanje višefaznog plana izrade stranice za opisani tip poslovanja
- Autonomno izvršavanje svake faze — struktura, sadržaj, navigacija, dizajn
- Oporavak od grešaka usred plana bez potrebe za ručnom intervencijom
- Instaliranje preporučenih plugin-a kao dijela izrade
- Kreiranje kontakt formi direktno iz chat interfejsa (Superdav AI Agent v1.10.0+)
- Koordinacija podsjetnika za lansiranje ili praćenje učesnika bez duplih obavještenja kada su omogućene kapije odobrenja i zapisi podsjetnika

**Početni prijedlozi:**
- *Izradi portfolio stranicu za fotografiju s tipom objave za galeriju, stranicom za rezervacije i kontakt formom.*
- *Kreiraj web stranicu za restoran s online jelovnikom, radnim vremenom i formom za upit o rezervaciji stola.*
- *Postavi stranicu za freelance konsalting sa stranicama usluga, portfolio sekcijom i blogom.*
- *Dodaj kontakt formu na stranicu Kontakt koristeći site builder.*
- *Nakon što kontrolna lista za lansiranje stranice bude odobrena, pošalji SMS podsjetnik konfigurisanom kontaktu zainteresovane strane.*

---

### Design Studio

**Fokus:** Vizuelno prilagođavanje — boje, tipografija, CSS i blok obrasci.

**Dostupni alati:** `inject_custom_css`, `apply_theme_json_preset`, `get_global_styles`, `set_global_styles`, `reset_global_styles`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `capture_screenshot`, `review_page_design`

**Šta dobro radi:**
- Primjena imenovanih preseta teme (minimal-dark, warm-editorial, corporate-blue, vibrant-startup, classic-blog)
- Fino podešavanje globalne tipografije i paleta boja putem theme.json
- Umetanje prilagođenog CSS-a za prepravke specifične za brend
- Snimanje ekrana stranice i pregled radi dizajnerskih problema

**Početni prijedlozi:**
- *Primijeni warm-editorial preset, a zatim postavi primarnu boju na #2d6a4f.*
- *Napravi screenshot početne stranice i reci mi šta bi poboljšao.*
- *Kreiraj višekratno upotrebljiv hero blok obrazac sa slikom pozadine pune širine i centriranim naslovom.*

### Plugin Manager

**Fokus:** Otkrivanje, instaliranje i upravljanje WordPress plugin-ima.

**Dostupni alati:** `list_available_abilities`, `install_ability`, `recommend_plugin`, `get_option`, `set_option`

**Šta dobro radi:**
- Preporučivanje najboljeg plugin-a za opisani slučaj upotrebe
- Instaliranje paketa sposobnosti iz registra
- Pregled dostupnog kataloga sposobnosti po kategoriji

**Početni prijedlozi:**
- *Koji je najbolji plugin za direktorij članstva?*
- *Instaliraj paket WooCommerce sposobnosti.*
- *Prikaži mi sve dostupne pakete ecommerce sposobnosti.*

---

### Support Assistant

**Fokus:** Odgovaranje na pitanja o sadržaju stranice, postavkama i WordPress konfiguraciji.

**Dostupni alati:** `get_option`, `list_options`, `list_post_types`, `list_taxonomies`, `list_menus`, `list_available_abilities`

**Šta radi dobro:**
- Pregled trenutnih postavki i opcija sajta
- Objašnjavanje koje su vrste objava, taksonomije i meniji konfigurisani na sajtu
- Odgovaranje na pitanja "šta ova postavka radi?" čitanjem aktivnih vrijednosti
- Služi kao dijagnostički sloj samo za čitanje prije pravljenja izmjena

**Početni prijedlozi:**
- *Koji pluginovi i postavke su trenutno aktivni na ovom sajtu?*
- *Navedi sve prilagođene vrste objava registrovane na ovom sajtu.*
- *Koji navigacijski meniji postoje i gdje su dodijeljeni?*

---

## Superdav Automation integracije

Kada su Superdav AI Agent v1.18.0 integracije konfigurisane, ugrađeni agenti mogu učestvovati u sigurnijim automatizacijskim radnim tokovima koji uzimaju raspored u obzir:

- **Google Calendar alati za čitanje** omogućavaju agentima da pregledaju konfigurisane kalendare i događaje prije pripreme naknadnog rada.
- **Mapiranje kontakata i učesnika** pomaže u povezivanju učesnika događaja s WordPress korisnicima ili poznatim kontaktima.
- **Kapije za ljudsko odobrenje** pauziraju osjetljive radnje dok ih ovlašteni korisnik ne pregleda i potvrdi.
- **Zapisi podsjetnika** sprječavaju duple obavijesti kada se zakazani poslovi ponovo pokušaju ili ponavljaju.
- **TextBee SMS obavijesti** šalju konfigurisane tekstualne poruke samo kada su SMS kredencijali i dozvole radnog toka omogućeni.

Preporučeni radni tok: zatražite od agenta da pripremi poruku ili radnju, pregledajte upit za odobrenje, zatim dozvolite da se odobrena radnja nastavi. Za ponavljajuće podsjetnike, držite deduplikaciju podsjetnika omogućenom kako isti događaj ili kontakt ne bi bio obaviješten više puta.

---

## Prilagođavanje agenata

Svaki ugrađeni agent može se proširiti ili zamijeniti putem `gratis_ai_agent_agents` filtera.

### Dodavanje prilagođenog sistemskog prompta postojećem agentu

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    if ( isset( $agents['content-writer'] ) ) {
        $agents['content-writer']['system_prompt'] .= "\n\nAlways write in British English and use the Oxford comma.";
    }
    return $agents;
} );
```

### Registrovanje novog agenta

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

Novi agent se pojavljuje u Agent Pickeru odmah nakon što se filter pokrene.

### Uklanjanje ugrađenog agenta

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    unset( $agents['plugin-manager'] );
    return $agents;
} );
```

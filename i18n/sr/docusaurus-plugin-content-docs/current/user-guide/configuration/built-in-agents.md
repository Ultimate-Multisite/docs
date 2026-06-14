---
title: Ugrađeni agenci
sidebar_position: 12
_i18n_hash: 4852fdc3ddd1a44a574c100846e84dc5
---
# Ugrađeni Agenti

Gratis AI Agent v1.9.0 dolazi sa pet ugrađenih agenata, svaki prekonfigurisano sa fokusiranim setom alata, prilagođenim sistem prompt-om i početnim predlozima koji su usklađeni sa uobičajenim zadacima u toj oblasti. Prebacivanje između agenata menja šta asistent može da radi i kako reaguje — bez ikakve konfiguracije sa vaše strane.

## Šta je Agent?

Svaki agent je imenovani profil konfiguracije koji kombinuje:

- **Alate (Tools)** — sposobnosti koje agent sme da pozove (npr. Content Writer ima pristup sposobnostima kreiranja sadržaja; Design Studio ima pristup CSS i theme.json sposobnostima)
- **Sistem prompt** — uputstva koja postavljaju ton, prioritete i ograničenja agenata
- **Predloške (Suggestions)** — unapred napisane promptove koji se prikazuju u chatu interfejsu kako bi vam pomogli da brzo počnete

## Pristup Agent Izaberu

1. Otvorite panel **Gratis AI Agent** u bočnoj traci WordPress admina.
2. Kliknite na **ikonicu agenta** u gornjem levom uglu zaglavlja chata (ikona se menja kako bi odražavala aktivnog agenta).
3. Otvoriće se **Agent Picker** kao overlay sa tabelom formulara. Svaki agent je naveden sa svojom ikonom, imenom i jednosrednom opisom.
4. Kliknite na red agenta da ga aktivirate. Zaglavlje chata se odmah ažurira.

Možete prebacivati agente tokom razgovora — sistem prompt novog agenta stupa na snagu od sledeće poruke.

## Pet Ugrađenih Agenata

### Content Writer (Pisac sadržaja)

**Fokus:** Kreiranje i uređivanje postova, stranica i formulara za kontakt.

**Dostupni alati:** `create_post`, `update_post`, `batch_create_posts`, `set_featured_image`, `create_contact_form`, `get_option`, `list_post_types`

**Šta dobro radi:**
- Kreiranje i objavljivanje blog postova na osnovu kratkog opisa ili strukture
- Kreiranje serija landing stranica za novi sajt
- Izrada formulara za kontakt i upite
- Postavljanje posebnih slika na objave iz URL adrese ili pretrage

**Početni predlozi:**
- *Napišite blog post od 500 reči o prednostima WordPress multisite.*
- *Kreirajte stranice "O nama", "Usluge" i "Kontakt" i objavite ih.*
- *Dodajte formular za rezervaciju na Kontakt stranicu.*

---

### Site Builder (Izgrađivač sajta)

**Fokus:** Kreiranje celog sajta od jednog upita.

**Dostupne alate:** `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`, `create_post`, `batch_create_posts`, `register_post_type`, `create_menu`, `add_menu_item`, `inject_custom_css`, `apply_theme_json_preset`, `install_ability`, `recommend_plugin`, `create_contact_form`

**Šta dobro radi:**
- Generisanje plana izgradnje sajta u više faza za opisan tip posla.
- Autonomno izvršavanje svake faze — struktura, sadržaj, navigacija, dizajn.
- Opravljanje greškama tokom plana bez potrebe za ručnim unosom.
- Instaliranje preporučenih pluginova kao deo izgradnje sajta.
- Kreiranje formulara za kontakt direktno iz chata (Superdav AI Agent v1.10.0+).

**Početni predlozi:**
- *Izgradite sajt fotografskog portfolija sa tipom objave galerije, stranicom za rezervacije i formularom za kontakt.*
- *Kreirajte veb sajt restorana sa online menijem, radnim vremenom i formularom za upit o tabeli.*
- *Postavite sajt za freelancing konsultante sa stranicama usluga, sekcijom portfolija i blogom.*
- *Dodajte formular za kontakt na Kontakt stranicu koristeći Site Builder.*

---

### Design Studio (Studija dizajna)

**Fokus:** Vizuelna prilagođavanje — boje, tipografija, CSS i blokovi.

**Dostupni alati:** `inject_custom_css`, `apply_theme_json_preset`, `get_global_styles`, `set_global_styles`, `reset_global_styles`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `capture_screenshot`, `review_page_design`

**Šta dobro radi:**
- Primena imenovanih tema predložaka (minimal-dark, warm-editorial, corporate-blue, vibrant-startup, classic-blog)
- Finetuning globalne tipografije i palete boja putem theme.json-a
- Umetanje prilagođenog CSS-a za prebacivanje specifičnih za brendove
- Uzimanje snimka ekrana stranice i pregledavanje na probleme dizajna

**Početni predlozi:**
- *Primeni preset warm-editorial i zatim postavi primarnu boju na #2d6a4f.*
- *Uzmi snimak ekrana početne stranice i reci mi šta bi poboljšaoš.*
- *Kreiraj ponovljiv obrazac (block pattern) za hero sekciju sa punopanskim pozadinskim slikom i centriranim naslovom.*

---

### Plugin Manager (Upravljač dodataka)

**Fokus:** Pronalaženje, instaliranje i upravljanje WordPress plugin-ovima.

**Dostupni alati:** `list_available_abilities`, `install_ability`, `recommend_plugin`, `get_option`, `set_option`

**Šta dobro radi:**
- Preporučivanje najboljeg plugin-a za opisan slučaj korišćenja
- Instaliranje paketa mogućnosti iz registara
- Pregledavanje dostupnog kataloga mogućnosti po kategorijama

**Početni predlozi:**
- *Koji je najbolji plugin za katalog članstava?*
- *Instaliraj WooCommerce pakete mogućnosti.*
- *Pokaži mi sve dostupne e-commerce pakete mogućnosti.*

---

### Support Assistant (Asistent podrške)

**Fokus:** Odgovaranje na pitanja o sadržaju sajta, podešavanjima i konfiguraciji WordPressa.

**Dostupni alati:** `get_option`, `list_options`, `list_post_types`, `list_taxonomies`, `list_menus`, `list_available_abilities`

**Šta dobro radi:**
- Pretražuje trenutne postavke i opcije sajta.
- Objašnjava šta su post tipovi, taksonomije i meniji podešeni na sajtu.
- Odgovara na pitanja "šta ova postavka radi?" čitajući stvarne vrednosti.
- Služi kao samo za čitanje dijagnostički sloj pre nego što napravite promene.

**Početna predloga:**
- *Koje pluginove i podešavanja su trenutno aktivna na ovom sajtu?*
- *Navedite sve prilagođene post tipove registrovane na ovom sajtu.*
- *Koji navigacioni meniji postoje i gde su dodeljeni?*

---

## Prilagođavanje agenata (Customising Agents)

Svaki ugrađeni agent se može proširiti ili zameniti putem filtera `gratis_ai_agent_agents`.

### Dodavanje prilagođenog sistem prompt-a postojećem agentu

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    if ( isset( $agents['content-writer'] ) ) {
        $agents['content-writer']['system_prompt'] .= "\n\nAlways write in British English and use the Oxford comma.";
    }
    return $agents;
} );
```

### Registrovani novi agent

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    $agents['seo-specialist'] = [
        'name'          => 'SEO Specialist',
        'description'   => 'Optimizuje objave i stranice za pretraživače.',
        'icon'          => 'dashicons-search',
        'tools'         => [ 'get_option', 'set_option', 'create_post', 'update_post', 'list_post_types' ],
        'system_prompt' => 'Ti si SEO stručnjak. Fokusiraj se na optimizaciju ključnih reči, meta opise i strukturiran podatke.',
        'suggestions'   => [
            'Pregledajte naslov početne stranice i meta opis.',
            'Predložite poboljšanja za naslove tagova za pet najnovijih objavljenih postova.',
        ],
    ];
    return $agents;
} );
```

Новији агент се појављује у Изберивач агента одмах дремања филтера.

### Уклањање вграђеног агента

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    unset( $agents['plugin-manager'] );
    return $agents;
} );
```

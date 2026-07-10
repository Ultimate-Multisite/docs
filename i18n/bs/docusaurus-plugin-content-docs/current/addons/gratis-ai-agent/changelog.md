---
title: Dnevnik promjena
sidebar_position: 5
_i18n_hash: 59cb5f1cda2a3e8a789dcd3d67db33db
---
# Dnevnik promjena {#changelog}

## 1.9.0 — Objavljeno 2026-04-28 {#190--released-on-2026-04-28}

### Novo {#new}

- **Sposobnost `create_contact_form`** — kreira kontakt formular koristeći aktivni plugin za formulare (Contact Form 7, WPForms, Fluent Forms ili Gravity Forms) i vraća shortcode spreman za ugradnju u bilo koji post ili stranicu.
- **Sposobnost `set_featured_image`** — dodjeljuje glavnu sliku postu ili stranici koristeći ID privitka iz postojeće Media Library ili udaljeni URL; automatski uvozi sliku kada se pruži URL.
- **Sposobnost `batch_create_posts`** — kreira više postova u jednom pozivu sposobnosti. Podržava iste parametre kao i `create_post`, izvještava o uspjehu/neuspjehu po postu i ima opcijski režim `stop_on_error`.
- **Parametar `page_template`** — dodan u `create_post` i `update_post`. Dodjeljuje PHP fajl šablona stranice (npr. `page-full-width.php`) prilikom kreiranja ili ažuriranja. Za `update_post` proslijedite prazan string da biste se vratili na podrazumevani šablon teme.
- **Sposobnosti za snimke zaslona na strani klijenta** — `capture_screenshot`, `compare_screenshots` i `review_page_design`. Snimaju potpune ili viewport snimke živih stranica putem server-side headless preglednika, uspoređuju dva snimka zaslona i pružaju AI-generisan pregled dizajna koji pokriva raspored, tipografiju, boju i pristupačnost.
- **Pet ugrađenih agenata** — Content Writer, Site Builder, Design Studio, Plugin Manager i Support Assistant. Svaki agent ima namjenski set alata, prilagođen sistem prompt i početne sugestije. Možete ga prebacivati pomoću novog **Agent Picker** u zaglavlju chata. Pogledajte [Built-in Agents](../../user-guide/configuration/built-in-agents).
- **Feature flags (Funkcionalne zastavice)** — nova kartica **Settings → Feature Flags** sa prekidačima za kontrolu pristupa (ograničeno administratorima, ograničeno network administratorima, pristup pretplatnicima, onemogućeno za nečlanove) i opcijama za brendiranje (sakrij atribuciju u podnožju, prilagođeno ime agenta, sakrij agent picker, koristi ikonu stranice kao avatar chata). Pogledajte [Gratis AI Agent Settings](../../user-guide/administration/gratis-ai-agent-settings).
- **Oporavak zadnje sesije** — panel za chat sada automatski učitava najnoviji razgovor pri učitavanju stranice i pri otvaranju widgeta, tako da kontekst nikada nije izgubljen tokom navigacije po stranicama.
- **Linkovi za akcije pluginova** — brzi linkovi do Settings i Abilities Registry sada se pojavljuju na WordPress stranici **Plugins → Installed Plugins** ispod opisa plugin-a.

### Poboljšano {#improved}

- **Ponovno pokušavanje izvora slika** — agent sada ponovno pokušava sve konfigurirane besplatne izvore slika prije nego što se vrati na AI-generisanu sliku u slučaju neuspjeha preuzimanja.
- **Panel informacija o modelu** — uvijek je vidljiv u zaglavlju chata; više nije skriven nakon prve poruke.
- **Automatski skrol (Auto-scroll behaviour)** — automatski skrol pauzira kada korisnik skroluje prema gore da čita; pojavljuje se plutajući gumb **Scroll to bottom** i automatski nestaje kada korisnik stigne do najnovije poruke.
- **UI Agent Picker-a** — revidiran je kao overlay u obliku tabele s formularom sa ikonama po agentu, što olakšava prepoznavanje i prebacivanje agenata na prvi pogled.
- **Lazy-loaded JS chunks (Opterećivanje JS u dijelove)** — početni JavaScript bundle widgeta za chat sada je podijeljen u dijelove koji se učitavaju tek po potrebi, smanjujući veličinu početnog bundle-a za 75–90%.
- **Revizija widgeta za chat** — ujednačena AI ikona zamjenjuje prethodni prilagođeni avatar; dosljedna je sa ugrađenim sistemom agenata.
- **Linkifikacija URL-a** — URL-ovi koji se pojavljuju u sistem porukama i mjehurićima s porukama o greškama sada se prikazuju kao klikabilni linkovi.

### Popravljeno {#fixed}

- **Otkrivanje sposobnosti** — ispravljeni su opisi, reference sistem prompta i poravnanje namespace-a kako bi sve sposobnosti pouzdano pojavile u listi alata agenta.
- **Keš provajdera** — provajderi su sada keširani na nivou cijele stranice putem broja verzije, sprječavajući probleme sa zastarjelim provajderima na multisite mrežama.
- **`ability_invalid_output`** — rješen u 12 rukovatelja sposobnosti; svi vraćaju ispravno strukturirane JSON odgovore.
- **Pipeline `pending_client_tool_calls`** — spojen od kraja do kraja kako bi pozivi alata na strani klijenta pravilno završili i vratili rezultate modelu.
- **Drawer za povijest** — neponovljive promjene su isključene iz liste za poništavanje; link **View full history** sada radi ispravno.
- **Sistem promjena/poništenja** — popravljeno je pet zasebnih bugova i ujednačeno pod novom admin interfejsom.
- **Toast za spremanje postavki** — snackbar obavještenje sada se pouzdano pojavljuje nakon klika na **Save Settings**.
- **Kontekstualno izbornik za smeće** — dodata je opcija **Delete Permanently** kako bi se stavke mogle trajno obrisati bez napuštanja prikaza smeća.
- **Uredi i pošalji** — klikom na ikonu za uređivanje sada se ulazi u režim uređivanja samo za kliknuti poruku, a ne za sve poruke u threadu.
- **Visina rasporeda chata** — panel za chat prilagođava svoju visinu kada se sadržaj ubrizgan pluginom (admin obavijesti, baneri) pojavi iznad stranice, sprječavajući da se područje za unos pomakne van ekrana.

---

## 1.4.0 — Objavljeno 2026-04-09 {#140--released-on-2026-04-09}

### Novo {#new-1}

- **WP-CLI benchmark naredba** (`wp gratis-ai-agent benchmark`) — pokreće Agent Capabilities v1 benchmark suite sa komandne linije za CI pipeline-e i radove evaluacije modela. Podržava pokretanje po pitanju, nadjačavanje provajdera/modela i izlaz u JSON/CSV formatu.
- **Agent Capabilities v1 benchmark suite** — strukturirani set kompleksnih, višestepeničnih promptova koji testiraju cijelu površinu sposobnosti, sa bodovanjem i izvještavanjem o tokenima/trajanju.
- **Sposobnosti za Custom Post Type** — `register_post_type`, `list_post_types`, `delete_post_type`. Registracije ostaju aktivne nakon ponovnog pokretanja putem opcija tabele.
- **Sposobnosti za Custom Taxonomy** — `register_taxonomy`, `list_taxonomies`, `delete_taxonomy`. Podržava hijerarhijske i ravne taksonomije sa opcionalnim rewrite slug-ovima.
- **Sposobnosti za Design System** — `inject_custom_css`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `apply_theme_json_preset`. Uključuje pet pažljivo odabranih predložaka: `minimal-dark`, `warm-editorial`, `corporate-blue`, `vibrant-startup`, `classic-blog`.
- **Sposobnosti za Global Styles** — `get_global_styles`, `set_global_styles`, `reset_global_styles`. Čita i piše vrijednosti theme.json putem WordPress Global Styles API-ja.
- **Sposobnost za upravljanje navigacijskim menijima** — `create_menu`, `update_menu`, `add_menu_item`, `remove_menu_item`, `list_menus`. Podržava ugnježdena menija i dodjelu lokacije teme.
- **Sposobnost za upravljanje opcijama** — `get_option`, `set_option`, `delete_option`, `list_options`. Uključuje ugrađenu sigurnosnu bloklistu koja štiti kritične WordPress opcije od modificiranja.
- **Registracija instalabilnih sposobnosti** — `list_available_abilities`, `install_ability`, `recommend_plugin`. Otkrijte i aktivirajte pakete sposobnosti distribuirane kao WordPress pluginovi.
- **Site Builder Orchestration v2** — `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`. Višestruki fazni planovi izgradnje stranice sa otkrivanjem pluginova, referencama izlaza koraka, praćenjem napretka i autonomnim oporavkom od grešaka.
- **Benchmark pitanje za restoran web stranicu** (`q-restaurant-website`) — end-to-end test koji pokriva registraciju CPT, design system, navigaciju i otkrivanje pluginova.
- **AI provider connector pluginovi** dodani su u WordPress Playground blueprint-ove za brže lokalno postavljanje.

### Poboljšano {#improved-1}

- README ažuriran dokumentacijom i uputama za postavljanje AI provider connector-a.

### Popravljeno {#fixed-1}

- 25 PHPUnit test neuspjeha na `main` grani popravljeno.
- Format URL-a za GitHub release-ove u `blueprint.json` ispravljen.
- Ponovo brojanje ID-a zadataka kako bi se izbjegao sukob sa starim ID-ovima.

---

## 1.3.x {#13x}

_Napomene o prethodnim izdanjima održavaju se u plugin repozitoriju._

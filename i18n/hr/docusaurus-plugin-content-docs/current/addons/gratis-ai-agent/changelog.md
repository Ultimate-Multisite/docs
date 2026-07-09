---
title: Dnevnik promjena
sidebar_position: 5
_i18n_hash: 59cb5f1cda2a3e8a789dcd3d67db33db
---
# Dnevnik promjena

## 1.9.0 — Objavljeno 2026-04-28

### Novo

- **mogućnost `create_contact_form`** — stvara kontaktni obrazac pomoću aktivnog plugina za obrasce (Contact Form 7, WPForms, Fluent Forms ili Gravity Forms) i vraća kratki kod spreman za ugradnju u bilo koju objavu ili stranicu.
- **mogućnost `set_featured_image`** — dodjeljuje istaknutu sliku objavi ili stranici iz postojećeg ID-ja privitka u Medijskoj zbirci ili udaljenog URL-a; automatski uvozi sliku kada je naveden URL.
- **mogućnost `batch_create_posts`** — stvara više objava u jednom pozivu mogućnosti. Podržava iste parametre kao `create_post`, izvještava o uspjehu/neuspjehu po objavi i ima opcionalni način `stop_on_error`.
- **parametar `page_template`** — dodan u `create_post` i `update_post`. Dodjeljuje datoteku PHP predloška stranice (npr. `page-full-width.php`) pri stvaranju ili ažuriranju. Proslijedite prazan niz u `update_post` za povratak na zadanu vrijednost teme.
- **Mogućnosti snimki zaslona na strani klijenta** — `capture_screenshot`, `compare_screenshots` i `review_page_design`. Snimaju pune ili viewport snimke zaslona stranica uživo putem serverskog headless preglednika, uspoređuju dvije snimke zaslona i dobivaju AI-generiranu recenziju dizajna koja obuhvaća raspored, tipografiju, boju i pristupačnost.
- **Pet ugrađenih agenata** — Pisac sadržaja, Graditelj web-mjesta, Dizajnerski studio, Upravitelj plugina i Asistent za podršku. Svaki agent ima namjenski skup alata, prilagođenu sistemsku uputu i početne prijedloge. Prebacivanje je moguće putem novog **Birača agenata** u zaglavlju chata. Pogledajte [Ugrađeni agenti](../../user-guide/configuration/built-in-agents).
- **Zastavice značajki** — nova kartica **Postavke → Zastavice značajki** s prekidačima za kontrolu pristupa (ograniči na administratore, ograniči na mrežne administratore, pristup pretplatnicima, onemogući za nečlanove) i opcijama brendiranja (sakrij atribuciju u podnožju, prilagođeni naziv agenta, sakrij birač agenata, koristi ikonu web-mjesta kao avatar chata). Pogledajte [Postavke Gratis AI Agent](../../user-guide/administration/gratis-ai-agent-settings).
- **Vraćanje posljednje sesije** — chat panel sada automatski ponovno učitava najnoviji razgovor pri učitavanju stranice i pri otvaranju widgeta, tako da se kontekst nikad ne izgubi tijekom navigacije stranicama.
- **Akcijske poveznice plugina** — brze poveznice na Postavke i Registar mogućnosti sada se pojavljuju na WordPress zaslonu **Plugini → Instalirani plugini** ispod opisa plugina.

### Poboljšano

- **Ponovni pokušaj izvora slika** — agent sada ponovno pokušava sve konfigurirane besplatne izvore slika prije povratka na AI-generiranu sliku pri neuspjelom preuzimanju.
- **Panel s informacijama o modelu** — uvijek je vidljiv u zaglavlju chata; više se ne skriva nakon prve poruke.
- **Ponašanje automatskog pomicanja** — automatsko pomicanje pauzira se kada se korisnik pomakne prema gore radi čitanja; pojavljuje se plutajući gumb **Pomakni na dno** i automatski nestaje kada korisnik dosegne najnoviju poruku.
- **UI Birača agenata** — redizajniran kao preklapanje u obliku tablice obrasca s ikonama po agentu, što olakšava prepoznavanje i prebacivanje agenata na prvi pogled.
- **Lijeno učitani JS dijelovi** — početni JavaScript paket chat widgeta sada je podijeljen na lijeno učitane dijelove, smanjujući početne veličine paketa za 75–90%.
- **Redizajn chat widgeta** — objedinjena AI ikona zamjenjuje prethodni prilagođeni avatar; usklađeno s ugrađenim sustavom agenata.
- **Pretvaranje URL-ova u poveznice** — URL-ovi koji se pojavljuju u sistemskim porukama i oblačićima poruka o pogrešci sada se prikazuju kao poveznice koje je moguće kliknuti.

### Ispravljeno

- **Otkrivanje mogućnosti** — ispravljeni su opisi, reference sistemskih uputa i usklađenost namespacea kako bi se sve mogućnosti pouzdano pojavljivale na agentovom popisu alata.
- **Predmemorija providera** — provideri se sada predmemoriraju na razini cijelog web-mjesta putem brojača verzije, čime se sprječavaju problemi sa zastarjelim providerima na multisite mrežama.
- **`ability_invalid_output`** — riješeno u 12 handlera mogućnosti; svi vraćaju pravilno strukturirane JSON odgovore.
- **pipeline `pending_client_tool_calls`** — povezan od početka do kraja kako bi se pozivi alata na strani klijenta pravilno dovršavali i vraćali rezultate modelu.
- **Ladica povijesti** — promjene koje se ne mogu vratiti izuzete su s popisa za vraćanje; poveznica **Prikaži punu povijest** sada radi ispravno.
- **Sustav promjena/vraćanja** — pet zasebnih grešaka ispravljeno je i objedinjeno u novom administratorskom sučelju.
- **Toast za spremanje postavki** — snackbar obavijest sada se pouzdano pojavljuje nakon klika na **Spremi postavke**.
- **Kontekstni izbornik smeća** — dodana je opcija **Trajno izbriši** kako bi se stavke mogle trajno izbrisati bez napuštanja prikaza smeća.
- **Uredi i ponovno pošalji** — klik na ikonu za uređivanje sada ulazi u način uređivanja samo za kliknutu poruku, ne za sve poruke u niti.
- **Visina rasporeda chata** — chat panel prilagođava svoju visinu kada se sadržaj umetnut pluginom (administratorske obavijesti, banneri) pojavi iznad stranice, sprječavajući da se područje unosa gurne izvan zaslona.

---

## 1.4.0 — Objavljeno 2026-04-09

### Novo

- **WP-CLI benchmark naredba** (`wp gratis-ai-agent benchmark`) — pokreće Agent Capabilities v1 benchmark paket iz naredbenog retka za CI pipelines i tijekove rada evaluacije modela. Podržava pokretanja po pitanju, nadjačavanja pružatelja/modela te JSON/CSV izlaz.
- **Agent Capabilities v1 benchmark paket** — strukturirani skup složenih, višekoračnih promptova koji provjeravaju puni raspon sposobnosti, s bodovanjem i izvješćivanjem o tokenima/trajanju.
- **Sposobnosti Custom Post Type** — `register_post_type`, `list_post_types`, `delete_post_type`. Registracije ostaju sačuvane nakon ponovnih pokretanja putem tablice options.
- **Sposobnosti Custom Taxonomy** — `register_taxonomy`, `list_taxonomies`, `delete_taxonomy`. Podržava hijerarhijske i ravne taksonomije s opcionalnim rewrite slugovima.
- **Sposobnosti Design System** — `inject_custom_css`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `apply_theme_json_preset`. Uključuje pet odabranih preseta: `minimal-dark`, `warm-editorial`, `corporate-blue`, `vibrant-startup`, `classic-blog`.
- **Sposobnosti Global Styles** — `get_global_styles`, `set_global_styles`, `reset_global_styles`. Čita i zapisuje vrijednosti theme.json kroz WordPress Global Styles API.
- **Sposobnost upravljanja Navigation Menu** — `create_menu`, `update_menu`, `add_menu_item`, `remove_menu_item`, `list_menus`. Podržava ugniježđene izbornike i dodjelu lokacije teme.
- **Sposobnost Options Management** — `get_option`, `set_option`, `delete_option`, `list_options`. Uključuje ugrađeni sigurnosni popis blokiranja koji štiti kritične WordPress opcije od izmjena.
- **Installable Abilities Registry** — `list_available_abilities`, `install_ability`, `recommend_plugin`. Otkrijte i aktivirajte pakete sposobnosti distribuirane kao WordPress plugins.
- **Site Builder Orchestration v2** — `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`. Višefazni planovi izrade web-mjesta s otkrivanjem plugina, referencama na izlaz koraka, praćenjem napretka i autonomnim oporavkom od pogrešaka.
- **Benchmark pitanje za web-stranicu restorana** (`q-restaurant-website`) — end-to-end test koji obuhvaća registraciju CPT-a, dizajnerski sustav, navigaciju i otkrivanje plugina.
- **Pluginovi konektora AI pružatelja** dodani u WordPress Playground blueprints za brže postavljanje lokalnog razvoja.

### Poboljšano

- README ažuriran dokumentacijom konektora AI pružatelja i uputama za postavljanje.

### Ispravljeno

- Riješeno 25 PHPUnit neuspjelih testova na grani `main`.
- Ispravljen format URL-a GitHub izdanja u `blueprint.json`.
- Prenumeriranje ID-a zadataka kako bi se izbjegla preklapanja sa starim ID-ovima.

---

## 1.3.x

_Prethodne napomene o izdanjima održavaju se u repozitoriju plugina._

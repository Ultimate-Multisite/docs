---
title: Agebaute Agenten
sidebar_position: 12
_i18n_hash: a89717a9bbb03aa1da4d264e01acf11a
---
# Agebaute Agents

Gratis AI Agent v1.9.0 liwwert fënnef agebaute Agents, jidderee virkonfiguréiert mat engem fokusséierte Set u Tools, engem ugepasste System-Prompt, an Ufanksvirschléi, déi op heefeg Aufgaben an deem Beräich ofgestëmmt sinn. Tëscht Agents wiesselen ännert, wat den Assistant maache kann a wéi en äntwert — ouni iergendeng Konfiguratioun vun Ärer Säit. Superdav AI Agent v1.18.0 kann dëse Workflows zäitplangbewosst Tools, Erënnerungsrecords, Geneemegungspaarten an SMS-Benoriichtegungen dobäisetzen, wann déi verbonne Integratioune konfiguréiert sinn.

## Wat ass en Agent?

All Agent ass e benannte Konfiguratiounsprofil, deen dat heite kombinéiert:

- **Tools** — d'Fäegkeeten, déi den Agent opruffen dierf (z. B. e Content Writer huet Zougrëff op Fäegkeete fir Bäiträg ze erstellen; e Design Studio huet Zougrëff op CSS- an theme.json-Fäegkeeten)
- **System-Prompt** — Instruktiounen, déi den Toun, d'Prioritéiten an d'Aschränkunge vum Agent festleeën
- **Virschléi** — virgeschriwwe Prompts, déi an der Chat-Interface ugewise ginn, fir Iech ze hëllefen, séier unzefänken

## Zougrëff op den Agent Picker

1. Maacht de **Gratis AI Agent**-Panel an der WordPress-Admin-Sidebar op.
2. Klickt op d'**Agent-Ikon** uewe lénks am Chat-Header (d'Ikon ännert sech, fir den aktiven Agent ze weisen).
3. Den **Agent Picker** geet als Form-Table-Overlay op. All Agent gëtt mat senger Ikon, sengem Numm an enger Beschreiwung an enger Zeil opgelëscht.
4. Klickt op eng Agent-Zeil, fir en ze aktivéieren. De Chat-Header aktualiséiert sech direkt.

Dir kënnt Agents och matzen am Gespréich wiesselen — de System-Prompt vum neien Agent gräift ab der nächster Noriicht.

## Déi fënnef agebaute Agents

### Content Writer

**Fokus:** Erstellen an Ännere vu Bäiträg, Säiten a Kontaktformulairen.

**Verfügbar Tools:** `create_post`, `update_post`, `batch_create_posts`, `set_featured_image`, `create_contact_form`, `get_option`, `list_post_types`. Mat aktivéierte Superdav AI Agent v1.18.0-Integratioune kënnen och konfiguréiert Kalennerkontext, Geneemegungspaarten, Erënnerungen an SMS-Benoriichtegungs-Tools fir geneemegt Workflows verfügbar sinn.

**Wat en gutt mécht:**
- Blogbäiträg aus engem Briefing oder enger Glidderung entwerfen a publizéieren
- Gruppe vu Landing-Säite fir en neie Site erstellen
- Kontakt- an Ufroformulairen bauen
- Featured Images op Bäiträg vun enger URL oder enger Sich setzen
- Event-Nofass-Noriichten aus konfiguréiertem Google Calendar-Kontext entwerfen, an da fir Geneemegung pauséieren, ier Benoriichtegunge geschéckt ginn

**Ufanksvirschléi:**
- *Schreif e Blogbäitrag vu 500 Wierder iwwer d'Virdeeler vu WordPress multisite.*
- *Erstell eng Iwwer-eis-, Servicer- a Kontakt-Säit a publizéier se.*
- *Füügt der Kontakt-Säit e Buchungsufro-Formulaire bäi.*
- *Entwerf eng Erënnerung fir d'Participanten um muer konfiguréiertem Kalenner-Event a waart op Geneemegung, ier se geschéckt gëtt.*

---

### Site Builder

**Fokus:** End-to-end-Websäit-Erstellung aus engem eenzege Prompt.

**Verfügbar Tools:** `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`, `create_post`, `batch_create_posts`, `register_post_type`, `create_menu`, `add_menu_item`, `inject_custom_css`, `apply_theme_json_preset`, `install_ability`, `recommend_plugin`, `create_contact_form`. Mat Superdav AI Agent v1.18.0 kënne konfiguréiert Managed-Service-, Geneemegungs-, Erënnerungs-, Kalenner- an SMS-Tools verfügbar sinn, wou Administrateuren se aktivéieren.

**Wat en gutt mécht:**
- E méistufege Site-Opbauplang fir en beschriwwenen Entreprisentyp generéieren
- All Phas autonom ausféieren — Struktur, Inhalt, Navigatioun, Design
- Vun Feeler matzen am Plang erhuelen, ouni manuell Agrëff ze verlaangen
- Recommandéiert Plugins als Deel vum Opbau installéieren
- Kontaktformulairen direkt aus der Chat-Interface erstellen (Superdav AI Agent v1.10.0+)
- Launch-Erënnerungen oder Participant-Nofass koordinéieren, ouni duebel Benoriichtegungen, wann Geneemegungspaarten an Erënnerungsrecords aktivéiert sinn

**Ufanksvirschléi:**
- *Bau e Fotografie-Portfolio-Site mat engem Galerie-Bäitragstyp, enger Buchungssäit an engem Kontaktformulaire.*
- *Erstell eng Restaurant-Websäit mat engem Online-Menü, Ëffnungszäiten an engem Dëschbuchungs-Ufroformulaire.*
- *Setz e Freelance-Consulting-Site mat Servicesäiten, enger Portfolio-Sektioun an engem Blog op.*
- *Füügt der Kontakt-Säit e Kontaktformulaire mam Site Builder bäi.*
- *Nodeems d'Checklëscht fir de Site-Launch geneemegt ass, schéck eng SMS-Erënnerung un de konfiguréierte Stakeholder-Kontakt.*

---

### Design Studio

**Fokus:** Visuell Upassung — Faarwen, Typografie, CSS a Blockmuster.

**Verfügbar Tools:** `inject_custom_css`, `apply_theme_json_preset`, `get_global_styles`, `set_global_styles`, `reset_global_styles`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `capture_screenshot`, `review_page_design`

**Wat en gutt mécht:**
- Benannt Theme-Presets uwenden (minimal-dark, warm-editorial, corporate-blue, vibrant-startup, classic-blog)
- Global Typografie a Faarfpaletten iwwer theme.json fein ofstëmmen
- Benotzerdefinéiert CSS fir markespezifesch Iwwerschreiwungen injizéieren
- E Screenshot vun enger Säit maachen an en op Designproblemer iwwerpréiwen

**Ufanksvirschléi:**
- *Wend de warm-editorial-Preset un an setz dono d'Primärfaarf op #2d6a4f.*
- *Maach e Screenshot vun der Startsäit a so mir, wat s du verbessere géifs.*
- *Erstell e wiederverwendbaart Hero-Blockmuster mat engem hannergrondbild iwwer déi ganz Breet an enger zentréierter Iwwerschrëft.*

### Plugin Manager

**Fokus:** WordPress-Plugins entdecken, installéieren a managen.

**Verfügbar Tools:** `list_available_abilities`, `install_ability`, `recommend_plugin`, `get_option`, `set_option`

**Wat en gutt mécht:**
- De beschte Plugin fir e beschriwwenen Uwendungsfall recommandéieren
- Ability-Packs aus dem Registry installéieren
- De verfügbare Ability-Katalog no Kategorie duerchsichen

**Ufanksvirschléi:**
- *Wat ass de beschte Plugin fir e Membership-Verzeechnes?*
- *Installéier de WooCommerce-Ability-Pack.*
- *Weis mir all verfügbar E-Commerce-Ability-Packs.*

---

### Support Assistant

**Fokus:** Froen iwwer Site-Inhalt, Astellungen a WordPress-Konfiguratioun beäntweren.

**Verfügbar Tools:** `get_option`, `list_options`, `list_post_types`, `list_taxonomies`, `list_menus`, `list_available_abilities`

**Wat et gutt mécht:**
- Aktuell Säitenastellungen an Optiounen nokucken
- Erklären, wéi eng Bäitragstypen, Taxonomien a Menüen op der Säit konfiguréiert sinn
- Froen ewéi „wat mécht dës Astellung?“ beäntweren, andeems Live-Wäerter gelies ginn
- Als lies-nëmmen Diagnos-Schicht déngen, ier Ännerunge gemaach ginn

**Virschléi fir unzefänken:**
- *Wéi eng Plugins an Astellunge sinn aktuell op dëser Säit aktiv?*
- *Lëscht all déi personaliséiert Bäitragstypen op, déi op dëser Säit registréiert sinn.*
- *Wéi eng Navigatiounsmenüe ginn et a wou si se zougewisen?*

---

## Superdav Automation Integratiounen

Wann Superdav AI Agent v1.18.0 Integratioune konfiguréiert sinn, kënnen agebaut Agenten u méi sécheren, plangbewossten Automatiséierungs-Workflows deelhuelen:

- **Google Calendar Lies-Tools** erlaben Agenten, konfiguréiert Kalenneren an Evenementer ze iwwerpréiwen, ier nofolgend Aarbecht ausgeschafft gëtt.
- **Kontakt- an Participanten-Zouuerdnung** hëlleft, Evenement-Participanten u WordPress Benotzer oder bekannt Kontakter zouzeuerdnen.
- **Mënschlech Geneemegungs-Paarten** pauséiere sensibel Aktiounen, bis en autoriséierte Benotzer se iwwerpréift a bestätegt.
- **Erënnerungsopzeechnungen** verhënneren duebel Notifikatiounen, wann geplangten Jobs nach eng Kéier versichen oder sech widderhuelen.
- **TextBee SMS-Notifikatiounen** schécken konfiguréiert SMSen nëmmen, wann SMS-Zougangsdaten a Workflow-Berechtegungen aktivéiert sinn.

Recommandéierte Workflow: frot den Agent, de Message oder d'Aktioun virzebereeden, iwwerpréift d'Geneemegungs-Ufro, an erlaabt duerno der geneemegter Aktioun, weiderzelafen. Fir widderhuelend Erënnerungen, loosst d'Erënnerungs-Deduplikatioun aktivéiert, sou datt dat selwecht Evenement oder dee selwechte Kontakt net widderholl informéiert gëtt.

---

## Agenten upassen

All agebauten Agent kann iwwer de `gratis_ai_agent_agents` Filter erweidert oder ersat ginn.

### E personaliséierte System-Prompt zu engem existente Agent derbäisetzen

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    if ( isset( $agents['content-writer'] ) ) {
        $agents['content-writer']['system_prompt'] .= "\n\nAlways write in British English and use the Oxford comma.";
    }
    return $agents;
} );
```

### En neien Agent registréieren

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

Den neien Agent erschéngt am Agent-Auswieler direkt nodeems de Filter gelaf ass.

### En agebauten Agent ewechhuelen

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    unset( $agents['plugin-manager'] );
    return $agents;
} );
```

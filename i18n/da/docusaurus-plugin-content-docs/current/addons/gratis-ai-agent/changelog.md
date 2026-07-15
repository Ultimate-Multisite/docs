---
title: Ændringslog
sidebar_position: 5
_i18n_hash: 59cb5f1cda2a3e8a789dcd3d67db33db
---
# Ændringslog

## 1.9.0 — Udgivet den 2026-04-28 {#190--released-on-2026-04-28}

### Nyt {#new}

- **`create_contact_form`-funktion** — opretter en kontaktformular ved hjælp af det aktive formular-plugin (Contact Form 7, WPForms, Fluent Forms eller Gravity Forms) og returnerer en shortcode, der er klar til at blive indlejret i ethvert indlæg eller på enhver side.
- **`set_featured_image`-funktion** — tildeler et udvalgt billede til et indlæg eller en side fra et eksisterende vedhæftnings-ID i mediebiblioteket eller en ekstern URL; importerer automatisk billedet, når en URL angives.
- **`batch_create_posts`-funktion** — opretter flere indlæg i et enkelt funktionskald. Understøtter de samme parametre som `create_post`, rapporterer succes/fejl for hvert indlæg og har en valgfri `stop_on_error`-tilstand.
- **`page_template`-parameter** — føjet til `create_post` og `update_post`. Tildeler en PHP-sideskabelonfil (f.eks. `page-full-width.php`) ved oprettelse eller opdatering. Send en tom streng til `update_post` for at vende tilbage til temaets standard.
- **Skærmbillede-funktioner på klientsiden** — `capture_screenshot`, `compare_screenshots` og `review_page_design`. Tag skærmbilleder af hele live-sider eller viewport-skærmbilleder via en headless browser på serversiden, sammenlign to skærmbilleder, og få en AI-genereret designgennemgang, der dækker layout, typografi, farve og tilgængelighed.
- **Fem indbyggede agenter** — indholdsforfatter, sidebygger, designstudie, plugin-manager og supportassistent. Hver agent har et dedikeret sæt værktøjer, en skræddersyet systemprompt og startforslag. Kan skiftes via den nye **agentvælger** i chat-headeren. Se [indbyggede agenter](../../user-guide/configuration/built-in-agents).
- **Funktionsflag** — ny fane **Indstillinger → Funktionsflag** med adgangskontrol-til/fra-knapper (begræns til administratorer, begræns til netværksadministratorer, abonnentadgang, deaktiver for ikke-medlemmer) og brandingmuligheder (skjul footer-kreditering, brugerdefineret agentnavn, skjul agentvælger, brug site-ikon som chat-avatar). Se [Gratis AI Agent-indstillinger](../../user-guide/administration/gratis-ai-agent-settings).
- **Gendan seneste session** — chatpanelet genindlæser nu automatisk den seneste samtale ved sideindlæsning og ved åbning af widgetten, så konteksten aldrig går tabt på tværs af sidenavigationer.
- **Plugin-handlingslinks** — hurtiglinks til indstillinger og funktionsregisteret vises nu på WordPress-skærmen **Plugins → Installerede plugins** under plugin-beskrivelsen.

### Forbedret {#improved}

- **Gentagelse for billedkilde** — agenten prøver nu alle konfigurerede gratis billedkilder igen, før den falder tilbage til et AI-genereret billede ved downloadfejl.
- **Panel med modeloplysninger** — altid synligt i chat-headeren; skjules ikke længere efter den første besked.
- **Automatisk rulning** — automatisk rulning sættes på pause, når brugeren ruller op for at læse; en flydende **Rul til bunden**-knap vises og lukkes automatisk, når brugeren når den seneste besked.
- **Agentvælger-grænseflade** — redesignet som et formular-tabel-overlay med ikoner for hver agent, hvilket gør det lettere at identificere og skifte agenter med et blik.
- **Lazy-loaded JS chunks** — chat-widgettens indledende JavaScript-bundle er nu opdelt i lazy-loaded chunks, hvilket reducerer de indledende bundle-størrelser med 75–90%.
- **Redesign af chat-widget** — samlet AI-ikon erstatter den tidligere brugerdefinerede avatar; konsistent med det indbyggede agentsystem.
- **URL-linkificering** — URL'er, der vises i systembeskeder og fejlbeskedbobler, gengives nu som klikbare links.

### Rettet {#fixed}

- **Funktionsopdagelighed** — korrigerede beskrivelser, systemprompt-referencer og namespace-tilpasning, så alle funktioner vises pålideligt i agentens værktøjsliste.
- **Provider-cache** — providers caches nu site-wide via en versionstæller, hvilket forhindrer problemer med forældede providers på multisite-netværk.
- **`ability_invalid_output`** — løst på tværs af 12 funktionshåndteringer; alle returnerer korrekt strukturerede JSON-svar.
- **`pending_client_tool_calls`-pipeline** — forbundet fra ende til ende, så værktøjskald på klientsiden fuldføres korrekt og returnerer resultater til modellen.
- **Historikskuffe** — ændringer, der ikke kan fortrydes, er udelukket fra fortrydelseslisten; linket **Vis fuld historik** fungerer nu korrekt.
- **Ændringer/fortryd-system** — fem separate fejl rettet og samlet under den nye admin-grænseflade.
- **Gem indstillinger-toast** — snackbar-notifikation vises nu pålideligt efter klik på **Gem indstillinger**.
- **Kontekstmenu for papirkurv** — tilføjet mulighed **Slet permanent**, så elementer kan slettes helt uden at forlade papirkurvsvisningen.
- **Rediger og send igen** — klik på redigeringsikonet aktiverer nu kun redigeringstilstand for den klikkede besked, ikke alle beskeder i tråden.
- **Chatlayout-højde** — chatpanelet tilpasser sin højde, når plugin-injiceret indhold (admin-meddelelser, bannere) vises over siden, hvilket forhindrer inputområdet i at blive skubbet ud af skærmen.

---

## 1.4.0 — Udgivet den 2026-04-09 {#140--released-on-2026-04-09}

### Nyt {#new-1}

- **WP-CLI benchmark command** (`wp gratis-ai-agent benchmark`) — kører Agent Capabilities v1 benchmark suite fra kommandolinjen til CI-pipelines og arbejdsgange for modelevaluering. Understøtter kørsler pr. spørgsmål, tilsidesættelser af provider/model samt JSON/CSV-output.
- **Agent Capabilities v1 benchmark suite** — et struktureret sæt af komplekse, flertrins-prompts, der afprøver hele evnefladen, med scoring og rapportering af tokens/varighed.
- **Custom Post Type-evner** — `register_post_type`, `list_post_types`, `delete_post_type`. Registreringer bevares på tværs af genstarter via options-tabellen.
- **Custom Taxonomy-evner** — `register_taxonomy`, `list_taxonomies`, `delete_taxonomy`. Understøtter hierarkiske og flade taxonomier med valgfrie rewrite-slugs.
- **Design System-evner** — `inject_custom_css`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `apply_theme_json_preset`. Indeholder fem kuraterede presets: `minimal-dark`, `warm-editorial`, `corporate-blue`, `vibrant-startup`, `classic-blog`.
- **Global Styles-evner** — `get_global_styles`, `set_global_styles`, `reset_global_styles`. Læser og skriver theme.json-værdier gennem WordPress Global Styles API.
- **Navigation Menu-administrations-evne** — `create_menu`, `update_menu`, `add_menu_item`, `remove_menu_item`, `list_menus`. Understøtter indlejrede menuer og tildeling af theme location.
- **Options Management-evne** — `get_option`, `set_option`, `delete_option`, `list_options`. Indeholder en indbygget sikkerhedsblokliste, der beskytter kritiske WordPress-options mod ændring.
- **Installable Abilities Registry** — `list_available_abilities`, `install_ability`, `recommend_plugin`. Opdag og aktivér evnepakker distribueret som WordPress-plugins.
- **Site Builder Orchestration v2** — `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`. Flerfasede planer til opbygning af sites med plugin-opdagelse, referencer til trinoutput, fremdriftssporing og autonom fejlgendannelse.
- **Benchmarkspørgsmål for restaurantwebsted** (`q-restaurant-website`) — end-to-end-test, der dækker CPT-registrering, design system, navigation og plugin-opdagelse.
- **AI provider connector-plugins** føjet til WordPress Playground-blueprints for hurtigere opsætning af lokal udvikling.

### Forbedret {#improved-1}

- README opdateret med dokumentation for AI provider connector og opsætningsinstruktioner.

### Rettet {#fixed-1}

- 25 PHPUnit-testfejl på `main`-branch løst.
- GitHub releases-URL-format i `blueprint.json` rettet.
- Omdøbning af task ID-numre for at undgå kollisioner med gamle ID'er.

---

## 1.3.x {#13x}

_Tidligere release notes vedligeholdes i plugin-repositoriet._

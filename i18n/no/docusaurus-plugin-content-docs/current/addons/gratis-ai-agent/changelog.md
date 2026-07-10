---
title: Endringslogg
sidebar_position: 5
_i18n_hash: 59cb5f1cda2a3e8a789dcd3d67db33db
---
# Endringslogg {#changelog}

## 1.9.0 — Utgitt 2026-04-28 {#190--released-on-2026-04-28}

### Nytt {#new}

- **`create_contact_form` ability** — oppretter et kontaktskjema ved hjelp av det aktive form-pluginet (Contact Form 7, WPForms, Fluent Forms eller Gravity Forms) og returnerer en shortcode som er klar til å settes inn i ethvert innlegg eller side.
- **`set_featured_image` ability** — tildeler et utvalg-bilde til et innlegg eller en side fra en eksisterende Media Library attachment ID eller en ekstern URL; importerer bildet automatisk når en URL blir oppgitt.
- **`batch_create_posts` ability** — oppretter flere innlegg i ett enkelt kall. Støtter de samme parameterne som `create_post`, rapporterer suksess/feil per innlegg, og har en valgfri `stop_on_error`-modus.
- **`page_template` parameter** — lagt til i `create_post` og `update_post`. Tildeler en PHP-side malfil (f.eks. `page-full-width.php`) ved oppretting eller oppdatering. Send en tom streng til `update_post` for å gå tilbake til temaets standardinnstilling.
- **Client-side screenshot abilities** — `capture_screenshot`, `compare_screenshots`, og `review_page_design`. Tar fullskjerm- eller viewport-skjermbilder av live sider via en server-side headless browser, sammenligner to skjermbilder, og får en AI-generert designvurdering som dekker layout, typografi, farge og tilgjengelighet.
- **Fem innebygde agenter** — Content Writer, Site Builder, Design Studio, Plugin Manager og Support Assistant. Hver agent har et dedikert sett med verktøy, en tilpasset systemprompt og startforslag. Kan byttes via den nye **Agent Picker** i chat-overskriften. Se [Built-in Agents](../../user-guide/configuration/built-in-agents).
- **Feature flags** — ny **Settings → Feature Flags**-fane med tilgangskontrollbrytere (begrenset til administratorer, begrenset til nettverksadministratorer, abonnenttilgang, deaktivert for ikke-medlemmer) og merkevarealternativer (skjul fotnote-attribusjon, tilpasset agentnavn, skjul agentpicker, bruk nettstedikon som chat-avatar). Se [Gratis AI Agent Settings](../../user-guide/administration/gratis-ai-agent-settings).
- **Gjenopprett forrige sesjon** — chat-panelet laster nå automatisk inn den siste samtalen ved lasting av siden og når widgeten åpnes, slik at konteksten aldri går tapt under side-navigering.
- **Plugin action links** — raske lenker til Settings og Abilities Registry vises nå på WordPress **Plugins → Installed Plugins**-skjermen under plugin-beskrivelsen.

### Forbedret {#improved}

- **Image source retry** — agenten prøver nå alle konfigurerte gratis bildekilder før den faller tilbake på et AI-generert bilde ved nedlastingsfeil.
- **Model info panel** — alltid synlig i chat-overskriften; ikke lenger skjult etter det første meldingen.
- **Auto-scroll behaviour** — auto-scroll pauser når brukeren scroller opp for å lese; en flytende **Scroll to bottom**-knapp vises og forsvinner automatisk når brukeren når den siste meldingen.
- **Agent Picker UI** — redesignet som et form-tabell-overlay med ikoner per agent, noe som gjør det enklere å identifisere og bytte agenter ved et raskt blikk.
- **Lazy-loaded JS chunks** — chat-widgetens initiale JavaScript-bundle er nå delt inn i lazy-loaded chunks, noe som reduserer de initiale bundle-størrelsene med 75–90 %.
- **Chat widget redesign** — forent AI-ikon erstatter det tidligere tilpassede avatar; konsistent med det innebygde agent-systemet.
- **URL linkification** — URL-er som vises i systemmeldinger og feilmeldingbobler, gjengis nå som klikkbare lenker.

### Rettet {#fixed}

- **Ability discoverability** — korrigert beskrivelser, systemprompt-referanser og namespace-justeringer slik at alle abilities vises i agentens verktøyliste pålitelig.
- **Providers cache** — providers blir nå cachet på tvers av hele nettstedet via en versjonssteller, noe som forhindrer problemer med utdaterte providers på multisite-nettverk.
- **`ability_invalid_output`** — løst på tvers av 12 ability handlers; alle returnerer nå korrekt strukturerte JSON-svar.
- **`pending_client_tool_calls` pipeline** — koblet sammen fra ende til ende slik at client-side tool calls fullføres korrekt og returnerer resultater til modellen.
- **History drawer** — uopprettelige endringer er ekskludert fra reverseringslisten; lenken **View full history** fungerer nå korrekt.
- **Changes/revert system** — fem separate feil er rettet og samlet under det nye admin-grensesnittet.
- **Save Settings toast** — snackbar-varslingen vises nå pålitelig etter å ha klikket **Save Settings**.
- **Trash context menu** — lagt til alternativet **Delete Permanently** slik at elementer kan slettes permanent uten å forlate søppelbøtte-visningen.
- **Edit & resend** — å klikke på redigeringsikonet går nå kun inn i redigeringsmodus for den klikkede meldingen, ikke alle meldinger i tråden.
- **Chat layout height** — chat-panelet tilpasser sin høyde når plugin-injisert innhold (admin-varsler, bannere) vises over siden, noe som forhindrer at inndataområdet blir presset utenfor skjermen.

---

## 1.4.0 — Utgitt 2026-04-09 {#140--released-on-2026-04-09}

### Nytt {#new-1}

- **WP-CLI benchmark command** (`wp gratis-ai-agent benchmark`) — kjører Agent Capabilities v1 benchmark suite fra kommandolinjen for CI-pipelines og modellvurderingsarbeidsflyter. Støtter kjøring per spørsmål, provider/modell-overstyringer og JSON/CSV-utdata.
- **Agent Capabilities v1 benchmark suite** — et strukturert sett med komplekse, flertrinnsprompter som tester hele ability-flaten, med poengberegning og rapportering av tokens/varighet.
- **Custom Post Type abilities** — `register_post_type`, `list_post_types`, `delete_post_type`. Registreringer vedvarer over omstarter via options-tabellen.
- **Custom Taxonomy abilities** — `register_taxonomy`, `list_taxonomies`, `delete_taxonomy`. Støtter hierarkiske og flate taksonomier med valgfri rewrite slugs.
- **Design System abilities** — `inject_custom_css`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `apply_theme_json_preset`. Inkluderer fem kuraterte presets: `minimal-dark`, `warm-editorial`, `corporate-blue`, `vibrant-startup`, `classic-blog`.
- **Global Styles abilities** — `get_global_styles`, `set_global_styles`, `reset_global_styles`. Leser og skriver theme.json-verdier gjennom WordPress Global Styles API.
- **Navigation Menu management ability** — `create_menu`, `update_menu`, `add_menu_item`, `remove_menu_item`, `list_menus`. Støtter innkapslede menyer og tildeling av tema-lokasjoner.
- **Options Management ability** — `get_option`, `set_option`, `delete_option`, `list_options`. Inkluderer en innebygd sikker svarteliste som beskytter kritiske WordPress-valg mot endringer.
- **Installable Abilities Registry** — `list_available_abilities`, `install_ability`, `recommend_plugin`. Oppdag og aktiver ability-pakker distribuert som WordPress plugins.
- **Site Builder Orchestration v2** — `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`. Flerefase nettstedsbyggplaner med plugin-oppdagelse, trinn-utdata-referanser, fremdriftssporing og autonom feilgjenoppretting.
- **Restaurant website benchmark question** (`q-restaurant-website`) — end-to-end-test som dekker CPT-registrering, designsystem, navigasjon og plugin-oppdagelse.
- **AI provider connector plugins** lagt til i WordPress Playground blueprints for raskere lokal utviklingsoppsett.

### Forbedret {#improved-1}

- README oppdatert med dokumentasjon og oppsettinstruksjoner for AI provider connector.

### Rettet {#fixed-1}

- 25 PHPUnit testfeil på `main`-grenen løst.
- GitHub releases URL-format i `blueprint.json` korrigert.
- Oppgave-ID renummerert for å unngå kollisjoner med gamle ID-er.

---

## 1.3.x {#13x}

_Tidligere utgivelsesnotater beholdes i plugin-repositoryet._

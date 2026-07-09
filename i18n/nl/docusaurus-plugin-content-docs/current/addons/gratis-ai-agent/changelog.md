---
title: Wijzigingslogboek
sidebar_position: 5
_i18n_hash: 59cb5f1cda2a3e8a789dcd3d67db33db
---
# Changelog {#changelog}

## 1.9.0 — Uitgebracht op 2026-04-28 {#190--released-on-2026-04-28}

### Nieuw {#new}

- **`create_contact_form` ability** — creëert een contactformulier met behulp van het actieve formulierplugin (Contact Form 7, WPForms, Fluent Forms, of Gravity Forms) en retourneert een shortcode die klaar is om in elke post of pagina te worden ingebed.
- **`set_featured_image` ability** — wijst een featured image toe aan een post of pagina op basis van een bestaande Media Library attachment ID of een externe URL; importeert de afbeelding automatisch wanneer er een URL wordt verstrekt.
- **`batch_create_posts` ability** — creëert meerdere posts in één enkele ability-aanroep. Ondersteunt dezelfde parameters als `create_post`, rapporteert per post succes/falen, en heeft een optionele `stop_on_error` modus.
- **`page_template` parameter** — toegevoegd aan `create_post` en `update_post`. Wijst een PHP page template bestand toe (bijv. `page-full-width.php`) bij aanmaak of bij update. Geef een lege string aan `update_post` om terug te keren naar het thema-standaard.
- **Client-side screenshot abilities** — `capture_screenshot`, `compare_screenshots`, en `review_page_design`. Leggen volledige of viewport screenshots van live pagina's vast via een server-side headless browser, vergelijken twee screenshots, en krijgen een door AI gegenereerde design review die layout, typografie, kleur en toegankelijkheid behandelt.
- **Vijf ingebouwde agents** — Content Writer, Site Builder, Design Studio, Plugin Manager, en Support Assistant. Elke agent heeft een specifieke set tools, een aangepaste system prompt en startsuggesties. Wisselbaar via de nieuwe **Agent Picker** in de chat header. Zie [Built-in Agents](../../user-guide/configuration/built-in-agents).
- **Feature flags** — nieuwe tab **Settings → Feature Flags** met toegangscontroles (beperken op beheerders, beperken op netwerkbeheerders, abonnee-toegang, uitschakelen voor niet-leden) en brandingopties (footer-attributie verbergen, aangepaste agentnaam, agent picker verbergen, site-icoon gebruiken als chat-avatar). Zie [Gratis AI Agent Settings](../../user-guide/administration/gratis-ai-agent-settings).
- **Laatste sessie herstellen** — het chatpaneel laadt nu automatisch het meest recente gesprek bij het laden van de pagina en bij het openen van de widget, zodat de context nooit verloren gaat bij paginanavigaties.
- **Plugin action links** — snelle links naar Settings en het Abilities Registry verschijnen nu op het WordPress **Plugins → Installed Plugins** scherm onder de plugin-beschrijving.

### Verbeterd {#improved}

- **Image source retry** — de agent probeert nu alle geconfigureerde gratis beeldbronnen opnieuw voordat hij terugvalt op een door AI gegenereerde afbeelding bij een downloadfout.
- **Model info panel** — altijd zichtbaar in de chat header; niet langer verborgen na de eerste bericht.
- **Auto-scroll gedrag** — auto-scroll pauzeert wanneer de gebruiker omhoog scrollt om te lezen; een zwevende **Scroll to bottom** knop verschijnt en verdwijnt automatisch wanneer de gebruiker het laatste bericht bereikt.
- **Agent Picker UI** — opnieuw ontworpen als een form-table overlay met per-agent iconen, waardoor het gemakkelijker is om agents in één oogopslag te identificeren en te wisselen.
- **Lazy-loaded JS chunks** — het initiële JavaScript bundle van de chat widget is nu opgesplitst in lazy-loaded chunks, waardoor de initiële bundlegrootte met 75–90% is verminderd.
- **Chat widget redesign** — een uniforme AI-icoon vervangt het vorige aangepaste avatar; consistent met het ingebouwde agentensysteem.
- **URL linkification** — URLs die in systeemberichten en foutbericht-bubbels verschijnen, worden nu weergegeven als klikbare links.

### Verholpen {#fixed}

- **Ability discoverability** — beschrijvingen, system prompt referenties en namespace-uitlijning gecorrigeerd zodat alle abilities betrouwbaar in de toollijst van de agent verschijnen.
- **Providers cache** — providers worden nu site-breed gecached via een versie-teller, wat problemen met verouderde providers op multisite netwerken voorkomt.
- **`ability_invalid_output`** — opgelost in 12 ability handlers; alle retourneren nu correct gestructureerde JSON-antwoorden.
- **`pending_client_tool_calls` pipeline** — end-to-end bedraad zodat client-side tool calls correct worden voltooid en resultaten aan het model worden geretourneerd.
- **History drawer** — onherstelbare wijzigingen worden uitgesloten van de revert-lijst; de link **View full history** werkt nu correct.
- **Changes/revert system** — vijf aparte bugs verholpen en ondergebracht onder de nieuwe admin interface.
- **Save Settings toast** — de snackbar-melding verschijnt nu betrouwbaar na het klikken op **Save Settings**.
- **Trash context menu** — optie **Delete Permanently** toegevoegd, zodat items hard kunnen worden verwijderd zonder de prullenbakweergave te verlaten.
- **Edit & resend** — het klikken op het edit-icoon brengt nu alleen de geklikte melding in de editmodus, en niet alle meldingen in de thread.
- **Chat layout height** — het chatpaneel past zijn hoogte aan wanneer plugin-geïnjecteerde content (admin notices, banners) boven de pagina verschijnt, waardoor de invoerruimte niet van het scherm wordt geduwd.

---

## 1.4.0 — Uitgebracht op 2026-04-09 {#140--released-on-2026-04-09}

### Nieuw {#new-1}

- **WP-CLI benchmark command** (`wp gratis-ai-agent benchmark`) — voert de Agent Capabilities v1 benchmark suite vanuit de command line uit voor CI pipelines en model-evaluatieworkflows. Ondersteunt per-vraag uitvoeringen, provider/model overrides, en JSON/CSV output.
- **Agent Capabilities v1 benchmark suite** — een gestructureerde set van complexe, meerstaps prompts die het volledige ability-oppervlak testen, met score- en token-/duurrapportage.
- **Custom Post Type abilities** — `register_post_type`, `list_post_types`, `delete_post_type`. Registraties blijven behouden na herstarts via de options table.
- **Custom Taxonomy abilities** — `register_taxonomy`, `list_taxonomies`, `delete_taxonomy`. Ondersteunt hiërarchische en platte taxonomieën met optionele rewrite slugs.
- **Design System abilities** — `inject_custom_css`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `apply_theme_json_preset`. Bevat vijf gecureerde presets: `minimal-dark`, `warm-editorial`, `corporate-blue`, `vibrant-startup`, `classic-blog`.
- **Global Styles abilities** — `get_global_styles`, `set_global_styles`, `reset_global_styles`. Leest en schrijft theme.json waarden via de WordPress Global Styles API.
- **Navigation Menu management ability** — `create_menu`, `update_menu`, `add_menu_item`, `remove_menu_item`, `list_menus`. Ondersteunt geneste menu's en thema-locatie-toewijzing.
- **Options Management ability** — `get_option`, `set_option`, `delete_option`, `list_options`. Bevat een ingebouwde veiligheidsblocklist die kritieke WordPress opties beschermt tegen wijzigingen.
- **Installable Abilities Registry** — `list_available_abilities`, `install_ability`, `recommend_plugin`. Ontdek en activeer ability-pakketten die worden verdeeld als WordPress plugins.
- **Site Builder Orchestration v2** — `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`. Meerdere fasen site build plannen met plugin discovery, step output referenties, voortgangsmonitoring en autonome foutherstel.
- **Restaurant website benchmark question** (`q-restaurant-website`) — end-to-end test die CPT-registratie, design system, navigatie en plugin discovery dekt.
- **AI provider connector plugins** toegevoegd aan WordPress Playground blueprints voor een snellere lokale ontwikkelomgeving.

### Verbeterd {#improved-1}

- README bijgewerkt met documentatie en installatie-instructies voor AI provider connector.

### Verholpen {#fixed-1}

- 25 PHPUnit testfouten op de `main` branch verholpen.
- GitHub releases URL formaat in `blueprint.json` gecorrigeerd.
- Task ID opnieuw genummerd om botsingen met oude ID's te voorkomen.

---

## 1.3.x {#13x}

_Eerdere release notes worden bewaard in de plugin repository._

---
title: Veranderingslogboek
sidebar_position: 5
_i18n_hash: 59cb5f1cda2a3e8a789dcd3d67db33db
---
# Veranderingslogboek

## 1.9.0 — Vrygestel op 2026-04-28 {#190--released-on-2026-04-28}

### Nu {#new}

- **`create_contact_form` vermoë** — skep 'n kontakvorm met behulp van die aktiewe vorm-plugin (Contact Form 7, WPForms, Fluent Forms, of Gravity Forms) en keer 'n shortcode terug wat gereed is om in enige plasing of bladsy ingebed te word.
- **`set_featured_image` vermoë** — skenk 'n uitgeligte beeld aan 'n plasing of bladsy vanaf 'n bestaande Media Library byvoegsel-ID of 'n veilige URL; dit laat die beeld outomaties afbeeld wanneer 'n URL verskaf word.
- **`batch_create_posts` vermoë** — skep verskeie plasings in een vermoë-oproep. Dit ondersteun dieselfde parameters as `create_post`, rapporteer sukses/mislukking per plasing, en het 'n opsionele `stop_on_error` modus.
- **`page_template` parameter** — bygevoeg aan `create_post` en `update_post`. Dit skenk 'n PHP bladsy-sjabloonlêer (bv. `page-full-width.php`) tydens die skep- of opdateringproses. Stuur 'n leë string aan `update_post` om terug te keer na die tema se standaard.
- **Klantkant skermkaptuur vermoë** — `capture_screenshot`, `compare_screenshots`, en `review_page_design`. Dit vang volle of viewport skermkaptures van lewendige bladsye via 'n serverkant headless browser, vergroot twee skermkaptures, en kry 'n deur AI gegenereerde ontwerpbeoordeling wat uitleg, tipografie, kleur en toeganklikheid dek.
- **Vyf ingeboude agente** — Content Writer, Site Builder, Design Studio, Plugin Manager, en Support Assistant. Elke agent het 'n toegewyde stel gereedskap, 'n aangepaste stelsel-prompt, en beginvoorstelle. Dit kan geskakel word via die nuwe **Agent Picker** in die chat-kop. Kyk na [Built-in Agents](../../user-guide/configuration/built-in-agents).
- **Funksie-vlae (Feature flags)** — nuwe **Settings → Feature Flags** tab met toegang-beheer-omskakelaars (beperk tot administrateurs, beperk tot netwerkadministrateurs, abonneebeskikbaarheid, uitskakel vir nie-lede) en handelsmerkbewakingsopsies (verberg voettekst-attribusie, aangepaste agentnaam, verberg agentkiezer, gebruik plaaslike ikoon as chat-avatar). Kyk na [Gratis AI Agent Settings](../../user-guide/administration/gratis-ai-agent-settings).
- **Herstel laaste sessie** — die chatpaneel laai nou outomaties die mees onlangse gesprek op by bladsylaai en by widget-oopmaak, sodat die konteks nooit verloor word tydens bladsynavigasies nie.
- **Plugin aksie-skakels** — vinnige skakels na Settings en die Abilities Registry verskyn nou op die WordPress **Plugins → Installed Plugins** skerm onder die plugin-beskrywing.

### Verbeter {#improved}

- **Beeldbron-herprobeer** — die agent probeer nou al gekonfigureerde gratis beeldbronne her, voordat dit terugval op 'n AI-gegenereerde beeld by afbeeldingsfout.
- **Model-info paneel** — altyd sigbaar in die chat-kop; word nie meer verberg na die eerste boodskap nie.
- **Outo-rol-gedrag** — outo-rol skakel wanneer die gebruiker oprol om te lees; 'n drywende **Scroll to bottom** knoppie verskyn en word outomaties gemors wanneer die gebruiker by die nuutste boodskap kom.
- **Agent Picker UI** — herontwerp as 'n vorm-tafel-overlay met per-agent-ikone, wat dit makliker maak om agente vinnig te identifiseer en te skakel.
- **Lazy-loaded JS chunks** — die chat-widget se aanvanklike JavaScript-bundel word nou gesplit in lazy-loaded chunks, wat die aanvanklike bundelgrootte met 75–90% verminder.
- **Chat widget herontwerp** — 'n verenigde AI-ikoon vervang die vorige aangepaste avatar; dit is konsekwent met die ingeboude agent-sisteem.
- **URL-linkifisering** — URL's wat in stelselboodskappe en foutboodskabubbles verskyn, word nou as klikbare skakels gerender.

### Reggestel {#fixed}

- **Vermoë-ontdekbaarheid** — beskrywings, stelsel-prompt verwysings en nameruimte-uitdrywing is gekorrigeer sodat alle vermoë betroubaar in die agent se gereedskaplys verskyn.
- **Verskaffers-cache** — verskaffers word nou stelselwyd gekashede via 'n weergawe-teller, wat verouderde-verskaffers probleme op multisite-netwerke voorkom.
- **`ability_invalid_output`** — opgelos oor 12 vermoë-han डीलers; almal keer korrek gestruktureerde JSON-antwoorde terug.
- **`pending_client_tool_calls` pipeline** — van begin tot einde gekoppel sodat klientkant gereedskapoproepe korrek voltooi en resultate aan die model terugkeer.
- **Geskiedenis-lades** — nie-herstelbare veranderinge word uit die herstellys uitgesluit; die **View full history** skakel werk nou korrek.
- **Veranderings/herstel-sisteem** — vyf aparte foute is reggestel en onder die nuwe administrasie-koppelvlak gehandig.
- **Save Settings toast** — die snackbar-verrigting verskyn nou betroubaar nadat **Save Settings** geklik is.
- **Trash konteksmenu** — **Delete Permanently** opsie bygevoeg sodat items hard-verwyder kan word sonder om die rommel-uitsig te verlaat.
- **Redigeer & herstuur** — om die redigeer-ikoon te klik, gaan nou net in redigeer-modus vir die geklikte boodskap, nie alle boodskappe in die draad nie.
- **Chat uitleg hoogte** — die chatpaneel pas sy hoogte aan wanneer plugin-geïnjekteerde inhoud (administrasie-kennisgewings, banners) bo-op die bladsy verskyn, wat voorkom dat die invoergebied van die skerm af gedruk word.

---

## 1.4.0 — Vrygestel op 2026-04-09 {#140--released-on-2026-04-09}

### Nu {#new-1}

- **WP-CLI benchmark-bevel** (`wp gratis-ai-agent benchmark`) — voer die Agent Capabilities v1 benchmark-suite vanaf die lêlyn uit vir CI-pyplyne en modelbeoordelingswerkvloeite. Ondersteun per-vraag-lop, verskaffers/model-oorride, en JSON/CSV-uitvoer.
- **Agent Capabilities v1 benchmark-suite** — 'n gestruktureerde stel komplekse, meer-stap-prompts wat die volledige vermoë-oppervlak oefen, met bemarkering en token/duur-rapportering.
- **Custom Post Type vermoë** — `register_post_type`, `list_post_types`, `delete_post_type`. Registrasies bly behoue oor herlaaiings via die opsies-tafel.
- **Custom Taxonomy vermoë** — `register_taxonomy`, `list_taxonomies`, `delete_taxonomy`. Ondersteun hiërargiese en plat taksonomieë met opsionele herskryf-slugs.
- **Design System vermoë** — `inject_custom_css`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `apply_theme_json_preset`. Sluit vyf gekureerde presets in: `minimal-dark`, `warm-editorial`, `corporate-blue`, `vibrant-startup`, `classic-blog`.
- **Global Styles vermoë** — `get_global_styles`, `set_global_styles`, `reset_global_styles`. Lees en skryf theme.json waardes deur die WordPress Global Styles API.
- **Navigasie-menu bestuur vermoë** — `create_menu`, `update_menu`, `add_menu_item`, `remove_menu_item`, `list_menus`. Ondersteun ingesnoerde menuë en tema-plektoewysing.
- **Options Management vermoë** — `get_option`, `set_option`, `delete_option`, `list_options`. Sluit 'n ingeboude veiligheidsblokslys in wat kritieke WordPress-opsies teen wysiging beskerm.
- **Installeerbare Vermoë-registers** — `list_available_abilities`, `install_ability`, `recommend_plugin`. Ontdek en aktiveer vermoë-pakkette wat as WordPress plugins versprei word.
- **Site Builder Orkestrasie v2** — `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`. Meer-fase webwerf-bouplanne met plugin-ontdekking, stap-uitvoer-verwysings, vorderingsopsporing, en outonome foutherstel.
- **Restaurant webwerf benchmark-vraag** (`q-restaurant-website`) — end-to-end toets wat CPT-registrasie, design system, navigasie, en plugin-ontdekking dek.
- **AI verskaffers-verbindingsplugins** bygevoeg aan WordPress Playground blueprints vir vinniger plaaslike ontwikkelingsopstelling.

### Verbeter {#improved-1}

- README opgedateer met AI verskaffers-verbindingsdokumentasie en opstel-instruksies.

### Reggestel {#fixed-1}

- 25 PHPUnit toetsfoute op die `main` tak opgelos.
- GitHub vrystellings URL-formaat in `blueprint.json` gekorrigeer.
- Taak-ID hernommering om botsings met ou ID's te vermy.

---

## 1.3.x {#13x}

_Vorige vrystellingsnotas word in die plugin-repository gehou._

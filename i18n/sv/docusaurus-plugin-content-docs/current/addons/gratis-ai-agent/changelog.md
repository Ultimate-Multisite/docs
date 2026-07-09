---
title: Ändringslogg
sidebar_position: 5
_i18n_hash: 59cb5f1cda2a3e8a789dcd3d67db33db
---
# Changelog {#changelog}

## 1.9.0 — Released on 2026-04-28 {#190--released-on-2026-04-28}

### New {#new}

- **`create_contact_form` ability** — skapar ett kontaktformulär med hjälp av det aktiva form-pluginet (Contact Form 7, WPForms, Fluent Forms eller Gravity Forms) och returnerar en shortcode som är redo att bäddas in i vilket inlägg eller sida som helst.
- **`set_featured_image` ability** — tilldelar en huvudbild till ett inlägg eller en sida från ett befintligt Media Library attachment ID eller en extern URL; importerar bilden automatiskt när en URL tillhandahålls.
- **`batch_create_posts` ability** — skapar flera inlägg i ett enda anrop av ability. Stöder samma parametrar som `create_post`, rapporterar framgång/misslyckande per inlägg och har ett valfritt läge `stop_on_error`.
- **`page_template` parameter** — tillagd i `create_post` och `update_post`. Tilldelar en PHP-sidtempletterfil (t.ex. `page-full-width.php`) vid skapande eller uppdatering. Skicka en tom sträng till `update_post` för att återgå till tematets standardinställning.
- **Client-side screenshot abilities** — `capture_screenshot`, `compare_screenshots`, och `review_page_design`. Tar fullskärms- eller viewport-skärmdumpar av live-sidor via en serverbaserad headless browser, jämför två skärmdumpar och får en AI-genererad designgranskning som täcker layout, typografi, färg och tillgänglighet.
- **Five built-in agents** — Content Writer, Site Builder, Design Studio, Plugin Manager och Support Assistant. Varje agent har en dedikerad uppsättning verktyg, en anpassad systemprompt och startförslag. Kan växlas via den nya **Agent Picker** i chat-rubriken. Se [Built-in Agents](../../user-guide/configuration/built-in-agents).
- **Feature flags** — ny flik **Settings → Feature Flags** med åtkomstkontroller (begränsa till administratörer, begränsa till nätverksadministratörer, prenumerantåtkomst, inaktivera för icke-medlemmar) och varumärkesalternativ (dölj sidfotattribution, anpassat agentnamn, dölj agentpicker, använd webbplatsikon som chatavatar). Se [Gratis AI Agent Settings](../../user-guide/administration/gratis-ai-agent-settings).
- **Restore last session** — chatpanelen laddar nu automatiskt den senaste konversationen vid sidladdning och när widgeten öppnas, så att kontexten aldrig går förlorad vid sidnavigeringar.
- **Plugin action links** — snabblänkar till Inställningar och Abilities Registry visas nu på WordPress **Plugins → Installed Plugins**-skärmen under pluginbeskrivningen.

### Improved {#improved}

- **Image source retry** — agenten försöker nu alla konfigurerade gratis bildkällor innan den faller tillbaka på en AI-genererad bild vid nedladdningsfel.
- **Model info panel** — alltid synlig i chat-rubriken; döljs inte längre efter det första meddelandet.
- **Auto-scroll behaviour** — auto-scrollen pausar när användaren scrollar upp för att läsa; en flytande **Scroll to bottom**-knapp visas och försvinner automatiskt när användaren når det senaste meddelandet.
- **Agent Picker UI** — omarbetad som en form-tabell-overlay med ikoner per agent, vilket gör det enklare att identifiera och växla mellan agenter vid ett ögonkast.
- **Lazy-loaded JS chunks** — chatwidgetens initiala JavaScript-bundle är nu uppdelad i lazy-loaded chunks, vilket minskar de initiala bundlestorlekarna med 75–90%.
- **Chat widget redesign** — en enhetlig AI-ikon ersätter den tidigare anpassade avataren; konsekvent med det inbyggda agent-systemet.
- **URL linkification** — URL:er som visas i systemmeddelanden och felmeddelande-bubblor renderas nu som klickbara länkar.

### Fixed {#fixed}

- **Ability discoverability** — korrigerade beskrivningar, systemprompt-referenser och namnrymdsjusteringar så att alla abilities visas i agentens verktygslista pålitligt.
- **Providers cache** — providers cachas nu på hela webbplatsen via en versionsräknare, vilket förhindrar problem med föråldrade providers på multisite-nätverk.
- **`ability_invalid_output`** — löst över 12 ability handlers; alla returnerar korrekt strukturerade JSON-svar.
- **`pending_client_tool_calls` pipeline** — kopplad end-to-end så att client-side tool calls slutförs korrekt och returnerar resultat till modellen.
- **History drawer** — icke-återkalleliga ändringar exkluderas från återställningslistan; länken **View full history** fungerar nu korrekt.
- **Changes/revert system** — fem separata buggar åtgärdade och förenade under det nya admin-gränssnittet.
- **Save Settings toast** — snackbar-meddelandet visas nu pålitligt efter att ha klickat på **Save Settings**.
- **Trash context menu** — tillägg av alternativet **Delete Permanently** så att objekt kan raderas permanent utan att lämna soptunnan.
- **Edit & resend** — att klicka på redigeringsikonen går nu endast in i redigeringsläge för det klickade meddelandet, inte alla meddelanden i tråden.
- **Chat layout height** — chatpanelen anpassar sin höjd när plugin-injektat innehåll (admin notices, banners) visas ovanför sidan, vilket förhindrar att inmatningsområdet trycks utanför skärmen.

---

## 1.4.0 — Released on 2026-04-09 {#140--released-on-2026-04-09}

### New {#new-1}

- **WP-CLI benchmark command** (`wp gratis-ai-agent benchmark`) — kör Agent Capabilities v1 benchmark suite från kommandoraden för CI-pipelines och modellutvärderingsarbetsflöden. Stöder körningar per fråga, provider/modell-överskrivningar och JSON/CSV-utdata.
- **Agent Capabilities v1 benchmark suite** — en strukturerad uppsättning komplexa, flerstegs-prompter som testar hela ability-ytan, med poängsättning och rapportering av tokens/varaktighet.
- **Custom Post Type abilities** — `register_post_type`, `list_post_types`, `delete_post_type`. Registreringar kvarstår över omstarter via options-tabellen.
- **Custom Taxonomy abilities** — `register_taxonomy`, `list_taxonomies`, `delete_taxonomy`. Stöder hierarkiska och platta taxinomier med valfria rewrite slugs.
- **Design System abilities** — `inject_custom_css`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `apply_theme_json_preset`. Inkluderar fem kuraterade presets: `minimal-dark`, `warm-editorial`, `corporate-blue`, `vibrant-startup`, `classic-blog`.
- **Global Styles abilities** — `get_global_styles`, `set_global_styles`, `reset_global_styles`. Läser och skriver theme.json-värden via WordPress Global Styles API.
- **Navigation Menu management ability** — `create_menu`, `update_menu`, `add_menu_item`, `remove_menu_item`, `list_menus`. Stöder inbäddade menyer och tilldelning av temalokationer.
- **Options Management ability** — `get_option`, `set_option`, `delete_option`, `list_options`. Inkluderar en inbyggd säker svartlista som skyddar kritiska WordPress-alternativ från modifiering.
- **Installable Abilities Registry** — `list_available_abilities`, `install_ability`, `recommend_plugin`. Upptäck och aktivera ability-paket distribuerade som WordPress plugins.
- **Site Builder Orchestration v2** — `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`. Flera faser av webbplatsbyggplaner med pluginupptäckt, stegutdata-referenser, framstegsspårning och autonom felåterhämtning.
- **Restaurant website benchmark question** (`q-restaurant-website`) — end-to-end-test som täcker CPT-registrering, designsystem, navigering och pluginupptäckt.
- **AI provider connector plugins** tillagda i WordPress Playground blueprints för snabbare lokal utvecklingsuppsättning.

### Improved {#improved-1}

- README uppdaterad med dokumentation och uppsättningsinstruktioner för AI provider connector.

### Fixed {#fixed-1}

- 25 PHPUnit testfel på `main`-grenen lösta.
- GitHub releases URL-format i `blueprint.json` korrigerat.
- Task ID omnumrerat för att undvika krockar med gamla ID:n.

---

## 1.3.x {#13x}

_Äldre releasenoter finns i plugin-repositoryt._

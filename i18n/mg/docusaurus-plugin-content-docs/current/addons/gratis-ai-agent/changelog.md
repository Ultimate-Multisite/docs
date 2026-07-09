---
title: Tantaran'ny fanovana
sidebar_position: 5
_i18n_hash: 59cb5f1cda2a3e8a789dcd3d67db33db
---
# Tantaran'ny fanovana {#changelog}

## 1.9.0 — Navoaka tamin'ny 2026-04-28 {#190--released-on-2026-04-28}

### Vaovao {#new}

- **`create_contact_form` ability** — mamorona endrika fifandraisana amin'ny fampiasana ny plugin endrika mavitrika (Contact Form 7, WPForms, Fluent Forms, na Gravity Forms) ary mamerina shortcode vonona hampidirina amin'izay lahatsoratra na pejy rehetra.
- **`set_featured_image` ability** — manendry sary nasongadina ho an'ny lahatsoratra na pejy avy amin'ny ID fametahana Media Library efa misy na URL lavitra; manafatra ho azy ny sary rehefa omena URL.
- **`batch_create_posts` ability** — mamorona lahatsoratra maromaro ao anatin'ny antso ability tokana. Manohana ireo parameter mitovy amin'ny `create_post`, mitatitra fahombiazana/tsy fahombiazana isaky ny lahatsoratra, ary manana maody `stop_on_error` tsy voatery.
- **Parameter `page_template`** — nampiana amin'ny `create_post` sy `update_post`. Manendry rakitra modely pejy PHP (oh. `page-full-width.php`) amin'ny fotoana famoronana na fanavaozana. Ampitao tady foana amin'ny `update_post` mba hiverenana amin'ny default an'ny theme.
- **Ability pikantsary amin'ny lafiny client** — `capture_screenshot`, `compare_screenshots`, ary `review_page_design`. Maka pikantsary feno na viewport amin'ny pejy mivantana amin'ny alalan'ny navigateur headless amin'ny lafiny server, mampitaha pikantsary roa, ary mahazo famerenana famolavolana novokarin'ny AI momba ny firafitra, typography, loko, ary accessibility.
- **Agent dimy efa ao anatiny** — Content Writer, Site Builder, Design Studio, Plugin Manager, ary Support Assistant. Ny agent tsirairay dia manana fitaovana natokana, system prompt namboarina manokana, ary soso-kevitra fanombohana. Azo avadika amin'ny alalan'ny **Agent Picker** vaovao ao amin'ny lohatenin'ny chat. Jereo [Agent efa ao anatiny](../../user-guide/configuration/built-in-agents).
- **Feature flags** — tabilao **Settings → Feature Flags** vaovao misy toggles fanaraha-maso fidirana (ferana ho an'ny mpitantana, ferana ho an'ny admin tambajotra, fidiran'ny subscriber, atsaharo ho an'ny tsy mpikambana) sy safidy marika (afeno ny footer attribution, anaran'agent namboarina manokana, afeno ny agent picker, ampiasao ny kisary site ho chat avatar). Jereo [Settings Gratis AI Agent](../../user-guide/administration/gratis-ai-agent-settings).
- **Avereno ny session farany** — ny tontonana chat izao dia mamerina ho azy ny resaka vao haingana indrindra rehefa misokatra ny pejy sy rehefa sokafana ny widget, ka tsy very mihitsy ny context mandritra ny fitetezana pejy.
- **Rohy hetsika plugin** — rohy haingana mankany amin'ny Settings sy ny Abilities Registry izao dia miseho ao amin'ny efijery WordPress **Plugins → Installed Plugins** eo ambanin'ny famaritana plugin.

### Nohatsaraina {#improved}

- **Fanandramana indray loharano sary** — ny agent izao dia manandrana indray ireo loharano sary maimaim-poana rehetra voarindra alohan'ny hiverenana amin'ny sary novokarin'ny AI rehefa tsy mahomby ny fisintomana.
- **Tontonana mombamomba ny modely** — hita foana ao amin'ny lohatenin'ny chat; tsy afenina intsony aorian'ny hafatra voalohany.
- **Fihetsika auto-scroll** — miato ny auto-scroll rehefa miakatra mamaky ny mpampiasa; miseho ny bokotra mitsingevana **Scroll to bottom** ary manjavona ho azy rehefa tonga amin'ny hafatra farany ny mpampiasa.
- **UI Agent Picker** — novolavolaina indray ho overlay form-table misy kisary isaky ny agent, ka manamora ny famantarana sy fifindrana agent amin'ny topy maso.
- **JS chunks ampidirina amin'ny lazy-load** — ny fonosana JavaScript voalohany an'ny chat widget izao dia zaraina ho chunks ampidirina amin'ny lazy-load, mampihena ny haben'ny fonosana voalohany 75–90%.
- **Fanavaozana endrika chat widget** — kisary AI mitambatra no manolo ny avatar namboarina manokana teo aloha; mifanaraka amin'ny rafitra agent efa ao anatiny.
- **Fanovana URL ho rohy** — ireo URL miseho amin'ny hafatra rafitra sy bubble hafatra hadisoana izao dia aseho ho rohy azo kitihina.

### Namboarina {#fixed}

- **Fahitana ability** — nahitsy ny famaritana, ny fanondroana system prompt, ary ny fampifanarahana namespace mba hisehoan'ny ability rehetra ao amin'ny lisitry ny fitaovan'ny agent amin'ny fomba azo antoka.
- **Cache providers** — ny providers izao dia tehirizina cache manerana ny site amin'ny alalan'ny version counter, misoroka olana stale-provider amin'ny tambajotra multisite.
- **`ability_invalid_output`** — voavaha manerana ireo mpandrindra ability 12; samy mamerina valiny JSON voarafitra tsara avokoa.
- **Pipeline `pending_client_tool_calls`** — nampifandraisina hatramin'ny voalohany ka hatramin'ny farany mba hahavitan'ny antso fitaovana amin'ny lafiny client tsara sy hamerenany valiny amin'ny modely.
- **History drawer** — esorina amin'ny lisitra revert ireo fanovana tsy azo averina; ny rohy **Jereo ny tantara feno** izao dia mandeha tsara.
- **Rafitra fanovana/revert** — bug dimy samihafa namboarina ary natambatra ao ambanin'ny interface admin vaovao.
- **Toast Save Settings** — fampahafantarana snackbar izao dia miseho azo antoka aorian'ny fikitihana **Save Settings**.
- **Menu context Trash** — nampiana safidy **Delete Permanently** mba hahafahana mamafa tanteraka zavatra nefa tsy miala amin'ny fijery trash.
- **Edit & resend** — ny fikitihana ny kisary fanovana izao dia miditra amin'ny maody fanovana ho an'ilay hafatra nokitihina ihany, fa tsy ho an'ny hafatra rehetra ao amin'ny thread.
- **Haavon'ny firafitra chat** — ny tontonana chat dia mampifanaraka ny haavony rehefa miseho ambonin'ny pejy ny votoaty nampidirin'ny plugin (admin notices, banners), misoroka ny faritra fampidirana tsy ho voatosika hivoaka ny efijery.

---

## 1.4.0 — Navoaka tamin'ny 2026-04-09 {#140--released-on-2026-04-09}

### Vaovao {#new-1}

- **Baikon'ny benchmark WP-CLI** (`wp gratis-ai-agent benchmark`) — mampandeha ny andiana benchmark Agent Capabilities v1 avy amin'ny tsipika baiko ho an'ny fantsona CI sy ny fizotran'asa fanombanana maodely. Manohana fampandehanana isaky ny fanontaniana, fanoloana provider/model, ary vokatra JSON/CSV.
- **Andiana benchmark Agent Capabilities v1** — andiana prompt sarotra sy misy dingana maro voarafitra izay mitsapa ny velaran'ny fahaiza-manao manontolo, miaraka amin'ny fanomezana isa sy tatitra token/faharetana.
- **Fahaiza-manao Custom Post Type** — `register_post_type`, `list_post_types`, `delete_post_type`. Maharitra manerana ny restart ny fisoratana anarana amin'ny alalan'ny tabilao options.
- **Fahaiza-manao Custom Taxonomy** — `register_taxonomy`, `list_taxonomies`, `delete_taxonomy`. Manohana taxonomy misy ambaratonga sy fisaka miaraka amin'ny rewrite slugs tsy voatery.
- **Fahaiza-manao Design System** — `inject_custom_css`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `apply_theme_json_preset`. Ahitana preset voafantina dimy: `minimal-dark`, `warm-editorial`, `corporate-blue`, `vibrant-startup`, `classic-blog`.
- **Fahaiza-manao Global Styles** — `get_global_styles`, `set_global_styles`, `reset_global_styles`. Mamaky sy manoratra sanda theme.json amin'ny alalan'ny WordPress Global Styles API.
- **Fahaiza-mitantana Navigation Menu** — `create_menu`, `update_menu`, `add_menu_item`, `remove_menu_item`, `list_menus`. Manohana menu mifampiditra sy fanendrena toerana theme.
- **Fahaiza-mitantana Options** — `get_option`, `set_option`, `delete_option`, `list_options`. Ahitana blocklist fiarovana anatiny miaro ireo options WordPress manan-danja tsy hovaina.
- **Installable Abilities Registry** — `list_available_abilities`, `install_ability`, `recommend_plugin`. Mitadiava sy ampandehano ability packs zaraina ho plugins WordPress.
- **Site Builder Orchestration v2** — `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`. Drafitra fananganana site misy dingana maro miaraka amin'ny fikarohana plugin, references vokatra isaky ny dingana, fanarahana fandrosoana, ary fanarenana hadisoana mandeha ho azy.
- **Fanontaniana benchmark tranonkala restaurant** (`q-restaurant-website`) — fitsapana manomboka hatramin'ny farany mandrakotra fisoratana anarana CPT, design system, navigation, ary fikarohana plugin.
- **Plugins mpampifandray AI provider** nampiana amin'ny blueprints WordPress Playground ho an'ny fanamboarana fampandrosoana eo an-toerana haingana kokoa.

### Nohatsaraina {#improved-1}

- README nohavaozina miaraka amin'ny antontan-taratasy sy torolalana fanamboarana AI provider connector.

### Namboarina {#fixed-1}

- Tsy fahombiazana fitsapana PHPUnit 25 tao amin'ny sampana `main` voavaha.
- Endrika URL famoahana GitHub ao amin'ny `blueprint.json` nahitsy.
- Fanisana indray ny Task ID mba hisorohana fifandonana amin'ireo ID taloha.

---

## 1.3.x {#13x}

_Ny naoty famoahana teo aloha dia tazonina ao amin'ny repository an'ny plugin._

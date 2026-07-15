---
title: Tarihin canje-canje
sidebar_position: 5
_i18n_hash: 59cb5f1cda2a3e8a789dcd3d67db33db
---
# Kundin canje-canje

## 1.9.0 — An fitar a 2026-04-28 {#190--released-on-2026-04-28}

### Sabo {#new}

- **ikon `create_contact_form`** — yana ƙirƙirar fom na tuntuɓa ta amfani da plugin ɗin fom da ke aiki (Contact Form 7, WPForms, Fluent Forms, ko Gravity Forms) kuma yana dawo da shortcode da ya shirya a saka cikin kowane rubutu ko shafi.
- **ikon `set_featured_image`** — yana sanya hoton da aka fito da shi ga rubutu ko shafi daga ID na haɗin Media Library da ke akwai ko URL na nesa; yana shigo da hoton ta atomatik idan an bayar da URL.
- **ikon `batch_create_posts`** — yana ƙirƙirar rubuce-rubuce da yawa cikin kiran iko guda. Yana goyon bayan sigogi iri ɗaya da `create_post`, yana ba da rahoton nasara/ƙasa ga kowane rubutu, kuma yana da yanayin `stop_on_error` na zaɓi.
- **sigar `page_template`** — an ƙara zuwa `create_post` da `update_post`. Yana sanya fayil ɗin samfurin shafin PHP (misali `page-full-width.php`) a lokacin ƙirƙira ko sabuntawa. Miƙa kirtani mara komai zuwa `update_post` don komawa zuwa tsohon na theme.
- **Ikon ɗaukar hoton allo na ɓangaren client** — `capture_screenshot`, `compare_screenshots`, da `review_page_design`. Ɗauki cikakken hoto ko hoton viewport na shafukan kai tsaye ta server-side headless browser, kwatanta hotunan allo biyu, kuma sami nazarin ƙira da AI ta samar wanda ya haɗa da shimfiɗa, rubutun gani, launi, da samun dama.
- **Agents guda biyar da aka gina a ciki** — Content Writer, Site Builder, Design Studio, Plugin Manager, da Support Assistant. Kowane agent yana da keɓaɓɓen saitin kayan aiki, system prompt da aka tsara masa, da shawarwarin farawa. Ana iya sauyawa ta sabon **Agent Picker** a kan taken hira. Duba [Agents da aka gina a ciki](../../user-guide/configuration/built-in-agents).
- **Tutocin fasali** — sabon shafin **Settings → Feature Flags** tare da maɓallan sarrafa damar shiga (takaita ga administrators, takaita ga network admins, damar subscriber, kashewa ga waɗanda ba mambobi ba) da zaɓuɓɓukan alama (ɓoye danganta footer, sunan agent na musamman, ɓoye agent picker, amfani da alamar shafi a matsayin avatar na hira). Duba [Saitunan Gratis AI Agent](../../user-guide/administration/gratis-ai-agent-settings).
- **Mayar da zaman ƙarshe** — yanzu panel ɗin hira yana sake loda tattaunawar baya-bayan nan ta atomatik lokacin loda shafi da lokacin buɗe widget, don kada mahallin ya ɓace a tsakanin kewaya shafuka.
- **Hanyoyin aikin plugin** — hanyoyin sauri zuwa Settings da Abilities Registry yanzu suna bayyana a allon WordPress **Plugins → Installed Plugins** ƙarƙashin bayanin plugin.

### An inganta {#improved}

- **Sake gwada tushen hoto** — yanzu agent yana sake gwada duk tushen hotuna kyauta da aka saita kafin ya koma ga hoton da AI ta samar idan saukewa ta gaza.
- **Panel ɗin bayanin model** — koyaushe yana bayyane a kan taken hira; ba a ƙara ɓoye shi bayan saƙo na farko ba.
- **Halin auto-scroll** — auto-scroll yana dakatawa idan mai amfani ya gungura sama don karantawa; maɓallin iyo **Gungura zuwa ƙasa** yana bayyana kuma yana ɓacewa ta atomatik idan mai amfani ya kai sabon saƙo.
- **UI na Agent Picker** — an sake tsara shi a matsayin rufin form-table tare da gumaka na kowane agent, yana sauƙaƙa gane agents da sauyawa a duba guda.
- **JS chunks da ake loda a hankali** — yanzu kunshin JavaScript na farko na widget ɗin hira an raba shi zuwa chunks da ake loda a hankali, yana rage girman kunshin farko da 75–90%.
- **Sake fasalin widget ɗin hira** — gunkin AI ɗaya ya maye gurbin avatar na musamman na baya; ya yi daidai da tsarin agent da aka gina a ciki.
- **Mayar da URL zuwa link** — yanzu URLs da ke bayyana a saƙonnin tsarin da kumfar saƙon kuskure ana nuna su a matsayin links da ake iya dannawa.

### An gyara {#fixed}

- **Sauƙin gano iko** — an gyara bayanai, nassoshin system prompt, da daidaiton namespace don dukkan iko su bayyana cikin jerin kayan aikin agent cikin aminci.
- **Cache na providers** — yanzu ana cache providers a faɗin shafi ta hanyar ƙididdigar sigar, yana hana matsalolin providers da suka tsufa a kan cibiyoyin multisite.
- **`ability_invalid_output`** — an warware a duk handlers na iko 12; duk suna dawo da amsoshin JSON masu tsari daidai.
- **bututun `pending_client_tool_calls`** — an haɗa daga farko zuwa ƙarshe don kiran kayan aikin client-side su kammala daidai kuma su dawo da sakamako zuwa model.
- **Aljihun tarihi** — canje-canjen da ba za a iya mayarwa ba an cire su daga jerin mayarwa; hanyar **Duba cikakken tarihi** yanzu tana aiki daidai.
- **Tsarin canje-canje/mayarwa** — an gyara kurakurai daban-daban guda biyar kuma an haɗa su ƙarƙashin sabon admin interface.
- **Toast na Save Settings** — sanarwar snackbar yanzu tana bayyana cikin aminci bayan danna **Save Settings**.
- **Menu na mahallin shara** — an ƙara zaɓin **Share Dindindin** don a iya share abubuwa gaba ɗaya ba tare da barin kallon shara ba.
- **Gyara & sake aikawa** — danna gunkin gyara yanzu yana shiga yanayin gyara kawai ga saƙon da aka danna, ba duk saƙonnin cikin zaren ba.
- **Tsayin shimfiɗar hira** — panel ɗin hira yana daidaita tsayinsa idan abun ciki da plugin ya saka (sanarwar admin, banners) ya bayyana sama da shafin, yana hana yankin shigarwa tura zuwa wajen allo.

---

## 1.4.0 — An fitar a 2026-04-09 {#140--released-on-2026-04-09}

### Sabo {#new-1}

- **WP-CLI benchmark command** (`wp gratis-ai-agent benchmark`) — yana gudanar da tarin gwajin Agent Capabilities v1 daga layin umarni don hanyoyin CI da ayyukan tantance model. Yana goyon bayan gudanarwa ga kowace tambaya, sauya provider/model, da fitarwa ta JSON/CSV.
- **Tarin gwajin Agent Capabilities v1** — tsararren tarin prompts masu rikitarwa, masu matakai da yawa da ke gwada cikakken fannin iyawa, tare da bayar da maki da rahoton token/tsawon lokaci.
- **Iyawar Custom Post Type** — `register_post_type`, `list_post_types`, `delete_post_type`. Rijistirori suna dawwama bayan sake farawa ta hanyar teburin options.
- **Iyawar Custom Taxonomy** — `register_taxonomy`, `list_taxonomies`, `delete_taxonomy`. Yana goyon bayan taxonomies masu tsari na matakai da kuma masu faɗi tare da rewrite slugs na zaɓi.
- **Iyawar Design System** — `inject_custom_css`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `apply_theme_json_preset`. Ya ƙunshi presets biyar da aka tace: `minimal-dark`, `warm-editorial`, `corporate-blue`, `vibrant-startup`, `classic-blog`.
- **Iyawar Global Styles** — `get_global_styles`, `set_global_styles`, `reset_global_styles`. Yana karantawa da rubuta ƙimomin theme.json ta hanyar WordPress Global Styles API.
- **Iyawar sarrafa Navigation Menu** — `create_menu`, `update_menu`, `add_menu_item`, `remove_menu_item`, `list_menus`. Yana goyon bayan menus masu matakai da sanya theme location.
- **Iyawar Options Management** — `get_option`, `set_option`, `delete_option`, `list_options`. Ya ƙunshi ginannen jerin toshewa na tsaro da ke kare muhimman options na WordPress daga gyarawa.
- **Installable Abilities Registry** — `list_available_abilities`, `install_ability`, `recommend_plugin`. Gano da kunna fakitin iyawa da ake rarrabawa a matsayin WordPress plugins.
- **Site Builder Orchestration v2** — `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`. Tsare-tsaren gina site masu matakai da yawa tare da gano plugin, nassoshi na fitarwar mataki, bin diddigin ci gaba, da dawo da kai tsaye daga kuskure.
- **Tambayar gwajin gidan yanar gizon restaurant** (`q-restaurant-website`) — gwajin daga farko zuwa ƙarshe da ke rufe rajistar CPT, design system, navigation, da gano plugin.
- **AI provider connector plugins** an ƙara su zuwa blueprints na WordPress Playground don saitin ci gaban gida cikin sauri.

### An Inganta {#improved-1}

- An sabunta README da takardun AI provider connector da umarnin saiti.

### An Gyara {#fixed-1}

- An warware gazawar gwajin PHPUnit 25 a kan reshen `main`.
- An gyara tsarin URL na GitHub releases a cikin `blueprint.json`.
- Sake lambar Task ID don kauce wa karo da tsoffin IDs.

---

## 1.3.x {#13x}

_Ana kiyaye bayanan sakin da suka gabata a cikin ma’ajiyar plugin._

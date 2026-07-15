---
title: Рӯйхати тағйирот
sidebar_position: 5
_i18n_hash: 59cb5f1cda2a3e8a789dcd3d67db33db
---
# Сабти тағйирот

## 1.9.0 — Нашр шуд дар 2026-04-28 {#190--released-on-2026-04-28}

### Нав {#new}

- **қобилияти `create_contact_form`** — бо истифода аз plugin-и фаъоли форма (Contact Form 7, WPForms, Fluent Forms ё Gravity Forms) формаи тамос месозад ва shortcode-и омода барои ҷойгиркунӣ дар ҳар навишта ё саҳифаро бармегардонад.
- **қобилияти `set_featured_image`** — ба навишта ё саҳифа аз ID-и замимаи мавҷудаи Media Library ё URL-и дурдаст тасвири барҷаста таъин мекунад; ҳангоми пешниҳод шудани URL тасвирро ба таври худкор ворид мекунад.
- **қобилияти `batch_create_posts`** — дар як даъвати қобилият чандин навишта месозад. Ҳамон параметрҳои `create_post`-ро дастгирӣ мекунад, муваффақият/нокомии ҳар навиштаро гузориш медиҳад ва ҳолати ихтиёрии `stop_on_error` дорад.
- **параметри `page_template`** — ба `create_post` ва `update_post` илова шуд. Ҳангоми сохтан ё навсозӣ файли қолаби саҳифаи PHP-ро (масалан, `page-full-width.php`) таъин мекунад. Барои баргаштан ба пешфарзи theme ба `update_post` сатри холӣ гузаронед.
- **Қобилиятҳои screenshot-и тарафи client** — `capture_screenshot`, `compare_screenshots` ва `review_page_design`. Тавассути браузери headless-и тарафи сервер screenshot-ҳои пурра ё viewport-и саҳифаҳои зиндаро мегирад, ду screenshot-ро муқоиса мекунад ва баррасии тарҳи аз ҷониби AI тавлидшударо дар бораи ҷойгиршавӣ, типография, ранг ва дастрасӣ пешниҳод мекунад.
- **Панҷ agent-и дарунсохт** — Content Writer, Site Builder, Design Studio, Plugin Manager ва Support Assistant. Ҳар agent маҷмӯи махсуси абзорҳо, system prompt-и мутобиқшуда ва пешниҳодҳои оғозӣ дорад. Тавассути **Agent Picker**-и нав дар сарлавҳаи чат ивазшаванда аст. Нигаред ба [Agent-ҳои дарунсохт](../../user-guide/configuration/built-in-agents).
- **Feature flags** — ҷадвали нави **Settings → Feature Flags** бо гузаронакҳои назорати дастрасӣ (маҳдуд ба administrators, маҳдуд ба network admins, дастрасии subscriber, ғайрифаъол барои non-members) ва имконоти брендинг (пинҳон кардани ишора ба муаллиф дар footer, номи agent-и фармоишӣ, пинҳон кардани agent picker, истифодаи site icon ҳамчун chat avatar). Нигаред ба [Танзимоти Gratis AI Agent](../../user-guide/administration/gratis-ai-agent-settings).
- **Барқарор кардани ҷаласаи охирин** — панели чат акнун гуфтугӯи охиринро ҳангоми бор шудани саҳифа ва ҳангоми кушодани widget ба таври худкор дубора бор мекунад, бинобар ин контекст ҳеҷ гоҳ дар гузаришҳои байни саҳифаҳо гум намешавад.
- **Пайвандҳои амали plugin** — пайвандҳои зуд ба Settings ва Abilities Registry акнун дар экрани WordPress **Plugins → Installed Plugins** зери тавсифи plugin пайдо мешаванд.

### Беҳтар шуд {#improved}

- **Такрори манбаи тасвир** — agent акнун пеш аз гузаштан ба тасвири аз ҷониби AI тавлидшуда ҳангоми нокомии боргирӣ ҳамаи манбаъҳои ройгони танзимшудаи тасвирро дубора кӯшиш мекунад.
- **Панели иттилооти model** — ҳамеша дар сарлавҳаи чат намоён аст; дигар баъд аз паёми аввал пинҳон намешавад.
- **Рафтори auto-scroll** — auto-scroll вақте корбар барои хондан ба боло ҳаракат мекунад таваққуф мекунад; тугмаи шинокунандаи **Scroll to bottom** пайдо мешавад ва вақте корбар ба паёми охирин мерасад, ба таври худкор пинҳон мешавад.
- **UI-и Agent Picker** — ҳамчун қабати form-table бо нишонаҳои барои ҳар agent аз нав тарҳрезӣ шуд, ки шинохтан ва иваз кардани agent-ҳоро дар як нигоҳ осонтар мекунад.
- **Қисмҳои JS-и lazy-loaded** — bundle-и ибтидоии JavaScript-и chat widget акнун ба қисмҳои lazy-loaded тақсим шудааст, ки андозаи bundle-ҳои ибтидоиро 75–90% кам мекунад.
- **Азнавтарҳрезии chat widget** — нишонаи ягонаи AI ҷойгузини avatar-и фармоишии қаблӣ шуд; бо низоми agent-и дарунсохт мувофиқ аст.
- **Пайвандсозии URL** — URL-ҳое, ки дар паёмҳои system ва ҳубобҳои паёми хато пайдо мешаванд, акнун ҳамчун пайвандҳои кликшаванда намоиш дода мешаванд.

### Ислоҳ шуд {#fixed}

- **Кашфпазирии қобилиятҳо** — тавсифҳо, истинодҳои system prompt ва ҳамоҳангии namespace ислоҳ шуданд, то ҳамаи қобилиятҳо боэътимод дар рӯйхати абзорҳои agent пайдо шаванд.
- **Кэши providers** — providers акнун дар сатҳи site тавассути ҳисобкунаки версия кэш мешаванд, ки мушкилоти provider-и куҳнашударо дар шабакаҳои multisite пешгирӣ мекунад.
- **`ability_invalid_output`** — дар 12 коркардкунандаи қобилият ҳал шуд; ҳамаи онҳо посухҳои JSON-и дуруст сохторёфтаро бармегардонанд.
- **Қубури `pending_client_tool_calls`** — аз аввал то охир пайваст шуд, то даъватҳои абзори тарафи client дуруст анҷом ёбанд ва натиҷаҳоро ба model баргардонанд.
- **Обкаши history** — тағйироти ғайриқобили баргардондан аз рӯйхати баргардонӣ хориҷ карда мешаванд; пайванди **View full history** акнун дуруст кор мекунад.
- **Низоми changes/revert** — панҷ хатои ҷудогона ислоҳ ва зери интерфейси нави admin муттаҳид шуданд.
- **Toast-и Save Settings** — огоҳии snackbar акнун баъд аз клик кардани **Save Settings** боэътимод пайдо мешавад.
- **Менюи контекстии Trash** — имкони **Delete Permanently** илова шуд, то унсурҳо бе тарк кардани намуди trash ба таври доимӣ ҳазф карда шаванд.
- **Таҳрир ва фиристодани дубора** — клик кардани нишонаи таҳрир акнун танҳо барои паёми кликшуда ба ҳолати таҳрир медарояд, на барои ҳамаи паёмҳои ришта.
- **Баландии тарҳбандии чат** — панели чат баландии худро ҳангоми пайдо шудани муҳтавои аз ҷониби plugin воридшуда (огоҳиҳои admin, banner-ҳо) дар болои саҳифа мутобиқ мекунад ва пешгирӣ мекунад, ки минтақаи вуруд аз экран берун тела дода шавад.

---

## 1.4.0 — Нашр шуд дар 2026-04-09 {#140--released-on-2026-04-09}

### Нав {#new-1}

- **Фармони WP-CLI benchmark** (`wp gratis-ai-agent benchmark`) — маҷмӯаи benchmark-и Agent Capabilities v1-ро аз сатри фармон барои CI pipeline-ҳо ва ҷараёнҳои кори арзёбии model иҷро мекунад. Иҷро барои ҳар савол, ивазкунии provider/model ва баромади JSON/CSV-ро дастгирӣ мекунад.
- **Маҷмӯаи benchmark-и Agent Capabilities v1** — маҷмӯаи сохторёфтаи prompt-ҳои мураккаби чандқадамӣ, ки тамоми сатҳи қобилиятҳоро месанҷад, бо холдиҳӣ ва гузориши token/давомнокӣ.
- **Қобилиятҳои Custom Post Type** — `register_post_type`, `list_post_types`, `delete_post_type`. Сабтҳо тавассути ҷадвали options пас аз бозоғозӣ низ нигоҳ дошта мешаванд.
- **Қобилиятҳои Custom Taxonomy** — `register_taxonomy`, `list_taxonomies`, `delete_taxonomy`. Taxonomy-ҳои иерархӣ ва ҳамворро бо slug-ҳои ихтиёрии rewrite дастгирӣ мекунад.
- **Қобилиятҳои Design System** — `inject_custom_css`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `apply_theme_json_preset`. Панҷ preset-и интихобшударо дар бар мегирад: `minimal-dark`, `warm-editorial`, `corporate-blue`, `vibrant-startup`, `classic-blog`.
- **Қобилиятҳои Global Styles** — `get_global_styles`, `set_global_styles`, `reset_global_styles`. Қиматҳои theme.json-ро тавассути WordPress Global Styles API мехонад ва менависад.
- **Қобилияти идоракунии Navigation Menu** — `create_menu`, `update_menu`, `add_menu_item`, `remove_menu_item`, `list_menus`. Menu-ҳои nested ва таъйини ҷойгиршавии theme-ро дастгирӣ мекунад.
- **Қобилияти Options Management** — `get_option`, `set_option`, `delete_option`, `list_options`. Blocklist-и дарунсохти амниятиро дар бар мегирад, ки options-и муҳими WordPress-ро аз тағйир муҳофизат мекунад.
- **Installable Abilities Registry** — `list_available_abilities`, `install_ability`, `recommend_plugin`. Бастаҳои қобилиятро, ки ҳамчун plugin-ҳои WordPress паҳн мешаванд, кашф ва фаъол кунед.
- **Site Builder Orchestration v2** — `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`. Нақшаҳои чандмарҳилавии сохтани сайт бо кашфи plugin, истинодҳои баромади қадам, пайгирии пешрафт ва барқарорсозии худкори хатогӣ.
- **Саволи benchmark-и вебсайти ресторан** (`q-restaurant-website`) — санҷиши end-to-end, ки сабти CPT, design system, navigation ва кашфи plugin-ро фаро мегирад.
- **Plugin-ҳои пайвасткунандаи AI provider** ба blueprint-ҳои WordPress Playground барои танзими тезтари рушди маҳаллӣ илова шуданд.

### Такмил дода шуд {#improved-1}

- README бо ҳуҷҷатгузории пайвасткунандаи AI provider ва дастурҳои танзим навсозӣ шуд.

### Ислоҳ шуд {#fixed-1}

- 25 нокомии санҷиши PHPUnit дар шохаи `main` ҳал шуд.
- Формати URL-и GitHub releases дар `blueprint.json` ислоҳ шуд.
- Рақамгузории дубораи ID-и вазифаҳо барои пешгирӣ аз бархӯрд бо ID-ҳои кӯҳна.

---

## 1.3.x {#13x}

_Қайдҳои нашри қаблӣ дар анбори plugin нигоҳдорӣ мешаванд._

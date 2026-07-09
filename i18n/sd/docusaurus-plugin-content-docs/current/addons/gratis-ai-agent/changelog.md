---
title: تبديلين جو لاگ
sidebar_position: 5
_i18n_hash: 59cb5f1cda2a3e8a789dcd3d67db33db
---
# تبديلي لاگ

## 1.9.0 — 2026-04-28 تي جاري ڪيو ويو

### نئون

- **`create_contact_form` صلاحيت** — فعال فارم plugin (Contact Form 7، WPForms، Fluent Forms، يا Gravity Forms) استعمال ڪندي رابطو فارم ٺاهي ٿي ۽ ڪنهن به پوسٽ يا صفحي ۾ شامل ڪرڻ لاءِ تيار shortcode واپس ڪري ٿي.
- **`set_featured_image` صلاحيت** — موجوده Media Library attachment ID يا پري URL مان پوسٽ يا صفحي کي نمايان تصوير مقرر ڪري ٿي؛ جڏهن URL ڏنو وڃي ته تصوير پاڻمرادو درآمد ڪري ٿي.
- **`batch_create_posts` صلاحيت** — هڪ ئي صلاحيت ڪال ۾ ڪيترائي پوسٽون ٺاهي ٿي. `create_post` جهڙا ساڳيا پيرا ميٽر سپورٽ ڪري ٿي، هر پوسٽ جي ڪاميابي/ناڪامي رپورٽ ڪري ٿي، ۽ اختياري `stop_on_error` موڊ رکي ٿي.
- **`page_template` پيرا ميٽر** — `create_post` ۽ `update_post` ۾ شامل ڪيو ويو. ٺاهڻ يا اپڊيٽ وقت PHP صفحي جي template فائل (مثال طور `page-full-width.php`) مقرر ڪري ٿو. theme ڊفالٽ ڏانهن واپس وڃڻ لاءِ `update_post` کي خالي اسٽرنگ پاس ڪريو.
- **Client-side اسڪرين شاٽ صلاحيتون** — `capture_screenshot`، `compare_screenshots`، ۽ `review_page_design`. سرور-سائيڊ headless browser ذريعي live صفحن جا full يا viewport اسڪرين شاٽ وٺو، ٻن اسڪرين شاٽن جو فرق ڏسو، ۽ layout، typography، colour، ۽ accessibility تي مشتمل AI-ٺهيل ڊيزائن جائزو حاصل ڪريو.
- **پنج built-in agents** — Content Writer، Site Builder، Design Studio، Plugin Manager، ۽ Support Assistant. هر agent وٽ اوزارن جو مخصوص سيٽ، ترتيب ڏنل system prompt، ۽ شروع واريون تجويزون آهن. chat header ۾ نئين **Agent Picker** ذريعي مٽائي سگهجن ٿا. ڏسو [Built-in Agents](../../user-guide/configuration/built-in-agents).
- **Feature flags** — نئون **Settings → Feature Flags** ٽيب access-control toggles سان (administrators تائين محدود، network admins تائين محدود، subscriber access، non-members لاءِ بند) ۽ branding اختيارن سان (footer attribution لڪايو، custom agent name، agent picker لڪايو، site icon کي chat avatar طور استعمال ڪريو). ڏسو [Gratis AI Agent Settings](../../user-guide/administration/gratis-ai-agent-settings).
- **آخري سيشن بحال ڪريو** — chat panel هاڻي صفحي لوڊ ٿيڻ ۽ widget کولڻ تي سڀ کان تازو مکالمو پاڻمرادو ٻيهر لوڊ ڪري ٿو، تنهنڪري صفحن جي نيويگيشن دوران context ڪڏهن به ضايع نٿو ٿئي.
- **Plugin action links** — Settings ۽ Abilities Registry ڏانهن تڪڙا لنڪ هاڻي WordPress **Plugins → Installed Plugins** اسڪرين تي plugin وضاحت هيٺ ظاهر ٿين ٿا.

### بهتر ڪيو ويو

- **تصوير source retry** — agent هاڻي download ناڪامي تي AI-ٺهيل تصوير ڏانهن واپس وڃڻ کان اڳ سڀ configured مفت تصوير sources ٻيهر آزمائي ٿو.
- **Model info panel** — chat header ۾ هميشه نظر اچي ٿو؛ هاڻي پهرين message کان پوءِ لڪل نٿو رهي.
- **Auto-scroll behaviour** — جڏهن صارف پڙهڻ لاءِ مٿي scroll ڪري ٿو ته auto-scroll رڪجي وڃي ٿو؛ هڪ floating **Scroll to bottom** بٽڻ ظاهر ٿئي ٿو ۽ جڏهن صارف تازين message تي پهچي ٿو ته پاڻمرادو غائب ٿي وڃي ٿو.
- **Agent Picker UI** — per-agent icons سان form-table overlay طور ٻيهر ڊيزائن ڪيو ويو، جنهن سان agents کي هڪ نظر ۾ سڃاڻڻ ۽ مٽائڻ آسان ٿيو.
- **Lazy-loaded JS chunks** — chat widget جو شروعاتي JavaScript bundle هاڻي lazy-loaded chunks ۾ ورهايو ويو آهي، جنهن سان شروعاتي bundle سائيز 75–90% گهٽجي ويا آهن.
- **Chat widget redesign** — unified AI icon اڳوڻي custom avatar جي جاءِ ورتي؛ built-in agent system سان هم آهنگ.
- **URL linkification** — system messages ۽ error message bubbles ۾ ظاهر ٿيندڙ URLs هاڻي clickable links طور render ٿين ٿا.

### درست ڪيو ويو

- **Ability discoverability** — وضاحتون، system prompt references، ۽ namespace alignment درست ڪيا ويا ته جيئن سڀ صلاحيتون agent جي tool list ۾ ڀروسي سان ظاهر ٿين.
- **Providers cache** — providers هاڻي version counter ذريعي site-wide cache ڪيا وڃن ٿا، جنهن سان multisite networks تي stale-provider مسئلا روڪجن ٿا.
- **`ability_invalid_output`** — 12 صلاحيت handlers ۾ حل ڪيو ويو؛ سڀ صحيح structured JSON responses واپس ڪن ٿا.
- **`pending_client_tool_calls` pipeline** — end-to-end ڳنڍيو ويو ته جيئن client-side tool calls صحيح طرح مڪمل ٿين ۽ نتيجا model ڏانهن واپس ڪن.
- **History drawer** — non-revertable تبديليون revert list مان خارج ڪيون ويون آهن؛ **View full history** لنڪ هاڻي صحيح ڪم ڪري ٿو.
- **Changes/revert system** — پنج الڳ bugs درست ڪيا ويا ۽ نئين admin interface هيٺ متحد ڪيا ويا.
- **Save Settings toast** — **Save Settings** تي ڪلڪ ڪرڻ کان پوءِ snackbar notification هاڻي ڀروسي سان ظاهر ٿئي ٿو.
- **Trash context menu** — **Delete Permanently** اختيار شامل ڪيو ويو ته جيئن شيون trash view ڇڏڻ کان سواءِ hard-delete ڪري سگهجن.
- **Edit & resend** — edit icon تي ڪلڪ ڪرڻ هاڻي صرف ڪلڪ ڪيل message لاءِ edit mode ۾ داخل ٿئي ٿو، thread جي سڀني messages لاءِ نه.
- **Chat layout height** — chat panel پنهنجي اوچائي کي ترتيب ڏئي ٿو جڏهن plugin-injected content (admin notices، banners) صفحي مٿان ظاهر ٿئي، جنهن سان input area کي screen کان ٻاهر ڌڪجڻ کان بچايو وڃي ٿو.

---

## 1.4.0 — 2026-04-09 تي جاري ڪيو ويو

### نئون

- **WP-CLI benchmark command** (`wp gratis-ai-agent benchmark`) — CI pipelines ۽ model evaluation workflows لاءِ command line مان Agent Capabilities v1 benchmark suite هلائي ٿو. per-question هلائڻ، provider/model overrides، ۽ JSON/CSV output کي سپورٽ ڪري ٿو.
- **Agent Capabilities v1 benchmark suite** — پيچيده، ڪيترن مرحلن وارن prompts جو هڪ منظم سيٽ، جيڪو مڪمل صلاحيت واري سطح کي آزمائي ٿو، scoring ۽ token/duration reporting سان.
- **Custom Post Type صلاحيتون** — `register_post_type`, `list_post_types`, `delete_post_type`. Registrations options table ذريعي restarts کان پوءِ به برقرار رهن ٿيون.
- **Custom Taxonomy صلاحيتون** — `register_taxonomy`, `list_taxonomies`, `delete_taxonomy`. optional rewrite slugs سان hierarchical ۽ flat taxonomies کي سپورٽ ڪري ٿو.
- **Design System صلاحيتون** — `inject_custom_css`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `apply_theme_json_preset`. پنج چونڊيل presets شامل آهن: `minimal-dark`, `warm-editorial`, `corporate-blue`, `vibrant-startup`, `classic-blog`.
- **Global Styles صلاحيتون** — `get_global_styles`, `set_global_styles`, `reset_global_styles`. WordPress Global Styles API ذريعي theme.json قدر پڙهي ۽ لکي ٿو.
- **Navigation Menu انتظامي صلاحيت** — `create_menu`, `update_menu`, `add_menu_item`, `remove_menu_item`, `list_menus`. nested menus ۽ theme location assignment کي سپورٽ ڪري ٿو.
- **Options Management صلاحيت** — `get_option`, `set_option`, `delete_option`, `list_options`. اهم WordPress options کي تبديلي کان بچائيندڙ built-in safety blocklist شامل آهي.
- **Installable Abilities Registry** — `list_available_abilities`, `install_ability`, `recommend_plugin`. WordPress plugins طور ورهايل ability packs ڳوليو ۽ activate ڪريو.
- **Site Builder Orchestration v2** — `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`. plugin discovery، step output references، progress tracking، ۽ autonomous error recovery سان گھڻ-مرحلي site build plans.
- **Restaurant website benchmark question** (`q-restaurant-website`) — CPT registration، design system، navigation، ۽ plugin discovery کي ڍڪيندڙ end-to-end test.
- **AI provider connector plugins** WordPress Playground blueprints ۾ تيز local development setup لاءِ شامل ڪيا ويا.

### بهتر ڪيل

- README کي AI provider connector documentation ۽ setup instructions سان updated ڪيو ويو.

### درست ڪيل

- `main` branch تي 25 PHPUnit test failures حل ڪيا ويا.
- `blueprint.json` ۾ GitHub releases URL format درست ڪيو ويو.
- پراڻن IDs سان collisions کان بچڻ لاءِ Task ID renumbering.

---

## 1.3.x

_اڳين release notes plugin repository ۾ برقرار رکيا ويا آهن._

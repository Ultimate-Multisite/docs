---
title: تبديلين جو لاگ
sidebar_position: 5
_i18n_hash: 59cb5f1cda2a3e8a789dcd3d67db33db
---
# تبديلي لاگ {#changelog}

## 1.9.0 — 2026-04-28 تي جاري ڪيو ويو {#190--released-on-2026-04-28}

### نئون {#new}

- **`create_contact_form` صلاحيت** — فعال فارم plugin (Contact Form 7، WPForms، Fluent Forms، يا Gravity Forms) استعمال ڪندي رابطو فارم ٺاهي ٿي ۽ ڪنهن به پوسٽ يا صفحي ۾ شامل ڪرڻ لاءِ تيار shortcode واپس ڪري ٿي.
- **`set_featured_image` صلاحيت** — موجود Media Library attachment ID يا پري واري URL مان ڪنهن پوسٽ يا صفحي لاءِ featured image مقرر ڪري ٿي؛ جڏهن URL ڏنو وڃي ته تصوير پاڻمرادو درآمد ڪري ٿي.
- **`batch_create_posts` صلاحيت** — هڪ ئي صلاحيت ڪال ۾ ڪيترائي پوسٽون ٺاهي ٿي. `create_post` جهڙا ساڳيا پيرا ميٽر سپورٽ ڪري ٿي، هر پوسٽ لاءِ ڪاميابي/ناڪامي رپورٽ ڪري ٿي، ۽ اختياري `stop_on_error` موڊ رکي ٿي.
- **`page_template` پيرا ميٽر** — `create_post` ۽ `update_post` ۾ شامل ڪيو ويو. ٺاهڻ يا اپڊيٽ ڪرڻ وقت PHP صفحي جي ٽيمپليٽ فائل (مثال طور `page-full-width.php`) مقرر ڪري ٿو. `update_post` کي خالي string پاس ڪريو ته theme جي ڊفالٽ ڏانهن واپس وڃي.
- **Client-side screenshot صلاحيتون** — `capture_screenshot`، `compare_screenshots`، ۽ `review_page_design`. سرور-پاسي headless browser ذريعي live صفحن جا مڪمل يا viewport screenshots وٺو، ٻن screenshots جو فرق ڏسو، ۽ layout، typography، colour، ۽ accessibility تي مشتمل AI-generated ڊيزائن جائزو حاصل ڪريو.
- **پنج built-in agents** — Content Writer، Site Builder، Design Studio، Plugin Manager، ۽ Support Assistant. هر agent وٽ اوزارن جو مخصوص سيٽ، ترتيب ڏنل system prompt، ۽ شروعاتي صلاحون آهن. chat header ۾ نئين **Agent Picker** ذريعي مٽائي سگهجن ٿا. ڏسو [Built-in Agents](../../user-guide/configuration/built-in-agents).
- **Feature flags** — نئون **Settings → Feature Flags** tab جنهن ۾ access-control toggles (administrators تائين محدود ڪريو، network admins تائين محدود ڪريو، subscriber access، non-members لاءِ بند ڪريو) ۽ branding آپشن (footer attribution لڪايو، custom agent name، agent picker لڪايو، site icon کي chat avatar طور استعمال ڪريو) آهن. ڏسو [Gratis AI Agent Settings](../../user-guide/administration/gratis-ai-agent-settings).
- **آخري session بحال ڪريو** — chat panel هاڻي صفحو لوڊ ٿيڻ ۽ widget کولڻ تي سڀ کان تازو conversation پاڻمرادو ٻيهر لوڊ ڪري ٿو، تنهنڪري صفحن جي navigation دوران context ڪڏهن به نه وڃائجي.
- **Plugin action links** — Settings ۽ Abilities Registry ڏانهن تڪڙا links هاڻي WordPress **Plugins → Installed Plugins** اسڪرين تي plugin description هيٺ ظاهر ٿين ٿا.

### بهتر ڪيو ويو {#improved}

- **تصوير source retry** — agent هاڻي download failure تي AI-generated تصوير ڏانهن fallback ڪرڻ کان اڳ سڀ configured free image sources ٻيهر ڪوشش ڪري ٿو.
- **Model info panel** — chat header ۾ هميشه نظر اچي ٿو؛ پهرئين message کان پوءِ هاڻي لڪل نٿو رهي.
- **Auto-scroll behavior** — جڏهن user پڙهڻ لاءِ مٿي scroll ڪري ٿو ته auto-scroll رڪجي وڃي ٿو؛ هڪ floating **Scroll to bottom** button ظاهر ٿئي ٿو ۽ user جي latest message تائين پهچڻ تي پاڻمرادو ختم ٿي وڃي ٿو.
- **Agent Picker UI** — هر agent لاءِ icons سان form-table overlay طور ٻيهر ڊزائين ڪيو ويو، جنهن سان agents کي هڪ نظر ۾ سڃاڻڻ ۽ مٽائڻ آسان ٿئي ٿو.
- **Lazy-loaded JS chunks** — chat widget جو شروعاتي JavaScript bundle هاڻي lazy-loaded chunks ۾ ورهايو ويو آهي، جنهن سان شروعاتي bundle sizes 75–90% گهٽجي وڃن ٿا.
- **Chat widget redesign** — گڏيل AI icon اڳوڻي custom avatar کي بدلائي ٿو؛ built-in agent system سان هم آهنگ آهي.
- **URL linkification** — system messages ۽ error message bubbles ۾ ظاهر ٿيندڙ URLs هاڻي clickable links طور render ٿين ٿا.

### درست ڪيو ويو {#fixed}

- **صلاحيت جي discoverability** — descriptions، system prompt references، ۽ namespace alignment درست ڪيا ويا ته جيئن سڀ صلاحيتون agent جي tool list ۾ ڀروسي سان ظاهر ٿين.
- **Providers cache** — providers هاڻي version counter ذريعي site-wide cache ٿين ٿا، جنهن سان multisite networks تي stale-provider مسئلا روڪجن ٿا.
- **`ability_invalid_output`** — 12 صلاحيت handlers ۾ حل ڪيو ويو؛ سڀ صحيح structured JSON responses واپس ڪن ٿا.
- **`pending_client_tool_calls` pipeline** — end-to-end ڳنڍيو ويو ته جيئن client-side tool calls صحيح نموني مڪمل ٿين ۽ نتيجا model ڏانهن واپس وڃن.
- **History drawer** — non-revertable تبديلين کي revert list مان خارج ڪيو ويو؛ **View full history** link هاڻي صحيح ڪم ڪري ٿو.
- **Changes/revert system** — پنج الڳ bugs درست ڪيا ويا ۽ نئين admin interface هيٺ متحد ڪيا ويا.
- **Save Settings toast** — **Save Settings** تي click ڪرڻ کان پوءِ snackbar notification هاڻي ڀروسي سان ظاهر ٿئي ٿو.
- **Trash context menu** — **Delete Permanently** آپشن شامل ڪيو ويو ته جيئن شيون trash view ڇڏڻ کان سواءِ hard-delete ڪري سگهجن.
- **Edit & resend** — edit icon تي click ڪرڻ سان هاڻي صرف clicked message لاءِ edit mode کلي ٿو، thread جي سڀني messages لاءِ نه.
- **Chat layout height** — جڏهن plugin-injected content (admin notices، banners) صفحي جي مٿان ظاهر ٿئي ٿو ته chat panel پنهنجي height کي ترتيب ڏئي ٿو، جنهن سان input area کي screen کان ٻاهر ڌڪجڻ کان بچايو وڃي ٿو.

---

## 1.4.0 — 2026-04-09 تي جاري ڪيو ويو {#140--released-on-2026-04-09}

### نئون {#new-1}

- **WP-CLI benchmark command** (`wp gratis-ai-agent benchmark`) — CI pipelines ۽ model evaluation workflows لاءِ command line مان Agent Capabilities v1 benchmark suite هلائي ٿو. Per-question runs، provider/model overrides، ۽ JSON/CSV output کي سپورٽ ڪري ٿو.
- **Agent Capabilities v1 benchmark suite** — پيچيده، ڪيترن مرحلن وارن prompts جو هڪ منظم سيٽ، جيڪو مڪمل قابليت واري مٿاڇري کي آزمائي ٿو، scoring ۽ token/duration reporting سان.
- **Custom Post Type صلاحيتون** — `register_post_type`, `list_post_types`, `delete_post_type`. Registrations، options table ذريعي restarts کان پوءِ به برقرار رهن ٿيون.
- **Custom Taxonomy صلاحيتون** — `register_taxonomy`, `list_taxonomies`, `delete_taxonomy`. Optional rewrite slugs سان hierarchical ۽ flat taxonomies کي سپورٽ ڪري ٿو.
- **Design System صلاحيتون** — `inject_custom_css`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `apply_theme_json_preset`. پنج چونڊيل presets شامل آهن: `minimal-dark`, `warm-editorial`, `corporate-blue`, `vibrant-startup`, `classic-blog`.
- **Global Styles صلاحيتون** — `get_global_styles`, `set_global_styles`, `reset_global_styles`. WordPress Global Styles API ذريعي theme.json قدر پڙهي ۽ لکي ٿو.
- **Navigation Menu انتظامي صلاحيت** — `create_menu`, `update_menu`, `add_menu_item`, `remove_menu_item`, `list_menus`. Nested menus ۽ theme location assignment کي سپورٽ ڪري ٿو.
- **Options Management صلاحيت** — `get_option`, `set_option`, `delete_option`, `list_options`. نازڪ WordPress options کي تبديلي کان بچائيندڙ built-in safety blocklist شامل آهي.
- **Installable Abilities Registry** — `list_available_abilities`, `install_ability`, `recommend_plugin`. WordPress plugins طور ورهايل ability packs ڳوليو ۽ فعال ڪريو.
- **Site Builder Orchestration v2** — `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`. Plugin discovery، step output references، progress tracking، ۽ autonomous error recovery سان گهڻن مرحلن وارا سائيٽ build plans.
- **Restaurant website benchmark question** (`q-restaurant-website`) — CPT registration، design system، navigation، ۽ plugin discovery کي ڍڪيندڙ end-to-end test.
- **AI provider connector plugins** تيز مقامي development setup لاءِ WordPress Playground blueprints ۾ شامل ڪيا ويا.

### بهتر ڪيو ويو {#improved-1}

- README کي AI provider connector documentation ۽ setup instructions سان update ڪيو ويو.

### درست ڪيو ويو {#fixed-1}

- `main` branch تي 25 PHPUnit test failures حل ڪيا ويا.
- `blueprint.json` ۾ GitHub releases URL format درست ڪيو ويو.
- پراڻن IDs سان collisions کان بچڻ لاءِ Task ID renumbering.

---

## 1.3.x {#13x}

_اڳين release notes plugin repository ۾ برقرار رکيا ويا آهن._

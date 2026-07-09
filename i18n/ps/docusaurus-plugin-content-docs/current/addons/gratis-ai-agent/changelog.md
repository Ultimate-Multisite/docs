---
title: د بدلونونو ثبت
sidebar_position: 5
_i18n_hash: 59cb5f1cda2a3e8a789dcd3d67db33db
---
# بدلون‌لیک

## 1.9.0 — په 2026-04-28 خپور شو

### نوي

- **`create_contact_form` وړتیا** — د فعال فورم plugin (Contact Form 7، WPForms، Fluent Forms، یا Gravity Forms) په کارولو سره د اړیکې فورم جوړوي او یو shortcode بېرته ورکوي چې په هرې لیکنې یا پاڼه کې د ځای پر ځای کولو لپاره چمتو وي.
- **`set_featured_image` وړتیا** — یوې لیکنې یا پاڼې ته د موجود Media Library ضمیمې ID یا لېرې URL څخه ځانګړی انځور ټاکي؛ کله چې URL ورکړل شي، انځور په اوتومات ډول واردوي.
- **`batch_create_posts` وړتیا** — په یوه واحد وړتیا غوښتنه کې څو لیکنې جوړوي. د `create_post` په څېر هماغه پارامترونه ملاتړ کوي، د هرې لیکنې بریا/ناکامي راپوروي، او اختیاري `stop_on_error` حالت لري.
- **`page_template` پارامتر** — `create_post` او `update_post` ته اضافه شو. د جوړولو یا تازه کولو پر وخت د PHP پاڼې کينډۍ فایل (لکه `page-full-width.php`) ټاکي. `update_post` ته تشه رشته ورکړئ څو د theme اصلي حالت ته وګرځي.
- **د client-اړخ screenshot وړتیاوې** — `capture_screenshot`، `compare_screenshots`، او `review_page_design`. د server-اړخ headless browser له لارې د ژوندیو پاڼو بشپړ یا viewport screenshots اخلي، دوه screenshots پرتله کوي، او د layout، typography، رنګ، او لاسرسي په اړه د AI له‌خوا جوړ شوی ډیزاین ارزونه ترلاسه کوي.
- **پنځه دننه جوړ agents** — د منځپانګې لیکوال، د site جوړونکی، د ډیزاین سټوډیو، د plugin مدیر، او د ملاتړ مرستیال. هر agent د وسایلو ځانګړې ټولګه، برابر شوی system prompt، او د پیل وړاندیزونه لري. د chat سرلیک کې د نوي **Agent ټاکونکي** له لارې بدلېدلی شي. [دننه جوړ Agents](../../user-guide/configuration/built-in-agents) وګورئ.
- **د ځانګړتیا نښې** — نوی **امستنې → د ځانګړتیا نښې** ټب د لاسرسي-کنټرول بدلونکو سره (یوازې administrators ته محدودول، network admins ته محدودول، د subscriber لاسرسی، د غیر غړو لپاره غیر فعالول) او د نښې جوړونې غوراوي (د footer نسبت پټول، دودیز agent نوم، agent ټاکونکی پټول، د site نښه د chat avatar په توګه کارول). [Gratis AI Agent امستنې](../../user-guide/administration/gratis-ai-agent-settings) وګورئ.
- **وروستۍ ناسته بېرته راوستل** — د chat panel اوس د پاڼې د بارېدو او widget د پرانیستل کېدو پر مهال تر ټولو وروستۍ خبرې اترې په اوتومات ډول بیا باروي، نو context هېڅکله د پاڼو ترمنځ په تګ راتګ کې نه ورکېږي.
- **د plugin کړن‌لینکونه** — Settings او Abilities Registry ته چټک لینکونه اوس د WordPress **Plugins → Installed Plugins** پرده کې د plugin د توضیح لاندې ښکاري.

### ښه شوي

- **د انځور سرچینې بیا هڅه** — agent اوس د ډاونلوډ د ناکامۍ پر مهال AI-جوړ شوي انځور ته له تګ مخکې ټولې ټاکل شوې وړیا انځور سرچینې بیا هڅوي.
- **د model معلوماتو panel** — تل د chat سرلیک کې ښکاري؛ نور د لومړي پیغام وروسته نه پټېږي.
- **د اوتومات سکرول چلند** — اوتومات سکرول هغه وخت درېږي چې کاروونکی د لوستلو لپاره پورته سکرول وکړي؛ یو لامبو وهونکی **تر پای پورې سکرول** تڼۍ ښکاري او کله چې کاروونکی وروستي پیغام ته ورسېږي، په اوتومات ډول ورکېږي.
- **Agent Picker UI** — د هر agent لپاره د نښو سره د form-table overlay په توګه بیا ډیزاین شو، چې په یوه نظر کې د agents پېژندل او بدلول اسانه کوي.
- **په ځنډ بارېدونکي JS ټوټې** — د chat widget لومړنی JavaScript bundle اوس په ځنډ بارېدونکو ټوټو وېشل شوی، چې د لومړنیو bundle اندازې 75–90% کموي.
- **د chat widget بیا ډیزاین** — یوشان AI نښه د پخواني دودیز avatar ځای نیسي؛ له دننه جوړ agent سیستم سره یو شان دی.
- **د URL لینک کول** — هغه URLs چې په system پیغامونو او error پیغام bubbles کې ښکاري اوس د کلیک کېدونکو لینکونو په توګه ښودل کېږي.

### سم شوي

- **د وړتیا موندل‌کېدنه** — توضیحات، system prompt مراجع، او namespace همغږي سمه شوه څو ټولې وړتیاوې په باوري ډول د agent د وسیلو په لېست کې ښکاره شي.
- **د providers cache** — providers اوس د version counter له لارې په site-کچه cache کېږي، چې په multisite شبکو کې د زاړه-provider ستونزې مخنیوی کوي.
- **`ability_invalid_output`** — په 12 وړتیا handlers کې حل شو؛ ټول په سمه توګه جوړ شوي JSON ځوابونه بېرته ورکوي.
- **`pending_client_tool_calls` pipeline** — له پیل تر پایه ونښلول شو څو د client-اړخ tool calls په سمه توګه بشپړ شي او پایلې model ته بېرته ورکړي.
- **د تاریخ drawer** — نه-راګرځېدونکي بدلونونه د راګرځولو له لېست څخه اېستل شوي؛ د **بشپړ تاریخ وګورئ** لینک اوس په سمه توګه کار کوي.
- **د بدلونونو/راګرځولو سیستم** — پنځه جلا تېروتنې سمې شوې او د نوي admin interface لاندې یوځای شوې.
- **Save Settings toast** — snackbar خبرتیا اوس د **Save Settings** تر کلیک وروسته په باوري ډول ښکاري.
- **د trash context menu** — د **تل لپاره ړنګول** غوراوی اضافه شو څو توکي د trash لید پرېښودو پرته سخت ړنګ شي.
- **سمول او بیا لېږل** — د سمون نښې کلیک کول اوس یوازې د کلیک شوي پیغام لپاره د سمون حالت ته ننوځي، نه د thread ټولو پیغامونو ته.
- **د chat layout لوړوالی** — د chat panel خپل لوړوالی هغه وخت عیاروي چې plugin-داخل شوې منځپانګه (admin خبرتیاوې، banners) د پاڼې پورته ښکاره شي، چې د input ساحه له پردې څخه د باندې ټېل وهل کېدو مخه نیسي.

---

## 1.4.0 — په 2026-04-09 خپور شو

### نوي

- **WP-CLI benchmark command** (`wp gratis-ai-agent benchmark`) — د CI پایپ‌لاینونو او د ماډل ارزونې کاري بهیرونو لپاره د کمانډ کرښې څخه د Agent Capabilities v1 benchmark suite چلوي. د هرې پوښتنې جلا چلونې، provider/model بدلونونو، او JSON/CSV وتنې ملاتړ کوي.
- **Agent Capabilities v1 benchmark suite** — د پېچلو، څو-پړاویزو prompts یو جوړښتي ټولګه چې د وړتیا بشپړه ساحه ازموي، د نمره ورکولو او token/مودې راپور ورکولو سره.
- **د Custom Post Type وړتیاوې** — `register_post_type`, `list_post_types`, `delete_post_type`. نوم‌لیکنې د options جدول له لارې د بیاپیلونو ترمنځ پاتې کېږي.
- **د Custom Taxonomy وړتیاوې** — `register_taxonomy`, `list_taxonomies`, `delete_taxonomy`. د اختیاري rewrite slugs سره د سلسله‌مراتبي او هوارو taxonomies ملاتړ کوي.
- **د Design System وړتیاوې** — `inject_custom_css`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `apply_theme_json_preset`. پنځه ټاکل شوي presets پکې شامل دي: `minimal-dark`, `warm-editorial`, `corporate-blue`, `vibrant-startup`, `classic-blog`.
- **د Global Styles وړتیاوې** — `get_global_styles`, `set_global_styles`, `reset_global_styles`. د WordPress Global Styles API له لارې د theme.json ارزښتونه لولي او لیکي.
- **د Navigation Menu مدیریت وړتیا** — `create_menu`, `update_menu`, `add_menu_item`, `remove_menu_item`, `list_menus`. د ځالې‌لرونکو مینوګانو او theme location ټاکنې ملاتړ کوي.
- **د Options Management وړتیا** — `get_option`, `set_option`, `delete_option`, `list_options`. یو دننه جوړ شوی خوندیتوب blocklist لري چې مهم WordPress options له بدلون څخه ساتي.
- **Installable Abilities Registry** — `list_available_abilities`, `install_ability`, `recommend_plugin`. د WordPress plugins په توګه وېشل شوي ability packs ومومئ او فعال یې کړئ.
- **Site Builder Orchestration v2** — `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`. څو-پړاویزه د سایټ جوړونې plans له plugin موندنې، د ګام د وتنې مراجعو، پرمختګ څارنې، او خپلواکې تېروتنې رغونې سره.
- **د رستورانت وېب‌سایټ benchmark پوښتنه** (`q-restaurant-website`) — له پیل تر پایه ازموینه چې CPT نوم‌لیکنه، design system، navigation، او plugin موندنه رانغاړي.
- **AI provider connector plugins** د چټک محلي پراختیا setup لپاره د WordPress Playground blueprints ته زیات شوي.

### ښه شوی

- README د AI provider connector مستنداتو او setup لارښوونو سره تازه شوی.

### سم شوی

- په `main` څانګه کې 25 PHPUnit test ناکامۍ حل شوې.
- په `blueprint.json` کې د GitHub releases URL بڼه سمه شوه.
- د Task ID بیاشمېرنه تر څو له زړو IDs سره ټکرونه مخنیوی وشي.

---

## 1.3.x

_د پخوانیو خپرونو یادښتونه د plugin په repository کې ساتل کېږي._

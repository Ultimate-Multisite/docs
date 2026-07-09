---
title: වෙනස්කම් සටහන
sidebar_position: 5
_i18n_hash: 59cb5f1cda2a3e8a789dcd3d67db33db
---
# වෙනස්කම් සටහන

## 1.9.0 — 2026-04-28 දින නිකුත් විය

### අලුත්

- **`create_contact_form` හැකියාව** — සක්‍රීය පෝරම plugin (Contact Form 7, WPForms, Fluent Forms, හෝ Gravity Forms) භාවිතයෙන් සම්බන්ධතා පෝරමයක් සාදා, ඕනෑම පළ කිරීමකට හෝ පිටුවකට ඇතුළත් කිරීමට සූදානම් shortcode එකක් ලබා දෙයි.
- **`set_featured_image` හැකියාව** — පවතින Media Library ඇමිණුම් ID එකකින් හෝ දුරස්ථ URL එකකින් පළ කිරීමකට හෝ පිටුවකට විශේෂාංග රූපයක් පවරයි; URL එකක් ලබා දුන් විට රූපය ස්වයංක්‍රීයව ආනයනය කරයි.
- **`batch_create_posts` හැකියාව** — එක් හැකියා ඇමතුමකින් පළ කිරීම් කිහිපයක් සාදයි. `create_post` හි ඇති පරාමිතීන්ම සහාය දක්වයි, එක් එක් පළ කිරීමේ සාර්ථක/අසාර්ථක තත්ත්වය වාර්තා කරයි, සහ විකල්ප `stop_on_error` ප්‍රකාරයක් ඇත.
- **`page_template` පරාමිතිය** — `create_post` සහ `update_post` වෙත එක් කරන ලදී. සාදන හෝ යාවත්කාලීන කරන අවස්ථාවේ PHP පිටු template ගොනුවක් (උදා. `page-full-width.php`) පවරයි. theme පෙරනිමියට නැවත යාමට `update_post` වෙත හිස් string එකක් ලබා දෙන්න.
- **Client-side තිරරූ හැකියාවන්** — `capture_screenshot`, `compare_screenshots`, සහ `review_page_design`. server-side headless browser එකක් හරහා සජීවී පිටුවල සම්පූර්ණ හෝ viewport තිරරූ ග්‍රහණය කරයි, තිරරූ දෙකක වෙනස්කම් පෙන්වයි, සහ සැලැස්ම, අකුරු සැකසුම, වර්ණය, හා ප්‍රවේශය ආවරණය කරන AI-ජනිත නිර්මාණ සමාලෝචනයක් ලබා දෙයි.
- **ඇතුළත් agents පහක්** — Content Writer, Site Builder, Design Studio, Plugin Manager, සහ Support Assistant. සෑම agent එකකටම විශේෂිත මෙවලම් කට්ටලයක්, සකස් කළ system prompt එකක්, සහ ආරම්භක යෝජනා ඇත. chat header හි නව **Agent Picker** හරහා මාරු කළ හැක. [ඇතුළත් Agents](../../user-guide/configuration/built-in-agents) බලන්න.
- **Feature flags** — ප්‍රවේශ-පාලන toggles (පරිපාලකයින්ට සීමා කරන්න, ජාල පරිපාලකයින්ට සීමා කරන්න, subscribers ප්‍රවේශය, සාමාජිකයන් නොවන අයට අක්‍රීය කරන්න) සහ branding විකල්ප (footer attribution සඟවන්න, custom agent නම, agent picker සඟවන්න, chat avatar ලෙස site icon භාවිතා කරන්න) සහිත නව **Settings → Feature Flags** tab එක. [Gratis AI Agent Settings](../../user-guide/administration/gratis-ai-agent-settings) බලන්න.
- **අවසන් session එක ප්‍රතිස්ථාපනය** — chat panel එක දැන් පිටුව load වන විට සහ widget එක විවෘත කරන විට ඉතා මෑත සංවාදය ස්වයංක්‍රීයව නැවත load කරයි. එබැවින් පිටු අතර ගමන් කළත් සන්දර්භය නැති නොවේ.
- **Plugin action links** — Settings සහ Abilities Registry වෙත ඉක්මන් links දැන් WordPress **Plugins → Installed Plugins** තිරයේ plugin විස්තරයට පහළින් පෙන්වයි.

### වැඩිදියුණු කළ

- **රූප මූලාශ්‍ර නැවත උත්සාහය** — බාගැනීම අසාර්ථක වූ විට AI-ජනිත රූපයකට යාමට පෙර agent දැන් සකසා ඇති සියලු නොමිලේ රූප මූලාශ්‍ර නැවත උත්සාහ කරයි.
- **Model info panel** — chat header හි සෑම විටම පෙනේ; පළමු පණිවිඩයෙන් පසු තවදුරටත් සඟවන්නේ නැත.
- **Auto-scroll හැසිරීම** — පරිශීලකයා කියවීමට ඉහළට scroll කරන විට auto-scroll නවතී; පාවෙන **පහළට scroll කරන්න** බොත්තමක් පෙනී, පරිශීලකයා නවතම පණිවිඩයට ළඟා වූ විට ස්වයංක්‍රීයව ඉවත් වේ.
- **Agent Picker UI** — එක් එක් agent සඳහා icons සහිත form-table overlay එකක් ලෙස නැවත නිර්මාණය කරන ලදී. එමඟින් agents හඳුනාගෙන ඉක්මනින් මාරු වීම පහසු වේ.
- **Lazy-loaded JS chunks** — chat widget හි ආරම්භක JavaScript bundle එක දැන් lazy-loaded chunks වලට බෙදා ඇත. එමඟින් ආරම්භක bundle ප්‍රමාණ 75–90% කින් අඩු වේ.
- **Chat widget නැවත නිර්මාණය** — පෙර custom avatar වෙනුවට ඒකාබද්ධ AI icon එකක් භාවිතා කරයි; ඇතුළත් agent පද්ධතිය සමඟ සංගත වේ.
- **URL linkification** — system messages සහ error message bubbles තුළ පෙනෙන URLs දැන් ක්ලික් කළ හැකි links ලෙස පෙන්වයි.

### නිවැරදි කළ

- **හැකියා සොයාගත හැකි වීම** — සියලු හැකියාවන් agent හි tool list එකේ විශ්වාසයෙන් පෙනෙන ලෙස විස්තර, system prompt references, සහ namespace alignment නිවැරදි කරන ලදී.
- **Providers cache** — multisite ජාලවල stale-provider ගැටලු වැළැක්වීමට providers දැන් version counter එකක් හරහා site-wide cache කරයි.
- **`ability_invalid_output`** — හැකියා handlers 12ක් පුරා විසඳන ලදී; සියල්ල නිසි ලෙස ව්‍යුහගත JSON ප්‍රතිචාර ආපසු ලබා දෙයි.
- **`pending_client_tool_calls` pipeline** — client-side tool calls නිවැරදිව සම්පූර්ණ වී ප්‍රතිඵල model වෙත ආපසු යවන ලෙස අවසානයේ සිට අවසානය දක්වා සම්බන්ධ කරන ලදී.
- **History drawer** — ආපසු හැරවිය නොහැකි වෙනස්කම් revert ලැයිස්තුවෙන් ඉවත් කර ඇත; **සම්පූර්ණ ඉතිහාසය බලන්න** link එක දැන් නිවැරදිව ක්‍රියා කරයි.
- **වෙනස්කම්/revert පද්ධතිය** — වෙනම දෝෂ පහක් නිවැරදි කර නව admin interface යටතේ ඒකාබද්ධ කරන ලදී.
- **Save Settings toast** — **Save Settings** ක්ලික් කිරීමෙන් පසු snackbar දැනුම්දීම දැන් විශ්වාසයෙන් පෙනේ.
- **Trash context menu** — trash view එකෙන් පිටව නොගොස් අයිතම hard-delete කිරීමට **ස්ථිරව මකන්න** විකල්පය එක් කරන ලදී.
- **සංස්කරණය කර නැවත යවන්න** — edit icon එක ක්ලික් කළ විට දැන් thread එකේ සියලු පණිවිඩ නොව, ක්ලික් කළ පණිවිඩය පමණක් edit mode වෙත යයි.
- **Chat layout උස** — පිටුවට ඉහළින් plugin-ඇතුළත් අන්තර්ගතය (admin notices, banners) පෙනෙන විට chat panel එක තම උස ගළපයි. එමඟින් input area එක තිරයෙන් පිටතට තල්ලු වීම වැළකේ.

---

## 1.4.0 — 2026-04-09 දින නිකුත් විය

### අලුත්

- **WP-CLI benchmark command** (`wp gratis-ai-agent benchmark`) — CI pipelines සහ ආකෘති ඇගයීම් කාර්ය ප්‍රවාහ සඳහා command line වෙතින් Agent Capabilities v1 benchmark suite ධාවනය කරයි. ප්‍රශ්නයක්-අනුව ධාවන, provider/model අභිබවා සැකසුම්, සහ JSON/CSV ප්‍රතිදානයට සහය දක්වයි.
- **Agent Capabilities v1 benchmark suite** — සම්පූර්ණ හැකියා පරාසය පරීක්ෂා කරන, ලකුණුකරණය සහ token/කාලසීමා වාර්තාකරණය සහිත සංකීර්ණ බහු-පියවර prompt සමූහයකි.
- **අභිරුචි ලිපි වර්ග හැකියා** — `register_post_type`, `list_post_types`, `delete_post_type`. ලියාපදිංචි කිරීම් options table හරහා නැවත ආරම්භ කළත් පවතී.
- **අභිරුචි වර්ගීකරණ හැකියා** — `register_taxonomy`, `list_taxonomies`, `delete_taxonomy`. විකල්ප rewrite slugs සහිත ධූරාවලී සහ සරල වර්ගීකරණ සඳහා සහය දක්වයි.
- **නිර්මාණ පද්ධති හැකියා** — `inject_custom_css`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `apply_theme_json_preset`. තෝරා සැකසූ preset පහක් ඇතුළත් වේ: `minimal-dark`, `warm-editorial`, `corporate-blue`, `vibrant-startup`, `classic-blog`.
- **ගෝලීය ශෛලී හැකියා** — `get_global_styles`, `set_global_styles`, `reset_global_styles`. WordPress Global Styles API හරහා theme.json අගයන් කියවයි සහ ලියයි.
- **සංචාලන මෙනු කළමනාකරණ හැකියාව** — `create_menu`, `update_menu`, `add_menu_item`, `remove_menu_item`, `list_menus`. අඩංගු මෙනු සහ theme location පැවරීමට සහය දක්වයි.
- **විකල්ප කළමනාකරණ හැකියාව** — `get_option`, `set_option`, `delete_option`, `list_options`. වැදගත් WordPress විකල්ප වෙනස් කිරීමෙන් ආරක්ෂා කරන අන්තර්නිර్మිත safety blocklist එකක් ඇතුළත් වේ.
- **ස්ථාපනය කළ හැකි හැකියා ලේඛනය** — `list_available_abilities`, `install_ability`, `recommend_plugin`. WordPress plugin ලෙස බෙදාහැරෙන හැකියා පැක් සොයාගෙන සක්‍රිය කරන්න.
- **අඩවි නිර්මාණ සම්බන්ධීකරණ v2** — `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`. plugin සොයාගැනීම, පියවර ප්‍රතිදාන යොමු, ප්‍රගති අධීක්ෂණය, සහ ස්වයංක්‍රීය දෝෂ ප්‍රතිසාධනය සහිත බහු-අදියර අඩවි ගොඩනැගීමේ සැලසුම්.
- **අවන්හල් වෙබ් අඩවි benchmark ප්‍රශ්නය** (`q-restaurant-website`) — CPT ලියාපදිංචිය, නිර්මාණ පද්ධතිය, සංචාලනය, සහ plugin සොයාගැනීම ආවරණය කරන මුල සිට අවසානය දක්වා පරීක්ෂණය.
- **AI provider connector plugins** වේගවත් දේශීය සංවර්ධන සැකසුම සඳහා WordPress Playground blueprints වෙත එක් කරන ලදී.

### වැඩිදියුණු කරන ලදී

- README AI provider connector ලේඛන සහ සැකසුම් උපදෙස් සමඟ යාවත්කාලීන කරන ලදී.

### සවි කරන ලදී

- `main` branch මත තිබූ PHPUnit පරීක්ෂණ අසාර්ථකතා 25ක් විසඳන ලදී.
- `blueprint.json` තුළ GitHub releases URL ආකෘතිය නිවැරදි කරන ලදී.
- පැරණි IDs සමඟ ගැටීම් වැළැක්වීමට කාර්ය ID නැවත අංකනය.

---

## 1.3.x

_පෙර නිකුතු සටහන් plugin repository තුළ පවත්වාගෙන යයි._

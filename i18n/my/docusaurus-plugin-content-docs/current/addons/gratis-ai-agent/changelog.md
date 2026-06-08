---
title: ပြောင်းလဲမှုမှတ်တမ်း
sidebar_position: 5
_i18n_hash: 59cb5f1cda2a3e8a789dcd3d67db33db
---
# ပြောင်းလဲမှုမှတ်တမ်း (Changelog)

## 1.9.0 — ၂၀၂၆-၀၄-၂၈ တွင် ထုတ်ဝေခဲ့သည်

### အသစ်များ (New)

- **`create_contact_form` စွမ်းဆောင်ရည်** — လက်ရှိအသုံးပြုနေသည့် form plugin (Contact Form 7, WPForms, Fluent Forms, သို့မဟုတ် Gravity Forms) ကို အသုံးပြု၍ contact form တစ်ခု ဖန်တီးပေးပြီး၊ မည်သည့် post သို့မဟုတ် page တွင်မဆို ထည့်သွင်းနိုင်သည့် shortcode ကို ပြန်ပေးပါသည်။
- **`set_featured_image` စွမ်းဆောင်ရည်** — ရှိပြီးသား Media Library attachment ID သို့မဟုတ် remote URL မှ post သို့မဟုတ် page အတွက် featured image ကို သတ်မှတ်ပေးနိုင်ပါသည်။ URL ပေးထားပါက ပုံကို အလိုအလျောက် import လုပ်ပေးပါသည်။
- **`batch_create_posts` စွမ်းဆောင်ရည်** — single ability ခေါ်ဆိုမှုတစ်ခုတည်းဖြင့် post များစွာကို ဖန်တီးပေးနိုင်ပါသည်။ `create_post` နှင့် တူညီသော parameters များကို ပံ့ပိုးပေးပြီး၊ post တစ်ခုချင်းစီ၏ အောင်မြင်မှု/ကျရှုံးမှုကို အစီရင်ခံကာ၊ အမှားပေါ်ပါက ရပ်တန့်စေမည့် (optional) `stop_on_error` mode ပါဝင်ပါသည်။
- **`page_template` parameter** — `create_post` နှင့် `update_post` တို့တွင် ထည့်သွင်းထားပါသည်။ ဖန်တီးချိန် သို့မဟုတ် update လုပ်ချိန်တွင် PHP page template file (ဥပမာ- `page-full-width.php`) ကို သတ်မှတ်ပေးပါသည်။ `update_post` တွင် empty string ပေးခြင်းဖြင့် theme ၏ default အခြေအနေသို့ ပြန်သွားစေပါသည်။
- **Client-side screenshot စွမ်းဆောင်ရည်များ** — `capture_screenshot`, `compare_screenshots`, နှင့် `review_page_design` တို့ဖြစ်သည်။ server-side headless browser မှတစ်ဆင့် live page ၏ full သို့မဟုတ် viewport screenshot များကို ရိုက်ယူခြင်း၊ screenshot နှစ်ခုကို နှိုင်းယှဉ်ခြင်း၊ နှင့် layout၊ typography၊ colour၊ နှင့် accessibility တို့ကို အကျုံးဝင်သည့် AI-generated design review ကို ရယူနိုင်ပါသည်။
- **Built-in agents ငါးခု** — Content Writer, Site Builder, Design Studio, Plugin Manager, နှင့် Support Assistant တို့ဖြစ်သည်။ agent တစ်ခုချင်းစီတွင် သီးသန့် tool အစုံအလင်၊ စနစ်တကျ ရေးဆွဲထားသော system prompt နှင့် စတင်အကြံပြုချက်များ ပါရှိပါသည်။ chat header ရှိ **Agent Picker** မှတစ်ဆင့် ပြောင်းလဲအသုံးပြုနိုင်ပါသည်။ [Built-in Agents](../../user-guide/configuration/built-in-agents) ကို ကြည့်ပါ။
- **Feature flags** — **Settings → Feature Flags** တွင် အသုံးပြုခွင့်ထိန်းချုပ်မှု (administrator များအတွက် ကန့်သတ်ခြင်း၊ network admin များအတွက် ကန့်သတ်ခြင်း၊ subscriber အသုံးပြုခွင့်၊ non-members များအတွက် ပိတ်ထားခြင်း) နှင့် branding ရွေးချယ်မှုများ (footer attribution ကို ဖျောက်ခြင်း၊ custom agent name၊ agent picker ကို ဖျောက်ခြင်း၊ chat avatar အဖြစ် site icon အသုံးပြုခြင်း) တို့ပါဝင်သည့် tab အသစ်တစ်ခုကို ထည့်သွင်းထားပါသည်။ [Gratis AI Agent Settings](../../user-guide/administration/gratis-ai-agent-settings) ကို ကြည့်ပါ။
- **နောက်ဆုံး session ကို ပြန်ရယူခြင်း** — chat panel သည် page load လုပ်ချိန်နှင့် widget ကို ဖွင့်ချိန်တိုင်း အလိုအလျောက် နောက်ဆုံး 대화ကို ပြန်လည်တင်ပေးသောကြောင့် page navigation များအကြား context ပျောက်ဆုံးမည်မဟုတ်ပါ။
- **Plugin action links** — WordPress ၏ **Plugins → Installed Plugins** မျက်နှာပြင်တွင် plugin description အောက်၌ Settings နှင့် Abilities Registry သို့ လျင်မြန်စွာသွားနိုင်သည့် link များ ပေါ်လာပါမည်။

### ပိုမိုကောင်းမွန်လာသည်များ (Improved)

- **Image source retry** — download လုပ်မှု ကျရှုံးပါက agent သည် AI-generated image သို့ ပြန်မကျဘဲ၊ စနစ်တကျ သတ်မှတ်ထားသော free image source အားလုံးကို ပြန်လည်ကြိုးစားပေးပါသည်။
- **Model info panel** — chat header တွင် အမြဲတမ်း မြင်ရမည်ဖြစ်ပြီး၊ ပထမဆုံး message ပို့ပြီးနောက် ပုန်းကွယ်သွားမည်မဟုတ်တော့ပါ။
- **Auto-scroll behaviour** — အသုံးပြုသူက ဖတ်ရန်အတွက် အပေါ်သို့ scroll လုပ်ပါက auto-scroll သည် ခေတ္တရပ်နားသွားမည်ဖြစ်ပြီး၊ floating **Scroll to bottom** ခလုတ် ပေါ်လာကာ အသုံးပြုသူသည် နောက်ဆုံး message အထိ ရောက်ရှိပါက အလိုအလျောက် ပျောက်ကွယ်သွားမည်ဖြစ်သည်။
- **Agent Picker UI** — agent တစ်ခုချင်းစီ၏ icon များပါဝင်သည့် form-table overlay အဖြစ် ပြန်လည်ဒီဇိုင်းထုတ်ထားသဖြင့် agent များကို တစ်ချက်ကြည့်ရုံဖြင့် ခွဲခြားသိရှိကာ ပြောင်းလဲအသုံးပြုရန် ပိုမိုလွယ်ကူစေပါသည်။
- **Lazy-loaded JS chunks** — chat widget ၏ initial JavaScript bundle ကို lazy-loaded chunks များအဖြစ် ခွဲထားသဖြင့် initial bundle size ကို ၇၅–၉၀% အထိ လျှော့ချနိုင်ခဲ့ပါသည်။
- **Chat widget redesign** — ယခင် custom avatar ကို ပေါင်းစည်းထားသော AI icon ဖြင့် အစားထိုးထားပြီး၊ built-in agent system နှင့် ကိုက်ညီမှုရှိစေပါသည်။
- **URL linkification** — system messages နှင့် error message bubbles များတွင် ပေါ်လာသည့် URL များကို ယခုအခါ နှိပ်နိုင်သော link များအဖြစ် ပြသပေးပါသည်။

### ပြင်ဆင်ခဲ့သည်များ (Fixed)

- **Ability discoverability** — description များ၊ system prompt ကို ကိုးကားမှုများ၊ နှင့် namespace alignment တို့ကို ပြင်ဆင်ထားသဖြင့် ability အားလုံးသည် agent ၏ tool list တွင် ယုံကြည်စိတ်ချစွာ ပေါ်လာမည်ဖြစ်သည်။
- **Providers cache** — multisite network များတွင် stale-provider ပြဿနာများ မဖြစ်စေရန် providers များကို version counter မှတစ်ဆင့် site-wide တွင် cache လုပ်ပေးထားပါသည်။
- **`ability_invalid_output`** — ability handler ၁၂ ခုအထိ ပြင်ဆင်ခဲ့ပြီး၊ အားလုံးသည် စနစ်တကျဖွဲ့စည်းထားသော JSON response များကို ပြန်ပေးမည်ဖြစ်သည်။
- **`pending_client_tool_calls` pipeline** — client-side tool calls များသည် အမှားအယွင်းမရှိ အပြီးသတ်နိုင်ပြီး၊ ရလဒ်များကို model သို့ ပြန်ပေးနိုင်ရန် end-to-end ချိတ်ဆက်ပေးထားပါသည်။
- **History drawer** — ပြန်လည်ရုပ်သိမ်း၍မရသော ပြောင်းလဲမှုများကို revert list မှ ချန်လှပ်ထားပြီး၊ **View full history** link သည် ယခုအခါ မှန်ကန်စွာ အလုပ်လုပ်ပါသည်။
- **Changes/revert system** — bug ငါးခုကို ပြင်ဆင်ခဲ့ပြီး၊ admin interface အသစ်အောက်တွင် ပေါင်းစည်းပေးထားပါသည်။
- **Save Settings toast** — **Save Settings** ကို နှိပ်ပြီးနောက် snackbar notification သည် ယခုအခါ ယုံကြည်စိတ်ချစွာ ပေါ်လာမည်ဖြစ်သည်။
- **Trash context menu** — **Delete Permanently** option ကို ထည့်သွင်းပေးထားသဖြင့် trash view ထဲမှာပင် item များကို hard-delete လုပ်နိုင်ပြီဖြစ်သည်။
- **Edit & resend** — edit icon ကို နှိပ်ခြင်းသည် thread ရှိ message အားလုံးကို မဟုတ်ဘဲ၊ နှိပ်လိုက်သည့် message အတွက်သာ edit mode သို့ ဝင်စေပါသည်။
- **Chat layout height** — plugin-injected content (admin notices, banners) များသည် page အပေါ်ဘက်တွင် ပေါ်လာပါက chat panel သည် ၎င်း၏အမြင့်ကို ချိန်ညှိပေးနိုင်ပြီး၊ input area သည် screen အပြင်ဘက်သို့ မတွန်းသွားစေပါ။

---

## 1.4.0 — ၂၀၂၆-၀၄-၀၉ တွင် ထုတ်ဝေခဲ့သည်

### အသစ်များ (New)

- **WP-CLI benchmark command** (`wp gratis-ai-agent benchmark`) — CI pipelines နှင့် model evaluation workflows များအတွက် command line မှတစ်ဆင့် Agent Capabilities v1 benchmark suite ကို run နိုင်ပါသည်။ per-question runs၊ provider/model overrides၊ နှင့် JSON/CSV output တို့ကို ပံ့ပိုးပေးပါသည်။
- **Agent Capabilities v1 benchmark suite** — စနစ်တကျဖွဲ့စည်းထားသော၊ အဆင့်များစွာပါဝင်သည့် complex prompts များဖြစ်ပြီး၊ ability ၏ စွမ်းဆောင်ရည် အကျယ်အဝန်းတစ်ခုလုံးကို စမ်းသပ်ပေးကာ scoring နှင့် token/duration အစီရင်ခံပါသည်။
- **Custom Post Type abilities** — `register_post_type`, `list_post_types`, `delete_post_type`။ ဤမှတ်ပုံတင်မှုများသည် options table မှတစ်ဆင့် restart လုပ်ချိန်တွင်ပါ ဆက်လက်တည်ရှိနေမည်ဖြစ်သည်။
- **Custom Taxonomy abilities** — `register_taxonomy`, `list_taxonomies`, `delete_taxonomy`။ optional rewrite slugs များနှင့်အတူ hierarchical နှင့် flat taxonomies များကို ပံ့ပိုးပေးပါသည်။
- **Design System abilities** — `inject_custom_css`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `apply_theme_json_preset`။ `minimal-dark`, `warm-editorial`, `corporate-blue`, `vibrant-startup`, `classic-blog` စသည့် curated preset ငါးခု ပါဝင်ပါသည်။
- **Global Styles abilities** — `get_global_styles`, `set_global_styles`, `reset_global_styles`။ WordPress Global Styles API မှတစ်ဆင့် theme.json values များကို ဖတ်ယူပြီး ရေးသားပေးပါသည်။
- **Navigation Menu management ability** — `create_menu`, `update_menu`, `add_menu_item`, `remove_menu_item`, `list_menus`။ nested menus နှင့် theme location assignment တို့ကို ပံ့ပိုးပေးပါသည်။
- **Options Management ability** — `get_option`, `set_option`, `delete_option`, `list_options`။ အရေးကြီးသော WordPress options များကို ပြောင်းလဲခြင်းမှ ကာကွယ်ပေးသည့် built-in safety blocklist ပါဝင်ပါသည်။
- **Installable Abilities Registry** — `list_available_abilities`, `install_ability`, `recommend_plugin`။ WordPress plugins အနေဖြင့် ဖြန့်ဝေထားသော ability pack များကို ရှာဖွေပြီး အသက်သွင်းနိုင်ပါသည်။
- **Site Builder Orchestration v2** — `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`။ plugin discovery၊ step output references၊ progress tracking၊ နှင့် autonomous error recovery တို့ပါဝင်သည့် multi-phase site build plans များဖြစ်သည်။
- **Restaurant website benchmark question** (`q-restaurant-website`) — CPT registration၊ design system၊ navigation၊ နှင့် plugin discovery တို့ကို အကျုံးဝင်သည့် end-to-end test ဖြစ်ပါသည်။
- **AI provider connector plugins** — ပိုမိုမြန်ဆန်သော local development setup အတွက် WordPress Playground blueprints များတွင် ထည့်သွင်းပေးထားပါသည်။

### ပိုမိုကောင်းမွန်လာသည်များ (Improved)

- README ကို AI provider connector documentation နှင့် setup instructions များဖြင့် update လုပ်ထားပါသည်။

### ပြင်ဆင်ခဲ့သည်များ (Fixed)

- `main` branch ပေါ်ရှိ PHPUnit test ကျရှုံးမှု ၂၅ ခုကို ပြင်ဆင်ခဲ့ပါသည်။
- `blueprint.json` တွင် GitHub releases URL format ကို ပြင်ဆင်ခဲ့ပါသည်။
- ယခင် ID များနှင့် ပဋိပက္ခမဖြစ်စေရန် Task ID များကို ပြန်လည်နံပါတ်စဉ်တပ်ပေးခဲ့ပါသည်။

---

## 1.3.x

_ယခင်ထုတ်ဝေမှု မှတ်တမ်းများကို plugin repository တွင် ထိန်းသိမ်းထားပါသည်။_

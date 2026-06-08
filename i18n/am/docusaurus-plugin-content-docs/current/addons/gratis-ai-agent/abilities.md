---
title: የችሎታዎች ማጣቀሻ
sidebar_position: 2
_i18n_hash: 1a83460648ea789162af417c6b11eecc
---
# შესაძლებ entail (Abilities Reference)

Capabilities ဆိုတာ Gratis AI Agent သင့် WordPress install ပေါ်မှာ အသုံးပြုနိုင်တဲ့ အခြေခံ လုပ်ဆောင်ချက်တွေပဲ ဖြစ်ပါတယ်။ ဒီလုပ်ဆောင်ချက်တိုင်းဟာ PHP class တစ်ခုအဖြစ် မှတ်ပုံတင်ထားပြီး JSON schema တစ်ခုကို ဖော်ပြပေးပါတယ်။ agent က runtime မှာ ဒီschema ကို ဖတ်ပြီး ဘယ်လို parameter တွေ လိုအပ်လဲ၊ ဘာကို ပြန်ပေးမလဲဆိုတာ နားလည်သွားမှာ ဖြစ်ပါတယ်။

ဒီစာမျက်နှာက Gratis AI Agent v1.9.0 နဲ့အတူ ပါဝင်တဲ့ လုပ်ဆောင်ချက်အားလုံးကို မှတ်တမ်းတင်ထားတာ ဖြစ်ပါတယ်။

---

## Custom Post Types (စိတ်ကြိုက်ပို့စ်အမျိုးအစားများ)

ဒီလုပ်ဆောင်ချက်တွေဟာ agent ကနေ မှတ်ပုံတင်ထားတဲ့ custom post types (CPTs) တွေကို စီမံခန့်ခွဲပေးပါတယ်။ ဒီမှတ်ပုံတင်မှုတွေဟာ plugin ကို 비활성화/ပြန်ဖွင့်ရင်တောင် WordPress options table ထဲမှာ သိမ်းဆည်းထားတာ ဖြစ်လို့ မပျောက်သွားပါဘူး။

### `register_post_type`

새로운 custom post type တစ်ခုကို မှတ်ပုံတင်ပေးပါတယ်။

**Parameters (အချက်အလက်များ)**

| Parameter | Type | Required | Description (ဖော်ပြချက်) |
|---|---|---|---|
| `slug` | string | Yes | Post type key ဖြစ်ပါတယ် (အရှည် အများဆုံး ၂၀၊ စာလုံးကြီး မသုံးရ၊ အကွက်မသုံးရပါ) |
| `singular_label` | string | Yes | လူတွေဖတ်လို့ရတဲ့ တစ်ခုတည်းသော နာမည်ဖြစ်ပါတယ်၊ ဥပမာ - `Portfolio Item` |
| `plural_label` | string | Yes | လူတွေဖတ်လို့ရတဲ့ အများကိန်းနာမည်ဖြစ်ပါတယ်၊ ဥပမာ - `Portfolio Items` |
| `public` | boolean | No | Post type ကို အများပြည်သူ ကြည့်ရှုနိုင်မလား။ ပုံသေတန်ဖိုးက `true` ဖြစ်ပါတယ်။ |
| `supports` | array | No | ထောက်ပံ့ပေးမယ့် လုပ်ဆောင်ချက်တွေ - `title`, `editor`, `thumbnail`, `excerpt`, `comments`, `revisions`, `custom-fields`။ ပုံသေတန်ဖိုးက `["title","editor"]` ဖြစ်ပါတယ်။ |
| `has_archive` | boolean | No | Post type archive page ကို ဖွင့်ပေးမလား။ ပုံသေတန်ဖိုးက `false` ဖြစ်ပါတယ်။ |
| `menu_icon` | string | No | admin menu icon အတွက် Dashicons class ဒါမှမဟုတ် URL။ ပုံသေတန်ဖိုးက `"dashicons-admin-post"` ဖြစ်ပါတယ်။ |
| `rewrite_slug` | string | No | Post type အတွက် URL slug။ ပုံသေတန်ဖိုးက `slug` ဖြစ်ပါတယ်။ |

**Example (ဥပမာ)**

```json
{
  "slug": "portfolio",
  "singular_label": "Portfolio Item",
  "plural_label": "Portfolio Items",
  "public": true,
  "supports": ["title", "editor", "thumbnail"],
  "has_archive": true,
  "menu_icon": "dashicons-portfolio"
}
```

**Returns (ပြန်ပေးသောအရာ)** `{ "success": true, "slug": "portfolio" }`

---

### `list_post_types`

agent က မှတ်ပုံတင်ထားတဲ့ custom post types အားလုံးကို ပြန်ပေးပါတယ်။

**Parameters (အချက်အလက်များ)** — မရှိပါဘူး။

**Returns (ပြန်ပေးသောအရာ)**

```json
{
  "post_types": [
    {
      "slug": "portfolio",
      "singular_label": "Portfolio Item",
      "plural_label": "Portfolio Items",
      "public": true
    }
  ]
}
```

---

### `delete_post_type`

agent က အရင်က မှတ်ပုံတင်ထားတဲ့ custom post type တစ်ခုကို ဖယ်ရှားလိုက်ပါတယ်။ အဲဒီအမျိုးအစားနဲ့ ရှိပြီးသား posts တွေဟာ database ထဲမှာ ရှိနေဦးမှာဖြစ်ပေမယ့် ပို့စ်အမျိုးအစားကနေတော့ မဝင်နိုင်တော့ပါဘူး။

**Parameters (အချက်အလက်များ)**

| Parameter | Type | Required | Description (ဖော်ပြချက်) |
|---|---|---|---|
| `slug` | string | Yes | ဖယ်ရှားချင်တဲ့ post type key ဖြစ်ပါတယ်။ |

**Returns (ပြန်ပေးသောအရာ)** `{ "success": true, "slug": "portfolio" }`

---

## Custom Taxonomies (စိတ်ကြိုက်အမျိုးအစားများ)

ဒီလုပ်ဆောင်ချက်တွေဟာ custom taxonomies တွေကို စီမံခန့်ခွဲပေးပါတယ်။ CPT တွေလိုပဲ taxonomy မှတ်ပုံတင်မှုတွေလည်း သိမ်းဆည်းထားပါတယ်။

### `register_taxonomy`

새로운 custom taxonomy တစ်ခုကို မှတ်ပုံတင်ပေးပါတယ်။

**Parameters (အချက်အလက်များ)**

| Parameter | Type | Required | Description (ဖော်ပြချက်) |
|---|---|---|---|
| `slug` | string | Yes | Taxonomy key ဖြစ်ပါတယ် (အရှည် အများဆုံး ၃၂)။ |
| `singular_label` | string | Yes | လူတွေဖတ်လို့ရတဲ့ တစ်ခုတည်းသော နာမည်ဖြစ်ပါတယ်၊ ဥပမာ - `Project Category` |
| `plural_label` | string | Yes | လူတွေဖတ်လို့ရတဲ့ အများကိန်းနာမည်ဖြစ်ပါတယ်၊ ဥပမာ - `Project Categories` |
| `post_types` | array | Yes | ဒီtaxonomy ကို ဘယ် post type slug နဲ့ ချိတ်ဆက်မလဲဆိုတာ။ |
| `hierarchical` | boolean | No | category-style အတွက် `true`၊ tag-style အတွက် `false` ဖြစ်ပါတယ်။ ပုံသေတန်ဖိုးက `true` ဖြစ်ပါတယ်။ |
| `public` | boolean | No | Terms တွေကို အများပြည်သူ ကြည့်ရှုနိုင်မလား။ ပုံသေတန်ဖိုးက `true` ဖြစ်ပါတယ်။ |
| `rewrite_slug` | string | No | Taxonomy အတွက် URL slug။ ပုံသေတန်ဖိုးက `slug` ဖြစ်ပါတယ်။ |

**Example (ဥပမာ)**

```json
{
  "slug": "project-category",
  "singular_label": "Project Category",
  "plural_label": "Project Categories",
  "post_types": ["portfolio"],
  "hierarchical": true
}
```

**Returns (ပြန်ပေးသောအရာ)** `{ "success": true, "slug": "project-category" }`

---

### `list_taxonomies`

agent က မှတ်ပုံတင်ထားတဲ့ custom taxonomies အားလုံးကို ပြန်ပေးပါတယ်။

**Parameters (အချက်အလက်များ)** — မရှိပါဘူး။

**Returns (ပြန်ပေးသောအရာ)**

```json
{
  "taxonomies": [
    {
      "slug": "project-category",
      "singular_label": "Project Category",
      "post_types": ["portfolio"],
      "hierarchical": true
    }
  ]
}
```

---

### `delete_taxonomy`

agent က အရင်က မှတ်ပုံတင်ထားတဲ့ custom taxonomy တစ်ခုကို ဖယ်ရှားလိုက်ပါတယ်။

**Parameters (အချက်အလက်များ)**

| Parameter | Type | Required | Description (ဖော်ပြချက်) |
|---|---|---|---|
| `slug` | string | Yes | ဖယ်ရှားချင်တဲ့ taxonomy key ဖြစ်ပါတယ်။ |

**Returns (ပြန်ပေးသောအရာ)** `{ "success": true, "slug": "project-category" }`

---

## Design System (ဒီဇိုင်းစနစ်)

Design system လုပ်ဆောင်ချက်တွေဟာ WordPress site ရဲ့ မြင်ရတဲ့ ပုံစံကို ပြောင်းလဲပေးပါတယ် — custom CSS ကနေ block patterns နဲ့ site logo အထိပေါ့။

### `inject_custom_css`

CSS ကို `wp_add_inline_style` ကနေတစ်ဆင့် site ရဲ့ `<head>` ထဲကို ထည့်သွင်းပေးပါတယ်။ CSS ကို `gratis_ai_agent_custom_css` option ထဲမှာ သိမ်းဆည်းထားပြီး လုပ်ဆောင်ချက်ကို reset လုပ်တဲ့အခါ သပ်သပ်ရပ်ရပ် ဖယ်ရှားပစ်ပါတယ်။

**Parameters (အချက်အလက်များ)**

| Parameter | Type | Required | Description (ဖော်ပြချက်) |
|---|---|---|---|
| `css` | string | Yes | ထည့်သွင်းမယ့် CSS ကုဒ်။ |
| `label` | string | No | ဒီ CSS block အတွက် လူတွေဖတ်လို့ရတဲ့ နာမည်။ debug logs တွေမှာ သုံးပါတယ်။ ပုံသေတန်ဖိုးက `"agent-injected"` ဖြစ်ပါတယ်။ |
| `replace` | boolean | No | `true` ဆိုရင် အရင်က ထည့်ထားတဲ့ CSS အားလုံးကို အစားထိုးပါမယ်။ ပုံသေတန်ဖိုးက `false` (ထပ်ပေါင်းထည့်မည်) ဖြစ်ပါတယ်။ |

**Example (ဥပမာ)**

```json
{
  "css": ":root { --primary: #1a1a2e; --accent: #e94560; } body { font-family: 'Inter', sans-serif; }",
  "label": "brand-colours",
  "replace": false
}
```

**Returns (ပြန်ပေးသောအရာ)** `{ "success": true, "bytes": 96 }`

---

### `add_block_pattern`

WordPress pattern library ထဲမှာ ပြန်အသုံးပြုနိုင်တဲ့ block pattern တစ်ခုကို မှတ်ပုံတင်ပေးပါတယ်။

**Parameters (အချက်အလက်များ)**

| Parameter | Type | Required | Description (ဖော်ပြချက်) |
|---|---|---|---|
| `slug` | string | Yes | Pattern အတွက် အမှတ်အသား၊ ဥပမာ - `gratis/hero-dark`။ |
| `title` | string | Yes | editor မှာ ပြသမယ့် pattern ရဲ့ လူတွေဖတ်လို့ရတဲ့ နာမည်။ |
| `content` | string | Yes | pattern အတွက် Serialized block markup (HTML)။ |
| `categories` | array | No | Pattern category slugs များ၊ ဥပမာ - `["featured", "hero"]`။ |
| `description` | string | No | pattern picker မှာ ပြသမယ့် အကျဉ်းချုပ် ဖော်ပြချက်။ |
| `keywords` | array | No | ရှာဖွေရေး keyword များ။ |

**Returns (ပြန်ပေးသောအရာ)** `{ "success": true, "slug": "gratis/hero-dark" }`

---

### `list_block_patterns`

agent က မှတ်ပုံတင်ထားတဲ့ block patterns အားလုံးကို စာရင်းပြုစုပေးပါတယ်။

**Parameters (အချက်အလက်များ)** — မရှိပါဘူး။

### `set_site_logo`

የWordPress የድር ጣቢያውን አርማ ወደ ተሰጠው attachment ID ወይም ወደ ርቀት ምስል URL ያዘጋጃል። URL ከተሰጠ፣ ምስሉ ይከፈታል እና በMedia Library ውስጥ ይገባል።

**ፓራሜትሮች**

| ፓራሜትር | አይነት | አስፈላጊነት | መግለጫ |
|---|---|---|---|
| `attachment_id` | integer | አይፈለግም | ካለው Media Library attachment ID |
| `url` | string | አይፈለግም | እንደ አርማ ለመስቀል እና ለማዘጋጀት የሚውል የርቀት ምስል URL |

ከሁለቱ ውስጥ አንዱ (`attachment_id` ወይም `url`) መደረግ አለበት።

**ይመልሳል** `{ "success": true, "attachment_id": 42 }`

---

### `apply_theme_json_preset`

የተሰኘ የቀለም/ፊደል ቅድመ-ቅደም ተከተል (preset) ወደ አሁን ባለው Theme `theme.json` (ወይም `global-styles`) ይተገበራል። እነዚህ ቅድመ-ቅደም ተከተሎች በGratis AI Agent ቡድን የሚጠበቁ የተዘጋጁ ጥቅሎች ናቸው።

**ፓራሜትሮች**

| ፓራሜትር | አይነት | አስፈላጊነት | መግለጫ |
|---|---|---|---|
| `preset` | string | አዎ | የቅድመ-ቅደም ተከተል ስም፣ ለምሳሌ፡ `minimal-dark`, `warm-editorial`, `corporate-blue` |
| `merge` | boolean | አይፈለግም | `true` ከሆነ፣ ከመተካት ይልቅ ከነበሩት ጋር ያዋህዳል። መደበኛ አdefaultValue `false` ነው። |

**የሚገኙ ቅድመ-ቅደም ተከተሎች**

| ቅድመ-ቅደም ተከተል | መግለጫ |
|---|---|
| `minimal-dark` | ወደ ጥቁር ዳራ፣ ነጭ ጽሑፍ፣ አንድ የነጠላ ቀለም አፅንዖት ያለው |
| `warm-editorial` | ሞቃታማ ነጭ ዳራ፣ ሴሪፍ (serif) ርዕሶች፣ የምድር ቀለሞች አፅንዖቶች |
| `corporate-blue` | ሙያዊ ፊደል ቅርጽ ያለው ጥቁር እና ነጭ ቀለም ቅይጥ |
| `vibrant-startup` | ደማቅ ግራዲየንቶች፣ ክብ ማበሪያዎች (rounded corners)፣ ዘመናዊ ሳንስ-ሴሪፍ ፊደላት |
| `classic-blog` | ገለልተኛ ግራጫዎች፣ ምቹ መስመር ቁመት (line-height)፣ ባህላዊ አቀማመጥ ክፍተቶች |

**ይመልሳል** `{ "success": true, "preset": "minimal-dark" }`

---

## Global Styles

Global Styles ችሎታዎች የtheme.json እሴቶችን በWordPress Global Styles API አማካኝነት ያነባሉ እና ይጽፋሉ፣ ይህም በሁሉም blocks እና templates ላይ በስርዓቱ ውስጥ ይሰራል።

### `get_global_styles`

አሁን ያለውን የglobal styles ቅንብር ይመልሳል።

**ፓራሜትሮች**

| ፓራሜትር | አይነት | አስፈላጊነት | መግለጫ |
|---|---|---|---|
| `path` | string | አይፈለግም | የተወሰነ እሴት JSON ማሳያ (pointer)፣ ለምሳሌ `/color/palette` ወይም `/typography/fontSizes`። ካልተጠቀሰ ሙሉውን አውቶማቲክ ጃክቶችን ይመልሳል። |

**ይመልሳል** ሙሉ የglobal styles object ወይም በ `path` ላይ ያለውን እሴት።

---

### `set_global_styles`

በglobal styles ቅንብር ውስጥ አንድ ወይም ከዚያ በላይ እሴቶችን ያሻሽላል።

**ፓራሜትሮች**

| ፓራሜትር | አይነት | አስፈላጊነት | መግለጫ |
|---|---|---|---|
| `path` | string | አዎ | ለመያዝ የሚገባው እሴት JSON ማሳያ (pointer)፣ ለምሳሌ `/color/palette` |
| `value` | any | አዎ | አዲሱ እሴት |

**ምሳሌ** — ወደ ቅይጥ (palette) ቀለም መጨመር

```json
{
  "path": "/color/palette",
  "value": [
    { "slug": "primary", "color": "#1a1a2e", "name": "Primary" },
    { "slug": "accent",  "color": "#e94560", "name": "Accent" }
  ]
}
```

**ይመልሳል** `{ "success": true, "path": "/color/palette" }`

---

### `reset_global_styles`

የአጀንት የተተገበሩትን ሁሉንም የglobal styles ለውጦች ያስተካክላል፣ የtheme መደበኛ ቅንብሮችን ይመልሳል።

**ፓራሜትሮች** — የለም

**ይመልሳል** `{ "success": true }`

---

## Navigation Menus

የNavigation Menu ችሎታዎች የWordPress nav menus እና እቃዎቻቸውን ይፈጥራሉ እንዲሁም ያስተዳድራሉ።

### `create_menu`

አዲስ የWordPress navigation menu ይፈጥራል።

**ፓራሜትሮች**

| ፓራሜትር | አይነት | አስፈላጊነት | መግለጫ |
|---|---|---|---|
| `name` | string | አዎ | የሜኑ ስም፣ ለምሳሌ፡ `Primary Navigation` |
| `location` | string | አይፈለግም | ይህን ሜኑ ለማስቀመጥ የሚውል የTheme ቦታ፣ ለምሳሌ፡ `primary` |

**ይመልሳል** `{ "success": true, "menu_id": 7 }`

---

### `update_menu`

ሜኑን ስም ይቀይራል ወይም ወደ ሌላ theme location ያስተላልፋል።

**ፓራሜትሮች**

| ፓራሜትር | አይነት | አስፈላጊነት | መግለጫ |
|---|---|---|---|
| `menu_id` | integer | አዎ | ለማሻሻል የሚገባው ሜኑ ID |
| `name` | string | አይፈለግም | አዲሱ የሜኑ ስም |
| `location` | string | አይፈለግም | ለመስጠት ወይም መልሶ ለመመደብ የሚውል የTheme ቦታ |

**ይመልሳል** `{ "success": true, "menu_id": 7 }`

---

### `add_menu_item`

ወደ ነባር navigation menu አንድ እቃ ይጨምራል።

**ፓራሜትሮች**

| ፓራሜትር | አይነት | አስፈላጊነት | መግለጫ |
|---|---|---|---|
| `menu_id` | integer | አዎ | የታለመው ሜኑ ID |
| `type` | string | አዎ | የዕቃ አይነት፡ `custom`, `post_type`, ወይም `taxonomy` |
| `title` | string | አይፈለግም | ለሜኑ እቃ መለያ (ለ `custom` አይነት አስፈላጊ) |
| `url` | string | አይፈለግም | ለ `custom` እቃዎች URL |
| `object_id` | integer | አይፈለግም | ለ `post_type`/`taxonomy` እቃዎች የPost ID ወይም Term ID |
| `parent_id` | integer | አይፈለግም | ይህን እቃ ከስር ለመያዝ የሚውል የሜኑ እቃ ID |
| `position` | integer | አይፈለግም | በሜኑ ውስጥ ያለው sı (sı) ላይ የተመሰረተ ቦታ (ከዜሮ መጀመር) |

**ይመልሳል** `{ "success": true, "item_id": 12 }`

---

### `remove_menu_item`

ከnavigation menu አንድ እቃ ያስወግዳል።

**ፓራሜትሮች**

| ፓራሜትር | አይነት | አስፈላጊነት | መግለጫ |
|---|---|---|---|
| `item_id` | integer | አዎ | ለማስወገድ የሚገባው የሜኑ እቃ ID |

**ይመልሳል** `{ "success": true, "item_id": 12 }`

---

### `list_menus`

ሁሉንም የWordPress navigation menus፣ የተመደቡትን theme locations ጨምሮ ዝርዝር ያሳያል።

**ፓራሜትሮች** — የለም

**ይመልሳል**

```json
{
  "menus": [
    {
      "menu_id": 7,
      "name": "Primary Navigation",
      "location": "primary",
      "item_count": 5
    }
  ]
}
```

---

## Options Management

የOptions ችሎታዎች በ`get_option` / `update_option` አማካኝነት የWordPress optionsን ያነባሉ እና ይጽፋሉ። የተገነባ ደህንነት መከላከያ (safety blocklist) ወሳኝ ቅንብሮችን በአጋጣሚ ከመቀየር ይከላከላል።

### `get_option`

የWordPress optionን ያነባል።

**ፓራሜትሮች**

| ፓራሜትር | አይነት | አስፈላጊነት | መግለጫ |
|---|---|---|---|
| `option_name` | string | አዎ | የoption ቁልፍ (key)፣ ለምሳሌ፡ `blogname` |

**ይመልሳል** `{ "option_name": "blogname", "value": "My Site" }`

`option_name` በደህንነት መከላከያ ዝርዝር ውስጥ ከገባ፣ ስህተትን ይመልሳል።

---

### `set_option`

የWordPress optionን ይጽፋል።

**ፓራሜትሮች**

| ፓራሜትር | አይነት | አስፈላጊነት | መግለጫ |
|---|---|---|---|
| `option_name` | string | አዎ | የoption ቁልፍ (key) |
| `value` | any | አዎ | አዲሱ እሴት (ለarrays/objects በራስ-ሰር ይከፈታል) |
| `autoload` | string | አይፈለግም | `"yes"` ወይም `"no"`. መደበኛው የነበረውን autoload ቅንብር ይጠብቃል። |

`option_name` নিরাপত্তা ব্লকলিস্টে থাকলে ত্রুটি döndürür.

**دیروند:** `{ "success": true, "option_name": "blogname" }`

---

### `delete_option`

WordPress option'ı siler.

**پارامترها**

| پارامتر | نوع | الزامی | توضیحات |
|---|---|---|---|
| `option_name` | string | بله | حذف edilecek option anahtarı |

`option_name` güvenlik ব্লকলistindeyse hata döndürür.

**دیروند:** `{ "success": true, "option_name": "my_custom_option" }`

---

### `list_options`

یک الگوyla مطابقت داشتن WordPress option'larını لیست می‌کند.

**پارامترها**

| پارامتر | نوع | الزامی | توضیحات |
|---|---|---|---|
| `pattern` | string | خیر | نام option'ları filtrelemek için SQL LIKE kalıbı, örneğin `gratis_%`. اگر حذف شود، همه option'lar döndürülir (بایگانی‌های بزرگ در این حالت احتیاط کنید). |
| `limit` | integer | خیر | حداکثر تعداد نتایج. پیش‌فرض ۵۰ است، حداکثر ۵۰۰. |

**دیروند**

```json
{
  "options": [
    { "option_name": "gratis_ai_agent_version", "autoload": "yes" }
  ],
  "total": 1
}
```

---

## مدیریت محتوا (Content Management)

قابلیت‌های مدیریت محتوا، پست‌ها و صفحات WordPress را ایجاد و ویرایش می‌کنند. شناسه پست‌ها برگردانده می‌شود تا مراحل بعدی در طرح‌های چند قابلیت بتوانند محتوای ساخته شده را ارجاع دهند.

### `create_post`

یک پست جدید، صفحه یا نوع پست سفارشی (custom post type) WordPress ایجاد می‌کند.

**پارامترها**

| پارامتر | نوع | الزامی | توضیحات |
|---|---|---|---|
| `title` | string | بله | عنوان پست |
| `content` | string | خیر | بدنه پست — متن ساده، HTML یا سریالایز شده بلوک مارکاپ را می‌پذیرد. |
| `status` | string | خیر | وضعیت: `draft` (پیش‌نویس)، `publish` (منتشر شده)، `pending` (در انتظار)، `private` (خصوصی). پیش‌فرض `draft` است. |
| `post_type` | string | خیر | اسلاگ نوع پست، مثلاً `post`، `page` یا هر CPT ثبت شده. پیش‌فرض `post` است. |
| `excerpt` | string | خیر | خلاصه کوتاهی که در آرشیوها و نتایج جستجو نمایش داده می‌شود. |
| `categories` | array | خیر | نام‌ها یا شناسه دسته‌بندی‌هایی که اختصاص دهید. |
| `tags` | array | خیر | نام‌ها یا شناسه تگ‌هایی که اختصاص دهید. |
| `author` | integer | خیر | شناسه کاربر WordPress که به عنوان نویسنده پست تنظیم می‌شود. پیش‌فرض کاربر فعلی است. |
| `date` | string | خیر | تاریخ انتشار در فرمت ISO 8601، مثلاً `2026-05-01T09:00:00`. |
| `page_template` | string | خیر | فایل قالب که به این پست یا صفحه اختصاص داده می‌شود، مثلاً `page-full-width.php`. فقط زمانی معنی‌دار است که `post_type` برابر با `page` باشد یا CPT از قالب‌های صفحه پشتیبانی کند. |

**مثال**

```json
{
  "title": "Welcome to Our New Site",
  "content": "<!-- wp:paragraph --><p>Hello world!</p><!-- /wp:paragraph -->",
  "status": "publish",
  "post_type": "page",
  "page_template": "page-full-width.php"
}
```

**دیروند:** `{ "success": true, "post_id": 42, "permalink": "https://example.com/welcome/" }`

---

### `update_post`

یک پست یا صفحه WordPress موجود را به‌روزرسانی می‌کند.

**پارامترها**

| پارامتر | نوع | الزامی | توضیحات |
|---|---|---|---|
| `post_id` | integer | بله | شناسه پستی که قرار است به‌روز شود. |
| `title` | string | خیر | عنوان جدید پست. |
| `content` | string | خیر | بدنه جدید پست. |
| `status` | string | خیر | وضعیت جدید: `draft`، `publish`، `pending`، `private`. |
| `excerpt` | string | خیر | خلاصه جدید. |
| `categories` | array | خیر | لیست کامل دسته‌بندی‌ها را با این آرایه از نام‌ها یا شناسه جایگزین کنید. |
| `tags` | array | خیر | لیست کامل تگ‌ها را با این آرایه از نام‌ها یا شناسه جایگزین کنید. |
| `page_template` | string | خیر | فایل قالب جدیدی که به این پست یا صفحه اختصاص داده می‌شود، مثلاً `page-full-width.php`. برای حذف تخصیص قالب و بازگشت به پیش‌فرض قالب تم (theme default)، یک رشته خالی ارسال کنید. |

**مثال** — تغییر قالب پس از ایجاد

```json
{
  "post_id": 42,
  "page_template": "page-full-width.php"
}
```

**دیروند:** `{ "success": true, "post_id": 42 }`

---

### `batch_create_posts`

چند پست را در یک فراخوانی قابلیت ایجاد، به صورت دسته‌ای ایجاد می‌کند و تعداد درخواست‌های رفت و برگشتی (round-trips) را در هنگام ساخت سایت یا وارد کردن محتوای انبوه کاهش می‌دهد. پست‌ها به ترتیب ساخته می‌شوند؛ اگر یکی شکست بخورد، بقیه ادامه می‌یابند و شکست در آرایه نتایج گزارش می‌شود.

**پارامترها**

| پارامتر | نوع | الزامی | توضیحات |
|---|---|---|---|
| `posts` | array | بله | آرایه‌ای از اشیاء پست‌ها که هر کدام دارای همان پارامترهای `create_post` هستند. |
| `stop_on_error` | boolean | خیر | اگر `true` باشد، پس از اولین شکست پردازش را متوقف می‌کند. پیش‌فرض `false` است. |

**مثال**

```json
{
  "posts": [
    {
      "title": "About Us",
      "post_type": "page",
      "status": "publish",
      "page_template": "page-full-width.php"
    },
    {
      "title": "Services",
      "post_type": "page",
      "status": "publish"
    },
    {
      "title": "Contact",
      "post_type": "page",
      "status": "publish"
    }
  ]
}
```

**دیروند**

```json
{
  "created": 3,
  "failed": 0,
  "results": [
    { "success": true, "post_id": 42, "title": "About Us" },
    { "success": true, "post_id": 43, "title": "Services" },
    { "success": true, "post_id": 44, "title": "Contact" }
  ]
}
```

---

### `set_featured_image`

یک تصویر برجسته (thumbnail پست) به یک پست یا صفحه موجود اختصاص می‌دهد. شناسه یک فایل موجود در Media Library یا یک آدرس تصویر از راه دور را می‌پذیرد؛ اگر URL ارائه شود، تصویر به صورت خودکار دانلود و وارد می‌شود.

**پارامترها**

| پارامتر | نوع | الزامی | توضیحات |
|---|---|---|---|
| `post_id` | integer | بله | شناسه پستی یا صفحه‌ای که قرار است به‌روز شود. |
| `attachment_id` | integer | خیر | شناسه یک فایل موجود در Media Library. |
| `url` | string | خیر | آدرس تصویر از راه دور برای وارد کردن و تنظیم به عنوان تصویر برجسته. |
| `alt_text` | string | خیر | متن جایگزین که اگر تصویر از URL وارد شود، روی آن اعمال می‌شود. |

باید یکی از `attachment_id` یا `url` را ارائه دهید.

**دیروند:** `{ "success": true, "post_id": 42, "attachment_id": 17 }`

---

### `create_contact_form`

با استفاده از افزونه فرم فعال (Contact Form 7، WPForms، Fluent Forms یا Gravity Forms بسته به نصب بودن)، یک فرم تماس ایجاد می‌کند. یک شورت‌کد برمی‌گرداند که می‌تواند در هر پست یا صفحه‌ای جاسازی شود.

**پارامترها**

## காட்சி পর্যালোচনা (Visual Review)

காட்சி மதிப்பாய்வு (Visual Review) வசதிகள் ஏஜென்ட்டை நேரடி பக்கங்களின் ஸ்கிரீன்ஷாட்களை எடுத்து பகுப்பாய்வு செய்ய அனுமதிக்கின்றன. இது எந்த உலாவல் நீட்டிப்பையும் (browser extension) தேவையில்லாமல், தானியங்கி வடிவமைப்பு மதிப்பாய்வு, முன்/பின் ஒப்பீடுகள் மற்றும் காட்சி பின்னடைவு சோதனைகளை (visual regression checks) மேற்கொள்ள உதவுகிறது.

### `capture_screenshot`

ஒரு குறிப்பிட்ட URL-இல் உள்ள WordPress பக்கத்தின் ஸ்கிரீன்ஷாட்டை சர்வர்-சைட் ஹெலெஸ் பிரவுசரைப் (server-side headless browser) பயன்படுத்தி எடுக்கிறது. படம் Media Library-யில் சேமிக்கப்பட்டு ஒரு CDN URL திருப்பி அனுப்பப்படுகிறது.

**பயன்பாடுகள் (Parameters)**

| அளவுரு | வகை | கட்டாயம் | விளக்கம் |
|---|---|---|---|
| `url` | string | ஆம் | ஸ்கிரீன்ஷாட் எடுக்க வேண்டிய பக்கத்தின் முழுமையான URL, எ.கா: `https://example.com/about/` |
| `width` | integer | இல்லை | பிக்சல்களில் காட்சிப் பகுதி அகலம். இயல்புநிலை `1280` |
| `height` | integer | இல்லை | பிக்சல்களில் காட்சிப் பகுதி உயரம். இயல்புநிலை `800` |
| `full_page` | boolean | இல்லை | வெறும் காட்சிப் பகுதியை மட்டும் எடுக்காமல், முழு ஸ்க்ரோல் செய்யக்கூடிய பக்கத்தையும் கைப்பற்ற வேண்டுமா? இயல்புநிலை `false` |
| `delay_ms` | integer | இல்லை | அனிமேஷன் உள்ள உள்ளடக்கத்திற்குப் பிறகு படம் பிடிக்க காத்திருக்கும் மில்லி விநாடிகள். இயல்புநிலை `500` |
| `label` | string | இல்லை | Media Library-யில் இணைக்கப்பட்ட கோப்புடன் சேமிக்கப்படும் மனிதனால் படிக்கக்கூடிய லேபிள் |

**திரும்பப்பெறுவது (Returns)**

```json
{
  "success": true,
  "attachment_id": 88,
  "url": "https://example.com/wp-content/uploads/2026/04/screenshot-about.png",
  "width": 1280,
  "height": 800
}
```

---

### `compare_screenshots`

இரண்டு ஸ்கிரீன்ஷாட்களை எடுத்து, காட்சி மாற்றங்களைக் காட்டும் ஒரு மதிப்பெண் (visual diff score) மற்றும் மாற்றப்பட்ட பகுதிகளை முன்னிலைப்படுத்தும் ஒரு படம் ஆகியவற்றைத் திருப்பி அளிக்கிறது. வடிவமைப்பு மாற்றம் எதிர்பார்த்த முடிவை உருவாக்கியதா என்பதை உறுதிப்படுத்த அல்லது எதிர்பாராத பின்னடைவுகளைக் கண்டறிய இது பயனுள்ளதாக இருக்கும்.

**பயன்பாடுகள் (Parameters)**

| அளவுரு | வகை | கட்டாயம் | விளக்கம் |
|---|---|---|---|
| `before_url` | string | ஆம் | "முன்னர்" நிலையை கைப்பற்ற வேண்டிய பக்கத்தின் URL |
| `after_url` | string | ஆம் | "பின்" நிலையை கைப்பற்ற வேண்டிய பக்கத்தின் URL. நேரத்தைக் கடந்து ஒப்பிடும்போது இது அதே URL ஆக இருக்கலாம் |
| `width` | integer | இல்லை | இரண்டு ஸ்கிரீன்ஷாட்களுக்கும் காட்சிப் பகுதி அகலம். இயல்புநிலை `1280` |
| `threshold` | float | இல்லை | பிக்சல் வேறுபாட்டு வரம்பு (0.0–1.0). இந்த சகிப்புத்தன்மையுள்ள பிக்சல்கள் மாற்றப்படவில்லை என்று கருதப்படும். இயல்புநிலை `0.1` |

**திரும்பப்பெறுவது (Returns)**

```json
{
  "success": true,
  "diff_score": 0.04,
  "changed_pixels": 2340,
  "total_pixels": 1024000,
  "diff_attachment_id": 91,
  "diff_url": "https://example.com/wp-content/uploads/2026/04/diff-about.png"
}
```

`diff_score` `0.0` என்றால் எந்த மாற்றமும் இல்லை; `1.0` என்றால் ஒவ்வொரு பிக்சலும் மாறியுள்ளது என்று அர்த்தம்.

---

### `review_page_design`

ஒரு பக்கத்தின் ஸ்கிரீன்ஷாட்டை எடுத்து, அதை காட்சி பகுப்பாய்வுக்காக மொழி மாதிரிக்கு (language model) அனுப்புகிறது. இது லேஅவுட் (layout), எழுத்துரு (typography), வண்ணப் பயன்பாடு மற்றும் அணுகல் கவலைகள் (accessibility concerns) ஆகியவற்றைப் பற்றிய கட்டமைக்கப்பட்ட மதிப்பீட்டைத் திருப்பி அளிக்கிறது.

**பயன்பாடுகள் (Parameters)**

| அளவுரு | வகை | கட்டாயம் | விளக்கம் |
|---|---|---|---|
| `url` | string | ஆம் | மதிப்பாய்வு செய்ய வேண்டிய பக்கத்தின் முழுமையான URL |
| `focus` | string | இல்லை | வலியுறுத்தப்பட வேண்டிய மதிப்பாய்வு பகுதிகள், காற்புள்ளிகளால் பிரிக்கப்பட்ட பட்டியல்: `layout`, `typography`, `colour`, `accessibility`, `mobile`. இயல்புநிலை: அனைத்து பகுதிகளும் |
| `width` | integer | இல்லை | காட்சிப் பகுதி அகலம். இயல்புநிலை `1280` |

**திரும்பப்பெறுவது (Returns)**

```json
{
  "success": true,
  "screenshot_url": "https://example.com/wp-content/uploads/2026/04/review-about.png",
  "assessment": {
    "overall": "பக்க அமைப்பு சுத்தமாகவும் படிக்கக்கூடியதாகவும் உள்ளது. இரண்டு அணுகல் சிக்கல்கள் கண்டறியப்பட்டுள்ளன.",
    "layout": "நல்ல காட்சி படிநிலை (visual hierarchy). ஹீரோ பிரிவு முக்கியமானது.",
    "typography": "உடல் உரை 15px — வாசிப்புக்காக 16px ஆக அதிகரிக்கப் பரிந்துரைக்கப்படுகிறது.",
    "colour": "CTA பொத்தானின் மாறுபாடு விகிதம் (#4a90e2 இல் #fff) 3.1:1 — WCAG AA வரம்பான 4.5:1-க்கு கீழே உள்ளது.",
    "accessibility": ["CTA பொத்தானில் குறைந்த மாறுபாடு", "ஹீரோ படத்திற்கு Alt உரை இல்லை"],
    "suggestions": ["WCAG AA ஐ पास செய்ய CTA பொத்தானை #1a5cb0 ஆக இருண்டதாக மாற்றவும்", "ஹீரோ படத்திற்கு விளக்கமான Alt உரையைச் சேர்க்கவும்"]
  }
}
```

---

## நிறுவக்கூடிய திறன்கள் (Installable Abilities)

நிறுவக்கூடிய திறன்கள் பதிவேடு (registry) மூலம் WordPress பிளகின்களாகப் பகிரப்படும் கூடுதல் திறன் தொகுப்புகளை ஏஜென்ட்டை நீட்டிக்க அனுமதிக்கிறது. ஒவ்வொரு தொகுப்பும் நிலையான ability API-ஐப் பயன்படுத்தி ஒன்று அல்லது அதற்கு மேற்பட்ட திறன்களைப் பதிவு செய்கிறது.

### `list_available_abilities`

பதிவேட்டில் நிறுவக்கூடிய திறன் தொகுப்புகளின் பட்டியலைத் திருப்பி அளிக்கிறது.

**பயன்பாடுகள் (Parameters)**

| المعامل | النوع | مطلوب | الوصف |
|---|---|---|---|
| `category` | string | لا | حسب الفئة تصفية: `ecommerce`, `seo`, `media`, `social`, `developer` |

**يُرجع (Returns)**

```json
{
  "packs": [
    {
      "slug": "gratis-ai-agent-woocommerce",
      "name": "WooCommerce Abilities",
      "category": "ecommerce",
      "version": "1.0.0",
      "abilities": ["create_product", "update_pricing", "manage_inventory"],
      "installed": false
    }
  ]
}
```

---

### `install_ability`

من الريجستري (registry) القدرات حزمة تنزيل وتفعيل.

**المعاملات (Parameters)**

| المعامل | النوع | مطلوب | الوصف |
|---|---|---|---|
| `slug` | string | نعم | اسم حزمة إضافة القدرات (Ability pack plugin slug) |

**يُرجع (Returns)** `{ "success": true, "slug": "gratis-ai-agent-woocommerce", "abilities_added": 3 }`

---

### `recommend_plugin`

للبحث في ريجستري القدرات عن أفضل إضافة لاستخدام معين، وبالاختيار، يتم تثبيتها تلقائيًا.

**المعاملات (Parameters)**

| المعامل | النوع | مطلوب | الوصف |
|---|---|---|---|
| `description` | string | نعم | وصف باللغة الطبيعية للوظيفة المطلوبة |
| `install` | boolean | لا | إذا كانت القيمة `true`، يتم تثبيت الإضافة الموصى بها فوراً. القيمة الافتراضية هي `false`. |

**مثال (Example)**

```json
{
  "description": "أحتاج إلى نموذج اتصال بدعم رفع الملفات وحماية من الرسائل المزعجة",
  "install": false
}
```

**يُرجع (Returns)**

```json
{
  "recommendation": {
    "slug": "contact-form-7",
    "name": "Contact Form 7",
    "reason": "مستخدم على نطاق واسع، يدعم رفع الملفات، ويتكامل مع Akismet لتصفية الرسائل المزعجة.",
    "alternatives": ["wpforms-lite", "fluent-forms"]
  }
}
```

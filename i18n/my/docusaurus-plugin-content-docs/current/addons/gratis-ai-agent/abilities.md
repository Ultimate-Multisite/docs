---
title: လုပ်ဆောင်နိုင်စွမ်းများ ရည်ညွှန်းချက်
sidebar_position: 2
_i18n_hash: 1a83460648ea789162af417c6b11eecc
---
# စွမ်းရည်များ ကိုးကားချက် {#abilities-reference}

စွမ်းရည်များသည် Gratis AI Agent က သင့် WordPress တပ်ဆင်မှုတွင် ခေါ်ယူအသုံးပြုနိုင်သော အခြေခံလုပ်ဆောင်ချက်များ ဖြစ်သည်။ စွမ်းရည်တစ်ခုစီသည် JSON schema ကို ဖော်ပြပေးသော မှတ်ပုံတင်ထားသည့် PHP class တစ်ခုဖြစ်သည် — agent သည် လိုအပ်သော parameter များနှင့် စွမ်းရည်က ပြန်ပေးသည့်အရာကို နားလည်ရန် runtime တွင် ဤ schema ကို ဖတ်သည်။

ဤစာမျက်နှာတွင် Gratis AI Agent v1.9.0 နှင့်အတူ ပါဝင်လာသော စွမ်းရည်အားလုံးကို မှတ်တမ်းတင်ထားသည်။

---

## စိတ်ကြိုက် Post Type များ {#custom-post-types}

ဤစွမ်းရည်များသည် agent မှတစ်ဆင့် မှတ်ပုံတင်ထားသော စိတ်ကြိုက် post type များ (CPTs) ကို စီမံသည်။ မှတ်ပုံတင်မှုများကို WordPress options table တွင် သိမ်းထားသောကြောင့် plugin ကို ပိတ်ပြီး ပြန်ဖွင့်သော်လည်း ဆက်လက်တည်ရှိသည်။

### `register_post_type` {#registerposttype}

စိတ်ကြိုက် post type အသစ်တစ်ခုကို မှတ်ပုံတင်သည်။

**Parameter များ**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | post type key (အများဆုံး စာလုံး ၂၀ လုံး၊ စာလုံးအကြီး မပါ၊ space မပါ) |
| `singular_label` | string | Yes | လူဖတ်ရလွယ်သော အနည်းကိန်းအမည်၊ ဥပမာ `Portfolio Item` |
| `plural_label` | string | Yes | လူဖတ်ရလွယ်သော အများကိန်းအမည်၊ ဥပမာ `Portfolio Items` |
| `public` | boolean | No | post type ကို အများပြည်သူ ဝင်ရောက်အသုံးပြုနိုင်မနိုင်။ မူလတန်ဖိုး `true` |
| `supports` | array | No | ပံ့ပိုးမည့် လုပ်ဆောင်ချက်များ: `title`, `editor`, `thumbnail`, `excerpt`, `comments`, `revisions`, `custom-fields`။ မူလတန်ဖိုး `["title","editor"]` |
| `has_archive` | boolean | No | post type archive စာမျက်နှာကို ဖွင့်ထားမထား။ မူလတန်ဖိုး `false` |
| `menu_icon` | string | No | admin menu icon အတွက် Dashicons class သို့မဟုတ် URL။ မူလတန်ဖိုး `"dashicons-admin-post"` |
| `rewrite_slug` | string | No | post type အတွက် URL slug။ မူလတန်ဖိုးသည် `slug` ဖြစ်သည် |

**ဥပမာ**

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

**ပြန်ပေးသည်** `{ "success": true, "slug": "portfolio" }`

---

### `list_post_types` {#listposttypes}

agent မှ မှတ်ပုံတင်ထားသော စိတ်ကြိုက် post type အားလုံးကို ပြန်ပေးသည်။

**Parameter များ** — မရှိ

**ပြန်ပေးသည်**

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

### `delete_post_type` {#deleteposttype}

agent မှ ယခင်က မှတ်ပုံတင်ထားသော စိတ်ကြိုက် post type တစ်ခုကို မှတ်ပုံတင်မှု ဖျက်သည်။ ထိုအမျိုးအစားရှိ ရှိပြီးသား post များသည် database ထဲတွင် ဆက်ရှိနေသော်လည်း post type မှတစ်ဆင့် ဝင်ရောက်အသုံးပြု၍ မရတော့ပါ။

**Parameter များ**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | ဖယ်ရှားမည့် post type key |

**ပြန်ပေးသည်** `{ "success": true, "slug": "portfolio" }`

---

## စိတ်ကြိုက် Taxonomy များ {#custom-taxonomies}

ဤစွမ်းရည်များသည် စိတ်ကြိုက် taxonomy များကို စီမံသည်။ CPTs ကဲ့သို့ပင် taxonomy မှတ်ပုံတင်မှုများကို သိမ်းထားသည်။

### `register_taxonomy` {#registertaxonomy}

စိတ်ကြိုက် taxonomy အသစ်တစ်ခုကို မှတ်ပုံတင်သည်။

**Parameter များ**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | taxonomy key (အများဆုံး စာလုံး ၃၂ လုံး) |
| `singular_label` | string | Yes | လူဖတ်ရလွယ်သော အနည်းကိန်းအမည်၊ ဥပမာ `Project Category` |
| `plural_label` | string | Yes | လူဖတ်ရလွယ်သော အများကိန်းအမည်၊ ဥပမာ `Project Categories` |
| `post_types` | array | Yes | ဤ taxonomy ကို တွဲချိတ်သင့်သော post type slug များ |
| `hierarchical` | boolean | No | category ပုံစံအတွက် `true`၊ tag ပုံစံအတွက် `false`။ မူလတန်ဖိုး `true` |
| `public` | boolean | No | term များကို အများပြည်သူ ဝင်ရောက်အသုံးပြုနိုင်မနိုင်။ မူလတန်ဖိုး `true` |
| `rewrite_slug` | string | No | taxonomy အတွက် URL slug။ မူလတန်ဖိုးသည် `slug` ဖြစ်သည် |

**ဥပမာ**

```json
{
  "slug": "project-category",
  "singular_label": "Project Category",
  "plural_label": "Project Categories",
  "post_types": ["portfolio"],
  "hierarchical": true
}
```

**ပြန်ပေးသည်** `{ "success": true, "slug": "project-category" }`

---

### `list_taxonomies` {#listtaxonomies}

agent မှ မှတ်ပုံတင်ထားသော စိတ်ကြိုက် taxonomy အားလုံးကို ပြန်ပေးသည်။

**Parameter များ** — မရှိ

**ပြန်ပေးသည်**

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

### `delete_taxonomy` {#deletetaxonomy}

agent မှ ယခင်က မှတ်ပုံတင်ထားသော စိတ်ကြိုက် taxonomy တစ်ခုကို မှတ်ပုံတင်မှု ဖျက်သည်။

**Parameter များ**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | ဖယ်ရှားမည့် taxonomy key |

**ပြန်ပေးသည်** `{ "success": true, "slug": "project-category" }`

---

## Design System {#design-system}

Design system စွမ်းရည်များသည် WordPress site ၏ မြင်ကွင်းပြသပုံကို ပြုပြင်သည် — စိတ်ကြိုက် CSS မှ block pattern များနှင့် site logo အထိ ပါဝင်သည်။

### `inject_custom_css` {#injectcustomcss}

`wp_add_inline_style` မှတစ်ဆင့် site ၏ `<head>` ထဲသို့ CSS ထပ်ထည့်သည်။ CSS ကို `gratis_ai_agent_custom_css` option တွင် သိမ်းထားပြီး စွမ်းရည်ကို reset လုပ်သည့်အခါ သန့်ရှင်းစွာ dequeue လုပ်သည်။

**Parameter များ**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `css` | string | Yes | ထည့်သွင်းမည့် မှန်ကန်သော CSS |
| `label` | string | No | debug log များတွင် အသုံးပြုသည့် ဤ CSS block အတွက် လူဖတ်ရလွယ်သော label။ မူလတန်ဖိုး `"agent-injected"` |
| `replace` | boolean | No | `true` ဖြစ်ပါက ယခင်က ထည့်သွင်းထားသော CSS အားလုံးကို အစားထိုးသည်။ မူလတန်ဖိုး `false` (ထပ်ပေါင်းထည့်သည်) |

**ဥပမာ**

```json
{
  "css": ":root { --primary: #1a1a2e; --accent: #e94560; } body { font-family: 'Inter', sans-serif; }",
  "label": "brand-colours",
  "replace": false
}
```

**ပြန်ပေးသည်** `{ "success": true, "bytes": 96 }`

---

### `add_block_pattern` {#addblockpattern}

WordPress pattern library တွင် ပြန်လည်အသုံးပြုနိုင်သော block pattern တစ်ခုကို မှတ်ပုံတင်သည်။

**Parameter များ**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | Pattern identifier၊ ဥပမာ `gratis/hero-dark` |
| `title` | string | Yes | editor တွင် ပြသမည့် လူဖတ်ရလွယ်သော pattern အမည် |
| `content` | string | Yes | pattern အတွက် serialised block markup (HTML) |
| `categories` | array | No | Pattern category slug များ၊ ဥပမာ `["featured", "hero"]` |
| `description` | string | No | pattern picker တွင် ပြသမည့် အကျဉ်းဖော်ပြချက် |
| `keywords` | array | No | ရှာဖွေရေး keyword များ |

**ပြန်ပေးသည်** `{ "success": true, "slug": "gratis/hero-dark" }`

---

### `list_block_patterns` {#listblockpatterns}

agent မှ မှတ်ပုံတင်ထားသော block pattern အားလုံးကို စာရင်းပြသည်။

**Parameter များ** — မရှိ

**ပြန်ပေးသည်**

```json
{
  "patterns": [
    {
      "slug": "gratis/hero-dark",
      "title": "Dark Hero",
      "categories": ["hero"]
    }
  ]
}
```

---

### `set_site_logo` {#setsitelogo}

သတ်မှတ်ထားသော attachment ID သို့မဟုတ် အဝေးရှိ ပုံ URL တစ်ခုဖြင့် WordPress site လိုဂိုကို သတ်မှတ်သည်။ URL ပေးထားပါက ပုံကို ဒေါင်းလုဒ်လုပ်ပြီး Media Library ထဲသို့ ထည့်သွင်းသည်။

**ပါရာမီတာများ**

| ပါရာမီတာ | အမျိုးအစား | လိုအပ်သည် | ဖော်ပြချက် |
|---|---|---|---|
| `attachment_id` | integer | မဟုတ် | ရှိပြီးသား Media Library attachment ၏ ID |
| `url` | string | မဟုတ် | တင်သွင်းပြီး လိုဂိုအဖြစ် သတ်မှတ်ရန် အဝေးရှိ ပုံ URL |

`attachment_id` သို့မဟုတ် `url` ထဲမှ တစ်ခုကို ပေးရမည်။

**ပြန်ပေးသည်** `{ "success": true, "attachment_id": 42 }`

---

### `apply_theme_json_preset` {#applythemejsonpreset}

အမည်ပေးထားသော အရောင်/စာလုံးပုံစံ preset ကို လက်ရှိအသုံးပြုနေသော theme ၏ `theme.json` (သို့မဟုတ် `global-styles`) တွင် အသုံးပြုသည်။ Preset များသည် Gratis AI Agent အဖွဲ့က ထိန်းသိမ်းထားသော စုစည်းထားသည့် အထုပ်များဖြစ်သည်။

**ပါရာမီတာများ**

| ပါရာမီတာ | အမျိုးအစား | လိုအပ်သည် | ဖော်ပြချက် |
|---|---|---|---|
| `preset` | string | ဟုတ် | Preset အမည်၊ ဥပမာ `minimal-dark`, `warm-editorial`, `corporate-blue` |
| `merge` | boolean | မဟုတ် | `true` ဖြစ်ပါက အစားထိုးမည့်အစား ရှိပြီးသား တန်ဖိုးများနှင့် ပေါင်းစည်းသည်။ မူလတန်ဖိုးမှာ `false` ဖြစ်သည် |

**ရရှိနိုင်သော preset များ**

| Preset | ဖော်ပြချက် |
|---|---|
| `minimal-dark` | အနက်နီးပါး နောက်ခံ၊ အဖြူရောင် စာသား၊ တစ်ခုတည်းသော အထူးအရောင် |
| `warm-editorial` | နွေးထွေးသော အဖြူညစ် နောက်ခံ၊ serif ခေါင်းစဉ်များ၊ မြေသားဆန်သော အထူးအရောင်များ |
| `corporate-blue` | ပရော်ဖက်ရှင်နယ် စာလုံးပုံစံနှင့် navy/အဖြူ palette |
| `vibrant-startup` | တောက်ပသော gradient များ၊ ဝိုင်းသောထောင့်များ၊ ခေတ်မီ sans-serif စာလုံးပုံစံ |
| `classic-blog` | သာမန် မီးခိုးရောင်များ၊ ဖတ်ရလွယ်သော စာကြောင်းအမြင့်၊ ရိုးရာ layout အကွာအဝေး |

**ပြန်ပေးသည်** `{ "success": true, "preset": "minimal-dark" }`

---

## ကမ္ဘာလုံးဆိုင်ရာ စတိုင်များ {#global-styles}

ကမ္ဘာလုံးဆိုင်ရာ စတိုင်လုပ်ဆောင်နိုင်မှုများသည် WordPress ကမ္ဘာလုံးဆိုင်ရာ စတိုင်များ API မှတစ်ဆင့် theme.json တန်ဖိုးများကို ဖတ်ပြီး ရေးသည်။ ၎င်းသည် site တစ်ခုလုံးရှိ block များနှင့် template များအားလုံးကို သက်ရောက်စေသည်။

### `get_global_styles` {#getglobalstyles}

လက်ရှိ ကမ္ဘာလုံးဆိုင်ရာ စတိုင်များ configuration ကို ပြန်ပေးသည်။

**ပါရာမီတာများ**

| ပါရာမီတာ | အမျိုးအစား | လိုအပ်သည် | ဖော်ပြချက် |
|---|---|---|---|
| `path` | string | မဟုတ် | သီးခြားတန်ဖိုးတစ်ခုသို့ ညွှန်ပြသော JSON pointer၊ ဥပမာ `/color/palette` သို့မဟုတ် `/typography/fontSizes`။ ချန်ထားပါက object တစ်ခုလုံးကို ပြန်ပေးသည်။ |

**ပြန်ပေးသည်** ကမ္ဘာလုံးဆိုင်ရာ စတိုင်များ object အပြည့်အစုံ သို့မဟုတ် `path` ရှိ တန်ဖိုး။

---

### `set_global_styles` {#setglobalstyles}

ကမ္ဘာလုံးဆိုင်ရာ စတိုင်များ configuration ထဲရှိ တန်ဖိုးတစ်ခု သို့မဟုတ် တစ်ခုထက်ပိုကို အပ်ဒိတ်လုပ်သည်။

**ပါရာမီတာများ**

| ပါရာမီတာ | အမျိုးအစား | လိုအပ်သည် | ဖော်ပြချက် |
|---|---|---|---|
| `path` | string | ဟုတ် | သတ်မှတ်မည့် တန်ဖိုးသို့ ညွှန်ပြသော JSON pointer၊ ဥပမာ `/color/palette` |
| `value` | any | ဟုတ် | တန်ဖိုးအသစ် |

**ဥပမာ** — palette ထဲသို့ အရောင်တစ်ခု ထည့်ပါ

```json
{
  "path": "/color/palette",
  "value": [
    { "slug": "primary", "color": "#1a1a2e", "name": "Primary" },
    { "slug": "accent",  "color": "#e94560", "name": "Accent" }
  ]
}
```

**ပြန်ပေးသည်** `{ "success": true, "path": "/color/palette" }`

---

### `reset_global_styles` {#resetglobalstyles}

အေးဂျင့်က အသုံးပြုထားသော ကမ္ဘာလုံးဆိုင်ရာ စတိုင်ပြောင်းလဲမှုများအားလုံးကို ပြန်လည်သတ်မှတ်ပြီး theme မူလတန်ဖိုးများကို ပြန်ထားသည်။

**ပါရာမီတာများ** — မရှိ

**ပြန်ပေးသည်** `{ "success": true }`

---

## လမ်းညွှန် menu များ {#navigation-menus}

လမ်းညွှန် Menu လုပ်ဆောင်နိုင်မှုများသည် WordPress nav menu များနှင့် ၎င်းတို့၏ item များကို ဖန်တီးပြီး စီမံသည်။

### `create_menu` {#createmenu}

WordPress လမ်းညွှန် menu အသစ်တစ်ခု ဖန်တီးသည်။

**ပါရာမီတာများ**

| ပါရာမီတာ | အမျိုးအစား | လိုအပ်သည် | ဖော်ပြချက် |
|---|---|---|---|
| `name` | string | ဟုတ် | Menu အမည်၊ ဥပမာ `Primary Navigation` |
| `location` | string | မဟုတ် | ဤ menu ကို သတ်မှတ်ပေးမည့် theme တည်နေရာ၊ ဥပမာ `primary` |

**ပြန်ပေးသည်** `{ "success": true, "menu_id": 7 }`

---

### `update_menu` {#updatemenu}

Menu အမည်ကို ပြောင်းသည် သို့မဟုတ် theme တည်နေရာသို့ ပြန်လည်သတ်မှတ်သည်။

**ပါရာမီတာများ**

| ပါရာမီတာ | အမျိုးအစား | လိုအပ်သည် | ဖော်ပြချက် |
|---|---|---|---|
| `menu_id` | integer | ဟုတ် | အပ်ဒိတ်လုပ်မည့် menu ၏ ID |
| `name` | string | မဟုတ် | Menu အမည်အသစ် |
| `location` | string | မဟုတ် | သတ်မှတ်ရန် သို့မဟုတ် ပြန်လည်သတ်မှတ်ရန် theme တည်နေရာ |

**ပြန်ပေးသည်** `{ "success": true, "menu_id": 7 }`

---

### `add_menu_item` {#addmenuitem}

ရှိပြီးသား လမ်းညွှန် menu တစ်ခုထဲသို့ item တစ်ခု ထည့်သည်။

**ပါရာမီတာများ**

| ပါရာမီတာ | အမျိုးအစား | လိုအပ်သည် | ဖော်ပြချက် |
|---|---|---|---|
| `menu_id` | integer | ဟုတ် | ပစ်မှတ် menu ၏ ID |
| `type` | string | ဟုတ် | Item အမျိုးအစား- `custom`, `post_type`, သို့မဟုတ် `taxonomy` |
| `title` | string | မဟုတ် | Menu item အတွက် label (`custom` အမျိုးအစားအတွက် လိုအပ်သည်) |
| `url` | string | မဟုတ် | `custom` item များအတွက် URL |
| `object_id` | integer | မဟုတ် | `post_type`/`taxonomy` item များအတွက် Post ID သို့မဟုတ် term ID |
| `parent_id` | integer | မဟုတ် | ဤ item ကို အောက်တွင် ထည့်သွင်းမည့် menu item ID |
| `position` | integer | မဟုတ် | menu ထဲရှိ သုညမှစသော တည်နေရာ |

**ပြန်ပေးသည်** `{ "success": true, "item_id": 12 }`

---

### `remove_menu_item` {#removemenuitem}

လမ်းညွှန် menu တစ်ခုမှ item တစ်ခုကို ဖယ်ရှားသည်။

**ပါရာမီတာများ**

| ပါရာမီတာ | အမျိုးအစား | လိုအပ်သည် | ဖော်ပြချက် |
|---|---|---|---|
| `item_id` | integer | ဟုတ် | ဖယ်ရှားမည့် menu item ID |

**ပြန်ပေးသည်** `{ "success": true, "item_id": 12 }`

---

### `list_menus` {#listmenus}

WordPress လမ်းညွှန် menu များအားလုံးနှင့် ၎င်းတို့ သတ်မှတ်ထားသော theme တည်နေရာများကို စာရင်းပြသည်။

**ပါရာမီတာများ** — မရှိ

**ပြန်ပေးသည်**

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

## ရွေးချယ်စရာများ စီမံခန့်ခွဲမှု {#options-management}

ရွေးချယ်စရာလုပ်ဆောင်နိုင်မှုများသည် WordPress option များကို `get_option` / `update_option` မှတစ်ဆင့် ဖတ်ပြီး ရေးသည်။ ပါဝင်ပြီးသား safety blocklist သည် အရေးကြီးသော setting များကို မတော်တဆ ပြင်ဆင်မိခြင်းမှ ကာကွယ်သည်။

### `get_option` {#getoption}

WordPress option တစ်ခုကို ဖတ်သည်။

**ပါရာမီတာများ**

| ပါရာမီတာ | အမျိုးအစား | လိုအပ်သည် | ဖော်ပြချက် |
|---|---|---|---|
| `option_name` | string | ဟုတ် | Option key၊ ဥပမာ `blogname` |

**ပြန်ပေးသည်** `{ "option_name": "blogname", "value": "My Site" }`

`option_name` သည် safety blocklist ထဲတွင် ရှိပါက error တစ်ခု ပြန်ပေးသည်။

---

### `set_option` {#setoption}

WordPress option တစ်ခုကို ရေးသည်။

**ပါရာမီတာများ**

| ပါရာမီတာ | အမျိုးအစား | လိုအပ်သည် | ဖော်ပြချက် |
|---|---|---|---|
| `option_name` | string | ဟုတ် | Option key |
| `value` | any | ဟုတ် | တန်ဖိုးအသစ် (array/object များအတွက် အလိုအလျောက် serialise လုပ်သည်) |
| `autoload` | string | မဟုတ် | `"yes"` သို့မဟုတ် `"no"`။ မူလတန်ဖိုးသည် ရှိပြီးသား autoload setting ကို ဆက်လက်ထိန်းထားသည် |

`option_name` သည် လုံခြုံရေး blocklist တွင် ပါဝင်နေပါက error ပြန်ပေးသည်။

**ပြန်ပေးသည်** `{ "success": true, "option_name": "blogname" }`

---

### `delete_option` {#deleteoption}

WordPress option တစ်ခုကို ဖျက်သည်။

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `option_name` | string | Yes | ဖျက်မည့် option key |

`option_name` သည် လုံခြုံရေး blocklist တွင် ပါဝင်နေပါက error ပြန်ပေးသည်။

**ပြန်ပေးသည်** `{ "success": true, "option_name": "my_custom_option" }`

---

### `list_options` {#listoptions}

pattern တစ်ခုနှင့် ကိုက်ညီသော WordPress options များကို စာရင်းပြသည်။

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `pattern` | string | No | option အမည်များကို filter လုပ်ရန် SQL LIKE pattern၊ ဥပမာ `gratis_%`။ မထည့်ထားပါက options အားလုံးကို ပြန်ပေးသည် (database ကြီးများတွင် သတိဖြင့် အသုံးပြုပါ)။ |
| `limit` | integer | No | ရလဒ်အများဆုံး အရေအတွက်။ မူလ `50`၊ အများဆုံး `500` |

**ပြန်ပေးသည်**

```json
{
  "options": [
    { "option_name": "gratis_ai_agent_version", "autoload": "yes" }
  ],
  "total": 1
}
```

---

## အကြောင်းအရာ စီမံခန့်ခွဲမှု {#content-management}

အကြောင်းအရာ စီမံခန့်ခွဲမှု စွမ်းရည်များသည် WordPress posts နှင့် pages များကို ဖန်တီးပြီး ပြင်ဆင်နိုင်သည်။ Post IDs များကို ပြန်ပေးသောကြောင့် multi-ability plans များရှိ နောက်ထပ်အဆင့်များက ဖန်တီးထားသော အကြောင်းအရာကို ရည်ညွှန်းနိုင်သည်။

### `create_post` {#createpost}

WordPress post၊ page သို့မဟုတ် custom post type entry အသစ်တစ်ခု ဖန်တီးသည်။

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `title` | string | Yes | Post ခေါင်းစဉ် |
| `content` | string | No | Post ကိုယ်ထည် — plain text၊ HTML သို့မဟုတ် serialised block markup ကို လက်ခံသည် |
| `status` | string | No | `draft`, `publish`, `pending`, `private`။ မူလ `draft` |
| `post_type` | string | No | Post type slug၊ ဥပမာ `post`, `page` သို့မဟုတ် မှတ်ပုံတင်ထားသော CPT မည်သည့်အရာမဆို။ မူလ `post` |
| `excerpt` | string | No | archives နှင့် search results တွင် ပြသသော အကျဉ်းချုပ် |
| `categories` | array | No | သတ်မှတ်ပေးမည့် category အမည်များ သို့မဟုတ် IDs များ၏ array |
| `tags` | array | No | သတ်မှတ်ပေးမည့် tag အမည်များ သို့မဟုတ် IDs များ၏ array |
| `author` | integer | No | post author အဖြစ် သတ်မှတ်မည့် WordPress user ID။ မူလအနေဖြင့် လက်ရှိ user ဖြစ်သည် |
| `date` | string | No | ISO 8601 format ဖြင့် ထုတ်ဝေမည့် ရက်စွဲ၊ ဥပမာ `2026-05-01T09:00:00` |
| `page_template` | string | No | ဤ post သို့မဟုတ် page တွင် သတ်မှတ်မည့် template file၊ ဥပမာ `page-full-width.php`။ `post_type` သည် `page` ဖြစ်သောအခါ သို့မဟုတ် page templates ကို ပံ့ပိုးသော CPT ဖြစ်သောအခါသာ အဓိပ္ပာယ်ရှိသည်။ |

**ဥပမာ**

```json
{
  "title": "Welcome to Our New Site",
  "content": "<!-- wp:paragraph --><p>Hello world!</p><!-- /wp:paragraph -->",
  "status": "publish",
  "post_type": "page",
  "page_template": "page-full-width.php"
}
```

**ပြန်ပေးသည်** `{ "success": true, "post_id": 42, "permalink": "https://example.com/welcome/" }`

---

### `update_post` {#updatepost}

ရှိပြီးသား WordPress post သို့မဟုတ် page တစ်ခုကို အပ်ဒိတ်လုပ်သည်။

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `post_id` | integer | Yes | အပ်ဒိတ်လုပ်မည့် post ၏ ID |
| `title` | string | No | Post ခေါင်းစဉ်အသစ် |
| `content` | string | No | Post ကိုယ်ထည်အသစ် |
| `status` | string | No | status အသစ်: `draft`, `publish`, `pending`, `private` |
| `excerpt` | string | No | excerpt အသစ် |
| `categories` | array | No | category စာရင်းတစ်ခုလုံးကို ဤအမည်များ သို့မဟုတ် IDs များ၏ array ဖြင့် အစားထိုးသည် |
| `tags` | array | No | tag စာရင်းတစ်ခုလုံးကို ဤအမည်များ သို့မဟုတ် IDs များ၏ array ဖြင့် အစားထိုးသည် |
| `page_template` | string | No | ဤ post သို့မဟုတ် page တွင် သတ်မှတ်မည့် template file အသစ်၊ ဥပမာ `page-full-width.php`။ template သတ်မှတ်ချက်ကို ဖယ်ရှားပြီး theme မူလသတ်မှတ်ချက်သို့ ပြန်သွားရန် empty string ပေးပါ။ |

**ဥပမာ** — ဖန်တီးပြီးနောက် template ပြောင်းရန်

```json
{
  "post_id": 42,
  "page_template": "page-full-width.php"
}
```

**ပြန်ပေးသည်** `{ "success": true, "post_id": 42 }`

---

### `batch_create_posts` {#batchcreateposts}

ability call တစ်ကြိမ်တည်းဖြင့် posts အများအပြား ဖန်တီးပြီး site တည်ဆောက်မှုများ သို့မဟုတ် အကြောင်းအရာ အစုလိုက် import လုပ်ရာတွင် round-trips ကို လျှော့ချသည်။ Posts များကို အစဉ်လိုက် ဖန်တီးသည်။ တစ်ခု မအောင်မြင်ပါက အခြားများ ဆက်လက်လုပ်ဆောင်ပြီး မအောင်မြင်မှုကို results array တွင် ဖော်ပြသည်။

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `posts` | array | Yes | post objects များ၏ array။ တစ်ခုချင်းစီသည် `create_post` နှင့် တူညီသော parameters များကို လက်ခံသည် |
| `stop_on_error` | boolean | No | `true` ဖြစ်ပါက ပထမဆုံး မအောင်မြင်မှုနောက်တွင် processing ကို ရပ်ပါ။ မူလ `false` |

**ဥပမာ**

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

**ပြန်ပေးသည်**

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

### `set_featured_image` {#setfeaturedimage}

ရှိပြီးသား post သို့မဟုတ် page တစ်ခုသို့ featured image (post thumbnail) သတ်မှတ်သည်။ ရှိပြီးသား Media Library attachment ID သို့မဟုတ် remote image URL ကို လက်ခံသည်။ URL ပေးထားပါက image ကို အလိုအလျောက် download လုပ်ပြီး import လုပ်သည်။

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `post_id` | integer | Yes | အပ်ဒိတ်လုပ်မည့် post သို့မဟုတ် page ၏ ID |
| `attachment_id` | integer | No | ရှိပြီးသား Media Library attachment ၏ ID |
| `url` | string | No | import လုပ်ပြီး featured image အဖြစ် သတ်မှတ်မည့် remote image URL |
| `alt_text` | string | No | URL မှ import လုပ်ထားပါက attachment တွင် အသုံးပြုမည့် Alt text |

`attachment_id` သို့မဟုတ် `url` ထဲမှ တစ်ခုကို ပေးရမည်။

**ပြန်ပေးသည်** `{ "success": true, "post_id": 42, "attachment_id": 17 }`

---

### `create_contact_form` {#createcontactform}

ထည့်သွင်းထားသည့်အရာပေါ်မူတည်၍ active form plugin (Contact Form 7, WPForms, Fluent Forms သို့မဟုတ် Gravity Forms) ကို အသုံးပြုပြီး contact form တစ်ခု ဖန်တီးသည်။ မည်သည့် post သို့မဟုတ် page တွင်မဆို ထည့်သွင်းနိုင်သော shortcode တစ်ခုကို ပြန်ပေးသည်။

**Parameters**

| ပါရာမီတာ | အမျိုးအစား | လိုအပ်သည် | ဖော်ပြချက် |
|---|---|---|---|
| `title` | string | ဟုတ် | form plugin admin တွင် ပြသမည့် form အမည် |
| `fields` | array | ဟုတ် | form field များ၏ အစဉ်လိုက်စာရင်း (အောက်ရှိ Field object ကို ကြည့်ပါ) |
| `recipient` | string | မဟုတ် | တင်သွင်းချက်များ လက်ခံရန် အီးမေးလ်လိပ်စာ။ ပုံသေမှာ WordPress admin အီးမေးလ် ဖြစ်သည် |
| `subject` | string | မဟုတ် | အီးမေးလ် subject စာကြောင်း။ Contact Form 7 အသုံးပြုသည့်အခါ `[your-name]` နှင့် `[your-subject]` placeholders များကို ထောက်ပံ့သည် |
| `confirmation_message` | string | မဟုတ် | တင်သွင်းမှု အောင်မြင်ပြီးနောက် ပြသမည့် စာတို။ ပုံသေ: `"Thank you for your message. We'll be in touch soon."` |

**Field object**

| ကီး | အမျိုးအစား | လိုအပ်သည် | ဖော်ပြချက် |
|---|---|---|---|
| `name` | string | ဟုတ် | အတွင်းပိုင်း field အမည် / စက်သုံး ကီး |
| `label` | string | ဟုတ် | form ပေါ်တွင် ပြသမည့် လူဖတ်နိုင်သော label |
| `type` | string | ဟုတ် | `text`, `email`, `tel`, `textarea`, `select`, `checkbox`, `radio`, `file`, `date` |
| `required` | boolean | မဟုတ် | တင်သွင်းမှုမပြုမီ field ကို မဖြစ်မနေ ဖြည့်ရမည်လား။ ပုံသေ `false` |
| `options` | array | မဟုတ် | `select`, `checkbox`, နှင့် `radio` field များအတွက် ရွေးချယ်စရာများ |
| `placeholder` | string | မဟုတ် | စာသားအမျိုးအစား input များအတွက် placeholder စာသား |

**ဥပမာ**

```json
{
  "title": "Restaurant Booking Enquiry",
  "fields": [
    { "name": "your-name",    "label": "Name",             "type": "text",     "required": true },
    { "name": "your-email",   "label": "Email",            "type": "email",    "required": true },
    { "name": "party-size",   "label": "Party size",       "type": "select",   "options": ["1–2", "3–5", "6–10", "10+"] },
    { "name": "your-message", "label": "Special requests", "type": "textarea", "required": false }
  ],
  "recipient": "bookings@example.com",
  "subject": "New booking enquiry from [your-name]"
}
```

**ပြန်ပေးသည်**

```json
{
  "success": true,
  "form_id": 3,
  "shortcode": "[contact-form-7 id=\"3\" title=\"Restaurant Booking Enquiry\"]"
}
```

---

## မြင်ကွင်းဆိုင်ရာ ပြန်လည်သုံးသပ်မှု {#visual-review}

မြင်ကွင်းဆိုင်ရာ ပြန်လည်သုံးသပ်မှု စွမ်းရည်များသည် agent ကို တိုက်ရိုက် page များ၏ screenshot များ ရိုက်ကူးပြီး ခွဲခြမ်းစိတ်ဖြာနိုင်စေသည်။ ထို့ကြောင့် browser extension မလိုအပ်ဘဲ ကိုယ်တိုင်လုပ်ဆောင်နိုင်သော ဒီဇိုင်းပြန်လည်သုံးသပ်မှု၊ မပြောင်းမီ/ပြောင်းပြီး နှိုင်းယှဉ်မှုများနှင့် မြင်ကွင်းဆိုင်ရာ regression စစ်ဆေးမှုများကို လုပ်နိုင်သည်။

### `capture_screenshot` {#capturescreenshot}

ပေးထားသော URL ရှိ WordPress page တစ်ခု၏ screenshot ကို server-side headless browser ဖြင့် ရိုက်ကူးသည်။ ပုံကို Media Library တွင် သိမ်းပြီး CDN URL ကို ပြန်ပေးသည်။

**ပါရာမီတာများ**

| ပါရာမီတာ | အမျိုးအစား | လိုအပ်သည် | ဖော်ပြချက် |
|---|---|---|---|
| `url` | string | ဟုတ် | screenshot ရိုက်မည့် page ၏ URL အပြည့်အစုံ၊ ဥပမာ `https://example.com/about/` |
| `width` | integer | မဟုတ် | pixel ဖြင့် viewport အကျယ်။ ပုံသေ `1280` |
| `height` | integer | မဟုတ် | pixel ဖြင့် viewport အမြင့်။ ပုံသေ `800` |
| `full_page` | boolean | မဟုတ် | viewport သာမက scroll လုပ်နိုင်သော page အပြည့်ကို ရိုက်ကူးမည်။ ပုံသေ `false` |
| `delay_ms` | integer | မဟုတ် | page တင်ပြီးနောက် ရိုက်ကူးမီ စောင့်မည့် မီလီစက္ကန့်။ လှုပ်ရှားမှုပါသော အကြောင်းအရာအတွက် အသုံးဝင်သည်။ ပုံသေ `500` |
| `label` | string | မဟုတ် | Media Library တွင် attachment နှင့်အတူ သိမ်းမည့် လူဖတ်နိုင်သော label |

**ပြန်ပေးသည်**

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

### `compare_screenshots` {#comparescreenshots}

screenshot နှစ်ခုကို ယူပြီး ပြောင်းလဲသွားသော နေရာများကို ဖော်ပြထားသည့် diff ပုံနှင့်အတူ မြင်ကွင်း diff score ကို ပြန်ပေးသည်။ ဒီဇိုင်းပြောင်းလဲမှုက မျှော်မှန်းထားသည့် ရလဒ် ထွက်ခဲ့ကြောင်း အတည်ပြုရန် သို့မဟုတ် မရည်ရွယ်ထားသော regression များကို ရှာဖွေရန် အသုံးဝင်သည်။

**ပါရာမီတာများ**

| ပါရာမီတာ | အမျိုးအစား | လိုအပ်သည် | ဖော်ပြချက် |
|---|---|---|---|
| `before_url` | string | ဟုတ် | "before" အခြေအနေအဖြစ် ရိုက်ကူးမည့် page ၏ URL |
| `after_url` | string | ဟုတ် | "after" အခြေအနေအဖြစ် ရိုက်ကူးမည့် page ၏ URL။ အချိန်ကာလခြားပြီး နှိုင်းယှဉ်ပါက URL တူနိုင်သည် |
| `width` | integer | မဟုတ် | ရိုက်ကူးမှု နှစ်ခုစလုံးအတွက် viewport အကျယ်။ ပုံသေ `1280` |
| `threshold` | float | မဟုတ် | pixel ကွာခြားမှု threshold (0.0–1.0)။ ဤခံနိုင်ရည်အတွင်းရှိ pixel များကို မပြောင်းလဲဟု သတ်မှတ်သည်။ ပုံသေ `0.1` |

**ပြန်ပေးသည်**

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

`diff_score` သည် `0.0` ဖြစ်ပါက မြင်သာသော ပြောင်းလဲမှု မရှိဟု ဆိုလိုသည်။ `1.0` ဖြစ်ပါက pixel တိုင်း ပြောင်းလဲသွားသည်ဟု ဆိုလိုသည်။

---

### `review_page_design` {#reviewpagedesign}

page တစ်ခု၏ screenshot ကို ရိုက်ကူးပြီး မြင်ကွင်းခွဲခြမ်းစိတ်ဖြာမှုအတွက် language model သို့ ပေးပို့သည်။ layout၊ typography၊ အရောင်အသုံးပြုမှုနှင့် accessibility စိုးရိမ်ချက်များကို ဖုံးလွှမ်းသော ဖွဲ့စည်းထားသည့် အကဲဖြတ်ချက်ကို ပြန်ပေးသည်။

**ပါရာမီတာများ**

| ပါရာမီတာ | အမျိုးအစား | လိုအပ်သည် | ဖော်ပြချက် |
|---|---|---|---|
| `url` | string | ဟုတ် | ပြန်လည်သုံးသပ်မည့် page ၏ URL အပြည့်အစုံ |
| `focus` | string | မဟုတ် | အလေးပေးရမည့် ပြန်လည်သုံးသပ်ဧရိယာများကို comma ခြားထားသော စာရင်း: `layout`, `typography`, `colour`, `accessibility`, `mobile`။ ပုံသေ: ဧရိယာအားလုံး |
| `width` | integer | မဟုတ် | viewport အကျယ်။ ပုံသေ `1280` |

**ပြန်ပေးသည်**

```json
{
  "success": true,
  "screenshot_url": "https://example.com/wp-content/uploads/2026/04/review-about.png",
  "assessment": {
    "overall": "The page structure is clean and readable. Two accessibility issues detected.",
    "layout": "Good visual hierarchy. Hero section is prominent.",
    "typography": "Body text is 15px — consider increasing to 16px for readability.",
    "colour": "Contrast ratio on the CTA button (#fff on #4a90e2) is 3.1:1 — below the WCAG AA threshold of 4.5:1.",
    "accessibility": ["Low contrast on CTA button", "Missing alt text on hero image"],
    "suggestions": ["Darken the CTA button to #1a5cb0 to pass WCAG AA", "Add descriptive alt text to the hero image"]
  }
}
```

---

## ထည့်သွင်းနိုင်သော စွမ်းရည်များ {#installable-abilities}

ထည့်သွင်းနိုင်သော စွမ်းရည် Registry သည် WordPress plugin များအဖြစ် ဖြန့်ဝေထားသော ထပ်တိုး စွမ်းရည် pack များဖြင့် agent ကို တိုးချဲ့နိုင်စေသည်။ pack တစ်ခုစီသည် standard ability API ကို အသုံးပြု၍ စွမ်းရည်တစ်ခု သို့မဟုတ် တစ်ခုထက်ပို၍ မှတ်ပုံတင်သည်။

### `list_available_abilities` {#listavailableabilities}

registry မှ ထည့်သွင်းနိုင်သော စွမ်းရည် pack များ၏ catalog ကို ပြန်ပေးသည်။

**ပါရာမီတာများ**

| Parameter | Type | လိုအပ်သည် | ဖော်ပြချက် |
|---|---|---|---|
| `category` | string | မလိုအပ်ပါ | အမျိုးအစားဖြင့် စစ်ထုတ်ပါ: `ecommerce`, `seo`, `media`, `social`, `developer` |

**ပြန်ပေးသောတန်ဖိုး**

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

### `install_ability` {#installability}

registry မှ စွမ်းရည်အစုတစ်ခုကို ဒေါင်းလုဒ်လုပ်ပြီး အသက်သွင်းသည်။

**Parameter များ**

| Parameter | Type | လိုအပ်သည် | ဖော်ပြချက် |
|---|---|---|---|
| `slug` | string | လိုအပ်သည် | စွမ်းရည်အစု ပလပ်အင် slug |

**ပြန်ပေးသောတန်ဖိုး** `{ "success": true, "slug": "gratis-ai-agent-woocommerce", "abilities_added": 3 }`

---

### `recommend_plugin` {#recommendplugin}

ဖော်ပြထားသော အသုံးပြုမှုအခြေအနေအတွက် အကောင်းဆုံး ပလပ်အင်ကို ရှာရန် စွမ်းရည် registry ကို မေးမြန်းပြီး၊ ရွေးချယ်လျှင် ၎င်းကို တပ်ဆင်သည်။

**Parameter များ**

| Parameter | Type | လိုအပ်သည် | ဖော်ပြချက် |
|---|---|---|---|
| `description` | string | လိုအပ်သည် | လိုချင်သော လုပ်ဆောင်နိုင်စွမ်း၏ သဘာဝဘာသာစကား ဖော်ပြချက် |
| `install` | boolean | မလိုအပ်ပါ | `true` ဖြစ်လျှင် အကြံပြုထားသော ပလပ်အင်ကို ချက်ချင်း တပ်ဆင်သည်။ မူလတန်ဖိုးမှာ `false` ဖြစ်သည် |

**ဥပမာ**

```json
{
  "description": "I need a contact form with file upload support and spam protection",
  "install": false
}
```

**ပြန်ပေးသောတန်ဖိုး**

```json
{
  "recommendation": {
    "slug": "contact-form-7",
    "name": "Contact Form 7",
    "reason": "Widely adopted, supports file uploads, and integrates with Akismet for spam filtering.",
    "alternatives": ["wpforms-lite", "fluent-forms"]
  }
}
```

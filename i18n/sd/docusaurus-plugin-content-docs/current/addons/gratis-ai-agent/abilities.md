---
title: صلاحيتن جو حوالو
sidebar_position: 2
_i18n_hash: 1a83460648ea789162af417c6b11eecc
---
# صلاحيتن جو حوالو

صلاحيتون اهي بنيادي عمل آهن جيڪي Gratis AI Agent توهان جي WordPress انسٽاليشن تي هلائي سگهي ٿو. هر صلاحيت هڪ رجسٽر ٿيل PHP ڪلاس آهي جيڪو JSON اسڪيما ظاهر ڪري ٿو — ايجنٽ هي اسڪيما هلڻ وقت پڙهي ٿو ته سمجهي سگهي ته ڪهڙا پيرا ميٽر گهربل آهن ۽ صلاحيت ڇا واپس ڪري ٿي.

هي صفحو Gratis AI Agent v1.9.0 سان گڏ ايندڙ سڀني صلاحيتن کي دستاويز ڪري ٿو.

---

## ڪسٽم پوسٽ قسمن {#custom-post-types}

اهي صلاحيتون ايجنٽ ذريعي رجسٽر ڪيل ڪسٽم پوسٽ قسمن (CPTs) کي سنڀالين ٿيون. رجسٽريشنون WordPress آپشنز ٽيبل ۾ محفوظ رهن ٿيون، تنهنڪري اهي plugin کي غيرفعال ۽ ٻيهر فعال ڪرڻ کان پوءِ به برقرار رهن ٿيون.

### `register_post_type` {#registerposttype}

نئون ڪسٽم پوسٽ قسم رجسٽر ڪري ٿو.

**پيرا ميٽر**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | پوسٽ قسم جي ڪي (وڌ ۾ وڌ 20 اکر، وڏا اکر نه، خال نه) |
| `singular_label` | string | Yes | انسان لاءِ پڙهڻ جوڳو واحد نالو، مثال طور `Portfolio Item` |
| `plural_label` | string | Yes | انسان لاءِ پڙهڻ جوڳو جمع نالو، مثال طور `Portfolio Items` |
| `public` | boolean | No | ڇا پوسٽ قسم عوامي طور رسائي لائق آهي. ڊفالٽ `true` |
| `supports` | array | No | سپورٽ ڪرڻ لاءِ خاصيتون: `title`, `editor`, `thumbnail`, `excerpt`, `comments`, `revisions`, `custom-fields`. ڊفالٽ `["title","editor"]` |
| `has_archive` | boolean | No | ڇا پوسٽ قسم جي آرڪائيو صفحي کي فعال ڪيو ويو آهي. ڊفالٽ `false` |
| `menu_icon` | string | No | ايڊمن مينيو آئڪن لاءِ Dashicons ڪلاس يا URL. ڊفالٽ `"dashicons-admin-post"` |
| `rewrite_slug` | string | No | پوسٽ قسم لاءِ URL سلگ. ڊفالٽ `slug` |

**مثال**

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

**واپس ڪري ٿو** `{ "success": true, "slug": "portfolio" }`

---

### `list_post_types` {#listposttypes}

ايجنٽ پاران رجسٽر ڪيل سڀ ڪسٽم پوسٽ قسم واپس ڪري ٿو.

**پيرا ميٽر** — ڪوبه نه

**واپس ڪري ٿو**

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

ايجنٽ پاران اڳ ۾ رجسٽر ڪيل ڪسٽم پوسٽ قسم کي غير رجسٽر ڪري ٿو. انهي قسم جون موجوده پوسٽون ڊيٽابيس ۾ رهنديون، پر پوسٽ قسم ذريعي وڌيڪ رسائي لائق نه رهنديون.

**پيرا ميٽر**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | هٽائڻ لاءِ پوسٽ قسم جي ڪي |

**واپس ڪري ٿو** `{ "success": true, "slug": "portfolio" }`

---

## ڪسٽم ٽيڪسانوميون {#custom-taxonomies}

اهي صلاحيتون ڪسٽم ٽيڪسانوميون سنڀالين ٿيون. CPTs وانگر، ٽيڪسانومي رجسٽريشنون محفوظ رهن ٿيون.

### `register_taxonomy` {#registertaxonomy}

نئين ڪسٽم ٽيڪسانومي رجسٽر ڪري ٿو.

**پيرا ميٽر**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | ٽيڪسانومي ڪي (وڌ ۾ وڌ 32 اکر) |
| `singular_label` | string | Yes | انسان لاءِ پڙهڻ جوڳو واحد نالو، مثال طور `Project Category` |
| `plural_label` | string | Yes | انسان لاءِ پڙهڻ جوڳو جمع نالو، مثال طور `Project Categories` |
| `post_types` | array | Yes | پوسٽ قسم جا سلگ جن سان هي ٽيڪسانومي ڳنڍجڻ گهرجي |
| `hierarchical` | boolean | No | ڪيٽيگري انداز لاءِ `true`، ٽيگ انداز لاءِ `false`. ڊفالٽ `true` |
| `public` | boolean | No | ڇا اصطلاح عوامي طور رسائي لائق آهن. ڊفالٽ `true` |
| `rewrite_slug` | string | No | ٽيڪسانومي لاءِ URL سلگ. ڊفالٽ `slug` |

**مثال**

```json
{
  "slug": "project-category",
  "singular_label": "Project Category",
  "plural_label": "Project Categories",
  "post_types": ["portfolio"],
  "hierarchical": true
}
```

**واپس ڪري ٿو** `{ "success": true, "slug": "project-category" }`

---

### `list_taxonomies` {#listtaxonomies}

ايجنٽ پاران رجسٽر ڪيل سڀ ڪسٽم ٽيڪسانوميون واپس ڪري ٿو.

**پيرا ميٽر** — ڪوبه نه

**واپس ڪري ٿو**

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

ايجنٽ پاران اڳ ۾ رجسٽر ڪيل ڪسٽم ٽيڪسانومي کي غير رجسٽر ڪري ٿو.

**پيرا ميٽر**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | هٽائڻ لاءِ ٽيڪسانومي ڪي |

**واپس ڪري ٿو** `{ "success": true, "slug": "project-category" }`

---

## ڊيزائن سسٽم {#design-system}

ڊيزائن سسٽم جون صلاحيتون WordPress site جي بصري پيشڪش کي تبديل ڪن ٿيون — ڪسٽم CSS کان وٺي بلاڪ پيٽرنن ۽ site لوگو تائين.

### `inject_custom_css` {#injectcustomcss}

`wp_add_inline_style` ذريعي site جي `<head>` ۾ CSS شامل ڪري ٿو. CSS کي `gratis_ai_agent_custom_css` آپشن ۾ محفوظ ڪيو ويندو آهي ۽ جڏهن صلاحيت ري سيٽ ڪئي وڃي ٿي ته صاف طريقي سان dequeue ڪيو ويندو آهي.

**پيرا ميٽر**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `css` | string | Yes | داخل ڪرڻ لاءِ صحيح CSS |
| `label` | string | No | هن CSS بلاڪ لاءِ انسان لاءِ پڙهڻ جوڳو ليبل، debug لاگس ۾ استعمال ٿيندو. ڊفالٽ `"agent-injected"` |
| `replace` | boolean | No | جيڪڏهن `true`، اڳ ۾ داخل ڪيل سڀ CSS مٽائي ٿو. ڊفالٽ `false` (شامل ڪري ٿو) |

**مثال**

```json
{
  "css": ":root { --primary: #1a1a2e; --accent: #e94560; } body { font-family: 'Inter', sans-serif; }",
  "label": "brand-colours",
  "replace": false
}
```

**واپس ڪري ٿو** `{ "success": true, "bytes": 96 }`

---

### `add_block_pattern` {#addblockpattern}

WordPress پيٽرن لائبريري ۾ ٻيهر استعمال لائق بلاڪ پيٽرن رجسٽر ڪري ٿو.

**پيرا ميٽر**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | پيٽرن سڃاڻپ ڪندڙ، مثال طور `gratis/hero-dark` |
| `title` | string | Yes | ايڊيٽر ۾ ڏيکاريل انسان لاءِ پڙهڻ جوڳو پيٽرن نالو |
| `content` | string | Yes | پيٽرن لاءِ سيريلائزڊ بلاڪ مارڪ اپ (HTML) |
| `categories` | array | No | پيٽرن ڪيٽيگري سلگ، مثال طور `["featured", "hero"]` |
| `description` | string | No | پيٽرن چونڊيندڙ ۾ ڏيکاريل مختصر وضاحت |
| `keywords` | array | No | ڳولا جا اهم لفظ |

**واپس ڪري ٿو** `{ "success": true, "slug": "gratis/hero-dark" }`

---

### `list_block_patterns` {#listblockpatterns}

ايجنٽ پاران رجسٽر ڪيل سڀ بلاڪ پيٽرن فهرست ڪري ٿو.

**پيرا ميٽر** — ڪوبه نه

**واپس ڏئي ٿو**

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

WordPress سائيٽ جو لوگو ڏنل attachment ID يا پري واري تصوير جي URL تي سيٽ ڪري ٿو. جڏهن URL ڏني وڃي ٿي، تصوير ڊائونلوڊ ڪري Media Library ۾ درآمد ڪئي وڃي ٿي.

**پيرا ميٽر**

| پيرا ميٽر | قسم | گهربل | وضاحت |
|---|---|---|---|
| `attachment_id` | integer | نه | موجوده Media Library attachment جو ID |
| `url` | string | نه | درآمد ڪرڻ ۽ لوگو طور سيٽ ڪرڻ لاءِ پري واري تصوير جي URL |

`attachment_id` يا `url` مان هڪ مهيا ڪرڻ لازمي آهي.

**واپس ڏئي ٿو** `{ "success": true, "attachment_id": 42 }`

---

### `apply_theme_json_preset` {#applythemejsonpreset}

فعال ٿيم جي `theme.json` (يا `global-styles`) تي نالي وارو رنگ/ٽائپوگرافي preset لاڳو ڪري ٿو. Presets اهي چونڊيل بنڊل آهن جيڪي Gratis AI Agent ٽيم سنڀالي ٿي.

**پيرا ميٽر**

| پيرا ميٽر | قسم | گهربل | وضاحت |
|---|---|---|---|
| `preset` | string | ها | Preset جو نالو، مثال طور `minimal-dark`, `warm-editorial`, `corporate-blue` |
| `merge` | boolean | نه | جيڪڏهن `true` هجي، ته مٽائڻ بدران موجوده قدرن سان merge ڪريو. ڊفالٽ `false` |

**دستياب presets**

| Preset | وضاحت |
|---|---|
| `minimal-dark` | لڳ ڀڳ ڪارو پسمنظر، اڇو متن، هڪڙو accent رنگ |
| `warm-editorial` | گرم off-white پسمنظر، serif هيڊنگون، مٽي جهڙا accent رنگ |
| `corporate-blue` | پيشور ٽائپوگرافي سان navy ۽ اڇي palette |
| `vibrant-startup` | روشن gradients، گول ڪنڊون، جديد sans-serif type |
| `classic-blog` | غير جانبدار ڀورا رنگ، آرامده line-height، روايتي layout spacing |

**واپس ڏئي ٿو** `{ "success": true, "preset": "minimal-dark" }`

---

## Global Styles {#global-styles}

Global Styles صلاحيتون WordPress Global Styles API ذريعي theme.json جون قدرون پڙهن ۽ لکن ٿيون، جنهن سان سڄي سائيٽ ۾ سڀ blocks ۽ templates متاثر ٿين ٿا.

### `get_global_styles` {#getglobalstyles}

موجوده global styles ترتيب واپس ڏئي ٿو.

**پيرا ميٽر**

| پيرا ميٽر | قسم | گهربل | وضاحت |
|---|---|---|---|
| `path` | string | نه | ڪنهن مخصوص قدر ڏانهن JSON pointer، مثال طور `/color/palette` يا `/typography/fontSizes`. جيڪڏهن ڇڏي ڏنو وڃي ته پورو object واپس ڏئي ٿو. |

**واپس ڏئي ٿو** پورو global styles object يا `path` تي موجود قدر.

---

### `set_global_styles` {#setglobalstyles}

global styles ترتيب ۾ هڪ يا وڌيڪ قدرون اپڊيٽ ڪري ٿو.

**پيرا ميٽر**

| پيرا ميٽر | قسم | گهربل | وضاحت |
|---|---|---|---|
| `path` | string | ها | سيٽ ڪرڻ واري قدر ڏانهن JSON pointer، مثال طور `/color/palette` |
| `value` | any | ها | نئين قدر |

**مثال** — palette ۾ هڪ رنگ شامل ڪريو

```json
{
  "path": "/color/palette",
  "value": [
    { "slug": "primary", "color": "#1a1a2e", "name": "Primary" },
    { "slug": "accent",  "color": "#e94560", "name": "Accent" }
  ]
}
```

**واپس ڏئي ٿو** `{ "success": true, "path": "/color/palette" }`

---

### `reset_global_styles` {#resetglobalstyles}

ايجنٽ پاران لاڳو ڪيل سڀ global styles تبديليون reset ڪري ٿو، ٿيم جا ڊفالٽ بحال ڪندي.

**پيرا ميٽر** — ڪوبه نه

**واپس ڏئي ٿو** `{ "success": true }`

---

## Navigation Menus {#navigation-menus}

Navigation Menu صلاحيتون WordPress nav menus ۽ انهن جون شيون ٺاهين ۽ سنڀالين ٿيون.

### `create_menu` {#createmenu}

نئون WordPress navigation menu ٺاهي ٿو.

**پيرا ميٽر**

| پيرا ميٽر | قسم | گهربل | وضاحت |
|---|---|---|---|
| `name` | string | ها | Menu جو نالو، مثال طور `Primary Navigation` |
| `location` | string | نه | هن menu کي تفويض ڪرڻ لاءِ ٿيم location، مثال طور `primary` |

**واپس ڏئي ٿو** `{ "success": true, "menu_id": 7 }`

---

### `update_menu` {#updatemenu}

menu جو نالو تبديل ڪري ٿو يا ان کي ٿيم location ڏانهن ٻيهر تفويض ڪري ٿو.

**پيرا ميٽر**

| پيرا ميٽر | قسم | گهربل | وضاحت |
|---|---|---|---|
| `menu_id` | integer | ها | اپڊيٽ ڪرڻ واري menu جو ID |
| `name` | string | نه | نئون menu نالو |
| `location` | string | نه | تفويض يا ٻيهر تفويض ڪرڻ لاءِ ٿيم location |

**واپس ڏئي ٿو** `{ "success": true, "menu_id": 7 }`

---

### `add_menu_item` {#addmenuitem}

موجوده navigation menu ۾ هڪ شيءِ شامل ڪري ٿو.

**پيرا ميٽر**

| پيرا ميٽر | قسم | گهربل | وضاحت |
|---|---|---|---|
| `menu_id` | integer | ها | هدف menu جو ID |
| `type` | string | ها | شيءِ جو قسم: `custom`, `post_type`, يا `taxonomy` |
| `title` | string | نه | menu item لاءِ ليبل (`custom` قسم لاءِ گهربل) |
| `url` | string | نه | `custom` شين لاءِ URL |
| `object_id` | integer | نه | `post_type`/`taxonomy` شين لاءِ Post ID يا term ID |
| `parent_id` | integer | نه | اهو menu item ID جنهن هيٺ هيءَ شيءِ nested ٿيندي |
| `position` | integer | نه | menu ۾ zero-based position |

**واپس ڏئي ٿو** `{ "success": true, "item_id": 12 }`

---

### `remove_menu_item` {#removemenuitem}

navigation menu مان هڪ شيءِ هٽائي ٿو.

**پيرا ميٽر**

| پيرا ميٽر | قسم | گهربل | وضاحت |
|---|---|---|---|
| `item_id` | integer | ها | هٽائڻ لاءِ menu item ID |

**واپس ڏئي ٿو** `{ "success": true, "item_id": 12 }`

---

### `list_menus` {#listmenus}

سڀ WordPress navigation menus جي فهرست ڏيکاري ٿو، انهن جي تفويض ڪيل ٿيم locations سميت.

**پيرا ميٽر** — ڪوبه نه

**واپس ڏئي ٿو**

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

## Options Management {#options-management}

Options صلاحيتون `get_option` / `update_option` ذريعي WordPress options پڙهن ۽ لکن ٿيون. ٺهيل-in safety blocklist نازڪ settings جي حادثاتي تبديلي کي روڪي ٿي.

### `get_option` {#getoption}

WordPress option پڙهي ٿو.

**پيرا ميٽر**

| پيرا ميٽر | قسم | گهربل | وضاحت |
|---|---|---|---|
| `option_name` | string | ها | option key، مثال طور `blogname` |

**واپس ڏئي ٿو** `{ "option_name": "blogname", "value": "My Site" }`

جيڪڏهن `option_name` safety blocklist تي هجي ته error واپس ڏئي ٿو.

---

### `set_option` {#setoption}

WordPress option لکي ٿو.

**پيرا ميٽر**

| پيرا ميٽر | قسم | گهربل | وضاحت |
|---|---|---|---|
| `option_name` | string | ها | option key |
| `value` | any | ها | نئين قدر (arrays/objects لاءِ پاڻمرادو serialised) |
| `autoload` | string | نه | `"yes"` يا `"no"`. ڊفالٽ موجوده autoload setting برقرار رکي ٿو |

جيڪڏهن `option_name` حفاظتي blocklist تي هجي ته غلطي موٽائي ٿو.

**موٽائي ٿو** `{ "success": true, "option_name": "blogname" }`

---

### `delete_option` {#deleteoption}

هڪ WordPress option حذف ڪري ٿو.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `option_name` | string | Yes | حذف ڪرڻ لاءِ option key |

جيڪڏهن `option_name` حفاظتي blocklist تي هجي ته غلطي موٽائي ٿو.

**موٽائي ٿو** `{ "success": true, "option_name": "my_custom_option" }`

---

### `list_options` {#listoptions}

هڪ pattern سان ملندڙ WordPress options جي فهرست ڏيکاري ٿو.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `pattern` | string | No | option نالن کي filter ڪرڻ لاءِ SQL LIKE pattern، مثال طور `gratis_%`. جيڪڏهن ڇڏي ڏنو وڃي ته سڀ options موٽائي ٿو (وڏين databases تي احتياط سان استعمال ڪريو). |
| `limit` | integer | No | نتيجن جو وڌ کان وڌ تعداد. Default `50`، وڌ ۾ وڌ `500` |

**موٽائي ٿو**

```json
{
  "options": [
    { "option_name": "gratis_ai_agent_version", "autoload": "yes" }
  ],
  "total": 1
}
```

---

## مواد جو انتظام {#content-management}

مواد جي انتظام جون صلاحيتون WordPress پوسٽون ۽ صفحا ٺاهي ۽ ترميم ڪن ٿيون. Post IDs موٽايا وڃن ٿا ته جيئن multi-ability منصوبن ۾ ايندڙ مرحلا ٺاهيل مواد جو حوالو ڏئي سگهن.

### `create_post` {#createpost}

نئون WordPress post، page، يا custom post type entry ٺاهي ٿو.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `title` | string | Yes | پوسٽ جو عنوان |
| `content` | string | No | پوسٽ جو body — سادو متن، HTML، يا serialised block markup قبول ڪري ٿو |
| `status` | string | No | `draft`, `publish`, `pending`, `private`. Default `draft` |
| `post_type` | string | No | Post type slug، مثال طور `post`، `page`، يا ڪو به registered CPT. Default `post` |
| `excerpt` | string | No | archives ۽ ڳولا جي نتيجن ۾ ڏيکاريل مختصر خلاصو |
| `categories` | array | No | مقرر ڪرڻ لاءِ category نالن يا IDs جو array |
| `tags` | array | No | مقرر ڪرڻ لاءِ tag نالن يا IDs جو array |
| `author` | integer | No | پوسٽ author طور مقرر ڪرڻ لاءِ WordPress user ID. Default موجوده user آهي |
| `date` | string | No | ISO 8601 format ۾ publish date، مثال طور `2026-05-01T09:00:00` |
| `page_template` | string | No | هن post يا page کي مقرر ڪرڻ لاءِ template file، مثال طور `page-full-width.php`. صرف تڏهن معنيٰ رکي ٿو جڏهن `post_type`، `page` هجي يا اهڙو CPT جيڪو page templates کي support ڪري. |

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

**موٽائي ٿو** `{ "success": true, "post_id": 42, "permalink": "https://example.com/welcome/" }`

---

### `update_post` {#updatepost}

موجود WordPress post يا page کي update ڪري ٿو.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `post_id` | integer | Yes | update ڪرڻ لاءِ post جو ID |
| `title` | string | No | نئون post title |
| `content` | string | No | نئون post body |
| `status` | string | No | نئون status: `draft`, `publish`, `pending`, `private` |
| `excerpt` | string | No | نئون excerpt |
| `categories` | array | No | مڪمل category فهرست کي هن نالن يا IDs جي array سان مٽايو |
| `tags` | array | No | مڪمل tag فهرست کي هن نالن يا IDs جي array سان مٽايو |
| `page_template` | string | No | هن post يا page کي مقرر ڪرڻ لاءِ نئين template file، مثال طور `page-full-width.php`. template assignment هٽائڻ ۽ theme default ڏانهن واپس وڃڻ لاءِ خالي string pass ڪريو. |

**مثال** — ٺاهڻ کان پوءِ template بدلائي ٿو

```json
{
  "post_id": 42,
  "page_template": "page-full-width.php"
}
```

**موٽائي ٿو** `{ "success": true, "post_id": 42 }`

---

### `batch_create_posts` {#batchcreateposts}

هڪ ئي ability call ۾ ڪيترائي posts ٺاهي ٿو، site builds يا bulk content import دوران round-trips گهٽائي ٿو. Posts ترتيب سان ٺاهيا وڃن ٿا؛ جيڪڏهن هڪ ناڪام ٿئي ته ٻيا جاري رهن ٿا ۽ ناڪامي results array ۾ رپورٽ ڪئي وڃي ٿي.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `posts` | array | Yes | post objects جو array، هر هڪ `create_post` وارا ساڳيا parameters قبول ڪري ٿو |
| `stop_on_error` | boolean | No | جيڪڏهن `true` هجي، پهرين ناڪامي کان پوءِ processing روڪيو. Default `false` |

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

**موٽائي ٿو**

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

موجود post يا page کي featured image (post thumbnail) مقرر ڪري ٿو. موجود Media Library attachment ID يا remote image URL قبول ڪري ٿو؛ جڏهن URL ڏنو وڃي، image خودڪار طور download ۽ import ڪئي وڃي ٿي.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `post_id` | integer | Yes | update ڪرڻ لاءِ post يا page جو ID |
| `attachment_id` | integer | No | موجود Media Library attachment جو ID |
| `url` | string | No | import ڪري featured image طور set ڪرڻ لاءِ remote image URL |
| `alt_text` | string | No | جيڪڏهن URL مان import ڪئي وڃي ته attachment تي لاڳو ڪرڻ لاءِ Alt text |

`attachment_id` يا `url` مان هڪ مهيا ڪرڻ لازمي آهي.

**موٽائي ٿو** `{ "success": true, "post_id": 42, "attachment_id": 17 }`

---

### `create_contact_form` {#createcontactform}

active form plugin (Contact Form 7، WPForms، Fluent Forms، يا Gravity Forms، جيڪو به installed هجي) استعمال ڪندي contact form ٺاهي ٿو. shortcode موٽائي ٿو جيڪو ڪنهن به post يا page ۾ embedded ٿي سگهي ٿو.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `title` | string | Yes | فارم plugin جي منتظم ۾ ڏيکاريل فارم جو نالو |
| `fields` | array | Yes | فارم فيلڊن جي ترتيب ڏنل فهرست (هيٺ Field object ڏسو) |
| `recipient` | string | No | جمع ڪرايل شيون وصول ڪرڻ لاءِ اي ميل پتو. ڊفالٽ WordPress منتظم جي اي ميل آهي |
| `subject` | string | No | اي ميل موضوع جي لائين. Contact Form 7 استعمال ڪندي `[your-name]` ۽ `[your-subject]` placeholders جي حمايت ڪري ٿي |
| `confirmation_message` | string | No | ڪامياب جمع ڪرائڻ کان پوءِ ڏيکاريل پيغام. ڊفالٽ: `"Thank you for your message. We'll be in touch soon."` |

**Field object**

| Key | Type | Required | Description |
|---|---|---|---|
| `name` | string | Yes | اندروني فيلڊ نالو / مشين ڪي |
| `label` | string | Yes | فارم تي ڏيکاريل انسان-پڙهڻ جوڳو ليبل |
| `type` | string | Yes | `text`, `email`, `tel`, `textarea`, `select`, `checkbox`, `radio`, `file`, `date` |
| `required` | boolean | No | ڇا فيلڊ جمع ڪرائڻ کان اڳ ڀرڻ لازمي آهي. ڊفالٽ `false` |
| `options` | array | No | `select`, `checkbox`, ۽ `radio` فيلڊن لاءِ اختيار |
| `placeholder` | string | No | متن-قسم جي ان پٽن لاءِ Placeholder متن |

**مثال**

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

**واپس ڪري ٿو**

```json
{
  "success": true,
  "form_id": 3,
  "shortcode": "[contact-form-7 id=\"3\" title=\"Restaurant Booking Enquiry\"]"
}
```

---

## بصري جائزو {#visual-review}

بصري جائزي جون صلاحيتون agent کي زنده صفحن جا اسڪرين شاٽ وٺڻ ۽ انهن جو تجزيو ڪرڻ ڏين ٿيون، جنهن سان خودمختيار ڊيزائن جائزو، اڳ/پوءِ ڀيٽون، ۽ بصري regression چيڪ ممڪن ٿين ٿا، ڪنهن به برائوزر extension جي ضرورت کان سواءِ.

### `capture_screenshot` {#capturescreenshot}

ڏنل URL تي WordPress صفحي جو اسڪرين شاٽ server-side headless browser استعمال ڪندي وٺي ٿو. تصوير Media Library ۾ محفوظ ڪئي ويندي آهي ۽ CDN URL واپس ڪيو ويندو آهي.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `url` | string | Yes | اسڪرين شاٽ لاءِ صفحي جو مڪمل URL، مثال طور `https://example.com/about/` |
| `width` | integer | No | Viewport جي ويڪر pixels ۾. ڊفالٽ `1280` |
| `height` | integer | No | Viewport جي اوچائي pixels ۾. ڊفالٽ `800` |
| `full_page` | boolean | No | صرف viewport بدران مڪمل scrollable صفحو capture ڪريو. ڊفالٽ `false` |
| `delay_ms` | integer | No | صفحو لوڊ ٿيڻ کان پوءِ capture ڪرڻ کان اڳ انتظار ڪرڻ لاءِ milliseconds، animated مواد لاءِ مفيد. ڊفالٽ `500` |
| `label` | string | No | Media Library ۾ attachment سان محفوظ ڪيل انسان-پڙهڻ جوڳو ليبل |

**واپس ڪري ٿو**

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

ٻه اسڪرين شاٽ وٺي هڪ بصري diff score ۽ تبديل ٿيل علائقن کي نمايان ڪندڙ diff image واپس ڪري ٿو. اهو تصديق ڪرڻ لاءِ مفيد آهي ته ڊيزائن تبديلي متوقع نتيجو پيدا ڪيو، يا اڻڄاتل regressions ڳولڻ لاءِ.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `before_url` | string | Yes | "اڳ" واري حالت طور capture ڪرڻ لاءِ صفحي جو URL |
| `after_url` | string | Yes | "پوءِ" واري حالت طور capture ڪرڻ لاءِ صفحي جو URL. وقت جي وچ ۾ ڀيٽ ڪرڻ لاءِ ساڳيو URL ٿي سگهي ٿو |
| `width` | integer | No | ٻنهي captures لاءِ Viewport ويڪر. ڊفالٽ `1280` |
| `threshold` | float | No | Pixel-difference threshold (0.0–1.0). هن tolerance اندر pixels کي اڻتبديل سمجهيو ويندو. ڊفالٽ `0.1` |

**واپس ڪري ٿو**

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

`diff_score` جو `0.0` مطلب ڪا به نظر ايندڙ تبديلي نه؛ `1.0` مطلب هر pixel تبديل ٿيو.

---

### `review_page_design` {#reviewpagedesign}

صفحي جو اسڪرين شاٽ capture ڪري ان کي بصري تجزيي لاءِ language model ڏانهن موڪلي ٿو. layout، typography، رنگن جي استعمال، ۽ accessibility بابت خدشن کي ڍڪيندڙ structured جائزو واپس ڪري ٿو.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `url` | string | Yes | جائزو وٺڻ لاءِ صفحي جو مڪمل URL |
| `focus` | string | No | زور ڏيڻ لاءِ جائزي وارن علائقن جي comma-separated فهرست: `layout`, `typography`, `colour`, `accessibility`, `mobile`. ڊفالٽ: سڀ علائقا |
| `width` | integer | No | Viewport ويڪر. ڊفالٽ `1280` |

**واپس ڪري ٿو**

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

## انسٽال ڪري سگهجندڙ صلاحيتون {#installable-abilities}

Installable Abilities Registry توهان کي WordPress plugins طور ورهايل اضافي صلاحيتن جي packs سان agent کي وڌائڻ ڏئي ٿو. هر pack معياري ability API استعمال ڪندي هڪ يا وڌيڪ صلاحيتون register ڪري ٿو.

### `list_available_abilities` {#listavailableabilities}

Registry مان انسٽاليشن لاءِ موجود صلاحيتن جي packs جو catalogue واپس ڪري ٿو.

**Parameters**

| پيراميٽر | قسم | گهربل | وضاحت |
|---|---|---|---|
| `category` | string | نه | ڪيٽيگري موجب فلٽر ڪريو: `ecommerce`, `seo`, `media`, `social`, `developer` |

**واپس ڪري ٿو**

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

رجسٽري مان هڪ قابليت پيڪ ڊائون لوڊ ڪري ٿو ۽ چالو ڪري ٿو.

**پيراميٽر**

| پيراميٽر | قسم | گهربل | وضاحت |
|---|---|---|---|
| `slug` | string | ها | قابليت پيڪ plugin جو slug |

**واپس ڪري ٿو** `{ "success": true, "slug": "gratis-ai-agent-woocommerce", "abilities_added": 3 }`

---

### `recommend_plugin` {#recommendplugin}

بيان ڪيل استعمال جي صورت لاءِ بهترين plugin ڳولڻ لاءِ قابليت رجسٽري کان پڇا ڪري ٿو ۽، اختياري طور، ان کي انسٽال ڪري ٿو.

**پيراميٽر**

| پيراميٽر | قسم | گهربل | وضاحت |
|---|---|---|---|
| `description` | string | ها | گهربل ڪارڪردگي جي قدرتي ٻوليءَ ۾ وضاحت |
| `install` | boolean | نه | جيڪڏهن `true` هجي، ته سفارش ڪيل plugin کي فوري طور انسٽال ڪري ٿو. ڊفالٽ `false` |

**مثال**

```json
{
  "description": "I need a contact form with file upload support and spam protection",
  "install": false
}
```

**واپس ڪري ٿو**

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

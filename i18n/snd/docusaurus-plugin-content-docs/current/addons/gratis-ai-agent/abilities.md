---
title: صلاحيتن جو حوالو
sidebar_position: 2
_i18n_hash: 1a83460648ea789162af417c6b11eecc
---
# قابليتن جو حوالو

قابليتون اهي ائٽمي عمل آهن جيڪي Gratis AI Agent توهان جي WordPress تنصيب تي هلائي سگهي ٿو. هر قابليت هڪ رجسٽر ٿيل PHP ڪلاس آهي جيڪو JSON اسڪيما ظاهر ڪري ٿو — agent رن ٽائيم تي هي اسڪيما پڙهي ٿو ته ڪهڙا پيراميٽر گهربل آهن ۽ قابليت ڇا موٽائي ٿي.

هي صفحو Gratis AI Agent v1.9.0 سان گڏ ايندڙ سڀ قابليتون دستاويز ڪري ٿو.

---

## ڪسٽم پوسٽ قسم {#custom-post-types}

اهي قابليتون agent ذريعي رجسٽر ٿيل ڪسٽم پوسٽ قسمن (CPTs) کي سنڀالين ٿيون. رجسٽريشنز WordPress آپشنز ٽيبل ۾ محفوظ ڪيون وڃن ٿيون ته جيئن اهي plugin جي غيرفعال ۽ ٻيهر فعال ٿيڻ کان پوءِ به برقرار رهن.

### `register_post_type` {#registerposttype}

نئون ڪسٽم پوسٽ قسم رجسٽر ڪري ٿو.

**پيراميٽر**

| پيراميٽر | قسم | گهربل | وضاحت |
|---|---|---|---|
| `slug` | string | ها | پوسٽ قسم جي ڪنجي (وڌ ۾ وڌ 20 اکر، وڏا اکر نه، خال نه) |
| `singular_label` | string | ها | انسان پڙهڻ لائق واحد نالو، مثال طور `Portfolio Item` |
| `plural_label` | string | ها | انسان پڙهڻ لائق جمع نالو، مثال طور `Portfolio Items` |
| `public` | boolean | نه | ڇا پوسٽ قسم عوامي طور رسائي لائق آهي. ڊفالٽ `true` |
| `supports` | array | نه | سپورٽ ڪرڻ لاءِ خاصيتون: `title`, `editor`, `thumbnail`, `excerpt`, `comments`, `revisions`, `custom-fields`. ڊفالٽ `["title","editor"]` |
| `has_archive` | boolean | نه | ڇا پوسٽ قسم جي آرڪائيو صفحو فعال آهي. ڊفالٽ `false` |
| `menu_icon` | string | نه | ايڊمن مينيو آئڪن لاءِ Dashicons ڪلاس يا URL. ڊفالٽ `"dashicons-admin-post"` |
| `rewrite_slug` | string | نه | پوسٽ قسم لاءِ URL سلگ. ڊفالٽ `slug` |

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

**موٽائي ٿو** `{ "success": true, "slug": "portfolio" }`

---

### `list_post_types` {#listposttypes}

agent پاران رجسٽر ٿيل سڀ ڪسٽم پوسٽ قسم موٽائي ٿو.

**پيراميٽر** — ڪوبه نه

**موٽائي ٿو**

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

agent پاران اڳ ۾ رجسٽر ٿيل ڪسٽم پوسٽ قسم کي غيررجسٽر ڪري ٿو. ان قسم جون موجوده پوسٽون ڊيٽابيس ۾ رهنديون آهن پر هاڻي پوسٽ قسم ذريعي رسائي لائق نه هونديون.

**پيراميٽر**

| پيراميٽر | قسم | گهربل | وضاحت |
|---|---|---|---|
| `slug` | string | ها | هٽائڻ لاءِ پوسٽ قسم جي ڪنجي |

**موٽائي ٿو** `{ "success": true, "slug": "portfolio" }`

---

## ڪسٽم ٽيڪسونوميز {#custom-taxonomies}

اهي قابليتون ڪسٽم ٽيڪسونوميز کي سنڀالين ٿيون. CPTs وانگر، ٽيڪسونومي رجسٽريشنز محفوظ ڪيون وڃن ٿيون.

### `register_taxonomy` {#registertaxonomy}

نئين ڪسٽم ٽيڪسونومي رجسٽر ڪري ٿو.

**پيراميٽر**

| پيراميٽر | قسم | گهربل | وضاحت |
|---|---|---|---|
| `slug` | string | ها | ٽيڪسونومي جي ڪنجي (وڌ ۾ وڌ 32 اکر) |
| `singular_label` | string | ها | انسان پڙهڻ لائق واحد نالو، مثال طور `Project Category` |
| `plural_label` | string | ها | انسان پڙهڻ لائق جمع نالو، مثال طور `Project Categories` |
| `post_types` | array | ها | پوسٽ قسم سلگز جن سان هي ٽيڪسونومي ڳنڍجڻ گهرجي |
| `hierarchical` | boolean | نه | ڪيٽيگري انداز لاءِ `true`، ٽيگ انداز لاءِ `false`. ڊفالٽ `true` |
| `public` | boolean | نه | ڇا اصطلاح عوامي طور رسائي لائق آهن. ڊفالٽ `true` |
| `rewrite_slug` | string | نه | ٽيڪسونومي لاءِ URL سلگ. ڊفالٽ `slug` |

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

**موٽائي ٿو** `{ "success": true, "slug": "project-category" }`

---

### `list_taxonomies` {#listtaxonomies}

agent پاران رجسٽر ٿيل سڀ ڪسٽم ٽيڪسونوميز موٽائي ٿو.

**پيراميٽر** — ڪوبه نه

**موٽائي ٿو**

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

agent پاران اڳ ۾ رجسٽر ٿيل ڪسٽم ٽيڪسونومي کي غيررجسٽر ڪري ٿو.

**پيراميٽر**

| پيراميٽر | قسم | گهربل | وضاحت |
|---|---|---|---|
| `slug` | string | ها | هٽائڻ لاءِ ٽيڪسونومي جي ڪنجي |

**موٽائي ٿو** `{ "success": true, "slug": "project-category" }`

---

## ڊيزائن سسٽم {#design-system}

ڊيزائن سسٽم جون قابليتون WordPress سائيٽ جي بصري پيشڪش کي تبديل ڪن ٿيون — ڪسٽم CSS کان بلاڪ پيٽرنز ۽ سائيٽ لوگو تائين.

### `inject_custom_css` {#injectcustomcss}

`wp_add_inline_style` ذريعي سائيٽ جي `<head>` ۾ CSS شامل ڪري ٿو. CSS کي `gratis_ai_agent_custom_css` آپشن ۾ محفوظ ڪيو وڃي ٿو ۽ جڏهن قابليت ري سيٽ ٿئي ٿي ته صاف نموني dequeue ڪيو وڃي ٿو.

**پيراميٽر**

| پيراميٽر | قسم | گهربل | وضاحت |
|---|---|---|---|
| `css` | string | ها | داخل ڪرڻ لاءِ صحيح CSS |
| `label` | string | نه | هن CSS بلاڪ لاءِ انسان پڙهڻ لائق ليبل، debug لاگز ۾ استعمال ٿيل. ڊفالٽ `"agent-injected"` |
| `replace` | boolean | نه | جيڪڏهن `true`، اڳ ۾ داخل ڪيل سڀ CSS بدلائي ٿو. ڊفالٽ `false` (شامل ڪري ٿو) |

**مثال**

```json
{
  "css": ":root { --primary: #1a1a2e; --accent: #e94560; } body { font-family: 'Inter', sans-serif; }",
  "label": "brand-colours",
  "replace": false
}
```

**موٽائي ٿو** `{ "success": true, "bytes": 96 }`

---

### `add_block_pattern` {#addblockpattern}

WordPress پيٽرن لائبريري ۾ ٻيهر استعمال لائق بلاڪ پيٽرن رجسٽر ڪري ٿو.

**پيراميٽر**

| پيراميٽر | قسم | گهربل | وضاحت |
|---|---|---|---|
| `slug` | string | ها | پيٽرن سڃاڻپ ڪندڙ، مثال طور `gratis/hero-dark` |
| `title` | string | ها | ايڊيٽر ۾ ڏيکاريل انسان پڙهڻ لائق پيٽرن نالو |
| `content` | string | ها | پيٽرن لاءِ سيريلائيز ٿيل بلاڪ مارڪ اپ (HTML) |
| `categories` | array | نه | پيٽرن ڪيٽيگري سلگز، مثال طور `["featured", "hero"]` |
| `description` | string | نه | پيٽرن چونڊيندڙ ۾ ڏيکاريل مختصر وضاحت |
| `keywords` | array | نه | ڳولا جا اهم لفظ |

**موٽائي ٿو** `{ "success": true, "slug": "gratis/hero-dark" }`

---

### `list_block_patterns` {#listblockpatterns}

agent پاران رجسٽر ٿيل سڀ بلاڪ پيٽرنز جي فهرست ڏيکاري ٿو.

**پيراميٽر** — ڪوبه نه

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

WordPress سائيٽ جو لوگو ڏنل attachment ID يا remote image URL تي سيٽ ڪري ٿو. جڏهن URL ڏنو وڃي ٿو، تصوير ڊائونلوڊ ٿي Media Library ۾ درآمد ڪئي وڃي ٿي.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `attachment_id` | integer | نه | موجود Media Library attachment جو ID |
| `url` | string | نه | لوگو طور درآمد ۽ سيٽ ڪرڻ لاءِ remote image URL |

`attachment_id` يا `url` مان هڪ مهيا ڪرڻ لازمي آهي.

**واپس ڏئي ٿو** `{ "success": true, "attachment_id": 42 }`

---

### `apply_theme_json_preset` {#applythemejsonpreset}

فعال theme جي `theme.json` (يا `global-styles`) تي نالي وارو رنگ/typography preset لاڳو ڪري ٿو. Presets ترتيب ڏنل bundles آهن، جن کي Gratis AI Agent ٽيم سنڀالي ٿي.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `preset` | string | ها | Preset جو نالو، مثال طور `minimal-dark`, `warm-editorial`, `corporate-blue` |
| `merge` | boolean | نه | جيڪڏهن `true` هجي، ته مٽائڻ بدران موجود قدرن سان merge ڪريو. Default `false` |

**دستياب presets**

| Preset | Description |
|---|---|
| `minimal-dark` | لڳ ڀڳ ڪارو پسمنظر، اڇو متن، هڪ accent رنگ |
| `warm-editorial` | گرم off-white پسمنظر، serif headings، مٽيءَ جهڙا accent رنگ |
| `corporate-blue` | پيشاور typography سان navy ۽ اڇي palette |
| `vibrant-startup` | روشن gradients، گول ڪنڊون، جديد sans-serif قسم |
| `classic-blog` | Neutral greys، آرامده line-height، روايتي layout spacing |

**واپس ڏئي ٿو** `{ "success": true, "preset": "minimal-dark" }`

---

## عالمي Styles {#global-styles}

Global Styles صلاحيتون WordPress Global Styles API ذريعي theme.json قدرون پڙهن ۽ لکن ٿيون، جيڪي sitewide سڀني blocks ۽ templates تي اثرانداز ٿين ٿيون.

### `get_global_styles` {#getglobalstyles}

موجوده global styles configuration واپس ڏئي ٿو.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `path` | string | نه | ڪنهن مخصوص قدر ڏانهن JSON pointer، مثال طور `/color/palette` يا `/typography/fontSizes`. جيڪڏهن ڇڏيو وڃي ته سڄو object واپس ڏئي ٿو. |

**واپس ڏئي ٿو** مڪمل global styles object يا `path` تي موجود قدر.

---

### `set_global_styles` {#setglobalstyles}

global styles configuration ۾ هڪ يا وڌيڪ قدرون تازه ڪري ٿو.

**Parameters**

| Parameter | Type | Required | Description |
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

agent پاران لاڳو ڪيل global styles جون سڀ تبديليون reset ڪري ٿو، theme جا defaults بحال ڪري ٿو.

**Parameters** — ڪوبه نه

**واپس ڏئي ٿو** `{ "success": true }`

---

## Navigation Menus {#navigation-menus}

Navigation Menu صلاحيتون WordPress nav menus ۽ انهن جا items ٺاهين ۽ منظم ڪن ٿيون.

### `create_menu` {#createmenu}

نئون WordPress navigation menu ٺاهي ٿو.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `name` | string | ها | Menu جو نالو، مثال طور `Primary Navigation` |
| `location` | string | نه | هن menu کي assign ڪرڻ لاءِ theme location، مثال طور `primary` |

**واپس ڏئي ٿو** `{ "success": true, "menu_id": 7 }`

---

### `update_menu` {#updatemenu}

menu جو نالو تبديل ڪري ٿو يا ان کي theme location ڏانهن ٻيهر assign ڪري ٿو.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `menu_id` | integer | ها | تازه ڪرڻ واري menu جو ID |
| `name` | string | نه | نئون menu نالو |
| `location` | string | نه | assign يا ٻيهر assign ڪرڻ لاءِ theme location |

**واپس ڏئي ٿو** `{ "success": true, "menu_id": 7 }`

---

### `add_menu_item` {#addmenuitem}

موجود navigation menu ۾ هڪ item شامل ڪري ٿو.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `menu_id` | integer | ها | target menu جو ID |
| `type` | string | ها | Item جو قسم: `custom`, `post_type`, يا `taxonomy` |
| `title` | string | نه | menu item لاءِ label (`custom` قسم لاءِ لازمي) |
| `url` | string | نه | `custom` items لاءِ URL |
| `object_id` | integer | نه | `post_type`/`taxonomy` items لاءِ Post ID يا term ID |
| `parent_id` | integer | نه | هن item کي هيٺ nest ڪرڻ لاءِ menu item ID |
| `position` | integer | نه | menu ۾ zero-based position |

**واپس ڏئي ٿو** `{ "success": true, "item_id": 12 }`

---

### `remove_menu_item` {#removemenuitem}

navigation menu مان هڪ item هٽائي ٿو.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `item_id` | integer | ها | هٽائڻ لاءِ menu item ID |

**واپس ڏئي ٿو** `{ "success": true, "item_id": 12 }`

---

### `list_menus` {#listmenus}

سڀ WordPress navigation menus جي فهرست ڏيکاري ٿو، انهن جي assigned theme locations سميت.

**Parameters** — ڪوبه نه

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

Options صلاحيتون `get_option` / `update_option` ذريعي WordPress options پڙهن ۽ لکن ٿيون. built-in safety blocklist اهم settings جي اتفاقي ترميم کي روڪي ٿي.

### `get_option` {#getoption}

هڪ WordPress option پڙهي ٿو.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `option_name` | string | ها | option key، مثال طور `blogname` |

**واپس ڏئي ٿو** `{ "option_name": "blogname", "value": "My Site" }`

جيڪڏهن `option_name` safety blocklist تي هجي ته error واپس ڏئي ٿو.

---

### `set_option` {#setoption}

هڪ WordPress option لکي ٿو.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `option_name` | string | ها | option key |
| `value` | any | ها | نئين قدر (arrays/objects لاءِ پاڻمرادو serialised) |
| `autoload` | string | نه | `"yes"` يا `"no"`. Default موجود autoload setting کي برقرار رکي ٿو |

جيڪڏهن `option_name` حفاظت واري blocklist تي هجي ته غلطي موٽائي ٿو.

**موٽائي ٿو** `{ "success": true, "option_name": "blogname" }`

---

### `delete_option` {#deleteoption}

هڪ WordPress option ختم ڪري ٿو.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `option_name` | string | Yes | ختم ڪرڻ لاءِ option key |

جيڪڏهن `option_name` حفاظت واري blocklist تي هجي ته غلطي موٽائي ٿو.

**موٽائي ٿو** `{ "success": true, "option_name": "my_custom_option" }`

---

### `list_options` {#listoptions}

هڪ pattern سان ملندڙ WordPress options جي فهرست ڏيکاري ٿو.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `pattern` | string | No | option نالن کي filter ڪرڻ لاءِ SQL LIKE pattern، مثال طور `gratis_%`. جيڪڏهن ڇڏي ڏنو وڃي ته سڀ options موٽائي ٿو (وڏين databases تي احتياط سان استعمال ڪريو). |
| `limit` | integer | No | نتيجن جو وڌ ۾ وڌ تعداد. Default `50`، max `500` |

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

مواد جي انتظام جون صلاحيتون WordPress posts ۽ pages ٺاهين ۽ edit ڪن ٿيون. Post IDs موٽايا وڃن ٿا ته جيئن multi-ability plans ۾ ايندڙ قدم ٺاهيل مواد جو حوالو ڏئي سگهن.

### `create_post` {#createpost}

نئون WordPress post، page، يا custom post type entry ٺاهي ٿو.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `title` | string | Yes | Post عنوان |
| `content` | string | No | Post body — plain text، HTML، يا serialised block markup قبول ڪري ٿو |
| `status` | string | No | `draft`, `publish`, `pending`, `private`. Default `draft` |
| `post_type` | string | No | Post type slug، مثال طور `post`، `page`، يا ڪو به registered CPT. Default `post` |
| `excerpt` | string | No | archives ۽ search results ۾ ڏيکاريل مختصر خلاصو |
| `categories` | array | No | assign ڪرڻ لاءِ category نالن يا IDs جو array |
| `tags` | array | No | assign ڪرڻ لاءِ tag نالن يا IDs جو array |
| `author` | integer | No | post author طور مقرر ڪرڻ لاءِ WordPress user ID. موجوده user تي defaults |
| `date` | string | No | ISO 8601 format ۾ publish date، مثال طور `2026-05-01T09:00:00` |
| `page_template` | string | No | هن post يا page کي assign ڪرڻ لاءِ template file، مثال طور `page-full-width.php`. صرف تڏهن معنيٰ رکي ٿو جڏهن `post_type` `page` هجي يا اهڙو CPT جيڪو page templates کي support ڪري. |

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

موجوده WordPress post يا page کي update ڪري ٿو.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `post_id` | integer | Yes | update ڪرڻ واري post جي ID |
| `title` | string | No | نئون post عنوان |
| `content` | string | No | نئون post body |
| `status` | string | No | نئون status: `draft`, `publish`, `pending`, `private` |
| `excerpt` | string | No | نئون excerpt |
| `categories` | array | No | مڪمل category list کي نالن يا IDs جي هن array سان بدلائي ڇڏيو |
| `tags` | array | No | مڪمل tag list کي نالن يا IDs جي هن array سان بدلائي ڇڏيو |
| `page_template` | string | No | هن post يا page کي assign ڪرڻ لاءِ نئين template file، مثال طور `page-full-width.php`. template assignment هٽائڻ ۽ theme default ڏانهن واپس وڃڻ لاءِ خالي string پاس ڪريو. |

**مثال** — ٺاهڻ کان پوءِ template تبديل ڪريو

```json
{
  "post_id": 42,
  "page_template": "page-full-width.php"
}
```

**موٽائي ٿو** `{ "success": true, "post_id": 42 }`

---

### `batch_create_posts` {#batchcreateposts}

هڪ ئي ability call ۾ ڪيترائي posts ٺاهي ٿو، site builds يا bulk content import دوران round-trips گهٽائي ٿو. Posts ترتيب سان ٺاهيا وڃن ٿا؛ جيڪڏهن هڪ fail ٿئي ته ٻيا جاري رهن ٿا ۽ failure results array ۾ report ڪيو وڃي ٿو.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `posts` | array | Yes | post objects جو array، هر هڪ `create_post` جهڙا ساڳيا parameters قبول ڪري ٿو |
| `stop_on_error` | boolean | No | جيڪڏهن `true`، پهرين failure کان پوءِ processing روڪيو. Default `false` |

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

موجوده post يا page کي featured image (post thumbnail) assign ڪري ٿو. موجوده Media Library attachment ID يا remote image URL قبول ڪري ٿو؛ جڏهن URL فراهم ڪيو وڃي، image پاڻمرادو download ۽ import ڪئي وڃي ٿي.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `post_id` | integer | Yes | update ڪرڻ واري post يا page جي ID |
| `attachment_id` | integer | No | موجوده Media Library attachment جي ID |
| `url` | string | No | import ڪرڻ ۽ featured image طور مقرر ڪرڻ لاءِ remote image URL |
| `alt_text` | string | No | جيڪڏهن URL مان import ڪئي وڃي ته attachment تي لاڳو ڪرڻ لاءِ Alt text |

`attachment_id` يا `url` مان هڪ فراهم ڪرڻ لازمي آهي.

**موٽائي ٿو** `{ "success": true, "post_id": 42, "attachment_id": 17 }`

---

### `create_contact_form` {#createcontactform}

active form plugin (Contact Form 7، WPForms، Fluent Forms، يا Gravity Forms، جيڪو به installed هجي) استعمال ڪندي contact form ٺاهي ٿو. اهڙو shortcode موٽائي ٿو جيڪو ڪنهن به post يا page ۾ embed ڪري سگهجي ٿو.

**Parameters**

| پيرا ميٽر | قسم | گهربل | وضاحت |
|---|---|---|---|
| `title` | string | ها | فارم plugin admin ۾ ڏيکاريل فارم جو نالو |
| `fields` | array | ها | فارم خانن جي ترتيب ڏنل فهرست (هيٺ Field object ڏسو) |
| `recipient` | string | نه | جمع ڪرائڻيون وصول ڪرڻ لاءِ Email پتو. ڊفالٽ WordPress admin email آهي |
| `subject` | string | نه | Email موضوع جي سٽ. Contact Form 7 استعمال ڪرڻ وقت `[your-name]` ۽ `[your-subject]` placeholders کي سپورٽ ڪري ٿي |
| `confirmation_message` | string | نه | ڪامياب جمع ڪرائڻ کان پوءِ ڏيکاريل پيغام. ڊفالٽ: `"Thank you for your message. We'll be in touch soon."` |

**Field object**

| چاٻي | قسم | گهربل | وضاحت |
|---|---|---|---|
| `name` | string | ها | اندروني خاني جو نالو / مشيني چاٻي |
| `label` | string | ها | فارم تي ڏيکاريل انسان لاءِ پڙهڻ لائق ليبل |
| `type` | string | ها | `text`, `email`, `tel`, `textarea`, `select`, `checkbox`, `radio`, `file`, `date` |
| `required` | boolean | نه | ڇا خانو جمع ڪرائڻ کان اڳ ڀرڻ لازمي آهي. ڊفالٽ `false` |
| `options` | array | نه | `select`, `checkbox`, ۽ `radio` خانن لاءِ اختيار |
| `placeholder` | string | نه | متن-قسم جي داخلائن لاءِ Placeholder متن |

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

بصري جائزي جون صلاحيتون agent کي live صفحن جا screenshots وٺڻ ۽ انهن جو تجزيو ڪرڻ ڏين ٿيون، جنهن سان خودمختيار ڊيزائن جائزو، اڳ/پوءِ ڀيٽون، ۽ بصري regression چڪاسون ڪنهن به browser extension جي ضرورت کان سواءِ ممڪن ٿين ٿيون.

### `capture_screenshot` {#capturescreenshot}

ڏنل URL تي WordPress صفحي جو screenshot server-side headless browser استعمال ڪندي وٺي ٿو. تصوير Media Library ۾ محفوظ ڪئي وڃي ٿي ۽ CDN URL واپس ڪيو وڃي ٿو.

**پيرا ميٽر**

| پيرا ميٽر | قسم | گهربل | وضاحت |
|---|---|---|---|
| `url` | string | ها | screenshot لاءِ صفحي جو مڪمل URL، مثال طور `https://example.com/about/` |
| `width` | integer | نه | pixels ۾ viewport جي ويڪر. ڊفالٽ `1280` |
| `height` | integer | نه | pixels ۾ viewport جي اوچائي. ڊفالٽ `800` |
| `full_page` | boolean | نه | صرف viewport بدران مڪمل scrollable صفحو capture ڪريو. ڊفالٽ `false` |
| `delay_ms` | integer | نه | صفحو load ٿيڻ کان پوءِ capture ڪرڻ کان اڳ انتظار ڪرڻ لاءِ milliseconds، animated مواد لاءِ ڪارائتو. ڊفالٽ `500` |
| `label` | string | نه | Media Library ۾ attachment سان محفوظ ڪيل انسان لاءِ پڙهڻ لائق ليبل |

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

ٻه screenshots وٺي ٿو ۽ visual diff score سان گڏ هڪ diff image واپس ڪري ٿو جيڪا تبديل ٿيل علائقن کي نمايان ڪري ٿي. اهو پڪ ڪرڻ لاءِ ڪارائتو آهي ته ڊيزائن تبديلي متوقع نتيجو ڏنو يا اڻڄاتل regressions ڳولڻ لاءِ.

**پيرا ميٽر**

| پيرا ميٽر | قسم | گهربل | وضاحت |
|---|---|---|---|
| `before_url` | string | ها | "before" حالت طور capture ڪرڻ لاءِ صفحي جو URL |
| `after_url` | string | ها | "after" حالت طور capture ڪرڻ لاءِ صفحي جو URL. وقت جي وچ ۾ ڀيٽ ڪرڻ وقت ساڳيو URL ٿي سگهي ٿو |
| `width` | integer | نه | ٻنهي captures لاءِ viewport جي ويڪر. ڊفالٽ `1280` |
| `threshold` | float | نه | Pixel-difference حد (0.0–1.0). هن tolerance اندر pixels کي اڻتبديل سمجهيو ويندو. ڊفالٽ `0.1` |

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

`diff_score` جو `0.0` مطلب ڪا ڏسڻ ۾ ايندڙ تبديلي ناهي؛ `1.0` مطلب هر pixel تبديل ٿيو.

---

### `review_page_design` {#reviewpagedesign}

صفحي جو screenshot وٺي ٿو ۽ بصري تجزيي لاءِ ان کي language model ڏانهن موڪلي ٿو. layout، typography، رنگ جي استعمال، ۽ accessibility بابت خدشن کي ڍڪيندڙ structured assessment واپس ڪري ٿو.

**پيرا ميٽر**

| پيرا ميٽر | قسم | گهربل | وضاحت |
|---|---|---|---|
| `url` | string | ها | جائزي لاءِ صفحي جو مڪمل URL |
| `focus` | string | نه | زور ڏيڻ لاءِ جائزي جي علائقن جي comma-separated فهرست: `layout`, `typography`, `colour`, `accessibility`, `mobile`. ڊفالٽ: سڀ علائقا |
| `width` | integer | نه | Viewport جي ويڪر. ڊفالٽ `1280` |

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

## انسٽال ٿي سگهندڙ صلاحيتون {#installable-abilities}

Installable Abilities Registry توهان کي WordPress plugins طور ورهايل اضافي صلاحيتن جي packs سان agent کي وڌائڻ ڏئي ٿي. هر pack معياري ability API استعمال ڪندي هڪ يا وڌيڪ صلاحيتون register ڪري ٿو.

### `list_available_abilities` {#listavailableabilities}

registry مان installation لاءِ موجود ability packs جو catalogue واپس ڪري ٿو.

**پيرا ميٽر**

| پيراميٽر | Type | گهربل | وضاحت |
|---|---|---|---|
| `category` | string | نه | category موجب فلٽر ڪريو: `ecommerce`, `seo`, `media`, `social`, `developer` |

**واپس ڏئي ٿو**

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

رجسٽري مان صلاحيت پيڪ ڊائونلوڊ ڪري ان کي فعال ڪري ٿو.

**پيراميٽر**

| پيراميٽر | Type | گهربل | وضاحت |
|---|---|---|---|
| `slug` | string | ها | صلاحيت پيڪ پلگ ان slug |

**واپس ڏئي ٿو** `{ "success": true, "slug": "gratis-ai-agent-woocommerce", "abilities_added": 3 }`

---

### `recommend_plugin` {#recommendplugin}

بيان ڪيل استعمال جي صورت لاءِ بهترين پلگ ان ڳولڻ واسطي صلاحيت رجسٽري کان پڇا ڪري ٿو ۽، اختياري طور، ان کي انسٽال ڪري ٿو.

**پيراميٽر**

| پيراميٽر | Type | گهربل | وضاحت |
|---|---|---|---|
| `description` | string | ها | گهربل ڪارڪردگي جي قدرتي ٻوليءَ ۾ وضاحت |
| `install` | boolean | نه | جيڪڏهن `true` هجي، ته سفارش ڪيل پلگ ان کي فوراً انسٽال ڪري ٿو. ڊفالٽ `false` |

**مثال**

```json
{
  "description": "I need a contact form with file upload support and spam protection",
  "install": false
}
```

**واپس ڏئي ٿو**

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

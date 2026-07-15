---
title: क्षमताहरूको सन्दर्भ
sidebar_position: 2
_i18n_hash: 1a83460648ea789162af417c6b11eecc
---
# क्षमताहरूको सन्दर्भ

क्षमताहरू Gratis AI Agent ले तपाईंको WordPress स्थापनामा आह्वान गर्न सक्ने परमाणु कार्यहरू हुन्। प्रत्येक क्षमता दर्ता गरिएको PHP class हो जसले JSON schema उजागर गर्छ — agent ले runtime मा यो schema पढेर कुन parameters आवश्यक छन् र क्षमताले के फर्काउँछ भन्ने बुझ्छ।

यो पृष्ठले Gratis AI Agent v1.9.0 सँग आउने सबै क्षमताहरू दस्तावेज गर्छ।

---

## Custom Post Types {#custom-post-types}

यी क्षमताहरूले agent मार्फत दर्ता गरिएका custom post types (CPTs) व्यवस्थापन गर्छन्। दर्ताहरू WordPress options table मा कायम राखिन्छन्, त्यसैले plugin निष्क्रिय र पुनः सक्रिय गर्दा पनि ती रहिरहन्छन्।

### `register_post_type` {#registerposttype}

नयाँ custom post type दर्ता गर्छ।

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | हो | post type key (अधिकतम २० अक्षर, ठूलो अक्षर छैन, खाली ठाउँ छैन) |
| `singular_label` | string | हो | मानवले पढ्न मिल्ने एकवचन नाम, जस्तै `Portfolio Item` |
| `plural_label` | string | हो | मानवले पढ्न मिल्ने बहुवचन नाम, जस्तै `Portfolio Items` |
| `public` | boolean | होइन | post type सार्वजनिक रूपमा पहुँचयोग्य छ कि छैन। Default `true` |
| `supports` | array | होइन | समर्थन गर्ने सुविधाहरू: `title`, `editor`, `thumbnail`, `excerpt`, `comments`, `revisions`, `custom-fields`। Default `["title","editor"]` |
| `has_archive` | boolean | होइन | post type archive page सक्षम छ कि छैन। Default `false` |
| `menu_icon` | string | होइन | admin menu icon का लागि Dashicons class वा URL। Default `"dashicons-admin-post"` |
| `rewrite_slug` | string | होइन | post type का लागि URL slug। `slug` मा default हुन्छ |

**उदाहरण**

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

**फर्काउँछ** `{ "success": true, "slug": "portfolio" }`

---

### `list_post_types` {#listposttypes}

agent द्वारा दर्ता गरिएका सबै custom post types फर्काउँछ।

**Parameters** — कुनै छैन

**फर्काउँछ**

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

agent द्वारा पहिले दर्ता गरिएको custom post type दर्ता हटाउँछ। त्यस प्रकारका विद्यमान posts database मा रहन्छन् तर post type मार्फत अब पहुँचयोग्य हुँदैनन्।

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | हो | हटाउनुपर्ने post type key |

**फर्काउँछ** `{ "success": true, "slug": "portfolio" }`

---

## Custom Taxonomies {#custom-taxonomies}

यी क्षमताहरूले custom taxonomies व्यवस्थापन गर्छन्। CPTs जस्तै, taxonomy दर्ताहरू कायम राखिन्छन्।

### `register_taxonomy` {#registertaxonomy}

नयाँ custom taxonomy दर्ता गर्छ।

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | हो | taxonomy key (अधिकतम ३२ अक्षर) |
| `singular_label` | string | हो | मानवले पढ्न मिल्ने एकवचन नाम, जस्तै `Project Category` |
| `plural_label` | string | हो | मानवले पढ्न मिल्ने बहुवचन नाम, जस्तै `Project Categories` |
| `post_types` | array | हो | यो taxonomy जोडिनुपर्ने post type slugs |
| `hierarchical` | boolean | होइन | category-शैलीका लागि `true`, tag-शैलीका लागि `false`। Default `true` |
| `public` | boolean | होइन | terms सार्वजनिक रूपमा पहुँचयोग्य छन् कि छैनन्। Default `true` |
| `rewrite_slug` | string | होइन | taxonomy का लागि URL slug। `slug` मा default हुन्छ |

**उदाहरण**

```json
{
  "slug": "project-category",
  "singular_label": "Project Category",
  "plural_label": "Project Categories",
  "post_types": ["portfolio"],
  "hierarchical": true
}
```

**फर्काउँछ** `{ "success": true, "slug": "project-category" }`

---

### `list_taxonomies` {#listtaxonomies}

agent द्वारा दर्ता गरिएका सबै custom taxonomies फर्काउँछ।

**Parameters** — कुनै छैन

**फर्काउँछ**

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

agent द्वारा पहिले दर्ता गरिएको custom taxonomy दर्ता हटाउँछ।

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | हो | हटाउनुपर्ने taxonomy key |

**फर्काउँछ** `{ "success": true, "slug": "project-category" }`

---

## Design System {#design-system}

Design system क्षमताहरूले WordPress साइटको दृश्यात्मक प्रस्तुति परिमार्जन गर्छन् — custom CSS देखि block patterns र साइट logo सम्म।

### `inject_custom_css` {#injectcustomcss}

`wp_add_inline_style` मार्फत साइटको `<head>` मा CSS थप्छ। CSS `gratis_ai_agent_custom_css` option मा भण्डारण हुन्छ र क्षमता reset गर्दा सफासँग dequeued हुन्छ।

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `css` | string | हो | inject गर्नका लागि मान्य CSS |
| `label` | string | होइन | debug logs मा प्रयोग हुने यो CSS block का लागि मानवले पढ्न मिल्ने label। Default `"agent-injected"` |
| `replace` | boolean | होइन | यदि `true` भए, पहिले inject गरिएका सबै CSS प्रतिस्थापन गर्छ। Default `false` (थप्दै जान्छ) |

**उदाहरण**

```json
{
  "css": ":root { --primary: #1a1a2e; --accent: #e94560; } body { font-family: 'Inter', sans-serif; }",
  "label": "brand-colours",
  "replace": false
}
```

**फर्काउँछ** `{ "success": true, "bytes": 96 }`

---

### `add_block_pattern` {#addblockpattern}

WordPress pattern library मा पुनःप्रयोगयोग्य block pattern दर्ता गर्छ।

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | हो | Pattern identifier, जस्तै `gratis/hero-dark` |
| `title` | string | हो | editor मा देखाइने मानवले पढ्न मिल्ने pattern नाम |
| `content` | string | हो | pattern का लागि serialised block markup (HTML) |
| `categories` | array | होइन | Pattern category slugs, जस्तै `["featured", "hero"]` |
| `description` | string | होइन | pattern picker मा देखाइने छोटो विवरण |
| `keywords` | array | होइन | खोजी keywords |

**फर्काउँछ** `{ "success": true, "slug": "gratis/hero-dark" }`

---

### `list_block_patterns` {#listblockpatterns}

agent द्वारा दर्ता गरिएका सबै block patterns सूचीबद्ध गर्छ।

**Parameters** — कुनै छैन

**फिर्ता दिन्छ**

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

दिइएको attachment ID वा टाढाको छवि URL मा WordPress साइट लोगो सेट गर्छ। URL प्रदान गरिएमा, छवि डाउनलोड गरी मिडिया पुस्तकालयमा आयात गरिन्छ।

**प्यारामिटरहरू**

| प्यारामिटर | प्रकार | आवश्यक | विवरण |
|---|---|---|---|
| `attachment_id` | integer | होइन | अवस्थित मिडिया पुस्तकालय attachment को ID |
| `url` | string | होइन | आयात गरी लोगोका रूपमा सेट गर्न टाढाको छवि URL |

`attachment_id` वा `url` मध्ये एउटा प्रदान गर्नुपर्छ।

**फिर्ता दिन्छ** `{ "success": true, "attachment_id": 42 }`

---

### `apply_theme_json_preset` {#applythemejsonpreset}

सक्रिय theme को `theme.json` (वा `global-styles`) मा नाम दिइएको रङ/टाइपोग्राफी preset लागू गर्छ। Preset हरू Gratis AI Agent टोलीले व्यवस्थापन गरेका चयनित बन्डलहरू हुन्।

**प्यारामिटरहरू**

| प्यारामिटर | प्रकार | आवश्यक | विवरण |
|---|---|---|---|
| `preset` | string | हो | Preset नाम, जस्तै `minimal-dark`, `warm-editorial`, `corporate-blue` |
| `merge` | boolean | होइन | यदि `true` भएमा, प्रतिस्थापन गर्नुको सट्टा अवस्थित मानहरूसँग merge गर्छ। पूर्वनिर्धारित `false` |

**उपलब्ध preset हरू**

| Preset | विवरण |
|---|---|
| `minimal-dark` | करिब-कालो पृष्ठभूमि, सेतो पाठ, एउटै accent रङ |
| `warm-editorial` | न्यानो off-white पृष्ठभूमि, serif शीर्षकहरू, माटो-जस्ता accent रङहरू |
| `corporate-blue` | पेशागत टाइपोग्राफीसहित नेभी र सेतो palette |
| `vibrant-startup` | चम्किला gradients, गोलाकार कुनाहरू, आधुनिक sans-serif प्रकार |
| `classic-blog` | तटस्थ खैरा रङहरू, आरामदायी line-height, परम्परागत layout spacing |

**फिर्ता दिन्छ** `{ "success": true, "preset": "minimal-dark" }`

---

## वैश्विक शैलीहरू {#global-styles}

वैश्विक शैली क्षमताहरूले WordPress Global Styles API मार्फत theme.json मानहरू पढ्छन् र लेख्छन्, जसले साइटभरि सबै blocks र templates लाई प्रभाव पार्छ।

### `get_global_styles` {#getglobalstyles}

हालको वैश्विक शैली configuration फिर्ता दिन्छ।

**प्यारामिटरहरू**

| प्यारामिटर | प्रकार | आवश्यक | विवरण |
|---|---|---|---|
| `path` | string | होइन | कुनै विशिष्ट मानमा JSON pointer, जस्तै `/color/palette` वा `/typography/fontSizes`। छोडिएमा पूरा object फिर्ता दिन्छ। |

**फिर्ता दिन्छ** पूरा वैश्विक शैली object वा `path` मा रहेको मान।

---

### `set_global_styles` {#setglobalstyles}

वैश्विक शैली configuration मा एक वा बढी मानहरू अद्यावधिक गर्छ।

**प्यारामिटरहरू**

| प्यारामिटर | प्रकार | आवश्यक | विवरण |
|---|---|---|---|
| `path` | string | हो | सेट गर्नुपर्ने मानमा JSON pointer, जस्तै `/color/palette` |
| `value` | any | हो | नयाँ मान |

**उदाहरण** — palette मा रङ थप्नुहोस्

```json
{
  "path": "/color/palette",
  "value": [
    { "slug": "primary", "color": "#1a1a2e", "name": "Primary" },
    { "slug": "accent",  "color": "#e94560", "name": "Accent" }
  ]
}
```

**फिर्ता दिन्छ** `{ "success": true, "path": "/color/palette" }`

---

### `reset_global_styles` {#resetglobalstyles}

agent द्वारा लागू गरिएका सबै वैश्विक शैली परिवर्तनहरू reset गर्छ, theme का पूर्वनिर्धारित मानहरू पुनर्स्थापित गर्छ।

**प्यारामिटरहरू** — छैनन्

**फिर्ता दिन्छ** `{ "success": true }`

---

## नेभिगेसन मेनुहरू {#navigation-menus}

नेभिगेसन मेनु क्षमताहरूले WordPress nav menus र तिनका items सिर्जना तथा व्यवस्थापन गर्छन्।

### `create_menu` {#createmenu}

नयाँ WordPress नेभिगेसन मेनु सिर्जना गर्छ।

**प्यारामिटरहरू**

| प्यारामिटर | प्रकार | आवश्यक | विवरण |
|---|---|---|---|
| `name` | string | हो | मेनु नाम, जस्तै `Primary Navigation` |
| `location` | string | होइन | यो मेनु assign गर्ने theme location, जस्तै `primary` |

**फिर्ता दिन्छ** `{ "success": true, "menu_id": 7 }`

---

### `update_menu` {#updatemenu}

मेनुको नाम परिवर्तन गर्छ वा यसलाई theme location मा पुनः assign गर्छ।

**प्यारामिटरहरू**

| प्यारामिटर | प्रकार | आवश्यक | विवरण |
|---|---|---|---|
| `menu_id` | integer | हो | अद्यावधिक गर्नुपर्ने मेनुको ID |
| `name` | string | होइन | नयाँ मेनु नाम |
| `location` | string | होइन | assign वा पुनः assign गर्ने theme location |

**फिर्ता दिन्छ** `{ "success": true, "menu_id": 7 }`

---

### `add_menu_item` {#addmenuitem}

अवस्थित नेभिगेसन मेनुमा item थप्छ।

**प्यारामिटरहरू**

| प्यारामिटर | प्रकार | आवश्यक | विवरण |
|---|---|---|---|
| `menu_id` | integer | हो | लक्षित मेनुको ID |
| `type` | string | हो | Item प्रकार: `custom`, `post_type`, वा `taxonomy` |
| `title` | string | होइन | मेनु item का लागि label (`custom` प्रकारका लागि आवश्यक) |
| `url` | string | होइन | `custom` items का लागि URL |
| `object_id` | integer | होइन | `post_type`/`taxonomy` items का लागि Post ID वा term ID |
| `parent_id` | integer | होइन | यस item लाई तल राख्ने Menu item ID |
| `position` | integer | होइन | मेनुमा zero-based position |

**फिर्ता दिन्छ** `{ "success": true, "item_id": 12 }`

---

### `remove_menu_item` {#removemenuitem}

नेभिगेसन मेनुबाट item हटाउँछ।

**प्यारामिटरहरू**

| प्यारामिटर | प्रकार | आवश्यक | विवरण |
|---|---|---|---|
| `item_id` | integer | हो | हटाउनुपर्ने Menu item ID |

**फिर्ता दिन्छ** `{ "success": true, "item_id": 12 }`

---

### `list_menus` {#listmenus}

सबै WordPress नेभिगेसन मेनुहरू, तिनका assigned theme locations सहित, सूचीबद्ध गर्छ।

**प्यारामिटरहरू** — छैनन्

**फिर्ता दिन्छ**

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

## विकल्प व्यवस्थापन {#options-management}

विकल्प क्षमताहरूले `get_option` / `update_option` मार्फत WordPress options पढ्छन् र लेख्छन्। निर्मित सुरक्षा blocklist ले महत्वपूर्ण settings को आकस्मिक परिमार्जन रोक्छ।

### `get_option` {#getoption}

WordPress option पढ्छ।

**प्यारामिटरहरू**

| प्यारामिटर | प्रकार | आवश्यक | विवरण |
|---|---|---|---|
| `option_name` | string | हो | option key, जस्तै `blogname` |

**फिर्ता दिन्छ** `{ "option_name": "blogname", "value": "My Site" }`

यदि `option_name` सुरक्षा blocklist मा छ भने error फिर्ता दिन्छ।

---

### `set_option` {#setoption}

WordPress option लेख्छ।

**प्यारामिटरहरू**

| प्यारामिटर | प्रकार | आवश्यक | विवरण |
|---|---|---|---|
| `option_name` | string | हो | option key |
| `value` | any | हो | नयाँ मान (arrays/objects का लागि स्वचालित रूपमा serialise गरिन्छ) |
| `autoload` | string | होइन | `"yes"` वा `"no"`। पूर्वनिर्धारितले अवस्थित autoload setting जोगाउँछ |

`option_name` सुरक्षा ब्लकलिस्टमा भए त्रुटि फर्काउँछ।

**फर्काउँछ** `{ "success": true, "option_name": "blogname" }`

---

### `delete_option` {#deleteoption}

WordPress विकल्प मेटाउँछ।

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `option_name` | string | Yes | मेटाउनुपर्ने विकल्प कुञ्जी |

`option_name` सुरक्षा ब्लकलिस्टमा भए त्रुटि फर्काउँछ।

**फर्काउँछ** `{ "success": true, "option_name": "my_custom_option" }`

---

### `list_options` {#listoptions}

ढाँचासँग मिल्ने WordPress विकल्पहरू सूचीबद्ध गर्छ।

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `pattern` | string | No | विकल्प नामहरू फिल्टर गर्न SQL LIKE ढाँचा, जस्तै `gratis_%`। नछोडिएको भए सबै विकल्पहरू फर्काउँछ (ठूला डेटाबेसहरूमा सावधानीपूर्वक प्रयोग गर्नुहोस्)। |
| `limit` | integer | No | नतिजाहरूको अधिकतम संख्या। पूर्वनिर्धारित `50`, अधिकतम `500` |

**फर्काउँछ**

```json
{
  "options": [
    { "option_name": "gratis_ai_agent_version", "autoload": "yes" }
  ],
  "total": 1
}
```

---

## सामग्री व्यवस्थापन {#content-management}

सामग्री व्यवस्थापन क्षमताहरूले WordPress पोस्टहरू र पृष्ठहरू सिर्जना र सम्पादन गर्छन्। Post ID हरू फर्काइन्छन् ताकि बहु-क्षमता योजनाहरूमा पछिल्ला चरणहरूले सिर्जना गरिएको सामग्रीलाई सन्दर्भ गर्न सकून्।

### `create_post` {#createpost}

नयाँ WordPress पोस्ट, पृष्ठ, वा कस्टम पोस्ट प्रकार प्रविष्टि सिर्जना गर्छ।

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `title` | string | Yes | पोस्ट शीर्षक |
| `content` | string | No | पोस्ट मुख्य सामग्री — सादा पाठ, HTML, वा सिरियलाइज गरिएको ब्लक मार्कअप स्वीकार गर्छ |
| `status` | string | No | `draft`, `publish`, `pending`, `private`। पूर्वनिर्धारित `draft` |
| `post_type` | string | No | पोस्ट प्रकार स्लग, जस्तै `post`, `page`, वा कुनै पनि दर्ता गरिएको CPT। पूर्वनिर्धारित `post` |
| `excerpt` | string | No | अभिलेखहरू र खोज नतिजाहरूमा देखाइने छोटो सारांश |
| `categories` | array | No | तोक्नुपर्ने श्रेणी नामहरू वा ID हरूको एरे |
| `tags` | array | No | तोक्नुपर्ने ट्याग नामहरू वा ID हरूको एरे |
| `author` | integer | No | पोस्ट लेखकको रूपमा सेट गर्नुपर्ने WordPress प्रयोगकर्ता ID। हालको प्रयोगकर्तामा पूर्वनिर्धारित हुन्छ |
| `date` | string | No | ISO 8601 ढाँचामा प्रकाशन मिति, जस्तै `2026-05-01T09:00:00` |
| `page_template` | string | No | यो पोस्ट वा पृष्ठलाई तोक्नुपर्ने टेम्पलेट फाइल, जस्तै `page-full-width.php`। `post_type` `page` वा पृष्ठ टेम्पलेटहरू समर्थन गर्ने CPT हुँदा मात्र अर्थपूर्ण हुन्छ। |

**उदाहरण**

```json
{
  "title": "Welcome to Our New Site",
  "content": "<!-- wp:paragraph --><p>Hello world!</p><!-- /wp:paragraph -->",
  "status": "publish",
  "post_type": "page",
  "page_template": "page-full-width.php"
}
```

**फर्काउँछ** `{ "success": true, "post_id": 42, "permalink": "https://example.com/welcome/" }`

---

### `update_post` {#updatepost}

अवस्थित WordPress पोस्ट वा पृष्ठ अपडेट गर्छ।

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `post_id` | integer | Yes | अपडेट गर्नुपर्ने पोस्टको ID |
| `title` | string | No | नयाँ पोस्ट शीर्षक |
| `content` | string | No | नयाँ पोस्ट मुख्य सामग्री |
| `status` | string | No | नयाँ स्थिति: `draft`, `publish`, `pending`, `private` |
| `excerpt` | string | No | नयाँ अंश |
| `categories` | array | No | पूर्ण श्रेणी सूचीलाई नामहरू वा ID हरूको यो एरेसँग प्रतिस्थापन गर्नुहोस् |
| `tags` | array | No | पूर्ण ट्याग सूचीलाई नामहरू वा ID हरूको यो एरेसँग प्रतिस्थापन गर्नुहोस् |
| `page_template` | string | No | यो पोस्ट वा पृष्ठलाई तोक्नुपर्ने नयाँ टेम्पलेट फाइल, जस्तै `page-full-width.php`। टेम्पलेट तोकाइ हटाउन र theme पूर्वनिर्धारितमा फर्काउन खाली स्ट्रिङ पठाउनुहोस्। |

**उदाहरण** — सिर्जनापछि टेम्पलेट परिवर्तन गर्नुहोस्

```json
{
  "post_id": 42,
  "page_template": "page-full-width.php"
}
```

**फर्काउँछ** `{ "success": true, "post_id": 42 }`

---

### `batch_create_posts` {#batchcreateposts}

एउटै क्षमता कलमा धेरै पोस्टहरू सिर्जना गर्छ, साइट निर्माण वा थोक सामग्री आयातका क्रममा राउन्ड-ट्रिपहरू घटाउँदै। पोस्टहरू क्रमशः सिर्जना गरिन्छन्; कुनै एक असफल भए पनि अरू जारी रहन्छन् र असफलता नतिजा एरेमा रिपोर्ट गरिन्छ।

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `posts` | array | Yes | पोस्ट वस्तुहरूको एरे, प्रत्येकले `create_post` जस्तै उही प्यारामिटरहरू स्वीकार गर्छ |
| `stop_on_error` | boolean | No | `true` भए, पहिलो असफलतापछि प्रक्रिया रोक्नुहोस्। पूर्वनिर्धारित `false` |

**उदाहरण**

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

**फर्काउँछ**

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

अवस्थित पोस्ट वा पृष्ठमा फिचर्ड छवि (पोस्ट थम्बनेल) तोक्छ। अवस्थित Media Library संलग्नक ID वा टाढाको छवि URL स्वीकार गर्छ; URL उपलब्ध गराइँदा, छवि स्वतः डाउनलोड र आयात गरिन्छ।

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `post_id` | integer | Yes | अपडेट गर्नुपर्ने पोस्ट वा पृष्ठको ID |
| `attachment_id` | integer | No | अवस्थित Media Library संलग्नकको ID |
| `url` | string | No | आयात गरी फिचर्ड छविको रूपमा सेट गर्नुपर्ने टाढाको छवि URL |
| `alt_text` | string | No | URL बाट आयात गरिएको भए संलग्नकमा लागू गर्नुपर्ने वैकल्पिक पाठ |

`attachment_id` वा `url` मध्ये एउटा उपलब्ध गराउनुपर्छ।

**फर्काउँछ** `{ "success": true, "post_id": 42, "attachment_id": 17 }`

---

### `create_contact_form` {#createcontactform}

सक्रिय फारम plugin प्रयोग गरेर सम्पर्क फारम सिर्जना गर्छ (स्थापित भएको आधारमा Contact Form 7, WPForms, Fluent Forms, वा Gravity Forms)। कुनै पनि पोस्ट वा पृष्ठमा एम्बेड गर्न सकिने shortcode फर्काउँछ।

**Parameters**

| प्यारामिटर | प्रकार | आवश्यक | विवरण |
|---|---|---|---|
| `title` | string | हो | form plugin admin मा देखाइने फारमको नाम |
| `fields` | array | हो | फारमका फिल्डहरूको क्रमबद्ध सूची (तलको फिल्ड वस्तु हेर्नुहोस्) |
| `recipient` | string | होइन | सबमिशनहरू प्राप्त गर्ने इमेल ठेगाना। पूर्वनिर्धारित रूपमा WordPress admin इमेल हुन्छ |
| `subject` | string | होइन | इमेल विषय पङ्क्ति। Contact Form 7 प्रयोग गर्दा `[your-name]` र `[your-subject]` placeholders समर्थन गर्छ |
| `confirmation_message` | string | होइन | सफल सबमिशनपछि देखाइने सन्देश। पूर्वनिर्धारित: `"Thank you for your message. We'll be in touch soon."` |

**फिल्ड वस्तु**

| कुञ्जी | प्रकार | आवश्यक | विवरण |
|---|---|---|---|
| `name` | string | हो | आन्तरिक फिल्ड नाम / मेसिन कुञ्जी |
| `label` | string | हो | फारममा देखाइने मानिसले पढ्न मिल्ने लेबल |
| `type` | string | हो | `text`, `email`, `tel`, `textarea`, `select`, `checkbox`, `radio`, `file`, `date` |
| `required` | boolean | होइन | सबमिशनअघि फिल्ड भर्नैपर्ने हो कि होइन। पूर्वनिर्धारित `false` |
| `options` | array | होइन | `select`, `checkbox`, र `radio` फिल्डहरूका विकल्पहरू |
| `placeholder` | string | होइन | पाठ-प्रकारका इनपुटहरूका लागि placeholder पाठ |

**उदाहरण**

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

**फिर्ता गर्छ**

```json
{
  "success": true,
  "form_id": 3,
  "shortcode": "[contact-form-7 id=\"3\" title=\"Restaurant Booking Enquiry\"]"
}
```

---

## दृश्य समीक्षा {#visual-review}

दृश्य समीक्षा क्षमताहरूले agent लाई प्रत्यक्ष पृष्ठहरूको screenshots लिन र तिनको विश्लेषण गर्न दिन्छन्, जसले कुनै browser extension आवश्यक नपारी स्वायत्त डिजाइन समीक्षा, अघिल्लो/पछिल्लो तुलना, र दृश्य regression जाँचहरू सक्षम बनाउँछ।

### `capture_screenshot` {#capturescreenshot}

server-side headless browser प्रयोग गरेर दिइएको URL मा WordPress पृष्ठको screenshot लिन्छ। छवि Media Library मा सुरक्षित गरिन्छ र CDN URL फिर्ता गरिन्छ।

**प्यारामिटरहरू**

| प्यारामिटर | प्रकार | आवश्यक | विवरण |
|---|---|---|---|
| `url` | string | हो | screenshot लिनुपर्ने पृष्ठको पूरा URL, जस्तै `https://example.com/about/` |
| `width` | integer | होइन | pixels मा viewport चौडाइ। पूर्वनिर्धारित `1280` |
| `height` | integer | होइन | pixels मा viewport उचाइ। पूर्वनिर्धारित `800` |
| `full_page` | boolean | होइन | केवल viewport को सट्टा पूरा scroll गर्न मिल्ने पृष्ठ capture गर्छ। पूर्वनिर्धारित `false` |
| `delay_ms` | integer | होइन | capture गर्नुअघि पृष्ठ लोड भएपछि पर्खने milliseconds, animated सामग्रीका लागि उपयोगी। पूर्वनिर्धारित `500` |
| `label` | string | होइन | Media Library मा attachment सँग भण्डारण गरिने मानिसले पढ्न मिल्ने लेबल |

**फिर्ता गर्छ**

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

दुई screenshots लिन्छ र परिवर्तन भएका क्षेत्रहरू highlight गर्ने diff image सहित visual diff score फिर्ता गर्छ। डिजाइन परिवर्तनले अपेक्षित नतिजा दिएको छ कि छैन पुष्टि गर्न वा अनपेक्षित regressions पत्ता लगाउन उपयोगी।

**प्यारामिटरहरू**

| प्यारामिटर | प्रकार | आवश्यक | विवरण |
|---|---|---|---|
| `before_url` | string | हो | "before" अवस्थाका रूपमा capture गर्नुपर्ने पृष्ठको URL |
| `after_url` | string | हो | "after" अवस्थाका रूपमा capture गर्नुपर्ने पृष्ठको URL। समयअनुसार तुलना गर्दा उही URL पनि हुन सक्छ |
| `width` | integer | होइन | दुवै captures का लागि viewport चौडाइ। पूर्वनिर्धारित `1280` |
| `threshold` | float | होइन | pixel-difference threshold (0.0–1.0)। यो tolerance भित्रका pixels अपरिवर्तित मानिन्छन्। पूर्वनिर्धारित `0.1` |

**फिर्ता गर्छ**

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

`diff_score` को `0.0` ले कुनै देखिने परिवर्तन छैन भन्ने जनाउँछ; `1.0` ले हरेक pixel परिवर्तन भएको जनाउँछ।

---

### `review_page_design` {#reviewpagedesign}

पृष्ठको screenshot लिन्छ र दृश्य विश्लेषणका लागि language model मा पठाउँछ। layout, typography, रङ प्रयोग, र accessibility सम्बन्धी चिन्ताहरू समेट्ने संरचित मूल्याङ्कन फिर्ता गर्छ।

**प्यारामिटरहरू**

| प्यारामिटर | प्रकार | आवश्यक | विवरण |
|---|---|---|---|
| `url` | string | हो | समीक्षा गर्नुपर्ने पृष्ठको पूरा URL |
| `focus` | string | होइन | जोड दिनुपर्ने समीक्षा क्षेत्रहरूको comma-separated सूची: `layout`, `typography`, `colour`, `accessibility`, `mobile`। पूर्वनिर्धारित: सबै क्षेत्रहरू |
| `width` | integer | होइन | viewport चौडाइ। पूर्वनिर्धारित `1280` |

**फिर्ता गर्छ**

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

## स्थापना गर्न मिल्ने क्षमताहरू {#installable-abilities}

स्थापना गर्न मिल्ने क्षमता Registry ले तपाईंलाई WordPress plugins का रूपमा वितरण गरिएका थप क्षमता packs द्वारा agent विस्तार गर्न दिन्छ। प्रत्येक pack ले standard ability API प्रयोग गरेर एक वा धेरै क्षमताहरू register गर्छ।

### `list_available_abilities` {#listavailableabilities}

registry बाट स्थापना गर्न उपलब्ध क्षमता packs को catalogue फिर्ता गर्छ।

**प्यारामिटरहरू**

| प्यारामिटर | प्रकार | आवश्यक | विवरण |
|---|---|---|---|
| `category` | string | होइन | category अनुसार फिल्टर गर्नुहोस्: `ecommerce`, `seo`, `media`, `social`, `developer` |

**फिर्ता गर्छ**

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

रजिस्ट्रीबाट क्षमता प्याक डाउनलोड गरेर सक्रिय गर्छ।

**प्यारामिटरहरू**

| प्यारामिटर | प्रकार | आवश्यक | विवरण |
|---|---|---|---|
| `slug` | string | हो | क्षमता प्याक प्लगइन slug |

**फिर्ता गर्छ** `{ "success": true, "slug": "gratis-ai-agent-woocommerce", "abilities_added": 3 }`

---

### `recommend_plugin` {#recommendplugin}

वर्णन गरिएको उपयोग अवस्थाका लागि सबैभन्दा राम्रो प्लगइन फेला पार्न क्षमता रजिस्ट्रीमा क्वेरी गर्छ र, वैकल्पिक रूपमा, त्यसलाई स्थापना गर्छ।

**प्यारामिटरहरू**

| प्यारामिटर | प्रकार | आवश्यक | विवरण |
|---|---|---|---|
| `description` | string | हो | चाहिएको कार्यक्षमताको प्राकृतिक भाषाको विवरण |
| `install` | boolean | होइन | यदि `true` भएमा, सिफारिस गरिएको प्लगइन तुरुन्तै स्थापना गर्छ। पूर्वनिर्धारित `false` |

**उदाहरण**

```json
{
  "description": "I need a contact form with file upload support and spam protection",
  "install": false
}
```

**फिर्ता गर्छ**

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

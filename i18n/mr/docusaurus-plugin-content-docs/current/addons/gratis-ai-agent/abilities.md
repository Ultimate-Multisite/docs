---
title: क्षमता संदर्भ
sidebar_position: 2
_i18n_hash: 1a83460648ea789162af417c6b11eecc
---
# क्षमतांचा संदर्भ

क्षमता या Gratis AI Agent तुमच्या WordPress स्थापनेवर वापरू शकणाऱ्या मूलभूत क्रिया आहेत. प्रत्येक क्षमता ही नोंदणीकृत PHP class असते जी JSON schema उघड करते — agent रनटाइमवर हे schema वाचून कोणते parameters आवश्यक आहेत आणि क्षमता काय परत करते हे समजतो.

हे पृष्ठ Gratis AI Agent v1.9.0 सोबत येणाऱ्या सर्व क्षमतांचे दस्तऐवजीकरण करते.

---

## सानुकूल पोस्ट प्रकार

या क्षमता agent द्वारे नोंदणीकृत सानुकूल पोस्ट प्रकार (CPTs) व्यवस्थापित करतात. नोंदणी WordPress options तक्त्यात कायम ठेवली जाते, त्यामुळे plugin निष्क्रिय करून पुन्हा सक्रिय केले तरी ती टिकून राहते.

### `register_post_type`

नवीन सानुकूल पोस्ट प्रकार नोंदणीकृत करते.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | पोस्ट प्रकाराची key (कमाल 20 अक्षरे, मोठी अक्षरे नाहीत, जागा नाहीत) |
| `singular_label` | string | Yes | मानव-वाचनीय एकवचनी नाव, उदा. `Portfolio Item` |
| `plural_label` | string | Yes | मानव-वाचनीय अनेकवचनी नाव, उदा. `Portfolio Items` |
| `public` | boolean | No | पोस्ट प्रकार सार्वजनिकरीत्या प्रवेशयोग्य आहे का. Default `true` |
| `supports` | array | No | समर्थित करावयाची वैशिष्ट्ये: `title`, `editor`, `thumbnail`, `excerpt`, `comments`, `revisions`, `custom-fields`. Default `["title","editor"]` |
| `has_archive` | boolean | No | पोस्ट प्रकाराचे संग्रह पृष्ठ सक्षम आहे का. Default `false` |
| `menu_icon` | string | No | admin menu icon साठी Dashicons class किंवा URL. Default `"dashicons-admin-post"` |
| `rewrite_slug` | string | No | पोस्ट प्रकारासाठी URL slug. Default `slug` |

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

**परत करते** `{ "success": true, "slug": "portfolio" }`

---

### `list_post_types`

agent द्वारे नोंदणीकृत सर्व सानुकूल पोस्ट प्रकार परत करते.

**Parameters** — काहीही नाही

**परत करते**

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

agent द्वारे पूर्वी नोंदणीकृत केलेला सानुकूल पोस्ट प्रकार अनोंदणीकृत करते. त्या प्रकारच्या विद्यमान पोस्ट database मध्ये राहतात, पण त्या पोस्ट प्रकाराद्वारे पुढे प्रवेशयोग्य राहत नाहीत.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | काढून टाकावयाची पोस्ट प्रकार key |

**परत करते** `{ "success": true, "slug": "portfolio" }`

---

## सानुकूल वर्गीकरणे

या क्षमता सानुकूल वर्गीकरणे व्यवस्थापित करतात. CPTs प्रमाणेच, taxonomy नोंदणी कायम ठेवली जाते.

### `register_taxonomy`

नवीन सानुकूल taxonomy नोंदणीकृत करते.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | taxonomy key (कमाल 32 अक्षरे) |
| `singular_label` | string | Yes | मानव-वाचनीय एकवचनी नाव, उदा. `Project Category` |
| `plural_label` | string | Yes | मानव-वाचनीय अनेकवचनी नाव, उदा. `Project Categories` |
| `post_types` | array | Yes | ही taxonomy जोडली जावी असे पोस्ट प्रकार slugs |
| `hierarchical` | boolean | No | category-शैलीसाठी `true`, tag-शैलीसाठी `false`. Default `true` |
| `public` | boolean | No | terms सार्वजनिकरीत्या प्रवेशयोग्य आहेत का. Default `true` |
| `rewrite_slug` | string | No | taxonomy साठी URL slug. Default `slug` |

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

**परत करते** `{ "success": true, "slug": "project-category" }`

---

### `list_taxonomies`

agent द्वारे नोंदणीकृत सर्व सानुकूल taxonomies परत करते.

**Parameters** — काहीही नाही

**परत करते**

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

agent द्वारे पूर्वी नोंदणीकृत केलेली सानुकूल taxonomy अनोंदणीकृत करते.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | काढून टाकावयाची taxonomy key |

**परत करते** `{ "success": true, "slug": "project-category" }`

---

## डिझाइन प्रणाली

डिझाइन प्रणालीच्या क्षमता WordPress site चे दृश्य सादरीकरण बदलतात — सानुकूल CSS पासून block patterns आणि site logo पर्यंत.

### `inject_custom_css`

`wp_add_inline_style` द्वारे site च्या `<head>` मध्ये CSS जोडते. CSS `gratis_ai_agent_custom_css` option मध्ये साठवले जाते आणि क्षमता reset केल्यावर स्वच्छपणे dequeue केले जाते.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `css` | string | Yes | inject करण्यासाठी वैध CSS |
| `label` | string | No | या CSS block साठी मानव-वाचनीय label, debug logs मध्ये वापरले जाते. Default `"agent-injected"` |
| `replace` | boolean | No | `true` असल्यास, पूर्वी inject केलेले सर्व CSS बदलते. Default `false` (जोडते) |

**उदाहरण**

```json
{
  "css": ":root { --primary: #1a1a2e; --accent: #e94560; } body { font-family: 'Inter', sans-serif; }",
  "label": "brand-colours",
  "replace": false
}
```

**परत करते** `{ "success": true, "bytes": 96 }`

---

### `add_block_pattern`

WordPress pattern library मध्ये पुन्हा वापरता येणारा block pattern नोंदणीकृत करते.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | Pattern identifier, उदा. `gratis/hero-dark` |
| `title` | string | Yes | editor मध्ये दाखवले जाणारे मानव-वाचनीय pattern नाव |
| `content` | string | Yes | pattern साठी serialised block markup (HTML) |
| `categories` | array | No | Pattern category slugs, उदा. `["featured", "hero"]` |
| `description` | string | No | pattern picker मध्ये दाखवले जाणारे छोटे वर्णन |
| `keywords` | array | No | शोध keywords |

**परत करते** `{ "success": true, "slug": "gratis/hero-dark" }`

---

### `list_block_patterns`

agent द्वारे नोंदणीकृत सर्व block patterns सूचीबद्ध करते.

**Parameters** — काहीही नाही

**परतावा**

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

### `set_site_logo`

दिलेल्या attachment ID किंवा दूरस्थ प्रतिमा URL वर WordPress साइटचा लोगो सेट करते. URL दिल्यास, प्रतिमा डाउनलोड केली जाते आणि Media Library मध्ये आयात केली जाते.

**पॅरामीटर्स**

| पॅरामीटर | प्रकार | आवश्यक | वर्णन |
|---|---|---|---|
| `attachment_id` | integer | नाही | विद्यमान Media Library attachment चा ID |
| `url` | string | नाही | आयात करून लोगो म्हणून सेट करण्यासाठी दूरस्थ प्रतिमा URL |

`attachment_id` किंवा `url` यापैकी एक देणे आवश्यक आहे.

**परतावा** `{ "success": true, "attachment_id": 42 }`

---

### `apply_theme_json_preset`

सक्रिय theme च्या `theme.json` (किंवा `global-styles`) वर नामांकित रंग/टायपोग्राफी preset लागू करते. Presets हे Gratis AI Agent टीमने देखभाल केलेले निवडक संच आहेत.

**पॅरामीटर्स**

| पॅरामीटर | प्रकार | आवश्यक | वर्णन |
|---|---|---|---|
| `preset` | string | होय | Preset नाव, उदा. `minimal-dark`, `warm-editorial`, `corporate-blue` |
| `merge` | boolean | नाही | `true` असल्यास, बदलण्याऐवजी विद्यमान मूल्यांमध्ये विलीन करा. डीफॉल्ट `false` |

**उपलब्ध presets**

| Preset | वर्णन |
|---|---|
| `minimal-dark` | जवळपास काळी पार्श्वभूमी, पांढरा मजकूर, एकच उठावदार रंग |
| `warm-editorial` | उबदार ऑफ-व्हाइट पार्श्वभूमी, serif शीर्षके, मातीच्या छटांचे उठावदार रंग |
| `corporate-blue` | व्यावसायिक टायपोग्राफीसह नेव्ही आणि पांढरा रंगसंच |
| `vibrant-startup` | तेजस्वी gradients, गोलाकार कोपरे, आधुनिक sans-serif प्रकार |
| `classic-blog` | तटस्थ करडे रंग, आरामदायक line-height, पारंपरिक layout spacing |

**परतावा** `{ "success": true, "preset": "minimal-dark" }`

---

## Global Styles

Global Styles क्षमता WordPress Global Styles API द्वारे theme.json मूल्ये वाचतात आणि लिहितात, ज्यामुळे साइटभर सर्व blocks आणि templates प्रभावित होतात.

### `get_global_styles`

सध्याचे global styles configuration परत करते.

**पॅरामीटर्स**

| पॅरामीटर | प्रकार | आवश्यक | वर्णन |
|---|---|---|---|
| `path` | string | नाही | विशिष्ट मूल्यासाठी JSON pointer, उदा. `/color/palette` किंवा `/typography/fontSizes`. वगळल्यास संपूर्ण object परत करते. |

**परतावा** पूर्ण global styles object किंवा `path` वरील मूल्य.

---

### `set_global_styles`

global styles configuration मधील एक किंवा अधिक मूल्ये अद्ययावत करते.

**पॅरामीटर्स**

| पॅरामीटर | प्रकार | आवश्यक | वर्णन |
|---|---|---|---|
| `path` | string | होय | सेट करावयाच्या मूल्यासाठी JSON pointer, उदा. `/color/palette` |
| `value` | any | होय | नवीन मूल्य |

**उदाहरण** — palette मध्ये रंग जोडा

```json
{
  "path": "/color/palette",
  "value": [
    { "slug": "primary", "color": "#1a1a2e", "name": "Primary" },
    { "slug": "accent",  "color": "#e94560", "name": "Accent" }
  ]
}
```

**परतावा** `{ "success": true, "path": "/color/palette" }`

---

### `reset_global_styles`

agent-लागू केलेले सर्व global styles बदल reset करते, theme defaults पुनर्स्थापित करते.

**पॅरामीटर्स** — काहीही नाही

**परतावा** `{ "success": true }`

---

## Navigation Menus

Navigation Menu क्षमता WordPress nav menus आणि त्यांचे items तयार व व्यवस्थापित करतात.

### `create_menu`

नवीन WordPress navigation menu तयार करते.

**पॅरामीटर्स**

| पॅरामीटर | प्रकार | आवश्यक | वर्णन |
|---|---|---|---|
| `name` | string | होय | Menu नाव, उदा. `Primary Navigation` |
| `location` | string | नाही | हा menu नेमण्यासाठी Theme location, उदा. `primary` |

**परतावा** `{ "success": true, "menu_id": 7 }`

---

### `update_menu`

menu चे नाव बदलते किंवा ते theme location ला पुन्हा नेमते.

**पॅरामीटर्स**

| पॅरामीटर | प्रकार | आवश्यक | वर्णन |
|---|---|---|---|
| `menu_id` | integer | होय | अद्ययावत करावयाच्या menu चा ID |
| `name` | string | नाही | नवीन menu नाव |
| `location` | string | नाही | नेमण्यासाठी किंवा पुन्हा नेमण्यासाठी Theme location |

**परतावा** `{ "success": true, "menu_id": 7 }`

---

### `add_menu_item`

विद्यमान navigation menu मध्ये item जोडते.

**पॅरामीटर्स**

| पॅरामीटर | प्रकार | आवश्यक | वर्णन |
|---|---|---|---|
| `menu_id` | integer | होय | लक्ष्य menu चा ID |
| `type` | string | होय | Item प्रकार: `custom`, `post_type`, किंवा `taxonomy` |
| `title` | string | नाही | menu item साठी लेबल (`custom` प्रकारासाठी आवश्यक) |
| `url` | string | नाही | `custom` items साठी URL |
| `object_id` | integer | नाही | `post_type`/`taxonomy` items साठी Post ID किंवा term ID |
| `parent_id` | integer | नाही | हा item ज्याखाली nest करायचा त्या Menu item चा ID |
| `position` | integer | नाही | menu मधील शून्य-आधारित स्थान |

**परतावा** `{ "success": true, "item_id": 12 }`

---

### `remove_menu_item`

navigation menu मधून item काढते.

**पॅरामीटर्स**

| पॅरामीटर | प्रकार | आवश्यक | वर्णन |
|---|---|---|---|
| `item_id` | integer | होय | काढण्यासाठी Menu item ID |

**परतावा** `{ "success": true, "item_id": 12 }`

---

### `list_menus`

सर्व WordPress navigation menus, त्यांना नेमलेल्या theme locations सह, सूचीबद्ध करते.

**पॅरामीटर्स** — काहीही नाही

**परतावा**

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

Options क्षमता `get_option` / `update_option` द्वारे WordPress options वाचतात आणि लिहितात. अंगभूत safety blocklist महत्त्वाच्या settings मध्ये अपघाती बदल होण्यापासून प्रतिबंध करते.

### `get_option`

WordPress option वाचते.

**पॅरामीटर्स**

| पॅरामीटर | प्रकार | आवश्यक | वर्णन |
|---|---|---|---|
| `option_name` | string | होय | option key, उदा. `blogname` |

**परतावा** `{ "option_name": "blogname", "value": "My Site" }`

`option_name` safety blocklist वर असल्यास error परत करते.

---

### `set_option`

WordPress option लिहिते.

**पॅरामीटर्स**

| पॅरामीटर | प्रकार | आवश्यक | वर्णन |
|---|---|---|---|
| `option_name` | string | होय | option key |
| `value` | any | होय | नवीन मूल्य (arrays/objects साठी आपोआप serialised) |
| `autoload` | string | नाही | `"yes"` किंवा `"no"`. डीफॉल्ट विद्यमान autoload setting जपतो |

`option_name` safety blocklist वर असल्यास त्रुटी परत करते.

**परत करते** `{ "success": true, "option_name": "blogname" }`

---

### `delete_option`

WordPress option हटवते.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `option_name` | string | Yes | हटवायची option key |

`option_name` safety blocklist वर असल्यास त्रुटी परत करते.

**परत करते** `{ "success": true, "option_name": "my_custom_option" }`

---

### `list_options`

नमुन्याशी जुळणारे WordPress options सूचीबद्ध करते.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `pattern` | string | No | option नावे फिल्टर करण्यासाठी SQL LIKE नमुना, उदा. `gratis_%`. वगळल्यास सर्व options परत करते (मोठ्या databases वर सावधगिरीने वापरा). |
| `limit` | integer | No | परिणामांची कमाल संख्या. Default `50`, कमाल `500` |

**परत करते**

```json
{
  "options": [
    { "option_name": "gratis_ai_agent_version", "autoload": "yes" }
  ],
  "total": 1
}
```

---

## सामग्री व्यवस्थापन

सामग्री व्यवस्थापन क्षमता WordPress posts आणि pages तयार व संपादित करतात. Post IDs परत केले जातात, जेणेकरून बहु-क्षमता योजनांमधील पुढील टप्पे तयार केलेल्या सामग्रीचा संदर्भ घेऊ शकतील.

### `create_post`

नवीन WordPress post, page किंवा custom post type नोंद तयार करते.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `title` | string | Yes | Post शीर्षक |
| `content` | string | No | Post मजकूर — साधा मजकूर, HTML किंवा serialised block markup स्वीकारते |
| `status` | string | No | `draft`, `publish`, `pending`, `private`. Default `draft` |
| `post_type` | string | No | Post type slug, उदा. `post`, `page`, किंवा कोणताही नोंदणीकृत CPT. Default `post` |
| `excerpt` | string | No | Archives आणि search results मध्ये दाखवला जाणारा लघु सारांश |
| `categories` | array | No | नेमण्यासाठी category नावे किंवा IDs चा array |
| `tags` | array | No | नेमण्यासाठी tag नावे किंवा IDs चा array |
| `author` | integer | No | post लेखक म्हणून सेट करण्यासाठी WordPress user ID. Default सध्याचा user |
| `date` | string | No | ISO 8601 स्वरूपातील प्रकाशित तारीख, उदा. `2026-05-01T09:00:00` |
| `page_template` | string | No | या post किंवा page ला नेमण्यासाठी template file, उदा. `page-full-width.php`. `post_type` `page` असल्यास किंवा page templates ला support करणारा CPT असल्यासच अर्थपूर्ण. |

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

**परत करते** `{ "success": true, "post_id": 42, "permalink": "https://example.com/welcome/" }`

---

### `update_post`

विद्यमान WordPress post किंवा page अद्ययावत करते.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `post_id` | integer | Yes | अद्ययावत करायच्या post चा ID |
| `title` | string | No | नवीन post शीर्षक |
| `content` | string | No | नवीन post मजकूर |
| `status` | string | No | नवीन status: `draft`, `publish`, `pending`, `private` |
| `excerpt` | string | No | नवीन excerpt |
| `categories` | array | No | पूर्ण category यादी या नावे किंवा IDs च्या array ने बदला |
| `tags` | array | No | पूर्ण tag यादी या नावे किंवा IDs च्या array ने बदला |
| `page_template` | string | No | या post किंवा page ला नेमण्यासाठी नवीन template file, उदा. `page-full-width.php`. template assignment काढून theme default वर परतण्यासाठी रिकामी string द्या. |

**उदाहरण** — निर्मितीनंतर template बदला

```json
{
  "post_id": 42,
  "page_template": "page-full-width.php"
}
```

**परत करते** `{ "success": true, "post_id": 42 }`

---

### `batch_create_posts`

एकाच क्षमता कॉलमध्ये अनेक posts तयार करते, ज्यामुळे site builds किंवा bulk content import दरम्यान round-trips कमी होतात. Posts क्रमाने तयार केले जातात; एखादा अयशस्वी झाला तरी इतर सुरू राहतात आणि अपयश results array मध्ये नोंदवले जाते.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `posts` | array | Yes | post objects चा array, प्रत्येक `create_post` सारखेच parameters स्वीकारतो |
| `stop_on_error` | boolean | No | `true` असल्यास, पहिल्या अपयशानंतर प्रक्रिया थांबवा. Default `false` |

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

**परत करते**

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

विद्यमान post किंवा page ला featured image (post thumbnail) नेमते. विद्यमान Media Library attachment ID किंवा दूरस्थ image URL स्वीकारते; URL दिल्यास, image आपोआप download आणि import केली जाते.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `post_id` | integer | Yes | अद्ययावत करायच्या post किंवा page चा ID |
| `attachment_id` | integer | No | विद्यमान Media Library attachment चा ID |
| `url` | string | No | import करून featured image म्हणून सेट करण्यासाठी दूरस्थ image URL |
| `alt_text` | string | No | URL वरून import केल्यास attachment ला लागू करायचा Alt text |

`attachment_id` किंवा `url` पैकी एक प्रदान करणे आवश्यक आहे.

**परत करते** `{ "success": true, "post_id": 42, "attachment_id": 17 }`

---

### `create_contact_form`

सक्रिय form plugin (Contact Form 7, WPForms, Fluent Forms किंवा Gravity Forms, कोणते installed आहे यावर अवलंबून) वापरून contact form तयार करते. कोणत्याही post किंवा page मध्ये embed करता येईल असा shortcode परत करते.

**Parameters**

| पॅरामीटर | Type | आवश्यक | वर्णन |
|---|---|---|---|
| `title` | string | होय | form plugin admin मध्ये दाखवले जाणारे form नाव |
| `fields` | array | होय | form fields ची क्रमबद्ध यादी (खालील Field object पहा) |
| `recipient` | string | नाही | submissions प्राप्त करण्यासाठी Email address. Default WordPress admin email आहे |
| `subject` | string | नाही | Email subject ओळ. Contact Form 7 वापरताना `[your-name]` आणि `[your-subject]` placeholders समर्थित आहेत |
| `confirmation_message` | string | नाही | यशस्वी submission नंतर दाखवला जाणारा संदेश. Default: `"Thank you for your message. We'll be in touch soon."` |

**Field object**

| Key | Type | आवश्यक | वर्णन |
|---|---|---|---|
| `name` | string | होय | अंतर्गत field नाव / machine key |
| `label` | string | होय | form वर दाखवले जाणारे मानव-वाचनीय label |
| `type` | string | होय | `text`, `email`, `tel`, `textarea`, `select`, `checkbox`, `radio`, `file`, `date` |
| `required` | boolean | नाही | submission करण्यापूर्वी field भरणे आवश्यक आहे का. Default `false` |
| `options` | array | नाही | `select`, `checkbox`, आणि `radio` fields साठी options |
| `placeholder` | string | नाही | text-type inputs साठी Placeholder मजकूर |

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

**परतावा**

```json
{
  "success": true,
  "form_id": 3,
  "shortcode": "[contact-form-7 id=\"3\" title=\"Restaurant Booking Enquiry\"]"
}
```

---

## दृश्य पुनरावलोकन

Visual Review क्षमता agent ला live pages चे screenshots घेऊन त्यांचे विश्लेषण करू देतात, ज्यामुळे कोणत्याही browser extension ची आवश्यकता नसताना स्वायत्त design पुनरावलोकन, before/after तुलना, आणि visual regression तपासण्या शक्य होतात.

### `capture_screenshot`

server-side headless browser वापरून दिलेल्या URL वरील WordPress page चा screenshot घेते. image Media Library मध्ये जतन केली जाते आणि CDN URL परत केली जाते.

**पॅरामीटर्स**

| पॅरामीटर | Type | आवश्यक | वर्णन |
|---|---|---|---|
| `url` | string | होय | screenshot घ्यायच्या page चा पूर्ण URL, उदा. `https://example.com/about/` |
| `width` | integer | नाही | pixels मधील Viewport रुंदी. Default `1280` |
| `height` | integer | नाही | pixels मधील Viewport उंची. Default `800` |
| `full_page` | boolean | नाही | फक्त viewport ऐवजी पूर्ण scrollable page capture करा. Default `false` |
| `delay_ms` | integer | नाही | page load झाल्यानंतर capture करण्यापूर्वी थांबायचे milliseconds, animated content साठी उपयुक्त. Default `500` |
| `label` | string | नाही | Media Library मधील attachment सोबत साठवलेले मानव-वाचनीय label |

**परतावा**

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

दोन screenshots घेते आणि बदललेले भाग highlight करणाऱ्या diff image सोबत visual diff score परत करते. design बदलाने अपेक्षित परिणाम दिला आहे हे पुष्टी करण्यासाठी किंवा अनपेक्षित regressions शोधण्यासाठी उपयुक्त.

**पॅरामीटर्स**

| पॅरामीटर | Type | आवश्यक | वर्णन |
|---|---|---|---|
| `before_url` | string | होय | "before" स्थिती म्हणून capture करायच्या page चा URL |
| `after_url` | string | होय | "after" स्थिती म्हणून capture करायच्या page चा URL. वेळेनुसार तुलना करत असल्यास तोच URL असू शकतो |
| `width` | integer | नाही | दोन्ही captures साठी Viewport रुंदी. Default `1280` |
| `threshold` | float | नाही | Pixel-difference threshold (0.0–1.0). या tolerance मधील pixels अपरिवर्तित मानले जातात. Default `0.1` |

**परतावा**

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

`diff_score` चे `0.0` म्हणजे कोणताही दृश्यमान बदल नाही; `1.0` म्हणजे प्रत्येक pixel बदलला.

---

### `review_page_design`

page चा screenshot घेते आणि visual analysis साठी तो language model कडे पाठवते. layout, typography, colour वापर, आणि accessibility संबंधी चिंता समाविष्ट करणारे structured assessment परत करते.

**पॅरामीटर्स**

| पॅरामीटर | Type | आवश्यक | वर्णन |
|---|---|---|---|
| `url` | string | होय | पुनरावलोकन करायच्या page चा पूर्ण URL |
| `focus` | string | नाही | भर द्यायच्या पुनरावलोकन क्षेत्रांची comma-separated यादी: `layout`, `typography`, `colour`, `accessibility`, `mobile`. Default: सर्व क्षेत्रे |
| `width` | integer | नाही | Viewport रुंदी. Default `1280` |

**परतावा**

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

## Installable क्षमता

Installable Abilities Registry तुम्हाला WordPress plugins म्हणून वितरित केलेल्या अतिरिक्त ability packs सह agent विस्तारित करू देते. प्रत्येक pack standard ability API वापरून एक किंवा अधिक क्षमता register करतो.

### `list_available_abilities`

registry मधून installation साठी उपलब्ध ability packs चा catalogue परत करते.

**पॅरामीटर्स**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `category` | string | No | श्रेणीनुसार फिल्टर करा: `ecommerce`, `seo`, `media`, `social`, `developer` |

**परतावा**

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

रेजिस्ट्रीमधून क्षमता पॅक डाउनलोड करून सक्रिय करते.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | क्षमता पॅक plugin slug |

**परतावा** `{ "success": true, "slug": "gratis-ai-agent-woocommerce", "abilities_added": 3 }`

---

### `recommend_plugin`

वर्णन केलेल्या वापर प्रकरणासाठी सर्वोत्तम plugin शोधण्यासाठी क्षमता रेजिस्ट्रीला क्वेरी करते आणि, ऐच्छिकपणे, ते इन्स्टॉल करते.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `description` | string | Yes | अपेक्षित कार्यक्षमतेचे नैसर्गिक भाषेतील वर्णन |
| `install` | boolean | No | `true` असल्यास, शिफारस केलेले plugin त्वरित इन्स्टॉल करते. डीफॉल्ट `false` |

**उदाहरण**

```json
{
  "description": "I need a contact form with file upload support and spam protection",
  "install": false
}
```

**परतावा**

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

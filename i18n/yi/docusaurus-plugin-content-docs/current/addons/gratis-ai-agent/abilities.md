---
title: רעפֿערענץ פֿאַר פֿעיִקייטן
sidebar_position: 2
_i18n_hash: 1a83460648ea789162af417c6b11eecc
---
# רעפֿערענץ פֿון פֿעיִקייטן {#abilities-reference}

פֿעיִקייטן זענען די אַטאָמישע אַקציעס וואָס Gratis AI Agent קען אַרויסרופֿן אויף אײַער WordPress־אינסטאַלאַציע. יעדער פֿעיִקייט איז אַ רעגיסטרירטע PHP־קלאַס וואָס שטעלט אַרויס אַ JSON־שעמע — דער אַגענט לייענט די שעמע בײַם לויפֿן כּדי צו פֿאַרשטיין וועלכע פּאַראַמעטערס זענען נויטיק און וואָס די פֿעיִקייט גיט צוריק.

די זײַט דאָקומענטירט אַלע פֿעיִקייטן וואָס קומען מיט Gratis AI Agent v1.9.0.

---

## אייגענע פּאָסט־טיפּן {#custom-post-types}

די פֿעיִקייטן פֿאַרוואַלטן אייגענע פּאָסט־טיפּן (CPTs) וואָס ווערן רעגיסטרירט דורך דעם אַגענט. רעגיסטראַציעס ווערן אָפּגעהיט אין דער WordPress־אָפּציעס־טאַבעלע, אַזוי אַז זיי בלײַבן נאָך plugin־דעאַקטיוואַציע און ווידער־אַקטיוואַציע.

### `register_post_type` {#registerposttype}

רעגיסטרירט אַ נײַעם אייגענעם פּאָסט־טיפּ.

**פּאַראַמעטערס**

| פּאַראַמעטער | טיפּ | נויטיק | באַשרײַבונג |
|---|---|---|---|
| `slug` | string | יאָ | דער פּאָסט־טיפּ־שליסל (מאַקסימום 20 צייכנס, קיין גרויסע אותיות, קיין ספּייסעס) |
| `singular_label` | string | יאָ | מענטשלעך־לייענבאַרער איינצאָל־נאָמען, למשל `Portfolio Item` |
| `plural_label` | string | יאָ | מענטשלעך־לייענבאַרער מערצאָל־נאָמען, למשל `Portfolio Items` |
| `public` | boolean | ניין | צי דער פּאָסט־טיפּ איז עפנטלעך צוטריטלעך. פעליקייַט `true` |
| `supports` | array | ניין | פֿעיִקייטן צו שטיצן: `title`, `editor`, `thumbnail`, `excerpt`, `comments`, `revisions`, `custom-fields`. פעליקייַט `["title","editor"]` |
| `has_archive` | boolean | ניין | צי אַן אַרכיוו־זײַט פֿאַר דעם פּאָסט־טיפּ איז אַקטיווירט. פעליקייַט `false` |
| `menu_icon` | string | ניין | Dashicons־קלאַס אָדער URL פֿאַר דעם אַדמין־מעניו־בילדל. פעליקייַט `"dashicons-admin-post"` |
| `rewrite_slug` | string | ניין | URL־slug פֿאַר דעם פּאָסט־טיפּ. פעליקייַט איז `slug` |

**בײַשפּיל**

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

**גיט צוריק** `{ "success": true, "slug": "portfolio" }`

---

### `list_post_types` {#listposttypes}

גיט צוריק אַלע אייגענע פּאָסט־טיפּן וואָס דער אַגענט האָט רעגיסטרירט.

**פּאַראַמעטערס** — קיינע

**גיט צוריק**

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

נעמט אַראָפּ די רעגיסטראַציע פֿון אַן אייגענעם פּאָסט־טיפּ וואָס איז פֿריִער רעגיסטרירט געוואָרן דורך דעם אַגענט. עקזיסטירנדיקע פּאָסטן פֿון יענעם טיפּ בלײַבן אין דער דאַטאַבאַזע, אָבער זענען מער נישט צוטריטלעך דורך דעם פּאָסט־טיפּ.

**פּאַראַמעטערס**

| פּאַראַמעטער | טיפּ | נויטיק | באַשרײַבונג |
|---|---|---|---|
| `slug` | string | יאָ | דער פּאָסט־טיפּ־שליסל צו באַזײַטיקן |

**גיט צוריק** `{ "success": true, "slug": "portfolio" }`

---

## אייגענע טאַקסאָנאָמיעס {#custom-taxonomies}

די פֿעיִקייטן פֿאַרוואַלטן אייגענע טאַקסאָנאָמיעס. אַזוי ווי CPTs, ווערן טאַקסאָנאָמיע־רעגיסטראַציעס אָפּגעהיט.

### `register_taxonomy` {#registertaxonomy}

רעגיסטרירט אַ נײַע אייגענע טאַקסאָנאָמיע.

**פּאַראַמעטערס**

| פּאַראַמעטער | טיפּ | נויטיק | באַשרײַבונג |
|---|---|---|---|
| `slug` | string | יאָ | דער טאַקסאָנאָמיע־שליסל (מאַקסימום 32 צייכנס) |
| `singular_label` | string | יאָ | מענטשלעך־לייענבאַרער איינצאָל־נאָמען, למשל `Project Category` |
| `plural_label` | string | יאָ | מענטשלעך־לייענבאַרער מערצאָל־נאָמען, למשל `Project Categories` |
| `post_types` | array | יאָ | פּאָסט־טיפּ־slugs צו וועלכע די טאַקסאָנאָמיע זאָל ווערן צוגעבונדן |
| `hierarchical` | boolean | ניין | `true` פֿאַר קאַטעגאָריע־סטיל, `false` פֿאַר צעטל־סטיל. פעליקייַט `true` |
| `public` | boolean | ניין | צי טערמינען זענען עפנטלעך צוטריטלעך. פעליקייַט `true` |
| `rewrite_slug` | string | ניין | URL־slug פֿאַר דער טאַקסאָנאָמיע. פעליקייַט איז `slug` |

**בײַשפּיל**

```json
{
  "slug": "project-category",
  "singular_label": "Project Category",
  "plural_label": "Project Categories",
  "post_types": ["portfolio"],
  "hierarchical": true
}
```

**גיט צוריק** `{ "success": true, "slug": "project-category" }`

---

### `list_taxonomies` {#listtaxonomies}

גיט צוריק אַלע אייגענע טאַקסאָנאָמיעס וואָס דער אַגענט האָט רעגיסטרירט.

**פּאַראַמעטערס** — קיינע

**גיט צוריק**

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

נעמט אַראָפּ די רעגיסטראַציע פֿון אַן אייגענער טאַקסאָנאָמיע וואָס איז פֿריִער רעגיסטרירט געוואָרן דורך דעם אַגענט.

**פּאַראַמעטערס**

| פּאַראַמעטער | טיפּ | נויטיק | באַשרײַבונג |
|---|---|---|---|
| `slug` | string | יאָ | דער טאַקסאָנאָמיע־שליסל צו באַזײַטיקן |

**גיט צוריק** `{ "success": true, "slug": "project-category" }`

---

## דיזײַן־סיסטעם {#design-system}

דיזײַן־סיסטעם־פֿעיִקייטן ענדערן די וויזועלע פּרעזענטאַציע פֿון דער WordPress־זײַט — פֿון אייגענעם CSS ביז בלאָק־מוסטערן און דעם זײַט־לאָגאָ.

### `inject_custom_css` {#injectcustomcss}

לייגט צו CSS צום `<head>` פֿון דער זײַט דורך `wp_add_inline_style`. CSS ווערט אָפּגעהיט אין דער `gratis_ai_agent_custom_css` אָפּציע און ריין אַרויסגענומען פֿון דער ריי ווען די פֿעיִקייט ווערט צוריקגעשטעלט.

**פּאַראַמעטערס**

| פּאַראַמעטער | טיפּ | נויטיק | באַשרײַבונג |
|---|---|---|---|
| `css` | string | יאָ | גילטיקער CSS אַרײַנצולייגן |
| `label` | string | ניין | מענטשלעך־לייענבאַרער עטיקעט פֿאַר דעם CSS־בלאָק, געניצט אין דיבאַג־לאָגס. פעליקייַט `"agent-injected"` |
| `replace` | boolean | ניין | אויב `true`, פֿאַרבײַט עס אַלע פֿריִער אַרײַנגעלייגטע CSS. פעליקייַט `false` (לייגט צו) |

**בײַשפּיל**

```json
{
  "css": ":root { --primary: #1a1a2e; --accent: #e94560; } body { font-family: 'Inter', sans-serif; }",
  "label": "brand-colours",
  "replace": false
}
```

**גיט צוריק** `{ "success": true, "bytes": 96 }`

---

### `add_block_pattern` {#addblockpattern}

רעגיסטרירט אַ ווידער־ניצלעכן בלאָק־מוסטער אין דער WordPress־מוסטער־ביבליאָטעק.

**פּאַראַמעטערס**

| פּאַראַמעטער | טיפּ | נויטיק | באַשרײַבונג |
|---|---|---|---|
| `slug` | string | יאָ | מוסטער־אידענטיפֿיקאַטאָר, למשל `gratis/hero-dark` |
| `title` | string | יאָ | מענטשלעך־לייענבאַרער מוסטער־נאָמען וואָס ווערט געוויזן אין דעם רעדאַקטאָר |
| `content` | string | יאָ | סעריאַליזירטער בלאָק־מאַרקאַפּ (HTML) פֿאַר דעם מוסטער |
| `categories` | array | ניין | מוסטער־קאַטעגאָריע־slugs, למשל `["featured", "hero"]` |
| `description` | string | ניין | קורצע באַשרײַבונג וואָס ווערט געוויזן אין דעם מוסטער־אויסקלײַבער |
| `keywords` | array | ניין | זוך־שליסלווערטער |

**גיט צוריק** `{ "success": true, "slug": "gratis/hero-dark" }`

---

### `list_block_patterns` {#listblockpatterns}

ליסטעט אַלע בלאָק־מוסטערן וואָס דער אַגענט האָט רעגיסטרירט.

**פּאַראַמעטערס** — קיינע

**גיט צוריק**

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

שטעלט דעם WordPress וועבזײַטל־לאָגאָ צו אַ געגעבן צוגעהענגט־ID אָדער אַ ווײַטער בילד־URL. ווען אַ URL ווערט צוגעשטעלט, ווערט דאָס בילד אַראָפּגעלאָדן און אימפּאָרטירט אין דער מעדיע־ביבליאָטעק.

**פּאַראַמעטערס**

| פּאַראַמעטער | טיפּ | פארלאנגט | באַשרייַבונג |
|---|---|---|---|
| `attachment_id` | integer | ניין | ID פֿון אַן עקזיסטירנדיקער מעדיע־ביבליאָטעק צוגעהענגט־טעקע |
| `url` | string | ניין | ווײַטער בילד־URL צו אימפּאָרטירן און שטעלן ווי דער לאָגאָ |

איינער פֿון `attachment_id` אָדער `url` מוז צוגעשטעלט ווערן.

**גיט צוריק** `{ "success": true, "attachment_id": 42 }`

---

### `apply_theme_json_preset` {#applythemejsonpreset}

ווענדט אָן אַ גערופענעם קאָליר/טיפּאָגראַפֿיע פּריסעט אויף דעם אַקטיוון theme'ס `theme.json` (אָדער `global-styles`). פּריסעטן זענען קוראַטירטע פּעקלעך וואָס ווערן אונטערגעהאַלטן דורך דעם Gratis AI Agent מאַנשאַפֿט.

**פּאַראַמעטערס**

| פּאַראַמעטער | טיפּ | פארלאנגט | באַשרייַבונג |
|---|---|---|---|
| `preset` | string | יאָ | פּריסעט־נאָמען, למשל `minimal-dark`, `warm-editorial`, `corporate-blue` |
| `merge` | boolean | ניין | אויב `true`, צונויפֿגיסן מיט עקזיסטירנדיקע ווערטן אַנשטאָט זיי צו פאַרבייטן. סטאַנדאַרט `false` |

**פֿאַראַנענע פּריסעטן**

| פּריסעט | באַשרייַבונג |
|---|---|
| `minimal-dark` | כּמעט־שוואַרצער הינטערגרונט, ווײַסער טעקסט, איין אַקצענט־קאָליר |
| `warm-editorial` | וואַרעמער כּמעט־ווײַסער הינטערגרונט, סעריף קעפּלעך, ערדישע אַקצענט־קאָלירן |
| `corporate-blue` | נאַווי־בלויע און ווײַסע פּאַלעטע מיט פּראָפֿעסיאָנעלער טיפאָגראַפֿיע |
| `vibrant-startup` | ליכטיקע גראַדיענטן, פֿאַררונדעטע עקן, מאָדערנער סאַנס־סעריף טיפּ |
| `classic-blog` | נייטראַלע גרויע שאַטירונגען, באַקוועמע שורה־הייך, טראַדיציאָנעלע אויסלייג־אָפּשטאַנדן |

**גיט צוריק** `{ "success": true, "preset": "minimal-dark" }`

---

## גלאבאַלע סטילן {#global-styles}

גלאבאַלע סטילן־פֿעיִקייטן לייענען און שרײַבן theme.json ווערטן דורך דעם WordPress גלאבאַלע סטילן API, וואָס ווירקט אויף אַלע בלאָקן און מוסטערן איבערן גאַנצן וועבזײַטל.

### `get_global_styles` {#getglobalstyles}

גיט צוריק די איצטיקע גלאבאַלע סטילן־קאָנפֿיגוראַציע.

**פּאַראַמעטערס**

| פּאַראַמעטער | טיפּ | פארלאנגט | באַשרייַבונג |
|---|---|---|---|
| `path` | string | ניין | JSON ווײַזער צו אַ ספּעציפֿישן ווערט, למשל `/color/palette` אָדער `/typography/fontSizes`. גיט צוריק דעם גאַנצן אָביעקט אויב עס ווערט אויסגעלאָזט. |

**גיט צוריק** דעם פולן גלאבאַלע סטילן־אָביעקט אָדער דעם ווערט בײַ `path`.

---

### `set_global_styles` {#setglobalstyles}

דערהײַנטיקט איין אָדער מער ווערטן אין דער גלאבאַלע סטילן־קאָנפֿיגוראַציע.

**פּאַראַמעטערס**

| פּאַראַמעטער | טיפּ | פארלאנגט | באַשרייַבונג |
|---|---|---|---|
| `path` | string | יאָ | JSON ווײַזער צו דעם ווערט וואָס מען זאָל שטעלן, למשל `/color/palette` |
| `value` | any | יאָ | דער נײַער ווערט |

**בײַשפּיל** — צולייגן אַ קאָליר צו דער פּאַלעטע

```json
{
  "path": "/color/palette",
  "value": [
    { "slug": "primary", "color": "#1a1a2e", "name": "Primary" },
    { "slug": "accent",  "color": "#e94560", "name": "Accent" }
  ]
}
```

**גיט צוריק** `{ "success": true, "path": "/color/palette" }`

---

### `reset_global_styles` {#resetglobalstyles}

שטעלט צוריק אַלע דורך־אַגענט אָנווענדטע גלאבאַלע סטילן־ענדערונגען, און ברענגט צוריק די theme סטאַנדאַרטן.

**פּאַראַמעטערס** — קיין

**גיט צוריק** `{ "success": true }`

---

## נאַוויגאַציע־מעניוז {#navigation-menus}

נאַוויגאַציע־מעניו־פֿעיִקייטן שאַפֿן און פֿאַרוואַלטן WordPress נאַוו־מעניוז און זייערע פּונקטן.

### `create_menu` {#createmenu}

שאַפֿט אַ נײַ WordPress נאַוויגאַציע־מעניו.

**פּאַראַמעטערס**

| פּאַראַמעטער | טיפּ | פארלאנגט | באַשרייַבונג |
|---|---|---|---|
| `name` | string | יאָ | מעניו־נאָמען, למשל `Primary Navigation` |
| `location` | string | ניין | Theme אָרט צו צוטיילן דעם מעניו דערצו, למשל `primary` |

**גיט צוריק** `{ "success": true, "menu_id": 7 }`

---

### `update_menu` {#updatemenu}

גיט אַ מעניו אַ נײַעם נאָמען אָדער טיילט אים ווידער צו צו אַ theme אָרט.

**פּאַראַמעטערס**

| פּאַראַמעטער | טיפּ | פארלאנגט | באַשרייַבונג |
|---|---|---|---|
| `menu_id` | integer | יאָ | ID פֿון דעם מעניו צו דערהײַנטיקן |
| `name` | string | ניין | נײַער מעניו־נאָמען |
| `location` | string | ניין | Theme אָרט צו צוטיילן אָדער ווידער־צוצוטיילן |

**גיט צוריק** `{ "success": true, "menu_id": 7 }`

---

### `add_menu_item` {#addmenuitem}

לייגט צו אַ פּונקט צו אַן עקזיסטירנדיקן נאַוויגאַציע־מעניו.

**פּאַראַמעטערס**

| פּאַראַמעטער | טיפּ | פארלאנגט | באַשרייַבונג |
|---|---|---|---|
| `menu_id` | integer | יאָ | ID פֿון דעם ציל־מעניו |
| `type` | string | יאָ | פּונקט־טיפּ: `custom`, `post_type`, אָדער `taxonomy` |
| `title` | string | ניין | עטיקעט פֿאַר דעם מעניו־פּונקט (פארלאנגט פֿאַר `custom` טיפּ) |
| `url` | string | ניין | URL פֿאַר `custom` פּונקטן |
| `object_id` | integer | ניין | פּאָסט־ID אָדער טערמין־ID פֿאַר `post_type`/`taxonomy` פּונקטן |
| `parent_id` | integer | ניין | מעניו־פּונקט ID אונטער וועלכן מען זאָל איינניסטן דעם פּונקט |
| `position` | integer | ניין | נול־באַזירטע פּאָזיציע אין דעם מעניו |

**גיט צוריק** `{ "success": true, "item_id": 12 }`

---

### `remove_menu_item` {#removemenuitem}

נעמט אַוועק אַ פּונקט פֿון אַ נאַוויגאַציע־מעניו.

**פּאַראַמעטערס**

| פּאַראַמעטער | טיפּ | פארלאנגט | באַשרייַבונג |
|---|---|---|---|
| `item_id` | integer | יאָ | מעניו־פּונקט ID צו באַזײַטיקן |

**גיט צוריק** `{ "success": true, "item_id": 12 }`

---

### `list_menus` {#listmenus}

ליסטעט אַלע WordPress נאַוויגאַציע־מעניוז, אַרײַנגערעכנט זייערע צוגעטיילטע theme ערטער.

**פּאַראַמעטערס** — קיין

**גיט צוריק**

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

## אָפּציעס־פֿאַרוואַלטונג {#options-management}

אָפּציעס־פֿעיִקייטן לייענען און שרײַבן WordPress אָפּציעס דורך `get_option` / `update_option`. אַן איינגעבויטע זיכערהייט־בלאָקיר־ליסטע פֿאַרמײַדט צופֿעליקע מאָדיפֿיקאַציע פֿון קריטישע אײַנשטעלונגען.

### `get_option` {#getoption}

לייענט אַ WordPress אָפּציע.

**פּאַראַמעטערס**

| פּאַראַמעטער | טיפּ | פארלאנגט | באַשרייַבונג |
|---|---|---|---|
| `option_name` | string | יאָ | דער אָפּציע־שליסל, למשל `blogname` |

**גיט צוריק** `{ "option_name": "blogname", "value": "My Site" }`

גיט צוריק אַ פֿעלער אויב `option_name` איז אויף דער זיכערהייט־בלאָקיר־ליסטע.

---

### `set_option` {#setoption}

שרײַבט אַ WordPress אָפּציע.

**פּאַראַמעטערס**

| פּאַראַמעטער | טיפּ | פארלאנגט | באַשרייַבונג |
|---|---|---|---|
| `option_name` | string | יאָ | דער אָפּציע־שליסל |
| `value` | any | יאָ | דער נײַער ווערט (ווערט אויטאָמאַטיש סעריאַליזירט פֿאַר אַרייען/אָביעקטן) |
| `autoload` | string | ניין | `"yes"` אָדער `"no"`. סטאַנדאַרט היט אָפּ די עקזיסטירנדיקע autoload אײַנשטעלונג |

גיט צוריק אַ טעות אויב `option_name` איז אויף דער זיכערהייט־בלאָקליסט.

**גיט צוריק** `{ "success": true, "option_name": "blogname" }`

---

### `delete_option` {#deleteoption}

מעקט אויס אַן אָפּציע פֿון WordPress.

**פּאַראַמעטערס**

| פּאַראַמעטער | טיפּ | נייטיק | באַשרײַבונג |
|---|---|---|---|
| `option_name` | string | יאָ | דער אָפּציע־שליסל צו אויסמעקן |

גיט צוריק אַ טעות אויב `option_name` איז אויף דער זיכערהייט־בלאָקליסט.

**גיט צוריק** `{ "success": true, "option_name": "my_custom_option" }`

---

### `list_options` {#listoptions}

ליסטעט WordPress אָפּציעס וואָס שטימען מיט אַ מוסטער.

**פּאַראַמעטערס**

| פּאַראַמעטער | טיפּ | נייטיק | באַשרײַבונג |
|---|---|---|---|
| `pattern` | string | ניין | SQL LIKE מוסטער צו פֿילטרירן אָפּציע־נעמען, למשל `gratis_%`. גיט צוריק אַלע אָפּציעס אויב אויסגעלאָזט (ניצן מיט פֿאָרזיכט אויף גרויסע דאַטאַבאַזעס). |
| `limit` | integer | ניין | מאַקסימום צאָל רעזולטאַטן. סטאַנדאַרט `50`, מאַקס `500` |

**גיט צוריק**

```json
{
  "options": [
    { "option_name": "gratis_ai_agent_version", "autoload": "yes" }
  ],
  "total": 1
}
```

---

## אינהאַלט־פֿאַרוואַלטונג {#content-management}

אינהאַלט־פֿאַרוואַלטונג־מעגלעכקייטן שאַפֿן און רעדאַגירן WordPress בײַטראָגן און זײַטן. בײַטראָג־IDs ווערן צוריקגעגעבן כּדי נאָכפֿאָלגנדיקע שריט אין מולטי־מעגלעכקייט־פּלענער זאָלן קענען רעפֿערירן צום געשאַפֿענעם אינהאַלט.

### `create_post` {#createpost}

שאַפֿט אַ נײַעם WordPress בײַטראָג, זײַט, אָדער אייגענעם בײַטראָג־טיפּ איינטראָג.

**פּאַראַמעטערס**

| פּאַראַמעטער | טיפּ | נייטיק | באַשרײַבונג |
|---|---|---|---|
| `title` | string | יאָ | בײַטראָג־טיטל |
| `content` | string | ניין | בײַטראָג־גוף — נעמט אָן פּשוטן טעקסט, HTML, אָדער סעריאַליזירטע בלאָק־מאַרקאַפּ |
| `status` | string | ניין | `draft`, `publish`, `pending`, `private`. סטאַנדאַרט `draft` |
| `post_type` | string | ניין | בײַטראָג־טיפּ slug, למשל `post`, `page`, אָדער יעדן רעגיסטרירטן CPT. סטאַנדאַרט `post` |
| `excerpt` | string | ניין | קורצע צוזאַמענפֿאַסונג געוויזן אין אַרכיוון און זוך־רעזולטאַטן |
| `categories` | array | ניין | מאַסיוו פֿון קאַטעגאָריע־נעמען אָדער IDs צו צוטיילן |
| `tags` | array | ניין | מאַסיוו פֿון קוויטל־נעמען אָדער IDs צו צוטיילן |
| `author` | integer | ניין | WordPress באַניצער־ID צו שטעלן ווי דער מחבר פֿונעם בײַטראָג. סטאַנדאַרט איז דער איצטיקער באַניצער |
| `date` | string | ניין | פּובליקאַציע־דאַטע אין ISO 8601 פֿאָרמאַט, למשל `2026-05-01T09:00:00` |
| `page_template` | string | ניין | מוסטער־טעקע צו צוטיילן צו דעם בײַטראָג אָדער דער זײַט, למשל `page-full-width.php`. בלויז באַטײַטיק ווען `post_type` איז `page` אָדער אַ CPT וואָס שטיצט זײַט־מוסטערן. |

**בײַשפּיל**

```json
{
  "title": "Welcome to Our New Site",
  "content": "<!-- wp:paragraph --><p>Hello world!</p><!-- /wp:paragraph -->",
  "status": "publish",
  "post_type": "page",
  "page_template": "page-full-width.php"
}
```

**גיט צוריק** `{ "success": true, "post_id": 42, "permalink": "https://example.com/welcome/" }`

---

### `update_post` {#updatepost}

דערהײַנטיקט אַן עקזיסטירנדיקן WordPress בײַטראָג אָדער זײַט.

**פּאַראַמעטערס**

| פּאַראַמעטער | טיפּ | נייטיק | באַשרײַבונג |
|---|---|---|---|
| `post_id` | integer | יאָ | ID פֿונעם בײַטראָג צו דערהײַנטיקן |
| `title` | string | ניין | נײַער בײַטראָג־טיטל |
| `content` | string | ניין | נײַער בײַטראָג־גוף |
| `status` | string | ניין | נײַער סטאַטוס: `draft`, `publish`, `pending`, `private` |
| `excerpt` | string | ניין | נײַער אויסצוג |
| `categories` | array | ניין | פֿאַרבײַטן די גאַנצע קאַטעגאָריע־ליסטע מיט דעם מאַסיוו פֿון נעמען אָדער IDs |
| `tags` | array | ניין | פֿאַרבײַטן די גאַנצע קוויטל־ליסטע מיט דעם מאַסיוו פֿון נעמען אָדער IDs |
| `page_template` | string | ניין | נײַע מוסטער־טעקע צו צוטיילן צו דעם בײַטראָג אָדער דער זײַט, למשל `page-full-width.php`. איבערגעבן אַן ליידיקן string כּדי צו באַזײַטיקן די מוסטער־צוטיילונג און זיך אומקערן צום theme סטאַנדאַרט. |

**בײַשפּיל** — טוישן מוסטער נאָך דער שאַפֿונג

```json
{
  "post_id": 42,
  "page_template": "page-full-width.php"
}
```

**גיט צוריק** `{ "success": true, "post_id": 42 }`

---

### `batch_create_posts` {#batchcreateposts}

שאַפֿט עטלעכע בײַטראָגן אין איין מעגלעכקייט־רוף, וואָס רעדוצירט הין־און־צוריק־רופֿן בעת וועבזײַט־אויפֿבויען אָדער מאַסן־אינהאַלט־אימפּאָרט. בײַטראָגן ווערן געשאַפֿן לויט דער סדר; אויב איינער דורכפֿאַלט, גייען די אַנדערע ווײַטער און דער דורכפֿאַל ווערט געמאלדן אין רעזולטאַטן־מאַסיוו.

**פּאַראַמעטערס**

| פּאַראַמעטער | טיפּ | נייטיק | באַשרײַבונג |
|---|---|---|---|
| `posts` | array | יאָ | מאַסיוו פֿון בײַטראָג־אָביעקטן, יעדער נעמט אָן די זעלבע פּאַראַמעטערס ווי `create_post` |
| `stop_on_error` | boolean | ניין | אויב `true`, אָפּשטעלן פּראַסעסירונג נאָך דעם ערשטן דורכפֿאַל. סטאַנדאַרט `false` |

**בײַשפּיל**

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

**גיט צוריק**

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

צוטיילט אַ הויפּטבילד (בײַטראָג־מיניאַטור) צו אַן עקזיסטירנדיקן בײַטראָג אָדער זײַט. נעמט אָן אַן עקזיסטירנדיקן Media Library צוגעהענגט־ID אָדער אַ ווײַטע בילד־URL; ווען אַ URL ווערט צוגעשטעלט, ווערט דאָס בילד אויטאָמאַטיש אַראָפּגעלאָדן און אימפּאָרטירט.

**פּאַראַמעטערס**

| פּאַראַמעטער | טיפּ | נייטיק | באַשרײַבונג |
|---|---|---|---|
| `post_id` | integer | יאָ | ID פֿונעם בײַטראָג אָדער דער זײַט צו דערהײַנטיקן |
| `attachment_id` | integer | ניין | ID פֿון אַן עקזיסטירנדיקן Media Library צוגעהענגט |
| `url` | string | ניין | ווײַטע בילד־URL צו אימפּאָרטירן און שטעלן ווי דאָס הויפּטבילד |
| `alt_text` | string | ניין | אַלט־טעקסט צו אָנווענדן אויפֿן צוגעהענגט אויב עס ווערט אימפּאָרטירט פֿון אַ URL |

איינער פֿון `attachment_id` אָדער `url` מוז ווערן צוגעשטעלט.

**גיט צוריק** `{ "success": true, "post_id": 42, "attachment_id": 17 }`

---

### `create_contact_form` {#createcontactform}

שאַפֿט אַ קאָנטאַקט־פֿאָרעם ניצנדיק דעם אַקטיוון פֿאָרעם־plugin (Contact Form 7, WPForms, Fluent Forms, אָדער Gravity Forms, לויט וואָס איז אינסטאַלירט). גיט צוריק אַ shortcode וואָס קען ווערן אַרײַנגעשטעלט אין יעדן בײַטראָג אָדער זײַט.

**פּאַראַמעטערס**

| פּאַראַמעטער | טיפּ | פארלאנגט | באַשרייבונג |
|---|---|---|---|
| `title` | string | יאָ | פאָרעם־נאָמען וואָס ווערט געוויזן אין דעם פאָרעם plugin־אַדמין |
| `fields` | array | יאָ | געאָרדנטע רשימה פֿון פאָרעם־פֿעלדער (זעט Field object אונטן) |
| `recipient` | string | ניין | בליצפּאָסט־אַדרעס צו באַקומען איינשיקונגען. סטאַנדאַרט איז דער WordPress אַדמין־בליצפּאָסט |
| `subject` | string | ניין | בליצפּאָסט־טעמע־שורה. שטיצט `[your-name]` און `[your-subject]` פּלאַץ־האַלטער בײַם נוצן Contact Form 7 |
| `confirmation_message` | string | ניין | אָנזאָג וואָס ווערט געוויזן נאָך אַ געראָטן איינשיקונג. סטאַנדאַרט: `"Thank you for your message. We'll be in touch soon."` |

**Field object**

| שליסל | טיפּ | פארלאנגט | באַשרייבונג |
|---|---|---|---|
| `name` | string | יאָ | אינערלעכער פֿעלד־נאָמען / מאַשין־שליסל |
| `label` | string | יאָ | מענטשלעך־לייענבאַרער פירמע־טעקסט וואָס ווערט געוויזן אויף דער פאָרעם |
| `type` | string | יאָ | `text`, `email`, `tel`, `textarea`, `select`, `checkbox`, `radio`, `file`, `date` |
| `required` | boolean | ניין | צי דאָס פֿעלד מוז ווערן אָנגעפילט פֿאַר דער איינשיקונג. סטאַנדאַרט `false` |
| `options` | array | ניין | אָפּציעס פֿאַר `select`, `checkbox`, און `radio` פֿעלדער |
| `placeholder` | string | ניין | פּלאַץ־האַלטער־טעקסט פֿאַר טעקסט־טיפּ אַרײַנשרײַב־פֿעלדער |

**בײַשפּיל**

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

**גיט צוריק**

```json
{
  "success": true,
  "form_id": 3,
  "shortcode": "[contact-form-7 id=\"3\" title=\"Restaurant Booking Enquiry\"]"
}
```

---

## וויזועלע איבערבליק {#visual-review}

וויזועלע איבערבליק־פֿעיִקייטן לאָזן דעם אגענט כאפן סקרינשאַטן פֿון לעבעדיקע בלעטער און זיי אַנאַליזירן, וואָס דערמעגלעכט אויטאָנאָמע דיזיין־איבערבליק, פֿאַר/נאָך פֿאַרגלײַכן, און וויזועלע רעגרעסיע־קאָנטראָלן אָן דאַרפֿן קיין בלעטערער־פֿאַרברייטערונג.

### `capture_screenshot` {#capturescreenshot}

כאַפּט אַ סקרינשאַט פֿון אַ WordPress בלאַט בײַ אַ געגעבן URL מיט אַ סערווער־זײַטיקן קאָפּלאָזן בלעטערער. דאָס בילד ווערט אויפגעהיט אין דער מעדיע־ביבליאָטעק און אַ CDN URL ווערט צוריקגעגעבן.

**פּאַראַמעטערס**

| פּאַראַמעטער | טיפּ | פארלאנגט | באַשרייבונג |
|---|---|---|---|
| `url` | string | יאָ | פולער URL פֿון דעם בלאַט צו מאכן אַ סקרינשאַט, למשל `https://example.com/about/` |
| `width` | integer | ניין | Viewport ברייט אין פּיקסלען. סטאַנדאַרט `1280` |
| `height` | integer | ניין | Viewport הייך אין פּיקסלען. סטאַנדאַרט `800` |
| `full_page` | boolean | ניין | כאַפּן דעם גאַנצן סקראָלבאַרן בלאַט אָנשטאָט נאָר דעם Viewport. סטאַנדאַרט `false` |
| `delay_ms` | integer | ניין | מיליסעקונדעס צו וואַרטן נאָך דעם בלאַט־לאָדן איידער כאַפּן, נוצלעך פֿאַר אַנימירטן אינהאַלט. סטאַנדאַרט `500` |
| `label` | string | ניין | מענטשלעך־לייענבאַרער פירמע־טעקסט אויפגעהיט מיט דער צוגעבונדענער טעקע אין דער מעדיע־ביבליאָטעק |

**גיט צוריק**

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

נעמט צוויי סקרינשאַטן און גיט צוריק אַ וויזועלן אונטערשייד־סקאָר פּלוס אַ אונטערשייד־בילד וואָס הייבט אַרויס געביטן וואָס האָבן זיך געביטן. נוצלעך צו באַשטעטיקן אַז אַ דיזיין־ענדערונג האָט געשאַפֿן דעם געריכטן רעזולטאַט, אָדער צו אַנטדעקן אומגעוואונטשענע רעגרעסיעס.

**פּאַראַמעטערס**

| פּאַראַמעטער | טיפּ | פארלאנגט | באַשרייבונג |
|---|---|---|---|
| `before_url` | string | יאָ | URL פֿון דעם בלאַט צו כאַפּן ווי דער „פֿאַר“־צושטאַנד |
| `after_url` | string | יאָ | URL פֿון דעם בלאַט צו כאַפּן ווי דער „נאָך“־צושטאַנד. קען זײַן דער זעלבער URL אויב מען פֿאַרגלײַכט איבער צײַט |
| `width` | integer | ניין | Viewport ברייט פֿאַר ביידע כאַפּונגען. סטאַנדאַרט `1280` |
| `threshold` | float | ניין | פּיקסל־אונטערשייד־שוועל (0.0–1.0). פּיקסלען אין דער דאָזיקער טאָלעראַנץ ווערן באַטראַכט ווי אומגעביטן. סטאַנדאַרט `0.1` |

**גיט צוריק**

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

אַ `diff_score` פֿון `0.0` מיינט קיין זעעוודיקע ענדערונג; `1.0` מיינט אַז יעדער פּיקסל האָט זיך געביטן.

---

### `review_page_design` {#reviewpagedesign}

כאַפּט אַ סקרינשאַט פֿון אַ בלאַט און שיקט עס צום שפּראַך־מאָדעל פֿאַר וויזועלער אַנאַליז. גיט צוריק אַ סטרוקטורירטע אָפּשאַצונג וואָס באַדעקט אויסלייג, טיפּאָגראַפֿיע, קאָליר־נוצונג, און צוטריטלעכקייט־זאָרגן.

**פּאַראַמעטערס**

| פּאַראַמעטער | טיפּ | פארלאנגט | באַשרייבונג |
|---|---|---|---|
| `url` | string | יאָ | פולער URL פֿון דעם בלאַט צו איבערקוקן |
| `focus` | string | ניין | מיט קאָמעס אָפּגעטיילטע רשימה פֿון איבערבליק־געביטן אויף וואָס צו לייגן טראָפּ: `layout`, `typography`, `colour`, `accessibility`, `mobile`. סטאַנדאַרט: אַלע געביטן |
| `width` | integer | ניין | Viewport ברייט. סטאַנדאַרט `1280` |

**גיט צוריק**

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

## אינסטאַלירבאַרע פֿעיִקייטן {#installable-abilities}

דער רעגיסטר פֿון אינסטאַלירבאַרע פֿעיִקייטן לאָזט אײַך פֿאַרברייטערן דעם אגענט מיט צוגעלייגטע פֿעיִקייט־פּעקלעך וואָס ווערן פֿאַרשפּרייט ווי WordPress plugins. יעדער פּעקל רעגיסטרירט איינס אָדער מער פֿעיִקייטן מיט דער סטאַנדאַרטער פֿעיִקייט API.

### `list_available_abilities` {#listavailableabilities}

גיט צוריק דעם קאַטאַלאָג פֿון פֿעיִקייט־פּעקלעך וואָס זענען פֿאַראַן פֿאַר אינסטאַלאַציע פֿון דעם רעגיסטר.

**פּאַראַמעטערס**

| פּאַראַמעטער | טיפּ | פארלאנגט | באַשרייבונג |
|---|---|---|---|
| `category` | string | ניין | פֿילטערן לויט קאַטעגאָריע: `ecommerce`, `seo`, `media`, `social`, `developer` |

**גיט צוריק**

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

לאָדט אַראָפּ און אַקטיווירט אַ פֿעיִקייטן־פּאַק פֿון דעם רעגיסטר.

**פּאַראַמעטערס**

| פּאַראַמעטער | טיפּ | פארלאנגט | באַשרייבונג |
|---|---|---|---|
| `slug` | string | יאָ | פֿעיִקייטן־פּאַק פּלוגין slug |

**גיט צוריק** `{ "success": true, "slug": "gratis-ai-agent-woocommerce", "abilities_added": 3 }`

---

### `recommend_plugin` {#recommendplugin}

פֿרעגט דעם פֿעיִקייטן־רעגיסטר כּדי צו געפֿינען דעם בעסטן פּלוגין פֿאַר אַ באַשריבן באַניץ־פֿאַל און, אָפּציאָנעל, אינסטאַלירט אים.

**פּאַראַמעטערס**

| פּאַראַמעטער | טיפּ | פארלאנגט | באַשרייבונג |
|---|---|---|---|
| `description` | string | יאָ | באַשרייבונג אין נאַטירלעכער שפּראַך פֿון דער געוואונטשענער פֿונקציאָנאַליטעט |
| `install` | boolean | ניין | אויב `true`, אינסטאַלירט גלײַך דעם רעקאָמענדירטן פּלוגין. סטאַנדאַרט `false` |

**בײַשפּיל**

```json
{
  "description": "I need a contact form with file upload support and spam protection",
  "install": false
}
```

**גיט צוריק**

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

---
title: אָרקעסטראַציע פֿון וועבזייטל־בויער v2
sidebar_position: 4
_i18n_hash: 3a3d15844b4a0751fc59ac3a4e1fb0c0
---
# Site Builder אָרקעסטראציע v2

Site Builder אָרקעסטראציע v2 (אַרײַנגעפֿירט אין Gratis AI Agent v1.4.0) איז דער מאָטאָר וואָס טרײַבט מאַלטי־שריט וועבזײַט־שאַפֿונג. ווען איר בעט דעם אגענט צו "בויען אַ רעסטאָראַן־וועבזײַט" אָדער "שאַפֿן אַ פּאָרטפֿאָליאָ מיט אַ בלאָג", צעטיילט דער אָרקעסטראטאָר דעם הויך־ניוואָ ציל אין אַ סטרוקטורירטן **פּלאַן**, אַנטדעקט די plugins וואָס מען דאַרף כּדי עס אויסצופֿירן, פֿירט אויס יעדן שריט אין סדר, נאָכפֿאָלגט פּראָגרעס, און ערהוילט זיך פֿון טעותן אויטאָנאָם.

---

## ווי עס אַרבעט {#how-it-works}

### 1. פּלאַן־גענערירונג {#1-plan-generation}

ווען דער אגענט באַקומט אַן אנווײַזונג צו בויען אַ וועבזײַט, רופֿט ער אָן די `create_site_plan` מעגלעכקייט כּדי צו פּראָדוצירן אַ JSON **זײַט־פּלאַן**. דער פּלאַן באַשרײַבט:

- **ציל** — וואָס די פֿאַרענדיקטע זײַט זאָל טאָן
- **פֿאַזעס** — אָרדנטלעכע גרופּעס פֿון שריט (למשל _אײַנשטעלונג_, _אינהאַלט־טיפּן_, _דיזײַן_, _אינהאַלט_)
- **שריט** — יחידישע מעגלעכקייט־רופֿונגען אין יעדער פֿאַזע
- **Plugin־פֿאָדערונגען** — plugins וואָס מוזן זײַן אַקטיוו כּדי געוויסע שריט זאָלן לויפֿן
- **פֿאַלבעקס** — אַלטערנאַטיווע שריט אויב אַ הויפּט־שריט פֿעלט אויס

**בײַשפּיל־פּלאַן (אָפּגעקירצט)**

```json
{
  "plan_id": "plan_restaurant_001",
  "goal": "Build a restaurant website with an online menu, booking form, and contact page",
  "phases": [
    {
      "id": "setup",
      "label": "Setup",
      "steps": [
        { "ability": "install_ability", "params": { "slug": "gratis-ai-agent-woocommerce" } },
        { "ability": "register_post_type", "params": { "slug": "menu-item", "singular_label": "Menu Item", "plural_label": "Menu Items" } },
        { "ability": "register_taxonomy", "params": { "slug": "menu-section", "singular_label": "Menu Section", "plural_label": "Menu Sections", "post_types": ["menu-item"] } }
      ]
    },
    {
      "id": "design",
      "label": "Design",
      "steps": [
        { "ability": "apply_theme_json_preset", "params": { "preset": "warm-editorial" } },
        { "ability": "inject_custom_css", "params": { "css": ".menu-item { border-radius: 8px; }", "label": "restaurant-ui" } }
      ]
    },
    {
      "id": "navigation",
      "label": "Navigation",
      "steps": [
        { "ability": "create_menu", "params": { "name": "Primary Navigation", "location": "primary" } },
        { "ability": "add_menu_item", "params": { "menu_id": "__ref:create_menu.menu_id", "type": "custom", "title": "Menu", "url": "/menu-items/" } },
        { "ability": "add_menu_item", "params": { "menu_id": "__ref:create_menu.menu_id", "type": "custom", "title": "Book a Table", "url": "/book/" } }
      ]
    }
  ],
  "plugin_requirements": [
    { "slug": "contact-form-7", "reason": "Required for the booking and contact forms" }
  ]
}
```

### 2. Plugin־אַנטדעקונג {#2-plugin-discovery}

איידער אויספֿיר הייבט זיך אָן, סקאַנירט דער אָרקעסטראטאָר די `plugin_requirements` פֿונעם פּלאַן און קאָנטראָלירט וועלכע plugins זענען שוין אַקטיוו. פֿאַר פֿעלנדיקע plugins, טוט ער:

1. זוכט אין דער רעגיסטרי דורך `recommend_plugin` פֿאַר דער בעסטער צופּאַסונג
2. בעט דעם אגענט צו באַשטעטיקן די רעקאָמענדאַציע
3. טריגערט אינסטאַלאַציע אויב באַוויליקט (אָדער אויב אויטאָ־אינסטאַלירן איז אײַנגעשאַלט אין אײַנשטעלונגען)

Plugin־אַנטדעקונג־דורכפֿאַלן זענען נישט־פֿאַטאַל — דער אָרקעסטראטאָר מאַרקט די באַווירקטע שריט ווי `skipped` און גייט ווײַטער מיטן רעשט פֿונעם פּלאַן.

### 3. פּלאַן־אויספֿיר {#3-plan-execution}

דער אָרקעסטראטאָר רופֿט `execute_site_plan` מיטן פּלאַן־ID. אויספֿיר גייט פֿאַזע־נאָך־פֿאַזע, שריט־נאָך־שריט:

- **שריט־רעפֿערענצן** (`__ref:` פּרעפֿיקס) — שריט קענען רעפֿערירן צו רעזולטאַטן פֿון פֿריִערדיקע שריט. אין דעם בײַשפּיל אויבן, ווערט `__ref:create_menu.menu_id` רעזאָלווירט צו דעם `menu_id` וואָס דער `create_menu` שריט גיט צוריק.
- **פּאַראַלעלע שריט** — שריט אין דער זעלבער פֿאַזע וואָס האָבן נישט קיין צווישן־אָפּהענגיקייטן ווערן אָפּגעשיקט גלײַכצײַטיק ווען דער `parallel` פֿאָן איז באַשטימט.
- **שריט־צײַטאויסלויף** — יעדער שריט האָט אַן אייגענעם צײַטאויסלויף (נאָרמאַל: די `Ability Timeout` אײַנשטעלונג). אַ שריט וואָס לויפֿט אויס פֿון צײַט ווערט געמאַרקט `failed` און דער פּלאַן גייט ווײַטער.

### 4. פּראָגרעס־נאָכפֿאָלג {#4-progress-tracking}

רופֿט `get_plan_progress` אין יעדן מאָמענט צו קאָנטראָלירן אויספֿיר־סטאַטוס:

```json
{
  "plan_id": "plan_restaurant_001",
  "status": "in_progress",
  "phases_total": 4,
  "phases_complete": 2,
  "steps_total": 14,
  "steps_complete": 8,
  "steps_failed": 1,
  "steps_skipped": 0,
  "current_step": "add_menu_item",
  "elapsed_seconds": 42
}
```

WP-CLI באַניצער קענען מאָניטאָרן פּראָגרעס מיט:

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### 5. טעות־ערהוילונג {#5-error-recovery}

ווען אַ שריט פֿעלט אויס, קאָנטראָלירט דער אָרקעסטראטאָר צי עס איז דאָ אַ **פֿאַלבעק**־שריט דעפֿינירט אין פּלאַן:

- **פֿאַלבעק בנימצא** — דער פֿאַלבעק־שריט ווערט פּרוּווט גלײַך. אויב ער איז מצליח, גייט אויספֿיר ווײַטער. אויב ער פֿעלט אויך אויס, ווערט דער שריט געמאַרקט `failed` און אויספֿיר גייט ווײַטער מיטן קומענדיקן שריט.
- **קיין פֿאַלבעק נישט** — דער שריט ווערט געמאַרקט `failed`. נישט־קריטישע שריט ווערן איבערגעהיפּט; קריטישע שריט (געמאַרקט `required: true`) האַלטן אָפּ די איצטיקע פֿאַזע און טריגערן אַ פֿאַזע־ניוואָ ערהוילונג־פּרוּוו.

דער אגענט באַריכטעט אַלע דורכפֿאַלן אין דער לעצטער פּלאַן־צוזאַמענפֿאַסונג און קען פֿאָרשלאָגן האַנטישע פֿאַרריכטונג־שריט פֿאַר אומדערהוילבאַרע טעותן.

---

## זײַט־פּלאַן מעגלעכקייטן {#site-plan-abilities}

### `create_site_plan` {#createsiteplan}

גענערירט אַ סטרוקטורירטן זײַט־פּלאַן פֿון אַ ציל־באַשרײַבונג אין נאַטירלעכער שפּראַך.

**פּאַראַמעטערס**

| פּאַראַמעטער | טיפּ | נייטיק | באַשרײַבונג |
|---|---|---|---|
| `goal` | string | יאָ | נאַטירלעכע־שפּראַך באַשרײַבונג פֿון דער געוואונטשענער וועבזײַט |
| `style` | string | ניין | וויזועלער סטיל־איבערהאַנט: `minimal`, `bold`, `professional`, `playful`. נאָרמאַל: דער אגענט קלײַבט לויטן ציל |
| `plugins` | array | ניין | Plugin־slugs צו אַרײַננעמען אין פּלאַן. דער אָרקעסטראטאָר לייגט צו נייטיקע plugins אויטאָמאַטיש. |
| `dry_run` | boolean | ניין | אויב `true`, גיט צוריק דעם פּלאַן JSON אָן שפּײַכערן אָדער אויספֿירן עס. נאָרמאַל `false` |

**גיט צוריק** `{ "plan_id": "plan_restaurant_001", "phases": 4, "steps": 14, "plugin_requirements": 1 }`

---

### `execute_site_plan` {#executesiteplan}

הייבט אָן אויספֿירן אַ פֿריִער גענערירטן זײַט־פּלאַן.

**פּאַראַמעטערס**

| פּאַראַמעטער | טיפּ | נייטיק | באַשרײַבונג |
|---|---|---|---|
| `plan_id` | string | יאָ | ID פֿונעם פּלאַן צו אויספֿירן |
| `auto_install_plugins` | boolean | ניין | אויב `true`, אינסטאַלירט אויטאָמאַטיש נייטיקע plugins אָן באַשטעטיקונג. נאָרמאַל `false` |
| `max_retries` | integer | ניין | צאָל מאָל צו פּרוּוון ווידער אַ דורכגעפֿאַלענעם שריט איידער מען גייט ווײַטער. נאָרמאַל `1` |

**גיט צוריק** `{ "execution_id": "exec_001", "status": "started" }`

---

### `get_plan_progress` {#getplanprogress}

גיט צוריק דעם איצטיקן אויספֿיר־סטאַטוס פֿון אַ זײַט־פּלאַן.

**פּאַראַמעטערס**

| פּאַראַמעטער | טיפּ | נייטיק | באַשרײַבונג |
|---|---|---|---|
| `plan_id` | string | יאָ | פּלאַן־ID צו אָנפֿרעגן |

**גיט צוריק** דעם פּראָגרעס־אָביעקט באַשריבן אין [פּראָגרעס־נאָכפֿאָלג](#4-progress-tracking) אויבן.

---

### `handle_plan_error` {#handleplanerror}

לייזט האַנטיש אַ דורכגעפֿאַלענעם שריט און נעמט ווידער אויף פּלאַן־אויספֿיר פֿון קומענדיקן שריט. ניצט דאָס ווען אויטאָמאַטישע ערהוילונג איז נישט געווען מעגלעך און איר ווילט זיך אַרײַנמישן.

**פּאַראַמעטערס**

| פּאַראַמעטער | טיפּ | נייטיק | באַשרײַבונג |
|---|---|---|---|
| `plan_id` | string | יאָ | פּלאַן־ID |
| `step_id` | string | יאָ | ID פֿונעם דורכגעפֿאַלענעם שריט |
| `resolution` | string | יאָ | איינער פֿון `skip` (איבערהיפּן און ווײַטערגיין), `retry` (ווידער פּרוּוון דעם שריט גלײַך), אָדער `mark_done` (באַהאַנדלען ווי מצליח אָן ווידער־לויפֿן) |

**גיט צוריק** `{ "success": true, "plan_id": "plan_restaurant_001", "resumed_from": "add_menu_item" }`

---

## פֿאַרגלײַכן v1 און v2 {#comparing-v1-and-v2}

| פֿעיִקייט | v1 | v2 |
|---|---|---|
| מאַלטי־פֿאַזע פּלענער | ניין | יאָ |
| שריט־רעזולטאַט רעפֿערענצן (`__ref:`) | ניין | יאָ |
| Plugin־אַנטדעקונג | האַנטיש | אויטאָמאַטיש |
| פּראָגרעס־נאָכפֿאָלג API | ניין | יאָ |
| טעות־ערהוילונג | דורכפֿאַל־און־אָפּשטעלן | פֿאַלבעק + ווײַטערגיין |
| פּאַראַלעלער שריט־אויספֿיר | ניין | יאָ (אָפּט־אין פּער פֿאַזע) |
| WP-CLI פּלאַן־באַפֿעלן | ניין | יאָ |
| בענשמאַרק־אינטעגראַציע | ניין | יאָ (`q-restaurant-website`) |

---

## WP-CLI פּלאַן־באַפֿעלן {#wp-cli-plan-commands}

### `wp gratis-ai-agent plan create` {#wp-gratis-ai-agent-plan-create}

גענערירט אַ זײַט־פּלאַן פֿון אַ ציל־באַשרײַבונג.

```bash
wp gratis-ai-agent plan create "Build a restaurant website with an online menu, booking form, and contact page" [--dry-run] [--output=json]
```

### `wp gratis-ai-agent plan execute` {#wp-gratis-ai-agent-plan-execute}

פֿירט אויס אַ פֿריִער גענערירטן פּלאַן.

```bash
wp gratis-ai-agent plan execute plan_restaurant_001 [--auto-install-plugins]
```

### `wp gratis-ai-agent plan status` {#wp-gratis-ai-agent-plan-status}

ווײַזט איצטיקן פּראָגרעס פֿאַר אַ דורכגעפֿירטן אָדער פֿאַרענדיקטן פּלאַן.

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### `wp gratis-ai-agent plan list` {#wp-gratis-ai-agent-plan-list}

ליסטעט אַלע זײַט־פּלענער (וואַרטנדיק, אין־פּראָגרעס, און פֿאַרענדיקט).

```bash
wp gratis-ai-agent plan list [--status=<status>] [--format=table|json|csv]
```

### `wp gratis-ai-agent plan reset` {#wp-gratis-ai-agent-plan-reset}

שטעלט צוריק אַ דורכגעפֿאַלענעם פּלאַן צו `pending` כּדי מען זאָל קענען אים ווידער אויספֿירן פֿון אָנהייב.

```bash
wp gratis-ai-agent plan reset plan_restaurant_001
```

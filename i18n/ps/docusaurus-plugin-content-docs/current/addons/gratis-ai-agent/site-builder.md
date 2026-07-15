---
title: د سایټ جوړونکي همغږي v2
sidebar_position: 4
_i18n_hash: 3a3d15844b4a0751fc59ac3a4e1fb0c0
---
# د سایټ جوړوونکي همغږي v2

Site Builder Orchestration v2 (چې په Gratis AI Agent v1.4.0 کې معرفي شوی) هغه انجن دی چې د څو پړاوونو ویب‌سایټ جوړونه پر مخ وړي. کله چې تاسو agent ته وایاست چې "د رستورانت ویب‌سایټ جوړ کړه" یا "له بلاګ سره یو پورټفولیو جوړ کړه"، orchestrator هغه لوړکچه موخه په یو جوړښت لرونکي **پلان** ویشي، د هغې د پوره کولو لپاره اړین plugins مومي، هر ګام په ترتیب اجرا کوي، پرمختګ څاري، او له تېروتنو څخه په خپلواکه توګه رغېږي.

---

## دا څنګه کار کوي {#how-it-works}

### 1. د پلان جوړول {#1-plan-generation}

کله چې agent د سایټ جوړولو لارښوونه ترلاسه کړي، دا د JSON **سایټ پلان** د جوړولو لپاره د `create_site_plan` وړتیا رابولي. پلان دا تشریح کوي:

- **موخه** — بشپړ شوی سایټ باید څه وکړي
- **پړاوونه** — د ګامونو ترتیبي ډلې (لکه _تنظیم_، _د منځپانګې ډولونه_، _ډیزاین_، _منځپانګه_)
- **ګامونه** — په هر پړاو کې انفرادي وړتیا غوښتنې
- **د plugin اړتیاوې** — هغه plugins چې د ځینو ګامونو د چلولو لپاره باید فعال وي
- **بدیلونه** — که اصلي ګام ناکام شي، بدیل ګامونه

**د پلان بېلګه (لنډه شوې)**

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

### 2. د Plugin موندنه {#2-plugin-discovery}

د اجرا له پیل مخکې، orchestrator د پلان `plugin_requirements` سکین کوي او ګوري چې کوم plugins لا دمخه فعال دي. د ورک plugins لپاره، دا:

1. د غوره سمون لپاره د `recommend_plugin` له لارې registry لټوي
2. agent ته د سپارښتنې د تایید غوښتنه کوي
3. که تایید شي نصب پیلوي (یا که په settings کې auto-install فعال وي)

د plugin موندنې ناکامۍ وژونکې نه دي — orchestrator اغېزمن شوي ګامونه د `skipped` په توګه نښه کوي او د پلان له پاتې برخې سره دوام ورکوي.

### 3. د پلان اجرا {#3-plan-execution}

orchestrator د پلان ID سره `execute_site_plan` رابولي. اجرا پړاو په پړاو، ګام په ګام پر مخ ځي:

- **د ګام حوالې** (`__ref:` prefix) — ګامونه کولی شي د تېرو ګامونو outputs ته حواله ورکړي. په پورته بېلګه کې، `__ref:create_menu.menu_id` هغه `menu_id` ته حل کېږي چې د `create_menu` ګام له خوا راستون شوی.
- **موازي ګامونه** — په همدې پړاو کې هغه ګامونه چې خپلمنځنۍ تړاو نه لري، کله چې `parallel` نښه ټاکل شوې وي، هممهاله لېږل کېږي.
- **د ګام وخت‌پای** — هر ګام انفرادي وخت‌پای لري (پېشبڼه: د `Ability Timeout` setting). هغه ګام چې وخت یې پای ته ورسېږي `failed` نښه کېږي او پلان دوام کوي.

### 4. د پرمختګ څارنه {#4-progress-tracking}

د اجرا حالت د کتلو لپاره هر وخت `get_plan_progress` راوبلئ:

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

د WP-CLI کاروونکي کولی شي پرمختګ داسې وڅاري:

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### 5. له تېروتنې رغونه {#5-error-recovery}

کله چې یو ګام ناکام شي، orchestrator په پلان کې تعریف شوی **بدیل** ګام ګوري:

- **بدیل شته** — بدیل ګام سمدستي ازمویل کېږي. که بریالی شي، اجرا دوام کوي. که هغه هم ناکام شي، ګام `failed` نښه کېږي او اجرا له راتلونکي ګام سره دوام کوي.
- **بدیل نشته** — ګام `failed` نښه کېږي. غیر مهم ګامونه پرېښودل کېږي؛ مهم ګامونه (چې `required: true` نښه شوي) اوسنی پړاو دروي او د پړاو-کچې د رغونې هڅه پیلوي.

agent په وروستي پلان لنډیز کې ټولې ناکامۍ راپوروي او ښايي د نه رغېدونکو تېروتنو لپاره د لاسي سمون ګامونه وړاندیز کړي.

---

## د سایټ پلان وړتیاوې {#site-plan-abilities}

### `create_site_plan` {#createsiteplan}

د طبیعي ژبې د موخې له تشریح څخه جوړښت لرونکی سایټ پلان جوړوي.

**پارامترونه**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `goal` | string | Yes | د غوښتل شوي ویب‌سایټ د طبیعي ژبې تشریح |
| `style` | string | No | د لید سبک غوره‌والی: `minimal`, `bold`, `professional`, `playful`. پېشبڼه: agent د موخې پر بنسټ ټاکي |
| `plugins` | array | No | هغه plugin slugs چې په پلان کې شاملېږي. orchestrator اړین plugins په اوتومات ډول زیاتوي. |
| `dry_run` | boolean | No | که `true` وي، د پلان JSON د ساتلو یا اجرا کولو پرته راستنوي. پېشبڼه `false` |

**راستنوي** `{ "plan_id": "plan_restaurant_001", "phases": 4, "steps": 14, "plugin_requirements": 1 }`

---

### `execute_site_plan` {#executesiteplan}

د مخکې جوړ شوي سایټ پلان اجرا پیلوي.

**پارامترونه**

| پارامېټر | ډول | اړین | تشریح |
|---|---|---|---|
| `plan_id` | string | هو | د اجرا کولو لپاره د پلان ID |
| `auto_install_plugins` | boolean | نه | که `true` وي، اړین پلګینونه له تایید پرته په اتومات ډول نصبوي. تلواله `false` |
| `max_retries` | integer | نه | د ناکام ګام د بیا هڅې شمېر مخکې له دې چې مخکې لاړ شي. تلواله `1` |

**راګرځوي** `{ "execution_id": "exec_001", "status": "started" }`

---

### `get_plan_progress` {#getplanprogress}

د وېبپاڼې د پلان د اوسني اجرا حالت راګرځوي.

**پارامېټرونه**

| پارامېټر | ډول | اړین | تشریح |
|---|---|---|---|
| `plan_id` | string | هو | د پوښتنې لپاره د پلان ID |

**راګرځوي** هغه پرمختګ څیز چې پورته په [د پرمختګ څارنه](#4-progress-tracking) کې تشریح شوی.

---

### `handle_plan_error` {#handleplanerror}

یو ناکام ګام په لاسي ډول حلوي او د پلان اجرا له راتلونکي ګام څخه بیا پیلوي. دا هغه وخت وکاروئ چې اتومات رغونه ممکنه نه وه او تاسو غواړئ مداخله وکړئ.

**پارامېټرونه**

| پارامېټر | ډول | اړین | تشریح |
|---|---|---|---|
| `plan_id` | string | هو | د پلان ID |
| `step_id` | string | هو | د ناکام ګام ID |
| `resolution` | string | هو | له `skip` (پرېښودل او دوام ورکول)، `retry` (ګام سمدستي بیا هڅول)، یا `mark_done` (له بیا چلولو پرته یې بریالی ګڼل) څخه یو |

**راګرځوي** `{ "success": true, "plan_id": "plan_restaurant_001", "resumed_from": "add_menu_item" }`

---

## د v1 او v2 پرتله {#comparing-v1-and-v2}

| ځانګړنه | v1 | v2 |
|---|---|---|
| څو-پړاوي پلانونه | نه | هو |
| د ګام د پایلې ارجاعات (`__ref:`) | نه | هو |
| د پلګین موندنه | لاسي | اتومات |
| د پرمختګ څارنې API | نه | هو |
| د تېروتنې رغونه | ناکامېدل-او-درېدل | بدیل + دوام |
| د موازي ګام اجرا | نه | هو (د هر پړاو لپاره اختیاري) |
| د WP-CLI پلان امرونه | نه | هو |
| د بنچمارک یوځای کول | نه | هو (`q-restaurant-website`) |

---

## د WP-CLI پلان امرونه {#wp-cli-plan-commands}

### `wp gratis-ai-agent plan create` {#wp-gratis-ai-agent-plan-create}

له موخې تشریح څخه د وېبپاڼې پلان تولیدوي.

```bash
wp gratis-ai-agent plan create "Build a restaurant website with an online menu, booking form, and contact page" [--dry-run] [--output=json]
```

### `wp gratis-ai-agent plan execute` {#wp-gratis-ai-agent-plan-execute}

یو مخکې تولید شوی پلان اجرا کوي.

```bash
wp gratis-ai-agent plan execute plan_restaurant_001 [--auto-install-plugins]
```

### `wp gratis-ai-agent plan status` {#wp-gratis-ai-agent-plan-status}

د اجرا کېدونکي یا بشپړ شوي پلان اوسنی پرمختګ ښيي.

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### `wp gratis-ai-agent plan list` {#wp-gratis-ai-agent-plan-list}

د وېبپاڼې ټول پلانونه لېست کوي (انتظار کې، د اجرا په حال کې، او بشپړ شوي).

```bash
wp gratis-ai-agent plan list [--status=<status>] [--format=table|json|csv]
```

### `wp gratis-ai-agent plan reset` {#wp-gratis-ai-agent-plan-reset}

یو ناکام پلان `pending` ته بیا تنظیموي څو له پیل څخه بیا اجرا شي.

```bash
wp gratis-ai-agent plan reset plan_restaurant_001
```

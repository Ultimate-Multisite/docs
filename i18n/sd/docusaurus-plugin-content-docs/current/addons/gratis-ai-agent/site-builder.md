---
title: سائيٽ ٺاهيندڙ جي هم آهنگي v2
sidebar_position: 4
_i18n_hash: 3a3d15844b4a0751fc59ac3a4e1fb0c0
---
# Site Builder Orchestration v2

Site Builder Orchestration v2 (Gratis AI Agent v1.4.0 ۾ متعارف ڪرايل) اهو انجڻ آهي جيڪو گهڻ-مرحلن واري ويب سائيٽ ٺاهڻ کي طاقت ڏئي ٿو. جڏهن توهان agent کي "هڪ ريسٽورنٽ ويب سائيٽ ٺاهيو" يا "بلاگ سان گڏ پورٽفوليو ٺاهيو" چوندا آهيو، orchestrator ان اعليٰ سطحي مقصد کي هڪ منظم **منصوبي** ۾ ٽوڙي ٿو، ان کي پورو ڪرڻ لاءِ گهربل plugins ڳولي ٿو، هر قدم کي ترتيب سان هلائي ٿو، اڳڀرائي ٽريڪ ڪري ٿو، ۽ غلطين مان پاڻمرادو بحال ٿئي ٿو.

---

## اهو ڪيئن ڪم ڪري ٿو

### 1. منصوبي جي ٺاهه

جڏهن agent کي site ٺاهڻ جي هدايت ملي ٿي، اهو JSON **site منصوبو** پيدا ڪرڻ لاءِ `create_site_plan` صلاحيت کي سڏي ٿو. منصوبو بيان ڪري ٿو:

- **مقصد** — مڪمل ٿيل site کي ڇا ڪرڻ گهرجي
- **مرحلا** — قدمن جا ترتيب وار گروپ (مثال طور _سيٽ اپ_, _مواد جا قسم_, _ڊيزائن_, _مواد_)
- **قدم** — هر مرحلي اندر انفرادي صلاحيت جون ڪالون
- **Plugin گهرجون** — plugins جيڪي ڪجهه قدمن کي هلائڻ لاءِ فعال هجڻ گهرجن
- **Fallbacks** — جيڪڏهن بنيادي قدم ناڪام ٿئي ته متبادل قدم

**مثالي منصوبو (مختصر ڪيل)**

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

### 2. Plugin جي ڳولا

عملدرآمد شروع ٿيڻ کان اڳ، orchestrator منصوبي جي `plugin_requirements` کي اسڪين ڪري ٿو ۽ چيڪ ڪري ٿو ته ڪهڙا plugins اڳ ۾ ئي فعال آهن. گم plugins لاءِ، اهو:

1. بهترين ملندڙ لاءِ `recommend_plugin` ذريعي registry ۾ ڳولا ڪري ٿو
2. سفارش جي تصديق ڪرڻ لاءِ agent کي پڇي ٿو
3. جيڪڏهن منظور ٿئي (يا جيڪڏهن settings ۾ auto-install فعال هجي) ته انسٽاليشن شروع ڪري ٿو

Plugin جي ڳولا جون ناڪاميون موتمار نه آهن — orchestrator متاثر قدمن کي `skipped` طور نشان لڳائي ٿو ۽ منصوبي جي باقي حصي سان جاري رهي ٿو.

### 3. منصوبي جو عملدرآمد

orchestrator منصوبي جي ID سان `execute_site_plan` کي سڏي ٿو. عملدرآمد مرحلي-بمرحلو، قدم-بقدم اڳتي وڌي ٿو:

- **قدم حوالا** (`__ref:` prefix) — قدم اڳوڻن قدمن جي outputs ڏانهن حوالو ڏئي سگهن ٿا. مٿي ڏنل مثال ۾، `__ref:create_menu.menu_id` کي `create_menu` قدم طرفان موٽايل `menu_id` ۾ حل ڪيو ويندو آهي.
- **متوازي قدم** — ساڳئي مرحلي اندر اهڙا قدم جن ۾ پاڻ ۾ انحصار نه هجي، جڏهن `parallel` flag مقرر هجي ته هڪ ئي وقت موڪليا ويندا آهن.
- **قدم timeout** — هر قدم جو هڪ انفرادي timeout هوندو آهي (default: `Ability Timeout` setting). timed-out قدم کي `failed` طور نشان لڳايو ويندو آهي ۽ منصوبو جاري رهي ٿو.

### 4. اڳڀرائي ٽريڪ ڪرڻ

عملدرآمد جي حيثيت چيڪ ڪرڻ لاءِ ڪنهن به وقت `get_plan_progress` ڪال ڪريو:

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

WP-CLI صارف اڳڀرائي کي هن سان مانيٽر ڪري سگهن ٿا:

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### 5. غلطي مان بحالي

جڏهن ڪو قدم ناڪام ٿئي ٿو، orchestrator منصوبي ۾ بيان ڪيل **fallback** قدم چيڪ ڪري ٿو:

- **Fallback موجود** — fallback قدم کي فوري طور آزمايو ويندو آهي. جيڪڏهن اهو ڪامياب ٿئي، عملدرآمد جاري رهي ٿو. جيڪڏهن اهو به ناڪام ٿئي، قدم کي `failed` طور نشان لڳايو ويندو آهي ۽ عملدرآمد ايندڙ قدم سان جاري رهي ٿو.
- **Fallback ناهي** — قدم کي `failed` طور نشان لڳايو ويندو آهي. غير-اهم قدم ڇڏيا ويندا آهن؛ اهم قدم (`required: true` سان نشان لڳايل) موجوده مرحلي کي روڪين ٿا ۽ مرحلي-سطح جي بحالي جي ڪوشش شروع ڪن ٿا.

agent آخري منصوبي جي خلاصو ۾ سڀ ناڪاميون رپورٽ ڪري ٿو ۽ ناقابل بحالي غلطين لاءِ دستي اصلاح جا قدم تجويز ڪري سگهي ٿو.

---

## Site Plan صلاحيتون

### `create_site_plan`

قدرتي ٻولي واري مقصد جي وضاحت مان هڪ منظم site منصوبو پيدا ڪري ٿو.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `goal` | string | Yes | گهربل ويب سائيٽ جي قدرتي ٻولي واري وضاحت |
| `style` | string | No | بصري انداز جي ترجيح: `minimal`, `bold`, `professional`, `playful`. Default: agent مقصد جي بنياد تي چونڊي ٿو |
| `plugins` | array | No | منصوبي ۾ شامل ڪرڻ لاءِ Plugin slugs. orchestrator گهربل plugins پاڻمرادو شامل ڪري ٿو. |
| `dry_run` | boolean | No | جيڪڏهن `true` هجي، ته منصوبي جو JSON محفوظ ڪرڻ يا هلائڻ کانسواءِ واپس ڪري ٿو. Default `false` |

**واپسي** `{ "plan_id": "plan_restaurant_001", "phases": 4, "steps": 14, "plugin_requirements": 1 }`

---

### `execute_site_plan`

اڳ ۾ ٺاهيل site منصوبي جو عملدرآمد شروع ڪري ٿو.

**Parameters**

| پيرا ميٽر | قسم | گهربل | وضاحت |
|---|---|---|---|
| `plan_id` | string | ها | هلائڻ لاءِ پلان جي ID |
| `auto_install_plugins` | boolean | نه | جيڪڏهن `true` هجي، ته گهربل plugins بنا تصديق جي پاڻمرادو انسٽال ڪري ٿو. ڊفالٽ `false` |
| `max_retries` | integer | نه | اڳتي وڌڻ کان اڳ ناڪام قدم کي ٻيهر ڪوشش ڪرڻ جو تعداد. ڊفالٽ `1` |

**واپس ڪري ٿو** `{ "execution_id": "exec_001", "status": "started" }`

---

### `get_plan_progress`

سائيٽ پلان جي موجوده عملدرآمد حيثيت واپس ڪري ٿو.

**پيرا ميٽر**

| پيرا ميٽر | قسم | گهربل | وضاحت |
|---|---|---|---|
| `plan_id` | string | ها | پڇا ڪرڻ لاءِ پلان ID |

**واپس ڪري ٿو** مٿي [اڳڀرائي ٽريڪنگ](#4-progress-tracking) ۾ بيان ڪيل اڳڀرائي آبجيڪٽ.

---

### `handle_plan_error`

ناڪام قدم کي هٿ سان حل ڪري ٿو ۽ ايندڙ قدم کان پلان جو عملدرآمد ٻيهر شروع ڪري ٿو. هن کي تڏهن استعمال ڪريو جڏهن پاڻمرادو بحالي ممڪن نه هجي ۽ توهان مداخلت ڪرڻ چاهيو.

**پيرا ميٽر**

| پيرا ميٽر | قسم | گهربل | وضاحت |
|---|---|---|---|
| `plan_id` | string | ها | پلان ID |
| `step_id` | string | ها | ناڪام قدم جي ID |
| `resolution` | string | ها | `skip` (ڇڏي ڏيو ۽ جاري رکو)، `retry` (قدم کي فوراً ٻيهر ڪوشش ڪريو)، يا `mark_done` (ٻيهر هلائڻ کان سواءِ ڪامياب سمجهو) مان هڪ |

**واپس ڪري ٿو** `{ "success": true, "plan_id": "plan_restaurant_001", "resumed_from": "add_menu_item" }`

---

## v1 ۽ v2 جو مقابلو

| خصوصيت | v1 | v2 |
|---|---|---|
| گهڻ-مرحلا پلان | نه | ها |
| قدم جي آئوٽ پٽ حوالا (`__ref:`) | نه | ها |
| Plugin دريافت | هٿ سان | پاڻمرادو |
| اڳڀرائي ٽريڪنگ API | نه | ها |
| غلطي بحالي | ناڪام-۽-روڪيو | متبادل + جاري رکو |
| متوازي قدم عملدرآمد | نه | ها (هر مرحلي لاءِ اختياري) |
| WP-CLI پلان ڪمانڊز | نه | ها |
| بينچ مارڪ انٽيگريشن | نه | ها (`q-restaurant-website`) |

---

## WP-CLI پلان ڪمانڊز

### `wp gratis-ai-agent plan create`

مقصد جي وضاحت مان سائيٽ پلان ٺاهي ٿو.

```bash
wp gratis-ai-agent plan create "Build a restaurant website with an online menu, booking form, and contact page" [--dry-run] [--output=json]
```

### `wp gratis-ai-agent plan execute`

اڳ ۾ ٺاهيل پلان هلائي ٿو.

```bash
wp gratis-ai-agent plan execute plan_restaurant_001 [--auto-install-plugins]
```

### `wp gratis-ai-agent plan status`

هلندڙ يا مڪمل ٿيل پلان لاءِ موجوده اڳڀرائي ڏيکاري ٿو.

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### `wp gratis-ai-agent plan list`

سڀ سائيٽ پلانن جي فهرست ڏيکاري ٿو (انتظار ۾، جاري، ۽ مڪمل ٿيل).

```bash
wp gratis-ai-agent plan list [--status=<status>] [--format=table|json|csv]
```

### `wp gratis-ai-agent plan reset`

ناڪام پلان کي `pending` تي ري سيٽ ڪري ٿو ته جيئن ان کي شروعات کان ٻيهر هلائي سگهجي.

```bash
wp gratis-ai-agent plan reset plan_restaurant_001
```

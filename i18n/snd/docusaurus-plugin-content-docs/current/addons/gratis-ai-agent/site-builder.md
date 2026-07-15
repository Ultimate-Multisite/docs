---
title: سائيٽ ٺاهيندڙ جي هم آهنگي v2
sidebar_position: 4
_i18n_hash: 3a3d15844b4a0751fc59ac3a4e1fb0c0
---
# سائيٽ بلڊر آرڪيسٽريشن v2

سائيٽ بلڊر آرڪيسٽريشن v2 (Gratis AI Agent v1.4.0 ۾ متعارف ڪرايل) اهو انجڻ آهي جيڪو گهڻن مرحلن واري ويب سائيٽ ٺاهڻ کي طاقت ڏئي ٿو. جڏهن توهان agent کي "ريسٽورنٽ ويب سائيٽ ٺاهيو" يا "بلاگ سان گڏ پورٽ فوليو ٺاهيو" چوندا آهيو، orchestrator انهيٰ اعليٰ سطح جي مقصد کي هڪ منظم **رٿا** ۾ ورهائي ٿو، ان کي پورو ڪرڻ لاءِ گهربل plugins ڳولي ٿو، هر قدم کي ترتيب سان هلائي ٿو، اڳڀرائي کي ٽريڪ ڪري ٿو، ۽ غلطين مان خودمختيار طور بحال ٿئي ٿو.

---

## اهو ڪيئن ڪم ڪري ٿو {#how-it-works}

### 1. رٿا جي تياري {#1-plan-generation}

جڏهن agent کي سائيٽ ٺاهڻ جي هدايت ملي ٿي، اهو JSON **سائيٽ رٿا** پيدا ڪرڻ لاءِ `create_site_plan` صلاحيت کي سڏي ٿو. رٿا بيان ڪري ٿي:

- **مقصد** — مڪمل ٿيل سائيٽ ڇا ڪرڻ گهرجي
- **مرحلا** — قدمن جا ترتيب ڏنل گروهه (مثال طور _سيٽ اپ_، _مواد جا قسم_، _ڊيزائن_، _مواد_)
- **قدم** — هر مرحلي اندر انفرادي صلاحيت ڪالون
- **Plugin گهرجون** — plugins جيڪي ڪجهه قدمن کي هلائڻ لاءِ فعال هجڻ گهرجن
- **Fallbacks** — جيڪڏهن بنيادي قدم ناڪام ٿئي ته متبادل قدم

**مثالي رٿا (مختصر)**

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

### 2. Plugin جي ڳولا {#2-plugin-discovery}

عمل شروع ٿيڻ کان اڳ، orchestrator رٿا جي `plugin_requirements` کي اسڪين ڪري ٿو ۽ چيڪ ڪري ٿو ته ڪهڙا plugins اڳ ۾ ئي فعال آهن. غائب plugins لاءِ، اهو:

1. بهترين ميل لاءِ `recommend_plugin` ذريعي registry ۾ ڳولا ڪري ٿو
2. agent کي سفارش جي تصديق لاءِ پڇي ٿو
3. جيڪڏهن منظوري ملي (يا جيڪڏهن settings ۾ auto-install فعال هجي) ته انسٽاليشن شروع ڪري ٿو

Plugin ڳولا جون ناڪاميون موتمار ناهن — orchestrator متاثر قدمن کي `skipped` طور نشان لڳائي ٿو ۽ رٿا جي باقي حصي سان جاري رهي ٿو.

### 3. رٿا جو عملدرآمد {#3-plan-execution}

orchestrator رٿا ID سان `execute_site_plan` کي سڏي ٿو. عملدرآمد مرحلو بہ مرحلو، قدم بہ قدم اڳتي وڌي ٿو:

- **قدم حوالا** (`__ref:` prefix) — قدم پوئين قدمن جي outputs جو حوالو ڏئي سگهن ٿا. مٿئين مثال ۾، `__ref:create_menu.menu_id` کي `create_menu` قدم طرفان واپس ڪيل `menu_id` ۾ حل ڪيو وڃي ٿو.
- **متوازي قدم** — ساڳئي مرحلي اندر اهي قدم جن ۾ پاڻ ۾ انحصار نه هجي، جڏهن `parallel` flag سيٽ هجي ته ساڳئي وقت موڪليا وڃن ٿا.
- **قدم timeout** — هر قدم وٽ انفرادي timeout هوندو آهي (default: `Ability Timeout` setting). وقت ختم ٿيل قدم کي `failed` طور نشان لڳايو وڃي ٿو ۽ رٿا جاري رهي ٿي.

### 4. اڳڀرائي جي ٽريڪنگ {#4-progress-tracking}

عملدرآمد جي حالت چيڪ ڪرڻ لاءِ ڪنهن به وقت `get_plan_progress` کي سڏيو:

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

WP-CLI استعمال ڪندڙ اڳڀرائي کي هن سان مانيٽر ڪري سگهن ٿا:

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### 5. غلطي مان بحالي {#5-error-recovery}

جڏهن ڪو قدم ناڪام ٿئي ٿو، orchestrator رٿا ۾ بيان ڪيل **fallback** قدم چيڪ ڪري ٿو:

- **Fallback موجود** — fallback قدم فوري طور آزمائجي ٿو. جيڪڏهن اهو ڪامياب ٿئي، عملدرآمد جاري رهي ٿو. جيڪڏهن اهو به ناڪام ٿئي، قدم کي `failed` طور نشان لڳايو وڃي ٿو ۽ عملدرآمد ايندڙ قدم سان جاري رهي ٿو.
- **Fallback ناهي** — قدم کي `failed` طور نشان لڳايو وڃي ٿو. غير اهم قدم ڇڏيا وڃن ٿا؛ اهم قدم (جن کي `required: true` سان نشان لڳايو ويو آهي) موجوده مرحلي کي روڪين ٿا ۽ مرحلي-سطح جي بحالي جي ڪوشش شروع ڪن ٿا.

agent آخري رٿا جي خلاصو ۾ سڀ ناڪاميون رپورٽ ڪري ٿو ۽ ناقابل بحالي غلطين لاءِ دستي اصلاح جا قدم تجويز ڪري سگهي ٿو.

---

## سائيٽ رٿا جون صلاحيتون {#site-plan-abilities}

### `create_site_plan` {#createsiteplan}

قدرتي ٻولي واري مقصد جي وضاحت مان منظم سائيٽ رٿا ٺاهي ٿو.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `goal` | string | ها | گهربل ويب سائيٽ جي قدرتي ٻولي ۾ وضاحت |
| `style` | string | نه | بصري style جي ترجيح: `minimal`, `bold`, `professional`, `playful`. Default: agent مقصد جي بنياد تي چونڊي ٿو |
| `plugins` | array | نه | رٿا ۾ شامل ڪرڻ لاءِ Plugin slugs. orchestrator گهربل plugins پاڻمرادو شامل ڪري ٿو. |
| `dry_run` | boolean | نه | جيڪڏهن `true` هجي، ته رٿا JSON کي محفوظ يا عملدرآمد ڪرڻ کان سواءِ واپس ڪري ٿو. Default `false` |

**واپسي** `{ "plan_id": "plan_restaurant_001", "phases": 4, "steps": 14, "plugin_requirements": 1 }`

---

### `execute_site_plan` {#executesiteplan}

اڳ ۾ ٺاهيل سائيٽ رٿا جو عملدرآمد شروع ڪري ٿو.

**Parameters**

| پيرا ميٽر | قسم | گهربل | وضاحت |
|---|---|---|---|
| `plan_id` | string | ها | عمل ڪرائڻ لاءِ منصوبي جو ID |
| `auto_install_plugins` | boolean | نه | جيڪڏهن `true` هجي، ته تصديق کان سواءِ ضروري پلگ اِن پاڻمرادو انسٽال ڪري ٿو. ڊفالٽ `false` |
| `max_retries` | integer | نه | اڳتي وڌڻ کان اڳ ناڪام قدم کي ٻيهر ڪوشش ڪرڻ جو تعداد. ڊفالٽ `1` |

**واپس ڪري ٿو** `{ "execution_id": "exec_001", "status": "started" }`

---

### `get_plan_progress` {#getplanprogress}

سائيٽ جي منصوبي جي موجوده عملدرآمد حيثيت واپس ڪري ٿو.

**پيرا ميٽر**

| پيرا ميٽر | قسم | گهربل | وضاحت |
|---|---|---|---|
| `plan_id` | string | ها | پڇا لاءِ منصوبي جو ID |

**واپس ڪري ٿو** مٿي [ترقي جي ٽريڪنگ](#4-progress-tracking) ۾ بيان ڪيل ترقي جو آبجڪٽ.

---

### `handle_plan_error` {#handleplanerror}

ناڪام قدم کي هٿرادو حل ڪري ٿو ۽ منصوبي جو عملدرآمد ايندڙ قدم کان ٻيهر شروع ڪري ٿو. هي تڏهن استعمال ڪريو جڏهن پاڻمرادو بحالي ممڪن نه هجي ۽ توهان مداخلت ڪرڻ چاهيو.

**پيرا ميٽر**

| پيرا ميٽر | قسم | گهربل | وضاحت |
|---|---|---|---|
| `plan_id` | string | ها | منصوبي جو ID |
| `step_id` | string | ها | ناڪام قدم جو ID |
| `resolution` | string | ها | `skip` (ڇڏي ڏيو ۽ جاري رکو)، `retry` (قدم کي فوراً ٻيهر ڪوشش ڪريو)، يا `mark_done` (ٻيهر هلائڻ کان سواءِ ڪامياب سمجهو) مان هڪ |

**واپس ڪري ٿو** `{ "success": true, "plan_id": "plan_restaurant_001", "resumed_from": "add_menu_item" }`

---

## v1 ۽ v2 جو مقابلو {#comparing-v1-and-v2}

| خصوصيت | v1 | v2 |
|---|---|---|
| گهڻ-مرحلي وارا منصوبا | نه | ها |
| قدم جي آئوٽ پٽ حوالا (`__ref:`) | نه | ها |
| پلگ اِن دريافت | هٿرادو | پاڻمرادو |
| ترقي ٽريڪنگ API | نه | ها |
| نقص مان بحالي | ناڪام ٿيو ۽ روڪيو | متبادل + جاري رکو |
| متوازي قدم عملدرآمد | نه | ها (هر مرحلي لاءِ چونڊ سان) |
| WP-CLI منصوبي جا حڪم | نه | ها |
| بينچ مارڪ انضمام | نه | ها (`q-restaurant-website`) |

---

## WP-CLI منصوبي جا حڪم {#wp-cli-plan-commands}

### `wp gratis-ai-agent plan create` {#wp-gratis-ai-agent-plan-create}

مقصد جي وضاحت مان سائيٽ جو منصوبو ٺاهي ٿو.

```bash
wp gratis-ai-agent plan create "Build a restaurant website with an online menu, booking form, and contact page" [--dry-run] [--output=json]
```

### `wp gratis-ai-agent plan execute` {#wp-gratis-ai-agent-plan-execute}

اڳ ۾ ٺاهيل منصوبو عمل ۾ آڻي ٿو.

```bash
wp gratis-ai-agent plan execute plan_restaurant_001 [--auto-install-plugins]
```

### `wp gratis-ai-agent plan status` {#wp-gratis-ai-agent-plan-status}

هلندڙ يا مڪمل ٿيل منصوبي لاءِ موجوده ترقي ڏيکاري ٿو.

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### `wp gratis-ai-agent plan list` {#wp-gratis-ai-agent-plan-list}

سڀ سائيٽ منصوبا (انتظار ۾، جاري، ۽ مڪمل ٿيل) لسٽ ڪري ٿو.

```bash
wp gratis-ai-agent plan list [--status=<status>] [--format=table|json|csv]
```

### `wp gratis-ai-agent plan reset` {#wp-gratis-ai-agent-plan-reset}

ناڪام منصوبي کي `pending` تي ري سيٽ ڪري ٿو ته جيئن اهو شروع کان ٻيهر عمل ۾ آڻي سگهجي.

```bash
wp gratis-ai-agent plan reset plan_restaurant_001
```

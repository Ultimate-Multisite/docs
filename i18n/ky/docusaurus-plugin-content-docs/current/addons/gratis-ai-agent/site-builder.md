---
title: Сайт куруучуну оркестрациялоо v2
sidebar_position: 4
_i18n_hash: 3a3d15844b4a0751fc59ac3a4e1fb0c0
---
# Сайт куруучуну оркестрациялоо v2 {#site-builder-orchestration-v2}

Сайт куруучуну оркестрациялоо v2 (Gratis AI Agent v1.4.0 версиясында киргизилген) көп кадамдуу вебсайт түзүүнү иштеткен кыймылдаткыч. Агенттен "ресторан вебсайтын кур" же "блог менен портфолио түз" деп суранганда, оркестратор ошол жогорку деңгээлдеги максатты түзүмдүү **планга** бөлөт, аны аткаруу үчүн керектүү плагиндерди табат, ар бир кадамды кезеги менен аткарат, жүрүштү көзөмөлдөйт жана каталардан өз алдынча калыбына келет.

---

## Ал кантип иштейт {#how-it-works}

### 1. План түзүү {#1-plan-generation}

Агент сайт куруу боюнча көрсөтмө алганда, JSON **сайт планын** түзүү үчүн `create_site_plan` жөндөмүн чакырат. План төмөнкүлөрдү сүрөттөйт:

- **Максат** — даяр сайт эмне кылышы керек
- **Фазалар** — кадамдардын иреттелген топтору (мис., _Жөндөө_, _Мазмун түрлөрү_, _Дизайн_, _Мазмун_)
- **Кадамдар** — ар бир фазанын ичиндеги өзүнчө жөндөм чакыруулары
- **Плагин талаптары** — белгилүү кадамдар иштеши үчүн активдүү болушу керек болгон плагиндер
- **Кошумча жолдор** — негизги кадам ишке ашпай калса, альтернативдүү кадамдар

**Мисал план (кыскартылган)**

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

### 2. Плагиндерди табуу {#2-plugin-discovery}

Аткаруу башталардан мурун, оркестратор пландын `plugin_requirements` бөлүгүн сканерлеп, кайсы плагиндер мурунтан эле активдүү экенин текшерет. Жок плагиндер үчүн ал:

1. Эң ылайыктуу дал келүүнү табуу үчүн `recommend_plugin` аркылуу реестрден издейт
2. Сунушту ырастоо үчүн агентке суроо берет
3. Жактырылса (же жөндөөлөрдө автоорнотуу иштетилген болсо) орнотууну баштайт

Плагиндерди табуудагы каталар олуттуу эмес — оркестратор тиешелүү кадамдарды `skipped` деп белгилеп, пландын калган бөлүгүн улантат.

### 3. План аткаруу {#3-plan-execution}

Оркестратор план ID менен `execute_site_plan` чакырат. Аткаруу фаза боюнча, кадам боюнча жүрөт:

- **Кадам шилтемелери** (`__ref:` префикси) — кадамдар мурунку кадамдардын чыгыштарына шилтеме бере алат. Жогорудагы мисалда `__ref:create_menu.menu_id` мааниси `create_menu` кадамы кайтарган `menu_id` болуп чечмеленет.
- **Параллелдүү кадамдар** — бир эле фазанын ичинде өз ара көз карандылыгы жок кадамдар `parallel` белгиси коюлганда бир убакта жөнөтүлөт.
- **Кадам тайм-ауту** — ар бир кадамдын өзүнчө тайм-ауту бар (демейки: `Ability Timeout` жөндөөсү). Тайм-аут болгон кадам `failed` деп белгиленет жана план уланат.

### 4. Жүрүштү көзөмөлдөө {#4-progress-tracking}

Аткаруу абалын текшерүү үчүн каалаган убакта `get_plan_progress` чакырыңыз:

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

WP-CLI колдонуучулары жүрүштү төмөнкү менен көзөмөлдөй алышат:

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### 5. Катадан калыбына келүү {#5-error-recovery}

Кадам ишке ашпай калганда, оркестратор планда аныкталган **кошумча жол** кадамын текшерет:

- **Кошумча жол бар** — кошумча жол кадамы дароо аткарылып көрүлөт. Эгер ийгиликтүү болсо, аткаруу уланат. Эгер ал да ишке ашпай калса, кадам `failed` деп белгиленет жана аткаруу кийинки кадам менен уланат.
- **Кошумча жол жок** — кадам `failed` деп белгиленет. Олуттуу эмес кадамдар өткөрүлүп жиберилет; олуттуу кадамдар (`required: true` деп белгиленген) учурдагы фазаны токтотуп, фаза деңгээлиндеги калыбына келтирүү аракетин баштайт.

Агент акыркы план жыйынтыгында бардык каталарды билдирет жана калыбына келтирилбеген каталар үчүн кол менен оңдоо кадамдарын сунушташы мүмкүн.

---

## Сайт планынын жөндөмдөрү {#site-plan-abilities}

### `create_site_plan` {#createsiteplan}

Табигый тилдеги максат сүрөттөмөсүнөн түзүмдүү сайт планын түзөт.

**Параметрлер**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `goal` | string | Yes | Кааланган вебсайттын табигый тилдеги сүрөттөмөсү |
| `style` | string | No | Визуалдык стиль артыкчылыгы: `minimal`, `bold`, `professional`, `playful`. Демейки: агент максатка жараша тандайт |
| `plugins` | array | No | Планга кошула турган плагин слагдары. Оркестратор керектүү плагиндерди автоматтык түрдө кошот. |
| `dry_run` | boolean | No | Эгер `true` болсо, план JSONун сактабастан же аткарбастан кайтарат. Демейки `false` |

**Кайтарат** `{ "plan_id": "plan_restaurant_001", "phases": 4, "steps": 14, "plugin_requirements": 1 }`

---

### `execute_site_plan` {#executesiteplan}

Мурда түзүлгөн сайт планын аткара баштайт.

**Параметрлер**

| Параметр | Түрү | Милдеттүү | Сүрөттөмө |
|---|---|---|---|
| `plan_id` | string | Ооба | Аткарыла турган пландын IDси |
| `auto_install_plugins` | boolean | Жок | Эгер `true` болсо, талап кылынган плагиндерди ырастоосуз автоматтык түрдө орнотот. Демейки `false` |
| `max_retries` | integer | Жок | Ийгиликсиз кадамды улантуудан мурун канча жолу кайра аракет кылуу керектиги. Демейки `1` |

**Кайтарат** `{ "execution_id": "exec_001", "status": "started" }`

---

### `get_plan_progress` {#getplanprogress}

Сайт планынын учурдагы аткарылуу абалын кайтарат.

**Параметрлер**

| Параметр | Түрү | Милдеттүү | Сүрөттөмө |
|---|---|---|---|
| `plan_id` | string | Ооба | Сурала турган пландын IDси |

**Кайтарат** жогорудагы [Илгерилөөнү көзөмөлдөө](#4-progress-tracking) бөлүмүндө сүрөттөлгөн илгерилөө объектисин.

---

### `handle_plan_error` {#handleplanerror}

Ийгиликсиз кадамды кол менен чечет жана пландын аткарылышын кийинки кадамдан улантат. Муну автоматтык калыбына келтирүү мүмкүн болбогондо жана өзүңүз кийлигишкиңиз келгенде колдонуңуз.

**Параметрлер**

| Параметр | Түрү | Милдеттүү | Сүрөттөмө |
|---|---|---|---|
| `plan_id` | string | Ооба | План IDси |
| `step_id` | string | Ооба | Ийгиликсиз кадамдын IDси |
| `resolution` | string | Ооба | `skip` (өткөрүп жиберүү жана улантуу), `retry` (кадамды дароо кайра аракет кылуу) же `mark_done` (кайра иштетпестен ийгиликтүү деп эсептөө) маанилеринин бири |

**Кайтарат** `{ "success": true, "plan_id": "plan_restaurant_001", "resumed_from": "add_menu_item" }`

---

## v1 жана v2 салыштыруу {#comparing-v1-and-v2}

| Өзгөчөлүк | v1 | v2 |
|---|---|---|
| Көп фазалуу пландар | Жок | Ооба |
| Кадам жыйынтыктарына шилтемелер (`__ref:`) | Жок | Ооба |
| Плагинди табуу | Кол менен | Автоматтык |
| Илгерилөөнү көзөмөлдөө API | Жок | Ооба |
| Ката калыбына келтирүү | Ийгиликсиз болуп токтойт | Резервдик жол + улантуу |
| Кадамдарды параллелдүү аткаруу | Жок | Ооба (ар бир фаза үчүн өзүнчө кошулат) |
| WP-CLI план буйруктары | Жок | Ооба |
| Бенчмарк интеграциясы | Жок | Ооба (`q-restaurant-website`) |

---

## WP-CLI план буйруктары {#wp-cli-plan-commands}

### `wp gratis-ai-agent plan create` {#wp-gratis-ai-agent-plan-create}

Максат сүрөттөмөсүнөн сайт планын түзөт.

```bash
wp gratis-ai-agent plan create "Build a restaurant website with an online menu, booking form, and contact page" [--dry-run] [--output=json]
```

### `wp gratis-ai-agent plan execute` {#wp-gratis-ai-agent-plan-execute}

Мурда түзүлгөн планды аткарат.

```bash
wp gratis-ai-agent plan execute plan_restaurant_001 [--auto-install-plugins]
```

### `wp gratis-ai-agent plan status` {#wp-gratis-ai-agent-plan-status}

Аткарылып жаткан же аяктаган план үчүн учурдагы илгерилөөнү көрсөтөт.

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### `wp gratis-ai-agent plan list` {#wp-gratis-ai-agent-plan-list}

Бардык сайт пландарын (күтүлүүдө, аткарылууда жана аяктаган) тизмелейт.

```bash
wp gratis-ai-agent plan list [--status=<status>] [--format=table|json|csv]
```

### `wp gratis-ai-agent plan reset` {#wp-gratis-ai-agent-plan-reset}

Ийгиликсиз планды башынан кайра аткарууга болсун деп `pending` абалына кайтарат.

```bash
wp gratis-ai-agent plan reset plan_restaurant_001
```

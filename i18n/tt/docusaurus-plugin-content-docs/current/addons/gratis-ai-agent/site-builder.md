---
title: Сайт төзүне оркестрацияләү v2
sidebar_position: 4
_i18n_hash: 3a3d15844b4a0751fc59ac3a4e1fb0c0
---
# Сайт төзү оркестрациясе v2

Site Builder Orchestration v2 (Gratis AI Agent v1.4.0 эчендә кертелгән) — күп адымлы веб-сайт төзүне тәэмин итә торган двигатель. Сез агенттан "ресторан веб-сайты төзе" яки "блоглы портфолио яса" дип сораганда, оркестратор бу югары дәрәҗәдәге максатны структуралы **планга** бүлә, аны үтәү өчен кирәкле плагиннарны таба, һәр адымны эзлекле башкара, барышны күзәтә һәм хаталардан мөстәкыйль рәвештә торгызыла.

---

## Бу ничек эшли

### 1. План ясау

Агент сайт төзү күрсәтмәсе алгач, JSON **сайт планы** булдыру өчен `create_site_plan` мөмкинлеген чакыра. План түбәндәгеләрне тасвирлый:

- **Максат** — әзер сайт нәрсә эшләргә тиеш
- **Фазалар** — адымнарның тәртипләнгән төркемнәре (мәсәлән, _Көйләү_, _Эчтәлек төрләре_, _Дизайн_, _Эчтәлек_)
- **Адымнар** — һәр фаза эчендәге аерым мөмкинлек чакырулары
- **Плагин таләпләре** — билгеле адымнар эшләсен өчен актив булырга тиешле плагиннар
- **Резерв вариантлар** — төп адым уңышсыз булса, альтернатив адымнар

**Үрнәк план (кыскартылган)**

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

### 2. Плагиннарны табу

Башкару башланганчы, оркестратор планның `plugin_requirements` өлешен сканерлый һәм кайсы плагиннар инде актив икәнен тикшерә. Җитмәгән плагиннар өчен ул:

1. Иң яхшы туры килүне табу өчен `recommend_plugin` аша реестрда эзли
2. Агенттан тәкъдимне раслауны сорый
3. Расланса (яки көйләүләрдә автоматик урнаштыру кабызылган булса), урнаштыруны башлата

Плагин табу уңышсызлыклары фаталь түгел — оркестратор кагылган адымнарны `skipped` дип билгели һәм планның калган өлеше белән дәвам итә.

### 3. Планны башкару

Оркестратор план ID белән `execute_site_plan` чакыра. Башкару фаза артыннан фаза, адым артыннан адым бара:

- **Адым сылтамалары** (`__ref:` префиксы) — адымнар алдагы адымнардан чыккан нәтиҗәләргә сылтама ясый ала. Өстәге мисалда `__ref:create_menu.menu_id` `create_menu` адымы кайтарган `menu_id` итеп чишелә.
- **Параллель адымнар** — бер үк фаза эчендә үзара бәйлелекләре булмаган адымнар `parallel` флагы куелганда бер үк вакытта җибәрелә.
- **Адым вакыты чиге** — һәр адымның аерым вакыт чиге бар (килешү буенча: `Ability Timeout` көйләве). Вакыт чиген узган адым `failed` дип билгеләнә һәм план дәвам итә.

### 4. Барышны күзәтү

Башкару халәтен тикшерү өчен теләсә кайсы вакытта `get_plan_progress` чакырыгыз:

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

WP-CLI кулланучылары барышны болай күзәтә ала:

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### 5. Хаталардан торгызу

Адым уңышсыз булганда, оркестратор планда билгеләнгән **резерв** адымны тикшерә:

- **Резерв вариант бар** — резерв адым шунда ук сынап карала. Әгәр ул уңышлы булса, башкару дәвам итә. Әгәр ул да уңышсыз булса, адым `failed` дип билгеләнә һәм башкару киләсе адым белән дәвам итә.
- **Резерв вариант юк** — адым `failed` дип билгеләнә. Критик булмаган адымнар үткәреп җибәрелә; критик адымнар (`required: true` дип билгеләнгән) агымдагы фазаны туктата һәм фаза дәрәҗәсендә торгызу омтылышын башлата.

Агент соңгы план йомгакламасында барлык уңышсызлыклар турында хәбәр итә һәм торгызылмый торган хаталар өчен кулдан төзәтү адымнарын тәкъдим итә ала.

---

## Сайт планы мөмкинлекләре

### `create_site_plan`

Табигый телдәге максат тасвирламасыннан структуралы сайт планы ясый.

**Параметрлар**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `goal` | string | Yes | Кирәкле веб-сайтның табигый телдәге тасвирламасы |
| `style` | string | No | Визуаль стиль өстенлеге: `minimal`, `bold`, `professional`, `playful`. Килешү буенча: агент максатка карап сайлый |
| `plugins` | array | No | Планга кертеләчәк плагин slug-лары. Оркестратор кирәкле плагиннарны автоматик рәвештә өсти. |
| `dry_run` | boolean | No | Әгәр `true` булса, план JSON-ын сакламыйча яки башкармыйча кайтара. Килешү буенча `false` |

**Кайтара** `{ "plan_id": "plan_restaurant_001", "phases": 4, "steps": 14, "plugin_requirements": 1 }`

---

### `execute_site_plan`

Алдан ясалган сайт планын башкаруны башлый.

**Параметрлар**

| Параметр | Төр | Кирәк | Тасвирлама |
|---|---|---|---|
| `plan_id` | string | Әйе | Башкарылачак планның ID-сы |
| `auto_install_plugins` | boolean | Юк | Әгәр `true` булса, кирәкле плагиннарны раслаусыз автоматик рәвештә урнаштыра. Килешенгән кыйммәт `false` |
| `max_retries` | integer | Юк | Дәвам итәр алдыннан уңышсыз адымны кабатлап карау саны. Килешенгән кыйммәт `1` |

**Кайтара** `{ "execution_id": "exec_001", "status": "started" }`

---

### `get_plan_progress`

Сайт планының хәзерге башкарылу халәтен кайтара.

**Параметрлар**

| Параметр | Төр | Кирәк | Тасвирлама |
|---|---|---|---|
| `plan_id` | string | Әйе | Сорау өчен план ID-сы |

**Кайтара** югарыда [Алгарышны күзәтү](#4-progress-tracking) бүлегендә тасвирланган алгарыш объектын.

---

### `handle_plan_error`

Уңышсыз адымны кулдан хәл итә һәм план башкарылуын киләсе адымнан дәвам итә. Моны автоматик торгызу мөмкин булмаганда һәм сез үзегез катнашырга теләгәндә кулланыгыз.

**Параметрлар**

| Параметр | Төр | Кирәк | Тасвирлама |
|---|---|---|---|
| `plan_id` | string | Әйе | План ID-сы |
| `step_id` | string | Әйе | Уңышсыз адымның ID-сы |
| `resolution` | string | Әйе | `skip` (үткәреп җибәрү һәм дәвам итү), `retry` (адымны шунда ук кабатлау) яки `mark_done` (яңадан эшләтмичә уңышлы дип санау) вариантларының берсе |

**Кайтара** `{ "success": true, "plan_id": "plan_restaurant_001", "resumed_from": "add_menu_item" }`

---

## v1 һәм v2 чагыштыру

| Мөмкинлек | v1 | v2 |
|---|---|---|
| Күп фазалы планнар | Юк | Әйе |
| Адым нәтиҗәсе сылтамалары (`__ref:`) | Юк | Әйе |
| Плагиннарны табу | Кулдан | Автоматик |
| Алгарышны күзәтү API | Юк | Әйе |
| Хатаны торгызу | Уңышсыз тәмамлау һәм туктату | Резерв вариант + дәвам итү |
| Адымнарны параллель башкару | Юк | Әйе (һәр фаза өчен ихтыяри) |
| WP-CLI план командалары | Юк | Әйе |
| Benchmark интеграциясе | Юк | Әйе (`q-restaurant-website`) |

---

## WP-CLI план командалары

### `wp gratis-ai-agent plan create`

Максат тасвирламасыннан сайт планы ясый.

```bash
wp gratis-ai-agent plan create "Build a restaurant website with an online menu, booking form, and contact page" [--dry-run] [--output=json]
```

### `wp gratis-ai-agent plan execute`

Алдан ясалган планны башкара.

```bash
wp gratis-ai-agent plan execute plan_restaurant_001 [--auto-install-plugins]
```

### `wp gratis-ai-agent plan status`

Башкарыла торган яки тәмамланган план өчен хәзерге алгарышны күрсәтә.

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### `wp gratis-ai-agent plan list`

Барлык сайт планнарын (көтүдә, башкарылуда һәм тәмамланган) исемлек итеп чыгара.

```bash
wp gratis-ai-agent plan list [--status=<status>] [--format=table|json|csv]
```

### `wp gratis-ai-agent plan reset`

Уңышсыз планны башыннан яңадан башкару мөмкин булсын өчен `pending` халәтенә кайтара.

```bash
wp gratis-ai-agent plan reset plan_restaurant_001
```

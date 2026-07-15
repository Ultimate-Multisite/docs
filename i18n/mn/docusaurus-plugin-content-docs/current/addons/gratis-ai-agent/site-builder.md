---
title: Сайт бүтээгчийн зохион удирдлага v2
sidebar_position: 4
_i18n_hash: 3a3d15844b4a0751fc59ac3a4e1fb0c0
---
# Site Builder Orchestration v2

Site Builder Orchestration v2 (Gratis AI Agent v1.4.0-д танилцуулагдсан) нь олон алхамт вэбсайт бүтээхийг ажиллуулдаг хөдөлгүүр юм. Та agent-аас "ресторантын вэбсайт бүтээ" эсвэл "блогтой портфолио үүсгэ" гэж хүсэхэд, orchestrator нь тэр өндөр түвшний зорилгыг бүтэцтэй **төлөвлөгөө** болгон задалж, түүнийг биелүүлэхэд хэрэгтэй plugin-уудыг илрүүлж, алхам бүрийг дарааллаар нь гүйцэтгэн, явцыг хянаж, алдаанаас бие даан сэргэдэг.

---

## Энэ нь хэрхэн ажилладаг вэ {#how-it-works}

### 1. Төлөвлөгөө үүсгэх {#1-plan-generation}

Agent нь site бүтээх заавар авах үед JSON **site төлөвлөгөө** үүсгэхийн тулд `create_site_plan` чадварыг дууддаг. Төлөвлөгөө нь дараахыг тайлбарлана:

- **Зорилго** — дууссан site юу хийх ёстой вэ
- **Үе шатууд** — алхмуудын эрэмбэлэгдсэн бүлгүүд (жишээ нь _Тохиргоо_, _Агуулгын төрлүүд_, _Дизайн_, _Агуулга_)
- **Алхмууд** — үе шат бүр доторх тусдаа чадварын дуудлагууд
- **Plugin шаардлагууд** — тодорхой алхмуудыг ажиллуулахын тулд идэвхтэй байх ёстой plugin-ууд
- **Нөөц хувилбарууд** — үндсэн алхам бүтэлгүйтвэл хэрэглэх өөр алхмууд

**Жишээ төлөвлөгөө (товчилсон)**

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

### 2. Plugin илрүүлэлт {#2-plugin-discovery}

Гүйцэтгэл эхлэхээс өмнө orchestrator нь төлөвлөгөөний `plugin_requirements`-ийг шалгаж, аль plugin-ууд аль хэдийн идэвхтэй байгааг нягтална. Дутуу plugin-уудын хувьд энэ нь:

1. Хамгийн тохирохыг олохын тулд `recommend_plugin`-ээр бүртгэлээс хайна
2. Зөвлөмжийг баталгаажуулахыг agent-аас хүснэ
3. Зөвшөөрөгдвөл (эсвэл тохиргоонд авто-суулгалт идэвхтэй бол) суулгалтыг эхлүүлнэ

Plugin илрүүлэлтийн алдаа нь ноцтой биш — orchestrator нь нөлөөлсөн алхмуудыг `skipped` гэж тэмдэглээд, төлөвлөгөөний үлдсэн хэсгийг үргэлжлүүлнэ.

### 3. Төлөвлөгөөний гүйцэтгэл {#3-plan-execution}

Orchestrator нь төлөвлөгөөний ID-тай `execute_site_plan`-ийг дуудна. Гүйцэтгэл үе шатаар, алхам алхмаар үргэлжилнэ:

- **Алхамын лавлагаа** (`__ref:` угтвар) — алхмууд өмнөх алхмуудын гаралтыг лавлаж болно. Дээрх жишээнд, `__ref:create_menu.menu_id` нь `create_menu` алхмаас буцаасан `menu_id` болж шийдэгдэнэ.
- **Зэрэгцээ алхмууд** — `parallel` туг тохируулагдсан үед нэг үе шат дотор харилцан хамааралгүй алхмуудыг зэрэг илгээнэ.
- **Алхамын хугацааны хязгаар** — алхам бүр тусдаа хугацааны хязгаартай (өгөгдмөл: `Ability Timeout` тохиргоо). Хугацаа хэтэрсэн алхмыг `failed` гэж тэмдэглээд төлөвлөгөөг үргэлжлүүлнэ.

### 4. Явц хянах {#4-progress-tracking}

Гүйцэтгэлийн төлөвийг шалгахын тулд хүссэн үедээ `get_plan_progress`-ийг дуудна:

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

WP-CLI хэрэглэгчид явцыг дараахаар хянах боломжтой:

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### 5. Алдаанаас сэргэх {#5-error-recovery}

Алхам бүтэлгүйтвэл orchestrator нь төлөвлөгөөнд тодорхойлсон **нөөц хувилбар** алхам байгаа эсэхийг шалгана:

- **Нөөц хувилбар боломжтой** — нөөц алхмыг шууд оролдоно. Амжилттай бол гүйцэтгэл үргэлжилнэ. Хэрэв мөн бүтэлгүйтвэл алхмыг `failed` гэж тэмдэглээд дараагийн алхмаар гүйцэтгэлийг үргэлжлүүлнэ.
- **Нөөц хувилбар байхгүй** — алхмыг `failed` гэж тэмдэглэнэ. Чухал биш алхмуудыг алгасна; чухал алхмууд (`required: true` гэж тэмдэглэсэн) одоогийн үе шатыг зогсоож, үе шатны түвшний сэргээх оролдлогыг эхлүүлнэ.

Agent нь эцсийн төлөвлөгөөний хураангуйд бүх алдааг мэдээлж, сэргээх боломжгүй алдаанд гараар засах алхмуудыг санал болгож магадгүй.

---

## Site төлөвлөгөөний чадварууд {#site-plan-abilities}

### `create_site_plan` {#createsiteplan}

Байгалийн хэлээрх зорилгын тайлбараас бүтэцтэй site төлөвлөгөө үүсгэнэ.

**Параметрүүд**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `goal` | string | Yes | Хүссэн вэбсайтын байгалийн хэлээрх тайлбар |
| `style` | string | No | Харагдах хэв маягийн сонголт: `minimal`, `bold`, `professional`, `playful`. Өгөгдмөл: agent зорилгод үндэслэн сонгоно |
| `plugins` | array | No | Төлөвлөгөөнд оруулах plugin slug-ууд. Orchestrator шаардлагатай plugin-уудыг автоматаар нэмнэ. |
| `dry_run` | boolean | No | Хэрэв `true` бол төлөвлөгөөний JSON-ийг хадгалах эсвэл гүйцэтгэхгүйгээр буцаана. Өгөгдмөл нь `false` |

**Буцаах утга** `{ "plan_id": "plan_restaurant_001", "phases": 4, "steps": 14, "plugin_requirements": 1 }`

---

### `execute_site_plan` {#executesiteplan}

Өмнө үүсгэсэн site төлөвлөгөөг гүйцэтгэж эхэлнэ.

**Параметрүүд**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `plan_id` | string | Yes | Гүйцэтгэх төлөвлөгөөний ID |
| `auto_install_plugins` | boolean | No | Хэрэв `true` бол шаардлагатай plugin-уудыг баталгаажуулалтгүйгээр автоматаар суулгана. Анхны утга `false` |
| `max_retries` | integer | No | Дараагийн алхам руу шилжихээс өмнө амжилтгүй болсон алхмыг дахин оролдох тоо. Анхны утга `1` |

**Буцаана** `{ "execution_id": "exec_001", "status": "started" }`

---

### `get_plan_progress` {#getplanprogress}

Сайтын төлөвлөгөөний одоогийн гүйцэтгэлийн төлөвийг буцаана.

**Параметрүүд**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `plan_id` | string | Yes | Лавлах төлөвлөгөөний ID |

**Буцаана** дээрх [Явц хянах](#4-progress-tracking)-д тайлбарласан явцын объект.

---

### `handle_plan_error` {#handleplanerror}

Амжилтгүй болсон алхмыг гараар шийдвэрлэж, төлөвлөгөөний гүйцэтгэлийг дараагийн алхмаас үргэлжлүүлнэ. Автомат сэргээх боломжгүй үед та оролцохыг хүсвэл үүнийг ашиглана уу.

**Параметрүүд**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `plan_id` | string | Yes | Төлөвлөгөөний ID |
| `step_id` | string | Yes | Амжилтгүй болсон алхмын ID |
| `resolution` | string | Yes | `skip` (алгасаад үргэлжлүүлэх), `retry` (алхмыг даруй дахин оролдох), эсвэл `mark_done` (дахин ажиллуулахгүйгээр амжилттайд тооцох)-ын нэг |

**Буцаана** `{ "success": true, "plan_id": "plan_restaurant_001", "resumed_from": "add_menu_item" }`

---

## v1 ба v2-ыг харьцуулах {#comparing-v1-and-v2}

| Онцлог | v1 | v2 |
|---|---|---|
| Олон үе шаттай төлөвлөгөөнүүд | Үгүй | Тийм |
| Алхмын гаралтын лавлагаанууд (`__ref:`) | Үгүй | Тийм |
| Plugin илрүүлэлт | Гараар | Автомат |
| Явц хянах API | Үгүй | Тийм |
| Алдаа сэргээх | Амжилтгүй болоод зогсох | Нөөц хувилбар + үргэлжлүүлэх |
| Зэрэгцээ алхам гүйцэтгэл | Үгүй | Тийм (үе шат бүрт сонгон идэвхжүүлнэ) |
| WP-CLI төлөвлөгөөний командууд | Үгүй | Тийм |
| Benchmark интеграц | Үгүй | Тийм (`q-restaurant-website`) |

---

## WP-CLI төлөвлөгөөний командууд {#wp-cli-plan-commands}

### `wp gratis-ai-agent plan create` {#wp-gratis-ai-agent-plan-create}

Зорилгын тайлбараас сайтын төлөвлөгөө үүсгэнэ.

```bash
wp gratis-ai-agent plan create "Build a restaurant website with an online menu, booking form, and contact page" [--dry-run] [--output=json]
```

### `wp gratis-ai-agent plan execute` {#wp-gratis-ai-agent-plan-execute}

Өмнө нь үүсгэсэн төлөвлөгөөг гүйцэтгэнэ.

```bash
wp gratis-ai-agent plan execute plan_restaurant_001 [--auto-install-plugins]
```

### `wp gratis-ai-agent plan status` {#wp-gratis-ai-agent-plan-status}

Гүйцэтгэж буй эсвэл дууссан төлөвлөгөөний одоогийн явцыг харуулна.

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### `wp gratis-ai-agent plan list` {#wp-gratis-ai-agent-plan-list}

Бүх сайтын төлөвлөгөөг (хүлээгдэж буй, явцтай, дууссан) жагсаана.

```bash
wp gratis-ai-agent plan list [--status=<status>] [--format=table|json|csv]
```

### `wp gratis-ai-agent plan reset` {#wp-gratis-ai-agent-plan-reset}

Амжилтгүй болсон төлөвлөгөөг `pending` болгон дахин тохируулж, эхнээс нь дахин гүйцэтгэх боломжтой болгоно.

```bash
wp gratis-ai-agent plan reset plan_restaurant_001
```

---
title: Sayt quruvchi orkestratsiyasi v2
sidebar_position: 4
_i18n_hash: 3a3d15844b4a0751fc59ac3a4e1fb0c0
---
# Sayt yaratish orkestratsiyasi v2 {#site-builder-orchestration-v2}

Site Builder Orchestration v2 (Gratis AI Agent v1.4.0 da joriy qilingan) ko‘p bosqichli veb-sayt yaratishni ta’minlaydigan dvigateldir. Agentdan "restoran veb-saytini yaratish" yoki "blogli portfolio yaratish"ni so‘raganingizda, orkestrator bu yuqori darajadagi maqsadni tuzilgan **reja**ga ajratadi, uni bajarish uchun kerakli pluginlarni aniqlaydi, har bir qadamni ketma-ket bajaradi, jarayonni kuzatadi va xatolardan avtonom tiklanadi.

---

## U qanday ishlaydi {#how-it-works}

### 1. Reja yaratish {#1-plan-generation}

Agent sayt yaratish bo‘yicha ko‘rsatma olganida, JSON **sayt rejasi**ni ishlab chiqish uchun `create_site_plan` qobiliyatini chaqiradi. Reja quyidagilarni tavsiflaydi:

- **Maqsad** — tayyor sayt nima qilishi kerak
- **Bosqichlar** — tartiblangan qadamlar guruhlari (masalan, _Sozlash_, _Kontent turlari_, _Dizayn_, _Kontent_)
- **Qadamlar** — har bir bosqich ichidagi alohida qobiliyat chaqiruvlari
- **Plugin talablari** — ayrim qadamlar ishlashi uchun faol bo‘lishi kerak bo‘lgan pluginlar
- **Zaxira variantlar** — asosiy qadam muvaffaqiyatsiz bo‘lsa, muqobil qadamlar

**Namuna reja (qisqartirilgan)**

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

### 2. Pluginlarni aniqlash {#2-plugin-discovery}

Bajarish boshlanishidan oldin orkestrator rejadagi `plugin_requirements`ni skanerdan o‘tkazadi va qaysi pluginlar allaqachon faol ekanini tekshiradi. Yetishmayotgan pluginlar uchun u:

1. Eng mos variantni topish uchun `recommend_plugin` orqali reyestrdan qidiradi
2. Agentdan tavsiyani tasdiqlashni so‘raydi
3. Tasdiqlansa (yoki sozlamalarda avtomatik o‘rnatish yoqilgan bo‘lsa) o‘rnatishni ishga tushiradi

Pluginlarni aniqlashdagi muvaffaqiyatsizliklar halokatli emas — orkestrator ta’sirlangan qadamlarni `skipped` deb belgilaydi va rejaning qolgan qismi bilan davom etadi.

### 3. Rejani bajarish {#3-plan-execution}

Orkestrator reja IDsi bilan `execute_site_plan`ni chaqiradi. Bajarish bosqichma-bosqich, qadam-baqadam davom etadi:

- **Qadam havolalari** (`__ref:` prefiksi) — qadamlar oldingi qadamlarning natijalariga havola qilishi mumkin. Yuqoridagi misolda `__ref:create_menu.menu_id` `create_menu` qadami qaytargan `menu_id`ga aylantiriladi.
- **Parallel qadamlar** — bir xil bosqich ichida o‘zaro bog‘liqligi bo‘lmagan qadamlar `parallel` bayrog‘i o‘rnatilganda bir vaqtda yuboriladi.
- **Qadam vaqti tugashi** — har bir qadam alohida vaqt chegarasiga ega (standart: `Ability Timeout` sozlamasi). Vaqti tugagan qadam `failed` deb belgilanadi va reja davom etadi.

### 4. Jarayonni kuzatish {#4-progress-tracking}

Bajarilish holatini tekshirish uchun istalgan vaqtda `get_plan_progress`ni chaqiring:

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

WP-CLI foydalanuvchilari jarayonni quyidagicha kuzatishi mumkin:

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### 5. Xatodan tiklanish {#5-error-recovery}

Qadam muvaffaqiyatsiz bo‘lsa, orkestrator rejada belgilangan **zaxira** qadam bor-yo‘qligini tekshiradi:

- **Zaxira variant mavjud** — zaxira qadam darhol sinab ko‘riladi. U muvaffaqiyatli bo‘lsa, bajarish davom etadi. U ham muvaffaqiyatsiz bo‘lsa, qadam `failed` deb belgilanadi va bajarish keyingi qadam bilan davom etadi.
- **Zaxira yo‘q** — qadam `failed` deb belgilanadi. Muhim bo‘lmagan qadamlar o‘tkazib yuboriladi; muhim qadamlar (`required: true` deb belgilangan) joriy bosqichni to‘xtatadi va bosqich darajasidagi tiklanish urinishini ishga tushiradi.

Agent yakuniy reja xulosasida barcha muvaffaqiyatsizliklar haqida xabar beradi va tiklab bo‘lmaydigan xatolar uchun qo‘lda tuzatish qadamlarini taklif qilishi mumkin.

---

## Sayt rejasi qobiliyatlari {#site-plan-abilities}

### `create_site_plan` {#createsiteplan}

Tabiiy tildagi maqsad tavsifidan tuzilgan sayt rejasini yaratadi.

**Parametrlar**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `goal` | string | Yes | Kerakli veb-saytning tabiiy tildagi tavsifi |
| `style` | string | No | Vizual uslub afzalligi: `minimal`, `bold`, `professional`, `playful`. Standart: agent maqsad asosida tanlaydi |
| `plugins` | array | No | Rejaga kiritiladigan plugin sluglari. Orkestrator kerakli pluginlarni avtomatik qo‘shadi. |
| `dry_run` | boolean | No | Agar `true` bo‘lsa, reja JSONini saqlamasdan yoki bajarmasdan qaytaradi. Standart `false` |

**Qaytaradi** `{ "plan_id": "plan_restaurant_001", "phases": 4, "steps": 14, "plugin_requirements": 1 }`

---

### `execute_site_plan` {#executesiteplan}

Avval yaratilgan sayt rejasini bajarishni boshlaydi.

**Parametrlar**

| Parametr | Tur | Majburiy | Tavsif |
|---|---|---|---|
| `plan_id` | string | Ha | Bajariladigan reja IDsi |
| `auto_install_plugins` | boolean | Yo‘q | Agar `true` bo‘lsa, kerakli pluginlarni tasdiqsiz avtomatik o‘rnatadi. Standart `false` |
| `max_retries` | integer | Yo‘q | Davom etishdan oldin muvaffaqiyatsiz qadamni qayta urinishlar soni. Standart `1` |

**Qaytaradi** `{ "execution_id": "exec_001", "status": "started" }`

---

### `get_plan_progress` {#getplanprogress}

Sayt rejasining joriy bajarilish holatini qaytaradi.

**Parametrlar**

| Parametr | Tur | Majburiy | Tavsif |
|---|---|---|---|
| `plan_id` | string | Ha | So‘rov qilinadigan reja IDsi |

**Qaytaradi** yuqorida [Jarayonni kuzatish](#4-progress-tracking) bo‘limida tasvirlangan jarayon obyektini.

---

### `handle_plan_error` {#handleplanerror}

Muvaffaqiyatsiz qadamni qo‘lda hal qiladi va reja bajarilishini keyingi qadamdan davom ettiradi. Avtomatik tiklash imkoni bo‘lmaganda va o‘zingiz aralashmoqchi bo‘lganingizda bundan foydalaning.

**Parametrlar**

| Parametr | Tur | Majburiy | Tavsif |
|---|---|---|---|
| `plan_id` | string | Ha | Reja IDsi |
| `step_id` | string | Ha | Muvaffaqiyatsiz qadam IDsi |
| `resolution` | string | Ha | `skip` (o‘tkazib yuborish va davom etish), `retry` (qadamni darhol qayta urinish) yoki `mark_done` (qayta ishga tushirmasdan muvaffaqiyatli deb hisoblash) variantlaridan biri |

**Qaytaradi** `{ "success": true, "plan_id": "plan_restaurant_001", "resumed_from": "add_menu_item" }`

---

## v1 va v2 ni taqqoslash {#comparing-v1-and-v2}

| Xususiyat | v1 | v2 |
|---|---|---|
| Ko‘p bosqichli rejalar | Yo‘q | Ha |
| Qadam natijasi havolalari (`__ref:`) | Yo‘q | Ha |
| Pluginlarni aniqlash | Qo‘lda | Avtomatik |
| Jarayonni kuzatish API | Yo‘q | Ha |
| Xatolikdan tiklanish | Muvaffaqiyatsizlik va to‘xtash | Muqobil yo‘l + davom etish |
| Qadamlarni parallel bajarish | Yo‘q | Ha (har bir bosqich uchun ixtiyoriy yoqiladi) |
| WP-CLI reja buyruqlari | Yo‘q | Ha |
| Benchmark integratsiyasi | Yo‘q | Ha (`q-restaurant-website`) |

---

## WP-CLI reja buyruqlari {#wp-cli-plan-commands}

### `wp gratis-ai-agent plan create` {#wp-gratis-ai-agent-plan-create}

Maqsad tavsifidan sayt rejasini yaratadi.

```bash
wp gratis-ai-agent plan create "Build a restaurant website with an online menu, booking form, and contact page" [--dry-run] [--output=json]
```

### `wp gratis-ai-agent plan execute` {#wp-gratis-ai-agent-plan-execute}

Avval yaratilgan rejani bajaradi.

```bash
wp gratis-ai-agent plan execute plan_restaurant_001 [--auto-install-plugins]
```

### `wp gratis-ai-agent plan status` {#wp-gratis-ai-agent-plan-status}

Bajarilayotgan yoki yakunlangan reja uchun joriy jarayonni ko‘rsatadi.

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### `wp gratis-ai-agent plan list` {#wp-gratis-ai-agent-plan-list}

Barcha sayt rejalarini (kutilayotgan, jarayondagi va yakunlangan) ro‘yxatlaydi.

```bash
wp gratis-ai-agent plan list [--status=<status>] [--format=table|json|csv]
```

### `wp gratis-ai-agent plan reset` {#wp-gratis-ai-agent-plan-reset}

Muvaffaqiyatsiz rejani `pending` holatiga qaytaradi, shunda uni boshidan qayta bajarish mumkin bo‘ladi.

```bash
wp gratis-ai-agent plan reset plan_restaurant_001
```

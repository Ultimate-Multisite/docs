---
title: هماهنگی سازنده سایت نسخه ۲
sidebar_position: 4
_i18n_hash: 3a3d15844b4a0751fc59ac3a4e1fb0c0
---
# Site Builder Orchestration v2

Site Builder Orchestration v2 (که در Gratis AI Agent v1.4.0 معرفی شد) موتور قدرتمندی است که فرآیند ساخت وب‌سایت چند مرحله‌ای را ممکن می‌سازد. وقتی از ایجنت بخواهید که "یک وب‌سایت رستوران بسازد" یا "یک پورتفولیو با بلاگ ایجاد کند"، این هماهنگ‌کننده (Orchestrator) آن هدف کلی را به یک **برنامه** ساختاریافته تقسیم می‌کند، پلاگین‌های مورد نیاز برای انجام آن را کشف می‌کند، هر مرحله را به ترتیب اجرا می‌کند، پیشرفت را پیگیری می‌نماید و در صورت بروز خطاها، به صورت خودکار بازیابی می‌کند.

---

## نحوه کارکرد {#how-it-works}

### ۱. تولید برنامه (Plan Generation) {#1-plan-generation}

هنگامی که ایجنت دستور ساخت وب‌سایت دریافت می‌کند، با فراخوانی قابلیت `create_site_plan` یک **برنامه سایت** با فرمت JSON تولید می‌کند. این برنامه موارد زیر را توصیف می‌کند:

- **هدف (Goal)** — وب‌سایت نهایی باید چه کاری انجام دهد
- **فازها (Phases)** — گروه‌های مرتب‌شده از مراحل (مثلاً: _تنظیمات_، _انواع محتوا_، _طراحی_، _محتوا_)
- **مراحل (Steps)** — فراخوانی‌های قابلیت (ability) مجزای درون هر فاز
- **پیش‌نیازهای پلاگین (Plugin requirements)** — پلاگین‌هایی که برای اجرای برخی مراحل باید فعال باشند
- **برگشت‌ها (Fallbacks)** — مراحل جایگزین در صورتی که یک مرحله اصلی با شکست مواجه شود

**نمونه برنامه (خلاصه شده)**

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

### ۲. کشف پلاگین (Plugin Discovery) {#2-plugin-discovery}

قبل از شروع اجرا، هماهنگ‌کننده `plugin_requirements` برنامه را اسکن کرده و بررسی می‌کند که کدام پلاگین‌ها از قبل فعال هستند. برای پلاگین‌های از قلم افتاده، این کارها را انجام می‌دهد:

۱. از طریق `recommend_plugin` در رجیستری جستجو کرده و بهترین تطابق را پیدا می‌کند.
۲. از ایجنت می‌خواهد که پیشنهاد را تأیید کند.
۳. در صورت تأیید (یا اگر نصب خودکار در تنظیمات فعال باشد)، نصب را آغاز می‌کند.

شکست در کشف پلاگین‌ها باعث توقف کار نمی‌شود — هماهنگ‌کننده مراحل تحت تأثیر را به صورت `skipped` (رد شده) علامت‌گذاری کرده و با ادامه برنامه پیش می‌رود.

### ۳. اجرای برنامه (Plan Execution) {#3-plan-execution}

هماهنگ‌کننده با فراخوانی `execute_site_plan` و دادن شناسه برنامه، شروع به اجرا می‌کند. اجرا به صورت فاز به فاز و مرحله به مرحله پیش می‌رود:

- **ارجاعات مرحله‌ای (Step references)** (`__ref:`): مراحل می‌توانند به خروجی‌های مراحل قبلی ارجاع دهند. در مثال بالا، `__ref:create_menu.menu_id` به `menu_id` که توسط مرحله `create_menu` برگردانده شده، حل می‌شود.
- **مراحل موازی (Parallel steps)**: مراحلی که در یک فاز قرار دارند و وابستگی متقابلی ندارند، در صورتی که پرچم `parallel` تنظیم شده باشد، به طور همزمان ارسال می‌شوند.
- **مهلت زمانی مرحله (Step timeout)**: هر مرحله دارای مهلت زمانی جداگانه‌ای است (پیش‌فرض: تنظیم `Ability Timeout`). مرحله‌ای که زمان آن تمام شود، `failed` (ناموفق) علامت‌گذاری شده و برنامه با مرحله بعدی ادامه می‌یابد.

### ۴. پیگیری پیشرفت (Progress Tracking) {#4-progress-tracking}

برای بررسی وضعیت اجرا، در هر زمانی می‌توانید `get_plan_progress` را فراخوانی کنید:

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

کاربران WP-CLI می‌توانند پیشرفت را با دستور زیر مشاهده کنند:

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### ۵. بازیابی خطا (Error Recovery) {#5-error-recovery}

هنگامی که یک مرحله با شکست مواجه می‌شود، هماهنگ‌کننده به دنبال یک مرحله **برگشت (fallback)** تعریف شده در برنامه می‌گردد:

- **وجود مرحله برگشت (Fallback available)**: مرحله برگشت بلافاصله امتحان می‌شود. اگر موفق باشد، اجرا ادامه می‌یابد. اگر این مرحله نیز شکست بخورد، مرحله `failed` علامت‌گذاری شده و اجرا با مرحله بعدی ادامه می‌یابد.
- **عدم وجود مرحله برگشت (No fallback)**: مرحله `failed` علامت‌گذاری می‌شود. مراحل غیربحرانی رد می‌شوند؛ اما مراحل حیاتی (که با `required: true` علامت‌گذاری شده‌اند) فاز فعلی را متوقف کرده و تلاش برای بازیابی در سطح فاز را آغاز می‌کنند.

ایجنت تمام شکست‌ها را در خلاصه نهایی برنامه گزارش می‌دهد و ممکن است مراحل اصلاح دستی را برای خطاهای غیرقابل بازیابی پیشنهاد دهد.

---

## قابلیت‌های برنامه سایت (Site Plan Abilities) {#site-plan-abilities}

### `create_site_plan` {#createsiteplan}

یک برنامه سایت ساختاریافته را از یک هدف توصیفی زبان طبیعی تولید می‌کند.

**پارامترها**

| پارامتر | نوع | الزامی | توضیحات |
|---|---|---|---|
| `goal` | string | بله | توصیف زبان طبیعی وب‌سایت مورد نظر |
| `style` | string | خیر | ترجیح سبک بصری: `minimal`، `bold`، `professional`، `playful`. پیش‌فرض: ایجنت بر اساس هدف انتخاب می‌کند |
| `plugins` | array | خیر | اسلاگ‌های پلاگینی که باید در برنامه گنجانده شوند. هماهنگ‌کننده پلاگین‌های مورد نیاز را به صورت خودکار اضافه می‌کند. |
| `dry_run` | boolean | خیر | اگر `true` باشد، برنامه JSON را بدون ذخیره یا اجرا برمی‌گرداند. پیش‌فرض `false` |

**مقدار بازگشتی** `{ "plan_id": "plan_restaurant_001", "phases": 4, "steps": 14, "plugin_requirements": 1 }`

---

### `execute_site_plan` {#executesiteplan}

اجرای برنامه سایت تولید شده قبلی را آغاز می‌کند.

**پارامترها**

| پارامتر | نوع | الزامی | توضیحات |
|---|---|---|---|
| `plan_id` | string | بله | شناسه برنامه‌ای که قرار است اجرا شود |
| `auto_install_plugins` | boolean | خیر | اگر `true` باشد، پلاگین‌های مورد نیاز را بدون تأیید نصب می‌کند. پیش‌فرض `false` |
| `max_retries` | integer | خیر | تعداد دفعاتی که قبل از رفتن به مرحله بعدی، یک مرحله ناموفق تلاش می‌شود. پیش‌فرض `1` |

**مقدار بازگشتی** `{ "execution_id": "exec_001", "status": "started" }`

---

### `get_plan_progress` {#getplanprogress}

وضعیت اجرای فعلی یک برنامه سایت را برمی‌گرداند.

**پارامترها**

| پارامتر | نوع | الزامی | توضیحات |
|---|---|---|---|
| `plan_id` | string | بله | شناسه برنامه مورد نظر |

**مقدار بازگشتی** شیء پیشرفت که در بخش [Progress Tracking](#4-progress-tracking) توضیح داده شده است.

---

### `handle_plan_error` {#handleplanerror}

یک مرحله ناموفق را به صورت دستی حل کرده و اجرای برنامه را از مرحله بعدی از سر می‌گیرد. از این قابلیت زمانی استفاده کنید که بازیابی خودکار امکان‌پذیر نبوده و شما نیاز به مداخله داشته باشید.

**پارامترها**

| پارامتر | نوع | الزامی | توضیحات |
|---|---|---|---|
| `plan_id` | string | بله | شناسه برنامه |
| `step_id` | string | بله | شناسه مرحله ناموفق |
| `resolution` | string | بله | یکی از موارد `skip` (رد و ادامه)، `retry` (تلاش مجدد فوری)، یا `mark_done` (در نظر گرفتن موفقیت‌آمیز بدون اجرای مجدد) |

**مقدار بازگشتی** `{ "success": true, "plan_id": "plan_restaurant_001", "resumed_from": "add_menu_item" }`

---

## مقایسه v1 و v2 {#comparing-v1-and-v2}

| ویژگی | v1 | v2 |
|---|---|---|
| برنامه‌های چند فازی | خیر | بله |
| ارجاعات خروجی مرحله (`__ref:`) | خیر | بله |
| کشف پلاگین | دستی | خودکار |
| API پیگیری پیشرفت | خیر | بله |
| بازیابی خطا | شکست و توقف | برگشت + ادامه |
| اجرای مرحله موازی | خیر | بله (اختیاری در هر فاز) |
| دستورات برنامه WP-CLI | خیر | بله |
| یکپارچه‌سازی Benchmark | خیر | بله (`q-restaurant-website`) |

---

## دستورات برنامه WP-CLI {#wp-cli-plan-commands}

### `wp gratis-ai-agent plan create` {#wp-gratis-ai-agent-plan-create}

یک برنامه سایت از یک توصیف هدف ایجاد می‌کند.

```bash
wp gratis-ai-agent plan create "Build a restaurant website with an online menu, booking form, and contact page" [--dry-run] [--output=json]
```

### `wp gratis-ai-agent plan execute` {#wp-gratis-ai-agent-plan-execute}

یک برنامه تولید شده قبلی را اجرا می‌کند.

```bash
wp gratis-ai-agent plan execute plan_restaurant_001 [--auto-install-plugins]
```

### `wp gratis-ai-agent plan status` {#wp-gratis-ai-agent-plan-status}

پیشرفت فعلی یک برنامه در حال اجرا یا تکمیل شده را نشان می‌دهد.

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### `wp gratis-ai-agent plan list` {#wp-gratis-ai-agent-plan-list}

تمام برنامه‌های سایت (در انتظار، در حال اجرا و تکمیل شده) را لیست می‌کند.

```bash
wp gratis-ai-agent plan list [--status=<status>] [--format=table|json|csv]
```

### `wp gratis-ai-agent plan reset` {#wp-gratis-ai-agent-plan-reset}

یک برنامه ناموفق را به حالت `pending` بازنشانی می‌کند تا بتوان آن را از ابتدا دوباره اجرا کرد.

```bash
wp gratis-ai-agent plan reset plan_restaurant_001
```

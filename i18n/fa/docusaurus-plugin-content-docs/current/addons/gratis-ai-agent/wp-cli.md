---
title: مرجع WP-CLI
sidebar_position: 3
_i18n_hash: 365bd4ea4c1118b4258408f43a8020fc
---
# مرجع WP-CLI

افزونه Gratis AI Agent مجموعه‌ای از دستورات `wp gratis-ai-agent` را برای بنچمارک‌گیری از Agent، مدیریت قابلیت‌ها (abilities)، و استعلام وضعیت Agent از خط فرمان فراهم می‌کند. تمام دستورات نیاز به WP-CLI نسخه ۲.۰ یا بالاتر دارند.

## نصب (Installation)

دستورات WP-CLI به طور خودکار زمانی که افزونه فعال شود، ثبت می‌شوند. برای تأیید، از دستور زیر استفاده کنید:

```bash
wp gratis-ai-agent --info
```

---

## `wp gratis-ai-agent benchmark`

این دستور مجموعه بنچمارک قابلیت‌های Agent را اجرا می‌کند — مجموعه‌ای از پرامپت‌های پیچیده و چند مرحله‌ای که تمام قابلیت‌های موجود را آزمایش می‌کنند. از این دستور برای ارزیابی عملکرد مدل، مقایسه ارائه‌دهندگان AI، یا اعتبارسنجی بسته‌های قابلیت قبل از استقرار در محیط عملیاتی (production) استفاده کنید.

### خلاصه (Synopsis)

```bash
wp gratis-ai-agent benchmark [--question=<id>] [--provider=<provider>] [--model=<model>] [--output=<format>] [--save]
```

### گزینه‌ها (Options)

| Option | Description |
|---|---|
| `--question=<id>` | اجرای یک سؤال بنچمارک به جای کل مجموعه (suite) با استفاده از شناسه (ID) |
| `--provider=<provider>` | بازنویسی ارائه‌دهنده AI پیکربندی شده برای این اجرا (مثلاً `anthropic`، `openai`) |
| `--model=<model>` | بازنویسی مدل پیکربندی شده برای این اجرا (مثلاً `claude-opus-4-6`، `gpt-4o`) |
| `--output=<format>` | فرمت خروجی: `table` (پیش‌فرض)، `json`، `csv` |
| `--save` | ذخیره نتایج بنچمارک در دیتابیس برای مقایسه تاریخی |

### مثال‌ها (Examples)

اجرای کل مجموعه بنچمارک با ارائه‌دهنده و مدل فعلی:

```bash
wp gratis-ai-agent benchmark
```

اجرای یک سؤال واحد (`q-restaurant-website`) و خروجی به صورت JSON:

```bash
wp gratis-ai-agent benchmark --question=q-restaurant-website --output=json
```

اجرا در برابر یک مدل خاص و ذخیره نتایج:

```bash
wp gratis-ai-agent benchmark --model=claude-opus-4-6 --save
```

### خروجی (Output)

بنچمارک، یک ردیف برای هر سؤال با ستون‌های زیر خروجی می‌دهد:

| Column | Description |
|---|---|
| `ID` | شناسه سؤال |
| `Description` | خلاصه کوتاه از سناریوی بنچمارک |
| `Score` | نمره قبولی/شکست یا نمره عددی (۰ تا ۱۰۰) |
| `Abilities Used` | لیست جدا شده با کاما از قابلیت‌های فراخوانی شده |
| `Tokens` | کل توکن‌های مصرف شده |
| `Duration` | زمان سپری شده (Wall-clock time) بر حسب ثانیه |

```
ID                       Description                         Score  Abilities Used               Tokens  Duration
q-portfolio-site         Create a portfolio CPT with tags    100    register_post_type, reg...   4821    18.3s
q-restaurant-website     Build a full restaurant website     92     create_site_plan, execut...  12430   54.1s
q-dark-mode-theme        Apply a dark theme preset           100    apply_theme_json_preset      986     4.2s
...
```

### سؤالات بنچمارک (Benchmark Questions)

مجموعه پیش‌فرض شامل موارد زیر است:

| ID | Scenario |
|---|---|
| `q-portfolio-site` | ایجاد یک CPT پورتفولیو با یک تاکسونومی دسته‌بندی پروژه و ثبت یک الگوی بلاک |
| `q-restaurant-website` | ساخت یک وب‌سایت کامل رستوران با یک CPT منو، فرم رزرو و ناوبری |
| `q-dark-mode-theme` | اعمال یک پیش‌تنظیمات طراحی حالت تاریک و تزریق رنگ‌های برند |
| `q-nav-builder` | ایجاد یک منوی ناوبری اصلی چهار آیتمی با یک منوی کشویی تودرتو |
| `q-options-roundtrip` | خواندن، تغییر و بازیابی مجموعه‌ای از تنظیمات (options) وردپرس |
| `q-ability-install` | کشف و نصب مناسب‌ترین بسته قابلیت برای یک مورد استفاده توصیف شده |

سؤالات اضافی را می‌توان از طریق فیلتر `gratis_ai_agent_benchmark_questions` ثبت کرد.

---

## `wp gratis-ai-agent abilities`

این دستور مسئول مدیریت قابلیت‌ها و بسته‌های قابلیت نصب شده است.

### `wp gratis-ai-agent abilities list`

تمام قابلیت‌های ثبت شده، منبع آن‌ها (core یا pack)، و وضعیت فعلی آن‌ها را لیست می‌کند.

```bash
wp gratis-ai-agent abilities list [--format=<format>]
```

**Options**

| Option | Description |
|---|---|
| `--format=<format>` | فرمت خروجی: `table` (پیش‌فرض)، `json`، `csv` |

**مثال خروجی**

```
Ability                   Source                          Status
register_post_type        gratis-ai-agent (core)          active
list_post_types           gratis-ai-agent (core)          active
delete_post_type          gratis-ai-agent (core)          active
register_taxonomy         gratis-ai-agent (core)          active
inject_custom_css         gratis-ai-agent (core)          active
apply_theme_json_preset   gratis-ai-agent (core)          active
create_product            gratis-ai-agent-woocommerce     active
```

---

### `wp gratis-ai-agent abilities install`

یک بسته قابلیت را از رجیستری دانلود و فعال می‌کند.

```bash
wp gratis-ai-agent abilities install <slug>
```

**Arguments**

| Argument | Description |
|---|---|
| `<slug>` | اسلاگ افزونه بسته قابلیت، مثال: `gratis-ai-agent-woocommerce` |

**مثال**

```bash
wp gratis-ai-agent abilities install gratis-ai-agent-woocommerce
Success: Installed gratis-ai-agent-woocommerce. Added 3 abilities: create_product, update_pricing, manage_inventory.
```

---

### `wp gratis-ai-agent abilities disable`

یک قابلیت خاص را بدون حذف بسته، غیرفعال می‌کند. این کار برای محدود کردن دامنه Agent در یک سایت خاص مفید است.

```bash
wp gratis-ai-agent abilities disable <ability>
```

**مثال**

```bash
wp gratis-ai-agent abilities disable delete_post_type
Success: Ability 'delete_post_type' disabled.
```

---

### `wp gratis-ai-agent abilities enable`

قابلیتی که قبلاً غیرفعال شده بود را دوباره فعال می‌کند.

```bash
wp gratis-ai-agent abilities enable <ability>
```

---

## `wp gratis-ai-agent status`

پیکربندی فعلی Agent و وضعیت اتصال آن را نمایش می‌دهد.

```bash
wp gratis-ai-agent status
```

**مثال خروجی**

```
Plugin Version:    1.4.0
AI Provider:       Anthropic
Model:             claude-sonnet-4-6
Provider Status:   Connected
Abilities Loaded:  24
Benchmark Results: 3 saved runs (last: 2026-04-15)
Options Blocklist: 18 entries
```

---

## `wp gratis-ai-agent logs`

فعالیت‌های اخیر Agent را از لاگ دیباگ (debug log) نمایش می‌دهد.

```bash
wp gratis-ai-agent logs [--last=<n>] [--level=<level>] [--ability=<ability>]
```

**Options**

| Option | Description |
|---|---|
| `--last=<n>` | نمایش N لاگ آخر. پیش‌فرض `50` است |
| `--level=<level>` | فیلتر بر اساس سطح: `info`، `warning`، `error` |
| `--ability=<ability>` | فیلتر بر اساس نام قابلیت |

**مثال**

```bash
wp gratis-ai-agent logs --last=20 --level=error
```

---

## `wp gratis-ai-agent reset`

حالت Agent را بازنشانی می‌کند: CSS تزریق شده را پاک می‌کند، CPTها و تاکسونومی‌های ثبت شده توسط Agent را حذف می‌کند، استایل‌های سراسری را ریست می‌کند، و کش تنظیمات (options cache) Agent را خالی می‌سازد. افزونه یا تنظیمات آن را حذف نمی‌کند.

```bash
wp gratis-ai-agent reset [--yes]
```

برای نادیده گرفتن پیام تأیید، `--yes` را اضافه کنید.

```bash
wp gratis-ai-agent reset --yes
Success: Agent state reset. Cleared: 2 post types, 1 taxonomy, custom CSS, global styles overrides.
```

---

## Exit Codes

تمام دستورات در صورت موفقیت، خروج کد `0` دارند. کدهای خروج غیر صفر:

| Code | Meaning |
|---|---|
| `1` | خطای عمومی (به پیام خطا مراجعه کنید) |
| `2` | خطای اتصال ارائه‌دهنده (Provider connectivity failure) |
| `3` | قابلیت یافت نشد (Ability not found) |
| `4` | سؤال بنچمارک یافت نشد (Benchmark question not found) |

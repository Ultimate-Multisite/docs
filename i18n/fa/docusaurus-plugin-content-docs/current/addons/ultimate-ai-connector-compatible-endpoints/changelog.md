---
title: گزارش تغییرات کانکتور نهایی هوش مصنوعی برای نقاط پایانی سازگار
sidebar_position: 99
_i18n_hash: bc1e5acc3b2415defb863e64a18d271c
---
# Ultimate AI Connector for Compatible Endpoints گزارش تغییرات {#ultimate-ai-connector-for-compatible-endpoints-changelog}

## نسخه 2.0.0 — منتشر شده در 2026-04-24 {#version-200--released-on-2026-04-24}

* جدید: پشتیبانی چند ارائه‌دهنده (Multi-provider support) — امکان پیکربندی چندین endpoint هوش مصنوعی و مسیریابی درخواست‌ها با قابلیت بازگشت خودکار (automatic fallback) بین ارائه‌دهنده‌ها.
* رفع اشکال: یکپارچه‌سازی SDK چند ارائه‌دهنده‌ای با شناسه‌های ارائه‌دهنده (provider IDs)، آدرس‌های ثبت‌نام (registration URLs) و محدوده‌بندی فیلتر HTTP صحیح برای هر ارائه‌دهنده.
* رفع اشکال: کارت ارائه‌دهنده جدید اکنون با افزودن خود به صورت خودکار باز می‌شود؛ همچنین، کش اسکریپت (script cache busting) در هنگام به‌روزرسانی پلاگین انجام می‌شود.
* رفع اشکال: فضای نام کلاس ارائه‌دهنده پویا (Dynamic provider class namespace) برای `eval()` و رفتار بازگشایی خودکار (auto-expand behaviour) برای ارائه‌دهنده‌های جدید اضافه شده است.
* رفع اشکال: از کامپوننت‌های پایدار Card/CardBody/CardHeader/CardDivider (که دیگر آزمایشی نیستند) برای سازگاری با WordPress 6.9+ استفاده شده است.
* رفع اشکال: `DragHandle` تعریف نشده با آیکون گیره یونیکد (unicode grip icon) برای مرتب‌سازی ارائه‌دهنده‌ها با کشیدن جایگزین شده است.
* رفع اشکال: درخواست HTTP مسدودکننده‌ای که در هر بار بارگذاری صفحه اجرا می‌شد، حذف شده است.
* بهبود: گردش کار GitHub Actions به Node.js 24 ارتقا یافته است.

## نسخه 1.0.0 — انتشار اولیه {#version-100--initial-release}

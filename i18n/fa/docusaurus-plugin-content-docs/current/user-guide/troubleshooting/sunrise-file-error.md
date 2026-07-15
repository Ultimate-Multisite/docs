---
title: خطای فایل Sunrise
sidebar_position: 12
_i18n_hash: 53d988d644c244d20f04444350bd5d3c
---
# خطا در نصب فایل Sunrise

فایل sunrise.php یک فایل خاص است که WordPress هنگام راه‌اندازی اولیه به دنبال آن می‌گردد. برای اینکه WordPress بتواند این فایل را پیدا کند، باید در **پوشه wp-content** قرار داشته باشد.

وقتی Ultimate Multisite را فعال می‌کنید و مراحل راهنمای نصب را طی می‌کنید (مانند تصویر زیر)، Ultimate Multisite سعی می‌کند فایل sunrise.php را به پوشه wp-content کپی کند.

<!-- Screenshot unavailable: Setup wizard page showing sunrise.php installation step -->

در بیشتر موارد، کپی فایل با موفقیت انجام می‌شود و همه چیز درست کار می‌کند. اما اگر تنظیماتی به درستی انجام نشده باشد (مثلاً دسترسی‌های پوشه)، ممکن است با مشکلی مواجه شوید که Ultimate Multisite نتواند فایل را کپی کند.

اگر پیام خطایی که Ultimo نشان می‌دهد را بخوانید، می‌بینید که دقیقاً همین اتفاق افتاده است: **کپی Sunrise ناموفق بود**.

<!-- Screenshot unavailable: Error message showing Sunrise copy failed -->

برای رفع این مشکل، کافیست فایل sunrise.php را از داخل پوشه پلاگین wp-ultimo کپی کنید و در پوشه wp-content قرار دهید. بعد از انجام این کار، صفحه راهنمای نصب را دوباره بارگذاری کنید تا بررسی‌ها با موفقیت انجام شوند.

<!-- Screenshot unavailable: File manager showing sunrise.php inside wp-ultimo plugin folder --> در هر صورت، بهتر است دسترسی‌های پوشه‌ها را به طور کلی بررسی کنید تا در آینده با مشکلی مواجه نشوید (نه فقط با Ultimate Multisite، بلکه با سایر پلاگین‌ها و قالب‌ها هم).

**ابزار Health Check** که بخشی از WordPress است (می‌توانید از طریق **پیشخوان سایت اصلی > ابزارها > Health Check** به آن دسترسی داشته باشید) می‌تواند به شما اطلاع دهد که آیا دسترسی‌های پوشه‌ها روی مقادیری تنظیم شده‌اند که ممکن است برای WordPress مشکل ایجاد کنند.

<!-- Screenshot unavailable: WordPress Health Check tool showing folder permissions status -->

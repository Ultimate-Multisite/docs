---
id: wu_wp_config_reference_hook_line_patterns
title: فیلتر - wu_wp_config_reference_hook_line_patterns
sidebar_label: wu_wp_config_reference_hook_line_patterns
_i18n_hash: 5fd70ec9bc5a2b3357660797baf5519b
---
# فیلتر: wu_wp_config_reference_hook_line_patterns

ما برای پیدا کردن محلی که می‌توانیم ثابت‌های (constants) خود را در آن تزریق کنیم، سه الگو (pattern) را بررسی می‌کنیم:

۱. ما به دنبال تعریف متغیر `$table_prefix` می‌گردیم؛ ۲. ما به دنبال تعاریف پیچیده‌تری از `$table_prefix` می‌گردیم – یعنی آن‌هایی که از متغیرهای محیطی (env variables) استفاده می‌کنند؛ ۳. اگر این موارد در دسترس نباشد، به دنبال کامنت 'Happy Publishing' می‌گردیم؛ ۴. اگر این مورد هم در دسترس نباشد، به ابتدای فایل نگاه می‌کنیم. کلید (key) نماینده الگو و مقدار (value) نماینده تعداد خطاتی است که باید اضافه شود. می‌توان یک عدد منفی از خطوط را ارسال کرد تا به جای نوشتن بعد از خط پیدا شده، قبل از آن نوشته شود.

### منبع (Source) {#source}

در [`inc/helpers/class-wp-config.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/helpers/class-wp-config.php#L143) در خط ۱۴۳ تعریف شده است.

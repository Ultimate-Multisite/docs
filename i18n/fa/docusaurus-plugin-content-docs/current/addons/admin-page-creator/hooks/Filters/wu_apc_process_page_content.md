---
id: wu_apc_process_page_content
title: فیلتر - wu_apc_process_page_content
sidebar_label: wu_apc_process_page_content
_i18n_hash: 85631895afd7298462a111b4db356566
---
# Filter: wu_apc_process_page_content {#filter-wuapcprocesspagecontent}

به توسعه‌دهندگان اجازه می‌دهد تا محتوای نهایی را تغییر دهند.

## پارامترها {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $content | `string` | محتوای پس از جایگزینی‌ها. |
| $content_before_processing | `string` | محتوای پیش از جایگزینی‌ها. |
| $to_replace | `array` | آرایه‌ای که شامل جای‌گذاری‌های موجود است. |
| $placeholder_count | `int` | تعداد جای‌گذاری‌های یافت شده. |

### از نسخه {#since}

- 1.4.0
### منبع {#source}

در [`inc/wu-apc-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-admin-page-creator/blob/main/inc/wu-apc-functions.php#L46) در خط ۴۶ تعریف شده است.

## مقدار بازگشتی {#returns}
محتوای پس از تغییر.

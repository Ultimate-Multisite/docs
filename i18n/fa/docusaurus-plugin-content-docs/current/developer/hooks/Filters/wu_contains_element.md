---
id: wu_contains_element
title: فیلتر - wu_contains_element
sidebar_label: wu_contains_element
_i18n_hash: 5254f5cdc4fb5e3992e8987cc4c5d82b
---
# فیلتر: wu_contains_element {#filter-wucontainselement}

به توسعه‌دهندگان اجازه می‌دهد تا نتایج جستجوی اولیه را تغییر دهند.

این فیلتر برای سازندگان شخص ثالث و موارد مشابه مفید است.

## پارامترها {#parameters}

| نام | نوع | توضیحات |
|------|------|-------------|
| $contains_elements | `bool` | اگر عنصر در محتوا وجود داشته باشد. |
| $content | `string` | محتوایی که در حال بررسی است. |
| $element | `self` | عنصر فعلی. |
| $post | `null\|\WP_Post` | پستی که باید بررسی شود. |

### از نسخه {#since}

- 2.0.0
### منبع {#source}

تعریف شده در [`inc/ui/class-base-element.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/ui/class-base-element.php#L534) در خط ۵۳۴

---
id: wu_domain_has_correct_dns
title: فیلتر - wu_domain_has_correct_dns
sidebar_label: wu_domain_has_correct_dns
_i18n_hash: dd6037bea5bd9b5b613888113a04536d
---
# Filter: wu_domain_has_correct_dns

این فیلتر به توسعه‌دهندگان پلاگین اجازه می‌دهد تا بررسی‌های جدیدی اضافه کنند تا نتایج را تعیین کنند.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $result | `bool` | نتیجه فعلی. |
| $domain | `self` | نمونه (instance) دامنه فعلی. |
| $domains_and_ips | `array` | لیست دامنه‌ها و آدرس‌های IP که در جستجوی DNS پیدا شده‌اند. |

### Since {#since}

- 2.0.4
### Source {#source}

در [`inc/models/class-domain.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-domain.php#L455) در خط ۴۵۵ تعریف شده است.


## Returns {#returns}
اینکه آیا DNS به درستی تنظیم شده است یا خیر.

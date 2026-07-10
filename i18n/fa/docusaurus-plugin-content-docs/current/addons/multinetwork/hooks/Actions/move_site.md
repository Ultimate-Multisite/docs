---
id: move_site
title: عملیات - move_site
sidebar_label: move_site
_i18n_hash: 253e7e4db7ca08022f52fb12a14907b6
---
# اکشن: move_site {#action-movesite}

پس از اینکه یک سایت به یک شبکه جدید منتقل شد، این اکشن فعال می‌شود.

## پارامترها {#parameters}

| نام | نوع | توضیحات |
|------|------|-------------|
| $site_id | `int` | شناسه سایتی که منتقل شده است. |
| $old_network_id | `int` | شناسه شبکه اصلی سایت. |
| $new_network_id | `int` | شناسه شبکه‌ای که سایت به آن منتقل شده است. |

### از نسخه {#since}

- 1.3.0
### منبع {#source}

در [`inc/functions/network.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multinetwork/blob/main/inc/functions/network.php#L1587) در خط ۱۵۸۷ تعریف شده است.

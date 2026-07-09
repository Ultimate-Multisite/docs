---
id: networks_user_is_network_admin
title: فیلتر - networks_user_is_network_admin
sidebar_label: networks_user_is_network_admin
_i18n_hash: f8e40a1c47591c0cab73d671cf681281
---
# Filter: networks_user_is_network_admin {#filter-networksuserisnetworkadmin}

این فیلتر شبکه‌هایی را که یک کاربر مدیر آن‌ها است، فیلتر می‌کند.

## پارامترها {#parameters}

| نام | نوع | توضیحات |
|------|------|-------------|
| $ | `array\|bool` | لیست شناسه شبکه‌ها یا `false` اگر کاربر هیچ شبکه‌ای نداشته باشد. |
| $ | `int` | شناسه کاربری که شبکه‌ها باید برای آن برگردانده شوند. |

### از نسخه {#since}

- 2.0.0
### منبع {#source}

در [`inc/functions/network.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multinetwork/blob/main/inc/functions/network.php#L703) در خط ۷۰۳ تعریف شده است.

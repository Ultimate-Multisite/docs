---
id: networks_pre_user_is_network_admin
title: فیلتر - networks_pre_user_is_network_admin
sidebar_label: networks_pre_user_is_network_admin
_i18n_hash: f8e04e42fb6f7c1f20a1280c46bf53b5
---
# Filter: networks_pre_user_is_network_admin {#filter-networkspreuserisnetworkadmin}

این فیلتر، شبکه‌هایی را که یک کاربر مدیر آن‌ها است، فیلتر می‌کند تا فرآیند را میان‌بُر کند.

## پارامترها {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $ | `array\|bool\|null` | لیست شناسه شبکه‌ها یا false. هر مقداری به جز null، فرآیند را میان‌بُر خواهد کرد. |
| $ | `int` | شناسه کاربری که شبکه‌ها باید برای آن برگردانده شوند. |

### از نسخه {#since}

- 2.0.0
### منبع {#source}

در [`inc/functions/network.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multinetwork/blob/main/inc/functions/network.php#L688) در خط ۶۸۸ تعریف شده است.

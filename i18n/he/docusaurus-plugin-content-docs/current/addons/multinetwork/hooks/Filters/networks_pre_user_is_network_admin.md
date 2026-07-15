---
id: networks_pre_user_is_network_admin
title: פילטר - networks_pre_user_is_network_admin
sidebar_label: networks_pre_user_is_network_admin
_i18n_hash: f8e04e42fb6f7c1f20a1280c46bf53b5
---
# מסנן: networks_pre_user_is_network_admin

מסנן את הרשתות שהמשתמש הוא מנהל בהן, כדי לקצר את התהליך.

## פרמטרים {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $ | `array\|bool\|null` | רשימה של מזהי רשתות או false. כל ערך שאינו null יקצר את התהליך. |
| $ | `int` | מזהה משתמש עבורו יש להחזיר את הרשתות. |

### מאז {#since}

- 2.0.0
### מקור {#source}

מוגדר ב[`inc/functions/network.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multinetwork/blob/main/inc/functions/network.php#L688) בשורה 688

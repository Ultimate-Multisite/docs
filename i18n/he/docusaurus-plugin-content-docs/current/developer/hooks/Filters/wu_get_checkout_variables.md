---
id: wu_get_checkout_variables
title: פילטר - wu_get_checkout_variables
sidebar_label: wu_get_checkout_variables
_i18n_hash: c3821432e54f34547822df3b92ced708
---
# Filter: wu_get_checkout_variables

מאפשר למפתחי תוספים לסנן את המשתנים המוגדרים מראש של עמוד תשלום.

שימו לב: היעדר מפתחות יכול לשבור לחלוטין את תהליך התשלום בחזית האתר (front-end).

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $variables | `array` | משתנים ממוקמים (Localized variables). |
| $checkout | `\Checkout` | מחלקת התשלום (The checkout class). |

### Since

- 2.0.0
### Source

מוגדר ב-[`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1970) בשורה 1970.


## Returns
מערך המשתנים החדש.

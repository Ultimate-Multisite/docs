---
id: wu_handle_user_meta_fields
title: Амал - wu_handle_user_meta_fields
sidebar_label: wu_handle_user_meta_fields
_i18n_hash: 6baac0d78046fb58a79bc35865d91372
---
# Амал: wu_handle_user_meta_fields

Ба таҳиягарони plugin имкон медиҳад, ки агар лозим бошад, додаҳои метаи корбарро бо роҳҳои гуногун захира кунанд.

## Параметрҳо {#parameters}

| Ном | Навъ | Тавсиф |
|------|------|-------------|
| $meta_repository | `array` | Рӯйхати майдонҳои мета, бо сохтори key =&gt; value. |
| $user | `\WP_User` | Объекти корбари WordPress. |
| $customer | `\Customer` | Объекти муштарии Ultimate Multisite. |
| $checkout | `\Checkout` | Класси пардохт. |

### Аз версия {#since}

- 2.0.4
### Манбаъ {#source}

Дар [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1244) дар сатри 1244 муайян шудааст.

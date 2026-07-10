---
id: wu_handle_user_meta_fields
title: Gweithred - wu_handle_user_meta_fields
sidebar_label: wu_handle_user_meta_fields
_i18n_hash: 6baac0d78046fb58a79bc35865d91372
---
# Gweithred: wu_handle_user_meta_fields {#action-wuhandleusermetafields}

Caniatáu i ddatblygwyr plugin gadw metadata defnyddwyr mewn ffyrdd gwahanol os oes angen.

## Paramedrau {#parameters}

| Enw | Math | Disgrifiad |
|------|------|-------------|
| $meta_repository | `array` | Y rhestr o feysydd meta, wedi’i strwythuro fel key =&gt; value. |
| $user | `\WP_User` | Gwrthrych defnyddiwr WordPress. |
| $customer | `\Customer` | Gwrthrych cwsmer Ultimate Multisite. |
| $checkout | `\Checkout` | Y dosbarth checkout. |

### Ers {#since}

- 2.0.4
### Ffynhonnell {#source}

Wedi’i ddiffinio yn [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1244) ar linell 1244

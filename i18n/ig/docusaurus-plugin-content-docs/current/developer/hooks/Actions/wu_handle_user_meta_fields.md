---
id: wu_handle_user_meta_fields
title: Omume - wu_handle_user_meta_fields
sidebar_label: wu_handle_user_meta_fields
_i18n_hash: 6baac0d78046fb58a79bc35865d91372
---
# Action: wu_handle_user_meta_fields

Kwe ka ndị mmepe plugin chekwaa data meta onye ọrụ n'ụzọ dị iche iche ma ọ bụrụ na ha chọrọ.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $meta_repository | `array` | Ndepụta nke meta fields, haziri dị ka key =&gt; value. |
| $user | `\WP_User` | Object onye ọrụ WordPress. |
| $customer | `\Customer` | Object onye ahịa Ultimate Multisite. |
| $checkout | `\Checkout` | Klas checkout. |

### Since {#since}

- 2.0.4
### Source {#source}

A kọwara ya na [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1244) na ahịrị 1244

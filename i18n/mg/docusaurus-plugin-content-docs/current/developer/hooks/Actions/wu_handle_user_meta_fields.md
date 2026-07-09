---
id: wu_handle_user_meta_fields
title: Hetsika - wu_handle_user_meta_fields
sidebar_label: wu_handle_user_meta_fields
_i18n_hash: 6baac0d78046fb58a79bc35865d91372
---
# Hetsika: wu_handle_user_meta_fields {#action-wuhandleusermetafields}

Mamela ny mpamorona plugin hitahiry angona meta an'ny mpampiasa amin'ny fomba samihafa raha ilain'izy ireo izany.

## Paramètre {#parameters}

| Anarana | Karazana | Famaritana |
|------|------|-------------|
| $meta_repository | `array` | Ny lisitry ny saha meta, voarafitra ho key =&gt; value. |
| $user | `\WP_User` | Ny object mpampiasa WordPress. |
| $customer | `\Customer` | Ny object mpanjifa Ultimate Multisite. |
| $checkout | `\Checkout` | Ny class checkout. |

### Hatramin'ny {#since}

- 2.0.4
### Loharano {#source}

Voafaritra ao amin'ny [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1244) amin'ny andalana 1244

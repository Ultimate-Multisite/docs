---
id: wu_handle_user_meta_fields
title: Akce - wu_handle_user_meta_fields
sidebar_label: wu_handle_user_meta_fields
_i18n_hash: 6baac0d78046fb58a79bc35865d91372
---
# Action: wu_handle_user_meta_fields {#action-wuhandleusermetafields}

Umožňuje vývojářům pluginů ukládat uživatelské meta údaje různými způsoby, pokud to potřebují.

## Parametry {#parameters}

| Název | Typ | Popis |
|------|------|-------------|
| $meta_repository | `array` | Seznam meta polí ve struktuře klíč => hodnota. |
| $user | `\WP_User` | Objekt uživatele WordPress. |
| $customer | `\Customer` | Objekt zákazníka Ultimate Multisite. |
| $checkout | `\Checkout` | Třída pro pokladnu (checkout). |

### Od {#since}

- 2.0.4
### Zdroj {#source}

Definováno v [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1244) na řádku 1244

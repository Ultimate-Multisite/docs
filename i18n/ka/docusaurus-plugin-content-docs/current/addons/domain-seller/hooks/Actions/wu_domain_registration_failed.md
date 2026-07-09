---
id: wu_domain_registration_failed
title: ქმედება - wu_domain_registration_failed
sidebar_label: wu_domain_registration_failed
_i18n_hash: 4255f34307a46a9129dc40e713fb9b5b
---
# Action: wu_domain_registration_failed

ამოქმედდება დომენის რეგისტრაციის მცდელობის წარუმატებლად დასრულების შემდეგ.

## პარამეტრები

| Name | Type | Description |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | გადახდა, რომელმაც რეგისტრაცია გამოიწვია. |
| $registration_data | `array&lt;string,mixed&gt;` | რეგისტრაციის მეტამონაცემები, მათ შორის status=failed და error_message. |
| $error_message | `string` | ადამიანისთვის წაკითხვადი შეცდომის შეტყობინება რეგისტრატორისგან. |

### ვერსიიდან

- 2.0.0
### წყარო

განსაზღვრულია [`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1250)-ში, ხაზზე 1250

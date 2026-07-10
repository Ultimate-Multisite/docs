---
id: wu_domain_renewal_failed
title: მოქმედება - wu_domain_renewal_failed
sidebar_label: wu_domain_renewal_failed
_i18n_hash: bff3fd7903485780766e490300546070
---
# Action: wu_domain_renewal_failed {#action-wudomainrenewalfailed}

იმუშავებს დომენის განახლების მცდელობის წარუმატებლობის შემდეგ.

## პარამეტრები {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | გადახდა, რომელმაც განახლება გამოიწვია. |
| $renewal_data | `array&lt;string,mixed&gt;` | განახლების მეტამონაცემები (domain_name, years და ა.შ.). |
| $error_message | `string` | რეგისტრატორისგან მიღებული ადამიანისთვის წაკითხვადი შეცდომის შეტყობინება. |

### ვერსიიდან {#since}

- 2.0.0
### წყარო {#source}

განსაზღვრულია [`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L630)-ში, ხაზზე 630

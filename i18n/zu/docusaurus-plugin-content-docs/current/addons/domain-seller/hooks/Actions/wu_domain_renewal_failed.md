---
id: wu_domain_renewal_failed
title: Isenzo - wu_domain_renewal_failed
sidebar_label: wu_domain_renewal_failed
_i18n_hash: bff3fd7903485780766e490300546070
---
# Isenzo: wu_domain_renewal_failed {#action-wudomainrenewalfailed}

Sisebenza ngemva kokwehluleka komzamo wokuvuselela isizinda.

## Amapharamitha {#parameters}

| Igama | Uhlobo | Incazelo |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Inkokhelo ebangele ukuvuselelwa. |
| $renewal_data | `array&lt;string,mixed&gt;` | Imininingwane yokuvuselela (domain_name, years, njll.). |
| $error_message | `string` | Umlayezo wephutha ofundeka kubantu ovela ku-registrar. |

### Kusukela {#since}

- 2.0.0
### Umthombo {#source}

Kuchazwe ku-[`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L630) kulayini 630

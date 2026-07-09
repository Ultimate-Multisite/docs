---
id: wu_domain_renewal_failed
title: Gweithred - wu_domain_renewal_failed
sidebar_label: wu_domain_renewal_failed
_i18n_hash: bff3fd7903485780766e490300546070
---
# Cam Gweithredu: wu_domain_renewal_failed {#action-wudomainrenewalfailed}

Yn tanio ar ôl i ymgais adnewyddu parth fethu.

## Paramedrau {#parameters}

| Enw | Math | Disgrifiad |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Y taliad a ysgogodd yr adnewyddu. |
| $renewal_data | `array&lt;string,mixed&gt;` | Metaddata adnewyddu (domain_name, years, ac ati). |
| $error_message | `string` | Neges gwall ddarllenadwy gan bobl gan y cofrestrydd. |

### Ers {#since}

- 2.0.0
### Ffynhonnell {#source}

Wedi’i ddiffinio yn [`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L630) ar linell 630

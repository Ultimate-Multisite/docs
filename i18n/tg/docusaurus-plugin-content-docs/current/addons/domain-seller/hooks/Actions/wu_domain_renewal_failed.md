---
id: wu_domain_renewal_failed
title: Амал - wu_domain_renewal_failed
sidebar_label: wu_domain_renewal_failed
_i18n_hash: bff3fd7903485780766e490300546070
---
# Амал: wu_domain_renewal_failed

Пас аз ноком шудани кӯшиши тамдиди домен фаъол мешавад.

## Параметрҳо {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Пардохте, ки тамдидро оғоз кард. |
| $renewal_data | `array&lt;string,mixed&gt;` | Метамаълумоти тамдид (domain_name, years ва ғайра). |
| $error_message | `string` | Паёми хатои барои инсон хондашаванда аз registrar. |

### Аз {#since}

- 2.0.0
### Манбаъ {#source}

Дар [`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L630) дар сатри 630 муайян шудааст

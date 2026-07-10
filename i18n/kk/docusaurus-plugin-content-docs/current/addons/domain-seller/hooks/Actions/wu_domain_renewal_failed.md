---
id: wu_domain_renewal_failed
title: Әрекет - wu_domain_renewal_failed
sidebar_label: wu_domain_renewal_failed
_i18n_hash: bff3fd7903485780766e490300546070
---
# Action: wu_domain_renewal_failed {#action-wudomainrenewalfailed}

Доменді ұзарту әрекеті сәтсіз аяқталғаннан кейін іске қосылады.

## Параметрлер {#parameters}

| Атауы | Түрі | Сипаттамасы |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Ұзартуды іске қосқан төлем. |
| $renewal_data | `array&lt;string,mixed&gt;` | Ұзарту метадеректері (domain_name, years және т.б.). |
| $error_message | `string` | Тіркеушіден келген адамға түсінікті қате хабарламасы. |

### Бастап {#since}

- 2.0.0
### Дереккөзі {#source}

[`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L630) ішінде 630-жолда анықталған

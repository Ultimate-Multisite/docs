---
id: wu_domain_renewal_completed
title: Действие - wu_domain_renewal_completed
sidebar_label: wu_domain_renewal_completed
_i18n_hash: d4aa4ba2d3cd00aaa0ea699102a863e6
---
# Action: wu_domain_renewal_completed

Изпълнява се след като домейнът е успешно подновен.

## Параметри {#parameters}

| Име | Тип | Описание |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Плащането, което е инициирало подновяването. |
| $renewal_data | `array&lt;string,mixed&gt;` | Метаданни за подновяване (domain_name, years, customer_id и др.). |
| $result | `array&lt;string,mixed&gt;` | Суровият масив с резултати, върнат от регистратора, включващ новата expiry_date. |

### От {#since}

- 2.0.0
### Източник {#source}

Дефинирано в [`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L594) на линия 594

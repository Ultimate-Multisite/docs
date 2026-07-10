---
id: wu_domain_renewal_failed
title: Дія - wu_domain_renewal_failed
sidebar_label: wu_domain_renewal_failed
_i18n_hash: bff3fd7903485780766e490300546070
---
# Дія: wu_domain_renewal_failed {#action-wudomainrenewalfailed}

Викликається після невдалої спроби поновлення домену.

## Параметри {#parameters}

| Ім'я | Тип | Опис |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Платіж, який спричинив поновлення. |
| $renewal_data | `array&lt;string,mixed&gt;` | Метадані поновлення (назва домену, роки тощо). |
| $error_message | `string` | Повідомлення про помилку, зрозуміле для людини, від реєстратора. |

### Починаючи з {#since}

- 2.0.0
### Джерело {#source}

Визначено в [`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L630) на рядку 630

---
id: wu_domain_seller_process_purchase
title: Действие - wu_domain_seller_process_purchase
sidebar_label: wu_domain_seller_process_purchase
_i18n_hash: af00bd289685ee01ed7a15275fa410c6
---
# Action: wu_domain_seller_process_purchase

Изпълнява се, когато се обработва покупка на домейн след завършване на процеса на плащане.

## Параметри {#parameters}

| Име | Тип | Описание |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Обектът на плащането. |
| $checkout_data | `array&lt;string,mixed&gt;` | Пълните данни от процеса на плащане, получени от формуляра за регистрация. |

### От версия {#since}

- 2.0.0
### Източник {#source}

Дефиниран в [`inc/class-domain-seller.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-seller.php#L246) на ред 246

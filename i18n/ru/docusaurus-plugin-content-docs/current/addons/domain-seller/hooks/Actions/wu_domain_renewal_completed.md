---
id: wu_domain_renewal_completed
title: Действие - wu_domain_renewal_completed
sidebar_label: wu_domain_renewal_completed
_i18n_hash: d4aa4ba2d3cd00aaa0ea699102a863e6
---
# Действие: wu_domain_renewal_completed

Вызывается после успешного продления домена.

## Параметры {#parameters}

| Имя | Тип | Описание |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Платеж, который инициировал продление. |
| $renewal_data | `array<string,mixed>` | Метаданные продления (имя домена, годы, customer_id и т. д.). |
| $result | `array<string,mixed>` | Исходный массив результатов, возвращенный регистратором, включая новую дату истечения срока действия (expiry_date). |

### С версии {#since}

- 2.0.0
### Источник {#source}

Определено в [`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L594) в строке 594

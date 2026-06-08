---
id: wu_domain_registration_completed
title: Дзея - wu_domain_registration_completed
sidebar_label: wu_domain_registration_completed
_i18n_hash: 092b475e74f3b937af068c83eeba2e0a
---
# Action: wu_domain_registration_completed

Выклікаецца пасля паспяховага рэгістравання домену.

## Паметры

| Назва | Тып | Апісан |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Плацмент, які выклікаў рэгістрацыю. |
| $registration_data | `array&lt;string,mixed&gt;` | Метаданыя рэгістрацыі (domain_name, provider_id, years, expiry_date і г.д.). |
| $result | `array&lt;string,mixed&gt;` | Сырая масыўная структура вынікаў, вяртаная рэгістратарам. |

### З

- 2.0.0
### Выкненне

Вызначаны ў [`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1204) на 1204-й пасылцы.

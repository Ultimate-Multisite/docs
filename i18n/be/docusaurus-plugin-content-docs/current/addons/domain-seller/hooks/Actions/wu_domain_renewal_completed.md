---
id: wu_domain_renewal_completed
title: Дзеянне - wu_domain_renewal_completed
sidebar_label: wu_domain_renewal_completed
_i18n_hash: d4aa4ba2d3cd00aaa0ea699102a863e6
---
# Action: wu_domain_renewal_completed

Выклікаецца пасля паспяховага пановлення домена.

## Параметры

| Назва | Тып | Апісан |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Плацмент, які выклікаў пановленне. |
| $renewal_data | `array<string,mixed>` | Метаданыя пановлення (назва домену, колька гадоў, ID кліента і г.д.). |
| $result | `array<string,mixed>` | Сыровы масив вынікаў, які паверніў рэгістратар, уключаючы новую дату выгасання. |

### З версіі

- 2.0.0
### Выказванне

Вызначаны ў [`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L594) на 594-й пасылцы.

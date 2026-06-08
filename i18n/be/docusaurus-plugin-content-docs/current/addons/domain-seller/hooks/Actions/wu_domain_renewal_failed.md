---
id: wu_domain_renewal_failed
title: Дзея - wu_domain_renewal_failed
sidebar_label: wu_domain_renewal_failed
_i18n_hash: bff3fd7903485780766e490300546070
---
# Action: wu_domain_renewal_failed

Выклікаецца, калі спроба пановлення домену не ўдалася.

## Параметры

| Назва | Тып | Апісан |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Плацёж, які выклікаў пановленне. |
| $renewal_data | `array<string,mixed>` | Метаданыя пановлення (назва домену, колькасць гадоў і г.д.). |
| $error_message | `string` | Адразу чытальнае паведамленне аб памылцы ад рэгістратара. |

### З

- 2.0.0
### Вынік

Вызначаны ў [`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L630) на 630-й кропцы

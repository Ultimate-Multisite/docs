---
id: wu_domain_registration_failed
title: Дзея - wu_domain_registration_failed
sidebar_label: wu_domain_registration_failed
_i18n_hash: 4255f34307a46a9129dc40e713fb9b5b
---
# Action: wu_domain_registration_failed

Выклікаецца пасля неўдаспыў рэгістрацыі домену.

## Параметры

| Name | Type | Апісан |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Плацмент, які выклікаў рэгістрацыю. |
| $registration_data | `array&lt;string,mixed&gt;` | Метаданыя рэгістрацыі, уключаючы status=failed і error_message. |
| $error_message | `string` | Легітфарматуёванае паведамленне аб памылцы ад рэгістратара. |

### З версіі

- 2.0.0
### Выказварэнне

Вызначаны ў [`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1250) на 1250-й кропцы.

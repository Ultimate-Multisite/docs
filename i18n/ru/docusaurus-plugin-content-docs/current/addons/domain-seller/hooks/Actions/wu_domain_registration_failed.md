---
id: wu_domain_registration_failed
title: Действие - wu_domain_registration_failed
sidebar_label: wu_domain_registration_failed
_i18n_hash: 4255f34307a46a9129dc40e713fb9b5b
---
# Действие: wu_domain_registration_failed

Срабатывает после неудачной попытки регистрации домена.

## Параметры

| Имя | Тип | Описание |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Платеж, который инициировал регистрацию. |
| $registration_data | `array<string,mixed>` | Метаданные регистрации, включая статус=failed и error_message. |
| $error_message | `string` | Ошибку, понятную человеку, полученную от регистратора. |

### Начиная с

- 2.0.0
### Источник

Определено в [`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1250) в строке 1250

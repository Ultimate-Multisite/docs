---
id: wu_domain_registration_failed
title: Действие - wu_domain_registration_failed
sidebar_label: wu_domain_registration_failed
_i18n_hash: 4255f34307a46a9129dc40e713fb9b5b
---
# Action: wu_domain_registration_failed

Изстрелва се след неуспешна попытка за регистрация на домейн.

## Параметри {#parameters}

| Име | Тип | Описание |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Платежът, който е инициирал регистрацията. |
| $registration_data | `array<string,mixed>` | Метаданни за регистрацията, включващи status=failed и error_message. |
| $error_message | `string` | Человечно разбираемо съобщение за грешка от регистратора. |

### От {#since}

- 2.0.0
### Източник {#source}

Дефиниран в [`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1250) на линия 1250

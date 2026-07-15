---
id: wu_domain_registration_failed
title: Амал - wu_domain_registration_failed
sidebar_label: wu_domain_registration_failed
_i18n_hash: 4255f34307a46a9129dc40e713fb9b5b
---
# Амал: wu_domain_registration_failed

Пас аз ноком шудани кӯшиши сабти домен иҷро мешавад.

## Параметрҳо {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Пардохте, ки сабтро оғоз кард. |
| $registration_data | `array&lt;string,mixed&gt;` | Метамаълумоти сабт, аз ҷумла status=failed ва error_message. |
| $error_message | `string` | Паёми хатои барои инсон хондашаванда аз registrar. |

### Аз версияи {#since}

- 2.0.0
### Манбаъ {#source}

Дар [`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1250) дар сатри 1250 муайян шудааст

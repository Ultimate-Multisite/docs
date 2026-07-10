---
id: wu_domain_registration_completed
title: Амал - wu_domain_registration_completed
sidebar_label: wu_domain_registration_completed
_i18n_hash: 092b475e74f3b937af068c83eeba2e0a
---
# Амал: wu_domain_registration_completed {#action-wudomainregistrationcompleted}

Пас аз он фаъол мешавад, ки домен бомуваффақият сабт шудааст.

## Параметрҳо {#parameters}

| Ном | Навъ | Тавсиф |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Пардохте, ки сабтро оғоз кард. |
| $registration_data | `array&lt;string,mixed&gt;` | Метамаълумоти сабт (domain_name, provider_id, years, expiry_date ва ғайра). |
| $result | `array&lt;string,mixed&gt;` | Массиви натиҷаи хом, ки аз тарафи бақайдгиранда баргардонида шудааст. |

### Аз версияи {#since}

- 2.0.0
### Манбаъ {#source}

Дар [`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1204) дар сатри 1204 муайян шудааст

---
id: wu_domain_registration_failed
title: Akció - wu_domain_registration_failed
sidebar_label: wu_domain_registration_failed
_i18n_hash: 4255f34307a46a9129dc40e713fb9b5b
---
# Action: wu_domain_registration_failed {#action-wudomainregistrationfailed}

Elindul, ha egy domain regisztrációs kísérlet sikertelen.

## Paraméterek {#parameters}

| Neve | Típus | Leírás |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | A fizetés, amely a regisztrációt indította el. |
| $registration_data | `array&lt;string,mixed&gt;` | Regisztrációs metadaták, amelyek tartalmazzák a status=failed és az error_message mezőket. |
| $error_message | `string` | Olvasható hibaüzenet a regisztrátortól. |

### Since {#since}

- 2.0.0
### Source {#source}

Definíciója található [`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1250) fájlban, 1250-sorban.

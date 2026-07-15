---
id: wu_domain_registration_failed
title: Hereket - wu_domain_registration_failed
sidebar_label: wu_domain_registration_failed
_i18n_hash: 4255f34307a46a9129dc40e713fb9b5b
---
# Hereket: wu_domain_registration_failed

Domen bellige alyş synanyşygy şowsuz bolandan soň işledilýär.

## Parametrler {#parameters}

| Ady | Görnüşi | Beýan |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Bellige alşy işleden töleg. |
| $registration_data | `array&lt;string,mixed&gt;` | status=failed we error_message goşmak bilen bellige alyş meta-maglumatlary. |
| $error_message | `string` | Registratordan adam üçin düşnükli säwlik habary. |

### Şondan bäri {#since}

- 2.0.0
### Çeşme {#source}

[`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1250) içinde 1250-nji setirde kesgitlenen

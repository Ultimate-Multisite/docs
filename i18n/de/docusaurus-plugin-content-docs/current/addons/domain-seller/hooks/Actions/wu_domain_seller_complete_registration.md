---
id: wu_domain_seller_complete_registration
title: Aktion - wu_domain_seller_complete_registration
sidebar_label: wu_domain_seller_complete_registration
_i18n_hash: 0bd00822989aa5b0dbda498ef5e69848
---
# Action: wu_domain_seller_complete_registration

Wird ausgelöst, wenn eine Zahlung einen Status erreicht, der die Domain-Registrierung auslösen soll.

## Parameter {#parameters}

| Name | Type | Beschreibung |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Das Zahlungs-Objekt. |
| $old_status | `string` | Der vorherige Zahlungsstatus vor dem Übergang. |

### Seit {#since}

- 2.0.0
### Quelle {#source}

Definiert in [`inc/class-domain-seller.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-seller.php#L266) in Zeile 266

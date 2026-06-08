---
id: wu_domain_registration_failed
title: Action - wu_domain_registration_failed
sidebar_label: wu_domain_registration_failed
_i18n_hash: 4255f34307a46a9129dc40e713fb9b5b
---
# Action: wu_domain_registration_failed

Se déclenche lorsqu'une tentative d'enregistrement de domaine échoue.

## Paramètres

| Nom | Type | Description |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Le paiement qui a déclenché l'enregistrement. |
| $registration_data | `array<string,mixed>` | Métadonnées d'enregistrement incluant status=failed et error_message. |
| $error_message | `string` | Message d'erreur lisible par l'homme provenant du registraire. |

### Depuis

- 2.0.0
### Source

Défini dans [`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1250) à la ligne 1250

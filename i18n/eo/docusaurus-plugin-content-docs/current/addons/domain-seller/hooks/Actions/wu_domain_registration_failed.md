---
id: wu_domain_registration_failed
title: Ago - wu_domain_registration_failed
sidebar_label: wu_domain_registration_failed
_i18n_hash: 4255f34307a46a9129dc40e713fb9b5b
---
# Ago: wu_domain_registration_failed

Ekfunkcias post kiam provo registri domajnon malsukcesas.

## Parametroj

| Name | Type | Description |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | La pago, kiu ekigis registradon. |
| $registration_data | `array&lt;string,mixed&gt;` | Registraj metadatenoj inkluzive de status=failed kaj error_message. |
| $error_message | `string` | Homlegebla erarmesaĝo de la registristo. |

### Ekde

- 2.0.0
### Fonto

Difinita en [`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1250) ĉe linio 1250

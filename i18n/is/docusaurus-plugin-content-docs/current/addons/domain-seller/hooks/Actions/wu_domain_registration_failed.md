---
id: wu_domain_registration_failed
title: Aðgerð - wu_domain_registration_failed
sidebar_label: wu_domain_registration_failed
_i18n_hash: 4255f34307a46a9129dc40e713fb9b5b
---
# Aðgerð: wu_domain_registration_failed

Keyrist eftir að tilraun til skráningar léns mistekst.

## Færibreytur

| Nafn | Tegund | Lýsing |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Greiðslan sem kallaði fram skráninguna. |
| $registration_data | `array&lt;string,mixed&gt;` | Skráningarlýsigögn, þar á meðal status=failed og error_message. |
| $error_message | `string` | Mannlesanleg villuskilaboð frá skráningaraðilanum. |

### Frá og með

- 2.0.0
### Uppruni

Skilgreint í [`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1250) í línu 1250

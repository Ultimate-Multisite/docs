---
id: wu_domain_renewal_failed
title: Isenzo - wu_domain_renewal_failed
sidebar_label: wu_domain_renewal_failed
_i18n_hash: bff3fd7903485780766e490300546070
---
# Action: wu_domain_renewal_failed

Isebenza emva kokuba ilinge lokuhlaziya domain lisilele.

## Iiparamitha

| Name | Type | Description |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Intlawulo ebangele uhlaziyo. |
| $renewal_data | `array&lt;string,mixed&gt;` | Imetadata yohlaziyo (domain_name, iminyaka, njl.). |
| $error_message | `string` | Umyalezo wempazamo ofundeka ebantwini ovela kwi-registrar. |

### Ukusukela

- 2.0.0
### Umthombo

Ichazwe kwi-[`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L630) kumgca 630

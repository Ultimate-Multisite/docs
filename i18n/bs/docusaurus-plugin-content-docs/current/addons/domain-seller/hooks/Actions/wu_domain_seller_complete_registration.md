---
id: wu_domain_seller_complete_registration
title: Akcija - wu_domain_seller_complete_registration
sidebar_label: wu_domain_seller_complete_registration
_i18n_hash: 0bd00822989aa5b0dbda498ef5e69848
---
# Action: wu_domain_seller_complete_registration

Aktivira se kada plaćanje prelazi u status koji bi trebao pokrenuti registraciju domena.

## Parametri {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Objekt plaćanja. |
| $old_status | `string` | Prethodni status plaćanja prije prelaska. |

### Od {#since}

- 2.0.0
### Izvor {#source}

Definisano u [`inc/class-domain-seller.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-seller.php#L266) na liniji 266

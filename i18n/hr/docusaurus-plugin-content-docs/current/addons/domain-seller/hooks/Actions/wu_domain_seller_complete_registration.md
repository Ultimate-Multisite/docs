---
id: wu_domain_seller_complete_registration
title: Akcija - wu_domain_seller_complete_registration
sidebar_label: wu_domain_seller_complete_registration
_i18n_hash: 0bd00822989aa5b0dbda498ef5e69848
---
# Radnja: wu_domain_seller_complete_registration

Pokreće se kada plaćanje prijeđe u status koji bi trebao pokrenuti registraciju domene.

## Parametri

| Naziv | Tip | Opis |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Objekt plaćanja. |
| $old_status | `string` | Prethodni status plaćanja prije prijelaza. |

### Od verzije

- 2.0.0
### Izvor

Definirano u [`inc/class-domain-seller.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-seller.php#L266) na retku 266

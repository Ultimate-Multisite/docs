---
id: wu_domain_seller_complete_registration
title: Darbība - wu_domain_seller_complete_registration
sidebar_label: wu_domain_seller_complete_registration
_i18n_hash: 0bd00822989aa5b0dbda498ef5e69848
---
# Darbība: wu_domain_seller_complete_registration

Tiek izpildīta, kad maksājums pāriet uz statusu, kam jāaktivizē domēna reģistrācija.

## Parametri

| Nosaukums | Tips | Apraksts |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Maksājuma objekts. |
| $old_status | `string` | Iepriekšējais maksājuma statuss pirms pārejas. |

### Kopš

- 2.0.0
### Avots

Definēts [`inc/class-domain-seller.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-seller.php#L266) 266. rindā

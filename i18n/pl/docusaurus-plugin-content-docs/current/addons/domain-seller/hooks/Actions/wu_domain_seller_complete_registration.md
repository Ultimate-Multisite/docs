---
id: wu_domain_seller_complete_registration
title: Action - wu_domain_seller_complete_registration
sidebar_label: wu_domain_seller_complete_registration
_i18n_hash: 0bd00822989aa5b0dbda498ef5e69848
---
# Akcja: wu_domain_seller_complete_registration

Wyzwala się, gdy płatność przechodzi do statusu, który powinien uruchomić rejestrację domeny.

## Parametry {#parameters}

| Nazwa | Typ | Opis |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Obiekt płatności. |
| $old_status | `string` | Poprzedni status płatności przed zmianą. |

### Od {#since}

- 2.0.0
### Źródło {#source}

Zdefiniowane w [`inc/class-domain-seller.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-seller.php#L266) w linii 266

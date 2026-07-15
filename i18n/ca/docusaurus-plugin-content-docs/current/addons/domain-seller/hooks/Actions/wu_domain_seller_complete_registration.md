---
id: wu_domain_seller_complete_registration
title: Acció - wu_domain_seller_complete_registration
sidebar_label: wu_domain_seller_complete_registration
_i18n_hash: 0bd00822989aa5b0dbda498ef5e69848
---
# Action: wu_domain_seller_complete_registration

Es dispara quan un pagament passa a un estat que ha de provocar el registre del domini.

## Paràmetres {#parameters}

| Name | Type | Descripció |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | L'objecte de pagament. |
| $old_status | `string` | L'estat anterior del pagament abans la transició. |

### Des de {#since}

- 2.0.0
### Font {#source}

Definit a [`inc/class-domain-seller.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-seller.php#L266) a la línia 266

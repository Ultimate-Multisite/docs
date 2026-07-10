---
id: wu_domain_seller_complete_registration
title: Aðgerð - wu_domain_seller_complete_registration
sidebar_label: wu_domain_seller_complete_registration
_i18n_hash: 0bd00822989aa5b0dbda498ef5e69848
---
# Action: wu_domain_seller_complete_registration {#action-wudomainsellercompleteregistration}

Keyrist þegar greiðsla færist yfir í stöðu sem ætti að ræsa skráningu léns.

## Breytur {#parameters}

| Nafn | Tegund | Lýsing |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Greiðsluhluturinn. |
| $old_status | `string` | Fyrri greiðslustaða fyrir breytinguna. |

### Síðan {#since}

- 2.0.0
### Uppruni {#source}

Skilgreint í [`inc/class-domain-seller.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-seller.php#L266) í línu 266

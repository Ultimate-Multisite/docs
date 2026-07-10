---
id: wu_domain_seller_complete_registration
title: Action - wu_domain_seller_complete_registration
sidebar_label: wu_domain_seller_complete_registration
_i18n_hash: 0bd00822989aa5b0dbda498ef5e69848
---
# Aksie: wu_domain_seller_complete_registration {#action-wudomainsellercompleteregistration}

Word geaktiveer wanneer 'n betaling na 'n status oorskakel wat die domeinregistrasie moet uitlokke.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Die betalings-objek. |
| $old_status | `string` | Die vorige betalingsstatus voor die oorskakeling. |

### Sedert {#since}

- 2.0.0
### Bron {#source}

Gedefinieer in [`inc/class-domain-seller.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-seller.php#L266) by lyn 266

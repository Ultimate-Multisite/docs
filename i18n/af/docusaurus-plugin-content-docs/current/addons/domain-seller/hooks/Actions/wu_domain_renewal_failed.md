---
id: wu_domain_renewal_failed
title: Action - wu_domain_renewal_failed
sidebar_label: wu_domain_renewal_failed
_i18n_hash: bff3fd7903485780766e490300546070
---
# Aksie: wu_domain_renewal_failed

Word geaktiveer nadat 'n poging tot domeinvernying misluk.

## Parameters

| Naam | Tipe | Beskrywing |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Die betaling wat die vernuwing geplaas het. |
| $renewal_data | `array&lt;string,mixed&gt;` | Vernuwing-metadata (domein_naam, jare, ens.). |
| $error_message | `string` | Menslik leesbare foutboodskap van die registeraar. |

### Sedert

- 2.0.0
### Bron

Gedefinieer in [`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L630) op lyn 630

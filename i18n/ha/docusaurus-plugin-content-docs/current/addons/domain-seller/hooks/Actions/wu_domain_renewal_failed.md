---
id: wu_domain_renewal_failed
title: Aiki - wu_domain_renewal_failed
sidebar_label: wu_domain_renewal_failed
_i18n_hash: bff3fd7903485780766e490300546070
---
# Aiki: wu_domain_renewal_failed

Yana kunna bayan ƙoƙarin sabunta domain ya gaza.

## Parameters {#parameters}

| Suna | Nau'i | Bayani |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Biyan kuɗin da ya kunna sabuntawa. |
| $renewal_data | `array&lt;string,mixed&gt;` | Metadata na sabuntawa (domain_name, shekaru, da sauransu). |
| $error_message | `string` | Saƙon kuskure mai karantawa ga mutum daga registrar. |

### Tun daga {#since}

- 2.0.0
### Tushe {#source}

An ayyana a cikin [`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L630) a layi na 630

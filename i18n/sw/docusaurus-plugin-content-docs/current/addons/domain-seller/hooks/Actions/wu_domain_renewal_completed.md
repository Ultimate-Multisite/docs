---
id: wu_domain_renewal_completed
title: Action - wu_domain_renewal_completed
sidebar_label: wu_domain_renewal_completed
_i18n_hash: d4aa4ba2d3cd00aaa0ea699102a863e6
---
# Action: wu_domain_renewal_completed

Inatokea baada ya neno la eneo (domain) kufanywa upya kwa mafanikio.

## Viparametrika {#parameters}

| Jina | Aina | Maelezo |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Malipo yaliyochochea upya usajili. |
| $renewal_data | `array&lt;string,mixed&gt;` | Metadata ya upya usajili (jina la eneo, miaka, kitambulisho cha mteja, n.k.). |
| $result | `array&lt;string,mixed&gt;` | Array ya matokeo halisi iliyorejeshwa na rejista, ikiwa ni pamoja na tarehe mpya ya kuisha. |

### Tangu {#since}

- 2.0.0
### Chanzo {#source}

Imefafanuliwa katika [`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L594) kwenye mstari wa 594

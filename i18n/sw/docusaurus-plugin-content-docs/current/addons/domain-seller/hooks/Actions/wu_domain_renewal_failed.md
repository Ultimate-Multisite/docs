---
id: wu_domain_renewal_failed
title: Action - wu_domain_renewal_failed
sidebar_label: wu_domain_renewal_failed
_i18n_hash: bff3fd7903485780766e490300546070
---
# Action: wu_domain_renewal_failed

Inatolewa baada ya jaribio la kuweka upya kiwango cha neno (domain) kufeli.

## Maelezo ya Parameters

| Name | Type | Description |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Malipo yaliyosababisha jaribio la upya. |
| $renewal_data | `array<string,mixed>` | Taarifa za meta za upya (kama vile jina la kiwango cha neno, miaka, n.k.). |
| $error_message | `string` | Ujumbe wa makosa ambao binadamu anaweza kusoma kutoka kwa kitengo cha usajili (registrar). |

### Tangu

- 2.0.0
### Chanzo

Imefafanuliwa katika [`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L630) kwenye mstari wa 630

---
id: wu_domain_seller_complete_registration
title: Action - wu_domain_seller_complete_registration
sidebar_label: wu_domain_seller_complete_registration
_i18n_hash: 0bd00822989aa5b0dbda498ef5e69848
---
# Action: wu_domain_seller_complete_registration

Ito ay tumatakbo kapag ang isang pagbabayad ay nagbago ng status patungo sa isang estado na dapat mag-trigger ng pagpaparehistro ng domain.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Ang payment object. |
| $old_status | `string` | Ang dating status ng pagbabayad bago ang pagbabago. |

### Since

- 2.0.0
### Source

Tinukoy sa [`inc/class-domain-seller.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-seller.php#L266) sa linya 266

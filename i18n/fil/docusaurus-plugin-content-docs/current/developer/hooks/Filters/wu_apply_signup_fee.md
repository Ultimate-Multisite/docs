---
id: wu_apply_signup_fee
title: Filter - wu_apply_signup_fee
sidebar_label: wu_apply_signup_fee
_i18n_hash: b6a5ac9b0ef2d459003fa02766ad6f81
---
# Filter: wu_apply_signup_fee {#filter-wuapplysignupfee}

Sinusuri nito kung dapat bang ipataw o hindi ang bayad sa pagpaparehistro (signup fee).

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $add_signup_fee | `bool` | Kung dapat bang idagdag ang bayad sa pagpaparehistro. |
| $product | `object` | Object ng antas ng pagiging miyembro (Membership level). |
| $this | `\WP_Ultimo\Checkout\Cart` | Object ng pagpaparehistro (Registration object). |

### Since {#since}

- 3.1
### Source {#source}

Tinukoy sa [`inc/checkout/class-cart.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-cart.php#L1769) sa linya 1769

---
id: wu_handle_customer_meta_fields
title: செயல்பாடு - wu_handle_customer_meta_fields
sidebar_label: wu_handle_customer_meta_fields
_i18n_hash: a93030d6a7965ebed83579b198381fa8
---
# Action: wu_handle_customer_meta_fields

தேவைப்பட்டால், plugin உருவாக்குநர்கள் (developers) மெட்டா டேட்டாவை (meta data) வெவ்வேறு வழிகளில் சேமிக்க இது அனுமதிக்கிறது.

## அளவுருக்கள் (Parameters) {#parameters}

| Name | Type | விளக்கம் (Description) |
|------|------|-------------|
| $meta_repository | `array` | மெட்டா ஃபீல்ட்களின் பட்டியல், இது key => value என்ற அமைப்பில் இருக்கும். |
| $customer | `\Customer` | Ultimate Multisite வாடிக்கையாளர் ஆப்ஜெக்ட். |
| $checkout | `\Checkout` | செக்அவுட் கிளாஸ். |

### Since {#since}

- 2.0.0
### Source {#source}

Defined in [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1211) at line 1211

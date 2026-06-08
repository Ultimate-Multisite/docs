---
id: wu_domain_seller_complete_registration
title: Action - wu_domain_seller_complete_registration
sidebar_label: wu_domain_seller_complete_registration
_i18n_hash: 0bd00822989aa5b0dbda498ef5e69848
---
# Action: wu_domain_seller_complete_registration

ஒரு கட்டணம் (payment) டொமைன் பதிவு (domain registration) செய்ய வேண்டிய நிலைக்கு மாறும்போது இது செயல்படும்.

## அளவுருக்கள் (Parameters)

| Name | Type | Description |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | கட்டண பொருள் (payment object). |
| $old_status | `string` | மாற்றம் ஏற்படுவதற்கு முந்தைய கட்டண நிலை (previous payment status). |

### இருந்தே (Since)

- 2.0.0
### மூலம் (Source)

[`inc/class-domain-seller.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-seller.php#L266) என்ற கோப்பில் 266 வரியில் வரையறுக்கப்பட்டுள்ளது.

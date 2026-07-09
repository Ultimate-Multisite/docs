---
id: wu_domain_renewal_failed
title: Action - wu_domain_renewal_failed
sidebar_label: wu_domain_renewal_failed
_i18n_hash: bff3fd7903485780766e490300546070
---
# Action: wu_domain_renewal_failed {#action-wudomainrenewalfailed}

டொமைன் புதுப்பிப்பு முயற்சி தோல்வியடையும் போது இது செயல்படுத்தப்படும்.

## அளவுருக்கள் (Parameters) {#parameters}

| பெயர் (Name) | வகை (Type) | விளக்கம் (Description) |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | புதுப்பிப்பைத் தூண்டிய பணம் செலுத்தும் விவரம் (payment). |
| $renewal_data | `array&lt;string,mixed&gt;` | புதுப்பிப்பு தொடர்பான கூடுதல் தகவல்கள் (domain_name, years, போன்றவை). |
| $error_message | `string` | பதிவாளரால் (registrar) கொடுக்கப்பட்ட, மனிதர்கள் படிக்கக்கூடிய பிழைச் செய்தி. |

### எப்போது இருந்து (Since) {#since}

- 2.0.0
### மூலம் (Source) {#source}

[`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L630) என்ற கோப்பில், 630 வரியில் வரையறுக்கப்பட்டுள்ளது.

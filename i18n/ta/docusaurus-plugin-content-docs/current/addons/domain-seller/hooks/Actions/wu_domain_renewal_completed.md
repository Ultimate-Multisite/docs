---
id: wu_domain_renewal_completed
title: Action - wu_domain_renewal_completed
sidebar_label: wu_domain_renewal_completed
_i18n_hash: d4aa4ba2d3cd00aaa0ea699102a863e6
---
# Action: wu_domain_renewal_completed

ஒரு டொமைன் வெற்றிகரமாக புதுப்பிக்கப்பட்ட பிறகு இது இயங்கும்.

## அளவுருக்கள்

| பெயர் | வகை | விளக்கம் |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | புதுப்பித்தலைத் தூண்டிய கட்டணம். |
| $renewal_data | `array&lt;string,mixed&gt;` | புதுப்பித்தலின் மெட்டாடேட்டா (domain_name, years, customer_id, போன்றவை). |
| $result | `array&lt;string,mixed&gt;` | புதிய expiry_date உட்பட, பதிவாளரால் திரும்ப அனுப்பப்பட்ட மூல (raw) result array. |

### எப்போது இருந்து

- 2.0.0
### ஆதாரம்

[`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L594) என்ற இடத்தில், 594 வரியில் வரையறுக்கப்பட்டுள்ளது.

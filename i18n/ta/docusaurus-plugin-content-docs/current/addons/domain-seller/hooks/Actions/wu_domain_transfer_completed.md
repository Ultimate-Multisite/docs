---
id: wu_domain_transfer_completed
title: செயல்பாடு - wu_domain_transfer_completed
sidebar_label: wu_domain_transfer_completed
_i18n_hash: e50e8bb82f31cdf65af114919b65343a
---
# Action: wu_domain_transfer_completed

டொமைன் மாற்றுதல் (domain transfer) செயல்முறை முடிந்த பிறகு இது இயங்கும்.

## அளவுருக்கள் (Parameters)

| பெயர் (Name) | வகை (Type) | விளக்கம் (Description) |
|------|------|-------------|
| $domain | `\WP_Ultimo\Models\Domain` | டொமைன் பொருள் (domain object). |
| $transfer_data | `array` | மாற்றுதல் முடிந்ததற்கான தரவு (Transfer completion data). |

### எப்போது (Since)

- 2.1.0
### மூலம் (Source)

[`inc/class-domain-transfer-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-transfer-manager.php#L690) என்ற கோப்பின் 690 வரியில் வரையறுக்கப்பட்டுள்ளது.

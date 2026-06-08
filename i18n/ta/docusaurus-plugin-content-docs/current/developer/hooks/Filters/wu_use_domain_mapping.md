---
id: wu_use_domain_mapping
title: ஃபில்டர் - wu_use_domain_mapping
sidebar_label: wu_use_domain_mapping
_i18n_hash: 34f9d3e6a6d1b98dd72cf5c21250b6e7
---
# Filter: wu_use_domain_mapping

ஒரு வரைபடத்தைப் பயன்படுத்த வேண்டுமா என்பதைத் தீர்மானிக்கிறது

பொதுவாக, செயலில் உள்ள வரைபடங்களை மட்டுமே பயன்படுத்த அனுமதிக்க வேண்டும் என்று நீங்கள் விரும்புவீர்கள். இருப்பினும், நீங்கள் மிகவும் மேம்பட்ட தர்க்கத்தைப் பயன்படுத்த விரும்பினால், அல்லது செயலிழக்காத டொமைன்களையும் வரைபடமாக்க அனுமதிக்க விரும்பினால், நீங்கள் இங்கே வடிகட்டலாம் (filter).

## அளவுருக்கள் (Parameters)

| Name | Type | Description |
|------|------|-------------|
| $is_active | `bool` | இந்த வரைபடத்தை செயலில் உள்ளதாகக் கருத வேண்டுமா? |
| $mapping | `\Domain` | நாம் ஆய்வு செய்யும் வரைபடம் (Mapping) |
| $domain | `string` |  |

### மூலம் (Source)

[`inc/class-domain-mapping.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-domain-mapping.php#L391) என்ற கோப்பில் 391 வரியில் வரையறுக்கப்பட்டுள்ளது.

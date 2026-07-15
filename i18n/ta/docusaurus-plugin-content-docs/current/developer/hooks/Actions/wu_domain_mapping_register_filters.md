---
id: wu_domain_mapping_register_filters
title: wu_domain_mapping_register_filters
sidebar_label: wu_domain_mapping_register_filters
_i18n_hash: 835b5df60eb33048fe4159fb4243176c
---
# Action: wu_domain_mapping_register_filters

சில பிளக்இன்கள், மேப்பிங் செயல்படத் தொடங்குவதற்கு முன்பே URL-களை சேமித்திருக்கலாம் அல்லது மேலே உள்ள ஃபில்டர்களில் சேர்க்கப்படாத வேறு விதத்தில் URL-களை உருவாக்கலாம்.

அத்தகைய சூழ்நிலைகளில், நாம் கூடுதல் ஃபில்டர்களைச் சேர்க்க விரும்புகிறோம். அனுப்பப்படும் இரண்டாவது அளவுருதான் `mangle_url` கால்பேக் ஆகும். இந்த ஃபில்டரைப் பயன்படுத்துவதைத் தவிர்க்குமாறு நாங்கள் பரிந்துரைக்கிறோம். அதற்கு பதிலாக, `Domain_Mapping::apply_mapping_to_url` என்ற முறையைப் பயன்படுத்துங்கள்.

## அளவுருக்கள் (Parameters) {#parameters}

| பெயர் (Name) | வகை (Type) | விளக்கம் (Description) |
|------|------|-------------|
| $mangle_url | `callable` | மேங்கிள் செய்யக்கூடிய கால்பேக் (The mangle callable). |
| $domain_mapper | `self` | இந்த ஆப்ஜெக்ட் (This object). |

### இருந்ததிலிருந்து (Since) {#since}

- 2.0.0
### மூலம் (Source) {#source}

[`inc/class-domain-mapping.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-domain-mapping.php#L530) என்ற கோப்பில் 530 வரியில் வரையறுக்கப்பட்டுள்ளது.

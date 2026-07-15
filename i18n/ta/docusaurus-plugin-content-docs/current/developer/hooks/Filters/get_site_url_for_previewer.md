---
id: get_site_url_for_previewer
title: வடிகட்டி - get_site_url_for_previewer
sidebar_label: get_site_url_for_previewer
_i18n_hash: ab1a6ae3abce3498fa9cf4f5ee98d91d
---
# Filter: get_site_url_for_previewer

ப்ளக்இன் உருவாக்குநர்கள் (plugin developers) ப்ரீவியூவரில் (previewer) பயன்படுத்தப்படும் URL-ஐ வடிகட்ட (filter) இது அனுமதிக்கிறது.

## அளவுருக்கள் {#parameters}

| Name | Type | விளக்கம் |
|------|------|-------------|
| $domain | `string` | தற்போது பயன்படுத்தப்படும் இயல்புநிலை டொமைன். இது மாற்றங்களுக்கு (manipulations) பயனுள்ளதாக இருக்கும். |
| $domain_options | `array` | Ultimate Multisite Settings -> Network Settings -> Domain Options-ல் உள்ள அனைத்து டொமைன் விருப்பங்களின் பட்டியலாகும். |

### எப்போது இருந்து {#since}

- 1.7.2
### மூலம் {#source}

[`inc/checkout/class-legacy-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-legacy-checkout.php#L812) இல் 812 வரியில் வரையறுக்கப்பட்டுள்ளது

## திரும்ப அளிப்பது {#returns}
பயன்படுத்தப்பட வேண்டிய புதிய டொமைன்.

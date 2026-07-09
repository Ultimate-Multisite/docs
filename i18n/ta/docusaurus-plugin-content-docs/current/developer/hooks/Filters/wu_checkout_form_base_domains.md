---
id: wu_checkout_form_base_domains
title: வடிகட்டி - wu_checkout_form_base_domains
sidebar_label: wu_checkout_form_base_domains
_i18n_hash: 49dcc3fe0fa685304a70aeb9424749fd
---
# வடிகட்டி: wu_checkout_form_base_domains {#filter-wucheckoutformbasedomains}

பகிரப்பட்ட checkout-form அடிப்படை டொமைன்கள் mapped-domain பதிவுகளாக மாறாமல் இருக்க அவற்றை வடிகட்டுகிறது.

ஒரு ஒருங்கிணைப்பு checkout form **தள URL** புலங்களுக்கு கூடுதல் அடிப்படை டொமைன்களை வழங்கும்போது இந்த வடிகட்டியைப் பயன்படுத்தவும். இந்த வடிகட்டி திருப்பித் தரும் டொமைன்கள் ஒவ்வொரு தளத்திற்குமான தனிப்பயன் டொமைன்களாக அல்லாமல், பகிரப்பட்ட பதிவு ஹோஸ்ட்களாகக் கருதப்படும்.

## அளவுருக்கள் {#parameters}

| பெயர் | வகை | விளக்கம் |
|------|------|-------------|
| $domains | `array` | checkout form அமைப்பிலிருந்து சேகரிக்கப்பட்ட பகிரப்பட்ட அடிப்படை டொமைன்கள். |

### முதல் கிடைக்கும் பதிப்பு {#since}

- 2.13.0

### மூலம் {#source}

`inc/functions/domain.php` இல் வரையறுக்கப்பட்டது.


## திருப்பித் தருவது {#returns}

இயல்பாக்கப்பட்ட checkout-form அடிப்படை டொமைன்களின் array.

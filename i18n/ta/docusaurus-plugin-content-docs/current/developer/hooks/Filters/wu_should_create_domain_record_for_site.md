---
id: wu_should_create_domain_record_for_site
title: வடிகட்டி - wu_should_create_domain_record_for_site
sidebar_label: wu_should_create_domain_record_for_site
_i18n_hash: d97b52f157228e570818c153e96a609c
---
# வடிகட்டி: wu_should_create_domain_record_for_site {#filter-wushouldcreatedomainrecordforsite}

புதிதாக உருவாக்கப்பட்ட தளத்திற்காக Ultimate Multisite ஒரு டொமைன் பதிவை உருவாக்க வேண்டுமா என்பதை வடிகட்டுகிறது.

பகிரப்பட்ட செக் அவுட் படிவ அடிப்படை டொமைன், உள் ஹோஸ்ட், அல்லது வேறு ஒருங்கிணைப்பு தனியாக நிர்வகிக்கப் போகும் டொமைன் பயன்படுத்தும் தளங்களுக்கு தானியங்கி டொமைன்-பதிவு உருவாக்கத்தைத் தடுக்க அல்லது ஒத்திவைக்க இந்த வடிகட்டியைப் பயன்படுத்தவும்.

## அளவுருக்கள் {#parameters}

| பெயர் | வகை | விளக்கம் |
|------|------|-------------|
| $create | `bool` | டொமைன் பதிவு உருவாக்கப்பட வேண்டுமா. |
| $site | `WP_Site` | புதிதாக உருவாக்கப்பட்ட தளப் பொருள். |

### முதல் {#since}

- 2.13.0

### மூலம் {#source}

`inc/functions/domain.php` இல் வரையறுக்கப்பட்டது.


## திருப்புகிறது {#returns}

டொமைன் பதிவை உருவாக்க வேண்டுமா என்பதைக் குறிக்கும் பூலியன்.

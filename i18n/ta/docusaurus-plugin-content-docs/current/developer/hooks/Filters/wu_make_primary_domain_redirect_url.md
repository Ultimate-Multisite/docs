---
id: wu_make_primary_domain_redirect_url
title: Filter - wu_make_primary_domain_redirect_url
sidebar_label: wu_make_primary_domain_redirect_url
_i18n_hash: bda96824db400b25e97802e5567df22d
---
# Filter: wu_make_primary_domain_redirect_url

ஒரு டொமைனை பிரைமரி (primary) ஆக்கிய பிறகு வரும் ரீடைரக்ட் URL-ஐ இது மாற்றியமைக்கிறது (filter செய்கிறது).

ஒரு டொமைனை வெற்றிகரமாக பிரைமரி ஆக்கிய பிறகு, பயனர்கள் எங்கு ரீடைரக்ட் செய்யப்பட வேண்டும் என்பதை டெவலப்பர்கள் தனிப்பயனாக்க (customize) இது அனுமதிக்கிறது. இயல்பாக (default), இது பிரதான தளத்தின் (main site) தற்போதைய URL-க்கு அல்லது மாற்றியமைக்கப்படும் தளத்தின் நிர்வாகி (admin) URL-க்கு ரீடைரக்ட் செய்யும்.

## அளவுருக்கள் (Parameters)

| Name | Type | விளக்கம் |
|------|------|-------------|
| $redirect_url | `string` | இயல்புநிலை ரீடைரக்ட் URL. இது தற்போதைய URL-ஆவாக (பிரதான தளம் என்றால்) அல்லது தற்போதைய தளத்தின் நிர்வாகி URL-ஆவாக இருக்கும். |
| $current_site | `int` | பிரைமரி ஆக்கப்படும் டொமைன் உள்ள தளத்தின் ID. |
| $domain | `\Domain` | பிரைமரி ஆக்கப்பட்ட டொமைன் ஆப்ஜெக்ட். |
| $old_primary_domains | `array` | முன்பு பிரைமரி ஆக்கப்பட்ட டொமைன்களின் ID-களின் வரிசை (Array). |

### எப்போது இருந்து (Since)

- 2.0.0
### ஆதாரம் (Source)

Defined in [`inc/ui/class-domain-mapping-element.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/ui/class-domain-mapping-element.php#L639) at line 639


## திரும்ப அளிப்பது (Returns)
மாற்றியமைக்கப்பட்ட (filtered) ரீடைரக்ட் URL.

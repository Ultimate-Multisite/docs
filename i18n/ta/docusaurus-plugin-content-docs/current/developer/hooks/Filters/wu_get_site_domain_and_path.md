---
id: wu_get_site_domain_and_path
title: Filter - wu_get_site_domain_and_path
sidebar_label: wu_get_site_domain_and_path
_i18n_hash: 86384a14182db584d1b69aec8790ed07
---
# Filter: wu_get_site_domain_and_path {#filter-wugetsitedomainandpath}

டெவலப்பர்கள் டொமைன்/பாதை (domain/path) ஜோடிகளை மாற்றியமைக்க இது அனுமதிக்கிறது.

இது ஸ்டேஜிங் தீர்வு (staging solution) செயல்படுத்துவது, வெவ்வேறு சர்வர்கள் பயன்படுத்துவது போன்ற பல விஷயங்களுக்குப் பயனுள்ளதாக இருக்கும்.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $d | `object` | டொமைன் மற்றும் பாதை (path) விசைகளைக் கொண்ட தற்போதைய ஆப்ஜெக்ட். |
| $path_or_subdomain | `string` | செயல்பாட்டிற்கு அனுப்பப்பட்ட அசல் பாதை/சப்-டொமைன். |

### Since {#since}

- 2.0.0
### Source {#source}

Defined in [`inc/functions/site.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/site.php#L235) at line 235


## Returns {#returns}
டொமைன் மற்றும் பாதை விசைகளைக் கொண்ட ஒரு ஆப்ஜெக்ட்.

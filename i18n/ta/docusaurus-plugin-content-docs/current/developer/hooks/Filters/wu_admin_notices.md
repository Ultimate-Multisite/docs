---
id: wu_admin_notices
title: Filter - wu_admin_notices
sidebar_label: wu_admin_notices
_i18n_hash: b98d294d75277dfcfd941ca0e573e10c
---
# Filter: wu_admin_notices

Ultimate Multisite மூலம் சேர்க்கப்படும் நிர்வாக அறிவிப்புகளை (admin notices) வடிகட்ட டெவலப்பர்களுக்கு இது அனுமதிக்கிறது.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $notices | `array` | அந்த குறிப்பிட்ட பேனலுக்கான அறிவிப்புகளின் பட்டியல். |
| $all_notices | `array` | அறிவிப்புகள், பேனல் வாரியாகப் பிரிக்கப்பட்டு உள்ள பட்டியல். |
| $panel | `string` | அறிவிப்புகளைப் பெற வேண்டிய பேனல். |
| $filter | `string` | நீக்கக்கூடிய அறிவிப்புகள் வடிகட்டப்பட்டதா இல்லையா என்பதைக் குறிக்கும். |
| $dismissed_messages | `array` | நீக்கப்பட்ட அறிவிப்புகளின் (notice keys) பட்டியல். |

### Since {#since}

- 2.0.0
### Source {#source}

[`inc/class-admin-notices.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-admin-notices.php#L121) என்ற கோப்பில், 121 வரியில் வரையறுக்கப்பட்டுள்ளது.

## Returns {#returns}

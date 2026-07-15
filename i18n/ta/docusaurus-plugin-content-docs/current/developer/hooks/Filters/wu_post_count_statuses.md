---
id: wu_post_count_statuses
title: Filter - wu_post_count_statuses
sidebar_label: wu_post_count_statuses
_i18n_hash: 663f78e3da3805371e6ab96edef64285
---
# Filter: wu_post_count_statuses

பிளக்இன் உருவாக்குநர்கள் எந்தெந்த பதிவின் நிலைகளை (post status) கணக்கிட வேண்டும் என்பதை மாற்ற இது அனுமதிக்கிறது. இயல்பாகவே, 'published' மற்றும் 'private' என்ற நிலைகளுடைய பதிவுகள் கணக்கிடப்படும்.

## அளவுருக்கள் (Parameters) {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $post_status | `array` | பதிவின் நிலைகளின் பட்டியல் (The list of post statuses) |
| $post_type | `string` | பதிவின் வகை ஸ்லக் (The post type slug) |

### Since {#since}

- 1.9.1
### Source {#source}

[`inc/limitations/class-limit-post-types.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limitations/class-limit-post-types.php#L119) என்ற கோப்பில், 119 வரியில் வரையறுக்கப்பட்டுள்ளது.

## திரும்ப அளிப்பது (Returns) {#returns}
புதிய பதிவின் நிலைகளின் பட்டியல் (New array of post status)

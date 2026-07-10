---
id: wu_magic_link_enforce_ip
title: Filter - wu_magic_link_enforce_ip
sidebar_label: wu_magic_link_enforce_ip
_i18n_hash: b785314a6a2d9ea45d3beab38baa58fe
---
# Filter: wu_magic_link_enforce_ip {#filter-wumagiclinkenforceip}

IP முகவரி சரிபார்ப்பை கட்டாயமாக்க வேண்டுமா என்பதை ஃபில்டர் செய்கிறது.

இதை `false` என்று அமைத்தால், டோக்கன்கள் வெவ்வேறு நெட்வொர்க்குகளில் வேலை செய்ய அனுமதிக்கப்படும். இது பாதுகாப்பைக் குறைத்தாலும், பயன்பாட்டை அதிகரிக்கும் (உதாரணமாக, நெட்வொர்க்குகளை மாற்றும் மொபைல் பயனர்களுக்கு).

## அளவுருக்கள் (Parameters) {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $enforce | `bool` | IP முகவரி பொருத்தத்தை கட்டாயமாக்க வேண்டுமா. |

### இருந்தே (Since) {#since}

- 2.0.0
### மூலம் (Source) {#source}

[`inc/sso/class-magic-link.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-magic-link.php#L422) என்ற கோப்பில் 422 வரியில் வரையறுக்கப்பட்டுள்ளது.

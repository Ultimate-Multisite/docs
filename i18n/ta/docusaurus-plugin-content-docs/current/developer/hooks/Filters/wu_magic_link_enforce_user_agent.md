---
id: wu_magic_link_enforce_user_agent
title: Filter - wu_magic_link_enforce_user_agent
sidebar_label: wu_magic_link_enforce_user_agent
_i18n_hash: 33252b9660851a8fe51ff7ed586d9cf2
---
# Filter: wu_magic_link_enforce_user_agent {#filter-wumagiclinkenforceuseragent}

பயனர் முகவர் (user agent) சரிபார்ப்பை செயல்படுத்த வேண்டுமா என்பதை வடிகட்டுகிறது.

இதை `false` என்று அமைத்தால், டோக்கன்கள் வெவ்வேறு உலாவிகள்/சாதனங்களில் வேலை செய்ய அனுமதிக்கப்படும். இது பாதுகாப்பைக் குறைக்கும், ஆனால் பயன்பாட்டின் எளிமையை (usability) அதிகரிக்கும்.

## அளவுருக்கள் {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $enforce | `bool` | பயனர் முகவர் பொருத்தத்தை (user agent matching) செயல்படுத்த வேண்டுமா. |

### எப்போது இருந்து {#since}

- 2.0.0
### ஆதாரம் {#source}

[`inc/sso/class-magic-link.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-magic-link.php#L410) என்ற கோப்பில் 410 வரியில் வரையறுக்கப்பட்டுள்ளது.

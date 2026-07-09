---
id: wu_bypass_unset_current_user
title: Filter - wu_bypass_unset_current_user
sidebar_label: wu_bypass_unset_current_user
_i18n_hash: fc4c248df410793da1754944250d8b11
---
# Filter: wu_bypass_unset_current_user {#filter-wubypassunsetcurrentuser}

தற்போதைய பயனரை நீக்குவதற்கான (unset) குறியீட்டைத் தவிர்க்க (bypass) டெவலப்பர்களுக்கு இது அனுமதிக்கிறது.

`null` தவிர வேறு எதையாவது திருப்பி அனுப்பினால், உள்நுழைந்துள்ள தற்போதைய பயனரை நீக்குவது தவிர்க்கப்படும். இது சில சூழ்நிலைகளில் பயனுள்ளதாக இருக்கும், உதாரணமாக, நிர்வாகப் பலகங்களாகப் பயன்படுத்தப்படும் துணை தளங்களைக் (sub-sites) கையாளும் போது.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $null_or_bypass | `mixed` | தொடர `null` தேவை, இல்லையெனில் இதைத் தவிர்க்க (bypass) வேறு எதையும் அனுப்பலாம். |
| $current_user | `false\|\WP_User` | தற்போதைய பயனர் பொருள் (user object). |

### Since {#since}

- 2.0.11
### Source {#source}

[`inc/compat/class-multiple-accounts-compat.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/compat/class-multiple-accounts-compat.php#L221) என்ற கோப்பில் 221 வரியில் வரையறுக்கப்பட்டுள்ளது.

## Returns {#returns}

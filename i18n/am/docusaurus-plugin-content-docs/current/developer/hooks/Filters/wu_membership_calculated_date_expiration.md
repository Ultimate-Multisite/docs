---
id: wu_membership_calculated_date_expiration
title: ማጣሪያ - wu_membership_calculated_date_expiration
sidebar_label: wu_membership_calculated_date_expiration
_i18n_hash: 92e1113e33a3b69e4fc3d07d6dcd8d69
---
# Filter: wu_membership_calculated_date_expiration {#filter-wumembershipcalculateddateexpiration}

የተሰላውን የየጊዜ መቋረጥ ቀን (expiration date) የሚያጣራ ነው።

## መለኪያዎች {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $expiration | `string` | በMySQL ቅርጸት የተሰላ የየጊዜ መቋረጥ ቀን። |
| $membership_id | `int` | የየተቋረጠው የልዩነት (membership) መለያ ቁጥር (ID)። |
| $membership | `\WP_Ultimo\Models\Membership` | የልዩነት (membership) ኦብጀክት። |

### ከ {#since}

- 2.0
### ምንጭ {#source}

በ[`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L1309) ላይ በ1309ኛው መስመር ተገልጿል።

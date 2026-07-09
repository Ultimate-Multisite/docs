---
id: retrieve_password_title
title: Filter - retrieve_password_title
sidebar_label: retrieve_password_title
_i18n_hash: 7fcf454c64361885b8f64cc6fbc9ba93
---
# Filter: retrieve_password_title {#filter-retrievepasswordtitle}

கடவுச்சொல் மீட்டமைப்பு மின்னஞ்சலின் தலைப்பை (subject) இது வடிகட்டுகிறது.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $title | `string` | இயல்புநிலை மின்னஞ்சல் தலைப்பு. |
| $user_login | `string` | பயனருக்கான பயனர் பெயர். |
| $user_data | `\WP_User` | WP_User ஆப்ஜெக்ட். |

### Since {#since}

- 2.8.0
- 4.4.0: <code>$user_login</code> மற்றும் <code>$user_data</code> அளவுருக்கள் சேர்க்கப்பட்டது.
### Source {#source}

[`inc/mu-migration/includes/commands/class-mu-migration-users.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-users.php#L135) இல் 135 வரியில் வரையறுக்கப்பட்டுள்ளது.

## Returns {#returns}
இயல்புநிலை மின்னஞ்சல் தலைப்பு.

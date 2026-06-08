---
id: retrieve_password_message
title: வடிகட்டி - retrieve_password_message
sidebar_label: retrieve_password_message
_i18n_hash: c1e9fbd9909dd93e70f291de55ba00e4
---
# Filter: retrieve_password_message

கடவுச்சொல் மீட்டமைக்கப்பட்ட மின்னஞ்சலின் செய்தி உள்ளடக்கத்தை (message body) மாற்றியமைக்கப் பயன்படுகிறது.

## அளவுருக்கள் (Parameters)

| Name | Type | Description |
|------|------|-------------|
| $message | `string` | இயல்புநிலை மின்னஞ்சல் செய்தி. |
| $key | `string` | செயல்படுத்தும் (activation) திறவுகோல். |
| $user_login | `string` | பயனரின் பயனர் பெயர் (username). |
| $user_data | `\WP_User` | WP_User ஆப்ஜெக்ட். |

### எப்போது இருந்து (Since)

- 2.8.0
- 4.1.0: <code>$user_login</code> மற்றும் <code>$user_data</code> அளவுருக்கள் சேர்க்கப்பட்டது.
### ஆதாரம் (Source)

இது [`inc/mu-migration/includes/commands/class-mu-migration-users.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-users.php#L149) என்ற கோப்பில் 149 வரியில் வரையறுக்கப்பட்டுள்ளது.


## திரும்ப அளிப்பது (Returns)
இயல்புநிலை மின்னஞ்சல் செய்தி.

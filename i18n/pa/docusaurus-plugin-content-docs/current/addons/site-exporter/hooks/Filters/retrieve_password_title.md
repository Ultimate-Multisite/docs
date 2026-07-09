---
id: retrieve_password_title
title: Filter - retrieve_password_title
sidebar_label: retrieve_password_title
_i18n_hash: 7fcf454c64361885b8f64cc6fbc9ba93
---
# Filter: retrieve_password_title {#filter-retrievepasswordtitle}

ਇਹ ਪਾਸਵਰਡ ਰੀਸੈਟ (password reset) ਈਮੇਲ ਦੇ ਸਬਜੈਕਟ (subject) ਨੂੰ ਫਿਲਟਰ ਕਰਦਾ ਹੈ।

## ਪੈਰਾਮੀਟਰ (Parameters) {#parameters}

| ਨਾਮ | ਕਿਸਮ | ਵਰਣਨ |
|------|------|-------------|
| $title | `string` | ਡਿਫਾਲਟ ਈਮੇਲ ਸਬਜੈਕਟ। |
| $user_login | `string` | ਯੂਜ਼ਰ ਦਾ ਨਾਮ (username)। |
| $user_data | `\WP_User` | WP_User ਆਬਜੈਕਟ। |

### ਕਦੋਂ ਤੋਂ (Since) {#since}

- 2.8.0
- 4.4.0: <code>$user_login</code> ਅਤੇ <code>$user_data</code> ਪੈਰਾਮੀਟਰ ਜੋੜੇ ਗਏ।
### ਸਰੋਤ (Source) {#source}

ਇਹ [`inc/mu-migration/includes/commands/class-mu-migration-users.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-users.php#L135) ਵਿੱਚ ਲਾਈਨ 135 'ਤੇ ਪਰਿਭਾਸ਼ਿਤ ਕੀਤਾ ਗਿਆ ਹੈ।


## ਵਾਪਸ ਕਰਦਾ ਹੈ (Returns) {#returns}
ਡਿਫਾਲਟ ਈਮੇਲ ਸਬਜੈਕਟ।

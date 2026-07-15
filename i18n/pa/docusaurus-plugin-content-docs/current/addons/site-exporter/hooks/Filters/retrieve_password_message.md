---
id: retrieve_password_message
title: Filter - retrieve_password_message
sidebar_label: retrieve_password_message
_i18n_hash: c1e9fbd9909dd93e70f291de55ba00e4
---
# Filter: retrieve_password_message

ਪਾਸਵਰਡ ਰੀਸੈਟ ਮੇਲ ਦੇ ਸੰਦੇਸ਼ ਦੇ ਮਾਸੇ (message body) ਨੂੰ ਫਿਲਟਰ ਕਰਦਾ ਹੈ।

## ਪੈਰਾਮੀਟਰ (Parameters) {#parameters}

| Name | Type | ਵਰਣਨ (Description) |
|------|------|-------------|
| $message | `string` | ਡਿਫਾਲਟ ਮੇਲ ਸੰਦੇਸ਼। |
| $key | `string` | ਐਕਟੀਵੇਸ਼ਨ ਕੀ (activation key)। |
| $user_login | `string` | ਯੂਜ਼ਰ ਦਾ ਨਾਮ (username)। |
| $user_data | `\WP_User` | WP_User object। |

### ਕਦੋਂ ਤੋਂ (Since) {#since}

- 2.8.0
- 4.1.0: <code>$user_login</code> ਅਤੇ <code>$user_data</code> ਪੈਰਾਮੀਟਰ ਜੋੜੇ ਗਏ।
### ਸਰੋਤ (Source) {#source}

[`inc/mu-migration/includes/commands/class-mu-migration-users.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-users.php#L149) ਵਿੱਚ ਲਾਈਨ 149 'ਤੇ ਪਰਿਭਾਸ਼ਿਤ ਹੈ।


## ਵਾਪਸ ਕਰਦਾ ਹੈ (Returns) {#returns}
ਡਿਫਾਲਟ ਮੇਲ ਸੰਦੇਸ਼।

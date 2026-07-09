---
id: retrieve_password_message
title: ଫିଲ୍ଟର - retrieve_password_message
sidebar_label: retrieve_password_message
_i18n_hash: c1e9fbd9909dd93e70f291de55ba00e4
---
# ଫିଲ୍ଟର: retrieve_password_message {#filter-retrievepasswordmessage}

ପାସୱାର୍ଡ ପୁନଃସେଟ୍ ମେଲ୍‌ର ସନ୍ଦେଶ ଅଂଶକୁ ଫିଲ୍ଟର କରେ।

## ପାରାମିଟର୍ {#parameters}

| ନାମ | ପ୍ରକାର | ବର୍ଣ୍ଣନା |
|------|------|-------------|
| $message | `string` | ପୂର୍ବନିର୍ଦ୍ଧାରିତ ମେଲ୍ ସନ୍ଦେଶ। |
| $key | `string` | ସକ୍ରିୟକରଣ କୀ। |
| $user_login | `string` | ବ୍ୟବହାରକାରୀଙ୍କ ପାଇଁ ବ୍ୟବହାରକାରୀନାମ। |
| $user_data | `\WP_User` | WP_User ଅବଜେକ୍ଟ। |

### ଠାରୁ {#since}

- 2.8.0
- 4.1.0: Added <code>$user_login</code> and <code>$user_data</code> parameters.
### ଉତ୍ସ {#source}

[`inc/mu-migration/includes/commands/class-mu-migration-users.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-users.php#L149) ରେ ୧୪୯ ନମ୍ବର ଧାଡ଼ିରେ ପରିଭାଷିତ


## ଫେରାଏ {#returns}
ପୂର୍ବନିର୍ଦ୍ଧାରିତ ମେଲ୍ ସନ୍ଦେଶ।

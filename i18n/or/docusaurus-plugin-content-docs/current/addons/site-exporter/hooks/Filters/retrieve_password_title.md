---
id: retrieve_password_title
title: ଫିଲ୍ଟର - retrieve_password_title
sidebar_label: retrieve_password_title
_i18n_hash: 7fcf454c64361885b8f64cc6fbc9ba93
---
# ଛାଣକ: retrieve_password_title

ପାସୱାର୍ଡ୍ ପୁନଃସେଟ୍ ଇମେଲ୍‌ର ବିଷୟକୁ ଛାଣେ।

## ପାରାମିଟରଗୁଡ଼ିକ {#parameters}

| ନାମ | ପ୍ରକାର | ବର୍ଣ୍ଣନା |
|------|------|-------------|
| $title | `string` | ଡିଫଲ୍ଟ ଇମେଲ୍ ଶୀର୍ଷକ। |
| $user_login | `string` | ବ୍ୟବହାରକାରୀଙ୍କ ପାଇଁ ଉପଯୋଗକାରୀନାମ। |
| $user_data | `\WP_User` | WP_User ଅବଜେକ୍ଟ। |

### ଠାରୁ {#since}

- 2.8.0
- 4.4.0: Added the <code>$user_login</code> and <code>$user_data</code> parameters.
### ଉତ୍ସ {#source}

[`inc/mu-migration/includes/commands/class-mu-migration-users.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-users.php#L135) ରେ 135 ଧାଡ଼ିରେ ପରିଭାଷିତ


## ଫେରାଏ {#returns}
ଡିଫଲ୍ଟ ଇମେଲ୍ ଶୀର୍ଷକ।

---
id: retrieve_password_title
title: ছাঁকা - retrieve_password_title
sidebar_label: retrieve_password_title
_i18n_hash: 7fcf454c64361885b8f64cc6fbc9ba93
---
# Filter: retrieve_password_title

এই ফিল্টাৰে পাছৱৰ্ড রিসেট ইমেইলৰ বিষয়বস্তু (subject) ফিল্টাৰ কৰে।

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $title | `string` | ডিফল্ট ইমেইলৰ শিৰোনাম। |
| $user_login | `string` | ব্যৱমকাৰীৰ (user) নাম। |
| $user_data | `\WP_User` | WP_User object। |

### Since {#since}

- 2.8.0
- 4.4.0: <code>$user_login</code> আৰু <code>$user_data</code> পৰামিটার যোগ কৰা হৈছে।
### Source {#source}

[`inc/mu-migration/includes/commands/class-mu-migration-users.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-users.php#L135) ফাইলৰ ১৩৫ নং শাৰীত সংজ্ঞায়িত কৰা হৈছে।


## Returns {#returns}
ডিফল্ট ইমেইল শিৰোনাম।

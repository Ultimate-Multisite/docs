---
id: retrieve_password_title
title: Filter - retrieve_password_title
sidebar_label: retrieve_password_title
_i18n_hash: 7fcf454c64361885b8f64cc6fbc9ba93
---
# Filter: retrieve_password_title

এটি পাসওয়ার্ড রিসেট ইমেলের বিষয়বস্তু (subject) ফিল্টার করে।

## প্যারামিটার (Parameters)

| নাম (Name) | ধরন (Type) | বিবরণ (Description) |
|------|------|-------------|
| $title | `string` | ডিফল্ট ইমেল শিরোনাম। |
| $user_login | `string` | ব্যবহারকারীর ইউজারনেম। |
| $user_data | `\WP_User` | WP_User অবজেক্ট। |

### শুরু (Since)

- 2.8.0
- 4.4.0: <code>$user_login</code> এবং <code>$user_data</code> প্যারামিটার যোগ করা হয়েছে।
### উৎস (Source)

[`inc/mu-migration/includes/commands/class-mu-migration-users.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-users.php#L135)-এর লাইন ১৩৫ এ সংজ্ঞায়িত।

## রিটার্ন করে (Returns)
ডিফল্ট ইমেল শিরোনাম।

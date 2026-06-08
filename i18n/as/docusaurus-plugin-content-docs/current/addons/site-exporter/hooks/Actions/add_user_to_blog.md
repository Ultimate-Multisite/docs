---
id: add_user_to_blog
title: Action - add_user_to_blog
sidebar_label: add_user_to_blog
_i18n_hash: ac7b281fe49bfc7d858869b1a24e9ae3
---
# Action: add_user_to_blog

কোনো ব্যৱমকাৰীজনক (user) এটা স্থানত (site) যোগ কৰাৰ ঠিক পিছতে এই কাৰ্যটো (Action) কাৰ্যকৰী হয়।

## পৰামাপৰিমান (Parameters)

| Name | Type | Description |
|------|------|-------------|
| $user_id | `int` | ব্যৱমকাৰী আইডি (User ID)। |
| $role | `string` | ব্যৱমকাৰীৰ ভূমিকা (User role)। |
| $blog_id | `int` | ব্লগ আইডি (Blog ID)। |

### কিমান সময়ৰ পৰা (Since)

- MU: MU
### উৎস (Source)

[`inc/mu-migration/includes/helpers.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/helpers.php#L174) ফাইলৰ ১৭৪ নং শাৰীত সংজ্ঞায়িত কৰা হৈছে।

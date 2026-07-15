---
id: add_user_to_blog
title: Action - add_user_to_blog
sidebar_label: add_user_to_blog
_i18n_hash: ac7b281fe49bfc7d858869b1a24e9ae3
---
# Action: add_user_to_blog

যখন কোনো ব্যবহারকারীকে একটি সাইটে যোগ করা হয়, তার ঠিক পরেই এই অ্যাকশনটি কার্যকর হয়।

## প্যারামিটার {#parameters}

| নাম | ধরন | বিবরণ |
|------|------|-------------|
| $user_id | `int` | ব্যবহারকারী আইডি। |
| $role | `string` | ব্যবহারকারীর ভূমিকা (রোল)। |
| $blog_id | `int` | ব্লগ আইডি। |

### যেহেতু {#since}

- MU: MU
### উৎস {#source}

[`inc/mu-migration/includes/helpers.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/helpers.php#L174)-এ লাইন ১৭৪-এ সংজ্ঞায়িত।

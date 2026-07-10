---
id: add_user_to_blog
title: Action - add_user_to_blog
sidebar_label: add_user_to_blog
_i18n_hash: ac7b281fe49bfc7d858869b1a24e9ae3
---
# Action: add_user_to_blog {#action-addusertoblog}

यह एक्शन तब तुरंत ट्रिगर होता है जब किसी यूजर को किसी साइट में जोड़ा जाता है।

## पैरामीटर्स (Parameters) {#parameters}

| नाम (Name) | प्रकार (Type) | विवरण (Description) |
|------|------|-------------|
| $user_id | `int` | यूजर की आईडी। |
| $role | `string` | यूजर की भूमिका (role)। |
| $blog_id | `int` | ब्लॉग की आईडी। |

### कब से उपलब्ध (Since) {#since}

- MU: MU
### स्रोत (Source) {#source}

[`inc/mu-migration/includes/helpers.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/helpers.php#L174) में लाइन 174 पर परिभाषित।

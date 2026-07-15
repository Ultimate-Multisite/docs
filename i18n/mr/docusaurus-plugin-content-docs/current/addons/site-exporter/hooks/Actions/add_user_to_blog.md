---
id: add_user_to_blog
title: Action - add_user_to_blog
sidebar_label: add_user_to_blog
_i18n_hash: ac7b281fe49bfc7d858869b1a24e9ae3
---
# Action: add_user_to_blog

जेव्हा एखाद्या वापरकर्त्याला (user) साईटमध्ये जोडले जाते, तेव्हा हे लगेच कार्यान्वित होते.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $user_id | `int` | वापरकर्ता आयडी (User ID). |
| $role | `string` | वापरकर्ता भूमिका (User role). |
| $blog_id | `int` | ब्लॉग आयडी (Blog ID). |

### Since {#since}

- MU: MU
### Source {#source}

[`inc/mu-migration/includes/helpers.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/helpers.php#L174) मध्ये लाइन १७४ वर परिभाषित केले आहे.

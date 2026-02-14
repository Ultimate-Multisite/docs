---
id: add_user_to_blog
title: الإجراء - add_user_to_blog
sidebar_label: add_user_to_blog
_i18n_hash: ac7b281fe49bfc7d858869b1a24e9ae3
---
# Action: add_user_to_blog

يتم إطلاقه فور إضافة مستخدم إلى موقع.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $user_id | `int` | معرف المستخدم. |
| $role | `string` | دور المستخدم. |
| $blog_id | `int` | معرف المدونة. |

### Since

- MU: MU

### Source

Defined in [`inc/mu-migration/includes/helpers.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/helpers.php#L174) at line 174

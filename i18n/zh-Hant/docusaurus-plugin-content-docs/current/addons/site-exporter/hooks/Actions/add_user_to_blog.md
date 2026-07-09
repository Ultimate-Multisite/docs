---
id: add_user_to_blog
title: 動作 - add_user_to_blog
sidebar_label: add_user_to_blog
_i18n_hash: ac7b281fe49bfc7d858869b1a24e9ae3
---
# Action: add_user_to_blog {#action-addusertoblog}

在使用者被新增到網站後立即觸發。

## 參數 {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $user_id | `int` | 使用者 ID。 |
| $role | `string` | 使用者角色。 |
| $blog_id | `int` | 部落 ID。 |

### 可用自 {#since}

- MU: MU
### 來源 {#source}

定義於 [`inc/mu-migration/includes/helpers.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/helpers.php#L174) 的第 174 行

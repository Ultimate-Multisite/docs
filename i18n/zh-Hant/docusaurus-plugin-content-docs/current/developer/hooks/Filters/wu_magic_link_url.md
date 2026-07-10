---
id: wu_magic_link_url
title: Filter - wu_magic_link_url
sidebar_label: wu_magic_link_url
_i18n_hash: 60efe2aa6a8dff965d7ff0fb303a7bf4
---
# Filter: wu_magic_link_url {#filter-wumagiclinkurl}

過濾生成的魔術連結 URL。

## 參數 {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $magic_link | `string` | 魔術連結的 URL。 |
| $user_id | `int` | 使用者 ID。 |
| $site_id | `int` | 站點 ID。 |
| $redirect_to | `string` | 重新導向的 URL。 |

### 適用版本 {#since}

- 2.0.0
### 來源 {#source}

定義於 [`inc/sso/class-magic-link.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-magic-link.php#L148) 第 148 行

---
id: wu_sso_url
title: 篩選器 - wu_sso_url
sidebar_label: wu_sso_url
_i18n_hash: a369dcf0f4cab1f5941c82ac58286155
---
# Filter: wu_sso_url

在跨網域客戶動作傳回產生的 SSO URL 之前進行篩選。

當整合需要將可信任的情境加入主權租戶 SSO 連結，或在保留 Ultimate Multisite 的 token 驗證時替換代理 URL，請使用此 filter。

## 參數

| Name | Type | Description |
|------|------|-------------|
| $sso_url | `string` | 產生的 SSO URL。 |
| $user | `WP_User` | 將透過 SSO 造訪進行驗證的使用者。 |
| $site_id | `int` | 此次造訪的目標 site ID。 |
| $redirect_to | `string` | SSO 驗證成功後的目的地 URL。 |

### 自從

- 2.13.0

### 來源

定義於 `inc/sso/class-sso.php`。


## 傳回

篩選後的 SSO URL。

---
id: wu_sso_url
title: フィルター - wu_sso_url
sidebar_label: wu_sso_url
_i18n_hash: a369dcf0f4cab1f5941c82ac58286155
---
# Filter: wu_sso_url

クロスドメインの顧客操作のために返される前に、生成された SSO URL をフィルタリングします。

統合で、Ultimate Multisite のトークン検証を維持しながら、主権テナントの SSO リンクに信頼済みコンテキストを追加する、またはブローカー URL を置き換える必要がある場合に、このフィルターを使用します。

## パラメータ

| 名前 | 型 | 説明 |
|------|------|-------------|
| $sso_url | `string` | 生成された SSO URL。 |
| $user | `WP_User` | SSO 訪問によって認証されるユーザー。 |
| $site_id | `int` | 訪問の対象 site ID。 |
| $redirect_to | `string` | SSO 検証成功後の移動先 URL。 |

### 導入

- 2.13.0

### ソース

`inc/sso/class-sso.php` で定義されています。


## 戻り値

フィルタリングされた SSO URL。

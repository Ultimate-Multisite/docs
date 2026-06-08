---
id: wu_ses_verification_integration
title: フィルター - wu_ses_verification_integration
sidebar_label: wu_ses_verification_integration
_i18n_hash: 27c3b330dc77b62650dee7345dcec26c
---
# フィルター: wu_ses_verification_integration

フィルター: 他のコードに SES インテグレーションオブジェクトを提供させます。

返されるオブジェクトは、以下のメソッドを実装している必要があります。
- `verify_domain(string $domain): array{dkim_tokens: string[]}\|WP_Error`
- `check_domain_verification(string $domain): array{verified: bool}\|WP_Error`
- `delete_identity(string $domain): true\|WP_Error`

## パラメータ

| 名前 | 型 | 説明 |
|------|------|-------------|
| $integration | `object\|null` | SES インテグレーションオブジェクト、または null。 |

### 利用可能バージョン

- 2.2.0
### 出典

[`inc/class-ses-verification-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-ses-verification-manager.php#L731) の 731 行目で定義されています

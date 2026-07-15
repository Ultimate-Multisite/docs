---
id: wu_domain_ses_verified
title: アクション - wu_domain_ses_verified
sidebar_label: wu_domain_ses_verified
_i18n_hash: 5ef424a1d1a4d3569ebfa9caf2d1a3d7
---
# Action: wu_domain_ses_verified

SESがドメインのDKIM検証を完了したときに発火します。

## パラメータ {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $domain | `\WP_Ultimo\Models\Domain` | ドメインオブジェクト。 |

### バージョン {#since}

- 2.2.0
### 出典 {#source}

[`inc/class-ses-verification-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-ses-verification-manager.php#L480) の480行目で定義されています。

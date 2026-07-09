---
id: wu_domain_ses_verified
title: 動作 - wu_domain_ses_verified
sidebar_label: wu_domain_ses_verified
_i18n_hash: 5ef424a1d1a4d3569ebfa9caf2d1a3d7
---
# 動作：wu_domain_ses_verified {#action-wudomainsesverified}

當 SES 確認網域已完成 DKIM 驗證時觸發。

## 參數 {#parameters}

| 名稱 | 類型 | 描述 |
|------|------|-------------|
| $domain | `\WP_Ultimo\Models\Domain` | 網域物件。 |

### 從 {#since}

- 2.2.0
### 來源 {#source}

定義於 [`inc/class-ses-verification-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-ses-verification-manager.php#L480) 第 480 行

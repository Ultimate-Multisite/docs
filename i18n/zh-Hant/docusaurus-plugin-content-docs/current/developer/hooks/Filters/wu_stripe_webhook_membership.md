---
id: wu_stripe_webhook_membership
title: 過濾器 - wu_stripe_webhook_membership
sidebar_label: wu_stripe_webhook_membership
_i18n_hash: b39da1f6b46f6ac7af6a5674c8b5d261
---
# 過濾器：wu_stripe_webhook_membership {#filter-wustripewebhookmembership}

用於過濾與此 webhook 相關的會籍記錄。

引入此過濾器是因為當同一 Stripe 客戶可能在不同的網站上使用時，可能會發生衝突。

## 參數 {#parameters}

| 名稱 | 類型 | 描述 |
|------|------|-------------|
| $membership | `\WP_Ultimo\Models\Membership\|false` | 會籍物件。 |
| $event | `\Stripe\Event` | 收到的事件。 |

### 來源 {#source}

定義於 [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L2035) 的第 2035 行

---
id: wu_gocardless_cleanup_pending_site
title: Filter - wu_gocardless_cleanup_pending_site
sidebar_label: wu_gocardless_cleanup_pending_site
_i18n_hash: 12dc7cf40d5e91b9d4da3ea887286608
---
# 過濾器：wu_gocardless_cleanup_pending_site

此過濾器會在刪除因取消 GoCardless 會籍而產生的孤立待處理網站之前觸發。

如果從此過濾器返回 `false`，則會阻止網站的刪除。

## 參數 {#parameters}

| 名稱 | 類型 | 描述 |
|------|------|-------------|
| $blog_id | `int` | 待處理網站的 WordPress 網站 ID。 |
| $membership | `\WP_Ultimo\Models\Membership` | 已取消的會籍。 |
| $old_status | `string` | 發生取消前的狀態。 |

### 可用版本 {#since}

- 2.0.0
### 來源 {#source}

定義於 [`inc/gateways/class-gocardless-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-gocardless/blob/main/inc/gateways/class-gocardless-gateway.php#L1086) 的第 1086 行

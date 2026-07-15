---
id: wu_gocardless_cleanup_pending_site
title: 过滤器 - wu_gocardless_cleanup_pending_site
sidebar_label: wu_gocardless_cleanup_pending_site
_i18n_hash: 12dc7cf40d5e91b9d4da3ea887286608
---
# Filter: wu_gocardless_cleanup_pending_site

此过滤器在删除因 GoCardless 会员资格取消而产生的孤立待定站点之前触发。

如果从此过滤器返回 `false`，则会阻止删除操作。

## 参数 {#parameters}

| 名称 | 类型 | 描述 |
|------|------|-------------|
| $blog_id | `int` | 待定站点的 WordPress 博客 ID。 |
| $membership | `\WP_Ultimo\Models\Membership` | 已取消的会员资格。 |
| $old_status | `string` | 状态在取消之前的状态。 |

### 自 {#since}

- 2.0.0
### 来源 {#source}

定义在 [`inc/gateways/class-gocardless-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-gocardless/blob/main/inc/gateways/class-gocardless-gateway.php#L1086) 的第 1086 行

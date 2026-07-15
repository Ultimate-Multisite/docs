---
id: wu_membership_post_cancel
title: Action - wu_membership_post_cancel
sidebar_label: wu_membership_post_cancel
_i18n_hash: f8d5d59dbde2d29c6006ef82edd7384a
---
# 動作：wu_membership_post_cancel

當會員資格被取消後會觸發此動作。

此動作用於觸發取消電子郵件。

## 參數 {#parameters}

| 名稱 | 類型 | 描述 |
|------|------|-------------|
| $membership_id | `int` | 會員資格的 ID。 |
| $membership | `\WP_Ultimo\Models\Membership` | 會員資格物件。 |

### 可用自 {#since}

- 2.0
### 來源 {#source}

定義於 [`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2290) 的第 2290 行

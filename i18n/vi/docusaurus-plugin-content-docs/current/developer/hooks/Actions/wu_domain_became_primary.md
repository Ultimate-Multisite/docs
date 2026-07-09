---
id: wu_domain_became_primary
title: Hành động - wu_domain_became_primary
sidebar_label: wu_domain_became_primary
_i18n_hash: c7757c05c88e7b75f88777504426a970
---
# Action: wu_domain_became_primary {#action-wudomainbecameprimary}

Sự kiện này được kích hoạt khi một domain trở thành domain chính (primary domain) của một trang web.

Hành động này được kích hoạt khi cờ (flag) `primary_domain` của một domain được đặt thành `true`, dù là khi tạo một domain chính mới hay khi cập nhật một domain hiện có để nó trở thành domain chính.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $domain | `\WP_Ultimo\Models\Domain` | Domain đã trở thành domain chính. |
| $blog_id | `int` | ID blog của trang web bị ảnh hưởng. |
| $was_new | `bool` | Cho biết đây có phải là domain mới được tạo hay không. |

### Since {#since}

- 2.0.0
### Source {#source}

Được định nghĩa trong [`inc/models/class-domain.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-domain.php#L560) tại dòng 560

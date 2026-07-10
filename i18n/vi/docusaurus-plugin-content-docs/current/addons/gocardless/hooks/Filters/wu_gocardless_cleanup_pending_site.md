---
id: wu_gocardless_cleanup_pending_site
title: Bộ lọc - wu_gocardlass_cleanup_pending_site
sidebar_label: wu_gocardless_cleanup_pending_site
_i18n_hash: 12dc7cf40d5e91b9d4da3ea887286608
---
# Bộ lọc: wu_gocardless_cleanup_pending_site {#filter-wugocardlesscleanuppendingsite}

Bộ lọc này được kích hoạt trước khi xóa một trang web chờ (pending site) bị bỏ lại do việc hủy tư cách thành viên GoCardless.

Bạn cần trả về `false` từ bộ lọc này để ngăn chặn việc xóa.

## Tham số {#parameters}

| Tên | Kiểu | Mô tả |
|------|------|-------------|
| $blog_id | `int` | ID blog WordPress của trang web chờ. |
| $membership | `\WP_Ultimo\Models\Membership` | Tư cách thành viên đã bị hủy. |
| $old_status | `string` | Trạng thái của trang web trước khi bị hủy. |

### Từ phiên bản {#since}

- 2.0.0
### Nguồn {#source}

Được định nghĩa trong [`inc/gateways/class-gocardless-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-gocardless/blob/main/inc/gateways/class-gocardless-gateway.php#L1086) tại dòng 1086

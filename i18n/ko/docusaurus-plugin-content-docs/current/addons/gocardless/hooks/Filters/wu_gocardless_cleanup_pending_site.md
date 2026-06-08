---
id: wu_gocardless_cleanup_pending_site
title: 필터 - wu_gocardless_cleanup_pending_site
sidebar_label: wu_gocardless_cleanup_pending_site
_i18n_hash: 12dc7cf40d5e91b9d4da3ea887286608
---
# 필터: wu_gocardless_cleanup_pending_site

취소된 GoCardless 멤버십에 대해 고아 상태가 된(orphaned) 보류 사이트를 삭제하기 전에 실행됩니다.

이 필터에서 `false`를 반환하면 삭제가 방지됩니다.

## 매개변수

| 이름 | 타입 | 설명 |
|------|------|-------------|
| $blog_id | `int` | 보류 사이트의 WordPress 블로그 ID입니다. |
| $membership | `\WP_Ultimo\Models\Membership` | 취소된 멤버십입니다. |
| $old_status | `string` | 취소되기 전의 상태입니다. |

### 사용 가능 버전

- 2.0.0
### 출처

[`inc/gateways/class-gocardless-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-gocardless/blob/main/inc/gateways/class-gocardless-gateway.php#L1086)의 1086번째 줄에 정의되어 있습니다.

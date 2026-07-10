---
id: wu_sso_loaded
title: Hành động - wu_sso_loaded
sidebar_label: wu_sso_loaded
_i18n_hash: b51fa54f84ebce1962a42dac87fcd923
---
# Action: wu_sso_loaded {#action-wussoloaded}

Cho phép các nhà phát triển plugin thêm các hook bổ sung nếu cần.

Điều này cần được trì hoãn đến khi `init` vì SSO là thứ chạy ở `sunrise`.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $sso | `self` | Lớp SSO. |

### Since {#since}

- 2.0.0
### Source {#source}

Được định nghĩa trong [`inc/sso/class-sso.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-sso.php#L285) tại dòng 285

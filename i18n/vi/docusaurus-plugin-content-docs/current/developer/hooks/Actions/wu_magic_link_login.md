---
id: wu_magic_link_login
title: Hành động - wu_magic_link_login
sidebar_label: wu_magic_link_login
_i18n_hash: 4682ae341c1806000c2d4ca3f0af0b2e
---
# Action: wu_magic_link_login

Action này được kích hoạt sau khi một người dùng đăng nhập thành công bằng magic link.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $user_id | `int` | ID người dùng. |
| $site_id | `int` | ID trang web. |

### Since {#since}

- 2.0.0
### Source {#source}

Được định nghĩa trong [`inc/sso/class-magic-link.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-magic-link.php#L240) tại dòng 240

---
id: wu_mt_providers_registered
title: Hành động - wu_mt_providers_registered
sidebar_label: wu_mt_providers_registered
_i18n_hash: 20d07d793895ff5da997696e1fc94f5d
---
# Action: wu_mt_providers_registered

Hook này sẽ được kích hoạt sau khi các provider mặc định đã được đăng ký.

Bạn có thể sử dụng hook này để đăng ký các provider tùy chỉnh.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $manager | `\Provider_Manager` | Thể hiện (instance) của trình quản lý provider. |

### Since {#since}

- 1.0.0
### Source {#source}

Được định nghĩa trong [`inc/managers/class-provider-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multi-tenancy/blob/main/inc/managers/class-provider-manager.php#L93) tại dòng 93

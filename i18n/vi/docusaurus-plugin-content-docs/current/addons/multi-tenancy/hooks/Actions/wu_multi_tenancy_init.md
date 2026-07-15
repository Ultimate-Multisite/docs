---
id: wu_multi_tenancy_init
title: Hành động - wu_multi_tenancy_init
sidebar_label: wu_multi_tenancy_init
_i18n_hash: d36b0a14ef482ff6731ffe6c85582c6a
---
# Action: wu_multi_tenancy_init

Hành động này được kích hoạt sau khi addon Multi-Tenancy được khởi tạo hoàn toàn.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $addon | `\WP_Ultimo_Multi_Tenancy` | Thể hiện (instance) của addon. phpcs:ignore WordPress.NamingConventions.PrefixAllGlobals.NonPrefixedHooknameFound -- wu_ là tiền tố tiêu chuẩn cho WP Ultimo. |

### Since {#since}

- 1.0.0
### Source {#source}

Được định nghĩa trong [`ultimate-multisite-multi-tenancy.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multi-tenancy/blob/main/ultimate-multisite-multi-tenancy.php#L124) tại dòng 124

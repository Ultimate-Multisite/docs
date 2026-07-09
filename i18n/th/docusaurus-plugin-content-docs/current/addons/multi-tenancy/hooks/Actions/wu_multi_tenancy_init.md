---
id: wu_multi_tenancy_init
title: การดำเนินการ - wu_multi_tenancy_init
sidebar_label: wu_multi_tenancy_init
_i18n_hash: d36b0a14ef482ff6731ffe6c85582c6a
---
# Action: wu_multi_tenancy_init {#action-wumultitenancyinit}

จะทำงานหลังจากที่ระบบ Multi-Tenancy addon ถูกเริ่มต้นอย่างสมบูรณ์แล้ว

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $addon | `\WP_Ultimo_Multi_Tenancy` | อินสแตนซ์ของ addon. phpcs:ignore WordPress.NamingConventions.PrefixAllGlobals.NonPrefixedHooknameFound -- wu_ is standard prefix for WP Ultimo. |

### Since {#since}

- 1.0.0
### Source {#source}

ถูกกำหนดไว้ใน [`ultimate-multisite-multi-tenancy.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multi-tenancy/blob/main/ultimate-multisite-multi-tenancy.php#L124) ที่บรรทัดที่ 124

---
id: wu_multi_tenancy_init
title: عمل - wu_multi_tenancy_init
sidebar_label: wu_multi_tenancy_init
_i18n_hash: d36b0a14ef482ff6731ffe6c85582c6a
---
# Action: wu_multi_tenancy_init

یہ اس وقت فعال ہوتا ہے جب Multi-Tenancy addon مکمل طور پر تیار (initialize) ہو جائے۔

## پیرامیٹرز (Parameters)

| نام (Name) | قسم (Type) | تفصیل (Description) |
|------|------|-------------|
| $addon | `\WP_Ultimo_Multi_Tenancy` | یہ addon کا instance ہے۔ phpcs:ignore WordPress.NamingConventions.PrefixAllGlobals.NonPrefixedHooknameFound -- wu_ WP Ultimo کے لیے معیاری (standard) prefix ہے۔ |

### کب سے (Since)

- 1.0.0
### ماخذ (Source)

Defined in [`ultimate-multisite-multi-tenancy.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multi-tenancy/blob/main/ultimate-multisite-multi-tenancy.php#L124) at line 124

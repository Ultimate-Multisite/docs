---
id: wu_multi_tenancy_init
title: Action - wu_multi_tenancy_init
sidebar_label: wu_multi_tenancy_init
_i18n_hash: d36b0a14ef482ff6731ffe6c85582c6a
---
# Action: wu_multi_tenancy_init {#action-wumultitenancyinit}

এই অ্যাকশনটি ট্রিগার হয় যখন মাল্টি-টেন্যান্সি অ্যাডঅনটি সম্পূর্ণরূপে সেটআপ হয়ে যায়।

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $addon | `\WP_Ultimo_Multi_Tenancy` | অ্যাডঅনটির ইনস্ট্যান্স। phpcs:ignore WordPress.NamingConventions.PrefixAllGlobals.NonPrefixedHooknameFound -- wu_ is standard prefix for WP Ultimo. |

### Since {#since}

- 1.0.0
### Source {#source}

Defined in [`ultimate-multisite-multi-tenancy.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multi-tenancy/blob/main/ultimate-multisite-multi-tenancy.php#L124) at line 124

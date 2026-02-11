---
id: wu_multi_tenancy_init
title: アクション - wu_multi_tenancy_init
sidebar_label: wu_multi_tenancy_init
_i18n_hash: d36b0a14ef482ff6731ffe6c85582c6a
---
# アクション: wu_multi_tenancy_init

Multi-Tenancy アドオンが完全に初期化された後に発火します。

## パラメータ

| 名前 | タイプ | 説明 |
|------|------|-------------|
| $addon | `\WP_Ultimo_Multi_Tenancy` | アドオンインスタンスです。 |
| phpcs:ignore WordPress.NamingConventions.PrefixAllGlobals.NonPrefixedHooknameFound -- wu_ は WP Ultimo の標準プレフィックスです。 |

### 以降

- 1.0.0

### ソース

定義は [`ultimate-multisite-multi-tenancy.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multi-tenancy/blob/main/ultimate-multisite-multi-tenancy.php#L124) 行124で。

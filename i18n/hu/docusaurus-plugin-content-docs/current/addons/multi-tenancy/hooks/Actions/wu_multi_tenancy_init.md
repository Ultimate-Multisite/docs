---
id: wu_multi_tenancy_init
title: Akció - wu_multi_tenancy_init
sidebar_label: wu_multi_tenancy_init
_i18n_hash: d36b0a14ef482ff6731ffe6c85582c6a
---
# Action: wu_multi_tenancy_init

Kivitelező, amikor a Multi-Tenancy addon teljes mértékben inicializálódott.

## Paraméterek

| Name | Type | Description |
|------|------|-------------|
| $addon | `\WP_Ultimo_Multi_Tenancy` | Az addon példányát. phpcs:ignore WordPress.NamingConventions.PrefixAllGlobals.NonPrefixedHooknameFound -- wu_ standard előfixus a WP Ultimo számára. |

### Desde

- 1.0.0
### Forrás

Definálva [`ultimate-multisite-multi-tenancy.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multi-tenancy/blob/main/ultimate-multisite-multi-tenancy.php#L124) fájlban, 124-sorban

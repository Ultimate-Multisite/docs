---
id: wu_admin_notices
title: フィルタ - wu_admin_notices
sidebar_label: wu_admin_notices
_i18n_hash: b98d294d75277dfcfd941ca0e573e10c
---
# フィルタ: wu_admin_notices

Ultimate Multisite によって追加された管理者通知を開発者がフィルタリングできるようにします。

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $notices | `array` | その特定のパネルの通知のリスト。 |
| $all_notices | `array` | パネルごとに分けられた追加された通知のリスト。 |
| $panel | `string` | 通知を取得するパネル。 |
| $filter | `string` | 解除可能な通知がフィルタリングされたかどうか。 |
| $dismissed_messages | `array` | 解除された通知キーのリスト。 |

### Since

- 2.0.0

### Source

定義されている [`inc/class-admin-notices.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-admin-notices.php#L121) 行 121

## Returns

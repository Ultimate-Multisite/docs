---
id: wu_use_domain_mapping
title: フィルタ - wu_use_domain_mapping
sidebar_label: wu_use_domain_mapping
_i18n_hash: 34f9d3e6a6d1b98dd72cf5c21250b6e7
---
# フィルタ: wu_use_domain_mapping

マッピングを使用すべきかどうかを決定します

通常は、アクティブなマッピングのみを使用するようにします。しかし、より高度なロジックを使用したい場合や、非アクティブなドメインもマッピングしたい場合は、ここでフィルタリングしてください。

## Parameters

| 名前 | タイプ | 説明 |
|------|------|-------------|
| $is_active | `bool` | マッピングをアクティブとして扱うべきか？ |
| $mapping | `\Domain` | 検査対象のマッピング |
| $domain | `string` |  |

### Source

定義されている [`inc/class-domain-mapping.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-domain-mapping.php#L391) 行 391

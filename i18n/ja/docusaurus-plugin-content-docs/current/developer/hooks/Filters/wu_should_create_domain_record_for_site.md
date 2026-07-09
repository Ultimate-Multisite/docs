---
id: wu_should_create_domain_record_for_site
title: フィルター - wu_should_create_domain_record_for_site
sidebar_label: wu_should_create_domain_record_for_site
_i18n_hash: d97b52f157228e570818c153e96a609c
---
# Filter: wu_should_create_domain_record_for_site

新しく作成されたサイトに対して Ultimate Multisite がドメインレコードを作成するかどうかをフィルターします。

共有のチェックアウトフォーム用ベースドメイン、内部ホスト、または別の連携が個別に管理するドメインを使用するサイトで、自動的なドメインレコード作成を抑制または延期するには、このフィルターを使用します。

## パラメーター

| Name | Type | Description |
|------|------|-------------|
| $create | `bool` | ドメインレコードを作成するかどうか。 |
| $site | `WP_Site` | 新しく作成されたサイトオブジェクト。 |

### 導入バージョン

- 2.13.0

### ソース

`inc/functions/domain.php` で定義されています。


## 戻り値

ドメインレコードを作成するかどうかを示す真偽値。

---
id: wu_domain_became_primary
title: アクション - wu_domain_became_primary
sidebar_label: wu_domain_became_primary
_i18n_hash: c7757c05c88e7b75f88777504426a970
---
# アクション: wu_domain_became_primary

ドメインがサイトのプライマリドメインになると発火します。

このアクションは、ドメインの **primary_domain** フラグが **true** に設定されたときに発火します。これは、新しいプライマリドメインを作成したとき、または既存のドメインをプライマリに更新したときのいずれかです。

## Parameters

| 名前 | 型 | 説明 |
|------|------|------|
| $domain | `\WP_Ultimo\Models\Domain` | プライマリになったドメイン。 |
| $blog_id | `int` | 影響を受けたサイトのブログID。 |
| $was_new | `bool` | 新しく作成されたドメインかどうか。 |

### 導入

- 2.0.0

### ソース

定義: [`inc/models/class-domain.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-domain.php#L560) 560 行目

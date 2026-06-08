---
id: wu_gocardless_cleanup_pending_site
title: Filter - wu_gocardless_cleanup_pending_site
sidebar_label: wu_gocardless_cleanup_pending_site
_i18n_hash: 12dc7cf40d5e91b9d4da3ea887286608
---
# Filter: wu_gocardless_cleanup_pending_site

GoCardlessのキャンセルされたメンバーシップに伴い、孤立した保留中のサイトを削除する前に実行されます。

このフィルターで `false` を返すと、削除が防止されます。

## パラメータ

| Name | Type | Description |
|------|------|-------------|
| $blog_id | `int` | 保留中のサイトのWordPressブログID。 |
| $membership | `\WP_Ultimo\Models\Membership` | キャンセルされたメンバーシップ。 |
| $old_status | `string` | キャンセル前のステータス。 |

### Since

- 2.0.0
### Source

[`inc/gateways/class-gocardless-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-gocardless/blob/main/inc/gateways/class-gocardless-gateway.php#L1086) の1086行目で定義されています。

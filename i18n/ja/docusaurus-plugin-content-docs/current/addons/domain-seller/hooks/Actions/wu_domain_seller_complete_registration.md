---
id: wu_domain_seller_complete_registration
title: Action - wu_domain_seller_complete_registration
sidebar_label: wu_domain_seller_complete_registration
_i18n_hash: 0bd00822989aa5b0dbda498ef5e69848
---
# Action: wu_domain_seller_complete_registration {#action-wudomainsellercompleteregistration}

支払いステータスがドメイン登録をトリガーすべき状態に遷移したときに実行されます。

## パラメーター {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | 支払いオブジェクトです。 |
| $old_status | `string` | 遷移前の支払いステータスです。 |

### Since {#since}

- 2.0.0
### Source {#source}

[`inc/class-domain-seller.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-seller.php#L266) の266行目で定義されています。

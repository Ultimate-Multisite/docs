---
id: wu_gocardless_cleanup_pending_site
title: Fîltre - wu_gocardless_cleanup_pending_site
sidebar_label: wu_gocardless_cleanup_pending_site
_i18n_hash: 12dc7cf40d5e91b9d4da3ea887286608
---
# Filter: wu_gocardless_cleanup_pending_site

Beriya jêbirina malperek li bendê ya bê xwedî ji bo endametiyeke GoCardless a betalkirî tê xebitandin.

Ji vî filter `false` vegerînin da ku jêbirinê asteng bikin.

## Parametre

| Nav | Cure | Danasîn |
|------|------|-------------|
| $blog_id | `int` | ID ya blogê ya WordPress ya malpera li bendê. |
| $membership | `\WP_Ultimo\Models\Membership` | Endametiya betalkirî. |
| $old_status | `string` | Rewşa berî betalkirinê. |

### Ji vir ve

- 2.0.0
### Çavkanî

Di [`inc/gateways/class-gocardless-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-gocardless/blob/main/inc/gateways/class-gocardless-gateway.php#L1086) de, li rêza 1086 hatiye diyarkirin.

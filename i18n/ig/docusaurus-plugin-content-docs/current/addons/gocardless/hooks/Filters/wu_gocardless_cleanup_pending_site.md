---
id: wu_gocardless_cleanup_pending_site
title: Nzacha - wu_gocardless_cleanup_pending_site
sidebar_label: wu_gocardless_cleanup_pending_site
_i18n_hash: 12dc7cf40d5e91b9d4da3ea887286608
---
# Nzacha: wu_gocardless_cleanup_pending_site

Na-arụ ọrụ tupu ihichapụ saịtị na-echere nke fọdụrụ naanị ya maka ndebanye òtù GoCardless a kagburu.

Weghachite false site na nzacha a iji gbochie nhichapụ.

## Paramita {#parameters}

| Aha | Ụdị | Nkọwa |
|------|------|-------------|
| $blog_id | `int` | WordPress blog ID nke saịtị na-echere. |
| $membership | `\WP_Ultimo\Models\Membership` | Ndebanye òtù a kagburu. |
| $old_status | `string` | Ọnọdụ tupu nkagbu. |

### Kemgbe {#since}

- 2.0.0
### Isi mmalite {#source}

Akọwapụtara na [`inc/gateways/class-gocardless-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-gocardless/blob/main/inc/gateways/class-gocardless-gateway.php#L1086) n'ahịrị 1086

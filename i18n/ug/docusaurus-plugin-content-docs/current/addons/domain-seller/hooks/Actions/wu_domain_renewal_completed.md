---
id: wu_domain_renewal_completed
title: مەشغۇلات - wu_domain_renewal_completed
sidebar_label: wu_domain_renewal_completed
_i18n_hash: d4aa4ba2d3cd00aaa0ea699102a863e6
---
# Action: wu_domain_renewal_completed

بىر domain مۇۋەپپەقىيەتلىك يېڭىلانغاندىن كېيىن ئىجرا بولىدۇ.

## پارامېتىرلار

| ئىسمى | تىپى | چۈشەندۈرۈشى |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | يېڭىلاشنى قوزغاتقان payment. |
| $renewal_data | `array&lt;string,mixed&gt;` | يېڭىلاش metadata (domain_name, years, customer_id، قاتارلىقلار). |
| $result | `array&lt;string,mixed&gt;` | registrar قايتۇرغان يېڭى expiry_date نى ئۆز ئىچىگە ئالغان خام result array. |

### باشلاپ

- 2.0.0
### مەنبە

[`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L594) دا 594-قۇردا ئېنىقلانغان.

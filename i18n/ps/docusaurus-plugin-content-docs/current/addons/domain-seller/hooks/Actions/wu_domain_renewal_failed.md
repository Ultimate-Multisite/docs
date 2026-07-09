---
id: wu_domain_renewal_failed
title: کړنه - wu_domain_renewal_failed
sidebar_label: wu_domain_renewal_failed
_i18n_hash: bff3fd7903485780766e490300546070
---
# Action: wu_domain_renewal_failed

د domain د نوې کولو د هڅې له ناکامېدو وروسته چلېږي.

## پاراميټرونه

| نوم | ډول | تشریح |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | هغه تادیه چې نوې کول یې پیل کړل. |
| $renewal_data | `array&lt;string,mixed&gt;` | د نوې کولو metadata (domain_name، years، او نور). |
| $error_message | `string` | د registrar له خوا د انسان لپاره د لوستلو وړ د تېروتنې پیغام. |

### له

- 2.0.0
### سرچینه

په [`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L630) کې په 630 کرښه تعریف شوی.

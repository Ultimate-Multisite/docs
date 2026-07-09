---
id: wu_gocardless_cleanup_pending_site
title: Salain - wu_gocardless_cleanup_pending_site
sidebar_label: wu_gocardless_cleanup_pending_site
_i18n_hash: 12dc7cf40d5e91b9d4da3ea887286608
---
# Filter: wu_gocardless_cleanup_pending_site

Gumagana bago tanggalin ang naulilang nakabinbing site para sa kinanselang GoCardless membership.

Magbalik ng false mula sa filter na ito upang pigilan ang pagtanggal.

## Mga Parameter

| Pangalan | Uri | Paglalarawan |
|------|------|-------------|
| $blog_id | `int` | WordPress blog ID ng nakabinbing site. |
| $membership | `\WP_Ultimo\Models\Membership` | Ang kinanselang membership. |
| $old_status | `string` | Ang status bago ang pagkansela. |

### Mula Noong

- 2.0.0
### Pinagmulan

Tinukoy sa [`inc/gateways/class-gocardless-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-gocardless/blob/main/inc/gateways/class-gocardless-gateway.php#L1086) sa linya 1086

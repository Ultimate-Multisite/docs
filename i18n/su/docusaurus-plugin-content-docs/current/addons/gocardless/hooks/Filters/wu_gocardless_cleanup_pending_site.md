---
id: wu_gocardless_cleanup_pending_site
title: Saringan - wu_gocardless_cleanup_pending_site
sidebar_label: wu_gocardless_cleanup_pending_site
_i18n_hash: 12dc7cf40d5e91b9d4da3ea887286608
---
# Filter: wu_gocardless_cleanup_pending_site

Dijalankeun saméméh mupus situs pending anu yatim pikeun kaanggotaan GoCardless anu dibatalkeun.

Balikeun false tina filter ieu pikeun nyegah pamupusan.

## Parameter {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $blog_id | `int` | ID blog WordPress tina situs pending. |
| $membership | `\WP_Ultimo\Models\Membership` | Kaanggotaan anu dibatalkeun. |
| $old_status | `string` | Status saméméh pembatalan. |

### Ti saprak {#since}

- 2.0.0
### Sumber {#source}

Ditetepkeun dina [`inc/gateways/class-gocardless-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-gocardless/blob/main/inc/gateways/class-gocardless-gateway.php#L1086) dina garis 1086

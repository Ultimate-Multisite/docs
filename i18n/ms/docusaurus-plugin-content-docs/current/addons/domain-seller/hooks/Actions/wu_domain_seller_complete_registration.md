---
id: wu_domain_seller_complete_registration
title: Action - wu_domain_seller_complete_registration
sidebar_label: wu_domain_seller_complete_registration
_i18n_hash: 0bd00822989aa5b0dbda498ef5e69848
---
# Action: wu_domain_seller_complete_registration

Dipicu apabila pembayaran bertukar status kepada status yang sepatutnya mencetuskan pendaftaran domain.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Objek pembayaran. |
| $old_status | `string` | Status pembayaran sebelumnya sebelum pertukaran status. |

### Since {#since}

- 2.0.0
### Source {#source}

Ditakrifkan dalam [`inc/class-domain-seller.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-seller.php#L266) pada baris 266

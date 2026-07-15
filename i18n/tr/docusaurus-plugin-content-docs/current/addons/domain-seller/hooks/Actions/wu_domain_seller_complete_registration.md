---
id: wu_domain_seller_complete_registration
title: Eylem - wu_domain_seller_complete_registration
sidebar_label: wu_domain_seller_complete_registration
_i18n_hash: 0bd00822989aa5b0dbda498ef5e69848
---
# Action: wu_domain_seller_complete_registration

Bir ödeme, alan adı kaydını tetiklemesi gereken bir duruma geçtiğinde çalışır.

## Parametreler {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Ödeme nesnesi. |
| $old_status | `string` | Geçişten önceki önceki ödeme durumu. |

### Versiyon {#since}

- 2.0.0
### Kaynak {#source}

[`inc/class-domain-seller.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-seller.php#L266) dosyasının 266. satırında tanımlanmıştır.

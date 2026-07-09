---
id: wu_return_url
title: Filtre - wu_return_url
sidebar_label: wu_return_url
_i18n_hash: 73bff0c05bc9b1dad029b7438b1a4f7c
---
# Filtre: wu_return_url {#filter-wureturnurl}

Geliştiricilerin, ödeme işlemi sonrasında kullanılan ağ geçidi (gateway) dönüş URL'sini değiştirmesine olanak tanır.

## Parametreler {#parameters}

| Ad | Tip | Açıklama |
|------|------|-------------|
| $return_url | `string` | İşlemden sonra yönlendirilecek URL. |
| $gateway | `self` | Ağ geçidi örneği. |
| $payment | `\WP_Ultimo\Models\Payment` | Ultimate Multisite ödeme örneği. |
| $cart | `\WP_Ultimo\Checkout\Cart` | Mevcut Ultimate Multisite sepet siparişi. |

### Kullanılmaya Başladığı Versiyon {#since}

- 2.0.20
### Kaynak {#source}

[`inc/gateways/class-base-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-gateway.php#L683) dosyasının 683. satırında tanımlanmıştır.


## Dönüş Değeri {#returns}

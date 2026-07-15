---
id: wu_domain_renewal_completed
title: Igikorwa - wu_domain_renewal_completed
sidebar_label: wu_domain_renewal_completed
_i18n_hash: d4aa4ba2d3cd00aaa0ea699102a863e6
---
# Action: wu_domain_renewal_completed

Bikora nyuma y’uko domain ivuguruwe neza.

## Ibigenderwaho {#parameters}

| Izina | Ubwoko | Ibisobanuro |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Ubwishyu bwatumye ivugururwa riba. |
| $renewal_data | `array&lt;string,mixed&gt;` | Metadata y’ivugurura (domain_name, years, customer_id, n’ibindi). |
| $result | `array&lt;string,mixed&gt;` | Array y’ibisubizo mbisi yagaruwe na registrar, harimo expiry_date nshya. |

### Guhera kuri {#since}

- 2.0.0
### Inkomoko {#source}

Bisobanuwe muri [`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L594) ku murongo wa 594

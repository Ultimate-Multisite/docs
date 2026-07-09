---
id: wu_domain_renewal_failed
title: Igikorwa - wu_domain_renewal_failed
sidebar_label: wu_domain_renewal_failed
_i18n_hash: bff3fd7903485780766e490300546070
---
# Igikorwa: wu_domain_renewal_failed {#action-wudomainrenewalfailed}

Gikora nyuma y’uko igerageza ryo kongera igihe cya domain rinaniranye.

## Ibipimo {#parameters}

| Izina | Ubwoko | Ibisobanuro |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Ubwishyu bwateje kongera igihe. |
| $renewal_data | `array&lt;string,mixed&gt;` | Amakuru ajyanye no kongera igihe (domain_name, imyaka, n’ibindi). |
| $error_message | `string` | Ubutumwa bw’ikosa busomeka n’abantu buturutse ku registrar. |

### Kuva {#since}

- 2.0.0
### Inkomoko {#source}

Bisobanuwe muri [`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L630) ku murongo wa 630

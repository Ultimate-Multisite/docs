---
id: wu_domain_renewal_failed
title: Ekintza - wu_domain_renewal_failed
sidebar_label: wu_domain_renewal_failed
_i18n_hash: bff3fd7903485780766e490300546070
---
# Ekintza: wu_domain_renewal_failed

Domeinuaren berritze-saiakera batek huts egin ondoren abiarazten da.

## Parametroak

| Izena | Mota | Deskribapena |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Berritzea eragin zuen ordainketa. |
| $renewal_data | `array&lt;string,mixed&gt;` | Berritzearen metadatuak (domain_name, urteak, etab.). |
| $error_message | `string` | Erregistratzailearen errore-mezu irakurgarria. |

### Noiztik

- 2.0.0
### Iturburua

[`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L630) fitxategian definitua, 630. lerroan.

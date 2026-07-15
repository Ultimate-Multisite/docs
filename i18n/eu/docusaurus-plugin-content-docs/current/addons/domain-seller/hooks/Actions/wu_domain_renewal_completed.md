---
id: wu_domain_renewal_completed
title: Ekintza - wu_domain_renewal_completed
sidebar_label: wu_domain_renewal_completed
_i18n_hash: d4aa4ba2d3cd00aaa0ea699102a863e6
---
# Ekintza: wu_domain_renewal_completed

Domeinu bat behar bezala berritu ondoren abiarazten da.

## Parametroak {#parameters}

| Izena | Mota | Deskribapena |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Berritzea abiarazi zuen ordainketa. |
| $renewal_data | `array&lt;string,mixed&gt;` | Berritzearen metadatuak (domain_name, years, customer_id, etab.). |
| $result | `array&lt;string,mixed&gt;` | Erregistratzaileak itzulitako emaitza-array gordina, expiry_date berria barne. |

### Noiztik {#since}

- 2.0.0
### Iturria {#source}

[`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L594) fitxategian definitua, 594. lerroan

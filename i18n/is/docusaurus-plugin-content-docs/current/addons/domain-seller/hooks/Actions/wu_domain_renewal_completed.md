---
id: wu_domain_renewal_completed
title: Aðgerð - wu_domain_renewal_completed
sidebar_label: wu_domain_renewal_completed
_i18n_hash: d4aa4ba2d3cd00aaa0ea699102a863e6
---
# Aðgerð: wu_domain_renewal_completed

Keyrist eftir að lén hefur verið endurnýjað með góðum árangri.

## Færibreytur {#parameters}

| Heiti | Tegund | Lýsing |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Greiðslan sem kom endurnýjuninni af stað. |
| $renewal_data | `array&lt;string,mixed&gt;` | Lýsigögn endurnýjunar (domain_name, years, customer_id, o.s.frv.). |
| $result | `array&lt;string,mixed&gt;` | Hrá niðurstöðufylki sem skrásetjarinn skilar, þar á meðal nýtt expiry_date. |

### Frá útgáfu {#since}

- 2.0.0
### Uppruni {#source}

Skilgreint í [`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L594) í línu 594

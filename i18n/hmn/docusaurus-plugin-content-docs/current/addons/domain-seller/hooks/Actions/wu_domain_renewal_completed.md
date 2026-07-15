---
id: wu_domain_renewal_completed
title: Kev nqis tes - wu_domain_renewal_completed
sidebar_label: wu_domain_renewal_completed
_i18n_hash: d4aa4ba2d3cd00aaa0ea699102a863e6
---
# Kev ua: wu_domain_renewal_completed

Khiav tom qab ib lub domain tau rov txuas sijhawm tiav lawm.

## Cov Parameter {#parameters}

| Lub npe | Hom | Kev piav qhia |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Qhov kev them nyiaj uas ua rau muaj kev rov txuas sijhawm. |
| $renewal_data | `array&lt;string,mixed&gt;` | Cov metadata rau kev rov txuas sijhawm (domain_name, years, customer_id, thiab lwm yam). |
| $result | `array&lt;string,mixed&gt;` | Array txiaj ntsig nyoos uas tus registrar xa rov qab, suav nrog expiry_date tshiab. |

### Txij thaum {#since}

- 2.0.0
### Qhov chaw {#source}

Txhais hauv [`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L594) ntawm kab 594

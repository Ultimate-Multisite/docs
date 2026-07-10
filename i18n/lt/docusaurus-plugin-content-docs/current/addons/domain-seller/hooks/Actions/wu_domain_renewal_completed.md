---
id: wu_domain_renewal_completed
title: Veiksmas - wu_domain_renewal_completed
sidebar_label: wu_domain_renewal_completed
_i18n_hash: d4aa4ba2d3cd00aaa0ea699102a863e6
---
# Veiksmas: wu_domain_renewal_completed {#action-wudomainrenewalcompleted}

Suveikia po to, kai domenas buvo sėkmingai pratęstas.

## Parametrai {#parameters}

| Pavadinimas | Tipas | Aprašymas |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Mokėjimas, kuris inicijavo pratęsimą. |
| $renewal_data | `array&lt;string,mixed&gt;` | Pratęsimo metaduomenys (domain_name, years, customer_id ir t. t.). |
| $result | `array&lt;string,mixed&gt;` | Neapdorotas rezultatų masyvas, kurį grąžino registratorius, įskaitant naują expiry_date. |

### Nuo {#since}

- 2.0.0
### Šaltinis {#source}

Apibrėžta [`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L594) 594 eilutėje

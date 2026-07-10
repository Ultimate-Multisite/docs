---
id: wu_domain_registration_completed
title: Veiksmas - wu_domain_registration_completed
sidebar_label: wu_domain_registration_completed
_i18n_hash: 092b475e74f3b937af068c83eeba2e0a
---
# Veiksmas: wu_domain_registration_completed {#action-wudomainregistrationcompleted}

Suveikia po to, kai domenas sėkmingai užregistruojamas.

## Parametrai {#parameters}

| Pavadinimas | Tipas | Aprašymas |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Mokėjimas, kuris inicijavo registraciją. |
| $registration_data | `array&lt;string,mixed&gt;` | Registracijos metaduomenys (domain_name, provider_id, years, expiry_date ir kt.). |
| $result | `array&lt;string,mixed&gt;` | Neapdorotas rezultatų masyvas, grąžintas registratoriaus. |

### Nuo {#since}

- 2.0.0
### Šaltinis {#source}

Apibrėžta [`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1204) 1204 eilutėje

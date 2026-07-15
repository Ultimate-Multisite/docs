---
id: wu_domain_registration_completed
title: Aktioun - wu_domain_registration_completed
sidebar_label: wu_domain_registration_completed
_i18n_hash: 092b475e74f3b937af068c83eeba2e0a
---
# Aktioun: wu_domain_registration_completed

Gëtt ausgeléist, nodeems eng Domain erfollegräich registréiert gouf.

## Parameteren {#parameters}

| Numm | Typ | Beschreiwung |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | D'Bezuelung, déi d'Registréierung ausgeléist huet. |
| $registration_data | `array&lt;string,mixed&gt;` | Registréierungs-Metadaten (domain_name, provider_id, years, expiry_date, asw.). |
| $result | `array&lt;string,mixed&gt;` | Rau Resultat-Array, deen vum Registrar zeréckginn gouf. |

### Zënter {#since}

- 2.0.0
### Quell {#source}

Definéiert an [`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1204) an der Zeil 1204

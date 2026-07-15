---
id: wu_domain_renewal_completed
title: Aktioun - wu_domain_renewal_completed
sidebar_label: wu_domain_renewal_completed
_i18n_hash: d4aa4ba2d3cd00aaa0ea699102a863e6
---
# Aktioun: wu_domain_renewal_completed

Gëtt ausgeléist, nodeems eng Domain erfollegräich erneiert gouf.

## Parameteren {#parameters}

| Numm | Typ | Beschreiwung |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | D'Bezuelung, déi d'Erneierung ausgeléist huet. |
| $renewal_data | `array&lt;string,mixed&gt;` | Metadaten zur Erneierung (domain_name, years, customer_id, asw.). |
| $result | `array&lt;string,mixed&gt;` | Réit Resultat-Array, dat vun der Registréierungsstell zréckginn gëtt, inklusiv dem neien expiry_date. |

### Zënter {#since}

- 2.0.0
### Quell {#source}

Definéiert an [`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L594) op der Linn 594

---
id: wu_sso_url
title: Filtras - wu_sso_url
sidebar_label: wu_sso_url
_i18n_hash: a369dcf0f4cab1f5941c82ac58286155
---
# Filtras: wu_sso_url {#filter-wussourl}

Filtruoja sugeneruotus SSO URL prieš juos grąžinant kelių domenų klientų veiksmams.

Naudokite šį filtrą, kai integracijai reikia pridėti patikimą kontekstą prie suverenaus nuomininko SSO nuorodos arba pakeisti tarpininko URL, išlaikant Ultimate Multisite tokeno patikrinimą.

## Parametrai {#parameters}

| Pavadinimas | Tipas | Aprašymas |
|------|------|-------------|
| $sso_url | `string` | Sugeneruotas SSO URL. |
| $user | `WP_User` | Naudotojas, kuris bus autentifikuotas SSO apsilankymo metu. |
| $site_id | `int` | Tikslinės svetainės ID šiam apsilankymui. |
| $redirect_to | `string` | Paskirties URL po sėkmingo SSO patikrinimo. |

### Nuo {#since}

- 2.13.0

### Šaltinis {#source}

Apibrėžta `inc/sso/class-sso.php`.


## Grąžina {#returns}

Filtruotą SSO URL.

---
id: wu_sso_url
title: Suodatin - wu_sso_url
sidebar_label: wu_sso_url
_i18n_hash: a369dcf0f4cab1f5941c82ac58286155
---
# Suodatin: wu_sso_url {#filter-wussourl}

Suodattaa luodut SSO-URL-osoitteet ennen kuin ne palautetaan toimialueiden välisiä asiakkaan toimintoja varten.

Käytä tätä suodatinta, kun integraation täytyy lisätä luotettua kontekstia sovereign-tenant SSO -linkkiin tai korvata broker-URL säilyttäen Ultimate Multisite:n token-validointi.

## Parametrit {#parameters}

| Nimi | Tyyppi | Kuvaus |
|------|------|-------------|
| $sso_url | `string` | Luotu SSO-URL. |
| $user | `WP_User` | Käyttäjä, joka todennetaan SSO-käynnillä. |
| $site_id | `int` | Vierailun kohdesivuston ID. |
| $redirect_to | `string` | Kohde-URL onnistuneen SSO-validoinnin jälkeen. |

### Alkaen {#since}

- 2.13.0

### Lähde {#source}

Määritelty tiedostossa `inc/sso/class-sso.php`.


## Palauttaa {#returns}

Suodatettu SSO-URL.

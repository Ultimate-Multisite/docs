---
id: wu_sso_loaded
title: Toiminto - wu_sso_loaded
sidebar_label: wu_sso_loaded
_i18n_hash: b51fa54f84ebce1962a42dac87fcd923
---
# Toiminto: wu_sso_loaded

Salli plugin-kehittäjien lisätä tarvittaessa lisähookeja.

Tätä on viivästettävä init-vaiheeseen asti, sillä SSO on jotain, joka suoritetaan sunrise-vaiheessa.

## Parametrit

| Nimi | Tyyppi | Kuvaus |
|------|------|-------------|
| $sso | `self` | SSO-luokka. |

### Alkaen versiosta

- 2.0.0
### Lähde

Määritelty tiedostossa [`inc/sso/class-sso.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-sso.php#L285) rivillä 285

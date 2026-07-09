---
id: wu_bypass_unset_current_user
title: Suodatin - wu_bypass_unset_current_user
sidebar_label: wu_bypass_unset_current_user
_i18n_hash: fc4c248df410793da1754944250d8b11
---
# Suodatin: wu_bypass_unset_current_user

Salli kehittäjien ohittaa nykyisen käyttäjän unset-koodi.

Minkä tahansa muun kuin null-arvon palauttaminen ohittaa sisäänkirjautuneen nykyisen käyttäjän unset-toiminnon. Tämä voi olla hyödyllistä joissakin tilanteissa, esimerkiksi käsiteltäessä alisivustoja, joita käytetään admin-paneeleina.

## Parametrit

| Nimi | Tyyppi | Kuvaus |
|------|------|-------------|
| $null_or_bypass | `mixed` | Null-arvo jatkamista varten, mikä tahansa muu arvo sen ohittamiseksi. |
| $current_user | `false\|\WP_User` | Nykyisen käyttäjän objekti. |

### Alkaen

- 2.0.11
### Lähde

Määritelty tiedostossa [`inc/compat/class-multiple-accounts-compat.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/compat/class-multiple-accounts-compat.php#L221) rivillä 221


## Palauttaa

---
id: wu_generated_username_from_email
title: Suodatin - wu_generated_username_from_email
sidebar_label: wu_generated_username_from_email
_i18n_hash: ad708562b0c2c9c80d1d5845ef1e67b7
---
# Filter: wu_generated_username_from_email {#filter-wugeneratedusernamefromemail}

Suodata luotu asiakkaan käyttäjätunnus.

## Parametrit {#parameters}

| Nimi | Tyyppi | Kuvaus |
|------|------|-------------|
| $username | `string` | Luotu käyttäjätunnus. |
| $email | `string` | Uuden asiakkaan sähköpostiosoite. |
| $new_user_args | `array` | Uusien käyttäjäargumenttien taulukko, mahdollisesti sisältäen etu- ja sukunimet. |
| $suffix | `string` | Käyttäjätunnukseen lisättävä merkkijono, jotta siitä tulee yksilöllinen. |

### Alkaen {#since}

- 3.7.0
### Lähde {#source}

Määritelty tiedostossa [`inc/functions/customer.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/customer.php#L488) rivillä 488

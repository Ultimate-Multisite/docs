---
id: wu_username_from_email
title: Suodatin - wu_username_from_email
sidebar_label: wu_username_from_email
_i18n_hash: ab432839e318d008d082383ff5a18467
---
# Filter: wu_username_from_email {#filter-wuusernamefromemail}

Suodata uuden asiakkaan käyttäjänimi.

## Parametrit {#parameters}

| Nimi | Tyyppi | Kuvaus |
|------|------|-------------|
| $username | `string` | Asiakkaan käyttäjänimi. |
| $email | `string` | Uuden asiakkaan sähköpostiosoite. |
| $new_user_args | `array` | Uuden käyttäjän argumenttien taulukko, mahdollisesti sisältäen etu- ja sukunimet. |
| $suffix | `string` | Lisää merkkijono käyttäjänimeen, jotta siitä tulee yksilöllinen. |

### Alkaen {#since}

- 2.0.0
### Lähde {#source}

Määritelty tiedostossa [`inc/functions/customer.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/customer.php#L516) rivillä 516

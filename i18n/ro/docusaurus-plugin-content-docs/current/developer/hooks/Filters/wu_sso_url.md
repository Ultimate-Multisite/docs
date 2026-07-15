---
id: wu_sso_url
title: Filtru - wu_sso_url
sidebar_label: wu_sso_url
_i18n_hash: a369dcf0f4cab1f5941c82ac58286155
---
# Filtru: wu_sso_url

Filtrează URL-urile SSO generate înainte ca acestea să fie returnate pentru acțiuni ale clientului între domenii.

Folosiți acest filtru atunci când o integrare trebuie să adauge context de încredere la un link SSO pentru un chiriaș suveran sau să înlocuiască URL-ul brokerului, păstrând în același timp validarea tokenului Ultimate Multisite.

## Parametri {#parameters}

| Nume | Tip | Descriere |
|------|------|-------------|
| $sso_url | `string` | URL SSO generat. |
| $user | `WP_User` | Utilizator care va fi autentificat prin vizita SSO. |
| $site_id | `int` | ID-ul site-ului țintă pentru vizită. |
| $redirect_to | `string` | URL de destinație după validarea SSO reușită. |

### Începând cu {#since}

- 2.13.0

### Sursă {#source}

Definit în `inc/sso/class-sso.php`.


## Returnează {#returns}

URL SSO filtrat.

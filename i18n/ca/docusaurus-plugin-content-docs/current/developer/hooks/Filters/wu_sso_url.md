---
id: wu_sso_url
title: Filtre - wu_sso_url
sidebar_label: wu_sso_url
_i18n_hash: a369dcf0f4cab1f5941c82ac58286155
---
# Filtre: wu_sso_url

Filtra els URL de SSO generats abans que es retornin per a accions de clients entre dominis.

Utilitzeu aquest filtre quan una integració necessiti afegir context de confiança a un enllaç SSO d’inquilí sobirà o substituir l’URL del broker mantenint la validació del token d'Ultimate Multisite.

## Paràmetres {#parameters}

| Nom | Tipus | Descripció |
|------|------|-------------|
| $sso_url | `string` | URL de SSO generat. |
| $user | `WP_User` | Usuari que serà autenticat per la visita SSO. |
| $site_id | `int` | ID del lloc de destinació per a la visita. |
| $redirect_to | `string` | URL de destinació després de la validació SSO correcta. |

### Des de {#since}

- 2.13.0

### Font {#source}

Definit a `inc/sso/class-sso.php`.


## Retorna {#returns}

URL de SSO filtrat.

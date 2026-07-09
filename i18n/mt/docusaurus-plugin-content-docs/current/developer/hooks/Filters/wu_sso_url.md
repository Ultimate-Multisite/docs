---
id: wu_sso_url
title: Filtru - wu_sso_url
sidebar_label: wu_sso_url
_i18n_hash: a369dcf0f4cab1f5941c82ac58286155
---
# Filtru: wu_sso_url

Jiffiltra URLs SSO ġġenerati qabel ma jiġu rritornati għal azzjonijiet tal-klijenti bejn dominji.

Uża dan il-filtru meta integrazzjoni teħtieġ iżżid kuntest fdat ma' link SSO ta' kerrej sovran jew tissostitwixxi l-URL tal-broker filwaqt li tippreserva l-validazzjoni tat-token ta' Ultimate Multisite.

## Parametri

| Isem | Tip | Deskrizzjoni |
|------|------|-------------|
| $sso_url | `string` | URL SSO ġġenerat. |
| $user | `WP_User` | Utent li se jiġi awtentikat miż-żjara SSO. |
| $site_id | `int` | ID tas-sit fil-mira għaż-żjara. |
| $redirect_to | `string` | URL tad-destinazzjoni wara validazzjoni SSO b'suċċess. |

### Minn

- 2.13.0

### Sors

Iddefinit f'`inc/sso/class-sso.php`.


## Jirritorna

URL SSO ffiltrat.

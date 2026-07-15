---
id: wu_sso_url
title: Filtër - wu_sso_url
sidebar_label: wu_sso_url
_i18n_hash: a369dcf0f4cab1f5941c82ac58286155
---
# Filtër: wu_sso_url

Filtron URL-të SSO të gjeneruara përpara se të kthehen për veprime klientësh ndër-domene.

Përdoreni këtë filtër kur një integrim duhet të shtojë kontekst të besuar te një lidhje SSO e tenant-it sovran ose të zëvendësojë URL-në e broker-it duke ruajtur validimin e token-it të Ultimate Multisite.

## Parametrat {#parameters}

| Emri | Tipi | Përshkrimi |
|------|------|-------------|
| $sso_url | `string` | URL SSO e gjeneruar. |
| $user | `WP_User` | Përdoruesi që do të autentikohet nga vizita SSO. |
| $site_id | `int` | ID-ja e faqes së synuar për vizitën. |
| $redirect_to | `string` | URL-ja e destinacionit pas validimit të suksesshëm SSO. |

### Që nga {#since}

- 2.13.0

### Burimi {#source}

Përcaktuar në `inc/sso/class-sso.php`.


## Kthen {#returns}

URL SSO e filtruar.

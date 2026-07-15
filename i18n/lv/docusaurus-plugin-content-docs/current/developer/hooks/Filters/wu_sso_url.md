---
id: wu_sso_url
title: Filtrs - wu_sso_url
sidebar_label: wu_sso_url
_i18n_hash: a369dcf0f4cab1f5941c82ac58286155
---
# Filtrs: wu_sso_url

Filtrē ģenerētos SSO URL, pirms tie tiek atgriezti starpdomēnu klientu darbībām.

Izmantojiet šo filtru, kad integrācijai jāpievieno uzticams konteksts suverēna nomnieka SSO saitei vai jāaizstāj broker URL, vienlaikus saglabājot Ultimate Multisite token validāciju.

## Parametri {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $sso_url | `string` | Ģenerētais SSO URL. |
| $user | `WP_User` | Lietotājs, kurš tiks autentificēts ar SSO apmeklējumu. |
| $site_id | `int` | Mērķa vietnes ID apmeklējumam. |
| $redirect_to | `string` | Galamērķa URL pēc veiksmīgas SSO validācijas. |

### Kopš {#since}

- 2.13.0

### Avots {#source}

Definēts `inc/sso/class-sso.php`.


## Atgriež {#returns}

Filtrēto SSO URL.

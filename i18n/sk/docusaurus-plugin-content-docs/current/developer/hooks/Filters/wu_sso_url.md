---
id: wu_sso_url
title: Filter - wu_sso_url
sidebar_label: wu_sso_url
_i18n_hash: a369dcf0f4cab1f5941c82ac58286155
---
# Filter: wu_sso_url

Filtruje vygenerované SSO URL pred ich vrátením pre zákaznícke akcie medzi doménami.

Použite tento filter, keď integrácia potrebuje pridať dôveryhodný kontext do odkazu SSO suverénneho tenanta alebo nahradiť URL brokera pri zachovaní overovania tokenu Ultimate Multisite.

## Parametre {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $sso_url | `string` | Vygenerovaná SSO URL. |
| $user | `WP_User` | Používateľ, ktorý bude autentifikovaný návštevou SSO. |
| $site_id | `int` | ID cieľovej lokality pre návštevu. |
| $redirect_to | `string` | Cieľová URL po úspešnom overení SSO. |

### Od verzie {#since}

- 2.13.0

### Zdroj {#source}

Definované v `inc/sso/class-sso.php`.


## Návratová hodnota {#returns}

Filtrovaná SSO URL.

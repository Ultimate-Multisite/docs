---
id: wu_sso_url
title: Filtr - wu_sso_url
sidebar_label: wu_sso_url
_i18n_hash: a369dcf0f4cab1f5941c82ac58286155
---
# Filter: wu_sso_url

Filtruje vygenerované SSO URL před jejich vrácením pro zákaznické akce napříč doménami.

Použijte tento filtr, když integrace potřebuje přidat důvěryhodný kontext k odkazu SSO suverénního tenanta nebo nahradit URL brokera při zachování validace tokenu Ultimate Multisite.

## Parametry {#parameters}

| Název | Typ | Popis |
|------|------|-------------|
| $sso_url | `string` | Vygenerované SSO URL. |
| $user | `WP_User` | Uživatel, který bude ověřen návštěvou SSO. |
| $site_id | `int` | ID cílového webu pro návštěvu. |
| $redirect_to | `string` | Cílová URL po úspěšné validaci SSO. |

### Od verze {#since}

- 2.13.0

### Zdroj {#source}

Definováno v `inc/sso/class-sso.php`.


## Návratová hodnota {#returns}

Filtrovaná SSO URL.

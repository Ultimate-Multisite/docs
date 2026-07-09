---
id: wu_sso_enabled
title: Filter - wu_sso_enabled
sidebar_label: wu_sso_enabled
_i18n_hash: 67263dea6df806158e5d4c9bdb984acf
---
# Filter: wu_sso_enabled {#filter-wussoenabled}

Slår evnen for single-sign-on (SSO) på tvers av domener av/på.

Bruk dette filteret for å slå av single-sign-on helt, eller for å aktivere det betinget i stedet.

## Parametere {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $enabled | `bool` | Skal SSO være aktivert? `True` betyr på, `false` betyr av. |

### Siden {#since}

- 2.0.11
### Kilde {#source}

Definert i [`inc/sso/class-sso.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-sso.php#L110) på linje 110


## Returnerer {#returns}
Om SSO er aktivert eller ikke.

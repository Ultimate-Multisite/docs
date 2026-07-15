---
id: wu_sso_enabled
title: Filter - wu_sso_enabled
sidebar_label: wu_sso_enabled
_i18n_hash: 67263dea6df806158e5d4c9bdb984acf
---
# Filter: wu_sso_enabled

Aktivér/deaktiver single-sign-on-funktionalitet på tværs af domæner.

Filtrer denne værdi for at slå single-sign-on helt fra, eller aktivér det betinget i stedet.

## Parametre {#parameters}

| Navn | Type | Beskrivelse |
|------|------|-------------|
| $enabled | `bool` | Skal SSO være aktiveret? True for til, false-agtig for fra. |

### Siden {#since}

- 2.0.11
### Kilde {#source}

Defineret i [`inc/sso/class-sso.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-sso.php#L110) på linje 110


## Returnerer {#returns}
Om SSO er aktiveret eller ej.

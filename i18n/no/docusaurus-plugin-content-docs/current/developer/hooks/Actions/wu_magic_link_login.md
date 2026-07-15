---
id: wu_magic_link_login
title: Handling - wu_magic_link_login
sidebar_label: wu_magic_link_login
_i18n_hash: 4682ae341c1806000c2d4ca3f0af0b2e
---
# Action: wu_magic_link_login

Kjøres etter at en bruker har logget inn via magic link.

## Parametere {#parameters}

| Navn | Type | Beskrivelse |
|------|------|-------------|
| $user_id | `int` | Bruker-ID-en. |
| $site_id | `int` | Nettside-ID-en. |

### Tilgjengelig siden {#since}

- 2.0.0
### Kilde {#source}

Definert i [`inc/sso/class-magic-link.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-magic-link.php#L240) på linje 240

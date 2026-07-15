---
id: wu_magic_link_enforce_user_agent
title: Filter - wu_magic_link_enforce_user_agent
sidebar_label: wu_magic_link_enforce_user_agent
_i18n_hash: 33252b9660851a8fe51ff7ed586d9cf2
---
# Filter: wu_magic_link_enforce_user_agent

Filtrerer om man skal håndheve verifisering av brukeragent.

Sett til `false` for å la tokens fungere på tvers av forskjellige nettlesere/enheter. Dette reduserer sikkerheten, men øker brukervennligheten.

## Parametere {#parameters}

| Navn | Type | Beskrivelse |
|------|------|-------------|
| $enforce | `bool` | Om brukeragent-matching skal håndheves. |

### Siden {#since}

- 2.0.0
### Kilde {#source}

Definert i [`inc/sso/class-magic-link.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-magic-link.php#L410) på linje 410

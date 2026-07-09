---
id: wu_magic_link_enforce_user_agent
title: Filter - wu_magic_link_enforce_user_agent
sidebar_label: wu_magic_link_enforce_user_agent
_i18n_hash: 33252b9660851a8fe51ff7ed586d9cf2
---
# Filter: wu_magic_link_enforce_user_agent

Filtrér, om verifikation af user agent skal håndhæves.

Sæt til false for at lade tokens virke på tværs af forskellige browsere/enheder. Dette reducerer sikkerheden, men øger brugervenligheden.

## Parametre

| Name | Type | Description |
|------|------|-------------|
| $enforce | `bool` | Om matchning af user agent skal håndhæves. |

### Siden

- 2.0.0
### Kilde

Defineret i [`inc/sso/class-magic-link.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-magic-link.php#L410) på linje 410

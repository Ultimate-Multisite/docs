---
id: wu_magic_link_enforce_user_agent
title: Filtre - wu_magic_link_enforce_user_agent
sidebar_label: wu_magic_link_enforce_user_agent
_i18n_hash: 33252b9660851a8fe51ff7ed586d9cf2
---
# Filtre: wu_magic_link_enforce_user_agent

Filtra si s’ha d’aplicar la verificació de l’agent d’usuari.

Estableix-ho a false per permetre que els tokens funcionin en diferents navegadors/dispositius. Això redueix la seguretat però augmenta la usabilitat.

## Paràmetres {#parameters}

| Nom | Tipus | Descripció |
|------|------|-------------|
| $enforce | `bool` | Si s’ha d’aplicar la coincidència de l’agent d’usuari. |

### Des de {#since}

- 2.0.0
### Font {#source}

Definit a [`inc/sso/class-magic-link.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-magic-link.php#L410) a la línia 410

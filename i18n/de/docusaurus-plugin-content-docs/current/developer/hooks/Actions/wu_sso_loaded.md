---
id: wu_sso_loaded
title: Aktion - wu_sso_loaded
sidebar_label: wu_sso_loaded
_i18n_hash: b51fa54f84ebce1962a42dac87fcd923
---
# Aktion: wu_sso_loaded

Ermöglicht Plugin-Entwicklern, zusätzliche Hooks hinzuzufügen, falls erforderlich.

Dies muss bis zur init verzögert werden, da SSO etwas ist, das bei Sonnenaufgang ausgeführt wird.

## Parameter {#parameters}

| Name | Typ | Beschreibung |
|------|------|-------------|
| $sso | `self` | Die SSO-Klasse. |

### Seit {#since}

- 2.0.0

### Quelle {#source}

Definiert in [`inc/sso/class-sso.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-sso.php#L285) bei Zeile 285

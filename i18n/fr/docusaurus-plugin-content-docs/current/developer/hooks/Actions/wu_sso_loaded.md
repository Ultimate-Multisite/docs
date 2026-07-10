---
id: wu_sso_loaded
title: Action - wu_sso_loaded
sidebar_label: wu_sso_loaded
_i18n_hash: b51fa54f84ebce1962a42dac87fcd923
---
# Action: wu_sso_loaded {#action-wussoloaded}

Permet aux développeurs de plugins d'ajouter des hooks supplémentaires, si nécessaire.

Cela doit être retardé jusqu'à l'initialisation car le SSO est quelque chose qui s'exécute au lever du soleil.

## Parameters {#parameters}

| Nom | Type | Description |
|------|------|-------------|
| $sso | `self` | La classe SSO. |

### Since {#since}

- 2.0.0
### Source {#source}

Défini dans [`inc/sso/class-sso.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-sso.php#L285) à la ligne 285

---
id: wu_sso_loaded
title: Acció - wu_sso_loaded
sidebar_label: wu_sso_loaded
_i18n_hash: b51fa54f84ebce1962a42dac87fcd923
---
# Aquesta acció: wu_sso_loaded {#action-wussoloaded}

Permet als desenvolupadors de plugins afegir "hooks" addicionals, si ho cal.

Això ha de posposar fins a l'inicialització perquè el SSO és una cosa que s'executa al moment del *sunrise* (la inicialització principal).

## Paràmetres {#parameters}

| Nom | Tip | Descripció |
|------|------|-------------|
| `$sso` | `self` | La classe SSO. |

### Des de {#since}

- 2.0.0
### Font {#source}

Definida en [`inc/sso/class-sso.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-sso.php#L285) a la línia 285

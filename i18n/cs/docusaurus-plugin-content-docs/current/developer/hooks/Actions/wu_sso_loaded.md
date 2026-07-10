---
id: wu_sso_loaded
title: Akce - wu_sso_loaded
sidebar_label: wu_sso_loaded
_i18n_hash: b51fa54f84ebce1962a42dac87fcd923
---
# Action: wu_sso_loaded {#action-wussoloaded}

Umožňuje vývojářům pluginů přidat další háčky (hooks), pokud je to nutné.

To je třeba zpozdit do fáze `init`, protože SSO běží v době, kdy se stránka právě načítá (sunrise).

## Parametry {#parameters}

| Název | Typ | Popis |
|------|------|-------------|
| $sso | `self` | Třída SSO. |

### Od {#since}

- 2.0.0
### Zdroj {#source}

Definováno v [`inc/sso/class-sso.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-sso.php#L285) na řádku 285

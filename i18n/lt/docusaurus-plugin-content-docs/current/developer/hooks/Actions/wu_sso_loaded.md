---
id: wu_sso_loaded
title: Veiksmas - wu_sso_loaded
sidebar_label: wu_sso_loaded
_i18n_hash: b51fa54f84ebce1962a42dac87fcd923
---
# Veiksmas: wu_sso_loaded {#action-wussoloaded}

Leiskite įskiepių kūrėjams pridėti papildomų hook, jei reikia.

Tai turi būti atidėta iki init, nes SSO yra tai, kas vykdoma per sunrise.

## Parametrai {#parameters}

| Pavadinimas | Tipas | Aprašymas |
|------|------|-------------|
| $sso | `self` | SSO klasė. |

### Nuo {#since}

- 2.0.0
### Šaltinis {#source}

Apibrėžta [`inc/sso/class-sso.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-sso.php#L285) 285 eilutėje

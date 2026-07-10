---
id: wu_enforce_password_rules
title: Filtru - wu_enforce_password_rules
sidebar_label: wu_enforce_password_rules
_i18n_hash: bb85ebfcf4a234a043f75de3d07e47ee
---
# Filtru: wu_enforce_password_rules {#filter-wuenforcepasswordrules}

Iffiltra jekk għandhomx jiġu infurzati regoli addizzjonali għall-password.

Meta jkun true, jinfurza rekwiżiti ta' tul minimu u karattri. Jiġi attivat awtomatikament għall-issettjar "Super Strong" jew meta l-karatteristika Strong Password ta' Defender Pro tkun attiva.

## Parametri {#parameters}

| Isem | Tip | Deskrizzjoni |
|------|------|-------------|
| $enforce_rules | `bool` | Jekk għandhomx jiġu infurzati regoli addizzjonali. |
| $strength_setting | `string` | Il-valur tal-issettjar tal-admin. |
| $defender_active | `bool` | Jekk Defender Pro Strong Password huwiex attiv. |

### Minn {#since}

- 2.4.0
### Sors {#source}

Definit f'[`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L531) fil-linja 531

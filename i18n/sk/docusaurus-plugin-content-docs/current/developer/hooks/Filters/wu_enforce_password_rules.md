---
id: wu_enforce_password_rules
title: Filter – wu_enforce_password_rules
sidebar_label: wu_enforce_password_rules
_i18n_hash: bb85ebfcf4a234a043f75de3d07e47ee
---
# Filter: wu_enforce_password_rules {#filter-wuenforcepasswordrules}

Filtruje, či sa majú vynútiť dodatočné pravidlá hesla.

Keď je hodnota true, vynúti minimálnu dĺžku a požiadavky na znaky. Automaticky povolené pre nastavenie „Super Strong“ alebo keď je aktívna funkcia Strong Password v Defender Pro.

## Parametre {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $enforce_rules | `bool` | Či sa majú vynútiť dodatočné pravidlá. |
| $strength_setting | `string` | Hodnota nastavenia admina. |
| $defender_active | `bool` | Či je aktívny Defender Pro Strong Password. |

### Od verzie {#since}

- 2.4.0
### Zdroj {#source}

Definované v [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L531) na riadku 531

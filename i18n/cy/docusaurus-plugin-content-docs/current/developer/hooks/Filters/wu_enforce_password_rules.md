---
id: wu_enforce_password_rules
title: Hidlydd - wu_enforce_password_rules
sidebar_label: wu_enforce_password_rules
_i18n_hash: bb85ebfcf4a234a043f75de3d07e47ee
---
# Hidlydd: wu_enforce_password_rules

Hidlo a ddylid gorfodi rheolau cyfrinair ychwanegol.

Pan yn true, mae'n gorfodi isafswm hyd a gofynion nodau. Wedi'i alluogi'n awtomatig ar gyfer y gosodiad "Super Strong" neu pan fo nodwedd Strong Password Defender Pro yn weithredol.

## Paramedrau {#parameters}

| Enw | Math | Disgrifiad |
|------|------|-------------|
| $enforce_rules | `bool` | A ddylid gorfodi rheolau ychwanegol. |
| $strength_setting | `string` | Gwerth gosodiad yr admin. |
| $defender_active | `bool` | A yw Strong Password Defender Pro yn weithredol. |

### Ers {#since}

- 2.4.0
### Ffynhonnell {#source}

Diffinnir yn [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L531) ar linell 531

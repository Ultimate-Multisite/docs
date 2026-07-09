---
id: wu_enforce_password_rules
title: Sefe - wu_enforce_password_rules
sidebar_label: wu_enforce_password_rules
_i18n_hash: bb85ebfcf4a234a043f75de3d07e47ee
---
# Sefe: wu_enforce_password_rules {#filter-wuenforcepasswordrules}

Sefa hore na ho qobelloe melao e eketsehileng ea phasewete.

Ha e le true, e qobella bonyane ba bolelele le litlhoko tsa litlhaku. E nolofalletsoa ka bo eona bakeng sa setting ea "Super Strong" kapa ha tšobotsi ea Strong Password ea Defender Pro e sebetsa.

## Dipharamitha {#parameters}

| Lebitso | Mofuta | Tlhaloso |
|------|------|-------------|
| $enforce_rules | `bool` | Hore na ho qobelloe melao e eketsehileng. |
| $strength_setting | `string` | Boleng ba setting ba motsamaisi. |
| $defender_active | `bool` | Hore na Defender Pro Strong Password e sebetsa. |

### Ho tloha {#since}

- 2.4.0
### Mohloli {#source}

E hlalositsoe ho [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L531) moleng oa 531

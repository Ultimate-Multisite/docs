---
id: wu_enforce_password_rules
title: Tace - wu_enforce_password_rules
sidebar_label: wu_enforce_password_rules
_i18n_hash: bb85ebfcf4a234a043f75de3d07e47ee
---
# Tacewa: wu_enforce_password_rules {#filter-wuenforcepasswordrules}

Tace ko a tilasta ƙarin dokokin kalmar sirri.

Idan gaskiya ne, yana tilasta mafi ƙarancin tsawo da buƙatun haruffa. Ana kunna shi ta atomatik don saitin "Super Strong" ko lokacin da fasalin Strong Password na Defender Pro yake aiki.

## Sigogi {#parameters}

| Suna | Nau'i | Bayani |
|------|------|-------------|
| $enforce_rules | `bool` | Ko a tilasta ƙarin dokoki. |
| $strength_setting | `string` | Ƙimar saitin admin. |
| $defender_active | `bool` | Ko Defender Pro Strong Password yana aiki. |

### Tun daga {#since}

- 2.4.0
### Tushe {#source}

An bayyana a cikin [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L531) a layi na 531

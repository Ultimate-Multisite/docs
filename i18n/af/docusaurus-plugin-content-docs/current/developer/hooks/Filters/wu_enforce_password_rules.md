---
id: wu_enforce_password_rules
title: Filter - wu_enforce_password_rules
sidebar_label: wu_enforce_password_rules
_i18n_hash: bb85ebfcf4a234a043f75de3d07e47ee
---
# Filter: wu_enforce_password_rules {#filter-wuenforcepasswordrules}

Filter of ek bykomende wagwoordreëls gehandhaaf moet word.

Wanneer dit waar is, handhaaf dit minimum lengte- en karaktervereistes. Dit word outomaties geaktiveer vir die "Super Strong" instelling of wanneer Defender Pro se Strong Password-funksie aktief is.

## Parameters {#parameters}

| Name | Type | Beskrywing |
|------|------|-------------|
| $enforce_rules | `bool` | Of bykomende reëls gehandhaaf moet word. |
| $strength_setting | `string` | Die administrasie-instellingwaarde. |
| $defender_active | `bool` | Of Defender Pro Strong Password aktief is. |

### Sedert {#since}

- 2.4.0
### Bron {#source}

Defined in [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L531) at line 531

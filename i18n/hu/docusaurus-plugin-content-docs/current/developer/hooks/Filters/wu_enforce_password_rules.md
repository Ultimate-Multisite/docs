---
id: wu_enforce_password_rules
title: Szűrő - wu_enforce_password_rules
sidebar_label: wu_enforce_password_rules
_i18n_hash: bb85ebfcf4a234a043f75de3d07e47ee
---
# Filter: wu_enforce_password_rules

Szűrő, amely meghatározza, hogy kötelezi-e további jelszó szabályokat.

Ha igaz (true), kötelezi a minimális hosszúsági és karakterkövetelményeket. Automatikusan aktiválódik a "Super Strong" beállításnál, vagy ha a Defender Pro Strong Password funkció aktív.

## Paraméterek {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $enforce_rules | `bool` | Az, hogy kötelezi-e további szabályokat. |
| $strength_setting | `string` | Az admin beállítási érték. |
| $defender_active | `bool` | Az, hogy aktív-e a Defender Pro Strong Password. |

### Since {#since}

- 2.4.0
### Source {#source}

Defined in [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L531) at line 531

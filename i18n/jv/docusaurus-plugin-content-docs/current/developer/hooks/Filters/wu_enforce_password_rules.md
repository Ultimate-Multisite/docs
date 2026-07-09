---
id: wu_enforce_password_rules
title: Saringan - wu_enforce_password_rules
sidebar_label: wu_enforce_password_rules
_i18n_hash: bb85ebfcf4a234a043f75de3d07e47ee
---
# Filter: wu_enforce_password_rules

Filter apa arep ngetrapake aturan sandhi tambahan.

Nalika true, ngetrapake dawa minimal lan syarat karakter. Diaktifake kanthi otomatis kanggo setelan "Super Strong" utawa nalika fitur Strong Password saka Defender Pro aktif.

## Parameter

| Name | Type | Description |
|------|------|-------------|
| $enforce_rules | `bool` | Apa arep ngetrapake aturan tambahan. |
| $strength_setting | `string` | Nilai setelan admin. |
| $defender_active | `bool` | Apa Defender Pro Strong Password aktif. |

### Wiwit

- 2.4.0
### Sumber

Ditetepake ing [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L531) ing baris 531

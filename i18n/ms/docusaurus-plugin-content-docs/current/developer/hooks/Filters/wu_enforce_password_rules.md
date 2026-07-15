---
id: wu_enforce_password_rules
title: Filter - wu_enforce_password_rules
sidebar_label: wu_enforce_password_rules
_i18n_hash: bb85ebfcf4a234a043f75de3d07e47ee
---
# Filter: wu_enforce_password_rules

Menapis sama ada untuk menguatkuasakan peraturan kata laluan tambahan.

Apabila ditetapkan kepada `true`, ia akan menguatkuasakan keperluan panjang minimum dan karakter. Ini diaktifkan secara automatik untuk tetapan "Super Strong" atau apabila ciri Strong Password Defender Pro aktif.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $enforce_rules | `bool` | Sama ada untuk menguatkuasakan peraturan tambahan. |
| $strength_setting | `string` | Nilai tetapan pentadbir. |
| $defender_active | `bool` | Sama ada Strong Password Defender Pro aktif. |

### Since {#since}

- 2.4.0
### Source {#source}

Defined in [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L531) at line 531

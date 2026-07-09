---
id: wu_enforce_password_rules
title: Nzacha - wu_enforce_password_rules
sidebar_label: wu_enforce_password_rules
_i18n_hash: bb85ebfcf4a234a043f75de3d07e47ee
---
# Filter: wu_enforce_password_rules

Filter ma a ga-amanye iwu paswọọdụ ndị ọzọ.

Mgbe ọ bụ true, ọ na-amanye ogologo kacha nta na ihe achọrọ gbasara mkpụrụedemede. A na-eme ya ka ọ rụọ ọrụ na-akpaghị aka maka ntọala "Super Strong" ma ọ bụ mgbe atụmatụ Strong Password nke Defender Pro na-arụ ọrụ.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $enforce_rules | `bool` | Ma a ga-amanye iwu ndị ọzọ. |
| $strength_setting | `string` | Uru ntọala admin. |
| $defender_active | `bool` | Ma Defender Pro Strong Password na-arụ ọrụ. |

### Kemgbe

- 2.4.0
### Isi mmalite

A kọwara ya na [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L531) na ahịrị 531

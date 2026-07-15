---
id: wu_enforce_password_rules
title: Filter - wu_enforce_password_rules
sidebar_label: wu_enforce_password_rules
_i18n_hash: bb85ebfcf4a234a043f75de3d07e47ee
---
# Filter: wu_enforce_password_rules

Kinokontrol nito kung ipapatupad ba ang mga karagdagang patakaran sa password.

Kapag itinakda sa `true`, ipapatupad nito ang mga kinakailangan sa minimum na haba at uri ng karakter. Awtomatikong naka-enable ito para sa setting na "Super Strong" o kapag aktibo ang feature na Strong Password ng Defender Pro.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $enforce_rules | `bool` | Kung ipapatupad ba ang mga karagdagang patakaran. |
| $strength_setting | `string` | Ang value ng admin setting. |
| $defender_active | `bool` | Kung aktibo ba ang Defender Pro Strong Password. |

### Since {#since}

- 2.4.0
### Source {#source}

Nakatakda sa [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L531) sa linya 531

---
id: wu_enforce_password_rules
title: Filtr - wu_enforce_password_rules
sidebar_label: wu_enforce_password_rules
_i18n_hash: bb85ebfcf4a234a043f75de3d07e47ee
---
# Filtr: wu_enforce_password_rules {#filter-wuenforcepasswordrules}

Filtr, który decyduje o egzekwowaniu dodatkowych zasad dla hasła.

Jeśli wartość jest `true`, wymusza minimalną długość i wymagania dotyczące znaków. Funkcja jest automatycznie włączana dla ustawienia „Super Strong” lub gdy funkcja silnego hasła Defender Pro jest aktywna.

## Parametry {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $enforce_rules | `bool` | Czy należy egzekwować dodatkowe zasady. |
| $strength_setting | `string` | Wartość ustawienia administratora. |
| $defender_active | `bool` | Czy funkcja silnego hasła Defender Pro jest aktywna. |

### Since {#since}

- 2.4.0
### Source {#source}

Zdefiniowane w [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L531) w linii 531

---
id: wu_enforce_password_rules
title: Filtras - wu_enforce_password_rules
sidebar_label: wu_enforce_password_rules
_i18n_hash: bb85ebfcf4a234a043f75de3d07e47ee
---
# Filtras: wu_enforce_password_rules

Filtruoja, ar taikyti papildomas slaptažodžių taisykles.

Kai reikšmė true, taikomi minimalaus ilgio ir simbolių reikalavimai. Automatiškai įjungiama pasirinkus nustatymą „Itin stiprus“ arba kai aktyvi Defender Pro funkcija „Stiprus slaptažodis“.

## Parametrai {#parameters}

| Pavadinimas | Tipas | Aprašymas |
|------|------|-------------|
| $enforce_rules | `bool` | Ar taikyti papildomas taisykles. |
| $strength_setting | `string` | Administratoriaus nustatymo reikšmė. |
| $defender_active | `bool` | Ar Defender Pro „Stiprus slaptažodis“ yra aktyvus. |

### Nuo versijos {#since}

- 2.4.0
### Šaltinis {#source}

Apibrėžta [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L531) 531 eilutėje

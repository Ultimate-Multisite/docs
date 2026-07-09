---
id: wu_enforce_password_rules
title: Филтр - wu_enforce_password_rules
sidebar_label: wu_enforce_password_rules
_i18n_hash: bb85ebfcf4a234a043f75de3d07e47ee
---
# Филтр: wu_enforce_password_rules

Филтр мекунад, ки оё қоидаҳои иловагии гузарвожа татбиқ шаванд ё не.

Вақте true аст, дарозии ҳадди ақал ва талаботи аломатҳоро татбиқ мекунад. Барои танзими "Super Strong" ё вақте ки хусусияти Strong Password-и Defender Pro фаъол аст, ба таври худкор фаъол карда мешавад.

## Параметрҳо

| Ном | Навъ | Тавсиф |
|------|------|-------------|
| $enforce_rules | `bool` | Оё қоидаҳои иловагӣ татбиқ шаванд ё не. |
| $strength_setting | `string` | Арзиши танзими мудир. |
| $defender_active | `bool` | Оё Defender Pro Strong Password фаъол аст ё не. |

### Аз версияи

- 2.4.0
### Манбаъ

Дар [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L531) дар сатри 531 муайян шудааст

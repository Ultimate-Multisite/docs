---
id: wu_bypass_unset_current_user
title: Филтр - wu_bypass_unset_current_user
sidebar_label: wu_bypass_unset_current_user
_i18n_hash: fc4c248df410793da1754944250d8b11
---
# Филтр: wu_bypass_unset_current_user

Ба таҳиягарон иҷозат медиҳад, ки коди unset кардани корбари ҷориро гузаранд.

Баргардонидани ҳар чизе ғайр аз null, unset кардани корбари ҷории воридшударо мегузарад. Ин метавонад дар баъзе ҳолатҳо муфид бошад, масалан, ҳангоми кор бо зер-сайтҳое, ки ҳамчун панелҳои идоракунӣ истифода мешаванд.

## Параметрҳо

| Ном | Навъ | Тавсиф |
|------|------|-------------|
| $null_or_bypass | `mixed` | Null барои идома додан, ҳар чизи дигар барои гузаштани он. |
| $current_user | `false\|\WP_User` | Объекти корбари ҷорӣ. |

### Аз версияи

- 2.0.11
### Манбаъ

Дар [`inc/compat/class-multiple-accounts-compat.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/compat/class-multiple-accounts-compat.php#L221) дар сатри 221 муайян шудааст


## Бармегардонад

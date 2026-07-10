---
id: wu_enforce_password_rules
title: Фільтр - wu_enforce_password_rules
sidebar_label: wu_enforce_password_rules
_i18n_hash: bb85ebfcf4a234a043f75de3d07e47ee
---
# Filter: wu_enforce_password_rules {#filter-wuenforcepasswordrules}

Вызначае, трэба ці не трэба вымагаць дадатковыя правілы для пароля.

Калі гэта значэнне `true`, вымушае выкананне мінімальнай даўжыні і патрабаванняў па сімвалах. Гэта аўтаматычна ўключаецца для ўстаўкі "Super Strong" або калі функцыя Strong Password ад Defender Pro актыўная.

## Параметры {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $enforce_rules | `bool` | Вызначае, трэба вымагаць дадатковыя правілы. |
| $strength_setting | `string` | Значэнне ад адмініструванай ўстаўцы. |
| $defender_active | `bool` | Вызначае, ці актыўная функцыя Strong Password ад Defender Pro. |

### Since {#since}

- 2.4.0
### Source {#source}

Вызначана ў [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L531) у 531-й пасылцы

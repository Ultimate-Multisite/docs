---
id: wu_enforce_password_rules
title: Филтер - wu_enforce_password_rules
sidebar_label: wu_enforce_password_rules
_i18n_hash: bb85ebfcf4a234a043f75de3d07e47ee
---
# Филтер: wu_enforce_password_rules

Филтрира да ли да се примењују додатна правила за лозинке.

Када је true, примењује минималну дужину и захтеве за знакове. Аутоматски је омогућено за подешавање „Super Strong“ или када је функција Strong Password у Defender Pro активна.

## Параметри {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $enforce_rules | `bool` | Да ли да се примењују додатна правила. |
| $strength_setting | `string` | Вредност администраторског подешавања. |
| $defender_active | `bool` | Да ли је Defender Pro Strong Password активан. |

### Од верзије {#since}

- 2.4.0
### Извор {#source}

Дефинисано у [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L531) у реду 531

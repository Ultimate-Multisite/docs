---
id: wu_site_created
title: Радња - wu_site_created
sidebar_label: wu_site_created
_i18n_hash: 0f7bc337be7a1f9c47c1e442fe04b9ae
---
# Action: wu_site_created {#action-wusitecreated}

Покреће се након што се сајт први пут креира.

Не покреће се ако је дуплиран из шаблона.

## Параметри {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $data | `array` | Подаци објекта који ће бити сачувани. |
| $site | `\Site` | Инстанца објекта. |

### Од верзије {#since}

- 2.0.0
### Извор {#source}

Дефинисано у [`inc/models/class-site.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-site.php#L1652) у линији 1652

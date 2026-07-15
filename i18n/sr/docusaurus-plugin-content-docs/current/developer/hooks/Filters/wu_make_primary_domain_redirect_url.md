---
id: wu_make_primary_domain_redirect_url
title: Филтер - wu_make_primary_domain_redirect_url
sidebar_label: wu_make_primary_domain_redirect_url
_i18n_hash: bda96824db400b25e97802e5567df22d
---
# Филтер: wu_make_primary_domain_redirect_url

Филтрира URL преусмеравања након постављања домена као примарног.

Омогућава програмерима да прилагоде куда се корисници преусмеравају након успешног постављања домена као примарног. Подразумевано преусмерава на тренутни URL на главном сајту, или на администраторски URL сајта који се мења.

## Параметри {#parameters}

| Назив | Тип | Опис |
|------|------|-------------|
| $redirect_url | `string` | Подразумевани URL преусмеравања. Или тренутни URL (ако је главни сајт) или администраторски URL тренутног сајта. |
| $current_site | `int` | ID сајта чији се домен поставља као примарни. |
| $domain | `\Domain` | Објекат домена који је постављен као примарни. |
| $old_primary_domains | `array` | Низ ID-ева домена који су претходно били примарни. |

### Од верзије {#since}

- 2.0.0
### Извор {#source}

Дефинисано у [`inc/ui/class-domain-mapping-element.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/ui/class-domain-mapping-element.php#L639) у реду 639


## Враћа {#returns}
Филтрирани URL преусмеравања.

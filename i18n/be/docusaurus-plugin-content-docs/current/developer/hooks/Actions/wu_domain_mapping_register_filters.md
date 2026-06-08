---
id: wu_domain_mapping_register_filters
title: Дзея - wu_domain_mapping_register_filters
sidebar_label: wu_domain_mapping_register_filters
_i18n_hash: 835b5df60eb33048fe4159fb4243176c
---
# Action: wu_domain_mapping_register_filters

Некаторыя плагіны могуць захаваць URL, калі мапінг яшчэ не быў актыўным, або будаваць URL іншым спосабам, які не ўключаны ў вышэйзгадаваныя фільтры.

У такіх выпадках мы хочам дадаць адпаведныя фільтры. Як другі параметр перадаецца функцыя (callback) `mangle_url`. Мы не рэкамендуем выкарыстоўваць гэты фільтр непасрэдна. Найлепш выкарыстоўваць мэтыд `Domain_Mapping::apply_mapping_to_url`.

## Параметры

| Назва | Тып | Апісан |
|------|------|-------------|
| $mangle_url | `callable` | Функцыя, якая манглюе (mangle callable). |
| $domain_mapper | `self` | Гэты аб'ект. |

### З

- 2.0.0
### Шторышча

Вызначаны ў [`inc/class-domain-mapping.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-domain-mapping.php#L530) на 530-й паўніне

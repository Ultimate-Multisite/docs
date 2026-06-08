---
id: get_site_url_for_previewer
title: Фільтр - get_site_url_for_previewer
sidebar_label: get_site_url_for_previewer
_i18n_hash: ab1a6ae3abce3498fa9cf4f5ee98d91d
---
# Filter: get_site_url_for_previewer

Дазваляе rabyggam plugin-ў фільтраваць URL, які выкарыстоўваецца ў рэжыме папярэдняга прагляду.

## Параметры

| Назва | Тып | Апісан |
|------|------|-------------|
| $domain | `string` | Паўгледжаны (default) домен, які выкарыстоўваецца ў дадзены момант, карысны для маніпуляцый |
| $domain_options | `array` | Спіс усіх доменных апцый, уведэных у Настройках Ultimate Multisite -> Настройкі сеткі -> Доменныя апцыі |

### З

- 1.7.2
### Выказчык

Вызначаны ў [`inc/checkout/class-legacy-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-legacy-checkout.php#L812) на 812-й кропцы.

## Павяртае
Новы домен, які будзе выкарыстоўваваны.

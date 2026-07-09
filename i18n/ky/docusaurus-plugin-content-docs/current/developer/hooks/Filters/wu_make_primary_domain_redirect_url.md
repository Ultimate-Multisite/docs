---
id: wu_make_primary_domain_redirect_url
title: Фильтр - wu_make_primary_domain_redirect_url
sidebar_label: wu_make_primary_domain_redirect_url
_i18n_hash: bda96824db400b25e97802e5567df22d
---
# Filter: wu_make_primary_domain_redirect_url

Домен негизги кылынгандан кийин багыттоо URL-ин чыпкалайт.

Иштеп чыгуучуларга домен ийгиликтүү негизги катары коюлгандан кийин колдонуучулар кайда багытталарын ыңгайлаштырууга мүмкүндүк берет. Демейки боюнча, негизги сайттагы учурдагы URL-ге же өзгөртүлүп жаткан сайттын админ URL-ине багыттайт.

## Параметрлер

| Аты | Түрү | Сүрөттөмө |
|------|------|-------------|
| $redirect_url | `string` | Демейки багыттоо URL-и. Же учурдагы URL (эгер негизги сайт болсо), же учурдагы сайттын админ URL-и. |
| $current_site | `int` | Домени негизги кылып коюлуп жаткан сайттын ID-си. |
| $domain | `\Domain` | Негизги кылынган домен объекти. |
| $old_primary_domains | `array` | Мурда негизги болгон домендердин ID-леринин массиви. |

### Чыгарылгандан бери

- 2.0.0
### Булак

[`inc/ui/class-domain-mapping-element.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/ui/class-domain-mapping-element.php#L639) ичинде 639-сапта аныкталган


## Кайтарымдар
Чыпкаланган багыттоо URL-и.

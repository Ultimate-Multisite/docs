---
id: get_site_url_for_previewer
title: Фильтр - get_site_url_for_previewer
sidebar_label: get_site_url_for_previewer
_i18n_hash: ab1a6ae3abce3498fa9cf4f5ee98d91d
---
# Filter: get_site_url_for_previewer

Өстәмә эшләүчеләргә алдан карауда кулланыла торган URL-ны фильтрларга рөхсәт итә

## Параметрлар {#parameters}

| Исем | Төр | Тасвирлама |
|------|------|-------------|
| $domain | `string` | Хәзерге вакытта кулланыла торган стандарт домен, үзгәртүләр өчен файдалы |
| $domain_options | `array` | Ultimate Multisite көйләүләре -&gt; челтәр көйләүләре -&gt; домен параметрлары эчендә кертелгән барлык домен параметрлары исемлеге |

### Кайчаннан бирле {#since}

- 1.7.2
### Чыганак {#source}

[`inc/checkout/class-legacy-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-legacy-checkout.php#L812) эчендә 812 нче юлда билгеләнгән


## Кайтара {#returns}
Куллану өчен яңа домен

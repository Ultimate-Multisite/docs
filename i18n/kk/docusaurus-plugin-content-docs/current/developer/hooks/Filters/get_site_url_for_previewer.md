---
id: get_site_url_for_previewer
title: Сүзгі - get_site_url_for_previewer
sidebar_label: get_site_url_for_previewer
_i18n_hash: ab1a6ae3abce3498fa9cf4f5ee98d91d
---
# Filter: get_site_url_for_previewer {#filter-getsiteurlforpreviewer}

Plugin әзірлеушілеріне previewer ішінде қолданылатын URL-ді сүзуге мүмкіндік береді

## Параметрлер {#parameters}

| Атауы | Түрі | Сипаттамасы |
|------|------|-------------|
| $domain | `string` | Қазір қолданылып жатқан әдепкі домен, түрлендірулер үшін пайдалы |
| $domain_options | `array` | Ultimate Multisite Settings -&gt; Network Settings -&gt; Domain Options ішінде енгізілген барлық домен опцияларының тізімі |

### Бастап {#since}

- 1.7.2
### Дереккөз {#source}

[`inc/checkout/class-legacy-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-legacy-checkout.php#L812) ішінде 812-жолда анықталған


## Қайтарады {#returns}
Қолданылатын жаңа домен

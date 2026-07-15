---
id: get_site_url_for_previewer
title: Filter - get_site_url_for_previewer
sidebar_label: get_site_url_for_previewer
_i18n_hash: ab1a6ae3abce3498fa9cf4f5ee98d91d
---
# Filter: get_site_url_for_previewer

Plugin developerlarına previewer-də istifadə edilən URL-i filtrləməyə imkan verir.

## Parametrlər {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $domain | `string` | Hazırda istifadə edilən default domen. Manipulyasiyalar üçün faydalıdır. |
| $domain_options | `array` | Ultimate Multisite Settings -> Network Settings -> Domain Options-da daxil edilmiş bütün domen seçimlərinin siyahısı. |

### Since {#since}

- 1.7.2
### Source {#source}

[`inc/checkout/class-legacy-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-legacy-checkout.php#L812) faylında 812-ci sətirində təyin edilmişdir.

## Returns {#returns}
İstifadə ediləcək yeni domen.

---
id: get_site_url_for_previewer
title: Filter - get_site_url_for_previewer
sidebar_label: get_site_url_for_previewer
_i18n_hash: ab1a6ae3abce3498fa9cf4f5ee98d91d
---
# Filter: get_site_url_for_previewer {#filter-getsiteurlforpreviewer}

Membenarkan pembangun plugin untuk menapis (filter) URL yang digunakan dalam pratinjau (previewer).

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $domain | `string` | Domain lalai yang sedang digunakan sekarang, berguna untuk tujuan manipulasi. |
| $domain_options | `array` | Senarai semua pilihan domain yang dimasukkan dalam Ultimate Multisite Settings -> Network Settings -> Domain Options. |

### Since {#since}

- 1.7.2
### Source {#source}

Didefinisikan dalam [`inc/checkout/class-legacy-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-legacy-checkout.php#L812) pada baris 812

## Returns {#returns}
Domain baharu yang akan digunakan.

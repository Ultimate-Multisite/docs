---
id: get_site_url_for_previewer
title: Filter - get_site_url_for_previewer
sidebar_label: get_site_url_for_previewer
_i18n_hash: ab1a6ae3abce3498fa9cf4f5ee98d91d
---
# Filter: get_site_url_for_previewer {#filter-getsiteurlforpreviewer}

પ્લગઇન ડેવલપર્સને પ્રિવ્યૂઅરમાં વપરાતા URL ને ફિલ્ટર કરવાની મંજૂરી આપે છે.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $domain | `string` | હાલમાં ઉપયોગમાં લેવાતું ડિફોલ્ટ ડોમેન, જે ફેરફાર કરવા માટે ઉપયોગી છે. |
| $domain_options | `array` | Ultimate Multisite Settings -> Network Settings -> Domain Options માં દાખલ કરેલા તમામ ડોમેન વિકલ્પોની યાદી. |

### Since {#since}

- 1.7.2
### Source {#source}

[inc/checkout/class-legacy-checkout.php](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-legacy-checkout.php#L812) માં લાઇન 812 પર વ્યાખ્યાયિત છે.

## Returns {#returns}
ઉપયોગમાં લેવા માટેનું નવું ડોમેન.

---
id: get_site_url_for_previewer
title: فلٹر - get_site_url_for_previewer
sidebar_label: get_site_url_for_previewer
_i18n_hash: ab1a6ae3abce3498fa9cf4f5ee98d91d
---
# Filter: get_site_url_for_previewer

پلگ ان ڈویلپرز کو پریویوَر میں استعمال ہونے والے URL کو فلٹر کرنے کی اجازت دیتا ہے۔

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $domain | `string` | وہ ڈیفالٹ ڈومین جو فی الحال استعمال ہو رہی ہے، جو تبدیلیوں کے لیے کارآمد ہے۔ |
| $domain_options | `array` | Ultimate Multisite Settings -> Network Settings -> Domain Options میں درج تمام ڈومین آپشنز کی فہرست۔ |

### Since {#since}

- 1.7.2
### Source {#source}

Defined in [`inc/checkout/class-legacy-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-legacy-checkout.php#L812) at line 812


## Returns {#returns}
استعمال ہونے والا نیا ڈومین۔

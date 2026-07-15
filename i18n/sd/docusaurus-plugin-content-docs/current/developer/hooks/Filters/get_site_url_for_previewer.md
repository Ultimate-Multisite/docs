---
id: get_site_url_for_previewer
title: فلٽر - get_site_url_for_previewer
sidebar_label: get_site_url_for_previewer
_i18n_hash: ab1a6ae3abce3498fa9cf4f5ee98d91d
---
# فلٽر: get_site_url_for_previewer

plugin ڊولپرز کي previewer ۾ استعمال ٿيندڙ URL کي فلٽر ڪرڻ جي اجازت ڏيو

## پيرا ميٽرز {#parameters}

| نالو | قسم | وضاحت |
|------|------|-------------|
| $domain | `string` | هن وقت استعمال ٿيندڙ ڊفالٽ domain، ڦيرڦار لاءِ ڪارائتو |
| $domain_options | `array` | Ultimate Multisite سيٽنگون -&gt; نيٽ ورڪ سيٽنگون -&gt; domain آپشنز ۾ داخل ڪيل سڀني domain آپشنز جي فهرست |

### کان وٺي {#since}

- 1.7.2
### ذريعو {#source}

[`inc/checkout/class-legacy-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-legacy-checkout.php#L812) ۾ لائين 812 تي بيان ڪيل


## واپسيون {#returns}
استعمال ٿيڻ لاءِ نئون domain

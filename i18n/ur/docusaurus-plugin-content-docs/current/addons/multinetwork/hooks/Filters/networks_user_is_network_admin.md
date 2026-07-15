---
id: networks_user_is_network_admin
title: فلٹر - networks_user_is_network_admin
sidebar_label: networks_user_is_network_admin
_i18n_hash: f8e40a1c47591c0cab73d671cf681281
---
# Filter: networks_user_is_network_admin

اس فلٹر سے وہ نیٹورکس فلٹر کیے جاتے ہیں جن کے ایڈمنسٹریٹر (administrator) صارف ہو۔

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $ | `array\|bool` | نیٹ ورک کی IDs کی فہرست، یا اگر صارف کے لیے کوئی نیٹ ورک نہیں ہے تو `false`۔ |
| $ | `int` | صارف کی ID جس کے لیے نیٹورکس واپس کیے جانے چاہئیں۔ |

### Since {#since}

- 2.0.0
### Source {#source}

[`inc/functions/network.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multinetwork/blob/main/inc/functions/network.php#L703) میں لائن 703 پر بیان کیا گیا ہے۔

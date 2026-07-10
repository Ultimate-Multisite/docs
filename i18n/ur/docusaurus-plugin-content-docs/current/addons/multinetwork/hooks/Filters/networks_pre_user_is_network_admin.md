---
id: networks_pre_user_is_network_admin
title: Filter - networks_pre_user_is_network_admin
sidebar_label: networks_pre_user_is_network_admin
_i18n_hash: f8e04e42fb6f7c1f20a1280c46bf53b5
---
# Filter: networks_pre_user_is_network_admin {#filter-networkspreuserisnetworkadmin}

یہ فلٹر ایک صارف کے ان نیٹ ورکس کو فلٹر کرتا ہے جن کا وہ ایڈمنسٹریٹر ہے، تاکہ عمل کو مختصر (short-circuit) کیا جا سکے۔

## پیرامیٹرز {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $ | `array\|bool\|null` | نیٹ ورک آئی ڈیز کی فہرست یا false۔ کوئی بھی چیز جو null نہ ہو، عمل کو مختصر کر دے گی۔ |
| $ | `int` | صارف کی آئی ڈی جس کے لیے نیٹ ورکس واپس کیے جانے چاہئیں۔ |

### Since {#since}

- 2.0.0
### Source {#source}

[`inc/functions/network.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multinetwork/blob/main/inc/functions/network.php#L688) میں لائن 688 پر بیان کیا گیا ہے۔

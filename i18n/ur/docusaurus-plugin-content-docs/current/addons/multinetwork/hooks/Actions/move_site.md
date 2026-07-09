---
id: move_site
title: Action - move_site
sidebar_label: move_site
_i18n_hash: 253e7e4db7ca08022f52fb12a14907b6
---
# Action: move_site {#action-movesite}

یہ اس وقت چلتا ہے جب کسی سائٹ کو ایک نئے نیٹ ورک میں منتقل کیا جاتا ہے۔

## پیرا میٹرز {#parameters}

| نام | قسم | تفصیل |
|------|------|-------------|
| $site_id | `int` | اس سائٹ کی ID جسے منتقل کیا گیا ہے۔ |
| $old_network_id | `int` | سائٹ کے اصل نیٹ ورک کی ID۔ |
| $new_network_id | `int` | اس نیٹ ورک کی ID جس میں سائٹ منتقل ہوئی ہے۔ |

### از وقت {#since}

- 1.3.0
### ماخذ {#source}

[`inc/functions/network.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multinetwork/blob/main/inc/functions/network.php#L1587) میں لائن 1587 پر بیان کیا گیا ہے۔

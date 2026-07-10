---
id: wp_ultimo_skip_network_active_check
title: Filter - wp_ultimo_skip_network_active_check
sidebar_label: wp_ultimo_skip_network_active_check
_i18n_hash: e2f5feea7c780608ddb520691a69fea8
---
# Filter: wp_ultimo_skip_network_active_check {#filter-wpultimoskipnetworkactivecheck}

ڈویلپرز کو نیٹ ورک ایکٹیویشن چیک کو بائی پاس (short-circuit) کرنے کی اجازت دیتا ہے۔

یہ اس وقت بہت کارآمد ہوتا ہے جب آپ composer پر مبنی یا دیگر کسٹم سیٹ اپ، جیسے کہ Bedrock، استعمال کر رہے ہوں، جہاں mu-plugins کے طور پر پلگ ان استعمال کرنا عام ہو۔

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $skip_network_activation_check | `bool` | اگر ہمیں چیک کو بائی پاس کرنا ہے یا نہیں، ڈیفالٹ ویلیو `false` ہے۔ |

### Since {#since}

- 2.0.0
### Source {#source}

[`inc/class-requirements.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/class-requirements.php#L272) میں لائن 272 پر ڈیفائن کیا گیا ہے۔

## Returns {#returns}
اگر آپ چیک کو بائی پاس کرنا چاہتے ہیں تو `true`، ورنہ `false`۔

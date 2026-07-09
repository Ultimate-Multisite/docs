---
id: wu_return_url
title: Filter - wu_return_url
sidebar_label: wu_return_url
_i18n_hash: 73bff0c05bc9b1dad029b7438b1a4f7c
---
# Filter: wu_return_url {#filter-wureturnurl}

ڈویلپرز کو چیک آؤٹ کے عمل مکمل ہونے کے بعد استعمال ہونے والے گیٹ وے کے ریٹرن URL کو تبدیل کرنے کی اجازت دیتا ہے۔

## پیرامیٹرز {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $return_url | `string` | عمل کے بعد ری ڈائریکٹ ہونے والا URL۔ |
| $gateway | `self` | گیٹ وے کا انسٹنس۔ |
| $payment | `\WP_Ultimo\Models\Payment` | Ultimate Multisite کی ادائیگی کا انسٹنس۔ |
| $cart | `\WP_Ultimo\Checkout\Cart` | موجودہ Ultimate Multisite کارٹ آرڈر۔ |

### سے {#since}

- 2.0.20
### ماخذ {#source}

[inc/gateways/class-base-gateway.php](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-gateway.php#L683) میں لائن 683 پر ڈیفائن کیا گیا ہے۔


## واپسی {#returns}

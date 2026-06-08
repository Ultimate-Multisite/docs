---
id: wu_pending_network_published
title: Action - wu_pending_network_published
sidebar_label: wu_pending_network_published
_i18n_hash: 2cd5b02aa4fa11d92610bf2952f4b1f6
---
# Action: wu_pending_network_published

جب کوئی پینڈنگ نیٹ ورک پبلش ہو جاتا ہے تو یہ ایکشن چلتا ہے۔

## پیرامیٹرز

| نام | ٹائپ | تفصیل |
|------|------|-------------|
| $network | `\WP_Ultimo\Models\Network` | جو نیٹ ورک بنایا گیا ہے۔ |
| $membership | `\WP_Ultimo\Models\Membership` | ممبرشپ۔ |
| $pending_network | `array` | اصل پینڈنگ نیٹ ورک کا ڈیٹا۔ |

### ماخذ (Source)

[`inc/functions/network.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multinetwork/blob/main/inc/functions/network.php#L1815) میں لائن 1815 پر بیان کیا گیا ہے۔

---
id: wu_use_domain_mapping
title: Filter - wu_use_domain_mapping
sidebar_label: wu_use_domain_mapping
_i18n_hash: 34f9d3e6a6d1b98dd72cf5c21250b6e7
---
# Filter: wu_use_domain_mapping

یہ طے کرنا کہ میپنگ استعمال ہونی چاہیے یا نہیں۔

عام طور پر، آپ صرف فعال میپنگز (active mappings) کو استعمال ہونے دینا چاہیں گے۔ تاہم، اگر آپ زیادہ جدید منطق (advanced logic) استعمال کرنا چاہتے ہیں، یا غیر فعال ڈومینز (non-active domains) کو بھی میپ کیا جانا چاہتے ہیں، تو آپ بس یہاں فلٹر لگا سکتے ہیں۔

## پیرامیٹرز {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $is_active | `bool` | کیا میپنگ کو فعال سمجھا جانا چاہیے؟ |
| $mapping | `\Domain` | وہ میپنگ جس کا ہم جائزہ لے رہے ہیں |
| $domain | `string` | |

### Source {#source}

[`inc/class-domain-mapping.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-domain-mapping.php#L391) میں لائن 391 پر بیان کیا گیا ہے۔

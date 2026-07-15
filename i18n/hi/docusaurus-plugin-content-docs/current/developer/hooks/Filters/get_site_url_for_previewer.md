---
id: get_site_url_for_previewer
title: फ़िल्टर - get_site_url_for_previewer
sidebar_label: get_site_url_for_previewer
_i18n_hash: ab1a6ae3abce3498fa9cf4f5ee98d91d
---
# फ़िल्टर: get_site_url_for_previewer

प्लगइन डेवलपर्स को प्रीव्यूअर में उपयोग किए जाने वाले यूआरएल को फ़िल्टर करने की अनुमति देता है।

## पैरामीटर्स {#parameters}

| नाम | प्रकार | विवरण |
|------|------|-------------|
| $domain | `string` | वर्तमान में उपयोग किया जा रहा डिफ़ॉल्ट डोमेन, जो बदलाव करने के लिए उपयोगी है। |
| $domain_options | `array` | Ultimate Multisite Settings -> Network Settings -> Domain Options में दर्ज सभी डोमेन विकल्पों की सूची। |

### कब से {#since}

- 1.7.2
### स्रोत {#source}

[`inc/checkout/class-legacy-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-legacy-checkout.php#L812) में लाइन 812 पर परिभाषित है।

## रिटर्न करता है {#returns}
उपयोग किया जाने वाला नया डोमेन।

---
id: wu_use_domain_mapping
title: फ़िल्टर - wu_use_domain_mapping
sidebar_label: wu_use_domain_mapping
_i18n_hash: 34f9d3e6a6d1b98dd72cf5c21250b6e7
---
# फ़िल्टर: wu_use_domain_mapping

यह तय करना कि मैपिंग का उपयोग किया जाना चाहिए या नहीं।

आमतौर पर, आप केवल सक्रिय मैपिंग का उपयोग करना चाहेंगे। हालांकि, यदि आप कोई उन्नत तर्क (advanced logic) लागू करना चाहते हैं, या गैर-सक्रिय डोमेन को भी मैप करने की अनुमति देना चाहते हैं, तो आप बस यहाँ फ़िल्टर कर सकते हैं।

## पैरामीटर्स

| Name | Type | Description |
|------|------|-------------|
| $is_active | `bool` | क्या मैपिंग को सक्रिय माना जाना चाहिए? |
| $mapping | `\Domain` | मैपिंग जिसका हम निरीक्षण कर रहे हैं |
| $domain | `string` | |

### स्रोत

[`inc/class-domain-mapping.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-domain-mapping.php#L391) में लाइन 391 पर परिभाषित।

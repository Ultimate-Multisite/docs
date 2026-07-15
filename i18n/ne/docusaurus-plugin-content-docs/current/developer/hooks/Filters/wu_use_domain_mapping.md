---
id: wu_use_domain_mapping
title: फिल्टर - wu_use_domain_mapping
sidebar_label: wu_use_domain_mapping
_i18n_hash: 34f9d3e6a6d1b98dd72cf5c21250b6e7
---
# फिल्टर: wu_use_domain_mapping

म्यापिङ प्रयोग गर्नुपर्छ कि हुँदैन निर्धारण गर्नुहोस्

सामान्यतया, तपाईं सक्रिय म्यापिङहरू मात्र प्रयोग गर्न अनुमति दिन चाहनुहुन्छ। तर, यदि तपाईं अझ उन्नत तर्क प्रयोग गर्न चाहनुहुन्छ, वा असक्रिय डोमेनहरूलाई पनि म्याप गर्न अनुमति दिन चाहनुहुन्छ भने, यहाँ फिल्टर गर्नुहोस्।

## प्यारामिटरहरू {#parameters}

| नाम | प्रकार | विवरण |
|------|------|-------------|
| $is_active | `bool` | म्यापिङलाई सक्रिय रूपमा व्यवहार गर्नुपर्छ? |
| $mapping | `\Domain` | हामीले निरीक्षण गरिरहेको म्यापिङ |
| $domain | `string` |  |

### स्रोत {#source}

[`inc/class-domain-mapping.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-domain-mapping.php#L391) मा पङ्क्ति 391 मा परिभाषित गरिएको छ

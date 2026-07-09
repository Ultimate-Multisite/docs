---
id: wu_make_primary_domain_redirect_url
title: फिल्टर - wu_make_primary_domain_redirect_url
sidebar_label: wu_make_primary_domain_redirect_url
_i18n_hash: bda96824db400b25e97802e5567df22d
---
# फिल्टर: wu_make_primary_domain_redirect_url

डोमेनलाई मुख्य बनाएपछि रीडाइरेक्ट URL फिल्टर गर्छ।

डोमेनलाई सफलतापूर्वक मुख्य रूपमा सेट गरेपछि प्रयोगकर्ताहरू कहाँ रीडाइरेक्ट हुने भन्ने अनुकूलन गर्न विकासकर्ताहरूलाई अनुमति दिन्छ। पूर्वनिर्धारित रूपमा, मुख्य साइटमा हालको URL मा, वा परिमार्जन भइरहेको साइटको admin URL मा रीडाइरेक्ट गर्छ।

## प्यारामिटरहरू

| नाम | प्रकार | विवरण |
|------|------|-------------|
| $redirect_url | `string` | पूर्वनिर्धारित रीडाइरेक्ट URL। हालको URL (यदि मुख्य साइट हो भने) वा हालको साइटको admin URL। |
| $current_site | `int` | डोमेनलाई मुख्य बनाइँदै गरेको साइटको ID। |
| $domain | `\Domain` | मुख्य बनाइएको डोमेन वस्तु। |
| $old_primary_domains | `array` | पहिले मुख्य रहेका डोमेनहरूको ID हरूको array। |

### संस्करणदेखि

- 2.0.0
### स्रोत

लाइन 639 मा [`inc/ui/class-domain-mapping-element.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/ui/class-domain-mapping-element.php#L639) मा परिभाषित


## फिर्ता गर्छ
फिल्टर गरिएको रीडाइरेक्ट URL।

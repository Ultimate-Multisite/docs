---
id: wu_domain_has_correct_dns
title: फिल्टर - wu_domain_has_correct_dns
sidebar_label: wu_domain_has_correct_dns
_i18n_hash: dd6037bea5bd9b5b613888113a04536d
---
# फिल्टर: wu_domain_has_correct_dns

नतिजाहरू परिभाषित गर्न plugin विकासकर्ताहरूलाई नयाँ जाँचहरू थप्न अनुमति दिनुहोस्।

## प्यारामिटरहरू {#parameters}

| नाम | प्रकार | विवरण |
|------|------|-------------|
| $result | `bool` | हालको नतिजा। |
| $domain | `self` | हालको डोमेन instance। |
| $domains_and_ips | `array` | DNS lookup मा भेटिएका डोमेनहरू र IP हरूको सूची। |

### संस्करणदेखि {#since}

- 2.0.4
### स्रोत {#source}

[`inc/models/class-domain.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-domain.php#L455) मा 455 औँ पङ्क्तिमा परिभाषित


## फिर्ता मान {#returns}
DNS सही रूपमा सेटअप गरिएको छ वा छैन।

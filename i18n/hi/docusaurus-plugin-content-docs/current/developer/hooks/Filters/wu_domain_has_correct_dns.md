---
id: wu_domain_has_correct_dns
title: Filter - wu_domain_has_correct_dns
sidebar_label: wu_domain_has_correct_dns
_i18n_hash: dd6037bea5bd9b5b613888113a04536d
---
# Filter: wu_domain_has_correct_dns {#filter-wudomainhascorrectdns}

प्लगइन डेवलपर्स को परिणाम को परिभाषित करने के लिए नई जाँच (checks) जोड़ने की अनुमति देता है।

## पैरामीटर्स {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $result | `bool` | वर्तमान परिणाम। |
| $domain | `self` | वर्तमान डोमेन इंस्टेंस। |
| $domains_and_ips | `array` | DNS लुकअप पर पाए गए डोमेन और आईपी की सूची। |

### Since {#since}

- 2.0.4
### Source {#source}

[`inc/models/class-domain.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-domain.php#L455) में लाइन 455 पर परिभाषित।

## Returns {#returns}
यह बताता है कि DNS सही ढंग से सेट अप है या नहीं।

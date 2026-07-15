---
id: wu_domain_has_correct_dns
title: फिल्टर - wu_domain_has_correct_dns
sidebar_label: wu_domain_has_correct_dns
_i18n_hash: dd6037bea5bd9b5b613888113a04536d
---
# Filter: wu_domain_has_correct_dns

प्लगइन डेव्हलपर्सना परिणाम निश्चित करण्यासाठी नवीन तपासण्या (checks) जोडण्याची परवानगी देतो.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $result | `bool` | सध्याचा परिणाम. |
| $domain | `self` | सध्याचा डोमेन इन्स्टन्स. |
| $domains_and_ips | `array` | DNS लुकअपमध्ये आढळलेल्या डोमेन आणि IP ची यादी. |

### Since {#since}

- 2.0.4
### Source {#source}

[`inc/models/class-domain.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-domain.php#L455) मध्ये लाइन ४५५ वर परिभाषित केले आहे.

## Returns {#returns}
DNS योग्यरित्या सेट केले आहे की नाही.

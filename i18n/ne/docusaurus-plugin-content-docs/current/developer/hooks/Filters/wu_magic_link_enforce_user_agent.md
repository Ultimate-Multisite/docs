---
id: wu_magic_link_enforce_user_agent
title: फिल्टर - wu_magic_link_enforce_user_agent
sidebar_label: wu_magic_link_enforce_user_agent
_i18n_hash: 33252b9660851a8fe51ff7ed586d9cf2
---
# Filter: wu_magic_link_enforce_user_agent {#filter-wumagiclinkenforceuseragent}

user agent प्रमाणीकरण लागू गर्ने कि नगर्ने Filter गर्नुहोस्।

tokenहरूलाई फरक browser/deviceहरूमा काम गर्न अनुमति दिन false मा सेट गर्नुहोस्। यसले सुरक्षा घटाउँछ तर उपयोगिता बढाउँछ।

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $enforce | `bool` | user agent matching लागू गर्ने कि नगर्ने। |

### Since {#since}

- 2.0.0
### Source {#source}

[`inc/sso/class-magic-link.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-magic-link.php#L410) मा line 410 मा परिभाषित गरिएको

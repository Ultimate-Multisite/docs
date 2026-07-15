---
id: wu_sso_url
title: फ़िल्टर - wu_sso_url
sidebar_label: wu_sso_url
_i18n_hash: a369dcf0f4cab1f5941c82ac58286155
---
# फ़िल्टर: wu_sso_url

क्रॉस-डोमेन ग्राहक क्रियाओं के लिए लौटाए जाने से पहले बनाए गए SSO URLs को फ़िल्टर करता है।

इस फ़िल्टर का उपयोग तब करें जब किसी integration को sovereign-tenant SSO link में भरोसेमंद संदर्भ जोड़ना हो या Ultimate Multisite के token validation को बनाए रखते हुए broker URL बदलना हो।

## पैरामीटर {#parameters}

| नाम | प्रकार | विवरण |
|------|------|-------------|
| $sso_url | `string` | बनाया गया SSO URL। |
| $user | `WP_User` | वह उपयोगकर्ता जिसे SSO visit द्वारा प्रमाणित किया जाएगा। |
| $site_id | `int` | visit के लिए लक्षित site ID। |
| $redirect_to | `string` | सफल SSO validation के बाद गंतव्य URL। |

### संस्करण से {#since}

- 2.13.0

### स्रोत {#source}

`inc/sso/class-sso.php` में परिभाषित।


## लौटाता है {#returns}

फ़िल्टर किया गया SSO URL।

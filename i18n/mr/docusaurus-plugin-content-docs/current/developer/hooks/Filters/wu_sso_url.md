---
id: wu_sso_url
title: फिल्टर - wu_sso_url
sidebar_label: wu_sso_url
_i18n_hash: a369dcf0f4cab1f5941c82ac58286155
---
# Filter: wu_sso_url {#filter-wussourl}

क्रॉस-डोमेन ग्राहक कृतींसाठी परत करण्यापूर्वी तयार केलेल्या SSO URLs फिल्टर करते.

एखाद्या integration ला sovereign-tenant SSO link मध्ये विश्वसनीय संदर्भ जोडायचा असेल किंवा Ultimate Multisite चे token validation जतन ठेवून broker URL बदलायचा असेल तेव्हा हा filter वापरा.

## पॅरामीटर्स {#parameters}

| नाव | प्रकार | वर्णन |
|------|------|-------------|
| $sso_url | `string` | तयार केलेला SSO URL. |
| $user | `WP_User` | SSO visit द्वारे प्रमाणित केला जाणारा user. |
| $site_id | `int` | visit साठी लक्ष्य site ID. |
| $redirect_to | `string` | यशस्वी SSO validation नंतरचा गंतव्य URL. |

### पासून {#since}

- 2.13.0

### स्रोत {#source}

`inc/sso/class-sso.php` मध्ये परिभाषित.


## परतावा {#returns}

फिल्टर केलेला SSO URL.

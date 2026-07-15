---
id: get_blogs_of_user
title: Filter - get_blogs_of_user
sidebar_label: get_blogs_of_user
_i18n_hash: 77871d3651eb7f3ab1d055fdb89c061e
---
# Filter: get_blogs_of_user

मूळ WP Filter ची पुनरावृत्ती (replicate) येथे केली आहे, जेणेकरून खात्री होईल.

एखाद्या वापरकर्त्याला (user) संबंधित असलेल्या साइट्सच्या यादीवर फिल्टर लावते.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $sites | `object[]` | वापरकर्त्याला संबंधित असलेल्या साइट ऑब्जेक्ट्सची (site objects) एक ॲरे (array). |
| $user_id | `int` | वापरकर्ता आयडी (User ID). |
| $all | `bool` | परत केलेल्या साइट्सच्या ॲरेमध्ये सर्व साइट्स (sites) असाव्यात का, ज्यात 'deleted', 'archived', किंवा 'spam' म्हणून मार्क केलेल्या साइट्सचा समावेश आहे. डीफॉल्ट (Default) false आहे. |

### Since {#since}

- 2.0.11
### Source {#source}

[`inc/managers/class-site-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-site-manager.php#L851) मध्ये लाइन ८५१ वर परिभाषित केले आहे.

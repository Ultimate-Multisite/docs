---
id: wu_get_site_domain_and_path
title: Filter - wu_get_site_domain_and_path
sidebar_label: wu_get_site_domain_and_path
_i18n_hash: 86384a14182db584d1b69aec8790ed07
---
# Filter: wu_get_site_domain_and_path {#filter-wugetsitedomainandpath}

विकसकांना (developers) डोमेन/पॅथ जोड्या (domain/path pairs) हाताळण्याची (manipulate) परवानगी देतो.

हे अनेक गोष्टींसाठी उपयुक्त ठरू शकते, जसे की काही प्रकारचे स्टेजिंग सोल्यूशन (staging solution) लागू करणे, वेगवेगळे सर्व्हर वापरणे, इत्यादी.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $d | `object` | सध्याचा ऑब्जेक्ट, ज्यामध्ये डोमेन आणि पाथ कीज (keys) आहेत. |
| $path_or_subdomain | `string` | फंक्शनला दिलेला मूळ पाथ/सबडोमेन. |

### Since {#since}

- 2.0.0
### Source {#source}

[`inc/functions/site.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/site.php#L235) मध्ये लाइन 235 वर परिभाषित केले आहे.

## Returns {#returns}
डोमेन आणि पाथ कीज असलेले एक ऑब्जेक्ट.

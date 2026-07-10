---
id: wu_apply_plan_limits
title: Filter - wu_apply_plan_limits
sidebar_label: wu_apply_plan_limits
_i18n_hash: bd9ef0fee7898150c2b822a714f498c1
---
# Filter: wu_apply_plan_limits {#filter-wuapplyplanlimits}

प्लगइन डेव्हलपर्सना मर्यादा (limitations) बायपास करण्याची किंवा थांबवण्याची (short-circuit) परवानगी देते.

तुम्ही हा फिल्टर वापरून कोणतीही मर्यादा लागू होण्यापूर्वी मनमानी कोड (arbitrary code) चालवू शकता. जर फिल्टरने कोणतेही सत्य मूल्य (truthy value) परत केले, तर प्रक्रिया पुढे जाईल; अन्यथा, जर त्याने कोणतेही असत्य मूल्य (falsy value) परत केले, तर कोड थांबेल आणि खालील कोणतेही हुक (hooks) चालणार नाहीत.

### Since {#since}

- 1.7.0
### Source {#source}

- [`inc/limits/class-post-type-limits.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limits/class-post-type-limits.php#L52) मध्ये लाइन ५२ वर परिभाषित केले आहे
- [`inc/limits/class-di&#115;k-space-limits.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limits/class-di%73k-space-limits.php#L98) मध्ये लाइन ९८ वर परिभाषित केले आहे
## Returns {#returns}

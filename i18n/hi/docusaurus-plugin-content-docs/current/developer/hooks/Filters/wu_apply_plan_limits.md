---
id: wu_apply_plan_limits
title: फ़िल्टर - wu_apply_plan_limits
sidebar_label: wu_apply_plan_limits
_i18n_hash: bd9ef0fee7898150c2b822a714f498c1
---
# Filter: wu_apply_plan_limits

प्लगइन डेवलपर्स को सीमाओं को बायपास (bypass) करने की अनुमति देता है।

आप इस फ़िल्टर का उपयोग किसी भी सीमा (limit) को लागू होने से पहले मनमाना कोड (arbitrary code) चलाने के लिए कर सकते हैं। यदि फ़िल्टर कोई भी सत्य मान (truthy value) लौटाता है, तो प्रक्रिया आगे बढ़ेगी; यदि यह कोई भी असत्य मान (falsy value) लौटाता है, तो कोड वापस आ जाएगा और नीचे दिए गए कोई भी हुक (hooks) नहीं चलेंगे।

### Since

- 1.7.0
### Source

- [`inc/limits/class-post-type-limits.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limits/class-post-type-limits.php#L52) में लाइन 52 पर परिभाषित
- [`inc/limits/class-di&#115;k-space-limits.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limits/class-di%73k-space-limits.php#L98) में लाइन 98 पर परिभाषित
## Returns

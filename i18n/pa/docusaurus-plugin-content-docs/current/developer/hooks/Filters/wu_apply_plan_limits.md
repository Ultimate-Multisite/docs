---
id: wu_apply_plan_limits
title: ਫ਼ਿਲਟਰ - wu_apply_plan_limits
sidebar_label: wu_apply_plan_limits
_i18n_hash: bd9ef0fee7898150c2b822a714f498c1
---
# Filter: wu_apply_plan_limits

ਪਲੱਗਇਨ ਡਿਵੈਲਪਰਜ਼ ਨੂੰ ਸੀਮਾਵਾਂ (limitations) ਨੂੰ ਕੰਮ ਕਰਨ ਤੋਂ ਰੋਕਣ (short-circuit) ਦੀ ਇਜਾਜ਼ਤ ਦਿੰਦਾ ਹੈ।

ਤੁਸੀਂ ਇਸ ਫਿਲਟਰ ਦੀ ਵਰਤੋਂ ਕਿਸੇ ਵੀ ਸੀਮਾ ਲਾਗੂ ਹੋਣ ਤੋਂ ਪਹਿਲਾਂ ਕੋਈ ਵੀ ਕੋਡ ਚਲਾਉਣ ਲਈ ਕਰ ਸਕਦੇ ਹੋ। ਜੇਕਰ ਫਿਲਟਰ ਕੋਈ ਵੀ 'truthy' (ਸੱਚਾ) ਮੁੱਲ ਵਾਪਸ ਕਰਦਾ ਹੈ, ਤਾਂ ਪ੍ਰਕਿਰਿਆ ਅੱਗੇ ਵਧੇਗੀ; ਜੇਕਰ ਇਹ ਕੋਈ 'falsy' (ਝੂਠਾ) ਮੁੱਲ ਵਾਪਸ ਕਰਦਾ ਹੈ, ਤਾਂ ਕੋਡ ਰੁਕ ਜਾਵੇਗਾ ਅਤੇ ਹੇਠਾਂ ਦਿੱਤੇ ਕੋਈ ਵੀ hook ਨਹੀਂ ਚੱਲੇਗਾ।

### Since

- 1.7.0
### Source

- [`inc/limits/class-post-type-limits.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limits/class-post-type-limits.php#L52) ਵਿੱਚ ਲਾਈਨ 52 'ਤੇ ਪਰਿਭਾਸ਼ਿਤ ਹੈ
- [`inc/limits/class-di&#115;k-space-limits.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limits/class-di%73k-space-limits.php#L98) ਵਿੱਚ ਲਾਈਨ 98 'ਤੇ ਪਰਿਭਾਸ਼ਿਤ ਹੈ
## Returns

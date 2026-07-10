---
id: wu_apply_plan_limits
title: Filter - wu_apply_plan_limits
sidebar_label: wu_apply_plan_limits
_i18n_hash: bd9ef0fee7898150c2b822a714f498c1
---
# Filter: wu_apply_plan_limits {#filter-wuapplyplanlimits}

Plugin உருவாக்குநர்கள் வரம்புகளைத் (limitations) தடுத்து நிறுத்த (short-circuit) அனுமதிக்கிறது.

இந்த filter-ஐப் பயன்படுத்தி, எந்த வரம்புகளும் தொடங்கப்படுவதற்கு முன்பே நீங்கள் விருப்பமான குறியீட்டை (arbitrary code) இயக்கலாம். இந்த filter ஏதேனும் உண்மை மதிப்பை (truthy value) திருப்பி அளித்தால், செயல்முறை தொடரும். இது ஏதேனும் பொய் மதிப்பை (falsy value) திருப்பி அளித்தால், குறியீடு திரும்பிவிடும், மேலும் கீழே உள்ள எந்த hook-களும் இயங்காது.

### Since {#since}

- 1.7.0
### Source {#source}

- [`inc/limits/class-post-type-limits.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limits/class-post-type-limits.php#L52) என்ற கோப்பில் 52-வது வரியில் வரையறுக்கப்பட்டுள்ளது
- [`inc/limits/class-di&#115;k-space-limits.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limits/class-di%73k-space-limits.php#L98) என்ற கோப்பில் 98-வது வரியில் வரையறுக்கப்பட்டுள்ளது
## Returns {#returns}

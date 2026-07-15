---
id: wu_apply_plan_limits
title: ഫിൽട്ടർ - wu_apply_plan_limits
sidebar_label: wu_apply_plan_limits
_i18n_hash: bd9ef0fee7898150c2b822a714f498c1
---
# Filter: wu_apply_plan_limits

പ്ലഗിൻ ഡെവലപ്പർമാർക്ക് പരിമിതികൾ (limitations) ഒഴിവാക്കാൻ ഇത് അനുവദിക്കുന്നു.

ഏതെങ്കിലും പരിമിതികൾ ആരംഭിക്കുന്നതിന് മുമ്പ് ഇഷ്ടമുള്ള കോഡ് പ്രവർത്തിപ്പിക്കാൻ ഈ ഫിൽട്ടർ ഉപയോഗിക്കാവുന്നതാണ്. ഈ ഫിൽട്ടറിൽ ഒരു 'truthy' മൂല്യം (truthy value) റിട്ടേൺ ചെയ്താൽ, പ്രോസസ്സ് മുന്നോട്ട് പോകും. എന്നാൽ ഒരു 'falsy' മൂല്യം (falsy value) റിട്ടേൺ ചെയ്താൽ, കോഡ് അവിടെ നിർത്തുകയും താഴെ നൽകിയിട്ടുള്ള ഹുക്കുകൾ (hooks) ഒന്നും പ്രവർത്തിക്കാതിരിക്കുകയും ചെയ്യും.

### Since {#since}

- 1.7.0
### Source {#source}

- Defined in [`inc/limits/class-post-type-limits.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limits/class-post-type-limits.php#L52) at line 52
- Defined in [`inc/limits/class-di&#115;k-space-limits.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limits/class-di%73k-space-limits.php#L98) at line 98
## Returns {#returns}

---
id: wu_admin_notices
title: Filter - wu_admin_notices
sidebar_label: wu_admin_notices
_i18n_hash: b98d294d75277dfcfd941ca0e573e10c
---
# Filter: wu_admin_notices {#filter-wuadminnotices}

Ultimate Multisite ചേർക്കുന്ന അഡ്മിൻ അറിയിപ്പുകൾ (admin notices) ഫിൽട്ടർ ചെയ്യാൻ ഇത് ഡെവലപ്പർമാർക്ക് അനുവദിക്കുന്നു.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $notices | `array` | ആ പ്രത്യേക പാനലിനായുള്ള അറിയിപ്പുകളുടെ ലിസ്റ്റ്. |
| $all_notices | `array` | പാനലുകൾ അനുസരിച്ച് വേർതിരിച്ച, ചേർക്കപ്പെട്ട എല്ലാ അറിയിപ്പുകളുടെയും ലിസ്റ്റ്. |
| $panel | `string` | അറിയിപ്പുകൾ എടുക്കേണ്ട പാനൽ. |
| $filter | `string` | ഒഴിവാക്കാൻ കഴിയുന്ന അറിയിപ്പുകൾ (dismissable notices) ഫിൽട്ടർ ചെയ്തിട്ടുണ്ടോ എന്നതിനെ സൂചിപ്പിക്കുന്നു. |
| $dismissed_messages | `array` | ഒഴിവാക്കിയ അറിയിപ്പുകളുടെ (notice keys) ലിസ്റ്റ്. |

### Since {#since}

- 2.0.0
### Source {#source}

[`inc/class-admin-notices.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-admin-notices.php#L121) എന്ന ഫയലിലെ 121-ാം വരിയിൽ നിർവചിച്ചിരിക്കുന്നു.

## Returns {#returns}

---
id: wu_post_count_statuses
title: Filter - wu_post_count_statuses
sidebar_label: wu_post_count_statuses
_i18n_hash: 663f78e3da3805371e6ab96edef64285
---
# Filter: wu_post_count_statuses

പ്ലഗിൻ ഡെവലപ്പർമാർക്ക് ഏത് പോസ്റ്റ് സ്റ്റാറ്റസാണ് എണ്ണേണ്ടതെന്ന് മാറ്റാൻ ഇത് അനുവദിക്കുന്നു. ഡിഫോൾട്ടായി, പ്രസിദ്ധീകരിച്ച (published) പോസ്റ്റുകളും സ്വകാര്യ (private) പോസ്റ്റുകളും ആണ് എണ്ണുന്നത്.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $post_status | `array` | പോസ്റ്റ് സ്റ്റാറ്റസുകളുടെ ലിസ്റ്റ് (The list of post statuses) |
| $post_type | `string` | പോസ്റ്റ് ടൈപ്പിന്റെ സ്ലഗ് (The post type slug) |

### Since {#since}

- 1.9.1
### Source {#source}

[`inc/limitations/class-limit-post-types.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limitations/class-limit-post-types.php#L119) എന്ന ഫയലിലെ 119-ാം വരിയിൽ നിർവചിച്ചിരിക്കുന്നു.

## Returns {#returns}
പോസ്റ്റ് സ്റ്റാറ്റസുകളുടെ പുതിയ അറേ (New array of post status)

---
id: wu_post_count
title: ഫിൽട്ടർ - wu_post_count
sidebar_label: wu_post_count
_i18n_hash: 435505abb02375a268c71a8cb10b7ac6
---
# Filter: wu_post_count

പ്ലഗിൻ ഡെവലപ്പർമാർക്ക് എണ്ണം ആകെത്തുക മാറ്റാൻ ഇത് അനുവദിക്കുന്നു.

## പാരാമീറ്ററുകൾ {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $count | `int` | ആകെ പോസ്റ്റ് എണ്ണം |
| $post_counts | `object` | `wp_count_posts` ഫംഗ്ഷൻ വഴി ലഭിക്കുന്ന WordPress ഒബ്ജക്റ്റ് |
| $post_type | `string` | പോസ്റ്റ് ടൈപ്പ് സ്ലഗ് |

### Since {#since}

- 1.9.1
### Source {#source}

[`inc/limitations/class-limit-post-types.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limitations/class-limit-post-types.php#L136) എന്ന ഫയലിലെ 136-ാം വരിയിൽ നിർവചിച്ചിരിക്കുന്നു.

## Returns {#returns}
പുതിയ ആകെ എണ്ണം

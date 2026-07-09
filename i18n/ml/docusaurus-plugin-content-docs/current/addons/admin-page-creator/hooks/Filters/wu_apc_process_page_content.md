---
id: wu_apc_process_page_content
title: ഫിൽട്ടർ - wu_apc_process_page_content
sidebar_label: wu_apc_process_page_content
_i18n_hash: 85631895afd7298462a111b4db356566
---
# Filter: wu_apc_process_page_content {#filter-wuapcprocesspagecontent}

അന്തിമ ഉള്ളടക്കത്തിൽ മാറ്റങ്ങൾ വരുത്താൻ ഡെവലപ്പർമാർക്ക് ഇത് അനുവദിക്കുന്നു.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $content | `string` | മാറ്റങ്ങൾ വരുത്തിയ ശേഷമുള്ള ഉള്ളടക്കം. |
| $content_before_processing | `string` | മാറ്റങ്ങൾ വരുത്തുന്നതിന് മുൻപുള്ള ഉള്ളടക്കം. |
| $to_replace | `array` | പ്ലേസ്‌ഹോൾഡറുകൾ അടങ്ങിയ അറേ. |
| $placeholder_count | `int` | കണ്ടെത്തിയ പ്ലേസ്‌ഹോൾഡറുകളുടെ എണ്ണം. |

### Since {#since}

- 1.4.0
### Source {#source}

[`inc/wu-apc-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-admin-page-creator/blob/main/inc/wu-apc-functions.php#L46) എന്ന ഫയലിലെ 46-ാം വരിയിൽ നിർവചിച്ചിരിക്കുന്നു.

## Returns {#returns}
മാറ്റം വരുത്തിയ ശേഷമുള്ള ഉള്ളടക്കം.

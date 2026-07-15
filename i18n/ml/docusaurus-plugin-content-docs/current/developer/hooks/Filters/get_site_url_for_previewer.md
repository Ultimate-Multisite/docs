---
id: get_site_url_for_previewer
title: Filter - get_site_url_for_previewer
sidebar_label: get_site_url_for_previewer
_i18n_hash: ab1a6ae3abce3498fa9cf4f5ee98d91d
---
# Filter: get_site_url_for_previewer

പ്രിവ്യൂവറിൽ ഉപയോഗിക്കുന്ന URL-നെ ഫിൽട്ടർ ചെയ്യാൻ പ്ലഗിൻ ഡെവലപ്പർമാർക്ക് ഇത് അനുവദിക്കുന്നു.

## പാരാമീറ്ററുകൾ {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $domain | `string` | ഇപ്പോൾ ഉപയോഗിക്കുന്ന ഡിഫോൾട്ട് ഡൊമെയ്ൻ. ഇത് മാറ്റങ്ങൾ വരുത്താൻ ഉപകാരപ്രദമാണ്. |
| $domain_options | `array` | Ultimate Multisite Settings -> Network Settings -> Domain Options-ൽ നൽകിയിട്ടുള്ള എല്ലാ ഡൊമെയ്ൻ ഓപ്ഷനുകളുടെയും ലിസ്റ്റ്. |

### Since {#since}

- 1.7.2
### Source {#source}

[`inc/checkout/class-legacy-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-legacy-checkout.php#L812) എന്ന ഫയലിലെ 812-ാം വരിയിൽ നിർവചിച്ചിരിക്കുന്നു.

## Returns {#returns}
ഉപയോഗിക്കേണ്ട പുതിയ ഡൊമെയ്ൻ.

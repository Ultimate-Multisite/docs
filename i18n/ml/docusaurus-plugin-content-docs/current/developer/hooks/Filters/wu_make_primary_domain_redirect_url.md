---
id: wu_make_primary_domain_redirect_url
title: Filter - wu_make_primary_domain_redirect_url
sidebar_label: wu_make_primary_domain_redirect_url
_i18n_hash: bda96824db400b25e97802e5567df22d
---
# Filter: wu_make_primary_domain_redirect_url

ഒരു ഡൊമെയ്‌ൻ പ്രൈമറി ആക്കുമ്പോൾ ഉണ്ടാകുന്ന റീഡയറക്റ്റ് URL-നെ ഫിൽട്ടർ ചെയ്യുന്നു.

ഒരു ഡൊമെയ്‌ൻ വിജയകരമായി പ്രൈമറി ആക്കിയ ശേഷം യൂസർമാരെ എവിടേക്കാണ് റീഡയറക്റ്റ് ചെയ്യേണ്ടതെന്ന് ഡെവലപ്പർമാർക്ക് കസ്റ്റമൈസ് ചെയ്യാൻ ഇത് അനുവദിക്കുന്നു. ഡിഫോൾട്ടായി, ഇത് പ്രധാന സൈറ്റിലെ നിലവിലെ URL-ലേക്ക്, അല്ലെങ്കിൽ മാറ്റം വരുത്തുന്ന സൈറ്റിന്റെ അഡ്മിൻ URL-ലേക്ക് റീഡയറക്റ്റ് ചെയ്യും.

## പാരാമീറ്ററുകൾ (Parameters)

| Name | Type | വിവരണം (Description) |
|------|------|-------------|
| $redirect_url | `string` | ഡിഫോൾട്ട് റീഡയറക്റ്റ് URL. ഇത് നിലവിലെ URL (പ്രധാന സൈറ്റാണെങ്കിൽ) അല്ലെങ്കിൽ നിലവിലെ സൈറ്റിന്റെ അഡ്മിൻ URL ആകാം. |
| $current_site | `int` | ഡൊമെയ്‌ൻ പ്രൈമറി ആക്കുന്ന സൈറ്റിന്റെ ID. |
| $domain | `\Domain` | പ്രൈമറി ആക്കിയ ഡൊമെയ്‌ൻ ഒബ്ജക്റ്റ്. |
| $old_primary_domains | `array` | മുമ്പ് പ്രൈമറി ആയിരുന്ന ഡൊമെയ്‌നുകളുടെ ID-കളുടെ ഒരു കൂട്ടം (Array). |

### മുതൽ (Since)

- 2.0.0
### സ്രോതസ്സ് (Source)

Defined in [`inc/ui/class-domain-mapping-element.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/ui/class-domain-mapping-element.php#L639) at line 639


## തിരികെ നൽകുന്നത് (Returns)
ഫിൽട്ടർ ചെയ്ത റീഡയറക്റ്റ് URL.

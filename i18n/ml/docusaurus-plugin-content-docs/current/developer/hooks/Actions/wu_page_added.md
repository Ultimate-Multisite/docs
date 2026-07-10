---
id: wu_page_added
title: പ്രവർത്തനം - wu_page_added
sidebar_label: wu_page_added
_i18n_hash: 47cfb26ef6002a24fecf13a0771771ce
---
# Action: wu_page_added {#action-wupageadded}

പേജുകൾ രജിസ്റ്റർ ചെയ്യുമ്പോൾ അധിക കാര്യങ്ങൾ പ്രവർത്തിപ്പിക്കാൻ പ്ലഗിൻ ഡെവലപ്പർമാർക്ക് ഇത് അനുവദിക്കുന്നു.

ഒരു പ്രത്യേക പേജ് കാണുമ്പോൾ മാത്രം പ്രവർത്തിക്കുന്ന `wu_page_load` എന്നതിUnlike, ഈ ഹുക്ക് Ultimate Multisite കോഡ് ഉപയോഗിച്ച് ചേർക്കുന്ന എല്ലാ അഡ്മിൻ പേജുകൾക്കും രജിസ്ട്രേഷൻ സമയത്താണ് പ്രവർത്തിക്കുന്നത്.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $page_id | `string` | ഈ പേജിന്റെ ഐഡി. |
| $page_hook | `string` | ഈ പേജിന്റെ ഹുക്ക് പേര്. |

### Since {#since}

- 2.0.0
### Source {#source}

[`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L228) എന്നതിൽ 228-ാം വരിയിൽ നിർവചിച്ചിരിക്കുന്നു.

---
id: wu_page_load
title: പ്രവർത്തനം - wu_page_load
sidebar_label: wu_page_load
_i18n_hash: ad34b2f5095d3cd6f3c54172f800e3fd
---
# Action: wu_page_load

ഞങ്ങളുടെ പേജുകളിൽ അധിക hooks ചേർക്കാൻ പ്ലഗിൻ ഡെവലപ്പർമാർക്ക് ഇത് അനുവദിക്കുന്നു.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $id | `string` | ഈ പേജിന്റെ ഐഡി. |
| $page_hook | `string` | ഈ പേജിന്റെ പേജ് hook. |
| $admin_page | `self` | പേജ് ഇൻസ്റ്റൻസ്. |

### Since {#since}

- 1.8.2
- 2.0.4: മൂന്നാമത്തെ പാരാമീറ്റർ ചേർത്തു: പേജ് ഇൻസ്റ്റൻസ്.
### Source {#source}

[`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L318) എന്നതിൽ 318-ാം വരിയിൽ നിർവചിച്ചിരിക്കുന്നു.

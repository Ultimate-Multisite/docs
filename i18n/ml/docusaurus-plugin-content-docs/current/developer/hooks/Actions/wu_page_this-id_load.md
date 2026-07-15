---
id: wu_page_this-id_load
title: 'Action - wu_page_{$this->id}_load'
sidebar_label: 'wu_page_{$this->id}_load'
_i18n_hash: d386046d2a23406f0fed8400e9aefa6e
---
# Action: wu_page_{$this->id}_load

പ്ലഗിൻ ഡെവലപ്പർമാർക്ക് ഞങ്ങളുടെ പേജുകളിൽ അധിക ഹുക്കുകൾ ചേർക്കാൻ ഇത് അനുവദിക്കുന്നു.

## പാരാമീറ്ററുകൾ {#parameters}

| പേര് | ടൈപ്പ് | വിവരണം |
|------|------|-------------|
| $id | `string` | ഈ പേജിന്റെ ID. |
| $page_hook | `string` | ഈ പേജിന്റെ പേജ് ഹുക്ക്. |
| $admin_page | `self` | പേജ് ഇൻസ്റ്റൻസ്. |

### മുതൽ {#since}

- 1.8.2
- 2.0.4: മൂന്നാമത്തെ പാരാമീറ്റർ ചേർത്തു: പേജ് ഇൻസ്റ്റൻസ്.
### സ്രോതസ്സ് {#source}

[`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L332) എന്ന ഫയലിലെ 332-ാം വരിയിൽ നിർവചിച്ചിരിക്കുന്നു.

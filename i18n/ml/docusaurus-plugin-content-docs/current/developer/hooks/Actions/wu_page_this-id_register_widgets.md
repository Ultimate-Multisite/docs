---
id: wu_page_this-id_register_widgets
title: 'Action - wu_page_{$this->id}_register_widgets'
sidebar_label: 'wu_page_{$this->id}_register_widgets'
_i18n_hash: accfd3a11e80c5b3d9c753f065a15fbe
---
# Action: wu_page_{$this->id}_register_widgets {#action-wupagethis-idregisterwidgets}

ഈ പേജിനായുള്ള 위젯കൾ (widgets) രജിസ്റ്റർ ചെയ്തതിന് ശേഷം ഇത് പ്രവർത്തിപ്പിക്കുന്നു (Fires).

ഹുക്ക് നെയിമിലെ ഡൈനാമിക് ഭാഗമായ, `$this->id`, എന്നത് പേജ് ഐഡി (page id)യെ സൂചിപ്പിക്കുന്നു.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $id | `string` | പേജ് ഐഡി (page id). |
| $page_hook | `string` | പേജ് ഹുക്ക് (page hook). |
| $page | `object` | പേജ് ഒബ്ജക്റ്റ് (page object). |

### Since {#since}

- 2.4.10
### Source {#source}

[`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L755) എന്നതിൽ, 755-ാം വരിയിൽ നിർവചിച്ചിരിക്കുന്നു.

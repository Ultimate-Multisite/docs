---
id: wu_page_added
title: Action - wu_page_added
sidebar_label: wu_page_added
_i18n_hash: 91c9f283f9b26c81310bdb787db88fec
---
# Action: wu_page_added

പ്ലഗിൻ ഡെവലപ്പർമാർക്ക് പേജുകൾ രജിസ്റ്റർ ചെയ്യുമ്പോൾ അധിക കാര്യങ്ങൾ പ്രവർത്തിപ്പിക്കാൻ ഇത് അനുവദിക്കുന്നു.

ഒരു പ്രത്യേക പേജ് കാണുമ്പോൾ മാത്രം പ്രവർത്തിക്കുന്ന `wu_page_load`-നെപ്പോUnlike, ഈ hook, WP Ultimo കോഡ് ഉപയോഗിച്ച് ചേർക്കുന്ന എല്ലാ അഡ്മിൻ പേജുകൾക്കും രജിസ്ട്രേഷൻ സമയത്ത് പ്രവർത്തിക്കുന്നു.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | ഈ പേജിന്റെ ID. |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | ഈ പേജിനായി സൃഷ്ടിക്കപ്പെട്ട hook. |

### Since {#since}

- 2.0.0
### Source {#source}

Defined in [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L203) at line 203

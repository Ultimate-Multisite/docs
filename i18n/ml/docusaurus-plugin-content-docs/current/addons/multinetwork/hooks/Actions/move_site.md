---
id: move_site
title: നടപടി - move_site
sidebar_label: move_site
_i18n_hash: 253e7e4db7ca08022f52fb12a14907b6
---
# Action: move_site

ഒരു സൈറ്റ് പുതിയ നെറ്റ്‌വർക്കിലേക്ക് മാറ്റിയതിന് ശേഷം ഇത് പ്രവർത്തിപ്പിക്കുന്നു.

## പാരാമീറ്ററുകൾ

| Name | Type | Description |
|------|------|-------------|
| $site_id | `int` | മാറ്റിയ സൈറ്റിന്റെ ഐഡി. |
| $old_network_id | `int` | സൈറ്റിനായുള്ള യഥാർത്ഥ നെറ്റ്‌വർക്കിന്റെ ഐഡി. |
| $new_network_id | `int` | സൈറ്റ് മാറ്റിയ പുതിയ നെറ്റ്‌വർക്കിന്റെ ഐഡി. |

### മുതൽ

- 1.3.0
### സ്രോതസ്സ്

[inc/functions/network.php](https://github.com/Ultimate-Multisite/ultimate-multisite-multinetwork/blob/main/inc/functions/network.php#L1587) എന്നതിൽ 1587-ാം വരിയിൽ നിർവചിച്ചിരിക്കുന്നു.

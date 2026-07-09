---
id: wu_page_this-id_load
title: 'କାର୍ଯ୍ୟ - wu_page_{$this->id}_load'
sidebar_label: 'wu_page_{$this->id}_load'
_i18n_hash: d386046d2a23406f0fed8400e9aefa6e
---
# Action: wu_page_\{$this->id\}_load

plugin ବିକାଶକମାନଙ୍କୁ ଆମ ପୃଷ୍ଠାଗୁଡ଼ିକରେ ଅତିରିକ୍ତ hooks ଯୋଡ଼ିବାକୁ ଅନୁମତି ଦିଅନ୍ତୁ।

## ପାରାମିଟରଗୁଡ଼ିକ

| ନାମ | ପ୍ରକାର | ବର୍ଣ୍ଣନା |
|------|------|-------------|
| $id | `string` | ଏହି ପୃଷ୍ଠାର ID। |
| $page_hook | `string` | ଏହି ପୃଷ୍ଠାର page hook। |
| $admin_page | `self` | ପୃଷ୍ଠା instance। |

### ଯେହେତୁ

- 1.8.2
- 2.0.4: ତୃତୀୟ ପାରାମିଟର ଯୋଡ଼ାଗଲା: ପୃଷ୍ଠା instance।
### ଉତ୍ସ

[`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L332) ରେ ୩୩୨ ନମ୍ବର ଧାଡ଼ିରେ ପରିଭାଷିତ।

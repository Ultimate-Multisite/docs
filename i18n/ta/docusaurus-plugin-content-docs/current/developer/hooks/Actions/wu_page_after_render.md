---
id: wu_page_after_render
title: செயல் - wu_page_after_render
sidebar_label: wu_page_after_render
_i18n_hash: df5c3e7ef27ab39b167189e082ed729b
---
# Action: wu_page_after_render

நாம் பக்கத்தை (page) காண்பித்த பிறகு, கூடுதல் உள்ளடக்கத்தைச் சேர்க்க plugin உருவாக்குநர்களுக்கு இது வாய்ப்பளிக்கிறது.

## அளவுருக்கள் (Parameters) {#parameters}

| பெயர் (Name) | வகை (Type) | விளக்கம் (Description) |
|------|------|-------------|
| $page_id | `string` | இந்த பக்கத்தின் ஐடி (ID). |
| $page | `object` | பக்கத்தின் ஆப்ஜெக்ட் (object). |

### எப்போது இருந்து (Since) {#since}

- 1.8.2
### மூலம் (Source) {#source}

[`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L413) என்ற கோப்பில் 413 வரியில் வரையறுக்கப்பட்டுள்ளது.

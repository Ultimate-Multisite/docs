---
id: add_user_to_blog
title: செயல்பாடு - add_user_to_blog
sidebar_label: add_user_to_blog
_i18n_hash: ac7b281fe49bfc7d858869b1a24e9ae3
---
# Action: add_user_to_blog

ஒரு பயனர் ஒரு தளத்தில் சேர்க்கப்பட்ட உடனேயே இது இயங்கும்.

## அளவுருக்கள் {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $user_id | `int` | பயனர் ID. |
| $role | `string` | பயனர் பங்கு. |
| $blog_id | `int` | வலைப்பதிவு ID. |

### எப்போது இருந்து {#since}

- MU: MU
### மூலம் {#source}

இது [`inc/mu-migration/includes/helpers.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/helpers.php#L174) என்ற இடத்தில், 174 வரியில் வரையறுக்கப்பட்டுள்ளது.

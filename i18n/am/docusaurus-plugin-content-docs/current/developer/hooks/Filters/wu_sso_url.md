---
id: wu_sso_url
title: ማጣሪያ - wu_sso_url
sidebar_label: wu_sso_url
_i18n_hash: a369dcf0f4cab1f5941c82ac58286155
---
# ማጣሪያ፦ wu_sso_url

ለክሮስ-ዶሜን የደንበኛ እርምጃዎች ከመመለሳቸው በፊት የተፈጠሩ SSO URLs ያጣራል።

አንድ ውህደት ለሉዓላዊ-ተከራይ SSO link የታመነ አውድ ማከል ወይም Ultimate Multisite's token ማረጋገጫን በማስጠበቅ broker URLን መተካት ሲያስፈልገው ይህን ማጣሪያ ይጠቀሙ።

## መለኪያዎች

| ስም | ዓይነት | መግለጫ |
|------|------|-------------|
| $sso_url | `string` | የተፈጠረ SSO URL። |
| $user | `WP_User` | በSSO ጉብኝት የሚረጋገጥ ተጠቃሚ። |
| $site_id | `int` | ለጉብኝቱ ዒላማ የጣቢያ ID። |
| $redirect_to | `string` | ከተሳካ SSO ማረጋገጫ በኋላ የመድረሻ URL። |

### ከ

- 2.13.0

### ምንጭ

በ`inc/sso/class-sso.php` ውስጥ ተገልጿል።


## የሚመለሰው

የተጣራ SSO URL።

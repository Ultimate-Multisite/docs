---
id: get_blogs_of_user
title: Filter - get_blogs_of_user
sidebar_label: get_blogs_of_user
_i18n_hash: 77871d3651eb7f3ab1d055fdb89c061e
---
# Filter: get_blogs_of_user {#filter-getblogsofuser}

የዋናውን የWP Filter እዚህ ላይ እንደገና አዘጋጅቷል፣ ለጥንቃቄ።

አንድ ተጠቃሚ የባለቤትነት መብት የሰጣቸው የጣቢያዎች ዝርዝርን ያጣራል (ይገድባል።)

## ፓራሜትሮች (Parameters) {#parameters}

| ስም (Name) | አይነት (Type) | መግለጫ (Description) |
|------|------|-------------|
| $sites | `object[]` | ለተጠቃሚው የሆኑ የጣቢያ ዕቃዎች (site objects) ስብስብ። |
| $user_id | `int` | የተጠቃሚ መለያ ቁጥር። |
| $all | `bool` | የሚመለሰው የጣቢያዎች ስብስብ 'የተሰረዙ' (deleted)፣ 'የተከማቹ' (archived)፣ ወይም 'ስፓም' (spam) ተብለው ምልክት የተደረጉ የሆኑ ሁሉንም የጣቢያዎች ዝርዝር ሊይዝ ይገባል ወይ? መነሻው (Default) እውነት አይደለም (false)። |

### ከምን ጊዜ ጀምሮ (Since) {#since}

- 2.0.11
### ምንጭ (Source) {#source}

በ[`inc/managers/class-site-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-site-manager.php#L851) ፋይል ላይ በ851ኛው መስመር ተገልጿል።

---
id: add_user_to_blog
title: Action - add_user_to_blog
sidebar_label: add_user_to_blog
_i18n_hash: ac7b281fe49bfc7d858869b1a24e9ae3
---
# Action: add_user_to_blog

አንድ ተጠቃሚ ወደ ድረ-ገጽ ሲጨመር ወዲያውኑ የሚሰራ ነው።

## መለኪያዎች (Parameters) {#parameters}

| ስም (Name) | አይነት (Type) | መግለጫ (Description) |
|------|------|-------------|
| $user_id | `int` | የተጠቃሚው መለያ ቁጥር (User ID)። |
| $role | `string` | የተጠቃሚው ሚና (User role)። |
| $blog_id | `int` | የብሎግ መለያ ቁጥር (Blog ID)። |

### ከ (Since) {#since}

- MU: MU
### ምንጭ (Source) {#source}

በ[`inc/mu-migration/includes/helpers.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/helpers.php#L174) በ174ኛው መስመር ተገልጿል።

---
id: wu_page_this-id_load
title: 'Action - wu_page_{$this->id}_load'
sidebar_label: 'wu_page_{$this->id}_load'
_i18n_hash: d386046d2a23406f0fed8400e9aefa6e
---
# Action: wu_page_{$this->id}_load

የፕልጊን ገንቢዎች ወደ ገጾቻችን ተጨማሪ hooks እንዲጨምሩ ያስችላል።

## መለኪያዎች {#parameters}

| Name | Type | መግለጫ |
|------|------|-------------|
| $id | `string` | የዚህ ገጽ መለያ (ID)። |
| $page_hook | `string` | የዚህ ገጽ hook። |
| $admin_page | `self` | የገጹ ተገልጽ (instance)። |

### ከዚህ ጊዜ ጀምሮ {#since}

- 1.8.2
- 2.0.4: የሶስተኛ መለኪያ ተጨምሯል፡ የገጹ ተገልጽ (page instance)።
### ምንጭ {#source}

በ[`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L332) በ332ኛው መስመር ተገልጿል።

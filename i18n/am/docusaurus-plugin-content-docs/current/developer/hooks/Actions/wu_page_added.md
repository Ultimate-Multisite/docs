---
id: wu_page_added
title: ድርጊት - wu_page_added
sidebar_label: wu_page_added
_i18n_hash: 47cfb26ef6002a24fecf13a0771771ce
---
# Action: wu_page_added

የፕልጊን ገንቢዎች ገጾች ሲመዘገቡ (registered) ተጨማሪ ተግባራትን እንዲያከናውኑ ያስችላል።

`wu_page_load` የሚለው በተቃራኒ፣ ይህም አንድ የተወሰነ ገጽ ሲታይ ብቻ የሚሰራ ሲሆን፣ ይህ hook ደግሞ በUltimate Multisite ኮድ ጥቅም ላይ በሚውልበት እያንዳንዱ የአስተዳዳሪ (admin) ገጽ ሲመዘገብ (at registration) ይሰራል።

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $page_id | `string` | የዚህ ገጽ መለያ (ID)። |
| $page_hook | `string` | የዚህ ገጽ hook ስም (name)። |

### Since {#since}

- 2.0.0
### Source {#source}

Defined in [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L228) at line 228

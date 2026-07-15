---
id: wu_page_added
title: ድርጊት - wu_page_added
sidebar_label: wu_page_added
_i18n_hash: 91c9f283f9b26c81310bdb787db88fec
---
# Action: wu_page_added

የፕልጊን ገንቢዎች ገጾች ሲመዘገቡ ተጨማሪ ነገሮችን እንዲያከናውኑ ያስችላል።

`wu_page_load` የተባለው hook የተወሰነ ገጽ ሲታይ ብቻ የሚሰራ በመሆኑ፣ ይህ hook ደግሞ በWP Ultimo ኮድ ጥቅም ላይ በሚውልበት እያንዳንዱ የአስተዳዳሪ ገጽ (admin page) ሲመዘገብ ይሰራል።

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | የዚህ ገጽ ID። |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | ለዚህ ገጽ የተፈጠረው hook። |

### Since {#since}

- 2.0.0
### Source {#source}

Defined in [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L203) at line 203

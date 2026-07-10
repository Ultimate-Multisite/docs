---
id: wu_page_added
title: कृती - wu_page_added
sidebar_label: wu_page_added
_i18n_hash: 91c9f283f9b26c81310bdb787db88fec
---
# Action: wu_page_added {#action-wupageadded}

प्लगइन डेव्हलपर्सना जेव्हा नवीन पेज (pages) नोंदवले जातात (registered), तेव्हा अतिरिक्त कार्ये (actions) चालवण्याची परवानगी देतो.

`wu_page_load` च्या विपरीत, जे फक्त विशिष्ट पेज पाहिल्यास (seen) चालते, हा hook WP Ultimo कोड वापरून जोडलेल्या प्रत्येक ॲडमिन पेजच्या नोंदणीच्या वेळी (registration) चालतो.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | या पेजची ID. |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | या पेजसाठी तयार झालेला hook. |

### Since {#since}

- 2.0.0
### Source {#source}

[`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L203) मध्ये लाइन 203 वर परिभाषित केले आहे.

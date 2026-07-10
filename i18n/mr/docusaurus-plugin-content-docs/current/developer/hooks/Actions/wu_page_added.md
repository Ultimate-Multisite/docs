---
id: wu_page_added
title: कृती - wu_page_added
sidebar_label: wu_page_added
_i18n_hash: 47cfb26ef6002a24fecf13a0771771ce
---
# Action: wu_page_added {#action-wupageadded}

प्लगइन डेव्हलपर्सना जेव्हा पेजेसची नोंदणी होते, तेव्हा अतिरिक्त कार्ये (actions) चालवण्याची परवानगी देते.

`wu_page_load` च्या विपरीत, जे फक्त विशिष्ट पेज पाहिल जात असताना चालते, हे हुक Ultimate Multisite कोड वापरून जोडलेल्या प्रत्येक ॲडमिन पेजच्या नोंदणीच्या वेळी (registration) चालते.

## पॅरामीटर्स {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $page_id | `string` | या पेजची ID. |
| $page_hook | `string` | या पेजचे हुक नाव. |

### Since {#since}

- 2.0.0
### Source {#source}

[`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L228) याच्या लाइन 228 वर परिभाषित केले आहे.

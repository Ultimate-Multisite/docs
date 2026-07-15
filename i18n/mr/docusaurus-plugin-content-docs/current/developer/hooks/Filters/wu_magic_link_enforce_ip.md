---
id: wu_magic_link_enforce_ip
title: Filter - wu_magic_link_enforce_ip
sidebar_label: wu_magic_link_enforce_ip
_i18n_hash: b785314a6a2d9ea45d3beab38baa58fe
---
# Filter: wu_magic_link_enforce_ip

IP ॲड्रेस व्हेरिफिकेशन लागू करायचे की नाही, हे फिल्टर करते.

जर हे `false` सेट केले, तर टोकन्स (tokens) वेगवेगळ्या नेटवर्कवरून काम करू शकतील. यामुळे सुरक्षा थोडी कमी होते, पण वापरण्याची सोय (usability) वाढते (उदाहरणार्थ, ज्या मोबाइल वापरकर्त्यांचे नेटवर्क बदलते).

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $enforce | `bool` | IP ॲड्रेस मॅचिंग लागू करायचे की नाही. |

### Since {#since}

- 2.0.0
### Source {#source}

[`inc/sso/class-magic-link.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-magic-link.php#L422) मध्ये लाइन ४२२ वर परिभाषित केले आहे.

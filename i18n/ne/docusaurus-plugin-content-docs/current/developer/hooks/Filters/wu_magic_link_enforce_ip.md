---
id: wu_magic_link_enforce_ip
title: फिल्टर - wu_magic_link_enforce_ip
sidebar_label: wu_magic_link_enforce_ip
_i18n_hash: b785314a6a2d9ea45d3beab38baa58fe
---
# Filter: wu_magic_link_enforce_ip {#filter-wumagiclinkenforceip}

IP ठेगाना प्रमाणीकरण लागू गर्ने कि नगर्ने Filter गर्नुहोस्।

टोकनहरूलाई फरक नेटवर्कहरूबाट काम गर्न अनुमति दिन false मा सेट गर्नुहोस्। यसले सुरक्षा घटाउँछ तर प्रयोगयोग्यता बढाउँछ (जस्तै, नेटवर्क परिवर्तन गर्ने मोबाइल प्रयोगकर्ताहरूका लागि)।

## प्यारामिटरहरू {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $enforce | `bool` | IP ठेगाना मिलान लागू गर्ने कि नगर्ने। |

### Since {#since}

- 2.0.0
### Source {#source}

[`inc/sso/class-magic-link.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-magic-link.php#L422) मा लाइन 422 मा परिभाषित

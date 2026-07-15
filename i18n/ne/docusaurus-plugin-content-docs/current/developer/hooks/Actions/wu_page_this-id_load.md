---
id: wu_page_this-id_load
title: 'कार्य - wu_page_{$this->id}_load'
sidebar_label: 'wu_page_{$this->id}_load'
_i18n_hash: d386046d2a23406f0fed8400e9aefa6e
---
# Action: wu_page_\{$this->id\}_load

प्लगइन विकासकर्ताहरूलाई हाम्रा पृष्ठहरूमा थप hookहरू थप्न अनुमति दिनुहोस्।

## प्यारामिटरहरू {#parameters}

| नाम | प्रकार | विवरण |
|------|------|-------------|
| $id | `string` | यस पृष्ठको ID। |
| $page_hook | `string` | यस पृष्ठको page hook। |
| $admin_page | `self` | पृष्ठ इन्स्ट्यान्स। |

### देखि {#since}

- 1.8.2
- 2.0.4: तेस्रो प्यारामिटर थपियो: पृष्ठ इन्स्ट्यान्स।
### स्रोत {#source}

[`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L332) मा लाइन 332 मा परिभाषित

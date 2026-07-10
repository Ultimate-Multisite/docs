---
id: wu_page_load
title: कार्य - wu_page_load
sidebar_label: wu_page_load
_i18n_hash: ad34b2f5095d3cd6f3c54172f800e3fd
---
# कार्य: wu_page_load {#action-wupageload}

प्लगइन विकासकर्ताहरूलाई हाम्रा पृष्ठहरूमा थप हुकहरू थप्न अनुमति दिनुहोस्।

## प्यारामिटरहरू {#parameters}

| नाम | प्रकार | विवरण |
|------|------|-------------|
| $id | `string` | यस पृष्ठको ID। |
| $page_hook | `string` | यस पृष्ठको पृष्ठ हुक। |
| $admin_page | `self` | पृष्ठ इन्स्ट्यान्स। |

### देखि {#since}

- 1.8.2
- 2.0.4: तेस्रो प्यारामिटर थपियो: पृष्ठ इन्स्ट्यान्स।
### स्रोत {#source}

[`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L318) मा पङ्क्ति 318 मा परिभाषित गरिएको छ।

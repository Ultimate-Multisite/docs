---
id: secure_logged_in_cookie
title: फिल्टर - secure_logged_in_cookie
sidebar_label: secure_logged_in_cookie
_i18n_hash: 4dbde39f6b78088a1397f654cf66c92c
---
# फिल्टर: secure_logged_in_cookie {#filter-secureloggedincookie}

लगइन गरिएको cookie HTTPS मार्फत मात्र पठाइने हो कि होइन फिल्टर गर्छ।

## प्यारामिटरहरू {#parameters}

| नाम | प्रकार | विवरण |
|------|------|-------------|
| $secure_logged_in_cookie | `bool` | लगइन गरिएको cookie HTTPS मार्फत मात्र पठाइने हो कि होइन। |
| $user_id | `int` | प्रयोगकर्ता ID। |
| $secure | `bool` | auth cookie HTTPS मार्फत मात्र पठाइने हो कि होइन। |

### देखि {#since}

- 3.1.0
### स्रोत {#source}

[`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L91) मा लाइन 91 मा परिभाषित गरिएको छ।

---
id: get_blogs_of_user
title: Filter - get_blogs_of_user
sidebar_label: get_blogs_of_user
_i18n_hash: 77871d3651eb7f3ab1d055fdb89c061e
---
# Filter: get_blogs_of_user

ਸਹੀ ਕੰਮ ਕਰਨ ਲਈ, ਇੱਥੇ ਮੂਲ WP ਫਿਲਟਰ ਨੂੰ ਦੁਬਾਰਾ ਲਾਗੂ ਕੀਤਾ ਗਿਆ ਹੈ।

ਇਹ ਕਿਸੇ ਯੂਜ਼ਰ ਨਾਲ ਜੁੜੇ ਸਾਈਟਾਂ ਦੀ ਸੂਚੀ ਨੂੰ ਫਿਲਟਰ ਕਰਦਾ ਹੈ।

## ਪੈਰਾਮੀਟਰ (Parameters) {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $sites | `object[]` | ਯੂਜ਼ਰ ਨਾਲ ਸਬੰਧਤ ਸਾਈਟ ਆਬਜੈਕਟਾਂ ਦਾ ਇੱਕ ਐਰੇ। |
| $user_id | `int` | ਯੂਜ਼ਰ ID। |
| $all | `bool` | ਇਹ ਕਿ ਵਾਪਸ ਆਉਣ ਵਾਲੇ ਸਾਈਟਾਂ ਦੇ ਐਰੇ ਵਿੱਚ ਸਾਰੀਆਂ ਸਾਈਟਾਂ ਸ਼ਾਮਲ ਹੋਣੀਆਂ ਚਾਹੀਦੀਆਂ ਹਨ, ਜਿਨ੍ਹਾਂ ਵਿੱਚ 'deleted', 'archived', ਜਾਂ 'spam'标记 ਕੀਤੀਆਂ ਸਾਈਟਾਂ ਵੀ ਸ਼ਾਮਲ ਹਨ। ਡਿਫਾਲਟ: false। |

### ਕਦੋਂ ਤੋਂ (Since) {#since}

- 2.0.11
### ਸਰੋਤ (Source) {#source}

[`inc/managers/class-site-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-site-manager.php#L851) ਵਿੱਚ ਲਾਈਨ 851 'ਤੇ ਪਰਿਭਾਸ਼ਿਤ।

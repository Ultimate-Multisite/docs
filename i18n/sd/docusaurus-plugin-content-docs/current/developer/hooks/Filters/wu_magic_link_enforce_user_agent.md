---
id: wu_magic_link_enforce_user_agent
title: فلٽر - wu_magic_link_enforce_user_agent
sidebar_label: wu_magic_link_enforce_user_agent
_i18n_hash: 33252b9660851a8fe51ff7ed586d9cf2
---
# Filter: wu_magic_link_enforce_user_agent

Filter ته user agent جي تصديق لاڳو ڪجي يا نه.

false تي سيٽ ڪريو ته tokens مختلف برائوزرن/ڊوائيسن تي ڪم ڪري سگهن. هي سيڪيورٽي گهٽائي ٿو پر استعمال ۾ آساني وڌائي ٿو.

## پيرا ميٽر

| Name | Type | Description |
|------|------|-------------|
| $enforce | `bool` | user agent جي ملائڻ کي لاڳو ڪجي يا نه. |

### کان وٺي

- 2.0.0
### ذريعو

[`inc/sso/class-magic-link.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-magic-link.php#L410) ۾ لائين 410 تي بيان ٿيل.

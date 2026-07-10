---
id: wu_magic_link_enforce_user_agent
title: Filter - wu_magic_link_enforce_user_agent
sidebar_label: wu_magic_link_enforce_user_agent
_i18n_hash: 33252b9660851a8fe51ff7ed586d9cf2
---
# Filter: wu_magic_link_enforce_user_agent {#filter-wumagiclinkenforceuseragent}

یوزر ایجنٹ کی تصدیق کو نافذ کرنے یا نہ کرنے کا فلٹر۔

اگر آپ اسے `false` پر سیٹ کرتے ہیں، تو ٹوکنز مختلف براؤزروں/ڈیوائسز پر کام کر سکیں گے۔ اس سے سیکیورٹی کم ہو جائے گی لیکن استعمال میں آسانی (usability) بڑھ جائے گی۔

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $enforce | `bool` | کیا یوزر ایجنٹ میچنگ کو نافذ کرنا ہے۔ |

### Since {#since}

- 2.0.0
### Source {#source}

Defined in [`inc/sso/class-magic-link.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-magic-link.php#L410) at line 410

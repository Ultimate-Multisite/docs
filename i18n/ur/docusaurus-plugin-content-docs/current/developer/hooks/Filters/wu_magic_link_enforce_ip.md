---
id: wu_magic_link_enforce_ip
title: فلٹر - wu_magic_link_enforce_ip
sidebar_label: wu_magic_link_enforce_ip
_i18n_hash: b785314a6a2d9ea45d3beab38baa58fe
---
# Filter: wu_magic_link_enforce_ip

یہ فلٹر طے کرتا ہے کہ IP ایڈریس کی تصدیق (verification) کو نافذ کیا جائے یا نہیں۔

اگر اسے `false` پر سیٹ کیا جائے، تو ٹوکنز کو مختلف نیٹ ورکس سے کام کرنے کی اجازت ملے گی۔ اس سے سیکیورٹی کم ہو جاتی ہے لیکن استعمال میں آسانی (usability) بڑھ جاتی ہے (مثال کے طور پر، موبائل صارفین کے لیے جو نیٹ ورک بدل رہے ہوں۔)

## پیرامیٹرز

| نام | قسم | وضاحت |
|------|------|-------------|
| $enforce | `bool` | کیا IP ایڈریس کی مطابقت (matching) کو نافذ کیا جائے۔ |

### سے

- 2.0.0
### ماخذ

Defined in [`inc/sso/class-magic-link.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-magic-link.php#L422) at line 422

---
id: get_blogs_of_user
title: Filter - get_blogs_of_user
sidebar_label: get_blogs_of_user
_i18n_hash: 77871d3651eb7f3ab1d055fdb89c061e
---
# Filter: get_blogs_of_user

یہ اصل WP Filter کو یہاں دوبارہ استعمال کرتا ہے، تاکہ مکمل احتیاط ہو جائے۔

یہ ایک صارف سے وابستہ سائٹس کی فہرست کو فلٹر کرتا ہے۔

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $sites | `object[]` | صارف سے وابستہ سائٹس آبجیکٹس کی ایک فہرست (array)۔ |
| $user_id | `int` | صارف کی ID۔ |
| $all | `bool` | یہ بتاتا ہے کہ کیا واپس آنے والی سائٹس کی فہرست میں تمام سائٹس شامل ہونی چاہئیں، جن میں 'deleted'، 'archived'، یا 'spam' کے نشان لگے ہوئے بھی شامل ہیں۔ ڈیفالٹ ویلیو false ہے۔ |

### Since

- 2.0.11
### Source

[`inc/managers/class-site-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-site-manager.php#L851) میں لائن 851 پر ڈیفائن کیا گیا ہے۔

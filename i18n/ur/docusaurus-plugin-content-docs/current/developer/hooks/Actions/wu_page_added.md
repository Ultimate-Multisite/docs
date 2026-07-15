---
id: wu_page_added
title: عمل - wu_page_added
sidebar_label: wu_page_added
_i18n_hash: 47cfb26ef6002a24fecf13a0771771ce
---
# Action: wu_page_added

پلگ ان بنانے والوں کو یہ سہولت دیتا ہے کہ جب صفحات رجسٹر کیے جائیں تو وہ اضافی کام چلا سکیں۔

یہ `wu_page_load` سے مختلف ہے، جو صرف اس وقت چلتا ہے جب کوئی خاص صفحہ دیکھا جا رہا ہو۔ یہ ہک، Ultimate Multisite کوڈ کا استعمال کرتے ہوئے شامل کیے جانے والے ہر ایڈمن پیج کے لیے رجسٹریشن کے وقت چلتا ہے۔

## پیرامیٹرز (Parameters) {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $page_id | `string` | اس صفحے کی ID۔ |
| $page_hook | `string` | اس صفحے کا ہک نام۔ |

### سے (Since) {#since}

- 2.0.0
### ماخذ (Source) {#source}

Defined in [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L228) at line 228

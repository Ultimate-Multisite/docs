---
id: wu_checkout_form_base_domains
title: فلٹر - wu_checkout_form_base_domains
sidebar_label: wu_checkout_form_base_domains
_i18n_hash: 49dcc3fe0fa685304a70aeb9424749fd
---
# فلٹر: wu_checkout_form_base_domains

مشترک checkout فارم کے بنیادی ڈومینز کو فلٹر کرتا ہے جنہیں mapped-domain ریکارڈز نہیں بننا چاہیے۔

یہ فلٹر اس وقت استعمال کریں جب کوئی انضمام checkout فارم کے **Site URL** فیلڈز کے لیے اضافی بنیادی ڈومینز فراہم کرے۔ اس فلٹر سے واپس آنے والے ڈومینز کو ہر سائٹ کے custom domains کے بجائے مشترک رجسٹریشن ہوسٹس سمجھا جاتا ہے۔

## پیرامیٹرز

| نام | قسم | وضاحت |
|------|------|-------------|
| $domains | `array` | checkout فارم کی ترتیب سے جمع کیے گئے مشترک بنیادی ڈومینز۔ |

### از

- 2.13.0

### ماخذ

`inc/functions/domain.php` میں تعریف کیا گیا ہے۔


## واپسی

نارملائزڈ checkout فارم کے بنیادی ڈومینز کی array۔

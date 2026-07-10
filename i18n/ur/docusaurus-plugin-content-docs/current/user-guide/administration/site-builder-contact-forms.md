---
title: ساٹ بلڈر کانٹیکٹ فارمز
sidebar_position: 22
_i18n_hash: b8d4d2003a8946f4184ca72fd9529d35
---
# Site Builder Contact Forms {#site-builder-contact-forms}

Superdav AI Agent v1.10.0 Site Builder agent کا استعمال کرتے ہوئے چیٹ انٹرفیس سے براہ راست رابطہ فارم بنانے کی صلاحیت شامل کرتا ہے۔ اس سے آپ کو چیٹ سے باہر نکلے بغیر کسی بھی پیج پر مکمل طور پر فعال رابطہ فارم شامل کرنے کی سہولت ملتی ہے۔

## Overview {#overview}

Site Builder contact form ability (`create_contact_form`) خود بخود آپ کے انسٹال کردہ فارم plugin کا پتہ لگا لیتا ہے اور اس plugin کی مقامی صلاحیتوں کا استعمال کرتے ہوئے ایک رابطہ فارم تیار کرتا ہے۔ سپورٹ کردہ فارم plugins میں شامل ہیں:

- Contact Form 7
- WPForms
- Fluent Forms
- Gravity Forms

اس assistant آپ کی سائٹ پر دستیاب بہترین فارم plugin کو خود بخود منتخب کرتا ہے اور اس plugin کے مطابق ایک رابطہ فارم تیار کرتا ہے۔

## Creating a Contact Form {#creating-a-contact-form}

Site Builder کا استعمال کرتے ہوئے رابطہ فارم بنانے کے لیے:

1. WordPress admin میں **Gratis AI Agent** چیٹ پینل کھولیں۔
2. چیٹ ہیڈر میں agent icon پر کلک کر کے **Site Builder** agent پر سوئچ کریں۔
3. اس رابطہ فارم کی تفصیل بیان کریں جو آپ بنانا چاہتے ہیں۔ مثال کے طور پر:

   > "Contact page پر ایک رابطہ فارم شامل کریں جس میں نام، ای میل، پیغام، اور فون نمبر کے لیے فیلڈز ہوں۔"

   یا صرف:

   > "Contact page کے لیے ایک رابطہ فارم بنائیں۔"

4. Site Builder رابطہ فارم تیار کر دے گا اور ایک shortcode واپس کرے گا جسے آپ embed کرنے کے لیے تیار ہیں۔

## Using the Generated Shortcode {#using-the-generated-shortcode}

Site Builder کے رابطہ فارم بنانے کے بعد، یہ ایک shortcode واپس کرتا ہے (مثال کے طور پر، `[contact-form-7 id="123"]`)۔ آپ یہ کر سکتے ہیں:

1. **پیج یا پوسٹ میں embed کرنا** — shortcode کو کاپی کریں اور اسے block editor یا classic editor کا استعمال کرتے ہوئے کسی بھی پیج یا پوسٹ میں پیسٹ کریں۔
2. **Site Builder کے ذریعے شامل کرنا** — Site Builder سے کہیں کہ وہ فارم کو خود بخود کسی مخصوص پیج پر شامل کر دے:

   > "Contact page پر رابطہ فارم شامل کریں۔"

3. **template میں استعمال کرنا** — اگر آپ PHP سے واقف ہیں، تو آپ shortcode کو کسی theme template file میں شامل کر سکتے ہیں۔

## Customizing the Contact Form {#customizing-the-contact-form}

Site Builder کے رابطہ فارم بنانے کے بعد، آپ اسے مزید کسٹمائز کر سکتے ہیں:

### Via the Chat Interface {#via-the-chat-interface}

Site Builder سے فارم میں تبدیلی کرنے کے لیے کہیں:

> "رابطہ فارم کو ایک subject فیلڈ شامل کرنے اور پیغام کے فیلڈ کو required بنانے کے لیے اپ ڈیٹ کریں۔"

Site Builder فارم کو اپ ڈیٹ کر دے گا اور اپ ڈیٹ شدہ shortcode واپس کرے گا۔

### Via the Form Plugin's Admin Interface {#via-the-form-plugins-admin-interface}

آپ اپنے فارم plugin کی سیٹنگز میں بھی براہ راست فارم کو کسٹمائز کر سکتے ہیں:

1. WordPress admin میں **Contact Form 7** (یا آپ کے انسٹال کردہ فارم plugin) پر جائیں۔
2. Site Builder کے بنائے ہوئے فارم کو تلاش کریں۔
3. ضرورت کے مطابق فارم کے فیلڈز، validation rules، اور email notifications کو ایڈٹ کریں۔

## Form Plugins and Compatibility {#form-plugins-and-compatibility}

Site Builder خود بخود پتہ لگا لیتا ہے کہ آپ کی سائٹ پر کون سا فارم plugin انسٹال ہے اور رابطہ فارم بنانے کے لیے اسے استعمال کرتا ہے۔ اگر ایک سے زیادہ فارم plugins انسٹال ہیں، تو Site Builder انہیں اس ترتیب میں ترجیح دیتا ہے:

1. Contact Form 7
2. WPForms
3. Fluent Forms
4. Gravity Forms

اگر ان میں سے کوئی بھی plugin انسٹال نہیں ہے، تو Site Builder رابطہ فارم بنانے سے پہلے ایک انسٹال کرنے کی سفارش کرے گا۔

## Email Notifications {#email-notifications}

Site Builder کے ذریعے بنائے گئے رابطہ فارم ڈیفالٹ طور پر سائٹ ایڈمنسٹریٹر کو ای میل نوٹیفیکیشن بھیجنے کے لیے configure کیے جاتے ہیں۔ آپ وصول کنندہ ای میل ایڈریس اور نوٹیفیکیشن پیغام کو کسٹمائز کر سکتے ہیں:

1. اپنے فارم plugin کے admin interface پر جائیں۔
2. Site Builder کے بنائے ہوئے فارم کو تلاش کریں۔
3. ای میل نوٹیفیکیشن کی سیٹنگز کو ایڈٹ کریں۔

تفصیلی ہدایات کے لیے، اپنے فارم plugin کی دستاویزات (documentation) دیکھیں۔

- [Contact Form 7 Email Notifications](https://contactform7.com/docs/)
- [WPForms Email Notifications](https://wpforms.com/docs/)
- [Fluent Forms Email Notifications](https://fluentforms.com/docs/)
- [Gravity Forms Email Notifications](https://docs.gravityforms.com/)

## Example Use Cases {#example-use-cases}

### Simple Contact Form {#simple-contact-form}

> "نام، ای میل، اور پیغام کے فیلڈز کے ساتھ ایک سادہ رابطہ فارم بنائیں۔"

### Multi-Step Form {#multi-step-form}

> "ایک رابطہ فارم بنائیں جس میں رابطہ کی معلومات کے لیے پہلا مرحلہ اور پیغام اور ترجیحی رابطہ طریقہ کے لیے دوسرا مرحلہ ہو۔"

### Form with Conditional Logic {#form-with-conditional-logic}

> "ایک رابطہ فارم بنائیں جو صارف کے ڈراپ ڈاؤن میں انتخاب کی بنیاد پر مختلف فیلڈز دکھائے۔"

### Form with File Upload {#form-with-file-upload}

> "ایک رابطہ فارم بنائیں جو صارفین کو کوئی فائل یا attachment اپ لوڈ کرنے کی اجازت دے۔"

:::note
Contact form creation Superdav AI Agent v1.10.0 اور اس سے نئے ورژن میں دستیاب ہے۔ اس صلاحیت کو استعمال کرنے کے لیے Site Builder agent کا فعال ہونا ضروری ہے۔
:::

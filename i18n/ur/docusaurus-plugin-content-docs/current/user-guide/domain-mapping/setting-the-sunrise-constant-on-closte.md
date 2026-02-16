---
title: Closte پر Sunrise Constant سیٹ کرنا
sidebar_position: 16
_i18n_hash: ce55527b126282d167eec4e3a8f824ea
---
# Closte پر Sunrise constant کو true سیٹ کرنا

کچھ ہوسٹنگ فراہم کنندگان سیکیورٹی کی وجوہات کی بنا پر wp-config.php فائل کو لاک کر دیتے ہیں۔ اس کا مطلب یہ ہے کہ Ultimate Multisite خود بخود اس فائل میں ضروری constants شامل نہیں کر سکتا جو domain mapping اور دیگر فیچرز کو چلانے کے لیے درکار ہیں۔ Closte ایسا ہی ایک ہوسٹ ہے۔

تاہم، Closte ایک محفوظ طریقے سے wp-config.php میں constants شامل کرنے کی سہولت فراہم کرتا ہے۔ آپ کو بس نیچے دیے گئے اقدامات پر عمل کرنا ہوگا:

## Closte ڈیش بورڈ پر

سب سے پہلے، [اپنے Closte اکاؤنٹ میں لاگ ان کریں](https://app.closte.com/)، Sites مینو آئٹم پر کلک کریں، پھر جس سائٹ پر آپ کام کر رہے ہیں اس کے Dashboard لنک پر کلک کریں:

<!-- Screenshot unavailable: Closte dashboard showing Sites menu and Dashboard link -->

آپ کو اسکرین کے بائیں جانب نئے مینو آئٹمز نظر آئیں گے۔ اس مینو کا استعمال کرتے ہوئے **Settings** صفحے پر جائیں:

<!-- Screenshot unavailable: Closte left sidebar menu showing Settings option -->

پھر، **Settings** پر، WP-Config ٹیب تلاش کریں، اور اس ٹیب میں "Additional wp-config.php content" فیلڈ ڈھونڈیں:

<!-- Screenshot unavailable: Closte Settings page with WP-Config tab showing Additional wp-config.php content field -->

Ultimate Multisite کی انسٹالیشن کے سلسلے میں، آپ کو اس فیلڈ میں sunrise constant شامل کرنا ہوگا۔ بس ایک نئی لائن شامل کریں اور نیچے دی گئی لائن پیسٹ کریں۔ اس کے بعد، **Save All** بٹن پر کلک کریں۔

define('SUNRISE', true);

بس، آپ کا کام ہو گیا۔ Ultimate Multisite انسٹال وزرڈ پر واپس جائیں اور عمل جاری رکھنے کے لیے صفحے کو ریفریش کریں۔

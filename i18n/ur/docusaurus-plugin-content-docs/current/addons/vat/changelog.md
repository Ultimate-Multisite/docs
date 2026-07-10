---
title: VAT Changelog
sidebar_position: 99
_i18n_hash: 6a39ef4779b6ed52a08804c75ca25fc9
---
# VAT تبدیلیوں کا ریکارڈ {#vat-changelog}

Version 1.0.7 - Released on 2026-02-03

* Fix: جرمن (DE) VAT نمبرز VIES SOAP سروس میں MS_MAX_CONCURRENT_REQ غلطیوں کی وجہ سے تصدیق (validation) میں ناکام ہو رہے تھے۔ زیادہ قابل اعتماد تصدیق کے لیے پرانے SOAP API سے سرکاری EU VIES REST API پر منتقل کر دیا گیا ہے۔
* Fix: اب VAT نمبرز اس وقت بھی قبول کیے جاتے ہیں جب VIES سروس عارضی طور پر دستیاب نہ ہو، بجائے اس کے کہ انہیں غلطی سے مسترد کر دیا جائے۔ بعد میں جائزہ کے لیے ایک لاگ انٹری بنا دی جاتی ہے۔
* Fix: VAT/Tax ID فیلڈ اب صرف EU ممبران کے لیے نہیں بلکہ تمام ممالک کے لیے نظر آتا ہے۔ غیر EU ٹیکس ID (جیسے سوئس CHE نمبرز) کو انوائس دکھانے کے لیے VIES تصدیق کے بغیر محفوظ کیا جاتا ہے۔
* Fix: یونانی (GR)، موناکو (MC)، اور آئیل آف مین (IM) کے لیے VAT پری فکس کی تلاش (lookup) غلط ارے (array) تلاش کی منطق کی وجہ سے خراب ہو گئی تھی۔
* Improvement: ایک غیر ضروری wp-cli-bundle dev dependency کو ہٹا دیا گیا تھا جو Site Exporter ایڈ آن کے ساتھ استعمال ہونے پر致命 غلطیاں (fatal errors) پیدا کر سکتا تھا۔
* Improvement: ایک جامع یونٹ ٹیسٹ سوٹ (53 ٹیسٹ) شامل کیا گیا ہے۔

Version 1.0.6 - Released on 2026-01-25

* Fix: گھریلو B2B لین دین اب صحیح طریقے سے VAT وصول کرتے ہیں۔ EU VAT قواعد کے مطابق، ریورس چارج صرف سرحد پار B2B لین دین پر لاگو ہوتا ہے، نہ کہ جب گاہک کا ملک کمپنی کے ملک سے ملتا ہو۔

Version 1.0.5 - Released on 2026-01-22

* Fix: ایڈ آن لوڈ نہیں ہو رہا تھا یا صحیح طریقے سے کام نہیں کر رہا تھا۔
* Change: زیادہ قابل اعتماد اور فعال طور پر برقرار رکھے گئے ڈیٹا کے لیے VAT ریٹ ڈیٹا سورس کو euvatrates.com سے ibericode/vat-rates ریپوزٹری میں تبدیل کر دیا گیا ہے۔
* Fix: super_reduced_rates آپشن ویلیو میں ٹائپو کو درست کیا گیا۔
* Improvement: غلطیوں کو روکنے کے لیے ملک کوڈ ہینڈلنگ میں null checks شامل کیے گئے۔
* Change: ٹرادوتور (Traduttore) کے ذریعے خودکار اپ ڈیٹس کے حق میں بند ترجمہ فائلوں (bundled translation files) کو ہٹا دیا گیا۔

Version: 1.0.3 - Released on 2025-09-28

* Prefix کا نام ultimate-multisite میں تبدیل کیا؛ ٹیکسٹ ڈومین کو اپ ڈیٹ کیا؛ ورژن بڑھایا۔

Version 1.0.0-beta.4 - 2021-09-24

* Added: mu-plugins پر مبنی سیٹ اپ کے لیے filter wp_ultimo_skip_network_active_check شامل کیا؛

Version 1.0.0 - 05/08/2021 - ابتدائی ریلیز

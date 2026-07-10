---
title: Site Templates میں خودکار تلاش اور تبدیلی
sidebar_position: 8
_i18n_hash: 0842f53505d24579010d91568e06ef68
---
# سائٹ ٹیمپلیٹس میں خودکار تلاش اور تبدیلی (v2) {#auto-search-and-replace-in-site-templates-v2}

_**اس ٹیوٹوریل کے لیے WP UItimo ورژن 2.x درکار ہے۔**_

Ultimate Multisite کی سب سے طاقتور خصوصیات میں سے ایک یہ ہے کہ registration form میں من چاہے متن، رنگ، اور select fields شامل کیے جا سکتے ہیں۔ جب ہمارے پاس وہ ڈیٹا محفوظ ہو جائے، تو ہم اسے منتخب کردہ site template کے بعض حصوں میں content پہلے سے بھرنے کے لیے استعمال کر سکتے ہیں۔ پھر، جب نئی سائٹ شائع ہو گی، Ultimate Multisite placeholders کو registration کے دوران درج کی گئی اصل معلومات سے بدل دے گا۔

مثال کے طور پر، آپ اپنی template sites placeholders کے ساتھ بنا سکتے ہیں۔ Placeholders کو double curly braces میں گھیر کر شامل کیا جانا چاہیے - {{placeholder_name}}۔

پھر، آپ اس ڈیٹا کو محفوظ کرنے کے لیے بس ایک matching registration field شامل کر سکتے ہیں

اس کے بعد آپ کا customer registration کے دوران اس field کو بھر سکے گا۔

Ultimate Multisite پھر placeholders کو customer کی فراہم کردہ ڈیٹا سے خودکار طور پر بدل دے گا۔

## **"placeholders سے بھرے template" کے مسئلے کا حل** {#solving-the-template-full-of-placeholders-problem}

یہ سب بہت اچھا ہے، لیکن ہمیں ایک بدنما مسئلہ درپیش آتا ہے: اب ہماری site templates - جنہیں ہمارے customers دیکھ سکتے ہیں - بدنما placeholders سے بھری ہوتی ہیں جو زیادہ کچھ نہیں بتاتے۔

اسے حل کرنے کے لیے، ہم placeholders کے لیے fake values مقرر کرنے کا اختیار فراہم کرتے ہیں، اور ہم انہی values کو استعمال کر کے template sites پر ان کے content کو تلاش اور تبدیل کرتے ہیں جب آپ کے customers وزٹ کر رہے ہوتے ہیں۔

آپ placeholders editor تک رسائی **Ultimate Multisite > Settings > Sites** پر جا کر، Site Template Options area تک scroll کر کے، اور پھر **Edit Placeholders** link پر click کر کے حاصل کر سکتے ہیں۔

![Sites settings page میں Site Template Options area](/img/config/settings-sites-templates-section.png)

یہ آپ کو placeholders کے content editor تک لے جائے گا، جہاں آپ placeholders اور ان کا متعلقہ content شامل کر سکتے ہیں۔

![Template placeholders editor entry point](/img/config/settings-sites-templates-section.png)

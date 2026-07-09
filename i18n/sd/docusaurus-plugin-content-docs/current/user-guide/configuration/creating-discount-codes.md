---
title: ڈسکاؤنٹ کوڈز کڻڻ
sidebar_position: 19
_i18n_hash: d6adaf916f3e21b4fda2deeaa6672d00
---
# ڈسکاؤنٹ کوڈز بنانا (v2) {#creating-discount-codes-v2}

_**اہم نوٹ: یہ آرٹیکل Ultimate Multisite کے ورژن 2.x کا حوالہ دیتا ہے۔**_

Ultimate Multisite کے ساتھ، آپ اپنے کلائنٹس کو ان کی سبسکرپشن پر رعایت دینے کے لیے ڈسکاؤنٹ کوڈز بنا سکتے ہیں۔ اور انہیں بنانا بہت آسان ہے!

## ڈسکاؤنٹ کوڈز بنانا اور ایڈٹ کرنا {#creating-and-editing-discount-codes}

کوئی ڈسکاؤنٹ کوڈ بنانے یا ایڈٹ کرنے کے لیے، **Ultimate Multisite > Discount Codes** پر جائیں۔

![ڈسکاؤنٹ کوڈز کی فہرست — کسی بھی کوڈ سے پہلے خالی حالت](/img/config/discount-codes-empty.png)

وہاں آپ کو ان ڈسکاؤنٹ کوڈز کی ایک فہرست ملے گی جو آپ نے پہلے بنائی ہیں۔

آپ نئے کوپن بنانے کے لیے **Add Discount Code** پر کلک کر سکتے ہیں یا انہیں ایڈٹ کرنے کے لیے ان پر ہور (hover) کر کے **Edit** پر کلک کر سکتے ہیں۔

![ہوور ایگزٹ پر ایڈ ڈسکاؤنٹ کوڈ بٹن کی تصویر](/img/config/discount-codes-add-button.png)

آپ اس پیج پر ریڈائریکٹ ہو جائیں گے جہاں آپ اپنا کوپن کوڈ بنائیں گے یا ایڈٹ کریں گے۔ اس مثال میں ہم ایک نیا بنا رہے ہیں۔

![ڈسکاؤنٹ کوڈ ایڈیٹ پیج جس میں تمام سیکشنز نظر آ رہے ہیں](/img/config/discount-code-edit.png)

آئیے یہاں دستیاب سیٹنگز کو دیکھتے ہیں:

**Enter Discount Code:** یہ صرف آپ کے ڈسکاؤنٹ کوڈ کا نام ہے۔ یہ وہ کوڈ نہیں ہے جس کی ضرورت آپ کے کسٹمرز کو چیک آؤٹ فارم پر استعمال کرنے کی ہوگی۔

**Description:** یہاں، آپ مختصر طور پر بیان کر سکتے ہیں کہ یہ کوپن کس چیز کے لیے ہے۔

![ایڈٹ پیج کے اوپر ڈسکاؤنٹ کوڈ کا نام اور تفصیل والے فیلڈز](/img/config/discount-code-description.png)

آپ ڈسکاؤنٹ کوڈ کو فعال (active) یا غیر فعال (inactive) بھی دیکھ سکتے ہیں:

![ڈسکاؤنٹ کوڈ کی فعال حیثیت](/img/config/discount-code-active.png)

**Coupon code:** یہاں وہ جگہ ہے جہاں آپ وہ کوڈ متعین کرتے ہیں جو آپ کے کسٹمرز چیک آؤٹ کے دوران درج کرنے کی ضرورت ہوگی۔

![Coupon code field where customers enter the code at checkout](/img/config/discount-code-coupon-field.png)

**ڈسکاؤنٹ:** ایتھے، آپ اپنے ڈسکاؤنٹ کوڈ کے لیے **فیصد (percentage)** یا ایک **مقررہ رقم (fixed amount)** مقرر کر سکتے ہیں۔

![Discount amount setting with percentage or fixed-amount dropdown](/img/config/discount-code-amount.png)

**انویسٹمنٹ پر لاگو کریں:** اگر یہ آپشن بند ہے، تو یہ ڈسکاؤنٹ کوڈ صرف **پہلی ادائیگی** پر ہی لاگو ہوگا۔ باقی تمام ادائیگیاں پر کوئی رعایت نہیں ہوگی۔ اگر یہ آپشن آن ہے، تو ڈسکاؤنٹ کوڈ مستقبل کی تمام ادائیگیاں درست ہوں گی۔

**سیٹ اپ فیس ڈسکاؤنٹ:** اگر یہ آپشن بند ہے، تو کوپن کوڈ آرڈر کی **سیٹ اپ فیس** پر کوئی چھوٹ نہیں دے گا۔ اگر یہ آپشن آن ہے، تو آپ وہ چھوٹ (فیصد یا مقررہ رقم) سیٹ کر سکتے ہیں جو یہ کوپن کوڈ آپ کے پلانز کی سیٹ اپ فیس پر لاگو کرے گا۔

![Apply to renewals and setup fee discount toggle options](/img/config/discount-code-renewals.png)

**فعال (Active):** اس کوپن کوڈ کو دستی طور پر فعال یا غیر فعال کریں۔

![Active toggle to manually enable or disable the discount code](/img/config/discount-code-active.png)

**ایڈوانس آپشنز (Advanced Options)** کے تحت، ہمارے پاس یہ سیٹنگز ہیں:

![Discount code advanced options](/img/config/discount-code-advanced.png)

**استعمال کی حد (Limit uses):**

  * **استعمال (Uses):** یہاں، آپ دیکھ سکتے ہیں کہ ڈسکاؤنٹ کوڈ کتنی بار استعمال ہوا ہے۔

  * **زیادہ سے زیادہ استعمال (Max uses):** یہ اس بات کو محدود کرے گا کہ صارفین اس ڈسکاؤنٹ کوڈ کا کتنی بار استعمال کر سکتے ہیں۔ مثال کے طور پر، اگر آپ یہاں 10 رکھتے ہیں، تو کوپن صرف 10 بار استعمال ہو سکتا ہے۔ اس حد کے بعد، کوپن کوڈ کا استعمال دوبارہ نہیں کیا جا سکے گا۔

![Limit uses setting with current uses count and max uses field](/img/config/discount-code-limit-uses.png)

**شروعات ۽ ختم ٿيڻ جي تاريخ (Start & expiration dates):** توهان کي پنهنجي ڪوپن ۾ شروعات جي تاريخ ۽/يا ختم ٿيڻ جي تاريخ شامل ڪرڻ جو چونڊ حاصل ڪيو ويندو.

![ديسائينٽ ڪوڊ لاءِ شیڊولنگ لاءِ شروعات ۽ ختم ٿيڻ جي تاريخ جا فیلڊز](/img/config/discount-code-dates.png)

**پيداوار محدود ڪريو (Limit products):** جيڪڏهن توهان **Select products** کي آن ڪريو، ته توهان کي توهان جون سڀني پيداوار ڏسيل وينديون آهن. توهان جي پاسي اهو چونڊ ڪرڻ جو موقع حاصل هوندو ته ڪهڙي پيداوار هن ڪوپن ڪوڊ قبول ڪري سگهي ٿي (آن يا آف ڪري toggling بڻائڻ سان). جيڪا پيداوار ان تي آف رکي وڃي، تڏهن توهان جي گهرجي نه ڏسيل ويندي ته توهان جا گهڻا ڪاروبار هن ڪوپن ڪوڊ کي انهن لاءِ استعمال ڪرڻ کان کسي ڪوش ڪن.

![پيداوار محدود ڪريو سيكشن ۾ هر پيداوار لاءِ toggles](/img/config/discount-code-limit-products.png)

ان تمام تر خيارين کي ترتیب ڏيڻ کان پوءِ، پنهنجي ڪوپن کي محفوظ ڪرڻ لاءِ **Save Discount Code** تي ڪلڪ ڪريو ۽ اهو ختم!

![ايدٽ ايج جي ذريعي Save Discount Code بٽون](/img/config/discount-code-save.png)

هڪڙي ڪوپن توهان جي لسٹ ۾ آهي ۽ ان کان، توهان ان کي **edit يا delete** ڪرڻ لاءِ ڪلڪ ڪري سگهو ٿا.

![لست ۾ ڪوپن ڪوڊ رين جو Edit ۽ Delete هور ايڪشن سان](/img/config/discount-codes-list-hover.png)

###

### URL Parameters استعمال ڪرڻ: {#using-url-parameters}

جيڪڏهن توهان پنهنجي پرائسنگ تيبل کي ڪ스ٹمائز ڪرڻ چاهيو ٿا يا پنهنجي ويب سائيٽ لاءِ هڪ خوبصورت ڪوپن ڪوڊ جو صفحو banaڻ چاهيو ٿا ۽ خود بخود پنهنجي چيكآؤ فارم ۾ ڪوپن ڪوڊ لاڳو ڪرڻ چاهيو ٿا، ته توهان اهو URL parameters جي ذريعي ڪري سگهو ٿا.

پهرين، توهان کي پنهنجي پلان لاءِ شیئر ڪري سگهڻ واري لِنڪ حاصل ڪرڻ گهرجي. ان لاءِ، **Ultimate Multisite > Products** تي وڃو ۽ هڪ پلان چونڊيو.

**Click to Copy Shareable Link** بٽون تي ڪلڪ ڪريو. هي توهان کي هن خاص پلان جي شیئر ڪري سگهڻ واري لِنڪ ڏيندي. اسان جي صورت ۾، ڏني واري شیئر ڪري سگهڻ واري لِنڪ هئي [_**mynetworkdomain.com/register/premium/**_](http://mynetworkdomain.com/register/premium/)_.

![پروڊڪٽ ايج جتي شیئر ڪري سگهڻ واري لِنڪ بٽون آهي](/img/config/products-list.png)

اس مخصوص پلان پر اپنا ڈسکاؤنٹ کوڈ لگانے کے لیے، بس URL میں **?discount_code=XXX** پیرامیٹر شامل کر دیں۔ جہاں **XXX** آپ کا کوپن کوڈ ہوگا۔

ہمارے مثال میں، ہم اس خاص پروڈکٹ پر کوپن کوڈ **50OFF** لاگو کریں گے۔

اس مخصوص پلان اور 50OFF ڈسکاؤنٹ کوڈ کے ساتھ URL کچھ ایسا نظر آئے گا: [_**mynetworkdomain.com/register/premium/**_](http://mynetworkdomain.com/register/premium/) _**?discount_code=50OFF**_.

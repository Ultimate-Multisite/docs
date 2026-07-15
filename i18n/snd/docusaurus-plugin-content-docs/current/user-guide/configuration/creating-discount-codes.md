---
title: ڈسکاؤنٹ کوڈز کڻڻ
sidebar_position: 19
_i18n_hash: d6adaf916f3e21b4fda2deeaa6672d00
---
# ڈسکاؤنٹ کوڈز بنانا (v2)

_**اہم نوٹ: اس مضمون میں Ultimate Multisite کے ورژن 2.x کا ذکر کیا گیا ہے۔**_

Ultimate Multisite کے ساتھ، آپ اپنے کلائنٹس کو ان کی سبسکرپشن پر رعایت دینے کے لیے ڈسکاؤنٹ کوڈز بنا سکتے ہیں۔ اور انہیں بنانا بہت آسان ہے!

## ڈسکاؤنٹ کوڈز بنانا اور ایڈٹ کرنا {#creating-and-editing-discount-codes}

کوئی ڈسکاؤنٹ کوڈ بنانے یا ایڈٹ کرنے کے لیے، **Ultimate Multisite > Discount Codes** پر جائیں۔

![ڈسکاؤنٹ کوڈز کی فہرست — کسی بھی کوڈ سے پہلے خالی حالت](/img/config/discount-codes-empty.png)

وہاں آپ کو ان ڈسکاؤنٹ کوڈز کی ایک فہرست ملے گی جو آپ نے پہلے بنائی ہیں۔

آپ نئے کوپن بنانے کے لیے **Add Discount Code** پر کلک کر سکتے ہیں یا انہیں ایڈٹ کرنے کے لیے ان پر ہور (hover) کر کے **Edit** پر کلک کر سکتے ہیں۔

![ہوور ایگزٹ پر ایڈ ڈسکاؤنٹ کوڈ بٹن کی تصویر](/img/config/discount-codes-add-button.png)

آپ اس پیج پر ریڈائریکٹ ہو جائیں گے جہاں آپ اپنا کوپن کوڈ بنائیں گے یا ایڈٹ کریں گے۔ اس مثال میں ہم ایک نیا بنا رہے ہیں۔

![ڈسکاؤنٹ کوڈ ایڈیٹ پیج جس میں تمام سیکشنز نظر آ رہے ہیں](/img/config/discount-code-edit.png)

آئیے یہاں دستیاب سیٹنگز پر ایک نظر ڈالتے ہیں:

**Enter Discount Code:** یہ صرف آپ کے ڈسکاؤنٹ کوڈ کا نام ہے۔ یہ وہ کوڈ نہیں ہے جس کی ضرورت آپ کے کسٹمرز کو چیک آؤٹ فارم پر استعمال کرنی ہوگی۔

**Description:** یہاں، آپ مختصر طور پر بیان کر سکتے ہیں کہ یہ کوپن کس چیز کے لیے ہے۔

![ایڈٹ پیج کے اوپر ڈسکاؤنٹ کوڈ کا نام اور تفصیل والے فیلڈز کی تصویر](/img/config/discount-code-description.png)

آپ ڈسکاؤنٹ کوڈ کو فعال (active) یا غیر فعال (inactive) بھی دیکھ سکتے ہیں:

![ڈسکاؤنٹ کوڈ کی فعال حیثیت کی تصویر](/img/config/discount-code-active.png)

**Coupon code:** یہاں وہ جگہ ہے جہاں آپ وہ کوڈ متعین کرتے ہیں جو کسٹمرز کو چیک آؤٹ کے دوران درج کرنا ہوگا۔

![Coupon code field where customers enter the code at checkout](/img/config/discount-code-coupon-field.png)

**ڈسکاؤنٹ (Discount):** ایتھے، آپ اپنے ڈسکاؤنٹ کوڈ کے لیے **فیصد (%)** یا **مبلغ کی ایک مقررہ رقم** دونوں میں سے کوئی بھی سیٹ کر سکتے ہیں۔

![Discount amount setting with percentage or fixed-amount dropdown](/img/config/discount-code-amount.png)

**تجدید پر لاگو کریں (Apply to renewals):** اگر یہ آپشن بند ہے، تو یہ ڈسکاؤنٹ کوڈ صرف **پہلی ادائیگی** پر ہی لاگو ہوگا۔ باقی تمام ادائیگیاں پر کوئی رعایت نہیں ہوگی۔ اگر یہ آپشن آن ہے، تو ڈسکاؤنٹ کوڈ مستقبل کی تمام ادائیگियों کے لیے درست رہے گا۔

**سیٹ اپ فیس ڈسکاؤنٹ (Setup fee discount):** اگر یہ آپشن بند ہے، تو کوپن کوڈ آرڈر کی **سیٹ اپ فیس پر کوئی رعایت نہیں دے گا**۔ اگر یہ آپشن آن ہے، تو آپ وہ رعایت (فیصد یا مقررہ رقم) سیٹ کر سکتے ہیں جو یہ کوپن کوڈ آپ کے پلانز کی سیٹ اپ فیس پر لاگو کرے گا۔

![Apply to renewals and setup fee discount toggle options](/img/config/discount-code-renewals.png)

**فعال (Active):** اس کوپن کوڈ کو دستی طور پر فعال یا غیر فعال کریں۔

![Active toggle to manually enable or disable the discount code](/img/config/discount-code-active.png)

**ایڈوانس آپشنز (Advanced Options)** کے تحت، ہمارے پاس یہ سیٹنگز ہیں:

![Discount code advanced options](/img/config/discount-code-advanced.png)

**استعمال کی حد (Limit uses):**

  * **استعمال (Uses):** یہاں، آپ دیکھ سکتے ہیں کہ ڈسکاؤنٹ کوڈ کتنی بار استعمال ہوا ہے۔

  * **زیادہ سے زیادہ استعمال (Max uses):** یہ اس بات کو محدود کرے گا کہ صارفین اس ڈسکاؤنٹ کوڈ کا کتنی بار استعمال کر سکتے ہیں۔ مثال کے طور پر، اگر آپ یہاں 10 رکھتے ہیں، تو کوپن صرف 10 بار استعمال ہو سکتا ہے۔ اس حد کے بعد، کوپن کوڈ کا استعمال دوبارہ نہیں کیا جا سکے گا۔

![Limit uses setting with current uses count and max uses field](/img/config/discount-code-limit-uses.png)

**شروعات ۽ ختم ٿيڻ جي تاريخ (Start & expiration dates):** توهان کي پنهنجي ڪوپن ۾ شروع ٿيڻ جي تاريخ ۽/يا ختم ٿيڻ جي تاريخ شامل ڪرڻ جو چوڻ ڏنل آهي.

![ديسائونٽ ڪوڊ لاءِ شیڊولنگ لاءِ شروعات ۽ ختم ٿيڻ جي تاريخ جا فیلڊز](/img/config/discount-code-dates.png)

**پيداوار محدود ڪريو (Limit products):** جيڪڏهن توهان **Select products** کي آن ڪندا ته، توهان کي توهان جون سڀني پيداawar ڏسيل وينديون آهن. توهان جي پاسي اهو انتخاب ڪرڻ جو چوڻ آهي ته ڪهڙي پيداور هن ڪوپن ڪوڊ قبول ڪري سگهي ٿي (آن يا آف ڪري). جيڪڏهن ان تي آف ڪيل پيداوار، تنهنجي گهرجيان طرف کان ان ڪوپن ڪوڊ استعمال ڪرڻ جي صورت ۾ ڪا تبديلي نه ٿيندي.

![پيداوار محدود ڪرڻ جو حصو پر هر پيداور لاءِ toggles](/img/config/discount-code-limit-products.png)

هي سڀ خيال ۽ ترتيبي مقرر ڪرڻ کان پوءِ، پنهنجي ڪوپن کي محفوظ ڪرڻ لاءِ **Save Discount Code** تي ڪلڪ ڪريو ۽ اهو ختم!

![ايدٽ ايج جي ذريعي Save Discount Code بٽون](/img/config/discount-code-save.png)

هڪ ڪوپن هيٺ توهان جي لسٹ ۾ آهي ۽ ان کان، توهان اهو **edit يا delete** ڪرڻ لاءِ ڪلڪ ڪري سگهو ٿا.

![لست ۾ ڪوپن ڪوڊ رين جو Edit ۽ Delete هاور ايڪشن سان](/img/config/discount-codes-list-hover.png)

###

### URL Parameters استعمال ڪرڻ: {#using-url-parameters}

جيڪڏهن توهان پنهنجي پرائسنگ تيبلز کي ترتيبي طور تي بدلڻ چاهيو ٿا يا پنهنجي ويب سائيٽ لاءِ هڪ خوبصورت ڪوپن ڪوڊ جو صفحو banaڻ چاهيو ٿا ۽ خود بخود پنهنجي چڪ آؤٽ فارم ۾ ڪوپن ڪوڊ لاڳو ڪرڻ چاهيو ٿا، ته توهان اهو URL parameters جي ذريعي ڪري سگهو ٿا.

پهرين، توهان کي پنهنجي پلان لاءِ شیئر ڪرڻ جو لڠه (shareable link) حاصل ڪرڻ گهرجي. ان لاءِ، **Ultimate Multisite > Products** تي وڃو ۽ هڪ پلان چونڊيو.

**Click to Copy Shareable Link** بٽون تي ڪلڪ ڪريو. هي توهان کي هن خاص پلان جو شیئر ڪرڻ جو لڠه ڏيندي. اسان جي صورت ۾، ڏنل شیئر ڪرڻ جو لڠه [_**mynetworkdomain.com/register/premium/**_ هو (_http://mynetworkdomain.com/register/premium/)_.

![شیئر ڪرڻ جو لڠه بٽون سان پيداوار جو صفحو](/img/config/products-list.png)

اس مخصوص پلان پر اپنا ڈسکاؤنٹ کوڈ لگانے کے لیے، بس URL میں **?discount_code=XXX** پیرامیٹر شامل کر دیں۔ جہاں **XXX** آپ کا کوپن کوڈ ہوگا۔

ہمارے مثال میں، ہم اس خاص پروڈکٹ پر کوپن کوڈ **50OFF** لاگو کریں گے۔

اس مخصوص پلان اور 50OFF ڈسکاؤنٹ کوڈ کے ساتھ URL کچھ ایسا نظر آئے گا: [_**mynetworkdomain.com/register/premium/**_](http://mynetworkdomain.com/register/premium/) _**?discount_code=50OFF**_.

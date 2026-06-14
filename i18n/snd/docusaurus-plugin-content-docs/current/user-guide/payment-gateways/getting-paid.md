---
title: پیسو ملي ٿي رهيو آهي
sidebar_position: 15
_i18n_hash: 0f45bd2eb659d27199ac9f9752e1a8ae
---
# پیسے کیسے وصول کریں (v2)

_**اہم نوٹ: یہ مضمون Ultimate Multisite کے ورژن 2.x کا حوالہ دیتا ہے۔**_

Ultimate Multisite میں ممبرشپ اور بلنگ کا اپنا سسٹم بنا ہوا ہے۔ ہمارے بلنگ سسٹم کو کام کرنے کے لیے، ہم ای-کامرس میں سب سے زیادہ استعمال ہونے والے ادائیگی کے گیٹ ویز (payment gateways) کو شامل کر چکے ہیں۔ Ultimate Multisite میں ڈیفالٹ ادائیگی کے گیٹ ویز _Stripe_، _PayPal_، اور دستی ادائیگی (Manual Payment) ہیں۔ آپ اپنے متعلقہ add-ons انسٹال کر کے ادائیگی وصول کرنے کے لیے _WooCommerce_، _GoCardless_، اور _Payfast_ کا بھی استعمال کر سکتے ہیں۔

## بنیادی سیٹنگز

آپ Ultimate Multisite کی ادائیگی کی سیٹنگز کے تحت ان میں سے کسی بھی ادائیگی کے گیٹ ویز کو کنفیگر کر سکتے ہیں۔ آپ اسے **Ultimate Multisite مینو > Settings > Payments** پر جا کر تلاش کر سکتے ہیں۔

![Ultimate Multisite میں ادائیگیوں کی سیٹنگز کا صفحہ جو Payments پینل دکھا رہا ہے](/img/config/payments-settings-page.png)

اپنے ادائیگی کے گیٹ ویز کو سیٹ اپ کرنے سے پہلے، براہ کرم بنیادی ادائیگی کی سیٹنگز پر نظر ڈالیں جنہیں آپ کنفیگر کر سکتے ہیں:

**Force auto-rene** **w:** یہ یقینی بنائے گا کہ صارف نے جو بلنگ کی فریکوئنسی منتخب کی ہے اس کے مطابق ہر بلنگ سائیکل کے آخر میں ادائیگی خود بخود دہرائی جائے گی۔

<!-- Screenshot unavailable: Payments سیٹنگز کے صفحے پر Force Auto-Renew ٹوگل سیٹنگ -->

Ultimate Multisite v2.13.0 چیک کرتا ہے کہ کیا فعال گیٹ ویز میں دوبارہ استعمال ہونے والا رینولمنٹ کریڈنشل (reusable renewal credential) موجود ہے اس سے پہلے کہ خود بخود تجدید کے ساتھ ممبرشپ محفوظ کی جائے۔ ایک رینولمنٹ کریڈنشل کوئی گیٹ ویز سبسکرپشن، بلنگ ایگریمنٹ، محفوظ والٹ ٹوکن، یا برابر کا دوبارہ استعمال ہونے والا ادائیگی کا طریقہ ہو سکتا ہے۔ اگر گیٹ ویز رپورٹ کرتا ہے کہ کوئی قابل استعمال کریڈنشل موجود نہیں ہے، تو Ultimate Multisite ممبرشپ کو محفوظ کر لیتا ہے لیکن خود بخود تجدید بند کر دیتا ہے اور اس کمی والے کریڈنشل کی حالت ریکارڈ کر دیتا ہے تاکہ ایڈمنسٹریٹر یا سپورٹ فلو صارف سے تجدید کی تاریخ سے پہلے ادائیگی دوبارہ تصدیق کرنے کے لیے کہہ سکے۔

هي اس شي ڪري ٿو ته ممبرشپ کي خود بخودي نوي ٿي ڏسڻ کان روڪي ٿو جڏهن ته گيتواي صرف هڪ ئي وقت جي دفعات (one-time payments) وصول ڪري سگهي ٿو. گيتواي اضافوني (Gateway add-ons) کي تصديق ڪرڻ گهرجي ته باقاعده خرچن (recurring checkouts) ۾، خاص طور تي تڏهن وقت جڏهن گيتواي هڪ ئي وقت جي وصول ۽ ويٽڊ/سبسڪريشن پياملت (vaulted/subscription payment modes) ٻئي صورتحال سپورٽ ڪري ٿو ته ڪا ٻي قابل استعمال ڪرڻ واري تصديق (reusable credential) محفوظ رکڻ لاءِ.

**پياملت کان سواءِ تجربن کي اجازت ڏيو (Allow trials without payment)** **طريقي:** هي آپشن چالو ڪرڻ سان، توهان جي ڪلائين کي رجيشن عمل ۾ ڪا مالي معلومات شامل ڪرڻ جي ضرورت نه پوندي. اهو صرف تڏهن وقت گهرجي جڏهن تجربو جو عرصو ختم ٿئي.

<!-- Screenshot unavailable: Allow Trials Without Payment Method toggle on the Payments settings page -->

**پياملت جي تصديق تي انوائسج (Invoice) بھیجو:** هي توهان کي اهو انتخاب ڏئي ٿو ته پياملت کان پوءِ انوائسج به ڇڏڻ آهي يا نه. نوٽ ڪريو ته صارف پنهنجي سبيسائٽแดش بورڊ (subsite dashboard) تي پنهنجي پياملت جي تاريخ (payment history) ڏسڻ جا حق حاصل ڪندا. هي آپشن ميانوئن گيتواي (Manual Gateway) لاءِ لاگو نه آهي.

<!-- Screenshot unavailable: Send Invoice on Payment Confirmation toggle on the Payments settings page -->

**انوائسج نمبرنگ سکيم (Invoice numbering scheme):** هتي، توهان هڪ پياملت رفرنس ڪوڊ (payment reference code) يا هڪ تسلسل وارو نمبرن جو نظام (sequential number scheme) منتخب ڪري سگهو ٿا. جيڪڏهن توهان انوائسج لاءِ پياملت رفرنس ڪوڊ استعمال ڪرڻ جو انتخاب ڪيو آهي، ته توهان کي ڪجهه به ترتیب ڏيڻ جي ضرورت نه آهي. جيڪڏهن توهان تسلسل وارو نمبرن جو نظام استعمال ڪرڻ جو انتخاب ڪيو آهي، ته توهان کي **ٻيو انوائس نمبر** (هي نمبر اسان جي سسٽم تي هيٺ ڏنل نئين انوائس لاءِ انوائس نمبر طور استعمال ٿيندو. هر نئين انوائس جي بڻجي وقت اهو هڪ واري اضافي ٿئي ٿو. توهان ان کي بدلائي ۽ محفوظ ڪري سگهو ٿا ته جيئن انوائس جو تسلسل وارو نمبر هڪ خاص قيمت تي ريسٽ ٿي سگهي) ۽ **انوائس نمبر پريفيڪس** (invoice number prefix) کي ترتیب ڏيڻ گهرجي.

<!-- Screenshot unavailable: Invoice numbering scheme dropdown with Payment Reference Code and Sequential Number options -->

<!-- Screenshot unavailable: Next invoice number and invoice number prefix fields shown when Sequential Number is selected -->

## گیتویئر (gateways) کُنهن ڪٿي ڳولڻ گهرجي:

توه سگهو ٿا پيمنٽ گیتویئر کي هيء ئي صفحا تي ترتیب ڏئي سگهو ٿا (**Ultimate Multisite > Settings > Payments**). **active payment gateways** جي نتيجي، توهان انٺي هيٺ ڏسڻ جڳهه ڏسي سگهو ٿا: _Stripe_ ، _Stripe_ _Checkout_ ، _PayPal_ ۽ _Manual_.

![Active Payment Gateways section listing Stripe, Stripe Checkout, PayPal and Manual](/img/config/payments-active-gateways.png)

هڪ مخصوص مضمون هر پيمنٽ گیتویئر لاءِ موجود آهي جيڪو توهان کي ان کي ترتیب ڏيڻ جا قدم ٻڌائي سگهي ٿو، جنهن جو رابطا هيٺ ڏنل لنڪس مان ڪجي سگهجي ٿو.

توه پيمنٽ جي تفصيل ڏسي ۽ تعديل ڪري سگهو ٿا:

![Payment edit interface](/img/admin/payment-edit.png)

هتي پيمنٽ ايڊٽ صفحو جو پورو ڏسڻ آهي:

![Payment edit full interface](/img/admin/payment-edit-full.png)

هيٺ پيمنٽ گیتویئرن جي ترتيبي (settings) جو پورو ڏسڻ جو هڪ منظر آهي:

![Payment gateways settings full page](/img/config/settings-payments-gateways-full.png)

**Stripe gateway کي ترتیب ڏيڻ**

**PayPal gateway کي ترتیب ڏيڻ**** **

**Manual payments کي ترتیب ڏيڻ**

هڪڏهن توهان _WooCommerce_ ، _GoCardless_ يا _Payfast_ کي پنهنجو پيمنٽ گیتویئر استعمال ڪرڻ لاءِ چاهيو ٿا، ته توهان کي ان جي **add-ons کي انسٹال ۽ configure ڪرڻ** جي ضرورت پوندي.

### WooCommerce add-on کي ڪيئن نصب ڪريو:

اسان کي سمجھ آهي ته ڪجهه ملڪن ۾ _Stripe_ ۽ _PayPal_ موجود نه آهن جيڪي Ultimate Multisite جو استعمال ڪندڙن لاءِ اسان جي plugin کي مؤثر طور تي استعمال ڪرڻ کي محدود يا رکاوٽ پاتن ٿا. ان ڪري اسان هڪ add-on ٺاهيو آهي جنهن سان _WooCommerce_ کي شامل ڪيو وڃي، جيڪو هڪ بهتري مشهور e-commerce plugin آهي. دنيا ۾ ديفيلپرز هن جو استعمال ڪندي مختلف پيمنٽ گیتویئرن کي ان سان جوڙڻ لاءِ add-ons ٺاهيون آهن. اسان ان جو فائدو وٺي Ultimate Multisite بيلنگ سسٽم سان توهان جيڪي گیتویئر استعمال ڪري سگهو ٿا انهن کي وسيع ڪرڻ لاءِ add-ons ٺاهيو آهي.

**IMPORTANT:** Ultimate Multisite: WooCommerce کي شروع ڪرڻ لاءِ توهان جي بنيادي (main) سائيٽ تي WooCommerce ضرور فعال (activate) هجڻ گهرجي.

پہلے، براہ کرم add-ons page پر جائیں۔ توهان **Ultimate Multisite > Settings** بجي وڃي وڃي اهو ملي سگهو ٿا. توهان کي **Add-ons** جي جدول ڏسڻ گهرجي. **Check our Add-ons** تي ڪلڪ ڪريو.

<!-- Screenshot unavailable: Ultimate Multisite Settings sidebar جو Add-ons table مع Check our Add-ons link -->

**Check our Add-ons** تي ڪلڪ ڪرڻ کان پوءِ، توهان add-ons page تي ريڊيڪٽ ٿيندا آهيو. هيٺ توهان کي سڀ Ultimate Multisite add-ons ملي ويندا آهن. **Ultimate Multisite: WooCommerce Integration** add-on تي ڪلڪ ڪريو.

![Add-ons page جو Ultimate Multisite add-ons ڏيکڻ وارو listing مع WooCommerce Integration](/img/addons/addons-page.png)

توهان کي add-on جي تفصيل ڏيکڻ لاءِ هڪ ڊائلاگ (window) ظاهر ٿيندو. بس **Install Now** تي ڪلڪ ڪريو.

<!-- Screenshot unavailable: Ultimate Multisite WooCommerce Integration add-on details dialog مع Install Now button -->

انستال ڪرڻ کان پوءِ، توهان plugins page تي ريڊيڪٽ ٿيندا آهيو. هيٺ بس **Network Activate** تي ڪلڪ ڪريو ۽ WooCommerce add-on توهان جي network تي فعال (activate) ٿي ويندو.

<!-- Screenshot unavailable: Plugins page جو Network Activate link مع WooCommerce Integration add-on -->

فعال ڪرڻ کان پوءِ، جيڪڏهن توهان جي ويب سائيٽ تي WooCommerce plugin اب به انستل ۽ فعال نه آهي ته توهان کي اها ياد دلائي ويندي.

<!-- Screenshot unavailable: Admin notice جو administrator کي WooCommerce plugin انستل ۽ فعال ڪرڻ لاءِ ياد ڏيارڻ وارو -->

WooCommerce Integration add-on بابت وڌيڪ لکڻ لاءِ، **هتي ڪلڪ ڪريو**.

### GoCardless add-on کي ڪيئن انستال ڪن:

_GoCardless_ add-on انسٹال ڪرڻ جا قدم _WooCommerce_ add-on جي طرحै آهن. اِڈ-آنز پیج تي جائو ۽ **Ultimate Multisite: GoCardless Gateway** add-on چونڊيو.

<!-- Screenshot unavailable: Add-ons page with the Ultimate Multisite GoCardless Gateway add-on highlighted -->

add-on جو ونڊو پاپ اپ ٿيندو. **Install Now** تي ڪلڪ ڪريو.

<!-- Screenshot unavailable: Ultimate Multisite GoCardless Gateway add-on details dialog with Install Now button -->

ان بعد جڏهن installation ختم ٿي وڃي، توهان کي plugins page تي ريڊيڪٽ ڪيو ويندو. اهيئن، بس **Network Activate** تي ڪلڪ ڪريو ۽ _GoCardless_ add-on توهان جي network تي activate ٿي ويندو.

<!-- Screenshot unavailable: Plugins page with the Network Activate link for the GoCardless Gateway add-on -->

_GoCardless_ gateway سان ڪيئن شروع ڪرڻ آهي، ان لائق مضمون کي **پڙهيو**.

### Payfast add-on ڪيئن نصب ڪجي:

add-ons page تي جائو ۽ **Ultimate Multisite: Payfast Gateway** add-on چونڊيو.

<!-- Screenshot unavailable: Add-ons page with the Ultimate Multisite Payfast Gateway add-on highlighted -->

add-on جو ونڊو پاپ اپ ٿيندو. **Install Now.** تي ڪلڪ ڪريو.

<!-- Screenshot unavailable: Ultimate Multisite Payfast Gateway add-on details dialog with Install Now button -->

installation ختم ٿي وڃي، توهان کي plugins page تي ريڊيڪٽ ڪيو ويندو. اهيئن، بس **Network Activate** تي ڪلڪ ڪريو ۽ _Payfast_ add-on توهان جي network تي activate ٿي ويندو.

<!-- Screenshot unavailable: Plugins page with the Network Activate link for the Payfast Gateway add-on -->

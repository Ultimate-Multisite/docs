---
title: پیسو ملي ٿي رهيو آهي
sidebar_position: 15
_i18n_hash: 0f45bd2eb659d27199ac9f9752e1a8ae
---
# تنخواہ حاصل کرنا (v2)

_**اہم نوٹ: यो लेख Ultimate Multisite संस्करण 2.x लाई सन्दर्भ गर्दछ।**_

Ultimate Multisite मा सदस्यता र बिलिङको लागि एउटा बिल्ट-इन प्रणाली छ। हाम्रो बिलिङ प्रणाली काम गर्नका लागि, हामी ई-कमर्समा प्रयोग हुने सबैभन्दा सामान्य भुक्तानी गेटवेहरूलाई एकीकृत गरेका छौं। Ultimate Multisite का डिफाल्ट भुक्तानी गेटवेहरू _Stripe_, _PayPal_, र म्यानुअल पेमेन्ट हुन्। तपाईं आफ्नो सम्बन्धित add-ons इन्स्टल गरेर भुक्तानी प्राप्त गर्नका लागि _WooCommerce_, _GoCardless_, र _Payfast_ पनि प्रयोग गर्न सक्नुहुन्छ।

## आधारभूत सेटिङहरू

तपाईं Ultimate Multisite को भुक्तानी सेटिङहरू अन्तर्गत यी मध्ये कुनै पनि भुक्तानी गेटवेहरू कन्फिगर गर्न सक्नुहुन्छ। तपाईं **Ultimate Multisite menu > Settings > Payments** मा गएर यसलाई भेट्टाउन सक्नुहुन्छ।

![Payments settings page in Ultimate Multisite showing the Payments panel](/img/config/payments-settings-page.png)

तपाईं आफ्नो भुक्तानी गेटवे सेट गर्नुअघि, तपाईंले कन्फिगर गर्न सक्ने आधारभूत भुक्तानी सेटिङहरू हेर्नुहोस्:

**Force auto-rene** **w:** यसले यो सुनिश्चित गर्छ कि प्रयोगकर्ताले रोजेको बिलिङ आवृत्ति अनुसार प्रत्येक बिलिङ चक्रको अन्त्यमा भुक्तानी स्वचालित रूपमा दोहोरिनेछ।

<!-- Screenshot unavailable: Force Auto-Renew toggle setting on the Payments settings page -->

Ultimate Multisite v2.13.0 ले सक्रिय गेटवेमा पुन: प्रयोग गर्न सकिने नवीकरण प्रमाण (reusable renewal credential) छ कि छैन भनेर जाँच गर्छ, ताकि स्वतः नवीकरण सक्षम भएको सदस्यता सुरक्षित गर्न सकियोस्। एक नवीकरण प्रमाण एउटा गेटवे सदस्यता, बिलिङ सम्झौता, बचत गरिएको भल्ट टोकन, वा समान पुन: प्रयोग गर्न सकिने भुक्तानी विधि हुन सक्छ। यदि गेटवेले कुनै प्रयोग गर्न सकिने प्रमाण छैन भनेर रिपोर्ट गर्छ भने, Ultimate Multisite ले सदस्यता सुरक्षित गर्छ तर स्वतः नवीकरण बन्द गर्छ र मिसिएको प्रमाणको अवस्था रेकर्ड गर्छ ताकि एडमिन वा सपोर्ट फ्लोले नवीकरण मितिभन्दा पहिले ग्राहकलाई भुक्तानी पुनः अधिकृत गर्न सोध्न सकून्।

هي اس شي ڪري ٿو ته ممبرشپ کي خود بخودي نوي ٿي ڏسڻ کان روڪي ٿو جڏهن ته گيتواي صرف هڪ ئي وقت جي دفعات (one-time payments) جمع ڪري سگهي ٿو. گيتواي اضافوني (Gateway add-ons) کي تصديق ڪرڻ گهرجي ته باقاعده خرچن (recurring checkouts) لاءِ ڪنهن به وقت جو استعمال ٿيڻ وارو دليل (reusable credential) محفوظ رکجي، خاص طور تي تڏهن جڏهن گيتواي هڪ ئي وقت جي وصولي ۽ ويٽڊ/سبسڪريشن پياملت (vaulted/subscription payment modes) ٻئي صورتحال کي سپورٽ ڪري ٿو.

**پياملت کان سواءِ تجربا اجازت ڏيو (Allow trials without payment)** **طريقي:** هي آپشن چالو ڪرڻ سان، توهان جي ڪلائين کي رجيشن عمل ۾ ڪنهن به مالي معلومات شامل ڪرڻ جي ضرورت نه پوندي. اهو صرف ان وقت گهرجي ٿو جڏهن تجرباتي دور ختم ٿي وڃي.

<!-- Screenshot unavailable: Allow Trials Without Payment Method toggle on the Payments settings page -->

**پياملت جي تصديق تي انوائسج (Invoice) بھیجو:** هي توهان کي اهو انتخاب ڏئي ٿو ته پياملت کان پوءِ انوائسج به ڇڏڻ آهي يا نه. نو ته، صارف پنهنجي سابسايتแดش بورڊ (subsite dashboard) تحت پنهنجي پياملت جي تاريخ (payment history) تک رسائي حاصل ڪندو. هي آپشن ميانوئن گيتواي (Manual Gateway) لاءِ لاگو نه ٿيندو.

<!-- Screenshot unavailable: Send Invoice on Payment Confirmation toggle on the Payments settings page -->

**انوائسج جي نمبرنگ سکيم (Invoice numbering scheme):** هيءَ، توهان هڪ پياملت رفرنس ڪوڊ (payment reference code) يا هڪ تسلسل وارو نمبرن جو نظام (sequential number scheme) انتخاب ڪري سگهو ٿا. جيڪڏهن توهان انوائسج لاءِ پياملت رفرنس ڪوڊ استعمال ڪرڻ جو انتخاب ڪيو آهي، ته توهان کي ڪجهه به ترتیب ڏيڻ جي ضرورت نه آهي. جيڪڏهن توهان تسلسل وارو نمبرن جو نظام استعمال ڪرڻ جو انتخاب ڪيو آهي، ته توهان کي **نالي انوائس نمبر (next invoice number)** ۽ **انوائس نمبر پريفيڪس (invoice number prefix)** کي ترتیب ڏيڻو پوندو. (هي نمبر اسان جي سيسٽم تي هيٺ ڏنل نالي انوائس لاءِ استعمال ٿيندو. هر نئين انوائس جو هي هڪ واري اضافو ڪندو آهي جڏهن به نون انوائس ٺهندو آهي. توهان ان کي بدلائي ۽ محفوظ ڪري سگهو ٿا ته جيئن انوائس جي تسلسل وارو نمبر خاص قيمت تي ريسٽ ٿي سگهي).

<!-- Screenshot unavailable: Invoice numbering scheme dropdown with Payment Reference Code and Sequential Number options -->

<!-- Screenshot unavailable: Next invoice number and invoice number prefix fields shown when Sequential Number is selected -->

## گیتویئر (gateways) کِتھن ڏسڻ:

توه سگهو ٿا هيءَ payment gateways کي هڪ ئي صفحتي تي set up ڪري سگهو ٿا (**Ultimate Multisite > Settings > Payments**). **active payment gateways** جي ناهي، ان کان ٺهي، توهان ڏس سکيا: _Stripe_، _Stripe_ _Checkout_، _PayPal_ ۽ _Manual_.

![Active Payment Gateways section listing Stripe, Stripe Checkout, PayPal and Manual](/img/config/payments-active-gateways.png)

هڪ مخصوص article آهي هر payment gateway لاءِ جيڪا توهان کي ان کي set up ڪرڻ جا قدم ٻڌائي ٿي، جنهن توهان هيٺ ڏنل links تي ملي سگهو ٿا.

توه payment details ڏس ۽ edit ڪري سگهو ٿا:

![Payment edit interface](/img/admin/payment-edit.png)

هي payment edit page جو پورو نظارو آهي:

![Payment edit full interface](/img/admin/payment-edit-full.png)

هي payment gateways جي settings جو پورو نظارو به آهي:

![Payment gateways settings full page](/img/config/settings-payments-gateways-full.png)

**Stripe gateway کي set up ڪرڻ**

**PayPal gateway کي set up ڪرڻ**** **

**Manual payments کي set up ڪرڻ**

اها ته، جيڪڏهن توهان _WooCommerce_، _GoCardless_ يا _Payfast_ کي پنهنجي payment gateway طور استعمال ڪرڻ چاهيو ٿا، ته توهان کي انهن جي **add-ons کي install ۽ configure ڪرڻو پوندو**.

### WooCommerce add-on کي ڪيئن install ڪجي:

اسان سمجھون ٿا ته ڪجهه ملڪن ۾ _Stripe_ ۽ _PayPal_ موجود نه آهن جيڪي Ultimate Multisite جو استعمال ڪندڙن لاءِ اسان جي plugin کي مؤثر طور تي استعمال ڪرڻ کي محدود يا رکاوٽ پات. ان ڪري اسان هڪ add-on ٺاهيو آهي جنهن سان _WooCommerce_ کي integrate ڪجي، جيڪو هڪ بهتري e-commerce plugin آهي. دنيا ۾ developers هن سان مختلف payment gateways کي integrate ڪرڻ لاءِ add-ons ٺاهيون آهن. اسان ان جو faida uthaya ته توهان Ultimate Multisite جي billing system سان استعمال ٿيڻ واري payment gateways کي وسيع ڪري سگهو ٿا.

**IMPORTANT:** Ultimate Multisite: WooCommerce کي شروع ڪرڻ لاءِ توهان جي بنيادي (main) سائيٽ تي WooCommerce ضرور فعال (activate) هجڻ گهرجي.

پہلے، براہ کرم add-ons page پر جائیں۔ توهان **Ultimate Multisite > Settings** بجي وڃي وڃي اهو ملي سگهو ٿا. توهان کي **Add-ons** جي جدول ڏسڻ گهرجي. **Check our Add-ons** تي ڪلڪ ڪريو.

<!-- Screenshot unavailable: Ultimate Multisite Settings sidebar جو Add-ons table مع Check our Add-ons link -->

**Check our Add-ons** تي ڪلڪ ڪرڻ کان پوءِ، توهان add-ons page تي ريڊيڪٽ ٿيندا آهيو. هيٺ توهان سڀني Ultimate Multisite add-ons ملي سگهو ٿا. **Ultimate Multisite: WooCommerce Integration** add-on تي ڪلڪ ڪريو.

![Add-ons page جو Ultimate Multisite add-ons ڏيکڻ وارو listing مع WooCommerce Integration](/img/addons/addons-page.png)

توهان کي add-on جي تفصيل ڏيکڻ لاءِ هڪ ڊائلاگ پاپ اپ ٿيندو. بس **Install Now** تي ڪلڪ ڪريو.

<!-- Screenshot unavailable: Ultimate Multisite WooCommerce Integration add-on details dialog مع Install Now button -->

انستال ڪرڻ کان پوءِ، توهان plugins page تي ريڊيڪٽ ٿيندا آهيو. هيٺ بس **Network Activate** تي ڪلڪ ڪريو ۽ WooCommerce add-on توهان جي network تي فعال (activate) ٿي ويندو.

<!-- Screenshot unavailable: Plugins page جو Network Activate link مع WooCommerce Integration add-on -->

فعال ڪرڻ کان پوءِ، جيڪڏهن توهان جي ويب سائيٽ تي WooCommerce plugin اب به انستالڊ ۽ فعال نه آهي ته توهان کي اها ياد دلائي ويندي.

<!-- Screenshot unavailable: Admin notice جو administrator کي WooCommerce plugin انستال ڪري ۽ فعال ڪرڻ لاءِ ياد ڏيارڻ وارو -->

WooCommerce Integration add-on بابت وڌيڪ لکڻ لاءِ، **هتي ڪلڪ ڪريو**.

### GoCardless add-on کي ڪيئن انستال ڪن:

_GoCardless_ add-on انسٹال ڪرڻ دے قدم _WooCommerce_ add-on دے بالکل جیسے نیں۔ براہ کرم add-ons والے پیج تک جائو تے **Ultimate Multisite: GoCardless Gateway** add-on منتخب کرو۔

<!-- Screenshot unavailable: Add-ons page with the Ultimate Multisite GoCardless Gateway add-on highlighted -->

add-on دی ونڈو کھلے گی۔ **Install Now** تے کلک کرو۔

<!-- Screenshot unavailable: Ultimate Multisite GoCardless Gateway add-on details dialog with Install Now button -->

انسٹال ہو جانے دے بعد، آپ کو plugins والے پیج پر ری ڈائریکٹ کر دیا جائے گا۔ ایتھے بس **Network Activate** تے کلک کرو تے _GoCardless_ add-on آپ دے نیٹ ورک تے فعال ہو جائے گی۔

<!-- Screenshot unavailable: Plugins page with the Network Activate link for the GoCardless Gateway add-on -->

_GoCardless_ gateway شروع کرنے کے بارے میں جاننے کے لیے، **اس مضمون کو پڑھو**۔

### Payfast add-on کیسے انسٹال کریں:

add-ons والے پیج تک جائو تے **Ultimate Multisite: Payfast Gateway** add-on منتخب کرو۔

<!-- Screenshot unavailable: Add-ons page with the Ultimate Multisite Payfast Gateway add-on highlighted -->

add-on دی ونڈو کھلے گی۔ **Install Now.** تے کلک کرو۔

<!-- Screenshot unavailable: Ultimate Multisite Payfast Gateway add-on details dialog with Install Now button -->

انسٹال ہو جانے دے بعد، آپ کو plugins والے پیج پر ری ڈائریکٹ کر دیا جائے گا۔ ایتھے بس **Network Activate** تے کلک کرو تے _Payfast_ add-on آپ دے نیٹ ورک تے فعال ہو جائے گی۔

<!-- Screenshot unavailable: Plugins page with the Network Activate link for the Payfast Gateway add-on -->

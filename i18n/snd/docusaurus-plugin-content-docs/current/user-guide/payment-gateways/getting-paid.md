---
title: ادائيگي حاصل ڪرڻ
sidebar_position: 15
_i18n_hash: 7808f514b91797f7ffb68811b12c48be
---
# ادائيگي حاصل ڪرڻ (v2)

_**اهم نوٽ: هي مضمون Ultimate Multisite ورزن 2.x بابت آهي.**_

Ultimate Multisite ۾ ٺهيل membership ۽ billing system موجود آهي. اسان جي billing system جي ڪم ڪرڻ لاءِ، اسان e-commerce ۾ استعمال ٿيندڙ سڀ کان عام payment gateways ضم ڪيا آهن. Ultimate Multisite ۾ ڊفالٽ payment gateways _Stripe_ ، _PayPal_ ، ۽ Manual Payment آهن. توهان انهن جي لاڳاپيل add-ons انسٽال ڪري ادائيگيون وصول ڪرڻ لاءِ _WooCommerce_ ، _GoCardless_ ۽ _Payfast_ پڻ استعمال ڪري سگهو ٿا.

## بنيادي سيٽنگون {#basic-settings}

توهان انهن مان ڪنهن به payment gateways کي Ultimate Multisite payment settings هيٺ ترتيب ڏئي سگهو ٿا. توهان اهو **Ultimate Multisite menu > Settings > Payments.** ڏانهن وڃي ڳولي سگهو ٿا

![Ultimate Multisite ۾ Payments settings صفحو، Payments panel ڏيکاريندي](/img/config/payments-settings-page.png)

پنهنجو payment gateway سيٽ اپ ڪرڻ کان اڳ، مهرباني ڪري بنيادي payment settings تي نظر وجهو جيڪي توهان ترتيب ڏئي سگهو ٿا:

**خودڪار تجدي** **د لازمي ڪريو:** هي يقيني بڻائيندو ته ادائيگي هر billing cycle جي آخر ۾، صارف جي چونڊيل billing frequency جي بنياد تي، پاڻمرادو ٻيهر ٿيندي.

<!-- Screenshot unavailable: Force Auto-Renew toggle setting on the Payments settings page -->

Ultimate Multisite v2.13.0 چيڪ ڪري ٿو ته active gateway وٽ auto-renewal فعال سان recurring membership محفوظ ڪرڻ کان اڳ reusable renewal credential موجود آهي يا نه. renewal credential gateway subscription، billing agreement، saved vault token، يا ان جي برابر reusable payment method ٿي سگهي ٿو. جيڪڏهن gateway رپورٽ ڪري ته ڪوبه usable credential موجود ناهي، Ultimate Multisite membership محفوظ ڪري ٿو پر auto-renewal بند ڪري ٿو ۽ missing-credential حالت رڪارڊ ڪري ٿو ته جيئن administrator يا support flow renewal date کان اڳ customer کان ادائيگي ٻيهر authorize ڪرڻ لاءِ پڇي سگهي.

هي membership کي اهڙي طرح ظاهر ٿيڻ کان بچائي ٿو ڄڻ ته اها auto-renew ٿيندي، جڏهن gateway صرف one-time payments گڏ ڪري سگهي ٿو. Gateway add-ons کي تصديق ڪرڻ گهرجي ته recurring checkouts reusable credential محفوظ ڪن ٿا، خاص طور تي جڏهن gateway هڪ ئي وقت one-time capture ۽ vaulted/subscription payment modes کي سپورٽ ڪري ٿو.

**payment** **method کانسواءِ trials جي اجازت ڏيو:** هي آپشن فعال هئڻ سان توهان جي client کي registration process دوران ڪا به مالي معلومات شامل ڪرڻي نه پوندي. اها صرف تڏهن گهربل ٿيندي جڏهن trial period ختم ٿيندو.

<!-- Screenshot unavailable: Allow Trials Without Payment Method toggle on the Payments settings page -->

**payment confirmation تي invoice موڪليو:** هي توهان کي اهو آپشن ڏئي ٿو ته payment کان پوءِ invoice موڪلڻو آهي يا نه. نوٽ ڪريو ته users کي پنهنجي subsite dashboard هيٺ پنهنجي payment history تائين رسائي هوندي. هي آپشن Manual Gateway تي لاڳو نٿو ٿئي.

<!-- Screenshot unavailable: Send Invoice on Payment Confirmation toggle on the Payments settings page -->

**Invoice numbering scheme:** هتي، توهان payment reference code يا sequential number scheme مان ڪنهن هڪ کي چونڊي سگهو ٿا. جيڪڏهن توهان پنهنجي invoices لاءِ payment reference code استعمال ڪرڻ چونڊيو ٿا، ته توهان کي ڪجهه به ترتيب ڏيڻ جي ضرورت ناهي. جيڪڏهن توهان sequential number scheme استعمال ڪرڻ چونڊيو ٿا، ته توهان کي **ايندڙ invoice number** ترتيب ڏيڻو پوندو (هي نمبر system تي ٺاهيل ايندڙ invoice لاءِ invoice number طور استعمال ٿيندو. هر دفعي نئون invoice ٺهڻ تي اهو هڪ سان وڌندو آهي. توهان ان کي تبديل ڪري محفوظ ڪري سگهو ٿا ته invoice sequential number کي ڪنهن مخصوص قيمت تي reset ڪيو وڃي) ۽ **invoice number prefix.** پڻ ترتيب ڏيڻو پوندو.

<!-- Screenshot unavailable: Invoice numbering scheme dropdown with Payment Reference Code and Sequential Number options -->

<!-- Screenshot unavailable: Next invoice number and invoice number prefix fields shown when Sequential Number is selected -->

## gateways ڪٿي ڳولجن: {#where-to-find-the-gateways}

توهان ساڳئي صفحي تي payment gateways سيٽ اپ ڪري سگهو ٿا ( **Ultimate Multisite > Settings > Payments**). **active payment gateways** جي بلڪل هيٺ، توهان ڏسي سگهندا: _Stripe_ ، _Stripe_ _Checkout_ ، _PayPal_ ۽ _Manual_.

![Active Payment Gateways حصو، Stripe، Stripe Checkout، PayPal ۽ Manual ڏيکاريندي](/img/config/payments-active-gateways.png)

اسان وٽ هر payment gateway لاءِ هڪ مخصوص مضمون آهي جيڪو توهان کي ان کي سيٽ اپ ڪرڻ جي مرحلن مان رهنمائي ڪندو، جيڪو توهان هيٺ ڏنل links تي ڳولي سگهو ٿا.

توهان payment details ڏسي ۽ ترميم ڪري سگهو ٿا:

![Payment edit interface](/img/admin/payment-edit.png)

هتي payment edit page جو مڪمل ڏيک آهي:

![Payment edit full interface](/img/admin/payment-edit-full.png)

هتي payment gateways settings جو پڻ مڪمل ڏيک آهي:

![Payment gateways settings full page](/img/config/settings-payments-gateways-full.png)

**Stripe gateway سيٽ اپ ڪرڻ**

**PayPal gateway سيٽ اپ ڪرڻ**** **

**manual payments سيٽ اپ ڪرڻ**

هاڻي، جيڪڏهن توهان _WooCommerce_ ، _GoCardless_ يا _Payfast_ کي پنهنجي payment gateway طور استعمال ڪرڻ چاهيو ٿا، ته توهان کي **انهن جا add-ons انسٽال ۽ ترتيب ڏيڻا** پوندا.

### WooCommerce add-on ڪيئن انسٽال ڪجي: {#how-to-install-the-woocommerce-add-on}

اسان سمجهون ٿا ته _Stripe_ ۽ _PayPal_ ڪجهه ملڪن ۾ موجود نه آهن، جنهن سان Ultimate Multisite users کي اسان جو plugin مؤثر طريقي سان استعمال ڪرڻ ۾ حد لڳي ٿي يا رڪاوٽ ٿئي ٿي. تنهنڪري اسان _WooCommerce,_ کي ضم ڪرڻ لاءِ هڪ add-on ٺاهيو، جيڪو هڪ تمام مشهور e-commerce plugin آهي. سڄي دنيا جي developers ان سان مختلف payment gateways ضم ڪرڻ لاءِ add-ons ٺاهيا آهن. اسان هن جو فائدو وٺي Ultimate Multisite billing system سان استعمال ڪري سگهجن payment gateways کي وڌايو.

_**اهم:** Ultimate Multisite: WooCommerce Integration لاءِ WooCommerce گهٽ ۾ گهٽ توهان جي main site تي فعال هئڻ ضروري آهي._

پهريان، مهرباني ڪري add-ons page تي وڃو. توهان اهو **Ultimate Multisite > Settings** ڏانهن وڃي ڳولي سگهو ٿا. توهان کي **Add-ons** table نظر اچڻ گهرجي. **Check our Add-ons** تي ڪلڪ ڪريو.

<!-- Screenshot unavailable: Add-ons table on the Ultimate Multisite Settings sidebar with the Check our Add-ons link -->

**Check our Add-ons** تي ڪلڪ ڪرڻ کان پوءِ، توهان کي add-ons page ڏانهن redirect ڪيو ويندو. هتي توهان سڀ Ultimate Multisite add-ons ڳولي سگهو ٿا. **Ultimate Multisite: WooCommerce Integration** add-on تي ڪلڪ ڪريو.

![Add-ons page جيڪو WooCommerce Integration سميت Ultimate Multisite add-ons ڏيکاري ٿو](/img/addons/addons-page.png)

هڪ ونڊو اضافي جي تفصيلن سان ظاهر ٿيندي. بس **هاڻي انسٽال ڪريو** تي ڪلڪ ڪريو.

<!-- اسڪرين شاٽ موجود ناهي: Ultimate Multisite WooCommerce Integration اضافي جي تفصيلن وارو ڊائلاگ، هاڻي انسٽال ڪريو بٽڻ سان -->

انسٽاليشن مڪمل ٿيڻ کان پوءِ، توهان کي پلگ اِنز واري صفحي ڏانهن موڪليو ويندو. هتي، بس **نيٽ ورڪ تي فعال ڪريو** تي ڪلڪ ڪريو ۽ WooCommerce اضافو توهان جي نيٽ ورڪ تي فعال ٿي ويندو.

<!-- اسڪرين شاٽ موجود ناهي: پلگ اِنز صفحو، WooCommerce Integration اضافي لاءِ نيٽ ورڪ تي فعال ڪريو لنڪ سان -->

ان کي فعال ڪرڻ کان پوءِ، جيڪڏهن توهان وٽ اڃا تائين WooCommerce پلگ اِن توهان جي ويب سائيٽ تي انسٽال ۽ فعال نه آهي، ته توهان کي هڪ ياد ڏياريندڙ ملندو.

<!-- اسڪرين شاٽ موجود ناهي: ايڊمن نوٽيس جيڪو منتظم کي WooCommerce پلگ اِن انسٽال ۽ فعال ڪرڻ جي ياد ڏياري ٿو -->

WooCommerce Integration اضافي بابت وڌيڪ پڙهڻ لاءِ، **هتي ڪلڪ ڪريو**.

### GoCardless اضافو ڪيئن انسٽال ڪجي: {#how-to-install-the-gocardless-add-on}

_GoCardless_ اضافو انسٽال ڪرڻ جا قدم تقريباً _WooCommerce_ اضافي جهڙا ئي آهن. مهرباني ڪري اضافن واري صفحي تي وڃو ۽ **Ultimate Multisite: GoCardless Gateway** اضافو چونڊيو.

<!-- اسڪرين شاٽ موجود ناهي: اضافن وارو صفحو، جنهن ۾ Ultimate Multisite GoCardless Gateway اضافو نمايان آهي -->

اضافي جي ونڊو ظاهر ٿيندي. **هاڻي انسٽال ڪريو** تي ڪلڪ ڪريو.

<!-- اسڪرين شاٽ موجود ناهي: Ultimate Multisite GoCardless Gateway اضافي جي تفصيلن وارو ڊائلاگ، هاڻي انسٽال ڪريو بٽڻ سان -->

انسٽاليشن مڪمل ٿيڻ کان پوءِ، توهان کي پلگ اِنز واري صفحي ڏانهن موڪليو ويندو. هتي، بس **نيٽ ورڪ تي فعال ڪريو** تي ڪلڪ ڪريو ۽ _GoCardless_ اضافو توهان جي نيٽ ورڪ تي فعال ٿي ويندو.

<!-- اسڪرين شاٽ موجود ناهي: پلگ اِنز صفحو، GoCardless Gateway اضافي لاءِ نيٽ ورڪ تي فعال ڪريو لنڪ سان -->

_GoCardless_ gateway سان شروعات ڪيئن ڪجي اهو سکڻ لاءِ، **هي مضمون پڙهو**.

### Payfast اضافو ڪيئن انسٽال ڪجي: {#how-to-install-the-payfast-add-on}

اضافن واري صفحي تي وڃو ۽ **Ultimate Multisite: Payfast Gateway** اضافو چونڊيو.

<!-- اسڪرين شاٽ موجود ناهي: اضافن وارو صفحو، جنهن ۾ Ultimate Multisite Payfast Gateway اضافو نمايان آهي -->

اضافي جي ونڊو ظاهر ٿيندي. **هاڻي انسٽال ڪريو.** تي ڪلڪ ڪريو.

<!-- اسڪرين شاٽ موجود ناهي: Ultimate Multisite Payfast Gateway اضافي جي تفصيلن وارو ڊائلاگ، هاڻي انسٽال ڪريو بٽڻ سان -->

انسٽاليشن مڪمل ٿيڻ کان پوءِ، توهان کي پلگ اِنز واري صفحي ڏانهن موڪليو ويندو. هتي، بس **نيٽ ورڪ تي فعال ڪريو** تي ڪلڪ ڪريو ۽ _Payfast_ اضافو توهان جي نيٽ ورڪ تي فعال ٿي ويندو.

<!-- اسڪرين شاٽ موجود ناهي: پلگ اِنز صفحو، Payfast Gateway اضافي لاءِ نيٽ ورڪ تي فعال ڪريو لنڪ سان -->

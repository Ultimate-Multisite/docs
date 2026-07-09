---
title: ادائيگي حاصل ڪرڻ
sidebar_position: 15
_i18n_hash: 7808f514b91797f7ffb68811b12c48be
---
# ادائيگي حاصل ڪرڻ (v2)

_**اهم نوٽ: هي مضمون Ultimate Multisite ورزن 2.x ڏانهن اشارو ڪري ٿو.**_

Ultimate Multisite ۾ ٺهيل رڪنيت ۽ بلنگ نظام موجود آهي. اسان جي بلنگ نظام کي ڪم ڪرڻ لاءِ، اسان اي-ڪامرس ۾ استعمال ٿيندڙ سڀ کان عام ادائيگي گيٽ ويز کي ضم ڪيو آهي. Ultimate Multisite ۾ ڊفالٽ ادائيگي گيٽ ويز _Stripe_ ، _PayPal_ ، ۽ Manual Payment آهن. توهان انهن جا لاڳاپيل add-ons انسٽال ڪري _WooCommerce_ ، _GoCardless_ ۽ _Payfast_ پڻ استعمال ڪري ادائيگيون وصول ڪري سگهو ٿا.

## بنيادي سيٽنگون

توهان Ultimate Multisite ادائيگي سيٽنگن هيٺ انهن مان ڪنهن به ادائيگي گيٽ وي کي ترتيب ڏئي سگهو ٿا. توهان ان کي **Ultimate Multisite مينيو > Settings > Payments.** ڏانهن وڃي ڳولي سگهو ٿا

![Ultimate Multisite ۾ ادائيگي سيٽنگن جو صفحو، Payments پينل ڏيکاريندي](/img/config/payments-settings-page.png)

پنهنجو ادائيگي گيٽ وي سيٽ اپ ڪرڻ کان اڳ، مهرباني ڪري بنيادي ادائيگي سيٽنگن تي نظر وجهو جيڪي توهان ترتيب ڏئي سگهو ٿا:

**Force auto-rene** **w:** هي يقيني بڻائيندو ته ادائيگي هر بلنگ چڪر جي آخر ۾ خودڪار طور تي ٻيهر ٿيندي، ان بلنگ فريڪوئنسي تي دارومدار ڪندي جيڪا صارف چونڊي آهي.

<!-- Screenshot unavailable: Force Auto-Renew toggle setting on the Payments settings page -->

Ultimate Multisite v2.13.0 recurring membership کي auto-renewal فعال سان محفوظ ڪرڻ کان اڳ جانچ ڪري ٿو ته ڇا فعال گيٽ وي وٽ ٻيهر استعمال لائق renewal credential موجود آهي. renewal credential هڪ گيٽ وي subscription، billing agreement، محفوظ ٿيل vault token، يا برابر ٻيهر استعمال لائق ادائيگي طريقو ٿي سگهي ٿو. جيڪڏهن گيٽ وي رپورٽ ڪري ته ڪو به استعمال لائق credential موجود ناهي، Ultimate Multisite membership کي محفوظ ڪري ٿو پر auto-renewal بند ڪري ٿو ۽ missing-credential حالت رڪارڊ ڪري ٿو، ته جيئن administrator يا support flow customer کان renewal date کان اڳ ادائيگي ٻيهر authorize ڪرائڻ لاءِ چئي سگهي.

هي membership کي اهڙي طرح ظاهر ٿيڻ کان روڪي ٿو ڄڻ اها auto-renew ٿيندي هجي، جڏهن گيٽ وي صرف هڪ-ڀيرو ادائيگيون وصول ڪري سگهي. گيٽ وي add-ons کي تصديق ڪرڻ گهرجي ته recurring checkouts هڪ ٻيهر استعمال لائق credential محفوظ ڪن، خاص طور تي جڏهن گيٽ وي هڪ-ڀيرو capture ۽ vaulted/subscription ادائيگي موڊ ٻنهي کي سپورٽ ڪري ٿو.

**Allow trials without payment** **method:** هي آپشن فعال هئڻ سان توهان جي client کي registration عمل دوران ڪا به مالي معلومات شامل ڪرڻي نه پوندي. اها صرف trial مدت ختم ٿيڻ کان پوءِ گهربل ٿيندي.

<!-- Screenshot unavailable: Allow Trials Without Payment Method toggle on the Payments settings page -->

**Send invoice on payment confirmation:** هي توهان کي اختيار ڏئي ٿو ته ادائيگي کان پوءِ invoice موڪلڻي آهي يا نه. نوٽ ڪريو ته صارفين کي پنهنجي subsite dashboard هيٺ پنهنجي ادائيگي تاريخ تائين رسائي هوندي. هي آپشن Manual Gateway تي لاڳو نٿو ٿئي.

<!-- Screenshot unavailable: Send Invoice on Payment Confirmation toggle on the Payments settings page -->

**Invoice numbering scheme:** هتي، توهان يا ته payment reference code يا sequential number scheme چونڊي سگهو ٿا. جيڪڏهن توهان پنهنجي invoices لاءِ payment reference code استعمال ڪرڻ چونڊيو ٿا، ته توهان کي ڪجهه به ترتيب ڏيڻ جي ضرورت ناهي. جيڪڏهن توهان sequential number scheme استعمال ڪرڻ چونڊيو ٿا، ته توهان کي **next invoice number** ترتيب ڏيڻو پوندو (هي نمبر سسٽم تي ٺهندڙ ايندڙ invoice لاءِ invoice number طور استعمال ٿيندو. هر ڀيري نئين invoice ٺهڻ تي اهو هڪ سان وڌايو ويندو. توهان ان کي تبديل ڪري محفوظ ڪري سگهو ٿا ته invoice sequential number کي ڪنهن مخصوص قيمت تي reset ڪيو وڃي) ۽ **invoice number prefix.**

<!-- Screenshot unavailable: Invoice numbering scheme dropdown with Payment Reference Code and Sequential Number options -->

<!-- Screenshot unavailable: Next invoice number and invoice number prefix fields shown when Sequential Number is selected -->

## گيٽ ويز ڪٿي ڳولڻا آهن:

توهان ساڳئي صفحي تي ادائيگي گيٽ ويز سيٽ اپ ڪري سگهو ٿا ( **Ultimate Multisite > Settings > Payments**). **active payment gateways** جي بلڪل هيٺ، توهان ڏسي سگهندا: _Stripe_ ، _Stripe_ _Checkout_ ، _PayPal_ ۽ _Manual_.

![Active Payment Gateways سيڪشن جنهن ۾ Stripe، Stripe Checkout، PayPal ۽ Manual درج آهن](/img/config/payments-active-gateways.png)

اسان وٽ هر ادائيگي گيٽ وي لاءِ الڳ مضمون آهي، جيڪو توهان کي ان کي سيٽ اپ ڪرڻ جي مرحلن ذريعي رهنمائي ڪندو، جيڪي توهان هيٺ ڏنل لنڪن تي ڳولي سگهو ٿا.

توهان ادائيگي تفصيل ڏسي ۽ ترميم ڪري سگهو ٿا:

![ادائيگي ترميم انٽرفيس](/img/admin/payment-edit.png)

هي ادائيگي ترميم واري صفحي جو مڪمل ڏيک آهي:

![ادائيگي ترميم مڪمل انٽرفيس](/img/admin/payment-edit-full.png)

هي ادائيگي گيٽ ويز سيٽنگن جو پڻ مڪمل ڏيک آهي:

![ادائيگي گيٽ ويز سيٽنگن جو مڪمل صفحو](/img/config/settings-payments-gateways-full.png)

**Stripe gateway سيٽ اپ ڪرڻ**

**PayPal gateway سيٽ اپ ڪرڻ**** **

**manual payments سيٽ اپ ڪرڻ**

هاڻي، جيڪڏهن توهان _WooCommerce_ ، _GoCardless_ يا _Payfast_ کي پنهنجي ادائيگي گيٽ وي طور استعمال ڪرڻ چاهيو ٿا، ته توهان کي **انهن جا add-ons انسٽال ۽ ترتيب ڏيڻا** پوندا.

### WooCommerce add-on ڪيئن انسٽال ڪجي:

اسان سمجهون ٿا ته _Stripe_ ۽ _PayPal_ ڪجهه ملڪن ۾ دستياب ناهن، جيڪو Ultimate Multisite صارفين کي اسان جو plugin مؤثر طريقي سان استعمال ڪرڻ کان محدود ڪري ٿو يا روڪي ٿو. تنهنڪري اسان _WooCommerce,_ کي ضم ڪرڻ لاءِ add-on ٺاهيو، جيڪو هڪ تمام مشهور اي-ڪامرس plugin آهي. سڄي دنيا جي developers ان سان مختلف ادائيگي گيٽ ويز ضم ڪرڻ لاءِ add-ons ٺاهيا. اسان ان مان فائدو وٺي اهي ادائيگي گيٽ ويز وڌايا جيڪي توهان Ultimate Multisite بلنگ نظام سان استعمال ڪري سگهو ٿا.

_**اهم:** Ultimate Multisite: WooCommerce Integration لاءِ WooCommerce کي گهٽ ۾ گهٽ توهان جي main site تي فعال هجڻ ضروري آهي._

پهريان، مهرباني ڪري add-ons صفحي تي وڃو. توهان ان کي **Ultimate Multisite > Settings** ڏانهن وڃي ڳولي سگهو ٿا. توهان کي **Add-ons** ٽيبل ڏسڻ گهرجي. **Check our Add-ons** تي ڪلڪ ڪريو.

<!-- Screenshot unavailable: Add-ons table on the Ultimate Multisite Settings sidebar with the Check our Add-ons link -->

**Check our Add-ons** تي ڪلڪ ڪرڻ کان پوءِ، توهان کي add-ons صفحي ڏانهن redirect ڪيو ويندو. هتي توهان سڀ Ultimate Multisite add-ons ڳولي سگهو ٿا. **Ultimate Multisite: WooCommerce Integration** add-on تي ڪلڪ ڪريو.

![Add-ons صفحو جنهن ۾ Ultimate Multisite add-ons درج آهن، WooCommerce Integration سميت](/img/addons/addons-page.png)

هڪ ونڊو ايڊ-آن جي تفصيلن سان ظاهر ٿيندي. بس **هاڻي انسٽال ڪريو** تي ڪلڪ ڪريو.

<!-- اسڪرين شاٽ دستياب ناهي: Ultimate Multisite WooCommerce انٽيگريشن ايڊ-آن جي تفصيلن وارو ڊائلاگ، هاڻي انسٽال ڪريو بٽڻ سان -->

انسٽاليشن مڪمل ٿيڻ کان پوءِ، توهان کي پلگ انز صفحي ڏانهن موڪليو ويندو. هتي، بس **نيٽ ورڪ تي فعال ڪريو** تي ڪلڪ ڪريو ۽ WooCommerce ايڊ-آن توهان جي نيٽ ورڪ تي فعال ٿي ويندو.

<!-- اسڪرين شاٽ دستياب ناهي: پلگ انز صفحو، WooCommerce انٽيگريشن ايڊ-آن لاءِ نيٽ ورڪ تي فعال ڪريو لنڪ سان -->

ان کي فعال ڪرڻ کان پوءِ، جيڪڏهن توهان وٽ اڃا پنهنجي ويب سائيٽ تي WooCommerce پلگ ان انسٽال ۽ فعال ٿيل ناهي، ته توهان کي هڪ ياد ڏياريندڙ ملندو.

<!-- اسڪرين شاٽ دستياب ناهي: ايڊمن اطلاع، ايڊمنسٽريٽر کي WooCommerce پلگ ان انسٽال ۽ فعال ڪرڻ جي ياد ڏياريندي -->

WooCommerce انٽيگريشن ايڊ-آن بابت وڌيڪ پڙهڻ لاءِ، **هتي ڪلڪ ڪريو**.

### GoCardless ايڊ-آن ڪيئن انسٽال ڪجي:

_GoCardless_ ايڊ-آن انسٽال ڪرڻ جا قدم گهڻو ڪري _WooCommerce_ ايڊ-آن جهڙا ئي آهن. مهرباني ڪري ايڊ-آنز صفحي تي وڃو ۽ **Ultimate Multisite: GoCardless Gateway** ايڊ-آن چونڊيو.

<!-- اسڪرين شاٽ دستياب ناهي: ايڊ-آنز صفحو، Ultimate Multisite GoCardless Gateway ايڊ-آن نمايان ٿيل -->

ايڊ-آن ونڊو ظاهر ٿيندي. **هاڻي انسٽال ڪريو** تي ڪلڪ ڪريو.

<!-- اسڪرين شاٽ دستياب ناهي: Ultimate Multisite GoCardless Gateway ايڊ-آن جي تفصيلن وارو ڊائلاگ، هاڻي انسٽال ڪريو بٽڻ سان -->

انسٽاليشن مڪمل ٿيڻ کان پوءِ، توهان کي پلگ انز صفحي ڏانهن موڪليو ويندو. هتي، بس **نيٽ ورڪ تي فعال ڪريو** تي ڪلڪ ڪريو ۽ _GoCardless_ ايڊ-آن توهان جي نيٽ ورڪ تي فعال ٿي ويندو.

<!-- اسڪرين شاٽ دستياب ناهي: پلگ انز صفحو، GoCardless Gateway ايڊ-آن لاءِ نيٽ ورڪ تي فعال ڪريو لنڪ سان -->

_GoCardless_ گيٽ وي سان شروعات ڪيئن ڪجي سکڻ لاءِ، **هي مضمون پڙهو**.

### Payfast ايڊ-آن ڪيئن انسٽال ڪجي:

ايڊ-آنز صفحي تي وڃو ۽ **Ultimate Multisite: Payfast Gateway** ايڊ-آن چونڊيو.

<!-- اسڪرين شاٽ دستياب ناهي: ايڊ-آنز صفحو، Ultimate Multisite Payfast Gateway ايڊ-آن نمايان ٿيل -->

ايڊ-آن ونڊو ظاهر ٿيندي. **هاڻي انسٽال ڪريو.** تي ڪلڪ ڪريو

<!-- اسڪرين شاٽ دستياب ناهي: Ultimate Multisite Payfast Gateway ايڊ-آن جي تفصيلن وارو ڊائلاگ، هاڻي انسٽال ڪريو بٽڻ سان -->

انسٽاليشن مڪمل ٿيڻ کان پوءِ، توهان کي پلگ انز صفحي ڏانهن موڪليو ويندو. هتي، بس **نيٽ ورڪ تي فعال ڪريو** تي ڪلڪ ڪريو ۽ _Payfast_ ايڊ-آن توهان جي نيٽ ورڪ تي فعال ٿي ويندو.

<!-- اسڪرين شاٽ دستياب ناهي: پلگ انز صفحو، Payfast Gateway ايڊ-آن لاءِ نيٽ ورڪ تي فعال ڪريو لنڪ سان -->

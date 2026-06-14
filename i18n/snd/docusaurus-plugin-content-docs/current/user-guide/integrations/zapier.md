---
title: زپيار انٽيغريشن
sidebar_position: 12
_i18n_hash: 7f23136e0e69417e244a9930f9620e95
---
# Ultimate Multisite کي Zapier سان جوڙڻ (Integrating Ultimate Multisite with Zapier)

اڪيلي هڪ مضمون ۾، اسان [Webhooks](webhooks.md) بابت بحث ڪئي هوئي ۽ انهن کي ٽيئر پارٽي ايمپليكيشن سان جوڙڻ لاءِ ڪيئن استعمال ڪري سگهجي ٿو.

Webhooks استعمال ڪرڻ ڪجهه حد تائين گهڻو جترو آهي، kyunki ان ۾ ڪوڊنگ جي عالى علم ۽ payloads کي پکڙڻ جي ضرورت هوندي آهي. **Zapier** ان کان بچڻ جو هڪ طريقو آهي.

Zapier جي 5000+ اپليڪيشنن سان جوڙجڪ ٿي ٿي جيڪا مختلف اپليڪيشنن بابت رابطو ڪرڻ کي آسان بڻائي ٿي.

توهان **Triggers** bana سگهو ٿا جيڪي تڏهن شروع ٿيندا آهن جڏهن توهان جي نٽوي ۾ ڪجهه واقعو ٿئي ٿو (مثال طور، هڪ اڪاؤنٽ ٺهي وڃي ۽ `account_create` ان ايڪيڪٽ کي شروع ڪري). يا توهان **Actions** جن کي تنهن نٽوي ۾ ٻاهرين واقعن تي رد عمل ڏيڻ لاءِ جنريٽ ڪري سگهو ٿا (مثال طور، توهان جي Ultimate Multisite نٽوي ۾ هڪ نئين اڪاؤنٽ ممبر شپس جوڙڻ).

هي ممکن آهي ڇاڪاڻ ته **Ultimate Multisite Zapier's triggers** ۽ actions [REST API](https://developer.ultimatemultisite.com/api/docs/) جي مدد سان چالو ٿين ٿا.

## شروع ڪيئن ڪريون (How to start)

پهرين، Zapier جو اپليڪيشن لسٹ ۾ Ultimate Multisite کي ڳوليائيندوهو. يا ٻئي طور، توهان [هي لنک](https://zapier.com/apps/wp-ultimo/integrations) تي ڪلڪ ڪري سگهو ٿا.

پنهنجي dashboard تي وڃو ۽ لائي سائیڊ ۾ **+** **Create Zap** بٽڻ تي ڪلڪ ڪريو ته جيئن هڪ نئين Zap کي ترتیب ڏئي سگهو.

![Zapier dashboard with Create Zap button](/img/admin/webhooks-list.png)

توهان Zap creation page تي ريڊيڪٽ ٿيندو.

Search box ۾ "wp ultimo" لک ڪريو. **Beta** ايڪشن کي چونڊڻ لاءِ ڪلڪ ڪريو.

![Searching for WP Ultimo in Zapier app list](/img/admin/webhooks-list.png)

پنهنجي اپليڪيشن چونڊڻ کان پوء، موجودن ايڪيڪٽ کي چونڊيو: **New Ultimate Multisite Event**.

![Selecting New Ultimate Multisite Event trigger](/img/admin/webhooks-list.png)

هڪڏهن اسان Zapier کي **توهان جي نٽوي** تک رسائي ڏني، ته **Sign in** ۾ ڪلڪ ڪرڻ سان هڪ نون ويندو (window) کليل ٿيندي جنهن کي **API credentials** جي ضرورت هجي.

![API credentials खातिर Zapier sign in prompt](/img/admin/webhooks-list.png)

پنهنجي network admin panel تي جان، **Ultimate Multisite > Settings** > **API & Webhooks** تي وڃو ۽ API Settings جو حصو ڏسو.

**Enable API** جو آپشن چونڊ ڪريو ڇاڪاڻ ته هي ڪنيڪشن کي کام ڪرڻ لاءِ ضروري آهي.

![API and Webhooks settings with API Settings and Enable API options](/img/admin/settings-api-webhooks.png)

API Key ۽ API Secret فیلڊن تي **Copy to Clipboard** جو آئڪن استعمال ڪريو ۽ ان قيمتن کي integration screen تي پیسٽ ڪريو.

URL فیلڊ ۾، پنهنجي network جو پورو URL رکجو، جنهن ۾ protocol (HTTP يا HTTPS) شامل هجي.

![Zapier integration screen with API Key, Secret, and URL fields](/img/admin/webhooks-list.png)

نالي **Yes, Continue** بٽون تي ڪلڪ ڪريو ته هيٺين قدم تي وڃڻ لاءِ. جيڪڏهن سڀ شي صحيح ٿي ويندي، تنهنجي نئين connected account جو استقبال ٿيندو! نئين trigger کي banaڻ لاءِ **Continue** تي ڪلڪ ڪريو.

## نئين Trigger کي ڪيئن banaيو

هڪ وار تنهنجو account connect ٿي وڃي ته توهان مڪمل طور تي موجود events ڏس سگهو ٿا. هي tutorial لاءِ اسان **payment_received** event چونڊ ڪنداسين.

![Selecting payment_received event in Zapier trigger](/img/admin/webhooks-list.png)

جڏهن تنهنجي event چونڊ ڪئي ويندي آهي ۽ توهان **continue** تي ڪلڪ ڪريو ٿا، ته هڪ **test step** ظاهر ٿيندو.

![Zapier test step for the trigger](/img/admin/webhooks-list.png)

هي مرحلو، Zapier جي سڃاڻپ ڪندو ته تاهو جو Zap ان event لاءِ **specific payload کي کڻي وٺي سگهي ٿو**. هيءَ نفس طرح جي ٻين events لاءِ به هي ئي structure سان معلومات ڦرائي ويندي.

![Zapier trigger test completed successfully with payload](/img/admin/webhooks-list.png)

اس تعليمات ۾، اسان جو ٹیسٽ **کامیاب طور تي مکمل ٿيو** ۽ پي لوڈ مثال معلومات واپس ڪئي آهي. هي مثال معلومات اسان کي عمل (actions) کڻڻ دوران رهنمائي ڪرڻ لاءِ مددگار ثابت ٿيندي. توهان جو trigger اب bana دِيو آهي ۽ ان کي ٻين ايمپليمنٽس سان جوڙڻ لاءِ تيار آهي.

## Actions ڪيئن ٺاهيون

Actions ٻين triggers کان معلومات استعمال ڪري توهان جي network ۾ نون entry کڻڻ لاءِ استعمال ٿين ٿا.

**Action step ٺاهڻ** ۾، توهان Ultimate Multisite **Beta** کي چونڊيو ۽ **Create Items on Ultimate Multisite** جو خيار چوندو.

![Creating an action with Create Items on Ultimate Multisite](/img/admin/webhooks-list.png)

ٻئي قدم تي، توهان يا جنهن طرح اسان **How to start** ۾ ڪيو هو، پنهنجي authentication ٺاه سگهو ٿا، يا هڪ موجودہ authentication کي چونڊيو. هن تعليمات ۾، اسين اها ئي authentication چوندون جيڪا پريئشس طور تي ٺاهي وئي آهي.

![Selecting authentication for the Zapier action](/img/admin/webhooks-list.png)

### Action جو ترتیب ڏيڻ (Setting up the Action)

هي **action جو بنيادي قدم** آهي ۽ هتي ڪجهه कुरा مختلف آهن. توهان جيڪا سڀ کان پهريون معلومات چوندو، هو **Item** آهي. Item توهان جي network جو **information model** آهي جنهن طرح **Customers, Payments, Sites, Emails** ۽ ٻيا هوندا.

![Choosing Item type for the Zapier action](/img/admin/webhooks-list.png)

Item چونڊڻ کان پوءِ، فارم ان مطلوب ۽ اختيار (optional) فیلڊز کي لائي ڇڏيندو آهي جيڪي چونڊيل item لاءِ ضروري آهن.

مثال طور، Item **Customer** چونڊڻ وقت، فارم جا فیلڊز سڀ شيون لائي ڇڏيندا آهن جيڪا network ۾ نون Customer کڻڻ لاءِ پورو ڪرڻ لاءِ ضروري آهن.

![Customer item fields in Zapier action setup](/img/admin/webhooks-list.png)

**Required** طور نشان ڏنل سڀ فیلڊز پورو ڪري، ۽ continue تي ڪلڪ ڪريو، ته هڪ آخري سڪرين توهان کي پورو ڪيل فیلڊز ۽ ان فیلڊز جو ڏيکار ڪندي ڏيندي.

![Zapier عمل جي تجربو ڏيکاري واريڪاري ۾ پورو ۽ ان کي پورو ڪرڻ کان پوءِ توهان جو عمل ترتیب وارو ٿيو آهي. اهو به اهم آهي ته توهان جي نٽويڪ تي هيٺ ڏيکڻ لاءِ چكهيو ته هلندڙ شي توهان جي عمل جي تجربو سان بنائي وئي آهي يا نه.](https://img/admin/webhooks-list.png)

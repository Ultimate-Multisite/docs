---
title: ويب هوڪس
sidebar_position: 15
_i18n_hash: f8456622538d07af8f5aa36c1ec19249
---
# Webhooks جو هڪ ڏسڻ (v2)

_**توجيه: اهو ڪم ڪريو يا مضمون صرف ادواني استعمال ڪندڙن لاءِ آهي.**_

**Webhook** هڪ اهڙو طريقو آهي جنهن سان ڪا ايپ يا س decides software جهڙوڪ Ultimate Multisite ٻين ايميجشنز کي ريل-ٽائم معلومات ڏئي سگهي ٿو. webhook ڪڏهن ڪڏهن data يا payloads ٻين applications تائين پهچائي ڇڏيندي آهي، جس کا مطلب آهي ته توهان **فوري طور تي data حاصل ڪري ويندا آهيو.**

هي ان وقت مددگار آهي جڏهن توهان کي Ultimate Multisite کان ڪا خاص معلومات ڪنهن ٻئي CRM يا system ۾ شامل ڪرڻ يا هر وقت ڪهڙي event ٿيڻ تي ڪا data پاس ڪرڻ جي ضرورت پوي. مثال طور، توهان کي هر وقت نون صارف جو حساب کڻجي ته صارف جو نالو ۽ ايميل address mailing list تائين پيڻو پوي.

## webhook ڪيئن ٺاهيو

Webhook ٺاهڻ لاءِ، پنهنجي network admin dashboard تي وڃو. **Ultimate Multisite > Webhooks > Add New Webhook** تي ڪلڪ ڪريو.

![Empty Webhooks list page with Add New Webhook button](/img/admin/webhooks-list-empty.png)

پھر توهان webhook جي configuration کي edit ڪري سگهو ٿا:

![Add New Webhook form with Name, Event, and URL fields](/img/admin/webhook-add-modal.png)

نئي webhook ٺاهڻ وقت، توهان کان **Name، URL،** ۽ **Event** جهڙي معلومات طلب ڪندي وڃي. توهان پنهنجي webhook لاءِ ڪا به نالو استعمال ڪري سگهو ٿا. URL ۽ Event انهن جو تمام گهڻو اهم آهن.

![Webhook edit interface showing the URL field and payload preview](/img/admin/webhook-url-field.png)

URL اهو **endpoint يا منزل** آهي جتي Ultimate Multisite **payload يا data** پيڇي ڪندو. هي اها application آهي جيڪا data وصول ڪندي رهندي.

Zapier ان سڀ کان عام حل آهي جيڪو صارف ٽيرڊ پارٽي application سان integration کي آسان بڻائڻ لاءِ استعمال ڪري ٿو. Zapier جهڙي platform کان سواءِ، توهان کي هڪ custom function manual طور تي ٺاهڻ جي ضرورت پوندي جنهن data کي پکڙي ۽ process ڪري سگهي هجي. **Ultimate Multisite webhook جو Zapier سان ڪيئن استعمال ڪجي** ان article کي ڏسو.

اهم اس مضمون ۾، اسان ويبڪ (webhook) ڪيئن کام ڪري ٿو ۽ Ultimate Multisite ۾ موجود موجوده ايونٽس (events) بابت بنيادي تصور کي ڏسيون ٿا. اسان [requestbin.com](https://requestbin.com/) جي هڪ ٽرائي پارٽ سائيٽ استعمال ڪنداسين. هي سائيٽ اسان هڪ endpoint banaڻ ۽ ڪو به ڪو ڪوڊ نه لکڻ بجي payload کي کڻڻ جو عمل بدون ڪنه ڪو پروگرامنگ کان گهري ٿي، هوڳيون ڏئي سگهي ٿي. _**ذمه: ان سان صرف هي ڏسڻ ۾ مدد ڪندو ته ڊيٽا وصول ٿي ويو آهي.**_ ايونٽ تي ڪو به عمل يا ڪنه قسم جو ڪم نه ڪندو.

[requestbin.com](https://requestbin.com/) تي وڃو ۽ Create Request Bin تي ڪلڪ ڪريو.

ان بٹن تي ڪلڪ ڪرڻ کان پوءِ، هو توهان کان پوڇندو ته جيڪڏهن توهان جو حساب پہلے کان موجود آهي ته لاگ ان ڪرڻ يا نئين سائن اپ ڪرڻ جي روشني ڏيندو. جيڪڏهن توهان جو حساب پہلے کان موجود آهي، تڏهن هي توهان کي direkt طور تي انهن جي dashboard تي لڳائي ڇڏيندو. انهن جي dashboard تي، توهان فوري طور تي endpoint يا URL ڏسڻ ۾ ايندا آهيو جنهن جو توهان پنهنجي Ultimate Multisite webhook banaڻ لاءِ استعمال ڪري سگهو ٿا.

URL کي ڪاپي ڪريو ۽ واپس Ultimate Multisite تي وڃو. endpoint کي URL فیلڊ ۾ رکجو ۽ dropdown کان هڪ event چونڊيو. هن مثال ۾، اسان **Payment Received** چونڊيندا آهيون.

هي event تڏهن شروع ٿئي ٿو جڏهن ڪا صارف دفعو ڪري ٿو. سڀ ايونٽس جيڪي موجود آهن، انهن جي وضاحت، ۽ payload سائيٽ جي هيٺ ڏنل صفحندي ڏانهن لکيل آهن. webhook کي محفوظ ڪرڻ لاءِ **Add New Webhook** بٽڻ تي ڪلڪ ڪريو.

![Webhook event dropdown with Payment Received selected](/img/admin/webhook-event-picker.png)

اسان ته ان endpoint تي هڪ تجرباتي ايونٽ پياري سگهون ٿا ته اسان ڏس سکيون ته جيڪا webhook اسان وٺائي آهي، هو ڪم ڪري رهي آهي يا نه. اسان هي اهو ڪري سگهون ٿا جڏهن اسان پنهنجي webhook کان **Send Test Event** تي ڪلڪ ڪنداسين.

![Webhooks list showing one configured webhook and Send Test action](/img/admin/webhooks-list-populated.png)

هي هڪ تصديقي ڊوائٽ (confirmation window) ڏئي ٿو ته تجربو ڪامياب رهيو آهي.

![Webhook test event result after sending a test payload](/img/admin/webhook-test-result.png)

جيڪڏهن اسان _Requestbin_ موقعي تي واپس وڃون ته توهان ڏسندو ته پنهنجي ڊيٽا (payload) کي وصول ڪيو آهي جنهن ۾ ڪجهه تجرباتي معلومات شامل آهن.

هي webhook ۽ endpoints ڪم ڪن ٿا انهن جي بنيادي اصول آهي. جيڪڏهن توهان ڪا خاص endpoint banaڻ چاهيو، ته توهان کي Ultimate Multisite کان وصول ٿيل ڊيٽا کي عمل ڪرڻ لاءِ هڪ خاص function banaڻو پوندو.

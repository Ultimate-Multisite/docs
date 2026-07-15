---
title: ويب هوڪس
sidebar_position: 15
_i18n_hash: f8456622538d07af8f5aa36c1ec19249
---
# वेबहुक्स (v2) تي هڪ ڏسڻ جو انداز

_**سنڌو:  نوٽ ڪريو ته هي ڪميت يا مضمون صرف ادواني استعمال ڪندڙن لاءِ آهي.**_

**ويب هوڪ (webhook)** هڪ اهڙي طريقو آهي جنهن سان Ultimate Multisite جهڙو ڪنهن ايپ يا سافٽ ويئر کي ٻين ايپ ملي معلومات کي ريل-ٽائم ۾ ڏيڻ جي اجازت ڏئي ٿو. ويب هوڪ ڪنهن به وقت تي ڊيٽا يا پيئڊز (payloads) ٻين ايپس کي موڪلي ٿو، جس کا مطلب آهي ته توهان **فوري طور تي ڊيٽا حاصل ڪري سگهو ٿا.**

هي ان صورت ۾ مددگار آهي جڏهن توهان کي Ultimate Multisite کان ڪنهن خاص ڊيٽا کي ٻئي CRM يا نظام ۾ شامل ڪرڻ يا پاس ڪرڻ جي ضرورت پوي، هر وقت ڪنهن واقعي (event) جو شروع ٿيڻ تي. مثال طور، توهان کي هر نئين صارف حساب جي بڻجي وڃڻ تي صارف جو نالو ۽ ايميل adhesion list تي موڪلينڊ آهي.

## ويب هوڪ ڪيئن ٺاهيو ويندو آهي {#how-to-create-a-webhook}

ويب هوڪ ٺاهڻ لاءِ، پنهنجي نيٽ ورڪ اڊمن (network admin)แดش بورڊ تي وڃو. **Ultimate Multisite > Webhooks > Add New Webhook** تي ڪلڪ ڪريو.

![Add New Webhook button on the dashboard](/img/admin/webhooks-list-empty.png)

پھر توهان ويب هوڪ جي ڪيغاري (configuration) کي سڌار سگهو ٿا:

![Add New Webhook form with Name, Event, and URL fields](/img/admin/webhook-add-modal.png)

نئين ويب هوڪ کي ٺاهڻ وقت، توهان کان **Name، URL،** ۽ **Event** جهڙي معلومات جي گهرجي ويندي آهي. توهان پنهنجي ويب هوڪ لاءِ ڪا به نالو استعمال ڪري سگهو ٿا. URL ۽ Event انهن جو تمام گهڻو اهم آهن.

![Webhook edit interface showing the URL field and payload preview](/img/admin/webhook-url-field.png)

URL **ڊيستيني يا ان پويڄا (endpoint)** آهي جتي Ultimate Multisite **پيئڊز يا ڊيٽا** موڪلي ٿو. هي انهيءَ ايپ کي حاصل ڪندو جيڪو ڊيٽا وصول ڪري ٿو.

Zapier اهو سڀ کان عام حل آهي جيڪو صارف 3rd party ايپ سان انٽيغريشن آسان بڻائڻ لاءِ استعمال ڪري ٿو. Zapier جهڙي پليٽ فارم کان سواءِ، توهان کي ڪنهن خاص فنڪار (custom function) جو هيٺ ڏسڻ جي ضرورت پوندي جيڪو ڊيٽا کي پکڙي ۽ ان کي عمل ۾ آڻي سگهي. **Ultimate Multisite webhook سان Zapier استعمال ڪرڻ بابت هي مضمون ڏسو.**

اهم اس مضمون ۾، اسان ويبڪ (webhook) ڪيئن کام ڪري ٿو ان جي بنيادي مفهوم ۽ Ultimate Multisite ۾ موجود موجوده ايونٽس (events) بابت ڏسو ويندا آهيون. اسان [requestbin.com](https://requestbin.com/) ناهي ٽرائي پارٽي سائيٽ استعمال ڪنداسين. هي سائيٽ اسان هڪ endpoint banaڻ ۽ ڪو به ڪو ڪوڊ نه لکڻ بجي payload کي کڻڻ جي اجازت ڏيندي آهي. _**ذمه: ان جو صرف اهو ڪيو ويندو ته اسان کي ڏيکاري ته ڊيٽا وصول ٿي ويو آهي.**_ هي payload تي ڪا پروسيسنگ يا ڪنه به عمل نه ڪندو.

[requestbin.com](https://requestbin.com/) تي وڃو ۽ Create Request Bin تي ڪلڪ ڪريو.

ان بٽڻ تي ڪلڪ ڪرڻ کان پوءِ، اهو توهان کان لاگ ان ڪرڻ جو پڇي سگهندو ته جيڪڏهن توهان جي اڳ ۾ hi account آهي يا signup ڪريو. جيڪڏهن توهان جو حساب پہلے تيه آهي ته اهو توهان کي direkt ان جي dashboard تي لڳائي ڇڏيندو. ان جي dashboard تي، توهان فوري طور تي endpoint يا URL ڏسڻ شروع ڪندا ته توهان پنهنجي Ultimate Multisite webhook banaڻ ۾ استعمال ڪري سگهو ٿا.

URL کي کاپی ڪريو ۽ واپس Ultimate Multisite تي وڃو. endpoint کي URL فیلڊ ۾ رکيو ۽ dropdown کان هڪ event چونڊيو. هن مثال ۾، اسان **Payment Received** چونڊيندا آهيون.

هي event تڏهن شروع ٿئي ٿي جڏهن ڪا صارف دفعو ڪري ٿو. سڀ موجود events، انهن جي وضاحت، ۽ payloads پيچي جي هيٺ ڏنل آهي. webhook کي محفوظ ڪرڻ لاءِ **Add New Webhook** بٽڻ تي ڪلڪ ڪريو.

![Webhook event dropdown with Payment Received selected](/img/admin/webhook-event-picker.png)

اسان اها test event endpoint تي بھیجائي سگهون ٿا ته اسان ڏس سکيون ته جيڪا webhook اسان واري ڪيو آهي اهو کام ڪري رهي آهي يا نه. اسان اهو هو ويبڪ کان تحت **Send Test Event** بٽڻ تي ڪلڪ ڪري سگهون ٿا.

![Webhooks list showing one configured webhook and Send Test action](/img/admin/webhooks-list-populated.png)

هي هڪ تصديقي ڊوائٽ (confirmation window) ڏيکاري ٿو ته test ڪامياب رهيو آهي.

![Webhook test event result after sending a test payload](/img/admin/webhook-test-result.png)

جيڪڏهن اسان _Requestbin_ سائيٽ تي واپس وڃون ته اسان ڏسنداسين ته پيڊول (payload) وصول ٿيو آهي جنهن ۾ ڪجهه ٽيسٽ ڊيٽا شامل آهي.

هي webhook ۽ endpoints ڪم ڪن ٿا انهن جي بنيادي اصول آهي. جيڪڏهن توهان هڪ ڪسٽم endpoint ٺاهڻ چاهيو، ته توهان کي هڪ ڪسٽم فنڪشن (function) ٺاهڻو پوندو جنهن سان توهان Ultimate Multisite کان وصول ٿيل ڊيٽا کي پروسيس ڪري سگهو.

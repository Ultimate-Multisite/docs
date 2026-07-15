---
title: انټرنی سرچ
sidebar_position: 26
_i18n_hash: e0c88931760a1b490767e39aad86c70f
---
# انٹرنیٹ سرچ (Internet Search)

Gratis AI Agent v1.5.0 ۾ هڪ **انٽرنيٽ سرچ** جي صلاحيت شامل ڪئي آهي جيڪا واري دوران AI اسسٽن کي ويب کان تازي معلومات حاصل ڪرڻ جو موقعي ڏئي ٿي. هي [Brave Search API](https://brave.com/search/api/) يا [Tavily API](https://tavily.com/) جي مدد سان ڪم ڪري ٿو.

## اهو ڪيئن ڪم ڪري ٿو (How It Works) {#how-it-works}

جڏهن انٽرنيٽ سرچ چالو آهي، ته اسسٽن خود هيءَ يقيني بڻائي سگهي ٿو ته سوال کي موجوده يا ٻاهرين معلومات جي ضرورت آهي — مثال طور، تازي خبرون، لائیو پرائسنگ، يا سندس ماڊل جي تربيت ختم ٿيڻ کان پوءِ بدلائي وئي هجڻ وارن ڪا ڪا معلومات.

نتجا (Results) وقت سان گڏ حاصل ڪيا ويندا آهن ۽ جواب ڏناءو هيٺ پيش ڪرڻ کان اڳ اسسٽن جي ڪنٽيڪسٽ ۾ شامل ڪيا ويندا آهن. اسسٽن اهو ٻڌائي ٿو ته جڏهن ان سوال جو جواب ڏيڻ لاءِ سرچ رزلٽس استعمال ڪيا ويا آهن.

## انٽرنيٽ سرچ چالو ڪرڻ (Enabling Internet Search) {#enabling-internet-search}

انٽرنيٽ سرچ لاءِ توهان جي چونڊيل سرچ پروائيڊر کان API key گهرجي ٿي. ان کي ترتیب ڏيارڻ لاءِ:

1. **Gratis AI Agent → Settings → Advanced** تي وڃو.
2. **Internet Search Provider**dropdown کي ڏسو ۽ يا ته **Brave Search** يا **Tavily** چونڊيو.
3. سندس API key کي ان جو مطابق فیلڊ ۾ داخل ڪريو. هر فیلڊ جي سمهڻ وارن ڳانڍڻ (Sign-up) جا لنڪس واري آهن.
4. **Save Settings** تي ڪلڪ ڪريو.

جڏهن هڪ次 key محفوظ ٿي ويندي آهي، ته انٽرنيٽ سرچ جي صلاحيت خود بخاري اسسٽن لاءِ موجود هوندو آهي.

## Brave Search {#brave-search}

### Brave Search API Key حاصل ڪرڻ (Obtaining a Brave Search API Key) {#obtaining-a-brave-search-api-key}

1. [Brave Search API page](https://brave.com/search/api/) تي وڃو.
2. هڪ پلان لاءِ سائن اپ ڪريو. هڪ مفت تير (free tier) موجود آهي جنهن ۾ هر مهينتي درخواست جي حد رکي ٿي.
3. Brave Search developer dashboard کان پنهنجي API key کي ڪاپي ڪريو.
4. ان کي Gratis AI Agent جي settings ۾ **Brave Search API Key** فیلڊ ۾ پیسٽ ڪريو.

### استعمال جي حدود (Usage Limits) {#usage-limits}

استعمال جي (Usage) Brave Search جي بنیاد تي ڪيڪس (queries) جي تعداد تي برايف سرچ طرفان ٿيل آهي. هر AI جواب جيڪو سرچ شروع ڪري ٿو، ان کي هڪ سوال سمجھيو ويندو آهي. غير متوقع چارجز کان بچڻ لاءِ [Brave Search developer dashboard](https://brave.com/search/api/) ۾ پنهنجي استعمال جي نگراني ڪئي ڪريو.

## Tavily {#tavily}

Superdav AI Agent v1.10.0 وٽ **Tavily** کي هڪ alternatve انٽرنيٽ سرچ پروائيڊر طور شامل ڪيو آهي، جيڪا وڌيڪ معلومات وارن سرچ رزلٽس ۽先进 (advanced) رپورٽنگ جي صلاحيتون پيش ڪري ٿي.

### Tavily API Key حاصل ڪرڻ {#obtaining-a-tavily-api-key}

1. [Tavily API page](https://tavily.com/) تي وڃو.
2. هڪ اڪاونٽ لاءِ سائن اپ ڪريو. هڪ مفت تير (free tier) موجود آهي جنهن ۾ هر مهينتي درخواستن جي حد رکي ٿي.
3. پنهنجي API key کي Tavily dashboard کان ڪاپي ڪريو.
4. ان کي Gratis AI Agent جي setings ۾ **Tavily API Key** فیلڊ ۾ پیسٽ ڪريو.

### استعمال جي حدود (Usage Limits) {#usage-limits-1}

استعمال Tavily طرفان API calls جي تعداد تي چارج ٿيندو آهي. هر AI جواب جيڪو سرچ شروع ڪري ٿو، ان کي هڪ call سمجھيو ويندو آهي. غير متوقع چارجز کان بچڻ لاءِ [Tavily dashboard](https://tavily.com/) ۾ پنهنجي استعمال جي نگراني ڪئي ڪريو.

## انٽرنيٽ سرچ بند ڪرڻ (Disabling Internet Search) {#disabling-internet-search}

API key کي فعال سرچ پروائيڊر فیلڊ کان کليو ۽ محفوظ ڪريو. اسان جي assistant کي هن وقت انٽرنيٽ سرچ جي صلاحيت نه ڏني ويندي.

:::note
انٽرنيٽ سرچ جوابن ۾ تاخير (latency) جو سبب ٿيندي آهي ڇاڪاڻ ته assistant کي جواب ڏيڻ کان اڳ سرچ رزلٽس انتظار ڪرڻ گهرجن. وقت سان حساس ڪيس لاءِ، غور ڪريو ته ريل-ٽائم سرچ جي ضرورت آهي يا هلائي جي اندر موجود علم (built-in knowledge) پونقي ڪافي آهي.
:::

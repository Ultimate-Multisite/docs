---
title: Registers API Endpoint
sidebar_position: 6
_i18n_hash: 8d9b47668bce413a2466cf2b1c37d2cf
---
# Endpoint-a API register-i nî Ultimate Multisite

Li vê dersê, ji bo fیدی کارکردna endpoint-a API /register a Ultimate Multisite ji bo nirxandina pûr a pêvajoya başyandina mînalî ya nû ji bo mînalîyek nû di neteweyekê de û çawa ji Zapier bi wê dike.

Endpoint-a li ser metoda POST e û bi URL-a _**https://yoursite.com/wp-json/wu/v2/register**_ anîna ye. Li vê zanînê, 4 porsêxe di neteweyekê de têne peybedin:

  * Pêşvekirina yekem ji bo karozara WordPress an jî ji bo tavekirina wê bi ID-ya estekara karozarê dike.

  * Pêşvekirina yekem ji bo mînalîyek nû di Ultimate Multisite de an jî ji bo tavekirina wê bi ID-ya mînalîiyê dike.

  * Pêşvekirina yekem ji bo sît nû di neteweyekê de li WordPress tê pêkirtin.

  * Li dawiyê de, vê yekê ji bo karozara nû di Ultimate Multisite de tê pêkirtin.

Ji bo vê pêvajoyê، hewce ye ku hûn bi credentials-ên API xwe binivîsin. Ji bo wan girtin, berbiya admin a neteweyekê xwe bibîne, ji **Ultimate Multisite > Settings** > **API & Webhooks**, û li sekmesine API Settings li berînê.

![Sekmasına API Settings di Ultimate Multisite de](/img/config/settings-api.png)

Li vir nûçeyek bi naveda sekmesên API ye:

![Sekmesên API settings ji bo pûr](/img/config/settings-api-full.png)

**Enable API** (API-ya bi karêkirin) biyan û credentials-ên API xwe girtin.

Niha, li ser endpoint-a nûçeyek bibînin û paş wê ji bo nirxandina yekem di Zapier de çêbine.

## Paramêtreyên cîhê (body parameters) {#endpoint-body-parameters}

Biar me bi pîvîna zêst a armanca ku em hewce dikin ji bo firdawestina maghsaleyek ji bo endpoint-a, li ser nûçeyeke dê bibînin.

### Customer {#customer}

Ev maghsaleyek e ku hewce ye ji bo pêvajoya çêkirina User û Mînalîyek Customer a Ultimate Multisite:

"customer_id" : integer

ئایا دەتوانی IDی کڕیارەکەی کە لە تۆڕەکەت دروستکراوە بۆتان بنێیت؟ ئەگەر نەنێرین، زانیاری خوارەوە بەکاردێت بۆ دروستکردنی کڕیارێکی نوێ و یوانێکی WordPress. دەتوانیت IDی یوانەکەیش بە هەمان شێواز لەگەڵ IDی کڕیاردا بنێیت.

"customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", },

### **تایبەتمەندی (Membership)** {#membership}

تەنها یەک زانیارییەکی پێویستە لەناو ئەم ئۆبجێکتدا، ئەوەیە ئەو دۆخی تایبەتمەندییە.

"membership" { "status" : "string", // یەکێک لە "pending"، "active"، "trialing"، "expired"، "on-hold"، "canceled" }

### **پێکهاتەکان (Products)** {#products}

بۆ پێکهاتەکان، دەدەین ئاریەیەک کە یان زیاتر لە یەک IDی پێکهاتەی تۆڕەکەت دەگرێت. ئاگادارم بکە، ئەم endpointە پێکهاتە دروست ناکات. بۆ تێگەیشتنی باشتر لەسەر endpoint-ەکە بۆ دروستکردنی پێکهاتەکان، بەدوای dokumantasi Ultimate Multisite بگەڕێ.

**"products" : [1,2],**

### **پابوون (Payment)** {#payment}

وەک تایبەتمەندییەکان، تەنها دۆخەکەمان پێویستە.

**"payment" { "status" : "string", // یەکێک لە "pending"، "completed"، "refunded"، "partially-refunded"، "partially-paid"، "failed"، "canceled" }**

### **سایتی (Site)** {#site}

و بۆ کۆتایی دابینکردنی، پێویستە URL و ناونیشانی سایتەکە لەناو ئۆبجێکت Siteیەکەدا هەبێت.

**"site" : { "site_url" : "string", "site_title" : "string" }**

پاسرج returnی endpoint-ی register، ئاریەیەک دەبێت کە زانیاری نوێکراوەکانی تایبەتمەندی دروستکراو لەخۆگرێت.

## دروستکردنی اکشایەک لە Zapierدا (Creating an action in Zapier) {#creating-an-action-in-zapier}

لەگەڵ پێشوازی ئەم endpoint-ی نوێ و بەهێزتر بۆ دروستکردنی خشتەی تایبەتمەندی، دەتوانیت اکشای نوێیەک لە Zapierدا بەکاربهێنیت.

ئایا دەزانیت چۆن بەکاریان بهێنیت و هەموو ئەو شتانەی کە وەرگرتنی نسخه نوێی Zapier پێشکەش دەکات بەخێربیت؟ زیاتر بزانە لێرە. (لینک؟)

### دروستکردنی اکشایەکە {#creating-an-action}

بۆ ئەوەی باشتر ڕوون بکەینەوە چۆنیەتی بەکارهێنانی registration endpoint لەگەڵ Zapier، بیابین یەکگرتوویی (integration)ێک لەگەڵ Google Forms دروست بکەین. هەمواری کاتێک ئەم فۆرمە پڕ دەبێت و زانیارییەکان لە لایەنی جوابەکانی فۆرمەکەدا هەڵدەستێنرێت، یەکەم ئەندازی نوێ بۆ ئەندازیی (membership) لە تۆڕی Ultimate Multisite دروست دەکرێت.

لە Google Forms، فۆرمێک دروست بکە کە تەنها ئەو فیلدە پێویستانەی هەیە بۆ دروستکردنی یەکەم ئەندازیی (membership) لە تۆڕەکەدا.

<!-- Screenshot unavailable: Google Forms form with fields for creating a new membership -->

ئێستا لە Zapier، یەک Zap نوێ دروست بکە و فۆرمەکە کە لە ڕێگەی spreadsheet-یەوە داتاکان هەڵدەستێت بە Google پەیوەندی بکە.

<!-- Screenshot unavailable: Zapier trigger configuration connecting to Google Forms spreadsheet -->

کەتا! فۆرمەکە لەگەڵ Zapier پەیوەندیدار بووە و ئامادەیە بۆ ئەوەی لەگەڵ تۆڕەکە یەکگرتوو بکرێت. ئێستا بچینە سەر Action (کردار) کە لە پڕۆسەی Trigger (بۆچی Google Forms هەر کاتێک پڕ دەبێت، کارێکی دروست دەکات) دوایدا دەبێت.

ئامێرتی Ultimate Multisite نوێیەکە بدۆزەوە و هەڵبژێرە. بۆ ئەم جۆرە Zap یەکگرتوو بکە، آپشنەکە Register (Registration) بژێرە.

<!-- Screenshot unavailable: Zapier action selection showing Ultimate Multisite app with Register option -->

پاش ئەم هەنگاوە یەکەم، ئەو یەکخاڵەی کە دەبێت لەگەڵ ئەم Zapدا پەیوەندیدار بێت هەڵبژێرە.<!-- Screenshot unavailable: Zapier account connection step for Ultimate Multisite -->

ئەمە حساسترین بەشە لە هەموو پڕۆسەکەدا. پێویستە فیلدەکانی سەرچاوەی Google Forms لەگەڵ ئەو فیلدانەی پێویستن بۆ registration endpoint یەکبکەین، وەک لە بەشی پێشووی ئەم بابەتەدا نیشانکراوە.

لە ئەم نموونەدا، تەنها دەبێت username (ناوی بەکارهێنەر)، email (پەیوەندی)، password (ڕەوانە)، name (ناوەکە) و URL (لینکەکەی) مافی ئەو داتایە دیاری بکەین. باقی کارە پێشوەختە بۆ ئەوەی هەموو یەکگرتووەکانی دروستکراوە لەسەر ئەم Google Forms، شێوازی هاوشێوەی بەرهەم و دۆخی (status) هەمان بێت.

<!-- Screenshot unavailable: Zapier field mapping between Google Forms and Ultimate Multisite register endpoint -->

پێویە زانیارییەکان ڕێکخستو بێت، پاشان بۆ تاقیگەی کۆتاییەکە بەردەوام بیت. لەسەر دەروازەی دووەم دەتوانیت هەموو فیلدەکانی ئەو فیلدان ببینیت کە بۆ endpointیەکە دەبینرێن، زانیارییەکەی و ئەو فیلدانەی کە بە خاڵ دەبینرێن.<!-- Screenshot unavailable: Zapier test screen showing all fields to be sent to the register endpoint -->

تەستی Zap نوێی خۆت بکە و ئەوە بە سەرکەوتوویی تەواو دەبێت. ئەگەر هەڵەیەکی ڕوو بدات، هەموو فیلدەکانی چاک بکە و ببینە ئایا بە دروستی دەنێردرێنەوە. لەبەر ئەوەی زانیاری زۆر هەیە، هەندێک شت دەتوانیان لە نادیدی چیبین.

### پارامێترە تەواوەکانی endpoint {#complete-endpoint-parameters}

لێرەدا کۆمەڵەی تەواوی داواکاری و هەموو کێشەکانی فیلدەکانی ناردن هەن:

"customer_id" : integer, "customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", }, "membership" : { "status" : "string", // یەکێک لە "pending", "active", "trialing", "expired", "on-hold", "cancelled" "date_expiration" : "string", "date_trial_end" : "string", "date_activated" : "string", "date_renewed" : "string", "date_cancellation" : "string", "date_payment_plan_completed": "string", }, "products" : [1,2], "duration" : "string", "duration_unit" : "string", "discount_code" : "string", "auto_renew" : "boolean", "country" : "string", "currency" : "string", "payment" { "status" : "string", // یەکێک لە "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "cancelled" }, "payment_method" : { "gateway" : "string", "gateway_customer_id" : "string", "gateway_subscription_id" : "string", "gateway_payment_id" : "string", }, "site" : { "site_url" : "string", "site_title" : "string", "publish" : "boolean", "template_id" : "string", }

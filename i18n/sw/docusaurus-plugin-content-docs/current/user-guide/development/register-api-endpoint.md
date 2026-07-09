---
title: Sajili API Endpoint
sidebar_position: 6
_i18n_hash: 8d9b47668bce413a2466cf2b1c37d2cf
---
# Endpoint ya API ya usajili ya Ultimate Multisite {#the-ultimate-multisite-register-api-endpoint}

Katika mafunzo haya, utajifunza jinsi ya kutumia endpoint ya API ya Ultimate Multisite /register kuunda mchakato mzima wa kumkaribisha mteja mpya katika mtandao wako na jinsi ya kufanya hivyo kwa Zapier.

Endpoint hutumia mbinu ya POST na huitwa kupitia URL _**https://yoursite.com/wp-json/wu/v2/register**_. Katika mwito huu, michakato 4 itatekelezwa ndani ya mtandao wako:

  * Mtumiaji mpya wa WordPress au utambulisho wake kupitia user ID utaundwa.

  * Mteja mpya katika Ultimate Multisite au utambulisho wake kupitia customer ID utaundwa.

  * Tovuti mpya kwenye mtandao wa WordPress itaundwa.

  * Mwishowe, Uanachama mpya katika Ultimate Multisite utaundwa.

Kwa mchakato huu, utahitaji vitambulisho vyako vya API. Ili kuvipata, nenda kwenye paneli ya msimamizi wa mtandao wako, elekea **Ultimate Multisite > Settings** > **API & Webhooks,** na utafute sehemu ya API Settings.

![Sehemu ya API Settings katika Ultimate Multisite](/img/config/settings-api.png)

Huu hapa mwonekano kamili wa ukurasa wa mipangilio ya API:

![Ukurasa kamili wa mipangilio ya API](/img/config/settings-api-full.png)

Chagua **Enable API** na upate vitambulisho vyako vya API.

Sasa, hebu tuchunguze endpoint kisha tuunde kitendo cha usajili katika Zapier.

## Vigezo vya body ya endpoint {#endpoint-body-parameters}

Hebu tuwe na muhtasari wa taarifa za kiwango cha chini tunazohitaji kutuma kwa endpoint. Mwishoni mwa makala hii, utapata mwito kamili.

### Mteja {#customer}

Hizi ndizo taarifa zinazohitajika kwa mchakato wa kuunda Mtumiaji na Mteja wa Ultimate Multisite:

"customer_id" : integer

Inawezekana kutuma customer ID iliyoundwa katika mtandao wako. Ikiwa haijawasilishwa, taarifa zilizo hapa chini zitatumika kuunda mteja mpya na mtumiaji mpya wa WordPress. user ID pia inaweza kutumwa kwa njia ileile kama customer ID.

"customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", },

### **Uanachama** {#membership}

Taarifa pekee tunayohitaji ndani ya kifaa hiki ni Hali ya Uanachama.

"membership" { "status" : "string", // one of "pending", "active", "trialing", "expired", "on-hold", "canceled" },

### **Bidhaa** {#products}

Bidhaa hutolewa kama array yenye product ID 1 au zaidi kutoka kwenye mtandao wako. Kuwa mwangalifu, endpoint hii haiundi bidhaa. Angalia nyaraka za Ultimate Multisite ili kuelewa vizuri zaidi endpoint ya kuunda bidhaa.

**"products" : [1,2],**

### Malipo {#payment}

Kama ilivyo kwa Uanachama, tunahitaji tu hali.

**"payment" { "status" : "string", // one of "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "canceled" },**

### Tovuti {#site}

Na kufunga body tunahitaji URL na Kichwa cha tovuti, vyote vikiwa ndani ya kifaa cha Tovuti.

**"site" : { "site_url" : "string", "site_title" : "string" }**

Jibu la endpoint ya usajili litakuwa array yenye taarifa za uanachama mpya ulioundwa.

## Kuunda kitendo katika Zapier {#creating-an-action-in-zapier}

Kwa kuanzishwa kwa endpoint hii mpya na imara zaidi ya kuunda Account, pia utapata kitendo kipya katika Zapier.

Je, unajua jinsi ya kutumia na kufurahia kila kitu ambacho toleo jipya la Zapier linatoa? Jifunze zaidi hapa. (kiungo?)

### Kuunda kitendo {#creating-an-action}

Ili kuonyesha vizuri zaidi jinsi ya kutumia endpoint ya usajili kwa Zapier, hebu tuunde muunganisho na Google Forms. Kila wakati fomu hii inapojazwa na taarifa kuhifadhiwa kwenye laha ya majibu ya fomu, uanachama mpya utaundwa katika mtandao wa Ultimate Multisite.

Katika Google Forms, tengeneza fomu yenye sehemu za kiwango cha chini zinazohitajika kuunda uanachama mpya katika mtandao.

<!-- Screenshot unavailable: Google Forms form with fields for creating a new membership -->

Sasa katika Zapier, tengeneza Zap mpya na uunganishe fomu iliyoundwa katika Google kupitia spreadsheet ambako data huhifadhiwa.

<!-- Screenshot unavailable: Zapier trigger configuration connecting to Google Forms spreadsheet -->

Imekamilika! Fomu ya Google Forms imeunganishwa na Zapier na iko tayari kuunganishwa na mtandao. Sasa tuendelee kwenye Kitendo kitakachotokana na Trigger ambayo Google Forms huanzisha kila wakati inapojazwa.

Tafuta app mpya ya Ultimate Multisite na uichague. Kwa aina hii ya Zap chagua chaguo la Register.

<!-- Screenshot unavailable: Zapier action selection showing Ultimate Multisite app with Register option -->

Baada ya hatua hii ya kwanza, chagua account itakayounganishwa na Zap hii.<!-- Screenshot unavailable: Zapier account connection step for Ultimate Multisite -->

Hii ndiyo sehemu nyeti zaidi ya mchakato mzima. Tunahitaji kulinganisha sehemu zilizotoka Google Forms na sehemu za kiwango cha chini zinazohitajika kwa endpoint ya usajili, kama ilivyoonyeshwa katika sehemu iliyotangulia ya makala hii.

Katika mfano huu, tunahitaji tu kusanidi jina la mtumiaji, barua pepe, nenosiri, jina na URL ya tovuti. Zilizobaki zinaachwa zikiwa zimeamuliwa awali ili uanachama wote unaozalishwa kwenye Google Forms hii ufuate muundo uleule wa bidhaa na hali.

<!-- Screenshot unavailable: Zapier field mapping between Google Forms and Ultimate Multisite register endpoint -->

Taarifa zikiwa zimesanidiwa, endelea kwenye jaribio la mwisho. Kwenye skrini ya mwisho unaweza kuona sehemu zote zitakazotumwa kwa endpoint, taarifa zake husika na sehemu zitakazotumwa zikiwa tupu.<!-- Screenshot unavailable: Zapier test screen showing all fields to be sent to the register endpoint -->

Jaribu Zap yako mpya na inapaswa kukamilika kwa mafanikio. Ikiwa hitilafu yoyote itatokea, kagua sehemu zote na ikiwa zinatumwa kwa usahihi. Kwa kuwa kuna taarifa nyingi, baadhi ya mambo yanaweza kupitwa bila kuonekana.

### Vigezo kamili vya endpoint {#complete-endpoint-parameters}

Huu hapa mwito kamili na uwezekano wote wa sehemu zinazoweza kutumwa.

"customer_id" : integer, "customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", }, "membership" : { "status" : "string", // one of "pending", "active", "trialing", "expired", "on-hold", "cancelled" "date_expiration" : "string", "date_trial_end" : "string", "date_activated" : "string", "date_renewed" : "string", "date_cancellation" : "string", "date_payment_plan_completed": "string", }, "products" : [1,2], "duration" : "string", "duration_unit" : "string", "discount_code" : "string", "auto_renew" : "boolean", "country" : "string", "currency" : "string", "payment" { "status" : "string", // one of "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "cancelled" }, "payment_method" : { "gateway" : "string", "gateway_customer_id" : "string", "gateway_subscription_id" : "string", "gateway_payment_id" : "string", }, "site" : { "site_url" : "string", "site_title" : "string", "publish" : "boolean", "template_id" : "string", }

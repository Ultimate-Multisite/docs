---
title: Sajili Kituo cha API
sidebar_position: 6
_i18n_hash: 33318472a834d15f5533362cddfeca20
---
# Kituo cha API ya Usajili cha Ultimate Multisite

Katika mwongozo huu, utajifunza jinsi ya kutumia kituo cha API /register cha Ultimate Multisite kuunda mchakato mzima wa kukaribisha mteja mpya kwenye mtandao wako na jinsi ya kufanya hivyo kwa kutumia Zapier.

Kituo hiki kinatumia njia ya POST na kinaitwa kupitia URL _**https://yoursite.com/wp-json/wu/v2/register**_. Katika ombi hili, michakato 4 itatekelezwa ndani ya mtandao wako:

  * Mtumiaji mpya wa WordPress au utambulisho wake kupitia user ID utaundwa.

  * Mteja mpya katika Ultimate Multisite au utambulisho wake kupitia customer ID utaundwa.

  * Tovuti mpya kwenye mtandao wa WordPress itaundwa.

  * Mwishowe, Uanachama mpya katika Ultimate Multisite utaundwa.

Kwa mchakato huu, utahitaji vitambulisho vyako vya API. Ili kuvipata, nenda kwenye paneli ya msimamizi wa mtandao wako, elekea **Ultimate Multisite > Settings** > **API & Webhooks,** na utafute sehemu ya API Settings.

![Sehemu ya API Settings katika Ultimate Multisite](/img/config/settings-api.png)  
Chagua **Enable API** na upate vitambulisho vyako vya API.

Sasa, hebu tuchunguze kituo hiki kisha tuunde kitendo cha usajili katika Zapier.

## Vigezo vya mwili wa kituo

Hebu tuangalie muhtasari wa taarifa za chini kabisa tunazohitaji kutuma kwenye kituo hiki. Mwishoni mwa makala hii, utapata ombi kamili.

### Mteja

Hizi ni taarifa zinazohitajika kwa mchakato wa kuunda Mtumiaji na Mteja wa Ultimate Multisite:

"customer_id" : integer

Inawezekana kutuma customer ID iliyoundwa katika mtandao wako. Ikiwa haikutumwa, taarifa zilizo hapa chini zitatumika kuunda mteja mpya na mtumiaji mpya wa WordPress. User ID pia inaweza kutumwa kwa njia ile ile kama customer ID.

"customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", },

### **Uanachama**

Taarifa pekee tunayohitaji ndani ya kitu hiki ni Hali ya Uanachama.

"membership" { "status" : "string", // moja ya "pending", "active", "trialing", "expired", "on-hold", "canceled" },

### **Bidhaa**

Bidhaa zinapewa safu yenye product ID 1 au zaidi kutoka kwenye mtandao wako. Kuwa makini, kituo hiki hakiundi bidhaa. Angalia nyaraka za Ultimate Multisite kuelewa vizuri kituo cha kuunda bidhaa.

**"products" : [1,2],**

### Malipo

Kama ilivyo kwa Uanachama, tunahitaji hali tu.

**"payment" { "status" : "string", // moja ya "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "canceled" },**

### Tovuti

Na kufunga mwili tunahitaji URL na Kichwa cha tovuti, vyote ndani ya kitu cha Site.

**"site" : { "site_url" : "string", "site_title" : "string" }**

Majibu ya kituo cha usajili yatakuwa safu yenye taarifa za uanachama uliounda hivi karibuni.

## Kuunda kitendo katika Zapier

Kwa kuanzishwa kwa kituo hiki kipya na imara zaidi cha kuunda akaunti, pia utapata kitendo kipya katika Zapier.

Je, unajua jinsi ya kutumia na kufurahia kila kitu ambacho toleo jipya la Zapier linatoa? Jifunze zaidi hapa. (link?)

### Kuunda kitendo

Ili kuonyesha vizuri jinsi ya kutumia kituo cha usajili na Zapier, hebu tuunde muunganisho na Google Forms. Kila wakati fomu hii inajazwa na taarifa zinahifadhiwa kwenye karatasi ya majibu ya fomu, uanachama mpya utaundwa kwenye mtandao wa Ultimate Multisite.

Katika Google Forms, tengeneza fomu yenye sehemu za chini kabisa zinazohitajika kuunda uanachama mpya kwenye mtandao.

<!-- Screenshot unavailable: Google Forms form with fields for creating a new membership -->

Sasa katika Zapier, tengeneza Zap mpya na uunganishe fomu iliyoundwa katika Google kupitia karatasi ya hesabu ambapo data inahifadhiwa.

<!-- Screenshot unavailable: Zapier trigger configuration connecting to Google Forms spreadsheet -->

Imekamilika! Fomu ya Google Forms imeunganishwa na Zapier na iko tayari kuunganishwa na mtandao. Sasa tuendelee na Kitendo kitakachosababishwa na Trigger ambayo Google Forms inaanzisha kila inapojazwa.

Tafuta programu mpya ya Ultimate Multisite na uichague. Kwa aina hii ya Zap chagua chaguo la Register.

<!-- Screenshot unavailable: Zapier action selection showing Ultimate Multisite app with Register option -->

Baada ya hatua hii ya kwanza, chagua akaunti itakayounganishwa na Zap hii.<!-- Screenshot unavailable: Zapier account connection step for Ultimate Multisite -->

Hii ndiyo sehemu nyeti zaidi ya mchakato mzima. Tunahitaji kuoanisha sehemu zilizotoka Google Forms na sehemu za chini kabisa zinazohitajika kwa kituo cha usajili, kama ilivyoonyeshwa katika sehemu iliyotangulia ya makala hii.

Katika mfano huu, tunahitaji tu kusanidi jina la mtumiaji, barua pepe, nenosiri, jina na URL ya tovuti. Mengine yameachwa yakiamuliwa mapema ili uanachama wote unaozalishwa kwenye Google Forms hii ufuate muundo sawa wa bidhaa na hali.

<!-- Screenshot unavailable: Zapier field mapping between Google Forms and Ultimate Multisite register endpoint -->

Baada ya kuweka taarifa, endelea na jaribio la mwisho. Kwenye skrini ya mwisho unaweza kuona sehemu zote zitakazotumwa kwenye kituo, taarifa zake husika na sehemu zitakazotumwa zikiwa tupu.<!-- Screenshot unavailable: Zapier test screen showing all fields to be sent to the register endpoint -->

Jaribu Zap yako mpya na inapaswa kukamilika kwa mafanikio. Ikiwa kosa lolote litatokea, angalia sehemu zote na ikiwa zinatumwa kwa usahihi. Kwa kuwa kuna taarifa nyingi, mambo mengine yanaweza kupita bila kutambuliwa.

### Vigezo kamili vya kituo

Hapa kuna ombi kamili na uwezekano wote wa sehemu zinazoweza kutumwa.

"customer_id" : integer, "customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", }, "membership" : { "status" : "string", // moja ya "pending", "active", "trialing", "expired", "on-hold", "cancelled" "date_expiration" : "string", "date_trial_end" : "string", "date_activated" : "string", "date_renewed" : "string", "date_cancellation" : "string", "date_payment_plan_completed": "string", }, "products" : [1,2], "duration" : "string", "duration_unit" : "string", "discount_code" : "string", "auto_renew" : "boolean", "country" : "string", "currency" : "string", "payment" { "status" : "string", // moja ya "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "cancelled" }, "payment_method" : { "gateway" : "string", "gateway_customer_id" : "string", "gateway_subscription_id" : "string", "gateway_payment_id" : "string", }, "site" : { "site_url" : "string", "site_title" : "string", "publish" : "boolean", "template_id" : "string", }

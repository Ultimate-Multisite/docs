---
title: Diiwaangeli API Endpoint
sidebar_position: 6
_i18n_hash: 8d9b47668bce413a2466cf2b1c37d2cf
---
# Endpoint-ka API-ga Ultimate Multisite {#the-ultimate-multisite-register-api-endpoint}

Ku qoraalkan kan, waxaad baranaysaa sida loo isticmaalo endpoint-ka /register ee Ultimate Multisite si aad u samayso dhammaan habka soo dhowrinta macmiil cusub oo ku jira shabakadahaaga, iyo sida aad u samayn karto tani iyadoo la isticmaalayo Zapier.

Endpoint-ku wuxuu isticmaalaa habka POST (POST method) waxaana loo yeero URL-ka _**https://yoursite.com/wp-json/wu/v2/register**_. Marka aad ku wacdo, 4 hab ayaa ka fulin doona shabakadahaaga:

  * User cusub oo WordPress ah ama aqoonsigiisa iyadoo la isticmaalayo user ID-ga ayaa la abuuri doona.

  * Macmiil cusub oo Ultimate Multisite ah ama aqoonsigiisa iyadoo la isticmaalayo customer ID-ga ayaa la abuuri doona.

  * Website cusub oo ku jira shabakadaha WordPress-ka ayaa la abuuri doona.

  * Ugu dambayntii, Xubnimo (Membership) cusub oo Ultimate Multisite ah ayaa la abuuri doona.

Si loo fuliyo habkan, waxaad u baahan tahay aqoonsiga API-gaaga. Si aad u hesho, tag dashboard-ka maamulka shabakadahaaga, tag **Ultimate Multisite > Settings** > **API & Webhooks**, oo raadi qaybta API Settings.

![API Settings section in Ultimate Multisite](/img/config/settings-api.png)

Waa kan aragti dhammaystiran ee bogga API settings:

![API settings full page](/img/config/settings-api-full.png)

Dooro **Enable API** oo hesho aqoonsiga API-gaaga.

Hadda, aan si qoto dheer uga baranno endpoint-ka ka dibna waxaan samayn doona ficil lagu soo dhowrinta (registration action) Zapier-ka.

## Parameters-ka body-ga endpoint-ka {#endpoint-body-parameters}

Aan aragno macluumaadka ugu yar ee aan u dirno endpoint-ka. U dhamaan maqaalka, waxaad ka heli doontaa wicitaan (call) oo dhammaystiran.

### Macmiil (Customer) {#customer}

Tani waa macluumaadka loo baahan yahay habka samaynta User-ka iyo Macmiilka Ultimate Multisite:

"customer_id" : integer

Waxaa suurtagal ah inaad u dirto ID-ga macmiilka ee aad samaysay shabakadahaaga. Haddii aan la soo gudbiyo, macluumaadka hoose ayaa loo isticmaali doonaa in lagu abuuro macmiil cusub iyo isticmaalaya WordPress cusub. Waxaad sidoo kale u dir kartaa ID-ga isticmaalaya sida ID-ga macmiilka.

"customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", },

### **Xubnaha (Membership)** {#membership}

Macluumaadka kaliya ee aan u baahanahay gudaha qoraalka ah waa Xaaladda Xubnaha.

"membership" { "status" : "string", // mid ka mid ah "pending", "active", "trialing", "expired", "on-hold", "canceled" },

### **Waxyaabaha (Products)** {#products}

Waxyaabaha waxaa loo siiya array oo leh ID waxyaabo hal ama badan oo ka mid ah shabakadahaaga. Taxniir, endpoint-kan ma abuuro waxyaabo cusub. Hubi dukumentiga Ultimate Multisite si aad si fiican u fahanto endpoint-ka abuurista waxyaabaha.

**"products" : [1,2],**

### Lacagta (Payment) {#payment}

Sida Xubnaha, kaliya xaaladda ayaa u baahanahay.

**"payment" { "status" : "string", // mid ka mid ah "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "canceled" },**

### Goobta (Site) {#site}

Waxaan sidoo kale u baahanahay URL-ka goobta iyo Magaca goobta si aan u xirno jidhka.

**"site" : { "site_url" : "string", "site_title" : "string" }**

Natiijada endpoint-ka register-ka waxay noqon doontaa array leh macluumaadka xubnaha cusub ee la abuuro.

## Abuurista fulin (action) ku Zapier {#creating-an-action-in-zapier}

Marka la soo bandhigay endpoint-ka cusub iyo mid xooggan oo lagu abuuro akoon cusub, waxaad sidoo kale heli doontaa fulin cusub oo ku jira Zapier.

Ma ogaataa sida aad u isticmaali karto oo aad uga faa'iidaysid dhammaan waxyaabaha ay nooc cusub ee Zapier-ka bixiyo? Waxay ka barato halkan. (link?)

### Abuurista fulin {#creating-an-action}

Si aan siin sida aad u isticmaali karto registration endpoint-kaaga (endpoint) iyo Zapier, aan abuurno isdhaafid (integration) la Google Forms ku samaynayno. Marka qoraalka form-kaas la buuxiyo oo macluumaadka la kaydiyo sheet-ka jawaabta form-ka, hal xubnood cusub ayaa lagu abuuri doonaa shirkadda Ultimate Multisite network-ka.

Google Forms-ka ku samayso form oo leh meel walba oo lagama maarmaan ah si loo abuuro xubnood cusub ee network-ka.

<!-- Screenshot unavailable: Google Forms form with fields for creating a new membership -->

Hadda, Zapier-ka ku samayso Zap cusub oo isdhaafid (trigger) la Google-ka ku xiray sheet-ka halkaas oo macluumaadka la kaydiyo.

<!-- Screenshot unavailable: Zapier trigger configuration connecting to Google Forms spreadsheet -->

Waxaad dhammaystirtay! Form-ka Google Forms waa la xiray Zapier, waxaana diyaar u ah in lagu dhexgalo network-ka. Hadda aan u gudubno tallaabada (Action) ee ka dhalata isdhaafidda (Trigger) ee Google Forms markasta la buuxiyo.

Raadi app-ka Ultimate Multisite cusub oo dooro. Si loogu talagalay noockan Zap, dooro ikhtiyaarka Register.

<!-- Screenshot unavailable: Zapier action selection showing Ultimate Multisite app with Register option -->

Ka dib tallaabada ugu horreysaasi, dooro account-ka (hisaabta) ee la xiri doono Zap-kan.<!-- Screenshot unavailable: Zapier account connection step for Ultimate Multisite -->

Tani waa qaybta ugu dareenka badan oo dhan. Waxaan u baahanahay inaan isku dhignaa meel walba ka yimid Google Forms iyo meel walba oo lagama maarmaan ah endpoint-ka register-ka, sida ku cad qaybta hore ee maqaalkani.

Tusaale ahaan, waxaan kaliya u baahanahay inaan dejino username-ka (magaca isticmaalka), email-ka, password-ka, magaca iyo URL-ka website-ka. Inta kale waa la go'aamiyay hadda si dhammaan xubnoollada laga abuuro Google Forms ay raacayaan qaabka isku midka ah ee alaabta iyo mustaqbalka (status).

<!-- Sawirka aan la heli karo: Map-ka Zapier ee u dhexeeya Google Forms iyo endpoint-ka register ee Ultimate Multisite -->

Marka aad macluumaadka diyaarisay, tallaabo ugu dambaysa ku sii socdo. Screen-ka ugu dambeeya waxaad arki kartaa dhammaan fields-ka (xog-bixinta) ee la dirayo endpoint-ka, macluumaadkooda iyo fields-ka oo la dirayo faa'iido la'aan.<!-- Sawirka aan la heli karo: Screen-ka testiga Zapier ee muujinaya dhammaan fields-ka la dirayo endpoint-ka register -->

Test Zap-ka cusub ee aad samaysay, waa inuu si guuleystiran u dhammaystiro. Haddii ay jiro qalad, hubi dhammaan fields-ka oo haddii ay si sax ah la dirayo. Maadaama macluumaadka badan yahay, qaar ka mid ah waxyaabaha lagaa arki karin.

### Parameters-ka endpoint-ka oo dhammaystiran {#complete-endpoint-parameters}

Waa kan wicitaanka oo dhan iyo dhammaan suurtagalnimada fields-ka la dirayo.

"customer_id" : integer, "customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", }, "membership" : { "status" : "string", // mid ka mid ah "pending", "active", "trialing", "expired", "on-hold", "cancelled" "date_expiration" : "string", "date_trial_end" : "string", "date_activated" : "string", "date_renewed" : "string", "date_cancellation" : "string", "date_payment_plan_completed": "string", }, "products" : [1,2], "duration" : "string", "duration_unit" : "string", "discount_code" : "string", "auto_renew" : "boolean", "country" : "string", "currency" : "string", "payment" { "status" : "string", // mid ka mid ah "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "cancelled" }, "payment_method" : { "gateway" : "string", "gateway_customer_id" : "string", "gateway_subscription_id" : "string", "gateway_payment_id" : "string", }, "site" : { "site_url" : "string", "site_title" : "string", "publish" : "boolean", "template_id" : "string", }

---
title: API Endpoint-a emateko
sidebar_position: 6
_i18n_hash: 8d9b47668bce413a2466cf2b1c37d2cf
---
# Ultimate Multisite Register API-ko Endpointa {#the-ultimate-multisite-register-api-endpoint}

Hauzuaren tutorial-an, Ultimate Multisite /register API endpointa erabiliziek, network-ek berri kliunturari (customer) irudi behar duen guztia bereizten eta Zapier-rekin ondo egin dezakezu.

Endpointa POST metodoa erabiltzen du eta URL-a da _**https://yoursite.com/wp-json/wu/v2/register**_. Hau eskerrekin, network-ek handiagoan 4 prozesu egiteko dira:

  * Berri WordPress userra edo user ID-arekin identifikazioa egin dezakezu.

  * Ultimate Multisite-an berri Customerra edo customer ID-arekin identifikazioa egin dezakezu.

  * WordPress network-an berri site bat ematen daitezke.

  * Aurrera, Ultimate Multisite-an berri Membership bat ematen daitezke.

Hau prozesuaren bitartean, API credentialsak behar izango duzu. Horrek jartzeko, network admin panelera jarraitu, **Ultimate Multisite > Settings** > **API & Webhooks**, eta API Settings seksioa bilatu.

![API Settings seksio Ultimate Multisite-an](/img/config/settings-api.png)

API settings-aren burokizkoa da:

![API settings full page](/img/config/settings-api-full.png)

**Enable API** (API-a aktiboa egin) aukeratu eta API credentialsak hartu.

Aurrez, endpointa eta Zapier-rekin registrazio aksio bat ezartu beharko dugu.

## Endpoint body parametrak {#endpoint-body-parameters}

Endpointa bidali behar duen minimalki informazioa zer da, irudi ezarri du. Hau artikuluaren amaieran, eskerrekin, guztia aurkitu duzu.

### Customer {#customer}

Hau da Userra eta Ultimate Multisite-an Customerra emateko prozesuaren beharrezkoa den informazioa:

"customer_id" : integer

Ez dago erantzuna emateko, zein irudi da irudien bat. Hau da irudiena:

"customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", },

### **Membership** {#membership}

Hau objektu horretan Membership Statusa (estatusa) dela garrantzia da.

"membership" { "status" : "string", // "pending", "active", "trialing", "expired", "on-hold", "canceled" bat da }

### **Products** {#products}

Produktoak irudien array batean, zein irudien bat edo gehiago dira, ematen da. Atzaintu, hau ez du produktoiak sortzen duen endpointa. Produkto sortzeko endpointa lehen eraldia Ultimate Multisitearen dokumentazioan jartzi eta mehatzeko.

**"products" : [1,2],**

### Payment {#payment}

Membership-like batean, statusa dela garrantzia da.

**"payment" { "status" : "string", // "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "canceled" bat da }**

### Site {#site}

Hau objektu horretan sitearen URL-a eta Tituluak (Title) dela garrantzia da.

**"site" : { "site_url" : "string", "site_title" : "string" }**

Register endpoint-ek itzultzea, leikitu membership informazio bat array batean izango da.

## Zapier-ean akzioa sortzea {#creating-an-action-in-zapier}

Hau irudien berragarri eta garrantzitsuak akun sortzeko endpointa introduktatuz, Zapier-an akzio berria ere erabiliko duzu.

Zapier-ren bera berragarri bertsioaren zerbait erabiltzen eta onitzten jakin duzu? Hiera laitzen dut. (link?)

### Akzio sortzea {#creating-an-action}

Zapier-repertua Google Forms-arekin Ultimate Multisite-n erregistro endpointa erabiltzen jakinarazten besteak irekitzeko, Google Formsarekin integrazio bat ez duzu. Horrek formua pleratu eta informazioa formaren zein-datu-listan saldatuenean, Ultimate Multisite-n network-ean membership berria emateko da.

Google Forms-an, network-ean membership berria emateko beharrezkoa den minimo lekuak dituzten formua eginez.

<!-- Screenshot unavailable: Google Forms form with fields for creating a new membership -->

Aurrera Zapier-an, Zap berria eginez eta datuak saldatu behartu duen spreadsheet-eko formua Google-rekin konektatuta eginez.

<!-- Screenshot unavailable: Zapier trigger configuration connecting to Google Forms spreadsheet -->

Maiz egin! Google Forms formua Zapier-rekin konektatuta dago eta network-arekin integratzeko lehenengo dauna. Aurreratu, Google Forms-ek pleratuenean emateko Akitera (Trigger) eragiten Action-a (Aksioa).

Ultimate Multisite aplikazioa berria aurkitu eta desebutatu. Horrezko Zap-erbiari, Register opsioa desebutatu.

<!-- Screenshot unavailable: Zapier action selection showing Ultimate Multisite app with Register option -->

Horren lehen urtsuaren ondoren, Zap-erbiari konektatuko kontua desebutatu.<!-- Screenshot unavailable: Zapier account connection step for Ultimate Multisite -->

Hau da burokaren guztiaren maila sensitiboa. Google Forms-ek iruditutako lekuak, aipatutako artikuluaren lehen sezazioan erakusten duen register endpoint-eko minimo lekuakarekin bat egin behar dugu.

Hauko inguruko, username, email, password, irudi eta webgunearen URL-a konfiguratzea ez duzu. Besteak aukera daidetu dago, nahiz eta Google Forms-ek emateko membership guztiek berrek produktua eta estatusarekin bat eginin.

<!-- Ekinakizuna ez daiko: Google Forms eta Ultimate Multisite register endpoint-aren arteko Zapier informazioa mapatu behar diren testu-grafikoa ez dago -->

Informazioak konfiguratuta jakin ditzakezu, egindua azpiegitura (test) iritu. Azpiegitura lehen ekranean, endpoint-era göndetzeko dauden guztia field-ek, informazioa eta eragiketa bat edo ez dagoen field-ek ikusi nahi duzu.<!-- Ekinakizuna ez dago: register endpoint-era göndetzeko dauden field-ek guztiak ikusten duen Zapier testu-grafikoa -->

Testu iritu zapiaren (Zap) eta ondo funtzionatu behar du. Erreur bat jakin dugu, guztietan field-ek ikusi eta jartzen duen eragiketa batek ondo dagoela. Informazioa asko da, gertatzen dira ez aurkitu beharko dituen besteak.

### Endpoint parametrik guztia {#complete-endpoint-parameters}

Hona da eskatzeko guztia eta göndetzeko lehen field-ek guztiak.

"customer_id" : integer, "customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", }, "membership" : { "status" : "string", // "pending", "active", "trialing", "expired", "on-hold", "cancelled" bat da, "date_expiration" : "string", "date_trial_end" : "string", "date_activated" : "string", "date_renewed" : "string", "date_cancellation" : "string", "date_payment_plan_completed": "string", }, "products" : [1,2], "duration" : "string", "duration_unit" : "string", "discount_code" : "string", "auto_renew" : "boolean", "country" : "string", "currency" : "string", "payment" { "status" : "string", // "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "cancelled" bat da }, "payment_method" : { "gateway" : "string", "gateway_customer_id" : "string", "gateway_subscription_id" : "string", "gateway_payment_id" : "string", }, "site" : { "site_url" : "string", "site_title" : "string", "publish" : "boolean", "template_id" : "string", }

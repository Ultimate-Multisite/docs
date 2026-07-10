---
title: Ilista ang API Endpoint
sidebar_position: 6
_i18n_hash: 8d9b47668bce413a2466cf2b1c37d2cf
---
# Ang Ultimate Multisite Register API endpoint {#the-ultimate-multisite-register-api-endpoint}

Sa tutorial nga niini, makat-onan nimo unsaon paggamit sa Ultimate Multisite /register API endpoint para himuon ang tibuok proseso sa onboarding para sa bag-ong customer sa imong network ug unsaon kini pagbuhat gamit ang Zapier.

Ang endpoint nag-gamit sa POST method ug gitawag pinaagi sa URL nga _**https://yoursite.com/wp-json/wu/v2/register**_. Niining tawag, 4 ka proseso ang himuon sulod sa imong network:

  * Usa ka bag-ong WordPress user o ang pag-identify niini pinaagi sa user ID ma-create.

  * Usa ka bag-ong Customer sa Ultimate Multisite o ang pag-identify niini pinaagi sa customer ID ma-create.

  * Usa ka bag-ong site sa WordPress network ma-create.

  * Sa katapusan, usa ka bag-ong Membership sa Ultimate Multisite ma-create.

Para niining proseso, kinahanglan nimo ang imong API credentials. Aron makakuha niini, adto sa imong network admin panel, maglakaw ngadto sa **Ultimate Multisite > Settings** > **API & Webhooks**, ug pangitaa ang seksyon nga API Settings.

![API Settings section in Ultimate Multisite](/img/config/settings-api.png)

Ania ang tibuok tan-aw sa API settings page:

![API settings full page](/img/config/settings-api-full.png)

Piliha ang **Enable API** ug kuhaon ang imong API credentials.

Karon, atong suwayon ang endpoint ug dayon maghimo og registration action sa Zapier.

## Endpoint body parameters {#endpoint-body-parameters}

Maghatag kita og overview sa minimum nga impormasyon nga kinahanglan natong ipadala sa endpoint. Sa katapusan niining article, makita nimo ang tibuok tawag (call).

### Customer {#customer}

Kini mao ang impormasyon nga gikinahanglan para sa proseso sa paghimo sa User ug Ultimate Multisite Customer:

"customer_id" : integer

Mahimo ba nga ipadala ang customer ID nga gihimo sa imong network sa customer? Kung wala kini gi-submit, gamiton ang impormasyon sa ubos aron maghimo og bag-ong customer ug bag-ong WordPress user. Mahimo usab ipadala ang user ID sa parehas nga paagi sama sa customer ID.

"customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", },

### **Membership** {#membership}

Ang tanging impormasyon nga kinahanglan nato sulod niini kay Membership Status.

"membership" { "status" : "string", // usa sa "pending", "active", "trialing", "expired", "on-hold", "canceled" }

### **Products** {#products}

Ang mga produkto gihatagan og array nga adunay 1 o labaw pa nga product ID gikan sa imong network. Bantayi, kini nga endpoint dili maghimo og mga produkto. Siguraduhon nga mas masabtan nimo ang product creation endpoint pinaagi sa paglingkawa sa dokumentasyon sa Ultimate Multisite.

**"products" : [1,2],**

### Payment {#payment}

Ingon sa Membership, kinahanglan lang nato ang status.

**"payment" { "status" : "string", // usa sa "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "canceled" }**

### Site {#site}

Ug aron tapuson nato, kinahanglan usab nato ang URL ug Title sa site sulod sa Site object.

**"site" : { "site_url" : "string", "site_title" : "string" }**

Ang pagbalik sa register endpoint magin usa ka array nga adunay bag-ong impormasyon sa membership.

## Paghimo og action sa Zapier {#creating-an-action-in-zapier}

Uban sa pagpaila niining bag-o ug mas lig-on nga account creation endpoint, makakita usab ka og bag-ong action sa Zapier.

Nahibalo ka ba unsaon paggamit ug pag-enjoy sa tanan nga ginaalok sa bag-ong bersyon sa Zapier? Magbasa pa diri. (link?)

### Paghimo og action {#creating-an-action}

Para mas maipaliwanag kung paano gamiton ang registration endpoint sa Zapier, maghimo kita og integration uban sa Google Forms. Kada higayon nga mapuno kining form ug ang impormasyon i-save sa answer sheet sa form, usa ka bag-ong membership ang himuon sa Ultimate Multisite network.

Sa Google Forms, paghimo og form nga adunay pinaka gamay nga mga field nga gikinahanglan para makakabukod og bag-ong membership sa network.

<!-- Screenshot unavailable: Google Forms form with fields for creating a new membership -->

Karon sa Zapier, maghimo og bag-ong Zap ug i-connect ang nahimong form sa Google pinaagi sa spreadsheet diin ang data gi-save.

<!-- Screenshot unavailable: Zapier trigger configuration connecting to Google Forms spreadsheet -->

Tapos na! Ang Google Forms form konektado na sa Zapier ug andam na nga i-integrate sa network. Karon, padayon ta sa Action nga mahitabo gikan sa Trigger nga gi-trigger sa Google Forms kada mapuno kini.

Pangitaa ang bag-ong Ultimate Multisite app ug piliha kini. Para ni nga klase sa Zap, pilia ang Register option.

<!-- Screenshot unavailable: Zapier action selection showing Ultimate Multisite app with Register option -->

Human ni unang lakang, piliha ang account nga i-connect sa niining Zap.<!-- Screenshot unavailable: Zapier account connection step for Ultimate Multisite -->

Kini ang pinaka sensitibo nga bahin sa tibuok proseso. Kinahanglan natong itugma ang mga field nga gikan sa Google Forms uban sa minimum nga mga field nga gikinahanglan para sa register endpoint, sama sa gipakita sa miaging seksyon niining article.

Ni niini nga example, kinahanglan lang nato i-configure ang username, email, password, ngalan ug URL sa website. Ang uban na kay gi-determine na aron ang tanang membership nga gihimo pinaagi niining Google Forms mosunod sa parehas nga pattern sa produkto ug status.

<!-- Screenshot unavailable: Zapier field mapping between Google Forms and Ultimate Multisite register endpoint -->

Kung na-set na ninyo ang impormasyon, padayon sa katapusang pagsulay. Sa katapusang screen makita ninyo tanan nga mga field nga ipadala sa endpoint, ang ilang mga impormasyon ug ang mga field nga ipadala nga walay sulod.<!-- Screenshot unavailable: Zapier test screen showing all fields to be sent to the register endpoint -->

Sulayi ang inyong bag-ong Zap ug kinahanglan kini molihok og malampuson. Kung adunay bisan unsang sayop, tan-awa ang tanang field ug kung tama ba kini nga ipadala. Tungod kay daghan kaayo og impormasyon, mahimong dili matipig ang pipila butang.

### Kinatibuk-ang mga parameter sa endpoint {#complete-endpoint-parameters}

Ania ang kompleto nga tawag ug tanan nga posibilidad sa mga field nga mahimong ipadala.

"customer_id" : integer, "customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", }, "membership" : { "status" : "string", // usa sa "pending", "active", "trialing", "expired", "on-hold", "cancelled" "date_expiration" : "string", "date_trial_end" : "string", "date_activated" : "string", "date_renewed" : "string", "date_cancellation" : "string", "date_payment_plan_completed": "string", }, "products" : [1,2], "duration" : "string", "duration_unit" : "string", "discount_code" : "string", "auto_renew" : "boolean", "country" : "string", "currency" : "string", "payment" { "status" : "string", // usa sa "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "cancelled" }, "payment_method" : { "gateway" : "string", "gateway_customer_id" : "string", "gateway_subscription_id" : "string", "gateway_payment_id" : "string", }, "site" : { "site_url" : "string", "site_title" : "string", "publish" : "boolean", "template_id" : "string", }

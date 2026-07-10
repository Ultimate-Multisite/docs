---
title: Kuthandiza API Endpoint
sidebar_position: 6
_i18n_hash: 8d9b47668bce413a2466cf2b1c37d2cf
---
# API ya Ultimate Multisite Register {#the-ultimate-multisite-register-api-endpoint}

M'mwa m'mwa, mu tutorial uliyipeza kuti muli ndi chifukwa chomwe mudzindikire kuti muli bwanji muli ndi kukhazikira njira yomwe imapangidwa ndi Ultimate Multisite /register API endpoint. Kodi muli bwanji muli ndi Zapier?

Endpoint ili limakwaniritsa POST method ndipo limakwera ndi URL ya _**https://yoursite.com/wp-json/wu/v2/register**_. M'moyo wopereka wina, zinthu 4 zimapangidwa m'njira yanu:

  * Muli ndi user woyamba wa WordPress kapena kukhazikira kwawo monga muli ndi user ID.

  * Muli ndi Customer woyamba m'Ultimate Multisite kapena kukhazikira kwawo monga muli ndi customer ID.

  * Kodi muli ndi site woyamba pa network ya WordPress.

  * M'moyo wopereka, muli ndi Membership woyamba m'Ultimate Multisite.

Poyenera iwo njira, muli ndi API credentials yanu. Kuti mwagwira izi, ndi mutho muli pa admin panel yanu ya network, muli pa **Ultimate Multisite > Settings** > **API & Webhooks**, ndipo muli ndi sehemu ya API Settings.

![API Settings section in Ultimate Multisite](/img/config/settings-api.png)

Iliyi ndiyo chitsanzo cha tsiku lomwe muli pa API settings:

![API settings full page](/img/config/settings-api-full.png)

Muli ndi **Enable API** ndipo mwagwira API credentials yanu.

Nkhawa, tili ndi kukhazikira endpoint ndipo tikupatsa action ya registration m'Zapier.

## Parameters za body ya endpoint {#endpoint-body-parameters}

Tili ndi chitsanzo cha zinthu zofunika kwambiri zomwe tikufunsa kuti tipangidwe ku endpoint. M'moyo wopereka, mudzindikira tsiku lomwe muli ndi call yomwe yomwe.

### Customer {#customer}

Iyi ndi mawu omwe ali kukhazikira kuti tipangidwe User ndi Customer wa Ultimate Multisite:

"customer_id" : integer

Kodi yomwe kuli wosha ID wa mwanawo ulioperekera mu mtandawuni wanu. Ngati osalira, ilingaliitsozo lili ndi chiyembekeza mwana wosha ndi user wosha wa WordPress. User ID imatha kusangalala monga Customer ID.

"customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", },

### **Membership** {#membership}

Chinthu cha m'malo chiyembekeza ndi Membership Status.

"membership" { "status" : "string", // monga "pending", "active", "trialing", "expired", "on-hold", "canceled" },

### **Products** {#products}

Products zimaperekedwa array ndi ID ya product yomwe ndi 1 kapena zambiri ku mtandawuni wanu. Kuti mwayi, endpoint ili liyenera kuti mwayi kuti muwone bwino endpoint la kupanga products. Ngati mukuwona bwanji endpoint la kupanga products, mwayi Ultimate Multisite.

**"products" : [1,2],**

### Payment {#payment}

Monga ndi Membership, tikufuna status chake.

**"payment" { "status" : "string", // monga "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "canceled" },**

### Site {#site}

Kuti tikhazikire, tikufuna URL ndi Titolo la site lili m'malo ndani ya Site object.

**"site" : { "site_url" : "string", "site_title" : "string" }**

Mwayi wopereka (return) wa endpoint la register ulipereka array lomwe ndi membership info yomwe yaliyo yosha.

## Kupanga action m'Zapier {#creating-an-action-in-zapier}

Ndi chifukwa cha kuperekera endpoint wosha ndi wamphamvu wopanga account, mudzakhala ndi action yosha m'Zapier.

Mukuona bwanji mwayi ndi kusangalala ndi zomwe Zapier ya nyengo imapereka? Ngati mukuona bwanji, mwayi pano. (link?)

### Kupanga action {#creating-an-action}

Kuti kuti mukuona bwanji momwe mungakuseka registration endpoint ndi Zapier? Tiyenera kupanga integration ndi Google Forms. Kuti nthawi zonse imene form ili yendweridwa ndipo maphunziro ali kukhazikidwa m'answer sheet ya form, kukhala membership watsopano mudzakhazikidwa m'Ultimate Multisite network.

M'Google Forms, panga form ndi fields zosangalatsa kwambiri kuti muphatheza membership watsopano m'network.

<!-- Screenshot is not available: Google Forms form with fields for creating a new membership -->

Ngati pano m'Zapier, panga Zap watsopano ndikone form iliyonse m'Google monga spreadsheet imene data ili likukhazikidwa.

<!-- Screenshot is not available: Zapier trigger configuration connecting to Google Forms spreadsheet -->

Kukonza! Form ya Google Forms imene yikone ndi Zapier ndipo ikokhazikidwa kuti ikone ndi network. Ngati pano tikhale m'Action yomwe idzakhala poyenera kuposa Trigger yomwe Google Forms imene yendweridwa nthawi zonse imene ili yendweridwa.

Phatira Ultimate Multisite app watsopano ndikupereka. Kuti ndi Zap yomwe likufotokozera m'mwayi woposa, pafupitsa option ya Register.

<!-- Screenshot is not available: Zapier action selection showing Ultimate Multisite app with Register option -->

Pambuyo pa nthawi yomwe imene, pofunsa account yomwe idzakone ndi Zap ili.<!-- Screenshot is not available: Zapier account connection step for Ultimate Multisite -->

Iyi ndi monga chinthu chomwe chimene chofunika kwambiri m'moyo wosonyeza wosonyeza wosonyeza wosonyeza wosonyeza. Tikufunika kupereka fields zomwe zali kuyenera kuchokera m'Google Forms ndi fields zosangalatsa kwambiri kuti register endpoint, monga momwe sipatapo m'mwayi woposa wa m'article ili.

M'example ili, tikufunika kukhazikitsa username, email, password, name, nd URL ya website. Zina zina zimene zali zikukhazikidwa m'moyo wosonyeza kuti zonse membership zomwe zikupanga m'Google Forms zidzakhale ndi pattern yoperekedwa ndi status.

<!-- Screenshot unavailable: Zapier field mapping between Google Forms and Ultimate Multisite register endpoint -->

Ndikupanga m'ndau, ndapita ku chitsogo chake. Ku chitsogo chake, muli mufufuza zonse za fields zomwe zidapereka ku endpoint, zolemba lero ndi zinthu zomwe zidapereka m'moyo wosavuta.<!-- Screenshot unavailable: Zapier test screen showing all fields to be sent to the register endpoint -->

Maphunza zapwiri (Zap) wanu ndikufufuze, ndipo kudzipereka kwake kuli ndi kuyendera bwino. Ngati muli ndi mavuto, muli mufufuza zonse za fields kuti zikupereke bwino. Kukhala ndi zinthu zingapo zambiri, chidziwitsa zomwe sikuyenera kupeza.

### Zinthu zonse za endpoint parameters {#complete-endpoint-parameters}

Iyi ndi kulemba komanso zonse zomwe mungupereke.

"customer_id" : integer, "customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", }, "membership" : { "status" : "string", // monga "pending", "active", "trialing", "expired", "on-hold", "cancelled" "date_expiration" : "string", "date_trial_end" : "string", "date_activated" : "string", "date_renewed" : "string", "date_cancellation" : "string", "date_payment_plan_completed": "string", }, "products" : [1,2], "duration" : "string", "duration_unit" : "string", "discount_code" : "string", "auto_renew" : "boolean", "country" : "string", "currency" : "string", "payment" { "status" : "string", // monga "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "cancelled" }, "payment_method" : { "gateway" : "string", "gateway_customer_id" : "string", "gateway_subscription_id" : "string", "gateway_payment_id" : "string", }, "site" : { "site_url" : "string", "site_title" : "string", "publish" : "boolean", "template_id" : "string", }

---
title: Bhalisa i-API Endpoint
sidebar_position: 6
_i18n_hash: 8d9b47668bce413a2466cf2b1c37d2cf
---
# Isiphelo se-API se-Register se-Ultimate Multisite {#the-ultimate-multisite-register-api-endpoint}

Kule tutorial, uza kufunda indlela yokusebenzisa isiphelo se-API se-Ultimate Multisite /register ukuze udale yonke inkqubo yokungenisa umthengi omtsha kwinethiwekhi yakho, kunye nendlela yokwenza oko nge-Zapier.

Isiphelo sisebenzisa indlela ye-POST kwaye sibizwa nge-URL _**https://yoursite.com/wp-json/wu/v2/register**_. Kolu bizo, iinkqubo ezi-4 ziya kuqhutywa ngaphakathi kwinethiwekhi yakho:

  * Umsebenzisi omtsha we-WordPress okanye ukuchongwa kwakhe nge-ID yomsebenzisi kuya kudalwa.

  * Umthengi omtsha kwi-Ultimate Multisite okanye ukuchongwa kwakhe nge-ID yomthengi kuya kudalwa.

  * Isiza esitsha kwinethiwekhi ye-WordPress siya kudalwa.

  * Ekugqibeleni, ubuLungu obutsha kwi-Ultimate Multisite buya kudalwa.

Kule nkqubo, uya kufuna iziqinisekiso zakho ze-API. Ukuze uzifumane, yiya kwiphaneli yolawulo lwenethiwekhi yakho, uye ku-**Ultimate Multisite > Izicwangciso** > **API & Webhooks,** uze ukhangele icandelo leZicwangciso ze-API.

![Icandelo leZicwangciso ze-API kwi-Ultimate Multisite](/img/config/settings-api.png)

Nanku umbono opheleleyo wephepha lezicwangciso ze-API:

![Iphepha elipheleleyo lezicwangciso ze-API](/img/config/settings-api-full.png)

Khetha **Vula i-API** uze ufumane iziqinisekiso zakho ze-API.

Ngoku, masiphonononge isiphelo size emva koko sidale isenzo sobhaliso kwi-Zapier.

## Iiparamitha zomzimba wesiphelo {#endpoint-body-parameters}

Masibe nesishwankathelo solwazi oluncinane ekufuneka siluthumele kwisiphelo. Ekupheleni kweli nqaku, uya kufumana ubizo olupheleleyo.

### Umthengi {#customer}

Olu lulwazi oluyimfuneko kwinkqubo yokudala uMsebenzisi kunye noMthengi we-Ultimate Multisite:

"customer_id" : integer

Kuyenzeka ukuthumela i-ID yomthengi edalwe kwinethiwekhi yakho. Ukuba ayingeniswanga, ulwazi olungezantsi luya kusetyenziswa ukudala umthengi omtsha kunye nomsebenzisi omtsha we-WordPress. I-ID yomsebenzisi nayo ingathunyelwa ngendlela efanayo ne-ID yomthengi.

"customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", },

### **UbuLungu** {#membership}

Ulwazi kuphela esiludingayo ngaphakathi kwale object yiSimo soBuLungu.

"membership" { "status" : "string", // one of "pending", "active", "trialing", "expired", "on-hold", "canceled" },

### **Iimveliso** {#products}

Iimveliso zinikwa njenge-array ene-ID yemveliso enye okanye ezingaphezulu ezivela kwinethiwekhi yakho. Qaphela, esi siphelo asidali iimveliso. Jonga amaxwebhu e-Ultimate Multisite ukuze uqonde ngcono isiphelo sokudala imveliso.

**"products" : [1,2],**

### Intlawulo {#payment}

NjengoBuLungu, sifuna kuphela isimo.

**"payment" { "status" : "string", // one of "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "canceled" },**

### Isiza {#site}

Kwaye ukuvala umzimba sifuna i-URL kunye neSihloko sesiza, zombini ngaphakathi kwe-object yeSiza.

**"site" : { "site_url" : "string", "site_title" : "string" }**

Impendulo yesiphelo se-register iya kuba yi-array enolwazi lobulungu olusandula ukudalwa.

## Ukudala isenzo kwi-Zapier {#creating-an-action-in-zapier}

Ngokwaziswa kwesi siphelo sitsha nesomeleleyo ngakumbi sokudala account, uya kufumana nesenzo esitsha kwi-Zapier.

Ngaba uyayazi indlela yokusebenzisa nokonwabela yonke into enikwa yinguqulelo entsha ye-Zapier? Funda ngakumbi apha. (link?)

### Ukudala isenzo {#creating-an-action}

Ukuze sibonise ngcono indlela yokusebenzisa isiphelo sobhaliso nge-Zapier, masidale udibaniso ne-Google Forms. Ngalo lonke ixesha le fomu igcwaliswa kwaye ulwazi lugcinwa kwiphepha leempendulo lefomu, ubuLungu obutsha buya kudalwa kwinethiwekhi ye-Ultimate Multisite.

Kwi-Google Forms, yenza ifomu eneemimandla ezincinane eziyimfuneko ukudala ubuLungu obutsha kwinethiwekhi.

<!-- Umfanekiso wesikrini awufumaneki: Ifomu ye-Google Forms eneemimandla zokudala ubuLungu obutsha -->

Ngoku kwi-Zapier, yenza i-Zap entsha uze uqhagamshele ifomu edaliweyo ku-Google nge-spreadsheet apho idatha igcinwa khona.

<!-- Umfanekiso wesikrini awufumaneki: Uqwalaselo lwe-trigger ye-Zapier eqhagamshela kwi-spreadsheet ye-Google Forms -->

Kugqityiwe! Ifomu ye-Google Forms iqhagamshelwe ne-Zapier kwaye ilungele ukudityaniswa nenethiwekhi. Ngoku masiqhubele phambili kwiSenzo esiza kuvela kwi-Trigger eqaliswa yi-Google Forms ngalo lonke ixesha igcwaliswa.

Fumana i-app entsha ye-Ultimate Multisite uze uyikhethe. Kolu hlobo lwe-Zap khetha ukhetho lwe-Register.

<!-- Umfanekiso wesikrini awufumaneki: Ukukhethwa kwesenzo se-Zapier okubonisa i-app ye-Ultimate Multisite enokhetho lwe-Register -->

Emva kweli nyathelo lokuqala, khetha i-account eza kuqhagamshelwa nale Zap.<!-- Umfanekiso wesikrini awufumaneki: Inyathelo loqhagamshelo lwe-account ye-Zapier ye-Ultimate Multisite -->

Le yeyona nxalenye inobuthathaka kuyo yonke inkqubo. Kufuneka sitshatise iimimandla ezivela kwi-Google Forms neemimandla ezincinane eziyimfuneko kwisiphelo se-register, njengoko kubonisiwe kwicandelo elingaphambili kweli nqaku.

Kulo mzekelo, kufuneka siqwalasele kuphela igama lomsebenzisi, i-email, i-password, igama kunye ne-URL yewebhusayithi. Okunye kushiywa kumiselwe kwangaphambili ukuze bonke ubuLungu obuveliswe kule Google Forms bulandele ipateni efanayo yemveliso nesimo.

<!-- Umfanekiso wesikrini awufumaneki: Ukutshatiswa kweemimandla kwi-Zapier phakathi kwe-Google Forms kunye nesiphelo se-register se-Ultimate Multisite -->

Xa ulwazi seluqwalaselwe, qhubela kuvavanyo lokugqibela. Kwisikrini sokugqibela ungabona zonke iimimandla eziza kuthunyelwa kwisiphelo, ulwazi lwazo oluhambelanayo kunye neemimandla eziza kuthunyelwa zingenanto.<!-- Umfanekiso wesikrini awufumaneki: Isikrini sovavanyo se-Zapier esibonisa zonke iimimandla eziza kuthunyelwa kwisiphelo se-register -->

Vavanya i-Zap yakho entsha kwaye kufuneka igqitywe ngempumelelo. Ukuba kukho nayiphi na impazamo, jonga zonke iimimandla nokuba zithunyelwa ngokuchanekileyo na. Njengoko kukho ulwazi oluninzi, ezinye izinto zinokungaphawulwa.

### Iiparamitha ezipheleleyo zesiphelo {#complete-endpoint-parameters}

Nalu ubizo olupheleleyo kunye nawo onke amathuba eemimandla ezinokuthunyelwa.

"customer_id" : integer, "customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", }, "membership" : { "status" : "string", // one of "pending", "active", "trialing", "expired", "on-hold", "cancelled" "date_expiration" : "string", "date_trial_end" : "string", "date_activated" : "string", "date_renewed" : "string", "date_cancellation" : "string", "date_payment_plan_completed": "string", }, "products" : [1,2], "duration" : "string", "duration_unit" : "string", "discount_code" : "string", "auto_renew" : "boolean", "country" : "string", "currency" : "string", "payment" { "status" : "string", // one of "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "cancelled" }, "payment_method" : { "gateway" : "string", "gateway_customer_id" : "string", "gateway_subscription_id" : "string", "gateway_payment_id" : "string", }, "site" : { "site_url" : "string", "site_title" : "string", "publish" : "boolean", "template_id" : "string", }

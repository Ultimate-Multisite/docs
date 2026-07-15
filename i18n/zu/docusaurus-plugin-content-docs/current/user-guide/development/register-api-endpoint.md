---
title: Bhalisa iphoyinti lokugcina le-API
sidebar_position: 6
_i18n_hash: 8d9b47668bce413a2466cf2b1c37d2cf
---
# I-Ultimate Multisite Register API endpoint

Kulesi sifundo, uzofunda ukuthi ungayisebenzisa kanjani i-Ultimate Multisite /register API endpoint ukuze udale yonke inqubo yokwamukela ikhasimende elisha kunethiwekhi yakho nokuthi ungakwenza kanjani lokho nge-Zapier.

I-endpoint isebenzisa indlela ye-POST futhi ibizwa nge-URL _**https://yoursite.com/wp-json/wu/v2/register**_. Kulolu bizo, izinqubo ezi-4 zizokwenziwa ngaphakathi kwenethiwekhi yakho:

  * Umsebenzisi omusha we-WordPress noma ukuhlonzwa kwakhe nge-user ID kuzodalwa.

  * Ikhasimende elisha ku-Ultimate Multisite noma ukuhlonzwa kwalo nge-customer ID kuzodalwa.

  * Isayithi elisha kunethiwekhi ye-WordPress lizodalwa.

  * Ekugcineni, i-Membership entsha ku-Ultimate Multisite izodalwa.

Kule nqubo, uzodinga imininingwane yakho ye-API. Ukuze uyithole, iya kuphaneli yomlawuli wenethiwekhi yakho, uye ku-**Ultimate Multisite > Settings** > **API & Webhooks,** bese ubheka isigaba se-API Settings.

![Isigaba se-API Settings ku-Ultimate Multisite](/img/config/settings-api.png)

Nasi isibonisi esiphelele sekhasi lezilungiselelo ze-API:

![Ikhasi eligcwele lezilungiselelo ze-API](/img/config/settings-api-full.png)

Khetha **Enable API** bese uthola imininingwane yakho ye-API.

Manje, ake sihlole i-endpoint bese sidala isenzo sokubhalisa ku-Zapier.

## Amapharamitha omzimba we-endpoint {#endpoint-body-parameters}

Ake sibe nombono jikelele wolwazi oluncane oludingeka siluthumele ku-endpoint. Ekupheleni kwalesi sihloko, uzothola ubizo oluphelele.

### Ikhasimende {#customer}

Lolu ulwazi oludingekayo enqubweni yokudala uMsebenzisi neKhasimende le-Ultimate Multisite:

"customer_id" : integer

Kungenzeka ukuthumela i-customer ID edalwe kunethiwekhi yakho. Uma ingathunyelwanga, ulwazi olungezansi luzosetshenziswa ukudala ikhasimende elisha nomsebenzisi omusha we-WordPress. I-user ID nayo ingathunyelwa ngendlela efanayo ne-customer ID.

"customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", },

### **Membership** {#membership}

Ulwazi kuphela esiludingayo ngaphakathi kwale nto yi-Membership Status.

"membership" { "status" : "string", // one of "pending", "active", "trialing", "expired", "on-hold", "canceled" },

### **Imikhiqizo** {#products}

Imikhiqizo inikezwa njenge-array ene-product ID engu-1 noma ngaphezulu evela kunethiwekhi yakho. Qaphela, le endpoint ayidali imikhiqizo. Hlola imibhalo ye-Ultimate Multisite ukuze uqonde kangcono i-endpoint yokudala umkhiqizo.

**"products" : [1,2],**

### Inkokhelo {#payment}

Njenge-Membership, sidinga kuphela isimo.

**"payment" { "status" : "string", // one of "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "canceled" },**

### Isayithi {#site}

Futhi ukuvala umzimba sidinga i-URL nesihloko sesayithi, kokubili ngaphakathi kwento ye-Site.

**"site" : { "site_url" : "string", "site_title" : "string" }**

Impendulo ye-register endpoint izoba yi-array enolwazi lwe-membership olusanda kudalwa.

## Ukudala isenzo ku-Zapier {#creating-an-action-in-zapier}

Ngokwethulwa kwale endpoint entsha nenamandla kakhudlwana yokudala Account, uzophinde ufinyelele isenzo esisha ku-Zapier.

Uyakwazi yini ukusebenzisa nokujabulela konke okunikezwa inguqulo entsha ye-Zapier? Funda okwengeziwe lapha. (link?)

### Ukudala isenzo {#creating-an-action}

Ukuze sibonise kangcono ukuthi ungayisebenzisa kanjani i-registration endpoint nge-Zapier, ake sakhe ukuhlanganiswa ne-Google Forms. Njalo lapho leli fomu ligcwaliswa futhi ulwazi lugcinwa eshidini lezimpendulo zefomu, i-membership entsha izodalwa kunethiwekhi ye-Ultimate Multisite.

Ku-Google Forms, yenza ifomu elinezinkambu ezincane ezidingekayo ukudala i-membership entsha kunethiwekhi.

<!-- Screenshot unavailable: Google Forms form with fields for creating a new membership -->

Manje ku-Zapier, yenza i-Zap entsha bese uxhuma ifomu elidalwe ku-Google nge-spreadsheet lapho idatha igcinwa khona.

<!-- Screenshot unavailable: Zapier trigger configuration connecting to Google Forms spreadsheet -->

Kwenziwe! Ifomu le-Google Forms lixhunyiwe ne-Zapier futhi selilungele ukuhlanganiswa nenethiwekhi. Manje ake siqhubekele ku-Action ezophumela ku-Trigger evuswa yi-Google Forms njalo lapho igcwaliswa.

Thola i-app entsha ye-Ultimate Multisite bese uyikhetha. Kulolu hlobo lwe-Zap khetha inketho ethi Register.

<!-- Screenshot unavailable: Zapier action selection showing Ultimate Multisite app with Register option -->

Ngemuva kwalesi sinyathelo sokuqala, khetha i-account ezoxhunyaniswa nale Zap.<!-- Screenshot unavailable: Zapier account connection step for Ultimate Multisite -->

Lena ingxenye ebucayi kakhulu yenqubo yonke. Sidinga ukufanisa izinkambu ezivela ku-Google Forms nezinkambu ezincane ezidingekayo ku-register endpoint, njengoba kukhonjisiwe esigabeni esandulele salesi sihloko.

Kulesi sibonelo, sidinga kuphela ukumisa i-username, email, password, name ne-URL yewebhusayithi. Okunye kushiywa kunqunywe kusengaphambili ukuze wonke ama-memberships akhiqizwa kule Google Forms alandele iphethini efanayo yomkhiqizo nesimo.

<!-- Screenshot unavailable: Zapier field mapping between Google Forms and Ultimate Multisite register endpoint -->

Njengoba ulwazi selusethiwe, qhubekela ekuhlolweni kokugcina. Esikrinini sokugcina ungabona zonke izinkambu ezizothunyelwa ku-endpoint, ulwazi lwazo oluhambisanayo nezinkambu ezizothunyelwa zingenalutho.<!-- Screenshot unavailable: Zapier test screen showing all fields to be sent to the register endpoint -->

Hlola i-Zap yakho entsha futhi kufanele iqede ngempumelelo. Uma kwenzeka noma yiliphi iphutha, hlola zonke izinkambu nokuthi zithunyelwa kahle yini. Njengoba kunolwazi oluningi, ezinye izinto zingaphuthelwa.

### Amapharamitha aphelele e-endpoint {#complete-endpoint-parameters}

Nalu ubizo oluphelele nawo wonke amathuba ezinkambu ezingathunyelwa.

"customer_id" : integer, "customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", }, "membership" : { "status" : "string", // one of "pending", "active", "trialing", "expired", "on-hold", "cancelled" "date_expiration" : "string", "date_trial_end" : "string", "date_activated" : "string", "date_renewed" : "string", "date_cancellation" : "string", "date_payment_plan_completed": "string", }, "products" : [1,2], "duration" : "string", "duration_unit" : "string", "discount_code" : "string", "auto_renew" : "boolean", "country" : "string", "currency" : "string", "payment" { "status" : "string", // one of "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "cancelled" }, "payment_method" : { "gateway" : "string", "gateway_customer_id" : "string", "gateway_subscription_id" : "string", "gateway_payment_id" : "string", }, "site" : { "site_url" : "string", "site_title" : "string", "publish" : "boolean", "template_id" : "string", }

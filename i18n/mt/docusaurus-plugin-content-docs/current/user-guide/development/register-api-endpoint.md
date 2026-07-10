---
title: Iskrivi l-endpoint API
sidebar_position: 6
_i18n_hash: 8d9b47668bce413a2466cf2b1c37d2cf
---
# Endpoint API Register ta l-Ultimate Multisite {#the-ultimate-multisite-register-api-endpoint}

F'dieturja li t-tutorial dan, tmur impiegaw l-endpoint API /register tal-Ultimate Multisite biex tgħin il proċess kollu ta onboarding għal magħrupp ġdid fil-network tiegħek u kif tista tfarmi dan ma' Zapier.

L-endpoint jippiegħel il-metodu POST u jitqafas mill-URL _**https://yoursite.com/wp-json/wu/v2/register**_. F'din l-chiamata, 4 proċessi jitqieddu fid-network tiegħek:

  * Jiemmu creat u l-utenti WordPress ġdidi jew it-identifikazzjoni tagħhom b'id tal-utent.

  * Jiemmu creat il-Customer ġdid fil-Ultimate Multisite jew it-identifikazzjoni tagħhom b'id tal-customer.

  * Jiemmu creat siti ġdidi fuq l-network WordPress.

  * F'edda, jiemmu creat Membership ġdid fil-Ultimate Multisite.

B'din il-proċess, għandek bżonn il-credentials API tiegħek. Biex tiġbixhom, tnaviga għall-admin panel tal-network tiegħek, navigaw għal **Ultimate Multisite > Settings** > **API & Webhooks**, u għenkabbir għas-sezzjoni API Settings.

![API Settings section in Ultimate Multisite](/img/config/settings-api.png)

Hawn huwa l-vista kollha tal-pajs tat-API settings:

![API settings full page](/img/config/settings-api-full.png)

Iżgħar għal **Enable API** u jaffil il-credentials API tiegħek.

Morn, nistessporli l-endpoint u poi nifhmu kif tista tgħmli l-action ta registrazzjoni f'Zapier.

## Parament tal-korpo tal-endpoint (Endpoint body parameters) {#endpoint-body-parameters}

Niddeħħol għall-vista minnna dwar il-informazzjoni minimja li għandna trid naċċetta biex niffili l-endpoint. F'edda dan, tmur tikkung il-chiamata kollha.

### Customer {#customer}

Dan huwa l-informazzjoni li hija preżeduta biex jiemmu creat l-User u l-Customer tal-Ultimate Multisite:

"customer_id" : integer

Il huwa possibile inviare l'ID tal-klijenti creatu fl-network tiegħek. Jekk ma jitfratt, l-informazzjoni li qed tiddir lejn se tistabbiluna iklient ġdid u utent WordPress ġdid. L-User ID xieq il-mittop fl-customer ID.

"customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", },

### **Membership** {#membership}

L-informazzjoni li nitħobb f'dinja dan l-objett hija il-Status tal-Membership.

"membership" { "status" : "string", // wieħed minn "pending", "active", "trialing", "expired", "on-hold", "canceled" },

### **Products** {#products}

Il-prodotti jgħandu array li jista' jkun b'1 jew aktar ID tal-prodott mill-network tiegħek. Attentjoni, dan l-endpoint ma jcrea prodottix. Iċċekkja l-dokumentazzjoni ta Ultimate Multisite biex tfittex aħjar biex tifhem l-endpoint li jcrea prodotti.

**"products" : [1,2],**

### Payment {#payment}

Kif ma għandna mal-Membership, nitħobb biss is-status.

**"payment" { "status" : "string", // wieħed minn "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "canceled" },**

### Site {#site}

U biex nġib l-kunsill, nitħobb l-URL u it-Titlu tal-site f'dinja dan l-objett.

**"site" : { "site_url" : "string", "site_title" : "string" }**

Irriżult tal-endpoint ta registrazzjoni se jkun array b'informazzjoni tal-membership li tistabbiluta.

## Kreaw l-azione f Zapier {#creating-an-action-in-zapier}

Ma għall-introduzzjoni tal-endpoint ġdid u aktar robust għat-crea konti, tieq il-nuove azzjoni f Zapier.

Tgħinni kif tista' u tiftaħ biex tiġi l-nuvina ta Zapier? Tgħallem aktar hemm l-link. (link?)

### Kreaw l-azione {#creating-an-action}

Għal tfassli b'mod aktar ben kif tista' uża l-endpoint ta registrazzjoni mal-Zapier, n-nittba integrazzjoni ma' Google Forms. Matul is-form huwa jmull jgħleb u l-informazzjoni giċċertja fl-sheet tal-risposta tal-form, se jkun newti membership جديد f'network Ultimate Multisite.

F'Google Forms, għinn ikun form b'il-field minimi li għandek biex tgħml new membership f'network.

<!-- Screenshot unavailable: Google Forms form with fields for creating a new membership -->

Morn fil-Zapier, għinn n-ikun Zap جديد u n-ikkonnet l-form li tservu f'Google peress is-spreadsheet li jgħleb din id-data.

<!-- Screenshot unavailable: Zapier trigger configuration connecting to Google Forms spreadsheet -->

Fin! Il-Google Forms form huwa ikkonnet mal-Zapier u jista' jiġi integrat mal-network. Ora, n-morn għall-Azzjoni li tikkunsidi mill-Trigger li jiftakkar min Google Forms ogni volta li jgħleb.

Trova l-app Ultimate Multisite nuova u selezih. Għal dan tip ta Zap, għalgħu opzjoni Register.

<!-- Screenshot unavailable: Zapier action selection showing Ultimate Multisite app with Register option -->

Wara dan ilkemm, għażel l-account li jista' ikkonnet ma dan Zap.<!-- Screenshot unavailable: Zapier account connection step for Ultimate Multisite -->

Dan huwa l-parte aktar sensibbli tal-proċess kollu. Ilabbir il-field li jtien min Google Forms mal-field minimi li għandek biex tista' tiserġi, kif jappoċċa fil-seksjoni prevwenta ta dan l-artikolu.

F'dan l-eżempju, għandna biex n-konfigura biss is-username, email, password, is-name u l-URL tal-website. Il-ġeneral huwa dejjem predeterminatu biex kull membership li jgħleb min Google Forms jipprovdi l-istess pattern ta prodotto u status.

<!-- Screenshot unavailable: Mappatura tal-field Zapier bejn Google Forms u Ultimate Multisite register endpoint -->

Mentre li informazzjoni hija impostata, procedi għall-test finali. Mall-screen tista' tara kull il-fields li jkun se jiġu trassetti għall-endpoint, l-informazzjoni rispettiva tagħhom u l-fields li jiġu trassetti vuṭi.<!-- Screenshot unavailable: Skrin test Zapier li juri kull field li se jiġu trassetti għall-register endpoint -->

Test il-Zap tiegħek u jista' jkomplettu b'suċċess. Jekk ġejjeb qualche errore, tikkontrolla kull field u se qed jiġi trassett mill-mod corretto. Għandna ħafna informazzjoni, għoli xi ħaġa tista' la jgħidha.

### Parametri kumpli tal-endpoint {#complete-endpoint-parameters}

Hawn huwa l-chiam tal-call kumpli u kull possibilità tal-fields li jista' jiġu trassetti.

"customer_id" : integer, "customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", }, "membership" : { "status" : "string", // wieħed minn "pending", "active", "trialing", "expired", "on-hold", "cancelled" "date_expiration" : "string", "date_trial_end" : "string", "date_activated" : "string", "date_renewed" : "string", "date_cancellation" : "string", "date_payment_plan_completed": "string", }, "products" : [1,2], "duration" : "string", "duration_unit" : "string", "discount_code" : "string", "auto_renew" : "boolean", "country" : "string", "currency" : "string", "payment" { "status" : "string", // wieħed minn "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "cancelled" }, "payment_method" : { "gateway" : "string", "gateway_customer_id" : "string", "gateway_subscription_id" : "string", "gateway_payment_id" : "string", }, "site" : { "site_url" : "string", "site_title" : "string", "publish" : "boolean", "template_id" : "string", }

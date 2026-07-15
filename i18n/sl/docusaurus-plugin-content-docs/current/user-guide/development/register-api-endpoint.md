---
title: Registrirajte API endpoint
sidebar_position: 6
_i18n_hash: 8d9b47668bce413a2466cf2b1c37d2cf
---
# Končni API endpoint za registracijo v Ultimate Multisite

V tem tutorialu se naučite, kako uporabiti API endpoint /register od Ultimate Multisite za ustvarjanje celotnega procesa vključevanja (onboarding) novega stranke v vaš omrežje in kako to storiti z Zapierjem.

Endpoint uporablja POST metodo in ga poziva URL _**https://yoursite.com/wp-json/wu/v2/register**_. Pri tej zapisi se v vašem omrežju izvede 4 procesov:

  * Ustvarimo nov uporabnika WordPressa ali njegovo identifikacijo preko ID uporabnika.

  * Ustvarimo novega Stranke (Customer) v Ultimate Multisite ali njegovo identifikacijo preko ID stranke.

  * Ustvarimo novo spletno mesto na WordPress omrežju.

  * Na koncu se ustvari nova članstva (Membership) v Ultimate Multisite.

Za ta proces boste potrebovali svoje API podatke (credentials). Za njih dostopite do panelja za administracijo vaše mreže, navigirate do **Ultimate Multisite > Settings** > **API & Webhooks**, in poiščite razdelek API Settings.

![API Settings section in Ultimate Multisite](/img/config/settings-api.png)

Tukaj je celoten pregled strani z nastavitvami API:

![API settings full page](/img/config/settings-api-full.png)

Izberite **Enable API** in dobite svoje API podatke.

Zdaj, давайте raziskamo endpoint in nato ustvarimo akcijo registracije v Zapierju.

## Parametri telesa endpointa (Endpoint body parameters) {#endpoint-body-parameters}

Predstavimo osnovne informacije, ki jih moramo poslati na endpoint. Na koncu tega članka boste našli celotno zapiso.

### Stranka (Customer) {#customer}

To je informacija, ki je potrebna za proces ustvarjanja uporabnika in Stranke v Ultimate Multisite:

"customer_id" : integer

Je je mogoče poslati ID stranke, ki ga ste ustvarili v svoji mreži. Če ga ne pošljete, bodo podatki spodaj uporabljeni za ustvarjanje nove stranke in nove WordPress uporabniške. Uporabniški ID se lahko pošlje na isti način kot ID stranke.

"customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", },

### **Članstvo (Membership)** {#membership}

Za to objekt nam je potrebna le informacija o statusu članstva.

"membership" { "status" : "string", // en od "pending", "active", "trialing", "expired", "on-hold", "canceled" },

### **Izdelki (Products)** {#products}

Izdelkom se daje niz z 1 ali več ID-ji izdelkov iz vaše mreže. Oprežajte se, ta endpoint ne ustvarja izdelkov. Preverite dokumentacijo Ultimate Multisite za bolje razumevanje endpointa za ustvarjanje izdelkov.

**"products" : [1,2],**

### **Plačilnost (Payment)** {#payment}

Kot pri članstvu nam je potrebna le status.

**"payment" { "status" : "string", // en od "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "canceled" },**

### **Splet (Site)** {#site}

In za zaprisanje celotnega podatka nam je potrebna URL in naslov spleta, oba v objektu Site.

**"site" : { "site_url" : "string", "site_title" : "string" }**

Povratna vrednost endpointa register bo niz z informacijami o novously ustvarenem članstvu.

## Ustvarjanje akcije v Zapierju (Zapier) {#creating-an-action-in-zapier}

Z uvedbo tega novega in bolj robustnega endpointa za ustvarjanje računov boste dobrali tudi novo akcijo v Zapierju.

Večate, kako uporabljati in uživati v vsakem, kar ga nova verzija Zapierja ponuja? Več čitajte tukaj. (link?)

### Ustvarjanje akcije {#creating-an-action}

Za boljše ilustracijo kako uporabiti endpoint za registracijo z Zapierjem, ustvarimo integracijo z Google Forms. Vsak razprodobni koli zapis v tej vrsti formularja in informacije shranjene v odgovorih se bo ustvaril novi članica v mreži Ultimate Multisite.

V Google Forms ustvarite formular s minimalno potrebna polja za ustvarjanje nove članice v mreži.

<!-- Zaslon ni na voljo: Google Forms formular z polji za ustvarjanje nove članice -->

Zdaj v Zapierju ustvarite novi Zap in povezite ustvarjen formular v Google preko tabele, kjer so shranjene podatki.

<!-- Zaslon ni na voljo: Konfiguracija triggerja Zapierja za povezavo s Google Forms tablico -->

Končano! Google Forms formular je povezan z Zapierjem in je pripravljen za integracijo z mrežo. Zdaj prejdemo na Action, ki bo rezultat Triggerja, ki ga Google Forms sproži vsak kleti zapisu.

Poiščite aplikacijo Ultimate Multisite in jo izberite. Za takojenk sistem izberite opcijo Register (Registracija).

<!-- Zaslon ni na voljo: Izbira akcije Zapierja, ki prikazuje aplikacijo Ultimate Multisite z opcjo Register -->

Po tem prvotnem koraku izberite račun, ki bo povezan s tem Zapom.<!-- Zaslon ni na voljo: Korak povezave računa Zapierja za Ultimate Multisite -->

To je najbolj občutljiv del celotnega procesa. Moramo uskladiti polja, ki so prišli iz Google Forms, z minimalnimi polji, ki so potrebna za endpoint registracije, kot je prikazano v prejšnjem delu tega članka.

V tem primeru moramo konfigurirati le uporabniško ime (username), e-poštno naslov (email), geslo (password), ime in URL spletnega mesta. Preostalo je predhodno določeno, tako da se vsi članici generirani na tem Google Forms sledijo isto razmerje izdelka in statusa.

<!-- Zaslivanje zaslona ni na voljo: Mapiranje polja Zapier med Google Forms in registracijo Ultimate Multisite endpointa -->

Ko so informacije nastavljene, nadaljujte z zadnim testom. Na zadnji zaslon boste videli vse polja, ki bodo poslana na endpoint, njihove informacije in polja, ki bodo poslana prazna.<!-- Zaslivanje zaslona ni na voljo: Testni zaslon Zapier, ki prikazuje vse polja za slanje na registracijski endpoint -->

Testirajte svoj novi Zap in bi morall se uspešno dokončati. Če se pojavijo kakršne koli napake, preverite vsa polja in prepričajte se, da so poslana pravilno. Ker je veliko informacij, nekatera stvari lahko premakne.

### Popolna parametra endpointa {#complete-endpoint-parameters}

Tukaj je popolna poziv in vse možnosti polj, ki lahko poslanja.

"customer_id" : integer, "customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", }, "membership" : { "status" : "string", // ena od "pending", "active", "trialing", "expired", "on-hold", "cancelled" "date_expiration" : "string", "date_trial_end" : "string", "date_activated" : "string", "date_renewed" : "string", "date_cancellation" : "string", "date_payment_plan_completed": "string", }, "products" : [1,2], "duration" : "string", "duration_unit" : "string", "discount_code" : "string", "auto_renew" : "boolean", "country" : "string", "currency" : "string", "payment" { "status" : "string", // ena od "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "cancelled" }, "payment_method" : { "gateway" : "string", "gateway_customer_id" : "string", "gateway_subscription_id" : "string", "gateway_payment_id" : "string", }, "site" : { "site_url" : "string", "site_title" : "string", "publish" : "boolean", "template_id" : "string", }

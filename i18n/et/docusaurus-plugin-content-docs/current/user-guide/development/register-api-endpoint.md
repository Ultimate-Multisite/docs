---
title: API-põhja registreerimine
sidebar_position: 6
_i18n_hash: 8d9b47668bce413a2466cf2b1c37d2cf
---
# Ultimate Multisite registre API punkt

Sellel õppemoodus tutvustab, kuidas kasutada Ultimate Multisite /register API endpunkti uue kliendi tervikliku juhatise protsessi loomiseks oma võrku ja kuidas seda Zapieriga teha.

Endpunt kasutab POST meetodi ja nimetatakse URL-iga _**https://yoursite.com/wp-json/wu/v2/register**_. Selle kutsuga käivitub teie võrkudes 4 protsessi:

  * Luuakse uus WordPress kasutaja või selle identifitseerimine kasutaja ID abil.

  * Luuakse uus Ultimate Multisite kliend või selle identifitseerimine kliendi ID abil.

  * Luuakse uus lehel WordPress võrku.

  * Lõpuks luuakse uus Liiklus (Membership) Ultimate Multisitesis.

Selle protsessi jaoks vajab teil API-kujutusi. Sellel saamiseks külastage oma võrkuse administraatorpaneeli, navigeerige **Ultimate Multisite > Settings** > **API & Webhooks** ja otsige API Settings osas.

![API Settings section in Ultimate Multisite](/img/config/settings-api.png)

Siin on API seadistuste täielik vaade:

![API settings full page](/img/config/settings-api-full.png)

Valige **Enable API** ja saanud oma API-kujutused.

Nüüd uurime endpunktit ja luuame siis Zapieris registreerimise toimiku (action).

## Endpunkti keha parametrid

Loomame üle minimaalsele tegevusolevale, mida me peame endpuntile saatma. Artikkel lõpuks annab täieliku kutsuga.

### Customer

See on teel, mis on vajalik kasutaja ja Ultimate Multisite kliendi loomiseks:

"customer_id" : integer

On onnistub on saati saab esile anda oma võrku luuan kliendile loodud ID. Kui seda ei esita, kasutatakse allpool olevat teavet uue kliendi ja uue WordPressi kasutaja loomiseks. Kasutaja-ID saab samuti esitada samalla viisiga kui kliendi-ID.

"customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", },

### **Liikumine** (Membership)

Meil on vaja ainult selle objekti sisema Membership Statusi teavet.

"membership" { "status" : "string", // üks "pending", "active", "trialing", "expired", "on-hold", "canceled" }

### **Tooted** (Products)

Toodetele antakse massiiv, kus on 1 või rohkem toote ID oma võrku. Pärnige ette: see endpoint ei luua tooteid. Loe Ultimate Multisite dokumentatsioon paremini teada toote loomise endpointi kohta.

**"products" : [1,2],**

### **Makse** (Payment)

Kuten Membershipiga, meil on vaja ainult statusi.

**"payment" { "status" : "string", // üks "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "canceled" }**

### **Veebileht** (Site)

Ja korras lõpetamiseks meil on veebilehti URL ja pealkiri, mõlemad Site objekti sisema.

**"site" : { "site_url" : "string", "site_title" : "string" }**

Register endpointi tagastandmine annab massivi uuest luudud liiklumite teavet.

## Toimija loomine Zapieris (Creating an action in Zapier)

Uue ja tugevama konto loomise endpointiga saad kasutada ka uut toimijat zapieris.

Kas te tead, kuidas kasutada ja nautida kõik, mida uus versioon zapieri pakub? Loe rohkem siit. (link?)

### Toimija loomine

Selgitame paremini Zapieriga registreerimise endpointi kasutamiseks paremini illustreerimiseks luojame integreerimise Google Formidega. Iga kord, kui seda forma täidetakse ja teave salvestatakse forma vastuste lehel, loodud on Ultimate Multisite võrku uue liides.

Google Formsis luute forma, millel on minimaalselt vajalikud väljad võrku uue liide loomiseks.

<!-- Screenshot unavailable: Google Forms form with fields for creating a new membership -->

Nüüd luute Zapieriga uue Zapi ja seadistage selle Google'i abil loodud forma spreadsheetiga, kus andmed salvestatakse.

<!-- Screenshot unavailable: Zapier trigger configuration connecting to Google Forms spreadsheet -->

Valmis! Google Forms forma on ühendatud Zapieriga ja valmis võrkuga integreerimiseks. Siis liikumine tegevusele, mis tuleks Triggerist (kui Google Form täidetakse) tulenevalt.

Leitu Ultimate Multisite uus app ja valige see. Sellise Zapi jaoks valige Register-vaik.

<!-- Screenshot unavailable: Zapier action selection showing Ultimate Multisite app with Register option -->

See esimese sammiku pärast valige konto, millega see Zap seotakse.<!-- Screenshot unavailable: Zapier account connection step for Ultimate Multisite -->

See on kogu protsessi kõige saldamaammas osa. Peame vastuste Google Formist sellele täpsustama, mis on minimaalselt vajalikud registreerimise endpointile, nagu esimeses osas selle artiklis näidatud.

See esimeses näites meil tuleb konfigurida kasutaja, e-mail, parool, nimi ja veebisaidi URL. Ülejäänik on eelnevalt määratud, et kõik Google Formist loodud liidesed järgiks sama toote- ja staatuse skeemi.

<!-- Ekraamatu ei ole saadaval: Zapier ühenduse mappimine Google Forms ja Ultimate Multisite registreerimise lõpppunkti vahel -->

Informatsioonid seadistatud pärast, jätkake lõplikku testi. Viimisel ekraanil näete kõik need väljad, mida endpointile lähedakse, nende vastavat informatsioonid ning need väljad, mida tühjaiks lähedakse.<!-- Ekraamatu ei ole saadaval: Zapier testi ekranda, kus näed kõik välja lähedavaid välju registreerimise endpointile -->

Testige uut zapit ja see peaks õnnestult lõpetama. Kui ilmneb vigu, kontrollige kõik väljad ja kas nad lähedakse korralt. Kuna teeb palju informatsiooni, mõned asjad võivad jääda märkamata.

### Täielik endpointi parametrid

Siin on täielik kutsutud ja kõigi võimalikud väljade võimalused, mida saab lähedada.

"customer_id" : integer, "customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", }, "membership" : { "status" : "string", // üks on "pending", "active", "trialing", "expired", "on-hold", "cancelled" "date_expiration" : "string", "date_trial_end" : "string", "date_activated" : "string", "date_renewed" : "string", "date_cancellation" : "string", "date_payment_plan_completed": "string", }, "products" : [1,2], "duration" : "string", "duration_unit" : "string", "discount_code" : "string", "auto_renew" : "boolean", "country" : "string", "currency" : "string", "payment" { "status" : "string", // üks on "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "cancelled" }, "payment_method" : { "gateway" : "string", "gateway_customer_id" : "string", "gateway_subscription_id" : "string", "gateway_payment_id" : "string", }, "site" : { "site_url" : "string", "site_title" : "string", "publish" : "boolean", "template_id" : "string", }

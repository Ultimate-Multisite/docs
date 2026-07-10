---
title: Registrujte API endpoint
sidebar_position: 6
_i18n_hash: 8d9b47668bce413a2466cf2b1c37d2cf
---
# Kožna API krajnja multisite registracije {#the-ultimate-multisite-register-api-endpoint}

U ovom tutorijalu naučićete kako da koristite Ultimate Multisite /register API endpoint da kreirate ceo proces uvodne akcije za novog kupca u vašoj mreži i kako to da uradite sa Zapierom.

Endpoint koristi POST metodu i zove se URL: _**https://yoursite.com/wp-json/wu/v2/register**_. U ovom pozivu, unutar vaše mreže će se izvršiti 4 procesa:

  * Kreira se novi WordPress korisnik ili ga identifikuje putem korisničkog ID-a.

  * Kreira se novi Kupac u Ultimate Multisite ili ga identifikuje putem kupčarskog ID-a.

  * Kreira se novi sajt na WordPress mreži.

  * Na kraju, kreira se novo Članstvo (Membership) u Ultimate Multisite.

Za ovaj proces će vam trebati vaši API kredencijali. Da biste ih dobili, idite na panel za administraciju vaše mreže, navigirajte do **Ultimate Multisite > Settings** > **API & Webhooks**, i potražite sekciju API Settings.

![Sekcija podešavanja API-ja u Ultimate Multisite](/img/config/settings-api.png)

Evo kompletnog pregleda stranice sa podešavanjima API-ja:

![Kompletna stranica podešavanja API-ja](/img/config/settings-api-full.png)

Izaberite **Enable API** i dobijte svoje API kredencijale.

Sada, hajde da istražimo endpoint i zatim kreiramo akciju registracije u Zapieru.

## Parametri tela endpointa (Endpoint body parameters) {#endpoint-body-parameters}

Haćemo pregled minimalnih informacija koje moramo poslati na endpoint. Na kraju ovog članka ćete pronaći kompletan poziv.

### Kupac (Customer) {#customer}

Ovo su informacije koje su neophodne za proces kreiranja Korisnika i Ultimate Multisite Kupca:

"customer_id" : integer

Može li poslati ID korisnika kreiranog u vašoj mreži klijentu. Ako nije poslat, informacije ispod će se koristiti za kreiranje novog klijenta i novog korisnika WordPress-a. ID korisnika se takođe može poslati na isti način kao i ID klijenta.

"customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", },

### **Članstvo (Membership)** {#membership}

Jedina informacija koja nam je potrebna unutar ovog objekta je status članstva.

"membership" { "status" : "string", // jedan od "pending", "active", "trialing", "expired", "on-hold", "canceled" },

### **Proizvodi (Products)** {#products}

Proizvodima se daje niz sa 1 ili više ID-ja proizvoda iz vaše mreže. Pazite, ovaj endpoint ne kreira proizvode. Proverite dokumentaciju Ultimate Multisite da biste bolje razumeli endpoint za kreiranje proizvoda.

**"products" : [1,2],**

### **Plaćanje (Payment)** {#payment}

Kao i kod Članstva, nam je potreban samo status.

**"payment" { "status" : "string", // jedan od "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "canceled" },**

### **Sajt (Site)** {#site}

I da bismo zatvorili telo, potrebna nam je URL sajta i naslov, oba unutar objekta Site.

**"site" : { "site_url" : "string", "site_title" : "string" }**

Povratak endpointa za registraciju će biti niz sa informacijama o novom kreiranom članstvu.

## Kreiranje akcije u Zapieru {#creating-an-action-in-zapier}

Sa uvođenjem ovog novog i robusnijeg endpointa za kreiranje naloga, dobićete pristup novoj akciji u Zapieru.

Da li znate kako da koristite i uživate u sve što nova verzija Zapiera nudi? Savetite se ovde. (link?)

### Kreiranje akcije {#creating-an-action}

Da bismo bolje ilustrovali kako da koristite endpoint za registraciju sa Zapierom, napravićemo integraciju sa Google Forms-om. Svaki put kada se ovaj formular popuni i informacije sačuvaju u listi odgovora formulara, kreiraće se novi članstvo u Ultimate Multisite mreži.

U Google Forms-u, napravite formular sa minimalnim poljima koja su potrebna za kreiranje novog članstva u mreži.

<!-- Screenshot unavailable: Google Forms form with fields for creating a new membership -->

Sada, u Zapieru, napravite novi Zap i povežite kreirani formular u Google putem tabele (spreadsheet) gde se podaci čuvaju.

<!-- Screenshot unavailable: Zapier trigger configuration connecting to Google Forms spreadsheet -->

Gotovo! Formular sa Google Forms-om je povezan sa Zapierom i spreman za integraciju sa mrežom. Sada ćemo preći na Akciju koja će biti rezultat Triggera koji Google Forms pokreće svaki put kada se popuni.

Pronađite novu Ultimate Multisite aplikaciju i izaberite je. Za ovakav Zap, birajte opciju Register (Registruj).

<!-- Screenshot unavailable: Zapier action selection showing Ultimate Multisite app with Register option -->

Nakon ovog prvog koraka, izaberite nalog koji će biti povezan sa ovim Zapom.<!-- Screenshot unavailable: Zapier account connection step for Ultimate Multisite -->

Ovo je najosetljiviji deo celog procesa. Moramo da podesimo polja koja su došla iz Google Forms-a sa minimalnim poljima koja su potrebna za endpoint registracije, kao što je prikazano u prethodnom delu ovog članka.

U ovom primeru, moramo samo da konfigurisemo korisničko ime (username), email, lozinku, ime i URL veb-sajta. Ostalo je već predodređeno tako da svi članstva generisana na ovom Google Forms-u prate isti obrazac proizvoda i statusa.

<!-- Screenshot unavailable: Mapiranje polja Zapier između Google Forms i Ultimate Multisite registarskog endpointa -->

Kada je sve podešeno, pređite na konačni test. Na posledjem ekranu možete videti sva polja koja će biti poslata na endpoint, njihove informacije i polja koja se šalju prazna.<!-- Screenshot unavailable: Ekran testa Zapiera koji prikazuje sva polja za slanje na registarski endpoint -->

Testirajte svoj novi Zap i trebalo bi da uspešno završi. Ako dođe do bilo kakve greške, proverite sva polja i da li se šalju ispravno. Pošto je mnogo informacija, neke stvari mogu promašiti.

### Kompletan set parametara endpointa {#complete-endpoint-parameters}

Evo kompletnog poziva i svih mogućnosti polja koja se mogu poslati.

"customer_id" : integer, "customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", }, "membership" : { "status" : "string", // jedan od "pending", "active", "trialing", "expired", "on-hold", "cancelled" "date_expiration" : "string", "date_trial_end" : "string", "date_activated" : "string", "date_renewed" : "string", "date_cancellation" : "string", "date_payment_plan_completed": "string", }, "products" : [1,2], "duration" : "string", "duration_unit" : "string", "discount_code" : "string", "auto_renew" : "boolean", "country" : "string", "currency" : "string", "payment" { "status" : "string", // jedan od "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "cancelled" }, "payment_method" : { "gateway" : "string", "gateway_customer_id" : "string", "gateway_subscription_id" : "string", "gateway_payment_id" : "string", }, "site" : { "site_url" : "string", "site_title" : "string", "publish" : "boolean", "template_id" : "string", }

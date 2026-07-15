---
title: Registriraj API endpoint
sidebar_position: 6
_i18n_hash: 8d9b47668bce413a2466cf2b1c37d2cf
---
# Endpoint API Ultimate Multisite-a registracija

U ovom tutorijalu naučit ćete kako koristiti endpoint API Ultimate Multisite /register za kreiranje cijelog procesa prijavljivanja novog klijenta u vašoj mreži i kako to napraviti s Zapierom.

Endpoint koristi POST metodu i zove se URL: _**https://yoursite.com/wp-json/wu/v2/register**_. U ovom pozivu, unutar vaše mreže će se izvršiti 4 procesa:

  * Kreira se novi WordPress korisnik ili ga identifikuje putem korisničkog ID-a.

  * Kreira se novi Klijent u Ultimate Multisite ili ga identifikuje putem klijentskog ID-a.

  * Kreira se nova stranica na WordPress mreži.

  * Na kraju, kreira se novo Članstvo (Membership) u Ultimate Multisite.

Za ovaj proces vam trebaju vaše API kredencijale. Za njih možete otići u admin panel vaše mreže, navigirati do **Ultimate Multisite > Settings** > **API & Webhooks**, i potražiti odjeljak API Settings.

![API Settings section in Ultimate Multisite](/img/config/settings-api.png)

Evo kompletnog pregleda stranice s postavkama API-ja:

![API settings full page](/img/config/settings-api-full.png)

Odaberite **Enable API** i dobijte svoje API kredencijale.

Sada, hajde da istražimo endpoint i zatim kreiramo akciju registracije u Zapieru.

## Parametri tijela endpointa (Endpoint body parameters) {#endpoint-body-parameters}

Dajmo pregled minimalnih informacija koje moramo poslati endpointu. Na kraju ovog članka pronaći ćete pun poziv.

### Klijent (Customer) {#customer}

Ovo su informacije potrebne za proces kreiranja Korisnika i Ultimate Multisite Klijenta:

"customer_id" : integer

Možeš poslati korisničko ID koje si kreirao u svojoj mreži. Ako ga ne pošalješ, informacije ispod će se koristiti za kreiranje novog klijenta i novog korisnika WordPress-a. Korisnički ID se može poslati na isti način kao i klijentski ID.

"customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", },

### **Članstvo (Membership)** {#membership}

Jedina informacija koju nam treba unutar ovog objekta je status članstva.

"membership" { "status" : "string", // jedan od "pending", "active", "trialing", "expired", "on-hold", "canceled" },

### **Proizvodi** {#products}

Proizvodima se dodjeljuje niz s 1 ili više ID-ja proizvoda iz tvoje mreže. Pazite, ovaj endpoint ne kreira proizvode. Pročitaj dokumentaciju Ultimate Multisite kako bi bolje razumio endpoint za kreiranje proizvoda.

**"products" : [1,2],**

### **Plaćanje** {#payment}

Kao i kod Članstva, nam treba samo status.

**"payment" { "status" : "string", // jedan od "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "canceled" },**

### **Sajt** {#site}

I da bismo zatvorili tijelo, trebamo URL i naslov sajta unutar objekta Site.

**"site" : { "site_url" : "string", "site_title" : "string" }**

Povratna vrijednost endpointa za registraciju će biti niz s informacijama o novom kreiranom članstvu.

## Kreiranje akcije u Zapieru {#creating-an-action-in-zapier}

S uvođenjem ovog novog i robusnijeg endpointa za kreiranje računa, dobit ćete pristup novoj akciji u Zapieru.

Znate li kako koristiti i uživati u svemu što nova verzija Zapiera nudi? Više možete naučiti ovdje. (link?)

### Kreiranje akcije {#creating-an-action}

Da bismo bolje pokazali kako koristiti endpoint za registraciju s Zapierom, napravit ćemo integraciju s Google Forms-om. Svaki put kada se ovaj formular popuni i informacije snivaju u listu odgovora formulara, kreira se novi članstvo u Ultimate Multisite mreži.

U Google Forms-u, napravite formular s minimalnim poljima koja su potrebna za kreiranje novog članstva u mreži.

<!-- Screenshot unavailable: Google Forms form with fields for creating a new membership -->

Sada u Zapieru, napravite novi Zap i povežite kreirani formular pomoću tabele (spreadsheet) gdje se podaci snivaju.

<!-- Screenshot unavailable: Zapier trigger configuration connecting to Google Forms spreadsheet -->

Gotovo! Formular s Google Forms-om je povezan s Zapierom i spreman za integraciju s mrežom. Sada ćemo preći na Akciju koja će nastati iz Triggera koji Google Forms pokreće svaki put kada se popuni.

Pronađite novu Ultimate Multisite aplikaciju i odaberite je. Za ovakav Zap, odaberite opciju Register (Registriraj).

<!-- Screenshot unavailable: Zapier action selection showing Ultimate Multisite app with Register option -->

Nakon ovog prvog koraka, odaberite račun koji će biti povezan s ovim Zapom.<!-- Screenshot unavailable: Zapier account connection step for Ultimate Multisite -->

Ovo je najosjetljiviji dio cijelog procesa. Moramo podudariti polja koja dolaze iz Google Forms-a s minimalnim poljima koja su potrebna za endpoint registracije, kao što je prikazano u prethodnom dijelu ovog članka.

U ovom primjeru, moramo samo konfigurirati korisničko ime (username), e-mail, lozinku, ime i URL web stranice. Ostatak je već unaprijed određen tako da svi članstva generirana na ovom Google Forms-u slijede isti obrazac proizvoda i statusa.

<!-- Screenshot unavailable: Mapiranje polja Zapiera između Google Forms i Ultimate Multisite registarskog endpointa -->

Kada je sve podešeno, nastavi s konačnim testom. Na posljednjem ekranu možeš vidjeti sva polja koja će biti poslata na endpoint, njihove odgovarajuće informacije te polja koja se šalju prazna.<!-- Screenshot unavailable: Test ekran Zapiera koji prikazuje sva polja za slanje na registarski endpoint -->

Testiraj svoj novi Zap i trebao bi uspješno završiti. Ako se dogodi neka greška, provjeri sva polja i vidi je li sve ispravno poslano. Budući da ima puno informacija, neke stvari mogu promaći.

### Kompletan parametar endpointa {#complete-endpoint-parameters}

Ovo je kompletan poziv i sve mogućnosti polja koja se mogu poslati.

"customer_id" : integer, "customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", }, "membership" : { "status" : "string", // jedan od "pending", "active", "trialing", "expired", "on-hold", "cancelled" "date_expiration" : "string", "date_trial_end" : "string", "date_activated" : "string", "date_renewed" : "string", "date_cancellation" : "string", "date_payment_plan_completed": "string", }, "products" : [1,2], "duration" : "string", "duration_unit" : "string", "discount_code" : "string", "auto_renew" : "boolean", "country" : "string", "currency" : "string", "payment" { "status" : "string", // jedan od "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "cancelled" }, "payment_method" : { "gateway" : "string", "gateway_customer_id" : "string", "gateway_subscription_id" : "string", "gateway_payment_id" : "string", }, "site" : { "site_url" : "string", "site_title" : "string", "publish" : "boolean", "template_id" : "string", }

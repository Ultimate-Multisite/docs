---
title: Registruj API endpoint
sidebar_position: 6
_i18n_hash: 8d9b47668bce413a2466cf2b1c37d2cf
---
# API endpoint za Ultimate Multisite registraciju

U ovom vodiču, naučićete kako da koristite API endpoint Ultimate Multisite /register za kreiranje cijelog procesa uvodjenja za novog klijenta u vašoj mreži, te kako to učiniti sa Zapierom.

Endpoint koristi POST metodu i poziva se putem URL-a **https://yoursite.com/wp-json/wu/v2/register**. Ovim pozivom će se unutar vaše mreže izvršiti 4 procesa:

*   Kreiraće se novi korisnik WordPressa ili će se identificirati putem ID-a korisnika.
*   Kreiraće se novi Klijent (Customer) u Ultimate Multisite ili će se identificirati putem ID-a klijenta.
*   Kreiraće se novi sajt na WordPress mreži.
*   Na kraju, kreiraće se nova Članost (Membership) u Ultimate Multisite.

Za ovaj proces, bit će vam potrebni API akreditivi. Da biste ih dobili, idite na administratorski panel vaše mreže, navigirajte na **Ultimate Multisite > Settings** > **API & Webhooks**, i potražite sekciju API Settings.

![API Settings section in Ultimate Multisite](/img/config/settings-api.png)

Ovo je pregled stranice API postavki:

![API settings full page](/img/config/settings-api-full.png)

Odaberite **Enable API** i dobijte svoje API akreditive.

Sada, istražimo endpoint, a zatim kreiraćemo akciju u Zapieru.

## Parametri tijela endpointa

Dajmo pregled minimalnih informacija koje moramo poslati endpointu. Na kraju ovog članka, pronaći ćete kompletan poziv.

### Customer (Klijent)

Ovo su informacije koje su neophodne za proces kreiranja Korisnika i Klijenta Ultimate Multisite:

"customer_id" : integer

Moguće je poslati ID klijenta kreiran u vašoj mreži. Ako se ne pošalje, informacije ispod će se koristiti za kreiranje novog klijenta i novog korisnika WordPressa. ID korisnika se takođe može poslati na isti način kao i ID klijenta.

"customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", },

### **Membership (Članost)**

Jedina informacija koju nam treba unutar ovog objekta je Status članstva.

"membership" { "status" : "string", // jedan od "pending", "active", "trialing", "expired", "on-hold", "canceled" },

### **Products (Proizvodi)**

Proizvodi se daju nizom (array) sa 1 ili više ID-a proizvoda iz vaše mreže. Pazite, ovaj endpoint ne kreira proizvode. Provjerite dokumentaciju Ultimate Multisite kako biste bolje razumjeli endpoint za kreiranje proizvoda.

**"products" : [1,2],**

### Payment (Plaćanje)

Kao i kod Membership-a, potreban nam je samo status.

**"payment" { "status" : "string", // jedan od "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "canceled" },**

### Site (Sajt)

I da zatvorimo tijelo, trebaju nam URL i Naslov sajta, oba unutar objekta Site.

**"site" : { "site_url" : "string", "site_title" : "string" }**

Povratna informacija sa register endpointa bit će niz sa novokreiranim informacijama o članstvu.

## Kreiranje akcije u Zapieru

Sa uvođenjem ovog novog i robusnijeg endpointa za kreiranje računa, dobit ćete i novu akciju u Zapieru.

Znate li kako da koristite i uživate u svemu što nova verzija Zapiera nudi? Saznajte više ovdje. (link?)

### Kreiranje akcije

Da bismo bolje ilustrirali kako koristiti registracioni endpoint sa Zapierom, kreiraćemo integraciju sa Google Forms. Svaki put kada se ovaj formular popuni i informacije sačuvaju u listu odgovora formulara, kreiraće se nova članost u Ultimate Multisite mreži.

U Google Forms, napravite formular sa minimalnim poljima potrebnim za kreiranje nove članosti u mreži.

<!-- Screenshot unavailable: Google Forms form with fields for creating a new membership -->

Sada u Zapieru, napravite novi Zap i povežite kreirani formular u Google sa listom koju sadrži podaci.

<!-- Screenshot unavailable: Zapier trigger configuration connecting to Google Forms spreadsheet -->

Gotovo! Google Forms formular je povezan sa Zapierom i spreman za integraciju sa mrežom. Sada prelazimo na Akciju koja će rezultirati Okidačem (Trigger) koji Google Forms pokreće svaki put kada se popuni.

Pronađite novu Ultimate Multisite aplikaciju i odaberite je. Za ovakav Zap, odaberite opciju Register.

<!-- Screenshot unavailable: Zapier action selection showing Ultimate Multisite app with Register option -->

Nakon ovog prvog koraka, odaberite račun koji će biti povezan sa ovim Zap-om.<!-- Screenshot unavailable: Zapier account connection step for Ultimate Multisite -->

Ovo je najosjetljiviji dio cijelog procesa. Moramo uskladiti polja koja su došla iz Google Forms sa minimalnim poljima potrebnim za register endpoint, kao što je prikazano u prethodnom dijelu ovog članka.

U ovom primjeru, trebamo samo da konfigurišemo korisničko ime, e-mail, lozinku, ime i URL sajta. Sve ostalo je predodređeno kako bi sve članosti generisane na ovom Google Formsu slijedile isti obrazac proizvoda i statusa.

<!-- Screenshot unavailable: Zapier field mapping between Google Forms and Ultimate Multisite register endpoint -->

Nakon postavljanja informacija, nastavite do završnog testa. Na zadnjem ekranu možete vidjeti sva polja koja će biti poslata endpointu, njihove odgovarajuće informacije i polja koja će biti poslata prazna.<!-- Screenshot unavailable: Zapier test screen showing all fields to be sent to the register endpoint -->

Testirajte svoj novi Zap i trebalo bi da se završi uspješno. Ako dođe do bilo kakve greške, provjerite sva polja i da li se šalju ispravno. Budući da ima mnogo informacija, neke stvari mogu promašiti.

### Kompletan parametri endpointa

Evo kompletnog poziva i svih mogućnosti polja koja se mogu poslati.

"customer_id" : integer, "customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", }, "membership" : { "status" : "string", // jedan od "pending", "active", "trialing", "expired", "on-hold", "canceled" "date_expiration" : "string", "date_trial_end" : "string", "date_activated" : "string", "date_renewed" : "string", "date_cancellation" : "string", "date_payment_plan_completed": "string", }, "products" : [1,2], "duration" : "string", "duration_unit" : "string", "discount_code" : "string", "auto_renew" : "boolean", "country" : "string", "currency" : "string", "payment" { "status" : "string", // jedan od "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "canceled" }, "payment_method" : { "gateway" : "string", "gateway_customer_id" : "string", "gateway_subscription_id" : "string", "gateway_payment_id" : "string", }, "site" : { "site_url" : "string", "site_title" : "string", "publish" : "boolean", "template_id" : "string", }

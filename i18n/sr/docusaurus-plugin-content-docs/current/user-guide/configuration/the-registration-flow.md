---
title: Proces registracije
sidebar_position: 3
_i18n_hash: ae01b241f684c1a85d93bdc765eec135
---
# Proces registracije (v2)

_**VAŽNA NAPOMENA: Ovaj članak se odnosi na Ultimate Multisite verziju 2.x.**_

Korisnici mogu se registrovati na vašu mrežu na različite načine. Oni mogu koristiti vaš formular za registraciju ili link koji se deli za unapred odabran plan. Ovde ćemo vam pokazati kako vaši kupci mogu se registrovati na vašoj mreži koristeći dostupne putanje i šta se dešava nakon što se prijave na vašoj mreži.

## Korišćenje formulara za registraciju:

Ovo je standardni proces registracije. Kreirate stranicu za registraciju sa **formularom za plaćanje (checkout form)**, i to će biti mesto gde će vaši kupci otići da se registruju na vašoj mreži i pretplate planu. Možete imati više stranica za registraciju, svaka sa različitim formularima ako želite.

Podrazumevana stranica za registraciju je [_**vašdomen.com/register**_](http://yourdomain.com/register), ali možete to promeniti u bilo kom trenutku na **Ultimate Multisite > Settings > Login & Registration > Default Registration Page**.

Kada korisnik dođe na vašu stranicu za registraciju (obično klikom na dugme **Sign in** ili **Buy now**), videće tamo vaš formular za registraciju.

![Formular za registraciju prikazan na stranici za registraciju](/img/frontend/registration-form.png)

Evo primera kako izgleda formular za plaćanje na frontend-u:

![Frontend formular za registraciju pri plaćanju](/img/config/checkout-frontend-registration.png)

Sve što im je potrebno je da popune sve obavezne polja – email, korisničko ime, lozinku itd... – i plati plan ili potvrdi svoju e-mail adresu ako se registruju za besplatan plan ili plaćeni plan sa probnim periodom bez informacija o plaćanju.

Na stranici "Hvala" videće poruku koja im govori da li moraju da potvrde svoju e-mail adresu ili da li je njihov veb-sajt već aktivan i mogu početi da ga koriste.

![Halaman hvala nakon registracije](/img/frontend/registration-thank-you.png)

Ako je potrebno potvrditi e-mail adresu, moraju otići u svoj inbox i kliknuti na link za verifikaciju. Vaš sajt se neće aktivirati ako se e-mail adresa ne potvrdi.

Ako su se registrovali na plaćani plan ili nije obavezna e-mail verifikacija na vašoj mreži, njihov sajt će biti aktiviran odmah nakon prodažbine i prikazat će im link za prijavu na dashboard.

![Sajt je aktiviran sa linkom za prijavu na dashboard](/img/frontend/site-activated.png)

## Korišćenje deljivog linka (Shareable Link):

Proces registracije pomoću deljivog linka su u osnovi isti kao i formular za registraciju, jedina razlika je što korišćenjem deljivog linka, vaši kupci mogu imati unapred odabrani proizvod ili šablon sajta na formularu za prodažbu (pogledajte sekciju Pre-selecting products and templates via URL parameters) ili možda dodati kod kupona (pogledajte sekciju Using URL Parameters).

Proces registracije će biti isti: moraju uneti ime, korisničko ime, e-mail adresu, naziv sajta i naslov, itd... ali plan ili šablon sajta će im već biti unapred odabrani.

### Registracija pomoću ručnih plaćanja (Manual Payments):

Ako ne želite da koristite PayPal, Stripe ili bilo koji drugi platni gateway ponuđen Ultimate Multisite-om ili njegovim dodatnim integracijama, možete koristiti ručna plaćanja za svoje kupce. Na taj način, možete generisati fakturu koju će oni platiti na vašem predviđenom procesoru plaćanja nakon što se registruju na vašoj mreži.

Proces registracije će biti tačno isti kao gore, ali na stranici za registraciju vaši kupci će videti poruku da će dobiti e-mail sa daljim uputstvima kako bi završili plaćanje.

![Manual payment message during registration](/img/frontend/registration-manual-notice.png)

A nakon što se registracija završi, oni će videti uputstva za plaćanje koja ste postavili (i tako će ih dobiti i putem e-maila).

![Payment instructions shown after registration](/img/frontend/registration-payment-instructions.png)

Uputstva za plaćanje možete promeniti u **Ultimate Multisite > Settings > Payments** uključivanjem opcije **Manual**:

![Manual payment toggle with payment instructions field](/img/config/manual-gateway-settings.png)

Nakon što vaši kupci završe ručno plaćanje i pošalju vam potvrdu, morate **ručno potvrditi plaćanje** da biste aktivirali članstvo kupca i veb-sajt.

Da biste to uradili, idite u **Ultimate Multisite > Payments** i pronađite plaćanje kupca. Biće prikazan status **Pending** (Očekuje se).

![Payments list with pending manual payment](/img/admin/payments-list.png)

Kliknite na broj plaćanja i moći ćete da promenite njegov status u **Completed** (Završeno).

![Payment details page](/img/admin/payment-edit.png)

![Changing payment status to Completed](/img/admin/payment-status-completed.png)

Nakon što promenite status na **Completed**, trebalo bi da vidite poruku **Activate membership** (Aktiviraj članstvo). Prebacite ovu opciju na **on** (da je uključena) da biste aktivirali članstvo i veb-sajt koji su vezani za tog kupca. Zatim kliknite da sačuvate plaćanje (**Save Payment**).

![Activate membership toggle and Save Payment button](/img/admin/payment-activate-membership.png)

Vaš kupac će sada moći da pristupi dashboardu i svim funkcijama koje su pretplatila.

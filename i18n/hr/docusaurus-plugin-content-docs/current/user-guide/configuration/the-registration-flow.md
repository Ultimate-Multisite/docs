---
title: Proces registracije
sidebar_position: 3
_i18n_hash: ae01b241f684c1a85d93bdc765eec135
---
# Proces registracije (v2)

_**VAŽNA NAPOMENA: Ovaj članak se odnosi na Ultimate Multisite verziju 2.x.**_

Korisnici mogu se registrirati na vašu mrežu na različite načine. Mogu koristiti vaš obrazac za registraciju ili link koji je dijeljiv za unaprijed odabranu plan. Ovako ćemo vam pokazati kako vaši kupci mogu se registrirati na vašoj mreži koristeći dostupne putanje i što se događa nakon njihove registracije na vašoj mreži.

## Korištenje obrazca za registraciju: {#using-the-registration-form}

Ovo je standardni proces registracije. Kreirate stranicu za registraciju s **obrazcem za plaćanje (checkout form)**, i to će biti mjesto gdje će vaši kupci otići da se registriraju na vašoj mreži i pretplatiti plan. Možete imati više stranica za registraciju, svaka sa različitim obrazcem za registraciju ako želite.

Podrazumjetna stranica za registraciju je [_**vašdomen.com/register**_](http://yourdomain.com/register), ali možete to promijeniti u bilo kojem trenutku na **Ultimate Multisite > Settings > Login & Registration > Default Registration Page**.

Nakon što korisnik dođe na vašu stranicu za registraciju (obično klikom na gumb **Sign in** ili **Buy now**), on će vidjeti svoj obrazac za registraciju tamo.

![Registrački obrazac prikazan na stranici za registraciju](/img/frontend/registration-form.png)

Evo primjera obrazca za plaćanje kako izgleda na frontend-u:

![Frontend obrazac za registraciju pri plaćanju](/img/config/checkout-frontend-registration.png)

Sve što im treba je popuniti sve obvezne polja - e-mail, korisničko ime, lozinku itd... - i platiti plan ili potvrditi svoj e-mail adresu ako se registriraju za besplatan plan ili plaćeni plan s probnim periodom bez informacija o plaćanju.

Na stranici "Hvala" (Thank you), oni će vidjeti poruku koja im govori je li potrebno potvrditi e-mail adresu ili je njihov web stranica već aktiviran i mogu početi ga koristiti.

![Stranica zahvalnosti nakon registracije](/img/frontend/registration-thank-you.png)

Ako je potrebno potvrditi e-mail adresu, moraju otići u svoj inbox i kliknuti na link za provjeru. Vaša web stranica se neće aktivirati ako se e-mail adresa ne potvrdi.

Ako su se registrirali na plaćeni plan ili nije obavezna e-mail provjera na vašoj mreži, njihova web stranica će biti aktivirana odmah nakon kolačića i prikazat će im link za prijavu na svoj dashboard.

![Stranica aktivirana s linkom za prijavu na dashboard](/img/frontend/site-activated.png)

## Korištenje dijeljive veze (Shareable Link): {#using-a-shareable-link}

Proces registracije pomoću dijeljive veze je u osnovi isti kao i formular za registraciju, jedina razlika je što korištenjem dijeljive veze, vaši kupci mogu imati unaprijed odabrani proizvod ili šablon web stranice na formularu kolačića (referencirajte se na odjeljak Pre-selecting products and templates via URL parameters) ili možda dodan kupon kod (referencirajte se na odjeljak Using URL Parameters).

Proces registracije će biti isti: morat će unijeti ime, korisničko ime, e-mail adresu, naziv web stranice i naslov itd... ali plan ili šablon web stranice će im već biti unaprijed odabrani.

### Registracija pomoću ručnih plaćanja (Manual Payments): {#registering-using-manual-payments}

Ako ne želite koristiti PayPal, Stripe ili bilo koji drugi platni gateway ponuđen Ultimate Multisiteom ili njegovim dodacima, možete koristiti ručna plaćanja za svoje kupce. Na taj način, možete generirati račun za njih da ga plati na vašem preferiranom procesoru plaćanja nakon što se prijave na vašoj mreži.

Proces registracije će biti točno isti kao gore, ali na stranici za registraciju vaši kupci će vidjeti poruku da će dobiti e-mail s daljnjim uputama za dovršetak plaćanja.

![Manual payment message during registration](/img/frontend/registration-manual-notice.png)

A nakon što se registracija završi, oni će vidjeti upute za plaćanje koje ste postavili (i također ih će primiti putem e-maila).

![Payment instructions shown after registration](/img/frontend/registration-payment-instructions.png)

Upute za plaćanje možete promijeniti u **Ultimate Multisite > Settings > Payments** uključivanjem opcije **Manual**:

![Manual payment toggle with payment instructions field](/img/config/manual-gateway-settings.png)

Nakon što vaši kupci završe ručno plaćanje i pošalju vam potvrdu, trebate **ručno potvrditi plaćanje** kako biste aktivirali članstvo kupca i web stranicu.

Da biste to učinili, idite u **Ultimate Multisite > Payments** i pronađite plaćanje kupca. Biće prikazan status **Pending** (Očekuje se).

![Payments list with pending manual payment](/img/admin/payments-list.png)

Kliknite na broj plaćanja i moći ćete promijeniti njegov status u **Completed** (Završeno).

![Payment details page](/img/admin/payment-edit.png)

![Changing payment status to Completed](/img/admin/payment-status-completed.png)

Nakon što promijenite status na **Completed**, trebali biste vidjeti poruku **Activate membership** (Aktiviraj članstvo). Prebacite ovu opciju na **on** (uključeno) kako biste aktivirali članstvo i web stranicu povezane s tim kupcem. Zatim kliknite za **Save Payment** (Spremi plaćanje).

![Activate membership toggle and Save Payment button](/img/admin/payment-activate-membership.png)

Vaš kupac će tada moći pristupiti dashboardu i svim značajkama koje su pretplatio.

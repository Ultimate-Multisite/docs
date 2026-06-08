---
title: Tok registracije
sidebar_position: 3
_i18n_hash: ae01b241f684c1a85d93bdc765eec135
---
# Proces Registracije (v2)

_**VAŽNA NAPOMENA: Ovaj članak se odnosi na Ultimate Multisite verziju 2.x.**_

Korisnici mogu se registrovati na vašu mrežu na različite načine. Mogu koristiti vaš obrazac za registraciju ili dijeli link do unapred odabranog plana. Ovde ćemo vam pokazati kako vaši kupci mogu da se registruju na vašoj mreži koristeći dostupne puteve i šta se dešava nakon što se registruju.

## Korištenje Obrazca za Registraciju:

Ovo je standardni proces registracije. Kreirate stranicu za registraciju sa **obrazcem za plaćanje** (checkout form), i to je mjesto gdje će vaši kupci otići da se registruju na vašoj mreži i pretplate na neki plan. Ako želite, možete imati više stranica za registraciju, svaka sa drugačijim obrazcem za registraciju.

Podrazumevana stranica za registraciju je [_**yourdomain.com/register**_](http://yourdomain.com/register), ali to možete promijeniti u bilo kojem trenutku na **Ultimate Multisite > Settings > Login & Registration > Default Registration Page**.

Nakon što korisnik stigne na vašu stranicu za registraciju (obično klikom na dugme **Sign in** ili **Buy now**), tamo će vidjeti vaš obrazac za registraciju.

![Registration form displayed on the registration page](/img/frontend/registration-form.png)

Evo primjera obrazca za plaćanje kako izgleda na frontendu:

![Frontend checkout registration form](/img/config/checkout-frontend-registration.png)

Sve što moraju da urade jeste da popune sva obavezna polja – e-mail, korisničko ime, lozinku, itd... – i da plate za plan ili da potvrde svoju e-mail adresu ako se registruju za besplatni plan ili plaćeni plan sa probnim periodom bez informacija o plaćanju.

Na stranici "Hvala" (Thank you), videće poruku koja im govori da li moraju da potvrde svoju e-mail adresu ili da je njihov sajt već aktiviran i da mogu početi da ga koriste.

![Thank You page after registration](/img/frontend/registration-thank-you.png)

Ako je potrebna potvrda e-mail adrese, morat će otići u svoj e-mail inbox i kliknuti na link za verifikaciju. Njihov sajt neće biti aktiviran ako se e-mail adresa ne verifikuje.

Ako su se registrirali za plaćeni plan ili verifikacija e-mail adrese nije obavezna na vašoj mreži, njihov sajt će biti aktiviran odmah nakon plaćanja i biće im prikazan link za prijavu na svoj dashboard.

![Site activated with link to sign in to dashboard](/img/frontend/site-activated.png)

## Korištenje Dijelivog Linka:

Proces registracije korištenjem dijeli linka je u osnovi isti kao i sa obrazcem za registraciju; jedina razlika je u tome što, koristeći dijeli link, vaši kupci mogu imati proizvod ili šablon sajta preselektovan na obrazcu za plaćanje (pogledajte sekciju Pre-selecting products and templates via URL parameters) ili možda dodati kod popusta (pogledajte sekciju Using URL Parameters).

Proces registracije će biti isti: morat će popuniti ime, korisničko ime, e-mail adresu, naziv sajta, naslov, itd... ali plan ili šablon sajta će im već biti preselektovan.

### Registracija Korištenjem Ručnih Plaćanja:

Ako ne želite da koristite PayPal, Stripe ili bilo koju drugu plaćanja gateway koju nudi Ultimate Multisite ili njegove add-on integracije, možete koristiti ručna plaćanja za svoje kupce. Na ovaj način, možete generisati fakturu za njih da plate na vašem preferiranom procesu plaćanja nakon što se registruju na vašoj mreži.

Proces registracije će biti potpuno isti kao i gore, ali na stranici za registraciju vaši kupci će vidjeti poruku koja navodi da će dobiti e-mail sa daljim uputstvima za izvršavanje plaćanja.

![Manual payment message during registration](/img/frontend/registration-manual-notice.png)

I nakon što se registracija završi, videće uputstva za plaćanje koja ste vi postavili (i koja će ih takođe stići na e-mail).

![Payment instructions shown after registration](/img/frontend/registration-payment-instructions.png)

Uputstva za plaćanje se mogu promijeniti na **Ultimate Multisite > Settings > Payments** nakon uključivanja opcije plaćanja **Manual** (Ručno):

![Manual payment toggle with payment instructions field](/img/config/manual-gateway-settings.png)

Nakon što vaši kupci završe ručno plaćanje i pošalju vam potvrdu, morate **ručno potvrditi plaćanje** kako biste aktivirali članstvo i sajt kupca.

Za to, idite na **Ultimate Multisite > Payments** i pronađite plaćanje kupca. Trebalo bi da i dalje prikazuje status **Pending** (Očekuje).

![Payments list with pending manual payment](/img/admin/payments-list.png)

Kliknite na broj plaćanja i moći ćete da promijenite njegov status na **Completed** (Završeno).

![Payment details page](/img/admin/payment-edit.png)

![Changing payment status to Completed](/img/admin/payment-status-completed.png)

Nakon promjene statusa na **Completed**, trebali biste vidjeti poruku **Activate membership** (Aktiviraj članstvo). Uključite ovu opciju **on** da aktivirate članstvo i sajt povezan sa ovim kupcem. Zatim, kliknite na **Save Payment** (Sačuvaj plaćanje).

![Activate membership toggle and Save Payment button](/img/admin/payment-activate-membership.png)

Vaš kupac sada bi trebalo da ima pristup dashboardu i svim funkcijama na koje se pretplatio.

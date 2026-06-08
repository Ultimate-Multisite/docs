---
title: Stranica računa klijenta
sidebar_position: 14
_i18n_hash: 5eabf7a1ac4c1e867c6e627bbf1f2954
---
# Stranica klijentovog računa (v2)

_**VAŽNA NAPOMENA: Ovaj članak se odnosi na Ultimate Multisite verziju 2.x.**_

Kada klijenti pretplače plan na vašoj mreži, dobijaju pristup web stranici i njenom dashboardu sa važnim informacijama o njihovim plaćanjima, članstvima, domenima, ograničenjima planova itd.

U ovom tutorijalu, vodićemo vas kroz stranicu klijentovog računa i videćete šta vaši klijenti mogu da vide i šta mogu da urade unutar nje.

## Stranica računa

Stranici računa je dostupno klikom na **Account** unutar klijentovog dashboarda.

![Account menu in the customer dashboard](/img/account-page/account-menu.png)

![Customer account page overview](/img/account-page/overview.png)

Nakon što klijent klikne na to, videće pregled svog članstva, adrese za naplatu, faktura, domene, ograničenja stranice i biće u mogućnosti da promeni **Site Template** (ako je to dozvoljeno u vašoj mreži).

Takođe mogu promeniti članstvo na drugi plan, ili kupiti drugi paket ili uslugu koju vi nudite. Pogledajmo svaki deo posebno.

### Pregled vašeg članstva:

Prvi blok, odmah ispod imena web stranice vaših klijenata, prikazuje pregled trenutnog plana i usluga/paketa koji su sa njim kupljeni. Blok takođe prikazuje broj članstva, prvobitni iznos plaćen za njega, koliko košta plan i bilo koja usluga/paket, i koliko puta su naplaćeni za ovo članstvo. Takođe mogu videti da li je članstvo **Active** (Aktivno), **Expired** (Isteklo) ili **Canceled** (Otkazano).

![Membership overview showing plan, amount, and billing details](/img/account-page/membership-card.png)

Pravilno ispod ovog bloka, vaši klijenti mogu videti blokove **About This Site** (O ovoj stranici) i **Site Limits** (Ograničenja stranice). Ovi blokovi im prikazuju sva ograničenja koja dolaze sa njihovim planom: prostor na disku, objave, stranice, posete, itd... Ova ograničenja se mogu konfigurisati na svakoj stranici plana na **Ultimate Multisite > Products**.

![About This Site and Site Limits blocks showing plan limitations](/img/account-page/site-limits.png)

Na desnoj strani **Your Membership** (Vaše članstvo), klijenti mogu kliknuti na **Change** (Promeni). Ovo će im prikazati sve dostupne planove i pakete/usluge. Ako izaberu drugi plan, ograničenja za taj plan će stupiti na snagu umesto trenutnih ograničenja članstva – nije bitno da li smanjuju ili povećavaju plan.

Sada, ako vaši klijenti odluče da kupe pakete ili usluge za ovo trenutno članstvo – kao što je više prostora na disku ili poseta – trenutno članstvo se neće promeniti, već će samo novi paketi biti dodati.

Napomena da se kupon kodovi ne mogu dodati na ovoj stranici za promenu članstva. Ako je klijent koristio kupon kod prilikom prvog kupovanja članstva, kod će se primeniti i na ovo novo članstvo.

### Ažuriranje adrese za naplatu:

Na stranici računa, vaši klijenti takođe mogu ažurirati svoju adresu za naplatu. Samo moraju da kliknu na **Update** (Ažuriraj) pored _Billing Address_.

![Billing Address section with Update button](/img/account-page/billing-address.png)

Pojaviće se novo prozorče klijentu. Sve što treba da uradi je da popuni novu adresu i klikne na _Save Changes_ (Sačuvaj promene).

![Update billing address form](/img/account-page/billing-address-form.png)

### Promena Site Template-a:

Da biste omogućili klijentima da menjaju svoje site template-e, morate otići na **Ultimate Multisite > Settings > Sites** i uključiti opciju **Allow Template Switching**.

Takođe, na **Ultimate Multisite > Products**, izaberite svoje planove i idite na karticu **Site Templates**. Proverite da li je opcija **Allow Site Templates** uključena i na **Site Template Selection Mode**, da je izabrana opcija **Choose Available Site Templates**.

![Product site templates tab with template selection mode](/img/config/product-site-templates.png)

Bićete u mogućnosti da vidite sve dostupne site template-e na vašoj web stranici. Izaberite koje želite da učinite dostupnim i koje ne želite da budu dostupni vašim klijentima koji su pretplaćeni pod ovim planom. Napomena je da ova opcija takođe utiče na formular za naplatu, pa bilo koji template koji je odabran kao **Not Available** (Nije dostupan) neće se pojaviti na stranici za registraciju za ovaj plan.

Sada vaši klijenti mogu kliknuti na **Change Site Template** (Promeni site template) unutar svoje stranice računa.

![Change Site Template button on account page](/img/account-page/change-template-button.png)

Ultimate Multisite 2.10.0 prikazuje redizajnirani panel za prebacivanje template-a. Panel počinje sa **current-template card** (karticom trenutnog template-a) kako bi klijenti videli koji je template aktivan pre nego što izaberu zamenu.

Trajno vidljiva ostaje mreža dostupnih site template-a dok klijenti pregledavaju svoje opcije. Ovo im pomaže da uporede template-e dozvoljene za njihov plan bez gubitka vida trenutnog izbora.

![Available site templates list for the plan](/img/config/site-templates-list.png)

Nakon što izaberu onaj na koji žele da pređu, biće traženo da potvrde promenu.

![Site template switch confirmation dialog](/img/account-page/template-switch-confirm.png)

Nakon uključivanja potvrde i kliktanja na **Process Switch**, novi site template će biti korišćen na web stranici vašeg klijenta.

Klijenti takođe mogu koristiti **Reset current template** (Resetuj trenutni template) sa ovog panela kada je potrebno da vratite stranicu na trenutno dodeljeni template. Kao i prebacivanje na drugi template, resetovanje template-a može prepisati sadržaj stranice, pa klijenti bi trebalo da to potvrde samo kada razumeju akciju resetovanja.

### Dodavanje custom domena:

Vaši klijenti će takođe imati opciju da dodaju custom domen za ovaj plan na svoju stranicu računa. Da biste omogućili klijentima korišćenje custom domena, idite na **Ultimate Multisite > Settings >** **Domain Mapping**.

Uključite opciju **Enable Domain Mapping**. Ovo će omogućiti vašim klijentima korišćenje custom domena na nivou mreže.

Ne zaboravite da proverite i da li je mapiranje domena omogućeno po osnovu proizvoda – jer možete ograničiti proizvod tako da klijenti ne mogu koristiti custom domene.

Idite na **Ultimate Multisite > Products**. Izaberite plan po izboru i idite na karticu **Custom Domains**. Uključite opciju **Allow Custom Domains**.

![Custom Domains tab with Allow Custom Domains toggle](/img/config/product-custom-domains.png)

Ovo će omogućiti svim klijentima pretplaćenima za ovaj specifični plan da koriste custom domene. Sada, na stranici računa, vaši klijenti mogu dodati custom domen klikom na **Add Domain**.

![Add Domain button on the account page](/img/account-page/add-domain-button.png)

Prvo prozorče koje se otvori prikazati će klijentima poruku koja ih upućuje kako da ažuriraju svoje DNS rekorde kako bi ovaj custom domen radio na vašoj mreži.

![DNS instructions shown when adding a custom domain](/img/account-page/add-domain-dns.png)

Ovu poruku možete urediti (vi) na **Ultimate Multisite > Settings > Domain Mapping > Add New Domain Instructions**.

![Add New Domain Instructions setting in Domain Mapping](/img/config/settings-domain-mapping.png)

Evo punog prikaza stranice podešavanja mapiranja domena:

![Domain mapping settings full page](/img/config/settings-domain-mapping-full.png)

Nakon kliktanja na **Next Step**, klijenti mogu dodati ime svog custom domena i izabrati da li će ovaj custom domen biti primarni. Napomena je da vaši klijenti mogu koristiti više od jednog custom domena za svoje web stranice, pa mogu izabrati koji će biti primarni.

![Custom domain name entry with primary domain option](/img/account-page/add-domain-primary.png)

Nakon kliktanja na **Add Domain**, domen će biti dodan na račun vašeg klijenta. Sve što sada treba da urade je da promene DNS rekorde ovog custom domena kod svog registratora domena.

### Promena lozinke:

Unutar dashboarda računa, klijenti takođe mogu promeniti lozinku klikom na **Change Password**.

![Change Password button on account page](/img/account-page/change-password-button.png)

Pojaviće se novo prozorče gde klijenti moraju da unesu svoju trenutnu lozinku, a zatim da unesu novu lozinku koju žele da koriste.

![Change password form with current and new password fields](/img/account-page/change-password-form.png)

### Zona opasnosti:

Takođe imamo dve opcije koje su prikazane u delu **Danger Zone**: **Delete Site** (Obriši stranicu) i **Delete Account** (Obriši račun). Oba su u delu Danger Zone jer su ove dve akcije neopozivljive. Ako vaši klijenti obrišu svoju web stranicu ili svoj račun, ne mogu ih vratiti.

![Danger Zone with Delete Site and Delete Account options](/img/account-page/danger-zone.png)

Ako klijenti kliknu na bilo koju od ovih dve opcije, biće prikazano prozorče gde moraju da uključe opciju brisanja web stranice ili računa i upozoravaće ih da ova akcija ne može biti poništena.

![Delete Site confirmation dialog](/img/account-page/delete-site-confirm.png)

![Delete Account confirmation dialog](/img/account-page/delete-account-confirm.png)

Ako obrišu svoju web stranicu, njihov račun i članstvo će i dalje biti netaknuti. Gubeće samo sav sadržaj sa svoje web stranice. Ako obrišu svoj račun, svi web stranice, članstva i informacije vezane za ovaj račun će biti izgubljene.

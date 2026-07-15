---
title: Kako konfigurirati mapiranje domena
sidebar_position: 6
_i18n_hash: 5e3edfad8e0d51fa677f5c6f40a105e4
---
# Kako konfigurirati mapiranje domena (v2)

_**VAŽNA NAPOMENA: Ovaj članak se odnosi na Ultimate Multisite verziju 2.x.**_

Jedna od najmoćnijih funkcija premium mreže je mogućnost da našim klijentima ponudimo priliku da povežu domen najvišeg nivoa sa svojim stranicama. Na kraju krajeva, šta izgleda profesionalnije: [_**joesbikeshop.yournetwork.com**_](http://joesbikeshop.yournetwork.com) ili [_**joesbikeshop.com**_](http://joesbikeshop.com)? Zato Ultimate Multisite nudi ovu funkciju ugrađenu, bez potrebe za korištenjem dodataka trećih strana.

## Šta je mapiranje domena? {#whats-domain-mapping}

Kao što ime sugerira, mapiranje domena je mogućnost koju nudi Ultimate Multisite da primi zahtjev za prilagođeni domen i mapira taj zahtjev na odgovarajuću stranicu u mreži s tim konkretnim povezanim domenom.

### Kako postaviti mapiranje domena na vašoj Ultimate Multisite mreži {#how-to-setup-domain-mapping-on-your-ultimate-multisite-network}

Mapiranje domena zahtijeva određeno podešavanje s vaše strane da bi radilo. Srećom, Ultimate Multisite automatizira težak posao za vas, tako da lako možete ispuniti zahtjeve.

Tokom instalacije Ultimate Multisitea, čarobnjak će automatski kopirati i instalirati **sunrise.php** u određeni folder. **Čarobnjak vam neće dozvoliti da nastavite dok ovaj korak ne bude završen**.

<!-- Screenshot unavailable: Ultimate Multisite installation wizard with sunrise.php step -->

To znači da, nakon što čarobnjak za instalaciju Ultimate Multisitea završi postavljanje vaše mreže, možete odmah početi mapirati prilagođeni domen.

Imajte na umu da mapiranje domena u Ultimate Multisiteu nije obavezno. Imate opciju da koristite izvornu funkciju mapiranja domena WordPress Multisitea ili bilo koje drugo rješenje za mapiranje domena.

Ako trebate onemogućiti mapiranje domena Ultimate Multisitea kako biste omogućili druga rješenja za mapiranje domena, ovu funkciju možete onemogućiti pod **Ultimate Multisite > Postavke > Mapiranje domena**.

![Stranica postavki mapiranja domena koja prikazuje preusmjeravanje admina, poruku mapiranja i DNS opcije](/img/config/domain-mapping-settings.png)

Odmah ispod ove opcije možete vidjeti i opciju **Prisilno preusmjeravanje admina**. Ova opcija vam omogućava da kontrolišete da li će vaši korisnici moći pristupiti svom admin dashboardu i na svom prilagođenom domenu i na poddomenu, ili samo na jednom od njih.

Ako odaberete **Prisilno preusmjeri na mapirani domen** , vaši korisnici će moći pristupiti svom admin dashboardu samo na svojim prilagođenim domenima.

Opcija **Prisilno preusmjeri na** **mrežni domen** uradit će upravo suprotno - vašim korisnicima će biti dozvoljen pristup njihovim dashboardima samo na njihovom poddomenu, čak i ako se pokušaju prijaviti na svojim prilagođenim domenima.

A opcija **Dozvoli pristup adminu i putem mapiranog domena i putem mrežnog domena** omogućava im pristup njihovim admin dashboardima i na poddomenu i na prilagođenom domenu.

![Padajući meni Admin Redirect proširen i prikazuje tri opcije preusmjeravanja](/img/config/domain-mapping-redirect-options.png)

Postoje dva načina za mapiranje prilagođenog domena. Prvi je mapiranjem naziva domena iz admin dashboarda vaše mreže kao super admin, a drugi je putem admin dashboarda podstranice, na stranici Account.

Ali prije nego što počnete mapirati prilagođeni domen na jednu od podstranica u vašoj mreži, morate se pobrinuti da su **DNS postavke** naziva domena pravilno konfigurirane.

###

### Provjera da li su DNS postavke domena pravilno konfigurirane {#making-sure-the-domain-dns-settings-are-properly-configured}

Da bi mapiranje radilo, morate se pobrinuti da domen koji planirate mapirati pokazuje na IP adresu vaše mreže. Imajte na umu da vam je potrebna IP adresa mreže - IP adresa domena na kojem je instaliran Ultimate Multisite - a ne IP adresa prilagođenog domena koji želite mapirati. Za pretragu IP adrese određenog domena predlažemo da, na primjer, posjetite [Site24x7](https://www.site24x7.com/find-ip-address-of-web-site.html).

Da biste ispravno mapirali domen, trebate dodati **A RECORD** u svojoj **DNS** konfiguraciji koji pokazuje na tu **IP adresu**. DNS upravljanje se uveliko razlikuje među različitim registratorima domena, ali postoji mnogo tutorijala online koji to pokrivaju ako potražite " _Kreiranje A Recorda na XXXX_ " gdje je XXXX vaš registrator domena (npr.: " _Kreiranje A Recorda na_ _GoDaddy_ ").

Ako imate problema da ovo proradi, **kontaktirajte podršku svog registratora domena** i oni će vam moći pomoći s ovim dijelom.

Ako planirate dozvoliti svojim klijentima da mapiraju vlastite domene, oni će morati sami obaviti posao u ovom dijelu. Uputite ih na sistem podrške njihovog registratora ako ne mogu kreirati A Record.

### Mapiranje prilagođenog naziva domena kao Super Admin {#mapping-custom-domain-name-as-super-admin}

Kada ste prijavljeni kao super admin na svojoj mreži, možete lako dodavati i upravljati prilagođenim nazivima domena odlaskom na **Ultimate Multisite > Domeni**.

![Stranica liste domena u Ultimate Multisiteu](/img/admin/domains-list.png)

Na ovoj stranici možete kliknuti dugme **Dodaj domen** na vrhu i to će otvoriti modalni prozor gdje možete postaviti i popuniti **naziv prilagođenog domena** , **podstranicu** na koju želite primijeniti naziv prilagođenog domena, te odlučiti želite li ga postaviti kao **primarni domen** ili ne (imajte na umu da možete mapirati **više naziva domena na jednu podstranicu**).

![Modal za dodavanje domena s nazivom domena, biračem stranice i prekidačem za primarni domen](/img/admin/domain-add-modal.png)

Nakon što unesete sve informacije, možete kliknuti dugme **Dodaj postojeći domen** na dnu.

Ovo će pokrenuti proces provjere i dohvaćanja DNS informacija prilagođenog domena. Također ćete vidjeti zapisnik na dnu stranice kako biste mogli pratiti proces kroz koji prolazi. Ovaj proces može potrajati nekoliko minuta.

Ultimate Multisite v2.13.0 također automatski kreira interni zapis domene kada se nova stranica kreira na hostu koji treba tretirati kao domenu po stranici. Ako je host primarna domena mreže, ili jedna od zajedničkih osnovnih domena checkout-form konfigurisanih u **Site URL** polju, automatski zapis mapirane domene se preskače kako bi ta zajednička osnovna domena ostala dostupna svakoj stranici koja je koristi.

Kada kupac registruje novu domenu putem Domain Seller v1.3.0 ili novijeg, Ultimate Multisite automatski mapira registrovanu domenu na kupčevu mrežnu stranicu po zadanim postavkama. Administratori više ne moraju dodavati zaseban zapis mapirane domene nakon uspješne registracije, osim ako žele podesiti opcije kao što su oznaka primarne domene, stanje aktivacije ili SSL rukovanje.

**Stage** ili status bi se trebao promijeniti iz **Checking DNS** u **Ready** ako je sve pravilno postavljeno.

<!-- Screenshot unavailable: Red domene koji prikazuje Checking DNS fazu u listi domena -->

<!-- Screenshot unavailable: Red domene koji prikazuje Ready fazu sa zelenim indikatorom statusa -->

Ako kliknete na naziv domene, moći ćete vidjeti neke opcije unutar nje. Pogledajmo ih ukratko:

![Stranica detalja domene sa prekidačima za fazu, stranicu, aktivno, primarno i SSL](/img/admin/domain-edit.png)

**Stage:** Ovo je faza u kojoj se domena nalazi. Kada prvi put dodate domenu, vjerovatno će biti u fazi **Checking DNS**. Proces će provjeriti DNS unose i potvrditi da su ispravni. Zatim će domena biti postavljena u fazu **Checking SSL**. Ultimate Multisite će provjeriti da li domena ima SSL ili ne i kategorizirat će vašu domenu kao **Ready** ili **Ready (without SSL)**.

**Site:** Poddomena koja je povezana s ovom domenom. Mapirana domena će prikazivati sadržaj ove specifične stranice.

**Active:** Ovu opciju možete uključiti ili isključiti da aktivirate ili deaktivirate domenu.

**Is Primary Domain?:** Vaši kupci mogu imati više od jedne mapirane domene za svaku stranicu. Koristite ovu opciju da odaberete da li je ovo primarna domena za određenu stranicu.

**Is Secure?:** Iako Ultimate Multisite provjerava da li domena ima SSL certifikat ili ne prije nego što je omogući, možete ručno odabrati da se domena učitava sa ili bez SSL certifikata. Imajte na umu da ako web stranica nema SSL certifikat, a pokušate je prisilno učitati sa SSL-om, može vam prikazati greške.

### Mapiranje prilagođenog naziva domene kao korisnik podstranice {#mapping-custom-domain-name-as-subsite-user}

Administratori podstranica također mogu mapirati prilagođene nazive domena iz administratorskog dashboarda svoje podstranice.

Prvo morate osigurati da omogućite ovu opciju u postavkama **Domain mapping**. Pogledajte snimak ekrana ispod.

<!-- Screenshot unavailable: Postavke mapiranja domena koje omogućavaju korisnicima podstranica da mapiraju domene putem Customer DNS Management prekidača -->

Ovu opciju također možete postaviti ili konfigurisati na nivou **Plan** ili u opcijama proizvoda na **Ultimate Multisite > Products**.

![Odjeljak Prilagođene domene na stranici uređivanja proizvoda](/img/config/product-custom-domains.png)

Kada je bilo koja od tih opcija omogućena i korisniku podstranice je dozvoljeno mapiranje prilagođenih naziva domena, korisnik podstranice bi trebao vidjeti metabox na **Account** stranici pod nazivom **Domains**.

<!-- Screenshot unavailable: Domains metabox na Account stranici podstranice s dugmetom Add Domain -->

Korisnik može kliknuti dugme **Add Domain** i otvorit će se modalni prozor s nekim uputama.

<!-- Screenshot unavailable: Add Domain modal koji prikazuje upute za DNS A-zapis za korisnike podstranica -->

Korisnik zatim može kliknuti **Next Step** i nastaviti s dodavanjem prilagođenog naziva domene. Također može odabrati da li će ovo biti primarna domena ili ne.

<!-- Screenshot unavailable: Add Domain obrazac s poljem za prilagođeni naziv domene i prekidačem za primarnu domenu -->

<!-- Screenshot unavailable: Add Domain korak potvrde koji pokreće DNS verifikaciju -->

Klik na **Add Domain** će pokrenuti proces provjere i dohvaćanja DNS informacija prilagođene domene.

### O sinhronizaciji domena {#about-domain-syncing}

Sinhronizacija domena je proces u kojem Ultimate Multisite dodaje prilagođeni naziv domene na vaš hosting Account kao dodatnu domenu **da bi mapiranje domene radilo**.

Sinhronizacija domena se automatski dešava ako vaš hosting provajder ima integraciju s funkcijom mapiranja domena u Ultimate Multisite. Trenutno su ti hosting provajderi _Runcloud, Closte, WP Engine, Gridpane, WPMU Dev, Cloudways,_ i _Cpanel._

Kada je integracija s hosting provajderom aktivna, Ultimate Multisite također može dodati u red zadatak za kreiranje DNS-a ili poddomene na strani provajdera za novokreirane stranice. Ako nijedna integracija ne sluša taj zadatak, pozadinski posao se preskače kako bi se izbjegli unosi u red bez efekta. DNS i SSL provjere za mapirane domene nastavljaju se izvršavati kroz uobičajeni proces faza domene.

Morat ćete aktivirati ovu integraciju u postavkama Ultimate Multisite pod karticom **Integration**.

![Kartica Integrations u postavkama Ultimate Multisite koja prikazuje hosting provajdere](/img/config/integrations-tab.png)

<!-- Screenshot unavailable: Linkovi za konfiguraciju hosting provajdera na kartici postavki Integrations -->

_Imajte na umu da ako vaš hosting provajder nije jedan od gore navedenih provajdera, **morat ćete ručno sinhronizovati ili dodati naziv domene** na svoj hosting Account._

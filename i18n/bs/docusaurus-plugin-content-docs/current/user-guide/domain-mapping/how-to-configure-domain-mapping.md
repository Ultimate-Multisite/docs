---
title: Kako konfigurirati mapiranje domena
sidebar_position: 6
_i18n_hash: 70b0ea1fd4e24e701978329f52843452
---
# Kako konfigurirati mapiranje domena (v2)

_**VAŽNA NAPOMENA: Ovaj članak se odnosi na Ultimate Multisite verziju 2.x.**_

Jedna od najmoćnijih značajki premium mreže je mogućnost da našim klijentima ponudimo priliku da povežu vrhunski domen sa svojim sajtovima. Jer, šta izgleda profesionalnije: [_**joesbikeshop.yournetwork.com**_](http://joesbikeshop.yournetwork.com) ili [_**joesbikeshop.com**_](http://joesbikeshop.com)? Zato Ultimate Multisite nudi tu značajnost ugrađenu, bez potrebe za korišćenjem eksternih pluginova.

## Šta je mapiranje domena?

Kao što naziv sugerira, mapiranje domena je mogućnost koju Ultimate Multisite nudi da primi zahtjev za prilagođeni domen i mapira taj zahtjev na odgovarajući sajt u mreži sa priloženim tim domenom.

### Kako postaviti mapiranje domena na vaš Ultimate Multisite Network

Mapiranje domena zahtijeva da vi nešto postavite da bi funkcionisalo. Srećom, Ultimate Multisite automatizuje težak posao za vas, tako da možete lako ispuniti sve zahteve.

Tokom instalacije Ultimate Multisite, čarobnik će automatski kopirati i instalirati **sunrise.php** u određenu mapu. **Čarobnik neće dozvoliti nastavak sve dok ovaj korak nije završen**.

![Ultimate Multisite installation wizard with sunrise.php step](/img/installation/install-wizard.png)

To znači da, nakon što Ultimate Multisite instalacioni čarobnik završi sa postavljanjem vaše mreže, možete odmah početi sa mapiranjem prilagođenog domena.

Napomena: Mapiranje domena u Ultimate Multisite nije obavezno. Imate opciju da koristite ugrađenu funkciju mapiranja domena WordPress Multisite ili bilo neko drugo rješenje za mapiranje domena.

Ako trebate onemogućiti mapiranje domena Ultimate Multisite kako biste dali prostor drugim rješenjima za mapiranje domena, možete isključiti ovu značajnost pod **Ultimate Multisite > Settings > Domain Mapping**.

![Domain Mapping settings page showing admin redirect, mapping message and DNS options](/img/config/domain-mapping-settings.png)

Pravomoćno ispod ove opcije, vidjet ćete i opciju **Force Admin Redirect**. Ova opcija vam omogućava da kontrolišete da li će vaši klijenti moći da pristupe svom admin dashboardu kako preko svog prilagođenog domena, tako i preko poddomena, ili samo preko jednog od njih.

Ako odaberete **Force redirect to mapped domain**, vaši klijenti će moći da pristupe svom admin dashboardu samo preko svojih prilagođenih domena.

Opcija **Force redirect to network domain** uradiće upravo suprotno – vašim klijentima će biti dozvoljen pristup dashboardu samo preko poddomena, čak i ako pokušavaju da se prijave sa svojih prilagođenih domena.

A opcija **Allow access to the admin by both mapped domain domain and network domain** omogućava im pristup admin dashboardu kako preko poddomena, tako i preko prilagođenog domena.

![Admin Redirect dropdown expanded showing the three redirect options](/img/config/domain-mapping-redirect-options.png)

Postoje dva načina za mapiranje prilagođenog domena. Prvi je mapiranje domena sa admin dashboarda vaše mreže kao super admina, a drugi je preko admin dashboarda pod-sajta, u sekciji za račune.

Ali prije nego što počnete sa mapiranjem prilagođenog domena na jedan od pod-sajtova u vašoj mreži, morate biti sigurni da su **DNS postavke** tog domena pravilno konfigurisane.

###

### Osiguravanje da su DNS postavke domena pravilno konfigurisane

Da bi mapiranje funkcionisalo, morate biti sigurni da domen koji planirate da mapirate pokazuje na IP adresu vaše Mreže. Imajte na umu da vam je potrebna IP adresa Mreže – IP adresa domena na kojem je Ultimate Multisite instaliran – a ne IP adresa prilagođenog domena koji želite da mapirate. Da potražite IP adresu određenog domena, savjetujemo da posjetite [Site24x7](https://www.site24x7.com/find-ip-address-of-web-site.html), na primjer.

Da biste ispravno mapirali domen, morate dodati **A RECORD** u vašu **DNS** konfiguraciju koji pokazuje na tu **IP adresu**. Upravljanje DNS-om značajno varira između različitih registara domena, ali postoji mnogo tutorijala online koji pokrivaju to ako pretražujete " _Creating A Record on XXXX_ " gdje je XXXX vaš registar domena (npr.: " _Creating A Record on_ _GoDaddy_ ").

Ako naiđete na poteškoće sa ovim, **kontaktirajte podršku vašeg registra domena** i oni će vam moći pomoći s ovim dijelom.

Ako planirate da dozvolite svojim klijentima da mapiraju sopstvene domene, oni će morati da obave posao na ovom dijelu sami. Uputite ih ka sistemu podrške njihovog registra ako se nađu u situaciji da ne mogu kreirati A Record.

### Mapiranje prilagođenog domena kao Super Admin

Kada ste prijavljeni kao super admin na svojoj mreži, možete lako dodati i upravljati prilagođenim domenima idete pod **Ultimate Multisite > Domains**.

![Domains list page in Ultimate Multisite](/img/admin/domains-list.png)

Na ovoj stranici, možete kliknuti na dugme **Add Domain** na vrhu, što će otvoriti modalni prozor gdje možete postaviti i popuniti **ime prilagođenog domena**, **pod-sajt** na koji želite da primijenite prilagođeni domen, i odlučiti da li želite da ga postavite kao **primarni domen** ili ne (imajte na umu da možete mapirati **više domena na jedan pod-sajt**).

![Add Domain modal with domain name, site picker and primary domain toggle](/img/admin/domain-add-modal.png)

Nakon što unesete sve informacije, možete kliknuti na dugme **Add Existing Domain** na dnu.

Ovo će započeti proces provjere i dohvaćanja DNS informacija prilagođenog domena. Također ćete vidjeti log na dnu stranice kako biste pratili proces koji prolazi. Ovaj proces može trajati nekoliko minuta.

**Stage** ili status bi trebalo da se promijeni sa **Checking DNS** na **Ready** ako je sve pravilno postavljeno.

![Domain row showing the Checking DNS stage in the domains list](/img/admin/domain-stage-checking.png)

![Domain row showing the Ready stage with the green status indicator](/img/admin/domain-stage-ready.png)

Ako kliknete na ime domena, moći ćete da vidite neke opcije unutar njega. Pogledajmo ih:

![Domain detail page with stage, site, active, primary and SSL toggles](/img/admin/domain-edit.png)

**Stage:** Ovo je trenutni status domena. Kada prvi put dodate domen, vjerovatno će biti na **Checking DNS** statusu. Proces će provjeriti DNS unose i potvrditi da su ispravni. Zatim, domen će biti postavljen na **Checking SSL** status. Ultimate Multisite će provjeriti da li domen ima SSL ili ne i kategorizirati vaš domen kao **Ready** ili **Ready (without SSL)**.

**Site:** Poddomen koji je povezan sa ovim domenom. Mapirani domen će prikazati sadržaj ovog specifičnog sajta.

**Active:** Možete uključiti ili isključiti ovu opciju da aktivirate ili deaktivirate domen.

**Is Primary Domain?:** Vaši klijenti mogu imati više mapiranih domena za svaki sajt. Koristite ovu opciju da odaberete da li je ovo primarni domen za specifični sajt.

**Is Secure?:** Iako Ultimate Multisite provjerava da li domen ima SSL certifikat prije omogućavanja, možete ručno odabrati da ga učitate sa ili bez SSL certifikata. Imajte na umu da ako sajt nema SSL certifikat i pokušate ga prisilno učitati sa SSL-om, to može dati greške.

### Mapiranje prilagođenog domena kao korisnik pod-sajta

Administratori pod-sajtova takođe mogu mapirati prilagođene domene sa admin dashboarda svog pod-sajta.

Prvo, morate osigurati da uključite ovu opciju pod postavkama **Domain mapping**. Pogledajte snimak ekrana ispod.

![Domain mapping settings allowing subsite users to map domains via Customer DNS Management toggle](/img/config/domain-mapping-customer-dns.png)

Takođe možete postaviti ili konfigurirati ovu opciju na nivou **Plan** ili opcija proizvoda na **Ultimate Multisite > Products**.

![Custom Domains section on the product edit page](/img/config/product-custom-domains.png)

Kada su bilo koje od tih opcija uključene i korisniku pod-sajta je dozvoljeno mapiranje prilagođenih domena, korisnik pod-sajta bi trebao vidjeti metaboks pod stranicom **Account** nazvan **Domains**.

![Domains metabox on the subsite Account page with Add Domain button](/img/account-page/domains-metabox.png)

Korisnik može kliknuti na dugme **Add Domain**, što će otvoriti modalni prozor sa nekim uputstvima.

![Add Domain modal showing DNS A-record instructions for subsite users](/img/account-page/domain-add-instructions.png)

Korisnik zatim može kliknuti **Next Step** i nastaviti sa dodavanjem prilagođenog domena. Takođe može odabrati da li će ovo biti primarni domen ili ne.

![Add Domain form with custom domain name field and primary domain toggle](/img/account-page/domain-add-form.png)

![Add Domain confirmation step that triggers DNS verification](/img/account-page/domain-add-confirm.png)

Klik na **Add Domain** započeti će proces provjere i dohvaćanja DNS informacija prilagođenog domena.

### O sinhronizaciji domena

Domain Syncing je proces u kojem Ultimate Multisite dodaje prilagođeni domen na vaš hosting račun kao dodatak domen **da bi mapiranje domena funkcionisalo**.

Sinhronizacija domena automatski se dešava ako vaš hosting provajder ima integraciju sa funkcijom mapiranja domena Ultimate Multisite. Trenutno, ovi hosting provajderi su _Runcloud, Closte, WP Engine, Gridpane, WPMU Dev, Cloudways,_ i _Cpanel._

Morat ćete aktivirati ovu integraciju u postavkama Ultimate Multisite pod karticom **Integration**.

![Integrations tab in Ultimate Multisite settings showing hosting providers](/img/config/integrations-tab.png)

![Hosting provider Configuration links on the Integrations settings tab](/img/config/integrations-providers.png)

_Napomena: Ako vaš hosting provajder nije jedan od navedenih provajdera,**morat ćete ručno sinhronizovati ili dodati ime domena** na vaš hosting račun._

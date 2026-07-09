---
title: Klijentska Account stranica
sidebar_position: 14
_i18n_hash: f7b0d45273561b6a0754b736c4dc4e3f
---
# Account stranica vašeg klijenta (v2)

_**VAŽNA NAPOMENA: Ovaj članak se odnosi na Ultimate Multisite verziju 2.x.**_

Kada se korisnici pretplate na plan na vašoj mreži, dobijaju pristup web stranici i njenom Dashboardu s važnim informacijama o svojim plaćanjima, članstvima, domenama, ograničenjima plana itd...

U ovom vodiču ćemo vas provesti kroz stranicu korisničkog računa i vidjet ćete šta vaši korisnici mogu vidjeti i raditi unutar nje.

## Account stranica

Account stranici se pristupa klikom na **Account** unutar Dashboarda vašeg korisnika.

![Account meni u korisničkom Dashboardu](/img/account-page/account-menu.png)

Na mrežama suverenih zakupaca, Ultimate Multisite v2.13.0 zadržava ovo iskustvo upravljanja korisnicima na glavnoj web stranici. Ako korisnik otvori radnje za Account, naplatu, fakturisanje, fakturu, upravljanje web stranicom, promjenu predloška ili mapiranje domena iz suverenog zakupca, radnja upućuje nazad na korisnički panel glavne web stranice kako bi mrežni zapisi o fakturisanju i članstvu ostali mjerodavni.

Kada korisnik dođe iz suverenog zakupca, korisnički panel glavne web stranice može uključivati link za povratak na web stranicu zakupca. Link za povratak se prikazuje samo kada Ultimate Multisite može potvrditi cilj povratka kao jednu od korisnikovih web stranica, što sprječava proizvoljna preusmjeravanja uz očuvanje toka rada zakupca.

![Pregled stranice korisničkog računa](/img/account-page/overview.png)

Nakon što korisnik klikne na to, vidjet će pregled svog članstva, adrese za fakturisanje, faktura, domena, ograničenja web stranice, a također će moći promijeniti ****Predložak web stranice** (ako je to dozvoljeno na vašoj mreži)**.

Također mogu promijeniti članstvo na drugi plan ili kupiti drugi paket ili uslugu koju nudite. Pogledajmo svaki odjeljak zasebno.

### Pregled vašeg članstva:

Prvi blok odmah ispod naziva web stranice vaših korisnika prikazuje pregled njihovog trenutnog plana i usluga/paketa koji su kupljeni s njim. Blok također prikazuje broj članstva, početni iznos plaćen za njega, koliko koštaju plan i svaka usluga/paket te koliko puta im je naplaćeno za ovo članstvo. Također mogu vidjeti da li je članstvo **Aktivno** , **Isteklo** ili **Otkazano**.

![Pregled članstva koji prikazuje plan, iznos i detalje fakturisanja](/img/account-page/membership-card.png)

Odmah ispod ovog bloka, vaši korisnici mogu vidjeti blokove **O ovoj web stranici** i **Ograničenja web stranice**. Ovi blokovi im prikazuju sva ograničenja koja dolaze s njihovim planom: prostor na disku, objave, stranice, posjete itd... Ova ograničenja se mogu konfigurirati na stranici svakog plana u **Ultimate Multisite > Proizvodi**.

![Blokovi O ovoj web stranici i Ograničenja web stranice koji prikazuju ograničenja plana](/img/account-page/site-limits.png)

Na desnoj strani od **Vaše članstvo** , korisnici mogu kliknuti na **Promijeni**. To će im prikazati sve dostupne planove i pakete/usluge. Ako izaberu drugi plan, ograničenja za taj plan će stupiti na snagu umjesto trenutnih ograničenja članstva - nije važno da li ga smanjuju ili nadograđuju.

Sada, ako vaši korisnici izaberu kupovinu paketa ili usluga za ovo trenutno članstvo - kao što je više prostora na disku ili posjeta - trenutno članstvo se neće promijeniti, već će mu samo novi paketi biti dodani.

Imajte na umu da se kuponski kodovi ne mogu dodati na ovoj stranici promjene članstva. Ako je korisnik koristio kuponski kod pri prvoj kupovini članstva, kod će se također primijeniti na ovo novo članstvo.

### Ažuriranje adrese za fakturisanje:

Na Account stranici, vaši korisnici također mogu ažurirati svoju adresu za fakturisanje. Samo trebaju kliknuti na **Ažuriraj** pored _Adresa za fakturisanje_.

![Odjeljak Adresa za fakturisanje s dugmetom Ažuriraj](/img/account-page/billing-address.png)

Korisniku će se pojaviti novi prozor. Sve što treba uraditi je popuniti novu adresu i kliknuti na _Sačuvaj promjene_.

![Obrazac za ažuriranje adrese za fakturisanje](/img/account-page/billing-address-form.png)

### Promjena predloška web stranice:

Da biste svojim korisnicima omogućili promjenu predložaka web stranica, trebate otići na **Ultimate Multisite > Postavke > Web stranice** i uključiti opciju **Dozvoli promjenu predložaka**.

Također, u **Ultimate Multisite > Proizvodi**, odaberite svoje planove i idite na karticu **Predlošci web stranica**. Provjerite da li je opcija **Dozvoli predloške web stranica** uključena i da li je u **Način odabira predloška web stranice** odabrana opcija **Odaberi dostupne predloške web stranica**.

![Kartica predložaka web stranica proizvoda s načinom odabira predloška](/img/config/product-site-templates.png)

Moći ćete vidjeti sve dostupne predloške web stranica na svojoj web stranici. Odaberite koje želite učiniti dostupnim, a koje ne želite učiniti dostupnim svojim korisnicima pretplaćenim na ovaj plan. Imajte na umu da ove opcije također utiču na obrazac za naplatu, tako da se svaki predložak koji je odabran kao **Nije dostupno** neće pojaviti na stranici za registraciju za ovaj plan.

Sada vaši korisnici mogu kliknuti na **Promijeni predložak web stranice** unutar svoje Account stranice.

![Dugme Promijeni predložak web stranice na Account stranici](/img/account-page/change-template-button.png)

Ultimate Multisite 2.10.0 prikazuje redizajnirani panel za promjenu predloška. Panel počinje s **karticom trenutnog predloška** kako bi korisnici mogli vidjeti koji je predložak aktivan prije nego što izaberu zamjenu.

Stalna mreža dostupnih predložaka web stranica ostaje vidljiva dok korisnici pregledaju svoje opcije. To im pomaže da uporede predloške dozvoljene za njihov plan, a da ne izgube iz vida trenutni odabir.

![Lista dostupnih predložaka web stranica za plan](/img/config/site-templates-list.png)

Nakon što odaberu onaj na koji žele preći, bit će zamoljeni da potvrde promjenu.

![Dijalog za potvrdu promjene predloška web stranice](/img/account-page/template-switch-confirm.png)

Nakon uključivanja potvrde i klika na **Obradi promjenu** , novi predložak web stranice će se koristiti na web stranici vašeg korisnika.

Korisnici također mogu koristiti **Reset current template** iz ovog panela kada trebaju resetovati stranicu nazad na trenutno dodijeljeni predložak. Kao i pri prebacivanju na drugi predložak, resetovanje predloška može prepisati sadržaj stranice, pa korisnici to trebaju potvrditi samo kada razumiju radnju resetovanja.

### Dodavanje prilagođenih domena:

Vaši korisnici će također imati opciju da dodaju prilagođenu domenu za ovaj plan na svojoj stranici Account. Da biste omogućili svojim korisnicima korištenje prilagođenih domena, idite na **Ultimate Multisite > Settings >** **Domain Mapping**.

Uključite opciju **Enable Domain Mapping**. Ovo će omogućiti vašim korisnicima da koriste prilagođene domene na nivou mreže.

Ne zaboravite također provjeriti da li je domain mapping omogućen na osnovu proizvoda - jer možete ograničiti proizvod tako da ne dozvoljava vašim korisnicima korištenje prilagođenih domena.

Idite na **Ultimate Multisite > Products**. Odaberite plan po svom izboru i idite na karticu **Custom Domains**. Uključite opciju **Allow Custom Domains**.

![Kartica Custom Domains s prekidačem Allow Custom Domains](/img/config/product-custom-domains.png)

Ovo će omogućiti svim korisnicima pretplaćenim na ovaj specifični plan da koriste prilagođene domene. Sada, na stranici Account, vaši korisnici mogu dodati prilagođenu domenu klikom na **Add Domain**.

![Dugme Add Domain na stranici account](/img/account-page/add-domain-button.png)

Prvi prozor koji se otvori prikazat će vašim korisnicima poruku s uputama kako da ažuriraju svoje DNS zapise kako bi ova prilagođena domena radila na vašoj mreži.

![DNS upute prikazane pri dodavanju prilagođene domene](/img/account-page/add-domain-dns.png)

Ova poruka se može urediti (od strane vas) na **Ultimate Multisite > Settings > Domain Mapping > Add New Domain Instructions**.

![Postavka Add New Domain Instructions u Domain Mapping](/img/config/settings-domain-mapping.png)

Evo kompletnog prikaza stranice postavki za domain mapping:

![Kompletna stranica postavki za domain mapping](/img/config/settings-domain-mapping-full.png)

Nakon klika na **Next Step** , vaši korisnici mogu dodati naziv svoje prilagođene domene i odabrati da li će ova prilagođena domena biti primarna. Imajte na umu da vaši korisnici mogu koristiti više od jedne prilagođene domene za svoje web stranice, tako da mogu odabrati koja će biti primarna.

![Unos naziva prilagođene domene s opcijom primarne domene](/img/account-page/add-domain-primary.png)

Nakon klika na **Add Domain** , domena će biti dodana na račun vašeg korisnika. Sve što sada trebaju uraditi je promijeniti DNS zapise ove prilagođene domene kod svog registrara domena.

### Promjena lozinke:

Unutar Account dashboarda, vaši korisnici također mogu promijeniti svoju lozinku klikom na **Change Password**.

![Dugme Change Password na stranici account](/img/account-page/change-password-button.png)

Ovo će prikazati novi prozor u kojem će vaši korisnici morati unijeti svoju trenutnu lozinku, a zatim unijeti novu lozinku koju žele koristiti.

![Obrazac za promjenu lozinke s poljima za trenutnu i novu lozinku](/img/account-page/change-password-form.png)

### Opasna zona:

Također imamo dvije opcije koje su prikazane u dijelu **Danger Zone**: **Delete Site** i **Delete Account**. Obje se nalaze u dijelu Danger Zone jer su ove dvije radnje nepovratne. Ako vaši korisnici obrišu svoju web stranicu ili svoj račun, ne mogu ih vratiti.

![Danger Zone s opcijama Delete Site i Delete Account](/img/account-page/danger-zone.png)

Ako vaši korisnici kliknu na bilo koju od ove dvije opcije, prikazat će im se prozor u kojem će morati uključiti opciju za uklanjanje web stranice ili računa i bit će upozoreni da se ova radnja ne može poništiti.

![Dijalog za potvrdu Delete Site](/img/account-page/delete-site-confirm.png)

![Dijalog za potvrdu Delete Account](/img/account-page/delete-account-confirm.png)

Ako obrišu svoju web stranicu, njihov račun i članstvo će i dalje ostati netaknuti. Samo će izgubiti sav sadržaj na svojoj web stranici. Ako obrišu svoj račun, sve web stranice, članstva i informacije povezane s ovim računom bit će izgubljene.

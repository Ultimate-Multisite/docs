---
title: Stranica računa klijenta
sidebar_position: 14
_i18n_hash: f7b0d45273561b6a0754b736c4dc4e3f
---
# Stranica računa vašeg klijenta (v2) {#your-clients-account-page-v2}

_**VAŽNA NAPOMENA: Ovaj članak se odnosi na Ultimate Multisite verziju 2.x.**_

Kada kupci pretplate plan na vašoj mreži, dobivaju pristup web stranici i njenom dashboardu s važnim informacijama o plaćanjima, članstvima, domenima, ograničenjima plana itd...

U ovom tutorijalu vodit ćemo vas kroz stranicu računa klijenta i vidjet ćete što vaši kupci mogu vidjeti i raditi unutar nje.

## Stranica računa {#the-account-page}

Stranica računa se može pristupiti klikom na **Account** (Račun) unutar dashboarda vašeg klijenta.

![Menu računa u dashboardu klijenta](/img/account-page/account-menu.png)

Na sovereign tenant mrežama, Ultimate Multisite v2.13.0 zadržava ovaj korisnički interfejs za upravljanje klijentima na glavnoj stranici. Ako kupac otvori račun, procijelu (checkout), fakturiranje, račun, upravljanje stranicom, promjenu šablona ili mapiranje domena iz sovereign tenant mrežnog okruženja, akcija se vraća na panel računa glavne stranice kako bi se podaci o plaćanjima i članstvima mreže zadržali kao autoritativni.

Kada kupac dođe iz sovereign tenant mrežnog okruženja, glavni panel računa može uključivati link za povratak na stranicu tog tlocrta (tenant site). Link za povratak se prikazuje samo kada Ultimate Multisite može provjeriti da li je cilj povratka jedna od stranica klijenta, što sprječava proizvoljne redirekcije dok se zadržava radni tok tlocrta.

![Pregled stranice računa klijenta](/img/account-page/overview.png)

Nakon što kupac klikne na tu opciju, vidjet će pregled svog članstva, adrese za fakturiranje, računa, domena, ograničenja stranice i također će moći promijeniti ****Site Template** (ako je to dopušten u vašoj mreži).

Može promijeniti i članstvo na drugi plan, ili kupiti drugi paket ili uslugu koju nudi. Hajde da pogledamo svaki od dijelova pojedinačno.

### Pregledak Vašeg članstva: {#your-membership-overview}

Prvi blok odmah ispod imena web stranice vaših kupaca prikazuje pregled trenutnog plana i usluga/paketa koje su se kupile s njim. Blok također prikazuje broj članstva, početnu uplatu za njega, koliko košta plan i bilo koji paket/usluga te koliko puta je obračunata naplata za to članstvo. Također mogu vidjeti je li članstvo **Aktivo**, **Istečeno** ili **Otkaženo**.

![Pregled članstva prikazuje plan, iznos i detalje naplate](/img/account-page/membership-card.png)

Bezdesno ispod ovog bloka, vaši kupci mogu vidjeti blokove **O ovoj stranici** i **Ograničenja stranice**. Ovi blokovi im pokazuju sve ograničenja koja dolaze s njihovim planom: prostor na disk, postovi, stranice, posjete itd... Ova ograničenja se mogu konfigurirati na svakoj stranici plana u **Ultimate Multisite > Products**.

![Blokovi O ovoj stranici i Ograničenja stranice prikazuju ograničenja plana](/img/account-page/site-limits.png)

Na desnoj strani **Vašeg članstva**, kupci mogu kliknuti na **Promijeni**. Ovo im će prikazati sve dostupne planove i pakete/usluge. Ako odaberu drugi plan, ograničenja za taj plan će stupiti na snagu umjesto trenutnih ograničenja članstva – ne bitno je da li se radi o sniženju ili nadogradnji.

Sada, ako vaši kupci odluče kupiti pakete ili usluge za ovo trenutno članstvo – poput više prostora na disk ili posjeta – trenutno članstvo se neće promijeniti, već će samo novi paketi biti dodani njemu.

Napomena: Kodu kupona ne možete dodati na stranici promjene članstva. Ako je kupac koristio kod kupona prilikom prve kupnje članstva, taj kod će također primijeniti na ovo novo članstvo.

### Ažuriranje naplatne adrese: {#updating-the-billing-address}

Na stranici računa, kupci mogu ažurirati i adresu za fakturiranje. Samo treba kliknuti na **Ažuriraj** pored _Billing Address_ (Adresa za fakturiranje).

![Odjeljak Adresa za fakturiranje s gumbom Ažuriraj](/img/account-page/billing-address.png)

Otvorit će se novo prozor za vašeg kupca. Sve što mu treba je popuniti novu adresu i kliknuti na _Save Changes_ (Spremi promjene).

![Obrazac za ažuriranje adrese za fakturiranje](/img/account-page/billing-address-form.png)

### Promjena šablona stranice: {#changing-the-site-template}

Da biste omogućili kupcima da mijenjaju teme stranica, trebate otići u **Ultimate Multisite > Settings > Sites** i uključiti opciju **Allow Template Switching** (Dozvoljavaj promjenu šablona).

Također, u **Ultimate Multisite > Products**, odaberite svoje planove i idite na karticu **Site Templates**. Provjerite da je opcija **Allow Site Templates** (Dozvoli teme stranice) uključena i da je na **Site Template Selection Mode** (Mod za odabir šablona stranice) odabrana opcija **Choose Available Site Templates** (Odaberite dostupne šablone stranica).

![Kartica proizvoda s šablonima stranica i modom odabira šablona](/img/config/product-site-templates.png)

Moći ćete vidjeti sve dostupne teme stranica na vašoj web stranici. Odaberite koje želite učiniti dostupnim i koje ne želite da budu dostupne kupcima pretplatnicima pod ovim planom. Napomena: ove opcije također utječu i na obrazac za plaćanje, tako da bilo koji šablon označen kao **Not Available** (Nije dostupan) neće biti vidljiv na stranici za registraciju za ovaj plan.

Sada se kupci mogu kliknuti na **Change Site Template** (Promijeni šablon stranice) unutar svoje stranice računa.

![Gumb Promijeni šablon stranice na stranici računa](/img/account-page/change-template-button.png)

Ultimate Multisite 2.10.0 prikazuje redizajniran panel za promjenu šablona. Panel počinje **current-template card** (karticom trenutnog šablona), tako da kupci mogu vidjeti koji je šablon aktivan prije nego što odaberu zamjenski.

Trajna mreža dostupnih šablona za web stranice ostaje vidljiva dok kupci pregledavaju svoje opcije. To im pomaže da upare šablone dozvoljene za njihov plan bez gubitka pregleda trenutne selekcije.

![Lista dostupnih šablona za web stranice za plan](/img/config/site-templates-list.png)

Nakon što odaberu onaj koji žele promijeniti, bit će im traženo da potvrde promjenu.

![Dijalog za potvrdu promjene šablona web stranice](/img/account-page/template-switch-confirm.png)

Nakon što uključite potvrdu i kliknete na **Process Switch** (Usprijediti promjenu), novi šablon za web stranicu će se koristiti na web stranici vašeg klijenta.

Kupci mogu također koristiti opciju **Reset current template** (Pristavi trenutni šablon) iz ovog panela kada im je potrebno vratiti web stranicu na trenutno dodijeljen šablon. Kao i pri prelasku na drugi šablon, resetiranje šablona može prebrisati sadržaj web stranice, tako da kupci bi trebali potvrditi to samo kada shvate rad akcije resetiranja.

### Dodavanje prilagođenih domena: {#adding-custom-domains}

Vaši klijenti također imaju opciju dodavanja prilagođenog domena za ovaj plan na stranici računa. Da biste omogućili vašim klijentima korištenje prilagođenih domena, idite na **Ultimate Multisite > Settings >** **Domain Mapping**.

Uključite opciju **Enable Domain Mapping** (Omogućite mapiranje domena). To će omogućiti vašim klijentima korištenje prilagođenih domena na nivou mreže.

Ne zaboravite također provjeriti je li mapiranje domena uključeno na osnovu proizvoda – jer možete ograničiti proizvod da ne dozvoljava vašim klijentima korištenje prilagođenih domena.

Idite na **Ultimate Multisite > Products**. Odaberite plan koji vam odgovara i idite na karticu **Custom Domains** (Prilagođeni domeni). Uključite opciju **Allow Custom Domains** (Dozvoli prilagođene domene).

![Kartica Prilagođeni domeni s prekidačem Allow Custom Domains](/img/config/product-custom-domains.png)

Ovo će omogućiti svim kupcima koji su pretplatnici ovog specifičnog plana da koriste vlastite domene. Sada, na stranici za račun (Account page), vaši kupci mogu dodati vlastitu domenu klikom na **Dodaj domen** (Add Domain).

![Gumb Dodaj Domen na stranici računa](/img/account-page/add-domain-button.png)

Prvo prozor koje se otvori će vašim kupcima prikazati poruku koja im objašnjava kako ažurirati svoje DNS zapise kako bi ova vlastita domena radila u vašoj mreži.

![Instrukcije za DNS prikazane prilikom dodavanja vlastite domene](/img/account-page/add-domain-dns.png)

Ovu poruku možete urediti (vi) na **Ultimate Multisite > Settings > Domain Mapping > Add New Domain Instructions**.

![Postavka Dodaj nove instrukcije za domen u Mapiranju domena](/img/config/settings-domain-mapping.png)

Evo kompletnog pregleda stranice podešavanja mapiranja domena:

![Kompletan prikaz postavki mapiranja domena](/img/config/settings-domain-mapping-full.png)

Nakon klikanja na **Sljedeći korak** (Next Step), vaši kupci mogu unijeti ime svoje vlastite domene i odabrati da li će ova vlastita domena biti primarna. Napomena je da vaši kupci mogu koristiti više od jedne vlastite domene za svoje web stranice, tako da mogu odabrati koju će biti primarna.

![Unos imena vlastite domene s opcijom primarne domene](/img/account-page/add-domain-primary.png)

Nakon klikanja na **Dodaj domen** (Add Domain), domen će se dodati računu vašeg kupca. Sve što im je sada potrebno je promijeniti DNS zapise za ovu vlastitu domenu kod njihovog registratora domena.

### Promjena lozinke: {#changing-password}

Unutar dashboard-a računa, vaši kupci takođe mogu promijeniti lozinku klikom na **Promijeni lozinku** (Change Password).

![Gumb Promijeni Lozinku na stranici računa](/img/account-page/change-password-button.png)

Ovo će prikazati novo prozor gdje će vaši kupci morati unijeti svoju trenutnu lozinku i zatim unijeti novu lozinku koju žele koristiti.

![Obrazac za promjenu lozinke s poljima za trenutnu i novu lozinku](/img/account-page/change-password-form.png)

### Zona opasnosti: {#danger-zone}

Imamo također dvije opcije koje su prikazane u dijelu **Danger Zone**: **Obriši stranicu** (Delete Site) i **Obriši račun** (Delete Account). Obje su u Zoni opasnosti jer su ove dvije radnje neobratne. Ako vaši kupci obrišu svoju web stranicu ili svoj račun, ne mogu ih vratiti.

![Zona opasnosti s opcijama Obriši stranicu i Obriši račun](/img/account-page/danger-zone.png)

Ako kliknu na bilo koju od ovih dvije opcije, prikazat će im se prozor gdje će morati uključiti opciju za uklanjanje web stranice ili računa i bit će im upozoreno da ova radnja ne može biti obrisana.

![Dialog potvrde brisanja stranice](/img/account-page/delete-site-confirm.png)

![Dialog potvrde brisanja računa](/img/account-page/delete-account-confirm.png)

Ako obrišu svoju web stranicu, njihov račun i članstvo ostaju nepromijenjeni. Samo će izgubiti sav sadržaj na svojoj web stranici. Ako obrišu svoj račun, svi web stranice, članstva i informacije vezane za taj račun će biti izgubljene.

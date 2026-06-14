---
title: Stranica korisničkog naloga
sidebar_position: 14
_i18n_hash: f7b0d45273561b6a0754b736c4dc4e3f
---
# Vaša stran za korisnika (v2)

_**VAŽNA NAPOMENA: Ovaj članak se odnosi na Ultimate Multisite verziju 2.x.**_

Kada kupci pretplate na plan u vašoj mreži, dobijaju pristup veb-sajtu i njegovom dashboardu sa važnim informacijama o plaćanjima, članstvima, domenima, ograničenjima plana itd...

U ovom tutorijalu vodićemo vas kroz stranicu za korisnika i videćete šta vaši kupci mogu da vide i rade unutar nje.

## Stranica za korisnika (The Account Page)

Stranica za korisnika se može pristupiti klikom na **Account** (Korisnički nalog) unutar dashboard-a vašeg kupca.

![Meni naloga u dashboardu kupca](/img/account-page/account-menu.png)

Na sovereign tenant mrežama, Ultimate Multisite v2.13.0 zadržava ovo iskustvo upravljanja korisnicima na glavnoj lokaciji (main site). Ako kupac otvori nalog, proveri plaćanje, fakturu, upravljanje sajtom, promenu šablona ili mapiranje domena iz sovereign tenant-a, akcija se vraća na panel za korisnike glavne lokacije kako bi se podaci o plaćanjima i članstvima mreže zadržali kao autoritativni.

Kada kupac dođe iz sovereign tenant-a, glavni panel za korisnike može uključivati link povratka na stranicu tog tenant-a. Link povratka se prikazuje samo kada Ultimate Multisite može da validira cilj povratka kao jedan od sajta kupca, što sprečava proizvoljne preusmeravanja dok se zadržava radni tok (workflow) tenant-a.

![Pregled stranice za korisnika](/img/account-page/overview.png)

Nakon što klikne na nju, oni će videti pregled svog članstva, adrese za fakturisanje, faktura, domene, ograničenja sajta i takođe će moći da promenite ****Site Template** (ako je to dozvoljeno u vašoj mreži).

Možete takođe promeniti članstvo na drugi plan ili kupiti drugi paket ili uslugu koju nudite. Hajde da pogledamo svaki od sekcija pojedinačno.

### Pregledak Vašeg Članstva:

Prvi blok odmah ispod imena sajta vaših kupaca prikazuje pregled trenutnog plana i usluga/paketa koje su se kupile sa njim. Blok takođe pokazuje broj članstva, početnu uplatu za njega, koliko košta plan i bilo koji servis/paket, kao i koliko puta je obračunata naplata za ovo članstvo. Takođe mogu videti da li je članstvo **Aktivo**, **Isteklo** ili **Otkaženo**.

![Pregled članstva prikazuje plan, iznos i detalje fakturisanja](/img/account-page/membership-card.png)

I odmah ispod ovog bloka, vaši kupci mogu videti blokove **O ovom sajtu** i **Granice sajta**. Ovi blokovi im pokazuju sve ograničenja koja dolaze sa njihovim planom: prostor na disku, postovi, stranice, posete itd... Ove granice se podem podešavati na svakoj stranici plana u **Ultimate Multisite > Products**.

![Blokovi O ovom sajtu i Granice sajta prikazuju ograničenja plana](/img/account-page/site-limits.png)

Na desnoj strani **Vaše članstvo**, kupci mogu kliknuti na **Promeni**. Ovo im će pokazati sve dostupne planove i pakete/usluge. Ako izaberu drugi plan, granice za taj plan će stupiti na snagu umesto trenutnih ograničenja članstva – ne bitno da li je snižavaju ili nadograduju ga.

Sada, ako vaši kupci odluče da kupuju pakete ili usluge za ovo trenutno članstvo – poput više prostora na disku ili poseta – trenutno članstvo se neće promeniti, već će samo novi paketi biti dodati njemu.

Napomena: kodovi kupona ne mogu se dodati na stranici za promenu članstva. Ako je kupac koristio kod kupona pri prvoj kupovini članstva, taj kod će takođe primeniti na ovo novo članstvo.

### Ažuriranje Adrese Fakturisanja:

Na stranici naloga, klijenti takođe mogu ažurirati adresu za fakturisanje. Samo treba da kliknu na **Update** pored _Billing Address_.

![Sekcija adrese za fakturisanje sa dugmetom Update](/img/account-page/billing-address.png)

Otvara se novo prozor za vašeg klijenta. Sve što mu je potrebno je da popuni novu adresu i klikne na _Save Changes_.

![Form za ažuriranje adrese za fakturisanje](/img/account-page/billing-address-form.png)

### Promena šablona sajta:

Da biste omogućili klijentima da menjaju šablone sajtova, morate otići na **Ultimate Multisite > Settings > Sites** i uključiti opciju **Allow Template Switching**.

Takođe, u **Ultimate Multisite > Products**, izaberite svoje planove i idite na karticu **Site Templates**. Proverite da je opcija **Allow Site Templates** uključena i na **Site Template Selection Mode**, odaberite opciju **Choose Available Site Templates**.

![Kartica za šablone sajtova proizvoda sa režimom izbora šablona](/img/config/product-site-templates.png)

Moći ćete da vidite sve dostupne šablone sajtova na vašem veb-sajtu. Izaberite koje želite da budete dostupni i koje ne želite da budu dostupne klijentima koji su pretplatnici pod ovim planom. Napomena: ove opcije takođe utiču i na formular za plaćanje, tako da bilo koji šablon koji je odabran kao **Not Available** neće biti prikazan na stranici za registraciju ovog plana.

Sada će vaši klijenti moći da kliknu na **Change Site Template** unutar svoje stranice naloga.

![Dugme Change Site Template na stranici naloga](/img/account-page/change-template-button.png)

Ultimate Multisite 2.10.0 prikazuje redosled šablona sajtova koji je ponovo dizajniran. Panel počinje karticom **current-template card** tako da klijenti mogu videti koji je šablon aktivan pre nego što izaberu zamenu.

Trajna mreža dostupnih šablona sajtova ostaje vidljiva dok kupci pregledavaju svoje opcije. To im pomaže da upare šablone dozvoljene za njihov plan bez gubitka kontrole nad trenutnim izborom.

![Lista dostupnih šablona sajtova za plan](/img/config/site-templates-list.png)

Nakon što izaberu onaj koji žele da menjaju, biće im zatraženo potvrđivanje promene.

![Dijalog za potvrdu promena šablona sajta](/img/account-page/template-switch-confirm.png)

Nakon što uključite potvrdu i kliknete na **Process Switch** (Proces promene), novi šablon sajta će se koristiti na sajtu vašeg kupca.

Kupci takođe mogu da koriste opciju **Reset current template** (Resetuj trenutni šablon) iz ovog panela kada im je potrebno vratiti sajt na trenutno dodeljeni šablon. Kao i pri prelasku na drugi šablon, resetovanje šablona može prebaciti sadržaj sajta, tako da kupci bi trebalo da ga potvrde samo kada razumeju akciju resetovanja.

### Dodavanje prilagođenih domena (Custom Domains):

Vaši kupci će imati opciju da dodaju prilagođeni domen za ovaj plan na svojoj stranici naloga. Da biste omogućili kupcima korišćenje prilagođenih domena, idite do **Ultimate Multisite > Settings >** **Domain Mapping**.

Uključite opciju **Enable Domain Mapping** (Omogućite mapiranje domena). Ovo će omogućiti vašim kupcima da koriste prilagođene domene na nivou mreže.

Ne zaboravite da proverite i da li je mapiranje domena uključeno na osnovu proizvoda – jer možete ograničiti određeni proizvod tako da ne dozvoljavate kupcima korišćenje prilagođenih domena.

Idite do **Ultimate Multisite > Products**. Izaberite plan koji vam odgovara i idite na karticu **Custom Domains** (Prilagođeni domeni). Uključite opciju **Allow Custom Domains** (Dozvoli prilagođene domene).

![Kartica Prilagođeni domeni sa prečicom za dozvolu prilagođenih domena](/img/config/product-custom-domains.png)

Ovo će omogućiti svim kupcima koji su pretplaćeni na ovaj specifičan plan da koriste prilagođene domene. Sada, na stranici za nalog (Account page), vaši kupci mogu dodati prilagođenu temu klikom na **Add Domain** (Dodaj domen).

![Dugme Add Domain na stranici naloga](/img/account-page/add-domain-button.png)

Prvo prozor koje se otvori će vašim kupcima prikazati poruku koja im daje uputstva kako da ažuriraju svoje DNS zapise kako bi ova prilagođena tema radila u vašoj mreži.

![Instrukcije za DNS prikazane prilikom dodavanja prilagođene domene](/img/account-page/add-domain-dns.png)

Ovu poruku možete uređivati (vi) na **Ultimate Multisite > Settings > Domain Mapping > Add New Domain Instructions** (Dodaj nove instrukcije za domen).

![Podešavanje Dodaj nove instrukcije za domen u Domain Mappingu](/img/config/settings-domain-mapping.png)

Evo kompletnog pregleda stranice podešavanja mapiranja domena:

![Kompletan prikaz stranice podešavanja mapiranja domena](/img/config/settings-domain-mapping-full.png)

Nakon klika na **Next Step** (Slede korak), vaši kupci mogu uneti ime svoje prilagođene domene i da izaberu da li će ova prilagođena tema biti primarna. Napomena je da vaši kupci mogu koristiti više od jedne prilagođene domene za svoje web sajtove, tako da mogu da izaberu koju će biti primarna.

![Unos imena prilagođene domene sa opcijom primarne domene](/img/account-page/add-domain-primary.png)

Nakon klika na **Add Domain** (Dodaj domen), domen će biti dodan u nalog vašeg kupca. Sve što im je sada potrebno je da izmene DNS zapise za ovaj prilagođeni domen na svom registru domena.

### Promena lozinke:

Unutar dashboard-a naloga, vaši kupci takođe mogu promeniti lozinku klikom na **Change Password** (Promeni lozinku).

![Dugme Change Password na stranici naloga](/img/account-page/change-password-button.png)

Ovo će prikazati novo prozor gde će vaši kupci morati da unesu trenutnu lozinku i zatim novu lozinku koju žele da koriste.

![Form za promenu lozinke sa poljima za trenutnu i novu lozinku](/img/account-page/change-password-form.png)

### Zona opasnosti:

Tako imamo dve opcije koje su prikazane u delu **Danger Zone**: **Obriši sajt** (Delete Site) i **Obriši nalog** (Delete Account). Obje su u Zoni opasnosti jer su ove dve akcije neobratne. Ako vaši kupci obrišu svoj veb-sajt ili nalog, ne mogu ga vratiti.

![Zona opasnosti sa opcijama Obriši sajt i Obriši nalog](/img/account-page/danger-zone.png)

Ako kliknu na bilo koju od ovih dve opcije, pojaviće se prozor u kojem će morati da uključite opciju za uklanjanje sajta ili naloga i biće upozoreni da ova akcija ne može biti obrisana.

![Prozor potvrde brisanja sajta](/img/account-page/delete-site-confirm.png)

![Prozor potvrde brisanja naloga](/img/account-page/delete-account-confirm.png)

Ako obrišu svoj sajt, njihov nalog i članstvo ostaju nepromenjeni. Samo će izgubiti sav sadržaj na svom sajtu. Ako obrišu svoj nalog, svi sajtovi, članstva i informacije vezane za taj nalog će biti izgubljeni.

---
title: Upravljanje porezima
sidebar_position: 4
_i18n_hash: 8b94c58406519f9c55fe837c6addfc12
---
# Upravljanje porezima

Ultimate Multisite ima modul za naplatu poreza ugrađen u naš osnovni dodatak, pa ako trebate naplaćivati porez na promet za svoje planove, pakete i usluge, to možete lako učiniti bez potrebe za instaliranjem bilo kakvih dodataka.

Za kompanije smještene u Evropi nudimo **dodatak** koji dodaje alate i funkcije za bolju **podršku VAT** usklađenosti.

Ultimate Multisite ne prijavljuje niti uplaćuje poreze vladi u vaše ime; mi vam jednostavno pomažemo da naplatite odgovarajuće poreze u trenutku transakcije. **I dalje ćete morati sami uplaćivati poreze.**

## Omogućavanje naplate poreza

Naplata poreza nije omogućena prema zadanim postavkama. Da biste je omogućili, trebate otići na **Ultimate Multisite > Postavke > Porezi** i uključiti postavku Omogući poreze.

![Prekidač Omogući poreze na vrhu stranice postavki poreza](/img/config/settings-taxes-enable.png)

Evo punog prikaza stranice postavki poreza:

![Cijela stranica postavki poreza](/img/config/settings-taxes-full.png)

Također možete pogledati postavke poreza za pojedinačne proizvode:

![Postavke poreza za proizvode](/img/config/settings-taxes.png)

### Porez isključen vs. porez uključen

Prema zadanim postavkama, sve cijene vaših proizvoda ne uključuju porez, što znači da porezi **nisu uključeni** u cijenu proizvoda. Ako utvrdimo da kupac treba platiti poreze za određenu kupovinu, dodat ćemo poreze **na** međuzbir.

Ako želite da porezi budu uključeni u cijenu vašeg proizvoda, to možete učiniti omogućavanjem postavke **Uključeni porez**.

![Red prekidača Uključeni porez ispod postavke Omogući poreze](/img/config/settings-taxes-inclusive.png)

Ne zaboravite **sačuvati** promjene koje ste napravili.

###

## Kreiranje poreskih stopa

Nakon što omogućite naplatu poreza, trebat ćete kreirati poreske stope za određene lokacije koristeći naš uređivač poreskih stopa.

Uređivaču možete pristupiti klikom na dugme **Upravljaj poreskim stopama** na bočnoj traci stranice postavki poreza.

![Link Upravljaj poreskim stopama u panelu Poreske stope na stranici postavki](/img/config/settings-taxes-manage-rates.png)

Na stranici uređivača poreskih stopa možete dodati nove poreske stope klikom na dugme **Dodaj novi red**.

![Tabela uređivača poreskih stopa s dugmetom Dodaj novi red na vrhu](/img/config/tax-rates-editor.png)

Svakoj poreskoj stopi trebate dati **naslov** (koristi se na fakturama). Zatim možete odabrati **državu** (obavezno), **saveznu državu/kanton,** i **grad** (oboje opcionalno) gdje će se ovaj porez naplaćivati. Na kraju dodajte **poresku stopu u procentima**.

### Poreske kategorije

Također možete kreirati više poreskih kategorija kako biste dodali različite poreske stope za različite vrste proizvoda.

Kliknite za **Dodaj novu poresku kategoriju** , zatim napišite naziv svoje kategorije i pritisnite **Kreiraj**.

![Dugme Dodaj novu poresku kategoriju na vrhu uređivača poreskih stopa](/img/config/tax-categories-add.png)

![Polje za unos naziva poreske kategorije u modalu za kreiranje kategorije](/img/config/tax-categories-create-modal.png)

Za pregled kategorija kliknite **Promijeni** i odaberite kategoriju kojoj želite dodati nove poreze.

![Padajuće dugme Promijeni za mijenjanje poreskih kategorija](/img/config/tax-categories-switch.png)

![Padajući izbornik za odabir poreske kategorije koji prikazuje dostupne kategorije](/img/config/tax-categories-select.png)

Poresku kategoriju za određeni proizvod možete postaviti tako što ćete otići na **stranicu za uređivanje proizvoda**, a zatim na karticu Porezi.

![Kartica poreza proizvoda s poreskom kategorijom i prekidačem za oporezivost](/img/config/product-taxes.png)

Na istom ekranu možete isključiti prekidač **Je li oporezivo?** kako biste obavijestili Ultimate Multisite da ne treba naplaćivati poreze za taj određeni proizvod.

## Podrška za evropski VAT

Kao što je ranije spomenuto, imamo dostupan dodatak za kupce u EU koji imaju dodatne zahtjeve zbog evropskih VAT propisa.

Naši VAT alati pomažu s nekoliko važnih stvari:

  * Jednostavno učitavanje EU VAT stopa;

  * Prikupljanje i validacija VAT broja - i obrnuto obračunavanje za subjekte oslobođene VAT-a (kao što su kompanije s važećim VAT brojevima);

Da biste instalirali taj dodatak, idite na **Ultimate Multisite > Postavke**, a zatim kliknite na link bočne trake **Pogledajte naše dodatke**.

![Bočna traka stranice postavki s linkom Pogledajte naše dodatke](/img/config/settings-taxes-addons-link.png)

Bit ćete preusmjereni na našu stranicu dodataka. Tamo možete potražiti **Ultimate Multisite VAT dodatak** i instalirati ga.

<!-- Screenshot unavailable: VAT add-on tile on the Add-ons page -->

<!-- Screenshot unavailable: VAT add-on Install Now dialog -->

Zatim idite na **Mrežni administrator > Dodaci** i aktivirajte taj dodatak za cijelu mrežu.

<!-- Screenshot unavailable: Network Activate action for the VAT add-on on the Plugins page -->

Ako se vratite na **karticu postavki poreza** , vidjet ćete dostupne nove opcije. Uključite opciju **Omogući VAT podršku** da biste omogućili nove VAT alate. Ne zaboravite **sačuvati** svoje postavke!

<!-- Screenshot unavailable: Enable VAT Support toggle in the Tax settings after add-on activation -->

### Učitavanje VAT poreskih stopa

Jedan od alata koje naša integracija dodaje jeste mogućnost učitavanja poreskih stopa za države članice EU. To se može uraditi posjetom stranici uređivača poreskih stopa nakon omogućavanja EU VAT podrške.

Na dnu stranice vidjet ćete opcije učitavanja VAT-a. Odabir vrste stope i klik na dugme **Ažuriraj EU VAT stope** povući će i automatski popuniti tabelu poreskim stopama za svaku državu članicu EU. Zatim je trebate samo sačuvati.

![Dugme Ažuriraj EU VAT stope na dnu uređivača poreskih stopa](/img/config/tax-rates-vat-pull.png)

Vrijednosti možete uređivati i nakon što ih učitate. Da biste to uradili, jednostavno uredite red tabele koji vam treba i kliknite da sačuvate nove vrijednosti.

### VAT validacija

Kada je VAT podrška omogućena, Ultimate Multisite će dodati dodatno polje u obrazac za naplatu, ispod polja adrese za naplatu. Polje će se prikazivati samo kupcima koji se nalaze u EU.

<!-- Screenshot unavailable: VAT Number field on the frontend checkout form below the billing address -->

Ultimate Multisite će zatim validirati PDV broj i ako se vrati kao važeći, primjenjuje se mehanizam obrnutog zaduženja, a poreska stopa se postavlja na 0% na toj narudžbi.

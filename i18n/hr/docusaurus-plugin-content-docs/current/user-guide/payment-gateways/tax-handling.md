---
title: Obrada poreza
sidebar_position: 4
_i18n_hash: 8b94c58406519f9c55fe837c6addfc12
---
# Obrada poreza

Ultimate Multisite ima modul za naplatu poreza ugrađen u naš osnovni plugin, pa ako trebate naplaćivati poreze na promet za svoje planove, pakete i usluge, to možete jednostavno učiniti bez potrebe za instaliranjem bilo kakvih dodataka.

Za tvrtke smještene u Europi nudimo **dodatak** koji dodaje alate i značajke za bolju **podršku usklađenosti s VAT-om**.

Ultimate Multisite ne prijavljuje niti uplaćuje poreze vladi u vaše ime; jednostavno vam pomažemo naplatiti odgovarajuće poreze u trenutku transakcije. **I dalje ćete morati sami uplaćivati poreze.**

## Omogućavanje naplate poreza

Naplata poreza nije omogućena prema zadanim postavkama. Da biste je omogućili, trebate otići na **Ultimate Multisite > Postavke > Porezi** i uključiti postavku Omogući poreze.

![Prekidač Omogući poreze na vrhu stranice postavki poreza](/img/config/settings-taxes-enable.png)

Evo cjelovitog prikaza stranice postavki poreza:

![Cijela stranica postavki poreza](/img/config/settings-taxes-full.png)

Možete također pregledati postavke poreza za pojedinačne proizvode:

![Postavke poreza za proizvode](/img/config/settings-taxes.png)

### Porez isključen naspram poreza uključenog

Prema zadanim postavkama, sve cijene vaših proizvoda ne uključuju porez, što znači da porezi **nisu uključeni** u cijenu proizvoda. Ako utvrdimo da korisnik treba platiti poreze za određenu kupnju, dodat ćemo poreze **povrh** međuzbroja.

Ako želite da porezi budu uključeni u cijenu vašeg proizvoda, to možete učiniti omogućavanjem postavke **Uključeni porez**.

![Redak prekidača Uključeni porez ispod postavke Omogući poreze](/img/config/settings-taxes-inclusive.png)

Ne zaboravite **spremiti** promjene koje ste napravili.

###

## Stvaranje poreznih stopa

Nakon što omogućite naplatu poreza, morat ćete stvoriti porezne stope za određene lokacije pomoću našeg uređivača poreznih stopa.

Uređivaču možete pristupiti klikom na gumb **Upravljaj poreznim stopama** na bočnoj traci stranice postavki poreza.

![Poveznica Upravljaj poreznim stopama u panelu Porezne stope na stranici postavki](/img/config/settings-taxes-manage-rates.png)

Na stranici uređivača poreznih stopa možete dodati nove porezne stope klikom na gumb **Dodaj novi redak**.

![Tablica uređivača poreznih stopa s gumbom Dodaj novi redak na vrhu](/img/config/tax-rates-editor.png)

Svakoj poreznoj stopi trebate dati **naslov** (koristi se na računima). Zatim možete odabrati **državu** (obavezno), **saveznu državu/regiju,** i **grad** (oboje neobavezno) gdje će se ovaj porez naplaćivati. Na kraju dodajte **poreznu stopu u postocima**.

### Porezne kategorije

Možete također stvoriti više poreznih kategorija kako biste dodali različite porezne stope za različite vrste proizvoda.

Kliknite za **Dodaj novu poreznu kategoriju** , zatim upišite naziv svoje kategorije i pritisnite **Stvori**.

![Gumb Dodaj novu poreznu kategoriju na vrhu uređivača poreznih stopa](/img/config/tax-categories-add.png)

![Polje za unos Naziv porezne kategorije u modalu za stvaranje kategorije](/img/config/tax-categories-create-modal.png)

Za pregledavanje kategorija kliknite **Prebaci** i odaberite kategoriju kojoj želite dodati nove poreze.

![Gumb padajućeg izbornika Prebaci za promjenu između poreznih kategorija](/img/config/tax-categories-switch.png)

![Padajući izbornik za odabir porezne kategorije koji prikazuje dostupne kategorije](/img/config/tax-categories-select.png)

Možete postaviti poreznu kategoriju za određeni proizvod tako da odete na **stranicu za uređivanje proizvoda**, a zatim na karticu Porezi.

![Kartica poreza proizvoda s poreznom kategorijom i prekidačem oporezivosti](/img/config/product-taxes.png)

Na tom istom zaslonu možete isključiti prekidač **Je li oporezivo?** kako biste obavijestili Ultimate Multisite da ne treba naplaćivati poreze za taj određeni proizvod.

## Podrška za europski VAT

Kao što je ranije spomenuto, imamo dodatak dostupan za korisnike u EU koji imaju dodatne zahtjeve zbog europskih VAT propisa.

Naši VAT alati pomažu s nekoliko važnih stvari:

  * Jednostavno učitavanje EU VAT stopa;

  * Prikupljanje i provjera VAT broja - te obrnuto oporezivanje za subjekte oslobođene VAT-a (kao što su tvrtke s važećim VAT brojevima);

Da biste instalirali taj dodatak, idite na **Ultimate Multisite > Postavke**, a zatim kliknite na poveznicu bočne trake **Provjerite naše dodatke**.

![Bočna traka stranice postavki s poveznicom Provjerite naše dodatke](/img/config/settings-taxes-addons-link.png)

Bit ćete preusmjereni na našu stranicu dodataka. Tamo možete potražiti **Ultimate Multisite VAT dodatak** i instalirati ga.

<!-- Snimka zaslona nedostupna: pločica VAT dodatka na stranici dodataka -->

<!-- Snimka zaslona nedostupna: dijalog Instaliraj sada za VAT dodatak -->

Zatim idite na **Mrežna administracija > Plugins** i aktivirajte taj dodatak na cijeloj mreži.

<!-- Snimka zaslona nedostupna: radnja Mrežno aktiviraj za VAT dodatak na stranici Plugins -->

Ako se vratite na **karticu Postavke poreza** , vidjet ćete dostupne nove opcije. Uključite opciju **Omogući VAT podršku** kako biste omogućili nove VAT alate. Ne zaboravite **spremiti** svoje postavke!

<!-- Snimka zaslona nedostupna: prekidač Omogući VAT podršku u postavkama poreza nakon aktivacije dodatka -->

### Dohvaćanje VAT poreznih stopa

Jedan od alata koje naša integracija dodaje jest mogućnost učitavanja poreznih stopa za države članice EU. To se može učiniti posjetom stranici uređivača poreznih stopa nakon omogućavanja EU VAT podrške.

Na dnu stranice vidjet ćete opcije dohvaćanja VAT-a. Odabir vrste stope i klik na gumb **Ažuriraj EU VAT stope** dohvatit će i automatski popuniti tablicu poreznim stopama za svaku državu članicu EU. Zatim je samo trebate spremiti.

![Gumb Ažuriraj EU VAT stope na dnu uređivača poreznih stopa](/img/config/tax-rates-vat-pull.png)

Možete također urediti vrijednosti nakon što ih dohvatite. Da biste to učinili, jednostavno uredite redak tablice koji vam treba i kliknite za spremanje novih vrijednosti.

### Provjera VAT-a

Kada je VAT podrška omogućena, Ultimate Multisite dodat će dodatno polje u obrazac checkouta, ispod polja adrese za naplatu. Polje će se prikazati samo korisnicima koji se nalaze u EU.

<!-- Snimka zaslona nedostupna: polje VAT broj na frontend obrascu checkouta ispod adrese za naplatu -->

Ultimate Multisite će zatim provjeriti VAT Number i ako se vrati kao valjan, primjenjuje se mehanizam obrnutog terećenja, a porezna stopa postavlja se na 0% za tu narudžbu.

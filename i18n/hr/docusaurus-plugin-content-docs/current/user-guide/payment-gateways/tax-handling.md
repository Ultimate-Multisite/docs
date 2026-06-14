---
title: Obrađivanje poreza
sidebar_position: 4
_i18n_hash: a331943b7d5764cc5f2277c08595b235
---
# Rukovanje porezom

Ultimate Multisite ima modul za prikupljanje poreza u našem osnovnom pluginu, tako da ako vam je potrebno prikupiti prodajne poreze na planove, pakete i usluge, možete to lako učiniti bez potrebe za instaliranjem bilo kakvih add-onova.

Za tvrtke smještene u Europi nudimo **add-on** koji dodaje alate i značajke kako bi bolje **podržali VAT** usklađenost.

Ultimate Multisite ne podnosi niti obračunava poreze za vas prema državi; mi jednostavno pomažemo vam pri prikupljanju odgovarajućih poreza u trenutku transakcije. **I dalje ćete morati sami podneti poreze.**

## Omogućavanje prikupljanja poreza

Prikupljanje poreza nije uključeno po defaultu. Da biste ga omogućili, trebate otići na **Ultimate Multisite > Settings > Taxes** i prebaciti opciju Enable Taxes (Omogući poreze) u aktivno stanje.

![Prekidač za omogućavanje poreza na vrhu stranice postavki poreza](/img/config/settings-taxes-enable.png)

Evo punog pregleda stranice postavki poreza:

![Puni prikaz postavki poreza](/img/config/settings-taxes-full.png)

Možete pregledati i postavke poreza za pojedinačne proizvode:

![Postavke poreza za proizvode](/img/config/settings-taxes.png)

### Porez isključen vs. Porez uključen

Po defaultu, all your product prices su isključeni od poreza, što znači da se porezi **ne uključuju** u cijenu proizvoda. Ako utvrdimo da kupac treba platiti poreze na određenu kupnju, dodat ćemo poreze **na vrh** podrazumijevane svote.

Ako preferirate da su porezi uključeni u cijenu vašeg proizvoda, možete to učiniti omogućivanjem postavke Inclusive Tax (Uključeni porez).

![Red prekidača za Uključeni porez ispod postavke Omogući poreze](/img/config/settings-taxes-inclusive.png)

Ne zaboravite **sačuvati** promjene koje ste napravili.

###

## Kreiranje stope poreza

Nakon što omogućite prikupljanje poreza, trebat će vam kreirati stope poreza za specifične lokacije koristeći naš editor stope poreza.

Možete pristupiti editoru klikom na gumb **Manage Tax Rates** (Upravljanje porezama) u bočnoj traci stranice podešavanja poreza.

![Link Manage Tax Rates u paneli Poreze na stranici podešavanja](/img/config/settings-taxes-manage-rates.png)

Na stranici editora poreza možete dodati nove Porezne Rateove (Tax Rates) klikom na gumb **Add new Row** (Dodaj novi red).

![Tabela editora poreza s gumbom Dodaj novi red na vrhu](/img/config/tax-rates-editor.png)

Morate svakoj poreskoj stopi dati **naslov** (koristi se na računima). Zatim možete odabrati **državu** (obavezno), **županiju**, i **grad** (oba su opcionalni) gdje će se ovaj porez primijeniti. Na kraju, dodajte **porezni procenat**.

### Kategorije poreza (Tax Categories)

Možete kreirati više Kategorija poreza kako biste dodali različite poreske stope za različite vrste proizvoda.

Kliknite na **Add new Tax Category** (Dodaj novu kategoriju poreza), zatim unesite ime svoje kategorije i pritisnite **Create** (Kreiraj).

![Gumb Dodaj novu kategoriju poreza na vrhu editora poreza](/img/config/tax-categories-add.png)

![Polje unosa Ime Kategorije poreza u modalu za kreiranje kategorije](/img/config/tax-categories-create-modal.png)

Da biste pregledali kategorije, kliknite na **Switch** (Prebaci) i odaberite kategoriju kojoj želite dodati nove poreze.

![Gumb Switch za prebacivanje između kategorija poreza](/img/config/tax-categories-switch.png)

![Dropdown selector Kategorije poreza koji prikazuje dostupne kategorije](/img/config/tax-categories-select.png)

Možete postaviti kategoriju poreza za određeni proizvod idući na **Product edit page** (Stranicu uređivanja proizvoda) i zatim na karticu Taxes (Porez).

![Kartica Poreze proizvoda s prekidačem Kategorije poreza i opredjeljive količine](/img/config/product-taxes.png)

Na istoj stranici možete isključiti prekidač **Is Taxable?** (Je li poresko obvezno?), kako biste Ultimate Multisite (Ultimate Multisite) poznali da ne treba obračunavati poreze na taj određeni proizvod.

## Podrška za europske PDV-e (European VAT Support)

Kao što smo ranije spominjali, imamo dodatak za kupce u EU koji imaju dodatne zahtjeve zbog europskih PDV propisa.

Naši alati za PDV pomažu kod nekoliko važnih stvari:

  * Lako učitavanje europskih PDV stope;

  * Prikupljanje i provjera PDV brojeva - te obrnuto naplaćivanje za subjekte bez PDV-a (kao što su tvrtke s važećim PDV brojevima);

Da biste instalirali taj dodatak, idite na **Ultimate Multisite > Settings** i zatim kliknite na link u bočnoj traci **Check our Add-ons**.

![Settings page sidebar with Check our Add-ons link](/img/config/settings-taxes-addons-link.png)

Preusmjerit ćete se na našu stranicu dodataka. Tamo možete pretražiti i instalirati **Ultimate Multisite VAT add-on**.

<!-- Screenshot unavailable: VAT add-on tile on the Add-ons page -->

<!-- Screenshot unavailable: VAT add-on Install Now dialog -->

Zatim, idite na **Network Admin > Plugins** i aktivirajte taj dodatak na cijelu mrežu.

<!-- Screenshot unavailable: Network Activate action for the VAT add-on on the Plugins page -->

Ako se vratite na karticu **Tax Settings**, vidjet ćete nove opcije koje su dostupne. Prebacite opciju **Enable VAT Support** kako biste omogućili nove PDV alate. Ne zaboravite **saveati** postavke!

<!-- Screenshot unavailable: Enable VAT Support toggle in the Tax settings after add-on activation -->

### Učitavanje PDV stope

Jedno od alata koje naša integracija dodaje je mogućnost učitavanja PDV stopa za države članice EU. To možete učiniti posjetivanjem stranice za uređivanje PDV stopa nakon što omogućite podršku za europski PDV.

Na dnu stranice ćete vidjeti opcije za povlačenje PDV-a (VAT). Odaberite tip stope i kliknite na gumb **Update EU VAT Rates** kako biste otvorili i automatski popunili tabelu s poreznim stopama za svaku državu članicu EU. Zatim je dovoljno samo spremiti promjene.

![Gumb Update EU VAT Rates u donjem dijelu urednika poreznih stopama](/img/config/tax-rates-vat-pull.png)

Možete uređivati vrijednosti nakon što ih povučete. Za to jednostavno uredite redak tabelu koji vam treba i kliknite za spremanje novih vrijednosti.

### Validacija PDV-a (VAT Validation)

Kada je podrška za PDV uključena, Ultimate Multisite će dodati dodatno polje u obrazac za plaćanje, ispod polja za adresu isporuke. Polje će se pojaviti samo za kupce koji su smješteni u EU.

<!-- Screenshot unavailable: Polje broja PDV-a na frontend obrascu za plaćanje ispod adrese isporuke -->

Ultimate Multisite zatim validira broj PDV-a i ako se vrati kao validan, primjenjuje se mehanizam obratne oporezivanja (reverse charge mechanism) i porezna stopa se postavlja na 0% za tu narudžbu.

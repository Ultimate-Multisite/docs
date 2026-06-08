---
title: Porezna obrada
sidebar_position: 4
_i18n_hash: a331943b7d5764cc5f2277c08595b235
---
# Obrada Poreza

Ultimate Multisite ima modul za naplatu poreza ugrađen u naš glavni plugin, tako da ako vam je potrebno naplatiti porez na prodaju za vaše planove, pakete i usluge, možete to lako učiniti bez potrebe za instaliranjem bilo kakvih add-on-a.

Za kompanije smještene u Europi, nudimo **add-on** koji dodaje alate i funkcije za bolju podršku usklađenosti sa **PDV-om (VAT)**.

Ultimate Multisite ne podnosi niti uplaćuje poreze umjesto vas vladinim tijelima; mi samo pomažemo da prikupite odgovarajući porez u trenutku transakcije. **I dalje ćete morati sami uplaćati poreze.**

## Omogućavanje Naplate Poreza

Naplata poreza nije omogućena po defaultu. Da biste je omogućili, morate otići na **Ultimate Multisite > Settings > Taxes** i prebaciti (toggle) postavku "Enable Taxes" na uključeno.

![Enable Taxes toggle at the top of the Tax settings page](/img/config/settings-taxes-enable.png)

Evo pregleda cijele stranice postavki poreza:

![Tax settings full page](/img/config/settings-taxes-full.png)

Možete vidjeti postavke poreza i za pojedinačne proizvode:

![Tax settings for products](/img/config/settings-taxes.png)

### Porez isključeno vs. Porez uključeno

Po defaultu, sve vaše prodajne cijene su bez poreza, što znači da **porezi nisu uključeni** u cijenu proizvoda. Ako utvrdimo da klijent treba da plati porez na određenu kupovinu, dodati ćemo porez **iznad** subtotala.

Ako preferirate da porezi budu uključeni u cijenu vašeg proizvoda, možete to učiniti aktiviranjem postavke **Inclusive Tax**.

![Inclusive Tax toggle row below the Enable Taxes setting](/img/config/settings-taxes-inclusive.png)

Ne zaboravite da **sačuvate** promjene koje ste napravili.

###

## Kreiranje Stavki Poreza

Nakon što omogućite naplatu poreza, morat ćete kreirati stavke poreza za određene lokacije koristeći naš editor stavki poreza.

Editoru možete pristupiti klikom na gumb **Manage Tax Rates** na bočnom izvirtu (sidebar) stranice postavki poreza.

![Manage Tax Rates link in the Tax Rates panel on the settings page](/img/config/settings-taxes-manage-rates.png)

Na stranici editora stavki poreza, možete dodati nove stavke poreza klikom na gumb **Add new Row**.

![Tax rates editor table with Add new Row button at the top](/img/config/tax-rates-editor.png)

Morat ćete dati svake stavke poreza **naslov** (koji se koristi na računima). Zatim možete odabrati **državu** (obavezno), **državu** (state) i **grad** (city) (oba opciono) gdje će se ovaj porez naplaćivati. Konačno, dodajte **stopu poreza u procentima**.

### Kategorije Poreza

Takođe možete kreirati više Kategorija Poreza, kako biste dodali različite stavke poreza za različite vrste proizvoda.

Kliknite na **Add new Tax Category**, zatim napišite naziv svoje kategorije i pritisnite **Create**.

![Add new Tax Category button at the top of the tax rates editor](/img/config/tax-categories-add.png)

![Tax Category Name input field in the create category modal](/img/config/tax-categories-create-modal.png)

Da biste pregledali kategorije, kliknite **Switch** i odaberite kategoriju kojoj želite dodati nove poreze.

![Switch dropdown button to change between tax categories](/img/config/tax-categories-switch.png)

![Tax category selector dropdown showing available categories](/img/config/tax-categories-select.png)

Možete postaviti kategoriju poreza za određeni proizvod tako da idete na **Product edit page** i zatim na karticu Taxes.

![Product taxes tab with tax category and taxable toggle](/img/config/product-taxes.png)

Na istom ekranu, možete isključiti (toggle off) prekidač **Is Taxable?** kako biste Ultimate Multisiteu dali do znanja da ne treba naplaćivati porez na taj određeni proizvod.

## Podrška za PDV u Europi

Kao što je spomenuto, imamo add-on dostupan za klijente u EU koji imaju dodatne zahtjeve zbog evropskih PDV propisa.

Naši PDV alati pomažu u nekoliko važnih stvari:

*   Lako učitavanje PDV stopa EU;
*   Prikupljanje i validacija PDV broja – i obrnuto naplaćivanje (reverse charging) za entitete koji su oslobođeni PDV-a (poput kompanija sa važećim PDV brojevima);

Da biste instalirali taj add-on, idite na **Ultimate Multisite > Settings** i zatim kliknite na link **Check our Add-ons** na bočnom izvirtu.

![Settings page sidebar with Check our Add-ons link](/img/config/settings-taxes-addons-link.png)

Preusmjerat ćete se na našu stranicu add-on-a. Tamo možete potražiti **Ultimate Multisite VAT add-on** i instalirati ga.

![VAT add-on tile on the Add-ons page](/img/admin/addons-page-vat.png)

![VAT add-on Install Now dialog](/img/admin/addon-install-vat.png)

Zatim, idite na **Network Admin > Plugins** i aktivirajte taj add-on na nivou mreže.

![Network Activate action for the VAT add-on on the Plugins page](/img/admin/addons-list-vat.png)

Ako se vratite na **Tax Settings tab**, vidjet ćete nove opcije. Prebacite (toggle) opciju **Enable VAT Support** da biste omogućili nove PDV alate. Ne zaboravite da **sačuvate** svoje postavke!

![Enable VAT Support toggle in the Tax settings after add-on activation](/img/config/settings-taxes-vat-toggle.png)

### Učitavanje PDV Stavki Poreza

Jedan od alata koje dodaje naša integracija je mogućnost učitavanja stavki poreza za članice EU. To se može učiniti posjetom stranici editora stavki poreza nakon omogućavanja PDV podrške EU.

Na dnu stranice, vidjet ćete opcije za učitavanje PDV stavki. Odabir tipa stope i klikom na gumb **Update EU VAT Rates** učitaće i automatski popuniće tabelu sa stavkama poreza za svaku članicu EU. Zatim, samo trebate sačuvati.

![Update EU VAT Rates button at the bottom of the tax rates editor](/img/config/tax-rates-vat-pull.png)

Takođe možete uređivati vrijednosti nakon što ih učitate. Da biste to učinili, jednostavno uredite red u tabeli koji vam treba i kliknite za spremanje novih vrijednosti.

### PDV Validacija

Kada je podrška za PDV omogućena, Ultimate Multisite će dodati dodatno polje na formular za naplatu, ispod polja za adresu za naplatu. Polje će se prikazivati samo za klijente smještene u EU.

![VAT Number field on the frontend checkout form below the billing address](/img/frontend/checkout-vat-field.png)

Ultimate Multisite će zatim validirati PDV broj, i ako je validan, primjenjuje se mehanizam obrnuto naplaćivanja (reverse charge) i stopa poreza se postavlja na 0% za tu porudžbinu.

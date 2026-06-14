---
title: Obravnavanje davkov
sidebar_position: 4
_i18n_hash: a331943b7d5764cc5f2277c08595b235
---
# Obravnavanje davkov

Ultimate Multisite ima modul za zbiranje davkov v našem osnovnem pluginu, zato lahko brez dodatnih komponent preprosto začnete zbiranje prodajnih davkov na svojih paketi, storitve in načrte.

Za podjetja, ki so postavljena v Evropi, ponujamo **add-on**, ki dodaja orodja in funkcije za boljše **podporo skladnosti s DDV** (VAT).

Ultimate Multisite ne obravnava niti preneseta davkov za vas do vlade; le vam pomagamo zbirati primerno davke v trenutku transakcije. **Davke morate še vedno sami prenesiti.**

## Omogočanje zbiranja davkov

Zbiranje davkov ni omogočeno po defaultu. Za njegovo omogočanje morate iti na **Ultimate Multisite > Settings > Taxes** in vključiti nastavitvo Enable Taxes (Omogoči davke).

![Enable Taxes toggle at the top of the Tax settings page](/img/config/settings-taxes-enable.png)

Tukaj je celoten pregled strani z nastavitvami davkov:

![Tax settings full page](/img/config/settings-taxes-full.png)

Lahko lahko vidite tudi nastavitve davkov za določene izdelke:

![Tax settings for products](/img/config/settings-taxes.png)

### Davki izključeni vs. davki vključeni

Po defaultu so vsi vaši cene izdelkov izključeni davkov, kar pomeni, da se davke **ne vključujejo** v ceno izdelka. Če določimo, da morajo kupci plačati davke na določen nakup, jih dodamo **na vrh** podstave.

Če želite, da so davki vključeni v ceno vašega izdelka, lahko to storite z uporabo nastavitve Inclusive Tax (Vključeni davki).

![Inclusive Tax toggle row below the Enable Taxes setting](/img/config/settings-taxes-inclusive.png)

Ne pozabite **shraniti** izmene, ki ste jih vnesli.

###

## Ustvarjanje davčnih stopenkov

Po omogočjenju zbiranja davkov boste morali ustvariti davčne stopenke za določene lokacije z uporabo našega editorja davčnih stopenkov.

Morač lahko dostop do editorja kliknete na gumb **Manage Tax Rates** (Upravljanje davčnih stopen) v levi strani stran za nastavitve Davke.

![Manage Tax Rates link in the Tax Rates panel on the settings page](/img/config/settings-taxes-manage-rates.png)

Na strani editorja davčnih stopen lahko nove davčne stopnje dodate, kliknete na gumb **Add new Row** (Dodaj novi red).

![Tax rates editor table with Add new Row button at the top](/img/config/tax-rates-editor.png)

Za vsako davčno stopnjo morate določiti **naslov** (ki se uporablja na računih). Nato lahko izberete **državo** (obvezno), **štadu**, in **mesto** (oba sta opcionalna), kjer bo ta davek obložen. Na koncu dodajte **davčnu stopnjo v procentih**.

### Davčne kategorije

Lahko lahko ustvarite več Davčnih kategorij, da dodate različne davčne stopnje za različne vrste izdelkov.

Kliknite na **Add new Tax Category** (Dodaj novo davčno kategorijo), nato napišite ime svoje kategorije in pritisnite **Create** (Ustvari).

![Add new Tax Category button at the top of the tax rates editor](/img/config/tax-categories-add.png)

![Tax Category Name input field in the create category modal](/img/config/tax-categories-create-modal.png)

Za prehodovanje med kategorijami kliknite na **Switch** (Preklopi) in izberite kategorijo v ki boste dodavali nove davke.

![Switch dropdown button to change between tax categories](/img/config/tax-categories-switch.png)

![Tax category selector dropdown showing available categories](/img/config/tax-categories-select.png)

Davčno kategorijo za določen izdelek lahko nastavite, idete na **Product edit page** (Stranjo urejanja izdelka) in nato na tab Davke (Taxes).

![Product taxes tab with tax category and taxable toggle](/img/config/product-taxes.png)

Na istoj strani lahko isključite preklop **Is Taxable?** (Je obložen davem?), da povežete Ultimate Multisite, da ne mora določeni izdelek davke zbirati.

## Podpora za evropsko DDV

Kot smo že omenili, imamo dodatek za stranke v EU, ki imajo dodatne zahteve zaradi evropskih DDV pravil.

Naši VAT orodja vam pomagajo z nekaj pomembnimi stvarmi:

  * Enostavno vnos podatkov o DDV za države članice EU;

  * Zbiranje in validacija števil DDV - ter obratna obravnava za subjekte, ki so izognjeni od DDV (kot so podjetja z datumom DDV).

Za namestitev tega dodatka gre do **Ultimate Multisite > Settings** in nato kliknite na povezavo v levi strani **Check our Add-ons**.

![Settings page sidebar with Check our Add-ons link](/img/config/settings-taxes-addons-link.png)

Boste preusmerjeni na našo stran z dodatki. Tam boste lahko iskanje za **Ultimate Multisite VAT add-on** in ga namestite.

<!-- Screenshot unavailable: VAT add-on tile on the Add-ons page -->

<!-- Screenshot unavailable: VAT add-on Install Now dialog -->

Potem gre do **Network Admin > Plugins** in ga aktivirajte na celotni omrežji.

<!-- Screenshot unavailable: Network Activate action for the VAT add-on on the Plugins page -->

Če se vrnete na tab **Tax Settings**, boste videli nove možnosti. Preprečite možnost **Enable VAT Support** (Omogoči podporo za DDV), da bi aktivirali nova orodja za DDV. Ne pozabite **save** svoje nastavitve!

<!-- Screenshot unavailable: Enable VAT Support toggle in the Tax settings after add-on activation -->

### Vnos podatkov o DDV stopnjah

Ena od orodij, ki ga naša integracija dodaja, je možnost vnos DDV stopnjenik za države članice EU. To lahko storite z obiskovanjem strani za urejanje DDV stopnjenikov po omogočeni podpori za DDV za EU.

Na dnu strani stran, boste videli možnosti za povzročanje DDV (VAT). Izbranjem vrste stopnje in klikom na gumb **Update EU VAT Rates** se tabela z davčnimi stopnjami za vsako državo članico EU odpre in avtomatsko popuni. Nato je dovolj, da jo samo shranite.

![Gumb Update EU VAT Rates na dnu redaktora davčnih stopnjenik](/img/config/tax-rates-vat-pull.png)

Lahko lahko tudi uredite vrednosti po povzročanju. Za to je preprosto uredite red v tabeli, ki vam je potreben, in kliknite za shranjevanje novih vrednosti.

### Validacija DDV (VAT Validation)

Ko je podporo za DDV vključena, Ultimate Multisite bo dodal dodatno polje na obrazec za plačilo, pod poljem za račun. To polje se bo pojavilo le za stranke ki so lokirani v EU.

<!-- Screenshot unavailable: Polje številke DDV na obrazcu za plačilo na sprednji strani pod poljem za račun -->

Ultimate Multisite nato validira številko DDV in če se vrne kot veljavna, se uporabi mehanizem obratne stopnje (reverse charge mechanism) in davčna stopnja je postavljena na 0% za to naročilo.

---
title: Mokėjimai
sidebar_position: 4
_i18n_hash: a331943b7d5764cc5f2277c08595b235
---
# Apmokestyti mokesčius

Ultimate Multisite turi įtrauktą mokesčių surinkimo modulinį savo pagrindiniame pluginui, todėl jei turite surinkti pardavimų mokesčius jūsų planų, paketų ir paslaugų uždarymo metu, tai galite patogiai padaryti nepasirinkdami jokio papildymo.

Europos beiems įmonėms mes siūlo **papildomą**, kuris pridės įrankius ir funkcijas, kurios geriau **pateiks VAT** atitikimą.

Ultimate Multisite neįsigalioja ir neatskelia mokesčių jūsų vardu valstybėms; mes tik padeda jums surinkti tinkamus mokesčius transakcijos metu. Jums vis tiek reikės atsiskelioti mokesčius savai.

## Mokesčių surinkimo įjungimas

Mokesčių surinkimas nėra įjungtas kaip pagrindinis nustatymas. Ją įjungimui turite eiti į **Ultimate Multisite > Settings > Taxes** ir įjungti nustatymą Enable Taxes.

![Enable Taxes toggle at the top of the Tax settings page](/img/config/settings-taxes-enable.png)

Štai visas mokesčių nustatymų puslapio vaizdas:

![Tax settings full page](/img/config/settings-taxes-full.png)

Jau galite peržiūrėti mokesčių nustatymus individualiems produktams:

![Tax settings for products](/img/config/settings-taxes.png)

### Mokesčiai išskirti vs. Mokesčiai įtraukti

Pagrindiniu nustatymu visi jūsų produktų kaina yra išskirtos mokesčių, o tai reiškia, kad mokesčiai **nėra įtraukti** produkto kainos į skaičiaus. Jei nustotime, kad klientas turi mokėti mokesčius už konkrečią pirkimą, mes pridės mokesčius **už subtotalą**.

Jei norite, kad mokesčiai būtų įtraukti į jūsų produkto kainą, galite tai padaryti įjungdami nustatymą Inclusive Tax.

![Inclusive Tax toggle row below the Enable Taxes setting](/img/config/settings-taxes-inclusive.png)

Nepaminkite **sauveikti** atliktas pakeitimus.

###

## Mokesčių vertių kūrimas

Po to, kai įjungote mokesčių surinkimą, turėsite sukurti mokesčių vertus specifinėms vietoms naudojant mūsų mokesčių vertių redaktorią.

Redakci galite peržiūrėti galima paspaudus mygtuką **Manage Tax Rates** (Tvarkyti mokesčių lygis) svetainės stebėlyje Mokesčių nustatymų puslapyje.

![Manage Tax Rates link in the Tax Rates panel on the settings page](/img/config/settings-taxes-manage-rates.png)

Mokesčių lygio redaktoriame puslapyje galite pridėti naujus mokesčių lygis, paspaudus mygtuką **Add new Row** (Pridėti naują eilutę).

![Tax rates editor table with Add new Row button at the top](/img/config/tax-rates-editor.png)

Jums reikės nurodyti kiekvienam mokesčių lygimui **pavadinimą** (naudojamas naršalose). Tada galite pasirinkti **valstybę** (reikalaujama), **statą** ir **miestą** (ambas opcionai), kurioje bus mokama šie mokesčiai. Vaisiai pridėkite **mokesčio lygį procentais**.

### Mokesčių kategorijos

Galite sukurti keletas Mokesčių kategorijų, kad pridėtumėte skirtingus mokesčių lygis skirtingiems produktams.

Paspauskite **Add new Tax Category** (Pridėti naują mokesčių kategoriją), nurodykite jūsų kategorijos pavadinimą ir spauskite **Create** (Sukurti).

![Add new Tax Category button at the top of the tax rates editor](/img/config/tax-categories-add.png)

![Tax Category Name input field in the create category modal](/img/config/tax-categories-create-modal.png)

Kad peržiūrėti kategorijas, paspauskite **Switch** (Pakeisti) ir pasirinkite tą kategoriją, į kurią norite pridėti naujus mokesčius.

![Switch dropdown button to change between tax categories](/img/config/tax-categories-switch.png)

![Tax category selector dropdown showing available categories](/img/config/tax-categories-select.png)

Galite nustatyti mokesčių kategoriją tam tikram produktui, eiti į **Product edit page** (Redaguoti produktą) ir tada į Taxes (Mokesčiai) tvarką.

![Product taxes tab with tax category and taxable toggle](/img/config/product-taxes.png)

Teksame ekrane galite išjungti **Is Taxable?** (Ar tai mokamas?) mygtuką, kad praneštumėte Ultimate Multisite, kad jis nebus surinkti mokesčių už šį nurodytą produktą.

## Europos VAT palaikymas

Ka kaip minėta, kad turime įrenginį klientams ES, kuriems yra papildomi reikalavimai dėl Europos PVM reguliavimo.

Mūsų PVM įrankiai padeda su keliais svarbiais dalyklais:

  * Lengva įkrovimas ES PVM tarifų;

  * PVM numerių surinkimas ir patikrinimas – taip pat atliekant reverse charging (atvirkščią įsigijimo) entitetams, kuriems nėra PVM (pvz., įmonėms su galiojais PVM numeriais);

Kad instaluoti šį įrenginį, eikite į **Ultimate Multisite > Settings** ir tada paspauskite nuorodą **Check our Add-ons** pusėje.

![Settings page sidebar with Check our Add-ons link](/img/config/settings-taxes-addons-link.png)

Jūs būsite nukreipti į mūsų įrenginių puslapį. Ten galite ieškoti ir instaluoti **Ultimate Multisite VAT add-on**.

<!-- Screenshot unavailable: VAT add-on tile on the Add-ons page -->

<!-- Screenshot unavailable: VAT add-on Install Now dialog -->

Tada eikite į **Network Admin > Plugins** ir aktyvuokite šį įrenginį visame tinklu.

<!-- Screenshot unavailable: Network Activate action for the VAT add-on on the Plugins page -->

Jei grįsite į **Tax Settings tab**, pamatysite naujus pasirinkimus. Paspauskite **Enable VAT Support** (Įjungti PVM palaikymą) opsinę, kad aktyvuotumėte naujus PVM įrankius. Neleidžkitės **sauveikti** savo nustatymus!

<!-- Screenshot unavailable: Enable VAT Support toggle in the Tax settings after add-on activation -->

### Priešdaryti PVM tarifus

Viena iš įrankių, kuriuos pridėtas mūsų integracijoje, yra galimybė įkrovyti PVM tarifus ES narystams. Tai galima padaryti pasiekan puslapį PVM tarifų redaktoriui po aktyvavimu ES PVM palaikymo.

A apačioje puslapyje pamatysite VAT įtraukimo (VAT pulling) nustatymus. Pasirinkdami tarifų tipą ir paspaudę mygtuką **Update EU VAT Rates** pateiksite lentelę su pajamų tarifais kiekvienai ES narybiui, kuri automatiškai užpildys. Tada visada turite ją išsaugoti.

![Update EU VAT Rates mygtukas apačioje pajamų tarifų redaktore](/img/config/tax-rates-vat-pull.png)

Galite taip pat keisti vertus po to, kai juos pateiksite. Tam tai padarykite, kad atkreiptumėte reikiamą lentelės eilutę ir paspaudtumėte, kad išsaugotumėte naujus vertus.

### VAT Patikrinimas (VAT Validation)

Kai VAT palaikymas bus įjungtas, Ultimate Multisite pridės papildomą laukelį prie kasos formos, po paskirties adresų laukelio. Šis laukelis pasirodys tik klientams, esantems ES.

<!-- Screenshot unavailable: VAT numerio laukelis ant naujo kasos formos puslapyje, po paskirties adresų -->

Tada Ultimate Multisite patikrinys VAT numerį ir jei jis bus galiojantis, taikomas atvirkščio įtraukimo (reverse charge mechanism) mechanizmas ir pajamos tarifas nustatos 0% šiai užsakymui.

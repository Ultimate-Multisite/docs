---
title: Обрачуна података
sidebar_position: 4
_i18n_hash: a331943b7d5764cc5f2277c08595b235
---
# Обрачуна од пореза (Tax Handling)

Ultimate Multisite ima modul за прикупљање пореза у нашем основном плагину, tako da ако вам треба да прикупљате продајне порезе на вашим плановима, пакетима и услугама, можете то лако uraditi без того да instalirate nijedan add-on.

За компаније које су локализоване у Европи, нудимо **add-on** који додаје алате и функционалности за боље **подршку пореда на додату вредност (VAT)**.

Ultimate Multisite не подноси ни порезе ни пребацује их имејном 정부; ми је само помогли да прикупљате одговарајуће порезе у момент трансакције. **Ви и да ћете морати сами поднети порезе.**

## Умјештавање прикупљања пореза (Enabling Tax Collection)

Прикупљање пореза није укључено по дефолту. Да би га уклонили, морате да идете на **Ultimate Multisite > Settings > Taxes** и да уключите опцију Enable Taxes.

![Enable Taxes toggle at the top of the Tax settings page](/img/config/settings-taxes-enable.png)

Ево потпуног приказа странице подешавања пореза:

![Tax settings full page](/img/config/settings-taxes-full.png)

Можете да видите подешавања пореза за појединачне производе:

![Tax settings for products](/img/config/settings-taxes.png)

### Порези искључени против пореза у порезу (Tax excluded vs. Tax included)

По дефолту, све цене ваших производа су искључене од пореза, што значи да порези **ни су укључени** у цену производа. Ако утврдимо да корисник треба да плати порезе на неку куповину, додаћемо порезе **на врх** субтотала.

Ако желите да порези budu укључени у цену вашег производа, можете то урадити уклонив опцију Inclusive Tax.

![Inclusive Tax toggle row below the Enable Taxes setting](/img/config/settings-taxes-inclusive.png)

Не заборавите да **сачувате** промене које сте унели.

###

## Креирање пореда (Creating Tax Rates)

Након што уключите прикупљање пореза, мораћете да креирате пореде за одређене локације користећи наш редарер пореза.

Možete pristupiti editoru klikom na dugme **Manage Tax Rates** (Upravljanje porezama) u bočnoj traci stranice podešavanja poreza.

![Link Manage Tax Rates u panelu Poreze na stranici podešavanja](/img/config/settings-taxes-manage-rates.png)

Na stranici editora poreza možete dodati nove Tax Rateove klikom na dugme **Add new Row** (Dodaj novi red).

![Tabela editora poreza sa dugmetom Add new Row na vrhu](/img/config/tax-rates-editor.png)

Morate svakom tax rateu dati **naslov** (koji se koristi na fakturama). Zatim možete izabrati **državu** (obavezno), **županiju** i **grad** (oba su opcionalni) gde će se ovaj porez primeniti. Na kraju, dodajte **porezni stopu u procentima**.

### Kategorije poreza

Možete kreirati i više Tax Categoryja kako biste dodali različite porezne stope za različite vrste proizvoda.

Kliknite na **Add new Tax Category** (Dodaj novu kategoriju poreza), zatim unesite ime svoje kategorije i pritisnite **Create** (Kreiraj).

![Dugme Add new Tax Category na vrhu editora poreza](/img/config/tax-categories-add.png)

![Polje unosa imena Tax Categoryja u modalu za kreiranje kategorije](/img/config/tax-categories-create-modal.png)

Da biste pregledali kategorije, kliknite na **Switch** (Prebaci) i izaberite kategoriju kojoj želite dodati nove poreze.

![Dugme Switch sa padajućom listom za promenu između kategorija poreza](/img/config/tax-categories-switch.png)

![Padajuća lista za izbor Tax Categoryja koja prikazuje dostupne kategorije](/img/config/tax-categories-select.png)

Možete postaviti tax kategoriju za određeni proizvod idąc na **Product edit page** (Stranicu uređivanja proizvoda) a zatim na karticu Taxes (Porez).

![Kartica Poreza proizvoda sa prekidačem Tax Categoryja i opredeljenom količinom poreza](/img/config/product-taxes.png)

Na istoj stranici možete isključiti prekidač **Is Taxable?** (Da li je poresko oporezivo?) kako biste Ultimate Multisiteu rekli da ne treba da prikuplja poreze na taj dati proizvod.

## Podrška evropskim PDV-om

Као што смоли претходно кажемо, imamo dodatak за клијенте у Европи који имају додатне затресности због европских пореда на парите (VAT).

Наше алате за VAT pomažu нам са неколико важних ствари:

  * Лако учитавање европских ставких {EU VAT rates};

  * Скуп и валидација бројева VAT - а такође и обраћање пореда за податке који су ослобођени од VAT (као што су компаније са важећим бројеви VAT-а).

Да бисте инсталирали тај додатак, идете у **Ultimate Multisite > Settings** а zatim кликнете на линк у боку **Check our Add-ons**.

![Settings page sidebar with Check our Add-ons link](/img/config/settings-taxes-addons-link.png)

Бићете преусмерени на нашу страницу додатка. Тамо можете претражити **Ultimate Multisite VAT add-on** и инсталирати га.

<!-- Screenshot unavailable: VAT add-on tile on the Add-ons page -->

<!-- Screenshot unavailable: VAT add-on Install Now dialog -->

Затим, идете у **Network Admin > Plugins** и активирајте тај додатак на целу мрежу.

<!-- Screenshot unavailable: Network Activate action for the VAT add-on on the Plugins page -->

Ако се вратите у **Tax Settings tab**, videћете нове опције које су доступне. Уклоните (toggle) опцију **Enable VAT Support** да бисте omogućили нове алате за VAT. Не заборавите да **сачувате** своје поделове!

<!-- Screenshot unavailable: Enable VAT Support toggle in the Tax settings after add-on activation -->

### Преузимање ставких {VAT Tax Rates}

Јeged је једна од алата које наше интеграције додају, могућност учитавања ставких {tax rates} за државе чланице ЕУ. То се може уради посетом на страницу редактора ставких {tax rates} након што омогућите европску подршку VAT-а.

Na dnu stranice ćete videti opcije za povlačenje PDV-a (VAT). Izaberite tip stope i kliknite na dugme **Update EU VAT Rates** da se tabela sa poreznim stopama za svaku državu članicu EU automatski popuni. Zatim je potrebno samo da sačuvate.

![Dugme Update EU VAT Rates na dnu editora poreznih stopama](/img/config/tax-rates-vat-pull.png)

Možete takođe uređivati vrednosti nakon što ih povučete. Da biste to uradili, jednostavno uredite red tabelu koji vam treba i kliknite da sačuvate nove vrednosti.

### Validacija PDV-a (VAT Validation)

Kada je podrška za PDV uključena, Ultimate Multisite će dodati dodatno polje u formular za plaćanje, ispod polja za adresu fakturisanja. Ovo polje će se pojaviti samo za kupce koji su smešteni u EU.

<!-- Screenshot unavailable: Polje za broj PDV na frontend formulari za plaćanje ispod adrese fakturisanja -->

Ultimate Multisite zatim validira broj PDV. Ako se vrati kao validan, primenjuje se mehanizam obratne oporezivanja (reverse charge mechanism) i porezna stopa se postavlja na 0% za tu narudžbinu.

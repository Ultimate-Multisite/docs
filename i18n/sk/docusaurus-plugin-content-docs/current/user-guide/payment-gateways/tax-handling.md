---
title: Daňové spracovanie
sidebar_position: 4
_i18n_hash: a331943b7d5764cc5f2277c08595b235
---
# Daňové spracovanie

Ultimate Multisite má v našom základnom prístupe modul na zbieranie dát, takže ak potrebujete zbierať daňové odberné dane na svoje plány, balíčky a služby, môžete to jednoducho urobiť bez toho, aby ste museli nainštalovať žiadne doplnky.

Pre firmy z Európy ponúkame **doplnok**, ktorý pridáva nástroje a funkcie na lepšie **podporu DPH** (VAT) súladu.

Ultimate Multisite daňové platby neposkytuje ani neodpovedá za vás daňové povinnosti u vlády; my len pomôžeme vám zbierať príslušné dane v čase transakcie. **Musíte si daňové povinnosti však stále platiť sami.**

## Aktivácia zbierania dát

Zbieranie dát nie je aktivované po navrácaní zobrazenia. Aby ste ho aktivovali, musíte pohnúť do sekcie **Ultimate Multisite > Settings > Taxes** a zapnúť nastavenie Enable Taxes (Aktivovať daňové platby).

![Prełącznik Aktivovať daňové platby na vrchnej časti stránky nastavení dát](/img/config/settings-taxes-enable.png)

Tu je kompletný prehľad stránky nastavení dát:

![Kompletná stránka nastavení dát](/img/config/settings-taxes-full.png)

Môžete tiež zobraziť nastavenia dát pre jednotlivé produkty:

![Nastavenia dát pre produkty](/img/config/settings-taxes.png)

### Daňové výnimky vs. Daňové zahrnutie

Po chode poomáhaní sú všetky ceny vašich produktov v pôvodnom zobrazení bez DPH, čo znamená, že daňové platby **nie sú zahrnuté** do ceny produktu. Ak určíme, že zákazník má zaplatiť daňové platby za danú nákupu, pridáme ich **na nadhodinu** k subtotalu.

Ak preferujete, aby sa daňové platby v cene vášho produktu zahrnuli, môžete to urobiť pomocou nastavenia Inclusive Tax (Zahrnutá daň).

![Rada prełącznika Zahrnutá daň pod nastavením Aktivovať daňové platby](/img/config/settings-taxes-inclusive.png)

Nezabudnite **zachovať** zmeny, ktoré ste urobili.

###

## Vytváranie daňových sad

Po aktivácii zbierania dát budete musieť vytvoriť daňové sad pre konkrétne lokality pomocou nášho editora daňových sad.

Môžete sa editor dostúpiť kliknutím na tlačidlo **Manage Tax Rates** (Správa dátumov DPH) v laterálnej lište stránky nastavení DPH.

![Link Manage Tax Rates v paneli DPH na stránke nastavení](/img/config/settings-taxes-manage-rates.png)

Na stránke editora dátumov DPH môžete nové DPH pridať kliknutím na tlačidlo **Add new Row** (Pridať nový rad).

![Tabuľka editora dátumov DPH s tlačidlom Pridať nový rad v hornej časti](/img/config/tax-rates-editor.png)

Každému dátumu DPH musíte dať **nadpísivo** (používané na faktúrach). Potom môžete vybrať **štát**, ktorý je povinný, a **miesto** (obojž sú voliteľné), kde bude tento daň účtovaný. Nakoniec pridať **daňový spor v percentách**.

### Kategórie DPH

Môžete tiež vytvoriť viacero kategórií DPH, aby ste pridali rôzne daňové spoje pre rôzne druhy produktov.

Kliknite na **Add new Tax Category** (Pridať novú kategóriu DPH), potom napíšte názov svojej kategórie a stlačte **Create** (Vytvoriť).

![Tlačidlo Pridať novú kategóriu DPH v hornej časti editora dátumov DPH](/img/config/tax-categories-add.png)

![Pole zadania názvu kategórie DPH v modáli vytvorenia kategórie](/img/config/tax-categories-create-modal.png)

Na prezeranie kategórií kliknite na **Switch** (Premieniť) a vyberte kategóriu, do ktorej chcete pridať nové daňové spoje.

![Tlačidlo Switch dropdown na zmenu medzi kategóriami DPH](/img/config/tax-categories-switch.png)

![Dropdown výber kategórie DPH zobrazujúci dostupné kategórie](/img/config/tax-categories-select.png)

Kategóriu DPH pre konkrétny produkt môžete nastaviť, navrhnutím na **Product edit page** (Stránka úpravy produktu) a potom na záložku Taxes (DPH).

![Tabuľka DPH v tabuľke s prepínačom kategórie DPH a daňovým spojem](/img/config/product-taxes.png)

Na istej obrazovke môžete vypnúť prepínač **Is Taxable?** (Je daňový predmet?) aby Ultimate Multisite vedelo, že na daný produkt nebudeme daňové spor účtovať.

## Podpora EÚ DPH

Ako už skôr spomenuli, máme k dispozícii doplnok pre zákazníkov v EÚ, ktorí majú extra požiadavky kvôli európskim DPH predpisom.

N naše nástroje na DPH pomáhajú s niekoľkými dôležitými vecí:

  * Ležšie načítanie dát DPH pre EÚ;

  * Sbier a validácia DPH čísel – a obratné účtovanie pre subjekty, ktoré sú vyznačené ako exempčné od DPH (ako firmy s platnými DPH číslami).

Aby ste nainštalovali tento doplnok, prejdite do **Ultimate Multisite > Settings** a potom kliknite na odkaz v paneli opakovania **Check our Add-ons**.

![Settings page sidebar with Check our Add-ons link](/img/config/settings-taxes-addons-link.png)

Boli Vás presmerovaní na našu stránku s doplnkami. Tam môžete vyhľadať **Ultimate Multisite VAT add-on** a nainštalovať ho.

<!-- Screenshot unavailable: VAT add-on tile on the Add-ons page -->

<!-- Screenshot unavailable: VAT add-on Install Now dialog -->

Potom prejdite do **Network Admin > Plugins** a aktivujte tento doplnok na celú sieti.

<!-- Screenshot unavailable: Network Activate action for the VAT add-on on the Plugins page -->

Ak sa vráติete do záložky **Tax Settings**, uvidíte nové možnosti. Premiňte možnosť **Enable VAT Support** (Aktívny podporu DPH), aby ste aktivovali nové nástroje na DPH. Nezabudnite si **zachovať** svoje nastavenia!

<!-- Screenshot unavailable: Enable VAT Support toggle in the Tax settings after add-on activation -->

### Čítanie dát DPH (Pulling on VAT Tax Rates)

Jednou z nástrojov, ktoré náš integrácia pridáva, je schopnosť načústi daňové sazby pre členské štáty EÚ. To môžete urobiť tým, že navštívite stránku s editorom dánych vtedy, keď máte aktivovaný podporu DPH pre EÚ.

V spodnej časti stránky vidíte možnosti načítania DPH (VAT). Po vybraní typu sadky a kliknutí na tlačidlo **Update EU VAT Rates** sa tabuľa s daňovými sadkami pre každý členský štát EÚ zobrazí automaticky. Potom stačí len uložiť.

![Tlačidlo Update EU VAT Rates v spodnej časti redaktóra sadiek DPH](/img/config/tax-rates-vat-pull.png)

Môžete tiež upraviť hodnoty po ich načítaní. Na to stačí jednoducho upraviť riadok tabuľky, ktorý potrebujete a kliknúť na uložitie nových hodnôt.

### Validácia DPH (VAT Validation)

Keď je podpora DPH zapnutá, Ultimate Multisite pridá ďalšie pole do formulára pre objednávku, pod polom s adresou fakturácie. Toto pole sa zobrazí len zákazníkom z EÚ.

<!-- Screenshot unavailable: Pole čísla DPH na prednej formulári pre objednávku pod adresou fakturácie -->

Ultimate Multisite potom validuje číslo DPH a ak je to platné, je aplikovaný mechanizmus obratnej sadky (reverse charge mechanism) a daňová sadka sa nastaví na 0 % pre tú objednávku.

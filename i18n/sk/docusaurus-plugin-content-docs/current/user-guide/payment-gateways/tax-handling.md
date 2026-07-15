---
title: Spracovanie daní
sidebar_position: 4
_i18n_hash: 8b94c58406519f9c55fe837c6addfc12
---
# Spracovanie daní

Ultimate Multisite má modul na výber daní zabudovaný v našom hlavnom plugine, takže ak potrebujete vyberať dane z predaja pri svojich plánoch, balíkoch a službách, môžete to jednoducho urobiť bez toho, aby ste museli inštalovať akékoľvek doplnky.

Pre spoločnosti so sídlom v Európe ponúkame **doplnok**, ktorý pridáva nástroje a funkcie na lepšiu **podporu súladu s VAT**.

Ultimate Multisite za vás nepodáva ani neodvádza dane vláde; jednoducho vám pomáhame vybrať príslušné dane v čase transakcie. **Dane budete stále musieť odviesť sami.**

## Povolenie výberu daní {#enabling-tax-collection}

Výber daní nie je predvolene povolený. Ak ho chcete povoliť, musíte prejsť do **Ultimate Multisite > Settings > Taxes** a prepnutím zapnúť nastavenie Enable Taxes.

![Prepínač Enable Taxes v hornej časti stránky nastavení daní](/img/config/settings-taxes-enable.png)

Tu je úplné zobrazenie stránky nastavení daní:

![Celá stránka nastavení daní](/img/config/settings-taxes-full.png)

Môžete si tiež zobraziť nastavenia daní pre jednotlivé produkty:

![Nastavenia daní pre produkty](/img/config/settings-taxes.png)

### Daň nezahrnutá vs. daň zahrnutá {#tax-excluded-vs-tax-included}

Predvolene sú všetky ceny vašich produktov bez dane, čo znamená, že dane **nie sú zahrnuté** v cene produktu. Ak určíme, že zákazník má pri danom nákupe zaplatiť dane, pridáme dane **navrch** k medzisúčtu.

Ak uprednostňujete, aby boli dane zahrnuté v cene vášho produktu, môžete to urobiť zapnutím nastavenia **Inclusive Tax**.

![Riadok s prepínačom Inclusive Tax pod nastavením Enable Taxes](/img/config/settings-taxes-inclusive.png)

Nezabudnite **uložiť** zmeny, ktoré ste vykonali.

###

## Vytváranie daňových sadzieb {#creating-tax-rates}

Po povolení výberu daní budete musieť vytvoriť daňové sadzby pre konkrétne lokality pomocou nášho editora daňových sadzieb.

K editoru sa dostanete kliknutím na tlačidlo **Manage Tax Rates** na bočnom paneli stránky nastavení daní.

![Odkaz Manage Tax Rates v paneli Tax Rates na stránke nastavení](/img/config/settings-taxes-manage-rates.png)

Na stránke editora daňových sadzieb môžete pridať nové daňové sadzby kliknutím na tlačidlo **Add new Row**.

![Tabuľka editora daňových sadzieb s tlačidlom Add new Row navrchu](/img/config/tax-rates-editor.png)

Každej daňovej sadzbe musíte dať **názov** (používa sa na faktúrach). Potom si môžete vybrať **krajinu** (povinné), **štát/región,** a **mesto** (obe voliteľné), kde sa táto daň bude účtovať. Nakoniec pridajte **daňovú sadzbu v percentách**.

### Daňové kategórie {#tax-categories}

Môžete tiež vytvoriť viacero daňových kategórií, aby ste pridali rôzne daňové sadzby pre rôzne druhy produktov.

Kliknite na **Add new Tax Category**, potom napíšte názov svojej kategórie a stlačte **Create**.

![Tlačidlo Add new Tax Category v hornej časti editora daňových sadzieb](/img/config/tax-categories-add.png)

![Vstupné pole Tax Category Name v modálnom okne vytvorenia kategórie](/img/config/tax-categories-create-modal.png)

Ak chcete prechádzať kategórie, kliknite na **Switch** a vyberte kategóriu, do ktorej chcete pridať nové dane.

![Rozbaľovacie tlačidlo Switch na prepínanie medzi daňovými kategóriami](/img/config/tax-categories-switch.png)

![Rozbaľovací výber daňovej kategórie zobrazujúci dostupné kategórie](/img/config/tax-categories-select.png)

Daňovú kategóriu pre konkrétny produkt môžete nastaviť tak, že prejdete na **stránku úprav produktu** a potom na kartu Taxes.

![Karta daní produktu s daňovou kategóriou a prepínačom zdaniteľnosti](/img/config/product-taxes.png)

Na tej istej obrazovke môžete vypnúť prepínač **Is Taxable?**, aby Ultimate Multisite vedel, že pri danom produkte nemá vyberať dane.

## Podpora európskej VAT {#european-vat-support}

Ako už bolo spomenuté, máme k dispozícii doplnok pre zákazníkov v EÚ, ktorí majú ďalšie požiadavky vyplývajúce z európskych predpisov o VAT.

Naše nástroje pre VAT pomáhajú s niekoľkými dôležitými vecami:

  * Jednoduché načítanie sadzieb VAT v EÚ;

  * Zber a overovanie VAT čísla – a prenesenie daňovej povinnosti pre subjekty oslobodené od VAT (napríklad spoločnosti s platnými VAT číslami);

Ak chcete tento doplnok nainštalovať, prejdite do **Ultimate Multisite > Settings** a potom kliknite na odkaz **Check our Add-ons** v bočnom paneli.

![Bočný panel stránky Settings s odkazom Check our Add-ons](/img/config/settings-taxes-addons-link.png)

Budete presmerovaní na našu stránku doplnkov. Tam môžete vyhľadať **doplnok Ultimate Multisite VAT** a nainštalovať ho.

<!-- Screenshot unavailable: VAT add-on tile on the Add-ons page -->

<!-- Screenshot unavailable: VAT add-on Install Now dialog -->

Potom prejdite do **Network Admin > Plugins** a aktivujte tento doplnok v celej sieti.

<!-- Screenshot unavailable: Network Activate action for the VAT add-on on the Plugins page -->

Ak sa vrátite späť na **kartu Tax Settings**, uvidíte nové dostupné možnosti. Zapnite možnosť **Enable VAT Support**, aby ste povolili nové nástroje VAT. Nezabudnite **uložiť** svoje nastavenia!

<!-- Screenshot unavailable: Enable VAT Support toggle in the Tax settings after add-on activation -->

### Načítanie sadzieb VAT {#pulling-on-vat-tax-rates}

Jedným z nástrojov, ktoré naša integrácia pridáva, je možnosť načítať daňové sadzby pre členské štáty EÚ. Dá sa to urobiť návštevou stránky editora daňových sadzieb po povolení podpory VAT v EÚ.

V dolnej časti stránky uvidíte možnosti načítania VAT. Výber typu sadzby a kliknutie na tlačidlo **Update EU VAT Rates** načíta a automaticky vyplní tabuľku daňovými sadzbami pre každý členský štát EÚ. Potom ju už stačí len uložiť.

![Tlačidlo Update EU VAT Rates v dolnej časti editora daňových sadzieb](/img/config/tax-rates-vat-pull.png)

Hodnoty môžete po načítaní aj upraviť. Urobíte to tak, že jednoducho upravíte potrebný riadok tabuľky a kliknutím uložíte nové hodnoty.

### Overenie VAT {#vat-validation}

Keď je podpora VAT povolená, Ultimate Multisite pridá do formulára pokladne ďalšie pole pod pole fakturačnej adresy. Pole sa zobrazí iba zákazníkom nachádzajúcim sa v EÚ.

<!-- Screenshot unavailable: VAT Number field on the frontend checkout form below the billing address -->

Ultimate Multisite potom overí IČ DPH, a ak sa vráti ako platné, uplatní sa mechanizmus prenesenia daňovej povinnosti a sadzba dane sa pri danej objednávke nastaví na 0 %.

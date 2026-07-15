---
title: Vytváranie kódu zľavy
sidebar_position: 19
_i18n_hash: d6adaf916f3e21b4fda2deeaa6672d00
---
# Vytváranie zľavných kódov (v2)

_**DÁVAJTE DOPÔRADNUTE: Tento článok sa týka Ultimate Multisite verzie 2.x.**_

S Ultimate Multisite môžete vytvárať zľavné kódy, aby ste svojim klientom poskytli zľavy na svoje ponuky. A ich vytvorenie je jednoduché!

## Vytváranie a upravie zľavných kódov {#creating-and-editing-discount-codes}

Aby ste mohli nový zľavný kód vytvoriť alebo upraviť, prejdite do **Ultimate Multisite > Discount Codes**.

![Zoznam zľavných kódov — prázdny stav pred existenciacou akoukoľvek kódom](/img/config/discount-codes-empty.png)

Tam uvidíte zoznam zľavných kódov, ktoré ste už vytvorili.

Na **Pridanie zľavy** (Add Discount Code) môžete kliknúť na nový kupon alebo upraviť existujúce kódy, prechádzajcie cez ne a kliknutím na **Upraviť** (Edit).

![Zoznam zľavných kódov s hover akciami ukazujúc Edit a Delete odkazy](/img/config/discount-codes-list-hover.png)

![Pridanie zľavného kódu tlačidlo v hlavičke stránky](/img/config/discount-codes-add-button.png)

Boli ste presmerovaní na stránku, kde vytvoríte alebo upravíte svoj kuponový kód. V tomto príklade vytvoríme nový.

![Stránka úpravy zľavného kódu so všetkými sekciami viditeľnými](/img/config/discount-code-edit.png)

Pozrime si teraz prístupné nastavenia:

**Vstup zľavného kódu:** Toto je len názov vášho zľavného kódu. Nie je to kód, ktorý budú potrebovať na formulári pre objednávku.

**Popis:** Tu môžete krátko popísať, prečo je tento kupon určený.

![Pole s názvom a popisom zľavného kódu v hornej časti stránky úpravy](/img/config/discount-code-description.png)

Môžete tiež vidieť zľavný kód ako aktívny alebo neaktívny:

![Aktívny stav zľavného kódu](/img/config/discount-code-active.png)

**Kuponový kód:** Tu definujete kód, ktorý budú potrebovať na zadanie počas objednávky.

![Pole kódu kuponu, kde si zákazníci zadajú kód pri platbe](/img/config/discount-code-coupon-field.png)

**Zľava:** Tu môžete nastaviť buď **procentnú zľavu**, alebo **fiatrnu sumu** pre váš kód sľavy.

![Nastavenie výšky zľavy s možnosťou voči percentu alebo fixnej sume](/img/config/discount-code-amount.png)

**Použitie na obnovenia:** Ak je tento možnosť vypnutá, tento kód sľavy sa bude používať iba pri **prvom platbe**. Všetky ostatné platby nebudú mať zľavu. Ak je tento možnosť zapnutá, kód sľavy bude platný pre všetky budúce platby.

**Zľava na poplatky za obnovenie:** Ak je tento možnosť vypnutá, kód sľavy **nevygeneruje žiadnu zľavu na poplatok za obnovenie** objednávky. Ak je tento možnosť zapnutá, môžete nastaviť zľavu (procentnú alebo fixnú sumu), ktorú tento kód sľavy bude aplikovať na poplatky za obnovenie vašich plánov.

![Možnosti pre použitie na obnovenia a zľavu na poplatky za obnovenie](/img/config/discount-code-renewals.png)

**Aktívny:** Manuálne aktivujte alebo deaktivujte tento kód sľavy.

![Prekłączenie aktívneho stavu manuálne zapnutia alebo vypnutia kódu sľavy](/img/config/discount-code-active.png)

Pod **Pokročilými možnosťami** máme nasledujúce nastavenia:

![Pokročilé možnosti kódu sľavy](/img/config/discount-code-advanced.png)

**Limit použitia:**

  * **Použitie:** Tu môžete vidieť, kolko krát sa kód sľavy bol použiť.

  * **Max použitie:** Toto obmedzí počet voči ktorým používatelia môžu tento kód sľavy použiť. Napríklad, ak tu nastavíte 10, kód sľavy bude možné použiť len 10 krát. Po tomto limite kód sľavy už nebude možné použiť.

![Nastavenie limitu použitia s aktuálnym počtom použitia a maximálnym počtom použití](/img/config/discount-code-limit-uses.png)

**Dátum začiatku a skončenia:** Tu budete mať možnosť pridať dátum začiatku a/alebo dátum skončenia pre váš kupon.

![Pole dátumu začiatku a skončenia na plánovanie kódu zľavy](/img/config/discount-code-dates.png)

**Limitovať produkty:** Ak zapnete možnosť **Select products**, zobrazia sa vám všetky vaše produkty. Budete mať možnosť manuálne vybrať (zapnutím alebo vypnutím) produkt, ktorý môže tento kód kupon použiť. Produkty, ktoré sú tu vypnuté, nebudú zmenené, ak si zákazníci pokúsajú tento kód kuponPoužiť na nie.

![Sekcia Limitovať produkty s prepínačmi pre každý produkt](/img/config/discount-code-limit-products.png)

Po nastavení všetkých týchto možností kliknite na **Save Discount Code**, aby ste urobili rezerváciu vášho kuponu a hotové!

![Tlačidlo Save Discount Code v spodnej časti edita](/img/config/discount-code-save.png)

Kupon je teraz v vašej zozname a z neho môžete kliknúť na **edit alebo delete**.

![Riadok kódu kuponu v zozname s hover akciami Edit a Delete](/img/config/discount-codes-list-hover.png)

### Používanie URL parametrov: {#using-url-parameters}

Ak chcete prispôsobiť svoje tabuľky cien alebo vytvoriť lepú stránku pre kód kuponu na vašej webovej stránke a chcete automaticky aplikovať kód zľavy na váš formulár na pokladni, môžete to urobiť pomocou URL parametrov.

Prst musíte získať zdieľateľný odkaz pre váš plán. Na to sa navštívte v **Ultimate Multisite > Products** a vyberte plán.

Kliknite na tlačidlo **Click to Copy Shareable Link**. Toto vám dá zdieľateľný odkaz na tento konkrétny plán. V našom prípade bol zdieľateľný odkaz [_**mynetworkdomain.com/register/premium/**_](http://mynetworkdomain.com/register/premium/)_.

![Stránka produktu s tlačidlom zdieľateľného odkazu](/img/config/products-list.png)

Aby застоsmoť váš kódy zľavy k tomuto konkrétnemu plánu, просто pridal parametery **?discount_code=XXX** do URL adresy. Kde je **XXX** váš kód zľavy.

V našom príklade sa použije kód zľavy **50OFF** pre tento konkrétny produkt.

URL pre tento konkrétny plán s použitím kódu zľavy 50OFF bude vyzerať takto: [_**mynetworkdomain.com/register/premium/**_](http://mynetworkdomain.com/register/premium/) _**?discount_code=50OFF**_.

###

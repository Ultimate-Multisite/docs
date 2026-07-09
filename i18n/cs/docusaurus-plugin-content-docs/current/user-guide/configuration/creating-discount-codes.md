---
title: Vytváření slevových kódů
sidebar_position: 19
_i18n_hash: d6adaf916f3e21b4fda2deeaa6672d00
---
# Vytváření slevových kódů (v2) {#creating-discount-codes-v2}

_**DŮLEŽITÁ POZNÁMKA: Tento článek se vztahuje k Ultimate Multisite verze 2.x.**_

S Ultimate Multisite můžete vytvářet slevové kódy, abyste svým klientům poskytli slevy na jejich předplatná. A jejich vytvoření je snadné!

## Vytváření a úprava slevových kódů {#creating-and-editing-discount-codes}

Chcete-li vytvořit nebo upravit slevový kód, přejděte na **Ultimate Multisite > Discount Codes**.

![Seznam slevových kódů — prázdný stav před vytvořením jakýchkoli kódů](/img/config/discount-codes-empty.png)

Tam budete mít seznam slevových kódů, které jste již vytvořili.

Můžete kliknout na **Add Discount** **Code** pro vytvoření nového kuponu, nebo můžete upravit ty, které máte, tak, že na ně najedete myší a kliknete na **Edit**.

![Seznam slevových kódů s akcemi při najetí myší zobrazujícími odkazy Edit a Delete](/img/config/discount-codes-list-hover.png)

![Tlačítko Add Discount Code v záhlaví stránky](/img/config/discount-codes-add-button.png)

Budete přesměrováni na stránku, kde vytvoříte nebo upravíte svůj kuponový kód. V tomto příkladu vytvoříme nový.

![Stránka úprav slevového kódu se všemi viditelnými sekcemi](/img/config/discount-code-edit.png)

Podívejme se na dostupná nastavení zde:

**Enter Discount Code:** Toto je pouze název vašeho slevového kódu. Toto není kód, který budou vaši zákazníci muset použít ve formuláři checkout.

**Description:** Zde můžete stručně popsat, k čemu tento kupon slouží.

![Pole pro název a popis slevového kódu v horní části stránky úprav](/img/config/discount-code-description.png)

Slevový kód můžete také zobrazit jako aktivní nebo neaktivní:

![Aktivní stav slevového kódu](/img/config/discount-code-active.png)

**Coupon code:** Zde definujete kód, který budou vaši zákazníci muset zadat během checkout.

![Pole kuponového kódu, do kterého zákazníci zadávají kód při checkout](/img/config/discount-code-coupon-field.png)

**Discount:** Zde můžete pro svůj slevový kód nastavit buď **procento**, nebo **pevnou částku** peněz.

![Nastavení výše slevy s rozbalovacím výběrem procenta nebo pevné částky](/img/config/discount-code-amount.png)

**Apply to renewals:** Pokud je tato možnost vypnutá, tento slevový kód se použije pouze na **první platbu**. Všechny ostatní platby nebudou mít žádnou slevu. Pokud je tato možnost zapnutá, slevový kód bude platný pro všechny budoucí platby.

**Setup fee discount:** Pokud je tato možnost vypnutá, kuponový kód **neposkytne žádnou slevu na aktivační poplatek** objednávky. Pokud je tato možnost zapnutá, můžete nastavit slevu (procento nebo pevnou částku), kterou tento kuponový kód použije na aktivační poplatek vašich plánů.

![Přepínače možností Apply to renewals a setup fee discount](/img/config/discount-code-renewals.png)

**Active:** Ručně aktivujte nebo deaktivujte tento kuponový kód.

![Přepínač Active pro ruční povolení nebo zakázání slevového kódu](/img/config/discount-code-active.png)

V části **Advanced Options** máme následující nastavení:

![Pokročilé možnosti slevového kódu](/img/config/discount-code-advanced.png)

**Limit uses:**

  * **Uses:** Zde můžete vidět, kolikrát byl slevový kód použit.

  * **Max uses:** Toto omezí počet případů, kdy mohou uživatelé tento slevový kód použít. Například pokud sem zadáte 10, kupon bude možné použít pouze 10krát. Po dosažení tohoto limitu již kuponový kód nelze použít.

![Nastavení omezení použití s aktuálním počtem použití a polem maximálního počtu použití](/img/config/discount-code-limit-uses.png)

**Start & expiration dates:** Zde budete mít možnost přidat ke svému kuponu datum začátku a/nebo datum vypršení platnosti.

![Pole data začátku a vypršení platnosti pro naplánování slevového kódu](/img/config/discount-code-dates.png)

**Limit products:** Pokud zapnete **Select products**, zobrazí se vám všechny vaše produkty. Budete mít možnost ručně vybrat (zapnutím nebo vypnutím), který produkt může tento kuponový kód přijmout. Produkty, které jsou zde vypnuté, neukážou žádnou změnu, pokud se vaši zákazníci pokusí použít tento kuponový kód na ně.

![Sekce omezení produktů s přepínači pro jednotlivé produkty](/img/config/discount-code-limit-products.png)

Po nastavení všech těchto možností klikněte na **Save Discount Code** pro uložení kuponu a je hotovo!

![Tlačítko Save Discount Code ve spodní části stránky úprav](/img/config/discount-code-save.png)

Kupon je nyní ve vašem seznamu a odtud můžete kliknout na **upravit nebo smazat**.

![Řádek slevového kódu v seznamu s akcemi Edit a Delete při najetí myší](/img/config/discount-codes-list-hover.png)

###

### Použití parametrů URL: {#using-url-parameters}

Pokud chcete přizpůsobit své cenové tabulky nebo vytvořit pěknou stránku s kuponovým kódem pro svůj web a chcete slevový kód automaticky použít ve formuláři checkout, můžete to udělat pomocí parametrů URL.

Nejprve musíte získat sdílitelný odkaz pro svůj plán. Chcete-li to udělat, přejděte na **Ultimate Multisite > Products** a vyberte plán.

Klikněte na tlačítko **Click to Copy Shareable Link**. Tím získáte sdílitelný odkaz na tento konkrétní plán. V našem případě byl poskytnutý sdílitelný odkaz [_**mynetworkdomain.com/register/premium/**_](http://mynetworkdomain.com/register/premium/)_._

![Stránka produktu s tlačítkem sdílitelného odkazu](/img/config/products-list.png)

Chcete-li použít svůj slevový kód na tento konkrétní plán, stačí do URL přidat parametr **?discount_code=XXX**. Kde **XXX** je kuponový kód.

V našem příkladu zde použijeme kuponový kód **50OFF** na tento konkrétní produkt.

URL pro tento konkrétní plán a s použitým slevovým kódem 50OFF bude vypadat takto: [_**mynetworkdomain.com/register/premium/**_](http://mynetworkdomain.com/register/premium/) _**?discount_code=50OFF**_.

###

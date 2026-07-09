---
title: Zpracování daní
sidebar_position: 4
_i18n_hash: 8b94c58406519f9c55fe837c6addfc12
---
# Práce s daněmi {#tax-handling}

Ultimate Multisite má modul pro výběr daní zabudovaný v našem hlavním pluginu, takže pokud potřebujete vybírat prodejní daně u svých plánů, balíčků a služeb, můžete to snadno udělat bez nutnosti instalovat jakékoli doplňky.

Pro společnosti sídlící v Evropě nabízíme **doplněk**, který přidává nástroje a funkce pro lepší **podporu souladu s VAT**.

Ultimate Multisite za vás nepodává ani neodvádí daně vládním úřadům; jednoduše vám pomáháme vybrat příslušné daně v okamžiku transakce. **Daně budete stále muset odvést sami.**

## Povolení výběru daní {#enabling-tax-collection}

Výběr daní není ve výchozím nastavení povolen. Chcete-li jej povolit, musíte přejít na **Ultimate Multisite > Nastavení > Daně** a přepínačem povolit nastavení Povolit daně.

![Přepínač Povolit daně v horní části stránky nastavení daní](/img/config/settings-taxes-enable.png)

Zde je úplný pohled na stránku nastavení daní:

![Celá stránka nastavení daní](/img/config/settings-taxes-full.png)

Můžete také zobrazit nastavení daní pro jednotlivé produkty:

![Nastavení daní pro produkty](/img/config/settings-taxes.png)

### Bez daně vs. včetně daně {#tax-excluded-vs-tax-included}

Ve výchozím nastavení jsou všechny ceny vašich produktů bez daně, což znamená, že daně **nejsou zahrnuty** v ceně produktu. Pokud určíme, že zákazník má z daného nákupu zaplatit daně, přidáme daně **navíc** k mezisoučtu.

Pokud dáváte přednost tomu, aby byly daně zahrnuty v ceně vašeho produktu, můžete to udělat povolením nastavení **Včetně daně**.

![Řádek přepínače Včetně daně pod nastavením Povolit daně](/img/config/settings-taxes-inclusive.png)

Nezapomeňte změny, které jste provedli, **uložit**.

###

## Vytváření daňových sazeb {#creating-tax-rates}

Po povolení výběru daní budete muset vytvořit daňové sazby pro konkrétní lokality pomocí našeho editoru daňových sazeb.

K editoru se dostanete kliknutím na tlačítko **Spravovat daňové sazby** v postranním panelu stránky nastavení daní.

![Odkaz Spravovat daňové sazby v panelu Daňové sazby na stránce nastavení](/img/config/settings-taxes-manage-rates.png)

Na stránce editoru daňových sazeb můžete přidávat nové daňové sazby kliknutím na tlačítko **Přidat nový řádek**.

![Tabulka editoru daňových sazeb s tlačítkem Přidat nový řádek nahoře](/img/config/tax-rates-editor.png)

Každé daňové sazbě budete muset dát **název** (používá se na fakturách). Poté můžete zvolit **zemi** (povinné), **stát/region,** a **město** (obojí volitelné), kde bude tato daň účtována. Nakonec přidejte **daňovou sazbu v procentech**.

### Daňové kategorie {#tax-categories}

Můžete také vytvořit více daňových kategorií a přidat různé daňové sazby pro různé druhy produktů.

Klikněte na **Přidat novou daňovou kategorii** , poté napište název své kategorie a stiskněte **Vytvořit**.

![Tlačítko Přidat novou daňovou kategorii v horní části editoru daňových sazeb](/img/config/tax-categories-add.png)

![Vstupní pole Název daňové kategorie v modálním okně pro vytvoření kategorie](/img/config/tax-categories-create-modal.png)

Chcete-li procházet kategorie, klikněte na **Přepnout** a vyberte kategorii, do které chcete přidat nové daně.

![Rozbalovací tlačítko Přepnout pro změnu mezi daňovými kategoriemi](/img/config/tax-categories-switch.png)

![Rozbalovací seznam výběru daňové kategorie zobrazující dostupné kategorie](/img/config/tax-categories-select.png)

Daňovou kategorii pro konkrétní produkt můžete nastavit tak, že přejdete na **stránku úprav produktu** a poté na kartu Daně.

![Karta daní produktu s daňovou kategorií a přepínačem zdanitelnosti](/img/config/product-taxes.png)

Na stejné obrazovce můžete vypnout přepínač **Je zdanitelný?**, abyste Ultimate Multisite dali vědět, že u daného produktu nemá vybírat daně.

## Podpora evropského VAT {#european-vat-support}

Jak bylo zmíněno dříve, máme k dispozici doplněk pro zákazníky v EU, kteří mají další požadavky kvůli evropským předpisům o VAT.

Naše nástroje pro VAT pomáhají s několika důležitými věcmi:

  * Snadné načítání sazeb EU VAT;

  * Sběr a ověřování VAT čísla – a reverse charging pro subjekty osvobozené od VAT (například společnosti s platnými VAT čísly);

Chcete-li tento doplněk nainstalovat, přejděte na **Ultimate Multisite > Nastavení** a poté klikněte na odkaz **Podívejte se na naše doplňky** v postranním panelu.

![Postranní panel stránky nastavení s odkazem Podívejte se na naše doplňky](/img/config/settings-taxes-addons-link.png)

Budete přesměrováni na naši stránku doplňků. Tam můžete vyhledat **doplněk Ultimate Multisite VAT** a nainstalovat jej.

<!-- Screenshot unavailable: VAT add-on tile on the Add-ons page -->

<!-- Screenshot unavailable: VAT add-on Install Now dialog -->

Poté přejděte na **Network Admin > Pluginy** a aktivujte tento doplněk pro celou síť.

<!-- Screenshot unavailable: Network Activate action for the VAT add-on on the Plugins page -->

Pokud se vrátíte na **kartu Nastavení daní** , uvidíte nové dostupné možnosti. Zapněte možnost **Povolit podporu VAT**, abyste povolili nové nástroje pro VAT. Nezapomeňte svá nastavení **uložit**!

<!-- Screenshot unavailable: Enable VAT Support toggle in the Tax settings after add-on activation -->

### Načítání daňových sazeb VAT {#pulling-on-vat-tax-rates}

Jedním z nástrojů, které naše integrace přidává, je možnost načíst daňové sazby pro členské státy EU. To lze provést návštěvou stránky editoru daňových sazeb po povolení podpory EU VAT.

Ve spodní části stránky uvidíte možnosti načítání VAT. Výběr typu sazby a kliknutí na tlačítko **Aktualizovat sazby EU VAT** načte a automaticky vyplní tabulku daňovými sazbami pro každý členský stát EU. Poté ji už stačí jen uložit.

![Tlačítko Aktualizovat sazby EU VAT ve spodní části editoru daňových sazeb](/img/config/tax-rates-vat-pull.png)

Hodnoty můžete po jejich načtení také upravit. Stačí upravit řádek tabulky, který potřebujete, a kliknutím uložit nové hodnoty.

### Ověření VAT {#vat-validation}

Když je podpora VAT povolena, Ultimate Multisite přidá do formuláře pokladny další pole, pod pole fakturační adresy. Pole se zobrazí pouze zákazníkům nacházejícím se v EU.

<!-- Screenshot unavailable: VAT Number field on the frontend checkout form below the billing address -->

Ultimate Multisite poté ověří VAT Number, a pokud se vrátí jako platné, uplatní se mechanismus reverse charge a sazba daně se u této objednávky nastaví na 0 %.

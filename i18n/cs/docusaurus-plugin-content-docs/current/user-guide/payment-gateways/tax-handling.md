---
title: Zpracování daní
sidebar_position: 4
_i18n_hash: a50fddb07455f714128e042744ab5859
---
# Zpracování daní

Ultimate Multisite má modul pro výběr daní zabudovaný přímo v základním pluginu, takže pokud potřebujete vybírat daně z prodeje u svých plánů, balíčků a služeb, můžete to snadno udělat bez nutnosti instalovat jakékoli doplňky.

Pro společnosti se sídlem v Evropě nabízíme **doplněk**, který přidává nástroje a funkce pro lepší **podporu DPH**.

Ultimate Multisite za vás nepodává daňová přiznání ani neodvádí daně státu; pouze vám pomáhá vybrat příslušné daně v okamžiku transakce. **Odvod daní si musíte zajistit sami.**

## Zapnutí výběru daní

Výběr daní není ve výchozím nastavení zapnutý. Pro jeho aktivaci přejděte do **Ultimate Multisite > Settings > Taxes** a přepněte přepínač Enable Taxes.

![Přepínač Enable Taxes v nastavení daní](/img/config/settings-taxes.png)

### Ceny bez daně vs. ceny včetně daně

Ve výchozím nastavení jsou všechny ceny vašich produktů bez daně, což znamená, že daně **nejsou zahrnuty** v ceně produktu. Pokud zjistíme, že zákazník má u daného nákupu platit daně, přidáme je **k mezisoučtu**.

Pokud chcete mít daně zahrnuté v ceně produktu, můžete to nastavit zapnutím volby **Inclusive Tax**.

![Přepínač nastavení Inclusive Tax](/img/config/settings-taxes.png)

Nezapomeňte provedené změny **uložit**.

### 

## Vytváření daňových sazeb

Po zapnutí výběru daní budete muset vytvořit daňové sazby pro konkrétní lokality pomocí našeho editoru daňových sazeb.

Do editoru se dostanete kliknutím na tlačítko **Manage Tax Rates** v postranním panelu na stránce nastavení daní.

![Tlačítko Manage Tax Rates v postranním panelu](/img/config/settings-taxes.png)

Na stránce editoru daňových sazeb můžete přidávat nové daňové sazby kliknutím na tlačítko **Add new Row**.

![Editor daňových sazeb s tlačítkem Add new Row](/img/config/settings-taxes.png)

Každé daňové sazbě musíte zadat **název** (používá se na fakturách). Poté můžete zvolit **zemi** (povinné), **stát** a **město** (obojí volitelné), kde se bude tato daň účtovat. Nakonec zadejte **daňovou sazbu v procentech**.

### Daňové kategorie

Můžete také vytvořit více daňových kategorií pro přiřazení různých daňových sazeb různým typům produktů.

Klikněte na **Add new Tax Category**, poté napište název své kategorie a stiskněte **Create**.

![Tlačítko Add new Tax Category](/img/config/settings-taxes.png)

![Vytvoření nové daňové kategorie](/img/config/settings-taxes.png)

Pro procházení kategorií klikněte na **Switch** a vyberte kategorii, do které chcete přidat nové daně.

![Přepínání mezi daňovými kategoriemi](/img/config/settings-taxes.png)

![Výběr daňové kategorie k zobrazení](/img/config/settings-taxes.png)

Daňovou kategorii pro konkrétní produkt můžete nastavit na **stránce úpravy produktu** v záložce Taxes.

![Záložka daní produktu s daňovou kategorií a přepínačem zdanitelnosti](/img/config/product-taxes.png)

Na téže obrazovce můžete vypnout přepínač **Is Taxable?**, čímž Ultimate Multisite sdělíte, že u daného produktu nemá vybírat daně.

## Podpora evropského DPH

Jak jsme již zmínili, máme k dispozici doplněk pro zákazníky v EU, kteří mají dodatečné požadavky kvůli evropským předpisům o DPH.

Naše nástroje pro DPH pomáhají s několika důležitými věcmi:

  * Snadné načtení sazeb DPH pro EU;

  * Sběr a validace DIČ – a přenesení daňové povinnosti pro subjekty osvobozené od DPH (například společnosti s platným DIČ);

Pro instalaci tohoto doplňku přejděte do **Ultimate Multisite > Settings** a klikněte na odkaz **Check our Add-ons** v postranním panelu.

![Stránka nastavení s odkazem na doplňky v postranním panelu](/img/config/settings-taxes.png)

Budete přesměrováni na naši stránku s doplňky. Tam můžete vyhledat **Ultimate Multisite VAT add-on** a nainstalovat ho.

![VAT doplněk na stránce doplňků](/img/config/settings-taxes.png)

![Instalační dialog VAT doplňku](/img/config/settings-taxes.png)

Poté přejděte do **Network Admin > Plugins** a aktivujte tento doplněk pro celou síť.

![Síťová aktivace VAT doplňku](/img/config/settings-taxes.png)

Pokud se vrátíte na **záložku Tax Settings**, uvidíte nové dostupné možnosti. Přepněte volbu **Enable VAT Support** pro aktivaci nových nástrojů pro DPH. Nezapomeňte **uložit** nastavení!

![Přepínač Enable VAT Support v nastavení daní](/img/config/settings-taxes.png)

### Načítání sazeb DPH

Jedním z nástrojů, které naše integrace přidává, je možnost načíst daňové sazby pro členské státy EU. To lze provést na stránce editoru daňových sazeb po zapnutí podpory EU VAT.

V dolní části stránky uvidíte možnosti načítání DPH. Vyberte typ sazby a kliknutím na tlačítko **Update EU VAT Rates** načtete a automaticky vyplníte tabulku daňovými sazbami pro každý členský stát EU. Poté je stačí uložit.

### ![Možnosti načítání sazeb DPH s tlačítkem Update EU VAT Rates](/img/config/settings-taxes.png)

Hodnoty můžete upravit i po jejich načtení. Stačí upravit příslušný řádek tabulky a kliknout pro uložení nových hodnot.

### Validace DIČ

Když je podpora DPH zapnutá, Ultimate Multisite přidá do formuláře objednávky další pole pod fakturační adresu. Toto pole se zobrazí pouze zákazníkům nacházejícím se v EU.

![Pole pro DIČ ve formuláři objednávky](/img/config/settings-taxes.png)

Ultimate Multisite poté ověří DIČ, a pokud je platné, aplikuje se mechanismus přenesení daňové povinnosti a daňová sazba se u této objednávky nastaví na 0 %.

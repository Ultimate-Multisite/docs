---
title: Šablony webů
sidebar_position: 4
_i18n_hash: 35467c61accd92dcfce7e212e2b35474
---
# Šablony webů (v2)

_**POZNÁMKA: Tento článek se vztahuje k Ultimate Multisite verze 2.x. Pokud používáte verzi 1.x,**_ **podívejte se na tento článek** _**.**_

Naším cílem při vytváření prémiové sítě s Ultimate Multisite je automatizovat co nejvíce procesů a zároveň dát klientům flexibilitu a různé možnosti výběru při vytváření jejich webů. Jedním ze snadných způsobů, jak dosáhnout této rovnováhy, je využít funkci Šablony webů v Ultimate Multisite.

## Co je šablona webu?

Jak název napovídá, šablona webu je předpřipravený web, který lze použít jako základ při vytváření nových webů ve vaší síti.

To znamená, že můžete vytvořit základní web, aktivovat různé pluginy, nastavit aktivní šablonu vzhledu a upravit ji podle svých představ. Když pak váš zákazník vytvoří nový účet, místo výchozího WordPressu bez smysluplného obsahu dostane kopii vašeho základního webu se všemi úpravami a obsahem již na svém místě.

To zní skvěle, ale jak vytvořím novou šablonu webu? Je to tak jednoduché, jak jen to může být.

## Vytvoření a úprava nové šablony webu

Šablony webů jsou prostě běžné weby ve vaší síti. Pro vytvoření nové šablony jednoduše přejděte na **Správa sítě > Ultimate Multisite > Weby > Přidat web.**

**![Tlačítko Přidat web na stránce se seznamem webů](/img/config/site-templates-list.png)**

Otevře se modální okno, které vás požádá o **Název webu, Doménu/cestu webu** a **Typ webu**. V rozbalovacím poli **Typ webu** se ujistěte, že vyberete **Šablona webu***.*

_![Modální okno přidání šablony webu s rozbalovacím polem typu webu](/img/config/site-templates-list.png)_

Ve spodní části formuláře si všimnete přepínače **Kopírovat web**. Ten vám umožní vytvořit novou šablonu webu na základě existující šablony webu jako výchozího bodu, což vám ušetří čas oproti vytváření šablony webu od začátku.

![Modální okno přidání šablony webu s přepínačem kopírování webu](/img/config/site-templates-list.png)

### Přizpůsobení obsahu šablony webu

Pro přizpůsobení šablony webu jednoduše přejděte na její nástěnku a proveďte potřebné změny. Můžete vytvářet nové příspěvky, stránky, aktivovat pluginy a měnit aktivní šablonu vzhledu. Můžete dokonce přejít do Customizeru a změnit různé možnosti přizpůsobení.

Všechna tato data se zkopírují, když zákazník vytvoří nový web založený na této šabloně webu.

### Pokročilé možnosti

Pokud se vyznáte v programování, můžete využít naše API pro vyhledávání a nahrazování k automatickému nahrazení informací na novém webu po jeho vytvoření. To je užitečné například pro nahrazení názvů společností na stránce O nás, nahrazení kontaktního e-mailu na stránce Kontakt atd.

### Použití šablon webů

Takže jste vytvořili několik různých šablon webů s různými designy, šablonami vzhledu a nastaveními. Jak je teď ve vaší síti využijete?

V zásadě existují dva přístupy, které můžete použít (ne současně):

  * Přiřazení jedné šablony webu ke každému z vašich Tarifů

**NEBO**

  * Umožnění klientům vybrat si šablony webů sami během registrace.

#### Režim 1: Přiřadit šablonu webu

V tomto režimu si vaši klienti nebudou moci vybrat šablonu při vytváření účtu, ale vy určíte, která šablona se má použít pro každý z vašich Tarifů.

K tomu přejděte na **Ultimate Multisite > Produkty > Upravit**.

![Úprava produktu pro přiřazení šablony webu](/img/config/product-site-templates.png)

Tím se dostanete na stránku **Upravit produkt**. V sekci **Možnosti produktu** najděte kartu **Šablona webu** a vyberte možnost **Přiřadit šablonu webu** z rozbalovacího pole. Zobrazí se seznam dostupných šablon webů a budete moci vybrat pouze jednu šablonu webu určenou pro tento produkt.

![Karta šablony webu produktu s možností přiřadit šablonu webu](/img/config/product-site-templates.png)

#### Režim 2: Vybrat dostupné šablony webů

V tomto režimu dáte svým klientům možnost výběru během procesu registrace. Budou si moci vybrat z různých šablon webů, které definujete v nastavení produktu. Máte možnost omezit šablony webů, ze kterých si mohou vybrat v rámci vybraného produktu. To vám umožní mít různé sady šablon webů pod každým produktem, což je ideální pro zvýraznění různých funkcí a vlastností u dražšího produktu.

Na stránce **Upravit produkt** v sekci **Možnosti produktu** najděte kartu **Šablona webu** a vyberte možnost **Vybrat dostupné šablony webů** z rozbalovacího pole. Zobrazí se seznam dostupných šablon webů a budete moci vybrat šablony webů, které chcete zpřístupnit. To provedete výběrem jejich Chování: **Dostupná**, pokud chcete, aby šablona webu byla zahrnuta v seznamu. _**Nedostupná**_, pokud nechcete, aby se šablona webu zobrazovala jako možnost. A **Předvybraná**, pokud chcete, aby jedna z uvedených šablon webů byla výchozí vybraná.

![Výběr dostupných šablon webů s možnostmi chování](/img/config/product-site-templates.png)

### Výchozí režim: Výběr šablony webu ve formuláři pokladny

Pokud chcete, aby všechny vaše šablony webů byly dostupné během registrace, nebo nechcete dělat práci navíc s přiřazováním nebo specifikováním šablon webů pod každým produktem, který vytvoříte, můžete jednoduše nastavit výběr šablony webu ve vašem **Formuláři pokladny**. K tomu stačí přejít na **Ultimate Multisite > Formuláře pokladny**. Pak klikněte na **Upravit** pod formulářem, který chcete nastavit.

![Stránka se seznamem formulářů pokladny](/img/config/checkout-forms-list.png)

Tím se otevře stránka **Upravit formulář pokladny**. Najděte pole **Výběr šablony** a klikněte pod ním na **Upravit**.

![Editor formuláře pokladny s polem výběru šablony](/img/config/checkout-form-editor.png)

Objeví se modální okno. V poli **Šablony webů** můžete vybrat a vypsat všechny šablony webů, které chcete zpřístupnit během registrace. Šablony webů, které zde určíte, budou dostupné bez ohledu na to, jaký produkt uživatel vybral.

![Pole šablon webů v editoru formuláře pokladny](/img/config/checkout-form-step.png)

### Možnosti šablon webů

Existují další funkce šablon webů, které můžete zapnout nebo vypnout v nastavení Ultimate Multisite.

![Možnosti šablon webů v nastavení Ultimate Multisite](/img/config/settings-sites.png)

#### Povolit přepínání šablon

Povolení této možnosti umožní vašim klientům přepnout šablonu, kterou si vybrali během registrace, poté co je účet a web vytvořen. To je užitečné z pohledu klienta, protože jim to umožňuje znovu vybrat šablonu, pokud později zjistí, že jejich původní volba nebyla pro jejich konkrétní potřeby ta nejlepší.

#### Povolit uživatelům používat jejich web jako šablony

Protože uživatelé podwebů strávili čas budováním a designováním svého vlastního webu, mohou chtít jej naklonovat a použít jako jednu z dostupných šablon webů při vytváření dalšího podwebu ve vaší síti. Tato možnost jim to umožní.

#### Kopírovat média při duplikaci šablony

Zaškrtnutí této možnosti zkopíruje média nahraná na šabloně webu do nově vytvořeného webu. Toto lze přepsat u každého z tarifů.

#### **Zabránit vyhledávačům v indexování šablon webů**

Šablony webů, jak je popsáno v tomto článku, jsou předpřipravené, ale stále jsou součástí vaší sítě, což znamená, že jsou stále dostupné pro vyhledávače. Tato možnost vám umožní skrýt šablony webů, aby je vyhledávače nemohly indexovat.

## Předvyplňování šablon webů s automatickým vyhledáváním a nahrazováním

Jednou z nejsilnějších funkcí Ultimate Multisite je možnost přidat libovolná textová, barevná a výběrová pole do registračního formuláře. Jakmile máme tato data zachycena, můžeme je použít k předvyplnění obsahu v určitých částech vybrané šablony webu. Pak, když se nový web publikuje, Ultimate Multisite nahradí zástupné texty skutečnými informacemi zadanými během registrace.

Například, pokud chcete získat název společnosti vašeho koncového uživatele během registrace a automaticky umístit název společnosti na domovskou stránku. Na domovské stránce vaší šablony webu musíte přidat zástupné texty, jako na obrázku níže (zástupné texty by měly být přidány obklopené dvojitými složenými závorkami - {{nazev_zastupce}}).

![Domovská stránka se zástupným textem ve složených závorkách](/img/config/site-templates-list.png)

Pak můžete jednoduše přidat odpovídající registrační pole do vašeho formuláře pokladny pro zachycení těchto dat:

![Formulář pokladny s odpovídajícím registračním polem](/img/config/checkout-form-editor.png)

Váš zákazník pak bude moci vyplnit toto pole během registrace.

![Registrační pole vyplněné zákazníkem](/img/config/checkout-form-step.png)

![Náhled registračního formuláře](/img/config/checkout-form-editor.png)

Ultimate Multisite pak automaticky nahradí zástupné texty daty poskytnutými zákazníkem.

![Zástupné texty nahrazené daty zákazníka na webu](/img/config/site-templates-list.png)

### Řešení problému „šablona plná zástupných textů"

To vše je skvělé, ale narážíme na nepěkný problém: nyní jsou naše šablony webů – které mohou navštívit naši zákazníci – plné ošklivých zástupných textů, které toho moc neříkají.

K vyřešení tohoto problému nabízíme možnost nastavit fiktivní hodnoty pro zástupné texty a tyto hodnoty používáme k vyhledání a nahrazení jejich obsahu na šablonách webů, zatímco je vaši zákazníci navštěvují.

K editoru zástupných textů šablon se dostanete přechodem na **Ultimate Multisite > Nastavení > Weby** a poté v postranním panelu kliknutím na odkaz **Upravit zástupné texty**.

![Nastavení zástupných textů na stránce nastavení Weby](/img/config/settings-sites.png)

Tím se dostanete do editoru obsahu zástupných textů, kde můžete přidávat zástupné texty a jejich příslušný obsah.

![Editor obsahu zástupných textů šablon](/img/config/settings-sites.png)

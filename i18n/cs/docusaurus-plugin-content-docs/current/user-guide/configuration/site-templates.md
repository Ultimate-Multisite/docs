---
title: Šablony webu
sidebar_position: 4
_i18n_hash: fec01b1bf4e915bea1e8cd662fc1b465
---
# Šablony webů (v2)

_**POZNÁMKA: Tento článek se týká Ultimate Multisite verze 2.x. Pokud používáte verzi 1.x,**_ **podívejte se na tento článek** _**.**_

Naším cílem při vytváření prémiové sítě s Ultimate Multisite je automatizovat co nejvíce procesů a zároveň dát našim klientům flexibilitu a různé možnosti, ze kterých si mohou vybírat při vytváření svých webů. Jedním snadným způsobem, jak této rovnováhy dosáhnout, je využít funkci šablon webů v Ultimate Multisite.

## Co je šablona webu?

Jak název napovídá, šablona webu je výchozí web, který lze použít jako základ při vytváření nových webů ve vaší síti.

To znamená, že můžete vytvořit základní web, aktivovat různé pluginy, nastavit aktivní theme a přizpůsobit jej libovolným způsobem. Když si pak váš zákazník vytvoří nový account, místo výchozího WordPress webu bez smysluplného obsahu uvnitř získá kopii vašeho základního webu se všemi přizpůsobeními a obsahem již připravenými.

To zní skvěle, ale jak vytvořím novou šablonu webu? Je to tak jednoduché, jak jen může být.

## Vytvoření a úprava nové šablony webu

Šablony webů jsou jen běžné weby ve vaší síti. Chcete-li vytvořit novou šablonu, můžete jednoduše přejít na **Network Admin > Ultimate Multisite > Sites > Add Site.**

**![Tlačítko pro přidání webu na stránce seznamu webů](/img/config/site-templates-list.png)**

Tím se otevře modální okno, kde budete požádáni o **název webu, doménu/cestu webu** a **typ webu**. V rozevíracím poli **Site Type** se ujistěte, že vyberete **Site Template** *.*

_![Modální okno pro přidání šablony webu s rozevíracím polem typu webu](/img/config/site-templates-list.png)_

Můžete také přidat popis určený zákazníkům, který vysvětlí, co šablona obsahuje:

![Pole popisu šablony webu na obrazovce úprav šablony webu](/img/config/site-template-edit-description.png)

Ve spodní části formuláře si všimnete přepínače **Copy Site**. Ten vám umožní vytvořit novou šablonu webu na základě existující šablony webu jako výchozího bodu, což vám pomůže ušetřit čas oproti vytváření šablony webu od začátku.

![Modální okno pro přidání šablony webu s přepínačem kopírování webu](/img/config/site-templates-list.png)

### Přizpůsobení obsahu šablony webu

Chcete-li šablonu webu přizpůsobit, jednoduše přejděte na její panel Dashboard a proveďte potřebné změny. Můžete vytvářet nové příspěvky, stránky, aktivovat pluginy a změnit aktivní theme. Můžete dokonce přejít do Customizeru a měnit nejrůznější možnosti přizpůsobení.

![Rozhraní pro úpravu šablony webu](/img/config/site-template-edit.png)

Všechna tato data se zkopírují, když zákazník vytvoří nový web založený na této šabloně webu.

### Pokročilé možnosti

Pokud se vyznáte ve vlastním kódování, můžete využít naše Search and Replace API k automatickému nahrazení informací na novém webu po jeho vytvoření. To je užitečné například pro nahrazení názvů společností na stránce O nás, nahrazení kontaktního e-mailu na stránce Kontakt atd.

### Používání šablon webů

Dobře, vytvořili jste tedy několik různých šablon webů s různými designy, themes a nastaveními. Jak je nyní ve své síti využít?

V zásadě existují dva přístupy, které nyní můžete použít (ne současně):

  * Připojit jednu šablonu webu ke každému ze svých plánů

**NEBO**

  * Umožnit klientům, aby si během registrace vybrali šablony webů sami.

#### Režim 1: Přiřadit šablonu webu

V tomto režimu si vaši klienti nebudou moci vybrat šablonu při vytváření accountu; místo toho určíte, která šablona se má použít u každého z vašich plánů.

Chcete-li to udělat, musíte přejít na **Ultimate Multisite > Products > Edit**.

![Upravit produkt pro přiřazení šablony webu](/img/config/product-site-templates.png)

Tím se dostanete na stránku **Edit Product**. V části **Product Options** najděte kartu **Site template** a v rozevíracím poli vyberte možnost **Assign Site Template**. Tím se zobrazí seznam dostupných šablon webů a umožní vám vybrat pouze jednu šablonu webu vyhrazenou pro daný produkt.

![Karta šablony webu produktu s možností přiřazení šablony webu](/img/config/product-site-templates.png)

#### Režim 2: Vybrat dostupnou šablonu webu

V tomto režimu dáte klientům možnost volby během procesu registrace. Budou si moci vybrat z různých šablon webů, které definujete v nastavení produktu. Máte možnost omezit šablony webů, ze kterých si mohou u vybraného produktu vybrat. To vám umožní mít pod každým produktem různé sady šablon webů, což je ideální pro zvýraznění různých funkcí a vlastností u produktu s vyšší cenou.

Na stránce **Edit Product**. V části **Product Options** najděte kartu **Site template** a v rozevíracím poli vyberte možnost **Choose Available Site Template**. Tím se zobrazí seznam dostupných šablon webů a umožní vám vybrat šablonu webu, kterou chcete zpřístupnit. Můžete to udělat výběrem jejího chování: **Available**, pokud chcete, aby byla šablona webu zahrnuta v seznamu. _**Not Available**_, pokud nechcete, aby se šablona webu zobrazovala jako možnost. A **Pre-selected**, pokud chcete, aby jedna z uvedených šablon webů byla vybrána jako výchozí.

![Výběr dostupných šablon webů s možnostmi chování](/img/config/product-site-templates.png)

### Výchozí režim: výběr šablony webu ve formuláři Checkout

Pokud chcete, aby byly během registrace dostupné všechny vaše šablony webů, nebo možná nechcete dělat práci navíc s přiřazováním či specifikováním šablon webů u každého vytvořeného produktu, můžete jednoduše nastavit výběr šablony webu ve svém **Checkout Form**. Chcete-li to udělat, přejděte na **Ultimate Multisite > Checkout Forms** a klikněte na **Edit** pod formulářem, který chcete nakonfigurovat.

Tím se zobrazí stránka **Edit Checkout Form**. Najděte pole **Template Selection** a klikněte pod ním na **Edit**.

Zobrazí se modální okno. V poli **Template Sites** můžete vybrat a vypsat všechny šablony webů, které chcete mít dostupné během registrace. Šablony webů, které zde zadáte, budou dostupné bez ohledu na to, jaký produkt uživatel vybral.

![Pole výběru šablony v editoru checkout formuláře](/img/config/checkout-form-template-step.png)

Na frontendu zákazníci během checkoutu vidí výběr šablony a mohou si zvolit výchozí design pro svůj nový web.

![Frontendový výběr šablony během registrace](/img/config/frontend-template-chooser.png)

### Možnosti šablon webů

V nastavení Ultimate Multisite jsou k dispozici další funkce šablon webů, které můžete zapnout nebo vypnout.

![Možnosti šablon webů v nastavení Ultimate Multisite](/img/config/settings-sites-templates-section.png)

#### Povolit přepínání šablon

Zapnutí této možnosti umožní vašim klientům po vytvoření účtu a webu změnit šablonu, kterou si vybrali během procesu registrace. To je užitečné z pohledu klienta, protože jim to umožní znovu vybrat šablonu, pokud později zjistí, že jejich původní volba nebyla pro jejich konkrétní potřeby nejlepší.

#### Povolit uživatelům používat jejich web jako šablony

Protože uživatelé podwebů strávili čas budováním a navrhováním vlastního webu, mohou ho chtít naklonovat a použít jako jednu ze šablon webů dostupných při vytváření dalšího podwebu ve vaší síti. Tato možnost jim to umožní.

#### Kopírovat média při duplikaci šablony

Zaškrtnutí této možnosti zkopíruje média nahraná na web šablony do nově vytvořeného webu. Toto lze přepsat u každého z plánů.

#### **Zabránit vyhledávačům v indexování šablon webů**

Šablony webů, jak je popsáno v tomto článku, jsou boilerplate, ale stále jsou součástí vaší sítě, což znamená, že jsou stále dostupné pro vyhledávače. Tato možnost vám umožní šablony webů skrýt, aby je vyhledávače mohly indexovat.

## Předvyplnění šablon webů pomocí automatického hledání a nahrazování

Jednou z nejvýkonnějších funkcí Ultimate Multisite je možnost přidat do registračního formuláře libovolná textová, barevná a výběrová pole. Jakmile tato data zachytíme, můžeme je použít k předvyplnění obsahu v určitých částech vybrané šablony webu. Když je pak nový web publikován, Ultimate Multisite nahradí zástupné symboly skutečnými informacemi zadanými během registrace.

Například pokud chcete během registrace získat název společnosti koncového uživatele a automaticky jej vložit na domovskou stránku. Na domovské stránce vašeho webu šablony musíte přidat zástupné symboly, jako na obrázku níže (zástupné symboly by měly být přidány obklopené dvojitými složenými závorkami - {{placeholder_name}}).

![Domovská stránka se zástupným textem ve složených závorkách](/img/config/site-templates-list.png)

Poté můžete jednoduše přidat odpovídající registrační pole do svého checkout formuláře, abyste tato data zachytili. Stejný editor checkout formuláře použitý pro výběr šablony vám umožňuje umístit vlastní pole vedle výběru šablony:

![Výběr šablony a registrační pole v editoru checkout formuláře](/img/config/checkout-form-template-step.png)

Váš zákazník pak bude moci toto pole během registrace vyplnit.

![Frontendový checkout formulář s výběrem šablony](/img/config/frontend-template-chooser.png)

Ultimate Multisite pak automaticky nahradí zástupné symboly daty poskytnutými zákazníkem.

![Zástupné symboly nahrazené zákaznickými daty na webu](/img/config/site-templates-list.png)

### Řešení problému „šablona plná zástupných symbolů“

To vše je skvělé, ale narážíme na nepříjemný problém: naše šablony webů – které mohou navštívit naši zákazníci – jsou nyní plné ošklivých zástupných symbolů, které toho moc neříkají.

Abychom to vyřešili, nabízíme možnost nastavit pro zástupné symboly falešné hodnoty a tyto hodnoty používáme k vyhledání a nahrazení jejich obsahu na webech šablon, když je vaši zákazníci navštěvují.

K editoru zástupných symbolů šablon získáte přístup tak, že přejdete do **Ultimate Multisite > Nastavení > Weby** a poté v postranním panelu kliknete na odkaz **Upravit zástupné symboly**.

![Nastavení šablon webů na stránce nastavení Weby](/img/config/settings-sites-templates-section.png)

Tím se dostanete do editoru obsahu zástupných symbolů, kde můžete přidávat zástupné symboly a jejich příslušný obsah.

![Vstupní bod editoru obsahu zástupných symbolů šablon](/img/config/settings-sites-templates-section.png)

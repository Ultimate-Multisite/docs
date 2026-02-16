---
title: Základní koncepty
sidebar_position: 1
_i18n_hash: 03ddda7b2873ef4873873b81a1ee546b
---
# Základní pojmy

Pro nového uživatele WordPress Multisite a někoho, kdo právě začal používat Ultimate Multisite, může být zpočátku spousta nových slov a pojmů k naučení. Jejich pochopení je důležité, protože potřebujete rozumět platformě a tomu, jak funguje jako celek.

V tomto článku se pokusíme definovat a vysvětlit některé klíčové pojmy ve WordPressu. Některé z nich jsou relevantnější pro uživatele, jiné pro vývojáře a některé pro obě skupiny.

## WordPress Multisite

WordPress **Multisite** je typ instalace WordPressu, který umožňuje vytvářet a spravovat síť více webových stránek z jediného administračního rozhraní WordPressu. Můžete spravovat vše včetně počtu webů, funkcí, šablon vzhledu a uživatelských rolí. Je možné spravovat stovky i tisíce webů.

## Síť

V terminologii WordPressu je multisite síť prostředí, kde lze spravovat řadu **podwebů** z jednoho administračního rozhraní. Ačkoli se vytvoření multisite sítě liší podle poskytovatele hostingu, výsledkem je obvykle několik dodatečných direktiv v souboru **wp-config.php**, které WordPressu sdělují, že pracuje v tomto specifickém režimu.

Existuje řada zásadních rozdílů mezi multisite sítí a samostatnou instalací WordPressu, které si nyní stručně probereme.

## Databáze

Databáze je strukturovaný, organizovaný soubor dat. V počítačové terminologii se databáze vztahuje k softwaru používanému pro ukládání a organizaci dat. Představte si ji jako kartotéku, kde ukládáte data do různých sekcí nazývaných tabulky.

WordPress Multisite používá jednu databázi a každý podweb získává vlastní tabulky s ID blogu v prefixu, takže jakmile nainstalujete síťovou instalaci a vytvoříte podweb, měli byste mít tyto tabulky:

_wp_1_options_ \- tabulka nastavení pro první podweb

_wp_2_options_ \- tabulka nastavení pro druhý podweb

## Poskytovatel hostingu

Poskytovatel hostingu je společnost, která umožňuje firmám a jednotlivcům zpřístupnit jejich webové stránky prostřednictvím internetu. Služby, které poskytovatelé hostingu nabízejí, se liší, ale obvykle zahrnují návrh webových stránek, úložný prostor na serveru a připojení k internetu.

## Doména

Doménové jméno je adresa, kterou lidé používají k návštěvě vašeho webu. Říká webovému prohlížeči, kde má váš web hledat. Stejně jako poštovní adresa je doména způsob, jakým lidé navštěvují váš web online. A stejně jako vývěsní štít před vaším obchodem. Pokud chcete navštívit naši webovou stránku, musíte do adresního řádku prohlížeče zadat naši webovou adresu, což je [_www.ultimatemultisite.com_](http://www.ultimatemultisite.com) _,_ kde [**ultimatemultisite.com**](http://ultimatemultisite.com) je doménové jméno.

## Subdoména

Subdoména je typ hierarchie webu pod hlavní doménou, ale místo použití složek k organizaci obsahu na webu má jakýsi vlastní web. Prezentuje se jako [**https://site1.domain.com/**](https://site1.domain.com/) kde _site1_ je název subdomény a [_domain.com_](http://domain.com) je hlavní doména.

## Podadresář

Podadresář je typ hierarchie webu pod kořenovou doménou, který používá složky k organizaci obsahu na webu. Podadresář je totéž co podsložka a názvy lze používat zaměnitelně. Prezentuje se jako [**https://domain.com/site1**](https://domain.com/site1) kde _site1_ je název podadresáře a [_domain.com_](http://domain.com) je hlavní doména.

## Podweb

Podweb je podřízený web, který vytvoříte v rámci Multisite sítě. Může to být buď **subdoména**, nebo **podadresář** v závislosti na tom, jak je vaše instalace WordPress Multisite nakonfigurována.

## Super Admin

WordPress Super Admin je uživatelská role s plnými oprávněními ke správě všech podwebů v Multisite síti. Pro uživatele Multisite je to **nejvyšší úroveň přístupu**, kterou můžete poskytnout ke své instalaci WordPressu.

## Plugin

Obecně je plugin sada kódu, která přidává další funkcionalitu vašemu WordPress webu. Může to být něco jednoduchého jako změna přihlašovacího loga nebo něco složitého jako přidání e-commerce funkcionality. _Woocommerce a Contact Form_ jsou příklady pluginů.

V rámci WordPress Multisite mohou pluginy instalovat pouze Super Admini z administračního rozhraní sítě. Administrátoři podwebů mohou pluginy pouze aktivovat a deaktivovat v rámci svého podwebu.

## Šablony vzhledu

WordPress šablona vzhledu je skupina souborů (_grafika, styly a kód_), která určuje celkový vzhled webu. Poskytuje veškeré stylování front-endu, jako je styl písma, rozložení stránky, barvy atd.

Stejně jako pluginy, šablony vzhledu v WordPress Multisite může instalovat pouze Super Admin a mohou být aktivovány na úrovni podwebu administrátory podwebů.

## Šablona webu

**Šablona webu** je předpřipravený web, který lze použít jako základ při vytváření nových webů ve vaší síti.

To znamená, že můžete vytvořit základní web, aktivovat různé pluginy, nastavit aktivní šablonu vzhledu a přizpůsobit ji jakýmkoli způsobem. Poté, když váš zákazník vytvoří nový účet, místo výchozího WordPress webu bez smysluplného obsahu získá kopii vašeho základního webu se všemi přizpůsobeními a obsahem již na místě.

## Mapování domén

**Mapování domén** ve WordPressu je způsob, jak přesměrovat uživatele na správný hostitel prostřednictvím adresy webu. V WordPress Multisite jsou podweby vytvářeny buď pomocí podadresáře, nebo subdomény. Mapování domén umožňuje uživatelům podwebů používat doménu nejvyšší úrovně jako [**joesbikeshop.com**](http://joesbikeshop.com), aby jejich adresa webu vypadala profesionálněji.

## SSL

SSL znamená **Secure Sockets Layer**. Je to digitální certifikát, který ověřuje identitu webové stránky a umožňuje šifrované připojení. V dnešní době se používá jako standardní technologie pro udržení bezpečného internetového připojení a ochranu citlivých dat přenášených mezi dvěma systémy, která zabraňuje zločincům číst a upravovat jakékoli přenášené informace, včetně potenciálních osobních údajů. Moderní prohlížeče vyžadují SSL, což jej činí nezbytným při vytváření a provozování webových stránek.

## Média

Média jsou obrázky, zvukové soubory, videa a další soubory, které tvoří webovou stránku.

Síťové weby sdílejí jednu databázi v WordPress Multisite, ale udržují oddělené cesty v souborovém systému pro mediální soubory.

Standardní umístění WordPressu (wp-content/uploads) zůstává zachováno; nicméně jeho cesta je upravena tak, aby odrážela jedinečné ID síťového webu. V důsledku toho se mediální soubory pro síťový web zobrazují jako wp-contents/uploads/site/[id].

## Trvalé odkazy

Trvalé odkazy jsou permanentní URL adresy vašich jednotlivých blogových příspěvků nebo stránek v rámci vašeho webu. Trvalé odkazy se také označují jako **pěkné odkazy**. Ve výchozím nastavení WordPress URL používají formát query string, který vypadá nějak takto:

[**http://www.example.com/registration**](http://www.example.com/registration)

## Ultimate Multisite

Ultimate Multisite je WordPress plugin vytvořený pro instalace WordPress Multisite, který přemění vaši WordPress instalaci na prémiovou síť webů – jako [WordPress.com](https://WordPress.com) – umožňující klientům vytvářet weby za měsíční, čtvrtletní nebo roční poplatky (můžete také vytvářet bezplatné plány).

## Objednávkový formulář

Objednávkový formulář je jednokrokový nebo vícekrokový formulář, který zahrnuje vytvoření podwebu, členství a uživatelských účtů prostřednictvím registrace Ultimate Multisite. Skládá se z různých polí a platebních formulářů, které musí uživatel vyplnit během procesu registrace.

## Webhook

Webhook (také nazývaný web callback nebo HTTP push API) je způsob, jakým aplikace poskytuje jiným aplikacím informace v reálném čase. Webhook doručuje data do jiných aplikací v okamžiku, kdy nastanou, což znamená, že data získáte okamžitě.

**Ultimate Multisite webhooky** otevírají nekonečné možnosti a umožňují síťovým administrátorům provádět všechny možné šílené, ale užitečné integrace, zejména v kombinaci se službami jako _Zapier a IFTTT_.

## Události

Událost je akce, která nastane jako výsledek činnosti uživatele nebo jiného zdroje, například kliknutí myší. Ultimate Multisite uchovává záznamy o všech událostech a lozích, které se dějí v rámci celé vaší sítě. Sleduje různé aktivity probíhající ve vašem multisite, jako jsou změny plánů.

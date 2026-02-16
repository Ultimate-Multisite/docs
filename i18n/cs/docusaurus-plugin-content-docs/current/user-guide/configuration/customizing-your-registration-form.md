---
title: Přizpůsobení vašeho registračního formuláře
sidebar_position: 17
_i18n_hash: 01f3aeee38a564a8b5c4676a229748cf
---
# Přizpůsobení registračního formuláře

Aby vaše síť vypadala jedinečně a odlišila se od ostatních SaaS řešení postavených na platformě WordPress, Ultimate Multisite vám umožňuje přizpůsobit registrační a přihlašovací stránky pomocí funkce **Checkout Forms** (pokladní formuláře).

I když jsou tyto formuláře snadným a flexibilním způsobem, jak experimentovat s různými přístupy při získávání nových zákazníků, nejčastěji se používají k vytváření personalizovaných registračních formulářů. Tento článek vám ukáže, jak na to.

## Přihlašovací a registrační stránky:

Po instalaci Ultimate Multisite se na vašem hlavním webu automaticky vytvoří vlastní přihlašovací a registrační stránky. Tyto výchozí stránky můžete kdykoli změnit v sekci **Ultimate Multisite > Settings > Login & Registration**.

![Stránka nastavení přihlášení a registrace](/img/config/settings-general.png)

Pojďme se podívat na jednotlivé možnosti, které můžete na stránce **Login & Registration** přizpůsobit:

  * **Enable registration:** Tato možnost zapíná nebo vypíná registraci ve vaší síti. Pokud je vypnutá, vaši zákazníci se nebudou moci registrovat a přihlásit k odběru vašich produktů.

  * **Enable email verification:** Pokud je tato možnost zapnutá, zákazníci, kteří si předplatí bezplatný plán nebo placený plán se zkušební dobou, obdrží ověřovací e-mail a budou muset kliknout na ověřovací odkaz, aby se jejich webové stránky vytvořily.

  * **Default registration page:** Toto je výchozí stránka pro registraci. Tato stránka musí být publikovaná na vašem webu a musí obsahovat registrační formulář (známý také jako checkout formulář) – kde si vaši klienti předplatí vaše produkty. Můžete vytvořit libovolný počet registračních stránek a checkout formulářů, jen nezapomeňte na registrační stránku vložit shortcode checkout formuláře, jinak se nezobrazí.

  * **Use custom login page:** Tato možnost vám umožňuje použít vlastní přihlašovací stránku místo výchozí stránky wp-login.php. Pokud je tato možnost zapnutá, můžete v možnosti **Default login page** (hned níže) vybrat, která stránka se bude používat pro přihlášení.

  * **Obfuscate the original login url (wp-login.php):** Pokud chcete skrýt původní přihlašovací URL, můžete tuto možnost zapnout. Je to užitečné pro prevenci útoků hrubou silou. Pokud je tato možnost povolena, Ultimate Multisite zobrazí chybu 404, když se uživatel pokusí přistoupit k původnímu odkazu wp-login.php.

  * **Force synchronous site publication:** Poté, co si zákazník předplatí produkt v síti, je třeba nový čekající web převést na skutečný síťový web. Proces publikování probíhá asynchronně přes Job Queue. Povolením této možnosti vynutíte, aby publikace proběhla ve stejném požadavku jako registrace.

Nyní se podívejme na další možnosti, které se stále týkají procesu přihlášení a registrace. Najdete je hned pod **Other options** na stejné stránce Login & registration:

  * **Default role:** Toto je role, kterou budou mít vaši zákazníci na svém webu po dokončení registrace.

  * **Add users to the main site as well:** Povolením této možnosti se uživatel po registraci přidá také na hlavní web vaší sítě. Pokud tuto možnost povolíte, zobrazí se níže také možnost nastavit **default role** těchto uživatelů na vašem webu.

  * **Enable multiple accounts:** Umožňuje uživatelům mít účty na různých webech vaší sítě se stejnou e-mailovou adresou. Pokud je tato možnost vypnutá, vaši zákazníci nebudou moci vytvořit účet na jiných webech běžících ve vaší síti se stejnou e-mailovou adresou.

A to jsou všechny možnosti týkající se přihlášení a registrace, které můžete přizpůsobit! Nezapomeňte po dokončení úprav uložit nastavení.

## Použití více registračních formulářů:

Ultimate Multisite 2.0 nabízí editor checkout formulářů, který vám umožňuje vytvořit libovolný počet formulářů s různými poli, nabízenými produkty atd.

Jak přihlašovací, tak registrační stránky obsahují shortcody: **[wu_login_form]** na přihlašovací stránce a **[wu_checkout]** pro registrační stránku. Registrační stránku můžete dále přizpůsobit vytvořením vlastních checkout formulářů.

Pro přístup k této funkci přejděte do menu **Checkout Forms** v levém postranním panelu.

![Menu Checkout Forms v postranním panelu](/img/config/checkout-forms-list.png)

Na této stránce vidíte všechny vaše checkout formuláře.

Pokud chcete vytvořit nový, stačí kliknout na **Add Checkout Form** v horní části stránky.

Jako výchozí bod můžete vybrat jednu ze tří možností: jednokrokový, vícekrokový nebo prázdný. Poté klikněte na **Go to the Editor**.

![Přidání Checkout Form s možnostmi jednokrokový, vícekrokový nebo prázdný](/img/config/checkout-forms-list.png)

Případně můžete upravit nebo duplikovat formuláře, které již máte, kliknutím na možnosti pod jejich názvem. Tam také najdete možnosti zkopírovat shortcode formuláře nebo formulář smazat.

![Akce při najetí na checkout formulář s možnostmi úpravy, duplikace a smazání](/img/config/checkout-form-hover-actions.png)

Pokud vyberete jednokrokový nebo vícekrokový formulář, checkout formulář bude již předvyplněn základními kroky pro jeho fungování. Poté můžete podle potřeby přidat další kroky.

### Úprava Checkout formuláře:

Jak jsme zmínili dříve, checkout formuláře můžete vytvářet pro různé účely. V tomto příkladu budeme pracovat na registračním formuláři.

Po přechodu do editoru checkout formuláře dejte svému formuláři název (který se použije pouze pro interní účely) a slug (používaný například pro vytváření shortcodů).

![Editor checkout formuláře s poli pro název a slug](/img/config/checkout-form-editor.png)

Formuláře se skládají z kroků a polí. Nový krok můžete přidat kliknutím na **Add New Checkout Step**.

![Tlačítko Add New Checkout Step](/img/config/checkout-form-add-step.png)

Na první záložce modálního okna vyplňte obsah kroku vašeho formuláře. Zadejte ID, název a popis. Tyto položky se používají převážně interně.

![Záložka obsahu kroku checkout s ID, názvem a popisem](/img/config/checkout-form-step.png)

Dále nastavte viditelnost kroku. Můžete si vybrat mezi **Always show**, **Only show for logged in users** nebo **Only show for guests**.

![Možnosti viditelnosti kroku checkout](/img/config/checkout-form-step.png)

Nakonec nakonfigurujte styl kroku. Tato pole jsou volitelná.

![Konfigurace stylu kroku checkout](/img/config/checkout-form-step.png)

Nyní je čas přidat pole do našeho prvního kroku. Stačí kliknout na **Add New Field** a vybrat typ sekce, kterou chcete.

![Tlačítko Add New Field](/img/config/checkout-form-editor.png)![Rozbalovací nabídka pro výběr typu pole](/img/config/checkout-form-step.png)

Každé pole má různé parametry k vyplnění. Pro tento první vstup vybereme pole **Username**.

![Konfigurace pole Username](/img/config/checkout-form-step.png)![Parametry pole Username](/img/config/checkout-form-step.png)![Další nastavení pole Username](/img/config/checkout-form-step.png)

Můžete přidat libovolný počet kroků a polí. Pro zobrazení vašich produktů zákazníkům k výběru použijte pole Pricing Table. Pokud chcete nechat klienty vybrat šablonu, přidejte pole Template Selection. A tak dále.

_**Poznámka:** Pokud vytvoříte produkt až po vytvoření checkout formuláře, budete muset produkt přidat do sekce Pricing table. Pokud jej nepřidáte, produkt se vašim zákazníkům na registrační stránce nezobrazí._

_**Poznámka 2:** Uživatelské jméno, e-mail, heslo, název webu, URL webu, souhrn objednávky, platba a tlačítko odeslat jsou povinná pole pro vytvoření checkout formuláře._

Při práci na checkout formuláři můžete vždy použít tlačítko Preview, abyste viděli, jak bude formulář vypadat pro vaše klienty. Můžete také přepínat mezi zobrazením jako stávající uživatel nebo návštěvník.

![Tlačítko Preview v editoru checkout formuláře](/img/config/checkout-form-editor.png)![Náhled checkout formuláře jako návštěvník nebo stávající uživatel](/img/config/checkout-form-editor.png)

V sekci **Advanced Options** můžete nakonfigurovat zprávu pro děkovnou stránku **Thank You**, přidat snippety pro sledování konverzí, přidat vlastní CSS k vašemu checkout formuláři nebo jej omezit na určité země.

![Advanced Options s děkovnou stránkou, sledováním konverzí a vlastním CSS](/img/config/checkout-form-advanced.png)

Checkout formulář můžete také ručně povolit nebo zakázat přepnutím této možnosti v pravém sloupci, nebo formulář trvale smazat.

![Přepínač Active a možnost smazání pro checkout formulář](/img/config/checkout-form-active.png)

Nezapomeňte uložit svůj checkout formulář!

![Tlačítko Save Checkout Form](/img/config/checkout-form-save.png)

Pro získání shortcodu vašeho formuláře klikněte na **Generate Shortcode** a zkopírujte výsledek zobrazený v modálním okně.

![Modální okno Generate Shortcode se shortcodem ke zkopírování](/img/config/checkout-form-editor.png)

_**Poznámka:** Tento shortcode budete muset přidat na registrační stránku, aby se na ní checkout formulář zobrazil._

## Předvýběr produktů a šablon pomocí URL parametrů:

Pokud chcete vytvořit vlastní cenové tabulky pro vaše produkty a předem vybrat v checkout formuláři produkt nebo šablonu, kterou si zákazník vybere z vaší cenové tabulky nebo stránky šablon, můžete k tomu použít URL parametry.

### **Pro plány:**

Přejděte na **Ultimate Multisite > Products > Vyberte plán**. V horní části stránky byste měli vidět tlačítko **Click to copy Shareable Link**. Toto je odkaz, který můžete použít k předvýběru tohoto konkrétního plánu ve vašem checkout formuláři.

![Stránka produktu s tlačítkem sdíleného odkazu](/img/config/products-list.png)

Všimněte si, že tento sdílený odkaz je platný pouze pro **Plány**. Sdílené odkazy nelze použít pro balíčky nebo služby.

### Pro šablony:

Pokud chcete předem vybrat šablony webu ve vašem checkout formuláři, můžete na URL registrační stránky použít parametr: **?template_id=X**. „X" je třeba nahradit **číslem ID šablony webu**. Toto číslo získáte v sekci **Ultimate Multisite > Sites**.

Klikněte na **Manage** přímo pod šablonou webu, kterou chcete použít. Uvidíte číslo SITE ID. Stačí toto číslo použít, aby byla tato konkrétní šablona webu předem vybrána ve vašem checkout formuláři. V našem případě by URL parametr byl **?template_id=2**.

![Seznam webů zobrazující ID šablony webu](/img/config/site-templates-list.png)

Řekněme, že náš síťový web je [**www.mynetwork.com**](http://www.mynetwork.com) a naše registrační stránka s checkout formulářem se nachází na stránce **/register**. Celá URL s touto předem vybranou šablonou webu bude vypadat takto: [**www.mynetwork.com/register/?template**](http://www.mynetwork.com/register/?template)**_id=2**.

A pokud chcete, můžete ve svém checkout formuláři předem vybrat jak produkty, tak šablony. Stačí zkopírovat sdílený odkaz plánu a na konec přidat parametr šablony. Bude to vypadat takto: [**www.mynetwork.com/register/premium-plan/?template**](http://www.mynetwork.com/register/premium-plan/?template)**_id=2**.

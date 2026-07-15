---
title: Přizpůsobení registračního formuláře
sidebar_position: 17
_i18n_hash: 3dada0e900a1f46d950e1815ae8f5085
---
# Přizpůsobení vašeho registračního formuláře

Aby vaše síť vypadala jedinečně oproti všem ostatním SaaS postaveným na platformě WordPress, Ultimate Multisite vám umožňuje přizpůsobit registrační a přihlašovací stránky pomocí naší funkce **Checkout Forms**.

Ačkoli jde o snadný a flexibilní způsob, jak experimentovat s různými přístupy při snaze konvertovat nové zákazníky, nejčastěji se používají k vytváření personalizovaných registračních formulářů. Cílem tohoto článku je ukázat vám, jak to můžete udělat.

## Přihlašovací a registrační stránky: {#login-and-registration-pages}

Při instalaci Ultimate Multisite automaticky vytvoří vlastní přihlašovací a registrační stránky na vašem hlavním webu. Tyto výchozí stránky můžete kdykoli změnit na stránce **Ultimate Multisite > Settings > Login & Registration**.

![Stránka nastavení Login and Registration](/img/config/settings-general.png)

Zde je úplný pohled na stránku nastavení přihlášení a registrace:

![Úplná stránka nastavení Login and Registration](/img/config/settings-login-registration-full.png)

Podívejme se na jednotlivé možnosti, které můžete na stránce **Login & Registration** přizpůsobit:

  * **Povolit registraci:** Tato možnost povolí nebo zakáže registraci ve vaší síti. Pokud je vypnutá, vaši zákazníci se nebudou moci registrovat ani přihlásit k odběru vašich produktů.

  * **Povolit ověření e-mailu:** Pokud je tato možnost zapnutá, zákazníci, kteří se přihlásí k bezplatnému plánu nebo placenému plánu se zkušebním obdobím, obdrží ověřovací e-mail a budou muset kliknout na ověřovací odkaz, aby byly jejich weby vytvořeny.

  * **Výchozí registrační stránka:** Toto je výchozí stránka pro registraci. Tato stránka musí být na vašem webu publikovaná a musí obsahovat registrační formulář (také známý jako checkout formulář) – místo, kde se vaši klienti přihlásí k odběru vašich produktů. Můžete vytvořit libovolný počet registračních stránek a checkout formulářů, jen nezapomeňte vložit shortcode checkout formuláře na registrační stránku, jinak se nezobrazí.

  * **Použít vlastní přihlašovací stránku:** Tato možnost vám umožňuje použít přizpůsobenou přihlašovací stránku namísto výchozí stránky wp-login.php. Pokud je tato možnost zapnutá, můžete vybrat, která stránka bude použita pro přihlášení, v možnosti **Výchozí přihlašovací stránka** (hned níže).

  * **Znejasnit původní přihlašovací URL (wp-login.php)** : Pokud chcete skrýt původní přihlašovací URL, můžete tuto možnost zapnout. To je užitečné pro prevenci brute-force útoků. Pokud je tato možnost povolena, Ultimate Multisite zobrazí chybu 404, když se uživatel pokusí otevřít původní odkaz wp-login.php.

  * **Vynutit synchronní publikování webu:** Poté, co se zákazník přihlásí k produktu v síti, musí být nový čekající web převeden na skutečný síťový web. Proces publikování probíhá přes Job Queue, asynchronně. Povolte tuto možnost, chcete-li vynutit, aby publikování proběhlo ve stejném požadavku jako registrace.

Nyní se podívejme na další možnosti, které jsou stále relevantní pro proces přihlášení a registrace. Najdete je hned pod **Další možnosti** na stejné stránce Login & Registration:

  * **Výchozí role:** Toto je role, kterou budou mít vaši zákazníci na svém webu po dokončení registrace.

  * **Povolit Jumper:** Povolí zkratku Jumper v administraci. Jumper umožňuje správcům rychle přejít na obrazovky Ultimate Multisite, síťové objekty a další podporované cíle bez procházení každého menu. Vypněte jej, pokud chcete tento nástroj rychlé navigace v administrátorském rozhraní skrýt.

  * **Přidat uživatele také na hlavní web:** Povolením této možnosti bude uživatel po dokončení registrace přidán také na hlavní web vaší sítě. Pokud tuto možnost povolíte, hned níže se také zobrazí možnost nastavit **výchozí roli** těchto uživatelů na vašem webu.

  * **Povolit více účtů:** Umožňuje uživatelům mít účty na různých webech vaší sítě se stejnou e-mailovou adresou. Pokud je tato možnost vypnutá, vaši zákazníci nebudou moci vytvořit účet na jiných webech běžících ve vaší síti se stejnou e-mailovou adresou.

A to jsou všechny možnosti související s přihlášením a registrací, které můžete přizpůsobit! Po dokončení úprav nezapomeňte nastavení uložit.

## Používání více registračních formulářů: {#using-multiple-registration-forms}

Ultimate Multisite 2.0 nabízí editor checkout formulářů, který vám umožňuje vytvořit libovolný počet formulářů s různými poli, nabízenými produkty atd.

Přihlašovací i registrační stránky jsou vloženy pomocí shortcodů: **[wu_login_form]** na přihlašovací stránce a**[wu_checkout]** pro registrační stránku. Registrační stránku můžete dále přizpůsobit vytvořením nebo sestavením checkout formulářů.

Pro přístup k této funkci přejděte do menu **Checkout Forms** v levém postranním panelu.

![Menu Checkout Forms v postranním panelu](/img/config/checkout-forms-list.png)

Na této stránce vidíte všechny checkout formuláře, které máte.

Pokud chcete vytvořit nový, stačí kliknout na **Přidat checkout formulář** v horní části stránky.

Jako výchozí bod můžete vybrat jednu z těchto tří možností: jeden krok, více kroků nebo prázdný formulář. Poté klikněte na **Přejít do editoru**.

![Přidání checkout formuláře s možnostmi jeden krok, více kroků nebo prázdný](/img/config/checkout-forms-list.png)

Případně můžete upravit nebo duplikovat formuláře, které už máte, kliknutím na možnosti pod jejich názvem. Tam také najdete možnosti zkopírovat shortcode formuláře nebo formulář odstranit.

![Akce checkout formuláře při najetí myší s úpravou, duplikací a odstraněním](/img/config/checkout-form-hover-actions.png)

Pokud vyberete jeden krok nebo více kroků, checkout formulář už bude předvyplněn základními kroky potřebnými k jeho fungování. Poté do něj můžete, pokud chcete, přidat další kroky.

### Úprava Checkout Form: {#editing-a-checkout-form}

Jak jsme už zmínili, checkout formuláře můžete vytvářet pro různé účely. V tomto příkladu budeme pracovat na registračním formuláři.

Po přechodu do editoru checkout formuláře dejte svému formuláři název (který bude použit pouze pro interní referenci) a slug (používaný například k vytváření shortcodů).

![Editor pokladního formuláře s poli pro název a slug](/img/config/checkout-form-name-slug.png)

Formuláře se skládají z kroků a polí. Nový krok můžete přidat kliknutím na **Přidat nový krok pokladny**.

![Tlačítko Přidat nový krok pokladny](/img/config/checkout-form-add-step.png)

Na první záložce modálního okna vyplňte obsah kroku svého formuláře. Dejte mu ID, název a popis. Tyto položky se většinou používají interně.

![Záložka obsahu kroku pokladny s ID, názvem a popisem](/img/config/checkout-form-step-content.png)

Dále nastavte viditelnost kroku. Můžete si vybrat mezi **Vždy zobrazit** , **Zobrazit pouze přihlášeným uživatelům** nebo **Zobrazit pouze hostům**.

![Možnosti viditelnosti kroku pokladny](/img/config/checkout-form-step-visibility.png)

Nakonec nakonfigurujte styl kroku. Tato pole jsou volitelná.

![Konfigurace stylu kroku pokladny](/img/config/checkout-form-step-style.png)

Nyní je čas přidat pole do našeho prvního kroku. Stačí kliknout na **Přidat nové pole** a vybrat typ sekce, který chcete.

![Tlačítko Přidat nové pole](/img/config/checkout-form-add-field-button.png)![Rozbalovací nabídka pro výběr typu pole](/img/config/checkout-form-field-type-dropdown.png)

Každé pole má jiné parametry k vyplnění. Pro tento první vstup vybereme pole **Uživatelské jméno**.

![Konfigurace pole Uživatelské jméno](/img/config/checkout-form-username-content.png)![Parametry pole Uživatelské jméno](/img/config/checkout-form-username-visibility.png)![Další nastavení pole Uživatelské jméno](/img/config/checkout-form-username-style.png)

Můžete přidat tolik kroků a polí, kolik potřebujete. Chcete-li svým zákazníkům zobrazit produkty, aby si jeden vybrali, použijte pole Cenová tabulka. Pokud chcete svým klientům umožnit výběr šablony, přidejte pole Výběr šablony. A tak dále.

![Editor pokladního formuláře s polem pro výběr šablony](/img/config/checkout-form-with-template-field.png)

_**Poznámka:** Pokud vytvoříte produkt po vytvoření svého pokladního formuláře, budete muset produkt přidat v sekci Cenová tabulka. Pokud jej nepřidáte, produkt se vašim zákazníkům na registrační stránce nezobrazí._

_**Poznámka 2:** uživatelské jméno, e-mail, heslo, název webu, URL webu, souhrn objednávky, platba a tlačítko odeslání jsou povinná pole pro vytvoření pokladního formuláře._

Při práci na svém pokladním formuláři můžete kdykoli použít tlačítko Náhled a podívat se, jak formulář uvidí vaši klienti. Můžete také přepínat mezi zobrazením jako existující uživatel nebo návštěvník.

![Tlačítko Náhled v editoru pokladního formuláře](/img/config/checkout-form-preview-button.png)![Náhled pokladního formuláře jako návštěvník nebo existující uživatel](/img/config/checkout-form-preview-modal.png)

Nakonec v **Pokročilých možnostech** můžete nakonfigurovat zprávu pro stránku **Děkujeme**, přidat úryvky pro sledování konverzí, přidat vlastní CSS do svého pokladního formuláře nebo jej omezit na určité země.

![Pokročilé možnosti se stránkou Děkujeme, sledováním konverzí a vlastním CSS](/img/config/checkout-form-advanced.png)

Pokladní formulář můžete také ručně povolit nebo zakázat přepnutím této možnosti v pravém sloupci, případně formulář trvale smazat.

![Přepínač Aktivní a možnost smazání pokladního formuláře](/img/config/checkout-form-active.png)

Nezapomeňte svůj pokladní formulář uložit!

![Tlačítko Uložit pokladní formulář](/img/config/checkout-form-save.png)

Chcete-li získat shortcode svého formuláře, klikněte na **Vygenerovat shortcode** a zkopírujte výsledek zobrazený v modálním okně.

![Modální okno Vygenerovat shortcode se shortcode ke zkopírování](/img/config/checkout-form-editor.png)

_**Poznámka:** Tento shortcode budete muset přidat na svou registrační stránku, aby do ní byl tento pokladní formulář přidán._

## Předvýběr produktů a šablon pomocí parametrů URL: {#pre-selecting-products-and-templates-via-url-parameters}

Pokud chcete vytvořit přizpůsobené cenové tabulky pro své produkty a předvybrat v pokladním formuláři produkt nebo šablonu, kterou si váš zákazník vybere z vaší cenové tabulky nebo stránky se šablonami, můžete k tomu použít parametry URL.

### **Pro plány:** {#for-plans}

Přejděte na **Ultimate Multisite > Produkty > Vyberte plán**. V horní části stránky byste měli vidět tlačítko **Kliknutím zkopírovat sdílitelný odkaz**. Toto je odkaz, který můžete použít k předvýběru tohoto konkrétního plánu ve svém pokladním formuláři.

![Stránka produktu s tlačítkem sdílitelného odkazu](/img/config/products-list.png)

Upozorňujeme, že tento sdílitelný odkaz je platný pouze pro **Plány**. Sdílitelné odkazy nemůžete použít pro balíčky nebo služby.

### Pro šablony: {#for-templates}

Pokud chcete ve svém pokladním formuláři předvybrat šablony webu, můžete na URL své registrační stránky použít parametr: **?template_id=X**. „X“ je třeba nahradit **ID číslem šablony webu**. Toto číslo získáte tak, že přejdete na **Ultimate Multisite > Weby**.

Klikněte na **Spravovat** přímo pod šablonou webu, kterou chcete použít. Uvidíte číslo SITE ID. Použijte toto číslo pro tuto konkrétní šablonu webu, aby byla ve vašem pokladním formuláři předvybrána. V našem případě zde bude parametr URL **?template_id=2**.

![Seznam webů zobrazující ID šablony webu](/img/config/site-templates-list.png)

Řekněme, že náš síťový web je [**www.mynetwork.com**](http://www.mynetwork.com) a naše registrační stránka s pokladním formulářem se nachází na stránce **/register**. Celá URL s touto předvybranou šablonou webu bude vypadat takto: [**www.mynetwork.com/register/?template**](http://www.mynetwork.com/register/?template)**_id=2**.

A pokud chcete, můžete ve svém pokladním formuláři předvybrat jak produkty, tak šablony. Stačí zkopírovat sdílitelný odkaz plánu a na konec vložit parametr šablony. Bude to vypadat takto: [**www.mynetwork.com/register/premium-plan/?template**](http://www.mynetwork.com/register/premium-plan/?template)**_id=2**.

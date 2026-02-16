---
title: Úryvky kódu
sidebar_position: 1
_i18n_hash: 2284b14474d86f665fa7c84cc305553e
---
# Ukázky kódu pro v2

Ukázky kódu pro **WordPress** se v zásadě používají k provádění určitých akcí, které by jinak vyžadovaly samostatný menší plugin. Takové ukázky kódu se vkládají do jednoho ze souborů jádra WordPressu nebo šablony (obvykle do souboru functions.php vaší šablony), nebo je lze použít jako MU plugin.

V tomto článku vám ukážeme tři ukázky kódu, které lze použít s **Ultimate Multisite v2**:

  * [**Změna pozice položky menu Účet**](#changing-the-position-of-the-account-menu-item)

  * [**Jak zjistit, zda má uživatel daný tarif a/nebo aktivní předplatné**](#how-to-check-if-the-user-is-under-a-given-plan-andor-has-an-active-subscription)

  * [**Řešení problémů s CORS u font-ikon na mapovaných doménách**](#fixing-cors-issues-with-font-icons-in-mapped-domains)

## Změna pozice položky menu Účet

Chcete-li změnit pozici položky menu Účet na nástěnce vašeho klienta, stačí přidat následující ukázku kódu do souboru functions.php aktivní šablony vašeho hlavního webu. Ukázku můžete také vložit do jednoho z vašich mu-pluginů nebo vlastních pluginů.

add_filter('wu_my_account_menu_position', function() { return 10; // Upravte tuto hodnotu pro umístění menu na požadovanou pozici.

## Jak zjistit, zda má uživatel daný tarif a/nebo aktivní předplatné

Jako správce sítě můžete potřebovat vytvořit vlastní funkce, které budou provádět základní akce nebo zpřístupňovat službu/funkci vybrané skupině předplatitelů nebo koncových uživatelů na základě stavu jejich předplatného a tarifu, pod kterým jsou přihlášeni.

Tyto nativní funkce Ultimate Multisite vám s tím pomohou.

Pro zjištění, zda je uživatel členem daného tarifu, můžete použít funkci:

wu_has_plan($user_id, $plan_id)

Pro zjištění, zda je předplatné aktivní, můžete použít funkci:

wu_is_active_subscriber($user_id)

Níže je příklad ukázky kódu, která kontroluje, zda je aktuální uživatel pod konkrétním tarifem (_ID tarifu 50_) a zda má aktivní předplatné.

$user_id = get_current_user_id();$plan_id = 50;if (wu_has_plan($user_id, $plan_id) && wu_is_active_subscriber($user_id)) { // UŽIVATEL JE ČLENEM TARIFU A JEHO PŘEDPLATNÉ JE AKTIVNÍ, PROVEĎTE AKCI} else { // UŽIVATEL NENÍ ČLENEM TARIFU -- NEBO -- JEHO PŘEDPLATNÉ NENÍ AKTIVNÍ, PROVEĎTE JINOU AKCI} // end if;

Upozorňujeme, že _**wu_has_plan**_ vyžaduje „ID tarifu", aby fungovala správně.

Pro získání ID tarifu přejděte na **Ultimate Multisite > Produkty**. ID každého produktu se zobrazí v pravé části tabulky.

Upozorňujeme, že uživatelé mohou být přihlášeni pouze k **Tarifu**, nikoli k balíčku nebo službě, protože ty jsou pouze doplňky k **Tarifu**.

![Seznam produktů zobrazující ID tarifů](/img/admin/products-list.png)

## Řešení problémů s CORS u font-ikon na mapovaných doménách
## Řešení problémů s CORS u font-ikon na mapovaných doménách

Po namapování domény na podstránku můžete zjistit, že má web problémy s načítáním vlastních fontů. To je způsobeno blokováním cross-origin v nastavení vašeho serveru.

Protože soubory fontů jsou téměř vždy načítány přímo z CSS, náš plugin pro mapování domén není schopen přepsat URL adresy tak, aby používaly mapovanou doménu místo původní. Pro vyřešení tohoto problému budete muset upravit konfigurační soubory vašeho serveru.

Níže jsou ukázky kódu pro řešení problému na Apache a NGINX. Tyto změny vyžadují pokročilé znalosti konfiguračních souborů serveru (soubory .htaccess a konfigurační soubory NGINX). Pokud si nejste jisti provedením těchto změn sami, pošlete tuto stránku podpoře vašeho poskytovatele hostingu při žádosti o pomoc.

### Apache

Do souboru .htaccess přidejte:

<FilesMatch ".(ttf|ttc|otf|eot|woff|font.css|css)$"> Header set Access-Control-Allow-Origin "*" 

### NGINX

Do konfiguračního souboru serveru (umístění se liší server od serveru) přidejte:

location ~ .(ttf|ttc|otf|eot|woff|font.css|css)$ { add_header Access-Control-Allow-Origin "*";}

---
title: Jak nainstalovat WordPress Multisite
sidebar_position: 2
_i18n_hash: 81ac2c706ca3b3b48bacaf85039d4753
---
# Jak nainstaluji WordPress Multisite?

WordPress Multisite umožňuje provozovat síť webů na jediné instalaci. Jedná se o vestavěnou funkci, která ale není ve výchozím stavu aktivní.

:::tip
Ultimate Multisite obsahuje **[vestavěného průvodce nastavením Multisite](./multisite-setup-wizard)**, který celý tento proces automatizuje. Pokud máte Ultimate Multisite nainstalovaný, doporučujeme místo níže popsaných manuálních kroků použít právě tohoto průvodce.
:::

Vzhledem k tomu, že Ultimate Multisite je plugin určený výhradně pro síťové instalace, v tomto návodu se naučíte, jak WordPress Multisite nainstalovat a nastavit ručně. Tento text vychází z článku [How to Install and Setup WordPress Multisite Network](https://www.wpbeginner.com/wp-tutorials/how-to-install-and-setup-wordpress-multisite-network/) od WPBeginner.

**Na co myslet před vytvořením multisite sítě:**

  * Zajistěte si kvalitní WordPress hosting! Weby v síti sdílejí stejné serverové prostředky.

  * Pokud máte jen několik webů s nízkou návštěvností, sdílený hosting vám pravděpodobně bude stačit.

  * Většina **poskytovatelů spravovaného WordPress hostingu** nabízí Multisite již připravený k použití (nainstalují WordPress s aktivovaným a nakonfigurovaným Multisite za vás). To platí například pro WP Engine, Closte, Cloudways a další. Pokud si nejste jisti, zda to platí i pro vašeho poskytovatele, kontaktujte jeho podporu, než budete pokračovat v tomto návodu.

  * Je také dobré umět nainstalovat WordPress a upravovat soubory pomocí FTP.

_**DŮLEŽITÉ**_ **:** Pokud nastavujete multisite síť na existujícím WordPress webu, nezapomeňte:

  * Vytvořit kompletní zálohu vašeho WordPress webu

  * Deaktivovat všechny pluginy na webu – přejděte na stránku pluginů, v hromadných akcích vyberte _Deaktivovat_ a klikněte na _Použít_

<!-- Screenshot unavailable: WordPress plugins page showing bulk deactivate action -->

Pro aktivaci Multisite se nejprve připojte k webu pomocí FTP klienta nebo správce souborů v cPanelu a otevřete soubor wp-config.php k úpravám.

Před řádek _*That's all, stop editing! Happy blogging.*_ vložte následující kód:

define('WP_ALLOW_MULTISITE', true);

Uložte soubor wp-config.php a nahrajte jej zpět na server.

Nyní, když máte na webu povolenou funkci multisite, je čas nastavit vaši síť.

Přejděte na **Nástroje » Nastavení sítě**

<!-- Screenshot unavailable: WordPress Tools menu showing Network Setup option -->

Teď je potřeba říct WordPressu, jakou strukturu domén budete používat pro weby ve vaší síti: subdomény nebo podadresáře.

Pokud zvolíte subdomény, musíte změnit nastavení DNS pro mapování domén a nastavit _**wildcard subdomény**_ pro vaši multisite síť.

Zpět v Nastavení sítě zadejte název vaší sítě a ujistěte se, že e-mailová adresa v poli E-mail správce sítě je správná. Klikněte na _Instalovat_ a pokračujte.

<!-- Screenshot unavailable: WordPress Network Setup page with network title and admin email fields -->

Přidejte tento kód, který vám WordPress poskytne, do souboru _**wp-config.php**_:

define('MULTISITE', true); define('SUBDOMAIN_INSTALL', true); define('DOMAIN_CURRENT_SITE', 'multisite.local'); define('PATH_CURRENT_SITE', '/'); define('SITE_ID_CURRENT_SITE', 1); define('BLOG_ID_CURRENT_SITE', 1);

A tento kód, rovněž poskytnutý WordPressem, do souboru _**.htaccess**_:

RewriteEngine On RewriteBase / RewriteRule ^index.php$ - [L]

# přidá lomítko na konec /wp-admin

RewriteRule ^wp-admin$ wp-admin/ [R=301,L]

RewriteCond %{REQUEST_FILENAME} -f [OR] RewriteCond %{REQUEST_FILENAME} -d RewriteRule ^ - [L] RewriteRule ^(wp-(content|admin|includes)._) $1 [L] RewriteRule ^(._.php)$ $1 [L] RewriteRule . index.php [L]

Pomocí FTP klienta nebo správce souborů (pokud používáte například cPanel) zkopírujte a vložte kód do těchto dvou souborů.

Nakonec se znovu přihlaste do svého WordPress webu, abyste získali přístup k multisite síti.

**Je důležité otestovat a ujistit se, že dokážete vytvořit podweb na vaší WordPress Multisite instalaci, než nainstalujete Ultimate Multisite.**

Vytvoření podwebu:

  1. Otevřete wp-admin vašeho webu

  2. Přejděte na Moje weby > Weby (/wp-admin/network/sites.php)

  3. Klikněte nahoře na Přidat nový

  4. Vyplňte všechna pole:

  * Adresa webu — Nikdy nepoužívejte „www"

  * Subdoména: [adresawebu.vasedomena.cz](http://adresawebu.vasedomena.cz)

  * Podadresář: [vasedomena.cz/adresawebu](http://vasedomena.cz/adresawebu)

  * Název webu — Název webu, lze později změnit

  * E-mail správce — Nastaví se jako počáteční administrátor podwebu

![Formulář pro přidání nového webu ve WordPress Multisite](/img/admin/sites-list.png)

Po vyplnění polí klikněte na tlačítko „Přidat web". Jakmile je nový podweb vytvořen, přejděte na něj a ujistěte se, že funguje správně.

## Časté problémy:

### 1\. Mohu vytvářet nové weby, ale nejsou přístupné.

Pokud jste zvolili subdomény, musíte také nastavit wildcard subdomény pro vaši multisite síť.

To provedete tak, že přejdete do ovládacího panelu vašeho hostingového účtu (např. cPanel/Plesk/Direct Admin podle vašeho poskytovatele hostingu).

Najděte možnost „Domény" nebo „Subdomény". V některých ovládacích panelech je označena jako „Správa domén".

Do pole pro subdoménu zadejte hvězdičku (*). Poté budete vyzváni k výběru doménového jména, pod které má být subdoména přidána.

Kořenový adresář pro vybranou doménu bude automaticky rozpoznán. Klikněte na tlačítko _Vytvořit_ nebo _Uložit_ pro přidání wildcard subdomény. Záznam by měl vypadat takto: „*.[mojeDomena.cz](http://mojeDomena.cz)"

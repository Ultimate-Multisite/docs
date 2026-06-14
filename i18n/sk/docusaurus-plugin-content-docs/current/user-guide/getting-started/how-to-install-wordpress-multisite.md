---
title: Ako nainštalovať WordPress Multisite
sidebar_position: 2
_i18n_hash: 81ac2c706ca3b3b48bacaf85039d4753
---
# Ako nainštalujem WordPress Multisite?

WordPress Multisite vám umožňuje mať sieti webových stránok na jednej inštalácii. Je to vbudovaná funkcia, ale štandardne je vypnutá.

:::tip
Ultimate Multisite obsahuje **[built-in Multisite Setup Wizard](./multisite-setup-wizard)**, ktorý automatizuje celý tento proces. Ak máte nainštalovaný Ultimate Multisite, odporúčame použiť wizard namiesto sledovania manuálnych krokov nižšie.
:::

Keďže je Ultimate Multisite plugin len pre siete, v tomto tutoriáli si naučíte, ako manuálne nainštalovať a nastaviť WordPress Multisite. Tento text je založený na [How to Install and Setup WordPress Multisite Network](https://www.wpbeginner.com/wp-tutorials/how-to-install-and-setup-wordpress-multisite-network/), z ktorého poskytuje WPBeginner.

**Veľké body, ktoré si treba poznať pred vytvorením svojej multisite siete:**

  * Získej dobré hosting pre WordPress! Webové stránky v sieti zdielajú to isté serverové zdroje.

  * Ak máte len pár webových stránok s nízkou návštevnosťou, zdieľaný hosting pravdepodobne bude pre vás fungovať.

  * Najväčší **Managed WordPress hosting poskytovatelia** ponúkajú Multisite priamo z krabice (inštalujú WordPress s Multisite už aktivovaným a skonfigurovaným pre vás). Toto je prípad na WP Engine, Closte, Cloudways atď. Ak nie ste si istí, či sa to týka vášho poskytovateľa hostingu, kontaktujte ich podporu, než pokračujete v tomto tutoriáli.

  * Je tiež dobré byť zvyknutý na inštaláciu WordPressa a úpravu súborov pomocou FTP.

_**DÔLEŽITÉ**_ **:** Ak nastavujete multisite sieti na existujúcej webovej stránke WordPress, nezabudnite:

  * Vytvoriť kompletnú zálohu (backup) vašej webovej stránky WordPress
  * Deaktivovať všetky pluginy na vašej stránke pomocou przejścia na vašu stránku s pluginmi a vybraného **Deactivate** z bulk actions, potom kliknúť na **Apply**.

Aby dolať Multisite, najprv sa pripojte na svoj webový portnú klientom FTP alebo správcom súborov cPanel a otvorte si súbor `wp-config.php` na úpravu.

Pred radou _*To je to všetko, prestajte s upravovaním! Radosť blogovania.*_ pridať nasledujúci kód:

define('WP_ALLOW_MULTISITE', true);

Uložať a nahrať súbor `wp-config.php` späť na server.

Keď je funkcia Multisite na vašom svete zapnutá, teraz je čas pripraviť si si sieť.

Prejdite do **Tools » Network Setup** (Nástroje » Nastavenie siete)

Ter musíte WordPressu povedať, aký typ doménovej štruktúry budete používať pre siete v vašej sieti: poddomény alebo podkatedérie.

Ak si vyberiete poddomény, musíte zmeniť svoje nastavenia DNS pre mapovanie domén a uistiť sa, že je nastavená _**wildcard subdomains**_ (wildcard poddomény) pre vašu Multisite sieť.

Späť na Nastavenie siete, dáte názov si si sieti a uistite sa, že e-mail adresa v e-mailovej adrese administrátora siete je správna. Kliknite na _Install_ (Instalovať), aby ste pokračovali.

Pridajte tento kód, ktorý poskytuje WordPress, do vášho súboru _**wp-config.php**_:

define('MULTISITE', true); define('SUBDOMAIN_INSTALL', true); define('DOMAIN_CURRENT_SITE', 'multisite.local'); define('PATH_CURRENT_SITE', '/'); define('SITE_ID_CURRENT_SITE', 1); define('BLOG_ID_CURRENT_SITE', 1);

A tento kód, ktorý poskytuje WordPress, do vášho súboru _**.htaccess**_:

RewriteEngine On RewriteBase / RewriteRule ^index.php$ - [L]

# pridajte koncovú čiarť na /wp-admin

RewriteRule ^wp-admin$ wp-admin/ [R=301,L]

RewriteCond %{REQUEST_FILENAME} -f [OR] RewriteCond %{REQUEST_FILENAME} -d RewriteRule ^ - [L] RewriteRule ^(wp-(content|admin|includes)._) $1 [L] RewriteRule ^(._.php)$ $1 [L] RewriteRule . index.php [L]

Použite FTP klient alebo správca súborov (ak používate niečo ako cPanel, napríklad) na skopírovanie a vloženie kódu do týchto dvoch súborov.

Nakoniec sa prihláste znova do vášho WordPress portálu, aby ste pristupovali k svojej multisite sieti.

**Je dôležité testovať a uistiť sa, že dokážete vytvoriť podsítidro na vašej inštalácii WordPress Multisite pred nainštalovaním Ultimate Multisite.**

Vytvorenie podsítidla:

  1. Otvorte správu vášho webu wp-admin

  2. Prejdite do My Sites > Sites (/wp-admin/network/sites.php)

  3. Kliknite na Pridať nové v hornej časti

  4. Vyplňte všetky polia:

  * Site Address — Nikdy nepoužívajte „www“

  * Subdomain: [siteaddress.yourdomain.com](http://siteaddress.yourdomain.com)

  * Subdirectory: [yourdomain.com/siteaddress](http://yourdomain.com/siteaddress)

  * Site Title — Titul webu, ktorý sa môže zmeniť neskôr

  * Admin Email — Nastavte ako počiatočného admina používateľa pre podsítidro

![Pridanie nového podsítidla v WordPress Multisite](/img/admin/sites-list.png)

Po vyplnení polí kliknite na tlačidlo „Add site“ (Pridať sitó). Keď sa nové podsítidlo vytvorí, prejdite a pristupujte k nemu, aby ste si uistili, že je funkčné.

## Bežné problémy:

### 1. Môžem vytvárať nové sitá, ale sú nedostupné.

Ak ste si zvolili poddomény, potrebujete tiež nastaviť wildcard poddomény pre vašu multisite sieti.

Na to sa dá urobiť v kontrolnej paneli účtu na hosting vášho webu (napr. cPanel/Plesk/Direct Admin v závislosti od vášho poskytovateľa hostingu).

Nájdite možnosť „Domains“ alebo „Subdomains“. V niektorých kontrolných paneloch je to označené ako „Domain administration“ (Administracja domén).

V poli poddomény zadajte asterisks (*). Potom sa na vás zobrazí výber doménovej značky, kde chcete poddoména pridať.

Korené adresné slovo (document root) pre vybranú doménu bude automaticky zistené. Kliknite na tlačidlo _Create_ alebo _Save_, aby ste prispôsobil svoju wildcard poddoménu. Vstup by mal vyzerať ako „*.[mydomain.com](http://mydomain.com)“.

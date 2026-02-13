---
title: Hoe WordPress Multisite installeren
sidebar_position: 2
_i18n_hash: ce5929a52ea69f8a4b769f6eab46445c
---
# Hoe installeer ik WordPress Multisite?

WordPress Multisite stelt je in staat om een netwerk van sites op één installatie te hebben. Dit is een ingebouwde functie, maar het is standaard niet actief.

Aangezien Ultimate Multisite een netwerk‑alleen plugin is, leer je in deze tutorial hoe je WordPress Multisite installeert en configureert. Deze tekst is gebaseerd op [How to Install and Setup WordPress Multisite Network](https://www.wpbeginner.com/wp-tutorials/how-to-install-and-setup-wordpress-multisite-network/), van WPBeginner.

**Dingen om op te letten voordat je je multisite netwerk aanmaakt:**

* Gebruik goede WordPress hosting! Websites op een netwerk delen dezelfde serverresources.
* Als je slechts een paar sites hebt met weinig verkeer, werkt shared hosting waarschijnlijk voor jou.
* De meeste **Managed WordPress hosting providers** bieden Multisite out-of-the-box (ze installeren WordPress met Multisite al geactiveerd en geconfigureerd voor jou). Dit geldt voor WP Engine, Closte, Cloudways, enz. Als je niet zeker weet of dit het geval is bij je hostprovider, neem dan contact op met hun support voordat je verdergaat met deze tutorial.
* Het is ook goed om vertrouwd te zijn met het installeren van WordPress en het bewerken van bestanden via FTP.

_**BELANGRIJK**_ **:** Als je een multisite netwerk op een bestaande WordPress website opzet, vergeet dan niet om:

* Maak een volledige back‑up van je WordPress site
* Deactiveer alle plugins op je site door naar je plugins pagina te gaan, _Deactivate_ te selecteren in bulk acties en vervolgens op _Apply_ te klikken

<!-- Screenshot unavailable: WordPress plugins page showing bulk deactivate action -->

Om Multisite in te schakelen, maak je eerst verbinding met je site via een FTP‑client of cPanel bestandsbeheerder, en open je het wp-config.php bestand voor bewerking.

Voordat de _*That’s all, stop editing! Happy blogging.*_ regel staat, voeg de volgende code snippet toe:

```php
define('WP_ALLOW_MULTISITE', true);
```

Sla het bestand op en upload het wp-config.php bestand terug naar de server.

Met de multisite functie ingeschakeld op je site, is het nu tijd om je netwerk in te richten.

Ga naar **Tools » Network Setup**

<!-- Screenshot unavailable: WordPress Tools menu showing Network Setup option -->

Nu moet je WordPress vertellen welke domeinstructuur je zult gebruiken voor sites in je netwerk: subdomeinen of subdirectories.

Als je kiest voor subdomeinen, moet je je DNS‑instellingen voor domein mapping aanpassen en zorgen dat je _**wildcard subdomains**_ instelt voor je multisite netwerk.

Ga terug naar Network Setup, geef een titel voor je netwerk en zorg dat het e-mailadres in Network admin email correct is. Klik op _Install_ om door te gaan.

<!-- Screenshot unavailable: WordPress Network Setup page with network title and admin email fields -->

Voeg deze code, geleverd door WordPress, toe aan je _**wp-config.php**_ :

```php
define('MULTISITE', true);
define('SUBDOMAIN_INSTALL', true);
define('DOMAIN_CURRENT_SITE', 'multisite.local');
define('PATH_CURRENT_SITE', '/');
define('SITE_ID_CURRENT_SITE', 1);
define('BLOG_ID_CURRENT_SITE', 1);
```

En deze code, ook geleverd door WordPress, toe aan je _**.htaccess**_ bestand:

```apache
RewriteEngine On
RewriteBase /
RewriteRule ^index.php$ - [L]

# add a trailing slash to /wp-admin
RewriteRule ^wp-admin$ wp-admin/ [R=301,L]

RewriteCond %{REQUEST_FILENAME} -f [OR]
RewriteCond %{REQUEST_FILENAME} -d
RewriteRule ^ - [L]
RewriteRule ^(wp-(content|admin|includes)._) $1 [L]
RewriteRule ^(._.php)$ $1 [L]
RewriteRule . index.php [L]
```

Gebruik een FTP‑client of een bestandsbeheerder (als je iets als cPanel gebruikt, bijvoorbeeld) om de code in deze twee bestanden te kopiëren en plakken.

Ten slotte log je opnieuw in op je WordPress site om toegang te krijgen tot je multisite netwerk.

**Het is belangrijk om te testen en te zorgen dat je een subsite kunt aanmaken op je WordPress Multisite installatie voordat je Ultimate Multisite installeert.**

Om een subsite aan te maken:

1. Open het wp-admin van je website
2. Navigeer naar My Sites > Sites (/wp-admin/network/sites.php)
3. Klik op Add New bovenaan
4. Vul alle velden in:

   * Site Address — Gebruik nooit “www”
   * Subdomain: [siteaddress.yourdomain.com](http://siteaddress.yourdomain.com)
   * Subdirectory: [yourdomain.com/siteaddress](http://yourdomain.com/siteaddress)
   * Site Title — Titel van de site, kan later worden gewijzigd
   * Admin Email — Stel in als de initiële admin gebruiker voor de subsite

![Add new site form in WordPress Multisite](/img/admin/sites-list.png)

Na het invullen van de velden, klik op de knop "Add site". Zodra de nieuwe subsite is aangemaakt, ga je ernaar toe om te controleren of de subsite functioneert.

## Veelvoorkomende problemen:

### 1\. Ik kan nieuwe sites aanmaken maar ze zijn niet toegankelijk.

Als je subdomeinen hebt gekozen, moet je ook wildcard subdomains instellen voor je multisite netwerk.

Ga daarvoor naar het dashboard van het controlepaneel van het hostingaccount van je website (bijv. cPanel/Plesk/Direct Admin, afhankelijk van je hostingprovider).

Zoek een optie voor "Domains" of "Subdomains". In sommige controlepanelen staat het als "Domain administration".

Voer in het subdomeinveld een ster (*) in. Vervolgens moet het je vragen om een domeinnaam te selecteren onder welke het subdomein moet worden toegevoegd.

De document root voor de geselecteerde domeinnaam wordt automatisch gedetecteerd. Klik op de _Create_ of _Save_ knop om je wildcard subdomein toe te voegen. De invoer moet er uitzien als "*.[mydomain.com](http://mydomain.com)"

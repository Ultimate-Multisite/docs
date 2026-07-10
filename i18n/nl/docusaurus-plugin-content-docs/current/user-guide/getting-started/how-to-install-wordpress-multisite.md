---
title: WordPress Multisite installeren
sidebar_position: 2
_i18n_hash: 81ac2c706ca3b3b48bacaf85039d4753
---
# Hoe installeer ik WordPress Multisite? {#how-do-i-install-wordpress-multisite}

WordPress Multisite stelt je in staat om een netwerk van sites op één installatie te hebben. Dit is een ingebouwde functie, maar deze is standaard niet actief.

:::tip
Ultimate Multisite bevat een **[ingebouwde Multisite-installatiewizard](./multisite-setup-wizard)** die dit volledige proces automatiseert. Als je Ultimate Multisite hebt geïnstalleerd, raden we aan de wizard te gebruiken in plaats van de handmatige stappen hieronder te volgen.
:::

Omdat Ultimate Multisite een plugin is die alleen voor netwerken bedoeld is, leer je in deze tutorial hoe je WordPress Multisite handmatig installeert en instelt. Deze tekst is gebaseerd op [Hoe je een WordPress Multisite-netwerk installeert en instelt](https://www.wpbeginner.com/wp-tutorials/how-to-install-and-setup-wordpress-multisite-network/), van WPBeginner.

**Dingen om op te letten voordat je je multisite-netwerk maakt:**

  * Zorg voor goede WordPress-hosting! Websites op een netwerk delen dezelfde serverbronnen.

  * Als je slechts een paar sites met weinig verkeer hebt, zal shared hosting waarschijnlijk voor je werken.

  * De meeste **Managed WordPress-hostingproviders** bieden Multisite standaard aan (ze installeren WordPress met Multisite al geactiveerd en voor je geconfigureerd). Dit geldt voor WP Engine, Closte, Cloudways, enz. Als je niet zeker weet of dit voor jouw hostingprovider geldt, neem dan contact op met hun support voordat je verdergaat met deze tutorial.

  * Het is ook goed om bekend te zijn met het installeren van WordPress en het bewerken van bestanden met FTP .

_**BELANGRIJK**_ **:** Als je een multisite-netwerk instelt op een bestaande WordPress-website, vergeet dan niet om:

  * Een volledige back-up van je WordPress-site te maken

  * Alle plugins op je site te deactiveren door naar je pluginpagina te gaan, _Deactiveren_ te selecteren bij bulkacties en vervolgens op _Toepassen_ te klikken

<!-- Screenshot unavailable: WordPress plugins page showing bulk deactivate action -->

Om Multisite in te schakelen, verbind je eerst met je site via een FTP-client of cPanel-bestandsbeheerder, en open je je wp-config.php-bestand om het te bewerken.

Voeg vóór de regel _*That’s all, stop editing! Happy blogging.*_ het volgende codefragment toe:

define('WP_ALLOW_MULTISITE', true);

Sla je wp-config.php-bestand op en upload het terug naar de server.

Nu de multisite-functie op je site is ingeschakeld, is het tijd om je netwerk in te stellen.

Ga naar **Gereedschap » Netwerkinstallatie**

<!-- Screenshot unavailable: WordPress Tools menu showing Network Setup option -->

Nu moet je WordPress vertellen welk soort domeinstructuur je gaat gebruiken voor sites in je netwerk: subdomeinen of submappen.

Als je subdomeinen kiest, moet je je DNS-instellingen wijzigen voor domeintoewijzing en ervoor zorgen dat je _**wildcard-subdomeinen**_ instelt voor je multisite-netwerk.

Terug bij Netwerkinstallatie geef je een titel op voor je netwerk en zorg je ervoor dat het e-mailadres in de netwerkbeheerder-e-mail correct is. Klik op _Installeren_ om door te gaan.

<!-- Screenshot unavailable: WordPress Network Setup page with network title and admin email fields -->

Voeg deze code, aangeleverd door WordPress, toe aan je _**wp-config.php**_ :

define('MULTISITE', true); define('SUBDOMAIN_INSTALL', true); define('DOMAIN_CURRENT_SITE', 'multisite.local'); define('PATH_CURRENT_SITE', '/'); define('SITE_ID_CURRENT_SITE', 1); define('BLOG_ID_CURRENT_SITE', 1);

En deze code, ook aangeleverd door WordPress, aan je _**.htaccess**_-bestand:

RewriteEngine On RewriteBase / RewriteRule ^index.php$ - [L]

# add a trailing slash to /wp-admin {#add-a-trailing-slash-to-wp-admin}

RewriteRule ^wp-admin$ wp-admin/ [R=301,L]

RewriteCond %{REQUEST_FILENAME} -f [OR] RewriteCond %{REQUEST_FILENAME} -d RewriteRule ^ - [L] RewriteRule ^(wp-(content|admin|includes)._) $1 [L] RewriteRule ^(._.php)$ $1 [L] RewriteRule . index.php [L]

Gebruik een FTP-client of een bestandsbeheerder (als je bijvoorbeeld iets als cPanel gebruikt) om de code in deze twee bestanden te kopiëren en plakken.

Log ten slotte opnieuw in op je WordPress-site om toegang te krijgen tot je multisite-netwerk.

**Het is belangrijk om te testen en ervoor te zorgen dat je een subsite kunt maken op je WordPress Multisite-installatie voordat je Ultimate Multisite installeert.**

Een subsite maken:

  1. Open de wp-admin van je website

  2. Navigeer naar Mijn sites > Sites (/wp-admin/network/sites.php)

  3. Klik bovenaan op Nieuwe toevoegen

  4. Vul alle velden in:

  * Siteadres — Gebruik nooit “www”

  * Subdomein: [siteaddress.yourdomain.com](http://siteaddress.yourdomain.com)

  * Submap: [yourdomain.com/siteaddress](http://yourdomain.com/siteaddress)

  * Sitetitel — Titel van de site, kan later worden gewijzigd

  * Beheerder-e-mail — Stel in als de initiële beheerdergebruiker voor de subsite

![Formulier voor nieuwe site toevoegen in WordPress Multisite](/img/admin/sites-list.png)

Klik na het invullen van de velden op de knop "Site toevoegen". Zodra de nieuwe subsite is aangemaakt, ga je door en open je deze om te controleren of de subsite functioneert.

## Veelvoorkomende problemen: {#common-problems}

### 1\. Ik kan nieuwe sites maken, maar ze zijn niet toegankelijk. {#1-i-can-create-new-sites-but-they-are-not-accessible}

Als je subdomeinen hebt gekozen, moet je ook wildcard-subdomeinen instellen voor je multisite-netwerk.

Om dat te doen, ga je naar het control panel-dashboard van het hostingaccount van je website (bijv. cPanel/Plesk/Direct Admin, afhankelijk van je hostingprovider).

Zoek een optie voor “Domeinen” of “Subdomeinen”. In sommige control panels wordt dit aangeduid als “Domeinbeheer”.

Voer in het subdomeinveld een sterretje (*) in. Daarna zou je gevraagd moeten worden om een domeinnaam te selecteren waaronder je het subdomein wilt toevoegen.

De documentroot voor de geselecteerde domeinnaam wordt automatisch gedetecteerd. Klik op de knop _Aanmaken_ of _Opslaan_ om je wildcard-subdomein toe te voegen. De vermelding zou eruit moeten zien als “*.[mydomain.com](http://mydomain.com)”

---
title: Hur man installerar WordPress Multisite
sidebar_position: 2
_i18n_hash: 81ac2c706ca3b3b48bacaf85039d4753
---
# Hur installerar jag WordPress Multisite?

WordPress Multisite låter dig ha ett nätverk av webbplatser på en enda installation. Det här är en inbyggd funktion, men den är inte aktiverad som standard.

:::tip
Ultimate Multisite har en **[inbyggd installationsguide för Multisite](./multisite-setup-wizard)** som automatiserar hela processen. Om du har Ultimate Multisite installerat rekommenderar vi att du använder guiden istället för att följa de manuella stegen nedan.
:::

Eftersom Ultimate Multisite är ett plugin som endast fungerar på nätverksnivå kommer du i den här guiden att lära dig hur du installerar och konfigurerar WordPress Multisite manuellt. Texten är baserad på [How to Install and Setup WordPress Multisite Network](https://www.wpbeginner.com/wp-tutorials/how-to-install-and-setup-wordpress-multisite-network/) från WPBeginner.

**Saker att tänka på innan du skapar ditt multisite-nätverk:**

  * Skaffa bra WordPress-hosting! Webbplatser i ett nätverk delar på samma serverresurser.

  * Om du bara har ett par webbplatser med låg trafik kommer delad hosting förmodligen att fungera bra för dig.

  * De flesta **Managed WordPress-hostingleverantörer** erbjuder Multisite direkt ur lådan (de installerar WordPress med Multisite redan aktiverat och konfigurerat åt dig). Det gäller till exempel WP Engine, Closte, Cloudways med flera. Om du är osäker på om detta gäller för din hostingleverantör, kontakta deras support innan du fortsätter med den här guiden.

  * Det är också bra att vara bekant med att installera WordPress och redigera filer via FTP.

_**VIKTIGT**_ **:** Om du konfigurerar ett multisite-nätverk på en befintlig WordPress-webbplats, glöm inte att:

  * Skapa en fullständig säkerhetskopia av din WordPress-webbplats

  * Inaktivera alla plugins på din webbplats genom att gå till plugin-sidan och välja _Inaktivera_ från massåtgärder och sedan klicka på _Tillämpa_

<!-- Screenshot unavailable: WordPress plugins page showing bulk deactivate action -->

För att aktivera Multisite, anslut först till din webbplats med en FTP-klient eller cPanels filhanterare och öppna din wp-config.php-fil för redigering.

Före raden _*That's all, stop editing! Happy blogging.*_ lägger du till följande kodrad:

define('WP_ALLOW_MULTISITE', true);

Spara och ladda upp din wp-config.php-fil tillbaka till servern.

Med multisite-funktionen aktiverad på din webbplats är det nu dags att konfigurera ditt nätverk.

Gå till **Verktyg » Nätverksinställningar**

<!-- Screenshot unavailable: WordPress Tools menu showing Network Setup option -->

Nu behöver du tala om för WordPress vilken domänstruktur du vill använda för webbplatserna i ditt nätverk: subdomäner eller underkataloger.

Om du väljer subdomäner måste du ändra dina DNS-inställningar för domänmappning och se till att konfigurera _**wildcard-subdomäner**_ för ditt multisite-nätverk.

Tillbaka på sidan Nätverksinställningar, ge ditt nätverk en titel och kontrollera att e-postadressen under Nätverksadministratörens e-post är korrekt. Klicka på _Installera_ för att fortsätta.

<!-- Screenshot unavailable: WordPress Network Setup page with network title and admin email fields -->

Lägg till den här koden, som tillhandahålls av WordPress, i din _**wp-config.php**_:

define('MULTISITE', true); define('SUBDOMAIN_INSTALL', true); define('DOMAIN_CURRENT_SITE', 'multisite.local'); define('PATH_CURRENT_SITE', '/'); define('SITE_ID_CURRENT_SITE', 1); define('BLOG_ID_CURRENT_SITE', 1);

Och den här koden, som också tillhandahålls av WordPress, i din _**.htaccess**_-fil:

RewriteEngine On RewriteBase / RewriteRule ^index.php$ - [L]

# add a trailing slash to /wp-admin

RewriteRule ^wp-admin$ wp-admin/ [R=301,L]

RewriteCond %{REQUEST_FILENAME} -f [OR] RewriteCond %{REQUEST_FILENAME} -d RewriteRule ^ - [L] RewriteRule ^(wp-(content|admin|includes)._) $1 [L] RewriteRule ^(._.php)$ $1 [L] RewriteRule . index.php [L]

Använd en FTP-klient eller en filhanterare (om du använder något som cPanel, till exempel) för att kopiera och klistra in koden i dessa två filer.

Slutligen, logga in igen på din WordPress-webbplats för att komma åt ditt multisite-nätverk.

**Det är viktigt att testa och säkerställa att du kan skapa en underwebbplats på din WordPress Multisite-installation innan du installerar Ultimate Multisite.**

För att skapa en underwebbplats:

  1. Öppna din webbplats wp-admin

  2. Navigera till Mina webbplatser > Webbplatser (/wp-admin/network/sites.php)

  3. Klicka på Lägg till ny högst upp

  4. Fyll i alla fält:

  * Webbplatsadress — Använd aldrig "www"

  * Subdomän: [webbplatsadress.dindomän.se](http://webbplatsadress.dindomän.se)

  * Underkatalog: [dindomän.se/webbplatsadress](http://dindomän.se/webbplatsadress)

  * Webbplatsens titel — Titel på webbplatsen, kan ändras senare

  * Administratörs-e-post — Ställs in som den initiala administratörsanvändaren för underwebbplatsen

![Formulär för att lägga till ny webbplats i WordPress Multisite](/img/admin/sites-list.png)

När du har fyllt i fälten klickar du på knappen "Lägg till webbplats". När den nya underwebbplatsen har skapats, gå vidare och öppna den för att kontrollera att underwebbplatsen fungerar.

## Vanliga problem:

### 1\. Jag kan skapa nya webbplatser men de går inte att nå.

Om du valde subdomäner måste du också konfigurera wildcard-subdomäner för ditt multisite-nätverk.

För att göra det, gå till kontrollpanelen för din webbplats hostingkonto (t.ex. cPanel/Plesk/Direct Admin beroende på din hostingleverantör).

Hitta ett alternativ för "Domäner" eller "Subdomäner". I vissa kontrollpaneler kallas det "Domänadministration".

I fältet för subdomän anger du en asterisk (*). Sedan ska du bli ombedd att välja ett domännamn som du vill lägga till subdomänen under.

Dokumentroten för det valda domännamnet kommer att identifieras automatiskt. Klicka på knappen _Skapa_ eller _Spara_ för att lägga till din wildcard-subdomän. Posten bör se ut som "*.[mindomän.se](http://mindomän.se)"

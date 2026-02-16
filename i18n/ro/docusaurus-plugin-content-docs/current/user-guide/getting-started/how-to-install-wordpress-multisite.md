---
title: Cum să instalezi WordPress Multisite
sidebar_position: 2
_i18n_hash: 81ac2c706ca3b3b48bacaf85039d4753
---
# Cum instalez WordPress Multisite?

WordPress Multisite îți permite să ai o rețea de site-uri într-o singură instalare. Aceasta este o funcție integrată, dar nu este activă în mod implicit.

:::tip
Ultimate Multisite include un **[Asistent de Configurare Multisite integrat](./multisite-setup-wizard)** care automatizează întregul proces. Dacă ai Ultimate Multisite instalat, îți recomandăm să folosești asistentul în loc să urmezi pașii manuali de mai jos.
:::

Deoarece Ultimate Multisite este un plugin exclusiv pentru rețele, în acest tutorial vei învăța cum să instalezi și să configurezi WordPress Multisite manual. Acest text se bazează pe [How to Install and Setup WordPress Multisite Network](https://www.wpbeginner.com/wp-tutorials/how-to-install-and-setup-wordpress-multisite-network/), de la WPBeginner.

**Lucruri de care să ții cont înainte de a-ți crea rețeaua multisite:**

  * Alege un hosting WordPress de calitate! Site-urile dintr-o rețea folosesc aceleași resurse ale serverului.

  * Dacă ai doar câteva site-uri cu trafic redus, un hosting partajat probabil va fi suficient.

  * Majoritatea **furnizorilor de Managed WordPress hosting** oferă Multisite direct din cutie (instalează WordPress cu Multisite deja activat și configurat pentru tine). Acesta este cazul pentru WP Engine, Closte, Cloudways etc. Dacă nu ești sigur că acest lucru este valabil și pentru furnizorul tău de hosting, contactează echipa lor de suport înainte de a continua cu acest tutorial.

  * De asemenea, este bine să fii familiarizat cu instalarea WordPress și editarea fișierelor folosind FTP.

_**IMPORTANT**_ **:** Dacă configurezi o rețea multisite pe un site WordPress existent, nu uita să:

  * Creezi o copie de rezervă completă a site-ului tău WordPress

  * Dezactivezi toate plugin-urile de pe site mergând la pagina de plugin-uri și selectând _Dezactivează_ din acțiunile în masă, apoi apăsând _Aplică_

<!-- Screenshot unavailable: WordPress plugins page showing bulk deactivate action -->

Pentru a activa Multisite, mai întâi conectează-te la site-ul tău folosind un client FTP sau managerul de fișiere cPanel și deschide fișierul wp-config.php pentru editare.

Înainte de linia _*That's all, stop editing! Happy blogging.*_, adaugă următorul fragment de cod:

define('WP_ALLOW_MULTISITE', true);

Salvează și încarcă fișierul wp-config.php înapoi pe server.

Cu funcția multisite activată pe site-ul tău, acum este momentul să îți configurezi rețeaua.

Mergi la **Unelte » Configurare Rețea**

<!-- Screenshot unavailable: WordPress Tools menu showing Network Setup option -->

Acum trebuie să îi spui WordPress-ului ce tip de structură de domeniu vei folosi pentru site-urile din rețeaua ta: subdomenii sau subdirectoare.

Dacă alegi subdomenii, trebuie să îți modifici setările DNS pentru maparea domeniului și să te asiguri că configurezi _**subdomenii wildcard**_ pentru rețeaua ta multisite.

Înapoi la Configurare Rețea, dă un titlu rețelei tale și asigură-te că adresa de email din câmpul Email administrator rețea este corectă. Apasă _Instalează_ pentru a continua.

<!-- Screenshot unavailable: WordPress Network Setup page with network title and admin email fields -->

Adaugă acest cod, furnizat de WordPress, în fișierul tău _**wp-config.php**_ :

define('MULTISITE', true); define('SUBDOMAIN_INSTALL', true); define('DOMAIN_CURRENT_SITE', 'multisite.local'); define('PATH_CURRENT_SITE', '/'); define('SITE_ID_CURRENT_SITE', 1); define('BLOG_ID_CURRENT_SITE', 1);

Și acest cod, de asemenea furnizat de WordPress, în fișierul tău _**.htaccess**_ :

RewriteEngine On RewriteBase / RewriteRule ^index.php$ - [L]

# adaugă un slash la sfârșitul /wp-admin

RewriteRule ^wp-admin$ wp-admin/ [R=301,L]

RewriteCond %{REQUEST_FILENAME} -f [OR] RewriteCond %{REQUEST_FILENAME} -d RewriteRule ^ - [L] RewriteRule ^(wp-(content|admin|includes)._) $1 [L] RewriteRule ^(._.php)$ $1 [L] RewriteRule . index.php [L]

Folosește un client FTP sau un manager de fișiere (dacă utilizezi ceva precum cPanel, de exemplu) pentru a copia și lipi codul în aceste două fișiere.

În final, autentifică-te din nou în site-ul tău WordPress pentru a accesa rețeaua ta multisite.

**Este important să testezi și să te asiguri că poți crea un subsite pe instalarea ta WordPress Multisite înainte de a instala Ultimate Multisite.**

Pentru a crea un subsite:

  1. Deschide wp-admin-ul site-ului tău

  2. Navighează la Site-urile mele > Site-uri (/wp-admin/network/sites.php)

  3. Apasă Adaugă nou în partea de sus

  4. Completează toate câmpurile:

  * Adresa site-ului — Nu folosi niciodată „www"

  * Subdomeniu: [adresasite.domeniultau.com](http://adresasite.domeniultau.com)

  * Subdirector: [domeniultau.com/adresasite](http://domeniultau.com/adresasite)

  * Titlul site-ului — Titlul site-ului, poate fi schimbat ulterior

  * Email administrator — Setat ca utilizator admin inițial pentru subsite

![Formular de adăugare site nou în WordPress Multisite](/img/admin/sites-list.png)

După completarea câmpurilor, apasă butonul „Adaugă site". Odată ce noul subsite este creat, accesează-l pentru a te asigura că subsite-ul funcționează corect.

## Probleme frecvente:

### 1\. Pot crea site-uri noi, dar nu sunt accesibile.

Dacă ai ales subdomenii, trebuie să configurezi și subdomenii wildcard pentru rețeaua ta multisite.

Pentru a face asta, mergi la panoul de control al contului tău de hosting (de ex. cPanel/Plesk/Direct Admin, în funcție de furnizorul tău de hosting).

Caută o opțiune pentru „Domenii" sau „Subdomenii". În unele panouri de control aceasta este etichetată ca „Administrare domenii".

În câmpul pentru subdomeniu, introdu un asterisc (*). Apoi, ar trebui să îți ceară să selectezi un nume de domeniu sub care vrei să fie adăugat subdomeniul.

Directorul rădăcină pentru numele de domeniu selectat va fi detectat automat. Apasă pe butonul _Creează_ sau _Salvează_ pentru a adăuga subdomeniul tău wildcard. Intrarea ar trebui să arate „*.[domeniulmeu.com](http://domeniulmeu.com)"

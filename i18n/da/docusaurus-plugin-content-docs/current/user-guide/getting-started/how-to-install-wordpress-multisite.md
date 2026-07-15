---
title: Hvordan installerer man WordPress Multisite
sidebar_position: 2
_i18n_hash: 81ac2c706ca3b3b48bacaf85039d4753
---
# Hvordan installerer jeg WordPress Multisite?

WordPress Multisite giver dig mulighed for at have et netværk af sider på én enkelt installation. Dette er en indbygget funktion, men den er ikke aktiv som standard.

:::tip
Ultimate Multisite inkluderer en **[built-in Multisite Setup Wizard](./multisite-setup-wizard)**, der automatiserer hele denne proces. Hvis du har Ultimate Multisite installeret, anbefaler vi at bruge wizardet i stedet for at følge de manuelle trin nedenfor.
:::

Da Ultimate Multisite er et netværksbaseret plugin, vil du i denne tutorial lære at installere og opsætte WordPress Multisite manuelt. Denne tekst er baseret på [Hvordan man installerer og opsætter et WordPress Multisite Netværk](https://www.wpbeginner.com/wp-tutorials/how-to-install-and-setup-wordpress-multisite-network/), fra WPBeginner.

**Fremhæv disse ting, før du opretter dit multisite netværk:**

  * Få god WordPress hosting! Sider på et netværk deler de samme serverressourcer.

  * Hvis du kun har et par sider med lav trafik, vil delt hosting sandsynligvis passe for dig.

  * De fleste **Managed WordPress hostingudbydere** tilbyder Multisite som standard (de installerer WordPress med Multisite allerede aktiveret og konfigureret for dig). Dette gælder for WP Engine, Closte, Cloudways osv. Hvis du er i tvivl om, hvorvidt det er tilfældet for din hostudbyder, så kontakt deres support, før du går videre med denne tutorial.

  * Det er også godt at være bekendt med installation af WordPress og redigering af filer ved hjælp af FTP.

_**VIGTIG**_ **:** Hvis du opsætter et multisite netværk på en eksisterende WordPress-side, så glem ikke at:

  * Opret en komplet backup af din WordPress-side

  * Deaktivere alle plugins på din side ved at gå til din plugins side og vælge _Deaktiver_ fra bulk actions og derefter klikke på _Anvend_.

For at aktivere Multisite skal du først forbinde til din side ved hjælp af en FTP-klient eller filadministrator i cPanel og åbne din `wp-config.php` fil for redigering.

Før linjen _*Det er det hele, stop med at redigere! God blogging.*_, så tilføj følgende kodeudsnit:

```php
define('WP_ALLOW_MULTISITE', true);
```

Gem og upload din `wp-config.php` fil tilbage til serveren.

Nu hvor Multisite-funktionen er aktiveret på din side, er det tid til at opsætte dit netværk.

Gå til **Tools » Network Setup** (Værktøjer » Netværksopsætning)

Nu skal du fortælle WordPress, hvilken slags domænestruktur du vil bruge til siderne i dit netværk: subdomæner eller undermapper.

Hvis du vælger subdomæner, skal du ændre dine DNS-indstillinger for domænemapping og sikre dig, at opsætningen af _**wildcard subdomains**_ er klar for dit Multisite-netværk.

Tilbage til Netværksopsætning, giv et navn til dit netværk og sørg for, at e-mailadressen i Network admin email er korrekt. Klik på _Install_ (Installer) for at fortsætte.

Tilføj denne kode, som WordPress leverer, til din _**wp-config.php**_:

```php
define('MULTISITE', true); define('SUBDOMAIN_INSTALL', true); define('DOMAIN_CURRENT_SITE', 'multisite.local'); define('PATH_CURRENT_SITE', '/'); define('SITE_ID_CURRENT_SITE', 1); define('BLOG_ID_CURRENT_SITE', 1);
```

Og denne kode, også leveret af WordPress, til din _**.htaccess**_ fil:

```apache
RewriteEngine On
RewriteBase /
RewriteRule ^index.php$ - [L]

# Tilføj en slut skråstreg til /wp-admin
RewriteRule ^wp-admin$ wp-admin/ [R=301,L]
```

RewriteCond %{REQUEST_FILENAME} -f [OR] RewriteCond %{REQUEST_FILENAME} -d RewriteRule ^ - [L] RewriteRule ^(wp-(content|admin|includes)._) $1 [L] RewriteRule ^(._.php)$ $1 [L] RewriteRule . index.php [L]

Brug en FTP-klient eller filadministrator (hvis du bruger noget som cPanel osv.) til at kopiere og indsætte koden i disse to filer.

Log derefter ind igen på din WordPress-side for at få adgang til dit multisite-netværk.

**Det er vigtigt at teste og sikre dig, at du kan oprette en undersite på din WordPress Multisite-installation, før du installerer Ultimate Multisite.**

For at oprette en undersite:

  1. Åbn dine websites wp-admin

  2. Gå til My Sites > Sites (/wp-admin/network/sites.php)

  3. Klik på Tilføj nyt øverst

  4. Udfyld alle felter:

* Site Address — Brug aldrig "www"

* Subdomain: [siteaddress.yourdomain.com](http://siteaddress.yourdomain.com)

* Subdirectory: [yourdomain.com/siteaddress](http://yourdomain.com/siteaddress)

* Site Title — Titlen på sitet, kan ændres senere

* Admin Email — Indstil som den indledende administrator bruger for undersiten

![Add new site form in WordPress Multisite](/img/admin/sites-list.png)

Når du har udfyldt felterne, klik på knappen "Tilføj site". Når den nye undersite er oprettet, gå derefter til at få adgang til den for at sikre dig, at undersiten fungerer som forventet.

## Almindelige problemer: {#add-a-trailing-slash-to-wp-admin}

### 1. Jeg kan oprette nye sider, men de er ikke tilgængelige. {#common-problems}

Hvis du har valgt subdomæner, skal du også opsætte wildcard subdomæner for dit multisite-netværk.

For at gøre det skal du gå til kontrolpanelet på din webhostingkonto (f.eks. cPanel/Plesk/Direct Admin afhængigt af din hostingudbyder).

Find en mulighed for "Domains" eller "Subdomains". I nogle kontrolpaneler er den mærket som "Domain administration".

I felt i felt an asterisk (*) in the subdomain-feltet. Derefter vil det bede dig vælge et domænenavn, hvor du ønsker at tilføje underdomænet.

Dokumentroden for det valgte domænenavn vil blive automatisk opdaget. Klik på knappen _Create_ eller _Save_ for at tilføje dit jokerte underdomæne. Indførelsen skal se ud som “*.[mydomain.com](http://mydomain.com)”.

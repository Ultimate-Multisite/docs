---
title: Hvordan installere WordPress Multisite
sidebar_position: 2
_i18n_hash: 81ac2c706ca3b3b48bacaf85039d4753
---
# Hvordan installerer jeg WordPress Multisite?

WordPress Multisite lar deg ha et nettverk av nettsider på én enkelt installasjon. Dette er en innebygd funksjon, men den er ikke aktiv som standard.

:::tip
Ultimate Multisite inkluderer en **[innebygd veiviser for Multisite-oppsett](./multisite-setup-wizard)** som automatiserer hele denne prosessen. Hvis du har Ultimate Multisite installert, anbefaler vi å bruke veiviseren i stedet for å følge de manuelle trinnene nedenfor.
:::

Siden Ultimate Multisite er en plugin som kun fungerer på nettverksnivå, vil du i denne veiledningen lære hvordan du installerer og setter opp WordPress Multisite manuelt. Denne teksten er basert på [How to Install and Setup WordPress Multisite Network](https://www.wpbeginner.com/wp-tutorials/how-to-install-and-setup-wordpress-multisite-network/) fra WPBeginner.

**Ting du bør tenke på før du oppretter multisite-nettverket ditt:**

  * Skaff deg god WordPress-hosting! Nettsider i et nettverk deler de samme serverressursene.

  * Hvis du bare har noen få nettsider med lav trafikk, vil delt hosting sannsynligvis fungere for deg.

  * De fleste **leverandører av administrert WordPress-hosting** tilbyr Multisite ut av boksen (de installerer WordPress med Multisite allerede aktivert og konfigurert for deg). Dette gjelder for WP Engine, Closte, Cloudways osv. Hvis du er usikker på om dette gjelder for din hostingleverandør, ta kontakt med deres support før du fortsetter med denne veiledningen.

  * Det er også lurt å være kjent med å installere WordPress og redigere filer via FTP.

_**VIKTIG**_ **:** Hvis du setter opp et multisite-nettverk på en eksisterende WordPress-nettside, ikke glem å:

  * Lage en fullstendig sikkerhetskopi av WordPress-nettstedet ditt

  * Deaktivere alle plugins på nettstedet ditt ved å gå til plugin-siden og velge _Deaktiver_ fra massehandlinger, og deretter klikke _Bruk_

<!-- Screenshot unavailable: WordPress plugins page showing bulk deactivate action -->

For å aktivere Multisite, koble først til nettstedet ditt med en FTP-klient eller cPanels filbehandler, og åpne wp-config.php-filen for redigering.

Før linjen _*That's all, stop editing! Happy blogging.*_ legger du til følgende kodesnutt:

define('WP_ALLOW_MULTISITE', true);

Lagre og last opp wp-config.php-filen tilbake til serveren.

Med multisite-funksjonen aktivert på nettstedet ditt, er det nå på tide å sette opp nettverket.

Gå til **Verktøy » Nettverksoppsett**

<!-- Screenshot unavailable: WordPress Tools menu showing Network Setup option -->

Nå må du fortelle WordPress hvilken domenestruktur du vil bruke for nettsidene i nettverket ditt: underdomener eller undermapper.

Hvis du velger underdomener, må du endre DNS-innstillingene for domenemapping og sørge for at du setter opp _**jokertegn-underdomener**_ for multisite-nettverket ditt.

Tilbake i Nettverksoppsett, gi nettverket ditt en tittel og sørg for at e-postadressen i feltet for nettverksadministrator-e-post er riktig. Klikk _Installer_ for å fortsette.

<!-- Screenshot unavailable: WordPress Network Setup page with network title and admin email fields -->

Legg til denne koden, som er generert av WordPress, i _**wp-config.php**_:

define('MULTISITE', true); define('SUBDOMAIN_INSTALL', true); define('DOMAIN_CURRENT_SITE', 'multisite.local'); define('PATH_CURRENT_SITE', '/'); define('SITE_ID_CURRENT_SITE', 1); define('BLOG_ID_CURRENT_SITE', 1);

Og denne koden, også generert av WordPress, i _**.htaccess**_-filen din:

RewriteEngine On RewriteBase / RewriteRule ^index.php$ - [L]

# legg til en avsluttende skråstrek til /wp-admin

RewriteRule ^wp-admin$ wp-admin/ [R=301,L]

RewriteCond %{REQUEST_FILENAME} -f [OR] RewriteCond %{REQUEST_FILENAME} -d RewriteRule ^ - [L] RewriteRule ^(wp-(content|admin|includes)._) $1 [L] RewriteRule ^(._.php)$ $1 [L] RewriteRule . index.php [L]

Bruk en FTP-klient eller en filbehandler (hvis du bruker noe som cPanel, for eksempel) for å kopiere og lime inn koden i disse to filene.

Til slutt logger du inn på nytt på WordPress-nettstedet ditt for å få tilgang til multisite-nettverket.

**Det er viktig å teste og forsikre deg om at du kan opprette en underside på WordPress Multisite-installasjonen din før du installerer Ultimate Multisite.**

For å opprette en underside:

  1. Åpne wp-admin på nettstedet ditt

  2. Naviger til Mine nettsteder > Nettsteder (/wp-admin/network/sites.php)

  3. Klikk på Legg til ny øverst

  4. Fyll ut alle feltene:

  * Nettstedsadresse — Bruk aldri «www»

  * Underdomene: [nettstedsadresse.dittdomene.com](http://siteaddress.yourdomain.com)

  * Undermappe: [dittdomene.com/nettstedsadresse](http://yourdomain.com/siteaddress)

  * Nettstedstittel — Tittelen på nettstedet, kan endres senere

  * Admin-e-post — Angis som den første administratorbrukeren for undersiden

![Skjema for å legge til nytt nettsted i WordPress Multisite](/img/admin/sites-list.png)

Etter at du har fylt ut feltene, klikker du på «Legg til nettsted»-knappen. Når den nye undersiden er opprettet, gå videre og åpne den for å forsikre deg om at undersiden fungerer.

## Vanlige problemer:

### 1\. Jeg kan opprette nye nettsteder, men de er ikke tilgjengelige.

Hvis du valgte underdomener, må du også sette opp jokertegn-underdomener for multisite-nettverket ditt.

For å gjøre dette, gå til kontrollpanelet for hostingkontoen til nettstedet ditt (f.eks. cPanel/Plesk/Direct Admin, avhengig av hostingleverandøren din).

Finn et alternativ for «Domener» eller «Underdomener». I noen kontrollpaneler er det merket som «Domeneadministrasjon».

I underdomenefeltet skriver du inn en stjerne (*). Deretter vil du bli bedt om å velge et domenenavn som underdomenet skal legges til under.

Dokumentroten for det valgte domenenavnet vil automatisk bli oppdaget. Klikk på _Opprett_- eller _Lagre_-knappen for å legge til jokertegn-underdomenet ditt. Oppføringen skal se slik ut: «*.[mittdomene.com](http://mydomain.com)»

---
title: CyberPanel integration
sidebar_position: 21
_i18n_hash: d0607874b556c583dac2aaa33ba1dc1d
---
# CyberPanel Integration {#cyberpanel-integration}

Denne guide forklarer, hvordan du opsætter Ultimate Multisite CyberPanel integrationen, så de kortede domæner i dit netværk automatisk tilføjes (og fjernes) som virtuelle hostingsservere i CyberPanel, med valgfri automatisk SSL-provisionering via Let's Encrypt.

## Hvad det gør {#what-it-does}

- Når et domæne kortes i Ultimate Multisite, kalder integrationen CyberPanel API'en for at oprette en virtuel host for det pågældende domæne.
- Når en domænebinding fjernes, kalder integrationen API'en for at slette den tilsvarende virtuelle host.
- Når automatisk SSL er aktiveret, udløser integrationen øjeblikkeligt udstedelsen af Let's Encrypt certifikatet efter, at den virtuelle host er oprettet.
- Valgfrit tilføjer/fjerner `www.` alias i forhold til dine indstillinger for "Auto-create www subdomain" i Domain Mapping settings.

## Forudsætninger {#prerequisites}

- En kørende CyberPanel-instans (v2.3 eller nyere anbefales), der er tilgængelig fra din WordPress-server.
- En eksisterende hjemmeside i CyberPanel, der allerede fungerer som rod for dit WordPress netværk. Integrationen tilføjer nye virtuelle hostingsservere til denne server.
- CyberPanel API adgang skal være aktiveret. Autentifikation bruger dit CyberPanel administratorbrugernavn og adgangskode.
- Dine DNS-opslag for de kortede domæner skal allerede pege på din servers IP-adresse, før automatisk SSL kan udstede et gyldigt certifikat.

## Krav {#requirements}

Følgende konstanter skal defineres i din `wp-config.php` fil:

```php
define('WU_CYBERPANEL_HOST', 'https://din-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'dit_admin_brugernavn');
define('WU_CYBERPANEL_PASSWORD', 'dit_admin_adgangskode');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

Valgfrit kan du også definere:

```php
define('WU_CYBERPANEL_AUTO_SSL', true);          // Standardind: true — udsted Let's Encrypt SSL efter domæneoprettelse
define('WU_CYBERPANEL_PHP_VERSION', 'PHP 8.2');  // Standardind: PHP 8.2
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com'); // Bruges til kontakt vedrørende SSL-certifikat

## Opsætning

### 1. Aktiver CyberPanel API'en

1. Log ind på dit CyberPanel dashboard som administrator.
2. Gå til **Security** > **SSL** og bekræft, at SSL er aktiv i selve CyberPanel-grænsefladen (nødvendigt for sikre API-kald).
3. CyberPanel API'en er tilgængelig på `https://din-server-ip:8090/api/` som standard. Der er ingen yderligere trin nødvendige for at aktivere den – den er tændt som standard for administratorbrugere.

### 2. Tilføj konstanter til wp-config.php

Tilføj følgende konstanter til din `wp-config.php` fil før linjen `/* That's all, stop editing! */`:

```php
define('WU_CYBERPANEL_HOST', 'https://din-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'admin');
define('WU_CYBERPANEL_PASSWORD', 'dit_sikre_adgangskode');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

For at aktivere auto-SSL (anbefalet):

```php
define('WU_CYBERPANEL_AUTO_SSL', true);
define('WU_CYBERPANEL_EMAIL', 'admin@din-domæne.com');
```

### 3. Aktiver integrationen

1. I din WordPress network admin, gå til **Ultimate Multisite** > **Settings**.
2. Naviger til fanen **Domain Mapping**.
3. Scroll ned til **Host Integrations**.
4. Aktiver integrationen **CyberPanel**.
5. Klik på **Save Changes**.

### 4. Verificer forbindelse

Brug den indbyggede forbindelsestest i opsætningsguiden:

1. Gå til **Ultimate Multisite** > **Indstillinger** > **Domænemapping** > **Host Integrationer** > **CyberPanel**.
2. Klik på **Test forbindelse**.
3. En succesmeddelelse bekræfter, at plugin'et kan nå CyberPanel API'en og autentificere korrekt.

## Sådan virker det

### Domænemapping

Når en domæne mappes i Ultimate Multisite:

1. Integrationen sender en `POST` anmodning til `/api/createWebsite` på din CyberPanel host.
2. CyberPanel opretter en ny virtuel vært for domænet under den konfigurerede pakke.
3. Dokumentroden sættes til at pege på rodmappen for dit WordPress netværk.
4. Når domænemappingen fjernes, kalder integrationen `/api/deleteWebsite` for at rydde den virtuelle vært.

### Auto-SSL

Når `WU_CYBERPANEL_AUTO_SSL` er sat til `true`:

1. Efter at den virtuelle vært er oprettet, kalder integrationen `/api/issueSSL` for domænet.
2. CyberPanel anmoder om et Let's Encrypt-certifikat ved hjælp af ACME HTTP-01 udfordringen.
3. Certifikatet fornyes automatisk af CyberPanel før udløb.

> **Vigtigt:** DNS skal være fuldt udbredt til din servers IP-adresse, før Let's Encrypt kan validere domænet. Hvis SSL-udstedelsen fejler med det samme efter mappning, skal du vente på DNS-udbredelsen og genaktivere SSL fra CyberPanel-dashboardet under **SSL** > **Manage SSL**.

### www Underdomæne

Hvis **Auto-create www subdomain** er aktiveret i dine Domænemappningsindstillinger, opretter integrationen også en virtuel vært alias for `www.<domain>` og udsteder, når Auto-SSL er tændt, et certifikat, der dækker både apex- og www-varianterne.

### E-mail Forwardere

Når [Ultimate Multisite: Emails](../../addons/ultimate-multisite-emails/) add-on er aktiv, kan CyberPanel også tilbyde e-mail forwarding til kunder. Forwardere sender beskeder fra en domæneadresse videre til en anden indbakke uden at oprette en fuld postkasse, hvilket er nyttigt for alias som `info@customer-domain.test` eller `support@customer-domain.test`.

Før du aktiverer forwardere for kunder:

1. Bekræft, at de ovenstående CyberPanel konstanter er konfigureret og at forbindelsestesten lykkes.
2. Aktiver e-mailudbyderen i Emails add-on indstillingerne i CyberPanel.
3. Bekræft, at kundedomen allerede eksisterer i CyberPanel, før du opretter forwarderen.
4. Opret en testforwarder og send en besked gennem den, før du tilbyder funktionen på produktionsplaner.

Hvis oprettelsen af forwarderen fejler, tjek først Ultimate Multisite aktivitetsovervågningslogs, og bekræft derefter i CyberPanel, at kildedomen eksisterer og at API-brugeren har de nødvendige rettigheder til e-mailhåndtering.

## Konfigurationsreference

| Konstant | Krævet | Standardværdi | Beskrivelse |
|---|---|---|---|
| `WU_CYBERPANEL_HOST` | Ja | — | Fulde URL til din CyberPanel-instans inklusive port, f.eks. `https://cp.example.com:8090` |
| `WU_CYBERPANEL_USERNAME` | Ja | — | Admin-brugernavn for CyberPanel |
| `WU_CYBERPANEL_PASSWORD` | Ja | — | Admin-adgangskode til CyberPanel |
| `WU_CYBERPANEL_PACKAGE` | Ja | `Default` | CyberPanel hostingpakken, der skal tildeles nye virtuelle hoster |
| `WU_CYBERPANEL_AUTO_SSL` | Nej | `true` | Udsteder et Let's Encrypt SSL-certifikat efter domæneoprettelse |
| `WU_CYBERPANEL_PHP_VERSION` | Nej | `PHP 8.2` | PHP-version for nye virtuelle hoster (skal matche en version installeret i CyberPanel) |
| `WU_CYBERPANEL_EMAIL` | Nej | — | Kontakt-e-mail til registrering af SSL-certifikater |

## Vigtige bemærkninger

CyberPanels API bruger session-baseret token-autentifikation. Integrationen håndterer automatisk token-anskaffelsen ved hver API-opkald.
Din CyberPanel administrator-konto skal have tilladelse til at oprette og slette websites.
CyberPanel kører som standard på port `8090`. Hvis din server bruger en firewall, skal du sikre dig, at denne port er tilgængelig fra WordPress applikationsserveren.
Integrationen administrerer ikke DNS-oplysninger. Du skal pege domænets DNS mod din servers IP-adresse, før du mapper domænet i Ultimate Multisite.
Hvis du bruger OpenLiteSpeed (OLS), udløses en elegant genstart automatisk efter ændringer af virtuelle hoster. Ingen manuel indgriben er nødvendig.

## Fejlfinding

### API Forbindelse Afvist

- Tjek, at port `8090` er åben i din servers firewall.
- Bekræft, at værdien for `WU_CYBERPANEL_HOST` inkluderer den korrekte protokol (`https://`) og port.
- Kontroller, om dit CyberPanel SSL-certifikat er gyldigt; selvsignerede certifikater kan forårsage TLS verifikationsfejl. Sæt kun `WU_CYBERPANEL_VERIFY_SSL` til `false` i betroede private netværksmiljøer.

### Autentifikationsfejl

- Bekræft, at dine `WU_CYBERPANEL_USERNAME` og `WU_CYBERPANEL_PASSWORD` er korrekte ved direkte at logge ind på CyberPanel.
- CyberPanel låser konti efter gentagne mislykkede login-forsøg. Tjek **Security** > **Brute Force Monitor** i CyberPanel, hvis der sker låsninger.

### Domæne Ikke Oprettet

- Tjek Ultimate Multisites aktivitetsloggen (**Ultimate Multisite** > **Activity Logs**) for API fejlmeddelelser.
- Bekræft, at pakken defineret i `WU_CYBERPANEL_PACKAGE` findes i CyberPanel (**Packages** > **List Packages**).
- Sørg for, at domænet ikke allerede er registreret som et website i CyberPanel – du vil få en fejl ved forsøg på at oprette et duplikat website.

### SSL Certifikat Ikke Udstedt

- Bekræft, at DNS er fuldt udbredt: `dig +short din-domæne.com` skal returnere din servers IP-adresse.
- Let's Encrypt håndhæver hastighedsbegrænsninger (rate limits). Hvis du for nylig har udstedt flere certifikater til samme domæne, så vent før du prøver igen.
- Tjek CyberPanel SSL logs under **Logs** > **Error Logs** for detaljer om fejl ved certifikatudstedelse.
- Som en fallback kan du manuelt udstede SSL fra CyberPanel: **SSL** > **Manage SSL** > vælg domænet > **Issue SSL**.

## Referencer

- CyberPanel API Dokumentation: https://docs.cyberpanel.net/docs/category/api
- CyberPanel SSL Management: https://docs.cyberpanel.net/docs/cyberpanel/SSL/manageSSL
- Let's Encrypt Hastighedsbegrænsninger (Rate Limits): https://letsencrypt.org/docs/rate-limits/

---
title: cPanel-integrasjon
sidebar_position: 5
_i18n_hash: ba79fa3cffb0f29c4eda9bdf59244a2f
---
# cPanel-integrasjon

## Oversikt {#overview}
cPanel er et av de mest populære kontrollpanelene for webhotell, og brukes av mange leverandører av delt og dedikert hosting. Denne integrasjonen gjør det mulig å synkronisere domener automatisk mellom Ultimate Multisite og cPanel, slik at du kan legge til domenealias og underdomener i cPanel-kontoen din automatisk.

## Funksjoner {#features}
- Automatisk oppretting av addon-domener i cPanel
- Automatisk oppretting av underdomener i cPanel (for multisite-installasjoner med underdomener)
- Fjerning av domener når tilknytninger slettes

## Krav {#requirements}
Følgende konstanter må defineres i `wp-config.php`-filen din:

```php
define('WU_CPANEL_USERNAME', 'your_cpanel_username');
define('WU_CPANEL_PASSWORD', 'your_cpanel_password');
define('WU_CPANEL_HOST', 'your_cpanel_host');
```

Du kan også definere disse valgfrie konstantene:

```php
define('WU_CPANEL_PORT', 2083); // Default is 2083
define('WU_CPANEL_ROOT_DIR', '/public_html'); // Default is /public_html
```

## Oppsettsinstruksjoner {#setup-instructions}

### 1. Hent cPanel-påloggingsinformasjonen din {#1-get-your-cpanel-credentials}

1. Få tak i cPanel-brukernavnet og -passordet ditt fra hostingleverandøren
2. Finn cPanel-verten din (vanligvis `cpanel.dittdomene.com` eller `dittdomene.com:2083`)

### 2. Legg til konstanter i wp-config.php {#2-add-constants-to-wp-configphp}

Legg til følgende konstanter i `wp-config.php`-filen din:

```php
define('WU_CPANEL_USERNAME', 'your_cpanel_username');
define('WU_CPANEL_PASSWORD', 'your_cpanel_password');
define('WU_CPANEL_HOST', 'your_cpanel_host');
```

Du kan også tilpasse porten og rotmappen:

```php
define('WU_CPANEL_PORT', 2083); // Change if your cPanel uses a different port
define('WU_CPANEL_ROOT_DIR', '/public_html'); // Change if your document root is different
```

### 3. Aktiver integrasjonen {#3-enable-the-integration}

1. Gå til Ultimate Multisite > Innstillinger i WordPress-administrasjonspanelet
2. Naviger til fanen «Domenetilknytning»
3. Rull ned til «Hostintegrasjoner»
4. Aktiver cPanel-integrasjonen
5. Klikk på «Lagre endringer»

## Hvordan det fungerer {#how-it-works}

### Addon-domener {#addon-domains}

Når et domene tilknyttes i Ultimate Multisite:

1. Integrasjonen sender en forespørsel til cPanels API for å legge til domenet som et addon-domene
2. Domenet konfigureres til å peke mot rotmappen din
3. Når en domenetilknytning fjernes, vil integrasjonen fjerne addon-domenet fra cPanel

### Underdomener {#subdomains}

For multisite-installasjoner med underdomener, når et nytt nettsted opprettes:

1. Integrasjonen henter ut underdomenedelen fra det fullstendige domenet
2. Den sender en forespørsel til cPanels API for å legge til underdomenet
3. Underdomenet konfigureres til å peke mot rotmappen din

## Viktig informasjon {#important-notes}

- Integrasjonen bruker cPanels API2 for å kommunisere med cPanel-kontoen din
- cPanel-kontoen din må ha tillatelser til å legge til addon-domener og underdomener
- Noen hostingleverandører kan begrense antallet addon-domener eller underdomener du kan opprette
- Integrasjonen håndterer ikke DNS-konfigurasjon; du må fortsatt peke domenene dine til serverens IP-adresse

## Feilsøking {#troubleshooting}

### Problemer med API-tilkobling {#api-connection-issues}
- Kontroller at cPanel-brukernavnet og -passordet er korrekt
- Sjekk at cPanel-verten er riktig og tilgjengelig
- Sørg for at cPanel-kontoen din har de nødvendige tillatelsene
- Prøv å bruke den fullstendige URL-en for verten (f.eks. `https://cpanel.dittdomene.com`)

### Domenet blir ikke lagt til {#domain-not-added}
- Sjekk Ultimate Multisite-loggene for eventuelle feilmeldinger
- Kontroller at domenet ikke allerede er lagt til i cPanel
- Sørg for at cPanel-kontoen din ikke har nådd grensen for addon-domener eller underdomener

### Problemer med SSL-sertifikat {#ssl-certificate-issues}
- Integrasjonen håndterer ikke utstedelse av SSL-sertifikater
- Du må bruke cPanels SSL/TLS-verktøy eller AutoSSL-funksjonen for å utstede SSL-sertifikater for domenene dine
- Alternativt kan du bruke en tjeneste som Let's Encrypt med cPanels AutoSSL

---
title: cPanel integration
sidebar_position: 5
_i18n_hash: ba79fa3cffb0f29c4eda9bdf59244a2f
---
# cPanel Integration

## Oversigt
cPanel er et af de mest populære webhosting kontrolpaneler, der bruges af mange delte og dedikerede hostingudbydere. Denne integration muliggør automatisk domænesynkronisering mellem Ultimate Multisite og cPanel, hvilket lader dig automatisk tilføje domænealias og underdomæner til din cPanel-konto.

## Funktioner
- Automatisk oprettelse af addon domæner i cPanel
- Automatisk oprettelse af underdomæner i cPanel (til multisite installationer med underdomæner)
- Fjernelse af domæne, når mappninger slettes

## Krav
Følgende konstanter skal defineres i din `wp-config.php` fil:

```php
define('WU_CPANEL_USERNAME', 'din_cpanel_brugernavn');
define('WU_CPANEL_PASSWORD', 'dit_cpanel_adgangskode');
define('WU_CPANEL_HOST', 'din_cpanel_host');
```

Valgfrit kan du også definere:

```php
define('WU_CPANEL_PORT', 2083); // Standard er 2083
define('WU_CPANEL_ROOT_DIR', '/public_html'); // Standard er /public_html
```

## Opsætning

### 1. Få dine cPanel-oplysninger

1. Indhent dit cPanel-brugernavn og din adgangskode fra din hostingudbyder
2. Bestem din cPanel-host (typisk `cpanel.din-domæne.com` eller `din-domæne.com:2083`)

### 2. Tilføj konstanter til wp-config.php

Tilføj følgende konstanter til din `wp-config.php` fil:

```php
define('WU_CPANEL_USERNAME', 'din_cpanel_brugernavn');
define('WU_CPANEL_PASSWORD', 'dit_cpanel_adgangskode');
define('WU_CPANEL_HOST', 'din_cpanel_host');
```

Valgfrit kan du tilpasse port og rodmappe:

```php
define('WU_CPANEL_PORT', 2083); // Skift hvis din cPanel bruger en anden port
define('WU_CPANEL_ROOT_DIR', '/public_html'); // Skift hvis din dokumentrod er anderledes
```

### 3. Aktiver integrationen

1. I dit i din WordPress admin, gå til Ultimate Multisite > Settings
2. Naviger til fanen "Domain Mapping" (Domænemapping)
3. Scroll ned til "Host Integrations" (Hosterintegrationer)
4. Aktiver cPanel integration'en
5. Klik på "Save Changes" (Gem ændringer)

## Hvordan det virker

### Addon Domains (Tilføjelser)

Når en domæne mappes i Ultimate Multisite:

1. Integrationen sender en anmodning til cPanels API for at tilføje domænet som et addon domain
2. Domænet er konfigureret til at pege på din roottid (root directory)
3. Når en domænemapping fjernes, vil integrationen fjerne addon domainet fra cPanel

### Subdomains (Underdomæner)

For subdomain multisite installationer, når en ny side oprettes:

1. Integrationen udtrækker subdomain-delen fra den fulde domæne
2. Den sender en anmodning til cPanels API for at tilføje underdomænet
3. Underdomænet er konfigureret til at pege på din roottid (root directory)

## Vigtige bemærkninger

- Integrationen bruger cPanels API2 til at kommunikere med din cPanel konto
- Din cPanel konto skal have tilladelse til at tilføje addon domains og underdomæner
- Nogle hostingudbydere kan begrænse antallet af addon domains eller underdomæner, du kan oprette
- Integrationen håndterer ikke DNS-konfiguration; du skal stadig selv pege dine domæner mod din servers IP-adresse

## Fejlfinding

### Problemer med API-forbindelse
- Tjek, at dit cPanel brugernavn og adgangskode er korrekte
- Kontroller, om din cPanel host er korrekt og tilgængelig
- Sør for, at din cPanel konto har de nødvendige rettigheder
- Prøv at bruge den fulde URL til hosten (f.eks. `https://cpanel.yourdomain.com`)

### Domæne ikke tilføjet
- Tjek Ultimate Multisite logs efter eventuelle fejlmeddelelser
- Bekræft, at domænet ikke allerede er tilføjet til cPanel
- Sør for, at din cPanel konto ikke har nået sin grænse for addon domains eller underdomæner

### Problemer med SSL-certifikater
- Integrationen håndterer ikke udstedelse af SSL-certifikater.
- Du skal bruge cPanels SSL/TLS værktøjer eller AutoSSL funktion til at udstede SSL-certifikater til dine domæner.
- Alternativt kan du bruge en service som Let's Encrypt med cPanels AutoSSL.

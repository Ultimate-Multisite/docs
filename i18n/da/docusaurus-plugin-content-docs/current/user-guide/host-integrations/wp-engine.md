---
title: WP Engine integration
sidebar_position: 2
_i18n_hash: ceeee20432439d8afb3002dd0dd1ff12
---
# Integration med WP Engine

## Oversigt
WP Engine er en premium managed WordPress hosting platform, der giver optimeret ydeevne, sikkerhed og skalerbarhed til dine WordPress-sider. Denne integration muliggør automatisk domænesynkronisering mellem Ultimate Multisite og WP Engine.

## Funktioner
- Automatisk domænesynkronisering
- Underdomæne-support til multisite installationer
- Problemfri integration med WP Engines eksisterende systemer

## Krav
Integrationen opdager automatisk, om du hoster på WP Engine, og bruger den indbyggede WP Engine API. Der kræves ingen yderligere konfiguration, hvis WP Engine plugin er aktivt og korrekt konfigureret.

Hvis du derimod skal konfigurere integrationen manuelt, kan du definere en af disse konstanter i din `wp-config.php` fil:

```php
define('WPE_APIKEY', 'din_api_nøgle'); // Foretrukken metode
// ELLER
define('WPE_API', 'din_api_nøgle'); // Alternativ metode
```

## Opsætning

### 1. Verificer WP Engine Plugin

Hvis du hoster på WP Engine, skal WP Engine plugin allerede være installeret og aktiveret. Tjek følgende:

1. WP Engine plugin er aktivt
2. Filen `wp-content/mu-plugins/wpengine-common/class-wpeapi.php` eksisterer

### 2. Aktiver Integrationen

1. I din WordPress admin, gå til Ultimate Multisite > Indstillinger (Settings)
2. Gå til fanen "Domain Mapping"
3. Scroll ned til "Host Integrations"
4. Aktiver WP Engine integrationen
5. Klik på "Save Changes"

## Hvordan det virker

### Domænesynkronisering

Når et domæne er kortlagt i Ultimate Multisite:

1. Integrationen bruger WP Engine API'et til at tilføje domænet til din WP Engine installation
2. WP Engine håndterer domænekonfiguration og udstedelse af SSL-certifikatet
3. Når en domænekortlægning fjernes, vil integrationen fjerne domænet fra WP Engine

### Underdomæne-support

For multisite installationer med subdomain:

1. Integrationen tilføjer hver subdomain til WP Engine, når en ny side oprettes.
2. WP Engine håndterer din subdomainkonfiguration.
3. Når en side slettes, vil integrationen fjerne subdomænen fra WP Engine.

## Vigtige bemærkninger

### Wildcard-domæner

For multisite installationer med subdomain anbefales det at kontakte WP Engine support for at anmode om en wildcard-domænekonfiguration. Dette gør det muligt for alle subdomæner automatisk at fungere uden, at du skal tilføje dem hver for sig.

### SSL-certifikater

WP Engine håndterer automatisk udstedelse og fornyelse af SSL-certifikater for alle domæner tilføjet via denne integration. Der kræves ingen yderligere konfiguration.

## Fejlfinding

### Problemer med API-forbindelsen
- Tjek, at WP Engine plugin er aktivt og korrekt konfigureret.
- Hvis du har defineret API-nøglen manuelt, tjek, at den er korrekt.
- Kontakt WP Engine support, hvis du har problemer med API'en.

### Domæne tilføjet
- Tjek Ultimate Multisite logs for eventuelle fejlmeddelelser.
- Bekræft, at domænet ikke allerede er tilføjet til WP Engine.
- Sørg for, at dit WP Engine-abonnement understøtter antallet af domæner, du tilføjer.

### Subdomæne-problemer
- Hvis subdomæner ikke virker, kontakt WP Engine support for at anmode om en wildcard-domænekonfiguration.
- Bekræft, at dine DNS-indstillinger er korrekt konfigureret for hoveddomænet og subdomænerne.

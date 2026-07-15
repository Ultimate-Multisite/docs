---
title: Hostinger (hPanel) Integrasjon
sidebar_position: 7
_i18n_hash: ce631be523b8bbe2bf3156a106abfa3d
---
# Hostinger (hPanel) Integrasjon

## Oversikt {#overview}

Hostinger er en populær webhotellleverandør med et moderne kontrollpanel kalt hPanel. Ultimate Multisite Hostinger-integrasjonen muliggjør automatisk synkronisering av domener mellom Ultimate Multisite og Hostingers hPanel, slik at du kan administrere domene-mappinger og underdomener direkte fra WordPress-adminen.

## Funksjoner {#features}

- Automatisk opprettelse av addon-domener i hPanel
- Automatisk opprettelse av underdomener i hPanel (for underdomene multisite-installasjoner)
- Fjerning av domener når mappinger slettes
- Sømløs integrasjon med hPanel sitt API for domenehåndtering

## Krav {#requirements}

For å bruke Hostinger-integrasjonen, trenger du:

1. En Hostinger-konto med tilgang til hPanel
2. Et API-token fra Hostinger
3. Følgende konstanter definert i din `wp-config.php`-fil:

```php
define('WU_HOSTINGER_API_TOKEN', 'your_hostinger_api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'your_hostinger_account_id');
```

Valgfritt kan du også definere:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1'); // Standard API-endepunkt
```

## Oppsettinstruksjoner {#setup-instructions}

### 1. Generer ditt Hostinger API-token {#1-generate-your-hostinger-api-token}

1. Logg inn på Hostinger-kontoen din og få tilgang til hPanel
2. Naviger til **Account Settings** → **API Tokens**
3. Klikk på **Create New Token**
4. Gi tokenet ditt et beskrivende navn (f.eks. "Ultimate Multisite")
5. Velg nødvendige tillatelser:
   - Domain management
   - Subdomain management
6. Kopier det genererte tokenet og lagre det sikkert

### 2. Finn ditt kontol-ID {#2-find-your-account-id}

1. I hPanel, gå til **Account Settings** → **Account Information**
2. Ditt Account ID vises på denne siden
3. Kopier og lagre dette ID-et til neste trinn

### 3. Legg til konstanter i wp-config.php {#3-add-constants-to-wp-configphp}

Legg til følgende konstanter i din `wp-config.php`-fil:

```php
define('WU_HOSTINGER_API_TOKEN', 'your_hostinger_api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'your_hostinger_account_id');
```

Hvis Hostinger-kontoen din bruker et annet API-endepunkt, kan du tilpasse det:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1');
```

### 4. Aktiver integrasjonen {#4-enable-the-integration}

1. I WordPress-adminen, gå til **Ultimate Multisite > Settings**
2. Naviger til fanen **Domain Mapping**
3. Scroll ned til **Host Integrations**
4. Aktiver integrasjonen **Hostinger (hPanel)**
5. Klikk på **Save Changes**

## Hvordan det fungerer {#how-it-works}

### Addon-domener {#addon-domains}

Når du mapper et domene i Ultimate Multisite:

1. Sender integrasjonen en forespørsel til Hostingers API for å legge til domenet som et addon-domene
2. Domenet konfigureres til å peke til din rotmappe
3. Når en domenemapping fjernes, fjerner integrasjonen automatisk addon-domenet fra hPanel

### Underdomener {#subdomains}

For underdomene multisite-installasjoner, når et nytt nettsted opprettes:

1. Trekker integrasjonen ut underdomene-delen fra det fullstendige domenet
2. Den sender en forespørsel til Hostingers API for å legge til underdomenet
3. Underdomenet konfigureres til å peke til din rotmappe

## Viktige merknader {#important-notes}

- Integrasjonen bruker Hostingers REST API for å kommunisere med kontoen din
- API-tokenet ditt må ha de nødvendige tillatelsene for domene- og underdomenehåndtering
- Integrasjonen håndterer ikke DNS-konfigurasjon; domener må allerede peke til Hostinger-kontoen din
- API-forespørsler gjøres sikkert over HTTPS
- Hold API-tokenet ditt sikkert og del det aldri offentlig

## Feilsøking {#troubleshooting}

### API-tilkoblingsproblemer {#api-connection-issues}

- Verifiser at API-tokenet ditt er korrekt og ikke har utløpt
- Sjekk at Account ID-et ditt er riktig
- Forsikre deg om at API-tokenet ditt har de nødvendige tillatelsene for domenehåndtering
- Verifiser at Hostinger-kontoen din er aktiv og i god stand

### Domene er ikke lagt til {#domain-not-added}

- Sjekk Ultimate Multisite-loggene for eventuelle feilmeldinger
- Verifiser at domenet ikke allerede er lagt til i Hostinger-kontoen din
- Forsikre deg om at Hostinger-kontoen din ikke har nådd grensen for addon-domener
- Bekreft at domenet er riktig pekt til Hostinger-nameserverne

### SSL-sertifikatproblemer {#ssl-certificate-issues}

- Integrasjonen håndterer ikke utstedelse av SSL-sertifikater
- Hostinger tilbyr vanligvis gratis SSL-sertifikater via AutoSSL
- Du kan administrere SSL-sertifikater direkte i hPanel under **SSL/TLS**
- Alternativt, bruk Let's Encrypt med Hostingers AutoSSL-funksjon

## Support {#support}

For ytterligere hjelp med Hostinger-integrasjonen, vennligst se:

- [Hostinger API Documentation](https://support.hostinger.com/en/articles/4286-api-documentation)
- [Ultimate Multisite Documentation](/)
- [Ultimate Multisite Support](https://ultimatemultisite.com/support)

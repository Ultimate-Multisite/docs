---
title: CyberPanel Integrasjon
sidebar_position: 21
_i18n_hash: d0607874b556c583dac2aaa33ba1dc1d
---
# CyberPanel Integrasjon

Denne guiden forklarer hvordan du konfigurerer Ultimate Multisite CyberPanel-integrasjonen slik at domener som er kartlagt i nettverket ditt, automatisk legges til (og fjernes) som virtuelle vert på CyberPanel, med valgfri auto-SSL-tilordning via Let's Encrypt.

## Hva det gjør {#what-it-does}

*   Når et domene er kartlagt i Ultimate Multisite, kaller integrasjonen CyberPanel API for å opprette en virtuell vert for det domenet.
*   Når en domenekartlegging fjernes, kaller integrasjonen API-et for å slette den tilsvarende virtuelle verten.
*   Når auto-SSL er aktivert, utløser integrasjonen utstedelse av Let's Encrypt-sertifikat umiddelbart etter at den virtuelle verten er opprettet.
*   Legger/fjerner valgfritt `www.` alias avhengig av innstillingen "Auto-create www subdomain" i Domain Mapping-innstillingene.

## Forutsetninger {#prerequisites}

*   En kjørende CyberPanel-instans (v2.3 eller nyere anbefales) som er tilgjengelig fra WordPress-serveren din.
*   En eksisterende nettside i CyberPanel som allerede betjener roten til WordPress-nettverket ditt. Integrasjonen legger til nye virtuelle verter på denne serveren.
*   At CyberPanel API-tilgang er aktivert. Autentisering bruker ditt CyberPanel-administratorbrukernavn og passord.
*   DNS-oppføringene for de kartlagte domenene må allerede peke til IP-adressen til serveren din før auto-SSL kan utstede et gyldig sertifikat.

## Krav {#requirements}

Følgende konstanter må defineres i din `wp-config.php`-fil:

```php
define('WU_CYBERPANEL_HOST', 'https://your-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'your_admin_username');
define('WU_CYBERPANEL_PASSWORD', 'your_admin_password');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

Valgfritt kan du også definere:

```php
define('WU_CYBERPANEL_AUTO_SSL', true);          // Standard: true — utsteder Let's Encrypt SSL etter domenekreering
define('WU_CYBERPANEL_PHP_VERSION', 'PHP 8.2');  // Standard: PHP 8.2
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com'); // Brukes for kontakt e-post for SSL-sertifikat
```

## Oppsettinstruksjoner {#setup-instructions}

### 1. Aktiver CyberPanel API {#1-enable-the-cyberpanel-api}

1. Logg inn på CyberPanel-dashbordet ditt som administrator.
2. Gå til **Security** > **SSL** og bekreft at SSL er aktivt på selve CyberPanel-grensesnittet (kreves for sikre API-kall).
3. CyberPanel API er som standard tilgjengelig på `https://your-server-ip:8090/api/`. Ingen ekstra trinn er nødvendig for å aktivere det — det er på som standard for administratorbrukere.

### 2. Legg til konstanter i wp-config.php {#2-add-constants-to-wp-configphp}

Legg til følgende konstanter i din `wp-config.php`-fil før linjen `/* That's all, stop editing! */`:

```php
define('WU_CYBERPANEL_HOST', 'https://your-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'admin');
define('WU_CYBERPANEL_PASSWORD', 'your_secure_password');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

For å aktivere auto-SSL (anbefalt):

```php
define('WU_CYBERPANEL_AUTO_SSL', true);
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com');
```

### 3. Aktiver integrasjonen {#3-enable-the-integration}

1. I nettverksadministratoren din i WordPress, gå til **Ultimate Multisite** > **Settings**.
2. Naviger til fanen **Domain Mapping**.
3. Scroll ned til **Host Integrations**.
4. Aktiver **CyberPanel**-integrasjonen.
5. Klikk **Save Changes**.

### 4. Verifiser tilkobling {#4-verify-connectivity}

Bruk den innebygde tilkoblingstesten i innstillingsguiden:

1. Gå til **Ultimate Multisite** > **Settings** > **Domain Mapping** > **Host Integrations** > **CyberPanel**.
2. Klikk **Test Connection**.
3. En suksessmelding bekrefter at pluginet kan nå CyberPanel API og autentisere korrekt.

## Hvordan det fungerer {#how-it-works}

### Domenekartlegging {#domain-mapping}

Når et domene er kartlagt i Ultimate Multisite:

1. Sender integrasjonen en `POST`-forespørsel til `/api/createWebsite` på din CyberPanel-vert.
2. CyberPanel oppretter en ny virtuell vert for domenet under den konfigurerte pakken.
3. Rotmappen settes til å peke til rotmappen til WordPress-nettverket ditt.
4. Når domenekartleggingen fjernes, kaller integrasjonen `/api/deleteWebsite` for å rydde opp den virtuelle verten.

### Auto-SSL {#auto-ssl}

Når `WU_CYBERPANEL_AUTO_SSL` er `true`:

1. Etter at den virtuelle verten er opprettet, kaller integrasjonen `/api/issueSSL` for domenet.
2. CyberPanel ber om et Let's Encrypt-sertifikat ved hjelp av ACME HTTP-01-utfordringen.
3. Sertifikatet fornyes automatisk av CyberPanel før utløp.

> **Viktig:** DNS må være fullstendig propagert til IP-adressen til serveren din før Let's Encrypt kan validere domenet. Hvis utstedelsen av SSL feiler umiddelbart etter kartlegging, vent til DNS-propageringen er fullført og utløs SSL på nytt fra CyberPanel-dashbordet under **SSL** > **Manage SSL**.

### www Subdomene {#www-subdomain}

Hvis **Auto-create www subdomain** er aktivert i Domain Mapping-innstillingene, oppretter integrasjonen også et alias for `www.<domene>` og, når auto-SSL er på, utsteder et sertifikat som dekker både apex- og www-variantene.

### E-postvideresendinger {#email-forwarders}

Når [Ultimate Multisite: Emails](../../addons/ultimate-multisite-emails/) addon er aktiv, kan CyberPanel også tilby kundens e-postvideresendinger. Videresendinger sender meldinger fra et domene til en annen innboks uten å opprette en full postkasse, noe som er nyttig for aliaser som `info@customer-domain.test` eller `support@customer-domain.test`.

Før du aktiverer videresendinger for kunder:

1. Bekreft at CyberPanel-konstantene ovenfor er konfigurert og at tilkoblingstesten lykkes.
2. Aktiver e-postleverandøren fra CyberPanel i Emails-addon-innstillingene.
3. Bekreft at kundedomenet allerede eksisterer i CyberPanel før du oppretter videresenderen.
4. Opprett en testvideresender og send en melding gjennom den før du tilbyr funksjonen på produksjonsplaner.

Hvis opprettelsen av videresenderen feiler, sjekk Ultimate Multisite-aktivitetsloggene først, og bekreft deretter i CyberPanel at kildedomenet eksisterer og at API-brukeren har tillatelser for e-postadministrasjon.

## Konfigurasjonsreferanse {#configuration-reference}

| Konstant | Påkrevd | Standard | Beskrivelse |
|---|---|---|---|
| `WU_CYBERPANEL_HOST` | Ja | — | Full URL til CyberPanel-instansen din inkludert port, f.eks. `https://cp.example.com:8090` |
| `WU_CYBERPANEL_USERNAME` | Ja | — | CyberPanel administratorbrukernavn |
| `WU_CYBERPANEL_PASSWORD` | Ja | — | CyberPanel administratorpassord |
| `WU_CYBERPANEL_PACKAGE` | Ja | `Default` | CyberPanel vertspakke som skal tildeles nye virtuelle verter |
| `WU_CYBERPANEL_AUTO_SSL` | Nei | `true` | Utsteder et Let's Encrypt SSL-sertifikat etter domenekreering |
| `WU_CYBERPANEL_PHP_VERSION` | Nei | `PHP 8.2` | PHP-versjon for nye virtuelle verter (må matche en versjon installert i CyberPanel) |
| `WU_CYBERPANEL_EMAIL` | Nei | — | Kontakt-e-post for registrering av SSL-sertifikat |

## Viktige merknader {#important-notes}

*   CyberPanel API bruker sesjonsbasert token-autentisering. Integrasjonen håndterer token-anskaffelsen automatisk ved hvert API-kall.
*   Din CyberPanel-administratorbruker må ha tillatelser til å opprette og slette nettsteder.
*   CyberPanel kjører som standard på port `8090`. Hvis serveren din bruker en brannmur, må du sørge for at denne porten er tilgjengelig fra WordPress-applikasjonsserveren.
*   Integrasjonen administrerer ikke DNS-oppføringer. Du må peke domene-DNS til IP-adressen til serveren din før du kartlegger domenet i Ultimate Multisite.
*   Hvis du bruker OpenLiteSpeed (OLS), utløses en kontrollert omstart automatisk etter endringer i virtuelle verter. Ingen manuell intervensjon er nødvendig.

## Feilsøking {#troubleshooting}

### API Connection Refused (Tilkobling til API avvist) {#api-connection-refused}

*   Bekreft at port `8090` er åpen i serverbrannmuren din.
*   Bekreft at verdien i `WU_CYBERPANEL_HOST` inkluderer riktig protokoll (`https://`) og port.
*   Sjekk at CyberPanel SSL-sertifikatet ditt er gyldig; selvsignerte sertifikater kan forårsake TLS-verifikasjonsfeil. Sett `WU_CYBERPANEL_VERIFY_SSL` til `false` kun i betrodde private nettverksmiljøer.

### Authentication Errors (Autentiseringsfeil) {#authentication-errors}

*   Bekreft at `WU_CYBERPANEL_USERNAME` og `WU_CYBERPANEL_PASSWORD` er korrekte ved å logge inn på CyberPanel direkte.
*   CyberPanel låser kontoer etter gjentatte mislykkede påloggingsforsøk. Sjekk **Security** > **Brute Force Monitor** i CyberPanel hvis låsing oppstår.

### Domain Not Created (Domene ikke opprettet) {#domain-not-created}

*   Sjekk Ultimate Multisite-aktivitetsloggen (**Ultimate Multisite** > **Activity Logs**) for API-feilmeldinger.
*   Bekreft at pakken definert i `WU_CYBERPANEL_PACKAGE` eksisterer i CyberPanel (**Packages** > **List Packages**).
*   Sørg for at domenet ikke allerede er registrert som en nettside i CyberPanel — duplikat opprettelse av nettsider returnerer en feil.

### SSL Certificate Not Issued (SSL-sertifikat ikke utstedt) {#ssl-certificate-not-issued}

*   Bekreft at DNS er fullstendig propagert: `dig +short your-domain.com` skal returnere IP-adressen til serveren din.
*   Let's Encrypt håndhever rate limits. Hvis du nylig har utstedt flere sertifikater for samme domene, vent før du prøver på nytt.
*   Sjekk CyberPanel SSL-loggene under **Logs** > **Error Logs** for detaljer om feil ved sertifikatutstedelse.
*   Som en fallback kan du utstede SSL manuelt fra CyberPanel: **SSL** > **Manage SSL** > velg domenet > **Issue SSL**.

## Referanser {#references}

- CyberPanel API Documentation: https://docs.cyberpanel.net/docs/category/api
- CyberPanel SSL Management: https://docs.cyberpanel.net/docs/cyberpanel/SSL/manageSSL
- Let's Encrypt Rate Limits: https://letsencrypt.org/docs/rate-limits/

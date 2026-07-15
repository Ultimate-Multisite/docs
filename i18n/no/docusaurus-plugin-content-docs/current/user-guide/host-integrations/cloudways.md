---
title: Cloudways-integrasjon
sidebar_position: 3
_i18n_hash: 09425d90def2b755c27a698d78d7d4b0
---
# Cloudways-integrasjon

## Oversikt {#overview}
Cloudways er en administrert skybasert hostingplattform som lar deg distribuere WordPress-nettsteder hos ulike skyleverandører som DigitalOcean, AWS, Google Cloud og flere. Denne integrasjonen muliggjør automatisk domenesynkronisering og administrasjon av SSL-sertifikater mellom Ultimate Multisite og Cloudways.

## Funksjoner {#features}
- Automatisk domenesynkronisering
- Administrasjon av SSL-sertifikater
- Støtte for ekstra domener
- DNS-validering for SSL-sertifikater

## Krav {#requirements}
Følgende konstanter må være definert i `wp-config.php`-filen din:

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

Du kan også valgfritt definere:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'comma,separated,list,of,domains');
```

## Oppsettsinstruksjoner {#setup-instructions}

### 1. Hent Cloudways API-legitimasjonen din {#1-get-your-cloudways-api-credentials}

1. Logg inn på Cloudways Dashboard
2. Gå til "Account" > "API Keys"
3. Generer en API-nøkkel hvis du ikke allerede har en
4. Kopier e-posten og API-nøkkelen din

### 2. Hent server- og applikasjons-ID-ene dine {#2-get-your-server-and-application-ids}

1. I Cloudways Dashboard, gå til "Servers"
2. Velg serveren der WordPress multisite-nettverket ditt er hostet
3. Server-ID-en er synlig i URL-en: `https://platform.cloudways.com/server/{SERVER_ID}`
4. Gå til "Applications" og velg WordPress-applikasjonen din
5. App-ID-en er synlig i URL-en: `https://platform.cloudways.com/server/{SERVER_ID}/application/{APP_ID}`

### 3. Legg til konstanter i wp-config.php {#3-add-constants-to-wp-configphp}

Legg til følgende konstanter i `wp-config.php`-filen din:

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

Hvis du har flere **eksterne** domener (utenfor multisite-nettverket ditt) som alltid skal beholdes på Cloudways-aliaslisten:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'extradomain1.com,extradomain2.com');
```

:::warning Ikke inkluder ditt eget nettverks wildcard
Ikke legg til `*.your-network.com` (eller noe subdomenemønster for ditt eget nettverk) i
`WU_CLOUDWAYS_EXTRA_DOMAINS`. Se [Viktig — fallgruve med wildcard-SSL](#important--wildcard-ssl-pitfall)
nedenfor for hvorfor dette hindrer at SSL-sertifikater per leietaker blir utstedt.
:::

### 4. Aktiver integrasjonen {#4-enable-the-integration}

1. I WordPress-admin, gå til Ultimate Multisite > Settings
2. Naviger til fanen "Domain Mapping"
3. Rull ned til "Host Integrations"
4. Aktiver Cloudways-integrasjonen
5. Klikk "Save Changes"

## Slik fungerer det {#how-it-works}

### Domenesynkronisering {#domain-syncing}

Når et domene tilordnes i Ultimate Multisite:

1. Integrasjonen henter alle domener som for øyeblikket er tilordnet
2. Den legger til det nye domenet i listen (sammen med en www-versjon hvis aktuelt)
3. Den sender den komplette listen til Cloudways via API-et
4. Cloudways oppdaterer domenealiasene for applikasjonen din

Merk: Cloudways API krever at den komplette listen over domener sendes hver gang, ikke bare at enkeltvise domener legges til eller fjernes.

### Administrasjon av SSL-sertifikater {#ssl-certificate-management}

Etter at domener er synkronisert:

1. Integrasjonen sjekker hvilke domener som har gyldige DNS-oppføringer som peker til serveren din
2. Den sender en forespørsel til Cloudways om å installere Let's Encrypt SSL-sertifikater for disse domenene
3. Cloudways håndterer utstedelse og installasjon av SSL-sertifikatene

Integrasjonen ber alltid om **standard** (ikke-wildcard) Let's Encrypt-sertifikater fra
Cloudways. Hvis et wildcard-mønster oppgis i `WU_CLOUDWAYS_EXTRA_DOMAINS`, fjernes den innledende
`*.` før SSL-forespørselen — selve wildcardet blir aldri installert av denne
integrasjonen. For å bruke et wildcard-sertifikat på Cloudways må du installere det
manuelt, men å gjøre det blokkerer Let's Encrypt-utstedelse per domene for tilordnede egendefinerte domener
(se fallgruven nedenfor).

## Ekstra domener {#extra-domains}

Konstanten `WU_CLOUDWAYS_EXTRA_DOMAINS` lar deg angi flere **eksterne**
domener som alltid skal beholdes på Cloudways-applikasjonens aliasliste. Bruk den for:

- Eksterne domener som ikke administreres av Ultimate Multisite (f.eks. et separat markedsføringsnettsted som deler samme Cloudways-applikasjon)
- Parkerte domener eller stagingdomener du vil beholde på applikasjonens aliasliste

Ikke bruk denne konstanten for ditt eget nettverks subdomene-wildcard
(f.eks. `*.your-network.com`). Se fallgruven med wildcard-SSL nedenfor.

## Viktig — fallgruve med wildcard-SSL {#important--wildcard-ssl-pitfall}

En vanlig feil når man følger Cloudways' standardoppsett, er å legge til et wildcard som
`*.your-network.com` i `WU_CLOUDWAYS_EXTRA_DOMAINS`, eller å installere et Cloudways
wildcard-SSL-sertifikat manuelt for det wildcardet.

**Hvis du gjør dette, vil Cloudways nekte å utstede Let's Encrypt-sertifikater for de
egendefinerte domenene per leietaker som Ultimate Multisite tilordner.** Cloudways erstatter det aktive
SSL-sertifikatet på applikasjonen hver gang, og et eksisterende wildcard-sertifikat på
applikasjonen blokkerer Let's Encrypt-utstedelsen per domene som integrasjonen er avhengig av.

### Anbefalt Cloudways SSL-oppsett for et Ultimate Multisite-nettverk {#recommended-cloudways-ssl-setup-for-an-ultimate-multisite-network}

1. I Cloudways-applikasjonens **SSL Certificate**-fane, installer et **standard
   Let's Encrypt-sertifikat** som bare dekker `your-network.com` og `www.your-network.com`
   — **ikke** et wildcard.
2. Ikke legg `*.your-network.com` (eller noe subdomenemønster for ditt eget nettverk) i
   `WU_CLOUDWAYS_EXTRA_DOMAINS`. Reserver den konstanten kun for **eksterne** domener.
3. Opprett subdomene-wildcardet per leietaker kun på **DNS**-nivå (en `A`-oppføring for
   `*.your-network.com` som peker til Cloudways-serverens IP-adresse), slik at undernettsteder resolves. SSL
   for individuelle tilordnede egendefinerte domener utstedes deretter automatisk av integrasjonen
   via Let's Encrypt.

Hvis leietakernes egendefinerte domener sitter fast uten SSL, sjekk Cloudways SSL-fanen. Hvis et
wildcard-sertifikat er aktivt der, fjern det, utsted et standard Let's Encrypt
sertifikat på nytt kun for hovednettverksdomenet, og fjern eventuelle wildcard-oppføringer fra
`WU_CLOUDWAYS_EXTRA_DOMAINS`. Utløs deretter en domenetilknytning på nytt (eller vent på den neste),
så vil integrasjonen begynne å utstede sertifikater per domene igjen.

## Feilsøking {#troubleshooting}

### Problemer med API-tilkobling {#api-connection-issues}
- Kontroller at e-posten din og API-nøkkelen er riktige
- Sjekk at server- og applikasjons-ID-ene dine er riktige
- Sørg for at Cloudways Account har de nødvendige tillatelsene

### Problemer med SSL-sertifikat {#ssl-certificate-issues}
- Cloudways krever at domener har gyldige DNS-oppføringer som peker til serveren din før SSL-sertifikater utstedes
- Integrasjonen validerer DNS-oppføringer før SSL-sertifikater forespørres
- Hvis SSL-sertifikater ikke blir utstedt, sjekk at domenene dine peker riktig til serverens IP-adresse
- **Egendefinerte domener per leietaker sitter fast uten SSL?** Sjekk fanen SSL Certificate i Cloudways-applikasjonen. Hvis et wildcard-sertifikat (manuelt installert, eller som dekker `*.your-network.com`) er aktivt, vil ikke Cloudways utstede Let's Encrypt-sertifikater for individuelt tilknyttede egendefinerte domener. Erstatt det med et standard Let's Encrypt-sertifikat som bare dekker hovednettverksdomenet (`your-network.com`, `www.your-network.com`), og fjern eventuelle wildcard-oppføringer fra `WU_CLOUDWAYS_EXTRA_DOMAINS`. Utløs deretter en domenetilknytning på nytt (eller vent på den neste), så vil integrasjonen be om sertifikater per domene.

### Domene ikke lagt til {#domain-not-added}
- Sjekk Ultimate Multisite-loggene for eventuelle feilmeldinger
- Kontroller at domenet ikke allerede er lagt til i Cloudways
- Sørg for at Cloudways-planen din støtter antallet domener du legger til

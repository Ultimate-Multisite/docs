---
title: Forbedre kontrollpanelintegrasjon
sidebar_position: 2
_i18n_hash: 2b4047e6b7b32a1c96a0b562e251cbfb
---
# Integrasjon med Enhance-kontrollpanel

## Oversikt
Enhance er et moderne kontrollpanel som gir kraftige funksjoner for automatisering og administrasjon av hosting. Denne integrasjonen gjør det mulig å synkronisere domener automatisk og administrere SSL-sertifikater mellom Ultimate Multisite og Enhance-kontrollpanelet.

**Relatert diskusjon:** Se [GitHub Discussion #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265) for tips fra fellesskapet og tilleggsinformasjon.

## Funksjoner
- Automatisk domenesynkronisering når domener blir tilordnet i Ultimate Multisite
- Automatisk klargjøring av SSL-sertifikater via LetsEncrypt når DNS peker riktig
- Støtte for underdomener for nettverk som kjører i underdomene-modus
- Fjerning av domener når tilordninger blir slettet
- Tilkoblingstesting for å verifisere API-påloggingsinformasjon

## Krav

### Systemkrav
- Enhance-kontrollpanel installert og tilgjengelig
- WordPress Multisite-installasjon hostet på eller tilkoblet en Enhance-server
- Apache-webserver (Enhance støtter for øyeblikket Apache-konfigurasjoner; LiteSpeed Enterprise er tilgjengelig til redusert pris)

### API-tilgang
Du må ha administratortilgang til Enhance-kontrollpanelet for å opprette API-tokens.

## Slik får du API-påloggingsinformasjonen

### 1. Opprett et API-token

1. Logg inn på Enhance-kontrollpanelet som administrator
2. Klikk på **Settings** i navigasjonsmenyen
3. Gå til **Access Tokens**
4. Klikk **Create Token**
5. Gi tokenet et beskrivende navn (f.eks. «Ultimate Multisite Integration»)
6. Tildel rollen **System Administrator**
7. For utløpsdato:
   - La feltet stå tomt hvis du vil at tokenet aldri skal utløpe
   - Eller angi en spesifikk utløpsdato av sikkerhetshensyn
8. Klikk **Create**

Etter opprettelsen vises ditt **Access Token** og **Organization ID**. **Lagre disse umiddelbart**, ettersom tokenet bare vises én gang.

### 2. Hent din Organization ID

Organization ID vises på Access Tokens-siden i en blå informasjonsboks merket «Org ID: {din_id}».

Organization ID er et UUID formatert slik: `d8554b6d-5d0d-6719-009b-fec1189aa8f3`

Du kan også finne en kundes Organization ID ved å:
1. Gå til **Customers**-siden
2. Klikk **Manage customer** for den aktuelle kunden
3. Se på URL-en – Organization ID er de alfanumeriske tegnene etter `/customers/`

### 3. Hent din Server ID

For å finne din Server ID (nødvendig for domeneoperasjoner):

1. I Enhance-kontrollpanelet, naviger til **Servers**
2. Klikk på serveren der WordPress-installasjonen din kjører
3. Server ID (UUID-format) vil være synlig i URL-en eller serverdetaljene
4. Alternativt kan du bruke API-et til å liste opp servere:

```bash
curl -s -X GET https://your-enhance-panel.com/api/servers \
  -H "Accept: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" | jq
```

Server-ID-en følger UUID-formatet: `00000000-0000-0000-0000-000000000000`

### 4. Hent din API-URL

API-URL-en din er Enhance-kontrollpanelets URL med `/api/` lagt til:

```
https://your-enhance-panel.com/api/
```

**Viktig:** Banen `/api/` er påkrevd. Vanlige feil inkluderer:
- Å bruke bare domenet uten `/api/`
- Å bruke HTTP i stedet for HTTPS (HTTPS er påkrevd av sikkerhetshensyn)

## Konfigurasjon

### Nødvendige konstanter

Legg til følgende konstanter i `wp-config.php`-filen din:

```php
// Enhance Control Panel Integration
define('WU_ENHANCE_API_TOKEN', 'your-bearer-token-here');
define('WU_ENHANCE_API_URL', 'https://your-enhance-panel.com/api/');
define('WU_ENHANCE_SERVER_ID', 'your-server-uuid-here');
```

### Oppsett via integrasjonsveiviseren

1. I WordPress-adminpanelet, gå til **Ultimate Multisite** > **Settings**
2. Naviger til **Integrations**-fanen
3. Finn **Enhance Control Panel Integration** og klikk **Configuration**
4. Veiviseren vil guide deg gjennom oppsettet:
   - **Steg 1:** Introduksjon og funksjonsoverikt
   - **Steg 2:** Skriv inn API-påloggingsinformasjonen din (Token, API URL, Server ID)
   - **Steg 3:** Test tilkoblingen
   - **Steg 4:** Gjennomgå og aktiver

Du kan velge å:
- La veiviseren legge til konstantene i `wp-config.php`-filen automatisk
- Kopiere konstantdefinisjonene og legge dem til manuelt

## Ytterligere WordPress-konfigurasjon

Basert på tilbakemeldinger fra fellesskapet ([Discussion #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)) kan det være nødvendig å konfigurere disse tilleggsinnstillingene:

### .htaccess-konfigurasjon

Hvis du opplever problemer med domenetilordning:
1. Slett den opprinnelige Enhance `.htaccess`-filen
2. Erstatt den med standard WordPress Multisite `.htaccess`-fil

### Cookie-konstanter

Legg til disse konstantene i `wp-config.php` for å sikre riktig håndtering av informasjonskapsler på tvers av tilordnede domener:

```php
define('COOKIE_DOMAIN', $_SERVER['HTTP_HOST']);
define('COOKIEPATH', '/');
define('ADMIN_COOKIE_PATH', '/');
```

## Slik fungerer det

### Når et domene blir tilordnet

1. En bruker tilordner et egendefinert domene i Ultimate Multisite (eller et nytt nettsted opprettes i underdomene-modus)
2. Integrasjonen sender en POST-forespørsel til Enhances API: `/servers/{server_id}/domains`
3. Enhance legger til domenet i serverkonfigurasjonen din
4. Når DNS peker til serveren din, klargjør Enhance automatisk et SSL-sertifikat via LetsEncrypt
5. Domenet blir aktivt med HTTPS

### Når et domene fjernes

1. En domenetilordning slettes i Ultimate Multisite
2. Integrasjonen spør Enhance for å finne domenets ID
3. En DELETE-forespørsel sendes til: `/servers/{server_id}/domains/{domain_id}`
4. Enhance fjerner domenet fra serverkonfigurasjonen din

### DNS- og SSL-sjekking

Ultimate Multisite inkluderer innebygd DNS- og SSL-sjekking:
- Du kan konfigurere sjekkintervallet i **Domain Mapping Settings** (standard: 300 sekunder/5 minutter)
- Systemet vil verifisere DNS-propagering før et domene markeres som aktivt
- SSL-sertifikatets gyldighet sjekkes automatisk
- Enhance håndterer SSL-klargjøring automatisk, så manuell SSL-konfigurasjon er ikke nødvendig

## Verifisering av oppsett

### Test tilkoblingen

1. I integrasjonsveiviseren, bruk steget **Test Connection**
2. Pluginen vil forsøke å liste opp domener på serveren din
3. En suksessmelding bekrefter:
   - API-påloggingsinformasjonen er korrekt
   - API-URL-en er tilgjengelig
   - Server-ID-en er gyldig
   - Tillatelser er riktig satt opp

### Etter tilordning av et domene

1. Tilordne et testdomene i Ultimate Multisite
2. Sjekk Ultimate Multisite-loggene (**Ultimate Multisite** > **Logs** > **integration-enhance**)
3. Verifiser i Enhance-kontrollpanelet at domenet ble lagt til:
   - Gå til **Servers** > **Your Server** > **Domains**
   - Det nye domenet skal vises i listen
4. Når DNS har propagert, verifiser at SSL klargjøres automatisk

## Feilsøking

### API-tilkoblingsproblemer

**Feil: «Failed to connect to Enhance API»**
- Verifiser at `WU_ENHANCE_API_URL` inkluderer `/api/` på slutten
- Sørg for at du bruker HTTPS, ikke HTTP
- Sjekk at Enhance-panelet er tilgjengelig fra WordPress-serveren din
- Verifiser at det ikke er brannmurregler som blokkerer tilkoblingen

**Feil: «Enhance API Token not found»**
- Sørg for at `WU_ENHANCE_API_TOKEN` er definert i `wp-config.php`
- Verifiser at tokenet ikke er slettet eller utløpt i Enhance
- Sjekk for skrivefeil i token-verdien

**Feil: «Server ID is not configured»**
- Verifiser at `WU_ENHANCE_SERVER_ID` er definert i `wp-config.php`
- Sørg for at Server-ID-en er i gyldig UUID-format
- Bekreft at serveren eksisterer i Enhance-panelet ditt

### Domene blir ikke lagt til

**Sjekk loggene:**
1. Gå til **Ultimate Multisite** > **Logs**
2. Filtrer etter **integration-enhance**
3. Se etter feilmeldinger som indikerer problemet

**Vanlige årsaker:**
- Ugyldig domenenavnformat
- Domenet eksisterer allerede i Enhance
- Utilstrekkelige API-tillatelser (sørg for at tokenet har System Administrator-rollen)
- Server-ID-en samsvarer ikke med den faktiske serveren i Enhance

### SSL-sertifikatproblemer

**SSL klargjøres ikke:**
- Verifiser at DNS peker til serverens IP-adresse
- Sjekk at domenet peker riktig: `nslookup yourdomain.com`
- Enhance krever at DNS peker riktig før det kan klargjøre SSL
- SSL-klargjøring tar vanligvis 5–10 minutter etter DNS-propagering
- Sjekk Enhance-kontrollpanelets logger for SSL-spesifikke feil

**Manuell SSL-feilsøking i Enhance:**
1. Gå til **Servers** > **Your Server** > **Domains**
2. Finn domenet ditt og sjekk SSL-statusen
3. Du kan manuelt utløse SSL-klargjøring om nødvendig

### DNS-sjekkintervall

Hvis domener eller SSL-sertifikater tar for lang tid å aktivere:
1. Gå til **Ultimate Multisite** > **Settings** > **Domain Mapping**
2. Finn innstillingen **DNS Check Interval**
3. Juster fra standard 300 sekunder til en lavere verdi (minimum: 10 sekunder)
4. **Merk:** Lavere intervaller betyr hyppigere sjekker, men høyere serverbelastning

### Autentiseringsfeil

**HTTP 401/403-feil:**
- Generer et nytt API-token i Enhance
- Verifiser at tokenet har **System Administrator**-rollen
- Sjekk at tokenet ikke har utløpt
- Sørg for at du bruker riktig Organization ID (selv om den vanligvis ikke er nødvendig i URL-en)

### Logganalyse

Aktiver detaljert logging:
```php
// Legg til i wp-config.php for utvidet feilsøking
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
```

Sjekk deretter loggene på:
- Ultimate Multisite-logger: **Ultimate Multisite** > **Logs**
- WordPress debug-logg: `wp-content/debug.log`
- Enhance-panellogger: Tilgjengelig i Enhances administrasjonsgrensesnitt

## API-referanse

### Autentisering
Alle API-forespørsler bruker Bearer-token-autentisering:
```
Authorization: Bearer YOUR_TOKEN_HERE
```

### Vanlige endepunkter som brukes

**Liste opp servere:**
```
GET /servers
```

**Liste opp domener på en server:**
```
GET /servers/{server_id}/domains
```

**Legg til et domene:**
```
POST /servers/{server_id}/domains
Body: {"domain": "example.com"}
```

**Slett et domene:**
```
DELETE /servers/{server_id}/domains/{domain_id}
```

### Fullstendig API-dokumentasjon
Komplett API-dokumentasjon: [https://apidocs.enhance.com](https://apidocs.enhance.com)

## Beste praksis

### Sikkerhet
- **Aldri legg API-tokens i versjonskontroll**
- Lagre tokens i `wp-config.php`, som bør ekskluderes fra Git
- Bruk tokens med passende tillatelser (System Administrator for full integrasjon)
- Sett utløpsdatoer for tokens i produksjonsmiljøer
- Roter tokens regelmessig

### Ytelse
- Bruk standard DNS-sjekkintervall (300 sekunder) for å unngå overdrevne API-kall
- Overvåk Enhance-serverressurser ved kjøring av store domeneoperasjoner
- Vurder å spre domenetillegg hvis du tilordner mange domener samtidig

### Overvåking
- Sjekk Ultimate Multisite-logger regelmessig for integrasjonsfeil
- Sett opp overvåking for mislykkede domenetillegg
- Verifiser at SSL-sertifikater klargjøres korrekt
- Hold øye med Enhance-serverkapasitet og domenebegrensninger

## Flere ressurser

- **Offisiell Enhance-dokumentasjon:** [https://enhance.com/docs](https://enhance.com/docs)
- **Enhance API-dokumentasjon:** [https://apidocs.enhance.com](https://apidocs.enhance.com)
- **Enhance-fellesskapsforum:** [https://community.enhance.com](https://community.enhance.com)
- **GitHub-diskusjon:** [Issue #265 - Enhance Integration Tips](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)
- **Ultimate Multisite-guide for domenetilordning:** Se wiki-siden «How to Configure Domain Mapping v2»

## Støtte

Hvis du støter på problemer:
1. Sjekk feilsøkingsdelen ovenfor
2. Gå gjennom Ultimate Multisite-loggene
3. Konsulter [GitHub Discussions](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions)
4. Kontakt Enhance-support for panelspesifikke problemer
5. Opprett en ny diskusjon med detaljerte feillogger for hjelp fra fellesskapet

## Merknader

- Denne integrasjonen håndterer kun domenealiaser; Enhance administrerer SSL automatisk
- Integrasjonen støtter både egendefinerte domenetilordninger og underdomenebaserte nettsteder
- Automatisk opprettelse av www-underdomene kan konfigureres i innstillingene for domenetilordning
- Enhance støtter for øyeblikket Apache-konfigurasjoner (LiteSpeed Enterprise er tilgjengelig)
- Fjerning av domene fra Ultimate Multisite vil fjerne domenet fra Enhance, men tilknyttede SSL-sertifikater slettes kanskje ikke umiddelbart

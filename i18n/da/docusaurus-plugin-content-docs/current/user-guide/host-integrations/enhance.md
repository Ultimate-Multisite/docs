---
title: Forbedr integration med kontrolpanelet
sidebar_position: 2
_i18n_hash: 2b4047e6b7b32a1c96a0b562e251cbfb
---
# Forbedring af integration med kontrolpanelet

## Oversigt
Enhance er et moderne kontrolpanel, der giver kraftfulde muligheder for hostingautomatisering og -administration. Denne integration muliggør automatisk domænesynkronisering og styring af SSL-certifikater mellem Ultimate Multisite og Enhance Control Panel.

**Relateret diskussion:** Se [GitHub Diskussion #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265) for fællesskabstips og yderligere information.

## Funktioner
- Automatisk domænesynkronisering, når domæner er kortlagt i Ultimate Multisite
- Automatisk udstedelse af SSL-certifikater via LetsEncrypt, når DNS'en opløses
- Underdomæne-support for netværk, der kører i underdomæne-tilstand
- Fjernelse af domænenavne, når kortlagelser slettes
- Forbindelsestest for at verificere API-oplysninger

## Krav

### Systemkrav
- Enhance Control Panel er installeret og tilgængelig
- WordPress Multisite installation hostes på eller forbundet til en Enhance server
- Apache webserver (Enhance understøtter i øjeblikket Apache-konfigurationer; LiteSpeed Enterprise er tilgængelig til reduceret pris)

### API Adgang
Du skal have administratoradgang til Enhance Control Panel for at oprette API-tokens.

## Få dine API-oplysninger

### 1. Opret en API Token

1. Log ind på dit Enhance Control Panel som administrator
2. Klik på **Settings** i navigationsmenuen
3. Gå til **Access Tokens**
4. Klik på **Create Token**
5. Giv tokenet et beskrivende navn (f.eks. "Ultimate Multisite Integration")
6. Tildel rollen **System Administrator**
7. For udløbsdato:
   - Lad den stå tom, hvis du ønsker, at tokenet aldrig skal udløbe
   - Eller sæt en specifik udløbsdato til sikkerhedsmæssige formål
8. Klik på **Create**

Efter oprettelsen vil dit **Access Token** og **Organization ID** blive vist. **Gem disse med det samme**, da tokenet kun vises én gang.

### 2. Få din Organization ID

Organization ID'et vises på siden for Access Tokens i en blå informationsboks mærket "Org ID: {your_id}".

Organization ID'et er et UUID formateret som: `d8554b6d-5d0d-6719-009b-fec1189aa8f3`

Du kan også finde en kundes Organization ID ved at:
1. Gå til **Customers** siden
2. Klik på **Manage customer** for den relevante kunde
3. Kig på URL'en - Organization ID'et er de alfanumeriske tegn efter `/customers/`

### 3. Få din Server ID

For at finde din Server ID (nødvendig for domæneoperationer):

1. I Enhance Control Panel, gå til **Servers**
2. Klik på serveren, hvor din WordPress-installation kører
3. Server ID'et (UUID format) vil være synligt i URL'en eller serverdetaljerne
4. Alternativt kan du bruge API'et til at liste servere:

```bash
curl -s -X GET https://your-enhance-panel.com/api/servers \
  -H "Accept: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" | jq
```

Server ID'et følger UUID formatet: `00000000-0000-0000-0000-000000000000`

### 4. Få din API URL

Din API URL er din Enhance Control Panel URL med `/api/` tilføjet:

```
https://your-enhance-panel.com/api/
```

**Vigtigt:** Stien `/api/` er påkrævet. Almindelige fejl inkluderer:
- At bruge kun domænet uden `/api/`
- At bruge HTTP i stedet for HTTPS (HTTPS er nødvendigt for sikkerhed)

## Konfiguration

### Nødvendige konstanter

Tilføj følgende konstanter til din `wp-config.php` fil:

// Forbedring af integration med Control Panel
define('WU_ENHANCE_API_TOKEN', 'din-bearer-token-her');
define('WU_ENHANCE_API_URL', 'https://din-enhance-panel.com/api/');
define('WU_ENHANCE_SERVER_ID', 'din-server-uuid-her');

### Opsætning via Integration Wizard

1. I din WordPress admin, gå til **Ultimate Multisite** > **Indstillinger**
2. Gå til fanen **Integrationer**
3. Find **Enhance Control Panel Integration** og klik på **Konfiguration**
4. Wizardet vil guide dig gennem opsætningen:
   - **Trin 1:** Introduktion og overblik over funktionerne
   - **Trin 2:** Indtast dine API-oplysninger (Token, API URL, Server ID)
   - **Trin 3:** Test forbindelsen
   - **Trin 4:** Gennemse og aktiver

Du kan vælge at:
- Lad wizardet automatisk indsætte de konstante i din `wp-config.php` fil
- Kopiere definitionerne af de konstante og tilføje dem manuelt

## Yderligere WordPress Konfiguration

Baseret på community feedback ([Diskussion #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)), kan du muligvis skulle konfigurere disse yderligere indstillinger:

### .htaccess Konfiguration

Hvis du oplever problemer med domænemapping:
1. Slet den originale Enhance `.htaccess` fil
2. Erstat den med den standard WordPress Multisite `.htaccess` fil

### Cookie Konstanten

Tilføj disse konstante til `wp-config.php` for at sikre korrekt cookie-håndtering på tværs af mappede domæner:

```php
define('COOKIE_DOMAIN', $_SERVER['HTTP_HOST']);
define('COOKIEPATH', '/');
define('ADMIN_COOKIE_PATH', '/');
```

## Hvordan det virker

### Når en domæne er mappet

1. En bruger mapper en custom domæne i Ultimate Multisite (eller en ny side oprettes i subdomain mode)
2. Integrationen sender en POST-anmodning til Enhances API: `/servers/{server_id}/domains`
3. Enhance tilføjer domænet til din serverkonfiguration
4. Når DNS opløses til din server, provisionerer Enhance automatisk et SSL-certifikat via LetsEncrypt
5. Domænet bliver aktivt med HTTPS

### Når en Domæne fjernes

1. En domænemapping slettes i Ultimate Multisite
2. Integrationen forespørger Enhance for at finde domænets ID
3. En DELETE-anmodning sendes til: `/servers/{server_id}/domains/{domain_id}`
4. Enhance fjerner domænet fra din serverkonfiguration

### DNS- og SSL-tjek

Ultimate Multisite inkluderer indbygget DNS- og SSL-tjek:
- Du kan konfigurere tjekintervallet i **Domain Mapping Settings** (standard: 300 sekunder/5 minutter)
- Systemet verificerer DNS-propagation, før et domæne markeres som aktivt
- SSL-certifikatets gyldighed tjekkes automatisk
- Enhance håndterer SSL-provisionering automatisk, så manuel SSL-konfiguration ikke er nødvendig

## Verificering af Opsætning

### Test forbindelsen

1. I Integration Wizard skal du bruge trinnet **Test Connection**
2. Plugin'et vil forsøge at liste domæner på din server
3. En succesmeddelelse bekræfter:
   - API-credentials er korrekte
   - API-URL er tilgængelig
   - Server ID er gyldigt
   - Tilladelser er korrekt indstillet

### Efter at have kortlagt en domæne

1. Kortlæg et testdomæne i Ultimate Multisite
2. Tjek Ultimate Multisite logs (**Ultimate Multisite** > **Logs** > **integration-enhance**)
3. Verificer i Enhance Control Panel, at domænet er blevet tilføjet:
   - Gå til **Servers** > **Din Server** > **Domains**
   - Det nye domæne skal fremgå på listen
4. Når DNS'en har spredt sig, bekræft, at SSL automatisk er provisioneret

## Fejlfinding

### Problemer med API-forbindelse

**Fejl: "Failed to connect to Enhance API" (Kunne ikke forbinde til Enhance API)**
- Tjek, at `WU_ENHANCE_API_URL` slutter med `/api/`
- Sør for, at du bruger HTTPS i stedet for HTTP
- Kontroller, om Enhance-panelet er tilgængeligt fra din WordPress-server
- Bekræft, at der ikke er nogen firewallregler, der blokerer forbindelsen

**Fejl: "Enhance API Token not found" (Enhance API-tokenet blev ikke fundet)**
- Sør for, at `WU_ENHANCE_API_TOKEN` er defineret i `wp-config.php`
- Tjek, om tokenet er blevet slettet eller udløbet i Enhance
- Kontroller for stavefejl i tokenværdien

**Fejl: "Server ID is not configured" (Server-ID er ikke konfigureret)**
- Bekræft, at `WU_ENHANCE_SERVER_ID` er defineret i `wp-config.php`
- Sør for, at Server ID'et har et gyldigt UUID-format
- Bekræft, at serveren eksisterer i dit Enhance-panel

### Domæne tilføjet (ikke fundet)

**Tjek logs:**
1. Gå til **Ultimate Multisite** > **Logs**
2. Filtrer efter **integration-enhance**
3. Kig efter fejlmeddelelser, der indikerer problemet

**Almindelige årsager:**
- Forkert domænenavnformat
- Domænet eksisterer allerede i Enhance
- Utilstrækkelige API-tilladelser (sørg for, at tokenet har System Administrator rolle)
- Server ID matcher ikke den faktiske server i Enhance

### SSL-certifikatsproblemer

**SSL provisionering fejler:**
- Tjek, om DNS peger på din servers IP-adresse
- Kontroller, om domænet opløses korrekt: `nslookup yourdomain.com`
- Enhance kræver, at DNS'en opløses, før den kan provisionere SSL
- Provisionering af SSL tager typisk 5-10 minutter efter DNS-propagation
- Tjek Enhance Control Panel logs for SSL-specifikke fejl

**Manuel SSL-fejlfinding i Enhance:**
1. Gå til **Servers** > **Din Server** > **Domæner**
2. Find dit domæne og tjek dets SSL-status
3. Du kan manuelt udløse SSL-provisionering, hvis det er nødvendigt

### DNS Tjekinterval

Hvis domæner eller SSL-certifikater tager for lang tid at aktivere:
1. Gå til **Ultimate Multisite** > **Indstillinger** > **Domænemapping**
2. Find indstillingen **DNS Check Interval** (DNS-tjek intervaller)
3. Juster den fra standardværdien 300 sekunder til en lavere værdi (minimum: 10 sekunder)
4. **Bemærk:** Lavere intervaller betyder hyppigere tjek, men højere serverbelastning

### Autentifikationsfejl

**HTTP 401/403 fejl:**
- Generer dit API-token igen i Enhance
- Tjek, at tokenet har rollen **System Administrator**
- Kontroller, at tokenet ikke er udløbet
- Sørg for, at du bruger den korrekte Organization ID (selvom det typisk ikke kræves i URL'en)

### Loganalyse

Aktiver detaljeret logning:
```php
// Tilføj til wp-config.php for forbedret fejlfinding
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
```

Tjek derefter loggene på:
- Ultimate Multisite logs: **Ultimate Multisite** > **Logs**
- WordPress debug log: `wp-content/debug.log`
- Enhance panel logs: Tilgængelige i Enhances admin-grænseflade

## API Reference

### Autentifikation
Alle API-anmodninger bruger Bearer token autentifikation:
```
Authorization: Bearer DIN_TOKEN_HER
```

### Almindeligt anvendte endpoints

**Liste servere:**
```
GET /servers
```

**Liste domæner på en server:**
```
GET /servers/{server_id}/domains
```

**Tilføj et domæne:**
```
POST /servers/{server_id}/domains
Body: {"domain": "example.com"}
```

**Slet et domæne:**
```
DELETE /servers/{server_id}/domains/{domain_id}
```

### Fulde API-dokumentation
Fuld API-dokumentation: [https://apidocs.enhance.com](https://apidocs.enhance.com)

## Bedste praksis

### Sikkerhed
- **Commit aldrig API tokens til version control**
- Gem tokens i `wp-config.php`, som skal udelukkes fra Git
- Brug tokens med de passende rettigheder (System Administrator for fuld integration)
- Indstil udløbsdatoer for tokens i produktionsmiljøer
- Roter tokens periodisk

### Ydeevne
- Brug standard DNS check interval (300 sekunder) for at undgå overdreven API-kald
- Overvåg Enhance serverressourcer, når du kører store domæneoperationer
- Overvej at sprede tilføjelser af domæner, hvis du mapper mange domæner på én gang

### Overvågning
- Tjek regelmæssigt Ultimate Multisite logs for integrationsfejl
- Opsæt overvågning for mislykkede domæne-tilføjelser
- Verificer, at SSL-certifikater provisioneres korrekt
- Hold øje med Enhance serverkapacitet og domæneniveauer

## Yderligere ressourcer

- **Enhance Officiel Dokumentation:** [https://enhance.com/docs](https://enhance.com/docs)
- **Enhance API Dokumentation:** [https://apidocs.enhance.com](https://apidocs.enhance.com)
- **Enhance Community Forum:** [https://community.enhance.com](https://community.enhance.com)
- **GitHub Diskussion:** [Issue #265 - Enhance Integration Tips](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)
- **Ultimate Multisite Domænemapping Guide:** Se wiki-siden "Hvordan man konfigurerer domænemapping v2"

## Support

Hvis du støder på problemer:
1. Tjek Fejlfinding-sektionen ovenfor
2. Gennemgå Ultimate Multisite logs
3. Konsulter [GitHub Diskussionerne](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions)
4. Kontakt Enhance support for panel-specifikke problemer
5. Opret en ny diskussion med detaljerede fejllogs for fællesskabshjælp

## Bemærkninger

- Denne integration håndterer kun domænealias; Enhance administrerer SSL automatisk
- Integrationen understøtter både tilpassede domænemappinger og sites baseret på subdomæner
- Automatisk oprettelse af www subdomænen kan konfigureres i indstillinger for domænemapping
- Enhance understøtter i øjeblikket Apache-konfigurationer (LiteSpeed Enterprise er tilgængelig)
- Fjernelse af et domæne fra Ultimate Multisite vil fjerne domænet fra Enhance, men det kan muligvis ikke slette de tilknyttede SSL-certifikater med det samme

---
title: Förbättra kontrollpanelsintegration
sidebar_position: 2
_i18n_hash: 2b4047e6b7b32a1c96a0b562e251cbfb
---
# Integration av Enhance Control Panel

## Översikt
Enhance är en modern kontrollpanel som erbjuder kraftfull automatisering och hantering av webbhotell. Den här integrationen möjliggör automatisk domänsynkronisering och hantering av SSL-certifikat mellan Ultimate Multisite och Enhance Control Panel.

**Relaterad diskussion:** Se [GitHub Discussion #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265) för tips från användare och ytterligare information.

## Funktioner
- Automatisk domänsynkronisering när domäner mappas i Ultimate Multisite
- Automatisk SSL-certifikatutfärdande via LetsEncrypt när DNS fungerar
- Stöd för subdomäner för nätverk som körs i subdomänläge
- Domänborttagning när mappningar tas bort
- Anslutningstestning för att verifiera API-uppgifter

## Krav

### Systemkrav
- Enhance Control Panel installerad och tillgänglig
- WordPress Multisite-installation som hostas på eller är ansluten till en Enhance-server
- Apache-webbserver (Enhance stöder för närvarande Apache-konfigurationer; LiteSpeed Enterprise finns tillgängligt till reducerat pris)

### API-åtkomst
Du måste ha administratörsåtkomst till Enhance Control Panel för att kunna skapa API-tokens.

## Hämta dina API-uppgifter

### 1. Skapa en API-token

1. Logga in på din Enhance Control Panel som administratör
2. Klicka på **Settings** i navigeringsmenyn
3. Gå till **Access Tokens**
4. Klicka på **Create Token**
5. Ge din token ett beskrivande namn (t.ex. "Ultimate Multisite Integration")
6. Tilldela rollen **System Administrator**
7. För utgångsdatum:
   - Lämna tomt om du vill att token aldrig ska gå ut
   - Eller ange ett specifikt utgångsdatum av säkerhetsskäl
8. Klicka på **Create**

Efter skapandet visas din **Access Token** och ditt **Organization ID**. **Spara dessa omedelbart** eftersom token bara visas en gång.

### 2. Hämta ditt Organization ID

Organization ID visas på sidan Access Tokens i en blå informationsruta med texten "Org ID: {ditt_id}".

Organization ID är ett UUID formaterat som: `d8554b6d-5d0d-6719-009b-fec1189aa8f3`

Du kan också hitta en kunds Organization ID genom att:
1. Gå till sidan **Customers**
2. Klicka på **Manage customer** för aktuell kund
3. Titta på URL:en – Organization ID är de alfanumeriska tecknen efter `/customers/`

### 3. Hämta ditt Server ID

För att hitta ditt Server ID (krävs för domänoperationer):

1. I Enhance Control Panel, navigera till **Servers**
2. Klicka på servern där din WordPress-installation körs
3. Server ID (UUID-format) syns i URL:en eller serverinformationen
4. Alternativt kan du använda API:et för att lista servrar:

```bash
curl -s -X GET https://your-enhance-panel.com/api/servers \
  -H "Accept: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" | jq
```

Server ID följer UUID-formatet: `00000000-0000-0000-0000-000000000000`

### 4. Hämta din API-URL

Din API-URL är din Enhance Control Panel-URL med `/api/` tillagt:

```
https://your-enhance-panel.com/api/
```

**Viktigt:** Sökvägen `/api/` krävs. Vanliga misstag inkluderar:
- Att bara använda domänen utan `/api/`
- Att använda HTTP istället för HTTPS (HTTPS krävs av säkerhetsskäl)

## Konfiguration

### Obligatoriska konstanter

Lägg till följande konstanter i din `wp-config.php`-fil:

```php
// Enhance Control Panel Integration
define('WU_ENHANCE_API_TOKEN', 'your-bearer-token-here');
define('WU_ENHANCE_API_URL', 'https://your-enhance-panel.com/api/');
define('WU_ENHANCE_SERVER_ID', 'your-server-uuid-here');
```

### Konfiguration via integrationsguiden

1. I din WordPress-admin, gå till **Ultimate Multisite** > **Settings**
2. Navigera till fliken **Integrations**
3. Hitta **Enhance Control Panel Integration** och klicka på **Configuration**
4. Guiden leder dig genom installationen:
   - **Steg 1:** Introduktion och funktionsöversikt
   - **Steg 2:** Ange dina API-uppgifter (Token, API URL, Server ID)
   - **Steg 3:** Testa anslutningen
   - **Steg 4:** Granska och aktivera

Du kan välja att:
- Låta guiden automatiskt lägga in konstanterna i din `wp-config.php`-fil
- Kopiera konstantdefinitionerna och lägga till dem manuellt

## Ytterligare WordPress-konfiguration

Baserat på feedback från användare ([Discussion #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)) kan du behöva konfigurera dessa ytterligare inställningar:

### .htaccess-konfiguration

Om du upplever problem med domänmappning:
1. Ta bort den ursprungliga Enhance `.htaccess`-filen
2. Ersätt den med standard WordPress Multisite `.htaccess`-filen

### Cookie-konstanter

Lägg till dessa konstanter i `wp-config.php` för att säkerställa korrekt cookie-hantering över mappade domäner:

```php
define('COOKIE_DOMAIN', $_SERVER['HTTP_HOST']);
define('COOKIEPATH', '/');
define('ADMIN_COOKIE_PATH', '/');
```

## Så fungerar det

### När en domän mappas

1. En användare mappar en egen domän i Ultimate Multisite (eller en ny webbplats skapas i subdomänläge)
2. Integrationen skickar en POST-förfrågan till Enhances API: `/servers/{server_id}/domains`
3. Enhance lägger till domänen i din serverkonfiguration
4. När DNS pekar mot din server utfärdar Enhance automatiskt ett SSL-certifikat via LetsEncrypt
5. Domänen blir aktiv med HTTPS

### När en domän tas bort

1. En domänmappning raderas i Ultimate Multisite
2. Integrationen frågar Enhance för att hitta domänens ID
3. En DELETE-förfrågan skickas till: `/servers/{server_id}/domains/{domain_id}`
4. Enhance tar bort domänen från din serverkonfiguration

### DNS- och SSL-kontroll

Ultimate Multisite har inbyggd DNS- och SSL-kontroll:
- Du kan konfigurera kontrollintervallet i **Domain Mapping Settings** (standard: 300 sekunder/5 minuter)
- Systemet verifierar DNS-spridning innan en domän markeras som aktiv
- SSL-certifikatets giltighet kontrolleras automatiskt
- Enhance hanterar SSL-utfärdande automatiskt, så manuell SSL-konfiguration krävs inte

## Verifiera installationen

### Testa anslutningen

1. I integrationsguiden, använd steget **Test Connection**
2. Pluginet försöker lista domäner på din server
3. Ett framgångsmeddelande bekräftar:
   - API-uppgifterna är korrekta
   - API-URL:en är tillgänglig
   - Server ID är giltigt
   - Behörigheter är korrekt inställda

### Efter mappning av en domän

1. Mappa en testdomän i Ultimate Multisite
2. Kontrollera Ultimate Multisite-loggarna (**Ultimate Multisite** > **Logs** > **integration-enhance**)
3. Verifiera i Enhance Control Panel att domänen lades till:
   - Gå till **Servers** > **Your Server** > **Domains**
   - Den nya domänen bör visas i listan
4. När DNS har spridit sig, verifiera att SSL utfärdas automatiskt

## Felsökning

### Problem med API-anslutning

**Fel: "Failed to connect to Enhance API"**
- Verifiera att `WU_ENHANCE_API_URL` inkluderar `/api/` i slutet
- Se till att du använder HTTPS, inte HTTP
- Kontrollera att Enhance-panelen är tillgänglig från din WordPress-server
- Verifiera att inga brandväggsregler blockerar anslutningen

**Fel: "Enhance API Token not found"**
- Se till att `WU_ENHANCE_API_TOKEN` är definierad i `wp-config.php`
- Verifiera att din token inte har raderats eller gått ut i Enhance
- Kontrollera stavfel i token-värdet

**Fel: "Server ID is not configured"**
- Verifiera att `WU_ENHANCE_SERVER_ID` är definierad i `wp-config.php`
- Se till att Server ID är i giltigt UUID-format
- Bekräfta att servern finns i din Enhance-panel

### Domän läggs inte till

**Kontrollera loggarna:**
1. Gå till **Ultimate Multisite** > **Logs**
2. Filtrera på **integration-enhance**
3. Leta efter felmeddelanden som indikerar problemet

**Vanliga orsaker:**
- Ogiltigt domännamnsformat
- Domänen finns redan i Enhance
- Otillräckliga API-behörigheter (se till att din token har rollen System Administrator)
- Server ID matchar inte den faktiska servern i Enhance

### Problem med SSL-certifikat

**SSL utfärdas inte:**
- Verifiera att DNS pekar mot din servers IP-adress
- Kontrollera att domänen pekar korrekt: `nslookup yourdomain.com`
- Enhance kräver att DNS fungerar innan SSL kan utfärdas
- SSL-utfärdande tar vanligtvis 5-10 minuter efter DNS-spridning
- Kontrollera Enhance Control Panel-loggar för SSL-specifika fel

**Manuell SSL-felsökning i Enhance:**
1. Gå till **Servers** > **Your Server** > **Domains**
2. Hitta din domän och kontrollera dess SSL-status
3. Du kan manuellt starta SSL-utfärdande vid behov

### DNS-kontrollintervall

Om domäner eller SSL-certifikat tar för lång tid att aktiveras:
1. Gå till **Ultimate Multisite** > **Settings** > **Domain Mapping**
2. Hitta inställningen **DNS Check Interval**
3. Ändra från standardvärdet 300 sekunder till ett lägre värde (minst: 10 sekunder)
4. **Obs:** Lägre intervall innebär fler kontroller men högre serverbelastning

### Autentiseringsfel

**HTTP 401/403-fel:**
- Skapa en ny API-token i Enhance
- Verifiera att din token har rollen **System Administrator**
- Kontrollera att din token inte har gått ut
- Se till att du använder rätt Organization ID (även om det vanligtvis inte krävs i URL:en)

### Logganalys

Aktivera detaljerad loggning:
```php
// Lägg till i wp-config.php för utökad felsökning
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
```

Kontrollera sedan loggar på:
- Ultimate Multisite-loggar: **Ultimate Multisite** > **Logs**
- WordPress debug-logg: `wp-content/debug.log`
- Enhance-panelloggar: Tillgängliga i Enhances adminpanel

## API-referens

### Autentisering
Alla API-förfrågningar använder Bearer token-autentisering:
```
Authorization: Bearer YOUR_TOKEN_HERE
```

### Vanliga endpoints som används

**Lista servrar:**
```
GET /servers
```

**Lista domäner på en server:**
```
GET /servers/{server_id}/domains
```

**Lägg till en domän:**
```
POST /servers/{server_id}/domains
Body: {"domain": "example.com"}
```

**Ta bort en domän:**
```
DELETE /servers/{server_id}/domains/{domain_id}
```

### Fullständig API-dokumentation
Komplett API-dokumentation: [https://apidocs.enhance.com](https://apidocs.enhance.com)

## Bästa praxis

### Säkerhet
- **Checka aldrig in API-tokens i versionshantering**
- Lagra tokens i `wp-config.php` som bör exkluderas från Git
- Använd tokens med lämpliga behörigheter (System Administrator för full integration)
- Sätt utgångsdatum för tokens i produktionsmiljöer
- Rotera tokens regelbundet

### Prestanda
- Använd standard DNS-kontrollintervall (300 sekunder) för att undvika överflödiga API-anrop
- Övervaka Enhance-serverresurser vid storskaliga domänoperationer
- Överväg att sprida ut domäntillägg om du mappar många domäner samtidigt

### Övervakning
- Kontrollera regelbundet Ultimate Multisite-loggar för integrationsfel
- Sätt upp övervakning för misslyckade domäntillägg
- Verifiera att SSL-certifikat utfärdas korrekt
- Håll koll på Enhance-serverkapacitet och domängränser

## Ytterligare resurser

- **Officiell Enhance-dokumentation:** [https://enhance.com/docs](https://enhance.com/docs)
- **Enhance API-dokumentation:** [https://apidocs.enhance.com](https://apidocs.enhance.com)
- **Enhance Community Forum:** [https://community.enhance.com](https://community.enhance.com)
- **GitHub-diskussion:** [Issue #265 - Enhance Integration Tips](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)
- **Ultimate Multisite Domain Mapping Guide:** Se wikisidan "How to Configure Domain Mapping v2"

## Support

Om du stöter på problem:
1. Kolla avsnittet Felsökning ovan
2. Granska Ultimate Multisite-loggarna
3. Konsultera [GitHub Discussions](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions)
4. Kontakta Enhance-support för panelspecifika problem
5. Skapa en ny diskussion med detaljerade felloggar för hjälp från användare

## Anteckningar

- Denna integration hanterar endast domänalias; Enhance hanterar SSL automatiskt
- Integrationen stöder både anpassade domänmappningar och subdomänbaserade webbplatser
- Automatiskt skapande av www-subdomän kan konfigureras i inställningarna för Domain Mapping
- Enhance stöder för närvarande Apache-konfigurationer (LiteSpeed Enterprise finns tillgängligt)
- Domänborttagning från Ultimate Multisite tar bort domänen från Enhance men tillhörande SSL-certifikat kanske inte raderas omedelbart

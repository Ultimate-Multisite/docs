---
title: CyberPanel Integration
sidebar_position: 21
_i18n_hash: d0607874b556c583dac2aaa33ba1dc1d
---
# CyberPanel Integration

Den här guiden förklarar hur du konfigurerar Ultimate Multisite CyberPanel-integrationen så att domäner som mappas i ditt nätverk automatiskt läggs till (och tas bort) som virtuella hosts i CyberPanel, med valfri auto-SSL-provisionering via Let's Encrypt.

## Vad det gör

*   När en domän mappas i Ultimate Multisite anropar integrationen CyberPanel API för att skapa en virtuell host för den domänen.
*   När en domänmappning tas bort anropar integrationen API:et för att ta bort den motsvarande virtuella hosten.
*   När auto-SSL är aktiverat utlöser integrationen omedelbart utfärdandet av Let's Encrypt-certifikat efter att den virtuella hosten har skapats.
*   Lägger/tar valfritt bort `www.` alias beroende på inställningen "Auto-create www subdomain" i Domain Mapping-inställningarna.

## Förutsättningar

*   En fungerande CyberPanel-instans (v2.3 eller senare rekommenderas) som är nåbar från din WordPress-server.
*   En befintlig webbplats i CyberPanel som redan hanterar roten för ditt WordPress-nätverk. Integrationen kopplar nya virtuella hosts till denna server.
*   Att CyberPanel API-åtkomst är aktiverad. Autentisering använder ditt CyberPanel-administratörsnamn och lösenord.
*   Dina DNS-poster för de mappade domänerna måste redan peka till din servers IP-adress innan auto-SSL kan utfärda ett giltigt certifikat.

## Krav

Följande konstanter måste definieras i din `wp-config.php`-fil:

```php
define('WU_CYBERPANEL_HOST', 'https://your-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'your_admin_username');
define('WU_CYBERPANEL_PASSWORD', 'your_admin_password');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

Valfritt kan du också definiera:

```php
define('WU_CYBERPANEL_AUTO_SSL', true);          // Standard: true — utfärdar Let's Encrypt SSL efter domänskapande
define('WU_CYBERPANEL_PHP_VERSION', 'PHP 8.2');  // Standard: PHP 8.2
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com'); // Används för kontakt vid SSL-certifikat
```

## Installationsanvisningar

### 1. Aktivera CyberPanel API

1. Logga in på ditt CyberPanel-dashboard som administratör.
2. Gå till **Security** > **SSL** och bekräfta att SSL är aktivt på själva CyberPanel-gränssnittet (krav för säkra API-anrop).
3. CyberPanel API finns som standard på `https://your-server-ip:8090/api/`. Inga ytterligare steg behövs för att aktivera det – det är aktiverat som standard för administratörs-användare.

### 2. Lägg till konstanter i wp-config.php

Lägg till följande konstanter i din `wp-config.php`-fil före raden `/* That's all, stop editing! */`:

```php
define('WU_CYBERPANEL_HOST', 'https://your-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'admin');
define('WU_CYBERPANEL_PASSWORD', 'your_secure_password');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

För att aktivera auto-SSL (rekommenderas):

```php
define('WU_CYBERPANEL_AUTO_SSL', true);
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com');
```

### 3. Aktivera integrationen

1. I ditt WordPress-nätverksadmin går du till **Ultimate Multisite** > **Settings**.
2. Navigera till fliken **Domain Mapping**.
3. Scrolla ner till **Host Integrations**.
4. Aktivera **CyberPanel**-integrationen.
5. Klicka på **Save Changes**.

### 4. Verifiera anslutningen

Använd den inbyggda anslutningstestet i inställningsguiden:

1. Gå till **Ultimate Multisite** > **Settings** > **Domain Mapping** > **Host Integrations** > **CyberPanel**.
2. Klicka på **Test Connection**.
3. Ett framgångsmeddelande bekräftar att pluginet kan nå CyberPanel API och autentisera korrekt.

## Hur det fungerar

### Domain Mapping

När en domän mappas i Ultimate Multisite:

1. Skickar integrationen en `POST`-förfrågan till `/api/createWebsite` på din CyberPanel-värd.
2. CyberPanel skapar en ny virtuell host för domänen under den konfigurerade paketet.
3. Dokumentroten ställs in att peka till din WordPress-nätverksrotkatalog.
4. När domänmappningen tas bort anropar integrationen `/api/deleteWebsite` för att städa upp den virtuella hosten.

### Auto-SSL

När `WU_CYBERPANEL_AUTO_SSL` är `true`:

1. Efter att den virtuella hosten har skapats anropar integrationen `/api/issueSSL` för domänen.
2. CyberPanel begär ett Let's Encrypt-certifikat med hjälp av ACME HTTP-01-utmaningen.
3. Certifikatet förnyas automatiskt av CyberPanel innan utgångsdatumet.

> **Viktigt:** DNS måste vara fullständigt propagerat till din servers IP-adress innan Let's Encrypt kan validera domänen. Om utfärdandet av SSL misslyckas omedelbart efter mappning, vänta på DNS-propagation och utlös SSL igen från CyberPanel-dashboarden under **SSL** > **Manage SSL**.

### www Subdomain

Om **Auto-create www subdomain** är aktiverat i dina Domain Mapping-inställningar skapar integrationen också ett virtuellt host-alias för `www.<domän>` och, när auto-SSL är på, utfärdar ett certifikat som täcker både apex- och www-varianterna.

### Email Forwarders

När tillägget [Ultimate Multisite: Emails](../../addons/ultimate-multisite-emails/) är aktivt kan CyberPanel också tillhandahålla kundens e-post-forwarders. Forwarders dirigerar meddelanden från en domänadress till en annan inkorg utan att skapa en fullständig brevlåda, vilket är användbart för alias som `info@customer-domain.test` eller `support@customer-domain.test`.

Innan du aktiverar forwarders för kunder:

1. Bekräfta att CyberPanel-konstanterna ovan är konfigurerade och att anslutningstestet lyckas.
2. Aktivera CyberPanel e-postleverantören i Emails-tilläggens inställningar.
3. Bekräfta att kunddomänen redan existerar i CyberPanel innan du skapar forwardern.
4. Skapa en test-forwarder och skicka ett meddelande genom den innan du erbjuder funktionen på produktionsplaner.

Om skapandet av forwarder misslyckas, kontrollera först Ultimate Multisite activity logs, och bekräfta sedan i CyberPanel att käll-domänen existerar och att API-användaren har behörigheter för e-posthantering.

## Konfigurationsreferens

| Konstant | Krävs | Standard | Beskrivning |
|---|---|---|---|
| `WU_CYBERPANEL_HOST` | Ja | — | Full URL till din CyberPanel-instans inklusive port, t.ex. `https://cp.example.com:8090` |
| `WU_CYBERPANEL_USERNAME` | Ja | — | CyberPanel administratörsnamn |
| `WU_CYBERPANEL_PASSWORD` | Ja | — | CyberPanel administratörslösenord |
| `WU_CYBERPANEL_PACKAGE` | Ja | `Default` | CyberPanel-värdpaket som ska tilldelas nya virtuella hosts |
| `WU_CYBERPANEL_AUTO_SSL` | Nej | `true` | Utfärda ett Let's Encrypt SSL-certifikat efter domänskapande |
| `WU_CYBERPANEL_PHP_VERSION` | Nej | `PHP 8.2` | PHP-version för nya virtuella hosts (måste matcha en version installerad i CyberPanel) |
| `WU_CYBERPANEL_EMAIL` | Nej | — | Kontakt-e-post för SSL-certifikatregistrering |

## Viktiga anteckningar

*   CyberPanels API använder session-baserad token-autentisering. Integrationen hanterar token-inhämtningen automatiskt vid varje API-anrop.
*   Ditt CyberPanel-administratörskonto måste ha behörighet att skapa och ta bort webbplatser.
*   CyberPanel körs som standard på port `8090`. Om din server använder en brandvägg, se till att denna port är tillgänglig från WordPress-applikationsservern.
*   Integrationen hanterar inte DNS-poster. Du måste peka domänens DNS till din servers IP-adress innan du mappar domänen i Ultimate Multisite.
*   Om du använder OpenLiteSpeed (OLS) utlöses en smidig omstart automatiskt efter ändringar i virtuella hosts. Ingen manuell intervention behövs.

## Felsökning

### API Connection Refused

*   Verifiera att port `8090` är öppen i din servers brandvägg.
*   Bekräfta att värdet för `WU_CYBERPANEL_HOST` inkluderar det korrekta protokollet (`https://`) och porten.
*   Kontrollera att ditt CyberPanel SSL-certifikat är giltigt; självsignerade certifikat kan orsaka TLS-verifikationsfel. Ställ in `WU_CYBERPANEL_VERIFY_SSL` till `false` endast i betrodda privata nätverksmiljöer.

### Authentication Errors

*   Bekräfta att dina `WU_CYBERPANEL_USERNAME` och `WU_CYBERPANEL_PASSWORD` är korrekta genom att logga in på CyberPanel direkt.
*   CyberPanel låser konton efter upprepade misslyckade inloggningsförsök. Kontrollera **Security** > **Brute Force Monitor** i CyberPanel om låsningar inträffar.

### Domain Not Created

*   Kontrollera Ultimate Multisite activity log (**Ultimate Multisite** > **Activity Logs**) efter API-felmeddelanden.
*   Verifiera att paketet definierat i `WU_CYBERPANEL_PACKAGE` existerar i CyberPanel (**Packages** > **List Packages**).
*   Se till att domänen inte redan är registrerad som en webbplats i CyberPanel – dubbel skapelse av webbplatser returnerar ett fel.

### SSL Certificate Not Issued

*   Bekräfta att DNS har fullt propagerat: `dig +short your-domain.com` bör returnera din servers IP.
*   Let's Encrypt har hastighetsbegränsningar. Om du nyligen har utfärdat flera certifikat för samma domän, vänta innan du försöker igen.
*   Kontrollera CyberPanel SSL-loggarna under **Logs** > **Error Logs** för detaljer om fel vid certifikatutfärdandet.
*   Som fallback kan du utfärda SSL manuellt från CyberPanel: **SSL** > **Manage SSL** > välj domänen > **Issue SSL**.

## Referenser

- CyberPanel API Documentation: https://docs.cyberpanel.net/docs/category/api
- CyberPanel SSL Management: https://docs.cyberpanel.net/docs/cyberpanel/SSL/manageSSL
- Let's Encrypt Rate Limits: https://letsencrypt.org/docs/rate-limits/

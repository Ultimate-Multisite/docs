---
title: Hostinger (hPanel) Integration
sidebar_position: 7
_i18n_hash: ce631be523b8bbe2bf3156a106abfa3d
---
# Hostinger (hPanel) Integration {#hostinger-hpanel-integration}

## Översikt {#overview}

Hostinger är en populär webbhotellleverantör med ett modernt kontrollpanel som kallas hPanel. Ultimate Multisite Hostinger-integrationen möjliggör automatisk domänsynkronisering mellan Ultimate Multisite och Hostingers hPanel, vilket låter dig hantera domänmappningar och underdomäner direkt från ditt WordPress-admin utan att behöva göra det manuellt.

## Funktioner {#features}

- Automatisk skapelse av addon-domäner i hPanel
- Automatisk skapelse av underdomäner i hPanel (för underdomän-multisite-installationer)
- Borttagning av domäner när mappningar raderas
- Smidig integration med hPanels API för domänhantering

## Krav {#requirements}

För att använda Hostinger-integrationen behöver du:

1. Ett Hostinger-konto med åtkomst till hPanel
2. Ett API-token från Hostinger
3. Följande konstanter definierade i din `wp-config.php`-fil:

```php
define('WU_HOSTINGER_API_TOKEN', 'your_hostinger_api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'your_hostinger_account_id');
```

Valfritt kan du också definiera:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1'); // Standard API-slutpunkt
```

## Inställningsanvisningar {#setup-instructions}

### 1. Generera ditt Hostinger API-token {#1-generate-your-hostinger-api-token}

1. Logga in på ditt Hostinger-konto och få åtkomst till hPanel
2. Navigera till **Account Settings** → **API Tokens**
3. Klicka på **Create New Token**
4. Ge ditt token ett beskrivande namn (t.ex. "Ultimate Multisite")
5. Välj nödvändiga behörigheter:
   - Domain management
   - Subdomain management
6. Kopiera det genererade tokenet och spara det säkert

### 2. Hitta ditt kontol-ID {#2-find-your-account-id}

1. I hPanel, gå till **Account Settings** → **Account Information**
2. Ditt kontol-ID visas på den här sidan
3. Kopiera och spara detta ID för nästa steg

### 3. Lägg till konstanter i wp-config.php {#3-add-constants-to-wp-configphp}

Lägg till följande konstanter i din `wp-config.php`-fil:

```php
define('WU_HOSTINGER_API_TOKEN', 'your_hostinger_api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'your_hostinger_account_id');
```

Om ditt Hostinger-konto använder en annan API-slutpunkt kan du anpassa den:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1');
```

### 4. Aktivera integrationen {#4-enable-the-integration}

1. I ditt WordPress-admin, gå till **Ultimate Multisite > Settings**
2. Navigera till fliken **Domain Mapping**
3. Scrolla ner till **Host Integrations**
4. Aktivera integrationen **Hostinger (hPanel)**
5. Klicka på **Save Changes**

## Hur det fungerar {#how-it-works}

### Addon-domäner {#addon-domains}

När du mappar en domän i Ultimate Multisite:

1. Skickar integrationen en begäran till Hostingers API för att lägga till domänen som en addon-domän
2. Domänen konfigureras att peka till din rotkatalog
3. När en domänmappning tas bort, tar integrationen automatiskt bort addon-domänen från hPanel

### Underdomäner {#subdomains}

För underdomän-multisite-installationer, när en ny webbplats skapas:

1. Extraherar integrationen underdomän-delen från den fullständiga domänen
2. Den skickar en begäran till Hostingers API för att lägga till underdomänen
3. Underdomänen konfigureras att peka till din rotkatalog

## Viktiga anteckningar {#important-notes}

- Integrationen använder Hostingers REST API för att kommunicera med ditt konto
- Ditt API-token måste ha de nödvändiga behörigheterna för domän- och underdomänhantering
- Integrationen hanterar inte DNS-konfiguration; domäner måste redan peka till ditt Hostinger-konto
- API-begäranden görs säkert över HTTPS
- Håll ditt API-token hemligt och dela det aldrig offentligt

## Felsökning {#troubleshooting}

### Problem med API-anslutning {#api-connection-issues}

- Verifiera att ditt API-token är korrekt och inte har gått ut
- Kontrollera att ditt kontol-ID är korrekt
- Se till att ditt API-token har de nödvändiga behörigheterna för domänhantering
- Verifiera att ditt Hostinger-konto är aktivt och i gott skick

### Domän läggs inte till {#domain-not-added}

- Kontrollera Ultimate Multisite-loggarna efter eventuella felmeddelanden
- Verifiera att domänen inte redan är tillagd i ditt Hostinger-konto
- Se till att ditt Hostinger-konto inte har nått sin gräns för addon-domäner
- Bekräfta att domänen är korrekt pekande till dina Hostinger-namnservrar

### Problem med SSL-certifikat {#ssl-certificate-issues}

- Integrationen hanterar inte utfärdandet av SSL-certifikat
- Hostinger tillhandahåller vanligtvis gratis SSL-certifikat via AutoSSL
- Du kan hantera SSL-certifikat direkt i hPanel under **SSL/TLS**
- Alternativt, använd Let's Encrypt med Hostingers AutoSSL-funktion

## Support {#support}

För ytterligare hjälp med Hostinger-integrationen, vänligen hänvisa till:

- [Hostinger API Documentation](https://support.hostinger.com/en/articles/4286-api-documentation)
- [Ultimate Multisite Documentation](/)
- [Ultimate Multisite Support](https://ultimatemultisite.com/support)

---
title: cPanel-integration
sidebar_position: 5
_i18n_hash: ba79fa3cffb0f29c4eda9bdf59244a2f
---
# cPanel-integration

## Översikt
cPanel är en av de mest populära kontrollpanelerna för webbhotell och används av många delade och dedikerade hostingleverantörer. Den här integrationen möjliggör automatisk domänsynkronisering mellan Ultimate Multisite och cPanel, vilket låter dig automatiskt lägga till domänalias och subdomäner till ditt cPanel-konto.

## Funktioner
- Automatiskt skapande av addon-domäner i cPanel
- Automatiskt skapande av subdomäner i cPanel (för multisite-installationer med subdomäner)
- Borttagning av domäner när mappningar tas bort

## Krav
Följande konstanter måste definieras i din `wp-config.php`-fil:

```php
define('WU_CPANEL_USERNAME', 'your_cpanel_username');
define('WU_CPANEL_PASSWORD', 'your_cpanel_password');
define('WU_CPANEL_HOST', 'your_cpanel_host');
```

Valfritt kan du även definiera:

```php
define('WU_CPANEL_PORT', 2083); // Default is 2083
define('WU_CPANEL_ROOT_DIR', '/public_html'); // Default is /public_html
```

## Installationsinstruktioner

### 1. Hämta dina cPanel-uppgifter

1. Skaffa ditt cPanel-användarnamn och lösenord från din hostingleverantör
2. Ta reda på din cPanel-värd (vanligtvis `cpanel.yourdomain.com` eller `yourdomain.com:2083`)

### 2. Lägg till konstanter i wp-config.php

Lägg till följande konstanter i din `wp-config.php`-fil:

```php
define('WU_CPANEL_USERNAME', 'your_cpanel_username');
define('WU_CPANEL_PASSWORD', 'your_cpanel_password');
define('WU_CPANEL_HOST', 'your_cpanel_host');
```

Valfritt kan du anpassa porten och rotkatalogen:

```php
define('WU_CPANEL_PORT', 2083); // Change if your cPanel uses a different port
define('WU_CPANEL_ROOT_DIR', '/public_html'); // Change if your document root is different
```

### 3. Aktivera integrationen

1. I din WordPress-admin, gå till Ultimate Multisite > Settings
2. Navigera till fliken "Domain Mapping"
3. Scrolla ner till "Host Integrations"
4. Aktivera cPanel-integrationen
5. Klicka på "Save Changes"

## Så fungerar det

### Addon-domäner

När en domän mappas i Ultimate Multisite:

1. Integrationen skickar en förfrågan till cPanels API för att lägga till domänen som en addon-domän
2. Domänen konfigureras att peka mot din rotkatalog
3. När en domänmappning tas bort kommer integrationen att ta bort addon-domänen från cPanel

### Subdomäner

För multisite-installationer med subdomäner, när en ny webbplats skapas:

1. Integrationen extraherar subdomändelen från den fullständiga domänen
2. Den skickar en förfrågan till cPanels API för att lägga till subdomänen
3. Subdomänen konfigureras att peka mot din rotkatalog

## Viktigt att veta

- Integrationen använder cPanels API2 för att kommunicera med ditt cPanel-konto
- Ditt cPanel-konto måste ha behörighet att lägga till addon-domäner och subdomäner
- Vissa hostingleverantörer kan begränsa antalet addon-domäner eller subdomäner du kan skapa
- Integrationen hanterar inte DNS-konfiguration; du behöver fortfarande peka dina domäner mot din servers IP-adress

## Felsökning

### Problem med API-anslutning
- Kontrollera att ditt cPanel-användarnamn och lösenord är korrekta
- Kontrollera att din cPanel-värd är korrekt och tillgänglig
- Se till att ditt cPanel-konto har de nödvändiga behörigheterna
- Försök använda den fullständiga URL:en för värden (t.ex. `https://cpanel.yourdomain.com`)

### Domän läggs inte till
- Kontrollera Ultimate Multisite-loggarna efter eventuella felmeddelanden
- Verifiera att domänen inte redan är tillagd i cPanel
- Se till att ditt cPanel-konto inte har nått sin gräns för addon-domäner eller subdomäner

### Problem med SSL-certifikat
- Integrationen hanterar inte utfärdande av SSL-certifikat
- Du behöver använda cPanels SSL/TLS-verktyg eller AutoSSL-funktion för att utfärda SSL-certifikat för dina domäner
- Alternativt kan du använda en tjänst som Let's Encrypt med cPanels AutoSSL

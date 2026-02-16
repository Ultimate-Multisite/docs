---
title: WPMU DEV-integration
sidebar_position: 4
_i18n_hash: 01cdaa5cf8aece1ca5c269d943e8a9e9
---
# WPMU DEV-integration

## Översikt
WPMU DEV är en heltäckande WordPress-plattform som erbjuder hosting, plugins och tjänster för WordPress-webbplatser. Denna integration möjliggör automatisk domänsynkronisering och hantering av SSL-certifikat mellan Ultimate Multisite och WPMU DEV hosting.

## Funktioner
- Automatisk domänsynkronisering
- Hantering av SSL-certifikat
- Utökade verifieringsförsök för SSL-certifikat

## Krav
Integrationen upptäcker automatiskt om du använder WPMU DEV som värd och använder det inbyggda API:et. Ingen ytterligare konfiguration krävs om du har din webbplats hos WPMU DEV.

Integrationen kontrollerar om konstanten `WPMUDEV_HOSTING_SITE_ID` finns definierad, vilket sker automatiskt när du använder WPMU DEV som värd.

## Installationsinstruktioner

### 1. Verifiera WPMU DEV-hosting

Om du använder WPMU DEV som värd bör de nödvändiga konstanterna redan vara definierade. Kontrollera att:

1. Konstanten `WPMUDEV_HOSTING_SITE_ID` är definierad i din miljö
2. Du har ett aktivt WPMU DEV-medlemskap med API-åtkomst

### 2. Aktivera integrationen

1. I din WordPress-admin, gå till Ultimate Multisite > Settings
2. Navigera till fliken "Domain Mapping"
3. Scrolla ner till "Host Integrations"
4. Aktivera WPMU DEV-integrationen
5. Klicka på "Save Changes"

## Så fungerar det

### Domänsynkronisering

När en domän mappas i Ultimate Multisite:

1. Integrationen använder WPMU DEV:s API för att lägga till domänen i ditt hostingkonto
2. Den lägger även till www-versionen av domänen automatiskt
3. WPMU DEV hanterar domänkonfigurationen och utfärdandet av SSL-certifikat

### Hantering av SSL-certifikat

Integrationen är konfigurerad för att öka antalet verifieringsförsök för SSL-certifikat vid WPMU DEV-hosting, eftersom det kan ta en stund innan SSL-certifikat utfärdas och installeras. Som standard görs upp till 10 försök för SSL-certifikatverifiering, jämfört med de vanliga 5 försöken.

## Viktigt att veta

### Borttagning av domäner

För närvarande erbjuder WPMU DEV:s API ingen möjlighet att ta bort domäner. När en domänmappning tas bort i Ultimate Multisite kommer domänen att finnas kvar i ditt WPMU DEV-hostingkonto. Du behöver manuellt ta bort den från WPMU DEV:s hostingpanel om det behövs.

### API-autentisering

Integrationen använder WPMU DEV:s API-nyckel som lagras i din WordPress-databas som alternativet `wpmudev_apikey`. Detta konfigureras automatiskt när du ansluter din webbplats till WPMU DEV.

## Felsökning

### Problem med API-anslutning
- Kontrollera att din webbplats är korrekt ansluten till WPMU DEV
- Verifiera att alternativet `wpmudev_apikey` är satt i din WordPress-databas
- Se till att ditt WPMU DEV-medlemskap är aktivt

### Problem med SSL-certifikat
- WPMU DEV kan behöva lite tid för att utfärda SSL-certifikat (vanligtvis 5-15 minuter)
- Integrationen är konfigurerad att kontrollera upp till 10 gånger för SSL-certifikat
- Om SSL-certifikat fortfarande inte utfärdas efter flera försök, kontakta WPMU DEV:s support

### Domän läggs inte till
- Kontrollera Ultimate Multisites loggar för eventuella felmeddelanden
- Verifiera att domänen inte redan är tillagd i WPMU DEV
- Se till att din WPMU DEV-hostingplan stödjer det antal domäner du försöker lägga till

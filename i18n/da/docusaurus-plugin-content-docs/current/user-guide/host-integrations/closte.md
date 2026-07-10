---
title: Closte integration
sidebar_position: 7
_i18n_hash: 8f07c74ab2f7df614f502e0cc089c3e0
---
# Closte Integration {#closte-integration}

## Oversigt {#overview}
Closte er en hostet WordPress-platform bygget på Google Cloud-infrastruktur. Denne integration muliggør automatisk domænesynkronisering og styring af SSL-certifikater mellem Ultimate Multisite og Closte.

## Funktioner {#features}
- Automatisk domænesynkronisering
- Styring af SSL-certifikater
- Wildcard domæne understøttelse
- Ingen konfiguration nødvendig, hvis du kører på Closte

## Krav {#requirements}
Følgende konstant skal defineres i din `wp-config.php` fil, hvis du bruger Closte:

```php
define('CLOSTE_CLIENT_API_KEY', 'din_api_nøgle');
```

Denne konstant er typisk allerede defineret, hvis du hoster på Closte.

## Opsætning {#setup-instructions}

### 1. Verificér din Closte API-nøgle {#1-verify-your-closte-api-key}

Hvis du hoster på Closte, skal konstanten `CLOSTE_CLIENT_API_KEY` allerede være defineret i din `wp-config.php` fil. Du kan bekræfte dette ved at tjekke din `wp-config.php` fil.

### 2. Aktiver integrationen {#2-enable-the-integration}

1. I dit WordPress admin, gå til Ultimate Multisite > Indstillinger
2. Gå til fanen "Domain Mapping" (Domænemapping)
3. Scroll ned til "Host Integrations" (Host Integrationer)
4. Aktiver Closte-integrationen
5. Klik på "Save Changes" (Gem ændringer)

## Hvordan det virker {#how-it-works}

Når et domæne er kortlagt i Ultimate Multisite:

1. Sender integrationen en anmodning til Clostes API for at tilføje domænet til din applikation
2. Closte håndterer automatisk udstedelsen af SSL-certifikatet
3. Når en domænemapping fjernes, vil integrationen fjerne domænet fra Closte

Integrationen fungerer også med indstillingen for DNS check interval i Ultimate Multisite, hvilket giver dig mulighed for at konfigurere, hvor ofte systemet tjekker efter DNS-propagation og udstedelse af SSL-certifikater.

## Oprettelse af Domæneoptegnelse {#domain-record-creation}

Denne integration sikrer, at når en side oprettes eller duplikeres, bliver en domæneoplysning automatisk oprettet. Dette er særligt vigtigt for Closte-integrationen, da oprettelsen af domæneoplysningen udløser Closte API'en til at skabe domænet og SSL-certifikatet.

## Fejlfinding {#troubleshooting}

### Problemer med API-forbindelse {#api-connection-issues}
- Tjek, at din Closte API-nøgle er korrekt
- Sør for, at din Closte-konto har de nødvendige rettigheder

### Problemer med SSL-certifikat {#ssl-certificate-issues}
- Closte kan tage lidt tid til at udstede SSL-certifikater (typisk 5-10 minutter)
- Tjek, at dine domæner korrekt peger på din Clostes servers IP-adresse
- Kontroller DNS-oplysningerne for dit domæne for at sikre, at de er korrekt konfigureret

### Domæne tilføjet {#domain-not-added}
- Tjek Ultimate Multisite-loggene efter eventuelle fejlmeddelelser
- Bekræft, at domænet ikke allerede er tilføjet til Closte
- Sør for, at dine domænens DNS-oplysninger er korrekt konfigureret

### DNS-tjek interval {#dns-check-interval}
- Hvis SSL-certifikater tager for lang tid at udstedes, kan du justere DNS-tjekintervallet i Indstillinger for Domænemapping
- Standardintervallet er 300 sekunder (5 minutter), men du kan sætte det så lavt som 10 sekunder for hurtigere tjek under test.

---
title: WPMU DEV integration
sidebar_position: 4
_i18n_hash: 01cdaa5cf8aece1ca5c269d943e8a9e9
---
# WPMU DEV Integration

## Oversigt
WPMU DEV er en omfattende WordPress-platform, der tilbyder hosting, plugins og services til WordPress-sider. Denne integration muliggør automatisk domænesynkronisering og styring af SSL-certifikater mellem Ultimate Multisite og WPMU DEV hosting.

## Funktioner
- Automatisk domænesynkronisering
- Styring af SSL-certifikater
- Udvidelse af forsøg på SSL-certifikatverifikation

## Krav
Integrationen opdager automatisk, om du hoster hos WPMU DEV, og bruger den indbyggede API. Der kræves ingen yderligere konfiguration, hvis du hoster hos WPMU DEV.

Integrationen tjekker efter tilstedeværelsen af konstanten `WPMUDEV_HOSTING_SITE_ID`, som automatisk defineres, når du hoster hos WPMU DEV.

## Opsætning

### 1. Verificer WPMU DEV Hosting

Hvis du hoster hos WPMU DEV, bør de nødvendige konstanter allerede være defineret. Tjek følgende:

1. Konstanten `WPMUDEV_HOSTING_SITE_ID` er defineret i dit miljø
2. Du har et aktivt WPMU DEV-medlemskab med API-adgang

### 2. Aktiver Integrationen

1. I din WordPress admin, gå til Ultimate Multisite > Indstillinger (Settings)
2. Gå til fanen "Domain Mapping"
3. Scroll ned til "Host Integrations"
4. Aktiver WPMU DEV integrationen
5. Klik på "Save Changes"

## Hvordan det virker

### Domænesynkronisering

Når et domæne er kortlagt i Ultimate Multisite:

1. Bruger integrationen WPMU DEV API'et til at tilføje domænet til din hostingkonto
2. Den tilføjer også automatisk www-versionen af domænet
3. WPMU DEV håndterer domænekonfiguration og udstedelse af SSL-certifikatet

### Styring af SSL-certifikater

Integrationen er konfigureret til at øge antallet forsøg på SSL-certifikatverifikation for WPMU DEV hosting, da det kan tage tid for SSL-certifikaterne at blive udstedt og installeret. Som standard vil den prøve op til 10 gange for SSL-certifikatverifikation sammenlignet med de almindelige 5 forsøg.

## Vigtige bemærkninger

### Fjernelse af domæner

I øjeblikket giver WPMU DEV API'en ikke en måde at fjerne domæner på. Når et domænemapping fjernes i Ultimate Multisite, vil domænet stadig være tilgængeligt i din WPMU DEV hostingkonto. Du skal manuelt fjerne det fra WPMU DEV hosting-dashboardet, hvis det er nødvendigt.

### API-autentifikation

Integrationen bruger den WPMU DEV API-nøgle, som gemmes i din WordPress database som optionen `wpmudev_apikey`. Dette sættes automatisk op, når du forbinder din side med WPMU DEV.

## Fejlfinding

### Problemer med API-forbindelse
- Tjek, at din side er korrekt forbundet til WPMU DEV
- Kontroller, at optionen `wpmudev_apikey` er sat i din WordPress database
- Sør for, at dit WPMU DEV-medlemskab er aktivt

### Problemer med SSL-certifikater
- WPMU DEV kan tage lidt tid til at udstede SSL-certifikater (typisk 5-15 minutter)
- Integrationen er konfigureret til at tjekke op til 10 gange for SSL-certifikater
- Hvis SSL-certifikater stadig ikke bliver udstedt efter flere forsøg, kontakt WPMU DEV support

### Domæne ikke tilføjet
- Tjek Ultimate Multisite logs for eventuelle fejlmeddelelser
- Bekræft, at domænet ikke allerede er tilføjet til WPMU DEV
- Sør for, at dit WPMU DEV hostingplan understøtter antallet af domæner, du tilføjer

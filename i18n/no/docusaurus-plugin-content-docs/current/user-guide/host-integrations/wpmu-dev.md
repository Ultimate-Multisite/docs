---
title: WPMU DEV-integrasjon
sidebar_position: 4
_i18n_hash: 01cdaa5cf8aece1ca5c269d943e8a9e9
---
# WPMU DEV-integrasjon

## Oversikt
WPMU DEV er en omfattende WordPress-plattform som tilbyr hosting, plugins og tjenester for WordPress-nettsteder. Denne integrasjonen gjør det mulig å automatisk synkronisere domener og administrere SSL-sertifikater mellom Ultimate Multisite og WPMU DEV-hosting.

## Funksjoner
- Automatisk domenesynkronisering
- Administrasjon av SSL-sertifikater
- Utvidet antall forsøk på SSL-sertifikatverifisering

## Krav
Integrasjonen oppdager automatisk om du bruker WPMU DEV som hostingleverandør, og bruker det innebygde API-et. Du trenger ikke gjøre noen ekstra konfigurering hvis du hoster på WPMU DEV.

Integrasjonen sjekker om konstanten `WPMUDEV_HOSTING_SITE_ID` er definert. Denne settes automatisk når du hoster på WPMU DEV.

## Oppsettinstruksjoner

### 1. Bekreft WPMU DEV-hosting

Hvis du hoster på WPMU DEV, skal de nødvendige konstantene allerede være definert. Kontroller at:

1. Konstanten `WPMUDEV_HOSTING_SITE_ID` er definert i miljøet ditt
2. Du har et aktivt WPMU DEV-medlemskap med API-tilgang

### 2. Aktiver integrasjonen

1. Gå til Ultimate Multisite > Innstillinger i WordPress-administrasjonspanelet
2. Naviger til fanen «Domenetilordning»
3. Bla ned til «Hostingintegrasjoner»
4. Aktiver WPMU DEV-integrasjonen
5. Klikk på «Lagre endringer»

## Slik fungerer det

### Domenesynkronisering

Når et domene tilordnes i Ultimate Multisite:

1. Integrasjonen bruker WPMU DEV-API-et til å legge til domenet i hostingkontoen din
2. www-versjonen av domenet legges også til automatisk
3. WPMU DEV håndterer domenekonfigurasjonen og utsteder SSL-sertifikatet

### Administrasjon av SSL-sertifikater

Integrasjonen er konfigurert til å øke antallet forsøk på SSL-sertifikatverifisering for WPMU DEV-hosting, ettersom det kan ta litt tid før SSL-sertifikater utstedes og installeres. Som standard prøver den opptil 10 ganger for SSL-sertifikatverifisering, sammenlignet med standard 5 forsøk.

## Viktig informasjon

### Fjerning av domener

For øyeblikket har ikke WPMU DEV-API-et en metode for å fjerne domener. Når en domenetilordning fjernes i Ultimate Multisite, vil domenet fortsatt ligge i WPMU DEV-hostingkontoen din. Du må manuelt fjerne det fra WPMU DEV-hostingpanelet ved behov.

### API-autentisering

Integrasjonen bruker WPMU DEV API-nøkkelen som er lagret i WordPress-databasen din som `wpmudev_apikey`-alternativet. Denne settes opp automatisk når du kobler nettstedet ditt til WPMU DEV.

## Feilsøking

### Problemer med API-tilkobling
- Kontroller at nettstedet ditt er riktig koblet til WPMU DEV
- Sjekk at `wpmudev_apikey`-alternativet er satt i WordPress-databasen din
- Forsikre deg om at WPMU DEV-medlemskapet ditt er aktivt

### Problemer med SSL-sertifikater
- WPMU DEV kan bruke litt tid på å utstede SSL-sertifikater (vanligvis 5–15 minutter)
- Integrasjonen er konfigurert til å sjekke opptil 10 ganger for SSL-sertifikater
- Hvis SSL-sertifikater fortsatt ikke utstedes etter flere forsøk, kontakt WPMU DEV-support

### Domene ikke lagt til
- Sjekk Ultimate Multisite-loggene for eventuelle feilmeldinger
- Kontroller at domenet ikke allerede er lagt til i WPMU DEV
- Forsikre deg om at WPMU DEV-hostingplanen din støtter antallet domener du legger til

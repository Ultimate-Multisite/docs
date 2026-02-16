---
title: Integrare WPMU DEV
sidebar_position: 4
_i18n_hash: 01cdaa5cf8aece1ca5c269d943e8a9e9
---
# Integrarea WPMU DEV

## Prezentare generală
WPMU DEV este o platformă completă pentru WordPress care oferă găzduire, plugin-uri și servicii pentru site-uri WordPress. Această integrare permite sincronizarea automată a domeniilor și gestionarea certificatelor SSL între Ultimate Multisite și găzduirea WPMU DEV.

## Funcționalități
- Sincronizare automată a domeniilor
- Gestionarea certificatelor SSL
- Număr extins de încercări pentru verificarea certificatelor SSL

## Cerințe
Integrarea detectează automat dacă folosești găzduire WPMU DEV și utilizează API-ul integrat. Nu este necesară nicio configurare suplimentară dacă site-ul tău este găzduit pe WPMU DEV.

Integrarea verifică prezența constantei `WPMUDEV_HOSTING_SITE_ID`, care este definită automat când folosești găzduire WPMU DEV.

## Instrucțiuni de configurare

### 1. Verifică găzduirea WPMU DEV

Dacă folosești găzduire WPMU DEV, constantele necesare ar trebui să fie deja definite. Verifică următoarele:

1. Constanta `WPMUDEV_HOSTING_SITE_ID` este definită în mediul tău
2. Ai un abonament WPMU DEV activ cu acces la API

### 2. Activează integrarea

1. În panoul de administrare WordPress, mergi la Ultimate Multisite > Settings
2. Navighează la tab-ul „Domain Mapping"
3. Derulează în jos până la „Host Integrations"
4. Activează integrarea WPMU DEV
5. Apasă „Save Changes"

## Cum funcționează

### Sincronizarea domeniilor

Când un domeniu este mapat în Ultimate Multisite:

1. Integrarea folosește API-ul WPMU DEV pentru a adăuga domeniul în contul tău de găzduire
2. De asemenea, adaugă automat versiunea www a domeniului
3. WPMU DEV se ocupă de configurarea domeniului și emiterea certificatului SSL

### Gestionarea certificatelor SSL

Integrarea este configurată să crească numărul de încercări de verificare a certificatelor SSL pentru găzduirea WPMU DEV, deoarece emiterea și instalarea certificatelor SSL poate dura ceva timp. În mod implicit, va încerca de până la 10 ori verificarea certificatului SSL, comparativ cu cele 5 încercări standard.

## Note importante

### Ștergerea domeniilor

În prezent, API-ul WPMU DEV nu oferă o modalitate de a șterge domeniile. Când un mapare de domeniu este eliminată din Ultimate Multisite, domeniul va rămâne în contul tău de găzduire WPMU DEV. Va trebui să îl ștergi manual din panoul de control al găzduirii WPMU DEV, dacă este necesar.

### Autentificarea API

Integrarea folosește cheia API WPMU DEV care este stocată în baza de date WordPress ca opțiune `wpmudev_apikey`. Aceasta este configurată automat când îți conectezi site-ul la WPMU DEV.

## Depanare

### Probleme de conexiune la API
- Verifică dacă site-ul tău este conectat corect la WPMU DEV
- Verifică dacă opțiunea `wpmudev_apikey` este setată în baza de date WordPress
- Asigură-te că abonamentul tău WPMU DEV este activ

### Probleme cu certificatele SSL
- WPMU DEV poate avea nevoie de ceva timp pentru a emite certificatele SSL (de obicei 5-15 minute)
- Integrarea este configurată să verifice de până la 10 ori certificatele SSL
- Dacă certificatele SSL tot nu sunt emise după mai multe încercări, contactează suportul WPMU DEV

### Domeniul nu a fost adăugat
- Verifică jurnalele Ultimate Multisite pentru eventuale mesaje de eroare
- Verifică dacă domeniul nu este deja adăugat în WPMU DEV
- Asigură-te că planul tău de găzduire WPMU DEV suportă numărul de domenii pe care vrei să le adaugi

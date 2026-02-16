---
title: Integrare ServerPilot
sidebar_position: 16
_i18n_hash: fdbdebe91bc1687b519dc0986de244d3
---
# Integrare ServerPilot

## Prezentare generală
ServerPilot este un serviciu cloud pentru găzduirea site-urilor WordPress și a altor site-uri PHP pe servere de la DigitalOcean, Amazon, Google sau orice alt furnizor de servere. Această integrare permite sincronizarea automată a domeniilor și gestionarea certificatelor SSL între Ultimate Multisite și ServerPilot.

## Funcționalități
- Sincronizare automată a domeniilor
- Gestionarea certificatelor SSL cu Let's Encrypt
- Reînnoire automată a certificatelor SSL

## Cerințe
Următoarele constante trebuie definite în fișierul `wp-config.php`:

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'your_client_id');
define('WU_SERVER_PILOT_API_KEY', 'your_api_key');
define('WU_SERVER_PILOT_APP_ID', 'your_app_id');
```

## Instrucțiuni de configurare

### 1. Obține datele de autentificare API pentru ServerPilot

1. Conectează-te la panoul de control ServerPilot
2. Mergi la „Account" > „API"
3. Creează o cheie API nouă dacă nu ai deja una
4. Copiază Client ID și API Key

### 2. Obține App ID-ul

1. În panoul de control ServerPilot, mergi la „Apps"
2. Selectează aplicația unde este găzduit site-ul tău WordPress multisite
3. App ID-ul este vizibil în URL: `https://manage.serverpilot.io/apps/{APP_ID}`

### 3. Adaugă constantele în wp-config.php

Adaugă următoarele constante în fișierul `wp-config.php`:

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'your_client_id');
define('WU_SERVER_PILOT_API_KEY', 'your_api_key');
define('WU_SERVER_PILOT_APP_ID', 'your_app_id');
```

### 4. Activează integrarea

1. În panoul de administrare WordPress, mergi la Ultimate Multisite > Settings
2. Navighează la tab-ul „Domain Mapping"
3. Derulează în jos până la „Host Integrations"
4. Activează integrarea ServerPilot
5. Apasă pe „Save Changes"

## Cum funcționează

### Sincronizarea domeniilor

Când un domeniu este mapat în Ultimate Multisite:

1. Integrarea preia lista curentă de domenii de la ServerPilot
2. Adaugă noul domeniu în listă (împreună cu versiunea www, dacă este cazul)
3. Trimite lista actualizată către ServerPilot prin API
4. ServerPilot actualizează lista de domenii pentru aplicația ta

### Gestionarea certificatelor SSL

După sincronizarea domeniilor:

1. Integrarea activează automat AutoSSL pentru aplicația ta
2. ServerPilot se ocupă de emiterea și instalarea certificatelor SSL folosind Let's Encrypt
3. ServerPilot gestionează de asemenea reînnoirea automată a certificatelor SSL

## Verificarea certificatelor SSL

Integrarea este configurată să mărească numărul de încercări de verificare a certificatelor SSL pentru ServerPilot, deoarece poate dura ceva timp până când ServerPilot emite și instalează certificatele SSL. În mod implicit, va încerca de până la 5 ori, dar acest lucru poate fi ajustat folosind filtre.

## Depanare

### Probleme de conexiune API
- Verifică dacă Client ID-ul și API Key-ul sunt corecte
- Verifică dacă App ID-ul este corect
- Asigură-te că contul tău ServerPilot are permisiunile necesare

### Probleme cu certificatele SSL
- ServerPilot necesită ca domeniile să aibă înregistrări DNS valide care să indice către serverul tău înainte de a emite certificate SSL
- Dacă certificatele SSL nu sunt emise, verifică dacă domeniile tale indică corect către adresa IP a serverului
- Poate dura ceva timp până când ServerPilot emite și instalează certificatele SSL (de obicei 5-15 minute)

### Domeniu neadăugat
- Verifică jurnalele Ultimate Multisite pentru eventuale mesaje de eroare
- Verifică dacă domeniul nu este deja adăugat în ServerPilot
- Asigură-te că planul tău ServerPilot suportă numărul de domenii pe care vrei să le adaugi

### Eliminarea domeniilor
- În prezent, API-ul ServerPilot nu oferă o modalitate de a elimina domenii individuale
- Când un mapare de domeniu este eliminată din Ultimate Multisite, integrarea va actualiza lista de domenii în ServerPilot pentru a exclude domeniul eliminat

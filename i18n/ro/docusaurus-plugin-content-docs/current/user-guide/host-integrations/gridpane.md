---
title: Integrare GridPane
sidebar_position: 13
_i18n_hash: b0a6427285411feb767e828911cdd794
---
# Integrarea cu GridPane

## Prezentare generală
GridPane este un panou de control pentru găzduire WordPress creat special pentru profesioniștii WordPress. Această integrare permite sincronizarea automată a domeniilor și gestionarea certificatelor SSL între Ultimate Multisite și GridPane.

## Funcționalități
- Sincronizare automată a domeniilor
- Gestionarea certificatelor SSL
- Configurarea automată a constantei SUNRISE

## Cerințe
Următoarele constante trebuie definite în fișierul tău `wp-config.php`:

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'your_api_key');
define('WU_GRIDPANE_SERVER_ID', 'your_server_id');
define('WU_GRIDPANE_APP_ID', 'your_app_id');
```

## Instrucțiuni de configurare

### 1. Obține datele de autentificare pentru API-ul GridPane

1. Autentifică-te în panoul de control GridPane
2. Mergi la „Settings" > „API"
3. Generează o cheie API dacă nu ai deja una
4. Copiază cheia API

### 2. Obține ID-urile serverului și site-ului

1. În panoul de control GridPane, mergi la „Servers"
2. Selectează serverul pe care este găzduit multisite-ul tău WordPress
3. Notează ID-ul serverului (vizibil în URL sau pe pagina de detalii a serverului)
4. Mergi la „Sites" și selectează site-ul tău WordPress
5. Notează ID-ul site-ului (vizibil în URL sau pe pagina de detalii a site-ului)

### 3. Adaugă constantele în wp-config.php

Adaugă următoarele constante în fișierul tău `wp-config.php`:

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'your_api_key');
define('WU_GRIDPANE_SERVER_ID', 'your_server_id');
define('WU_GRIDPANE_APP_ID', 'your_site_id');
```

### 4. Activează integrarea

1. În administrarea WordPress, mergi la Ultimate Multisite > Settings
2. Navighează la tab-ul „Domain Mapping"
3. Derulează în jos până la „Host Integrations"
4. Activează integrarea GridPane
5. Apasă „Save Changes"

## Cum funcționează

Când un domeniu este mapat în Ultimate Multisite:

1. Integrarea trimite o cerere către API-ul GridPane pentru a adăuga domeniul la site-ul tău
2. GridPane gestionează automat emiterea certificatului SSL
3. Când o mapare de domeniu este eliminată, integrarea va elimina domeniul din GridPane

Integrarea gestionează automat și constanta SUNRISE din fișierul wp-config.php, care este necesară pentru ca maparea domeniilor să funcționeze corect.

## Gestionarea constantei SUNRISE

O funcționalitate unică a integrării GridPane este că revine automat la valoarea constantei SUNRISE în wp-config.php pentru a preveni conflictele cu sistemul propriu de mapare a domeniilor GridPane. Acest lucru asigură că ambele sisteme pot funcționa împreună fără probleme.

## Depanare

### Probleme de conexiune la API
- Verifică dacă cheia API este corectă
- Verifică dacă ID-urile serverului și site-ului sunt corecte
- Asigură-te că contul tău GridPane are permisiunile necesare

### Probleme cu certificatele SSL
- GridPane poate avea nevoie de timp pentru a emite certificatele SSL
- Verifică dacă domeniile tale sunt direcționate corect către adresa IP a serverului
- Verifică setările SSL din GridPane pentru site-ul tău

### Domeniul nu a fost adăugat
- Verifică jurnalele Ultimate Multisite pentru eventuale mesaje de eroare
- Verifică dacă domeniul nu este deja adăugat în GridPane
- Asigură-te că înregistrările DNS ale domeniului sunt configurate corect

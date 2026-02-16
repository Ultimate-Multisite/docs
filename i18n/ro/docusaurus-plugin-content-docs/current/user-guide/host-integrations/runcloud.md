---
title: Integrare RunCloud
sidebar_position: 13
_i18n_hash: 05a61d871e286ae6c87bc7653377dee4
---
# Integrare RunCloud

## Prezentare generală
RunCloud este o platformă de administrare a serverelor bazată pe cloud, care îți permite să implementezi și să gestionezi cu ușurință aplicații web pe propriile tale servere cloud. Această integrare permite sincronizarea automată a domeniilor și gestionarea certificatelor SSL între Ultimate Multisite și RunCloud.

## Funcționalități
- Sincronizare automată a domeniilor
- Gestionarea certificatelor SSL
- Eliminarea domeniilor când mapările sunt șterse

## Cerințe
Următoarele constante trebuie definite în fișierul tău `wp-config.php`:

```php
define('WU_RUNCLOUD_API_KEY', 'your_api_key');
define('WU_RUNCLOUD_API_SECRET', 'your_api_secret');
define('WU_RUNCLOUD_SERVER_ID', 'your_server_id');
define('WU_RUNCLOUD_APP_ID', 'your_app_id');
```

## Instrucțiuni de configurare

### 1. Obține datele de autentificare API RunCloud

1. Autentifică-te în dashboard-ul tău RunCloud
2. Mergi la „User Profile" (dă clic pe poza de profil din colțul din dreapta sus)
3. Selectează „API" din meniu
4. Dă clic pe „Generate API Key" dacă nu ai deja una
5. Copiază-ți API Key și API Secret

### 2. Obține ID-urile serverului și aplicației

1. În dashboard-ul tău RunCloud, mergi la „Servers"
2. Selectează serverul pe care este găzduită instalarea ta WordPress multisite
3. ID-ul serverului este vizibil în URL: `https://manage.runcloud.io/servers/{SERVER_ID}`
4. Mergi la „Web Applications" și selectează aplicația ta WordPress
5. ID-ul aplicației este vizibil în URL: `https://manage.runcloud.io/servers/{SERVER_ID}/apps/{APP_ID}`

### 3. Adaugă constantele în wp-config.php

Adaugă următoarele constante în fișierul tău `wp-config.php`:

```php
define('WU_RUNCLOUD_API_KEY', 'your_api_key');
define('WU_RUNCLOUD_API_SECRET', 'your_api_secret');
define('WU_RUNCLOUD_SERVER_ID', 'your_server_id');
define('WU_RUNCLOUD_APP_ID', 'your_app_id');
```

### 4. Activează integrarea

1. În panoul de administrare WordPress, mergi la Ultimate Multisite > Settings
2. Navighează la tab-ul „Domain Mapping"
3. Derulează în jos până la „Host Integrations"
4. Activează integrarea RunCloud
5. Dă clic pe „Save Changes"

## Cum funcționează

Când un domeniu este mapat în Ultimate Multisite:

1. Integrarea trimite o cerere către API-ul RunCloud pentru a adăuga domeniul la aplicația ta
2. Dacă domeniul este adăugat cu succes, integrarea va reinstala și certificatele SSL
3. Când o mapare de domeniu este eliminată, integrarea va șterge domeniul din RunCloud

Pentru instalările cu subdomenii, integrarea va gestiona automat crearea subdomeniilor în RunCloud când sunt adăugate site-uri noi în rețeaua ta.

## Depanare

### Probleme de conexiune API
- Verifică dacă datele tale de autentificare API sunt corecte
- Verifică dacă ID-urile serverului și aplicației sunt corecte
- Asigură-te că contul tău RunCloud are permisiunile necesare

### Probleme cu certificatele SSL
- RunCloud poate avea nevoie de ceva timp pentru a emite certificatele SSL
- Verifică dacă domeniile tale sunt configurate corect să indice către adresa IP a serverului tău
- Verifică setările SSL din RunCloud pentru aplicația ta

### Domeniul nu a fost adăugat
- Verifică jurnalele Ultimate Multisite pentru eventuale mesaje de eroare
- Verifică dacă domeniul nu este deja adăugat în RunCloud
- Asigură-te că planul tău RunCloud acceptă domenii multiple

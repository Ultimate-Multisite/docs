---
title: Integrare Cloudways
sidebar_position: 3
_i18n_hash: 931ac98efe704dc50c74537ea2676529
---
# Integrarea cu Cloudways

## Prezentare generală
Cloudways este o platformă de hosting cloud administrat care îți permite să implementezi site-uri WordPress pe diferiți furnizori de cloud precum DigitalOcean, AWS, Google Cloud și alții. Această integrare permite sincronizarea automată a domeniilor și gestionarea certificatelor SSL între Ultimate Multisite și Cloudways.

## Funcționalități
- Sincronizare automată a domeniilor
- Gestionarea certificatelor SSL
- Suport pentru domenii suplimentare
- Validare DNS pentru certificatele SSL

## Cerințe
Următoarele constante trebuie definite în fișierul tău `wp-config.php`:

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

Opțional, poți defini și:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'comma,separated,list,of,domains');
```

## Instrucțiuni de configurare

### 1. Obține datele de autentificare API pentru Cloudways

1. Autentifică-te în panoul de control Cloudways
2. Navighează la „Account" > „API Keys"
3. Generează o cheie API dacă nu ai deja una
4. Copiază adresa de email și cheia API

### 2. Obține ID-urile serverului și aplicației

1. În panoul de control Cloudways, navighează la „Servers"
2. Selectează serverul pe care este găzduit site-ul tău WordPress multisite
3. ID-ul serverului este vizibil în URL: `https://platform.cloudways.com/server/{SERVER_ID}`
4. Navighează la „Applications" și selectează aplicația ta WordPress
5. ID-ul aplicației este vizibil în URL: `https://platform.cloudways.com/server/{SERVER_ID}/application/{APP_ID}`

### 3. Adaugă constantele în wp-config.php

Adaugă următoarele constante în fișierul tău `wp-config.php`:

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

Dacă ai domenii suplimentare care trebuie incluse întotdeauna:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'domain1.com,domain2.com,*.wildcard.com');
```

### 4. Activează integrarea

1. În zona de administrare WordPress, navighează la Ultimate Multisite > Settings
2. Accesează tab-ul „Domain Mapping"
3. Derulează în jos până la „Host Integrations"
4. Activează integrarea Cloudways
5. Apasă „Save Changes"

## Cum funcționează

### Sincronizarea domeniilor

Când un domeniu este mapat în Ultimate Multisite:

1. Integrarea preia toate domeniile mapate în prezent
2. Adaugă noul domeniu în listă (împreună cu versiunea www, dacă este cazul)
3. Trimite lista completă către Cloudways prin API
4. Cloudways actualizează aliasurile de domeniu pentru aplicația ta

Notă: API-ul Cloudways necesită trimiterea listei complete de domenii de fiecare dată, nu doar adăugarea sau eliminarea domeniilor individuale.

### Gestionarea certificatelor SSL

După sincronizarea domeniilor:

1. Integrarea verifică ce domenii au înregistrări DNS valide care indică spre serverul tău
2. Trimite o cerere către Cloudways pentru instalarea certificatelor SSL Let's Encrypt pentru acele domenii
3. Cloudways se ocupă de emiterea și instalarea certificatelor SSL

## Domenii suplimentare

Constanta `WU_CLOUDWAYS_EXTRA_DOMAINS` îți permite să specifici domenii suplimentare care trebuie incluse întotdeauna la sincronizarea cu Cloudways. Aceasta este utilă pentru:

- Domenii care nu sunt gestionate de Ultimate Multisite
- Domenii wildcard (de exemplu, `*.example.com`)
- Domenii de dezvoltare sau staging

## Depanare

### Probleme de conexiune API
- Verifică dacă adresa de email și cheia API sunt corecte
- Verifică dacă ID-urile serverului și aplicației sunt corecte
- Asigură-te că contul tău Cloudways are permisiunile necesare

### Probleme cu certificatele SSL
- Cloudways necesită ca domeniile să aibă înregistrări DNS valide care indică spre serverul tău înainte de a emite certificate SSL
- Integrarea validează înregistrările DNS înainte de a solicita certificatele SSL
- Dacă certificatele SSL nu sunt emise, verifică dacă domeniile tale indică corect spre adresa IP a serverului

### Domeniu neadăugat
- Verifică jurnalele Ultimate Multisite pentru eventuale mesaje de eroare
- Verifică dacă domeniul nu este deja adăugat în Cloudways
- Asigură-te că planul tău Cloudways permite numărul de domenii pe care încerci să le adaugi

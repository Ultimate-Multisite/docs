---
title: Integrare WP Engine
sidebar_position: 2
_i18n_hash: ceeee20432439d8afb3002dd0dd1ff12
---
# Integrare WP Engine {#wp-engine-integration}

## Prezentare generală {#overview}
WP Engine este o platformă premium de găzduire WordPress administrată, care oferă performanță optimizată, securitate și scalabilitate pentru site-urile WordPress. Această integrare permite sincronizarea automată a domeniilor între Ultimate Multisite și WP Engine.

## Funcționalități {#features}
- Sincronizare automată a domeniilor
- Suport pentru subdomenii în instalările multisite
- Integrare perfectă cu sistemele existente WP Engine

## Cerințe {#requirements}
Integrarea detectează automat dacă ești găzduit pe WP Engine și folosește API-ul WP Engine integrat. Nu este necesară nicio configurare suplimentară dacă plugin-ul WP Engine este activ și configurat corect.

Totuși, dacă trebuie să configurezi manual integrarea, poți defini una dintre aceste constante în fișierul `wp-config.php`:

```php
define('WPE_APIKEY', 'your_api_key'); // Metoda preferată
// SAU
define('WPE_API', 'your_api_key'); // Metodă alternativă
```

## Instrucțiuni de configurare {#setup-instructions}

### 1. Verifică plugin-ul WP Engine {#1-verify-wp-engine-plugin}

Dacă ești găzduit pe WP Engine, plugin-ul WP Engine ar trebui să fie deja instalat și activat. Verifică următoarele:

1. Plugin-ul WP Engine este activ
2. Fișierul `wp-content/mu-plugins/wpengine-common/class-wpeapi.php` există

### 2. Activează integrarea {#2-enable-the-integration}

1. În panoul de administrare WordPress, mergi la Ultimate Multisite > Settings
2. Navighează la tab-ul „Domain Mapping"
3. Derulează în jos până la „Host Integrations"
4. Activează integrarea WP Engine
5. Apasă „Save Changes"

## Cum funcționează {#how-it-works}

### Sincronizarea domeniilor {#domain-syncing}

Când un domeniu este mapat în Ultimate Multisite:

1. Integrarea folosește API-ul WP Engine pentru a adăuga domeniul la instalarea ta WP Engine
2. WP Engine gestionează configurarea domeniului și emiterea certificatului SSL
3. Când un domeniu mapat este eliminat, integrarea va șterge domeniul din WP Engine

### Suport pentru subdomenii {#subdomain-support}

Pentru instalările multisite bazate pe subdomenii:

1. Integrarea adaugă fiecare subdomeniu în WP Engine când este creat un site nou
2. WP Engine gestionează configurarea subdomeniului
3. Când un site este șters, integrarea va elimina subdomeniul din WP Engine

## Note importante {#important-notes}

### Domenii wildcard {#wildcard-domains}

Pentru instalările multisite bazate pe subdomenii, este recomandat să contactezi suportul WP Engine pentru a solicita o configurare de domeniu wildcard. Aceasta permite tuturor subdomeniilor să funcționeze automat, fără a fi nevoie să le adaugi individual.

### Certificate SSL {#ssl-certificates}

WP Engine gestionează automat emiterea și reînnoirea certificatelor SSL pentru toate domeniile adăugate prin această integrare. Nu este necesară nicio configurare suplimentară.

## Depanare {#troubleshooting}

### Probleme de conexiune la API {#api-connection-issues}
- Verifică dacă plugin-ul WP Engine este activ și configurat corect
- Dacă ai definit manual cheia API, verifică dacă este corectă
- Contactează suportul WP Engine dacă întâmpini probleme cu API-ul

### Domeniul nu a fost adăugat {#domain-not-added}
- Verifică jurnalele Ultimate Multisite pentru eventuale mesaje de eroare
- Asigură-te că domeniul nu este deja adăugat în WP Engine
- Verifică dacă planul tău WP Engine suportă numărul de domenii pe care vrei să le adaugi

### Probleme cu subdomeniile {#subdomain-issues}
- Dacă subdomeniile nu funcționează, contactează suportul WP Engine pentru a solicita o configurare de domeniu wildcard
- Verifică dacă setările DNS sunt configurate corect pentru domeniul principal și subdomenii

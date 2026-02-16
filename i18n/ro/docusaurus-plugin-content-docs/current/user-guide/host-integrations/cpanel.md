---
title: Integrare cPanel
sidebar_position: 5
_i18n_hash: ba79fa3cffb0f29c4eda9bdf59244a2f
---
# Integrare cPanel

## Prezentare generală
cPanel este unul dintre cele mai populare panouri de control pentru găzduire web, utilizat de mulți furnizori de găzduire partajată și dedicată. Această integrare permite sincronizarea automată a domeniilor între Ultimate Multisite și cPanel, oferindu-ți posibilitatea de a adăuga automat aliasuri de domenii și subdomenii în contul tău cPanel.

## Funcționalități
- Creare automată de domenii addon în cPanel
- Creare automată de subdomenii în cPanel (pentru instalările multisite de tip subdomeniu)
- Eliminarea domeniilor când mapările sunt șterse

## Cerințe
Următoarele constante trebuie definite în fișierul tău `wp-config.php`:

```php
define('WU_CPANEL_USERNAME', 'your_cpanel_username');
define('WU_CPANEL_PASSWORD', 'your_cpanel_password');
define('WU_CPANEL_HOST', 'your_cpanel_host');
```

Opțional, poți defini și:

```php
define('WU_CPANEL_PORT', 2083); // Valoarea implicită este 2083
define('WU_CPANEL_ROOT_DIR', '/public_html'); // Valoarea implicită este /public_html
```

## Instrucțiuni de configurare

### 1. Obține datele de autentificare cPanel

1. Obține numele de utilizator și parola cPanel de la furnizorul tău de găzduire
2. Identifică host-ul cPanel (de obicei `cpanel.domeniultau.com` sau `domeniultau.com:2083`)

### 2. Adaugă constantele în wp-config.php

Adaugă următoarele constante în fișierul tău `wp-config.php`:

```php
define('WU_CPANEL_USERNAME', 'your_cpanel_username');
define('WU_CPANEL_PASSWORD', 'your_cpanel_password');
define('WU_CPANEL_HOST', 'your_cpanel_host');
```

Opțional, poți personaliza portul și directorul rădăcină:

```php
define('WU_CPANEL_PORT', 2083); // Modifică dacă cPanel folosește un port diferit
define('WU_CPANEL_ROOT_DIR', '/public_html'); // Modifică dacă directorul rădăcină este diferit
```

### 3. Activează integrarea

1. În panoul de administrare WordPress, mergi la Ultimate Multisite > Settings
2. Navighează la tab-ul „Domain Mapping"
3. Derulează în jos până la „Host Integrations"
4. Activează integrarea cPanel
5. Apasă „Save Changes"

## Cum funcționează

### Domenii addon

Când un domeniu este mapat în Ultimate Multisite:

1. Integrarea trimite o cerere către API-ul cPanel pentru a adăuga domeniul ca domeniu addon
2. Domeniul este configurat să indice către directorul tău rădăcină
3. Când o mapare de domeniu este eliminată, integrarea va șterge domeniul addon din cPanel

### Subdomenii

Pentru instalările multisite de tip subdomeniu, când este creat un site nou:

1. Integrarea extrage partea de subdomeniu din domeniul complet
2. Trimite o cerere către API-ul cPanel pentru a adăuga subdomeniul
3. Subdomeniul este configurat să indice către directorul tău rădăcină

## Note importante

- Integrarea folosește API2 de la cPanel pentru a comunica cu contul tău cPanel
- Contul tău cPanel trebuie să aibă permisiuni pentru a adăuga domenii addon și subdomenii
- Unii furnizori de găzduire pot limita numărul de domenii addon sau subdomenii pe care le poți crea
- Integrarea nu gestionează configurarea DNS; tot trebuie să îndrepți domeniile către adresa IP a serverului tău

## Depanare

### Probleme de conexiune la API
- Verifică dacă numele de utilizator și parola cPanel sunt corecte
- Verifică dacă host-ul cPanel este corect și accesibil
- Asigură-te că contul tău cPanel are permisiunile necesare
- Încearcă să folosești URL-ul complet pentru host (de ex., `https://cpanel.domeniultau.com`)

### Domeniul nu a fost adăugat
- Verifică jurnalele Ultimate Multisite pentru eventuale mesaje de eroare
- Verifică dacă domeniul nu este deja adăugat în cPanel
- Asigură-te că contul tău cPanel nu a atins limita pentru domenii addon sau subdomenii

### Probleme cu certificatele SSL
- Integrarea nu gestionează emiterea certificatelor SSL
- Va trebui să folosești instrumentele SSL/TLS din cPanel sau funcția AutoSSL pentru a emite certificate SSL pentru domeniile tale
- Alternativ, poți folosi un serviciu precum Let's Encrypt cu AutoSSL din cPanel

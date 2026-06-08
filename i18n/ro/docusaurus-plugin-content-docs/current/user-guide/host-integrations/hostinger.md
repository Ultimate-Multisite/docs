---
title: Integrare Hostinger (hPanel)
sidebar_position: 7
_i18n_hash: db876ad40b78d2075e03ba70fe7f541f
---
# Integrarea Hostinger (hPanel)

## Prezentare generală

Hostinger este un furnizor popular de găzduire web care dispune de un panou de control modern numit hPanel. Integrarea Ultimate Multisite Hostinger permite sincronizarea automată a domeniilor între Ultimate Multisite și hPanel-ul Hostinger, permițându-vă să gestionați automat mapările de domenii și subdomenii direct din administratorul WordPress.

## Funcționalități

- Crearea automată de domenii addon în hPanel
- Crearea automată de subdomenii în hPanel (pentru instalări multisite cu subdomenii)
- Eliminarea domeniului atunci când mapările sunt șterse
- Integrare fluidă cu API-ul de management al domeniilor al hPanel

## Cerințe

Pentru a folosi integrarea Hostinger, aveți nevoie de:

1. Un cont Hostinger cu acces la hPanel
2. Un token API de la Hostinger
3. Constantele de mai jos definite în fișierul dvs. `wp-config.php`:

```php
define('WU_HOSTINGER_API_TOKEN', 'your_hostinger_api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'your_hostinger_account_id');
```

Opțional, puteți defini și:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1'); // Endpoint API implicit
```

## Instrucțiuni de instalare

### 1. Generați Token-ul API Hostinger

1. Autentizați-vă în contul Hostinger și accesați hPanel
2. Navigați la **Account Settings** → **API Tokens**
3. Faceți clic pe **Create New Token**
4. Acordați token-ului un nume descriptiv (de exemplu, "Ultimate Multisite")
5. Selectați permisiunile necesare:
   - Managementul domeniilor
   - Managementul subdomenilor
6. Copiați token-ul generat și stocați-l în siguranță

### 2. Găsiți ID-ul Contului

1. În hPanel, mergeți la **Account Settings** → **Account Information**
2. ID-ul Contului dvs. este afișat pe această pagină
3. Copiați și salvați acest ID pentru următorul pas

### 3. Adăugați Constantele în wp-config.php

Adăugați următoarele constante în fișierul dvs. `wp-config.php`:

```php
define('WU_HOSTINGER_API_TOKEN', 'your_hostinger_api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'your_hostinger_account_id');
```

Dacă contul dvs. Hostinger folosește un endpoint API diferit, îl puteți personaliza:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1');
```

### 4. Activați Integrarea

1. În administratorul WordPress, mergeți la **Ultimate Multisite > Settings**
2. Navigați la tab-ul **Domain Mapping**
3. Derulați până la **Host Integrations**
4. Activați integrarea **Hostinger (hPanel)**
5. Faceți clic pe **Save Changes**

## Cum funcționează

### Domeniile Addon

Când mapați un domeniu în Ultimate Multisite:

1. Integrarea trimite o cerere către API-ul Hostinger pentru a adăuga domeniul ca domeniu addon
2. Domeniul este configurat să indice către directorul rădăcină (root directory)
3. Când o mapare de domeniu este eliminată, integrarea elimină automat domeniul addon din hPanel

### Subdomenii

Pentru instalările multisite cu subdomenii, atunci când este creat un site nou:

1. Integrarea extrage partea de subdomeniu din domeniul complet
2. Trimite o cerere către API-ul Hostinger pentru a adăuga subdomeniul
3. Subdomeniul este configurat să indice către directorul rădăcină (root directory)

## Note importante

- Integrarea folosește API-ul REST al Hostinger pentru a comunica cu contul dvs.
- Token-ul API trebuie să aibă permisiunile necesare pentru managementul domeniilor și subdomenilor
- Integrarea nu gestionează configurarea DNS; domeniile trebuie să indice deja către contul dvs. Hostinger
- Cererile API sunt făcute în siguranță prin HTTPS
- Păstrați token-ul API în siguranță și nu îl împărtășiți niciodată public

## Depanșare

### Probleme de conexiune API

- Verificați dacă token-ul API este corect și nu a expirat
- Asigurați-vă că ID-ul Contului este corect
- Verificați că token-ul API are permisiunile necesare pentru managementul domeniilor
- Verificați că contul Hostinger este activ și în regulă

### Domeniul nu este adăugat

- Verificați jurnalele Ultimate Multisite pentru orice mesaje de eroare
- Verificați dacă domeniul nu este deja adăugat în contul dvs. Hostinger
- Asigurați-vă că contul Hostinger nu și-a atins limita de domenii addon
- Confirmați că domeniul indică corect către nameserver-ele Hostinger

### Probleme cu certificatele SSL

- Integrarea nu gestionează emiterea certificatelor SSL
- Hostinger oferă de obicei certificate SSL gratuite prin AutoSSL
- Puteți gestiona certificatele SSL direct în hPanel, sub **SSL/TLS**
- Alternativ, folosiți Let's Encrypt cu funcția AutoSSL a Hostinger

## Suport

Pentru ajutor suplimentar cu integrarea Hostinger, vă rugăm să consultați:

- [Hostinger API Documentation](https://support.hostinger.com/en/articles/4286-api-documentation)
- [Ultimate Multisite Documentation](/docs)
- [Ultimate Multisite Support](https://ultimatemultisite.com/support)

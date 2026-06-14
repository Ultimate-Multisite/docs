---
title: Integrácia Hostinger (hPanel)
sidebar_position: 7
_i18n_hash: db876ad40b78d2075e03ba70fe7f541f
---
# Integrácia s Hostinger (hPanel)

## Úvod

Hostinger je populárny poskytovateľ webového hostingu s moderným kontrolným panelom nazvaným hPanel. Integrácia Ultimate Multisite Hostinger umožňuje automatické synchronizovanie domén medzi Ultimate Multisite a hPanel Hostinger, čo vám umožňuje automaticky spravovať mapovanie domén a poddomén priamo z admina WordPressu.

## Funkcionality

- Automatické vytváranie pridaných domén (addon domain) v hPanel
- Automatické vytváranie poddomén (pre inštalácie s poddoménovým multisite) v hPanel
- Odstránenie domény pri odstránení mapovania
- Bezproblémová integrácia s API správou doménami hPanel

## Požiadavky

Aby ste mohli použiť integráciu Hostinger, potrebujete:

1. Účet Hostinger s prístupom do hPanel
2. API token od Hostinger
3. Nasledujúce kon constanty definované v súbore `wp-config.php`:

```php
define('WU_HOSTINGER_API_TOKEN', 'vaš_hostinger_api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'vaše_hostinger_account_id');
```

Voliteľne môžete tiež definovať:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1'); // Predvolený API endpoint
```

## Pokyny na konfiguráciu

### 1. Vytvorenie vášho Hostinger API tokenu

1. Prihláste sa do svojho účtu Hostinger a prístupte do hPanel
2. Prejdite na **Account Settings** → **API Tokens**
3. Kliknite na **Create New Token** (Vytvoriť nový token)
4. Dajte vášmu tokenu popisné meno (napr. "Ultimate Multisite")
5. Vyberte potrebné povolenia:
   - Domain management (Správa domén)
   - Subdomain management (Správa poddomén)
6. Skopírujte vytvorený token a uloťte ho bezpečne

### 2. Nájdite svoj ID účtu

1. V hPanel prejdite na **Account Settings** → **Account Information** (Informácie o účte)
2. V tomto zozname je váš Account ID uvedený
3. Skopírujte a uložte tento ID na nasledujúci krok

### 3. Pridanie constantov do wp-config.php

Pridajte nasledujúce kon constanty do svojho súboru `wp-config.php`:

```php
define('WU_HOSTINGER_API_TOKEN', 'your_hostinger_api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'your_hostinger_account_id');
```

Ak máte in Hostinger účte in innej API konečnú bod, môžete ho prispôsobiť:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1');
```

### 4. Aktivácia integrácie

1. V administrácii WordPress prejdite do **Ultimate Multisite > Settings**
2. Prejdite na záložku **Domain Mapping** (Mapovanie domén)
3. Prejdite dole na sekciu **Host Integrations** (Integrácie hostov)
4. Aktivujte integráciu **Hostinger (hPanel)**
5. Kliknite na **Save Changes** (Uložiť zmeny)

## Ako to funguje

### Addon domény

Keď mapujete domén v Ultimate Multisite:

1. Integrácia pošle požiadavku API Hostinger, aby prispôsobil domén ako addon doménu
2. Doména je nastavená tak, aby smerovala na váš základný adresár (root directory)
3. Keď odstráníte mapovanie domény, integrácia automaticky odstráni addon doménu z hPanel

### Poddomény

Pre inštalácie multisite s poddoménami, keď vytvoríte novú ponuku:

1. Integrácia vytrhne časť poddomény z celého doménu
2. Pošle požiadavku API Hostinger, aby prispôsobil poddoménu
3. Poddoména je nastavená tak, aby smerovala na váš základný adresár (root directory)

## Dôležité poznámky

- Integrácia používa REST API Hostinger na komunikáciu s vašou účtom
- Vaš API token musí mať potrebné povolenia pre správu domén a poddomén
- Integrácia neobsahuje konfiguráciu DNS; domény musia byť už smerované na váš účet Hostinger
- Požiadavky API sa vykonávajú bezpečne cez HTTPS
- Udržiavajte svoj API token v bezpečnej ochrane a nikdy ho neposkytujte verejnosti

## Riešenie problémov

### Problémy s pripojením k API

* Skontrolujte, či je váš API token správny a že neprecálil*
* Skontrolujte, či je váš Account ID správny*
* Uistite sa, že váš API token má potrebné povolenia na správu domén*
* Overte, či je váš účet Hostinger aktívny a v poriadku

### Doména nepridaná

* Skontrolujte si logy Ultimate Multisite na akékoľvek chybové správy
* Overte, či nie je doména už pridaná do vášho účtu Hostinger
* Uistite sa, že váš účet Hostinger sa nezacholil na limit dodatočných domén
* Potvrďte, že doména je správne smerovaná na vaše nameservery Hostinger

### Problémy so SSL certifikátom

* Integrácia neobsahuje vydávanie SSL certifikátov
* Hostinger zvyčajne poskytuje bezplatné SSL certifikáty prostredníctvom AutoSSL
* Môžete SSL certifikáty spravovať priamo v hPanel pod sekci **SSL/TLS**
* Alternatívne použite Let's Encrypt s funkciou AutoSSL od Hostinger

## Podpora

Pre ďalšiu pomoc s integráciou Hostinger sa obráťte na:

* [Hostinger API Dokumentácia](https://support.hostinger.com/en/articles/4286-api-documentation)
* [Ultimate Multisite Dokumentácia](/docs)
* [Podpora Ultimate Multisite](https://ultimatemultisite.com/support)

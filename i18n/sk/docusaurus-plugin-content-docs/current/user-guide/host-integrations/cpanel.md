---
title: Integrácia cPanel
sidebar_position: 5
_i18n_hash: ba79fa3cffb0f29c4eda9bdf59244a2f
---
# Integrácia s cPanel

## Prehľad {#overview}
cPanel je jeden z najpopulárnejších kontrolných panelov pre webový hosting, ktorý používajú mnohí poskytovatelia aj share a dedicated hostingu. Táto integrácia umožňuje automatické synchronizovanie domén medzi Ultimate Multisite a cPanel, čo vám umožní automaticky pridávať aliasy domén a poddomény k vášmu účtu v cPanel.

## Funkcionality {#features}
- Automatické vytváranie addon domainov v cPanel
- Automatické vytváranie poddomén (pre inštalácie multisite s poddoménami) v cPanel
- Odstránenie domény pri odstránení mapovania

## Požiadavky {#requirements}
Nasledujúce kon constantov musia byť definované v súbore `wp-config.php`:

```php
define('WU_CPANEL_USERNAME', 'your_cpanel_username');
define('WU_CPANEL_PASSWORD', 'your_cpanel_password');
define('WU_CPANEL_HOST', 'your_cpanel_host');
```

Voliteľne môžete tiež definovať:

```php
define('WU_CPANEL_PORT', 2083); // Predvolený je 2083
define('WU_CPANEL_ROOT_DIR', '/public_html'); // Predvolený je /public_html
```

## Pokyny na konfiguráciu {#setup-instructions}

### 1. Získať svoje cPanel prihlasovacie údaje {#1-get-your-cpanel-credentials}

1. Získejte svoje prihlasovacie meno a heslo z vášho hostingového poskytovateľa
2. Určite si, aký je váš cPanel host (zvyčajne `cpanel.yourdomain.com` alebo `yourdomain.com:2083`)

### 2. Pridať constanty do wp-config.php {#2-add-constants-to-wp-configphp}

Pridajte nasledujúce constancy do súboru `wp-config.php`:

```php
define('WU_CPANEL_USERNAME', 'your_cpanel_username');
define('WU_CPANEL_PASSWORD', 'your_cpanel_password');
define('WU_CPANEL_HOST', 'your_cpanel_host');
```

Voliteľne môžete prispôsobiť port a základnú smerovku:

```php
define('WU_CPANEL_PORT', 2083); // Zmenite, ak váš cPanel používa iný port
define('WU_CPANEL_ROOT_DIR', '/public_html'); // Zmenite, ak je váš základný smerovník iný
```

### 3. Umiestniť integráciu do prevádzky {#3-enable-the-integration}

1. V administrácii WordPress prejdite do Ultimate Multisite > Settings
2. Prejdite na záľava "Domain Mapping" (Mapovanie domén)
3. Prejdite dole na sekciu "Host Integrations" (Integrácie hostov)
4. Aktivujte integráciu cPanel
5. Kliknite na "Save Changes" (Uložiť zmeny)

## Ako to funguje {#how-it-works}

### Addon Domény {#addon-domains}

Keď je doména mapovaná v Ultimate Multisite:

1. Integrácia pošle požiadavku API cPanel, aby prispôsobil domén ako addon doménu
2. Doména je nakonfigurovaná tak, aby smerovala na váš základný adresár (root directory)
3. Keď odstráníte mapovanie domény, integrácia addon doménu odstráni z cPanel

### Poddomény {#subdomains}

Pre inštalácie multisite s poddoménami, keď vytvoríte novú ponuku:

1. Integrácia vytrhne časť poddomény z celého doménného mena
2. Pošle požiadavku API cPanel, aby prispôsobil poddoménu
3. Poddoména je nakonfigurovaná tak, aby smerovala na váš základný adresár (root directory)

## Dôležité poznámky {#important-notes}

- Integrácia používa API2 cPanel na komunikáciu s vašou účtom v cPanel
- Vaša účet v cPanel musí mať povolenia na pridávanie addon domén a poddomén
- Niektorí poskytovatelia hostingu môžu obmedziť počet addon domén alebo poddomén, ktoré môžete vytvoriť
- Integrácia neobsahuje konfiguráciu DNS; stále musíte smerovať svoje domény na IP adresu vášho serveru

## Riešenie problémov {#troubleshooting}

### Problémy s pripojením k API {#api-connection-issues}
- Skontrolujte, či je vaše cPanel meno používateľa a hesla správne
- Skontrolujte, či je váš host v cPanel správny a prístupný
- Uistite sa, že váš účet v cPanel má potrebné povolenia
- Pokúšajte si použiť plnú URL adresu pre host (napr. `https://cpanel.yourdomain.com`)

### Doména nebola pridaná {#domain-not-added}
- Skontrolujte logy Ultimate Multisite na akékoľvek chybové správy
- Uistite sa, že doména nie je už pridaná do cPanel
- Uistite sa, že váš účet v cPanel nezahrozil limitom pre addon domény alebo poddomény

### Problémy sojného certifikátu (SSL Certificate Issues) {#ssl-certificate-issues}
- Integrácia neobsahuje funkciu vydávania SSL certifikátov.
- Musíte použiť nástroje SSL/TLS v cPanel alebo funkciu AutoSSL na vydávanie SSL certifikátov pre vaše domény.
- Alternatívne môžete použiť službu ako Let's Encrypt s AutoSSLom v cPanel.

---
title: Integrácia ServerPilot
sidebar_position: 16
_i18n_hash: fdbdebe91bc1687b519dc0986de244d3
---
# Integrácia ServerPilot

## Úvod {#overview}
ServerPilot je cloud služba na hostovanie WordPressov a iných PHP webových stránok na serveroch DigitalOcean, Amazon, Google alebo akomkoľvek inej poskytovateľa. Táto integrácia umožňuje automatické synchronizovanie domén a správu SSL certifikátov medzi Ultimate Multisite a ServerPilot.

## Funkcionality {#features}
- Automatické synchronizovanie domén
- Správa SSL certifikátov s Let's Encrypt
- Automatické obnovenie SSL

## Požiadavky {#requirements}
Nasledujúce kon constanty musia byť definované v súbore `wp-config.php`:

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'your_client_id');
define('WU_SERVER_PILOT_API_KEY', 'your_api_key');
define('WU_SERVER_PILOT_APP_ID', 'your_app_id');
```

## Pokyny na konfiguráciu {#setup-instructions}

### 1. Získanie API autentifikačných údajov ServerPilot {#1-get-your-serverpilot-api-credentials}

1. Prihláste sa do vášho dashboardu ServerPilot
2. Prejdite do "Account" > "API" (Účet > API)
3. Vytvorte nový API kľúč, ak ho ešte nemáte
4. Skopírujte svoj Client ID a API kľúč

### 2. Získanie App ID {#2-get-your-app-id}

1. V dashboarde ServerPilot prejdite do "Apps" (Aplikácie)
2. Vyberte aplikáciu, kde je hostovaný váš WordPress multisite
3. App ID je viditeľné v URL: `https://manage.serverpilot.io/apps/{APP_ID}`

### 3. Pridanie constantov do wp-config.php {#3-add-constants-to-wp-configphp}

Pridajte nasledujúce constancy do súboru `wp-config.php`:

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'your_client_id');
define('WU_SERVER_PILOT_API_KEY', 'your_api_key');
define('WU_SERVER_PILOT_APP_ID', 'your_app_id');
```

### 4. Aktivácia integrácie {#4-enable-the-integration}

1. V administrácii WordPress prejdite do Ultimate Multisite > Settings (Nastavenia)
2. Prejdite na záložku "Domain Mapping" (Mapovanie domén)
3. Prejdite dole na sekciu "Host Integrations" (Integrácie hostov)
4. Aktivujte integráciu ServerPilot
5. Kliknite na "Save Changes" (Uložiť zmeny)

## Ako to funguje {#how-it-works}

### Synchronizácia domén {#domain-syncing}

Keď je doména mapovaná v Ultimate Multisite:

1. Integrácia načítava aktuálnu zoznam domén zo ServerPilot
2. Pridá novú doménu do zoznamu (spolu s verziou www, ak je to prípadné)
3. Odespeva aktualizovaný zoznam ServerPilot pomocou API
4. ServerPilot aktualizuje zoznam domén pre vaše aplikácie

### Správa SSL certifikátov {#ssl-certificate-management}

Po synchronizácii domén:

1. Integrácia automaticky zapne AutoSSL pre vašu aplikáciu
2. ServerPilot si postará o vydávanie a instaláciu SSL certifikátu pomocou Let's Encrypt
3. ServerPilot tiež si postará o automatické obnovenie SSL certifikátov

## Verifikácia SSL certifikátov {#ssl-certificate-verification}

Integrácia je nastavená tak, aby zvýšila počet pokusov o verifikáciu SSL certifikátov pre ServerPilot, pretože ServerPilot môže trvať dlhšie na vydávaní a instalácii SSL certifikátov. Po výpadku sa snaží až 5 krát, ale toto možno upraviť pomocou filtrov.

## Řešenie problémov (Troubleshooting) {#troubleshooting}

### Problémy s API pripojenia {#api-connection-issues}
- Skontrolujte, či sú váš Client ID a API Key správne nastavené
- Skontrolujte, či je váš App ID správny
- Uistite sa, že váš účet ServerPilot má potrebné povolenia

### Problémy so SSL certifikátmi {#ssl-certificate-issues}
- ServerPilot vyžaduje, aby domény mali platné DNS záznamy smerujúce na váš server pred vydávaním SSL certifikátov
- Ak sa SSL certifikáty nevydávajú, skontrolujte, či vaše domény správne ukazujú na IP adresu vášho servera
- ServerPilot môže trvať dlhšie na vydávaní a instalácii SSL certifikátov (obvykle 5-15 minút)

### Doména nebola pridaná {#domain-not-added}
- Skontrolujte si logy Ultimate Multisite na akékoľvek chybové správy
- Uistite sa, že doména nie je už pridaná do ServerPilot
- Uistite sa, že váš plán ServerPilot podporuje počet domén, ktoré pridávate

### Odstránenie domény {#domain-removal}
- Aktuálne neposkytuje API ServerPilot spôsob odstránenia jednotlivých domén.
- Keď sa mapovanie domény odstráni v Ultimate Multisite, integrácia aktualizuje zoznam domén v ServerPilot a vymaje odstránenú doménu.

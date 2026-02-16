---
title: Integrace ServerPilot
sidebar_position: 16
_i18n_hash: fdbdebe91bc1687b519dc0986de244d3
---
# Integrace ServerPilot

## Přehled
ServerPilot je cloudová služba pro hosting WordPress a dalších PHP webů na serverech u DigitalOcean, Amazon, Google nebo jakéhokoli jiného poskytovatele serverů. Tato integrace umožňuje automatickou synchronizaci domén a správu SSL certifikátů mezi Ultimate Multisite a ServerPilot.

## Funkce
- Automatická synchronizace domén
- Správa SSL certifikátů pomocí Let's Encrypt
- Automatické obnovování SSL

## Požadavky
V souboru `wp-config.php` musí být definovány následující konstanty:

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'your_client_id');
define('WU_SERVER_PILOT_API_KEY', 'your_api_key');
define('WU_SERVER_PILOT_APP_ID', 'your_app_id');
```

## Pokyny k nastavení

### 1. Získejte přihlašovací údaje k ServerPilot API

1. Přihlaste se do administrace ServerPilot
2. Přejděte na "Account" > "API"
3. Pokud ještě nemáte API klíč, vytvořte nový
4. Zkopírujte si Client ID a API Key

### 2. Získejte App ID

1. V administraci ServerPilot přejděte na "Apps"
2. Vyberte aplikaci, kde je hostován váš WordPress multisite
3. App ID najdete v URL adrese: `https://manage.serverpilot.io/apps/{APP_ID}`

### 3. Přidejte konstanty do wp-config.php

Do souboru `wp-config.php` přidejte následující konstanty:

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'your_client_id');
define('WU_SERVER_PILOT_API_KEY', 'your_api_key');
define('WU_SERVER_PILOT_APP_ID', 'your_app_id');
```

### 4. Aktivujte integraci

1. V administraci WordPress přejděte na Ultimate Multisite > Settings
2. Přejděte na záložku "Domain Mapping"
3. Sjeďte dolů k sekci "Host Integrations"
4. Zapněte integraci ServerPilot
5. Klikněte na "Save Changes"

## Jak to funguje

### Synchronizace domén

Když je doména mapována v Ultimate Multisite:

1. Integrace načte aktuální seznam domén ze ServerPilot
2. Přidá novou doménu do seznamu (včetně www verze, pokud je to vhodné)
3. Odešle aktualizovaný seznam do ServerPilot přes API
4. ServerPilot aktualizuje seznam domén pro vaši aplikaci

### Správa SSL certifikátů

Po synchronizaci domén:

1. Integrace automaticky zapne AutoSSL pro vaši aplikaci
2. ServerPilot zajistí vydání a instalaci SSL certifikátu pomocí Let's Encrypt
3. ServerPilot také zajišťuje automatické obnovování SSL certifikátů

## Ověření SSL certifikátu

Integrace je nastavena tak, aby zvýšila počet pokusů o ověření SSL certifikátu pro ServerPilot, protože vydání a instalace SSL certifikátů může nějakou dobu trvat. Ve výchozím nastavení se pokusí až 5krát, ale toto lze upravit pomocí filtrů.

## Řešení problémů

### Problémy s připojením k API
- Ověřte, že máte správné Client ID a API Key
- Zkontrolujte, že je App ID správné
- Ujistěte se, že váš účet ServerPilot má potřebná oprávnění

### Problémy s SSL certifikáty
- ServerPilot vyžaduje, aby domény měly platné DNS záznamy směřující na váš server, než vydá SSL certifikáty
- Pokud se SSL certifikáty nevydávají, zkontrolujte, že vaše domény správně směřují na IP adresu vašeho serveru
- Vydání a instalace SSL certifikátů může nějakou dobu trvat (obvykle 5–15 minut)

### Doména se nepřidala
- Zkontrolujte logy Ultimate Multisite, zda neobsahují chybové hlášky
- Ověřte, že doména již není přidaná v ServerPilot
- Ujistěte se, že váš tarif ServerPilot podporuje počet domén, které přidáváte

### Odebrání domény
- V současnosti API ServerPilot neumožňuje odebrat jednotlivé domény
- Když je mapování domény odebráno v Ultimate Multisite, integrace aktualizuje seznam domén v ServerPilot tak, aby odebranou doménu nezahrnoval

---
title: Integrace GridPane
sidebar_position: 13
_i18n_hash: b0a6427285411feb767e828911cdd794
---
# Integrace GridPane

## Přehled
GridPane je specializovaný ovládací panel pro WordPress hosting určený profesionálním vývojářům a správcům WordPressu. Tato integrace umožňuje automatickou synchronizaci domén a správu SSL certifikátů mezi Ultimate Multisite a GridPane.

## Funkce
- Automatická synchronizace domén
- Správa SSL certifikátů
- Automatická konfigurace konstanty SUNRISE

## Požadavky
Ve vašem souboru `wp-config.php` musí být definovány následující konstanty:

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'your_api_key');
define('WU_GRIDPANE_SERVER_ID', 'your_server_id');
define('WU_GRIDPANE_APP_ID', 'your_app_id');
```

## Návod k nastavení

### 1. Získání API přístupových údajů pro GridPane

1. Přihlaste se do svého GridPane dashboardu
2. Přejděte do "Settings" > "API"
3. Pokud ještě nemáte API klíč, vygenerujte si ho
4. Zkopírujte svůj API klíč

### 2. Získání ID serveru a webu

1. V GridPane dashboardu přejděte do sekce "Servers"
2. Vyberte server, na kterém je hostován váš WordPress multisite
3. Poznamenejte si Server ID (viditelné v URL nebo na stránce s detaily serveru)
4. Přejděte do "Sites" a vyberte svůj WordPress web
5. Poznamenejte si Site ID (viditelné v URL nebo na stránce s detaily webu)

### 3. Přidání konstant do wp-config.php

Do souboru `wp-config.php` přidejte následující konstanty:

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'your_api_key');
define('WU_GRIDPANE_SERVER_ID', 'your_server_id');
define('WU_GRIDPANE_APP_ID', 'your_site_id');
```

### 4. Aktivace integrace

1. V administraci WordPressu přejděte do Ultimate Multisite > Settings
2. Přejděte na záložku "Domain Mapping"
3. Posuňte se dolů k sekci "Host Integrations"
4. Aktivujte integraci GridPane
5. Klikněte na "Save Changes"

## Jak to funguje

Když je doména namapována v Ultimate Multisite:

1. Integrace odešle požadavek do GridPane API pro přidání domény k vašemu webu
2. GridPane automaticky zajistí vydání SSL certifikátu
3. Při odebrání mapování domény integrace doménu z GridPane odstraní

Integrace také automaticky spravuje konstantu SUNRISE ve vašem souboru wp-config.php, která je nezbytná pro správné fungování mapování domén.

## Správa konstanty SUNRISE

Unikátní vlastností integrace GridPane je automatické obnovování konstanty SUNRISE v souboru wp-config.php, což zabraňuje konfliktům s vlastním systémem mapování domén v GridPane. Díky tomu mohou oba systémy fungovat společně bez problémů.

## Řešení problémů

### Problémy s připojením k API
- Ověřte, že je váš API klíč správný
- Zkontrolujte, zda jsou ID serveru a webu správné
- Ujistěte se, že váš GridPane účet má potřebná oprávnění

### Problémy s SSL certifikátem
- Vydání SSL certifikátu může GridPane nějakou dobu trvat
- Ověřte, že vaše domény správně směřují na IP adresu vašeho serveru
- Zkontrolujte nastavení SSL v GridPane pro váš web

### Doména nebyla přidána
- Zkontrolujte logy Ultimate Multisite, zda neobsahují chybové zprávy
- Ověřte, že doména není již v GridPane přidána
- Ujistěte se, že DNS záznamy vaší domény jsou správně nakonfigurovány

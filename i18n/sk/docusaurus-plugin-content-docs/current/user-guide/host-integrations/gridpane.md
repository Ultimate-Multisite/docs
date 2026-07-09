---
title: Integrácia GridPaneu
sidebar_position: 13
_i18n_hash: b0a6427285411feb767e828911cdd794
---
# Integrácia s GridPane {#gridpane-integration}

## Prehľad {#overview}
GridPane je špecializovaný kontrolný panel pre hostovanie WordPress, vytvorený pre vážnych profesionálov v oblasti WordPress. Táto integrácia umožňuje automatické synchronizovanie domén a správu SSL certifikátov medzi Ultimate Multisite a GridPane.

## Funkcionality {#features}
- Automatické synchronizovanie domén
- Správa SSL certifikátov
- Automatická konfigurácia kon constantu SUNRISE

## Požiadavky {#requirements}
Nasledujúce konstanty musíte definovať v súbore `wp-config.php`:

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'vaša_api_kľúč');
define('WU_GRIDPANE_SERVER_ID', 'vaše_server_id');
define('WU_GRIDPANE_APP_ID', 'vaše_site_id');
```

## Pokyny na nastavenie {#setup-instructions}

### 1. Získať svoje GridPane API kredenciálne údaje {#1-get-your-gridpane-api-credentials}

1. Prihláste sa do svojho panela GridPane
2. Prejdite do "Settings" > "API" (Nastavenia > API)
3. Vytvorte si API kľúč, ak ho ešte nemáte
4. Skopírujte svoj API kľúč

### 2. Získať svoje ID serverov a sítí {#2-get-your-server-and-site-ids}

1. V paneli GridPane prejdite do "Servers" (Serverov)
2. Vyberte server, kde je hostovaný váš WordPress multisite
3. Poznajte Server ID (viditeľný v URL alebo na stránke s informáciami o serveri)
4. Prejdite do "Sites" (Sité) a vyberte svoju webovú stránku WordPress
5. Poznajte Site ID (viditeľný v URL alebo na stránke s informáciami o site)

### 3. Pridať konstanty do wp-config.php {#3-add-constants-to-wp-configphp}

Pridajte nasledujúce konstanty do svojho súboru `wp-config.php`:

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'vaša_api_kľúč');
define('WU_GRIDPANE_SERVER_ID', 'vaše_server_id');
define('WU_GRIDPANE_APP_ID', 'vaše_site_id');
```

### 4. Aktivovať integráciu {#4-enable-the-integration}

1. V administrácii WordPress prejdite do Ultimate Multisite > Settings (Nastavenia)
2. Prejdite na záložku "Domain Mapping" (Mapovanie domén)
3. Prejdite dole na sekciu "Host Integrations" (Integrácie hostov)
4. Aktivujte integráciu GridPane
5. Kliknite na "Save Changes" (Uložiť zmeny)

## Ako to funguje {#how-it-works}

Keď je doména mapovaná v Ultimate Multisite:

1. Integrácia pošle požiadavku na API GridPane, aby si pridal domén k vašej webovej stránke.
2. GridPane automaticky rieši poskytovanie SSL certifikátov.
3. Keď odstránite mapovanie domény, integrácia doménu odstráni z GridPane.

Integrácia tiež automaticky rieši kon constant SUNRISE v súbore wp-config.php, ktorý je potrebný pre správne fungovanie mapovania domén.

## Správa constantu SUNRISE {#sunrise-constant-management}

Jednou jedinečnou vlastnosťou integrácie GridPane je to, že automaticky obnovuje constant SUNRISE v wp-config.php, aby sa zabránilo konfliktom s vlastným systémom mapovania domén GridPane. To zaručuje, že oba systémy môžu spolupracovať bez problémov.

## Riešenie problémov {#troubleshooting}

### Problémy s pripojením k API {#api-connection-issues}
- Skontrolujte, či je váš API ключ správny
- Prejdite na kontrolu, či sú vaše serverové a ID stránky správne
- Uistite sa, že máte potrebné povolenia v účtoch GridPane

### Problémy so SSL certifikátmi {#ssl-certificate-issues}
- GridPane môže trvať dlhý čas na vydanie SSL certifikátov
- Prejdite na kontrolu, či vaše domény správne ukazujú na IP adresu vášho servera
- Skontrolujte nastavenia SSL v GridPane pre vašu stránku

### Doména nebola pridaná {#domain-not-added}
- Skontrolujte logy Ultimate Multisite na akékoľvek chybové správy
- Prejdite na kontrolu, či doména nie je už pridaná do GridPane
- Uistite sa, že sú DNS záznamy vašej domény správne nakonfigurované

---
title: Integrace WP Engine
sidebar_position: 2
_i18n_hash: ceeee20432439d8afb3002dd0dd1ff12
---
# Integrace s WP Engine

## Přehled
WP Engine je prémiová spravovaná hostingová platforma pro WordPress, která poskytuje optimalizovaný výkon, zabezpečení a škálovatelnost pro WordPress stránky. Tato integrace umožňuje automatickou synchronizaci domén mezi Ultimate Multisite a WP Engine.

## Funkce
- Automatická synchronizace domén
- Podpora subdomén pro multisite instalace
- Bezproblémová integrace se stávajícími systémy WP Engine

## Požadavky
Integrace automaticky detekuje, zda hostujete na WP Engine, a využívá vestavěné WP Engine API. Pokud je plugin WP Engine aktivní a správně nakonfigurovaný, není potřeba žádná další konfigurace.

Pokud však potřebujete integraci nakonfigurovat ručně, můžete definovat jednu z těchto konstant v souboru `wp-config.php`:

```php
define('WPE_APIKEY', 'your_api_key'); // Preferovaná metoda
// NEBO
define('WPE_API', 'your_api_key'); // Alternativní metoda
```

## Pokyny k nastavení

### 1. Ověření pluginu WP Engine

Pokud hostujete na WP Engine, plugin WP Engine by již měl být nainstalován a aktivován. Ověřte, že:

1. Plugin WP Engine je aktivní
2. Existuje soubor `wp-content/mu-plugins/wpengine-common/class-wpeapi.php`

### 2. Povolení integrace

1. V administraci WordPress přejděte na Ultimate Multisite > Nastavení
2. Přejděte na kartu „Mapování domén"
3. Přejděte dolů k sekci „Integrace s hostingem"
4. Povolte integraci s WP Engine
5. Klikněte na „Uložit změny"

## Jak to funguje

### Synchronizace domén

Když je doména namapována v Ultimate Multisite:

1. Integrace použije WP Engine API k přidání domény do vaší instalace WP Engine
2. WP Engine se postará o konfiguraci domény a vydání SSL certifikátu
3. Když je mapování domény odstraněno, integrace odebere doménu z WP Engine

### Podpora subdomén

Pro multisite instalace se subdoménami:

1. Integrace přidá každou subdoménu do WP Engine při vytvoření nového webu
2. WP Engine se postará o konfiguraci subdomény
3. Když je web smazán, integrace odebere subdoménu z WP Engine

## Důležité poznámky

### Zástupné domény (wildcard)

Pro multisite instalace se subdoménami doporučujeme kontaktovat podporu WP Engine a požádat o konfiguraci zástupné domény (wildcard). To umožní automatické fungování všech subdomén bez nutnosti přidávat každou jednotlivě.

### SSL certifikáty

WP Engine automaticky zajišťuje vydávání a obnovování SSL certifikátů pro všechny domény přidané prostřednictvím této integrace. Není potřeba žádná další konfigurace.

## Řešení problémů

### Problémy s připojením k API
- Ověřte, že plugin WP Engine je aktivní a správně nakonfigurovaný
- Pokud jste API klíč definovali ručně, zkontrolujte, zda je správný
- Kontaktujte podporu WP Engine, pokud máte problémy s API

### Doména nebyla přidána
- Zkontrolujte logy Ultimate Multisite, zda neobsahují chybové zprávy
- Ověřte, že doména není již přidána ve WP Engine
- Ujistěte se, že váš tarif WP Engine podporuje počet domén, které přidáváte

### Problémy se subdoménami
- Pokud subdomény nefungují, kontaktujte podporu WP Engine a požádejte o konfiguraci zástupné domény (wildcard)
- Ověřte, že vaše DNS nastavení jsou správně nakonfigurována pro hlavní doménu i subdomény

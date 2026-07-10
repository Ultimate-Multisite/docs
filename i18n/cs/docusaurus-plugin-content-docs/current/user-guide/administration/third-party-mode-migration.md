---
title: Migrace do režimu třetí strany
sidebar_position: 17
_i18n_hash: 21e66c5c40d03011402c58addf6d96f3
---
# Migrace do režimu třetích stran {#third-party-mode-migration}

Superdav AI Agent v1.12.0 mění způsob, jak jsou zpracovány schopnosti (abilities) třetích stran. **Třetí režim nyní výchozí stav má "auto"**, což umožňuje integraci s nativním WordPress Abilities API na WordPressu 7.0+ bez nutnosti ruční konfigurace.

## Co se změnilo? {#what-changed}

### Před v1.12.0 {#before-v1120}

Schopnosti třetích stran vyžadovaly ruční konfiguraci:

- Museli jste explicitně aktivovat „třetí režim“
- Schopnosti byly načítány z vlastní registrace
- Integrace s WordPress Abilities API byla volitelná
- Výchozí byl režim dědictví (Legacy mode)

### Po v1.12.0 {#after-v1120}

Schopnosti třetích stran fungují automaticky:

- Třetí režim výchozí stav má „auto“
- Schopnosti se nativně integrují s WordPress Abilities API
- Na WordPressu 7.0+ není potřeba ruční konfigurace
- Režim dědictví je stále k dispozici pro starší verze WordPressu

## Kdo je ovlivněn? {#who-is-affected}

### Nové instalace (WordPress 7.0+) {#new-installations-wordpress-70}

**Není nutná žádná akce.** Třetí režim je automaticky nastaven na „auto“ a schopnosti fungují z krabici.

### Existující instalace {#existing-installations}

**Vaše nastavení je zachováno.** Pokud jste používali:

- **Režim dědictví (Legacy mode)**: Zůstanete v režimu dědictví (bez změny)
- **Ruční režim třetích stran (Manual third-party mode)**: Zůstanete v ručním režimu (bez změny)
- **Auto režim (Auto mode)**: Pokračujete v auto režimu (bez změny)

### Verze WordPressu před 7.0 {#wordpress-versions-before-70}

**Režim dědictví je stále k dispozici.** Pokud používáte WordPress 6.x nebo starší:

- Třetí režim výchozí stav má „legacy“
- Můžete ručně aktivovat třetí režim, pokud to chcete
- Vylepšete se na WordPress 7.0+ pro použití nativního Abilities API

## Pochopení režimů {#understanding-the-modes}

### Auto režim (Nový výchozí stav) {#auto-mode-new-default}

**Auto režim** využívá nativní integraci s WordPress Abilities API:

- Schopnosti jsou registrovány pomocí WordPress hooků
- Plná kompatibilita s WordPress 7.0+ Abilities API
- Automatické odhalování schopností třetích stran
- Není potřeba ruční konfigurace

**Kdy použít**: WordPress 7.0+ se schopnostmi třetích stran

### Ruční režim (Manual Mode) {#manual-mode}

**Ruční režim** vyžaduje explicitní konfiguraci:

- Specifikujete, které schopnosti třetích stran chcete načíst
- Užitečné pro testování nebo výběrové načítání schopností
- Vyžaduje úpravu konfiguračních souborů
- Více kontroly, ale i více nastavení

**Kdy použít**: Testování, výběrové načítání schopností nebo vlastní konfigurace

### Režim dědictví (Legacy Mode) {#legacy-mode}

**Režim dědictví** používá starý systém schopností třetích stran:

- Vlastní registrace schopností (ne WordPress Abilities API)
- Kompatibilní s předchozími verzemi WordPressu
- Žádná nativní integrace s WordPressem
- Zastaralé, ale stále podporované

**Kdy použít**: WordPress 6.x nebo starší, nebo když potřebujete kompatibilitu s režimem dědictví

## Kontrola aktuálního režimu {#checking-your-current-mode}

### Skrze panel administrátora {#via-admin-panel}

1. Přejděte na **WordPress Admin** → **Superdav AI Agent** → **Settings**
2. Hledejte nastavení **Third-Party Mode**
3. Uvidíte svůj aktuální režim a možnosti jeho změny

### Skrze kód {#via-code}

```php
$mode = get_option( 'superdav_third_party_mode' );
echo $mode; // 'auto', 'manual', nebo 'legacy'
```

## Změna režimu {#changing-your-mode}

### Přepnutí na Auto režim {#switch-to-auto-mode}

Pokud používáte WordPress 7.0+ a chcete použít auto režim:

1. Přejděte na **Superdav AI Agent** → **Settings**
2. Najděte **Third-Party Mode**
3. Vyberte **Auto (WordPress Abilities API)**
4. Klikněte na **Save**

Superdav AI Agent automaticky odhalí a zaregistruje schopnosti třetích stran.

### Přepnutí na Ruční režim {#switch-to-manual-mode}

Pokud chcete ručně kontrolovat, které schopnosti se načítají:

1. Přejděte na **Superdav AI Agent** → **Settings**
2. Najděte **Third-Party Mode**
3. Vyberte **Manual**
4. Klikněte na **Save**
5. Upravte svůj konfigurační soubor, abyste specifikovali, které schopnosti chcete načíst

### Přepnutí na Režim dědictví {#switch-to-legacy-mode}

Pokud potřebujete kompatibilitu s režimem dědictví:

1. Přejděte na **Superdav AI Agent** → **Settings**
2. Najděte **Third-Party Mode**
3. Vyberte **Legacy**
4. Klikněte na **Save**

## Výhody Auto režimu {#benefits-of-auto-mode}

### Automatické odhalování {#automatic-discovery}

Schopnosti jsou automaticky odhalovány z:

- Nainstalovaných pluginů
- Aktivního tématu
- Pluginů nutných k použití (Must-use plugins)
- Drop-in pluginů

Není nutná ruční registrace.

### Nativní integrace {#native-integration}

Schopnosti se integrují s WordPress Abilities API:

- Konzistentní s jádrem WordPressu
- Funguje s administrací WordPressu
- Kompatibilní s dalšími pluginy, které používají Abilities API
- Zajišťuje kompatibilitu s budoucím rozvojem WordPressu

### Zjednodušené spravování {#simplified-management}

- Žádné konfigurační soubory k úpravě
- Žádná ruční registrace schopností
- Kontrola viditelnosti schopností funguje automaticky
- Upozornění administrátora vás upozorní na neklasifikované schopnosti

### Lepší výkon {#better-performance}

- Schopnosti jsou vázány (cached)
- Načítají se lazy (na vyžádání)
- Optimalizováno pro WordPress 7.0+

## Cesta migrace {#migration-path}

### Pokud používáte WordPress 6.x {#if-youre-on-wordpress-6x}

1. **Vylepšete se na WordPress 7.0+** (když budete připraveni)
2. **Aktualizujte Superdav AI Agent** na v1.12.0+
3. **Změňte třetí režim na Auto** (volitelné; režim dědictví stále funguje)
4. **Zkontrolujte viditelnost schopností**, abyste zajistili správné kontroly přístupu

### Pokud používáte WordPress 7.0+ {#if-youre-on-wordpress-70}

1. **Aktualizujte Superdav AI Agent** na v1.12.0+
2. **Ověřte, že třetí režim je nastaven na Auto** (by měl být výchozí)
3. **Zkontrolujte viditelnost schopností**, abyste zajistili správné kontroly přístupu
4. **Otestujte schopnosti třetích stran**, abyste potvrdili, že fungují

## Řešení problémů {#troubleshooting}

### Schopnosti se v auto režimu nenačítají {#abilities-arent-loading-in-auto-mode}

- Ověřte, že používáte WordPress 7.0+
- Zkontrolujte, že třetí režim je nastaven na „Auto“
- Ověřte, že plugin poskytující schopnost je aktivní
- Zkontrolujte log chyb WordPressu kvůli chybám při registraci

### Chci zachovat režim dědictví {#i-want-to-keep-legacy-mode}

- Přejděte na **Settings** → **Third-Party Mode**
- Vyberte **Legacy**
- Klikněte na **Save**
- Režim dědictví bude nadále fungovat

### Moje vlastní schopnosti se neobjevují {#my-custom-abilities-arent-showing}

- Ověřte, že jsou registrovány pomocí WordPress hooků
- Zkontrolujte, že správně implementují Abilities API
- Projděte log chyb WordPressu
- Použijte stránku administrátora **Ability Visibility**, abyste viděli všechny registrované schopnosti

### Dostávám upozornění „neklasifikovaná schopnost“ {#im-getting-unclassified-ability-notices}

- Je to normální pro nové schopnosti třetích stran
- Projděte je a klasifikujte je v administrátorském upozornění
- Podrobnosti o klasifikaci najdete na stránce **Ability Visibility**

## Kompatibilita s minulostí {#backward-compatibility}

### Existující konfigurace {#existing-configurations}

Pokud máte existující konfigurace schopností třetích stran:

- **Režim dědictví**: Vaše konfigurace nadále funguje
- **Ruční režim**: Vaše konfigurace nadále funguje
- **Auto režim**: Vaše konfigurace je ignorována (auto režim převzetí kontrolu)

Pokud chcete zachovat svou vlastní konfiguraci, zůstaňte v ručním nebo režimu dědictví.

### Časový plán znehodnocení {#deprecation-timeline}

- **v1.12.0**: Režimy dědictví i ruční jsou stále plně podporovány
- **v1.13.0+**: Režim dědictví může zobrazovat upozornění o znehodnocení
- **v2.0.0**: Režim dědictví může být odstraněn (TBD)

## Nejlepší praxe {#best-practices}

### Pro nové instalace {#for-new-installations}

- Používejte Auto režim (je výchozí)
- Nechte Superdav AI Agent automaticky odhalit schopnosti
- Používejte Ability Visibility k ovládání přístupu

### Pro existující instalace {#for-existing-installations}

- Vylepšete se na WordPress 7.0+ v případě možnosti
- Přepněte se na Auto režim pro zjednodušené spravování
- Projděte a klasifikujte schopnosti pomocí Ability Visibility

### Pro vlastní schopnosti {#for-custom-abilities}

- Registrujte schopnosti pomocí WordPress hooků (Abilities API)
- Vyhněte se vlastním registrům schopností
- Testujte na WordPressu 7.0+ v Auto režimu

## Další kroky {#next-steps}

1. **Zkontrolujte verzi WordPressu**: Ověřte, že používáte 7.0+ pro Auto režim
2. **Zkontrolujte svůj třetí režim**: Přejděte na Settings a zkontrolujte svůj aktuální režim
3. **Aktualizujte, pokud je to nutné**: Přepněte se na Auto režim, pokud používáte WordPress 7.0+
4. **Klasifikujte schopnosti**: Projděte a klasifikujte jakékoli neklasifikované schopnosti
5. **Testujte**: Ověřte, že vaše schopnosti třetích stran fungují správně

## Související témata {#related-topics}

- **Ability Visibility**: Kontrola, které schopnosti jsou k dispozici kde
- **WordPress Abilities API**: Naučte se o nativním registraci schopností WordPressu
- **Vývoj schopností třetích stran**: Vytváření schopností, které fungují v Auto režimu

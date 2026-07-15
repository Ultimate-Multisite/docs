---
title: Addon Sablon
sidebar_position: 1
_i18n_hash: 8036666d38c392e40bfedcdc73a73c2a
---
# Addon Sablon

Addon Sablon — Ultimate Multisite.

## Előfeltételek {#requirements}

- WordPress 5.3 vagy annál újabb
- PHP 7.4 vagy annál újabb
- Multisite Ultimate plugin (aktív)

## Telepítés {#installation}

1. Töltse fel az addon fájlait a `/wp-content/plugins/` könyvtárba
2. Aktiválja a plugin-t a WordPress „Plugins” menüpontja alatt
3. Konfigurálja az addon beállításait a hálózatadminisztrátor felületen

## Fejlesztés {#development}

### Beállítás {#setup}

```bash
# Telepíti a függvényeket
composer install
npm install

# Futatja a teszteket
npm run test

# Futatja a kód stándardok ellenőrzését
vendor/bin/phpcs
vendor/bin/phpstan

# Javítja a kód stílusbeli problémákat
vendor/bin/phpcbf

# Összépíti a gyártási (production) verziót
npm run build
```

### Projektstruktúra {#project-structure}

```
ultimate-multisite-addon-template/
├── inc/                          # PHP osztályok és include-k
│   ├── class-multisite-ultimate-updater.php  # Frissítő kezelő
│   └── class-{{ADDON_SLUG_UNDERSCORE}}-main.php             # Fő funkciók
├── tests/                        # Egységtesztek (Unit tests)
│   ├── bootstrap.php            # Teszt bootstrap
│   ├── class-*-base.php         # Alap teszt osztály
│   └── class-*-test.php         # Teszt esetek
├── views/                       # Sablon fájlok
├── assets/                      # Statikus fájlok
│   ├── css/                     # Stíluslapok
│   ├── js/                      # JavaScript fájlok
│   └── images/                  # Képek
├── lang/                        # Nyelvi fájlok
├── composer.json                # PHP függvények
├── package.json                 # Node.js függvények
├── phpunit.xml.dist             # PHPUnit konfiguráció
├── .phpcs.xml.dist              # Kód stándardok konfiguráció
└── rector.php                   # Kód modernizációs szabályok
```

### Tesztelés {#testing}

Az addon egy átfogó tesztelő keretrendszert tartalmaz:

- **Egységtesztek (Unit Tests)**: PHPUnit alapú tesztek a WordPress teszt suite-el
- **Alap Teszt Osztály (Base Test Class)**: Segítő metódusokat biztosít gyakori teszt forgatókönyemekhez
- **Tesztfedettség (Test Coverage)**: Konfigurálva a kódfedettség nyomon követésére
- **Multisite Tesztelés**: A tesztek multisite környezetben futnak

### Kód Stándardok {#code-standards}

- **WordPress Kód Stándardok**: PHPCS segítségével biztosított
- **PHP 7.4+ Kompatibilitás**: Támogatott modern PHP funkciók
- **Statisztikus Elemzés (Static Analysis)**: PHPStan integráció típusellenőrzéshez
- **Kód Modernizáció**: Rector szabályok PHP frissítéshez

### Összépítő Rendszer (Build System) {#build-system}

- **Asset Kezelés**: Minifikáció a CSS/JS fájlokhoz
- **Fordítás**: POT fájl generálás
- **Csomagolás**: Archívum létrehozása a kiosztásra
- **Fejlesztési Mód**: Nem minifikált assetek hibakerőzéshez

## Konfiguráció {#configuration}

Az addon számos konfigurációs opciót támogat, amelyek a hálózatadminisztrátor felületen érhetők el.

## Hooks és Szűrők (Hooks and Filters) {#hooks-and-filters}

### Actions (Akciók) {#actions}

- `ultimate-multisite-addon-template_init` - Elküldődik az addon inicializációja után
- `ultimate-multisite-addon-template_loaded` - Elküldődik az addon összes fájljának betöltése után

### Filters (Szűrők) {#filters}

- `ultimate-multisite-addon-template_settings` - Modifikálja az addon beállításait
- `ultimate-multisite-addon-template_enabled` - Áthullja az addon aktiválás/deaktiválás állapotát

## Licenc {#license}

Ez az addon a GPL v3 vagy annál újabb licenc alatt áll.

## Támogatás {#support}

Támogatás és dokumentációért látogasson el ide: [MultisiteUltimate.com](https://multisiteultimate.com)
## Changelog {#changelog}

- Verzió 1.0.1 (2025-09-28): a prefix nevének megváltoztatása ultimate-multisite-re; szövegdomén megfrissítése; verzió emelése.


- Verzió (2025-09-28): a prefix nevének megváltoztatása ultimate-multisite-re; szövegdomén megfrissítése; verzió emelése.

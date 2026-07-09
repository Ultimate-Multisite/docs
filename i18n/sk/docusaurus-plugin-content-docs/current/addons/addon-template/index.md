---
title: Šablóna doplnku
sidebar_position: 1
_i18n_hash: 8036666d38c392e40bfedcdc73a73c2a
---
# Šablóna doplnku

{{ADDON_DESCRIPTION}}

## Požiadavky

- WordPress 5.3 alebo novší
- PHP 7.4 alebo novší
- plugin Multisite Ultimate (aktívny)

## Inštalácia

1. Nahrajte súbory doplnku do adresára `/wp-content/plugins/`
2. Aktivujte plugin cez menu 'Pluginy' vo WordPress
3. Nakonfigurujte nastavenia doplnku v správe siete

## Vývoj

### Nastavenie

```bash
# Install dependencies
composer install
npm install

# Run tests
npm run test

# Run code standards checks
vendor/bin/phpcs
vendor/bin/phpstan

# Fix code style issues
vendor/bin/phpcbf

# Build for production
npm run build
```

### Štruktúra projektu

```
ultimate-multisite-addon-template/
├── inc/                          # PHP triedy a include súbory
│   ├── class-multisite-ultimate-updater.php  # Obsluha aktualizácií
│   └── class-{{ADDON_SLUG_UNDERSCORE}}-main.php             # Hlavná funkcionalita
├── tests/                        # Unit testy
│   ├── bootstrap.php            # Bootstrap testov
│   ├── class-*-base.php         # Základná testovacia trieda
│   └── class-*-test.php         # Testovacie prípady
├── views/                       # Súbory šablón
├── assets/                      # Statické súbory
│   ├── css/                     # Štýly
│   ├── js/                      # Súbory JavaScript
│   └── images/                  # Obrázky
├── lang/                        # Jazykové súbory
├── composer.json                # PHP závislosti
├── package.json                 # Node.js závislosti
├── phpunit.xml.dist             # Konfigurácia PHPUnit
├── .phpcs.xml.dist              # Konfigurácia štandardov kódu
└── rector.php                   # Pravidlá modernizácie kódu
```

### Testovanie

Doplnok obsahuje komplexný testovací framework:

- **Unit testy**: Testy založené na PHPUnit s testovacou sadou WordPress
- **Základná testovacia trieda**: Poskytuje pomocné metódy pre bežné testovacie scenáre
- **Pokrytie testami**: Nakonfigurované na sledovanie pokrytia kódu
- **Multisite testovanie**: Testy bežia v multisite prostredí

### Štandardy kódu

- **WordPress Coding Standards**: Vynucované cez PHPCS
- **Kompatibilita s PHP 7.4+**: Podporované moderné funkcie PHP
- **Statická analýza**: Integrácia PHPStan na kontrolu typov
- **Modernizácia kódu**: Pravidlá Rector pre upgrady PHP

### Systém zostavenia

- **Spracovanie assetov**: Minifikácia súborov CSS/JS
- **Preklad**: Generovanie súboru POT
- **Balenie**: Vytvorenie archívu na distribúciu
- **Vývojový režim**: Neminifikované assety na ladenie

## Konfigurácia

Doplnok podporuje rôzne možnosti konfigurácie dostupné cez rozhranie správy siete.

## Hooky a filtre

### Akcie

- `ultimate-multisite-addon-template_init` - Spustí sa po inicializácii doplnku
- `ultimate-multisite-addon-template_loaded` - Spustí sa po načítaní všetkých súborov doplnku

### Filtre

- `ultimate-multisite-addon-template_settings` - Upravte nastavenia doplnku
- `ultimate-multisite-addon-template_enabled` - Prepíšte stav zapnutia/vypnutia doplnku

## Licencia

Tento doplnok je licencovaný pod GPL v3 alebo novšou.

## Podpora

Podporu a dokumentáciu nájdete na [MultisiteUltimate.com](https://multisiteultimate.com)
## Zoznam zmien

- Verzia 1.0.1 (2025-09-28): premenovanie prefixu na ultimate-multisite; aktualizácia text domain; zvýšenie verzie.


- Verzia  (2025-09-28): premenovanie prefixu na ultimate-multisite; aktualizácia text domain; zvýšenie verzie.

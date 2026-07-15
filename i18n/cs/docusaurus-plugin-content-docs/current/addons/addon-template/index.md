---
title: Addon šablona
sidebar_position: 1
_i18n_hash: 8036666d38c392e40bfedcdc73a73c2a
---
# Šablona pro Addon

Addon šablona — Ultimate Multisite.

## Požadavky {#requirements}

- WordPress verze 5.3 nebo vyšší
- PHP verze 7.4 nebo vyšší
- Plugin Ultimate Multisite (aktivní)

## Instalace {#installation}

1. Nahrajte soubory addon do adresáře `/wp-content/plugins/`
2. Aktivujte plugin v menu „Plugins“ v WordPressu
3. Konfigurujte nastavení addon v administraci sítě (network admin)

## Vývoj {#development}

### Nastavení {#setup}

```bash
# Nainstalovat závislosti
composer install
npm install

# Spustit testy
npm run test

# Spustit kontroly standardů kódu
vendor/bin/phpcs
vendor/bin/phpstan

# Opravit problémy se stylem kódu
vendor/bin/phpcbf

# Vybudovat pro produkci
npm run build
```

### Struktura projektu {#project-structure}

```
ultimate-multisite-addon-template/
├── inc/                          # PHP třídy a zahrnutí
│   ├── class-multisite-ultimate-updater.php  # Handler pro aktualizace
│   └── class-{{ADDON_SLUG_UNDERSCORE}}-main.php             # Hlavní funkcionalita
├── tests/                        # Unit testy
│   ├── bootstrap.php            # Bootstrap pro testy
│   ├── class-*-base.php         # Základní třída pro testy
│   └── class-*-test.php         # Testovací případy
├── views/                       # Soubory šablon
├── assets/                      # Statické soubory
│   ├── css/                     # Stylové listy
│   ├── js/                      # JavaScript soubory
│   └── images/                  # Obrázky
├── lang/                        # Jazykové soubory
├── composer.json                # PHP závislosti
├── package.json                 # Závislosti Node.js
├── phpunit.xml.dist             # Konfigurace PHPUnit
├── .phpcs.xml.dist              # Konfigurace standardů kódu
└── rector.php                   # Pravidla modernizace kódu
```

### Testování {#testing}

Addon obsahuje komplexní testovací rámec:

- **Unit Testy**: Testy založené na PHPUnit a WordPress testovací sadě
- **Základní třída pro testy**: Poskytuje pomocné metody pro běžné testovací scénáře
- **Pokrytí testů (Test Coverage)**: Konfigurováno pro sledování pokrytí kódu
- **Testování v síti (Multisite Testing)**: Testy se spouštějí v prostředí multisite

### Standardy kódu {#code-standards}

- **WordPress Coding Standards**: Enforzovány pomocí PHPCS
- **Kompatibilita s PHP 7.4+**: Podporuje moderní funkce PHP
- **Statická analýza**: Integrace PHPStan pro kontrolu typů
- **Modernizace kódu**: Pravidla Rector pro aktualizace PHP

### Systém budování (Build System) {#build-system}

- **Zpracování souborů**: Minifikace souborů CSS/JS
- **Překlad**: Generování souborů POT
- **Balení**: Vytváření archivu pro distribuci
- **Vývojový režim**: Neminifikované soubory pro ladění

## Konfigurace {#configuration}

Addon podporuje různé možnosti konfigurace, které jsou dostupné přes rozhraní administrace sítě (network admin).

## Hooks a Filtry {#hooks-and-filters}

### Actions (Akce) {#actions}

- `ultimate-multisite-addon-template_init` - Spustí se po inicializaci addon
- `ultimate-multisite-addon-template_loaded` - Spustí se po načtení všech souborů addon

### Filters (Filtry) {#filters}

- `ultimate-multisite-addon-template_settings` - Změna nastavení addon
- `ultimate-multisite-addon-template_enabled` - Přepsání stavu povolení/nepovolení addon

## Licence {#license}

Tento addon je licencován pod GPL v3 nebo novější.

## Podpora {#support}

Pro podporu a dokumentaci navštivte [MultisiteUltimate.com](https://multisiteultimate.com)
## Changelog {#changelog}

- Verze 1.0.1 (2025-09-28): změna prefixu na ultimate-multisite; aktualizace textového domény; zvýšení verze.


- Verze (2025-09-28): změna prefixu na ultimate-multisite; aktualizace textového domény; zvýšení verze.

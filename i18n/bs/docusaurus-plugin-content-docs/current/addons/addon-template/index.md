---
title: Dodatni šablon
sidebar_position: 1
_i18n_hash: 8036666d38c392e40bfedcdc73a73c2a
---
# Addon Template

{{ADDON_DESCRIPTION}}

## Zahtjevi

- WordPress 5.3 ili noviji
- PHP 7.4 ili noviji
- Multisite Ultimate plugin (aktiviran)

## Instalacija

1. Učitajte fajlove addona u direktorij `/wp-content/plugins/`
2. Aktivirajte plugin putem menija 'Plugins' u WordPressu
3. Podesite postavke addona u administraciji mreže (network admin)

## Razvoj

### Setup

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

### Project Structure

```
ultimate-multisite-addon-template/
├── inc/                          # PHP klase i uključivanja
│   ├── class-multisite-ultimate-updater.php  # Handler za ažuriranje
│   └── class-{{ADDON_SLUG_UNDERSCORE}}-main.php             # Glavna funkcionalnost
├── tests/                        # Unit testovi
│   ├── bootstrap.php            # Bootstrap za testiranje
│   ├── class-*-base.php         # Osnovna klasa za testiranje
│   └── class-*-test.php         # Testni slučajevi
├── views/                       # Fajlovi šablona
├── assets/                      # Statički resursi
│   ├── css/                     # Stilovi
│   ├── js/                      # JavaScript fajlovi
│   └── images/                  # Slike
├── lang/                        # Jezikovni fajlovi
├── composer.json                # PHP zavisnosti
├── package.json                 # Node.js zavisnosti
├── phpunit.xml.dist             # PHPUnit konfiguracija
├── .phpcs.xml.dist              # Konfiguracija standarda koda
└── rector.php                   # Pravila modernizacije koda
```

### Testiranje

Addon uključuje sveobuhvatni okvir za testiranje:

- **Unit Testovi**: Testovi zasnovani na PHPUnitu sa WordPress test suitem
- **Osnovna klasa za testiranje**: Pruža pomoćne metode za uobičajene scenarije testiranja
- **Pokrivenost testovima**: Konfigurisano za praćenje pokrivenosti koda
- **Testiranje u Multisite okruženju**: Testovi se pokreću u multisite okruženju

### Standardi koda

- **WordPress Coding Standards**: Implementirani putem PHPCS-a
- **PHP 7.4+ Kompatibilnost**: Podržane su moderne PHP značajke
- **Statistička analiza**: Integracija PHPStan-a za provjeru tipova
- **Modernizacija koda**: Rector pravila za nadogradnju PHP-a

### Sistem izgradnje (Build System)

- **Obrađivanje resursa**: Minifikacija za CSS/JS fajlove
- **Prevođenje**: Generisanje POT fajlova
- **Pakovanje**: Kreiranje arhive za distribuciju
- **Režim razvoja**: Neminifikovani resursi za debugovanje

## Konfiguracija

Addon podržava različite opcije konfiguracije dostupne putem interfejsa za administraciju mreže (network admin).

## Hooks i Filteri

### Actions

- `ultimate-multisite-addon-template_init` - Pokreće se nakon inicijalizacije addona
- `ultimate-multisite-addon-template_loaded` - Pokreće se nakon učitavanja svih fajlova addona

### Filters

- `ultimate-multisite-addon-template_settings` - Modifikovanje postavki addona
- `ultimate-multisite-addon-template_enabled` - Prekrivanje statusa omogućavanja/onemogućavanja addona

## Licenca

Ovaj addon je licenciran pod GPL v3 ili novijom verzijom.

## Podrška

Za podršku i dokumentaciju, posjetite [MultisiteUltimate.com](https://multisiteultimate.com)
## Changelog

- Verzija 1.0.1 (2025-09-28): preimenovanje prefiksa na ultimate-multisite; ažuriranje domena teksta; povećanje verzije.


- Verzija (2025-09-28): preimenovanje prefiksa na ultimate-multisite; ažuriranje domena teksta; povećanje verzije.

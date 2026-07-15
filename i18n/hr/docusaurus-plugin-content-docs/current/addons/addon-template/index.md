---
title: Predložak dodatka
sidebar_position: 1
_i18n_hash: 8036666d38c392e40bfedcdc73a73c2a
---
# Predložak dodatka

Predložak dodatka — Ultimate Multisite.

## Zahtjevi {#requirements}

- WordPress 5.3 ili noviji
- PHP 7.4 ili noviji
- Multisite Ultimate plugin (aktivan)

## Instalacija {#installation}

1. Prenesite datoteke dodatka u svoj direktorij `/wp-content/plugins/`
2. Aktivirajte plugin putem izbornika 'Plugins' u WordPress
3. Konfigurirajte postavke dodatka u mrežnom administratoru

## Razvoj {#development}

### Postavljanje {#setup}

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

### Struktura projekta {#project-structure}

```
ultimate-multisite-addon-template/
├── inc/                          # PHP klase i uključene datoteke
│   ├── class-multisite-ultimate-updater.php  # Rukovatelj ažuriranjima
│   └── class-{{ADDON_SLUG_UNDERSCORE}}-main.php             # Glavna funkcionalnost
├── tests/                        # Jedinični testovi
│   ├── bootstrap.php            # Pokretanje testova
│   ├── class-*-base.php         # Osnovna testna klasa
│   └── class-*-test.php         # Testni slučajevi
├── views/                       # Datoteke predložaka
├── assets/                      # Statička sredstva
│   ├── css/                     # Stylesheets
│   ├── js/                      # JavaScript datoteke
│   └── images/                  # Slike
├── lang/                        # Jezične datoteke
├── composer.json                # PHP ovisnosti
├── package.json                 # Node.js ovisnosti
├── phpunit.xml.dist             # PHPUnit konfiguracija
├── .phpcs.xml.dist              # Konfiguracija standarda koda
└── rector.php                   # Pravila modernizacije koda
```

### Testiranje {#testing}

Dodatak uključuje sveobuhvatan okvir za testiranje:

- **Jedinični testovi**: Testovi temeljeni na PHPUnit s WordPress testnim paketom
- **Osnovna testna klasa**: Pruža pomoćne metode za uobičajene testne scenarije
- **Pokrivenost testovima**: Konfigurirano za praćenje pokrivenosti koda
- **Multisite testiranje**: Testovi se izvode u multisite okruženju

### Standardi koda {#code-standards}

- **WordPress standardi kodiranja**: Provode se putem PHPCS
- **Kompatibilnost s PHP 7.4+**: Podržane su moderne PHP značajke
- **Statička analiza**: PHPStan integracija za provjeru tipova
- **Modernizacija koda**: Rector pravila za nadogradnje PHP-a

### Sustav izgradnje {#build-system}

- **Obrada sredstava**: Minifikacija CSS/JS datoteka
- **Prijevod**: Generiranje POT datoteke
- **Pakiranje**: Izrada arhive za distribuciju
- **Razvojni način rada**: Neminificirana sredstva za otklanjanje pogrešaka

## Konfiguracija {#configuration}

Dodatak podržava razne opcije konfiguracije dostupne putem sučelja mrežnog administratora.

## Hookovi i filtri {#hooks-and-filters}

### Radnje {#actions}

- `ultimate-multisite-addon-template_init` - Pokreće se nakon inicijalizacije dodatka
- `ultimate-multisite-addon-template_loaded` - Pokreće se nakon što se učitaju sve datoteke dodatka

### Filtri {#filters}

- `ultimate-multisite-addon-template_settings` - Izmijenite postavke dodatka
- `ultimate-multisite-addon-template_enabled` - Nadjačajte status omogućavanja/onemogućavanja dodatka

## Licenca {#license}

Ovaj dodatak licenciran je pod GPL v3 ili novijom verzijom.

## Podrška {#support}

Za podršku i dokumentaciju posjetite [MultisiteUltimate.com](https://multisiteultimate.com)
## Dnevnik promjena {#changelog}

- Verzija 1.0.1 (2025-09-28): preimenovan prefiks u ultimate-multisite; ažuriran text domain; povećanje verzije.


- Verzija  (2025-09-28): preimenovan prefiks u ultimate-multisite; ažuriran text domain; povećanje verzije.

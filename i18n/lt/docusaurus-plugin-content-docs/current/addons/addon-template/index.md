---
title: Papildinio šablonas
sidebar_position: 1
_i18n_hash: 8036666d38c392e40bfedcdc73a73c2a
---
# Priedo šablonas

{{ADDON_DESCRIPTION}}

## Reikalavimai

- WordPress 5.3 arba naujesnė
- PHP 7.4 arba naujesnė
- Multisite Ultimate įskiepis (aktyvus)

## Diegimas

1. Įkelkite priedo failus į savo `/wp-content/plugins/` katalogą
2. Aktyvuokite įskiepį per WordPress meniu „Plugins“
3. Sukonfigūruokite priedo nustatymus tinklo administravime

## Kūrimas

### Sąranka

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

### Projekto struktūra

```
ultimate-multisite-addon-template/
├── inc/                          # PHP klasės ir įtraukiami failai
│   ├── class-multisite-ultimate-updater.php  # Atnaujinimų tvarkyklė
│   └── class-{{ADDON_SLUG_UNDERSCORE}}-main.php             # Pagrindinės funkcijos
├── tests/                        # Vienetų testai
│   ├── bootstrap.php            # Testų paleidimo sąranka
│   ├── class-*-base.php         # Bazinė testų klasė
│   └── class-*-test.php         # Testų atvejai
├── views/                       # Šablonų failai
├── assets/                      # Statiniai ištekliai
│   ├── css/                     # Stilių lentelės
│   ├── js/                      # JavaScript failai
│   └── images/                  # Vaizdai
├── lang/                        # Kalbų failai
├── composer.json                # PHP priklausomybės
├── package.json                 # Node.js priklausomybės
├── phpunit.xml.dist             # PHPUnit konfigūracija
├── .phpcs.xml.dist              # Kodo standartų konfigūracija
└── rector.php                   # Kodo modernizavimo taisyklės
```

### Testavimas

Priedas apima išsamią testavimo sistemą:

- **Vienetų testai**: PHPUnit pagrįsti testai su WordPress testų rinkiniu
- **Bazinė testų klasė**: Suteikia pagalbinius metodus dažniems testų scenarijams
- **Testų aprėptis**: Sukonfigūruota kodo aprėpčiai stebėti
- **Multisite testavimas**: Testai vykdomi multisite aplinkoje

### Kodo standartai

- **WordPress kodo standartai**: Užtikrinami naudojant PHPCS
- **PHP 7.4+ suderinamumas**: Palaikomos šiuolaikinės PHP funkcijos
- **Statinė analizė**: PHPStan integracija tipų tikrinimui
- **Kodo modernizavimas**: Rector taisyklės PHP atnaujinimams

### Kūrimo sistema

- **Išteklių apdorojimas**: CSS/JS failų minimizavimas
- **Vertimas**: POT failo generavimas
- **Pakavimas**: Archyvo kūrimas platinimui
- **Kūrimo režimas**: Neminimizuoti ištekliai derinimui

## Konfigūracija

Priedas palaiko įvairias konfigūracijos parinktis, pasiekiamas per tinklo administravimo sąsają.

## Hooks ir filtrai

### Veiksmai

- `ultimate-multisite-addon-template_init` - Suaktyvinamas po priedo inicijavimo
- `ultimate-multisite-addon-template_loaded` - Suaktyvinamas įkėlus visus priedo failus

### Filtrai

- `ultimate-multisite-addon-template_settings` - Keisti priedo nustatymus
- `ultimate-multisite-addon-template_enabled` - Perrašyti priedo įjungimo / išjungimo būseną

## Licencija

Šis priedas licencijuojamas pagal GPL v3 arba naujesnę versiją.

## Pagalba

Pagalbos ir dokumentacijos ieškokite [MultisiteUltimate.com](https://multisiteultimate.com)
## Pakeitimų žurnalas

- Versija 1.0.1 (2025-09-28): pervadinti prefiksą į ultimate-multisite; atnaujinti teksto domeną; versijos padidinimas.


- Versija  (2025-09-28): pervadinti prefiksą į ultimate-multisite; atnaujinti teksto domeną; versijos padidinimas.

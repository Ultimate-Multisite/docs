---
title: Modello Addon
sidebar_position: 1
_i18n_hash: 8036666d38c392e40bfedcdc73a73c2a
---
# Modello di Addon

{{ADDON_DESCRIPTION}}

## Requisiti

- WordPress 5.3 o superiore
- PHP 7.4 o superiore
- Multisite Ultimate plugin (attivo)

## Installazione

1. Carica i file dell'addon nella tua directory `/wp-content/plugins/`.
2. Attiva il plugin tramite il menu 'Plugins' in WordPress.
3. Configura le impostazioni dell'addon nell'amministrazione di rete.

## Sviluppo

### Configurazione

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

### Struttura del progetto

```
ultimate-multisite-addon-template/
├── inc/                          # PHP classes and includes
│   ├── class-multisite-ultimate-updater.php  # Update handler
│   └── class-{{ADDON_SLUG_UNDERSCORE}}-main.php             # Main functionality
├── tests/                        # Unit tests
│   ├── bootstrap.php            # Test bootstrap
│   ├── class-*-base.php         # Base test class
│   └── class-*-test.php         # Test cases
├── views/                       # Template files
├── assets/                      # Static assets
│   ├── css/                     # Stylesheets
│   ├── js/                      # JavaScript files
│   └── images/                  # Images
├── lang/                        # Language files
├── composer.json                # PHP dependencies
├── package.json                 # Node.js dependencies
├── phpunit.xml.dist             # PHPUnit configuration
├── .phpcs.xml.dist              # Code standards configuration
└── rector.php                   # Code modernization rules
```

### Test

L'addon include un framework di test completo:

- **Test Unitari**: test basati su PHPUnit con il test suite di WordPress.
- **Classe di Test Base**: fornisce metodi di supporto per scenari di test comuni.
- **Copertura dei Test**: configurata per tracciare la copertura del codice.
- **Test Multisite**: i test vengono eseguiti in un ambiente multisito.

### Standard di Codice

- **Standard di Codifica WordPress**: applicato tramite PHPCS.
- **Compatibilità PHP 7.4+**: supportate le funzionalità PHP moderne.
- **Analisi Statica**: integrazione PHPStan per il controllo dei tipi.
- **Modernizzazione del Codice**: regole Rector per l'aggiornamento di PHP.

### Sistema di Build

- **Elaborazione degli Asset**: minificazione per file CSS/JS.
- **Traduzione**: generazione di file POT.
- **Imballaggio**: creazione di archivi per la distribuzione.
- **Modalità Sviluppo**: asset non minificati per il debug.

## Configurazione

L'addon supporta varie opzioni di configurazione accessibili tramite l'interfaccia di amministrazione di rete.

## Hooks e Filtri

### Azioni

- `ultimate-multisite-addon-template_init` - Attivato dopo l'inizializzazione dell'addon
- `ultimate-multisite-addon-template_loaded` - Attivato dopo il caricamento di tutti i file dell'addon

### Filtri

- `ultimate-multisite-addon-template_settings` - Modifica le impostazioni dell'addon
- `ultimate-multisite-addon-template_enabled` - Sovrascrive lo stato di abilitazione/disabilitazione dell'addon

## Licenza

Questo addon è concesso in licenza sotto GPL v3 o successivo.

## Supporto

Per supporto e documentazione, visita [MultisiteUltimate.com](https://multisiteultimate.com)

## Changelog

- Versione 1.0.1 (2025-09-28): rinomina prefisso a ultimate-multisite; aggiorna dominio di testo; incremento versione.
- Versione (2025-09-28): rinomina prefisso a ultimate-multisite; aggiorna dominio di testo; incremento versione.

---
title: Modèle d'Addon
sidebar_position: 1
_i18n_hash: 8036666d38c392e40bfedcdc73a73c2a
---
# Modèle d'Add-on

{{ADDON_DESCRIPTION}}

## Exigences

- WordPress 5.3 ou supérieur
- PHP 7.4 ou supérieur
- Multisite Ultimate plugin (actif)

## Installation

1. Téléchargez les fichiers de l'add-on dans votre répertoire `/wp-content/plugins/`
2. Activez le plugin via le menu 'Plugins' dans WordPress
3. Configurez les paramètres de l'add-on dans l'administration réseau

## Développement

### Configuration

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

### Structure du projet

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

### Tests

L'add-on inclut un cadre de test complet :

- **Tests unitaires**: Tests basés sur PHPUnit avec la suite de tests WordPress
- **Classe de test de base**: Fournit des méthodes d'assistance pour les scénarios de test courants
- **Couverture de test**: Configurée pour suivre la couverture du code
- **Tests multisite**: Tests exécutés dans un environnement multisite

### Normes de code

- **Normes de codage WordPress**: Appliquées via PHPCS
- **Compatibilité PHP 7.4+**: Fonctionnalités PHP modernes prises en charge
- **Analyse statique**: Intégration PHPStan pour la vérification de type
- **Modernisation du code**: Règles Rector pour les mises à jour PHP

### Système de construction

- **Traitement des ressources**: Minification pour les fichiers CSS/JS
- **Traduction**: Génération de fichiers POT
- **Emballage**: Création d'archives pour la distribution
- **Mode développement**: Ressources non minifiées pour le débogage

## Configuration

L'add-on prend en charge diverses options de configuration accessibles via l'interface d'administration réseau.

## Hooks et filtres

### Actions

- `ultimate-multisite-addon-template_init` - Déclenché après l'initialisation de l'add-on
- `ultimate-multisite-addon-template_loaded` - Déclenché après le chargement de tous les fichiers de l'add-on

### Filtres

- `ultimate-multisite-addon-template_settings` - Modifier les paramètres de l'add-on
- `ultimate-multisite-addon-template_enabled` - Remplacer l'état d'activation/désactivation de l'add-on

## Licence

Cet add-on est sous licence GPL v3 ou ultérieure.

## Support

Pour le support et la documentation, visitez [MultisiteUltimate.com](https://multisiteultimate.com)

## Journal des modifications

- Version 1.0.1 (2025-09-28) : renommer le préfixe en ultimate-multisite ; mettre à jour le domaine de texte ; mise à jour de la version.
- Version (2025-09-28) : renommer le préfixe en ultimate-multisite ; mettre à jour le domaine de texte ; mise à jour de la version.

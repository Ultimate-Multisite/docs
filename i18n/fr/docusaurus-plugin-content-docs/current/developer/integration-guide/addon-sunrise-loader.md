---
title: Addon Sunrise File Loader
sidebar_position: 5
_i18n_hash: 2b24e0c6cf53f4dab0334db99a3b267b
---
# Addon Sunrise File Loader

Ultimate Multisite 2.8.0 ajoute un chargeur d'extension "sunrise" pour les add-ons et les intégrations MU-plugin personnalisées qui doivent s'exécuter pendant l'initialisation (bootstrapping) de WordPress sans modifier le fichier `wp-content/sunrise.php` généré.

## Quand l'utiliser {#when-to-use-it}

Utilisez une extension sunrise lorsque votre intégration doit s'exécuter avant le chargement des plugins réguliers, par exemple pour le routage de domaines personnalisés, le traitement des requêtes spécifiques à l'hébergeur, ou les ajustements précoces du réseau.

Pour les intégrations normales, préférez les plugins WordPress réguliers, les MU-plugins et les hooks documentés d'Ultimate Multisite. Le code sunrise s'exécute très tôt et doit donc rester petit, défensif et sans dépendances.

## Convention de nommage des fichiers {#file-naming-convention}

Créez un fichier PHP nommé `sunrise.php` dans un répertoire d'add-on dont le nom commence par `ultimate-multisite-`:

```text
wp-content/plugins/ultimate-multisite-example-addon/sunrise.php
```

Le chargeur analyse le répertoire des plugins à la recherche de ce modèle :

```text
wp-content/plugins/ultimate-multisite-*/sunrise.php
```

Les fichiers correspondants sont chargés par ordre alphabétique du chemin de l'add-on.

## Où placer le fichier {#where-to-place-the-file}

Placez le fichier dans le répertoire racine de l'add-on qui gère le comportement sunrise :

```text
wp-content/
└── plugins/
    └── ultimate-multisite-example-addon/
        ├── ultimate-multisite-example-addon.php
        └── sunrise.php
```

L'analyse est résolue par rapport à `WP_CONTENT_DIR`, et non par rapport à la valeur actuelle de `WP_PLUGIN_DIR`. Cela garantit que la découverte reste stable lorsque la multi-location ou tout autre code d'initialisation précoce modifie les constantes de répertoire des plugins pendant le sunrise.

Ne modifiez jamais directement le fichier `wp-content/sunrise.php` généré. Le chargeur permet au code personnalisé d'étendre le comportement sunrise sans avoir à forker le fichier sunrise de base qu'Ultimate Multisite installe et met à jour.

## Hooks et filtres disponibles {#hooks-and-filters-available}

Les fichiers sunrise des add-ons s'exécutent après que le mappage de domaine d'Ultimate Multisite a été chargé et avant que WordPress ne déclenche `ms_loaded`. À ce stade, un fichier sunrise peut :

- lire ou remplacer `$current_site` et `$current_blog`;
- accéder à `$wpdb` après que la configuration de la base de données a été chargée ;
- définir des constantes de type sunrise telles que `BLOG_ID_CURRENT_SITE` si nécessaire ;
- lire l'état de l'aide sunrise d'Ultimate Multisite, y compris l'état de routage utilisé par les intégrations multi-location.

Ultimate Multisite déclenche `wu_sunrise_loaded` après que son chargeur sunrise ait terminé. Utilisez ce hook pour le code qui doit s'exécuter après l'achèvement du bootstrapping sunrise, mais qui appartient toujours au cycle de vie sunrise.

N'appelez que des fonctions qui sont déjà chargées pendant la phase sunrise. Évitez le travail lourd de base de données, le rendu de modèles (template rendering), les requêtes HTTP et tout code qui suppose que l'ordre de chargement normal des plugins est terminé.

## Exemple minimal {#minimal-example}

```php
<?php
/**
 * Extension sunrise pour une intégration d'hôte personnalisée.
 */

if (! defined('ABSPATH')) {
    exit;
}

if (isset($current_blog) && $current_blog instanceof stdClass) {
    // Ajuster le routage ou les constantes précoces avant ms_loaded.
}
```

Après avoir déployé le fichier, chargez un domaine mappé et une URL de site principal non mappé pour confirmer que les deux chemins s'initialisent correctement.

---
title: Constructeur et bac à sable de plugins
sidebar_position: 21
_i18n_hash: 74c409a36b52ea261922998822b286d0
---
# Plugin Builder & Sandbox

Gratis AI Agent v1.5.0 introduit le **Plugin Builder & Sandbox System**, qui permet à l'assistant IA de générer, d'activer et de gérer des plugins WordPress sur votre réseau — le tout via un environnement sandbox isolé et sécurisé.

## Aperçu

Le Plugin Builder permet à l'assistant IA d'écrire des plugins WordPress personnalisés en réponse à des requêtes en langage naturel. Les plugins générés sont validés, stockés et activés dans une couche sandbox avant d'affecter la fonctionnalité du site en direct.

Les cas d'utilisation comprennent :

- La génération de plugins utilitaires légers sans intervention de développeur.
- Le prototypage de fonctionnalités nécessitant des hooks WordPress ou des types de publication personnalisés.
- La création de scripts d'automatisation de courte durée pour des opérations par lots.

## Générer un Plugin via l'IA

Pour générer un plugin, ouvrez l'interface de chat de Gratis AI Agent et décrivez ce dont vous avez besoin. Par exemple :

> "Crée un plugin qui ajoute un avis d'administration personnalisé sur le tableau de bord."

L'IA va :

1. Produire le code PHP du plugin en utilisant une génération de code structurée.
2. Valider le résultat pour détecter les erreurs de syntaxe et les modèles non sécurisés.
3. Sauvegarder le plugin généré dans le store sandbox.
4. Retourner une confirmation avec le slug du plugin et un bouton **Activate in Sandbox**.

Vous pouvez affiner le résultat en poursuivant la conversation dans le même fil avant de l'activer.

## Activation en Sandbox

L'activation d'un plugin généré en sandbox est différente de son activation sur le réseau en direct. Le sandbox :

- Exécute le plugin dans un environnement WordPress isolé (wp-env).
- Capture toutes les erreurs PHP, les avertissements ou les conflits de hooks.
- Signale le résultat de l'activation dans l'interface de chat.

Pour activer un plugin en sandbox, cliquez sur le bouton **Activate in Sandbox** dans la réponse de l'IA, ou utilisez la commande slash :

```
/activate-plugin <plugin-slug>
```

Un message de statut confirme si l'activation a réussi ou échoué. En cas d'échec, le journal d'erreurs est affiché dans le fil de discussion.

## Gestion des Plugins Générés

Les plugins générés sont listés dans **Gratis AI Agent → Plugin Builder → Manage Plugins**. Depuis cet écran, vous pouvez :

| Action | Description |
|---|---|
| **View source** | Examiner le code PHP complet du plugin. |
| **Re-activate in sandbox** | Relancer la vérification d'activation en sandbox. |
| **Install on network** | Déployer le plugin sur le réseau en direct (nécessite une confirmation manuelle). |
| **Update** | Fournir une nouvelle version via l'IA, remplaçant le code existant. |
| **Delete** | Supprimer le plugin du store sandbox. Il est désactivé de tous les sites au préalable. |

:::warning
**Install on network** déploie le plugin généré sur votre multisite WordPress en direct. Veuillez examiner le code du plugin avant de continuer. Gratis AI Agent vous demandera une confirmation avant d'effectuer une installation en direct.
:::

## Installation d'un Plugin Généré sur le Réseau

Lorsque vous êtes satisfait d'un plugin en sandbox, vous pouvez l'installer sur le réseau en direct :

1. Allez dans **Gratis AI Agent → Plugin Builder → Manage Plugins**.
2. Cliquez sur **Install on Network** à côté du plugin que vous souhaitez déployer.
3. Confirmez la boîte de dialogue. Le plugin est installé dans `wp-content/plugins/` et activé au niveau du réseau.

Alternativement, utilisez la commande slash dans l'interface de chat :

```
/install-plugin <plugin-slug>
```

## Mises à Jour de Plugins

Pour mettre à jour un plugin généré, décrivez le changement à l'assistant IA dans une nouvelle conversation :

> "Mets à jour le plugin dashboard-notice pour qu'il n'affiche l'avis qu'aux administrateurs."

L'IA génère une nouvelle version, qui apparaît en sandbox à côté de la version actuelle. Vous examinez le diff et confirmez avant que la mise à jour ne soit appliquée.

## Intégration HookScanner

Le Plugin Builder utilise un **HookScanner** intégré pour analyser les hooks et les filtres enregistrés par chaque plugin généré. Le résultat de HookScanner est affiché dans la réponse de chat et comprend :

- Les hooks d'action enregistrés (`add_action` calls).
- Les hooks de filtre enregistrés (`add_filter` calls).
- Tous les hooks trouvés dans les dépendances du plugin (ignore les répertoires `vendor/` et `node_modules/`).

Ceci vous aide à comprendre le comportement d'un plugin avant de l'activer.

## Considérations de Sécurité

- Les plugins générés sont stockés séparément des plugins installés manuellement et ne sont pas accessibles via l'écran de gestion de plugins standard de WordPress tant que vous ne les installez pas explicitement sur le réseau.
- Le sandbox utilise la validation de chemin pour empêcher la traversée de répertoire lors de l'écriture des fichiers de plugin.
- Les plugins contenant des appels de fonctions dangereux (par exemple, `eval`, `exec`, `system`) sont signalés pendant la validation et ne seront pas activés.

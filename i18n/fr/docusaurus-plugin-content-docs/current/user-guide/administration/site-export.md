---
title: Exportation du site
sidebar_position: 11
_i18n_hash: d25255aa1b01df64a9008f91e3dcbeb1
---
# Exportation de site {#site-export}

La page d'administration **Exportation de site** permet aux administrateurs de réseau de regrouper un site unique, ou l'ensemble du réseau, dans une archive téléchargeable pour la migration, la sauvegarde ou la transmission du travail.

## Exporter un site unique {#exporting-one-site}

Allez dans **Ultimate Multisite > Exportation de site** et choisissez **Générer une nouvelle exportation de site**. Sélectionnez le sous-site que vous souhaitez exporter, puis choisissez si l'archive doit inclure les téléchargements, les plugins et les thèmes.

Une fois l'exportation terminée, téléchargez le fichier ZIP de la liste des **Exportations existantes**. Les fichiers ZIP d'exportation incluent désormais un `index.php` auto-démarrable et un `readme.txt`, ce qui permet de téléverser l'archive sur un nouvel hébergeur et de la démarrer sans avoir à installer au préalable un plugin d'importateur séparé.

## Exporter l'ensemble du réseau {#exporting-the-whole-network}

Utilisez **Exportation de réseau** sur la page Exportation de site lorsque vous avez besoin d'une seule archive contenant tous les sous-sites du réseau. Ceci est utile avant les migrations d'hébergement, les exercices de reprise après sinistre ou les reconstructions d'environnements de staging où chaque sous-site doit voyager ensemble.

Étant donné qu'une exportation de réseau peut être beaucoup plus volumineuse qu'une exportation de site unique, effectuez-la pendant une période de faible trafic et assurez-vous que le stockage cible dispose de suffisamment d'espace libre pour les téléchargements, les plugins, les thèmes et les fichiers ZIP générés.

### Bundles d'importation de réseau {#network-import-bundles}

À partir d'Ultimate Multisite 2.12.0, Site Exporter peut générer des **bundles d'importation de réseau** — des archives spécialisées conçues pour une restauration de site à l'échelle du réseau simplifiée. Un bundle d'importation de réseau contient tous les fichiers et métadonnées nécessaires pour restaurer plusieurs sites sur une nouvelle installation de réseau.

#### Générer un bundle d'importation de réseau {#generating-a-network-import-bundle}

1. Allez dans **Ultimate Multisite > Exportation de site**
2. Cliquez sur **Générer une nouvelle exportation de réseau**
3. Sélectionnez **Bundle d'importation de réseau** comme type d'exportation
4. Choisissez si vous souhaitez inclure les téléchargements, les plugins et les thèmes
5. Cliquez sur **Générer**
6. Téléchargez le fichier ZIP du bundle dans la liste des **Exportations existantes**

#### Restaurer à partir d'un bundle d'importation de réseau {#restoring-from-a-network-import-bundle}

Pour restaurer des sites à partir d'un bundle d'importation de réseau :

1. Installez Ultimate Multisite sur votre hébergeur cible
2. Terminez l'assistant de configuration multisite
3. Allez dans **Ultimate Multisite > Exportation de site** sur le nouveau réseau
4. Cliquez sur **Importer un bundle de réseau**
5. Téléversez le fichier ZIP du bundle d'importation de réseau
6. Suivez les instructions d'importation affichées à l'écran
7. Le processus d'importation restaurera tous les sites, leur contenu et leurs configurations

Les bundles d'importation de réseau préservent :
- Le contenu des sites (articles, pages, types de contenu personnalisés)
- Les paramètres et options des sites
- Les rôles et permissions des utilisateurs
- Les plugins et thèmes (s'ils sont inclus dans le bundle)
- Les téléchargements multimédias (s'ils sont inclus dans le bundle)
- Les tables et données de base de données personnalisées

## Installer un fichier ZIP d'exportation auto-démarrable {#installing-a-self-booting-export-zip}

Pour restaurer un fichier ZIP auto-démarrable sur un nouvel hébergeur :

1. Téléversez le contenu du fichier ZIP exporté dans le répertoire racine web cible.
2. Ouvrez le `index.php` téléversé dans un navigateur.
3. Suivez les instructions d'installation affichées à l'écran du package d'exportation regroupé.
4. Consultez le `readme.txt` regroupé pour toute note spécifique à l'exportation avant de supprimer les fichiers temporaires.

Pour les détails d'installation et d'importation spécifiques aux add-ons, consultez la [documentation de l'add-on Site Exporter](/addons/site-exporter).

Pour l'outil de site unique ajouté dans Ultimate Multisite 2.9.0, consultez [Exporter et importer](/user-guide/administration/export-import).

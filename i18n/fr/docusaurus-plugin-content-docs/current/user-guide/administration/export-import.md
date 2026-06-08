---
title: Exportation et Importation
sidebar_position: 12
_i18n_hash: 6536f9ebee269a8553a57733e4cb03fc
---
# Exportation et Importation

Ultimate Multisite 2.9.0 ajoute un outil d'**Exportation et d'Importation** pour site unique sous **Outils > Exportation et Importation**. Utilisez-le lorsque vous devez empaqueter un site WordPress en fichier ZIP, restaurer ce fichier ZIP, ou déplacer un site entre des installations WordPress compatibles Ultimate Multisite et site unique.

## Permissions requises

Vous devez vous connecter en tant qu'administrateur ayant accès au menu **Outils** de WordPress sur le site que vous exportez ou importez. Sur un réseau multisite, utilisez un compte administrateur réseau lorsque vous exportez ou importez des sous-sites à partir des outils Ultimate Multisite de niveau réseau.

Les téléchargements ZIP d'exportation sont servis via un point de terminaison de téléchargement authentifié. Par conséquent, gardez la session administrateur active jusqu'à ce que le téléchargement soit terminé et ne partagez pas les URL de téléchargement générées publiquement.

## Exporter un site en ZIP

1. Dans le tableau de bord WordPress du site que vous souhaitez copier, allez à **Outils > Exportation et Importation**.
2. Ouvrez la zone d'exportation et choisissez le site que vous souhaitez empaqueter.
3. Sélectionnez le contenu optionnel à inclure, tel que les téléchargements, les plugins et les thèmes, lorsque ces options sont disponibles.
4. Lancez l'exportation et attendez que le processus soit terminé. Les grands sites peuvent nécessiter un traitement en arrière-plan avant que le fichier ZIP ne soit prêt.
5. Téléchargez le fichier ZIP terminé depuis la liste des exportations.

Conservez le fichier ZIP dans un endroit sécurisé. Il peut contenir le contenu du site, les paramètres, les fichiers multimédias et les actifs de code sélectionnés.

## Ce que l'exportation inclut

Un fichier ZIP d'exportation peut inclure :

- Le contenu de la base de données et la configuration du site sélectionné.
- Les fichiers multimédias téléchargés si les téléchargements sont inclus.
- Les plugins et les thèmes si ces options sont sélectionnées.
- Les métadonnées d'importation utilisées par l'outil d'Exportation et d'Importation pour reconstruire le site sur l'installation cible.

La taille exacte du fichier ZIP dépend de la quantité de médias, des plugins et thèmes sélectionnés, et de la taille des tables de la base de données du site.

## Importer un site depuis un ZIP

1. Allez à **Outils > Exportation et Importation** sur le site WordPress de destination.
2. Ouvrez la zone d'importation et téléchargez le fichier ZIP créé par l'outil d'Exportation et d'Importation.
3. Entrez une URL de remplacement si le site doit utiliser une nouvelle adresse, ou laissez le champ vide pour conserver l'URL originale.
4. Choisissez si vous souhaitez supprimer le fichier ZIP téléchargé après la fin de l'importation.
5. Cliquez sur **Commencer l'importation**.
6. Surveillez l'importation en cours jusqu'à ce qu'elle soit terminée. N'utilisez **Annuler l'importation** que si vous devez arrêter le processus avant son achèvement.
7. Examinez le site importé avant d'autoriser le trafic normal ou l'accès des clients.

Sur une installation WordPress de site unique, l'importation d'un fichier ZIP remplace le site actuel par le site importé. Créez une sauvegarde complète du site cible avant de commencer, et évitez de lancer plusieurs importations pour le même site en même temps.

## Limitations et notes de compatibilité

- Les répertoires de téléchargement ou les bibliothèques multimédias très volumineux peuvent générer des fichiers ZIP très lourds. Confirmez les limites de téléchargement PHP, les limites d'exécution, l'espace disque, la mémoire et les paramètres de délai d'expiration du serveur avant d'exporter ou d'importer de grands sites.
- Les bibliothèques multimédias très volumineuses pourraient devoir être déplacées pendant une fenêtre de maintenance à faible trafic.
- L'installation WordPress cible doit exécuter des versions compatibles de WordPress, PHP, Ultimate Multisite, de plugins et de thèmes.
- Une importation pour site unique remplace le site cible. Ce n'est pas un outil de fusion.
- Les transferts de multisite vers site unique et de site unique vers multisite ne sont pris en charge que lorsque l'environnement cible peut exécuter les plugins, thèmes, URL et composants Ultimate Multisite requis du site exporté.
- Gardez le fichier ZIP privé. Il peut contenir le contenu de la base de données, les fichiers téléchargés et les détails de configuration du site exporté.

Pour les anciens flux de travail d'exportation de niveau réseau, consultez [Exportation de site](/user-guide/administration/site-export).

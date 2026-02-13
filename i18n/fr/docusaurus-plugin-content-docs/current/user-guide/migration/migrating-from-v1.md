---
title: Migration depuis V1
sidebar_position: 17
_i18n_hash: ab3379eeae93ce385ad01c599fc181cb
---
# Migration depuis V1

## Ultimate Multisite est passé de sa famille de versions 1.x à la famille de versions 2.x

La version 2.0 d'Ultimate Multisite et les versions ultérieures représentent une réécriture complète du code, ce qui signifie qu'il y a très peu de choses partagées entre l'ancienne version et la nouvelle. Pour cette raison, lors de la mise à niveau de 1.x vers 2.x, vos données devront être migrées vers un format que les nouvelles versions pourront comprendre.

Heureusement, Ultimate Multisite 2.0+ **vient avec un migrateur** intégré au cœur qui est capable de détecter les données de l'ancienne version et de les convertir au nouveau format. Cette migration se produit pendant le **Setup Wizard** de la version 2.0+.

Cette leçon explique comment fonctionne le migrateur, quoi faire en cas d'échec et comment résoudre les problèmes qui pourraient survenir pendant ce processus.

_**IMPORTANT : Avant de commencer la mise à niveau de la version 1.x vers la version 2.0, assurez‑vous de créer une sauvegarde de la base de données de votre site**_

## Premiers pas

La première étape consiste à télécharger le fichier .zip du plugin et à installer la version 2.0 sur votre tableau de bord d'administration réseau.

Après avoir [installé et activé la version 2.0](../getting-started/installing-ultimate-multisite.md), le système détectera automatiquement que votre Multisite fonctionne sur la version héritée et vous verrez ce message en haut de la page du plugin.

_**NOTE :** Si vous avez Ultimate Multisite 1.x installé sur votre Multisite, vous avez la possibilité de remplacer le plugin par la version que vous venez de télécharger. Veuillez cliquer sur **Replace current with uploaded**._

<!-- Screenshot unavailable: Plugin page showing option to replace v1 with uploaded v2 version -->

La page suivante vous indiquera quels add‑ons hérités vous avez installés avec la version 1.x. Elle vous donnera des instructions sur la compatibilité de la version que vous utilisez avec la version 2.0 ou si vous devez installer une version mise à jour de l'add‑on après la migration.

<!-- Screenshot unavailable: Message on the top of the plugins page about updating to v2.0, with list of add-ons that need updating -->

Une fois que vous êtes prêt à poursuivre, vous pouvez cliquer sur le bouton qui indique **Visit the Installer to finish the upgrade**.

<!-- Screenshot unavailable: Button saying Visit the Installer to finish the upgrade -->

Il vous amènera alors à la page du wizard d'installation avec quelques messages de bienvenue. Vous n'avez qu'à cliquer sur **Get Started** pour passer à la page suivante.

<!-- Screenshot unavailable: Setup Wizard welcoming page with Get Started button -->

Après avoir cliqué sur **Get Started**, il vous redirigera vers les Pre-install Checks_._ Cela vous montrera vos informations système et l'installation WordPress et vous indiquera si elle répond aux **Ultimate Multisite's requirements**.

<!-- Screenshot unavailable: Pre-install Checks page showing system requirements confirmation -->

L'étape suivante consiste à saisir votre clé de licence Ultimate Multisite et à activer le plugin. Cela garantira que toutes les fonctionnalités, y compris les add‑ons, seront disponibles sur votre site.

<!-- Screenshot unavailable: License activation page with license key input and Agree and Activate button -->

Après avoir saisi votre clé, cliquez sur **Agree & Activate**.

Après l'activation de la licence, vous pouvez commencer l'installation réelle en cliquant sur **Install** sur la page suivante. Cela créera automatiquement les fichiers et la base de données nécessaires au fonctionnement de la version 2.0.

<!-- Screenshot unavailable: Installation page showing what will be updated with Install button -->

## Maintenant, la migration

Le migrateur possède une fonction de sécurité intégrée qui vérifie l'ensemble de votre multisite afin de s'assurer que toutes vos données Ultimate Multisite peuvent être migrées sans problème. Cliquez sur le bouton **Run Check** pour démarrer le processus.

<!-- Screenshot unavailable: Migration page with Run Check button to verify data can be converted -->

Après avoir exécuté la vérification, vous avez deux possibilités : le résultat peut être **with** une erreur ou **without an error**.

### Avec une erreur

Si vous recevez un message d'erreur, vous devrez contacter notre équipe de support afin qu'elle puisse vous aider à corriger l'erreur. Assurez‑vous de **provide the error log** lorsque vous créez un ticket. Vous pouvez télécharger le journal ou cliquer sur le lien indiquant contact our support team. Cela ouvrira le widget d'aide sur le côté droit de votre page avec les champs pré‑remplis pour vous, incluant les journaux d'erreurs dans la description.

_**Comme le système a détecté une erreur, vous ne pourrez pas poursuivre la migration vers la version 2.0. Vous pouvez alors revenir à la version 1.x pour reprendre le fonctionnement de votre réseau jusqu'à ce que l'erreur soit corrigée.**_

### Sans erreur

Si le système ne trouve aucune erreur, vous verrez un message de réussite et un bouton **Migrate** en bas qui vous permettra de poursuivre la migration. Sur cette page, vous serez rappelé de créer une sauvegarde de votre base de données avant de continuer, ce que nous recommandons vivement. Cliquez sur **Migrate** si vous avez déjà une sauvegarde.

<!-- Screenshot unavailable: Migration page showing success message and backup recommendation -->

<!-- Screenshot unavailable: Migrate button on the bottom-right corner -->

Et c'est tout ce qu'il faut !

Vous pouvez soit continuer à exécuter le wizard de configuration pour mettre à jour votre logo et d'autres éléments sur votre réseau, soit commencer à naviguer dans le menu Ultimate Multisite version 2.0 et son nouvel interface. Allez‑y et amusez‑vous.

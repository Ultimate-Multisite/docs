---
title: Migration depuis V1
sidebar_position: 17
_i18n_hash: 1deefaf09206b741c89be6666fe2143c
---
# Migration depuis V1 {#migrating-from-v1}

## Ultimate Multisite est passé de sa famille originale de versions 1.x à la famille de versions 2.x. {#ultimate-multisite-has-switched-from-its-original-1x-family-of-releases-to-the-2x-family-of-releases}

Ultimate Multisite version 2.0 et ultérieures est une réécriture complète de la base de code, ce qui signifie qu’il y a très peu d’éléments communs entre l’ancienne version et la nouvelle. Pour cette raison, lors de la mise à niveau de 1.x vers 2.x, vos données devront être migrées vers un format que les nouvelles versions peuvent comprendre.

Heureusement, Ultimate Multisite 2.0+ **inclut un migrateur** intégré au noyau, capable de détecter les données de l’ancienne version et de les convertir au nouveau format. Cette migration se produit pendant le **Setup Wizard** de la version 2.0+.

Cette leçon explique comment fonctionne le migrateur, quoi faire en cas d’échec et comment résoudre les problèmes qui pourraient survenir pendant ce processus.

_**IMPORTANT : Avant de commencer la mise à niveau de la version 1.x vers la version 2.0, assurez-vous de créer une sauvegarde de la base de données de votre site**_

## Premières étapes {#first-steps}

La première étape consiste à télécharger le fichier .zip du plugin et à installer la version 2.0 sur le Dashboard d’administration de votre réseau.

Après avoir [installé et activé la version 2.0](../getting-started/installing-ultimate-multisite.md), le système détectera automatiquement que votre Multisite fonctionne sur la version héritée et vous verrez ce message en haut de la page du plugin.

_**REMARQUE :** Si Ultimate Multisite 1.x est installé sur votre Multisite, vous aurez l’option de remplacer le plugin par la version que vous venez de télécharger. Veuillez continuer et cliquer sur **Replace current with uploaded**._

<!-- Screenshot unavailable: Plugin page showing option to replace v1 with uploaded v2 version -->

La page suivante vous indiquera quels add-ons hérités vous avez installés avec la version 1.x. Elle contiendra des instructions indiquant si la version que vous utilisez est compatible avec la version 2.0 ou si vous devez installer une version mise à niveau de l’add-on après la migration.

<!-- Screenshot unavailable: Message on the top of the plugins page about updating to v2.0, with list of add-ons that need updating -->

Une fois que vous êtes prêt à continuer, vous pouvez cliquer sur le bouton indiquant **Visit the Installer to finish the upgrade**.

<!-- Screenshot unavailable: Button saying Visit the Installer to finish the upgrade -->

Cela vous amènera ensuite à la page de l’assistant d’installation avec quelques messages de bienvenue. Il vous suffit de cliquer sur **Get Started** pour passer à la page suivante.

<!-- Screenshot unavailable: Setup Wizard welcoming page with Get Started button -->

Après avoir cliqué sur **Get Started**, vous serez redirigé vers les vérifications de pré-installation_._ Cela vous montrera vos informations système et votre installation WordPress, et vous indiquera si elles répondent aux **exigences d’Ultimate Multisite**.

<!-- Screenshot unavailable: Pre-install Checks page showing system requirements confirmation -->

L’étape suivante consiste à saisir votre clé de licence Ultimate Multisite et à activer le plugin. Cela garantira que toutes les fonctionnalités, y compris les add-ons, seront disponibles sur votre site.

<!-- Screenshot unavailable: License activation page with license key input and Agree and Activate button -->

Après avoir saisi votre clé, cliquez sur **Agree & Activate**.

Après l’activation de la licence, vous pouvez commencer l’installation proprement dite en cliquant sur **Install** sur la page suivante. Cela créera automatiquement les fichiers nécessaires et la base de données requise pour que la version 2.0 fonctionne.

<!-- Screenshot unavailable: Installation page showing what will be updated with Install button -->

## Maintenant, la migration {#now-the-migration}

Le migrateur dispose d’une fonctionnalité de sécurité intégrée grâce à laquelle il vérifiera l’ensemble de votre multisite afin de s’assurer que toutes vos données Ultimate Multisite peuvent être migrées sans problème. Cliquez sur le bouton **Run Check** pour démarrer le processus.

<!-- Screenshot unavailable: Migration page with Run Check button to verify data can be converted -->

Après avoir exécuté la vérification, il y a deux possibilités : le résultat peut être soit **avec** une erreur, soit **sans erreur**.

### Avec erreur {#with-error}

Si vous recevez un message d’erreur, vous devrez contacter notre équipe de support afin qu’elle puisse vous aider à corriger l’erreur. Assurez-vous de **fournir le journal d’erreurs** lorsque vous créez un ticket. Vous pouvez télécharger le journal ou cliquer sur le lien indiquant de contacter notre équipe de support. Cela ouvrira le widget d’aide sur le côté droit de votre page avec les champs préremplis pour vous, incluant les journaux d’erreurs dans la description.

_**Puisque le système a trouvé une erreur, vous ne pourrez pas continuer la migration vers la version 2.0. Vous pourrez alors revenir à la version 1.x pour reprendre l’exécution de votre réseau jusqu’à ce que l’erreur soit corrigée.**_

### Sans erreur {#without-error}

Si le système ne trouve aucune erreur, vous verrez un message de réussite et un bouton **Migrate** en bas, qui vous permettra de poursuivre la migration. Sur cette page, il vous sera rappelé de créer une sauvegarde de votre base de données avant de continuer, ce que nous recommandons fortement. Cliquez sur **Migrate** si vous avez déjà une sauvegarde.

<!-- Screenshot unavailable: Migration page showing success message and backup recommendation -->

<!-- Screenshot unavailable: Migrate button on the bottom-right corner -->

Et c’est tout ce qu’il faut faire !

Vous pouvez soit continuer à exécuter la configuration de l’assistant pour mettre à jour votre logo et d’autres éléments sur votre réseau, soit commencer à naviguer dans le menu de votre Ultimate Multisite version 2.0 et sa nouvelle interface. Allez-y et amusez-vous.

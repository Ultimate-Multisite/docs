---
title: Installation d'Ultimate Multisite
sidebar_position: 12
_i18n_hash: dda8f0d2b67bc421c0a484c76c8eae6d
---
# Installation d'Ultimate Multisite

:::note
Ce tutoriel suppose que vous avez déjà installé et configuré WordPress Multisite. Pour savoir comment faire, consultez [ce tutoriel](https://www.wpbeginner.com/glossary/multisite/) de WP Beginner.
:::

## Installation du plugin

Ultimate Multisite est disponible gratuitement sur [WordPress.org](https://wordpress.org/plugins/ultimate-multisite/).

Depuis votre **Network Admin Dashboard**, allez dans **Plugins → Ajouter un nouveau plugin**.

![Page d'ajout d'un nouveau plugin de l'administration réseau](/img/installation/add-new-plugin.png)

Recherchez **"Ultimate Multisite"** (avec des guillemets pour une correspondance exacte) et il apparaîtra en premier résultat. Cliquez sur **Installer maintenant**.

![Résultats de recherche affichant Ultimate Multisite](/img/installation/search-ultimate-multisite.png)

Une fois installé, cliquez sur **Activer sur le réseau** pour activer le plugin sur l'ensemble de votre réseau.

![Plugin installé avec le bouton Activer sur le réseau](/img/installation/plugin-installed.png)

Après l'activation, vous serez automatiquement redirigé vers l'assistant de configuration.

![Plugin activé et redirection vers l'assistant](/img/installation/plugin-activated.png)

## Assistant de configuration

L'assistant de configuration vous guidera à travers la configuration d'Ultimate Multisite en environ 10 minutes.

### Bienvenue

Cliquez sur **Commencer** pour démarrer.

![Écran de bienvenue de l'assistant de configuration](/img/installation/wizard-welcome.png)

### Vérifications pré-installation

Cette étape vérifie les informations de votre système et votre installation WordPress pour s'assurer qu'elle répond aux exigences d'Ultimate Multisite. Si tout semble correct, cliquez sur **Passer à l'étape suivante**.

![Vérifications pré-installation affichant les exigences système](/img/installation/wizard-pre-install-checks.png)

:::note Bouton Activer sur le réseau (v2.6.1+)
Si Ultimate Multisite a été installé mais **pas encore activé sur le réseau** — par exemple, si vous avez cliqué sur **Activer** (site unique) au lieu de **Activer sur le réseau** depuis l'écran des plugins du réseau — l'étape des vérifications pré-installation détectera cela et affichera un bouton **Activer sur le réseau**.

Cliquer sur **Activer sur le réseau** active le plugin automatiquement sur l'ensemble de votre réseau multisite. Une fois activé, l'assistant continue normalement vers l'étape d'installation. Vous n'avez pas besoin de quitter l'assistant pour corriger l'état d'activation.
:::

### Installation

L'installateur créera les tables de base de données nécessaires et installera le fichier `sunrise.php` dont Ultimate Multisite a besoin pour fonctionner. Cliquez sur **Installer** pour continuer.

![Étape d'installation montrant les tables de base de données et sunrise.php](/img/installation/wizard-installation.png)

### Votre entreprise

Remplissez les informations de votre entreprise et définissez votre devise par défaut. Ces informations seront utilisées dans toute votre plateforme WaaS. Cliquez sur **Continuer** lorsque vous avez terminé.

![Étape de configuration de votre entreprise](/img/installation/wizard-your-company.png)

### Contenu par défaut

Cette étape vous permet d'installer des modèles prédéfinis, des produits et autre contenu de démarrage. C'est un excellent moyen de vous familiariser avec les fonctionnalités d'Ultimate Multisite. Cliquez sur **Installer** pour ajouter le contenu par défaut, ou passez cette étape si vous préférez partir de zéro.

![Étape d'installation du contenu par défaut](/img/installation/wizard-default-content.png)

### Plugins recommandés

Installez éventuellement les plugins compagnons recommandés. Cliquez sur **Installer** pour les ajouter ou passez à l'étape suivante.

![Étape des plugins recommandés](/img/installation/wizard-recommended-plugins.png)

### Prêt !

C'est tout ! Votre installation d'Ultimate Multisite est terminée. Vous pouvez maintenant commencer à construire votre plateforme Website as a Service depuis le **Network Admin Dashboard**.

![Configuration terminée - Écran Prêt](/img/installation/wizard-ready.png)

![Tableau de bord d'administration réseau avec Ultimate Multisite actif](/img/installation/network-dashboard.png)

Allez-y et amusez-vous !

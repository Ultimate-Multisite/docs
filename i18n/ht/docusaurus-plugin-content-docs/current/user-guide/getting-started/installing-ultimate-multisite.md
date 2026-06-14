---
title: Enstalasyon Ultimate Multisite
sidebar_position: 12
_i18n_hash: dda8f0d2b67bc421c0a484c76c8eae6d
---
# Enstalasyon Ultimate Multisite

:::note
Sa tutorial sa a, nou deja enstale epi configure WordPress Multisite la. Pou aprann kijan pou w fè sa, gade [sa tutorial la](https://www.wpbeginner.com/glossary/multisite/) pa WP Beginner.
:::

## Enstalasyon Plugin an

Ultimate Multisite gratis sou [WordPress.org](https://wordpress.org/plugins/ultimate-multisite/).

Soti nan **Network Admin Dashboard** ou, ale nan **Plugins → Add New Plugin**.

![Page Network Admin Add New Plugin](/img/installation/add-new-plugin.png)

Chèche **"Ultimate Multisite"** (avèk guillemets pou yon korespondans egzak), epi li ap parèt kòm premye rezilta a. Klike sou **Install Now**.

![Rezilta chèche ki montre Ultimate Multisite](/img/installation/search-ultimate-multisite.png)

Yon fwa ou enstale li, klike sou **Network Activate** pou aktive plugin an nan tout rezo ou la.

![Plugin enstale ak bouton Network Activate](/img/installation/plugin-installed.png)

Aprè aktivasyon an, ou pral otomatikman redirekti nan Setup Wizard la.

![Plugin active epi redirekti nan wizard a](/img/installation/plugin-activated.png)

## Setup Wizard

Setup Wizard la ap gide ou atravè konfigirasyon Ultimate Multisite nan rapò 10 minit.

### Welcome (Bwèl)

Klike sou **Get Started** pou kòmanse.

![Ekran welcome Setup Wizard a](/img/installation/wizard-welcome.png)

### Pre-install Checks (Kontwòl anvan enstalasyon)

Etap sa a ap kontwole enfòmasyon sistèm ou ak enstalasyon WordPress la pou asire li reponn egzijans Ultimate Multisite a. Si tout bagay san pwoblèm, klike sou **Go to the Next Step**.

![Pre-install checks ki montre kondisyon sistèm](/img/installation/wizard-pre-install-checks.png)

:::note Bouton Network Activate (v2.6.1+)
Si Ultimate Multisite a été installé mais qu'il n'est **pas encore activé sur le réseau** — par exemple, si vous avez cliqué sur **Activer** (single-site) au lieu de **Network Activate** depuis l'écran des plugins réseau — l'étape Pre-install Checks détectera cela et affichera un bouton **Network Activate**.

Cliquer sur **Network Activate** active automatiquement le plugin sur tout votre réseau multisite. Une fois activé, l'assistant continue normalement jusqu'à l'étape d'installation. Vous n'avez pas besoin de quitter l'assistant pour corriger l'état d'activation.
:::

### Installation

L'installateur va créer les tables de base de données nécessaires et installer le fichier `sunrise.php` dont Ultimate Multisite a besoin pour fonctionner. Cliquez sur **Install** pour continuer.

![Installation step showing database tables and sunrise.php](/img/installation/wizard-installation.png)

### Votre Entreprise

Remplissez vos informations d'entreprise et définissez votre devise par défaut. Ces informations seront utilisées tout au long de votre plateforme WaaS. Cliquez sur **Continue** lorsque vous avez terminé.

![Your Company configuration step](/img/installation/wizard-your-company.png)

### Contenu par Défaut

Cette étape vous permet d'installer des modèles prédéfinis, des produits et d'autres contenus de démarrage. C'est un excellent moyen de vous familiariser avec les fonctionnalités d'Ultimate Multisite. Cliquez sur **Install** pour ajouter le contenu par défaut, ou sautez cette étape si vous préférez commencer à zéro.

![Default content installation step](/img/installation/wizard-default-content.png)

### Plugins Recommandés

Installez facultativement les plugins compagnons recommandés. Cliquez sur **Install** pour les ajouter ou passez pour continuer.

![Recommended plugins step](/img/installation/wizard-recommended-plugins.png)

### Prêt !

Sa se li! Enstalasyon Ultimate Multisite ou a fin fini. Kounye a ou ka kòmanse bati platfòm Wèb ou a kòm yon sèvis (Website as a Service) nan **Network Admin Dashboard** la.

![Setup complete - Ready screen](/img/installation/wizard-ready.png)

![Network Admin Dashboard with Ultimate Multisite active](/img/installation/network-dashboard.png)

Kòmanse jwe!

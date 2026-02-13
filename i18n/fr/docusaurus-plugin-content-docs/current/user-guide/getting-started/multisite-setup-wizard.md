---
title: Assistant de configuration Multisite
sidebar_position: 3
_i18n_hash: fd09dc94f24b0b37245b847380feea3f
---
# Assistant

## Multisite Setup Wizard

Ultimate Multisite inclut un assistant intégré qui convertit automatiquement une installation WordPress standard en un réseau WordPress Multisite. Cela élimine le besoin d’éditer manuellement `wp-config.php` ou d’exécuter des commandes de base de données.

:::tip
Si votre installation WordPress fonctionne déjà en tant que réseau Multisite, vous pouvez ignorer cette étape. L’assistant n’apparaît que lorsque le Multisite n’est pas encore activé.
:::

## Quand l’assistant apparaît-il ?

Lorsque vous activez Ultimate Multisite sur une installation WordPress standard (non Multisite), le plugin détecte que le Multisite n’est pas activé et vous redirige automatiquement vers l’assistant de configuration Multisite au lieu de l’assistant de configuration régulier.

Vous pouvez également y accéder directement via **WP Admin > Ultimate Multisite > Multisite Setup**.

## Prérequis

Avant d’exécuter l’assistant, assurez‑vous que :

- Vous avez un **accès administrateur** à votre installation WordPress
- Le fichier `wp-config.php` de votre serveur est **écrivain** par le serveur web
- Vous disposez d’une **copie de sauvegarde récente** de vos fichiers et de votre base de données

:::warning
L’assistant modifie votre fichier `wp-config.php` et crée de nouvelles tables de base de données. Créez toujours une sauvegarde avant de continuer.
:::

## Étape 1 : Bienvenue

L’écran d’accueil explique ce qu’est le WordPress Multisite et ce que l’assistant fera :

- Activer la fonction Multisite dans votre configuration WordPress
- Créer les tables de base de données réseau nécessaires
- Ajouter les constantes multisite requises à `wp-config.php`
- Activer Ultimate Multisite sur l’ensemble du réseau

![Multisite Setup Wizard - Welcome step](/img/installation/multisite-wizard/wizard-welcome.png)

Cliquez sur **Continue** pour poursuivre.

## Étape 2 : Configuration du réseau

Cette étape vous demande de configurer les paramètres de votre réseau.

### Structure du site

Choisissez comment vos sites réseau seront organisés :

- **Sous-domaines** (Recommandé) — Les sites obtiennent leur propre sous‑domaine, par ex. `site1.yourdomain.com`
- **Sous‑répertoires** — Les sites sont créés comme chemins, par ex. `yourdomain.com/site1`

:::note
Si vous choisissez les sous‑domaines, vous devrez configurer un **DNS générique** (wildcard DNS) et un **certificat SSL générique** (wildcard SSL) pour votre domaine. La plupart des hébergeurs WordPress gérés le font automatiquement. Consultez [Ultimate Multisite 101](./ultimate-multisite-101) pour une comparaison détaillée.
:::

### Titre du réseau

Entrez un nom pour votre réseau. Cela par défaut est le titre actuel de votre site avec « Network » ajouté. Vous pourrez le modifier plus tard depuis les paramètres du réseau.

### Email d’administration du réseau

L’adresse e‑mail utilisée pour les notifications d’administration du réseau. Cela par défaut est l’adresse e‑mail de l’utilisateur actuel.

![Multisite Setup Wizard - Network Configuration](/img/installation/multisite-wizard/wizard-network-configuration.png)

Après avoir rempli les champs, cliquez sur **Continue** pour poursuivre.

## Étape 3 : Installation

Cliquez sur le bouton **Install** pour commencer. L’assistant effectue cinq étapes automatisées séquentiellement, chacune affichant son avancement en temps réel :

![Multisite Setup Wizard - Installation pending](/img/installation/multisite-wizard/wizard-installation-pending.png)

| Étape | Description |
|------|-------------|
| **Activer Multisite** | Ajoute la constante `WP_ALLOW_MULTISITE` à `wp-config.php` |
| **Créer le réseau** | Crée les tables de base de données multisite (`wp_site`, `wp_sitemeta`, `wp_blogs`, etc.) et les remplit avec votre configuration réseau |
| **Mettre à jour la configuration** | Ajoute les constantes multisite finales à `wp-config.php` (`MULTISITE`, `SUBDOMAIN_INSTALL`, `DOMAIN_CURRENT_SITE`, etc.) |
| **Corriger les cookies** | S’assure que l’URL du site est correcte dans les métadonnées réseau pour éviter les problèmes d’authentification après l’activation |
| **Activer le plugin sur le réseau** | Active Ultimate Multisite sur l’ensemble du réseau afin qu’il fonctionne partout |

Chaque étape affiche l’un de ces statuts :

- **Pending** — En attente de traitement
- **Installing…** — En cours d’exécution
- **Success!** — Terminé avec succès
- **Error message** — Une erreur s’est produite (le message décrira le problème)

Une fois toutes les étapes terminées avec succès, vous verrez un statut vert « Success! » pour chaque élément :

![Multisite Setup Wizard - Installation complete](/img/installation/multisite-wizard/wizard-installation-complete.png)

L’assistant passera alors automatiquement à l’écran de fin.

## Étape 4 : Terminé

Une fois l’installation terminée, vous verrez un message de succès confirmant que WordPress Multisite a été activé.

![Multisite Setup Wizard - Setup Complete](/img/installation/multisite-wizard/wizard-complete.png)

Vous pouvez maintenant poursuivre avec l’assistant de configuration Ultimate Multisite pour configurer votre plateforme WaaS (détails de l’entreprise, contenu par défaut, passerelles de paiement, etc.).

:::note
Après la fin de l’installation multisite, votre navigateur sera redirigé vers l’administration réseau nouvellement activée. Vous devrez peut‑être vous reconnecter car les cookies d’authentification sont mis à jour pour l’environnement multisite.
:::

## Récupération manuelle

Si l’assistant ne peut pas écrire dans votre fichier `wp-config.php` (en raison des permissions de fichier ou des restrictions du serveur), il affichera le code exact que vous devez ajouter manuellement :

1. Les **constantes wp-config.php** qui doivent être ajoutées au-dessus de la ligne `/* That's all, stop editing! */`
2. Les **règles de réécriture .htaccess** appropriées pour votre structure de site choisie (sous‑domaine ou sous‑répertoire)

Après avoir effectué les modifications manuelles, actualisez la page et l’assistant détectera que le multisite est maintenant actif.

## Dépannage

### L’assistant indique que wp-config.php n’est pas écrivable

Le processus serveur web a besoin d’un droit d’écriture sur le fichier `wp-config.php`. Vous pouvez :

- Changer temporairement les permissions du fichier à `644` ou `666`
- Utiliser les instructions de récupération manuelle fournies par l’assistant
- Demander l’assistance de votre hébergeur

### Les sites ne sont pas accessibles après la configuration (sous‑domaines)

Si vous avez choisi la structure sous‑domaine, vous devez configurer un **DNS générique** (wildcard DNS) pour votre domaine. Ajoutez un enregistrement DNS :

```
Type: A (ou CNAME)
Host: *
Value: [votre IP serveur]
```

Vérifiez auprès de votre hébergeur si vous n’êtes pas sûr de la configuration.

### Problèmes d’authentification après la configuration

Si vous êtes déconnecté ou rencontrez des erreurs de cookie après la configuration multisite :

1. Effacez les cookies de votre navigateur pour le site
2. Connectez‑vous à nouveau sur `yourdomain.com/wp-login.php`
3. Si le problème persiste, vérifiez que votre `wp-config.php` ne contient pas `COOKIE_DOMAIN` défini sur `false` — c’est un problème connu sur les installations multisite sous‑domaine

### Une étape a échoué pendant l’installation

Si l’une des étapes d’installation affiche une erreur :

1. Notez le message d’erreur affiché
2. Revenez à l’étape de configuration et essayez à nouveau
3. Si l’erreur persiste, consultez le journal d’erreurs PHP de votre serveur pour plus de détails
4. Les étapes déjà terminées seront ignorées lors des exécutions suivantes (l’installeur est idempotent)

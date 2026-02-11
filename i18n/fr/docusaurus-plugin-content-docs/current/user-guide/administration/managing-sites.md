---
title: Gestion des sites
sidebar_position: 14
_i18n_hash: 520a6eed862c756f0475de6f264632c6
---
# Gestion des sites

Les sites (ou sous-sites) constituent le cœur de votre activité WaaS. Ultimate Multisite propose 3 types de sites :

- **Customer-owned** — Sites appartenant à des clients spécifiques
- **Site Templates** — Sites pré-définis que les clients peuvent choisir comme point de départ
- **Main Site** — Votre site principal du réseau

## Affichage des sites

Accédez à **Ultimate Multisite → Sites** pour voir tous les sous-sites de votre réseau. Chaque site est identifié par son type et vous pouvez filtrer par Tous les sites, Propriété client, Modèles ou En attente.

![Page de liste des sites](/img/admin/sites-list.png)

## Ajout d'un nouveau site

Cliquez sur le bouton **Add Site** pour créer un nouveau site. Vous devrez fournir :

- **Site Title** — Le nom du nouveau site
- **Site URL** — Le domaine/chemin du site
- **Site Type** — S'il s'agit d'un site client, d'un modèle ou d'un site régulier

L'option **Copy Site** vous permet de créer un nouveau site à partir d'un modèle de site existant. Lorsqu'elle est activée, vous pouvez choisir le modèle à utiliser comme point de départ. Assurez-vous que **Copy Media on Duplication** est activée pour inclure les fichiers multimédias.

## Gestion d'un site existant

Cliquez sur **Manage** sur n'importe quel site pour ouvrir la page **Edit Site**. Vous y trouverez :

### Informations de base

Le nom du site, son type, l'ID du site et la description. Vous verrez également le domaine mappé, l'adhésion associée et le compte client qui possède le site.

### Options du site

Configurez les capacités et les limites du site :

- **Visit limits** — Nombre maximal de visites du site
- **User account limits** — Limites par rôle d'utilisateur
- **Disk space** — Quota de stockage pour le site
- **Custom domain** — Activer le mappage de domaine pour ce site
- **Plugin and theme visibility** — Contrôlez quels plugins et thèmes sont visibles, cachés ou préactivés

Par défaut, les sites suivent les limites définies au niveau de l'adhésion. La définition de limites au niveau du site remplacera les paramètres d'adhésion.

### Associations

Sous les options du site, vous trouverez des informations sur :

- **Mapped domains** associés au site
- **Membership** auquel le site appartient
- **Customer account** lié au site

### Barre latérale droite

Sur le côté droit, vous pouvez :

- **Enable/disable the site** avec un bouton bascule
- **Change the site type** ou réattribuer la propriété
- **Set a site image/thumbnail** (affiché sur le frontend pour les modèles de site)
- **Delete the site** définitivement

:::warning
Supprimer un site est irréversible. Le site et tout son contenu seront définitivement supprimés.
:::

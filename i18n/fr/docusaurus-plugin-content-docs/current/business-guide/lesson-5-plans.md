---
title: 'Leçon 5 : Concevoir vos plans'
sidebar_position: 6
_i18n_hash: 8c58dfd0a186bd585f43342bc4ea4f43
---
# Leçon 5 : Concevoir vos forfaits

Vos niveaux de forfaits ne sont pas de simples paliers de prix ; ils reflètent la manière dont vos clients de niche fonctionnent réellement. Dans cette leçon, vous allez concevoir des niveaux de produits qui correspondent aux besoins réels des entreprises de fitness à différents stades de développement.

## Où nous nous étions arrêtés {#where-we-left-off}

FitSite dispose de trois modèles prêts à l'emploi (Studio Essential, Gym Pro, Fitness Chain). Maintenant, nous allons créer les forfaits qui déterminent ce que les clients peuvent consulter et ce qu'ils paient.

## Penser en segments de clients {#thinking-in-customer-segments}

L'erreur la plus courante est de concevoir des forfaits en fonction de fonctionnalités techniques (stockage, bande passante, nombre de pages). Vos clients de niche ne pensent pas de cette manière. Un propriétaire de salle de sport pense à ce dont il a besoin pour faire fonctionner son entreprise.

Pour les studios de fitness, trois segments naturels existent :

| Segment | Qui ils sont | Ce dont ils ont besoin |
|---------|-------------|----------------|
| **Coachs indépendants / petits studios** | 1 à 3 employés, un seul emplacement, débutants | Un site professionnel, des informations sur les cours, un formulaire de contact |
| **Salles de sport établies** | 5 à 20 employés, un seul emplacement, en croissance | Tout ce qui précède, plus la réservation, le blog, la galerie, un domaine personnalisé |
| **Chaînes de fitness** | Plusieurs emplacements, marque établie | Tout ce qui précède, plus le multisite, les pages d'emplacements, l'annuaire du personnel |

Vos forfaits doivent correspondre à ces segments, et non à des groupes de fonctionnalités arbitraires.

## Créer les forfaits FitSite {#creating-the-fitsite-plans}

Accédez à **Ultimate Multisite > Products > Add Product** pour chaque forfait.

### Forfait 1 : FitSite Starter — 49 $/mois {#plan-1-fitsite-starter----49month}

**Cible** : Coachs indépendants et petits studios

**Onglet Description** :
- Nom : FitSite Starter
- Description : « Tout ce qu'un coach personnel ou un petit studio a besoin pour avoir une présence professionnelle en ligne. »

**Onglet Général** :
- Type de produit : Forfait
- Rôle client : Administrateur

**Onglet Modèles de site** :
- Autoriser les modèles de site : Activé
- Modèles disponibles : Studio Essential uniquement

**Limitations** :
- Sites : 1
- Espace disque : 1 Go
- Domaine personnalisé : Désactivé (utilise `nomstudios.fitsite.com`)

**Onglet Plugins** :
- Plugin de formulaire de contact : Forcer l'activation
- Plugin SEO : Forcer l'activation
- Plugin de réservation : Non disponible (incitation à la mise à niveau)

**Onglet Thèmes** :
- Votre thème sélectionné : Forcer l'activation
- Tous les autres thèmes : Masqué

### Forfait 2 : FitSite Growth — 99 $/mois {#plan-2-fitsite-growth----99month}

**Cible** : Salles de sport établies avec un seul emplacement

**Onglet Description** :
- Nom : FitSite Growth
- Description : « Pour les salles de sport établies prêtes à développer leur présence en ligne et à attirer de nouveaux membres. »

**Onglet Modèles de site** :
- Modèles disponibles : Studio Essential et Gym Pro

**Limitations** :
- Sites : 1
- Espace disque : 5 Go
- Domaine personnalisé : Activé

**Onglet Plugins** :
- Tout ce qui est dans Starter, plus :
- Plugin de réservation : Forcer l'activation
- Plugin de galerie : Forcer l'activation
- Fonctionnalité de blog : Disponible

**Onglet Mise à niveau et rétrogradation** :
- Groupe de forfaits : FitSite Plans
- Ordre du produit : 2

### Forfait 3 : FitSite Pro — 199 $/mois {#plan-3-fitsite-pro----199month}

**Cible** : Chaînes de fitness multi-emplacements

**Onglet Description** :
- Nom : FitSite Pro
- Description : « La plateforme complète pour les marques de fitness ayant plusieurs emplacements. »

**Onglet Modèles de site** :
- Modèles disponibles : Les trois modèles

**Limitations** :
- Sites : 5 (un par emplacement)
- Espace disque : 20 Go
- Domaine personnalisé : Activé

**Onglet Plugins** :
- Tout ce qui est dans Growth, plus :
- Tous les plugins premium : Forcer l'activation

**Onglet Mise à niveau et rétrogradation** :
- Groupe de forfaits : FitSite Plans
- Ordre du produit : 3

## Configuration du groupe de forfaits {#setting-up-the-plan-group}

Le groupe de forfaits garantit que les clients ne peuvent passer au niveau supérieur ou rétrograder que dans la famille de forfaits FitSite. Sur l'onglet **Mise à niveau et rétrogradation** de chaque forfait :

1. Définissez le **Groupe de forfaits** sur "FitSite Plans" pour les trois forfaits.
2. Définissez l'**Ordre du produit** sur 1 (Starter), 2 (Growth), 3 (Pro).

Cela crée un chemin de mise à niveau clair : Starter → Growth → Pro.

## Ajouter des accroches de commande (Order Bumps) {#adding-order-bumps}

Les accroches de commande sont des produits additionnels proposés au moment du paiement. Pour FitSite, envisagez :

- **Pack de stockage supplémentaire** (19 $/mois) — 5 Go supplémentaires d'espace disque
- **Support prioritaire** (29 $/mois) — temps de réponse plus rapide
- **Site supplémentaire** (39 $/mois) — pour les clients qui ont besoin de plus de sites que ce que leur forfait permet

Créez-les comme produits de type **Package** dans Ultimate Multisite et associez-les aux forfaits concernés.

## Pourquoi cette structure fonctionne {#why-this-structure-works}

- **Starter** élimine les barrières à l'entrée — prix bas, offre simple, permet aux coachs de se lancer rapidement
- **Growth** ajoute les fonctionnalités que les salles de sport demandent réellement — réservation, galeries, domaines personnalisés
- **Pro** sert le segment à forte valeur qui a besoin d'un support multi-emplacements
- **Accroches de commande** permettent aux clients de personnaliser sans compliquer les forfaits de base
- **Un chemin de mise à niveau clair** signifie que les clients grandissent avec vous au lieu de partir

## Le réseau FitSite jusqu'à présent {#the-fitsite-network-so-far}

```
FitSite Network
├── WordPress Multisite (mode sous-domaine)
├── Ultimate Multisite (configuré)
├── Hébergement avec SSL wildcard + mappage de domaine
├── Modèles de site (Studio Essential, Gym Pro, Fitness Chain)
├── Produits
│   ├── FitSite Starter (49 $/mois) → modèle Studio Essential
│   ├── FitSite Growth (99 $/mois) → modèles Studio Essential + Gym Pro
│   ├── FitSite Pro (199 $/mois) → tous les modèles
│   └── Accroches de commande (Stockage supplémentaire, Support prioritaire, Site supplémentaire)
└── Prêt pour la configuration du paiement (prochaine leçon)
```

## Ce que nous avons construit dans cette leçon {#what-we-built-this-lesson}

- **Trois niveaux de forfaits** liés aux segments réels des entreprises de fitness
- **Contrôle des fonctionnalités** grâce aux contrôles de plugins et de modèles d'Ultimate Multisite
- **Un groupe de forfaits** avec un chemin de mise à niveau clair
- **Des produits d'accroches de commande** pour des revenus supplémentaires
- **Une structure tarifaire** basée sur la valeur client, et non sur les spécifications techniques

---

**Suivant :** [Leçon 6 : L'expérience d'inscription](lesson-6-checkout) — nous allons construire un flux de paiement qui convertit les propriétaires de studios de fitness en clients payants.

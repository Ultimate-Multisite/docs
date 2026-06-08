---
title: 'Leçon 9 : Tarification pour le profit'
sidebar_position: 10
_i18n_hash: 0f58d92d3effcc1ffc1f62104d21cdcc
---
# Leçon 9 : Tarification pour la rentabilité

Dans la Leçon 5, nous avons défini les prix initiaux pour les plans FitSite. Maintenant, nous allons affiner la stratégie de tarification avec des techniques qui augmentent les revenus, encouragent les mises à niveau et réduisent le taux de désabonnement.

## Où nous nous étions arrêtés

FitSite dispose des plans, des modèles, du processus de paiement, du branding et de l'intégration. La tarification initiale était de 49 $/99 $/199 $ par mois. Maintenant, nous allons faire travailler cette tarification plus efficacement.

## Principes de tarification pour les plateformes de niche

### Tarifer sur la valeur, pas sur le coût

Vos coûts d'hébergement peuvent être de 5 $ à 15 $ par site client. Cela ne signifie pas que votre prix doit être de 20 $. Vous ne vendez pas l'hébergement. Vous vendez :

- Un site web de fitness professionnel qui coûterait entre 2 000 $ et 5 000 $ à construire sur mesure
- Une maintenance, des mises à jour et une sécurité continues qu'ils n'ont pas à gérer
- Des fonctionnalités spécifiques à la niche que les constructeurs génériques n'offrent pas
- La crédibilité d'une plateforme conçue pour leur secteur

Tarifiez en fonction de la valeur que vous apportez, et non du coût de cette valeur.

### Ancrer par rapport aux alternatives

Lorsqu'un propriétaire de studio de fitness évalue FitSite, il le compare à :

- **L'embauche d'un développeur web** : 2 000 $ à 5 000 $ au départ + 50 $ à 100 $/mois de maintenance
- **Wix/Squarespace** : 16 $ à 45 $/mois, mais sans fonctionnalités spécifiques au fitness, ils le construisent eux-mêmes
- **Ne rien faire** : Perte de membres qui ne peuvent pas les trouver en ligne

À 49 $ - 199 $/mois, FitSite est moins cher qu'un développeur, plus performant que les constructeurs génériques, et infiniment meilleur que de ne pas avoir de site web.

## Mise en œuvre des variations de prix

La tarification annuelle encourage l'engagement et réduit le taux de désabonnement. Accédez à l'onglet **Variations de prix** de chaque plan et ajoutez des options annuelles :

| Plan | Mensuel | Annuel (par mois) | Total annuel | Économies |
|------|---------|-------------------|--------------|---------|
| Starter | 49 $/mois | 39 $/mois | 468 $/an | 20 % de réduction |
| Growth | 99 $/mois | 79 $/mois | 948 $/an | 20 % de réduction |
| Pro | 199 $/mois | 159 $/mois | 1 908 $/an | 20 % de réduction |

Ajoutez un champ de **Sélection de période** à votre formulaire de paiement afin que les clients puissent basculer entre la facturation mensuelle et annuelle. Consultez [Formulaires de paiement](/user-guide/configuration/checkout-forms#adding-a-period-selection-toggle).

### Pourquoi la tarification annuelle fonctionne

- **Pour vous** : Des liquidités immédiates, un taux de désabonnement plus faible (les clients qui paient annuellement sont moins susceptibles d'annuler à mi-parcours)
- **Pour eux** : Des économies réelles, une prévisibilité budgétaire

## Frais de configuration

Envisagez des frais de configuration uniques pour les plans qui incluent une configuration manuelle :

- **Starter** : Aucun frais de configuration (pour lever les barrières à l'entrée)
- **Growth** : Frais de configuration de 99 $ (couvre la configuration de domaine personnalisé et la consultation initiale)
- **Pro** : Frais de configuration de 299 $ (couvre la configuration multi-sites et l'appel d'intégration)

Configurez les frais de configuration dans la section de tarification de chaque plan. Consultez [Créer votre premier produit par abonnement](/user-guide/configuration/creating-your-first-subscription-product) pour plus de détails.

## Périodes d'essai

Offrir une période d'essai réduit la friction à l'inscription, mais introduit le risque de non-conversion. Pour FitSite :

- **Essai gratuit de 7 jours** uniquement sur le plan Starter
- Aucun essai sur Growth et Pro (ces clients sont plus engagés et s'attendent à payer)

Configurez l'essai sur la section de tarification du plan Starter en activant le basculeur **Offrir un essai** et en réglant la durée sur 7 jours.

### Comment faire convertir les essais

Un essai ne fonctionne que si le client en tire de la valeur pendant cette période. Votre séquence d'intégration (Leçon 8) est essentielle ici : les e-mails de bienvenue doivent être synchronisés pour stimuler l'engagement dans les 7 jours.

## Codes de réduction

Créez des codes de réduction stratégiques pour des objectifs spécifiques :

- **FITLAUNCH** — 30 % de réduction sur les 3 premiers mois (pour une promotion de lancement)
- **ANNUAL20** — 20 % de réduction sur les plans annuels (si ce n'est pas déjà réduit)
- **REFERRAL** — 1 mois gratuit (pour les recommandations de clients)

Accédez à **Ultimate Multisite > Discount Codes** pour les créer. Consultez [Créer des codes de réduction](/user-guide/configuration/creating-discount-codes) pour le guide complet.

:::tip Ne pas réduire par défaut
Les réductions doivent être des outils stratégiques, pas des éléments permanents. Si tout le monde bénéficie d'une réduction, ce n'est pas une réduction — c'est votre prix réel. Utilisez-les pour des campagnes spécifiques, des recommandations et des promotions à durée limitée.
:::

## Gestion des taxes

Si vous opérez dans une juridiction qui exige la collecte de taxes :

1. Configurez les taux de taxe dans **Ultimate Multisite > Settings > Taxes**
2. Appliquez des catégories de taxes à vos plans
3. Assurez-vous que les factures affichent correctement les taxes

Consultez [Gestion des taxes](/user-guide/payment-gateways/tax-handling) pour une configuration détaillée. Si vous servez des clients à l'international, envisagez l'[addon VAT](/addons/vat) pour la conformité européenne.

## Révision de votre tarification

Après le lancement, réévaluez les prix trimestriellement. Observez :

- **Taux de conversion par plan** : Si Starter convertit bien, mais que Growth non, l'écart entre les deux peut être trop grand
- **Taux de mise à niveau** : Si peu de clients passent de Starter à Growth, le plan Growth n'offre peut-être pas assez de valeur ajoutée
- **Taux de désabonnement par plan** : Si les clients annuels se désabonnent moins, insistez davantage sur la tarification annuelle
- **Tarification des concurrents** : Que facturent les alternatives ? Êtes-vous bien positionné ?

## Le réseau FitSite jusqu'à présent

```
FitSite Network
├── WordPress Multisite (mode sous-domaine)
├── Ultimate Multisite (configuré + brandé)
├── Platform Domain (fitsite.com + SSL wildcard)
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain)
├── Products
│   ├── FitSite Starter (49 $/mois ou 468 $/an) + essai de 7 jours
│   ├── FitSite Growth (99 $/mois ou 948 $/an) + frais de configuration de 99 $
│   ├── FitSite Pro (199 $/mois ou 1 908 $/an) + frais de configuration de 299 $
│   └── Order Bumps + Codes de réduction
├── Checkout Flow (avec basculeur de sélection de période)
├── Branding (connexion, tableau de bord, e-mails, factures, site marketing)
├── Intégration client (Quick Start, e-mails, ressources d'aide)
├── Stratégie de tarification
│   ├── Réductions annuelles (20 % de réduction)
│   ├── Frais de configuration stratégiques
│   ├── Essai de 7 jours sur Starter
│   ├── Codes de réduction pour les campagnes et les recommandations
│   └── Configuration des taxes
└── Prêt pour le lancement (prochaine leçon)
```

## Ce que nous avons construit dans cette leçon

- **Tarification annuelle** avec une réduction de 20 % pour encourager l'engagement
- **Frais de configuration** sur les niveaux supérieurs pour couvrir l'effort d'intégration
- **Une période d'essai** sur le plan d'entrée de gamme pour réduire la friction à l'inscription
- **Des codes de réduction stratégiques** pour le lancement, les recommandations et les campagnes
- **La configuration des taxes** pour une facturation conforme
- **Un cadre de révision des prix** pour une optimisation continue

---

**Suivant :** [Leçon 10 : Jour du lancement](lesson-10-launch) — la liste de contrôle avant le lancement et la mise en ligne.

---
title: 'Leçon 6 : L''expérience d''inscription'
sidebar_position: 7
_i18n_hash: a5c16cdd9b4e53a69e138df7bb042411
---
# Leçon 6 : L'expérience d'inscription

Le processus de paiement est là où l'intérêt se transforme en revenus. Un processus d'inscription confus ou générique fait fuir les clients. Un flux spécifique à une niche qui parle leur langage et qui semble facile de bout en bout les convertit.

## Où nous nous étions arrêtés

FitSite dispose de modèles et de plans configurés. Maintenant, nous allons construire l'expérience d'inscription et de paiement qui transforme les propriétaires de studios de fitness en clients payants.

## Comprendre le flux d'inscription

Les formulaires de paiement d'Ultimate Multisite sont des formulaires multi-étapes entièrement personnalisables. Pour FitSite, nous voulons un flux qui :

1. Semble conçu pour les entreprises de fitness
2. Ne collecte que ce qui est nécessaire
3. Permet au client d'accéder à un site fonctionnel le plus rapidement possible

Consultez [Le flux d'inscription](/user-guide/configuration/the-registration-flow) pour la référence technique complète.

## Concevoir le paiement FitSite

Accédez à **Ultimate Multisite > Checkout Forms** et créez un nouveau formulaire.

### Étape 1 : Sélection du plan

La première chose qu'un propriétaire de studio de fitness doit voir, ce sont les plans, présentés dans des termes qu'il comprend.

- Ajoutez un champ **Pricing Table** (Tableau de prix)
- Configurez-le pour afficher les trois plans FitSite
- Les descriptions de plan que vous avez rédigées à la Leçon 5 apparaissent ici — assurez-vous qu'elles s'adressent aux besoins des entreprises de fitness, et non aux fonctionnalités techniques

:::tip Le langage de la niche est crucial
« 1 Go de stockage » ne signifie rien pour un propriétaire de gym. « Tout ce dont vous avez besoin pour un site web de studio professionnel » signifie tout. Rédigez les descriptions de plan dans le langage de votre client.
:::

### Étape 2 : Sélection du modèle

Après avoir choisi un plan, le client sélectionne son modèle de départ.

- Ajoutez un champ **Template Selection** (Sélection de modèle)
- Les modèles disponibles sont filtrés par le plan qu'ils ont sélectionné (configuré à la Leçon 5)
- Chaque modèle doit avoir une image de prévisualisation montrant un design spécifique au fitness

### Étape 3 : Création de compte

Gardez cela minimal. Ne collectez que :

- Adresse e-mail
- Mot de passe
- Nom du studio/de l'entreprise (cela devient le nom de leur site)

Ne demandez pas d'informations dont vous n'avez pas besoin lors de l'inscription. Chaque champ supplémentaire réduit le taux de conversion.

### Étape 4 : Configuration du site

- **Site title** (Titre du site) : Pré-rempli à partir du nom du studio saisi à l'Étape 3
- **Site URL** : Généré automatiquement à partir du nom du studio (ex. : `ironworks.fitsite.com`)

### Étape 5 : Paiement

- Ajoutez le champ **Payment** (Paiement)
- Configurez votre passerelle de paiement ([Stripe](/user-guide/payment-gateways/stripe) est recommandé pour la facturation par abonnement)
- Si vous avez créé des *order bumps* (compléments de commande) à la Leçon 5, ajoutez un champ **Order Bump** avant l'étape de paiement

### Étape 6 : Confirmation

- Personnalisez le message de confirmation avec un langage spécifique au fitness
- Exemple : « Le site web de votre studio de fitness est en cours de création. Vous serez redirigé vers votre nouveau site dans quelques secondes. »

## Ajouter un interrupteur de sélection de période

Si vous avez configuré des variations de prix dans vos plans (mensuel vs. annuel), ajoutez un champ **Period Selection** (Sélection de période) au formulaire de paiement afin que les clients puissent basculer entre les périodes de facturation. Consultez [Checkout Forms](/user-guide/configuration/checkout-forms#adding-a-period-selection-toggle) pour les instructions.

## Configuration du paiement

Si vous n'avez pas encore configuré de passerelle de paiement :

1. Accédez à **Ultimate Multisite > Settings > Payment Gateways**
2. Suivez le [guide de configuration Stripe](/user-guide/payment-gateways/stripe) ou celui de votre passerelle préférée
3. Testez un flux de paiement complet avec un paiement de test

Consultez [Getting Paid](/user-guide/payment-gateways/getting-paid) pour plus de détails sur le fonctionnement des paiements vers votre compte.

## Tester le flux

Avant de continuer, effectuez une inscription de test complète :

1. Ouvrez le formulaire de paiement dans une fenêtre de navigateur privée/incognito
2. Sélectionnez un plan
3. Choisissez un modèle
4. Créez un compte
5. Effectuez le paiement (utilisez le mode test)
6. Vérifiez que le site est créé avec le modèle correct

Vérifiez que :

- [ ] Les descriptions de plan sont claires et spécifiques à la niche
- [ ] Les aperçus de modèles montrent des designs appropriés pour le fitness
- [ ] L'URL du site est générée correctement à partir du nom du studio
- [ ] Le paiement est traité avec succès
- [ ] Le client atterrit sur un site fonctionnel avec le modèle sélectionné
- [ ] Les e-mails de confirmation utilisent un langage spécifique au fitness

## Le réseau FitSite jusqu'à présent

```
FitSite Network
├── WordPress Multisite (mode sous-domaine)
├── Ultimate Multisite (configuré)
├── Hébergement avec SSL wildcard + mappage de domaine
├── Modèles de site (Studio Essential, Gym Pro, Fitness Chain)
├── Produits (Starter, Growth, Pro + Order Bumps)
├── Flux de paiement
│   ├── Sélection de plan avec descriptions spécifiques à la niche
│   ├── Sélection de modèle avec aperçus fitness
│   ├── Création de compte minimale
│   ├── Paiement via Stripe
│   └── Confirmation spécifique au fitness
└── Prêt pour le branding (prochaine leçon)
```

## Ce que nous avons construit dans cette leçon

- **Un formulaire de paiement multi-étapes** adapté aux propriétaires de studios de fitness
- **Un langage spécifique à la niche** tout au long du processus d'inscription
- **Une friction minimale** — uniquement les champs essentiels, un chemin rapide vers un site fonctionnel
- **L'intégration de paiement** avec vérification de test
- **Un flux de bout en bout testé** de la sélection du plan au site fonctionnel

---

**Suivant :** [Leçon 7 : Le rendre vôtre](lesson-7-branding) — nous faisons du *white-labeling* de la plateforme et établissons FitSite comme une marque.

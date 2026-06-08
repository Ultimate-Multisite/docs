---
title: 'Leçon 7 : Personnalisation'
sidebar_position: 8
_i18n_hash: 90013fc79a9cbb15283ce89b688002b1
---
# Leçon 7 : Le rendre vôtre

Vos clients ne doivent jamais avoir l'impression d'utiliser « un plugin WordPress ». Ils doivent avoir l'impression d'utiliser FitSite — une plateforme conçue pour leur secteur. Cette leçon couvre le branding, le *white-labeling* et la manière de faire en sorte que la plateforme ressemble à un produit fini.

## Où nous nous étions arrêtés

FitSite dispose d'un flux de paiement fonctionnel qui guide les propriétaires de studios de fitness, de la sélection de plan à la mise en ligne du site. Maintenant, nous allons faire en sorte que toute l'expérience ressemble à un produit cohérent et de marque.

## Le domaine de votre plateforme

Le fondement de votre marque est votre domaine. Pour FitSite :

- **Domaine principal** : `fitsite.com` (votre site marketing et la racine du réseau)
- **Sites clients** : `nomdusstudio.fitsite.com` (sous-domaines)
- **Domaines personnalisés** : Les clients des plans Growth et Pro peuvent mapper leur propre domaine

### Configuration de votre domaine

1. Enregistrez votre domaine de plateforme
2. Dirigez-le vers votre hébergeur
3. Configurez le DNS générique (`*.fitsite.com`) pour les sous-domaines clients
4. Assurez-vous que le SSL générique est actif

Consultez [Comment configurer le mappage de domaine](/user-guide/domain-mapping/how-to-configure-domain-mapping) pour des instructions détaillées.

## Le *White-labeling* de l'expérience d'administration

Lorsqu'un propriétaire de studio de fitness se connecte au tableau de bord de son site, il doit voir votre marque, et non le branding de WordPress ou d'Ultimate Multisite.

### Page de connexion personnalisée

Personnalisez la page de connexion WordPress pour afficher :

- Votre logo FitSite
- Des images de fond adaptées au fitness
- Les couleurs de votre marque

### Branding du tableau de bord

Utilisez l'addon [Admin Page Creator](/addons/admin-page-creator) ou du CSS personnalisé pour :

- Remplacer le logo WordPress par votre logo FitSite
- Personnaliser le schéma de couleurs de l'administration pour qu'il corresponde à votre marque
- Ajouter un widget de tableau de bord personnalisé avec des liens rapides et des ressources d'aide spécifiques au fitness

### Pages d'administration personnalisées

Envisagez de créer des pages d'administration personnalisées qui mettent en évidence les actions les plus pertinentes pour les propriétaires de studios de fitness :

- "Modifier votre emploi du temps de cours"
- "Mettre à jour les profils des entraîneurs"
- "Voir votre site"

Cela réduit la courbe d'apprentissage en plaçant les actions spécifiques au secteur au premier plan, au lieu de les enterrer dans le menu standard de WordPress.

## Branding de vos communications

Chaque e-mail, facture et notification doit renforcer votre marque.

### E-mails système

Accédez à **Ultimate Multisite > Settings > Emails** et personnalisez tous les e-mails système :

- **Nom de l'expéditeur** : FitSite
- **E-mail de l'expéditeur** : hello@fitsite.com
- **Modèles d'e-mail** : Utilisez les couleurs et le logo de votre marque
- **Langue** : Spécifique au fitness dans l'ensemble

E-mails clés à personnaliser :

| E-mail | Version générique | Version FitSite |
|-------|----------------|-----------------|
| Bienvenue | "Votre nouveau site est prêt" | "Votre site de studio de fitness est en ligne" |
| Reçu de paiement | "Paiement reçu" | "Paiement d'abonnement FitSite confirmé" |
| Essai qui se termine | "Votre essai se termine bientôt" | "Votre essai FitSite se termine dans 3 jours — gardez votre site de studio en ligne" |

### Factures

Personnalisez les modèles de factures avec :

- Votre logo FitSite et les couleurs de votre marque
- Vos coordonnées professionnelles
- Des noms de produits spécifiques au fitness (et non des identifiants de plan génériques)

## Le site visible par le client

Votre domaine principal (`fitsite.com`) a besoin d'un site marketing qui vend la plateforme. Ceci est séparé de l'administration du réseau Ultimate Multisite — c'est la vitrine publique de votre entreprise.

Pages clés :

- **Page d'accueil** : Proposition de valeur claire pour les entreprises de fitness
- **Fonctionnalités** : Ce que fait FitSite, en termes de fitness
- **Tarification** : Vos trois plans avec des comparaisons de fonctionnalités spécifiques au secteur
- **Exemples** : Présentez des sites construits sur la plateforme
- **Inscription** : Liens vers votre formulaire de paiement

:::tip Votre site marketing peut être un site de réseau
Créez votre site marketing comme un site au sein de votre propre réseau. Cela vous permet de le gérer depuis le même tableau de bord et de démontrer les capacités de votre propre plateforme.
:::

## Domaine personnalisé pour les clients

Pour les clients ayant des plans incluant des domaines personnalisés, documentez le processus clairement :

1. Le client enregistre ou transfère son domaine à un registraire
2. Le client met à jour le DNS pour pointer vers votre plateforme (fournir les enregistrements exacts)
3. Ultimate Multisite gère le mappage du domaine et le SSL

Créez un article d'aide ou une entrée de base de connaissances spécifiquement pour ce processus, rédigé pour des propriétaires de studios de fitness non techniques.

## Le réseau FitSite jusqu'à présent

```
FitSite Network
├── WordPress Multisite (mode sous-domaine)
├── Ultimate Multisite (configuré + brandé)
├── Domaine de plateforme (fitsite.com + SSL générique)
├── Modèles de site (Studio Essential, Gym Pro, Fitness Chain)
├── Produits (Starter, Growth, Pro + Order Bumps)
├── Flux de paiement (spécifique au secteur, testé)
├── Branding
│   ├── Page de connexion personnalisée
│   ├── Tableau de bord brandé
│   ├── E-mails système spécifiques au secteur
│   ├── Factures brandées
│   └── Site marketing sur fitsite.com
└── Prêt pour le flux d'intégration (prochaine leçon)
```

## Ce que nous avons construit dans cette leçon

- **Domaine de plateforme et DNS** configurés pour une expérience de marque
- **Administration *white-label* ** avec le branding FitSite partout
- **Communications personnalisées** — e-mails, factures et notifications entièrement de marque
- **Un site marketing** qui vend FitSite aux propriétaires de studios de fitness
- **Documentation des domaines personnalisés** pour les clients qui souhaitent leur propre domaine

---

**Suivant :** [Leçon 8 : Intégration client](lesson-8-onboarding) — nous concevons l'expérience qui transforme une nouvelle inscription en un client actif et satisfait.

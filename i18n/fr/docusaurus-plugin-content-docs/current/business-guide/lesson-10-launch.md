---
title: 'Leçon 10 : Jour du lancement'
sidebar_position: 11
_i18n_hash: 49ba467b8efba57e92cf072bcec53969
---
# Leçon 10 : Jour du lancement

Tout est construit. Avant d'ouvrir les portes, cette leçon vous guide à travers la liste de contrôle de pré-lancement pour vous assurer que rien n'est cassé, manquant ou embarrassant.

## Où nous nous étions arrêtés {#where-we-left-off}

FitSite dispose des modèles, des plans, du processus de paiement, du branding, de l'intégration et de la tarification configurés. Maintenant, nous vérifions que tout fonctionne et nous passons en ligne.

## Liste de contrôle de pré-lancement {#pre-launch-checklist}

Traitez chaque élément. Ne sautez aucun.

### Infrastructure de la plateforme {#platform-infrastructure}

- [ ] L'hébergement est stable et fonctionne bien sous charge
- [ ] Le SSL avec caractère générique (Wildcard SSL) est actif et tous les sous-domaines sont servis via HTTPS
- [ ] Le mappage de domaine fonctionne — testez la création d'un site et le mappage d'un domaine personnalisé
- [ ] Les sauvegardes sont configurées et testées (restaurez au moins une pour vérifier)
- [ ] La surveillance est en place — vous saurez si la plateforme tombe en panne

### Modèles (Templates) {#templates}

- [ ] Les trois modèles se chargent correctement sur les nouveaux sites
- [ ] Le contenu factice est utile et exempt de fautes de frappe
- [ ] Toutes les images sont correctement licenciées (pas de filigrane de photo de stock)
- [ ] La réactivité mobile fonctionne sur chaque page de modèle
- [ ] La vitesse de chargement des pages est acceptable (testez avec un outil comme GTmetrix ou PageSpeed Insights)
- [ ] Aucun lien cassé ou actif manquant sur aucun modèle

### Plans et produits {#plans-and-products}

- [ ] Les trois plans sont actifs et visibles
- [ ] Les descriptions de plans sont précises et spécifiques à la niche
- [ ] La tarification est correcte (mensuelle et annuelle)
- [ ] Les frais de mise en place sont configurés sur les bons plans
- [ ] La période d'essai fonctionne sur le plan Starter
- [ ] Les ajouts de commande (Order bumps) apparaissent correctement pendant le paiement
- [ ] Les limitations de plugins et de thèmes sont appliquées correctement par plan

### Flux de paiement (Checkout Flow) {#checkout-flow}

- [ ] Effectuez une inscription test complète pour chaque plan (utilisez le mode de paiement test)
- [ ] La sélection de modèles affiche les modèles corrects par plan
- [ ] Le paiement est traité avec succès
- [ ] Le client reçoit un e-mail de bienvenue après l'inscription
- [ ] Un nouveau site est créé avec le modèle correct
- [ ] Le client peut se connecter à son nouveau site immédiatement
- [ ] Les codes de réduction fonctionnent correctement

### Branding {#branding}

- [ ] La page de connexion affiche le branding FitSite
- [ ] Le dashboard administrateur affiche le branding FitSite
- [ ] Tous les e-mails système utilisent le branding FitSite et un langage spécifique au fitness
- [ ] Les factures s'affichent correctement avec les détails de votre entreprise
- [ ] Le site marketing est en ligne et renvoie vers le formulaire de paiement

### Intégration (Onboarding) {#onboarding}

- [ ] Le widget Quick Start apparaît sur les nouveaux dashboards clients
- [ ] Tous les liens Quick Start pointent vers les pages correctes
- [ ] La séquence d'e-mails de bienvenue est configurée et testée
- [ ] Les articles de la base de connaissances sont publiés et accessibles
- [ ] La page de compte affiche les informations de plan et les options de mise à niveau correctes

### Légal et affaires {#legal-and-business}

- [ ] Les conditions d'utilisation sont publiées et liées depuis le paiement
- [ ] La politique de confidentialité est publiée et accessible
- [ ] La politique de remboursement est définie et documentée
- [ ] L'entité commerciale est configurée pour recevoir des paiements
- [ ] La passerelle de paiement est en mode live (et non en mode test)
- [ ] La configuration fiscale est correcte pour votre juridiction

## Lancement en douceur (Soft Launch) vs. Lancement public (Hard Launch) {#soft-launch-vs-hard-launch}

Envisagez un lancement en deux phases :

### Phase 1 : Lancement en douceur {#phase-1-soft-launch}

Invitez 5 à 10 propriétaires de studios de fitness à s'inscrire avant le lancement public. Ce sont vos clients bêta. Offrez-leur une réduction significative (50 % à vie, ou 3 mois gratuits) en échange de :

- Des commentaires honnêtes sur l'expérience d'inscription et d'intégration
- L'autorisation d'utiliser leur site comme exemple de vitrine
- Le signalement de tout bug ou problème qu'ils rencontrent

Cela vous fournit des retours clients réels et des sites actifs à présenter avant de vous ouvrir au public.

### Phase 2 : Lancement public {#phase-2-public-launch}

Une fois que les retours du lancement en douceur sont intégrés :

- Passez la passerelle de paiement en mode live
- Publiez votre site marketing
- Commencez l'acquisition de clients (Leçon 11)
- Annoncez sur les canaux pertinents de l'industrie du fitness

## Actions du jour du lancement {#launch-day-actions}

Le jour où vous devenez public :

1. **Passez aux paiements en direct** — désactivez le mode test sur votre passerelle de paiement
2. **Vérifiez une dernière fois** — effectuez une inscription test complète avec un paiement réel (remboursez-vous ensuite)
3. **Surveillez attentivement** — soyez attentif aux erreurs, aux inscriptions échouées ou aux problèmes de paiement
4. **Soyez disponible** — vos premiers vrais clients pourraient avoir besoin d'aide, et une réponse rapide construit la confiance
5. **Célébrez brièvement** — puis retournez au travail

## Ce qui peut mal tourner {#what-can-go-wrong}

Soyez prêt pour :

- **Problèmes de passerelle de paiement** : Ayez prêt le contact du support de votre fournisseur de passerelle
- **Problèmes de certificat SSL** : Sachez comment vérifier et renouveler les certificats
- **Échecs de livraison d'e-mails** : Testez que les e-mails arrivent réellement (vérifiez les dossiers spam)
- **Performance sous charge** : Si vous subissez un pic de trafic, sachez comment faire évoluer votre hébergement
- **Confusion client** : Ayez votre base de connaissances et vos canaux de support prêts

## Le réseau FitSite jusqu'à présent {#the-fitsite-network-so-far}

```
FitSite Network
├── WordPress Multisite (mode sous-domaine) ✓
├── Ultimate Multisite (configuré + branding) ✓
├── Platform Domain (fitsite.com + SSL avec caractère générique) ✓
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain) ✓
├── Products (Starter, Growth, Pro + Order Bumps + Discounts) ✓
├── Checkout Flow (testé de bout en bout) ✓
├── Branding (complet) ✓
├── Customer Onboarding (Quick Start, e-mails, ressources d'aide) ✓
├── Pricing Strategy (annuel, essais, frais de mise en place, réductions) ✓
├── Pre-Launch Checklist (vérifié) ✓
├── Soft Launch (clients bêta intégrés) ✓
└── LIVE ✓
```

## Ce que nous avons construit dans cette leçon {#what-we-built-this-lesson}

- **Une liste de contrôle de pré-lancement complète** couvrant l'infrastructure, le contenu, les paiements et le juridique
- **Une stratégie de lancement en douceur** pour obtenir des retours réels avant le lancement public
- **Des procédures pour le jour du lancement** pour passer en ligne en toute confiance
- **Un plan de contingence** pour les problèmes courants du jour du lancement

---

**Suivant :** [Lesson 11: Finding Customers](lesson-11-customers) — maintenant que FitSite est en ligne, comment faire pour que les propriétaires de studios de fitness s'inscrivent ?

---
title: 'Leçon 8 : Intégration client'
sidebar_position: 9
_i18n_hash: 5b71133bebf067164c77d33db7c81806
---
# Leçon 8 : Intégration des clients (Onboarding)

Amener un client à s'inscrire n'est que la moitié du travail. S'il se connecte, se sent dépassé et ne revient jamais, vous l'avez perdu. Cette leçon conçoit l'expérience qui transforme une nouvelle inscription en un client actif et engagé.

## Où nous nous étions arrêtés {#where-we-left-off}

FitSite est entièrement marqué à votre enseigne avec un processus de paiement fonctionnel. Nous nous concentrons maintenant sur ce qui se passe après qu'un propriétaire de studio de fitness a terminé son inscription et atterrit sur son nouveau site pour la première fois.

## Pourquoi l'intégration est importante {#why-onboarding-matters}

Les 30 premières minutes après l'inscription déterminent si un client reste ou s'il nous quitte. Un propriétaire de studio de fitness qui :

- Se connecte et voit un site qui ressemble déjà à un site de fitness → reste
- Sait exactement quoi faire ensuite → reste
- Se sent perdu dans un tableau de bord WordPress générique → part

Vos modèles de niche (Leçon 4) gèrent le premier point. Cette leçon gère le second.

## L'expérience de première connexion {#the-first-login-experience}

### Widget de tableau de bord de bienvenue {#welcome-dashboard-widget}

Créez un widget de tableau de bord personnalisé qui salue les nouveaux clients et les guide dans la configuration. Il doit apparaître de manière bien visible lors de leur première connexion.

**Démarrage rapide FitSite :**

1. **Ajoutez le nom et le logo de votre studio** -- Lien vers les réglages de l'Apparence ou de l'Identité du site
2. **Mettez à jour votre emploi du temps de cours** -- Lien direct vers l'éditeur de la page "Cours"
3. **Ajoutez vos entraîneurs** -- Lien vers l'éditeur de la page "Entraîneurs"
4. **Définissez vos coordonnées** -- Lien vers l'éditeur de la page "Contact"
5. **Prévisualisez votre site** -- Lien vers le front-end

Chaque étape est liée directement à la page ou au réglage concerné. Pas de recherche dans les menus.

### Simplifier le tableau de bord {#simplify-the-dashboard}

Les nouveaux clients n'ont pas besoin de voir tous les éléments de menu de WordPress. Pensez à :

- Masquer les éléments de menu qui ne sont pas pertinents pour la gestion d'un site de fitness (par exemple, les Commentaires s'ils ne sont pas utilisés)
- Réorganiser le menu pour placer les éléments les plus utilisés en premier
- Ajouter des libellés de menu personnalisés qui ont du sens pour la niche ("Votre Studio" au lieu de "Apparence")

L'addon [Plugin & Theme Manager](/addons/plugin-and-theme-manager) peut aider à contrôler ce que voient les clients.

## Séquence d'e-mails de bienvenue {#welcome-email-sequence}

Un seul e-mail de bienvenue ne suffit pas. Configurez une séquence qui guide les clients tout au long de leur première semaine :

### E-mail 1 : Bienvenue (Immédiatement après l'inscription) {#email-1-welcome-immediately-after-signup}

- Objet : "Bienvenue sur FitSite — votre site de studio est en ligne"
- Contenu : Lien de connexion, étapes de démarrage rapide, lien vers les ressources d'aide
- Ton : Enthousiaste, encourageant, spécifique au fitness

### E-mail 2 : Premières victoires (Jour 1) {#email-2-quick-wins-day-1}

- Objet : "3 choses à faire en premier sur votre FitSite"
- Contenu : Ajouter votre logo, mettre à jour l'image héros de la page d'accueil, ajouter votre emploi du temps de cours
- Inclure des captures d'écran montrant exactement où cliquer

### E-mail 3 : Faites-en vôtre (Jour 3) {#email-3-make-it-yours-day-3}

- Objet : "Faites ressortir votre site de fitness"
- Contenu : Personnaliser les couleurs, ajouter des photos d'entraîneurs, écrire l'histoire de votre studio
- Lien vers des exemples de superbes sites de fitness sur la plateforme

### E-mail 4 : Mise en ligne (Jour 7) {#email-4-go-live-day-7}

- Objet : "Prêt à partager votre FitSite avec le monde ?"
- Contenu : Liste de contrôle des éléments à vérifier avant de partager, comment connecter un domaine personnalisé (si sur Growth/Pro), conseils de partage sur les réseaux sociaux

:::tip Automatisation des e-mails
Utilisez [Webhooks](/user-guide/integrations/webhooks) ou [Zapier](/user-guide/integrations/zapier) pour déclencher ces e-mails via votre plateforme de marketing par e-mail. Cela vous donne plus de contrôle sur le calendrier et vous permet de suivre l'engagement.
:::

## Ressources d'aide {#help-resources}

Créez du contenu d'aide spécifique à la niche qui répond aux questions que les propriétaires de studios de fitness posent réellement :

### Articles de base de connaissances {#knowledge-base-articles}

- "Comment mettre à jour votre emploi du temps de cours"
- "Ajouter et modifier les profils d'entraîneurs"
- "Changer le logo et les couleurs de votre studio"
- "Connecter votre propre nom de domaine" (pour les clients Growth/Pro)
- "Ajouter un widget de réservation à votre site"

Rédigez ces articles pour des utilisateurs non techniques. Utilisez des captures d'écran. Évitez le jargon WordPress.

### Tutoriels vidéo {#video-walkthroughs}

Enregistrements d'écran courts (2-3 minutes) montrant :

- La première connexion et l'orientation
- L'édition de la page d'accueil
- La mise à jour de l'emploi du temps de cours
- L'ajout d'un nouvel entraîneur

Ils n'ont pas besoin d'être des productions léchées. Ce qui compte, c'est qu'ils soient clairs, utiles et spécifiques à la niche.

## La page Compte {#the-account-page}

Ultimate Multisite comprend une [Page Compte](/user-guide/client-management/account-page) visible par le client où les clients gèrent leur abonnement. Personnalisez-la pour :

- Afficher leur plan FitSite actuel
- Afficher des options de mise à niveau avec des avantages spécifiques au fitness
- Fournir l'historique de facturation et les téléchargements de factures
- Faire le lien avec les ressources d'aide

## Mesurer le succès de l'intégration {#measuring-onboarding-success}

Suivez ces indicateurs pour savoir si votre intégration fonctionne :

- **Taux d'activation** : Quel pourcentage des inscriptions personnalise réellement son site au cours de la première semaine ?
- **Connexions de la première semaine** : Combien de fois un nouveau client se connecte-t-il au cours de sa première semaine ?
- **Tickets de support des nouveaux clients** : Un volume élevé signifie que votre intégration présente des lacunes
- **Conversion essai-payant** : Si vous proposez des essais, quel pourcentage se convertit ?

## Le réseau FitSite jusqu'à présent {#the-fitsite-network-so-far}

```
FitSite Network
├── WordPress Multisite (mode sous-domaine)
├── Ultimate Multisite (configuré + marqué à votre enseigne)
├── Domaine de plateforme (fitsite.com + SSL wildcard)
├── Modèles de site (Studio Essential, Gym Pro, Fitness Chain)
├── Produits (Starter, Growth, Pro + Order Bumps)
├── Flux de paiement (spécifique à la niche, testé)
├── Marque (connexion, tableau de bord, e-mails, factures, site marketing)
├── Intégration des clients (Customer Onboarding)
│   ├── Widget de démarrage rapide du tableau de bord
│   ├── Tableau de bord simplifié pour la gestion du site de fitness
│   ├── Séquence de bienvenue de 4 e-mails
│   ├── Base de connaissances spécifique à la niche
│   ├── Tutoriels vidéo
│   └── Page Compte personnalisée
└── Prêt pour la stratégie de prix (prochaine leçon)
```

## Ce que nous avons construit dans cette leçon {#what-we-built-this-lesson}

- **Une expérience de première connexion guidée** avec un widget de Démarrage rapide
- **Un tableau de bord simplifié** axé sur les tâches de gestion de site de fitness
- **Une séquence d'e-mails de bienvenue** qui guide les clients tout au long de leur première semaine
- **Des ressources d'aide spécifiques à la niche** rédigées pour les propriétaires de studios de fitness non techniques
- **Des métriques d'intégration** pour suivre et améliorer l'expérience

---

**Suivant :** [Leçon 9 : Tarification pour le profit](lesson-9-pricing) -- nous affinons la stratégie de tarification pour maximiser les revenus et minimiser le taux de désabonnement.

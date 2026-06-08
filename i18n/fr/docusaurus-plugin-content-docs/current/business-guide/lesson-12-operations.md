---
title: 'Leçon 12 : Gérer l''entreprise'
sidebar_position: 13
_i18n_hash: 0fe6371df216b74a2051b95972ad68e8
---
# Leçon 12 : Gérer l'entreprise

Une plateforme n'est pas un projet que l'on termine ; c'est une entreprise que l'on gère. Cette leçon couvre les opérations quotidiennes de gestion de FitSite : le support, la facturation, la maintenance et le maintien de la satisfaction des clients.

## Où nous nous étions arrêtés

FitSite est en ligne et les clients s'inscrivent. Maintenant, vous devez faire fonctionner cette opération de manière durable.

## Opérations quotidiennes

### Surveillance

Vérifiez ces points quotidiennement (ou configurez des alertes) :

- **Temps de disponibilité (Uptime)** : La plateforme est-elle accessible ? Utilisez un service de surveillance du temps de disponibilité.
- **Nouvelles inscriptions** : Combien de nouveaux clients se sont inscrits aujourd'hui ?
- **Paiements échoués** : Y a-t-il des échecs de paiement qui nécessitent votre attention ?
- **Demandes de support** : Y a-t-il des questions de clients sans réponse ?

### Support client

Votre spécialisation est un avantage ici. Étant donné que tous vos clients sont des studios de fitness, vous verrez les mêmes questions se répéter :

**Questions courantes que vous recevrez :**

- "Comment puis-je mettre à jour mon emploi du temps de cours ?"
- "Puis-je changer les couleurs de mon site ?"
- "Comment puis-je ajouter un nouvel entraîneur à mon site ?"
- "Mon domaine ne fonctionne pas"
- "Comment puis-je annuler/mettre à niveau mon forfait ?"

Construisez votre base de connaissances (que nous avons commencée dans la Leçon 8) autour de ces questions récurrentes. Chaque ticket de support qui aurait pu être un article de base de connaissances est un signal pour rédiger cet article.

### Niveaux de support

À mesure que vous grandissez, structurez le support en fonction du forfait :

| Forfait | Niveau de support | Délai de réponse |
|------|--------------|---------------|
| Starter | Base de connaissances + email | 48 heures |
| Growth | Support par email | 24 heures |
| Pro | Email prioritaire + appel d'intégration | 4 heures |

L'addon [Support Tickets](/addons/support-tickets) peut vous aider à gérer les demandes de support au sein de la plateforme.

## Opérations de facturation

### Paiements récurrents

Ultimate Multisite gère la facturation récurrente automatiquement via votre passerelle de paiement. Votre rôle est de surveiller :

- **Paiements échoués** : Faites un suivi rapide. La plupart des échecs sont dus à des cartes expirées, et non à des annulations intentionnelles.
- **Gestion des échecs (Dunning)** : Configurez une logique de nouvelle tentative automatisée via votre passerelle de paiement (Stripe gère cela très bien).
- **Demandes d'annulation** : Comprenez pourquoi les clients partent. Chaque annulation est un retour d'information.

### Gestion des adhésions (Memberships)

Accédez à **Ultimate Multisite > Memberships** pour :

- Voir tous les abonnements actifs
- Gérer les demandes de mise à niveau et de rétrogradation
- Traiter les remboursements si nécessaire
- Gérer les expirations d'essai

Consultez [Gérer les adhésions](/user-guide/administration/managing-memberships) pour la référence complète.

### Facturation (Invoicing)

Assurez-vous que les factures sont générées correctement pour chaque paiement. Les clients peuvent avoir besoin de factures pour leurs déclarations de dépenses professionnelles. Consultez [Gérer les paiements et les factures](/user-guide/administration/managing-payments-and-invoices).

## Maintenance de la plateforme

### Mises à jour de WordPress et des plugins

En tant qu'administrateur réseau, vous êtes responsable de :

- **Mises à jour du cœur de WordPress** : Testez sur un site de staging avant de l'appliquer en production.
- **Mises à jour des plugins** : Même chose — testez d'abord, puis appliquez à l'échelle du réseau.
- **Mises à jour des thèmes** : Vérifiez que les modèles ont toujours l'air corrects après les mises à jour de thème.
- **Mises à jour d'Ultimate Multisite** : Suivez le journal des modifications et testez avant de mettre à jour.

:::warning Ne jamais mettre à jour en production sans test
Une mise à jour défectueuse affecte tous les sites clients de votre réseau. Testez toujours les mises à jour sur une copie de staging de votre réseau en premier.
:::

### Sécurité

- Maintenez tous les logiciels à jour
- Utilisez des mots de passe forts et l'authentification à deux facteurs pour les comptes administrateurs
- Surveillez toute activité suspecte
- Ayez un plan en cas d'incident de sécurité

### Performance

À mesure que votre réseau grandit, surveillez :

- **Temps de chargement des pages** : Les sites clients sont-ils rapides ?
- **Utilisation des ressources du serveur** : CPU, mémoire, espace disque
- **Performance de la base de données** : Les grands réseaux nécessitent une optimisation de la base de données au fil du temps

Envisagez de mettre en place un cache (cache de page, cache d'objet) et un CDN si ce n'est pas déjà fait. L'[intégration Cloudflare](/user-guide/host-integrations/cloudflare) gère une grande partie de cela.

## Gestion du cycle de vie client

### Réduire le taux d'attrition (Churn)

Le taux d'attrition est le pourcentage de clients qui annulent chaque mois. Pour une entreprise par abonnement, réduire ce taux est aussi important que d'acquérir de nouveaux clients.

**Raisons courantes de l'attrition des clients de studios de fitness :**

- Ils n'ont pas réussi à comprendre comment utiliser la plateforme → améliorer l'intégration (onboarding)
- Le site n'était pas assez beau → améliorer les modèles (templates)
- Ils n'ont pas vu de valeur → améliorer les fonctionnalités ou la communication
- Ils ont trouvé une alternative moins chère → renforcer la valeur de votre niche
- Leur entreprise a fermé → inévitable, mais à suivre séparément

### Encourager les mises à niveau

Les clients sur le forfait Starter qui réussissent devraient être encouragés à passer au niveau supérieur :

- Lorsqu'ils atteignent les limites du forfait (sites, stockage), affichez des invites de mise à niveau.
- Envoyez des e-mails ciblés soulignant les fonctionnalités du forfait Growth dont ils pourraient bénéficier.
- Présentez ce que les clients Growth/Pro ont construit.

### Campagnes de réengagement (Win-Back)

Lorsqu'un client annule :

1. Demandez pourquoi (enquête de sortie ou e-mail).
2. Répondez à leur préoccupation si possible.
3. Offrez une réduction pour qu'ils reviennent (30 à 60 jours après l'annulation).

## Routines hebdomadaires et mensuelles

### Hebdomadaire

- Examiner les nouvelles inscriptions et les annulations.
- Répondre à tous les tickets de support ouverts.
- Vérifier la performance et le temps de disponibilité de la plateforme.
- Examiner tout paiement échoué.

### Mensuel

- Analyser les indicateurs clés (MRR, taux d'attrition, nouveaux clients, mises à niveau).
- Appliquer les mises à jour de WordPress et des plugins (après test de staging).
- Examiner et mettre à jour la base de connaissances en fonction des schémas de support.
- Envoyer une newsletter ou une mise à jour aux clients (nouvelles fonctionnalités, astuces, actualités de l'industrie du fitness).

### Trimestriel

- Examiner la tarification par rapport aux concurrents et aux retours clients.
- Évaluer les modèles de conception : ont-ils besoin d'être rafraîchis ?
- Évaluer la capacité d'hébergement : devez-vous passer à l'échelle supérieure ?
- Examiner et améliorer l'intégration (onboarding) en fonction des données d'activation.

## Ce que nous avons construit dans cette leçon

- **Routines de surveillance quotidiennes** pour le temps de disponibilité, les inscriptions, les paiements et le support.
- **Une structure de support par niveaux** adaptée aux forfaits.
- **Opérations de facturation** incluant la gestion des échecs et des annulations.
- **Procédures de maintenance** pour les mises à jour, la sécurité et la performance.
- **Stratégies de réduction de l'attrition** spécifiques à la niche du fitness.
- **Routines opérationnelles hebdomadaires, mensuelles et trimestrielles.**

---

**Suivant :** [Leçon 13 : Passer à l'échelle supérieure (Scaling Up)](lesson-13-growth) — faire passer FitSite d'une petite opération à une véritable entreprise.

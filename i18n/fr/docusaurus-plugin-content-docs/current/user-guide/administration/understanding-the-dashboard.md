---
title: Comprendre le tableau de bord
sidebar_position: 7
_i18n_hash: 4869a2f03eb529c49c821a22eb6b9647
---
# Comprendre le tableau de bord Ultimate Multisite

Avant de nous plonger dans des options de configuration plus avancées et les aspects opérationnels d'Ultimate Multisite, examinons le tableau de bord.

Comme de nombreux plugins WordPress, Ultimate Multisite crée une entrée de menu au niveau du réseau intitulée **Ultimate Multisite** avec plusieurs sous-entrées de menu en dessous.

## Widgets du tableau de bord réseau

Ultimate Multisite injecte quelques widgets utiles dans le tableau de bord au niveau du réseau. Ce tableau de bord se trouve en naviguant vers **My Sites → Network Admin → Dashboard**. Les widgets sont conçus pour fournir un accès facile aux informations et aux opérations courantes pour l'administrateur réseau.

![Tableau de bord réseau avec les widgets Ultimate Multisite](/img/admin/network-dashboard-full.png)

### Premiers Pas

![Widget Premiers Pas](/img/admin/network-dashboard-first-steps.png)

Ce widget apparaît sur une installation fraîche d'Ultimate Multisite et rappelle à l'administrateur réseau de compléter des tâches supplémentaires telles que la configuration d'un mode de paiement et la création d'un compte test.

### Résumé

![Widget Résumé](/img/admin/network-dashboard-summary.png)

Le widget Résumé indique le nombre d'inscriptions et leurs revenus pour la journée. Le MRR (Monthly Recurring Revenue) indique un total projeté parmi les clients disposant d'abonnements générant des revenus.

### Flux d'activité

![Widget Flux d'activité](/img/admin/network-dashboard-activity-stream.png)

Ce widget rapporte les événements à travers Ultimate Multisite. Les événements incluent les inscriptions, les annulations, les créations de sites, les suppressions et d'autres activités.

Veuillez vous référer à la section Événements de la documentation pour une description plus détaillée.

### Maintenant

![Widget Maintenant](/img/admin/network-dashboard-right-now.png)

Ce widget utilitaire affiche un court résumé des utilisateurs et des sites dans le réseau. Des raccourcis pratiques en haut permettent un accès en un clic pour créer de nouveaux sites ou utilisateurs.

### Actualités et Discussions

![Widget Actualités et Discussions](/img/admin/network-dashboard-news.png)

Ce widget récupère et affiche les dernières actualités d'Ultimate Multisite. Gardez un œil sur ce widget pour obtenir des informations sur les mises à jour, les bogues critiques et les correctifs de sécurité.

## Tableau de bord Ultimate Multisite

Alors que le tableau de bord au niveau du réseau présente des informations globales sur le réseau, le tableau de bord Ultimate Multisite (situé au niveau supérieur du menu Ultimate Multisite) présente des informations sur le service.

![Tableau de bord Ultimate Multisite](/img/admin/um-dashboard-top.png)

### Croissance du revenu récurrent mensuel

Le graphique MRR (Monthly Recurring Revenue) affiche une ventilation mensuelle des revenus sur une période de 12 mois.

![Graphique de croissance du MRR](/img/admin/um-dashboard-mrr.png)

Les nouveaux revenus sont indiqués en bleu tandis que les annulations sont reflétées en rouge.

### Support de plage de dates

En fonction du nombre de clients et de l'activité, les statistiques peuvent devenir accablantes. Le support de plage de dates intégré au tableau de bord permet à l'administrateur réseau de se concentrer uniquement sur les informations et la période requises.

![Sélecteur de plage de dates et statistiques](/img/admin/um-dashboard-date-range.png)

La plage de dates détermine la période des informations affichées par les widgets directement en dessous, y compris les revenus, les nouveaux abonnements, les inscriptions par pays, les inscriptions par formulaire et les sites les plus visités.

![Widgets de statistiques du tableau de bord](/img/admin/um-dashboard-stats.png)

:::tip
Pour que le widget **Most Visited Sites** fonctionne, activez le comptage des visites dans **Ultimate Multisite → Settings → Sites → Enable Visits Limitation and Counting**.
:::

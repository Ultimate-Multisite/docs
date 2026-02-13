---
title: Réduction d'un plan
sidebar_position: 7
_i18n_hash: 6513875b161bca42a0dc0612f40b0ce5
---
# Réduction d'un plan (v2)

_**NOTE IMPORTANTE : Cet article fait référence à Ultimate Multisite version 2.x.**_

Réduire un plan ou un abonnement est une action courante que vos clients peuvent effectuer s'ils disposent d'un budget limité ou s'ils ont décidé qu'ils n'auront pas besoin de nombreuses ressources pour gérer leur sous‑site.

## Comment réduire un plan

Vos clients peuvent réduire leur plan à tout moment en se connectant à leur tableau de bord d'administration du sous‑site et en cliquant sur **Changer** sous leur page de compte.

![Account page with Change button under membership](/img/admin/memberships-list.png)

En cliquant sur le bouton **Changer**, l'utilisateur/client sera redirigé vers la page de paiement où il pourra sélectionner le plan vers lequel il souhaite modifier son abonnement.

![Checkout page showing plan options for downgrade](/img/admin/memberships-list.png)

Dans cet exemple, nous réduisons le plan de **Premium** à **Free**.

Pour procéder, l'utilisateur doit simplement cliquer sur le bouton **Terminer le paiement**. Il sera alors renvoyé vers la page de compte affichant un message concernant le changement en attente pour l'adhésion. Les changements prendront effet lors de la prochaine période de facturation du client.

![Account page showing pending membership change message](/img/admin/memberships-list.png)

### Que se passe-t-il lorsqu'un utilisateur réduit son plan

Il est important de noter que la réduction du plan n'altère pas la configuration existante du sous‑site de l'utilisateur.

Il ne modifie pas automatiquement le modèle de site, car changer le modèle effacerait et réinitialiserait complètement le sous‑site. Cela évite une perte de données inutile. Ainsi, l'espace disque, les thèmes, les extensions, etc. resteront intacts, à l'exception des articles.

Nous comprenons que votre principale préoccupation concerne les limites et quotas que vous avez définis pour chaque plan, mais nous devons prendre en compte les dommages que cela pourrait causer au sous‑site de l'utilisateur si nous supprimions ou modifions l'une de ses configurations.

Pour les articles dépassant la limite définie dans le plan, vous avez trois options différentes : **Conserver les articles tels quels**, **Déplacer les articles à la corbeille**, ou **Déplacer les articles au brouillon**. Vous pouvez configurer cela dans les paramètres d'Ultimate Multisite.

![Post limit exceeded options in Ultimate Multisite settings](/img/config/settings-sites.png)

### Que se passe-t-il pour le paiement

Dans la version 2.0, il n'est plus nécessaire d'apporter des ajustements au paiement en termes de prorata.

Ceci est dû au fait que le système attendra que l'adhésion existante **termine son cycle de facturation avant** que le nouveau plan/adhésion ne prenne effet. Le nouveau montant de facturation pour le nouveau membre sera automatiquement appliqué et facturé lors de la prochaine période de facturation.

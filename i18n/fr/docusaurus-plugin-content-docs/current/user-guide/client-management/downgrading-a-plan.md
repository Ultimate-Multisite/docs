---
title: Passer à un forfait inférieur
sidebar_position: 7
_i18n_hash: ce49309d1cd1d8310fd360fa324119f3
---
# Rétrograder un plan (v2)

_**NOTE IMPORTANTE : cet article fait référence à Ultimate Multisite version 2.x.**_

Rétrograder un plan ou un abonnement est une action courante que vos clients peuvent effectuer s’ils ont un budget limité ou s’ils ont décidé qu’ils n’auront pas besoin de beaucoup de ressources pour faire fonctionner leur sous-site.

## Comment rétrograder un plan

Vos clients peuvent rétrograder leur plan à tout moment en se connectant au tableau de bord d’administration de leur sous-site et en cliquant sur **Modifier** sous leur page Account.

![Page Account du client avec la carte Votre abonnement et le bouton Modifier](/img/account-page/membership-change-button.png)

Après avoir cliqué sur le bouton **Modifier**, l’utilisateur/client sera redirigé vers la page de paiement, où il pourra sélectionner le plan vers lequel il souhaite modifier son abonnement.

![Page des options de rétrogradation de plan côté client](/img/account-page/downgrade-picker.png)

Dans cet exemple, nous rétrogradons le plan de **Premium** à **Gratuit**.

Pour continuer, l’utilisateur doit simplement cliquer sur le bouton **Terminer le paiement**. Il sera ensuite ramené à la page Account, affichant un message concernant la modification en attente de l’abonnement. Les modifications prendront effet lors du **prochain cycle de facturation** du client.

![Page Account affichant la bannière de modification d’abonnement en attente](/img/account-page/pending-change.png)

### Que se passe-t-il lorsqu’un utilisateur rétrograde son plan

Il est important de noter que la rétrogradation du plan ne modifie pas la configuration existante dans le sous-site de l’utilisateur.

Elle ne change pas automatiquement le modèle de site, car changer le modèle de site effacerait et réinitialiserait complètement le sous-site. Cela permet d’éviter toute perte de données inutile. L’espace disque, les thèmes, les plugins, etc. resteront donc intacts, à l’exception des publications.

Nous comprenons que votre principale préoccupation concerne les limites et quotas que vous définissez pour chaque plan, mais nous devons prendre en compte les dommages que cela causerait au sous-site de l’utilisateur si nous supprimions ou modifiions l’une de ses configurations.

Pour les publications dépassant la limite définie dans le plan, vous avez 3 options différentes : **Conserver les publications telles quelles** *,* **Déplacer les publications dans la corbeille** *,* ou **Déplacer les publications en brouillon** *.* Vous pouvez configurer cela dans les réglages Ultimate Multisite.

![Page Sites des réglages Network Admin affichant les options de comportement en cas de dépassement de la limite de publications](/img/account-page/settings-sites-post-limit.png)

### Que se passe-t-il pour le paiement

Dans la version 2.0, cela ne nécessite plus aucun ajustement du paiement en termes de prorata.

Cela s’explique par le fait que le système attendra que l’abonnement existant **termine son cycle de facturation avant** que le nouveau plan/abonnement ne prenne effet. Le nouveau montant de facturation pour le nouvel abonnement sera automatiquement appliqué et facturé lors du prochain cycle de facturation.

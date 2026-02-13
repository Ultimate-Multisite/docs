---
title: Mise à niveau d'un plan
sidebar_position: 11
_i18n_hash: b0c02a1c1b12946cb507e8486e0d74e3
---
# Mise à niveau d'un plan (v2)

_**NOTE IMPORTANTE : Cet article fait référence à Ultimate Multisite version 2.x.**_

Vos clients peuvent mettre à niveau leurs plans à tout moment. Ils peuvent soit passer à un autre plan, soit acheter les services ou packages supplémentaires que vous proposez sur votre réseau.

Dans ce tutoriel, nous verrons comment ils peuvent mettre à niveau leur plan et ce qui se passe après le processus de mise à niveau.

Pour mettre à niveau leur plan, vos clients doivent accéder à leur tableau de bord et se rendre sur la page **Account**.

![Customer dashboard with Account page link](/img/admin/memberships-list.png)

Sur la page Account, ils verront leur adhésion actuelle et le plan qui y est associé. Pour passer à un autre plan, ils doivent cliquer sur **Change** dans le coin supérieur droit de la section **Your Membership**.

![Your Membership section with Change button](/img/admin/memberships-list.png)

Ils seront redirigés vers un formulaire de paiement où tous les plans disponibles seront affichés.

Ils pourront également voir les **services et packages disponibles pour leur plan actuel**, au cas où ils souhaiteraient simplement acheter un service ou un package spécifique (comme des visites illimitées ou de l'espace disque dans notre exemple ici), sans mettre à niveau le plan.

![Checkout form showing available plans and packages](/img/admin/memberships-list.png)

Après avoir choisi le produit qu'ils souhaitent acheter, ils verront combien ils devront payer immédiatement - hors crédit existant - et combien ils seront facturés à la prochaine date de facturation.

Habituellement, si le produit est un autre plan et que le paiement est effectué entre deux frais d'adhésion, ils recevront un crédit correspondant au montant payé sur le premier plan.

![Upgrade payment summary with credit and next billing amount](/img/admin/memberships-list.png)

S'ils sélectionnent un plan ou un package qui ne changera rien à l'abonnement actuel, ils verront un message l'expliquant.

![Message when selected plan does not change the subscription](/img/admin/memberships-list.png)

Une fois le paiement terminé, le ou les nouveaux produits seront ajoutés au compte de vos clients et toutes les limites ou fonctionnalités du ou des nouveaux produits seront immédiatement ajoutés : visites, espace disque, publications, etc...

## 

## 

## Chemins de montée et de descente

Sur chacun de vos produits, vous disposerez d'un onglet **Up & Downgrades**. La première option de cet onglet est un champ appelé **Plan Group**.

**Plan groups** permet à Ultimate Multisite de savoir que certains plans appartiennent à la même « famille », et doivent donc être utilisés pour construire les options de montée et de descente.

Par exemple, vous avez un **Free plan**, un **Basic Plan** et un **Premium Plan** disponibles. Vous souhaitez que les utilisateurs abonnés au **Free Plan** puissent uniquement passer au **Premium Plan** et que le **Basic Plan** ne soit pas proposé comme option de montée. Il suffit d'assigner le même nom de groupe de plans aux plans Free et Premium, comme indiqué sur les captures d'écran ci-dessous.

![Up and Downgrades tab with Plan Group field](/img/config/product-upgrades.png)

![Free Plan with High End plan group assigned](/img/config/product-upgrades.png)

![Premium Plan with High End plan group assigned](/img/config/product-upgrades.png)

Cela indique à Ultimate Multisite qu'il existe une « famille » de plans dans le réseau appelée **High End**. Lors de la proposition de montées ou de descentes, seuls les plans de la même famille seront présentés comme options à l'utilisateur.

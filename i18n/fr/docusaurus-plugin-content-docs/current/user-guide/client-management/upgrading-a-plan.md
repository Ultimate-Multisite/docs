---
title: Mettre à niveau une offre
sidebar_position: 11
_i18n_hash: 292fe52b63762d11e65c720ada133d39
---
# Mettre à niveau un plan (v2)

_**NOTE IMPORTANTE : cet article concerne Ultimate Multisite version 2.x.**_

Vos clients peuvent mettre à niveau leurs plans à tout moment. Ils peuvent soit passer à un autre plan, soit acheter des services ou forfaits supplémentaires que vous proposez sur votre réseau.

Dans ce tutoriel, nous verrons comment ils peuvent mettre à niveau leur plan et ce qui se passe après le processus de mise à niveau.

Pour mettre à niveau leur plan, vos clients doivent accéder à leur Dashboard et aller à la page **Account**.

![Dashboard du sous-site client avec le lien de menu Account visible](/img/account-page/account-menu.png)

Sur la page Account, leur membership actuel et le plan qui lui est associé leur seront affichés. Pour passer à un autre plan, ils doivent cliquer sur **Changer** dans le coin supérieur droit de la section **Votre membership**.

![Carte Votre membership de la page Account avec le bouton Changer](/img/account-page/membership-change-button.png)

Ils seront redirigés vers un formulaire de paiement où tous les plans disponibles seront affichés.

Ils pourront également voir les **services et forfaits disponibles pour leur plan actuel**, au cas où ils voudraient simplement acheter un service ou un forfait spécifique (comme les visites illimitées ou l’espace disque dans notre exemple ici), et non mettre à niveau le plan.

![Sélecteur de mise à niveau affichant les plans et forfaits disponibles côté client](/img/account-page/upgrade-picker.png)

Après avoir choisi le produit qu’ils veulent acheter, ils verront combien ils devront payer dès maintenant — hors crédit existant — et combien leur sera facturé à la prochaine date de facturation.

Habituellement, si le produit est un autre plan et que le paiement doit être effectué entre deux prélèvements de membership, ils recevront un crédit correspondant au montant payé sur le premier plan.

![Récapitulatif du paiement de mise à niveau affichant le crédit appliqué et le montant de la prochaine facturation](/img/account-page/upgrade-summary.png)

S’ils sélectionnent un plan ou un forfait qui ne changera rien par rapport à l’abonnement actuel, ils verront un message l’expliquant.

![Avis lorsque le plan sélectionné ne modifie pas l’abonnement](/img/account-page/upgrade-no-change.png)

Une fois le paiement terminé, le ou les nouveaux produits seront ajoutés au compte de vos clients et toutes les limites ou fonctionnalités du ou des nouveaux produits y seront ajoutées instantanément : visites, espace disque, publications, etc...

##

##

## Chemins de mise à niveau et de rétrogradation

Sur chacun de vos produits, vous aurez un onglet **Up & Downgrades**. La première option de cet onglet est un champ appelé **Groupe de plans**.

Les **groupes de plans** permettent d’indiquer à Ultimate Multisite que certains plans appartiennent à la même « famille » et doivent donc être utilisés pour construire les options de chemins de mise à niveau/rétrogradation.

![Onglet Up and Downgrades de modification du produit avec le champ Groupe de plans](/img/config/product-upgrades-plan-group.png)

Par exemple, vous avez un **plan gratuit**, un **plan Basic** et un **plan Premium** disponibles. Vous voulez que les utilisateurs abonnés au **plan gratuit** puissent passer uniquement au **plan Premium** et vous ne voulez pas qu’ils voient le « plan Basic » comme option de mise à niveau. Il vous suffit d’attribuer le même nom de groupe de plans aux plans Free et Premium, comme indiqué dans les captures d’écran ci-dessous.

![Page produit Free Plan avec le groupe de plans High End attribué](/img/config/product-upgrades-free.png)

![Page produit Premium Plan avec le groupe de plans High End attribué](/img/config/product-upgrades-premium.png)

Cela devrait indiquer à Ultimate Multisite qu’il existe une « famille » de plans dans le réseau appelée **High End**. Lors de la proposition de mises à niveau ou de rétrogradations, seuls les plans de la même famille seront présentés comme option à l’utilisateur.

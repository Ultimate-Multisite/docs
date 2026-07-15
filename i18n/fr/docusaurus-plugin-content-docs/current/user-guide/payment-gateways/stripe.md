---
title: Configuration de Stripe
sidebar_position: 6
_i18n_hash: a73a808f5976fbabb54e2c9889334d00
---
# Configuration de la passerelle Stripe (v2)

_**NOTE IMPORTANTE : Cet article concerne Ultimate Multisite version 2.x.**_

Vous pouvez activer jusqu’à quatre méthodes de paiement sur notre page de réglages de paiement : Stripe, Stripe Checkout, PayPal et Manuel. Dans cet article, nous verrons comment intégrer **Stripe**.

## Activation de Stripe {#enabling-stripe}

Pour activer Stripe comme passerelle de paiement disponible sur votre réseau, allez dans **Ultimate Multisite > Réglages > Paiements** et cochez le bouton à côté de **Stripe** ou **Stripe Checkout** dans la section Passerelles de paiement actives.

![Activation de Stripe dans les passerelles de paiement actives](/img/config/settings-payment-gateways.png)

### Stripe vs Stripe Checkout : {#stripe-vs-stripe-checkout}

**Stripe :** Cette méthode affichera un espace pour saisir le numéro de carte de crédit pendant le paiement.

![Champ de carte de crédit Stripe intégré pendant le paiement](/img/config/settings-payment-gateways.png)

**Stripe Checkout :** Cette méthode redirigera le client vers une page Stripe Checkout pendant le paiement.

![Page de redirection Stripe Checkout pendant le paiement](/img/config/settings-payment-gateways.png)

Obtenir vos clés API Stripe

Une fois Stripe activé comme passerelle de paiement, vous devrez renseigner les champs **Clé publiable Stripe** et **Clé secrète Stripe** . Vous pouvez les obtenir en vous connectant à votre Account Stripe.

_**Remarque :** vous pouvez activer le **mode Sandbox** pour tester si la méthode de paiement fonctionne._

![Champs de clés API Stripe et bouton du mode sandbox](/img/config/settings-payment-gateways.png)

Dans votre Dashboard Stripe, cliquez sur **Développeurs** dans le coin supérieur droit, puis sur **Clés API** dans le menu de gauche.

![Section Développeurs du Dashboard Stripe avec les clés API](/img/config/settings-payment-gateways.png)

Vous pouvez utiliser les **Données de test** (pour tester si l’intégration fonctionne sur votre site de production) ou non. Pour modifier cela, basculez le bouton **Affichage des données de test**.

![Bouton Affichage des données de test de Stripe](/img/config/settings-payment-gateways.png)

Copiez la valeur de la **Clé publiable** et de la **Clé secrète** , depuis la colonne **Jeton** et collez-la dans les champs de la passerelle Stripe Ultimate Multisite. Cliquez ensuite sur **Enregistrer les modifications**.

![Valeurs de clé publiable et de clé secrète Stripe](/img/config/settings-payment-gateways.png)

![Collage des clés Stripe dans les réglages Ultimate Multisite](/img/config/settings-payment-gateways.png)

## Configuration du webhook Stripe {#setting-up-stripe-webhook}

Stripe envoie des événements webhook qui notifient Ultimate Multisite chaque fois qu’un événement se produit sur **votre compte stripe**.

Cliquez sur **Développeurs**, puis choisissez l’élément **Webhooks** dans le menu de gauche. Ensuite, sur le côté droit, cliquez sur **Ajouter un point de terminaison** *.*

![Page Webhooks de Stripe avec le bouton Ajouter un point de terminaison](/img/config/settings-payment-gateways.png)

Vous aurez besoin d’une **URL de point de terminaison** *.* Ultimate Multisite génère automatiquement l’URL de point de terminaison, que vous pouvez trouver juste sous le champ **URL de l’écouteur webhook** dans la section **Passerelle Stripe Ultimate Multisite**_._

![Champ URL de l’écouteur webhook dans les réglages de la passerelle Stripe](/img/config/settings-payment-gateways.png)

**Copiez** l’URL de point de terminaison et **collez-la** dans le champ **URL de point de terminaison** de Stripe.

![Collage de l’URL de point de terminaison dans la configuration du webhook Stripe](/img/config/settings-payment-gateways.png)

Ensuite, il faut sélectionner un **Événement** *.* Sous cette option, il vous suffit de cocher la case **Sélectionner tous les événements** et de cliquer sur **Ajouter des événements**. Après cela, cliquez sur **Ajouter un point de terminaison** pour enregistrer les modifications.

![Sélection de tous les événements et ajout du point de terminaison Stripe](/img/config/settings-payment-gateways.png)

Voilà, votre intégration de paiement Stripe est terminée !

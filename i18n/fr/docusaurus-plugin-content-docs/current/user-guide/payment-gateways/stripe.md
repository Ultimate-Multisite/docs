---
title: Configuration de Stripe
sidebar_position: 6
_i18n_hash: 44043734d0965a10c4e4b848dfed3f0b
---
# Configuration du passerelle Stripe (v2)

_**NOTE IMPORTANTE : Cet article fait référence à Ultimate Multisite version 2.x.**_

Vous pouvez activer jusqu'à quatre méthodes de paiement sur notre page de paramètres de paiement : Stripe, Stripe Checkout, PayPal et Manuel. Dans cet article, nous verrons comment intégrer avec **Stripe**.

## Activation de Stripe

Pour activer Stripe comme passerelle de paiement disponible sur votre réseau, allez dans **Ultimate Multisite > Settings > Payments** et cochez le bascule à côté de **Stripe** ou **Stripe Checkout** dans la section Active Payment Gateways.

![Enabling Stripe in active payment gateways](/img/config/settings-payment-gateways.png)

### Stripe vs Stripe Checkout :

**Stripe :** Cette méthode affichera un espace pour insérer le numéro de carte de crédit lors du paiement.

![Stripe inline credit card field during checkout](/img/config/settings-payment-gateways.png)

**Stripe Checkout :** Cette méthode redirigera le client vers une page Stripe Checkout lors du paiement.

![Stripe Checkout redirect page during checkout](/img/config/settings-payment-gateways.png)

Obtention de vos clés API Stripe

Une fois Stripe activé en tant que passerelle de paiement, vous devrez remplir les champs **Stripe Publishable Key** et **Stripe Secret Key**. Vous pouvez obtenir ces clés en vous connectant à votre compte Stripe.

_**Remarque :** vous pouvez activer le **Sandbox mode** pour tester si la méthode de paiement fonctionne._ 

![Stripe API key fields and sandbox mode toggle](/img/config/settings-payment-gateways.png)

Sur votre tableau de bord Stripe, cliquez sur **Developers** dans le coin supérieur droit, puis sur **API Keys** dans le menu de gauche.

![Stripe dashboard Developers section with API Keys](/img/config/settings-payment-gateways.png)

Vous pouvez soit utiliser **Test Data** (pour tester si l'intégration fonctionne sur votre site de production) ou non. Pour changer cela, basculez le commutateur **Viewing test data**.

![Stripe Viewing test data toggle](/img/config/settings-payment-gateways.png)

Copiez la valeur des **Publishable key** et **Secret key**, à partir de la colonne **Token**, et collez-la dans les champs de la passerelle Stripe d'Ultimate Multisite. Ensuite, cliquez sur **Save Changes**.

![Stripe publishable and secret key values](/img/config/settings-payment-gateways.png)

![Pasting Stripe keys in Ultimate Multisite settings](/img/config/settings-payment-gateways.png)

## Configuration du webhook Stripe

Stripe envoie des événements webhook qui notifient Ultimate Multisite chaque fois qu'un événement se produit sur **votre compte stripe**.

Cliquez sur **Developers** puis choisissez l'élément **Webhooks** dans le menu de gauche. Ensuite, sur le côté droit, cliquez sur **Add endpoint** *.*

![Stripe Webhooks page with Add endpoint button](/img/config/settings-payment-gateways.png)

Vous aurez besoin d'un **Endpoint URL** *.* Ultimate Multisite génère automatiquement l'URL du point de terminaison que vous pouvez trouver juste en dessous du champ **Webhook Listener URL** dans la section **Ultimate Multisite Stripe Gateway**_.

![Webhook Listener URL field in Stripe gateway settings](/img/config/settings-payment-gateways.png)

**Copiez** l'URL du point de terminaison et **collez** dans le champ **Endpoint URL** de Stripe.

![Pasting endpoint URL in Stripe webhook setup](/img/config/settings-payment-gateways.png)

Ensuite, sélectionnez un **Event** *.* Sous cette option, il suffit simplement de cocher la case **Select all events** et cliquer sur **Add events**. Après cela, cliquez sur **Add Endpoint** pour enregistrer les modifications.

![Selecting all events and adding the Stripe endpoint](/img/config/settings-payment-gateways.png)

C'est tout, votre intégration de paiement Stripe est terminée !

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

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-UUtLaJgx7R.png)

### Stripe vs Stripe Checkout :

**Stripe :** Cette méthode affichera un espace pour insérer le numéro de carte de crédit lors du paiement.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-k73ZUl1hTW.png)

**Stripe Checkout :** Cette méthode redirigera le client vers une page Stripe Checkout lors du paiement.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-PCZ16DhYrj.png)

Obtention de vos clés API Stripe

Une fois Stripe activé en tant que passerelle de paiement, vous devrez remplir les champs **Stripe Publishable Key** et **Stripe Secret Key**. Vous pouvez obtenir ces clés en vous connectant à votre compte Stripe.

_**Remarque :** vous pouvez activer le **Sandbox mode** pour tester si la méthode de paiement fonctionne._ 

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-dhnvBN03ii.png)

Sur votre tableau de bord Stripe, cliquez sur **Developers** dans le coin supérieur droit, puis sur **API Keys** dans le menu de gauche.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-HVqsu1SXuE.png)

Vous pouvez soit utiliser **Test Data** (pour tester si l'intégration fonctionne sur votre site de production) ou non. Pour changer cela, basculez le commutateur **Viewing test data**.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-kdVC3W8Bsr.png)

Copiez la valeur des **Publishable key** et **Secret key**, à partir de la colonne **Token**, et collez-la dans les champs de la passerelle Stripe d'Ultimate Multisite. Ensuite, cliquez sur **Save Changes**.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-JyAifSGNOn.png)

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-4rFGxkXr1K.png)

## Configuration du webhook Stripe

Stripe envoie des événements webhook qui notifient Ultimate Multisite chaque fois qu'un événement se produit sur **votre compte stripe**.

Cliquez sur **Developers** puis choisissez l'élément **Webhooks** dans le menu de gauche. Ensuite, sur le côté droit, cliquez sur **Add endpoint** *.*

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-LmYsdylNdd.png)

Vous aurez besoin d'un **Endpoint URL** *.* Ultimate Multisite génère automatiquement l'URL du point de terminaison que vous pouvez trouver juste en dessous du champ **Webhook Listener URL** dans la section **Ultimate Multisite Stripe Gateway**_.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-sZrCX9OZaw.png)

**Copiez** l'URL du point de terminaison et **collez** dans le champ **Endpoint URL** de Stripe.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-tMlomo8gx1.png)

Ensuite, sélectionnez un **Event** *.* Sous cette option, il suffit simplement de cocher la case **Select all events** et cliquer sur **Add events**. Après cela, cliquez sur **Add Endpoint** pour enregistrer les modifications.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-Hv8KzaGMrq.png)

C'est tout, votre intégration de paiement Stripe est terminée !

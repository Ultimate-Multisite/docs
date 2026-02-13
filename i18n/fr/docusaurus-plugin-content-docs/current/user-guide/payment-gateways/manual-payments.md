---
title: Configuration des paiements manuels
sidebar_position: 20
_i18n_hash: a780a809c96da21ceb3ec6bb67a016d7
---
# Configuration des paiements manuels (v2)

_**NOTE IMPORTANTE : Cet article se réfère à la version 2.x d'Ultimate Multisite.**_

Les paiements manuels sont un moyen pour vous d'offrir d'autres méthodes de paiement si **Stripe** ou **PayPal** ne sont pas disponibles pour vos utilisateurs. Il peut s'agir d'un virement bancaire ou d'un autre mode de paiement disponible localement pour vos utilisateurs.

## Comment activer les paiements manuels

Configurer un paiement manuel est très simple. Vous devez simplement l'activer dans les passerelles de paiement et fournir des instructions détaillées sur la façon dont l'utilisateur doit effectuer le paiement.

Tout d'abord, allez dans **Ultimate Multisite > Settings > Payments**. Sous **Payment Gateways**, activez **Manual**. Vous verrez apparaître une boîte **Payment Instructions**.

Ajoutez à cette boîte les informations dont votre client aura besoin pour effectuer le paiement. Il peut s'agir de vos coordonnées bancaires et de votre adresse e‑mail afin que le client puisse vous envoyer la confirmation de paiement, par exemple.

![Manual payment gateway toggle and payment instructions box](/img/config/settings-payment-gateways.png)

Une fois configuré, cliquez simplement sur **Save Settings** et c'est fait. Lorsqu'un utilisateur s'inscrit à votre réseau, il verra un message l'informant qu'il recevra vos instructions pour finaliser l'achat.

![Manual payment message shown during registration](/img/config/settings-payment-gateways.png)

Et ils recevront également un message sur votre page **Thank You** contenant vos instructions de paiement.

![Thank You page showing payment instructions](/img/config/settings-payment-gateways.png)

## Confirmation des paiements manuels

Pour confirmer un paiement manuel, accédez au menu **Payments** dans la barre latérale gauche. Vous y verrez tous les paiements de votre réseau ainsi que leurs détails, y compris leur **status**. Un paiement manuel aura toujours le statut **Pending** jusqu'à ce que vous le changiez manuellement.

![Payments list showing pending manual payment](/img/admin/payments-list.png)

Accédez à la page de paiement en cliquant sur le **reference code**. Sur cette page, vous avez tous les détails du paiement en attente, tels que l'ID de référence, les produits, les horodatages et plus encore.

![Payment details page with reference code and products](/img/admin/payments-list.png)

Dans la colonne de droite, vous pouvez modifier le statut du paiement. Le changer en **Completed** et activer l'option **Activate Membership** permettra d'activer le site de votre client et son abonnement sera actif.

![Payment status change to Completed with Activate Membership toggle](/img/admin/payments-list.png)

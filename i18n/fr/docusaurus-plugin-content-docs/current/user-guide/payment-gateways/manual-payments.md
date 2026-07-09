---
title: Configuration des paiements manuels
sidebar_position: 20
_i18n_hash: 98210a45c3d3af7368f60d7593235163
---
# Configuration des paiements manuels (v2)

_**NOTE IMPORTANTE : Cet article concerne Ultimate Multisite version 2.x.**_

Les paiements manuels sont un moyen de proposer d’autres modes de paiement si **Stripe** ou **PayPal** ne sont pas disponibles pour vos utilisateurs. Il peut s’agir d’un virement bancaire ou de tout autre mode de paiement disponible localement pour vos utilisateurs.

## Comment activer les paiements manuels

Configurer un paiement manuel est très simple. Il vous suffit de l’activer dans les passerelles de paiement et d’ajouter des instructions détaillées sur la façon dont l’utilisateur doit envoyer le paiement.

Tout d’abord, allez dans **Ultimate Multisite > Paramètres > Paiements**. Sous **Passerelles de paiement** , activez **Manuel**. Vous verrez alors apparaître une zone **Instructions de paiement**.

Ajoutez dans cette zone les informations dont votre client aura besoin pour effectuer le paiement. Il peut s’agir, par exemple, des coordonnées de votre compte bancaire et de votre adresse e-mail afin que le client puisse vous envoyer la confirmation de paiement.

![Activation de la passerelle de paiement manuel avec une zone de texte Instructions de paiement](/img/config/manual-gateway-expanded.png)

Voici l’interface des paramètres de la passerelle manuelle :

![Paramètres de la passerelle manuelle](/img/config/manual-gateway-settings.png)

Après l’avoir configurée, cliquez simplement sur **Enregistrer les paramètres** et c’est fait. Lorsque les utilisateurs s’inscriront sur votre réseau, ils verront un message leur indiquant qu’ils recevront vos instructions pour finaliser l’achat.

![Message de confirmation d’inscription indiquant à l’utilisateur qu’il recevra les instructions de paiement](/img/frontend/registration-manual-notice.png)

Ils recevront également un message sur votre page **Merci** avec vos instructions de paiement.

<!-- Capture d’écran indisponible : page Merci affichant les instructions de paiement après le paiement -->

## Confirmer les paiements manuels

Pour confirmer un paiement manuel, allez dans le menu **Paiements** dans la barre de gauche. Vous pouvez y voir tous les paiements de votre réseau et leurs détails, y compris leur **statut**. Un paiement manuel aura toujours le statut **En attente** jusqu’à ce que vous le modifiiez manuellement.

![Liste des paiements affichant un paiement manuel en attente](/img/admin/payments-list.png)

Accédez à la page du paiement en cliquant sur le **code de référence**. Sur cette page, vous disposez de tous les détails du paiement en attente, tels que l’ID de référence, les produits, les horodatages et plus encore.

![Page de détails du paiement affichant le code de référence, les produits et les totaux](/img/admin/payment-edit.png)

Dans la colonne de droite, vous pouvez modifier le statut du paiement. Le passer à **Terminé** et **activer l’option Activer l’adhésion** activera le site de votre client et son adhésion sera active.

![Page de modification du paiement avec le statut défini sur Terminé et l’option Activer l’adhésion activée](/img/admin/payment-activate-membership.png)

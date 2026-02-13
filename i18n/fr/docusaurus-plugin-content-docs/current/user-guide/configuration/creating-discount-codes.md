---
title: Création de codes de réduction
sidebar_position: 19
_i18n_hash: 3c7a42fff1710e14a95a32365f893dc3
---
# Création de codes de réduction (v2)

_**NOTE IMPORTANTE : Cet article fait référence à Ultimate Multisite version 2.x.**_

Avec Ultimate Multisite, vous pouvez créer des codes de réduction pour offrir à vos clients des réductions sur leurs abonnements. Et les créer est simple !

## Création et modification de codes de réduction

Pour créer ou modifier un code de réduction, allez dans **Ultimate Multisite > Discount Codes**.

![](/img/config/discount-codes-list.png)

Vous y trouverez une liste des codes de réduction que vous avez déjà créés.

Vous pouvez cliquer sur **Add Discount** **Code** pour créer un nouveau coupon ou modifier ceux que vous avez en survolant et en cliquant sur **Edit**.

![Discount codes list with hover actions](/img/config/discount-codes-list.png)

![Add Discount Code button](/img/config/discount-codes-list.png)

Vous serez redirigé vers la page où vous créerez ou modifierez votre code de coupon. Dans cet exemple, nous allons en créer un nouveau.

![Discount code edit page](/img/config/discount-codes-list.png)

Examinons les paramètres disponibles ici :

**Enter Discount Code:** C’est simplement le nom de votre code de réduction. Ce n’est pas le code que vos clients devront saisir sur le formulaire de paiement.

**Description:** Ici, vous pouvez décrire brièvement l’objet de ce coupon.

![Discount code name and description fields](/img/config/discount-codes-list.png)

**Coupon code:** C’est ici que vous définissez le code que vos clients devront saisir lors du paiement.

![Coupon code field](/img/config/discount-codes-list.png)

**Discount:** Ici, vous pouvez définir soit un **percentage** soit un **fixed amount** d’argent pour votre code de réduction.

![Discount percentage or fixed amount setting](/img/config/discount-codes-list.png)

**Apply to renewals:** Si cette option est désactivée, ce code de réduction ne sera appliqué qu’au **first payment**. Tous les autres paiements n’auront pas de remise. Si cette option est activée, le code de réduction sera valable pour tous les paiements futurs.

**Setup fee discount:** Si cette option est désactivée, le code de coupon **ne donnera aucune remise sur les frais d’installation** de la commande. Si cette option est activée, vous pouvez définir la remise (pourcentage ou montant fixe) que ce code de coupon appliquera aux frais d’installation de vos plans.

![Apply to renewals and setup fee discount options](/img/config/discount-codes-list.png)

**Active:** Activez ou désactivez manuellement ce code de coupon.

![Active toggle for discount code](/img/config/discount-codes-list.png)

Sous **Advanced Options**, nous avons les paramètres suivants :

**Limit uses:**

  * **Uses:** Ici, vous pouvez voir combien de fois le code de réduction a été utilisé.

  * **Max uses:** Cela limitera le nombre de fois que les utilisateurs peuvent utiliser ce code de réduction. Par exemple, si vous mettez 10 ici, le coupon ne pourra être utilisé que 10 fois. Après cette limite, le code de coupon ne pourra plus être utilisé.

![Limit uses setting with uses and max uses fields](/img/config/discount-codes-list.png)**Start & expiration dates:** Here you will have the option to add a start date and/or an expiration date to your coupon.

**Start & expiration dates:** Ici, vous aurez la possibilité d’ajouter une date de début et/ou une date d’expiration à votre coupon.

![Start and expiration date fields](/img/config/discount-codes-list.png)

**Limit products:** Si vous activez **Select products**, tous vos produits vous seront affichés. Vous aurez la possibilité de sélectionner manuellement (en activant ou désactivant) quels produits peuvent accepter ce code de coupon. Les produits désactivés ici ne montreront aucun changement si vos clients essaient d’utiliser ce code de coupon sur eux.

![Limit products selection toggles](/img/config/discount-codes-list.png)

Après avoir configuré toutes ces options, cliquez sur **Save Discount Code** pour enregistrer votre coupon et c’est terminé !

![Save Discount Code button](/img/config/discount-codes-list.png)

Le coupon est maintenant dans votre liste et, à partir de là, vous pouvez cliquer pour **edit or delete**.

![Discount code in the list with edit and delete options](/img/config/discount-codes-list.png)

### 

### Utilisation des paramètres d’URL :

Si vous souhaitez personnaliser vos tableaux de prix ou créer une belle page de code de coupon pour votre site Web et appliquer automatiquement un code de réduction à votre formulaire de paiement, vous pouvez le faire via des paramètres d’URL.

Tout d’abord, vous devez obtenir le lien partageable de votre plan. Pour ce faire, allez dans **Ultimate Multisite > Products** et sélectionnez un plan.

Cliquez sur le bouton **Click to Copy Shareable Link**. Cela vous donnera le lien partageable vers ce plan spécifique. Dans notre cas, le lien partageable fourni était [_**mynetworkdomain.com/register/premium/**_](http://mynetworkdomain.com/register/premium/)_.

![Product page with shareable link button](/img/config/products-list.png)

Pour appliquer votre code de réduction à ce plan spécifique, ajoutez simplement le paramètre **?discount_code=XXX** à l’URL. Où **XXX** est le code du coupon.

Dans notre exemple, nous appliquerons le code de coupon **50OFF** à ce produit spécifique.

L’URL pour ce plan spécifique et avec le code de réduction 50OFF appliqué ressemblera à : [_**mynetworkdomain.com/register/premium/**_](http://mynetworkdomain.com/register/premium/) _**?discount_code=50OFF**_.

###

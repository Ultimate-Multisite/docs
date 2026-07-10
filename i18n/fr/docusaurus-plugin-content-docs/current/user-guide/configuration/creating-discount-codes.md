---
title: Création de codes de réduction
sidebar_position: 19
_i18n_hash: d6adaf916f3e21b4fda2deeaa6672d00
---
# Créer des codes de réduction (v2) {#creating-discount-codes-v2}

_**NOTE IMPORTANTE : Cet article fait référence à Ultimate Multisite version 2.x.**_

Avec Ultimate Multisite, vous pouvez créer des codes de réduction pour accorder des réductions à vos clients sur leurs abonnements. Et les créer est facile !

## Créer et modifier des codes de réduction {#creating-and-editing-discount-codes}

Pour créer ou modifier un code de réduction, allez dans **Ultimate Multisite > Codes de réduction**.

![Liste des codes de réduction — état vide avant qu’aucun code n’existe](/img/config/discount-codes-empty.png)

Vous y trouverez une liste des codes de réduction que vous avez déjà créés.

Vous pouvez cliquer sur **Ajouter un** **code de réduction** pour créer un nouveau coupon, ou vous pouvez modifier ceux que vous avez en les survolant et en cliquant sur **Modifier**.

![Liste des codes de réduction avec actions au survol affichant les liens Modifier et Supprimer](/img/config/discount-codes-list-hover.png)

![Bouton Ajouter un code de réduction dans l’en-tête de la page](/img/config/discount-codes-add-button.png)

Vous serez redirigé vers la page où vous créerez ou modifierez votre code de coupon. Dans cet exemple, nous allons en créer un nouveau.

![Page de modification du code de réduction avec toutes les sections visibles](/img/config/discount-code-edit.png)

Examinons les paramètres disponibles ici :

**Saisir le code de réduction :** Ceci est simplement le nom de votre code de réduction. Ce n’est pas le code que vos clients devront utiliser dans le formulaire de paiement.

**Description :** Ici, vous pouvez décrire brièvement à quoi sert ce coupon.

![Champs de nom et de description du code de réduction en haut de la page de modification](/img/config/discount-code-description.png)

Vous pouvez également afficher le code de réduction comme actif ou inactif :

![Statut actif du code de réduction](/img/config/discount-code-active.png)

**Code de coupon :** C’est ici que vous définissez le code que vos clients devront saisir lors du paiement.

![Champ du code de coupon où les clients saisissent le code au paiement](/img/config/discount-code-coupon-field.png)

**Réduction :** Ici, vous pouvez définir soit un **pourcentage**, soit un **montant fixe** d’argent pour votre code de réduction.

![Paramètre du montant de la réduction avec menu déroulant pourcentage ou montant fixe](/img/config/discount-code-amount.png)

**Appliquer aux renouvellements :** Si cette option est désactivée, ce code de réduction ne sera appliqué qu’au **premier paiement**. Tous les autres paiements n’auront aucune réduction. Si cette option est activée, le code de réduction sera valide pour tous les paiements futurs.

**Réduction sur les frais d’installation :** Si cette option est désactivée, le code de coupon **n’accordera aucune réduction sur les frais d’installation** de la commande. Si cette option est activée, vous pouvez définir la réduction (pourcentage ou montant fixe) que ce code de coupon appliquera aux frais d’installation de vos plans.

![Options d’activation pour appliquer aux renouvellements et réduction sur les frais d’installation](/img/config/discount-code-renewals.png)

**Actif :** Activez ou désactivez manuellement ce code de coupon.

![Bouton d’activation pour activer ou désactiver manuellement le code de réduction](/img/config/discount-code-active.png)

Sous **Options avancées**, nous avons les paramètres suivants :

![Options avancées du code de réduction](/img/config/discount-code-advanced.png)

**Limiter les utilisations :**

  * **Utilisations :** Ici, vous pouvez voir combien de fois le code de réduction a été utilisé.

  * **Nombre maximal d’utilisations :** Cela limitera le nombre de fois où les utilisateurs peuvent utiliser ce code de réduction. Par exemple, si vous indiquez 10 ici, le coupon ne pourra être utilisé que 10 fois. Après cette limite, le code de coupon ne pourra plus être utilisé.

![Paramètre de limitation des utilisations avec compteur d’utilisations actuel et champ du nombre maximal d’utilisations](/img/config/discount-code-limit-uses.png)

**Dates de début et d’expiration :** Ici, vous aurez la possibilité d’ajouter une date de début et/ou une date d’expiration à votre coupon.

![Champs de dates de début et d’expiration pour planifier le code de réduction](/img/config/discount-code-dates.png)

**Limiter les produits :** Si vous activez **Sélectionner les produits**, tous vos produits vous seront affichés. Vous aurez la possibilité de sélectionner manuellement (en activant ou désactivant) quel produit peut accepter ce code de coupon. Les produits désactivés ici n’afficheront aucun changement si vos clients essaient d’utiliser ce code de coupon pour eux.

![Section de limitation des produits avec interrupteurs d’activation par produit](/img/config/discount-code-limit-products.png)

Après avoir configuré toutes ces options, cliquez sur **Enregistrer le code de réduction** pour enregistrer votre coupon, et c’est terminé !

![Bouton Enregistrer le code de réduction en bas de la page de modification](/img/config/discount-code-save.png)

Le coupon est maintenant dans votre liste et, depuis celle-ci, vous pouvez cliquer pour le **modifier ou le supprimer**.

![Ligne de code de réduction dans la liste avec actions Modifier et Supprimer au survol](/img/config/discount-codes-list-hover.png)

###

### Utiliser les paramètres d’URL : {#using-url-parameters}

Si vous souhaitez personnaliser vos tableaux de prix ou créer une belle page de code de coupon pour votre site web et appliquer automatiquement un code de réduction à votre formulaire de paiement, vous pouvez le faire via des paramètres d’URL.

Tout d’abord, vous devez obtenir le lien partageable de votre plan. Pour cela, allez dans **Ultimate Multisite > Produits** et sélectionnez un plan.

Cliquez sur le bouton **Cliquer pour copier le lien partageable**. Cela vous donnera le lien partageable vers ce plan spécifique. Dans notre cas, le lien partageable fourni était [_**mynetworkdomain.com/register/premium/**_](http://mynetworkdomain.com/register/premium/)_._

![Page produit avec bouton de lien partageable](/img/config/products-list.png)

Pour appliquer votre code de réduction à ce plan spécifique, ajoutez simplement le paramètre **?discount_code=XXX** à l’URL. Où **XXX** est le code de coupon.

Dans notre exemple ici, nous appliquerons le code de coupon **50OFF** à ce produit spécifique.

L’URL pour ce plan spécifique avec le code de réduction 50OFF appliqué ressemblera à : [_**mynetworkdomain.com/register/premium/**_](http://mynetworkdomain.com/register/premium/) _**?discount_code=50OFF**_.

###

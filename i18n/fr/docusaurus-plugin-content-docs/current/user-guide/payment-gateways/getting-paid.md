---
title: Recevoir un paiement
sidebar_position: 15
_i18n_hash: b7e644488bb1bef802e024319be88725
---
# Paiement (v2)

_**NOTE IMPORTANTE : Cet article fait référence à la version 2.x d'Ultimate Multisite.**_

Ultimate Multisite possède un système d'adhésion et de facturation intégré. Pour que notre système de facturation fonctionne, nous avons intégré les passerelles de paiement les plus courantes utilisées dans le commerce électronique. Les passerelles de paiement par défaut dans Ultimate Multisite sont _Stripe_, _PayPal_ et Manual Payment. Vous pouvez également utiliser _WooCommerce_, _GoCardless_ et _Payfast_ pour recevoir des paiements en installant leurs modules complémentaires respectifs.

## Paramètres de base

Vous pouvez configurer l'une de ces passerelles de paiement dans les paramètres de paiement d'Ultimate Multisite. Vous le trouverez en allant dans **Ultimate Multisite menu > Settings > Payments.**

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-42sl37Fn5G.png)

Avant de configurer votre passerelle de paiement, veuillez consulter les paramètres de paiement de base que vous pouvez configurer :

**Forcer le renouvellement automatique** **w:** Cela garantira que le paiement se renouvellera automatiquement à la fin de chaque cycle de facturation en fonction de la fréquence de facturation sélectionnée par l'utilisateur.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-Og3iJwLdmn.png)

**Autoriser les essais sans paiement** **method:** Avec cette option activée, votre client n'aura pas à fournir d'informations financières lors du processus d'inscription. Cela ne sera requis qu'une fois la période d'essai terminée.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-aA5Olqe9M9.png)

**Envoyer la facture à la confirmation du paiement :** Cela vous donne la possibilité d'envoyer ou non une facture après le paiement. Notez que les utilisateurs auront accès à leur historique de paiement dans le tableau de bord de leur sous-site. Cette option ne s'applique pas à la passerelle Manual.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-RGupao7GvW.png)

**Schéma de numérotation des factures :** Ici, vous pouvez choisir soit un code de référence de paiement, soit un schéma de numérotation séquentielle. Si vous choisissez d'utiliser un code de référence de paiement pour vos factures, vous n'avez rien à configurer. Si vous choisissez d'utiliser un schéma de numérotation séquentielle, vous devrez configurer le **numéro de facture suivant** (Ce numéro sera utilisé comme numéro de facture pour la prochaine facture générée sur le système. Il est incrémenté de un à chaque création de facture. Vous pouvez le modifier et l'enregistrer pour réinitialiser le numéro de facture séquentiel à une valeur spécifique) et le **préfixe du numéro de facture.**

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-mP0949Eawa.png)

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-oD5LaLaw7t.png)

## Où trouver les passerelles :

Vous pouvez configurer les passerelles de paiement sur la même page ( **Ultimate Multisite > Settings > Payments**). Juste en dessous de **active payment gateways**, vous pourrez voir : _Stripe_, _Stripe Checkout_, _PayPal_ et _Manual_.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-g9RMYx84r5.png)

Nous avons un article dédié à chaque passerelle de paiement qui vous guidera à travers les étapes de configuration, que vous pouvez trouver sur les liens ci-dessous.

**Configuration de la passerelle Stripe**

**Configuration de la passerelle PayPal**

**Configuration des paiements manuels**

Maintenant, si vous souhaitez utiliser _WooCommerce_, _GoCardless_ ou _Payfast_ comme passerelle de paiement, vous devrez **installer et configurer leurs modules complémentaires**.

### Comment installer l'add-on WooCommerce :

Nous comprenons que _Stripe_ et _PayPal_ ne sont pas disponibles dans certains pays, ce qui limite ou empêche les utilisateurs d'Ultimate Multisite d'utiliser efficacement notre plugin. C'est pourquoi nous avons créé un module complémentaire pour intégrer _WooCommerce_, qui est un plugin de commerce électronique très populaire. Des développeurs du monde entier ont créé des modules complémentaires pour intégrer différentes passerelles de paiement. Nous avons profité de cette opportunité pour étendre les passerelles de paiement que vous pouvez utiliser avec le système de facturation d'Ultimate Multisite.

_**IMPORTANT :** Ultimate Multisite : WooCommerce Integration nécessite que WooCommerce soit activé au moins sur votre site principal._

Tout d'abord, veuillez accéder à la page des modules complémentaires. Vous le trouverez en allant dans **Ultimate Multisite > Settings**. Vous devriez voir le tableau **Add-ons**. Cliquez sur **Check our Add-ons**.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-WtOkJNuCsj.png)

Après avoir cliqué sur **Check our Add-ons**, vous serez redirigé vers la page des modules complémentaires. Vous pourrez y trouver tous les modules complémentaires d'Ultimate Multisite. Cliquez sur le module complémentaire **Ultimate Multisite: WooCommerce Integration**.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-BmLWqj4yjt.png)

Une fenêtre s'ouvrira avec les détails du module complémentaire. Cliquez simplement sur **Install Now**.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-fGaxHyPtsv.png)

Une fois l'installation terminée, vous serez redirigé vers la page des plugins. Cliquez simplement sur **Network Activate** et le module complémentaire WooCommerce sera activé sur votre réseau.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-TM2lYtgyM7.png)

Après l'activation, si vous n'avez toujours pas le plugin WooCommerce installé et activé sur votre site Web, vous recevrez un rappel.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-VwIGoJhzqc.png)

Pour en savoir plus sur le module complémentaire WooCommerce Integration, **cliquez ici**.

### Comment installer le module complémentaire GoCardless :

Les étapes pour installer le module complémentaire _GoCardless_ sont à peu près les mêmes que celles du module complémentaire _WooCommerce_. Veuillez accéder à la page des modules complémentaires et sélectionner le module complémentaire **Ultimate Multisite: GoCardless Gateway**.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-BmLWqj4yjt.png)

Une fenêtre s'ouvrira. Cliquez sur **Install Now**.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-YIpPgP4VVo.png)

Une fois l'installation terminée, vous serez redirigé vers la page des plugins. Cliquez simplement sur **Network Activate** et le module complémentaire _GoCardless_ sera activé sur votre réseau.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-FGurJpzaF0.png)

Pour apprendre à démarrer avec la passerelle _GoCardless_, **lisez cet article**.

### Comment installer le module complémentaire Payfast :

Accédez à la page des modules complémentaires et sélectionnez le module complémentaire **Ultimate Multisite: Payfast Gateway**.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-BmLWqj4yjt.png)

Une fenêtre s'ouvrira. Cliquez sur **Install Now.**

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-1jpCakOHNy.png)

Une fois l'installation terminée, vous serez redirigé vers la page des plugins. Cliquez simplement sur **Network Activate** et le module complémentaire _Payfast_ sera activé sur votre réseau.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-49OQHBwPxk.png)

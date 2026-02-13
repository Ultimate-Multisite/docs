---
title: Le flux d'inscription
sidebar_position: 3
_i18n_hash: 3e38d2f50683a422650956e5a3b0dff9
---
# Le flux d'inscription (v2)

_**NOTE IMPORTANTE : Cet article fait référence à Ultimate Multisite version 2.x.**_

Les utilisateurs peuvent s'inscrire de différentes manières sur votre réseau. Ils peuvent utiliser votre formulaire d'inscription ou un lien partageable vers un plan pré-sélectionné. Ici, nous vous montrerons comment vos clients peuvent s'inscrire sur votre réseau en utilisant les chemins disponibles et ce qui se passe après leur inscription sur votre réseau.

## Utilisation du formulaire d'inscription :

C'est le processus d'inscription standard. Vous créez une page d'inscription avec un **formulaire de paiement** et c'est là que vos clients iront pour s'inscrire sur votre réseau et s'abonner à un plan. Vous pouvez avoir plusieurs pages d'inscription, chacune avec un formulaire d'inscription différent si vous le souhaitez.

La page par défaut pour l'inscription est [_**yourdomain.com/register**_](http://yourdomain.com/register), mais vous pouvez la modifier à tout moment dans **Ultimate Multisite > Settings > Login & Registration > Default Registration Page**.

Après qu'un utilisateur arrive sur votre page d'inscription (généralement en cliquant sur un bouton **Sign in** ou **Buy now**), il verra votre formulaire d'inscription là.

![Registration form displayed on the registration page](/img/config/checkout-forms-list.png)

Tout ce qu'ils ont à faire est de remplir tous les champs obligatoires - e-mail, nom d'utilisateur, mot de passe, etc... - et de payer le plan ou de confirmer leur adresse e-mail s'ils s'inscrivent à un plan gratuit ou à un plan payant avec période d'essai sans informations de paiement.

Sur la page « Merci », ils verront un message leur indiquant s'ils doivent confirmer leur adresse e-mail ou si leur site est déjà activé et qu'ils peuvent commencer à l'utiliser.

![Thank You page after registration](/img/config/checkout-form-editor.png)

Si une confirmation d'adresse e-mail est requise, ils devront accéder à leur boîte e-mail et cliquer sur le lien de vérification. Leur site ne sera pas activé si leur adresse e-mail n'est pas vérifiée.

S'ils se sont inscrits à un plan payant ou si la vérification e-mail n'est pas obligatoire sur votre réseau, leur site sera activé immédiatement après le paiement et un lien leur sera affiché pour se connecter à leur tableau de bord.

![Site activated with link to sign in to dashboard](/img/config/checkout-form-editor.png)

## Utilisation d'un lien partageable :

Le processus d'inscription via un lien partageable est essentiellement le même que le formulaire d'inscription, la seule différence étant qu'en utilisant un lien partageable, vos clients peuvent avoir un produit ou un modèle de site pré-sélectionné sur le formulaire de paiement (voir la section Pré-sélection des produits et modèles via paramètres d'URL) ou peut-être un code promo ajouté (voir la section Utilisation des paramètres d'URL).

Le processus d'inscription sera le même : ils devront renseigner leur nom, nom d'utilisateur, adresse e-mail, nom et titre du site, etc... mais le plan ou le modèle de site sera déjà pré-sélectionné pour eux.

### S'inscrire en utilisant des paiements manuels :

Si vous ne souhaitez pas utiliser PayPal, Stripe ou tout autre passerelle de paiement proposée par Ultimate Multisite ou ses intégrations complémentaires, vous pouvez utiliser des paiements manuels pour vos clients. De cette façon, vous pouvez générer une facture pour qu'ils paient via votre processeur de paiement préféré après leur inscription sur votre réseau.

Le processus d'inscription sera exactement le même que ci-dessus, mais sur la page d'inscription vos clients verront un message indiquant qu'ils recevront un e-mail avec des instructions supplémentaires pour compléter le paiement.

![Manual payment message during registration](/img/config/settings-payment-gateways.png)

Et après que l'inscription soit terminée, ils verront les instructions de paiement que vous avez définies (et les recevront également dans leur e-mail).

![Payment instructions shown after registration](/img/config/settings-payment-gateways.png)

Les instructions de paiement peuvent être modifiées dans **Ultimate Multisite > Settings > Payments** après avoir activé l'option de paiement **Manual** :

![Manual payment toggle with payment instructions field](/img/config/settings-payment-gateways.png)

Après que vos clients aient effectué le paiement manuel et vous aient envoyé la confirmation, vous devez **confirmer manuellement le paiement** pour activer l'adhésion et le site du client.

Pour ce faire, allez dans **Ultimate Multisite > Payments** et trouvez le paiement du client. Il devrait toujours afficher un statut **Pending**.

![Payments list with pending manual payment](/img/admin/payments-list.png)

Cliquez sur le numéro de paiement et vous pourrez changer son statut en **Completed**.

![Payment details page](/img/admin/payments-list.png)

![Changing payment status to Completed](/img/admin/payments-list.png)

Après avoir changé son statut en **Completed**, vous devriez voir un message **Activate membership**. Activez cette option **on** pour activer l'adhésion et le site associés à ce client. Ensuite, cliquez sur **Save Payment**.

![Activate membership toggle and Save Payment button](/img/admin/payments-list.png)

Votre client devrait maintenant pouvoir accéder au tableau de bord et à toutes les fonctionnalités auxquelles il s'est abonné.

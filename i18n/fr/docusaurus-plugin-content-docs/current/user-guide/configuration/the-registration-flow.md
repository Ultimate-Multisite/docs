---
title: Le flux d’inscription
sidebar_position: 3
_i18n_hash: ae01b241f684c1a85d93bdc765eec135
---
# Le flux d’inscription (v2)

_**NOTE IMPORTANTE : Cet article concerne Ultimate Multisite version 2.x.**_

Les utilisateurs peuvent s’inscrire à votre réseau de différentes manières. Ils peuvent utiliser votre formulaire d’inscription ou un lien partageable vers un forfait présélectionné. Nous allons vous montrer ici comment vos clients peuvent s’inscrire sur votre réseau en utilisant les parcours disponibles et ce qui se passe après leur inscription sur votre réseau.

## Utiliser le formulaire d’inscription :

Il s’agit du processus d’inscription standard. Vous créez une page d’inscription avec un **formulaire de paiement** et c’est là que vos clients iront pour s’inscrire sur votre réseau et s’abonner à un forfait. Vous pouvez avoir plusieurs pages d’inscription, chacune avec un formulaire d’inscription différent si vous le souhaitez.

La page par défaut pour l’inscription est [_**yourdomain.com/register**_](http://yourdomain.com/register), mais vous pouvez la modifier à tout moment dans **Ultimate Multisite > Settings > Login & Registration > Default Registration Page**.

Après qu’un utilisateur arrive sur votre page d’inscription (généralement en cliquant sur un bouton **Se connecter** ou **Acheter maintenant**), il y verra votre formulaire d’inscription.

![Formulaire d’inscription affiché sur la page d’inscription](/img/frontend/registration-form.png)

Voici un exemple du formulaire de paiement tel qu’il apparaît sur l’interface publique :

![Formulaire d’inscription de paiement sur l’interface publique](/img/config/checkout-frontend-registration.png)

Il leur suffit de remplir tous les champs obligatoires — e-mail, nom d’utilisateur, mot de passe, etc. — et de payer le forfait ou de confirmer leur adresse e-mail s’ils s’inscrivent à un forfait gratuit ou à un forfait payant avec période d’essai sans informations de paiement.

Sur la page « Merci », ils verront un message leur indiquant s’ils doivent confirmer leur adresse e-mail ou si leur site web est déjà activé et qu’ils peuvent commencer à l’utiliser.

![Page Merci après l’inscription](/img/frontend/registration-thank-you.png)

Si une confirmation d’adresse e-mail est requise, ils devront aller dans leur boîte de réception et cliquer sur le lien de vérification. Leur site web ne sera pas activé si leur adresse e-mail n’est pas vérifiée.

S’ils se sont inscrits à un forfait payant ou si la vérification de l’e-mail n’est pas obligatoire sur votre réseau, leur site web sera activé juste après le paiement et un lien leur sera affiché pour se connecter à leur dashboard.

![Site activé avec un lien pour se connecter au dashboard](/img/frontend/site-activated.png)

## Utiliser un lien partageable :

Le processus d’inscription avec un lien partageable est globalement le même que pour le formulaire d’inscription ; la seule différence est qu’avec un lien partageable, vos clients peuvent avoir un produit ou un modèle de site web présélectionné dans le formulaire de paiement (voir la section Présélectionner des produits et des modèles via les paramètres d’URL), ou éventuellement un code promo ajouté (voir la section Utiliser les paramètres d’URL).

Le processus d’inscription sera le même : ils devront renseigner leur nom, nom d’utilisateur, adresse e-mail, nom et titre du site web, etc., mais le forfait ou le modèle de site sera déjà présélectionné pour eux.

### S’inscrire avec des paiements manuels :

Si vous ne souhaitez pas utiliser PayPal, Stripe ou toute autre passerelle de paiement proposée par Ultimate Multisite ou ses intégrations d’extensions, vous pouvez utiliser les paiements manuels pour vos clients. Ainsi, vous pouvez générer une facture qu’ils paieront via le processeur de paiement de votre choix après leur inscription sur votre réseau.

Le processus d’inscription sera exactement le même que ci-dessus, mais sur la page d’inscription, vos clients verront un message indiquant qu’ils recevront un e-mail avec des instructions supplémentaires pour finaliser le paiement.

![Message de paiement manuel pendant l’inscription](/img/frontend/registration-manual-notice.png)

Et une fois l’inscription terminée, ils verront les instructions de paiement que vous avez définies (et les recevront également par e-mail).

![Instructions de paiement affichées après l’inscription](/img/frontend/registration-payment-instructions.png)

Les instructions de paiement peuvent être modifiées dans **Ultimate Multisite > Settings > Payments** après avoir activé l’option de paiement **Manual** :

![Option de paiement manuel avec champ d’instructions de paiement](/img/config/manual-gateway-settings.png)

Après que vos clients ont effectué le paiement manuel et vous ont envoyé la confirmation, vous devez **confirmer manuellement le paiement** pour activer l’abonnement du client et le site web.

Pour ce faire, allez dans **Ultimate Multisite > Payments** et trouvez le paiement du client. Il devrait encore afficher un statut **En attente**.

![Liste des paiements avec un paiement manuel en attente](/img/admin/payments-list.png)

Cliquez sur le numéro du paiement et vous pourrez changer son statut en **Terminé**.

![Page de détails du paiement](/img/admin/payment-edit.png)

![Changement du statut du paiement en Terminé](/img/admin/payment-status-completed.png)

Après avoir changé son statut en **Terminé**, vous devriez voir un message **Activer l’abonnement**. Activez cette option pour activer l’abonnement et le site web associés à ce client. Ensuite, cliquez sur **Enregistrer le paiement**.

![Option Activer l’abonnement et bouton Enregistrer le paiement](/img/admin/payment-activate-membership.png)

Votre client devrait maintenant pouvoir accéder au dashboard et à toutes les fonctionnalités auxquelles il s’est abonné.

---
title: Flèch Enrejistrasyon an
sidebar_position: 3
_i18n_hash: ae01b241f684c1a85d93bdc765eec135
---
# Flèy la Fòmasyon Enskripsyon (v2)

_**NOTE KRITIK: Sa tèks sa a refere a Ultimate Multisite v2.x.**_

Kòman ou ka enkripsyon nan rezo ou yo pa menm fason. Yo ka itilize fòm enkripsyon ou oswa yon lyen ki ka pataje pou yon plan ki deja chwazi. Nan tèks sa a, nou pral montre w kijan kliyan ou ka enkripe sou rezo ou itilize chemen ki disponib ak sa k ap pase apre yo enkripe sou rezo ou.

## Itilize Fòm Enskripsyon an:

Sa se pwosesis enkripsyon estanda a. Ou kreye yon paj enkripsyon ki gen yon **checkout form** (fòm chwazi) epi se la kliyan ou pral ale pou enkripe sou rezo ou epi abone nan yon plan. Ou ka gen plizyè paj enkripsyon, chak avèk yon fòm enkripsyon diferan si ou vle.

Paj de default pou enkripsyon an se [_**yourdomain.com/register**_](http://yourdomain.com/register), men ou ka chanje sa nenpòt lè sou **Ultimate Multisite > Settings > Login & Registration > Default Registration Page**.

Lè yon itilizat rive nan paj enkripsyon ou (anjeneral klike sou bouton **Sign in** oswa **Buy now**), yo pral wè fòm enkripsyon ou la.

![Fòm enkripsyon ap montre sou paj enkripsyon an](/img/frontend/registration-form.png)

Men yon egzanp fòm chwazi a jan li parèt sou frontend:

![Fòm enkripsyon chwazi frontend](/img/config/checkout-frontend-registration.png)

Tout sa yo gen pou fè se ranpli tout chak chot ki obligatwa - imèl, non itilizatè, pawòl, el... - epi peye pou plan an oswa konfime adrès imèl yo si yo enkripe pou yon plan gratis oswa yon plan peye ak peryòd esè san enfòmasyon pèmèt peye.

Sou paj "Thank you" (Mèsi), yo pral wè yon mesaj ki di yo si yo bezwen konfime adrès imèl yo oswa si sit entèn ou deja aktive epi yo ka kòmanse itilize li.

![Page de remerciement après l'inscription](/img/frontend/registration-thank-you.png)

Si une confirmation d'adresse e-mail est nécessaire, ils devront aller dans la boîte de réception de leur e-mail et cliquer sur le lien de vérification. Leur site ne sera pas activé si leur adresse e-mail n'est pas vérifiée.

S'ils se sont inscrits à un plan payant ou si la vérification par e-mail n'est pas obligatoire sur votre réseau, leur site sera activé juste après le paiement et ils verront un lien pour se connecter à leur dashboard.

![Site activé avec lien pour se connecter au dashboard](/img/frontend/site-activated.png)

## Utiliser un Lien Partageable :

Le processus d'inscription en utilisant un lien partageable est pratiquement le même que le formulaire d'inscription, la seule différence est qu'en utilisant un lien partageable, vos clients pourront avoir un produit ou un modèle de site pré-sélectionné sur le formulaire de paiement (voir la section Pré-sélection des produits et modèles via les paramètres URL) ou peut-être un code de coupon ajouté (voir la section Utilisation des paramètres URL).

Le processus d'inscription sera le même : ils devront remplir leur nom, nom d'utilisateur, adresse e-mail, nom du site web et titre, etc... mais le plan ou le modèle de site seront déjà pré-sélectionnés pour eux.

### S'inscrire avec des Paiements Manuels :

Si vous ne voulez pas utiliser PayPal, Stripe ou toute autre passerelle de paiement offerte par Ultimate Multisite ou ses intégrations additionnelles, vous pouvez utiliser les paiements manuels pour vos clients. De cette façon, vous pourrez générer une facture pour qu'ils paient sur votre processeur de paiement préféré après leur inscription sur votre réseau.

Le processus d'inscription sera exactement le même que ci-dessus, mais sur la page d'inscription, vos clients verront un message indiquant qu'ils recevront un e-mail avec des instructions supplémentaires pour finaliser le paiement.

![Message de paiement manuel pendant l'inscription](/img/frontend/registration-manual-notice.png)

E apre la registration fin, yo pral wè les enstriksyon de paiement ou ki genyen (e yo ap resevwa tou sa pa yo sou zot email).

![Instructions de paiement affichées après l'inscription](/img/frontend/registration-payment-instructions.png)

Ou ka chanje les enstriksyon de paiement la sou **Ultimate Multisite > Settings > Payments** apre ou mete le switch **Manual** an on:

![Bascule de paiement manuel avec champ d'instructions de paiement](/img/config/manual-gateway-settings.png)

Aprè ke nouvo kliyan yo fin fè li yo ak mande konfòmite, ou bezwen **konfime manuellement le paiement** pou active l'adhésion kleyan an epi sit entènèt la.

Pou fè sa, ale nan **Ultimate Multisite > Payments** e chèche paiement kleyan an. Li ta dwe montre yon status **Pending**.

![Lòt ki sou li ak paiement manuel pending](/img/admin/payments-list.png)

Klike sou nimewo paiement la epi ou ap ka chanje status li a pou l vin **Completed**.

![Pache detay de paiement](/img/admin/payment-edit.png)

![Chanje status paiement an Completed](/img/admin/payment-status-completed.png)

Aprè ou fin chanje status li a pou l vin **Completed**, ou ta dwe wè yon mesaj **Activate membership**. Mete opisyon sa a **on** pou active adhésion an epi sit entènèt la ki asosye ak kleyan sa a. Apre sa, klike pou **Save Payment**.

![Bascule activation adhésion ak bouton Save Payment](/img/admin/payment-activate-membership.png)

Kliyant ou a dwe kapab aksede dashboard la epi tout fonksyonalite li te abone pou yo.

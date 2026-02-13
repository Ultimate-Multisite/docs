---
title: Configuration de PayPal
sidebar_position: 10
_i18n_hash: 1744fb066b8291440fd7fb554aa8e2d9
---
# Configuration du passerelle PayPal (v2)

_**NOTE IMPORTANTE : Cet article se réfère à la version 2.x d'Ultimate Multisite.**_

Vous pouvez activer jusqu'à quatre méthodes de paiement sur notre page de paramètres de paiement : Stripe, Stripe Checkout, PayPal et Manuel. Dans cet article, nous verrons comment intégrer **PayPal**.

Tout comme Stripe, PayPal est largement utilisé pour les paiements en ligne, notamment sur les sites WordPress. Cet article vous guidera pour utiliser PayPal comme méthode de paiement disponible sur votre réseau.

Notez que vous devez disposer d'un compte **PayPal Business** pour obtenir les identifiants API nécessaires à cette intégration.

## Activation de PayPal sur votre réseau

Pour activer PayPal comme méthode de paiement disponible sur votre réseau, accédez à l'onglet **Ultimate Multisite > Settings > Payments** et cochez la case à côté de PayPal.

![Enabling PayPal in active payment gateways](/img/config/settings-payment-gateways.png)

## Obtention des identifiants API PayPal

Une fois PayPal activé en tant que passerelle de paiement, vous devrez renseigner les champs pour le **Nom d'utilisateur** de l'API PayPal, le **Mot de passe** de l'API PayPal et la **Signature** de l'API PayPal.

Vous pouvez obtenir ces informations en vous connectant à votre compte PayPal [Live](https://www.paypal.com/home) ou [Sandbox](https://www.sandbox.paypal.com/home).

(Rappelez-vous que vous pouvez utiliser le **mode sandbox** pour tester les paiements et vérifier que la passerelle est correctement configurée. Activez simplement la section correspondante.)

![PayPal API credentials fields and sandbox mode toggle](/img/config/settings-payment-gateways.png)

Pour demander les identifiants de Signature ou de Certificat API pour votre compte PayPal :

1. Accédez à vos [Paramètres du compte](https://www.paypal.com/businessmanage/account/accountAccess).

2. Dans la section **API access**, cliquez sur **Update**.  
![PayPal Account Settings with API access section](/img/config/settings-payment-gateways.png)

3. Sous **NVP/SOAP API integration (Classic)**, cliquez sur **Manage API credentials**.  
![PayPal NVP/SOAP API integration Manage API credentials](/img/config/settings-payment-gateways.png)

   * Si vous avez déjà généré une Signature ou un Certificat API, vous serez redirigé vers une page où vous pourrez trouver vos identifiants.
   * _**Note :** Si vous êtes invité à vérifier votre compte PayPal, suivez les instructions à l'écran._

4. Sélectionnez _une_ des options suivantes, puis cliquez sur **Agree and Submit**.

   * **Request API Signature** – Sélectionnez pour l'authentification par Signature API.
   * **Request API Certificate** – Sélectionnez pour l'authentification par Certificat API.

5. PayPal génère vos identifiants API comme suit :  
![PayPal generated API credentials](/img/config/settings-payment-gateways.png)

   * **API Signature credentials** incluent un nom d'utilisateur API, un mot de passe API et une signature, qui n'expirent pas. Ces valeurs sont masquées par défaut pour plus de sécurité. Cliquez sur **Show/Hide** pour les afficher ou les masquer. Une fois terminé, cliquez sur **Done**.
   * **API Certificate credentials** incluent un nom d'utilisateur API, un mot de passe API et un certificat, qui expire automatiquement après trois ans. Cliquez sur **Download Certificate** pour enregistrer le Certificat API sur votre bureau.

C'est tout, votre intégration PayPal est terminée !

Si vous avez des questions concernant les paramètres PayPal, vous pouvez consulter le [Help Center](https://www.paypal.com/br/smarthelp/home) de PayPal.

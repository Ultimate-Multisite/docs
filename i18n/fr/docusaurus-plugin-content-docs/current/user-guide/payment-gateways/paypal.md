---
title: Configuration de PayPal
sidebar_position: 10
_i18n_hash: 894ca1f2ca4ca589f3ef49c131e330d5
---
# Configuration de la passerelle PayPal (v2)

_**NOTE IMPORTANTE : Cet article concerne Ultimate Multisite version 2.x.**_

Vous pouvez activer jusqu’à quatre méthodes de paiement sur notre page de paramètres de paiement : Stripe, Stripe Checkout, PayPal et Manuel. Dans cet article, nous verrons comment intégrer **PayPal**.

Tout comme Stripe, PayPal est largement utilisé pour les paiements en ligne, en particulier sur les sites WordPress. Cet article vous guidera sur la façon d’utiliser PayPal comme méthode de paiement disponible sur votre réseau.

Notez que vous devez avoir un **compte PayPal Business** pour obtenir l’identifiant API nécessaire à cette intégration.

## Activation de PayPal sur votre réseau {#enabling-paypal-on-your-network}

Pour activer PayPal comme méthode de paiement disponible sur votre réseau, accédez à l’onglet **Ultimate Multisite > Paramètres > Paiements** et cochez la case à côté de PayPal.

![Activation de PayPal dans les passerelles de paiement actives](/img/config/settings-payment-gateways.png)

## Utilisation de l’assistant de configuration guidée {#using-the-guided-setup-wizard}

Ultimate Multisite 2.10.0 ajoute un assistant de configuration PayPal guidé aux paramètres de passerelle de paiement. Après avoir activé PayPal, utilisez l’assistant dans **Ultimate Multisite > Paramètres > Paiements** pour choisir comment vous souhaitez connecter la passerelle et confirmer quels identifiants sont encore nécessaires avant d’enregistrer.

L’assistant prend en charge deux parcours de configuration :

* **Saisie manuelle des identifiants** : utilisez ce parcours lorsque vous disposez déjà d’identifiants API PayPal, lorsque la configuration OAuth n’est pas disponible pour votre Account, ou lorsque vous préférez copier vous-même les identifiants depuis PayPal. Saisissez l’API Username, l’API Password et l’API Signature dans les champs PayPal, puis enregistrez les paramètres de paiement.
* **Porte de connexion OAuth** : utilisez ce parcours uniquement lorsque l’option OAuth est disponible et activée pour votre installation. L’assistant affiche le flux OAuth derrière un indicateur de fonctionnalité, afin que les réseaux sans l’indicateur continuent d’utiliser les champs de saisie manuelle des identifiants.

Si vous ne voyez pas l’option OAuth dans l’assistant, terminez le flux de saisie manuelle des identifiants ci-dessous. La passerelle fonctionne avec les mêmes identifiants API PayPal Business que les versions précédentes d’Ultimate Multisite 2.x.

## Obtention des identifiants API PayPal {#getting-the-paypal-api-credentials}

Une fois PayPal activé comme passerelle de paiement, vous devrez remplir les champs pour le PayPal API **Username** , le PayPal API **Password** et la PayPal API **Signature**.

Vous pouvez les obtenir en vous connectant à votre compte PayPal [Live](https://www.paypal.com/home) ou [Sandbox](https://www.sandbox.paypal.com/home).

(N’oubliez pas que vous pouvez utiliser le **mode sandbox** pour tester les paiements et voir si la passerelle est correctement configurée. Activez simplement la section correspondante.)

![Champs d’identifiants API PayPal et interrupteur du mode sandbox](/img/config/settings-payment-gateways.png)

Pour demander des identifiants API Signature ou Certificate pour votre compte PayPal :

  1. Accédez à vos [paramètres de Account](https://www.paypal.com/businessmanage/account/accountAccess).

  2. Dans la section **Accès API**, cliquez sur **Mettre à jour**.
![Paramètres du Account PayPal avec la section d’accès API](/img/config/settings-payment-gateways.png)

  3. Sous **Intégration API NVP/SOAP (Classic)** , cliquez sur **Gérer les identifiants API**.
![Intégration API NVP/SOAP PayPal Gérer les identifiants API](/img/config/settings-payment-gateways.png)

     * Si vous avez déjà généré une API Signature ou un Certificate, vous serez redirigé vers une page où vous pourrez trouver vos identifiants.

     * _**Remarque :** Si vous êtes invité à vérifier votre compte PayPal, suivez les instructions à l’écran._

  4. Sélectionnez _l’une_ des options suivantes, puis cliquez sur **Accepter et envoyer**.

     * **Demander une API Signature** – Sélectionnez cette option pour l’authentification par API Signature.

     * **Demander un API Certificate** – Sélectionnez cette option pour l’authentification par API Certificate.

  5. PayPal génère vos identifiants API comme suit :
![Identifiants API générés par PayPal](/img/config/settings-payment-gateways.png)

     * Les **identifiants API Signature** comprennent un API Username, un API Password et une Signature, qui n’expirent pas. Ces valeurs sont masquées par défaut pour une sécurité accrue. Cliquez sur **Afficher/Masquer** pour les activer et les désactiver. Lorsque vous avez terminé, cliquez sur **Terminé**.

     * Les **identifiants API Certificate** comprennent un API Username, un API Password et un Certificate, qui expire automatiquement après trois ans. Cliquez sur **Télécharger le Certificate** pour enregistrer l’API Certificate sur votre bureau.

Voilà, votre intégration de paiement PayPal est terminée !

Si vous avez des questions concernant les paramètres PayPal, vous pouvez consulter le [Centre d’aide](https://www.paypal.com/br/smarthelp/home) de PayPal.

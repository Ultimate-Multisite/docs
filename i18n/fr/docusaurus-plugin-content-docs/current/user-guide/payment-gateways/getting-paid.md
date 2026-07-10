---
title: Se faire payer
sidebar_position: 15
_i18n_hash: 7808f514b91797f7ffb68811b12c48be
---
# Se faire payer (v2) {#getting-paid-v2}

_**NOTE IMPORTANTE : Cet article concerne Ultimate Multisite version 2.x.**_

Ultimate Multisite dispose d’un système intégré d’abonnement et de facturation. Pour que notre système de facturation fonctionne, nous avons intégré les passerelles de paiement les plus courantes utilisées dans le commerce électronique. Les passerelles de paiement par défaut dans Ultimate Multisite sont _Stripe_ , _PayPal_ et le paiement manuel. Vous pouvez également utiliser _WooCommerce_ , _GoCardless_ et _Payfast_ pour recevoir des paiements en installant leurs add-ons respectifs.

## Réglages de base {#basic-settings}

Vous pouvez configurer n’importe laquelle de ces passerelles de paiement dans les réglages de paiement de Ultimate Multisite. Vous pouvez les trouver en allant dans **menu Ultimate Multisite > Settings > Payments.**

![Page des réglages de paiement dans Ultimate Multisite affichant le panneau Payments](/img/config/payments-settings-page.png)

Avant de configurer votre passerelle de paiement, veuillez consulter les réglages de paiement de base que vous pouvez configurer :

**Forcer le renouvellement auto** **matique :** Cela garantira que le paiement se répète automatiquement à la fin de chaque cycle de facturation, selon la fréquence de facturation sélectionnée par l’utilisateur.

<!-- Screenshot unavailable: Force Auto-Renew toggle setting on the Payments settings page -->

Ultimate Multisite v2.13.0 vérifie si la passerelle active possède un justificatif de renouvellement réutilisable avant d’enregistrer une adhésion récurrente avec le renouvellement automatique activé. Un justificatif de renouvellement peut être un abonnement de passerelle, un accord de facturation, un token de coffre-fort enregistré ou une méthode de paiement réutilisable équivalente. Si la passerelle indique qu’aucun justificatif utilisable n’existe, Ultimate Multisite enregistre l’adhésion mais désactive le renouvellement automatique et enregistre l’état de justificatif manquant afin qu’un administrateur ou un flux de support puisse demander au client de réautoriser le paiement avant la date de renouvellement.

Cela empêche qu’une adhésion semble se renouveler automatiquement alors que la passerelle ne peut percevoir que des paiements ponctuels. Les add-ons de passerelle doivent confirmer que les checkouts récurrents stockent un justificatif réutilisable, en particulier lorsque la passerelle prend en charge à la fois les modes de capture ponctuelle et les modes de paiement avec coffre-fort/abonnement.

**Autoriser les essais sans méthode de paiement :** Avec cette option activée, votre client n’aura pas à ajouter d’informations financières pendant le processus d’inscription. Cela ne sera requis qu’une fois la période d’essai expirée.

<!-- Screenshot unavailable: Allow Trials Without Payment Method toggle on the Payments settings page -->

**Envoyer la facture lors de la confirmation du paiement :** Cela vous donne la possibilité d’envoyer ou non une facture après le paiement. Notez que les utilisateurs auront accès à leur historique de paiement dans le Dashboard de leur sous-site. Cette option ne s’applique pas à la passerelle manuelle.

<!-- Screenshot unavailable: Send Invoice on Payment Confirmation toggle on the Payments settings page -->

**Schéma de numérotation des factures :** Ici, vous pouvez sélectionner soit un code de référence de paiement, soit un schéma de numérotation séquentielle. Si vous choisissez d’utiliser un code de référence de paiement pour vos factures, vous n’avez rien à configurer. Si vous choisissez d’utiliser un schéma de numérotation séquentielle, vous devrez configurer le **prochain numéro de facture** (ce numéro sera utilisé comme numéro de facture pour la prochaine facture générée dans le système. Il est incrémenté de un chaque fois qu’une nouvelle facture est créée. Vous pouvez le modifier et l’enregistrer pour réinitialiser le numéro séquentiel de facture à une valeur spécifique) et le **préfixe du numéro de facture.**

<!-- Screenshot unavailable: Invoice numbering scheme dropdown with Payment Reference Code and Sequential Number options -->

<!-- Screenshot unavailable: Next invoice number and invoice number prefix fields shown when Sequential Number is selected -->

## Où trouver les passerelles : {#where-to-find-the-gateways}

Vous pouvez configurer les passerelles de paiement sur la même page ( **Ultimate Multisite > Settings > Payments**). Juste sous **passerelles de paiement actives** , vous pourrez voir : _Stripe_ , _Stripe_ _Checkout_ , _PayPal_ et _Manual_.

![Section des passerelles de paiement actives listant Stripe, Stripe Checkout, PayPal et Manual](/img/config/payments-active-gateways.png)

Nous avons un article dédié pour chaque passerelle de paiement qui vous guidera à travers les étapes de sa configuration, que vous pouvez trouver via les liens ci-dessous.

Vous pouvez consulter et modifier les détails de paiement :

![Interface de modification du paiement](/img/admin/payment-edit.png)

Voici une vue complète de la page de modification du paiement :

![Interface complète de modification du paiement](/img/admin/payment-edit-full.png)

Voici également une vue complète des réglages des passerelles de paiement :

![Page complète des réglages des passerelles de paiement](/img/config/settings-payments-gateways-full.png)

**Configurer la passerelle Stripe**

**Configurer la passerelle PayPal**** **

**Configurer les paiements manuels**

Maintenant, si vous voulez utiliser _WooCommerce_ , _GoCardless_ ou _Payfast_ comme passerelle de paiement, vous devrez **installer et configurer leurs add-ons**.

### Comment installer l’add-on WooCommerce : {#how-to-install-the-woocommerce-add-on}

Nous comprenons que _Stripe_ et _PayPal_ ne sont pas disponibles dans certains pays, ce qui limite ou empêche les utilisateurs de Ultimate Multisite d’utiliser efficacement notre plugin. Nous avons donc créé un add-on pour intégrer _WooCommerce,_ qui est un plugin de commerce électronique très populaire. Des développeurs du monde entier ont créé des add-ons pour y intégrer différentes passerelles de paiement. Nous en avons profité pour étendre les passerelles de paiement que vous pouvez utiliser avec le système de facturation de Ultimate Multisite.

_**IMPORTANT :** Ultimate Multisite: WooCommerce Integration nécessite que WooCommerce soit activé au moins sur votre site principal._

Tout d’abord, veuillez aller à la page des add-ons. Vous pouvez la trouver en allant dans **Ultimate Multisite > Settings**. Vous devriez voir le tableau **Add-ons**. Cliquez sur **Check our Add-ons**.

<!-- Screenshot unavailable: Add-ons table on the Ultimate Multisite Settings sidebar with the Check our Add-ons link -->

Après avoir cliqué sur **Check our Add-ons** , vous serez redirigé vers la page des add-ons. Vous pouvez y trouver tous les add-ons Ultimate Multisite. Cliquez sur l’add-on **Ultimate Multisite: WooCommerce Integration**.

![Page des add-ons listant les add-ons Ultimate Multisite, y compris WooCommerce Integration](/img/addons/addons-page.png)

Une fenêtre s’ouvrira avec les détails du module complémentaire. Cliquez simplement sur **Installer maintenant**.

<!-- Capture d’écran indisponible : boîte de dialogue des détails du module complémentaire Ultimate Multisite WooCommerce Integration avec le bouton Installer maintenant -->

Une fois l’installation terminée, vous serez redirigé vers la page des plugins. Ici, cliquez simplement sur **Activer sur le réseau** et le module complémentaire WooCommerce sera activé sur votre réseau.

<!-- Capture d’écran indisponible : page des plugins avec le lien Activer sur le réseau pour le module complémentaire WooCommerce Integration -->

Après l’avoir activé, si le plugin WooCommerce n’est toujours pas installé et activé sur votre site web, vous recevrez un rappel.

<!-- Capture d’écran indisponible : notification d’administration rappelant à l’administrateur d’installer et d’activer le plugin WooCommerce -->

Pour en savoir plus sur le module complémentaire WooCommerce Integration, **cliquez ici**.

### Comment installer le module complémentaire GoCardless : {#how-to-install-the-gocardless-add-on}

Les étapes pour installer le module complémentaire _GoCardless_ sont à peu près les mêmes que pour le module complémentaire _WooCommerce_. Veuillez accéder à la page des modules complémentaires et sélectionner le module complémentaire **Ultimate Multisite: GoCardless Gateway**.

<!-- Capture d’écran indisponible : page des modules complémentaires avec le module complémentaire Ultimate Multisite GoCardless Gateway mis en évidence -->

La fenêtre du module complémentaire s’ouvrira. Cliquez sur **Installer maintenant**.

<!-- Capture d’écran indisponible : boîte de dialogue des détails du module complémentaire Ultimate Multisite GoCardless Gateway avec le bouton Installer maintenant -->

Une fois l’installation terminée, vous serez redirigé vers la page des plugins. Ici, cliquez simplement sur **Activer sur le réseau** et le module complémentaire _GoCardless_ sera activé sur votre réseau.

<!-- Capture d’écran indisponible : page des plugins avec le lien Activer sur le réseau pour le module complémentaire GoCardless Gateway -->

Pour apprendre comment démarrer avec la passerelle _GoCardless_, **lisez cet article**.

### Comment installer le module complémentaire Payfast : {#how-to-install-the-payfast-add-on}

Accédez à la page des modules complémentaires et sélectionnez le module complémentaire **Ultimate Multisite: Payfast Gateway**.

<!-- Capture d’écran indisponible : page des modules complémentaires avec le module complémentaire Ultimate Multisite Payfast Gateway mis en évidence -->

La fenêtre du module complémentaire s’ouvrira. Cliquez sur **Installer maintenant.**

<!-- Capture d’écran indisponible : boîte de dialogue des détails du module complémentaire Ultimate Multisite Payfast Gateway avec le bouton Installer maintenant -->

Une fois l’installation terminée, vous serez redirigé vers la page des plugins. Ici, cliquez simplement sur **Activer sur le réseau** et le module complémentaire _Payfast_ sera activé sur votre réseau.

<!-- Capture d’écran indisponible : page des plugins avec le lien Activer sur le réseau pour le module complémentaire Payfast Gateway -->

---
title: Enregistrer le point de terminaison API
sidebar_position: 6
_i18n_hash: 8d9b47668bce413a2466cf2b1c37d2cf
---
# Le point de terminaison API /register de Ultimate Multisite

Dans ce tutoriel, vous apprendrez à utiliser le point de terminaison API /register de Ultimate Multisite pour créer l’ensemble du processus d’onboarding d’un nouveau client dans votre réseau et comment le faire avec Zapier.

Le point de terminaison utilise la méthode POST et est appelé par l’URL _**https://yoursite.com/wp-json/wu/v2/register**_. Lors de cet appel, 4 processus seront exécutés au sein de votre réseau :

  * Un nouvel utilisateur WordPress ou son identification via l’ID utilisateur sera créé.

  * Un nouveau client dans Ultimate Multisite ou son identification via l’ID client sera créé.

  * Un nouveau site sur le réseau WordPress sera créé.

  * À la fin, une nouvelle adhésion dans Ultimate Multisite sera créée.

Pour ce processus, vous aurez besoin de vos identifiants API. Pour les obtenir, allez dans le panneau d’administration de votre réseau, accédez à **Ultimate Multisite > Settings** > **API & Webhooks,** et recherchez la section des paramètres API.

![Section des paramètres API dans Ultimate Multisite](/img/config/settings-api.png)

Voici une vue complète de la page des paramètres API :

![Page complète des paramètres API](/img/config/settings-api-full.png)

Sélectionnez **Enable API** et récupérez vos identifiants API.

Maintenant, explorons le point de terminaison puis créons une action d’inscription dans Zapier.

## Paramètres du corps du point de terminaison

Voyons un aperçu des informations minimales que nous devons envoyer au point de terminaison. À la fin de cet article, vous trouverez l’appel complet.

### Client

Voici les informations nécessaires au processus de création de l’utilisateur et du client Ultimate Multisite :

"customer_id" : integer

Il est possible d’envoyer l’ID client créé dans votre réseau. S’il n’est pas soumis, les informations ci-dessous seront utilisées pour créer un nouveau client et un nouvel utilisateur WordPress. L’ID utilisateur peut également être envoyé de la même manière que l’ID client.

"customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", },

### **Adhésion**

La seule information dont nous avons besoin dans cet objet est le statut de l’adhésion.

"membership" { "status" : "string", // one of "pending", "active", "trialing", "expired", "on-hold", "canceled" },

### **Produits**

Les produits sont fournis sous forme de tableau avec 1 ou plusieurs ID de produit de votre réseau. Attention, ce point de terminaison ne crée pas de produits. Consultez la documentation de Ultimate Multisite pour mieux comprendre le point de terminaison de création de produit.

**"products" : [1,2],**

### Paiement

Comme pour l’adhésion, nous avons seulement besoin du statut.

**"payment" { "status" : "string", // one of "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "canceled" },**

### Site

Et pour terminer le corps, nous avons besoin de l’URL et du titre du site, tous deux dans l’objet Site.

**"site" : { "site_url" : "string", "site_title" : "string" }**

Le retour du point de terminaison register sera un tableau contenant les informations de l’adhésion nouvellement créée.

## Créer une action dans Zapier

Avec l’introduction de ce nouveau point de terminaison de création d’Account plus robuste, vous aurez également accès à une nouvelle action dans Zapier.

Savez-vous comment utiliser et apprécier tout ce que la nouvelle version de Zapier offre ? En savoir plus ici. (lien ?)

### Créer une action

Pour mieux illustrer l’utilisation du point de terminaison d’inscription avec Zapier, créons une intégration avec Google Forms. Chaque fois que ce formulaire est rempli et que les informations sont enregistrées dans la feuille de réponses du formulaire, une nouvelle adhésion sera créée dans le réseau Ultimate Multisite.

Dans Google Forms, créez un formulaire avec les champs minimaux nécessaires pour créer une nouvelle adhésion dans le réseau.

<!-- Capture d’écran indisponible : formulaire Google Forms avec des champs pour créer une nouvelle adhésion -->

Maintenant, dans Zapier, créez un nouveau Zap et connectez le formulaire créé dans Google via la feuille de calcul où les données sont enregistrées.

<!-- Capture d’écran indisponible : configuration du déclencheur Zapier se connectant à la feuille de calcul Google Forms -->

Terminé ! Le formulaire Google Forms est connecté à Zapier et prêt à être intégré au réseau. Passons maintenant à l’action qui résultera du déclencheur que Google Forms active chaque fois qu’il est rempli.

Localisez la nouvelle application Ultimate Multisite et sélectionnez-la. Pour ce type de Zap, choisissez l’option Register.

<!-- Capture d’écran indisponible : sélection d’action Zapier montrant l’application Ultimate Multisite avec l’option Register -->

Après cette première étape, choisissez l’Account qui sera connecté à ce Zap.<!-- Capture d’écran indisponible : étape de connexion de l’Account Zapier pour Ultimate Multisite -->

C’est la partie la plus sensible de tout le processus. Nous devons faire correspondre les champs provenant de Google Forms avec les champs minimaux nécessaires au point de terminaison register, comme indiqué dans la section précédente de cet article.

Dans cet exemple, nous avons seulement besoin de configurer le nom d’utilisateur, l’e-mail, le mot de passe, le nom et l’URL du site web. Le reste est laissé prédéfini afin que toutes les adhésions générées sur ce Google Forms suivent le même modèle de produit et de statut.

<!-- Capture d’écran indisponible : mappage des champs entre Google Forms et le point de terminaison register de Ultimate Multisite -->

Une fois les informations configurées, passez au test final. Sur le dernier écran, vous pouvez voir tous les champs qui seront envoyés au point de terminaison, leurs informations respectives et les champs qui seront envoyés vides.<!-- Capture d’écran indisponible : écran de test Zapier montrant tous les champs à envoyer au point de terminaison register -->

Testez votre nouveau Zap et il devrait se terminer avec succès. Si une erreur survient, vérifiez tous les champs et s’ils sont envoyés correctement. Comme il y a beaucoup d’informations, certaines choses peuvent passer inaperçues.

### Paramètres complets du point de terminaison

Voici l’appel complet et toutes les possibilités de champs qui peuvent être envoyés.

"customer_id" : integer, "customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", }, "membership" : { "status" : "string", // one of "pending", "active", "trialing", "expired", "on-hold", "cancelled" "date_expiration" : "string", "date_trial_end" : "string", "date_activated" : "string", "date_renewed" : "string", "date_cancellation" : "string", "date_payment_plan_completed": "string", }, "products" : [1,2], "duration" : "string", "duration_unit" : "string", "discount_code" : "string", "auto_renew" : "boolean", "country" : "string", "currency" : "string", "payment" { "status" : "string", // one of "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "cancelled" }, "payment_method" : { "gateway" : "string", "gateway_customer_id" : "string", "gateway_subscription_id" : "string", "gateway_payment_id" : "string", }, "site" : { "site_url" : "string", "site_title" : "string", "publish" : "boolean", "template_id" : "string", }

---
title: Enregistrer le point de terminaison API
sidebar_position: 6
_i18n_hash: 8185a928b84bdc9e5563d14f7ddbe7d7
---
# L'endpoint API Register d'Ultimate Multisite

Dans ce tutoriel, vous apprendrez à utiliser l'endpoint API /register d'Ultimate Multisite pour créer l'ensemble du processus d'onboarding d'un nouveau client dans votre réseau et comment le faire avec Zapier.

L'endpoint utilise la méthode POST et est appelé par l'URL _**https://yoursite.com/wp-json/wu/v2/register**_. Dans cet appel, 4 processus seront exécutés dans votre réseau :

* Un nouvel utilisateur WordPress ou son identification via l'ID utilisateur sera créé.
* Un nouveau Client dans Ultimate Multisite ou son identification via l'ID client sera créé.
* Un nouveau site sur le réseau WordPress sera créé.
* En fin de compte, une nouvelle Adhésion dans Ultimate Multisite sera créée.

Pour ce processus, vous aurez besoin de vos identifiants API. Pour les obtenir, allez dans le panneau d'administration de votre réseau, naviguez vers **Ultimate Multisite > Settings** > **API & Webhooks**, et cherchez la section Paramètres API.

![API Settings section in Ultimate Multisite](/img/config/settings-api.png)
Sélectionnez **Enable API** et obtenez vos identifiants API.

Maintenant, explorons l'endpoint puis créons une action d'enregistrement dans Zapier.

## Paramètres du corps de l'endpoint

Voyons un aperçu des informations minimales que nous devons envoyer à l'endpoint. À la fin de cet article, vous trouverez l'appel complet.

### Client

Il s'agit des informations nécessaires pour le processus de création de l'Utilisateur et du Client Ultimate Multisite :

```json
"customer_id" : integer
```

Il est possible d'envoyer l'ID client créé dans votre réseau. S'il n'est pas soumis, les informations ci-dessous seront utilisées pour créer un nouveau client et un nouvel utilisateur WordPress. L'ID utilisateur peut également être envoyé de la même manière que l'ID client.

```json
"customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", },
```

### **Adhésion**

La seule information dont nous avons besoin dans cet objet est le statut d'adhésion.

```json
"membership" { "status" : "string", // one of "pending", "active", "trialing", "expired", "on-hold", "canceled" },
```

### **Produits**

Les produits sont fournis sous forme de tableau contenant 1 ou plusieurs ID de produit de votre réseau. Attention, cet endpoint ne crée pas de produits. Consultez la documentation d'Ultimate Multisite pour mieux comprendre l'endpoint de création de produit.

**"products" : [1,2],**

### Paiement

Comme pour l'adhésion, nous n'avons besoin que du statut.

**"payment" { "status" : "string", // one of "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "canceled" },**

### Site

Et pour clôturer le corps, nous avons besoin de l'URL et du titre du site, tous deux dans l'objet Site.

**"site" : { "site_url" : "string", "site_title" : "string" }**

La réponse de l'endpoint register sera un tableau contenant les informations de l'adhésion nouvellement créée.

## Création d'une action dans Zapier

Avec l'introduction de ce nouvel endpoint de création de compte plus robuste, vous aurez également accès à une nouvelle action dans Zapier.

Savez-vous comment utiliser et profiter de tout ce que la nouvelle version de Zapier offre ? En savoir plus ici. (link?)

### Création d'une action

Pour mieux illustrer comment utiliser l'endpoint d'enregistrement avec Zapier, créons une intégration avec Google Forms. Chaque fois que ce formulaire est rempli et que les informations sont enregistrées dans la feuille de réponses du formulaire, une nouvelle adhésion sera créée dans le réseau Ultimate Multisite.

Dans Google Forms, créez un formulaire avec les champs minimum nécessaires pour créer une nouvelle adhésion dans le réseau.

<!-- Screenshot unavailable: Google Forms form with fields for creating a new membership -->

Maintenant, dans Zapier, créez un nouveau Zap et connectez le formulaire créé dans Google via la feuille de calcul où les données sont enregistrées.

<!-- Screenshot unavailable: Zapier trigger configuration connecting to Google Forms spreadsheet -->

Terminé ! Le formulaire Google Forms est connecté à Zapier et prêt à être intégré au réseau. Passons maintenant à l'action qui résultera du déclencheur que Google Forms déclenche à chaque remplissage.

Localisez la nouvelle application Ultimate Multisite et sélectionnez-la. Pour ce type de Zap, choisissez l'option Register.

<!-- Screenshot unavailable: Zapier action selection showing Ultimate Multisite app with Register option -->

After this first step, choose the account that will be connected with this Zap.<!-- Screenshot unavailable: Zapier account connection step for Ultimate Multisite -->

C'est la partie la plus sensible de l'ensemble du processus. Nous devons faire correspondre les champs provenant de Google Forms avec les champs minimum nécessaires pour l'endpoint d'enregistrement, comme indiqué dans la section précédente de cet article.

Dans cet exemple, nous n'avons besoin de configurer que le nom d'utilisateur, l'e-mail, le mot de passe, le nom et l'URL du site Web. Le reste est laissé prédéterminé afin que toutes les adhésions générées sur ce Google Forms suivent le même modèle de produit et de statut.

<!-- Screenshot unavailable: Zapier field mapping between Google Forms and Ultimate Multisite register endpoint -->

With the information set up, proceed to the final test. On the last screen you can see all the fields that will be sent to the endpoint, their respective information and the fields that will be sent empty.<!-- Screenshot unavailable: Zapier test screen showing all fields to be sent to the register endpoint -->

Testez votre nouveau Zap et il devrait se terminer avec succès. Si une erreur se produit, vérifiez tous les champs et assurez-vous qu'ils sont envoyés correctement. Comme il y a beaucoup d'informations, certaines choses peuvent passer inaperçues.

### Paramètres complets de l'endpoint

Voici l'appel complet et toutes les possibilités de champs pouvant être envoyés.

```json
"customer_id" : integer, "customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", }, "membership" : { "status" : "string", // one of "pending", "active", "trialing", "expired", "on-hold", "cancelled" "date_expiration" : "string", "date_trial_end" : "string", "date_activated" : "string", "date_renewed" : "string", "date_cancellation" : "string", "date_payment_plan_completed": "string", }, "products" : [1,2], "duration" : "string", "duration_unit" : "string", "discount_code" : "string", "auto_renew" : "boolean", "country" : "string", "currency" : "string", "payment" { "status" : "string", // one of "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "cancelled" }, "payment_method" : { "gateway" : "string", "gateway_customer_id" : "string", "gateway_subscription_id" : "string", "gateway_payment_id" : "string", }, "site" : { "site_url" : "string", "site_title" : "string", "publish" : "boolean", "template_id" : "string", }
```

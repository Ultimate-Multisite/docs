---
title: Intégration Zapier
sidebar_position: 12
_i18n_hash: 7f23136e0e69417e244a9930f9620e95
---
# Intégrer Ultimate Multisite avec Zapier {#integrating-ultimate-multisite-with-zapier}

Dans l’un des articles, nous avons abordé les [Webhooks](webhooks.md) et la manière dont ils peuvent être utilisés pour s’intégrer à des applications tierces.

Utiliser des webhooks est un peu compliqué, car cela nécessite des connaissances avancées en codage et en capture de payloads. Utiliser **Zapier** est un moyen de contourner cela.

Zapier propose une intégration avec plus de 5000 applications, ce qui facilite la communication entre différentes applications.

Vous pouvez créer des **Triggers** qui seront déclenchés lorsque des événements se produisent sur votre réseau (par exemple, un Account est créé et déclenche l’événement account_create) ou générer des **Actions** sur votre réseau en réaction à des événements externes (par exemple, créer une nouvelle adhésion de compte dans votre réseau Ultimate Multisite).

Cela est possible parce que les **triggers d’Ultimate Multisite Zapier** et les actions sont alimentés par la [REST API](https://developer.ultimatemultisite.com/api/docs/).

## Comment commencer {#how-to-start}

Tout d’abord, recherchez Ultimate Multisite dans la liste des applications Zapier. Vous pouvez également cliquer sur [ce lien](https://zapier.com/apps/wp-ultimo/integrations).

Accédez à votre Dashboard et appuyez sur le bouton **+** **Créer un Zap** dans la barre latérale gauche pour configurer un nouveau Zap.

![Dashboard Zapier avec le bouton Créer un Zap](/img/admin/webhooks-list.png)

Vous serez redirigé vers la page de création de Zap.

Dans la zone de recherche, saisissez « wp ultimo ». Cliquez pour choisir l’option de version **Beta**.

![Recherche de WP Ultimo dans la liste des applications Zapier](/img/admin/webhooks-list.png)

Après avoir sélectionné notre application, choisissez l’événement disponible : **Nouvel événement Ultimate Multisite**.

![Sélection du trigger Nouvel événement Ultimate Multisite](/img/admin/webhooks-list.png)

Nous devons maintenant donner à Zapier l’accès à **votre réseau**. Cliquer sur **Sign in** ouvrira une nouvelle fenêtre demandant les **identifiants API**.

![Invite de connexion Zapier pour les identifiants API](/img/admin/webhooks-list.png)

Accédez au panneau d’administration de votre réseau et allez dans **Ultimate Multisite > Réglages** > **API & Webhooks**, puis recherchez la section API Settings.

Sélectionnez l’option **Enable API**, car elle est requise pour que cette connexion fonctionne.

![Réglages API et Webhooks avec les options API Settings et Enable API](/img/admin/settings-api-webhooks.png)

Utilisez l’icône **Copier dans le presse-papiers** sur les champs API Key et API Secret, puis collez ces valeurs sur l’écran d’intégration.

Dans le champ URL, saisissez l’URL complète de votre réseau, y compris le protocole (HTTP ou HTTPS).

![Écran d’intégration Zapier avec les champs API Key, Secret et URL](/img/admin/webhooks-list.png)

Cliquez sur le bouton **Yes, Continue** pour passer à l’étape suivante. Si tout fonctionne, vous devriez être accueilli par votre nouveau compte connecté ! Cliquez sur **Continue** pour créer un nouveau trigger.

## Comment créer un nouveau Trigger {#how-to-create-a-new-trigger}

Maintenant que votre Account est connecté, vous pouvez voir les événements disponibles. Choisissons l’événement **payment_received** pour ce tutoriel.

![Sélection de l’événement payment_received dans le trigger Zapier](/img/admin/webhooks-list.png)

Une fois l’événement sélectionné et après avoir cliqué sur **continue**, une **étape de test** apparaîtra.

![Étape de test Zapier pour le trigger](/img/admin/webhooks-list.png)

À cette étape, Zapier testera si votre Zap peut **récupérer le payload spécifique à cet événement**. Lors des futurs événements du même type, des informations avec cette même structure seront envoyées.

![Test du trigger Zapier terminé avec succès avec le payload](/img/admin/webhooks-list.png)

Dans notre tutoriel, le test a été **terminé avec succès** et a renvoyé les informations d’exemple du payload. Ces informations d’exemple seront utiles pour nous guider lors de la création d’actions. Votre trigger est maintenant créé et prêt à être connecté à d’autres applications.

## Comment créer des Actions {#how-to-create-actions}

Les actions utilisent les informations d’autres triggers pour créer de nouvelles entrées dans votre réseau.

À l’**étape de création d’une action**, vous choisirez Ultimate Multisite **Beta** et l’option **Create Items on Ultimate Multisite**.

![Création d’une action avec Create Items on Ultimate Multisite](/img/admin/webhooks-list.png)

À l’étape suivante, vous créerez soit votre authentification, comme nous l’avons fait dans **Comment commencer**, soit vous sélectionnerez une authentification créée. Dans ce tutoriel, nous choisirons la même authentification créée précédemment.

![Sélection de l’authentification pour l’action Zapier](/img/admin/webhooks-list.png)

### Configurer l’Action {#setting-up-the-action}

C’est l’**étape principale de l’action** et ici, les choses sont un peu différentes. La première information que vous choisirez est l’**Item**. Item est le **modèle d’information** de votre réseau, comme **Customers, Payments, Sites, Emails** et d’autres.

![Choix du type d’Item pour l’action Zapier](/img/admin/webhooks-list.png)

Lors de la sélection d’un item, le formulaire se **réorganisera pour afficher les champs requis et facultatifs** pour l’item sélectionné.

Par exemple, lorsque vous sélectionnez l’item **Customer**, les champs du formulaire afficheront tout ce qui est nécessaire à remplir pour créer un nouveau Customer dans le réseau.

![Champs de l’item Customer dans la configuration de l’action Zapier](/img/admin/webhooks-list.png)

Après avoir rempli tous les champs marqués comme **requis** et cliqué sur continuer, un dernier écran vous montrera les champs remplis et les champs laissés vides.

![Test de l’action Zapier affichant les champs remplis et non remplis](/img/admin/webhooks-list.png)

Dès que votre test se termine avec succès, votre action est configurée. Il est également important de vérifier sur votre réseau si l’item a été créé avec le test de votre action.

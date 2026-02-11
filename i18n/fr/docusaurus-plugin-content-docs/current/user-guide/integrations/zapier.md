---
title: Intégration Zapier
sidebar_position: 12
_i18n_hash: cf4bbd6dfae0fa99b3d009298cad3f19
---
# Intégration d'Ultimate Multisite avec Zapier

Dans l'un des articles, nous avons abordé les [Webhooks](webhooks.md) et comment ils peuvent être utilisés pour s'intégrer à des applications tierces.

Utiliser les webhooks est un peu compliqué car cela nécessite des connaissances avancées en codage et en capture de charges utiles. Utiliser **Zapier** est une façon de contourner cela.

Zapier intègre plus de 5000 applications, ce qui facilite la communication entre différentes applications.

Vous pouvez créer des **Triggers** qui se déclenchent lorsqu'un événement se produit sur votre réseau (par ex. un compte est créé et déclenche l'événement account_create) ou générer des **Actions** sur votre réseau en réaction à des événements externes (par ex. créer une nouvelle adhésion de compte dans votre réseau Ultimate Multisite).

Ceci est possible car les déclencheurs et actions **Ultimate Multisite Zapier** sont alimentés par l'[API REST](https://developer.ultimatemultisite.com/api/docs/).

## Comment démarrer

Tout d'abord, recherchez Ultimate Multisite dans la liste des applications Zapier. Alternativement, vous pouvez cliquer sur [ce lien](https://zapier.com/apps/wp-ultimo/integrations).

Accédez à votre tableau de bord et appuyez sur le bouton **+** **Create Zap** dans la barre latérale gauche pour configurer un nouveau Zap.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-kyu5ufUXOv.png)

Vous serez redirigé vers la page de création de Zap.

Dans la zone de recherche, tapez « wp ultimo ». Cliquez pour choisir l'option **Beta**.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-BrOYbp7dSE.png)

Après avoir sélectionné notre application, choisissez l'événement disponible : **New Ultimate Multisite Event**.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-srblXqJnQE.png)

Nous devons maintenant donner à Zapier l'accès à **votre réseau**. Cliquer sur **Sign in** ouvrira une nouvelle fenêtre demandant les **identifiants API**.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-HcULsQoFpZ.png)

Accédez à votre panneau d'administration réseau et naviguez vers **Ultimate Multisite > Settings** > **API & Webhooks** et recherchez la section API Settings.

Sélectionnez l'option **Enable API** car elle est requise pour que cette connexion fonctionne.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-l7KbeKUkPX.png)

Utilisez l'icône **Copy to Clipboard** sur les champs API Key et API Secret et collez ces valeurs sur l'écran d'intégration.

Dans le champ URL, saisissez l'URL complète de votre réseau, y compris le protocole (HTTP ou HTTPS).

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-4UVPQAlzYk.png)

Cliquez sur le bouton **Yes, Continue** pour passer à l'étape suivante. Si tout fonctionne, vous devriez être accueilli par votre nouveau compte connecté ! Cliquez sur **Continue** pour créer un nouveau déclencheur.

## Comment créer un nouveau déclencheur

Maintenant que votre compte est connecté, vous pouvez voir les événements disponibles. Choisissons l'événement **payment_received** pour ce tutoriel.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-jZE7WgSGw8.png)

Une fois l'événement sélectionné et que vous cliquez sur **continue**, une étape **test** apparaîtra.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-SWo5wbMkgZ.png)

À cette étape, Zapier testera si votre Zap peut **récupérer la charge utile spécifique à cet événement**. Dans les événements futurs du même type, les informations avec cette même structure seront envoyées.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-CVCJxhN3ai.png)

Dans notre tutoriel, le test a été **completed successfully** et a renvoyé les informations d'exemple de charge utile. Ces informations d'exemple seront utiles pour nous guider lors de la création d'actions. Votre déclencheur est maintenant créé et prêt à être connecté à d'autres applications.

## Comment créer des Actions

Les actions utilisent les informations d'autres déclencheurs pour créer de nouvelles entrées dans votre réseau.

Dans l'étape **creating an action step**, vous choisirez Ultimate Multisite **Beta** et l'option **Create Items on Ultimate Multisite**.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-swCbHP8jNG.png)

À l'étape suivante, vous créerez votre authentification, tout comme nous l'avons fait dans **How to start**, ou sélectionnerez une authentification déjà créée. Dans ce tutoriel, nous choisirons la même authentification précédemment créée.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-iRSFnhpoHv.png)

### Configuration de l'action

C'est l'**étape principale de l'action** et ici les choses sont un peu différentes. La première information que vous choisirez est l'**Item**. L'Item est le **modèle d'information** de votre réseau, tel que **Customers, Payments, Sites, Emails** et d'autres.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-GC4iHxBn4e.png)

Lors de la sélection d'un élément, le formulaire **rearrange** pour afficher les champs requis et facultatifs de l'élément sélectionné.

Par exemple, lors de la sélection de l'élément **Customer**, les champs du formulaire afficheront tout ce qui est nécessaire pour créer un nouveau Customer dans le réseau.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-4xpHH5xTaf.png)

Après avoir rempli tous les champs marqués comme **required** et cliqué sur continue, un dernier écran vous montrera les champs remplis et ceux qui sont restés vides.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-JLPq56npV6.png)

Dès que votre test est terminé et réussi, votre action est configurée. Il est également important de vérifier sur votre réseau si l'élément a été créé avec le test de votre action.

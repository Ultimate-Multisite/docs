---
title: Webhooks
sidebar_position: 15
_i18n_hash: f8456622538d07af8f5aa36c1ec19249
---
# Premier aperçu des Webhooks (v2)

_**ATTENTION : notez que cette fonctionnalité ou cet article s’adresse aux utilisateurs avancés.**_

Un **webhook** est un moyen pour une application ou un logiciel comme Ultimate Multisite de fournir à d’autres applications des informations en temps réel. Un webhook transmet des données ou des payloads à d’autres applications au moment où cela se produit, ce qui signifie que vous **recevez les données immédiatement.**

C’est utile si vous devez intégrer ou transmettre certaines données depuis Ultimate Multisite vers un autre CRM ou système chaque fois qu’un événement est déclenché. Par exemple, vous devez envoyer le nom et l’adresse e-mail de l’utilisateur à une liste de diffusion chaque fois qu’un nouveau compte utilisateur est créé.

## Comment créer un webhook

Pour créer un webhook, accédez à votre dashboard d’administration réseau. Cliquez sur **Ultimate Multisite > Webhooks > Ajouter un nouveau Webhook.**

![Page de liste Webhooks vide avec le bouton Ajouter un nouveau Webhook](/img/admin/webhooks-list-empty.png)

Vous pouvez ensuite modifier la configuration du webhook :

![Formulaire Ajouter un nouveau Webhook avec les champs Nom, Événement et URL](/img/admin/webhook-add-modal.png)

Lors de la création d’un nouveau webhook, il vous sera demandé des informations comme **Nom, URL,** et **Événement**. Vous pouvez utiliser le nom que vous voulez pour votre webhook. Les champs les plus importants sont l’URL et l’événement.

![Interface de modification du webhook affichant le champ URL et l’aperçu du payload](/img/admin/webhook-url-field.png)

URL est le **endpoint ou la destination** vers lequel Ultimate Multisite enverra le **payload ou les données**. C’est l’application qui recevra les données.

Zapier est la solution la plus courante que les utilisateurs utilisent pour faciliter l’intégration avec une application tierce. Sans une plateforme comme Zapier, vous devrez créer manuellement une fonction personnalisée qui interceptera les données et les traitera. Consultez cet article sur **comment utiliser le webhook Ultimate Multisite avec Zapier.**

Dans cet article, nous examinerons le concept de base du fonctionnement d’un webhook et les événements disponibles dans Ultimate Multisite. Nous utiliserons un site tiers appelé [requestbin.com](https://requestbin.com/). Ce site nous permettra de créer un endpoint et de récupérer le payload sans écrire de code. _**Avertissement : tout ce qu’il fera, c’est nous montrer que les données ont été reçues.**_ Aucun traitement ni aucune action d’aucune sorte ne sera effectué sur le payload.

Allez sur [requestbin.com](https://requestbin.com/) et cliquez sur Créer un Request Bin.

Après avoir cliqué sur ce bouton, il vous demandera de vous connecter si vous avez déjà un compte, ou de vous inscrire. Si vous avez déjà un compte, il vous mènera directement à leur dashboard. Sur leur dashboard, vous verrez immédiatement l’endpoint ou l’URL que vous pouvez utiliser pour créer votre webhook Ultimate Multisite.

Copiez l’URL et retournez dans Ultimate Multisite. Placez l’endpoint dans le champ URL et sélectionnez un événement dans le menu déroulant. Dans cet exemple, nous sélectionnerons **Paiement reçu**.

Cet événement est déclenché chaque fois qu’un utilisateur effectue un paiement. Tous les événements disponibles, leur description et leurs payloads sont listés en bas de la page. Cliquez sur le bouton **Ajouter un nouveau Webhook** pour enregistrer le webhook.

![Menu déroulant des événements du webhook avec Paiement reçu sélectionné](/img/admin/webhook-event-picker.png)

Nous pouvons maintenant envoyer un événement de test à l’endpoint pour voir si le webhook que nous avons créé fonctionne. Nous pouvons le faire en cliquant sur **Envoyer un événement de test** sous le webhook que nous avons créé.

![Liste Webhooks affichant un webhook configuré et l’action Envoyer un test](/img/admin/webhooks-list-populated.png)

Cela affiche une fenêtre de confirmation indiquant que le test a réussi.

![Résultat de l’événement de test du webhook après l’envoi d’un payload de test](/img/admin/webhook-test-result.png)

Maintenant, si nous retournons sur le site _Requestbin_, nous verrons que le payload a été reçu avec des données de test.

C’est le principe de base du fonctionnement des webhooks et des endpoints. Si vous devez créer un endpoint personnalisé, vous devrez créer une fonction personnalisée pour traiter les données que vous recevez de Ultimate Multisite.

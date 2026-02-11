---
title: Webhooks
sidebar_position: 15
_i18n_hash: 31948dc4c1b47114e296e95813b25348
---
# Un premier aperçu des Webhooks (v2)

_**ATTENTION : Notez que cette fonctionnalité ou cet article est destiné aux utilisateurs avancés.**_

Un **webhook** est un moyen pour une application ou un logiciel comme Ultimate Multisite de fournir à d'autres applications des informations en temps réel. Un webhook transmet des données ou des charges utiles aux autres applications au fur et à mesure, ce qui signifie que vous **recevez les données immédiatement.**

Ceci est utile si vous avez besoin d'intégrer ou de transmettre certaines données d'Ultimate Multisite vers un autre CRM ou système chaque fois qu'un événement est déclenché. Par exemple, vous devez envoyer le nom et l'adresse e‑mail de l'utilisateur à une liste de diffusion chaque fois qu'un nouveau compte utilisateur est créé.

## Comment créer un webhook

Pour créer un webhook, accédez à votre tableau de bord d'administration réseau. Cliquez sur **Ultimate Multisite > Webhooks > Add New Webhook.**

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-7cBdC7uhfX.png)

Lors de la création d'un nouveau webhook, on vous demandera des informations telles que **Name, URL,** et **Event**. Vous pouvez choisir n'importe quel nom pour votre webhook. Les champs les plus importants sont l'URL et l'Event.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-7MmyV3wafK.png)

URL est le **point de terminaison ou la destination** vers laquelle Ultimate Multisite enverra la **charge utile ou les données**. C'est l'application qui recevra les données.

Zapier est la solution la plus courante que les utilisateurs utilisent pour faciliter l'intégration avec une application tierce. Sans une plateforme comme Zapier, vous devrez créer manuellement une fonction personnalisée qui capturera les données et les traitera. Consultez cet article sur **how to use Ultimate Multisite webhook with Zapier.**

Dans cet article, nous allons examiner le concept de base du fonctionnement d'un webhook et les événements disponibles dans Ultimate Multisite. Nous utiliserons un site tiers appelé [requestbin.com](https://requestbin.com/). Ce site nous permettra de créer un point de terminaison et de capturer la charge utile sans coder. _**Disclaimer : tout ce qu'il fera est de nous montrer que les données ont été reçues.**_ Aucun traitement ni aucune action ne sera effectué sur la charge utile.

Allez sur [requestbin.com](https://requestbin.com/) et cliquez sur Create Request Bin.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-J0e5FzS04g.png)

Après avoir cliqué sur ce bouton, il vous demandera de vous connecter si vous avez déjà un compte ou de vous inscrire. Si vous avez déjà un compte, il vous dirigera directement vers leur tableau de bord. Sur leur tableau de bord, vous verrez immédiatement le point de terminaison ou l'URL que vous pouvez utiliser pour créer votre webhook Ultimate Multisite.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-M40kPMGsji.png)

Copiez l'URL et revenez à Ultimate Multisite. Placez le point de terminaison dans le champ URL et sélectionnez un événement dans le menu déroulant. Dans cet exemple, nous sélectionnerons **Payment Received**.

Cet événement est déclenché chaque fois qu'un utilisateur effectue un paiement. Tous les événements disponibles, leurs descriptions et leurs charges utiles sont listés en bas de la page. Cliquez sur le bouton **Add New Webhook** pour enregistrer le webhook.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-1NwqQP4bP0.png)

Nous pouvons maintenant envoyer un événement de test au point de terminaison afin de vérifier si le webhook que nous avons créé fonctionne. Nous pouvons le faire en cliquant sur **Send Test Event** sous le webhook que nous avons créé.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-zTDhrG4wlP.png)

Cela affiche une fenêtre de confirmation indiquant que le test a réussi.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-9jP9r7yRT9.png)

Maintenant, si nous retournons sur le site _Requestbin_, nous verrons que la charge utile a été reçue contenant quelques données de test.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-RZke5xnrAg.png)

Ceci est le principe de base du fonctionnement des webhooks et des points de terminaison. Si vous devez créer un point de terminaison personnalisé, vous devrez créer une fonction personnalisée pour traiter les données que vous recevez d'Ultimate Multisite.

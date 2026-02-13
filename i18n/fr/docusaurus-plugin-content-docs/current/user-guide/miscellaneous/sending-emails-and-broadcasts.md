---
title: Envoi d'emails et de diffusions
sidebar_position: 11
_i18n_hash: 2c58b558fa68e4dd6e81bec971d52536
---
# Envoi d'emails et de diffusions (v2)

_**NOTE IMPORTANTE : Cet article fait référence à la version 2.x d'Ultimate Multisite.**_

Ultimate Multisite propose une fonctionnalité qui vous permet de communiquer avec vos clients en envoyant un e‑mail à un utilisateur ciblé ou à un groupe d’utilisateurs, ainsi qu’en affichant des notifications sur leur tableau de bord d'administration pour diffuser des annonces.

## Ajouter des avis d'administration à votre tableau de bord client avec Broadcasts

En utilisant la fonction de diffusion d'Ultimate Multisite, vous pouvez ajouter des **avis d'administration** au tableau de bord d'administration du sous-site de votre utilisateur.

C'est extrêmement utile si vous devez faire une annonce, comme une maintenance du système ou proposer de nouveaux produits ou services à vos utilisateurs existants. Voici à quoi ressemblera l'avis d'administration sur le tableau de bord de votre utilisateur.

![Admin notice broadcast shown on customer dashboard](/img/admin/broadcasts-list.png)

Pour démarrer un avis d'administration, accédez à votre tableau de bord d'administration réseau et, sous le menu **Ultimate Multisite**, vous trouverez l'option **Broadcasts**.

![Broadcasts menu in Ultimate Multisite admin](/img/admin/broadcasts-list.png)

Depuis cette page, cliquez sur le bouton **Add Broadcast** en haut.

Cela ouvrira la fenêtre modale Ajouter une diffusion où vous pourrez choisir le type de diffusion que vous souhaitez envoyer. Sélectionnez **Message** puis cliquez sur le bouton **Next Step**.

![Add broadcast modal with Message type selected](/img/admin/broadcasts-list.png)

La fenêtre suivante vous demandera soit le **Target customer** soit le **Target product**. Notez que vous pouvez sélectionner plus d'un utilisateur ou plus d'un produit.

Pour rechercher un compte utilisateur ou un produit, commencez à taper le mot-clé dans le champ.

Sous le champ **Message type**, vous pouvez choisir la couleur de l'avis. Cela mettra en évidence l'urgence de votre message.

Vous pouvez ensuite cliquer sur **Next Step**.

![Target customer and product selection for broadcast](/img/admin/broadcasts-list.png)

La fenêtre suivante est l'endroit où vous pouvez commencer à composer votre message en saisissant le sujet et le contenu/message que vous souhaitez diffuser aux utilisateurs.

![Broadcast message subject and content editor](/img/admin/broadcasts-list.png)

Après avoir créé votre message, vous pouvez alors cliquer sur le bouton **Send**.

Et voilà. L'avis d'administration devrait apparaître immédiatement sur le tableau de bord de votre utilisateur.

## Envoyer des e‑mails à vos clients

En utilisant la fonction de diffusion d'Ultimate Multisite, vous pouvez envoyer un e‑mail à vos utilisateurs. Vous avez la possibilité d'envoyer l'e‑mail uniquement à des utilisateurs spécifiques ou de cibler un groupe d'utilisateurs spécifique en fonction du produit ou du plan auquel ils sont abonnés.

Pour démarrer une diffusion d'e‑mail, accédez à votre tableau de bord d'administration réseau et, sous le menu Ultimate Multisite, vous trouverez l'option Broadcast.

![Broadcasts page in Ultimate Multisite admin](/img/admin/broadcasts-list.png)

Depuis cette page, cliquez sur le bouton **Add broadcast** en haut.

Cela ouvrira la fenêtre modale Ajouter une diffusion où vous pourrez choisir le type de diffusion que vous souhaitez envoyer. Sélectionnez **Email** puis cliquez sur le bouton **Next Step**.

![Add broadcast modal with Email type selected](/img/admin/broadcasts-list.png)

La fenêtre suivante vous demandera soit le **Target customer** soit le **Target product**. Notez que vous pouvez sélectionner plus d'un utilisateur ou plus d'un produit.

Pour rechercher un compte utilisateur ou un produit, commencez à taper le mot-clé dans le champ.

Une fois votre audience cible sélectionnée, vous pouvez cliquer sur **Next Step**.

![Target customer and product selection for email broadcast](/img/admin/broadcasts-list.png)

La fenêtre suivante est l'endroit où vous pouvez commencer à composer votre e‑mail en saisissant le sujet et le contenu/message que vous souhaitez envoyer aux utilisateurs.

![Email broadcast subject and content editor](/img/admin/broadcasts-list.png)

Après avoir créé votre message, vous pouvez cliquer sur le bouton **Send**.

Et c'est ainsi que vous pouvez facilement envoyer un e‑mail à vos utilisateurs finaux en utilisant la fonction de diffusion.

## E‑mails système

Les e‑mails système dans Ultimate Multisite sont ces **notifications automatiques** envoyées par le système après certaines actions comme l'inscription, le paiement, la cartographie de domaine, etc. Ces e‑mails peuvent être modifiés depuis les paramètres d'Ultimate Multisite. Il dispose également d'une fonctionnalité qui vous permet de réinitialiser et d'importer les paramètres existants depuis une autre installation d'Ultimate Multisite.

### Réinitialisation & Importation

Les nouvelles versions d'Ultimate Multisite, ainsi que les extensions, peuvent et vont enregistrer de nouveaux e‑mails de temps à autre.

Pour éviter les conflits et autres problèmes, **nous n'ajouterons pas automatiquement les nouveaux modèles d'e‑mail en tant qu'e‑mails système dans votre installation**, sauf s'ils sont essentiels au bon fonctionnement d'une fonctionnalité donnée.

Cependant, les super‑administrateurs et les agents peuvent importer ces nouveaux e‑mails enregistrés via l'outil d'importation. Ce processus créera un nouvel e‑mail système avec le contenu et la configuration du nouveau modèle d'e‑mail, permettant au super‑administrateur de faire toutes les modifications qu'il souhaite ou de les conserver telles quelles.

#### Comment importer les e‑mails système

Accédez à votre page Paramètres d'Ultimate Multisite et rendez-vous dans l'onglet **Emails**.

![Emails tab in Ultimate Multisite settings](/img/config/settings-emails.png)

Ensuite, dans la barre latérale, cliquez sur le bouton **Customize System Emails**.

![Customize System Emails button on sidebar](/img/config/settings-emails.png)

Sur la page E‑mails système, vous verrez le bouton d'action **Reset & Import** en haut. Cliquer sur ce bouton devrait ouvrir la fenêtre modale d'importation et de réinitialisation.

![Reset and Import action button on System Emails page](/img/config/settings-emails.png)

Ensuite, vous pouvez basculer les options Import Emails pour voir quels e‑mails système sont disponibles à l'importation.

![Import Emails options showing available system emails](/img/config/settings-emails.png)

#### Réinitialisation des e‑mails système

D'autres fois, vous vous rendrez compte que les modifications apportées à un modèle d'e‑mail donné ne fonctionnent plus pour vous et que vous souhaitez le réinitialiser à son **état par défaut**.

Dans de tels cas, vous avez deux options : vous pouvez simplement supprimer l'e‑mail système et l'importer à nouveau (en suivant les instructions ci‑dessus) - ce qui effacera les métriques d'envoi et d'autres éléments, rendant cette méthode la moins préférée.

Ou vous pouvez utiliser l'outil **Reset & Import** pour réinitialiser ce modèle d'e‑mail.

Pour réinitialiser un modèle d'e‑mail, vous pouvez suivre les étapes ci‑dessus jusqu'à atteindre l'outil Reset & Import, puis basculer l'option **Reset** et sélectionner les e‑mails que vous souhaitez réinitialiser à leur contenu par défaut.

![Reset option to restore email templates to defaults](/img/config/settings-emails.png)

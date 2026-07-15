---
title: Envoi d’e-mails et de diffusions
sidebar_position: 11
_i18n_hash: 0563b0c364cc014990c7066b8251ba36
---
# Envoi d’e-mails et de diffusions (v2)

_**NOTE IMPORTANTE : cet article concerne Ultimate Multisite version 2.x.**_

Ultimate Multisite inclut une fonctionnalité qui vous permettra de communiquer avec vos clients en envoyant un e-mail à un utilisateur ciblé ou à un groupe d’utilisateurs, ainsi qu’en envoyant des avis sur leur Dashboard d’administration pour diffuser des annonces

## Ajouter des avis d’administration au Dashboard de vos clients avec Broadcasts {#add-admin-notices-to-your-customers-dashboard-with-broadcasts}

En utilisant la fonctionnalité de diffusion de Ultimate Multisite, vous pouvez ajouter des **avis d’administration** au Dashboard d’administration du sous-site de votre utilisateur.

C’est extrêmement utile si vous devez faire une annonce, comme une maintenance système, ou proposer de nouveaux produits ou services à vos utilisateurs existants. Voici à quoi ressemblera l’avis d’administration sur le Dashboard de votre utilisateur.

<!-- Capture d’écran indisponible : avis d’administration diffusé affiché sur le Dashboard du sous-site d’un client -->

Pour commencer un avis d’administration, accédez au Dashboard d’administration de votre réseau et, sous le menu **Ultimate Multisite**, vous trouverez l’option **Broadcasts**.

![Page de liste Broadcasts dans l’administration Ultimate Multisite](/img/admin/broadcasts-list.png)

Vous pouvez également modifier les diffusions existantes :

![Interface de modification de diffusion](/img/admin/broadcast-edit.png)

Depuis cette page, cliquez sur le bouton **Add Broadcast** en haut.

Cela ouvrira la fenêtre modale Add broadcast, où vous pouvez choisir le type de diffusion que vous souhaitez envoyer.

Sélectionnez **Message**, puis cliquez sur le bouton **Next Step**.

![Fenêtre modale d’ajout de diffusion avec l’option Message sélectionnée](/img/admin/broadcast-add-message.png)

La fenêtre suivante vous demandera soit le **Client cible**, soit le **Produit cible**. Notez que vous pouvez sélectionner plusieurs utilisateurs ou plusieurs produits.

Pour rechercher un compte utilisateur ou un produit, vous devez commencer à saisir le mot-clé dans le champ.

Sous le champ **Type de message**, vous pouvez sélectionner la couleur de l’avis. Cela mettra en évidence l’urgence de votre message.

Vous pouvez ensuite cliquer sur **Next Step**.

![Champs clients cibles, produit cible et type de message pour une diffusion Message](/img/admin/broadcast-message-targets.png)

La fenêtre suivante est celle où vous pouvez commencer à composer votre message en saisissant le sujet et le contenu/message que vous souhaitez diffuser aux utilisateurs.

![Sujet du message de diffusion et éditeur de contenu à l’étape de composition](/img/admin/broadcast-edit.png)

Après avoir créé votre message, vous pouvez ensuite cliquer sur le bouton **Send**.

Et voilà. L’avis d’administration devrait s’afficher immédiatement sur le Dashboard de votre utilisateur.

## Envoyer des e-mails à vos clients {#send-emails-to-your-customers}

En utilisant la fonctionnalité de diffusion de Ultimate Multisite, vous pouvez envoyer un e-mail à vos utilisateurs. Vous avez la possibilité d’envoyer l’e-mail uniquement à des utilisateurs spécifiques ou de cibler un groupe d’utilisateurs spécifique en fonction du produit ou du plan auquel ils sont abonnés.

Pour commencer une diffusion par e-mail, accédez au Dashboard d’administration de votre réseau et, sous le menu Ultimate Multisite, vous trouverez l’option Broadcast.

![Page de liste Broadcasts utilisée comme point de départ pour une diffusion par e-mail](/img/admin/broadcasts-list.png)

Depuis cette page, cliquez sur le bouton **Add broadcast** en haut.

Cela ouvrira la fenêtre modale Add broadcast, où vous pouvez choisir le type de diffusion que vous souhaitez envoyer. Sélectionnez **Email**, puis cliquez sur le bouton **Next Step**.

![Fenêtre modale d’ajout de diffusion avec l’option Email sélectionnée](/img/admin/broadcast-add-email.png)

La fenêtre suivante vous demandera soit le **Client cible**, soit le **Produit cib** le. Notez que vous pouvez sélectionner plusieurs utilisateurs ou plusieurs produits.

Pour rechercher un compte utilisateur ou un produit, vous devez commencer à saisir le mot-clé dans le champ.

Une fois votre audience cible sélectionnée, vous pouvez cliquer sur **Next Step**.

![Sélection de clients cibles et de produit cible pour une diffusion Email](/img/admin/broadcast-email-targets.png)

La fenêtre suivante est celle où vous pouvez commencer à composer votre e-mail en saisissant le sujet et le contenu/message que vous souhaitez envoyer aux utilisateurs.

<!-- Capture d’écran indisponible : sujet de la diffusion par e-mail et éditeur de contenu à l’étape de composition -->

Après avoir créé votre message, vous pouvez cliquer sur le bouton **Send**.

Et c’est aussi simple que cela d’envoyer un e-mail à vos utilisateurs finaux en utilisant la fonctionnalité de diffusion.

## E-mails système {#system-emails}

Les e-mails système dans Ultimate Multisite sont les **notifications automatiques** envoyées par le système après certaines actions comme l’inscription, le paiement, le mappage de domaine, etc. Ces e-mails peuvent être édités ou modifiés depuis les paramètres de Ultimate Multisite. Il inclut également une fonctionnalité qui vous permettra de réinitialiser et d’importer des paramètres existants depuis une autre installation Ultimate Multisite.

### Réinitialisation et importation {#resetting--importing}

Les nouvelles versions de Ultimate Multisite, ainsi que les modules complémentaires, peuvent enregistrer et enregistreront de temps à autre de nouveaux e-mails.

Pour éviter les conflits et autres problèmes, **nous n’ajouterons pas automatiquement les nouveaux modèles d’e-mails comme E-mails système sur votre installation**, sauf s’ils sont essentiels au bon fonctionnement d’une fonctionnalité donnée.

Cependant, les super administrateurs et les agents peuvent importer ces e-mails nouvellement enregistrés via l’outil d’importation. Ce processus créera un nouvel e-mail système avec le contenu et la configuration du nouveau modèle d’e-mail, permettant au super administrateur d’apporter toutes les modifications souhaitées ou de les conserver tels quels.

#### Comment importer des e-mails système {#how-to-import-system-emails}

Accédez à votre page Paramètres Ultimate Multisite et allez à l’onglet **Emails**.

![Onglet Emails dans les paramètres Ultimate Multisite affichant la section E-mails système](/img/config/settings-emails-tab.png)

Ensuite, dans la barre latérale, cliquez sur le bouton **Customize System Emails**.

<!-- Capture d’écran indisponible : bouton Customize System Emails dans le panneau latéral E-mails système -->

Sur la page E-mails système, vous verrez le bouton d’action **Reset & Import** en haut. Cliquer sur ce bouton devrait ouvrir la fenêtre modale d’importation et de réinitialisation.

![Bouton d’action Reset or Import sur la page d’administration des E-mails système](/img/admin/system-emails-reset-import.png)

Ensuite, vous pouvez activer/désactiver les options Import Emails pour voir quels e-mails système sont disponibles à l’importation.

<!-- Capture d’écran indisponible : modale Reset and Import avec les options Import Emails développées -->

#### Réinitialisation des emails système {#reseting-system-emails}

À d’autres moments, vous vous rendrez compte que les modifications que vous avez apportées à un modèle d’email donné ne vous conviennent plus et que vous souhaitez le réinitialiser à son **état par défaut**.

Dans ce cas, vous avez deux options : vous pouvez simplement supprimer l’email système et le réimporter (en utilisant les instructions ci-dessus) — ce qui effacera les métriques d’envoi et d’autres éléments, ce qui rend cette méthode la moins recommandée.

Ou vous pouvez utiliser l’outil **Reset & Import** pour réinitialiser ce modèle d’email.

Pour réinitialiser un modèle d’email, vous pouvez suivre les étapes ci-dessus jusqu’à atteindre l’outil Reset & Import, puis activer l’option **Reset** et sélectionner les emails que vous souhaitez réinitialiser à leur contenu par défaut.

<!-- Capture d’écran indisponible : modale Reset and Import avec les options Reset Emails développées -->

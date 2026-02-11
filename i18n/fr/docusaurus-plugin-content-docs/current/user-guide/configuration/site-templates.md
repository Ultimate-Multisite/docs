---
title: Modèles de site
sidebar_position: 4
_i18n_hash: 05938a764a4fd230e32fa0ef39d35ebd
---
# Modèles de site (v2)

_**NOTE : Cet article se réfère à Ultimate Multisite version 2.x. Si vous utilisez la version 1.x,**_ **voir cet article** _**.**_

Notre objectif lors de la création d'un réseau premium avec Ultimate Multisite est d'automatiser autant de processus que possible tout en offrant à nos clients flexibilité et différentes options à choisir lors de la création de leurs sites web. Un moyen simple d'atteindre cet équilibre est d'utiliser la fonctionnalité Modèles de site d'Ultimate Multisite.

## Qu'est-ce qu'un Modèle de site ?

Comme son nom l'indique, un Modèle de site est un site de base qui peut être utilisé comme fondation lors de la création de nouveaux sites dans votre réseau.

Cela signifie que vous pouvez créer un site de base, activer différents plugins, définir un thème actif et le personnaliser comme vous le souhaitez. Ensuite, lorsque votre client crée un nouveau compte, au lieu d'obtenir un site WordPress par défaut sans contenu significatif, il recevra une copie de votre site de base avec toutes les personnalisations et contenus déjà en place.

Cela semble génial, mais comment créer un nouveau Modèle de site ? C'est aussi simple que possible.

## Création et modification d'un nouveau Modèle de site

Les Modèles de site ne sont que des sites normaux dans votre réseau. Pour créer un nouveau modèle, vous pouvez simplement aller dans **Network Admin > Ultimate Multisite > Sites > Add Site.**

![add site template](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-D1F8SOUTYU.png)

Cela ouvrira une fenêtre modale qui demandera le **Site title, Site Domain/path,** et **Site type**. Sous le champ déroulant **Site Type**, assurez-vous de sélectionner **Site Template** *.*

![Add site template modal](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-gGWUnGCS36.png)

En bas du formulaire, vous remarquerez un interrupteur **Copy Site**. Cela vous permettra de créer un nouveau Modèle de site basé sur un Modèle de site existant comme point de départ pour vous faire gagner du temps plutôt que de créer un Modèle de site à partir de zéro.

![Add site template modal 2](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-DVSq5dgWfa.png)

### Personnalisation du contenu d'un Modèle de site

Pour personnaliser votre Modèle de site, il suffit de naviguer vers son tableau de bord et d'apporter les modifications nécessaires. Vous pouvez créer de nouveaux articles, pages, activer des plugins et changer le thème actif. Vous pouvez même accéder au Customizer et modifier toutes sortes d'options de personnalisation.

Toutes ces données seront copiées lorsque le client créera un nouveau site basé sur ce Modèle de site.

### Options avancées

Si vous avez des compétences en codage personnalisé, vous pouvez utiliser notre API Search and Replace pour remplacer automatiquement les informations sur le nouveau site après sa création. Cela est utile pour des choses comme remplacer les noms d'entreprise sur une page À propos, remplacer l'e-mail de contact sur la page Contact, etc.

### Utilisation des Modèles de site

D'accord, vous avez créé plusieurs Modèles de site différents avec des designs, thèmes et paramètres différents. Comment les rendre utiles sur votre réseau maintenant ?

En principe, il existe deux approches que vous pouvez utiliser maintenant (pas simultanément) :

* Attacher un Modèle de site à chacun de vos Plans

* OU

* Permettre à vos clients de choisir eux-mêmes les Modèles de site lors de l'inscription.

#### Mode 1 : Affecter un Modèle de site

Dans ce mode, vos clients ne pourront pas choisir un modèle lorsqu'ils créent un compte, mais vous définirez plutôt quel modèle doit être utilisé sur chacun de vos Plans.

Pour ce faire, vous devrez aller dans **Ultimate Multisite > Products > Edit**.

![Assign site template](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-t7UjzQEG5g.png)

Cela vous amènera à la page **Edit Produc** t. Sous la section **Product Options**, trouvez l'onglet **Site template** et sélectionnez l'option **Assign Site** **Template** dans le champ déroulant. Cela affichera la liste des Modèles de site disponibles et vous permettra de sélectionner un seul Modèle de site dédié au produit.

![Assign site template](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-HTcetltjLR.png)

#### Mode 2 : Choisir un Modèle de site disponible

Dans ce mode, vous offrirez à vos clients un choix lors du processus d'inscription. Ils pourront sélectionner parmi différents Modèles de site que vous définissez dans les paramètres du produit. Vous avez la possibilité de limiter le Modèle de site qu'ils peuvent choisir sous le produit sélectionné. Cela vous permettra d'avoir différents ensembles de Modèles de site sous chaque produit, ce qui est idéal pour mettre en avant différentes fonctions et caractéristiques d'un produit à prix plus élevé.

Sur la page **Edit Product**. Sous la section **Product Options**, trouvez l'onglet **Site template** et sélectionnez l'option **Choose Available Site Template** dans le champ déroulant. Cela affichera la liste des Modèles de site disponibles et vous permettra de sélectionner le Modèle de site que vous souhaitez rendre disponible. Vous pouvez le faire en choisissant son comportement : **Available** si vous voulez que le Modèle de site soit inclus dans la liste. _**Not Available**_ si vous ne voulez pas que le Modèle de site apparaisse comme option. Et **Pre-selected** si vous souhaitez qu'un des Modèles de site listés soit sélectionné par défaut.

![Assign site template](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-dY8gSreOfG.png)

### Mode par défaut : sélection du Modèle de site sur le formulaire de paiement

Si vous souhaitez que tous vos Modèles de site soient disponibles lors de l'inscription, ou si vous préférez ne pas faire le travail supplémentaire d'assigner ou de spécifier des Modèles de site sous chaque produit que vous créez, vous pouvez simplement définir la sélection du Modèle de site dans votre **Checkout Form**. Pour ce faire, il suffit d'aller dans **Ultimate Multisite > Checkout Forms**. Ensuite, cliquez sur **Edit** sous le formulaire que vous souhaitez configurer.

![Assign site template](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-FaXifuzMu3.png)

Cela affichera la page **Edit Checkout Form**. Trouvez le champ **Template Selection** et cliquez sur **Edit** sous celui-ci.

![Assign site template](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-ZDAp4vdnve.png)

Une fenêtre modale apparaîtra. Sous le champ **Template Sites**, vous pouvez sélectionner et lister tous les Modèles de site que vous souhaitez rendre disponibles lors de l'inscription. Les Modèles de site que vous spécifiez à partir d'ici seront disponibles quel que soit le produit sélectionné par l'utilisateur.

![Assign site template](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-pCSfzJkf4d.png)

### Options de Modèle de site

Il existe d'autres fonctions de Modèles de site disponibles que vous pouvez activer ou désactiver dans les paramètres d'Ultimate Multisite.

![Site template option](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-wrwT3rqFEf.png)

#### Autoriser le changement de modèle

Activer cette option permettra à vos clients de changer le modèle qu'ils ont choisi lors du processus d'inscription après la création du compte et du site. Cela est utile du point de vue du client car il lui permet de re-sélectionner un modèle s'il découvre plus tard que son choix initial n'était pas le meilleur pour ses besoins particuliers.

#### Autoriser les utilisateurs à utiliser leur site comme modèles

Comme les utilisateurs de sous-sites ont passé du temps à construire et à concevoir leur propre site, ils peuvent vouloir le cloner et l'utiliser comme l'un des Modèles de site disponibles lors de la création d'un autre sous-site sur votre réseau. Cette option leur permettra de le faire.

#### Copier les médias lors de la duplication de modèle

Cocher cette option copiera les médias téléchargés sur le site modèle vers le site nouvellement créé. Cela peut être remplacé sur chacun des plans.

#### **Empêcher les moteurs de recherche d'indexer les Modèles de site**

Les Modèles de site, comme discuté dans cet article, sont des modèles de base mais font toujours partie de votre réseau, ce qui signifie qu'ils sont toujours disponibles pour les moteurs de recherche. Cette option vous permettra de masquer les Modèles de site afin que les moteurs de recherche ne les indexent pas.

## Pré-remplissage des Modèles de site avec auto recherche et remplacement

L'une des fonctionnalités les plus puissantes d'Ultimate Multisite est la capacité d'ajouter du texte arbitraire, des couleurs et des champs de sélection sur le formulaire d'inscription. Une fois ces données capturées, nous pouvons les utiliser pour pré-remplir le contenu dans certaines parties du Modèle de site sélectionné. Ensuite, lorsque le nouveau site est publié, Ultimate Multisite remplacera les espaces réservés par les informations réelles saisies lors de l'inscription.

Par exemple, si vous souhaitez obtenir le nom de l'entreprise de votre utilisateur final lors de l'inscription et l'insérer automatiquement sur la page d'accueil. Sur la page d'accueil de votre site modèle, vous devez ajouter les espaces réservés, comme dans l'image ci-dessous (les espaces réservés doivent être entourés de doubles accolades - {{placeholder_name}}).

![homepage placeholder](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-yEOlZVv2Gr.png)

Ensuite, vous pouvez simplement ajouter un champ d'inscription correspondant sur votre formulaire de paiement pour capturer ces données :

![checkout form](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-9adTd73gNT.png)

Votre client pourra alors remplir ce champ lors de l'inscription.

![registration field](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-jHQ9ZOGWlh.png)

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-preview)

Ultimate Multisite remplacera alors les espaces réservés par les données fournies par le client automatiquement.

![replace placeholder](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-chL5wf7wmY.png)

### Résolution du problème de "modèle plein d'espaces réservés"

Tout cela est génial, mais nous rencontrons un problème désagréable : nos Modèles de site - qui peuvent être visités par nos clients - sont remplis d'espaces réservés peu informatifs.

Pour résoudre ce problème, nous proposons l'option de définir de fausses valeurs pour les espaces réservés, et nous utilisons ces valeurs pour rechercher et remplacer leur contenu sur les sites modèles pendant que vos clients les visitent.

Vous pouvez accéder à l'éditeur d'espaces réservés du modèle en allant dans **Ultimate Multisite > Settings > Sites**, puis, dans la barre latérale, en cliquant sur le lien **Edit Placeholders**.

![placeholder settings](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-ztZnAexNEZ.png)

Cela vous amènera à l'éditeur de contenu des espaces réservés, où vous pouvez ajouter des espaces réservés et leur contenu respectif.

![template placeholders](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-95QJa1MRGz.png)

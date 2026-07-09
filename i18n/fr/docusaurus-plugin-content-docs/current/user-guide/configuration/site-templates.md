---
title: Modèles de sites
sidebar_position: 4
_i18n_hash: fec01b1bf4e915bea1e8cd662fc1b465
---
# Modèles de site (v2)

_**REMARQUE : cet article concerne Ultimate Multisite version 2.x. Si vous utilisez la version 1.x,**_ **consultez cet article** _**.**_

Notre objectif lors de la création d’un réseau premium avec Ultimate Multisite est d’automatiser autant de processus que possible tout en offrant à nos clients de la flexibilité et différentes options parmi lesquelles choisir lorsqu’ils créent leurs sites web. Une façon simple d’atteindre cet équilibre consiste à utiliser la fonctionnalité Modèles de site d’Ultimate Multisite.

## Qu’est-ce qu’un modèle de site ?

Comme son nom l’indique, un modèle de site est un site de base qui peut être utilisé comme point de départ lors de la création de nouveaux sites dans votre réseau.

Cela signifie que vous pouvez créer un site de base, activer différents plugins, définir un thème actif et le personnaliser comme vous le souhaitez. Ensuite, lorsque votre client crée un nouvel Account, au lieu d’obtenir un site WordPress par défaut sans contenu significatif, il recevra une copie de votre site de base avec toutes les personnalisations et tous les contenus déjà en place.

Cela semble génial, mais comment créer un nouveau modèle de site ? C’est aussi simple que possible.

## Création et modification d’un nouveau modèle de site

Les modèles de site sont simplement des sites normaux sur votre réseau. Pour créer un nouveau modèle, vous pouvez simplement aller dans **Administration du réseau > Ultimate Multisite > Sites > Ajouter un site.**

**![Bouton Ajouter un site dans la page de liste des sites](/img/config/site-templates-list.png)**

Cela ouvrira une fenêtre modale où il vous sera demandé le **titre du site, le domaine/chemin du site,** et le **type de site**. Dans le champ déroulant **Type de site**, assurez-vous de sélectionner **Modèle de site** *.*

_![Modale d’ajout de modèle de site avec liste déroulante du type de site](/img/config/site-templates-list.png)_

Vous pouvez également ajouter une description destinée au client pour expliquer ce que le modèle inclut :

![Champ de description du modèle de site sur l’écran de modification du modèle de site](/img/config/site-template-edit-description.png)

En bas du formulaire, vous remarquerez un interrupteur **Copier le site**. Cela vous permettra de créer un nouveau modèle de site basé sur un modèle de site existant comme point de départ, afin de vous aider à gagner du temps au lieu de créer un modèle de site à partir de zéro.

![Modale d’ajout de modèle de site avec interrupteur de copie du site](/img/config/site-templates-list.png)

### Personnalisation du contenu d’un modèle de site

Pour personnaliser votre modèle de site, accédez simplement à son panneau Dashboard et effectuez les modifications nécessaires. Vous pouvez créer de nouveaux articles, pages, activer des plugins et changer le thème actif. Vous pouvez même accéder à l’outil de personnalisation et modifier toutes sortes d’options de personnalisation.

![Interface de modification du modèle de site](/img/config/site-template-edit.png)

Toutes ces données seront copiées lorsqu’un client créera un nouveau site basé sur ce modèle de site.

### Options avancées

Si vous êtes à l’aise avec un peu de code personnalisé, vous pouvez utiliser notre API de recherche et remplacement pour remplacer automatiquement des informations sur le nouveau site après sa création. C’est utile pour des choses comme remplacer les noms d’entreprise sur une page À propos, remplacer l’e-mail de contact sur la page Contact, etc.

### Utilisation des modèles de site

D’accord, vous avez donc créé plusieurs modèles de site différents avec différents designs, thèmes et réglages. Comment les rendre utiles sur votre réseau maintenant ?

En gros, vous pouvez désormais utiliser deux approches (pas simultanément) :

  * Associer un modèle de site à chacune de vos offres

**OU**

  * Permettre à vos clients de choisir eux-mêmes les modèles de site lors de l’inscription.

#### Mode 1 : Attribuer un modèle de site

Dans ce mode, vos clients ne pourront pas choisir un modèle lorsqu’ils créent un Account ; c’est vous qui définirez plutôt quel modèle doit être utilisé pour chacune de vos offres.

Pour cela, vous devrez aller dans **Ultimate Multisite > Produits > Modifier**.

![Modifier le produit pour attribuer un modèle de site](/img/config/product-site-templates.png)

Cela vous mènera à la page **Modifier le produit**. Dans la section **Options du produit**, trouvez l’onglet **Modèle de site** et sélectionnez l’option **Attribuer un modèle de site** dans le champ déroulant. Cela affichera la liste des modèles de site disponibles et vous permettra de sélectionner un seul modèle de site dédié au produit.

![Onglet modèle de site du produit avec l’option attribuer un modèle de site](/img/config/product-site-templates.png)

#### Mode 2 : Choisir un modèle de site disponible

Dans ce mode, vous donnerez le choix à vos clients pendant le processus d’inscription. Ils pourront choisir parmi les différents modèles de site que vous définissez dans les réglages du produit. Vous avez la possibilité de limiter les modèles de site parmi lesquels ils peuvent choisir pour le produit sélectionné. Cela vous permettra d’avoir différents ensembles de modèles de site pour chaque produit, ce qui est idéal pour mettre en avant différentes fonctions et fonctionnalités pour un produit à prix plus élevé.

Sur la page **Modifier le produit**. Dans la section **Options du produit**, trouvez l’onglet **Modèle de site** et sélectionnez l’option **Choisir un modèle de site disponible** dans le champ déroulant. Cela affichera la liste des modèles de site disponibles et vous permettra de sélectionner le modèle de site que vous souhaitez rendre disponible. Vous pouvez le faire en choisissant son comportement : **Disponible** si vous voulez que le modèle de site soit inclus dans la liste. _**Non disponible**_ si vous ne voulez pas que le modèle de site apparaisse comme option. Et **Présélectionné** si vous souhaitez que l’un des modèles de site listés soit sélectionné par défaut.

![Choisir les modèles de site disponibles avec les options de comportement](/img/config/product-site-templates.png)

### Mode par défaut : sélection du modèle de site dans le formulaire de paiement

Si vous souhaitez que tous vos modèles de site soient disponibles lors de l’inscription, ou si vous préférez peut-être ne pas effectuer le travail supplémentaire consistant à attribuer ou spécifier des modèles de site pour chaque produit que vous créez, vous pouvez simplement définir la sélection du modèle de site dans votre **Formulaire de paiement**. Pour ce faire, allez dans **Ultimate Multisite > Formulaires de paiement** et cliquez sur **Modifier** sous le formulaire que vous souhaitez configurer.

Cela affichera la page **Modifier le formulaire de paiement**. Trouvez le champ **Sélection du modèle** et cliquez sur **Modifier** dessous.

Une fenêtre modale apparaîtra. Sous le champ **Template Sites**, vous pouvez sélectionner et lister tous les modèles de site que vous souhaitez rendre disponibles lors de l’inscription. Les modèles de site que vous spécifiez ici seront disponibles quel que soit le produit sélectionné par l’utilisateur.

![Champ de sélection de modèle dans l’éditeur de formulaire de commande](/img/config/checkout-form-template-step.png)

Sur le frontend, les clients voient le sélecteur de modèle lors du checkout et peuvent choisir le design de départ pour leur nouveau site.

![Sélecteur de modèle frontend pendant l’inscription](/img/config/frontend-template-chooser.png)

### Options de modèle de site

D’autres fonctions de modèles de site sont disponibles et peuvent être activées ou désactivées dans les réglages Ultimate Multisite.

![Options de modèles de site dans les réglages Ultimate Multisite](/img/config/settings-sites-templates-section.png)

#### Autoriser le changement de modèle

Activer cette option permettra à vos clients de changer le modèle qu’ils choisissent pendant le processus d’inscription après la création de l’Account et du site. C’est utile du point de vue du client, car cela leur permet de sélectionner à nouveau un modèle s’ils découvrent plus tard que leur choix initial n’était pas le meilleur pour leurs besoins particuliers.

#### Autoriser les utilisateurs à utiliser leur site comme modèles

Comme les utilisateurs de sous-site ont passé du temps à créer et concevoir leur propre site, ils peuvent vouloir le cloner et l’utiliser comme l’un des modèles de site disponibles lors de la création d’un autre sous-site sur votre réseau. Cette option leur permettra d’y parvenir.

#### Copier les médias lors de la duplication de modèle

Cocher cette option copiera les médias téléversés sur le site modèle vers le site nouvellement créé. Cela peut être remplacé dans chacun des plans.

#### **Empêcher les moteurs de recherche d’indexer les modèles de site**

Les modèles de site, comme indiqué dans cet article, sont des structures de base, mais font toujours partie de votre réseau, ce qui signifie qu’ils restent disponibles pour les moteurs de recherche. Cette option vous permettra de masquer les modèles de site afin que les moteurs de recherche puissent les indexer.

## Préremplir les modèles de site avec une recherche-et-remplacement automatique

L’une des fonctionnalités les plus puissantes de Ultimate Multisite est la possibilité d’ajouter des champs arbitraires de texte, de couleur et de sélection au formulaire d’inscription. Une fois ces données collectées, nous pouvons les utiliser pour préremplir le contenu de certaines parties du modèle de site sélectionné. Ensuite, lorsque le nouveau site est publié, Ultimate Multisite remplacera les espaces réservés par les informations réelles saisies lors de l’inscription.

Par exemple, si vous souhaitez obtenir le nom de l’entreprise de votre utilisateur final lors de l’inscription et placer automatiquement le nom de l’entreprise sur la page d’accueil. Sur la page d’accueil de votre site modèle, vous devez ajouter les espaces réservés, comme dans l’image ci-dessous (les espaces réservés doivent être ajoutés entourés de doubles accolades - {{placeholder_name}}).

![Page d’accueil avec texte d’espace réservé entre accolades](/img/config/site-templates-list.png)

Ensuite, vous pouvez simplement ajouter un champ d’inscription correspondant sur votre formulaire de checkout pour collecter ces données. Le même éditeur de formulaire de checkout utilisé pour la sélection du modèle vous permet de placer des champs personnalisés à côté du sélecteur de modèle :

![Sélection de modèle et champs d’inscription dans l’éditeur de formulaire de commande](/img/config/checkout-form-template-step.png)

Votre client pourra ensuite remplir ce champ lors de l’inscription.

![Formulaire de checkout frontend avec sélecteur de modèle](/img/config/frontend-template-chooser.png)

Ultimate Multisite remplacera ensuite automatiquement les espaces réservés par les données fournies par le client.

![Espaces réservés remplacés par les données du client sur le site](/img/config/site-templates-list.png)

### Résoudre le problème du « modèle rempli d’espaces réservés »

Tout cela est très bien, mais nous rencontrons un problème peu esthétique : nos modèles de site — que nos clients peuvent visiter — sont maintenant remplis d’espaces réservés peu attrayants qui ne disent pas grand-chose.

Pour résoudre cela, nous proposons l’option de définir de fausses valeurs pour les espaces réservés, et nous utilisons ces valeurs pour rechercher et remplacer leur contenu sur les sites modèles pendant que vos clients les visitent.

Vous pouvez accéder à l’éditeur des espaces réservés de modèle en allant dans **Ultimate Multisite > Settings > Sites**, puis, dans la barre latérale, en cliquant sur le lien **Edit Placeholders**.

![Réglages de modèle de site dans la page des réglages Sites](/img/config/settings-sites-templates-section.png)

Cela vous mènera à l’éditeur de contenu des espaces réservés, où vous pouvez ajouter des espaces réservés et leur contenu respectif.

![Point d’entrée de l’éditeur de contenu des espaces réservés de modèle](/img/config/settings-sites-templates-section.png)

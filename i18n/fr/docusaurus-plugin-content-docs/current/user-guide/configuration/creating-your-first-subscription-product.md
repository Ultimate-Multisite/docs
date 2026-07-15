---
title: Création de votre premier produit d’abonnement
sidebar_position: 6
_i18n_hash: a4a36ed896f6691eebb099208a746cd7
---
# Créer votre premier produit d’abonnement (v2)

_**NOTE IMPORTANTE : cet article est uniquement destiné aux utilisateurs d’Ultimate Multisite version 2.x. Si vous utilisez la version 1.x,**_ **_**consultez cet article**_**.

Pour commencer à exploiter votre réseau et à vendre vos services à des utilisateurs potentiels, vous devez disposer de différentes options d’abonnement. Comment créer ces produits ? Quels types de produits pouvez-vous proposer ? Dans cet article, nous couvrirons tout ce que vous devez savoir sur les produits.

## Type de produit {#product-type}

Avec Ultimate Multisite, vous pouvez proposer deux catégories de produits à vos clients : **plans** et **modules complémentaires** **(Order Bump)**. Les modules complémentaires peuvent être divisés en deux types :**packages** et **services**. Nous verrons ensuite leurs différences et particularités.

  * **Plans** : le produit fondamental d’Ultimate Multisite. Votre client ne peut avoir une adhésion que si elle est rattachée à un plan. Un plan fournit à vos clients un ou plusieurs sites (cela dépend des configurations de votre plan) avec les limitations que vous définissez sur la page de modification de votre produit.

  * **Packages** : modules complémentaires qui ont un impact direct sur les fonctionnalités des plans Ultimate Multisite. Ils modifient les limitations ou ajoutent de nouvelles ressources, plugins ou thèmes au plan original acheté par votre client. Par exemple, un plan de base peut autoriser 1 000 visites par mois et vous pouvez proposer un package qui étend ce nombre à 10 000.

  * **Services :** modules complémentaires qui ne modifient pas les fonctionnalités d’Ultimate Multisite. Ce sont des tâches que vous réaliserez pour votre client en plus du plan qu’il a acheté. Par exemple, votre client peut acheter un plan qui permet un seul site et payer également un service supplémentaire qui réalisera le design de ce site.

## Gérer les produits {#managing-products}

Pour beaucoup, l’onglet **Products** dans Ultimate Multisite **(Ultimate Multisite > Products)** peut être assimilé aux plans dans un environnement d’hébergement traditionnel.

Dans Ultimate Multisite, l’onglet Products définit la structure et les limitations applicables à un produit ou service spécifique. Ces structures s’étendent à la description du produit ou du service, au prix, aux taxes et aux autorisations.

Cette section vous guidera dans la compréhension de cette pierre angulaire essentielle d’Ultimate Multisite.

![Page de liste des produits](/img/config/products-list.png)

## Ajouter des produits {#adding-products}

Qu’il s’agisse d’un plan, d’un package ou d’un service, le point d’entrée pour définir un nouvel élément se fait via **Ultimate Multisite > Products > Add Product**.

![Bouton Add Product](/img/config/product-add-button.png)

L’interface contient deux sections principales. À gauche se trouvent plusieurs onglets qui aident à définir le produit et, à droite, quelques sections permettant de définir le prix de base du produit, son état actif et l’image du produit.

![Vue d’ensemble de la page de modification du produit](/img/config/product-edit-full.png)

### Description {#description}

Les informations de base du produit peuvent être définies en fournissant un nom de produit et une description. Ces identifiants sont affichés partout où les informations du produit sont requises, comme la sélection du plan et des tarifs, les factures, les mises à niveau, etc.

![Section de description du produit](/img/config/product-description.png)

### Type de tarification {#pricing-type}

Sur le côté droit de l’interface, la tarification de base peut être définie.

![Section de tarification et d’enregistrement](/img/config/product-pricing-save.png)

Ultimate Multisite prend en charge trois types de tarification différents. L’option **paid** invite l’administrateur du réseau à fournir des informations concernant le prix du produit et la fréquence de facturation.

### Tarification {#pricing}

Le composant de prix définit le prix de base du produit et l’intervalle de facturation.

![Section de tarification et d’enregistrement](/img/config/product-pricing-save.png)

ainsi, un exemple de prix de 29,99 $ avec un réglage de 1 mois facturera 29,99 $ chaque mois. De même, un prix de 89,97 $ avec un réglage de 3 mois facturera ce montant chaque trimestre.

### Cycles de facturation {#billing-cycles}

La section des cycles de facturation précise la fréquence de l’intervalle de facturation susmentionné et est généralement comprise à la lumière de contrats ou de durées fixes.

![Section de tarification et d’enregistrement](/img/config/product-pricing-save.png)

Par exemple, un prix de produit de 29,99 $ avec un intervalle de 1 mois et 12 cycles de facturation facturerait 29,99 $ par mois pour le produit pendant les 12 mois suivants. En d’autres termes, un tel réglage établirait une durée à prix fixe de 29,99 $ par mois pendant 12 mois, puis cesserait la facturation.

### Période d’essai {#trial-period}

L’activation du bouton de l’offre d’essai permet à l’administrateur du réseau de définir une période d’essai pour le produit.

![Section de tarification et d’enregistrement](/img/config/product-pricing-save.png)

Pendant la période d’essai, les clients peuvent utiliser librement le produit et ne seront pas facturés tant que la période d’essai ne sera pas terminée.

### Frais de configuration {#setup-fee}

Vous pouvez également appliquer des frais de configuration à votre plan.

![Section de tarification et d’enregistrement](/img/config/product-pricing-save.png)

Cela signifie que votre client paiera un montant supplémentaire lors du premier prélèvement (en plus du prix du plan) correspondant aux frais que vous avez définis dans cette section.

### Actif {#active}

Le bouton actif définit effectivement si le produit est disponible pour les clients lors de nouvelles inscriptions.

![Bouton actif](/img/config/product-active.png)

S’il existe des clients actuels sur ce plan, définir le bouton sur son état désactivé maintient effectivement le plan pour les clients existants tout en le retirant des futures inscriptions. **Les clients existants sur le plan continueront à être facturés** jusqu’à ce qu’ils soient transférés vers un nouveau plan ou retirés du plan.

### Image du produit {#product-image}

Le bouton **Upload Image** permet à l’administrateur du réseau d’utiliser la médiathèque pour sélectionner ou téléverser une image de produit.

![Section de l’image du produit](/img/config/product-image.png)

### Supprimer {#delete}

Le bouton **Delete Product** supprime le produit du système. Il apparaît une fois le produit publié.

![Section de suppression du produit](/img/config/product-delete.png)

Contrairement aux autres suppressions, le produit n’est placé dans aucun état de corbeille. Ainsi, une fois supprimée, l’action est irréversible.

### Options du produit {#product-options}

Une fois les informations produit de base définies, les options du produit aident l’administrateur réseau à définir plus précisément les attributs spécifiques du produit.

#### Général {#general}

L’onglet **Général** définit les attributs généraux du produit qui ne s’appliquent à aucun des autres onglets spécifiques au produit.

![Onglet Général](/img/config/product-general-tab.png)

Le **slug du produit**, explicite, définit le slug avec lequel le produit est identifié dans les URL et d’autres zones de Ultimate Multisite.

Ultimate Multisite prend en charge plusieurs types de produits, à savoir Plan, Package et Service. Les onglets **Options du produit** sont ajustés dynamiquement selon le type de produit spécifié.

Le **Rôle du client** spécifie le rôle attribué au client lorsque le site est créé. Généralement, pour la plupart des administrateurs réseau, il s’agira de la valeur par défaut de Ultimate Multisite ou de Administrator. Le rôle par défaut de Ultimate Multisite peut être défini dans **Ultimate Multisite > Settings > Login & Registration**.

![Paramètres du rôle du client](/img/config/product-customer-role-settings.png)

#### Montées et descentes en gamme {#up--downgrades}

Cet onglet spécifie les chemins de montée et de descente en gamme disponibles pour un client au sein de son niveau spécifique.

Pour comprendre ce concept, prenons un exemple où une installation Ultimate Multisite de niche fournit des solutions de gestion de l’apprentissage à ses clients. Pour y parvenir, trois plans (Basic, Plus et Premium) sont définis et des plugins spécifiques sont activés pour chaque plan (voir plus loin dans cette section les instructions sur l’activation des plugins).

Si l’installation Ultimate Multisite dessert également des sites web d’entreprise ou des sites web eCommerce, ces plans peuvent nécessiter l’installation et l’activation de plugins différents.

À cet égard, il serait indésirable et problématique d’autoriser les clients eLearning à passer à des plans eCommerce, car ces plans, tarifs et limitations peuvent ne pas être adaptés.

Ainsi, pour restreindre le parcours du client et éviter les incidents, l’administrateur réseau peut définir un groupe de plans et, au sein de ce groupe, spécifier les plans vers lesquels le client peut passer.

![Onglet Montées et descentes en gamme](/img/config/product-upgrades.png)

Pour définir un groupe de plans, spécifiez les plans compatibles dans la liste **groupe de plans**. L’**ordre du produit** détermine la manière dont les plans sont ordonnés et affichés, du plus bas au plus élevé.

Ultimate Multisite inclut également une fonctionnalité **order bump** permettant d’ajouter aux plans des produits et services complémentaires appropriés. Ceux-ci sont proposés au client comme éléments supplémentaires pouvant être ajoutés aux plans lors du checkout ou pendant une montée en gamme.

#### Variations de prix {#price-variations}

Les variations de prix permettent à l’administrateur réseau de spécifier des niveaux de tarification alternatifs selon la durée. Ce paramètre permet de proposer une période de facturation mensuelle, trimestrielle, annuelle ou toute autre période de facturation pour le même produit. Par exemple, vous pouvez configurer un produit à 29,99 $/mois avec une option annuelle à prix réduit à 249,99 $/an.

![Onglet Variations de prix](/img/config/product-price-variations-tab.png)

Pour établir des variations de prix, activez le bouton **Activer les variations de prix** et cliquez sur le bouton **Ajouter une nouvelle variation de prix**.

![Variations de prix du produit](/img/config/product-price-variations.png)

Pour saisir une variation, définissez la durée, la période et le prix de la variation. Des variations supplémentaires peuvent être saisies en cliquant de nouveau sur le bouton.

Par exemple, si le prix de base de votre produit est de 29,99 $ par mois, vous pourriez ajouter :

  * **3 mois** à 79,99 $ (une petite remise par rapport au mensuel)
  * **1 an** à 249,99 $ (une remise importante pour un engagement annuel)

:::tip Affichage d’un bouton de bascule de période de facturation sur le frontend

Les variations de prix seules n’ajoutent pas de bouton de bascule ni de commutateur au checkout frontend. Pour permettre aux clients de passer d’une période de facturation à une autre (par exemple Mensuel / Annuel), vous devez ajouter un champ **Sélection de période** à votre formulaire de checkout. Consultez [Formulaires de checkout : ajouter un bouton de bascule de sélection de période](checkout-forms#adding-a-period-selection-toggle) pour des instructions étape par étape.
:::

#### Taxes {#taxes}

L’onglet **Taxes** s’aligne sur les paramètres de taxes spécifiés dans **Ultimate Multisite > Settings > Taxes** et, plus précisément, sur les taux de taxe définis. Pour activer les taxes et définir les taux de taxe applicables, veuillez consulter la documentation dans **Ultimate Multisite: Settings**

![Onglet Taxes](/img/config/product-taxes.png)

Dans un exemple précédent, nous avons défini un taux de taxe local de 7,25 % applicable aux clients en Californie (États-Unis d’Amérique).

Une fois le taux de taxe défini dans **Ultimate Multisite > Settings > Manage Tax Rates**, il peut être sélectionné au niveau du produit.

![Onglet Taxes](/img/config/product-taxes.png)

Pour indiquer qu’un produit est un article taxable, activez le bouton **Est taxable** et sélectionnez le taux de taxe applicable dans la liste déroulante Tax Category.

#### Modèles de site {#site-templates}

En substance, les modèles de site sont des sites web WordPress complets qui sont clonés vers le site d’un client au début de son abonnement.

![Onglet Modèles de site](/img/config/product-site-templates.png)

L’administrateur réseau crée et configure le site modèle comme un site WordPress classique, avec des thèmes, plugins et contenus activés et configurés. Le site modèle est cloné tel quel pour le client.

Cet onglet permet à l’administrateur réseau de spécifier le comportement des modèles de site lors d’un nouvel abonnement. Pour utiliser des modèles de site avec ce plan, activez le bouton **Autoriser les modèles de site**.

Lorsque **Autoriser les modèles de site** est désactivé, les clients du plan ne peuvent pas choisir de modèles, même si un formulaire de checkout, un lien partageable ou un paramètre d’URL rendrait autrement les modèles disponibles. Ultimate Multisite applique désormais cette limite au moyen d’une chaîne de fallback sur les points d’entrée disponibles : les paramètres du plan sont vérifiés en premier, puis les paramètres de modèles du formulaire de checkout, puis les modèles présélectionnés ou fournis par l’URL. Cela garantit la cohérence des limites du plan et empêche les modèles d’apparaître pour les produits qui ne devraient pas les proposer.

Le **mode de sélection du modèle de site** définit le comportement des modèles de site pendant le processus d’abonnement.

Le paramètre **D** **éfaut** suit les étapes du formulaire de paiement. Si l’administrateur du réseau a défini une étape de sélection de modèle dans le processus de paiement et que l’étape a été définie avec des modèles, ce paramètre respectera les directives établies dans l’étape de paiement.

Spécifier **A** **ssign Site Template** force la sélection du modèle spécifié. Par conséquent, toutes les étapes de sélection de modèle dans le processus de paiement sont supprimées.

Enfin, **C** **hoose Available Site Templates** remplace les modèles spécifiés dans l’étape de paiement par les modèles sélectionnés dans ce paramètre. Un modèle présélectionné peut également être défini pour aider le client dans sa sélection.

En définitive, si l’administrateur du réseau souhaite que la sélection de modèle ait lieu dans les étapes de paiement, le paramètre « _default_ » suffira. Sinon, pour supprimer et verrouiller la sélection de modèle et déléguer la sélection aux paramètres du plan, les options « _assign new template_ » ou « _choose available site templates_ » peuvent être souhaitables.

#### Sites {#sites}

L’onglet **Sites** fait partie de la fonctionnalité de limitations d’Ultimate Multisite.

![Onglet Sites](/img/config/product-sites.png)

Ce paramètre précise le nombre maximal de sites qu’un client peut créer dans le cadre de son adhésion.

Pour activer la limitation, mettez le bouton bascule **limit sites** dans son état actif et indiquez le nombre maximal de sites dans le champ **site allowance**.

#### Visites {#visits}

L’onglet **Visits** est une autre partie du système de limitations d’Ultimate Multisite. Ce paramètre permet de comptabiliser puis de limiter les visiteurs uniques du site d’un client.

![Onglet Visits](/img/config/product-visits.png)

D’un point de vue marketing, les administrateurs du réseau peuvent utiliser ce paramètre comme moyen d’encourager les clients à mettre à niveau leur plan une fois les limites atteintes. Ce paramètre peut également aider l’administrateur du réseau à réduire et à prévenir un trafic excessif vers les sites afin de préserver les ressources du système.

Pour utiliser cette fonctionnalité, mettez le bouton bascule **limit unique visits** dans son état actif et indiquez le nombre maximal de visiteurs uniques dans le champ **unique visits quota**.

Une fois cette limite atteinte, Ultimate Multisite cessera de servir le site du client au lieu d’afficher un message indiquant que les limites ont été dépassées.

#### Utilisateurs {#users}

Les limitations « Users » d’Ultimate Multisite permettent à l’administrateur du réseau d’imposer des limites au nombre d’utilisateurs qui peuvent être créés et attribués à des rôles.

![Onglet Users](/img/config/product-users.png)

Pour activer la fonctionnalité de limitations, mettez le bouton bascule **limit user** dans son état actif en le faisant glisser vers la droite.

Ensuite, pour chaque rôle à limiter, mettez le bouton bascule situé à côté dans un état actif et définissez la limite supérieure maximale dans le champ approprié.

#### Types de publication {#post-types}

L’onglet **Post Types** permet à l’administrateur du réseau d’imposer des limites granulaires à la vaste gamme de types de publication dans WordPress.

![Onglet Post Types](/img/config/product-post-types.png)

En raison de la structure de WordPress, les publications et les types de publication constituent un composant important de ses fonctionnalités de base ; ainsi, le système de limitations d’Ultimate Multisite est conçu pour aider l’administrateur du réseau à établir et maintenir des limites.

Pour activer ce sous-système de limites, mettez le bouton bascule **limit post types** dans son état actif en le faisant glisser vers la droite.

Ensuite, pour chaque type de publication à limiter, activez-le en le faisant glisser vers la droite et en spécifiant la limite supérieure maximale dans le champ approprié.

#### Espace disque {#disk-space}

L’onglet **Disk Space** permet aux administrateurs du réseau de restreindre l’espace consommé par les clients.

![Onglet Disk Space](/img/config/product-disk-space.png)

Généralement, dans un multisite WordPress, les fichiers principaux sont partagés entre tous les sites et des répertoires individuels sont créés pour les fichiers multimédias et les téléversements auxquels ces paramètres et limitations s’appliquent.

Pour activer la limitation de l’utilisation du disque, mettez le bouton bascule **limit disk size per site** dans son état actif en le faisant glisser vers la droite.

Ensuite, spécifiez la limite supérieure maximale en mégaoctets dans le champ **disk space allowanc** e.

#### Domaine personnalisé {#custom-domain}

En activant cette option, vous pouvez autoriser les domaines personnalisés spécifiquement sur ce plan.

![Onglet Custom Domains](/img/config/product-custom-domains.png)

#### Thèmes {#themes}

L’onglet **Themes** dans les options du produit permet à l’administrateur du réseau de rendre des thèmes disponibles pour la sélection par les clients et, facultativement, de forcer l’état du thème.

![Onglet Themes](/img/config/product-themes.png)

_**Remarque : Pour que les thèmes soient mis à disposition des clients, ils doivent être activés sur le réseau par l’administrateur du réseau.**_

![Page des thèmes du réseau](/img/config/product-themes-network-enabled.png)

L’option **visibility** définit si ce thème est visible ou non pour le client lorsqu’il consulte l’onglet **Appearance > Themes** dans son site. Définir cette option sur **Hidden** retire le thème de la vue et limite donc la possibilité de le sélectionner et de l’activer.

![Onglet Themes](/img/config/product-themes.png)

La sélection **behavior** permet à l’administrateur du réseau de définir l’état du thème lors de la création du site client.

Dans l’état **A** **vailable**, le thème est mis à la disposition du client pour une activation autonome. À l’inverse, l’état **Not Available** retire au client la possibilité d’activer le thème. Enfin, l’option **Force Activate** force la sélection et l’activation du thème, le définissant ainsi comme thème par défaut lors de la création du site.

#### Plugins {#plugins}

Comme pour l’onglet Themes, Ultimate Multisite permet à l’administrateur du réseau de définir la visibilité des plugins pour les clients ainsi que leur état lors de la création d’un nouveau site.

![Onglet Plugins](/img/config/product-plugins.png)

Le menu déroulant **visibility** permet au plugin d’être visible ou masqué pour le client lorsqu’il est consulté sur son site via l’option de menu Plugins.

L’administrateur réseau peut manipuler davantage le comportement des plugins en utilisant les options du menu déroulant de comportement.

![Onglet Plugins](/img/config/product-plugins.png)

La sélection **Default** respecte l’état du plugin défini dans le modèle de site sélectionné par le client. Ainsi, les plugins qui sont activés dans le modèle resteront activés lorsque le modèle sera cloné vers le site du client.

**Force Activate** place le plugin dans un état actif lors de la création du site et, inversement, **Force Inactivate** désactive le plugin lors de la création du site. Dans ces deux cas, l’état du plugin peut être modifié manuellement par le client via son menu WordPress Plugins.

Le réglage **Force Activate & Lock** fonctionne de manière similaire, mais empêche l’état du plugin d’être modifié par le client. Ainsi, un réglage Force Activate and Lock forcera le plugin dans son état actif et empêchera le client de le désactiver. De même, le réglage **Force Inactivate & Lock** forcera le plugin dans son état inactif et empêchera l’utilisateur d’activer le plugin.

L’administrateur réseau peut souhaiter envisager les réglages Force Activate & Lock et Force Inactivate & Lock conjointement avec les modèles de site, car les plugins et les états de plugin dans les modèles peuvent être affectés par ces réglages s’ils sont sélectionnés.

#### Réinitialiser les limitations {#reset-limitations}

L’onglet **Reset Limitations** réinitialise toutes les limites personnalisées définies sur le produit. Pour réinitialiser les limitations, cliquez sur le bouton **reset limitations**.

![Onglet Reset Limitations](/img/config/product-reset-limitations.png)

Pour confirmer l’action, faites glisser le bouton bascule **confirm reset** vers son état actif à droite et cliquez sur le bouton **reset limitations**.

![Onglet Reset Limitations](/img/config/product-reset-limitations.png)

## Modifier, dupliquer ou supprimer un produit {#edit-duplicate-or-delete-product}

Les produits existants peuvent être modifiés, dupliqués ou supprimés en accédant à **Ultimate Multisite > Products** et en survolant le nom du produit existant.

![Actions au survol du produit](/img/config/product-hover-actions.png)

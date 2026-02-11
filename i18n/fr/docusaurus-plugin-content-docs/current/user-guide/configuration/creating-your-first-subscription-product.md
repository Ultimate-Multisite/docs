---
title: Créer votre premier produit d'abonnement
sidebar_position: 6
_i18n_hash: 0df17700c38413389d0678786906ad26
---
# Créer votre premier produit d'abonnement (v2)

_**NOTE IMPORTANTE : Cet article est uniquement destiné aux utilisateurs d'Ultimate Multisite version 2.x. Si vous utilisez la version 1.x,**_ **_**voir cet article**_**.

Pour commencer à faire fonctionner votre réseau et à vendre vos services aux utilisateurs potentiels, vous devez disposer de différentes options d'abonnement. Comment créer ces produits ? Quels sont les types de produits que vous pouvez proposer ? Dans cet article, nous aborderons tout ce que vous devez savoir sur les produits.

## Type de produit

Avec Ultimate Multisite, vous pouvez proposer deux catégories de produits à vos clients : **plans** et **add-ons** **(Order Bump)**. Les add-ons peuvent être divisés en deux types : **packages** et **services**. Nous verrons leurs différences et particularités ci-après.

  * **Plans** : le produit fondamental d'Ultimate Multisite. Votre client ne peut avoir un abonnement que s'il est lié à un plan. Un plan fournit à vos clients un ou plusieurs sites (cela dépend des configurations de votre plan) avec les limitations que vous définissez sur la page d'édition du produit.

  * **Packages** : add-ons qui impactent directement les fonctionnalités des plans d'Ultimate Multisite. Ils modifient les limitations ou ajoutent de nouvelles ressources, plugins ou thèmes au plan original que votre client a acheté. Par exemple, un plan de base peut autoriser 1 000 visites par mois et vous pouvez proposer un package qui étend ce nombre à 10 000.

  * **Services** : add-ons qui n'altèrent pas les fonctionnalités d'Ultimate Multisite. Ce sont des tâches que vous réaliserez pour votre client en plus du plan qu'il a acheté. Par exemple, votre client peut acheter un plan qui autorise un seul site et payer également un service supplémentaire qui créera la conception de ce site.

## Gestion des produits

Pour beaucoup, l'onglet **Products** dans Ultimate Multisite **(Ultimate Multisite > Products)** peut être assimilé aux plans dans un environnement d'hébergement traditionnel.

Dans Ultimate Multisite, l'onglet Products définit le cadre et les limitations applicables à un produit ou service spécifique. Ces cadres s'étendent à la description du produit ou service, au prix, aux taxes et aux autorisations.

Cette section vous guidera dans la compréhension de cette pierre angulaire essentielle d'Ultimate Multisite.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-1YccQg0IBG.png)

## Ajout de produits

Qu'il s'agisse d'un plan, d'un package ou d'un service, le point d'entrée pour définir un nouvel élément est via **Ultimate Multisite > Products > Add Product**.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-C0AmJMeqen.png)

L'interface contient deux sections prédominantes. À gauche se trouvent plusieurs onglets qui aident à définir le produit et à droite quelques sections pour définir le prix de base du produit, son état actif et l'image du produit.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-WRwYrlk0BS.png)

### Description

Les informations de base du produit peuvent être définies en fournissant un nom et une description du produit. Ces identifiants sont affichés partout où les informations du produit sont requises, telles que la sélection de plan et de tarification, les factures, les mises à niveau, etc.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-U9YjF0dghJ.png)

### Type de tarification

Du côté droit de l'interface, le prix de base peut être défini.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-oHwhlrBFC9.png)

Ultimate Multisite prend en charge trois types de tarification différents. L'option **paid** demande à l'administrateur réseau des informations concernant le prix du produit et la fréquence de facturation.

### Tarification

Le composant de prix définit le prix de base du produit et l'intervalle de facturation.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-T03WJISsoh.png)

Ainsi, un prix d'exemple de 29,99 $ avec un réglage de 1 mois facturera 29,99 $ chaque mois. De même, un prix de 89,97 $ avec un réglage de 3 mois facturera ce montant chaque trimestre.

### Cycles de facturation

La section des cycles de facturation précise la fréquence de l'intervalle de facturation mentionné ci-dessus et est généralement comprise dans le cadre de contrats ou de termes fixes.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-hVVAoxC4Jt.png)

Par exemple, un prix de produit de 29,99 $ avec un intervalle de 1 mois et 12 cycles de facturation facturera 29,99 $ par mois pour le produit pendant les 12 mois suivants. En d'autres termes, un tel réglage établirait un terme à prix fixe de 29,99 $ par mois pendant 12 mois, puis arrêterait la facturation.

### Période d'essai

Activer le bascule d'offre d'essai permet à l'administrateur réseau de définir une période d'essai pour le produit.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-MzxhWHqJLC.png)

Pendant la période d'essai, les clients peuvent utiliser le produit gratuitement et ne seront pas facturés tant que la période d'essai n'a pas été épuisée.

### Frais d'installation

Vous pouvez également appliquer des frais d'installation à votre plan.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-8ZA2YvhWyK.png)

Cela signifie que votre client paiera un montant supplémentaire lors de la première charge (en plus du prix du plan) correspondant aux frais que vous avez définis dans cette section.

### Actif

Le commutateur actif définit effectivement si le produit est disponible pour les clients pour de nouvelles inscriptions.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-74ET2mPskK.png)

S'il y a des clients existants sur ce plan, régler le commutateur sur son état désactivé revient à grandfather le plan, le retirant des inscriptions futures. **Les clients existants sur le plan continueront d'être facturés** jusqu'à ce qu'ils soient transférés vers un nouveau plan ou retirés du plan.

### Image du produit

Le bouton **Upload Image** permet à l'administrateur réseau d'utiliser la bibliothèque multimédia pour sélectionner ou télécharger une image de produit.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-9tHhGvokLA.png)

### Supprimer

Le bouton **Delete Product** supprime le produit du système. Il apparaît une fois le produit publié.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-rrmQohvw3S.png)

Contrairement à d'autres suppressions, le produit n'est pas placé dans un état de corbeille. Ainsi, une fois supprimé, l'action est irréversible.

### Options de produit

Une fois les informations de base du produit définies, les options de produit aident l'administrateur réseau à définir davantage les attributs spécifiques du produit.

#### Général

L'onglet **General** définit les attributs généraux du produit qui ne sont pas applicables aux autres onglets spécifiques au produit.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-z32g4XQeyT.png)

Le **product slug** auto-explicatif définit le slug avec lequel le produit est identifié dans les URL et d'autres zones d'Ultimate Multisite.

Ultimate Multisite prend en charge plusieurs types de produit, à savoir Plan, Package et Service. Les onglets **Product Options** sont ajustés dynamiquement en fonction du type de produit spécifié.

Le **Customer Role** spécifie le rôle qui est attribué au client lors de la création du site. En général, pour la plupart des administrateurs réseau, il s'agira du rôle par défaut d'Ultimate Multisite ou d'Administrateur. Le rôle par défaut d'Ultimate Multisite peut être défini dans **Ultimate Multisite > Settings > Login & Registration**.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-Ap5I4lXWwB.png)

#### Up & Downgrades

Cet onglet spécifie les chemins de mise à niveau et de rétrogradation disponibles pour un client dans son niveau spécifique.

Pour comprendre ce concept, envisagez un exemple où une installation niche d'Ultimate Multisite fournit des solutions de gestion de l'apprentissage à ses clients. Pour ce faire, trois plans (Basic, Plus et Premium) sont définis et des plugins spécifiques sont activés pour chaque plan (voir plus tard dans cette section pour les instructions sur la façon d'activer les plugins).

Si l'installation Ultimate Multisite propose également des sites Web d'entreprise ou de commerce électronique, ces plans peuvent nécessiter l'installation et l'activation de plugins différents.

Dans cette mesure, il serait indésirable et problématique de permettre aux clients eLearning de passer aux plans eCommerce, car ces plans, leurs prix et leurs limitations peuvent ne pas être adaptés.

Ainsi, pour restreindre le chemin du client et prévenir les incidents, l'administrateur réseau peut définir un groupe de plans et, au sein de ce groupe, spécifier les plans vers lesquels le client peut passer.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-JnrZ4fWFEC.png)

Pour définir un groupe de plans, spécifiez les plans compatibles dans la liste **plan group**. Le **product order** détermine comment les plans sont ordonnés et affichés du plus bas au plus élevé.

Ultimate Multisite inclut également une fonction **order bump** où des produits et services add-on appropriés peuvent être ajoutés aux plans. Ceux-ci sont offerts au client comme éléments supplémentaires pouvant être ajoutés aux plans lors du paiement ou lors d'une mise à niveau.

#### Variations de prix

Les variations de prix permettent à l'administrateur réseau de spécifier des niveaux de tarification alternatifs en fonction de la durée. Ce paramètre permet d'établir des niveaux de tarification de 3 mois, 6 mois ou annuels, ou toute autre durée et fréquence déterminées par le cas d'utilisation.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-d75YUO3opm.png)

Pour établir des variations de prix, activez le commutateur **enable price variations** et cliquez sur le bouton **Add new Price Variation**.

Pour saisir une variation, définissez la durée, la période et le prix de la variation. Des variations supplémentaires peuvent être saisies en cliquant à nouveau sur le bouton.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-x73uxkMU8o.png)

#### Taxes

L'onglet **Taxes** s'aligne sur les paramètres fiscaux spécifiés dans **Ultimate Multisite > Settings > Taxes** et plus précisément sur les taux d'imposition définis. Pour activer les taxes et définir les taux d'imposition applicables, veuillez consulter la documentation à **Ultimate Multisite: Settings**

**![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-xYLtpFySzL.png)**

Dans un exemple précédent, nous avons défini un taux d'imposition local de 7,25 % applicable aux clients de Californie (États-Unis d'Amérique).

Une fois le taux d'imposition défini dans **Ultimate Multisite > Settings > Manage Tax Rates**, il est sélectionnable au niveau du produit.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-Sh1BVGVj6i.png)

Pour indiquer qu'un produit est un article taxable, activez le commutateur **Is Taxable** et sélectionnez le taux d'imposition applicable dans le menu déroulant Tax Category.

#### Modèles de site

En essence, les modèles de site sont des sites WordPress complets qui sont clonés sur le site d'un client au début de son abonnement.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-llMSMXCDt4.png)

L'administrateur réseau crée et configure le site modèle comme un site WordPress régulier avec des thèmes, plugins et contenus activés et configurés. Le site modèle est cloné exactement tel quel sur le site du client.

Cet onglet permet à l'administrateur réseau de spécifier le comportement des modèles de site lors d'un nouvel abonnement. Pour utiliser les modèles de site, activez le commutateur **allow site templates**.

Le **site template selection mode** définit le comportement des modèles de site pendant le processus d'abonnement.

Le réglage **D** **efault** suit les étapes du formulaire de paiement. Si l'administrateur réseau a défini une étape de sélection de modèle dans le processus de paiement et que l'étape a été définie avec des modèles, ce réglage respectera les directives établies dans l'étape de paiement.

Spécifier **A** **ssign Site Template** force la sélection du modèle spécifié. Par conséquent, toutes les étapes de sélection de modèle dans le processus de paiement sont supprimées.

Enfin, **C** **hoose Available Site Templates** remplace les modèles spécifiés dans l'étape de paiement par les modèles sélectionnés dans ce réglage. Un modèle pré-sélectionné peut également être défini pour aider le client dans le choix.

En fin de compte, si l'administrateur réseau souhaite que la sélection de modèle se produise dans les étapes de paiement, le réglage « _default_ » suffira. Sinon, pour supprimer et verrouiller la sélection de modèle et déléguer la sélection aux paramètres du plan, les options « _assign new template_ » ou « _choose available site templates_ » peuvent être souhaitables.

#### Sites

L'onglet **Sites** fait partie de la fonctionnalité de limitations d'Ultimate Multisite.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-A8fzNucGyC.png)

Ce réglage spécifie le nombre maximum de sites qu'un client peut créer dans le cadre de son abonnement.

Pour activer la limitation, activez le commutateur **limit sites** et spécifiez le nombre maximum de sites dans le champ **site allowance**.

#### Visites

L'onglet **Visits** est une autre partie du système de limitations d'Ultimate Multisite. Ce réglage permet de comptabiliser et de limiter ultérieurement les visiteurs uniques d'un site client.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-e7f5otg89m.png)

Du point de vue marketing, les administrateurs réseau peuvent utiliser ce réglage comme moyen d'encourager les clients à mettre à niveau leur plan une fois les limites atteintes. Ce réglage peut également aider l'administrateur réseau à limiter et à empêcher le trafic excessif vers les sites afin de préserver les ressources du système.

Pour utiliser cette fonctionnalité, activez le commutateur **limit unique visits** et spécifiez le nombre maximum de visiteurs uniques dans le champ **unique visits quota**.

Une fois cette limite atteinte, Ultimate Multisite cessera de servir le site du client au lieu d'afficher un message indiquant que les limites ont été dépassées.

#### Utilisateurs

Les limitations « Users » d'Ultimate Multisite permettent à l'administrateur réseau d'imposer des limites sur le nombre d'utilisateurs pouvant être créés et attribués à des rôles.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-maGYqW7WlP.png)

Pour activer la fonction de limitation, activez le commutateur **limit user** en le faisant glisser vers la droite.

Ensuite, pour chaque rôle à limiter, activez le commutateur à côté et définissez la limite supérieure maximale dans le champ approprié.

#### Types de publication

L'onglet **Post Types** permet à l'administrateur réseau d'imposer des limites granulaires sur l'ensemble des types de publication dans WordPress.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-ZELQvvqyvn.png)

En raison de la construction de WordPress, les publications et les types de publication constituent un élément important de sa fonctionnalité de base, et ainsi le système de limitations d'Ultimate Multisite est conçu pour aider l'administrateur réseau à établir et à maintenir des limites.

Pour activer ce sous-système de limites, activez le commutateur **limit post types** en le faisant glisser vers la droite.

Ensuite, pour chaque type de publication à limiter, activez-le en le faisant glisser vers la droite et en indiquant la limite supérieure maximale dans le champ approprié.

#### Espace disque

L'onglet **Disk Space** permet aux administrateurs réseau de restreindre l'espace consommé par les clients.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-EqlaLO0ebw.png)

Typiquement, dans un réseau multisite WordPress, les fichiers principaux sont partagés entre tous les sites et les répertoires individuels créés pour les fichiers multimédias et les téléchargements auxquels ces paramètres et limitations s'appliquent.

Pour activer la limitation de l'utilisation du disque, activez le commutateur **limit disk size per site** en le faisant glisser vers la droite.

Ensuite, spécifiez la limite supérieure maximale en mégaoctets dans le champ **disk space allowanc** e.

#### Domaine personnalisé

En activant cette option, vous pouvez autoriser des domaines personnalisés sur ce plan spécifiquement.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-KEMuUG76Fg.png)

#### Thèmes

L'onglet **Themes** dans les options de produit permet à l'administrateur réseau de rendre les thèmes disponibles aux clients pour sélection et d'enforcer éventuellement l'état du thème.

_**Remarque : Pour que les thèmes soient disponibles aux clients, ils doivent être activés au niveau du réseau par l'administrateur réseau.**_

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-HAQShYB7Y1.png)

L'option **visibility** définit si ce thème est visible ou non pour le client lorsqu'il consulte l'onglet **Appearance > Themes** de son site. Définir cette option sur **Hidden** supprime le thème de la vue et limite ainsi la possibilité de le sélectionner et de l'activer.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-ivsGIABl55.png)![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-jPTC92eZwc.png)

La sélection **behavior** permet à l'administrateur réseau de définir l'état du thème lors de la création du site client.

Dans l'état **A** **vailable**, le thème est rendu disponible au client pour l'auto-activation. À l'inverse, l'état **Not Available** retire la possibilité d'activer le thème. Enfin, l'option **Force Activate** force la sélection et l'activation du thème, le définissant ainsi par défaut lors de la création du site.

#### Plugins

Similaire à l'onglet Themes, Ultimate Multisite permet à l'administrateur réseau de définir la visibilité des plugins pour les clients ainsi que leur état lors de la création d'un nouveau site.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-Ipzv31FIb6.png)

Le menu déroulant **visibility** permet au plugin d'être visible ou masqué pour le client lorsqu'il est consulté sur son site via l'option Plugins du menu.

L'administrateur réseau peut également manipuler le comportement des plugins en utilisant les options du menu déroulant behavior.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-jPTC92eZwc.png)

La sélection **Default** respecte l'état du plugin défini dans le modèle de site sélectionné par le client. Ainsi, les plugins activés dans le modèle resteront activés lorsque le modèle sera cloné sur le site du client.

Le **Force Activate** place le plugin dans un état actif lors de la création du site et, à l'inverse, le **Force Inactivate** désactive le plugin lors de la création du site. Dans ces deux cas, l'état du plugin peut être modifié manuellement par le client via son menu Plugins WordPress.

Le réglage **Force Activate & Lock** fonctionne de manière similaire mais empêche l'état du plugin d'être modifié par le client. Ainsi, un réglage de Force Activate and Lock forcera le plugin dans son état actif et empêchera le client de le désactiver. De même, le réglage **Force Inactivate & Lock** forcera le plugin dans son état inactif et empêchera l'utilisateur de l'activer.

L'administrateur réseau peut souhaiter envisager les réglages Force Activate & Lock et Force Inactivate & Lock en conjonction avec les modèles de site, car les plugins et les états des plugins dans les modèles peuvent être affectés par ces réglages s'ils sont sélectionnés.

#### Réinitialiser les limitations

L'onglet **Reset Limitations** réinitialise toutes les limites personnalisées définies sur le produit. Pour réinitialiser les limitations, cliquez sur le bouton **reset limitations**.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-UXNQerLby7.png)

Pour confirmer l'action, faites glisser le commutateur **confirm reset** vers son état actif sur la droite et cliquez sur le bouton **reset limitations**.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-xKySIUIvrI.png)

#### Options héritées

L'onglet **Legacy Options** observe certaines options et comportements définis dans Ultimate Multisite 1.x.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-Fn3BjwTH4r.png)

Ces options sont proposées pour la compatibilité et la facilité de transition et seront dépréciées dans les futures versions.

## Modifier, dupliquer ou supprimer un produit

Les produits existants peuvent être modifiés, dupliqués ou supprimés en naviguant vers **Ultimate Multisite > Products** et en survolant le nom du produit existant.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-GcHtJl6WmV.png)

## 

###

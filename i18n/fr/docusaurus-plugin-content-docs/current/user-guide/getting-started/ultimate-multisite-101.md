---
title: Ultimate Multisite 101
sidebar_position: 10
_i18n_hash: 16b22d6284bfcd5dc740566431abfbf1
---
# Ultimate Multisite 101

Ultimate Multisite est un plugin WordPress Multisite qui vous permet d'offrir un WaaS ou des Sites Web en tant que Service aux clients. Avant de plonger et d'apprendre comment Ultimate Multisite peut aider votre entreprise et vos clients, il y a des connaissances fondamentales que nous devons acquérir.

## La WordPress Multisite

La plupart d'entre nous sont familiers avec l'installation standard de WordPress. Vous le créez soit via le panneau de contrôle de votre hébergeur, soit, pour les courageux, configurez un nouveau serveur web et une base de données, téléchargez les fichiers principaux et commencez le processus d'installation.

Cela fonctionne pour des millions de sites WordPress dans le monde entier, mais du point de vue d'une agence ou d'un hébergeur, discutons un instant des volumes.

Bien qu'il soit simple de créer un site WordPress ou même une centaine via un panneau de contrôle automatisé, les problèmes commencent rapidement à se manifester lorsqu'il s'agit de gérer ces sites. Sans gestion, vous êtes une cible privilégiée pour les malwares. Gérer implique un effort et des ressources, et bien qu'il existe des outils externes et des plugins pour faciliter la gestion et l'administration des sites WordPress, le fait que les clients conservent un accès administratif signifie que ces efforts peuvent facilement être contrecarrés.

Au sein de son cœur, WordPress propose une fonctionnalité simplement intitulée « Multisite » qui remonte à 2010, lors du lancement de WordPress 3.0. Depuis, elle a reçu plusieurs révisions visant à introduire de nouvelles fonctionnalités et à renforcer la sécurité.

En essence, un multisite WordPress peut être considéré comme ceci : une université maintient une seule installation de WordPress, mais chaque faculté possède son propre site WordPress.

Pour décomposer cette déclaration, examinons quelques-unes des terminologies de base présentes non seulement dans la documentation d'Ultimate Multisite mais aussi dans la communauté WordPress.

### Le Réseau

En termes de WordPress, un réseau multisite est un réseau où un certain nombre de sous-sites peuvent être gérés depuis un seul tableau de bord. Bien que la création d'un réseau multisite diffère selon les hébergeurs, le résultat final est généralement quelques directives supplémentaires dans le fichier wp-config.php pour indiquer à WordPress qu'il fonctionne en ce mode spécifique.

Il existe plusieurs différences distinctes entre un réseau multisite et une installation WordPress autonome que nous allons brièvement aborder.

#### Sous-domaine vs. Sous-répertoire

L'une des décisions les plus immédiates que vous devrez prendre est de savoir si l'installation multisite fonctionnera avec des _sous-répertoires_ ou des _sous-domaines_. Ultimate Multisite fonctionne également bien avec les deux options, mais il existe des différences architecturales entre les deux configurations.

Dans la configuration _sous-répertoire_, les sites du réseau héritent d'un chemin basé sur le nom de domaine principal. Par exemple, un site du réseau nommé « site1 » aura son URL complète sous la forme https://domain.com/site1. Dans la configuration _sous-domaine_, le site du réseau aura son propre _sous-domaine_ dérivé du nom de domaine principal. Ainsi, un site nommé « site1 » aura son URL complète sous la forme https://site1.domain.com/.

Bien que les deux options soient parfaitement valides, l'utilisation de _sous-domaines_ offre un certain nombre d'avantages, mais nécessite également plus de réflexion et de planification dans son architecture.

En termes de DNS, l'utilisation de _sous-répertoires_ présente un défi relativement simple. Comme les sites du réseau sont simplement des enfants du chemin parent, une seule entrée de nom de domaine doit exister pour le nom de domaine principal. Pour les _sous-domaines_, le défi est un peu plus complexe, nécessitant soit une entrée CNAME distincte pour chaque site du réseau, soit une entrée générique (*) dans les enregistrements DNS.

Un autre domaine de considération concerne le SSL et l'émission et l'utilisation des certificats SSL. Dans la configuration _sous-répertoire_, un seul certificat de domaine peut être utilisé, car les sites du réseau ne sont que des chemins du nom de domaine principal. Ainsi, un certificat pour domain.com fournira adéquatement le SSL pour https://domain.com/site1, https://domain.com/site2, etc.

Dans la configuration _sous-domaine_, l'utilisation d'un certificat SSL générique est l'une des options les plus courantes. Ce type de certificat SSL fournit un chiffrement pour un domaine et ses _sous-domaines_. Par conséquent, un certificat SSL générique fournira un chiffrement pour https://site1.domain.com, https://site2.domain.com et https://domain.com lui-même.

Bien que d'autres options existent, celles-ci sont souvent limitées en portée et en application et nécessitent une configuration supplémentaire et une considération quant à leur adéquation.

#### Plugins et Thèmes

Ce que WordPress donne, il le prend également, du moins du point de vue du client. Dans une installation WordPress autonome, si l'administrateur du site installe un plugin malveillant ou ne maintient pas son installation à jour, la seule victime et victime de cet acte est lui-même. Cependant, un administrateur de site qui installe un plugin malveillant sur une installation multisite crée une victime pour chaque site installé dans le réseau.

Pour cette raison, lorsqu'il est configuré en tant que multisite, WordPress retire la capacité des administrateurs de site d'installer des plugins et des thèmes et déplace cette capacité vers un nouvel administrateur réseau ou rôle « super admin ». Ce rôle privilégié peut alors décider s'il permet aux administrateurs des sites du réseau de voir ou d'accéder au menu des plugins dans leur tableau de bord et, le cas échéant, si ces autorisations s'étendent à l'_activation_ ou à la _désactivation_ des plugins.

Dans cette mesure, l'administrateur réseau est responsable de l'installation des plugins et des thèmes dans le réseau et délègue les autorisations pour utiliser ces plugins et thèmes aux sites du réseau. Les administrateurs de site ne peuvent pas installer de plugins et de thèmes ou accéder à des plugins et thèmes non attribués à leur site.

#### Utilisateurs et Administrateurs

Dans un WordPress Multisite, tous les sites du réseau partagent la même base de données et, par conséquent, les mêmes utilisateurs, rôles et capacités. La façon la plus appropriée de le concevoir est que tous les utilisateurs sont membres du réseau et non d'un site particulier.

Compte tenu de cette compréhension, il peut être indésirable de permettre la création d'utilisateurs, et pour cette raison WordPress Multisite retire cette capacité des administrateurs de site et la déplace vers l'administrateur réseau. En retour, l'administrateur réseau peut déléguer les privilèges nécessaires à un administrateur de site afin de lui permettre de créer des comptes d'utilisateurs pour son propre site.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-zg50L2qdJEphzPcgwlo_pqNiYDknE6wiJo4zQUlhQwBCtDeAef2_aTzBBMx76YvTweROsbUH4uvosFRitBj8kgatWzCi_C822oJPWr5bKpwLuoBvTIZ5M9O1nFxOepiav1FkRHNv)

Réitérant la déclaration ci-dessus, bien que les comptes d'utilisateurs semblent être liés au site, ils sont en réalité attribués au réseau et doivent donc être uniques à travers le réseau. Il peut y avoir des cas où les noms d'utilisateur ne sont pas disponibles pour l'enregistrement en raison de cette raison.

Bien que ce ne soit pas un concept étranger aux systèmes d'entreprise, cette source unique d'enregistrement et d'authentification des utilisateurs est souvent un concept difficile à comprendre pour les personnes familières avec les installations WordPress autonomes où l'administration des utilisateurs est quelque peu plus simple.

#### Médias

Lorsque les sites du réseau partagent une seule base de données dans un WordPress Multisite, ils maintiennent des chemins séparés sur le système de fichiers pour les fichiers multimédias.

L'emplacement standard de WordPress (wp-content/uploads) reste ; cependant, son chemin est modifié pour refléter l'ID unique du site du réseau. Par conséquent, les fichiers multimédias d'un site du réseau apparaissent comme wp-contents/uploads/site/[id].

#### Permaliens

Nous avons mentionné précédemment qu'il existe des avantages distincts du _sous-domaine_ par rapport à la configuration _sous-répertoire_, et voici : les chemins.

Dans une configuration _sous-répertoire_, le site principal (le premier site créé lors de l'établissement du réseau) et les sous-sites du réseau doivent partager le même chemin partant du nom de domaine. Cela peut entraîner un grand nombre de conflits.

Pour les publications, un chemin obligatoire /blog/ est ajouté au site principal afin d'éviter les conflits avec les sites du réseau. Cela signifie que les permaliens esthétiques tels que « Post name » seront présentés sous la forme domain.name/blog/post-name/

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-QUlDfXAzHqImjngoE7UsJHa6DOl6XbQWV17LYthxpxDBy-k453GE5TlJVBA6-sOootX3Fsi34sHv5nSgi1kZmlUD1iMneztCc_HQvZmXpbZEdX2a1il8GJQqxUT8aVPgW5ikR5uG)

Dans une configuration _sous-domaine_, cette action n'est pas nécessaire car chaque site du réseau bénéficie d'une séparation complète du domaine et n'a donc pas besoin de se fier à un seul chemin. Ils maintiennent plutôt leurs propres chemins distincts basés sur leur _sous-domaine_.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-2wgqTosYo3GAa3jwaBlPADbFiMbZ-kKUTuQtk0gv5pvkj81UfxnxSyA8R-jD1EZmRMBLjJFoWZJOirTSe8K9OQKeoSYeDj602XBHRrZeRFABE1sw-JERzJzEzMd7FmvrM9G1L9MP)

#### Pages statiques

Dans la configuration _sous-répertoire_, le potentiel de conflits de nommage s'étend aux pages statiques, car le site principal et les sites du réseau partagent le même chemin.

Pour éviter cela, WordPress propose un moyen de mettre sur liste noire certains noms de site afin qu'ils ne soient pas en conflit avec les noms du premier site. En général, l'administrateur réseau saisirait les chemins racine des pages du site principal.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-sqwI-k_-3krK0_ortenskDcdGrKpgOD6itvwDc2KEuGk1gZO-rqo_OF9yTqclSmQdrOBwsGPiiOc1oF6c0GMyNELJ-7gbyQNE81juSM3IvgTdWqhZ_UEVt06xJRu8Z8oyAKfLLz-)

Dans la configuration _sous-domaine_, la possibilité de conflits de nommage est atténuée par le _sous-domaine_, car il est unique au site du réseau et n'est lié d'aucune manière au site principal.

### Enregistrement

Dans les paramètres du réseau de WordPress Multisite, plusieurs nouvelles options d'enregistrement d'utilisateurs sont disponibles, permettant aux nouveaux et aux utilisateurs existants de créer des sites.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-nbH9Ka0YhI7nvo3nnKvOr_FoI_FpdAy5hz-f199CW-PV1D-tNKGawhIK_YwlUvM19TjLnhVb6Ro6J0ZpI6s2TRUaHgyGPc4qQI06eQ2O2jeMb_SaktkKwPUw3BSyaNegZYSjXMVX)

Contrairement aux installations WordPress autonomes, les sites du réseau ne conservent pas les options familières pour autoriser les inscriptions d'utilisateurs ou attribuer ces inscriptions à des rôles.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-7I21vdReE43e0Utj_KWdnuWA08ZXz7PX33rjSEjwf6T8NDiCBYbeP9GH0J36ekFNkmsXXLBYAWjQJo4vo_kWqL6hXJuFzd9RyA52zy13lT-mMsaK-JdVivUkd5SJF3UF13r2hj28)

Lorsque des comptes d'utilisateurs sont créés, ces comptes sont générés au niveau du réseau. Ainsi, au lieu d'appartenir à un site particulier, ils appartiennent au réseau. Cela présente certains avantages et inconvénients distincts.

Par exemple, supposons que votre WordPress Multisite se spécialise dans les actualités et l'information. Vous établiriez le multisite, puis créeriez des sites du réseau pour la finance, la technologie, le divertissement et d'autres domaines d'intérêt tout en conservant le contrôle global des plugins et des thèmes. Chaque site du réseau aurait alors un niveau de contrôle bien plus élevé sur l'apparence et l'expérience utilisateur de son site du réseau que les types de publication personnalisés ou les catégories de publication régulières.

Dans cette mesure, lorsqu'un utilisateur se connecte, il se connecte au réseau et, en fin de compte, se connecte également à chaque site du réseau afin de fournir une expérience fluide. Si votre nouveau site était basé sur un abonnement, cela constituerait la solution et le résultat idéal.

Cependant, si la nature et le but prévus du multisite étaient d'offrir des sites du réseau disparates qui n'ont aucune relation entre eux, il est presque toujours le cas que des plugins externes ou supplémentaires soient nécessaires pour manipuler les rôles d'utilisateurs.

### Domaine et SSL

Parlons d'une installation WordPress Multisite qui échappe presque à notre attention - Wordpress.com. C'est de loin l'exemple le plus complet d'un multisite WordPress et il démontre ses vastes capacités à être personnalisé et façonné pour répondre à un objectif.

De nos jours, sur Internet moderne, l'utilisation du SSL est presque obligatoire et les administrateurs réseau de WordPress Multisite se voient rapidement confrontés à ces défis.

Dans la configuration _sous-domaine_, les sites sont créés en fonction du nom de domaine racine. Ainsi, un site nommé « site1 » serait créé sous la forme « site1.domain.com ». En utilisant un certificat SSL générique, un administrateur réseau peut résoudre avec succès ce défi et fournir des capacités d'encryption SSL pour le réseau.

WordPress Multisite contient une fonction de cartographie de domaine qui permet aux sites du réseau d'être associés à des noms de domaine personnalisés ou à des noms de domaine différents du domaine racine du réseau.

Pour les administrateurs réseau, cela présente une couche supplémentaire de complexité, à la fois dans la configuration du nom de domaine et dans l'émission et la maintenance des certificats SSL.

Dans cette mesure, bien que WordPress Multisite offre un moyen de permettre à [www.anotherdomain.com](http://www.anotherdomain.com) d'être mappé à « site1 », l'administrateur réseau se retrouve confronté au défi de gérer externement les entrées DNS et la mise en œuvre des certificats SSL.

## Ultimate Multisite

Avec les différences entre une installation WordPress autonome et une installation Multisite comprises, examinons comment Ultimate Multisite constitue l'arsenal ultime pour fournir des Sites Web en tant que Service.

### Introduction

Ultimate Multisite est votre couteau suisse lorsqu'il s'agit de créer un Site Web en tant que Service (WaaS). Pensez à Wix.com, Squarespace, WordPress.com, puis pensez à posséder votre propre service.

Sous le capot, Ultimate Multisite utilise WordPress Multisite, mais il le fait d'une manière qui non seulement résout la myriade de défis auxquels les administrateurs réseau sont confrontés avec les installations multisite, mais améliore les capacités, permettant de soutenir une large variété de cas d'utilisation.

Dans les sections suivantes, nous examinerons quelques cas d'utilisation courants et les considérations nécessaires pour les soutenir.

### Cas d'utilisation

#### Cas 1 : Une agence

Typiquement, les compétences de base d'une agence résident dans la conception de sites Web, tandis que des aspects tels que leur hébergement ou leur marketing sont répertoriés comme services supplémentaires.

Pour les agences, Ultimate Multisite présente une proposition de valeur incroyable grâce à ses capacités d'héberger et de gérer plusieurs sites Web sur une seule plateforme. Encore plus pour les agences qui standardisent leurs designs sur des thèmes particuliers tels que GeneratePress, Astra, OceanWP ou d'autres, qui peuvent exploiter les capacités d'Ultimate Multisite pour activer automatiquement ces thèmes pour chaque nouveau site.

De même, grâce à l'abondance d'offres de tarification pour les agences pour les plugins courants et populaires, l'utilisation d'Ultimate Multisite permet aux agences de tirer parti des investissements existants en fournissant une plateforme commune à partir de laquelle les plugins peuvent être installés, maintenus et utilisés.

Il est très probable que l'utilisation d'une configuration soit souhaitée et heureusement, Ultimate Multisite rend cela incroyablement facile pour faciliter la cartographie de domaine et les certificats SSL grâce à ses intégrations pour un certain nombre de fournisseurs d'hébergement populaires ainsi que des services tels que Cloudflare et cPanel.

Ainsi, en tirant parti de l'un de ces fournisseurs ou en plaçant Ultimate Multisite derrière Cloudflare, des aspects tels que la gestion des domaines et des certificats SSL deviennent quelque peu triviaux.

Les agences qui préfèrent garder un contrôle strict sur la création de sites apprécieront la facilité avec laquelle elles peuvent créer des sites et associer des sites à des clients et des plans via l'interface rationalisée d'Ultimate Multisite.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-4cYCjjZwK0DZhrlY2NLHTL4waL99PANVZmSJ4AN5MXLTxb1pVF0aAtC4dWJP2hW1pD_v6hL8X7G80LRk-NuazRQDkIPCuhuRJgIMjA4DxuQzVjWEz1Ag2RKnkqwkvmSfcgy2PLrS)

Un contrôle strict sur les plugins et les thèmes est maintenu au niveau de chaque produit grâce aux interfaces intuitives d'Ultimate Multisite, permettant de rendre les plugins et les thèmes disponibles ou cachés, ainsi que leur état d'activation lorsqu'ils sont instanciés pour un nouveau site.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-VVpPcr8bvKd2qf9zPB_1SBiVpEYdtmskG_iO0tNCJOm2RXbU6kSC1czyLV1CaU5Mw2fWd-k2r1bnQV_yA4zOL6qnYKLWohnI-EDYhXcpxD_4n-rabGlxjQO8iyjtOgXhuDL5r2y7)

Les thèmes offrent une fonctionnalité similaire, permettant d'activer ou de masquer des thèmes particuliers lors de la création d'un site.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-3CEl6U5CPdKatlXAcG5B9jJux_iWOYpUTI4crCgW15EFkhh4pODF7hYlMyzc3na8QAefadz1kcnY_T7Yn6ZyxbBMJdfRfa16IFZma_-u7NHTtMbLZwJ9f7JbqG1QTh0y1l9WWj5z)

Les agences trouveront la tranquillité d'esprit avec Ultimate Multisite, qui leur permet de faire ce qu'elles font de mieux : concevoir des sites Web exceptionnels.

#### Cas 2 : Fournisseur de niche

Il y a un vieux dicton qui dit : « faites une chose et faites-la bien ». Pour de nombreux spécialistes, cela signifie créer un produit ou un service autour d'une idée centrale unique.

Peut-être êtes-vous un golfeur passionné promouvant des sites Web aux clubs, ou vous pourriez être un joueur d'esports passionné fournissant des sites Web aux clans. Un individu promouvant un service de réservation aux restaurants, peut-être ?

Pour de nombreuses raisons, vous voudriez fournir des services basés sur un cadre et une plateforme communs. Il se peut que vous ayez conçu ou investi dans des plugins sur mesure pour fournir la fonctionnalité requise, ou il se peut que les meilleures pratiques de l'industrie exigent une approche standardisée du design.

L'une des fonctionnalités innovantes d'Ultimate Multisite est l'utilisation de sites modèles. Un site modèle est un site où le thème a été installé et activé, les plugins nécessaires installés et activés, et des publications ou pages d'exemple créés. Lorsqu'un client crée un nouveau site basé sur le modèle, le contenu et les paramètres du modèle sont copiés vers le nouveau site.

Pour un fournisseur de sites et services de niche, cela offre un avantage inégalé dans la capacité de créer instantanément un site prêt à l'emploi avec des plugins personnalisés et un design. Le client n'a besoin de fournir que l'entrée minimale pour compléter le service.

En fonction des exigences, les configurations _sous-répertoire_ ou _sous-domaine_ peuvent convenir ; dans ce cas, les choix d'architecture seraient entre un certificat SSL simple pour les _sous-répertoires_ ou un certificat SSL générique pour les _sous-domaines_.

#### Cas 3 : Hébergement Web WordPress

Il existe une myriade de façons d'héberger des sites WordPress, mais il est rarement aussi simple que de fournir de l'espace web à un client avec une version préinstallée de WordPress. Cela est dû au fait qu'un certain nombre de décisions et de considérations doivent se mettre en place pour fournir un service significatif.

Ultimate Multisite excelle dans ce domaine en fournissant une solution clé en main complète pour l'hébergement de sites WordPress. La solution comprend les mécanismes de base pour fournir des services d'abonnement, la collecte de paiements, des formulaires de paiement, des bons de réduction et des communications client.

Une grande partie du travail intégral nécessaire pour installer, configurer et maintenir correctement un WordPress Multisite est facilité par Ultimate Multisite dans la mesure où les administrateurs réseau n'ont besoin de considérer que les aspects liés à leur service ou niche, tels que les niveaux de produit, la tarification et les offres de service.

Pour les développeurs souhaitant s'intégrer à Ultimate Multisite, la solution propose également une API RESTful complète et des Webhooks pour la notification d'événements.

Sans dépendre d'une myriade de plugins externes et de licences, Ultimate Multisite offre une solution riche en fonctionnalités comparable à celle de Wix, Squarespace, WordPress.com et d'autres.

### Considérations d'architecture

Bien qu'il ne s'agisse pas d'un guide complet, les éléments suivants devraient servir de guide pour la sélection correcte des technologies afin de soutenir une installation Ultimate Multisite.

#### Hébergement partagé vs. dédié

Malheureusement, tous les fournisseurs d'hébergement ne sont pas égaux et certains pratiquent des densités de serveur extrêmes. Les fournisseurs à bas prix génèrent généralement des revenus en maximisant la densité du serveur. En conséquence, votre installation Ultimate Multisite peut ne représenter qu'un des plusieurs centaines de sites sur le même serveur.

Sans mesures de protection appropriées mises en place par le fournisseur, les sites sur un serveur partagé subissent le problème du « voisin bruyant ». C'est-à-dire qu'un site sur le même serveur consomme autant de ressources que les autres sites doivent rivaliser pour les ressources restantes. Souvent, cela se manifeste par des sites lents ou qui ne répondent pas en temps voulu.

En tant que fournisseur d'hébergement web vous-même, les effets de ce flux signifient que vos clients subissent des vitesses médiocres, un faible classement de page et des taux de rebond élevés, ce qui entraîne souvent un désabonnement des clients alors qu'ils cherchent des services ailleurs.

En bref, bon marché ne signifie pas bon.

Ultimate Multisite est connu pour fonctionner avec un certain nombre de bons fournisseurs d'hébergement et s'intègre bien à leur environnement pour fournir des fonctions telles que la cartographie de domaine et le SSL automatique. Ces fournisseurs valorisent la performance et offrent un service de niveau supérieur à l'hébergement partagé.

Pour une liste de fournisseurs compatibles et des instructions complètes de configuration pour chacun, veuillez consulter la documentation des Fournisseurs Compatibles.

#### Considérations de performance

Ultimate Multisite n'est pas une application lente, au contraire, elle est remarquablement rapide. Cependant, elle ne fonctionne qu'au même niveau que l'application et l'infrastructure sous-jacentes et ne peut exploiter que ce à quoi elle a accès.

Considérez ceci : vous êtes l'administrateur réseau d'une installation Ultimate Multisite avec 100 sites. Certains de ces sites fonctionnent bien et attirent un certain nombre de visiteurs web chaque jour.

Ce scénario serait différent à une échelle plus petite, par exemple un à cinq sites, mais avant longtemps, les problèmes d'échelle deviendraient évidents.

Laisser sans surveillance, le seul site Ultimate Multisite serait responsable de satisfaire les requêtes de tous les visiteurs des sites. Ces requêtes pourraient concerner des pages PHP dynamiques ou des ressources statiques telles que des feuilles de style, du javascript ou des fichiers multimédias. Qu'il y ait un ou une centaine de sites, ces tâches deviennent répétitives, monotones et inutiles. Il est inutile d'utiliser la puissance CPU et la mémoire pour traiter un fichier PHP lorsque la sortie est la même information statique pour chaque requête.

De même, une requête pour une page PHP ou HTML génère à son tour plusieurs requêtes successives pour des scripts, des feuilles de style et des fichiers image. Ces requêtes sont dirigées directement vers votre serveur Ultimate Multisite.

On pourrait facilement résoudre ce problème en mettant à niveau le serveur, mais cela ne résout pas un problème secondaire : les latences géographiques. Seuls plusieurs serveurs dans plusieurs emplacements pourraient correctement résoudre ce problème.

Pour cette raison, la plupart des administrateurs réseau utilisent des solutions de mise en cache côté front-end et des réseaux de distribution de contenu (CDN) pour satisfaire les requêtes de pages statiques. Répondre à ces requêtes et servir les ressources avant que la requête n'atteigne le serveur permet d'économiser des ressources de traitement, d'éliminer les retards, d'éviter les mises à niveau inutiles et de maximiser les investissements technologiques.

Ultimate Multisite inclut un add-on sophistiqué Cloudflare permettant aux administrateurs réseau de placer leurs installations derrière Cloudflare et d'utiliser non seulement ses capacités de mise en cache, mais aussi l'hébergement DNS, les certificats SSL et les mécanismes de sécurité.

#### Sauvegardes

On pourrait demander à 50 personnes des conseils sur les sauvegardes et recevoir 50 opinions différentes sur les stratégies de sauvegarde. La réponse est que cela dépend.

Ce qui n'est pas contesté, c'est que les sauvegardes sont nécessaires et qu'il est presque inconcevable que celles-ci ne soient pas gérées par le fournisseur, en particulier un fournisseur qui propose un service géré. Par conséquent, les clients se tourneront vers l'administrateur réseau pour fournir et gérer ce service. À qui l'administrateur réseau se tourne est un problème complètement différent.

À des fins de cette section, convenons qu'une sauvegarde est une copie instantanée de l'état du système au moment où la sauvegarde a été initiée. En termes simples, quel que soit l'état du système au moment de la sauvegarde, cet état est capturé et verrouillé dans la sauvegarde.

Avec cette compréhension, la réponse quant à la manière d'obtenir les sauvegardes et ce qui est le mieux pour votre environnement dépendra en grande partie de vos exigences et de la capacité du fournisseur d'hébergement à satisfaire ces exigences. Cependant, dans l'ordre du plus opiniâtre au moins opiniâtre, les options ci-dessous devraient fournir des indications.

#### Instantanés

Les instantanés sont les solutions miracles pour les sauvegardes car ils sont faciles, simples (jusqu'à ce que vous souhaitiez restaurer) et « fonctionnent simplement ». Cela nécessite toutefois l'aide de votre fournisseur et s'applique principalement si vous avez un VPS (Virtual Private Server) ou similaire. Plusieurs fournisseurs listés dans notre documentation « Fournisseurs Compatibles » offrent des sauvegardes ne nécessitant aucune intervention ou considération supplémentaire de la part de l'administrateur réseau.

Alors que les sauvegardes traditionnelles ciblent les fichiers et les bases de données, un instantané cible l'ensemble du disque. Cela signifie que non seulement les données du site sont capturées dans l'instantané, mais aussi le système d'exploitation et la configuration. Pour beaucoup, c'est un avantage distinct car un nouveau système peut être créé presque instantanément à partir d'un instantané et mis en service pour remplacer une instance défaillante. De même, le processus de récupération pour récupérer des fichiers ne nécessite que l'attachement de l'image instantanée en tant que disque à une instance existante afin que les fichiers puissent être accédés et copiés.

Les instantanés peuvent entraîner un coût supplémentaire avec le fournisseur d'hébergement, mais c'est une police d'assurance contre les accidents.

#### Scripts externes

Il ne semble pas manquer de scripts externes et de solutions pour sauvegarder les ressources WordPress et MySQL, et ceux-ci fonctionneraient bien pour Ultimate Multisite, car il s'agit d'un plugin WordPress utilisant le système de fichiers et la base de données WordPress. Ainsi, une solution qui sauvegarde les sites WordPress couvrirait adéquatement les besoins d'Ultimate Multisite.

Nous ne pouvons pas recommander un script plutôt qu'un autre, mais notre conseil général est de réaliser plusieurs tests de sauvegarde et de restauration afin de garantir que les résultats sont souhaités et de « s'assurer d'être sûr » en évaluant continuellement le script et sa fonctionnalité, en particulier lorsqu'une stratégie de sauvegarde différentielle est appliquée.

Il convient de noter que ces scripts, en cours d'exécution, augmenteront la charge du système, ce qui doit être pris en compte.

#### Plugins

Il n'y a pratiquement aucun problème dans WordPress qui ne puisse être résolu avec un plugin, et si la gestion de scripts externes n'est pas votre tasse de café, alors un plugin est peut-être la meilleure option suivante.

Bien que les plugins varient en options et fonctionnalités, ils accomplissent principalement la même fonction, à savoir faire une copie des fichiers WordPress et du contenu de la base de données. Par la suite, les fonctionnalités diffèrent, certains plugins pouvant envoyer les sauvegardes vers des services externes tels que Google Drive ou Dropbox, ou vers un service de stockage d'objets compatible tel que S3, Wasabi ou d'autres. Les plugins les plus complets offrent des sauvegardes différentielles ou une stratégie pour sauvegarder uniquement les données qui ont changé afin de réduire les coûts de stockage externe.

Lors de la sélection de votre plugin, assurez-vous de vérifier qu'il est compatible multisite. En raison de sa nature d'opération, pendant que la sauvegarde est en cours, vous pouvez vous attendre à une charge temporaire sur le serveur jusqu'à ce que le processus soit terminé.

#### Domaine et SSL

Beaucoup a déjà été discuté concernant les noms de domaine en mode multisite _sous-domaine_. Une solution presque universelle pour les administrateurs réseau est d'utiliser des entrées DNS génériques.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-GwkLVUQ9Wb.png)

Ce type d'entrée DNS résoudra avec succès les _sous-domaines_ tels que « site1.domain.com » et « site2.domain.com » vers une adresse IP de 1.2.3.4, soutenant ainsi Ultimate Multisite et, dans une plus grande mesure, WordPress Multisite en mode _sous-domaine_. 

Cela peut fonctionner parfaitement pour HTTP car l'hôte cible est lu à partir des en-têtes HTTP, mais il est rare que le web soit aussi simple de nos jours où les transactions HTTPS sécurisées sont presque obligatoires.

Heureusement, il existe des options simples pour les certificats SSL. En mode _sous-répertoire_, un certificat de domaine régulier peut être utilisé. Ceux-ci sont facilement et gratuitement disponibles auprès des fournisseurs d'hébergement qui peuvent utiliser le service gratuit LetsEncrypt ou une autre source. Sinon, ils sont disponibles commercialement auprès des autorités si vous êtes capable de générer la demande de signature de certificat.

Pour le mode _sous-domaine_, l'utilisation d'un certificat SSL générique s'associera parfaitement à un domaine générique et permettra au certificat d'être autoritaire pour le domaine racine et tous les _sous-domaines_ sans configuration supplémentaire.

Cependant, il convient de noter que les certificats SSL génériques peuvent ne pas fonctionner avec des services tels que Cloudflare, à moins que vous ne soyez sur un plan d'entreprise ou que vous ne définissiez l'entrée sur DNS uniquement, auquel cas toute mise en cache et optimisation est contournée.

Par défaut, Ultimate Multisite fournit une solution à ce problème, démontrant notre vaste expérience des besoins des multisites WordPress. L'activation de ce simple add-on fera en sorte qu'Ultimate Multisite utilise vos identifiants Cloudflare pour ajouter automatiquement des entrées DNS pour les sites du réseau dans Cloudflare et définir leur mode sur « proxied ». De cette manière, chaque sous-site du réseau, lorsqu'il est créé, bénéficiera de la protection complète et des avantages de Cloudflare, y compris le SSL.

En fonction de la nature et du but de votre installation Ultimate Multisite, il peut être nécessaire que les clients utilisent leurs propres domaines. Dans ce cas, l'administrateur réseau est chargé de résoudre deux problèmes : d'une part, l'hébergement du nom de domaine et d'autre part, les certificats SSL pour le domaine.

Pour beaucoup, l'utilisation de Cloudflare est une option simple. Le client n'a qu'à placer son domaine sur Cloudflare, pointer un CNAME vers le domaine racine d'Ultimate Multisite et mapper son domaine dans Ultimate Multisite pour commencer à profiter de son nom de domaine personnalisé.

En dehors de cela, des solutions alternatives doivent être recherchées, c'est pourquoi Ultimate Multisite recommande une liste de Fournisseurs Compatibles. Cela est dû au fait que le processus de configuration du DNS et du SSL peut être un processus non trivial. Cependant, grâce à l'intégration d'Ultimate Multisite avec ces fournisseurs, la complexité est beaucoup réduite et la procédure est automatisée.

#### Plugins

Il est très probable que vous ayez besoin de plugins supplémentaires pour fournir des fonctionnalités à vos clients ou aux sites du réseau. Tous les plugins fonctionnent-ils avec WordPress Multisite et Ultimate Multisite ? Eh bien, cela dépend.

Bien que la plupart des plugins soient installables dans un WordPress Multisite, leur activation et leur licence varient d'un auteur à l'autre.

Le défi réside dans la manière dont la licence est appliquée, certains plugins nécessitant une licence par domaine. Cela signifierait que pour certains plugins, l'administrateur réseau doit activer manuellement la licence pour chaque plugin sur chaque nouveau site.

Par conséquent, il peut être préférable de vérifier auprès de l'auteur du plugin comment son plugin fonctionnerait avec un WordPress Multisite et quelles sont les exigences ou procédures spéciales nécessaires pour le licencier.

---
title: Ultimate Multisite 101
sidebar_position: 10
_i18n_hash: 031ea0b6a4b8709559485159811f6b31
---
# Ultimate Multisite 101

Ultimate Multisite est un plugin WordPress Multisite qui vous permet de proposer un WaaS ou Websites as a Service aux clients. Avant d’entrer dans le vif du sujet et de découvrir comment Ultimate Multisite peut aider votre entreprise et vos clients, nous devons acquérir quelques connaissances fondamentales.

## Le WordPress Multisite {#the-wordpress-multisite}

La plupart d’entre nous connaissent l’installation WordPress standard. Vous la créez soit via le panneau de contrôle de votre fournisseur d’hébergement, soit, pour les plus courageux, vous configurez un nouveau serveur web et une base de données, téléchargez les fichiers du cœur et commencez le processus d’installation.

Cela fonctionne pour des millions de sites WordPress partout dans le monde, mais du point de vue d’une agence ou d’un fournisseur d’hébergement, parlons un instant des volumes.

S’il est très simple de créer un site WordPress, voire une centaine, via un panneau de contrôle automatisé, les problèmes commencent rapidement à apparaître lorsqu’il s’agit de gérer ces sites. Sans gestion, vous devenez une cible de choix pour les logiciels malveillants. Gérer implique un effort et des ressources, et bien qu’il existe des outils et plugins externes pour aider à rationaliser la gestion et l’administration des sites WordPress, le fait que les clients conservent un accès administrateur signifie que ces efforts pourraient facilement être contrecarrés.

Dans son cœur, WordPress fournit une fonctionnalité simplement intitulée « Multisite », dont les origines remontent à 2010, lors du lancement de WordPress 3.0. Depuis, elle a reçu un certain nombre de révisions visant à introduire de nouvelles fonctionnalités et à renforcer la sécurité.

En substance, un WordPress multisite peut être envisagé ainsi : une université maintient une seule installation de WordPress, mais chaque faculté maintient son propre site WordPress.

Pour détailler cette affirmation, examinons une partie de la terminologie de base présente non seulement dans la documentation d’Ultimate Multisite, mais aussi dans toute la communauté WordPress.

### Le réseau {#the-network}

En termes WordPress, un réseau multisite est l’endroit où plusieurs sous-sites peuvent être gérés depuis un seul Dashboard. Bien que la création d’un réseau multisite diffère selon les fournisseurs d’hébergement, le résultat final consiste généralement en quelques directives supplémentaires dans le fichier wp-config.php pour indiquer à WordPress qu’il fonctionne dans ce mode spécifique.

Il existe un certain nombre de différences distinctes entre un réseau multisite et une installation WordPress autonome, que nous allons brièvement aborder.

#### Sous-domaine vs. sous-répertoire {#subdomain-vs-subdirectory}

L’une des décisions les plus immédiates que vous devrez prendre est de déterminer si l’installation multisite fonctionnera avec des _sous-répertoires_ ou des _sous-domaines_. Ultimate Multisite fonctionne tout aussi bien avec les deux choix, mais il existe des différences architecturales entre les deux configurations.

Dans une configuration en _sous-répertoire_, les sites du réseau héritent d’un chemin basé sur le nom de domaine principal. Par exemple, un site du réseau intitulé « site1 » aura pour URL complète https://domain.com/site1. Dans une configuration en _sous-domaine_, le site du réseau aura son propre _sous-domaine_ dérivé du nom de domaine principal. Ainsi, un site intitulé « site1 » aura pour URL complète https://site1.domain.com/.

Bien que les deux options soient des choix parfaitement valables, l’utilisation de _sous-domaines_ offre un certain nombre d’avantages, mais nécessite aussi davantage de réflexion et de planification dans son architecture.

En termes de DNS, l’utilisation de _sous-répertoires_ représente un défi relativement simple. Comme les sites du réseau sont simplement des enfants du chemin parent, une seule entrée de nom de domaine doit exister pour le nom de domaine principal. Pour les _sous-domaines_, le défi est un peu plus complexe, nécessitant soit une entrée CNAME distincte pour chaque site du réseau, soit une entrée générique (*) dans les enregistrements DNS.

Un autre point à prendre en compte est celui du SSL, ainsi que l’émission et l’utilisation de certificats SSL. Dans une configuration en _sous-répertoire_, un seul certificat de domaine peut être utilisé, car les sites du réseau sont simplement des chemins du nom de domaine principal. Ainsi, un certificat pour domain.com fournira correctement le SSL pour https://domain.com/site1, https://domain.com/site2, et ainsi de suite.

Dans une configuration en _sous-domaine_, l’utilisation d’un certificat SSL générique est l’une des options les plus courantes. Ce type de certificat SSL fournit le chiffrement pour un domaine et ses _sous-domaines_. Par conséquent, un certificat SSL générique fournira le chiffrement pour https://site1.domain.com, https://site2.domain.com et https://domain.com lui-même.

Bien qu’il existe d’autres options, celles-ci sont souvent limitées en portée et en application, et nécessitent une configuration et une réflexion supplémentaires quant à leur adéquation.

#### Plugins et thèmes {#plugins-and-themes}

Ce que WordPress donne, il le reprend aussi, du moins du point de vue du client. Dans une installation WordPress autonome, si l’administrateur du site installe un mauvais plugin ou ne maintient pas son installation à jour, la seule victime et le seul dommage de cet acte, c’est lui-même. Cependant, un administrateur de site qui installe un mauvais plugin sur une installation multisite fait de chaque site installé dans le réseau une victime.

Pour cette raison, lorsqu’il est configuré en multisite, WordPress retire aux administrateurs de site la capacité d’installer des plugins et des thèmes, et transfère à la place cette capacité vers un rôle nouvellement créé d’administrateur réseau ou « super admin ». Ce rôle privilégié peut alors décider d’autoriser ou non les administrateurs des sites du réseau à voir le menu des plugins dans leur Dashboard ou à y accéder et, le cas échéant, si ces autorisations s’étendent à l’_activation_ ou à la _désactivation_ des plugins.

Dans cette mesure, l’administrateur réseau est responsable de l’installation des plugins et des thèmes dans le réseau et délègue aux sites du réseau les autorisations d’utiliser ces plugins et thèmes. Les administrateurs de site ne peuvent pas installer de plugins et de thèmes ni accéder aux plugins et thèmes non attribués à leur site.

#### Utilisateurs et administrateurs {#users-and-administrators}

Dans un WordPress Multisite, tous les sites du réseau partagent la même base de données et donc les mêmes utilisateurs, rôles et capacités. La manière la plus appropriée de le concevoir est que tous les utilisateurs sont membres du réseau, et non d’un site particulier.

Compte tenu de cette compréhension, il peut être indésirable d’autoriser la création d’utilisateurs, et c’est pour cette raison que WordPress Multisite retire cette capacité aux administrateurs de site et la transfère à l’administrateur réseau. À son tour, l’administrateur réseau peut déléguer les privilèges nécessaires à un administrateur de site afin de lui permettre de créer des comptes utilisateur pour son propre site.

<!-- Capture d’écran indisponible : interface de gestion des utilisateurs réseau de WordPress Multisite -->

Pour réitérer l’affirmation ci-dessus, bien que les comptes utilisateur semblent être liés au site, ils sont en réalité attribués au réseau et doivent donc être uniques sur l’ensemble du réseau. Il peut y avoir des cas où des noms d’utilisateur ne sont pas disponibles à l’enregistrement pour cette raison.

Bien que ce ne soit pas un concept étranger dans les systèmes d’entreprise, cette source unique d’enregistrement et d’authentification des utilisateurs est souvent un concept difficile à comprendre pour les personnes habituées aux installations WordPress autonomes, où l’administration des utilisateurs est quelque peu plus simple.

#### Médias {#media}

Lorsque les sites du réseau partagent une seule base de données dans un WordPress Multisite, ils conservent des chemins distincts sur le système de fichiers pour les fichiers médias.

L’emplacement standard de WordPress (wp-content/uploads) demeure ; toutefois, son chemin est modifié pour refléter l’ID unique du site réseau. Par conséquent, les fichiers médias d’un site réseau apparaissent sous wp-contents/uploads/site/[id].

#### Permaliens {#permalinks}

Nous avons mentionné précédemment qu’il existe des avantages distinctifs de la configuration en _sous-domaine_ par rapport à celle en _sous-répertoire_, et les voici : les chemins.

Dans une configuration en _sous-répertoire_, le site principal (le premier site créé lorsque le réseau est établi) et les sous-sites du réseau doivent partager le même chemin à partir du nom de domaine. Cela peut entraîner un grand nombre de conflits.

Pour les publications, un chemin /blog/ obligatoire est ajouté au site principal afin d’éviter les conflits avec les sites du réseau. Cela signifie que les permaliens conviviaux tels que « Nom de l’article » seront présentés sous la forme domain.name/blog/post-name/

<!-- Capture d’écran indisponible : paramètres de permaliens WordPress affichant le chemin /blog/ dans une configuration en sous-répertoire -->

Dans une configuration en _sous-domaine_, cette action n’est pas nécessaire, car chaque site réseau bénéficie d’une séparation complète du domaine et n’a donc pas besoin de dépendre d’un chemin unique. Ils conservent plutôt leurs propres chemins distincts basés sur leur _sous-domaine_.

<!-- Capture d’écran indisponible : paramètres de permaliens WordPress pour une configuration en sous-domaine -->

#### Pages statiques {#static-pages}

Dans une configuration en _sous-répertoire_, le risque de conflits de noms s’étend aux pages statiques, car le site principal et les sites du réseau partagent le même chemin.

Pour éviter cela, WordPress fournit un moyen de mettre sur liste noire certains noms de site afin qu’ils n’entrent pas en conflit avec les noms du premier site. En général, l’administrateur réseau saisirait les chemins racine des pages du site principal.

<!-- Capture d’écran indisponible : paramètres réseau WordPress affichant les noms de site interdits pour éviter les conflits -->

Dans une configuration en _sous-domaine_, la possibilité de conflits de noms est atténuée par le _sous-domaine_, car il est unique au site réseau et n’est lié en aucune manière au site principal.

### Inscription {#registration}

Dans les paramètres réseau de WordPress Multisite, plusieurs nouvelles options d’inscription des utilisateurs sont disponibles, permettant aux utilisateurs nouveaux et existants de créer des sites.

<!-- Capture d’écran indisponible : paramètres réseau de WordPress Multisite affichant les options d’inscription -->

Contrairement aux installations WordPress autonomes, les sites réseau ne conservent pas les options familières permettant d’autoriser les inscriptions d’utilisateurs ou d’attribuer ces inscriptions à des rôles.

<!-- Capture d’écran indisponible : paramètres d’inscription des utilisateurs d’un site WordPress autonome affichant des options limitées -->

Lorsque des comptes utilisateur sont créés, ces comptes sont générés au niveau du réseau. Ainsi, au lieu d’appartenir à un site particulier, ils appartiennent au réseau. Cela présente certains avantages et inconvénients distinctifs.

Par exemple, supposons que votre WordPress Multisite soit consacré aux actualités et à l’information. Vous établiriez le multisite, puis créeriez des sites réseau pour la finance, la technologie, le divertissement et d’autres centres d’intérêt, tout en conservant le contrôle global des plugins et des thèmes. Chaque site réseau disposerait alors d’un niveau de contrôle bien plus élevé sur l’apparence, le ressenti et l’expérience utilisateur de son site réseau que ne le permettraient des types de publications personnalisés ou des catégories de publications ordinaires.

Dans cette mesure, lorsqu’un utilisateur se connecte, il se connecte au réseau et, en fin de compte, est également connecté à chaque site réseau afin d’offrir une expérience fluide. Si votre nouveau site était basé sur un abonnement, ce serait la solution et le résultat idéaux.

Toutefois, si la nature et l’objectif prévus du multisite étaient d’offrir des sites réseau disparates n’ayant aucun lien entre eux, il est presque toujours nécessaire de recourir à des plugins externes ou supplémentaires pour manipuler les rôles utilisateur.

### Domaine et SSL {#domain-and-ssl}

Parlons d’une installation WordPress Multisite qui échappe presque à notre attention : WordPress.com. C’est de loin l’exemple le plus vaste d’un multisite WordPress et il démontre ses vastes capacités de personnalisation et d’adaptation pour remplir un objectif.

De nos jours, sur l’internet moderne, l’utilisation de SSL est presque obligatoire, et les administrateurs réseau de multisites WordPress sont rapidement confrontés à ces défis.

Dans une configuration en _sous-domaine_, les sites sont créés sur la base du nom de domaine racine. Ainsi, un site intitulé « site1 » serait créé sous la forme « site1.domain.com ». En utilisant un certificat SSL wildcard, un administrateur réseau peut relever ce défi avec succès et fournir des capacités de chiffrement SSL pour le réseau.

WordPress Multisite contient une fonction de mappage de domaine qui permet d’associer des sites réseau à des noms de domaine personnalisés ou à des noms de domaine différents du domaine racine du réseau.

Pour les administrateurs réseau, cela présente une couche supplémentaire de complexité, tant dans la configuration des noms de domaine que dans l’émission et la maintenance des certificats SSL.

Dans cette mesure, bien que WordPress Multisite fournisse un moyen permettant de mapper [www.anotherdomain.com](http://www.anotherdomain.com) sur « site1 », l’administrateur du réseau se retrouve avec le défi de gérer en externe les entrées DNS et la mise en œuvre des certificats SSL.

## Ultimate Multisite {#ultimate-multisite}

Une fois comprises les différences entre une installation WordPress autonome et une installation multisite, voyons comment Ultimate Multisite constitue l’arsenal ultime pour fournir des sites Web en tant que service.

### Introduction {#introduction}

Ultimate Multisite est votre couteau suisse lorsqu’il s’agit de créer un site Web en tant que service (WaaS). Pensez à Wix.com, Squarespace, WordPress.com, puis imaginez posséder votre propre service.

Sous le capot, Ultimate Multisite utilise WordPress Multisite, mais il le fait d’une manière qui non seulement résout la myriade de défis auxquels les administrateurs de réseau sont confrontés avec les installations multisites, mais améliore aussi les capacités afin de prendre en charge une grande variété de cas d’utilisation.

Dans les sections suivantes, nous examinerons quelques cas d’utilisation courants et les considérations nécessaires pour les prendre en charge.

### Cas d’utilisation {#use-cases}

#### Cas 1 : Une agence {#case-1-an-agency}

En général, les compétences clés d’une agence résident dans la conception de sites Web, des aspects tels que leur hébergement ou leur marketing étant proposés comme services supplémentaires.

Pour les agences, Ultimate Multisite présente une proposition de valeur incroyable grâce à ses capacités à héberger et gérer plusieurs sites Web sur une seule plateforme. Plus encore, les agences qui standardisent leurs conceptions sur des thèmes particuliers tels que GeneratePress, Astra, OceanWP ou d’autres peuvent exploiter les capacités de Ultimate Multisite pour activer automatiquement ces thèmes pour chaque nouveau site.

De même, avec l’abondance d’offres de tarification agence pour des plugins courants et populaires, l’utilisation de Ultimate Multisite permet aux agences de tirer parti des investissements existants en fournissant une plateforme commune à partir de laquelle les plugins peuvent être installés, maintenus et utilisés.

L’utilisation d’une configuration serait très probablement souhaitée et, heureusement, Ultimate Multisite facilite incroyablement le mappage de domaines et les certificats SSL grâce à ses intégrations avec plusieurs fournisseurs d’hébergement populaires ainsi que des services tels que Cloudflare et cPanel.

Ainsi, en exploitant l’un de ces fournisseurs ou en plaçant Ultimate Multisite derrière Cloudflare, des aspects tels que la gestion des domaines et des certificats SSL deviennent relativement simples.

Les agences qui préfèrent conserver un contrôle strict sur la création des sites apprécieront la facilité avec laquelle elles peuvent créer des sites et associer des sites à des clients et à des plans grâce à l’interface simplifiée de Ultimate Multisite.

![Interface de gestion des sites Ultimate Multisite](/img/admin/sites-list.png)

Un contrôle strict des plugins et des thèmes est maintenu par produit grâce aux interfaces intuitives de Ultimate Multisite, permettant de rendre les plugins et les thèmes disponibles ou masqués, ainsi que de définir leur état d’activation lorsqu’ils sont instanciés pour un nouveau site.

![Interface de limitations des plugins par produit](/img/config/product-plugins.png)

Les thèmes offrent une fonctionnalité similaire, permettant d’activer ou de masquer des thèmes particuliers lors de la création du site.

![Interface de limitations des thèmes par produit](/img/config/product-themes.png)

Les agences trouveront la tranquillité d’esprit avec Ultimate Multisite, qui leur permet de faire ce qu’elles font le mieux : concevoir des sites Web exceptionnels.

#### Cas 2 : Fournisseur de niche {#case-2-niche-provider}

Il existe un vieux dicton qui dit : « faites une seule chose et faites-la bien ». Pour de nombreux spécialistes, cela signifie créer un produit ou un service autour d’une seule idée centrale.

Peut-être êtes-vous un golfeur passionné qui promeut des sites Web auprès de clubs, ou vous êtes peut-être un joueur d’esport passionné qui fournit des sites Web à des clans. Peut-être une personne qui promeut un service de réservation auprès de restaurants ?

Pour de nombreuses raisons, vous voudriez fournir des services basés sur un cadre et une plateforme communs. Il se peut que vous ayez conçu ou investi dans des plugins sur mesure pour fournir les fonctionnalités requises, ou que les meilleures pratiques du secteur exigent une forme d’approche standardisée de la conception.

L’une des fonctionnalités innovantes de Ultimate Multisite est l’utilisation de sites modèles. Un site modèle est un site où le thème a été installé et activé, les plugins nécessaires installés et activés, et des articles ou pages d’exemple créés. Lorsqu’un client crée un nouveau site basé sur le modèle, le contenu et les paramètres du modèle sont copiés vers le site nouvellement créé.

Pour un fournisseur de sites et de services de niche, cela offre un avantage inégalé : la capacité de créer instantanément un site prêt à l’emploi avec des plugins personnalisés et une conception dédiée. Le client n’a qu’à fournir une contribution minimale pour compléter le service.

Selon les exigences, les configurations _sous-répertoire_ ou _sous-domaine_ peuvent convenir, auquel cas les choix d’architecture se situeraient entre un simple certificat SSL pour les _sous-répertoires_ ou un certificat SSL wildcard pour les _sous-domaines_.

#### Cas 3 : Hébergement Web WordPress {#case-3-wordpress-web-hosting}

Il existe une myriade de façons d’héberger des sites WordPress, mais il est rare que ce soit aussi simple que de fournir un espace Web à un client avec une version préinstallée de WordPress. Cela s’explique par le fait qu’un certain nombre de décisions et de considérations doivent converger pour fournir un service pertinent.

Ultimate Multisite excelle dans ce domaine en fournissant une solution clé en main complète pour l’hébergement de sites WordPress. La solution inclut les mécanismes de base permettant de fournir des services d’abonnement, la collecte des paiements, des formulaires de paiement, des bons de réduction et des communications avec les clients.

Une grande partie du travail essentiel requis pour installer, configurer et maintenir correctement un WordPress Multisite est facilitée par Ultimate Multisite, au point que les administrateurs de réseau n’ont qu’à considérer les aspects liés à leur service ou à leur niche, tels que les niveaux de produit, la tarification et les offres de service.

Pour les développeurs souhaitant s’intégrer à Ultimate Multisite, la solution propose également une API RESTful complète et des Webhooks pour la notification d’événements.

Sans dépendre d’une multitude de plugins et de licences externes, Ultimate Multisite fournit une solution riche en fonctionnalités et comparable à celles de Wix, Squarespace, WordPress.com et autres.

### Considérations d’architecture {#architecture-considerations}

Bien qu’il ne s’agisse pas d’un guide complet, les éléments suivants devraient servir d’orientation pour le choix correct des technologies destinées à prendre en charge une installation Ultimate Multisite.

#### Hébergement partagé vs. dédié {#shared-vs-dedicated-hosting}

Malheureusement, tous les fournisseurs d’hébergement ne se valent pas et certains pratiquent des densités de serveurs extrêmes. Les fournisseurs à bas coût génèrent généralement des revenus en maximisant la densité des serveurs. Ainsi, votre installation Ultimate Multisite peut n’être qu’un site parmi plusieurs centaines sur le même serveur.

Sans garanties appropriées mises en place par le fournisseur, les sites sur un serveur partagé subissent le problème du « voisin bruyant ». Autrement dit, un site sur le même serveur consomme tellement de ressources que les autres sites doivent se disputer les ressources restantes. Souvent, cela se manifeste par des sites lents ou qui ne répondent pas dans des délais raisonnables.

En tant que fournisseur d’hébergement web vous-même, les effets en cascade signifieront que vos clients subissent de mauvaises vitesses, un faible classement des pages et des taux de rebond élevés, entraînant souvent une perte de clients lorsqu’ils recherchent des services ailleurs.

En bref, bon marché ne signifie pas bon.

Ultimate Multisite est connu pour fonctionner avec un certain nombre de bons fournisseurs d’hébergement et s’intègre bien à leur environnement pour fournir des fonctions telles que le mappage de domaines et le SSL automatique. Ces fournisseurs valorisent les performances et fournissent un service de qualité supérieure à l’hébergement partagé.

Pour obtenir une liste des fournisseurs compatibles et des instructions complètes de configuration pour chacun, veuillez consulter la documentation des fournisseurs compatibles.

#### Considérations relatives aux performances {#performance-considerations}

Ultimate Multisite n’est pas une application lente ; au contraire, elle est remarquablement rapide. Toutefois, elle ne fonctionne qu’aussi bien que l’application et l’infrastructure sous-jacentes et ne peut exploiter que ce à quoi elle a accès.

Considérez ceci : vous êtes l’administrateur réseau d’une installation Ultimate Multisite avec 100 sites. Certains de ces sites se portent bien et attirent chaque jour un certain nombre de visiteurs.

Ce scénario serait différent à une plus petite échelle, disons d’un à cinq sites, mais des problèmes d’échelle deviendraient rapidement évidents.

Laissé sans surveillance, le site Ultimate Multisite unique serait chargé de satisfaire les demandes de tous les visiteurs des sites. Ces demandes pourraient concerner des pages PHP dynamiques ou des ressources statiques telles que des feuilles de style, du javascript ou des fichiers multimédias. Qu’il y ait un ou cent sites, ces tâches deviennent répétitives, monotones et coûteuses. Il est inutile d’utiliser la puissance du CPU et la mémoire pour traiter un fichier PHP lorsque la sortie est la même information statique pour chaque demande.

De même, une demande pour une page PHP ou HTML génère à son tour plusieurs demandes suivantes pour des scripts, des feuilles de style et des fichiers image. Ces demandes sont dirigées directement vers votre serveur Ultimate Multisite.

On pourrait facilement résoudre ce problème en mettant à niveau le serveur, mais cela ne corrige pas un problème secondaire : les latences géographiques. Seuls plusieurs serveurs dans plusieurs emplacements pourraient traiter correctement ce problème.

Pour cette raison, la plupart des administrateurs réseau utilisent des solutions de mise en cache front-end et des réseaux de distribution de contenu (CDN) pour répondre aux demandes de pages statiques. Répondre à ces demandes et servir les ressources avant que la demande n’atteigne le serveur permet d’économiser des ressources de traitement, d’éliminer les délais, d’éviter des mises à niveau inutiles et de maximiser les investissements technologiques.

Ultimate Multisite inclut un add-on Cloudflare sophistiqué permettant aux administrateurs réseau de placer leurs installations derrière Cloudflare et d’utiliser non seulement ses capacités de mise en cache, mais aussi l’hébergement DNS, les certificats SSL et les mécanismes de sécurité.

#### Sauvegardes {#backups}

On pourrait demander conseil à 50 personnes au sujet des sauvegardes et recevoir 50 opinions différentes sur les stratégies de sauvegarde. La réponse est : cela dépend.

Ce qui n’est pas contesté, c’est que les sauvegardes sont nécessaires et qu’il est presque inconcevable qu’elles ne soient pas gérées par le fournisseur, en particulier s’il offre un service géré. Par conséquent, les clients se tourneront vers l’administrateur réseau pour fournir et gérer ce service. Vers qui l’administrateur réseau se tourne est un problème tout à fait différent.

Aux fins de cette section, convenons qu’une sauvegarde est une copie ponctuelle de l’état du système au moment où la sauvegarde a été initiée. En termes simples, quel que soit l’état du système au moment de la sauvegarde, cet état est capturé et conservé dans la sauvegarde.

Avec cette compréhension, la réponse quant à la manière d’effectuer les sauvegardes et à ce qui convient le mieux à votre environnement dépendra largement de vos exigences et de la capacité du fournisseur d’hébergement à satisfaire ces exigences. Toutefois, dans l’ordre du plus prescriptif au moins prescriptif, les options ci-dessous devraient fournir quelques indications.

#### Snapshots {#snapshots}

Les snapshots sont la solution miracle pour les sauvegardes, car ils sont simples, peu compliqués (jusqu’à ce que vous vouliez restaurer) et « fonctionnent tout simplement ». Cela nécessite toutefois une certaine aide de votre fournisseur et s’applique principalement uniquement si vous disposez d’un VPS (Virtual Private Server) ou similaire. Plusieurs fournisseurs listés dans notre documentation « Fournisseurs compatibles » offrent des sauvegardes ne nécessitant aucune intervention ni considération supplémentaire de la part de l’administrateur réseau.

Là où les sauvegardes traditionnelles ciblent les fichiers et les bases de données, un snapshot cible l’intégralité du disque. Cela signifie que non seulement les données du site sont capturées dans le snapshot, mais aussi le système d’exploitation et la configuration. Pour beaucoup, c’est un avantage distinct, car un nouveau système peut être généré presque instantanément à partir d’un snapshot et être mis en service pour remplacer une instance défaillante. De même, le processus de récupération pour récupérer uniquement des fichiers nécessite simplement d’attacher l’image du snapshot comme disque à une instance existante afin que les fichiers soient accessibles et copiés.

Les snapshots peuvent entraîner un coût supplémentaire auprès du fournisseur d’hébergement, mais ils constituent une assurance contre les accidents.

#### Scripts externes {#external-scripts}

Il ne semble pas manquer de scripts et de solutions externes pour sauvegarder les ressources WordPress et MySQL, et ceux-ci fonctionneraient bien pour Ultimate Multisite, car il s’agit d’un plugin WordPress utilisant le système de fichiers et la base de données WordPress. Ainsi, une solution qui sauvegarde les sites WordPress couvrirait adéquatement les besoins de Ultimate Multisite.

Nous ne pouvons recommander un script plutôt qu’un autre, mais notre conseil général est d’exécuter plusieurs tests de sauvegarde et de restauration afin de s’assurer que les résultats sont ceux souhaités, et de « s’assurer d’être sûr » en évaluant continuellement le script et sa fonctionnalité, en particulier lorsqu’une forme de stratégie de sauvegarde différentielle est appliquée.

Il convient de noter que ces scripts, pendant leur exécution, augmenteront la charge du système, ce qui doit être pris en compte.

#### Plugins {#plugins}

Il n’existe presque aucun problème dans WordPress qui ne puisse être résolu avec un plugin et, si la gestion de scripts externes n’est pas votre tasse de java, alors un plugin est peut-être la meilleure option suivante.

Bien que les plugins varient en options et en fonctionnalités, ils remplissent pour la plupart la même fonction, à savoir faire une copie des fichiers WordPress et du contenu de la base de données. Ensuite, les fonctionnalités diffèrent, car certains plugins peuvent envoyer les sauvegardes vers des services externes tels que Google Drive ou Dropbox, ou vers une forme de service de stockage d’objets compatible tel que S3, Wasabi ou d’autres. Les plugins les plus complets fournissent des sauvegardes différentielles ou une forme de stratégie permettant de sauvegarder uniquement les données qui ont été modifiées afin d’économiser les coûts de stockage externe.

Lors du choix de votre plugin, veillez à vérifier qu’il prend en compte le multisite. En raison de son mode de fonctionnement pendant l’exécution de la sauvegarde, vous pouvez vous attendre à une charge temporaire sur le serveur jusqu’à ce que le processus soit terminé.

#### Domaine et SSL {#domain-and-ssl-1}

Beaucoup de choses ont déjà été discutées concernant les noms de domaine en mode _subdomain_ multisite. Une solution presque universelle pour les administrateurs réseau consiste à utiliser des entrées DNS wildcard.

![Exemple de configuration d’entrée DNS wildcard](/img/config/settings-domain-mapping.png)

Ce type d’entrée DNS résoudra avec succès des _subdomains_ tels que « site1.domain.com » et « site2.domain.com » vers une adresse IP de 1.2.3.4, prenant ainsi en charge Ultimate Multisite et, plus largement, WordPress Multisite utilisant le mode _subdomain_.

Cela peut fonctionner parfaitement pour HTTP, car l’hôte cible est lu depuis les en-têtes HTTP, mais le Web est rarement aussi simple de nos jours, où les transactions HTTPS sécurisées sont presque obligatoires.

Heureusement, il existe des options simples pour les certificats SSL. En mode _subdirectory_, un certificat de domaine standard peut être utilisé. Ceux-ci sont facilement disponibles et gratuits auprès de fournisseurs d’hébergement qui peuvent utiliser le service gratuit LetsEncrypt ou une autre source. Sinon, ils sont disponibles commercialement auprès d’autorités si vous êtes en mesure de générer la demande de signature de certificat.

Pour le mode _subdomain_, l’utilisation d’un certificat SSL wildcard s’accordera parfaitement avec un domaine wildcard et permettra au certificat de faire autorité pour le domaine racine et tous les _subdomains_ sans configuration superflue.

Cependant, il convient de noter que les certificats SSL wildcard peuvent ne pas fonctionner avec des services tels que Cloudflare, sauf si vous êtes sur un plan entreprise ou si vous définissez l’entrée sur DNS uniquement, auquel cas toute la mise en cache et l’optimisation sont contournées.

D’emblée, Ultimate Multisite fournit une solution à ce problème, démontrant notre vaste expérience des besoins des multisites WordPress. L’activation de ce simple module complémentaire permettra à Ultimate Multisite d’utiliser vos identifiants Cloudflare pour ajouter automatiquement des entrées DNS pour les sites réseau dans Cloudflare et définir leur mode sur « proxied ». De cette manière, chaque sous-site du réseau, lors de sa création, bénéficiera de la protection complète et des avantages de Cloudflare, y compris SSL.

Selon la nature et l’objectif de votre installation Ultimate Multisite, il peut être nécessaire que les clients utilisent leurs propres domaines. Dans ce cas, l’administrateur réseau est chargé de résoudre deux problèmes. Premièrement, l’hébergement du nom de domaine et, deuxièmement, les certificats SSL pour le domaine.

Pour beaucoup, l’utilisation de Cloudflare est une option simple. Le client n’a qu’à placer son domaine sur Cloudflare, pointer un CNAME vers le domaine racine de Ultimate Multisite et mapper son domaine dans Ultimate Multisite pour commencer à profiter de son nom de domaine personnalisé.

En dehors de cela, des solutions alternatives doivent être recherchées, ce qui explique pourquoi Ultimate Multisite recommande une liste de fournisseurs compatibles. Cela tient au fait que le processus de configuration de DNS et SSL peut être non trivial. Cependant, grâce à l’intégration de Ultimate Multisite avec ces fournisseurs, une grande partie de la complexité est éliminée et la procédure est automatisée.

#### Plugins {#plugins-1}

Il est très probable que vous ayez besoin de plugins supplémentaires pour fournir des fonctionnalités à vos clients ou aux sites réseau. Tous les plugins fonctionnent-ils avec WordPress Multisite et Ultimate Multisite ? Eh bien, cela dépend.

Bien que la plupart des plugins soient installables dans un WordPress Multisite, leur activation et leur octroi de licence varient d’un auteur à l’autre.

Le défi réside dans la manière dont les licences sont appliquées, certains plugins exigeant une licence par domaine. Cela signifie que, pour certains plugins, l’administrateur réseau doit activer manuellement la licence de chaque plugin sur chaque nouveau site.

Il serait donc préférable de vérifier auprès de l’auteur du plugin comment son plugin fonctionnerait avec un WordPress Multisite, ainsi que toute exigence ou procédure particulière requise pour lui attribuer une licence.

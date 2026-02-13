---
title: Qu'est-ce que WordPress Multisite ?
sidebar_position: 15
_i18n_hash: 5cb80eb341ce29b88cd433057da8bea2
---
# Qu'est-ce que WordPress Multisite ?

Dans son cœur, WordPress propose une fonctionnalité appelée « Multisite » qui remonte à 2010 lors du lancement de WordPress 3.0. Depuis, elle a reçu plusieurs révisions visant à introduire de nouvelles fonctionnalités et à renforcer la sécurité.

Essentiellement, un réseau WordPress multisite peut être envisagé ainsi : une université maintient une seule installation de WordPress, mais chaque faculté gère son propre site WordPress.

## 

## Qu'est-ce exactement que WordPress Multisite ?

Multisite est une fonctionnalité de WordPress qui permet à plusieurs sites de partager une seule installation WordPress. Lorsqu'un multisite est activé, le site WordPress original est converti pour prendre en charge ce que l'on appelle généralement un **réseau de sites**.

Ce réseau partage le système de fichiers (c’est-à-dire que **les extensions et les thèmes sont également partagés**), la base de données, les fichiers principaux de WordPress, le wp-config.php, etc.

Cela signifie que les mises à jour de WordPress, des thèmes et des extensions doivent être effectuées une seule fois pour tous vos sites du réseau, car ils partagent les mêmes fichiers sur le système de fichiers.

Ce fait constitue l’un des principaux avantages du multisite, car il vous permet d’augmenter le nombre de sites que vous gérez tout en conservant le même nombre de tâches à effectuer pour maintenir les sites de vos clients.

## 

## Sous-domaine ou sous-répertoire ?

Il existe deux modes d'exécution d'un WordPress multisite – et vous devez en choisir un lors de la conversion de votre installation WordPress ordinaire en une installation multisite :

**Sous-domaine :** ex. : [site.domain.com](http://site.domain.com)

…ou

**Sous-répertoire :** ex. : [yourdomain.com/site](http://yourdomain.com/site)

Chaque mode présente des avantages et des inconvénients que vous devez prendre en compte lors de cette décision.

Une chose importante à noter cependant : une fois votre décision prise, changer votre réseau d'un sous-répertoire à un sous-domaine ou inversement est vraiment difficile – surtout si vous avez déjà un certain nombre de sites créés.

Avant de prendre cette décision, voici quelques points à garder à l'esprit :

**Sous-répertoire Mode** est le plus simple en termes de configuration et de maintenance. Cela se produit parce que tous les sites ne sont que des chemins attachés au domaine principal (par ex. : [yourdomain.com/subsite](http://yourdomain.com/subsite)). En conséquence, vous n’avez besoin que d’un **certificat SSL** pour le domaine principal et cela couvrira l’ensemble du réseau.

En même temps, en raison de sa structure d’URL, Google et la plupart des autres moteurs de recherche considéreront tous les sous-sites de votre réseau basé sur des sous-répertoires comme un seul site gigantesque. En conséquence, le contenu ajouté aux sous-sites par vos clients finaux pourrait affecter la performance SEO de votre site d’accueil, par exemple. Le niveau d’impact est discutable et il est possible d’affirmer que disposer d’une telle configuration peut même être bénéfique pour la performance SEO.

**Sous-domaine Mode** est un peu plus complexe à mettre en place, mais sa structure d’URL (par ex. : [subsite.yournetwork.com](http://subsite.yournetwork.com)) est généralement perçue comme plus « professionnelle ».

L'un des principaux défis lors de la mise en place du mode sous-domaine est la couverture SSL (HTTPS) pour l’ensemble du réseau. Cela vient du fait que les navigateurs considèrent les sous-domaines comme des entités isolées. En conséquence, vous aurez besoin d’un certificat SSL différent pour chaque sous-domaine de votre réseau, ou d’un type spécial de certificat appelé **certificat SSL générique (Wildcard SSL)**. Ces dernières années, les hébergeurs et les panneaux de contrôle améliorent leur offre en matière de provisionnement SSL et certains proposent des certificats génériques d’un simple clic, réduisant ainsi l’écart de complexité entre les deux modes.

Contrairement au mode sous-répertoire, les sous-sites d’un réseau basé sur des sous-domaines sont considérés par les moteurs de recherche comme des sites Web distincts, ce qui signifie que le contenu présent sur un sous-site n’interfère pas du tout avec la performance SEO des autres sous-sites.

## Le Super Admin

Les installations WordPress mono-site vous permettent d’ajouter un nombre illimité d’utilisateurs et de leur attribuer différents rôles d’utilisateur avec des autorisations différentes.

Dans WordPress Multisite, un nouveau type d’utilisateur est débloqué : **le super admin** – et un nouveau panneau d’administration est débloqué : **le panneau d’administration du réseau**.

Comme son nom l’indique, le super admin possède des super-pouvoirs sur le réseau, étant capable de gérer tous ses sous-sites, extensions, thèmes, tout !

Une fois que vous avez converti votre installation WordPress mono-site en multisite, l’administrateur original du site mono-site sera automatiquement promu super admin.

Les extensions et les thèmes ne peuvent être installés ou désinstallés depuis le panneau d’administration du réseau que par les super admins. Les administrateurs de sous-site peuvent ensuite choisir d’activer ou de désactiver ces extensions ou thèmes, sauf si le super admin du réseau active une extension, ce qui la rend active pour tous les sous-sites en permanence.

_Note : comme vous pouvez le voir, inviter quelqu’un dans votre réseau et lui accorder le statut de super admin donne à cet utilisateur un contrôle total sur votre réseau. Par exemple, d’autres super admins peuvent même retirer votre statut de super admin, vous verrouillant ainsi hors de votre propre panneau d’administration du réseau. Afin de permettre aux clients d’Ultimate Multisite d’avoir un contrôle granulaire sur ce que les super admins supplémentaires peuvent faire, nous avons un module complémentaire appelé Support Agents. Ce module complémentaire vous permet de créer un autre type d’utilisateur : un agent — avec uniquement les autorisations dont il pourrait avoir besoin pour effectuer ses tâches sur le réseau._

## Qu’est-ce qui est partagé entre les sous-sites et qu’est‑ce qui ne l’est pas ?

Comme nous l’avons mentionné précédemment, l’un des principaux avantages de WordPress multisite est que tous les sous-sites partagent les mêmes configurations, fichiers principaux, thèmes, extensions, fichiers principaux de WordPress, etc.

Cependant, il existe des éléments qui sont bien délimités au niveau de chaque sous-site.

\- Par exemple, chaque sous-site dispose de son propre dossier de téléchargements. En conséquence, les téléchargements effectués par les utilisateurs d’un sous-site particulier ne peuvent pas être accessibles depuis un autre sous-site.

\- Chaque sous-site possède son propre panneau d’administration dédié et peut activer ou désactiver des extensions ou des thèmes, sauf s’ils ont été activés au niveau du réseau par un super admin.

\- La plupart des tables de base de données sont créées pour chaque sous-site, ce qui signifie que les articles, commentaires, pages, paramètres, etc. sont délimités pour chaque sous-site.

## Gestion des utilisateurs sur WordPress Multisite

Un sujet délicat sur WordPress multisite est la gestion des utilisateurs. La table des utilisateurs WordPress est l’une des rares qui est partagée entre tous les sous-sites.

Cette configuration peut générer certains problèmes en fonction de ce que vous prévoyez de construire avec votre réseau. L’exemple ci-dessous aide à illustrer le problème le plus pressant.

Imaginez le scénario suivant :

Vous créez un réseau WordPress multisite et commencez à proposer des sous-sites contre un abonnement mensuel à des personnes qui souhaitent avoir une boutique e‑commerce.

Vous obtenez votre premier client payant – John. Vous créez un site pour John sur votre réseau, installez toutes les extensions nécessaires, puis créez un utilisateur pour John afin qu’il puisse gérer sa boutique.

Ensuite, arrive un deuxième client – Alice. Vous faites la même chose pour elle et elle a maintenant une boutique sur votre réseau également.

John et Alice sont tous deux vos clients, mais ils ne se connaissent pas. Plus important encore, si l’un d’eux visite le site Web de la boutique de l’autre, il n’y a aucun moyen de savoir que cette boutique est hébergée sur le même réseau de sites.

Un jour, John a besoin d’acheter une nouvelle paire de chaussures et il trouve les chaussures parfaites dans la boutique d’Alice. Lorsqu’il essaie de finaliser l’achat, il reçoit un message d’erreur « e‑mail déjà utilisé », ce qui est bizarre car John est 100 % sûr que c’est la première fois qu’il visite le site Web d’Alice.

Ce qui s’est passé, c’est que l’utilisateur de John est partagé sur l’ensemble du réseau, donc lorsqu’il essaie de créer un compte pour finaliser le paiement sur le site d’Alice, WordPress détecte qu’un utilisateur avec la même adresse e‑mail existe déjà et génère une erreur.

_Note : Nous réalisons à quel point cela peut être problématique selon votre cas d’utilisation, c’est pourquoi Ultimate Multisite dispose d’une option qui contourne les vérifications régulières pour un utilisateur existant, permettant de créer plusieurs comptes en utilisant la même adresse e‑mail. Chaque compte est lié à un sous‑site, de sorte que le risque de collision est réduit au minimum. Dans l’exemple ci-dessus, John ne recevrait pas de message d’erreur et pourrait acheter ces chaussures sans problème. Cette option s’appelle Activer les comptes multiples, et peut être activée sur Ultimate Multisite → Paramètres → Connexion & Enregistrement._

Même si la table des utilisateurs est partagée, les utilisateurs peuvent être ajoutés et supprimés des sous‑sites par les administrateurs de sous‑site ou le super admin, et ils peuvent même avoir des rôles d’utilisateur différents sur différents sous‑sites.

## Considérations de performance

WordPress multisite est vraiment puissant en ce qui concerne le nombre de sites qu’il peut prendre en charge. Cela peut être vérifié par le fait que [WordPress.com](https://WordPress.com), Edublogs et Campuspress sont tous des services basés sur un multisite et chacun héberge des milliers de sites.

Bien qu’en théorie il n’y ait pas de nombre maximum de sites que vous puissiez héberger sur une seule installation WordPress multisite, en pratique le nombre de sites que vous pouvez exécuter de manière satisfaisante peut varier considérablement en fonction de plusieurs facteurs : la dynamique des sites, les extensions disponibles pour les sous‑sites, etc.

En règle générale, plus votre réseau est simple, mieux c’est. Favoriser les sites où le contenu n’est pas vraiment dynamique (ce qui les rend de bons candidats pour des stratégies de mise en cache agressives) et garder la pile d’extensions aussi légère que possible (plus le nombre d’extensions actives est faible, mieux c’est) peut augmenter considérablement le nombre de sous‑sites que vous pouvez héberger.

Le meilleur est que, comme tout est WordPress ici, les mêmes outils que vous connaissez déjà et appréciez pour les améliorations de performance fonctionneront également pour un réseau multisite.

Le principal goulot d’étranglement pour le multisite est la base de données, mais si tout le reste est correctement configuré, il faut plusieurs milliers de sites avant de devoir s’en préoccuper. Même dans ce cas, il existe des solutions qui peuvent être ajoutées progressivement à ce stade (par exemple des solutions de sharding de base de données).

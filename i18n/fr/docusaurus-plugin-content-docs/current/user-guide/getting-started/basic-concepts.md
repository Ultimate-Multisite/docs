---
title: Concepts de base
sidebar_position: 1
_i18n_hash: 03ddda7b2873ef4873873b81a1ee546b
---
# Concepts de base

Pour un nouvel utilisateur de WordPress Multisite et quelqu'un qui vient de commencer à utiliser Ultimate Multisite, il peut y avoir beaucoup de nouveaux mots et expressions à assimiler au début. Les apprendre est une tâche importante car vous devrez comprendre la plateforme et son fonctionnement global.

Dans cet article, nous allons tenter de définir et d'expliquer certains des concepts clés de WordPress. Certains sont plus pertinents pour les utilisateurs, d'autres pour les développeurs, et certains pour les deux.

## WordPress Multisite

WordPress **Multisite** est un type d'installation WordPress qui vous permet de créer et de gérer un réseau de plusieurs sites Web à partir d'un seul tableau de bord WordPress. Vous pouvez gérer tout, y compris le nombre de sites, les fonctionnalités, les thèmes et les rôles d'utilisateur. Il est possible de gérer des centaines, voire des milliers de sites.

## Réseau

En termes de WordPress, un réseau multisite est un endroit où un certain nombre de **subsites** peuvent être gérés à partir d'un seul tableau de bord. Bien que la création d'un réseau multisite diffère selon les fournisseurs d'hébergement, le résultat final est généralement quelques directives supplémentaires dans le fichier **wp-config.php** pour indiquer à WordPress qu'il fonctionne en ce mode spécifique.

Il existe plusieurs différences distinctes entre un réseau multisite et une installation WordPress autonome que nous allons brièvement aborder.

## Base de données

Une base de données est un ensemble structuré et organisé de données. En terminologie informatique, une base de données désigne le logiciel utilisé pour stocker et organiser les données. Pensez-y comme à un classeur où vous stockez les données dans différentes sections appelées tables.

WordPress Multisite utilise une seule base de données et chaque sous-site obtient ses propres tables avec l'ID du blog dans le préfixe, donc une fois que vous installez une installation réseau, votre base de données et créez un sous-site, vous devriez avoir ces tables :

_wp_1_options_ \- table des options pour le premier sous-site  
_wp_2_options_ \- table des options pour le second sous-site

## Fournisseur d'hébergement

Un fournisseur d'hébergement est une société qui permet aux entreprises et aux particuliers de rendre leurs sites Web disponibles sur le World Wide Web. Les services offerts par les fournisseurs d'hébergement varient, mais incluent généralement la conception de sites Web, l'espace de stockage sur un serveur et la connectivité à Internet.

## Domaine

Un nom de domaine est une adresse que les gens utilisent pour visiter votre site. Il indique au navigateur Web où chercher votre site. Tout comme une adresse postale, un domaine est la façon dont les gens visitent votre site Web en ligne. Et, comme avoir un panneau devant votre magasin. Si vous souhaitez visiter notre site Web, vous devrez taper notre adresse Web dans l'adresse de votre navigateur, qui est [_www.ultimatemultisite.com_](http://www.ultimatemultisite.com) _,_ où [**ultimatemultisite.com**](http://ultimatemultisite.com) est le nom de domaine.

## Sous-domaine

Un sous-domaine est un type de hiérarchie de site Web sous le domaine principal, mais au lieu d'utiliser des dossiers pour organiser le contenu d'un site Web, il obtient un site Web à part entière. Il est présenté sous la forme [**https://site1.domain.com/**](https://site1.domain.com/) où _site1_ est le nom du sous-domaine et [_domain.com_](http://domain.com) est le domaine principal.

## Sous-répertoire

Un sous-répertoire est un type de hiérarchie de site Web sous un domaine racine qui utilise des dossiers pour organiser le contenu d'un site Web. Un sous-répertoire est identique à un sous-dossier et les noms peuvent être utilisés de manière interchangeable. Il est présenté sous la forme [**https://domain.com/site1**](https://domain.com/site1) où _site1_ est le nom du sous-répertoire et [_domain.com_](http://domain.com) est le domaine principal.

## Sous-site

Un sous-site est un site enfant que vous créez sur un réseau Multisite. Il peut être un **sous-domaine** ou un **sous-répertoire** selon la configuration de votre installation WordPress Multisite.

## Super Administrateur

Un Super Administrateur WordPress est un rôle d'utilisateur disposant de toutes les capacités pour gérer tous les sous-sites d'un réseau Multisite. Pour les utilisateurs Multisite, c'est le **niveau d'accès le plus élevé** que vous pouvez fournir à votre installation WordPress.

## Extension

En général, une extension est un ensemble de code qui ajoute des fonctionnalités supplémentaires à votre site WordPress. Cela peut être aussi simple que de changer le logo de connexion ou aussi complexe que d'ajouter des fonctionnalités de commerce électronique. _Woocommerce and Contact Form_ sont des exemples d'extension.

Sur un WordPress Multisite, les extensions ne peuvent être installées que depuis le tableau de bord d'administration réseau par le Super Administrateur. Les administrateurs de sous-site ne peuvent que activer et désactiver les extensions au sein de leur sous-site.

## Thèmes

Un thème WordPress est un groupe de fichiers (_graphismes, feuilles de style et code_) qui détermine l'apparence globale du site. Il fournit tous les styles frontaux tels que la mise en forme des polices, la mise en page des pages, les couleurs, etc.

Comme les extensions, les thèmes dans WordPress Multisite ne peuvent être installés que par le Super Administrateur et peuvent être activés au niveau du sous-site par les administrateurs de sous-site.

## Modèle de site

**Site Template** est un site modèle que vous pouvez utiliser comme base lors de la création de nouveaux sites dans votre réseau.

Cela signifie que vous pouvez créer un site de base, activer différentes extensions, définir un thème actif et le personnaliser de la manière que vous souhaitez. Ensuite, lorsque votre client crée un nouveau compte, au lieu d'obtenir un site WordPress par défaut sans contenu significatif à l'intérieur, il obtiendra une copie de votre site de base avec toutes les personnalisations et contenus déjà en place.

## Cartographie de domaine

**Domain mapping** avec WordPress est une façon de rediriger les utilisateurs vers l'hôte correct, via l'adresse d'un site Web. Dans un WordPress Multisite, les sous-sites sont créés en utilisant soit un sous-répertoire, soit un sous-domaine. Ce que fait la cartographie de domaine, c'est permettre aux utilisateurs de sous-site d'utiliser un domaine de premier niveau comme [**joesbikeshop.com**](http://joesbikeshop.com) pour rendre l'adresse de leur site plus professionnelle.

## SSL

SSL signifie **Secure Sockets Layer**. C'est un certificat numérique qui authentifie l'identité d'un site Web et permet une connexion chiffrée. De nos jours, il est utilisé comme technologie standard pour sécuriser une connexion Internet et protéger toutes les données sensibles transmises entre deux systèmes, empêchant les criminels de lire et de modifier toute information transférée, y compris les détails personnels potentiels. Les navigateurs modernes exigent le SSL, ce qui le rend essentiel lors de la création et de la gestion d'un site Web.

## Médias

Les médias sont des images, de l'audio, de la vidéo et d'autres fichiers qui composent un site Web.

Les sites du réseau partagent une seule base de données dans un WordPress Multisite, ils maintiennent des chemins séparés sur le système de fichiers pour les fichiers multimédias.

L'emplacement standard WordPress (wp-content/uploads) reste inchangé ; cependant, son chemin est modifié pour refléter l'ID unique du site du réseau. Par conséquent, les fichiers multimédias d'un site du réseau apparaissent comme wp-contents/uploads/site/[id].

## Permaliens

Les permaliens sont les URL permanentes de votre article de blog ou page individuel au sein de votre site. Les permaliens sont également appelés **pretty links**. Par défaut, les URL WordPress utilisent le format de chaîne de requête qui ressemble à ceci :

[**http://www.example.com/registration**](http://www.example.com/registration)

## Ultimate Multisite

Ultimate Multisite est une extension WordPress, conçue pour les installations WordPress Multisite, qui transforme votre installation WordPress en un réseau premium de sites – comme [WordPress.com](https://WordPress.com) – permettant aux clients de créer des sites via des frais mensuels, trimestriels ou annuels (vous pouvez également créer des plans gratuits).

## Formulaire de paiement

Checkout Form est un formulaire de commande unique ou à plusieurs étapes qui implique la création de sous-site, d'adhésion et de comptes utilisateur via l'inscription Ultimate Multisite. Il se compose de différents champs et formulaires de paiement qu'un utilisateur doit soumettre pendant le processus d'inscription.

## Webhook

Un webhook (également appelé rappel Web ou API HTTP push) est un moyen pour une application de fournir à d'autres applications des informations en temps réel. Un webhook transmet des données aux autres applications au fur et à mesure, ce qui signifie que vous obtenez les données immédiatement.

**Ultimate Multisite webhooks** ouvre des possibilités infinies, permettant aux administrateurs réseau de réaliser toutes sortes d'intégrations folles mais utiles, surtout lorsqu'ils sont utilisés en conjonction avec des services comme _Zapier and IFTTT_.

## Événements

Un événement est une action qui se produit à la suite d'une action de l'utilisateur ou d'une autre source, comme un clic de souris. Ultimate Multisite conserve un enregistrement de tous les événements et journaux qui se produisent dans l'ensemble de votre réseau. Il suit les différentes activités qui se déroulent dans votre multisite, comme les changements de plan.

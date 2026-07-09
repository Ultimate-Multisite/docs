---
title: Extraits de code
sidebar_position: 1
_i18n_hash: 2284b14474d86f665fa7c84cc305553e
---
# Extraits de code pour v2

En gros, les extraits de code pour **WordPress** sont utilisés pour effectuer certaines actions qui nécessiteraient autrement une petite extension dédiée. Ces extraits de code sont placés dans l’un des fichiers du cœur de WordPress ou du thème (généralement le fichier functions.php de votre thème), ou ils peuvent être utilisés comme MU plugin.

Dans cet article, nous vous montrerons trois extraits de code qui peuvent être utilisés avec **Ultimate Multisite v2** :

  * [**Modifier la position de l’élément de menu Account**](#changing-the-position-of-the-account-menu-item)

  * [**Comment vérifier si l’utilisateur relève d’un forfait donné et/ou possède un abonnement actif**](#how-to-check-if-the-user-is-under-a-given-plan-andor-has-an-active-subscription)

  * [**Résoudre les problèmes CORS avec les icônes de police dans les domaines mappés**](#fixing-cors-issues-with-font-icons-in-mapped-domains)

## Modifier la position de l’élément de menu Account

Pour modifier la position de l’élément de menu Account sur le Dashboard de votre client, ajoutez simplement l’extrait de code suivant au functions.php du thème actif de votre site principal. Vous pouvez également placer l’extrait dans l’un de vos mu-plugins ou extensions personnalisées.

add_filter('wu_my_account_menu_position', function() { return 10; // Tweak this value to place the menu in the desired position.

## Comment vérifier si l’utilisateur relève d’un forfait donné et/ou possède un abonnement actif

En tant qu’administrateur réseau, vous devrez peut-être créer des fonctions personnalisées qui effectueront des actions de base ou rendront un service/une fonctionnalité disponible pour un groupe sélectionné d’abonnés ou d’utilisateurs finaux, en fonction de l’état de leur abonnement et du forfait auquel ils sont abonnés.

Ces fonctions natives de Ultimate Multisite vous aideront pour cela.

Pour vérifier si l’utilisateur est membre d’un forfait donné, vous pouvez utiliser la fonction :

wu_has_plan($user_id, $plan_id)

Pour vérifier si l’abonnement est actif, vous pouvez utiliser la fonction :

wu_is_active_subscriber($user_id)

Ci-dessous se trouve un exemple d’extrait qui vérifie si l’utilisateur actuel relève d’un forfait spécifique (_ID de forfait 50_) et si l’abonnement de l’utilisateur est actif.

$user_id = get_current_user_id();$plan_id = 50;if (wu_has_plan($user_id, $plan_id) && wu_is_active_subscriber($user_id)) { // USER IS MEMBER OF PLAN AND HIS SUBSCRIPTION IS ACTIVE, DO STUFF} else { // USER IS NOT A MEMBER OF PLAN -- OR -- HIS SUBSCRIPTION IS NOT ACTIVE, DO OTHER STUFF} // end if;

Notez que _**wu_has_plan**_ nécessite un « ID de forfait » pour fonctionner.

Pour obtenir l’ID d’un forfait, vous pouvez aller dans **Ultimate Multisite > Produits**. L’ID de chaque produit sera affiché à droite du tableau.

Notez que les utilisateurs ne peuvent être abonnés qu’à un **forfait** , et non à un package ou à un service, car ceux-ci ne sont que des modules complémentaires pour un **forfait**.

![Liste des produits affichant les ID de forfait](/img/admin/products-list.png)

## Résoudre les problèmes CORS avec les icônes de police dans les domaines mappés
## Résoudre les problèmes CORS avec les icônes de police dans les domaines mappés

Après avoir mappé un domaine vers un sous-site, vous pourriez constater que le site a du mal à charger les polices personnalisées. Cela est dû à un blocage cross-origin dans les paramètres de votre serveur.

Étant donné que les fichiers de police sont presque toujours chargés directement depuis le CSS, notre extension de mapping de domaine n’est pas en mesure de réécrire les URL pour utiliser le domaine mappé au lieu de l’original. Ainsi, pour résoudre le problème, vous devrez modifier les fichiers de configuration de votre serveur.

Vous trouverez ci-dessous des extraits de code pour résoudre le problème avec Apache et NGINX. Ces changements nécessitent des connaissances avancées des fichiers de configuration serveur (fichiers .htaccess et fichiers de configuration NGINX). Si vous n’êtes pas à l’aise pour effectuer vous-même ces changements, envoyez cette page aux agents d’assistance de votre hébergeur lorsque vous demandez de l’aide.

### Apache

Dans votre fichier .htaccess, ajoutez :

<FilesMatch “.(ttf|ttc|otf|eot|woff|font.css|css)$”> Header set Access-Control-Allow-Origin “*”

### NGINX

Dans le fichier de configuration de votre serveur (l’emplacement varie d’un serveur à l’autre), ajoutez :

location ~ .(ttf|ttc|otf|eot|woff|font.css|css)$ { add_header Access-Control-Allow-Origin “*”;}

---
title: Extraits de code
sidebar_position: 1
_i18n_hash: 5a7a9a95be84476f87a2c1ca0a4a2be5
---
# Extraits de code pour v2

En principe, les extraits de code pour **WordPress** sont utilisés pour effectuer certaines actions qui pourraient autrement nécessiter un plugin dédié plus petit. Ces extraits de code sont placés dans l'un des fichiers principaux de WordPress ou du thème (généralement le fichier functions.php de votre thème) ou peuvent être utilisés comme plugin MU.

Dans cet article, nous vous présenterons trois extraits de code pouvant être utilisés avec **Ultimate Multisite v2** :

  * [**Changement de la position de l'élément de menu Compte**](#changing-the-position-of-the-account-menu-item)

  * [**Comment vérifier si l'utilisateur est sous un plan donné et/ou possède un abonnement actif**](#how-to-check-if-the-user-is-under-a-given-plan-andor-has-an-active-subscription)

  * [**Correction des problèmes CORS avec les icônes de police dans les domaines mappés**](#fixing-cors-issues-with-font-icons-in-mapped-domains)

## Changement de la position de l'élément de menu Compte {#changing-the-position-of-the-account-menu-item}

Pour changer la position de l'élément de menu Compte sur le tableau de bord de votre client, ajoutez simplement l'extrait de code suivant au fichier functions.php du thème actif de votre site principal. Vous pouvez également placer l'extrait dans l'un de vos plugins MU ou plugins personnalisés.

add_filter('wu_my_account_menu_position', function() { return 10; // Tweak this value to place the menu in the desired position.

## Comment vérifier si l'utilisateur est sous un plan donné et/ou possède un abonnement actif {#how-to-check-if-the-user-is-under-a-given-plan-andor-has-an-active-subscription}

En tant qu'administrateur réseau, vous devrez peut-être créer des fonctions personnalisées qui effectueront des actions de base ou rendront un service/fonctionnalité disponible à un groupe sélectionné d'abonnés ou d'utilisateurs finaux, en fonction du statut de leur abonnement et du plan auquel ils sont abonnés.

Ces fonctions natives d'Ultimate Multisite vous aideront à ce faire.

Pour vérifier si l'utilisateur est membre d'un plan donné, vous pouvez utiliser la fonction :

wu_has_plan($user_id, $plan_id)

Pour vérifier si l'abonnement est actif, vous pouvez utiliser la fonction :

wu_is_active_subscriber($user_id)

Voici un extrait d'exemple qui vérifie si l'utilisateur actuel est sous un plan spécifique (_Plan ID 50_) et si son abonnement est actif.

$user_id = get_current_user_id();$plan_id = 50;if (wu_has_plan($user_id, $plan_id) && wu_is_active_subscriber($user_id)) { // USER IS MEMBER OF PLAN AND HIS SUBSCRIPTION IS ACTIVE, DO STUFF} else { // USER IS NOT A MEMBER OF PLAN -- OR -- HIS SUBSCRIPTION IS NOT ACTIVE, DO OTHER STUFF} // end if;

Notez que _**wu_has_plan**_ nécessite un "Plan ID" pour fonctionner.

Pour obtenir l'ID d'un plan, vous pouvez accéder à **Ultimate Multisite > Products**. L'ID de chaque produit sera affiché à droite du tableau.

Notez que les utilisateurs ne peuvent s'abonner qu'à un **Plan**, pas à un Package ou Service, car ce sont uniquement des add-ons pour un **Plan**.

![Products list showing plan IDs](/img/admin/products-list.png)

## Correction des problèmes CORS avec les icônes de police dans les domaines mappés {#fixing-cors-issues-with-font-icons-in-mapped-domains}

Après avoir mappé un domaine à un sous-site, vous constaterez peut-être que le site a des difficultés à charger des polices personnalisées. Cela est dû à un blocage cross-origin dans les paramètres de votre serveur.

Comme les fichiers de police sont presque toujours chargés directement depuis le CSS, notre plugin de mappage de domaine ne peut pas réécrire les URL pour utiliser le domaine mappé à la place du domaine original. Pour corriger le problème, vous devrez modifier vos fichiers de configuration serveur.

Voici des extraits de code pour corriger le problème sous Apache et NGINX. Ces modifications nécessitent une connaissance avancée des fichiers de configuration serveur (.htaccess et fichiers de configuration NGINX). Si vous n'êtes pas à l'aise pour effectuer ces modifications vous-même, envoyez cette page aux agents de support de votre hébergeur lorsque vous avez besoin d'aide.

### Apache

Dans votre fichier .htaccess, ajoutez :

<FilesMatch “.(ttf|ttc|otf|eot|woff|font.css|css)$”> Header set Access-Control-Allow-Origin “*” 

### NGINX

Dans votre fichier de configuration serveur (l'emplacement varie d'un serveur à l'autre), ajoutez :

location ~ .(ttf|ttc|otf|eot|woff|font.css|css)$ { add_header Access-Control-Allow-Origin “*”;}

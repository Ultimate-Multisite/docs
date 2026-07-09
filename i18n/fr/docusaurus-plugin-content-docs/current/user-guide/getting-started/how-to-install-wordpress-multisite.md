---
title: Comment installer WordPress Multisite
sidebar_position: 2
_i18n_hash: 81ac2c706ca3b3b48bacaf85039d4753
---
# Comment installer WordPress Multisite ?

WordPress Multisite vous permet d’avoir un réseau de sites sur une seule installation. Il s’agit d’une fonctionnalité intégrée, mais elle n’est pas active par défaut.

:::tip
Ultimate Multisite inclut un **[assistant de configuration Multisite intégré](./multisite-setup-wizard)** qui automatise tout ce processus. Si Ultimate Multisite est installé, nous vous recommandons d’utiliser l’assistant plutôt que de suivre les étapes manuelles ci-dessous.
:::

Comme Ultimate Multisite est un plugin réservé au réseau, dans ce tutoriel, vous allez apprendre à installer et configurer WordPress Multisite manuellement. Ce texte est basé sur [Comment installer et configurer un réseau WordPress Multisite](https://www.wpbeginner.com/wp-tutorials/how-to-install-and-setup-wordpress-multisite-network/), de WPBeginner.

**Points auxquels prêter attention avant de créer votre réseau multisite :**

  * Choisissez un bon hébergement WordPress ! Les sites web d’un réseau partagent les mêmes ressources serveur.

  * Si vous avez seulement quelques sites avec peu de trafic, l’hébergement mutualisé fonctionnera probablement pour vous.

  * La plupart des **hébergeurs WordPress gérés** proposent Multisite prêt à l’emploi (ils installent WordPress avec Multisite déjà activé et configuré pour vous). C’est le cas de WP Engine, Closte, Cloudways, etc. Si vous ne savez pas si c’est le cas de votre hébergeur, contactez leur support avant de poursuivre ce tutoriel.

  * Il est également utile d’être à l’aise avec l’installation de WordPress et la modification de fichiers à l’aide de FTP .

_**IMPORTANT**_ **:** Si vous configurez un réseau multisite sur un site web WordPress existant, n’oubliez pas de :

  * Créer une sauvegarde complète de votre site WordPress

  * Désactiver tous les plugins de votre site en allant sur votre page de plugins, en sélectionnant _Désactiver_ dans les actions groupées, puis en cliquant sur _Appliquer_

<!-- Capture d’écran indisponible : page des plugins WordPress affichant l’action groupée de désactivation -->

Pour activer Multisite, connectez-vous d’abord à votre site à l’aide d’un client FTP ou du gestionnaire de fichiers cPanel, puis ouvrez votre fichier wp-config.php pour le modifier.

Avant la ligne _*That’s all, stop editing! Happy blogging.*_, ajoutez l’extrait de code suivant :

define('WP_ALLOW_MULTISITE', true);

Enregistrez et téléversez votre fichier wp-config.php sur le serveur.

Une fois la fonctionnalité multisite activée sur votre site, il est maintenant temps de configurer votre réseau.

Allez dans **Outils » Configuration du réseau**

<!-- Capture d’écran indisponible : menu Outils de WordPress affichant l’option Configuration du réseau -->

Vous devez maintenant indiquer à WordPress quel type de structure de domaine vous utiliserez pour les sites de votre réseau : sous-domaines ou sous-répertoires.

Si vous choisissez les sous-domaines, vous devez modifier vos paramètres DNS pour le mappage de domaine et vous assurer de configurer des _**sous-domaines wildcard**_ pour votre réseau multisite.

De retour à la Configuration du réseau, donnez un titre à votre réseau et assurez-vous que l’adresse e-mail dans l’e-mail de l’administrateur du réseau est correcte. Cliquez sur _Installer_ pour continuer.

<!-- Capture d’écran indisponible : page Configuration du réseau WordPress avec les champs de titre du réseau et d’e-mail administrateur -->

Ajoutez ce code, fourni par WordPress, à votre _**wp-config.php**_ :

define('MULTISITE', true); define('SUBDOMAIN_INSTALL', true); define('DOMAIN_CURRENT_SITE', 'multisite.local'); define('PATH_CURRENT_SITE', '/'); define('SITE_ID_CURRENT_SITE', 1); define('BLOG_ID_CURRENT_SITE', 1);

Et ce code, également fourni par WordPress, à votre fichier _**.htaccess**_ :

RewriteEngine On RewriteBase / RewriteRule ^index.php$ - [L]

# add a trailing slash to /wp-admin

RewriteRule ^wp-admin$ wp-admin/ [R=301,L]

RewriteCond %{REQUEST_FILENAME} -f [OR] RewriteCond %{REQUEST_FILENAME} -d RewriteRule ^ - [L] RewriteRule ^(wp-(content|admin|includes)._) $1 [L] RewriteRule ^(._.php)$ $1 [L] RewriteRule . index.php [L]

Utilisez un client FTP ou un gestionnaire de fichiers (si vous utilisez quelque chose comme cPanel, par exemple) pour copier et coller le code dans ces deux fichiers.

Enfin, reconnectez-vous à votre site WordPress pour accéder à votre réseau multisite.

**Il est important de tester et de vous assurer que vous pouvez créer un sous-site sur votre installation WordPress Multisite avant d’installer Ultimate Multisite.**

Pour créer un sous-site :

  1. Ouvrez le wp-admin de vos sites web

  2. Accédez à Mes sites > Sites (/wp-admin/network/sites.php)

  3. Cliquez sur Ajouter en haut

  4. Remplissez tous les champs :

  * Adresse du site — N’utilisez jamais « www »

  * Sous-domaine : [siteaddress.yourdomain.com](http://siteaddress.yourdomain.com)

  * Sous-répertoire : [yourdomain.com/siteaddress](http://yourdomain.com/siteaddress)

  * Titre du site — Titre du site, peut être modifié plus tard

  * E-mail administrateur — Défini comme utilisateur administrateur initial du sous-site

![Formulaire d’ajout d’un nouveau site dans WordPress Multisite](/img/admin/sites-list.png)

Après avoir rempli les champs, cliquez sur le bouton « Ajouter un site ». Une fois le nouveau sous-site créé, accédez-y pour vous assurer que le sous-site fonctionne.

## Problèmes courants :

### 1\. Je peux créer de nouveaux sites, mais ils ne sont pas accessibles.

Si vous avez choisi les sous-domaines, vous devez également configurer des sous-domaines wildcard pour votre réseau multisite.

Pour ce faire, allez dans le Dashboard du panneau de contrôle du compte d’hébergement de votre site web (par ex. cPanel/Plesk/Direct Admin selon votre hébergeur).

Trouvez une option pour « Domaines » ou « Sous-domaines ». Dans certains panneaux de contrôle, elle est libellée « Administration des domaines ».

Dans le champ de sous-domaine, saisissez un astérisque (*). Ensuite, il devrait vous demander de sélectionner un nom de domaine sous lequel vous souhaitez ajouter le sous-domaine.

La racine du document pour le nom de domaine sélectionné sera automatiquement détectée. Cliquez sur le bouton _Créer_ ou _Enregistrer_ pour ajouter votre sous-domaine wildcard. L’entrée devrait ressembler à « *.[mydomain.com](http://mydomain.com) »

---
title: Comment installer WordPress Multisite
sidebar_position: 2
_i18n_hash: ce5929a52ea69f8a4b769f6eab46445c
---
# Comment installer WordPress Multisite?

WordPress Multisite vous permet d'avoir un réseau de sites sur une seule installation. Il s'agit d'une fonctionnalité intégrée, mais elle n'est pas activée par défaut.

Comme Ultimate Multisite est un plugin uniquement réseau, dans ce tutoriel, vous allez apprendre comment installer et configurer WordPress Multisite. Ce texte est basé sur [How to Install and Setup WordPress Multisite Network](https://www.wpbeginner.com/wp-tutorials/how-to-install-and-setup-wordpress-multisite-network/), de WPBeginner.

**Points à prendre en compte avant de créer votre réseau multisite :**

* Obtenez un bon hébergement WordPress ! Les sites sur un réseau partagent les mêmes ressources serveur.
* Si vous n'avez qu'un couple de sites avec peu de trafic, l'hébergement partagé fonctionnera probablement pour vous.
* La plupart des **Managed WordPress hosting providers** offrent Multisite prêt à l'emploi (ils installent WordPress avec Multisite déjà activé et configuré pour vous). C'est le cas pour WP Engine, Closte, Cloudways, etc. Si vous n'êtes pas sûr que ce soit le cas pour votre hébergeur, contactez leur support avant de poursuivre ce tutoriel.
* Il est également utile de connaître l'installation de WordPress et la modification de fichiers via FTP .

_**IMPORTANT** **:** Si vous configurez un réseau multisite sur un site WordPress existant, n'oubliez pas de :_

* Créez une sauvegarde complète de votre site WordPress
* Désactivez tous les plugins de votre site en allant sur la page des plugins, en sélectionnant _Deactivate_ dans les actions groupées, puis en cliquant sur _Apply_

<!-- Screenshot unavailable: WordPress plugins page showing bulk deactivate action -->

Pour activer Multisite, connectez d'abord à votre site via un client FTP ou le gestionnaire de fichiers cPanel, puis ouvrez votre fichier wp-config.php pour l'éditer.

Avant la ligne _*That’s all, stop editing! Happy blogging.*_, ajoutez le fragment de code suivant :

```php
define('WP_ALLOW_MULTISITE', true);
```

Enregistrez et téléversez votre fichier wp-config.php sur le serveur.

Avec la fonctionnalité multisite activée sur votre site, il est maintenant temps de configurer votre réseau.

Allez dans **Outils » Configuration du réseau**

<!-- Screenshot unavailable: WordPress Tools menu showing Network Setup option -->

Vous devez maintenant indiquer à WordPress quel type de structure de domaine vous utiliserez pour les sites de votre réseau : sous-domaines ou sous-répertoires.

Si vous choisissez les sous-domaines, vous devez modifier vos paramètres DNS pour la cartographie de domaine et vous assurer de configurer les _**wildcard subdomains**_ pour votre réseau multisite.

Retour à la configuration du réseau, donnez un titre à votre réseau et assurez-vous que l'adresse e-mail dans l'e-mail d'administration du réseau est correcte. Cliquez sur _Install_ pour continuer.

<!-- Screenshot unavailable: WordPress Network Setup page with network title and admin email fields -->

Ajoutez ce code, fourni par WordPress, à votre _**wp-config.php**_ :

```php
define('MULTISITE', true);
define('SUBDOMAIN_INSTALL', true);
define('DOMAIN_CURRENT_SITE', 'multisite.local');
define('PATH_CURRENT_SITE', '/');
define('SITE_ID_CURRENT_SITE', 1);
define('BLOG_ID_CURRENT_SITE', 1);
```

Et ce code, également fourni par WordPress, à votre fichier _**.htaccess**_ :

```apache
RewriteEngine On
RewriteBase /
RewriteRule ^index.php$ - [L]
# add a trailing slash to /wp-admin
RewriteRule ^wp-admin$ wp-admin/ [R=301,L]
RewriteCond %{REQUEST_FILENAME} -f [OR]
RewriteCond %{REQUEST_FILENAME} -d
RewriteRule ^ - [L]
RewriteRule ^(wp-(content|admin|includes)._) $1 [L]
RewriteRule ^(._.php)$ $1 [L]
RewriteRule . index.php [L]
```

Utilisez un client FTP ou un gestionnaire de fichiers (si vous utilisez quelque chose comme cPanel, par exemple) pour copier et coller le code dans ces deux fichiers.

Enfin, reconnectez-vous à votre site WordPress pour accéder à votre réseau multisite.

**Il est important de tester et de s'assurer que vous pouvez créer un sous-site sur votre installation WordPress Multisite avant d'installer Ultimate Multisite.**

Pour créer un sous-site :

1. Ouvrez le wp-admin de votre site
2. Accédez à Mes sites > Sites (/wp-admin/network/sites.php)
3. Cliquez sur Ajouter nouveau en haut
4. Remplissez tous les champs :

* Adresse du site — Ne jamais utiliser « www »
* Sous-domaine : [siteaddress.yourdomain.com](http://siteaddress.yourdomain.com)
* Sous-répertoire : [yourdomain.com/siteaddress](http://yourdomain.com/siteaddress)
* Titre du site — Titre du site, peut être modifié plus tard
* E-mail d'administration — Définir comme l'utilisateur admin initial pour le sous-site

![Add new site form in WordPress Multisite](/img/admin/sites-list.png)

Après avoir rempli les champs, cliquez sur le bouton « Add site ». Une fois le nouveau sous-site créé, accédez-y pour vous assurer qu'il fonctionne correctement.

## Problèmes courants :

### 1\. Je peux créer de nouveaux sites mais ils ne sont pas accessibles.

Si vous avez choisi les sous-domaines, vous devez également configurer les sous-domaines génériques (wildcard) pour votre réseau multisite.

Pour ce faire, accédez au tableau de bord du panneau de contrôle de votre compte d'hébergement (par ex. cPanel/Plesk/Direct Admin selon votre hébergeur).

Recherchez une option « Domaines » ou « Sous-domaines ». Dans certains panneaux de contrôle, elle est intitulée « Domain administration ».

Dans le champ sous-domaine, entrez un astérisque (*). Ensuite, il vous sera demandé de sélectionner un nom de domaine sous lequel vous souhaitez ajouter le sous-domaine.

La racine du document pour le nom de domaine sélectionné sera automatiquement détectée. Cliquez sur le bouton _Create_ ou _Save_ pour ajouter votre sous-domaine générique. L'entrée devrait ressembler à « *.[mydomain.com](http://mydomain.com) ».

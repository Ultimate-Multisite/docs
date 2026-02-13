---
title: Extraits GitHub
sidebar_position: 3
_i18n_hash: fad95473848ba3a1089d657550a45182
---
# Comment utiliser les snippets Ultimate Multisite dans notre dépôt GitHub

Des extraits de code sont disponibles dans le dépôt GitHub et sont fréquemment demandés par les utilisateurs d'Ultimate Multisite qui souhaitent ajouter de petites fonctionnalités, telles que l'ajout d'un script Google Analytics sur les pages d'inscription ou la suppression d'une boîte méta du tableau de bord d'administration.

Cet article vous montrera comment utiliser, ou plus précisément où placer, ces codes.

Vous pouvez trouver les extraits sur le lien ci-dessous.

https://github.com/next-press/wp-ultimo-snippets/

Il existe 2 façons d'ajouter le code

  1. Dans le fichier functions.php de votre thème.

  2. Must-Use Plugins (mu-plugins)

# Comment ajouter le snippet dans le fichier functions.php de votre thème.

  1. Connectez-vous à votre tableau de bord d'administration du réseau WordPress et allez dans Thèmes > Éditeur de thème (voir capture d'écran ci-dessous).

  2. Sur la page « Edit Themes », assurez-vous que votre thème actif est sélectionné dans le menu déroulant situé en haut à droite de votre écran (#3 sur la capture d'écran ci-dessous).

  3. Cliquez sur le fichier functions.php dans la section « Theme Files » pour charger le fichier. Faites défiler vers le bas et collez l'extrait Ultimate Multisite que vous avez obtenu depuis le dépôt GitHub.

<!-- Screenshot unavailable: WordPress Theme Editor showing functions.php file editing -->

# Comment créer des Must-Use Plugins (mu-plugins)

WordPress possède une fonctionnalité qui vous permet de charger des fonctionnalités personnalisées appelées « Must-Use Plugins », ou « mu-plugins » pour faire court.

Ces mu-plugins spéciaux sont chargés avant tous les autres plugins réguliers et ne peuvent pas être désactivés. Dans un réseau multisite, le code de ces mu-plugins sera chargé sur tous les sites de votre installation.

1\. Utilisez FTP ou SSH pour accéder au système de fichiers de votre installation WordPress.

2\. Dans le répertoire wp-content de votre installation WordPress, créez un nouveau répertoire nommé : mu-plugins.

<!-- Screenshot unavailable: File manager showing wp-content directory with mu-plugins folder -->

3\. Créez un nouveau fichier PHP sur votre ordinateur nommé wu-snippet.php à l'aide de Notepad ou de tout éditeur de code.

4\. Placez l'extrait de code Ultimate Multisite que vous avez obtenu depuis le dépôt GitHub dans le fichier et enregistrez-le. Vous pouvez également ajouter ce code en haut de l'extrait pour étiqueter votre mu-plugin.

---
title: Extraits GitHub
sidebar_position: 3
_i18n_hash: c643f3d76aace8c15fd224b984af6633
---
# Comment utiliser les snippets Ultimate Multisite sur notre dépôt GitHub

Des snippets de code sont disponibles dans le dépôt GitHub et sont fréquemment demandés par les utilisateurs d’Ultimate Multisite qui souhaitent ajouter de petites fonctionnalités, comme ajouter un script Google Analytics sur les pages d’inscription ou masquer une boîte méta du Dashboard d’administration.

Cet article vous montrera comment utiliser ces codes, ou plus précisément où les placer.

Vous pouvez trouver les snippets sur le lien ci-dessous.

https://github.com/next-press/wp-ultimo-snippets/

Il existe 2 façons d’ajouter le code

  1. Dans le fichier functions.php de votre thème.

  2. Must-Use Plugins (mu-plugins)

# Comment ajouter le snippet dans le fichier functions.php de votre thème.

  1. Connectez-vous au Dashboard d’administration de votre réseau WordPress et allez dans Themes >Theme Editor (voir la capture d’écran ci-dessous).

  2. Sur la page "Edit Themes", assurez-vous que votre thème actif est sélectionné dans le champ de liste déroulante situé en haut à droite de votre écran (#3 sur la capture d’écran ci-dessous).

  3. Cliquez sur le fichier functions.php sous la section "Theme Files" pour charger le fichier. Faites défiler jusqu’en bas et collez le snippet Ultimate Multisite que vous avez obtenu depuis le dépôt GitHub.

<!-- Capture d’écran indisponible : WordPress Theme Editor montrant la modification du fichier functions.php -->

# Comment créer des Must-Use Plugins (mu-plugins)

WordPress dispose d’une fonctionnalité qui vous permet de charger une fonctionnalité personnalisée appelée "Must-Use Plugins", ou "mu-plugins" en abrégé.

Ces mu-plugins spéciaux sont chargés avant tous les autres plugins ordinaires, et ils ne peuvent pas être désactivés. Dans un réseau multisite, le code de ces mu-plugins sera chargé sur tous les sites de votre installation.

1\. Utilisez FTP ou SSH pour accéder au système de fichiers de votre installation WordPress.

2\. À l’intérieur du répertoire wp-content de votre installation WordPress, créez un nouveau répertoire nommé : mu-plugins.

<!-- Capture d’écran indisponible : gestionnaire de fichiers montrant le répertoire wp-content avec le dossier mu-plugins -->

3\. Créez un nouveau fichier PHP sur votre ordinateur nommé wu-snippet.php à l’aide de Notepad ou de tout éditeur de code.

4\. Placez le snippet de code Ultimate Multisite que vous avez obtenu depuis le dépôt GitHub dans le fichier et enregistrez-le. Vous pouvez également ajouter ce code au-dessus du snippet de code pour étiqueter votre MU plugin.

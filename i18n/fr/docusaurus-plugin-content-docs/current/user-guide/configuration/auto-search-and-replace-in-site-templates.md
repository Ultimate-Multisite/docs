---
title: Recherche et Remplacement Automatique dans les Modèles de Site
sidebar_position: 8
_i18n_hash: 81adce2fb2df1a5296590bffea6f2d14
---
# Recherche et remplacement automatiques dans les modèles de site (v2)

_**Ce tutoriel nécessite WP UItimo version 2.x.**_

L'une des fonctionnalités les plus puissantes d'Ultimate Multisite est la possibilité d'ajouter du texte arbitraire, des couleurs et des champs de sélection au formulaire d'inscription. Une fois ces données capturées, nous pouvons les utiliser pour pré-remplir le contenu dans certaines parties du modèle de site sélectionné. Ensuite, lorsque le nouveau site est publié, Ultimate Multisite remplacera les espaces réservés par les informations réelles saisies lors de l'inscription.

Par exemple, vous pouvez créer vos sites modèles avec des espaces réservés. Les espaces réservés doivent être entourés de doubles accolades - {{placeholder_name}}.

Ensuite, vous pouvez simplement ajouter un champ d'inscription correspondant pour capturer ces données

Votre client pourra alors remplir ce champ lors de l'inscription.

Ultimate Multisite remplacera alors les espaces réservés par les données fournies par le client automatiquement.

## **Résoudre le problème du « modèle plein d'espaces réservés »**

Tout cela est génial, mais nous rencontrons un problème désagréable : nos modèles de site – qui peuvent être visités par nos clients – sont remplis d'espaces réservés peu informatifs.

Pour résoudre ce problème, nous proposons l'option de définir de fausses valeurs pour les espaces réservés, et nous utilisons ces valeurs pour rechercher et remplacer leur contenu sur les sites modèles pendant que vos clients les visitent.

Vous pouvez accéder à l'éditeur d'espaces réservés du modèle en allant dans **Ultimate Multisite > Settings > Sites**, puis, dans la barre latérale, en cliquant sur le lien Edit Placeholders.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-aFtnOrska9.png)

Cela vous amènera à l'éditeur de contenu des espaces réservés, où vous pouvez ajouter des espaces réservés et leur contenu respectif.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-OeMzuyauOW.png)

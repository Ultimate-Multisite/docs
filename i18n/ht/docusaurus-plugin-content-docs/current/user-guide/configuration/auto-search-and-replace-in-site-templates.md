---
title: Chèche otomatik ak ranplase nan Template Sit
sidebar_position: 8
_i18n_hash: 0842f53505d24579010d91568e06ef68
---
# Auto Search et Remplacement dans les Modèles de Site (v2)

_**Ce tutoriel nécessite WP UItimo version 2.x.**_

L'une des fonctionnalités les plus puissantes d'Ultimate Multisite, c'est la capacité d'ajouter du texte, des couleurs arbitraires et des champs à sélectionner au formulaire d'inscription. Une fois que nous avons capturé ces données, nous pouvons les utiliser pour pré-remplir le contenu dans certaines parties du modèle de site sélectionné. Ensuite, lorsque le nouveau site sera publié, Ultimate Multisite remplacera les espaces réservés par les informations réelles saisies lors de l'inscription.

Par exemple, vous pouvez faire vos sites modèles avec des espaces réservés (placeholders). Les espaces réservés doivent être entourés de doubles accolades - {{placeholder_name}}.

Ensuite, vous pouvez simplement ajouter un champ d'inscription correspondant pour capturer ces données.

Votre client pourra alors remplir ce champ pendant l'inscription.

Ultimate Multisite remplacera ensuite les espaces réservés par les données fournies par le client automatiquement.

## **Résoudre le problème du "modèle plein d'espaces réservés"**

Tout cela est génial, mais nous rencontrons un problème laid : maintenant nos modèles de site - que nos clients peuvent visiter - sont remplis d'espaces réservés moches qui ne disent pas grand-chose.

Pour résoudre ce problème, nous offrons l'option de définir des valeurs fausses pour les espaces réservés, et nous utilisons ces valeurs pour rechercher et remplacer leur contenu sur les sites modèles pendant que vos clients les visitent.

Vous pouvez accéder à l'éditeur d'espaces réservés du modèle en allant dans **Ultimate Multisite > Settings > Sites**, en faisant défiler jusqu'à la zone Options du Modèle de Site, puis en cliquant sur le lien **Edit Placeholders** (Modifier les Espaces Réservés).

![Zone des options du modèle de site dans la page de paramètres des sites](/img/config/settings-sites-templates-section.png)

Cela vous mènera à l'éditeur de contenu des espaces réservés, où vous pourrez ajouter les espaces réservés et leur contenu respectif.

![Template placeholders editor entry point](/img/config/settings-sites-templates-section.png)

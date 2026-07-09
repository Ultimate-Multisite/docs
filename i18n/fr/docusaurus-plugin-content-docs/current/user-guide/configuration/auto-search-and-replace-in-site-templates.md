---
title: Recherche et remplacement automatiques dans les modèles de site
sidebar_position: 8
_i18n_hash: 0842f53505d24579010d91568e06ef68
---
# Recherche et remplacement automatiques dans les modèles de site (v2)

_**Ce tutoriel nécessite WP UItimo version 2.x.**_

L’une des fonctionnalités les plus puissantes d’Ultimate Multisite est la possibilité d’ajouter des champs de texte, de couleur et de sélection arbitraires au formulaire d’inscription. Une fois ces données collectées, nous pouvons les utiliser pour préremplir le contenu dans certaines parties du modèle de site sélectionné. Ensuite, lorsque le nouveau site est publié, Ultimate Multisite remplacera les espaces réservés par les informations réelles saisies lors de l’inscription.

Par exemple, vous pouvez créer vos sites modèles avec des espaces réservés. Les espaces réservés doivent être ajoutés entourés de doubles accolades - {{placeholder_name}}.

Ensuite, vous pouvez simplement ajouter un champ d’inscription correspondant pour collecter ces données.

Votre client pourra ensuite remplir ce champ lors de l’inscription.

Ultimate Multisite remplacera ensuite automatiquement les espaces réservés par les données fournies par le client.

## **Résoudre le problème du « modèle rempli d’espaces réservés »**

Tout cela est excellent, mais nous rencontrons un problème peu esthétique : nos modèles de site — qui peuvent être visités par nos clients — sont maintenant remplis d’espaces réservés peu élégants qui ne disent pas grand-chose.

Pour résoudre cela, nous proposons l’option de définir de fausses valeurs pour les espaces réservés, et nous utilisons ces valeurs pour rechercher et remplacer leur contenu sur les sites modèles pendant que vos clients les visitent.

Vous pouvez accéder à l’éditeur d’espaces réservés de modèle en allant dans **Ultimate Multisite > Settings > Sites**, en faisant défiler jusqu’à la zone Options de modèle de site, puis en cliquant sur le lien **Modifier les espaces réservés**.

![Zone Options de modèle de site dans la page des paramètres Sites](/img/config/settings-sites-templates-section.png)

Cela vous mènera à l’éditeur de contenu des espaces réservés, où vous pouvez ajouter des espaces réservés et leur contenu respectif.

![Point d’entrée de l’éditeur d’espaces réservés de modèle](/img/config/settings-sites-templates-section.png)

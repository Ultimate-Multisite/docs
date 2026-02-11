---
title: Liste des pays
sidebar_position: 5
_i18n_hash: 9c3cc54ddec563f05e01e1282a9e9f87
---
# Re-ordering the Ultimate Multisite country list

Le menu déroulant pour sélectionner un pays est trié par ordre alphabétique basé sur les variantes anglaises des noms de pays. Cela peut signifier que, parfois, le pays d’origine de votre entreprise et/ou la majorité de vos clients se trouve au milieu d’une longue liste de noms de pays.

Pour vous aider à corriger cela et à ajouter votre pays de prédilection en haut de la liste de sélection, vous pouvez utiliser le fragment ci‑dessous (vous pouvez l’ajouter à un mu‑plugin) :

```php
add_filter('wu_get_countries', function($countries) {

// Change DE to the two-letter code of your country

// Example below for Germany.

unset($countries['DE']);

// Change DE to the two-letter code of your country

// and the name of your country's name.

// Example below, for Germany.

$countries = array_merge(array( 'DE' => __('Germany', 'ultimate-multisite'), ), $countries);

return $countries;

});
```

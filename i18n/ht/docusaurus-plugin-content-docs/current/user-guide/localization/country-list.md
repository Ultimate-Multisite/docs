---
title: Lis Lèvlat
sidebar_position: 5
_i18n_hash: 9c3cc54ddec563f05e01e1282a9e9f87
---
# Reprendre l'ordre de la liste des pays Ultimate Multisite {#re-ordering-the-ultimate-multisite-country-list}

Le menu déroulant pour sélectionner un pays est ordonné par ordre alphabétique en fonction des variantes anglaises des noms des pays. Cela peut signifier que, parfois, le pays d'origine de votre entreprise et/ou la plupart de vos clients sont cachés au milieu d'une longue liste de noms de pays.

Pour vous aider à corriger cela et à ajouter votre pays de choix en haut de la liste de sélection, vous pouvez utiliser le petit morceau de code (snippet) ci-dessous (vous pouvez l'ajouter dans un mu-plugin) :

add_filter('wu_get_countries', function($countries) {

// Change DE au code à deux lettres de votre pays

// Exemple ci-dessous pour l'Allemagne.

unset($countries['DE']);

// Change DE au code à deux lettres de votre pays

// et le nom de votre pays.

// Exemple ci-dessous, pour l'Allemagne.

$countries = array_merge(array( 'DE' => __('Germany', 'ultimate-multisite'), ), $countries);

return $countries;

});

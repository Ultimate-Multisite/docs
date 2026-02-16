---
title: Seznam zemí
sidebar_position: 5
_i18n_hash: 9c3cc54ddec563f05e01e1282a9e9f87
---
# Změna pořadí seznamu zemí v Ultimate Multisite

Rozbalovací nabídka pro výběr země je seřazena abecedně podle anglických názvů zemí. To může znamenat, že domovská země vaší firmy a/nebo většiny vašich zákazníků bude někde uprostřed dlouhého seznamu zemí.

Abychom vám pomohli tento problém vyřešit a přidat vámi preferovanou zemi na začátek seznamu, můžete použít níže uvedený kód (můžete ho přidat do mu-pluginu):

add_filter('wu_get_countries', function($countries) {

// Změňte DE na dvoupísmenný kód vaší země

// Příklad níže pro Německo.

unset($countries['DE']);

// Změňte DE na dvoupísmenný kód vaší země

// a název vaší země.

// Příklad níže pro Německo.

$countries = array_merge(array( 'DE' => __('Germany', 'ultimate-multisite'), ), $countries);

return $countries;

});

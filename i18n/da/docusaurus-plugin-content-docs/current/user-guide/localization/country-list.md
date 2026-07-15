---
title: Landeliste
sidebar_position: 5
_i18n_hash: 9c3cc54ddec563f05e01e1282a9e9f87
---
# Omordning af listen over lande i Ultimate Multisite

Rullegardinmenuen til at vælge et land er sorteret alfabetisk baseret på de engelske varianter af landegavnene. Det kan betyde, at dit hjemland og/eller de fleste af dine kunder nogle gange ligger gemt midt i en kæmpe liste over lande.

For at hjælpe dig med at rette det og tilføje dit valgte land øverst på valglisten, kan du bruge snippetet nedenfor (du kan tilføje det til et mu-plugin):

add_filter('wu_get_countries', function($countries) {

// Skift DE til to-bogstavskoden for dit land

// Eksempel nedenfor for Tyskland.

unset($countries['DE']);

// Skift DE til to-bogstavskoden for dit land

// og navnet på dit lands navn.

// Eksempel nedenfor, for Tyskland.

$countries = array_merge(array( 'DE' => __('Germany', 'ultimate-multisite'), ), $countries);

return $countries;

});

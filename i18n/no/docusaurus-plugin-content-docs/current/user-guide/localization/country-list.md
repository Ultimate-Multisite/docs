---
title: Landliste
sidebar_position: 5
_i18n_hash: 9c3cc54ddec563f05e01e1282a9e9f87
---
# Endre rekkefølgen på landlisten i Ultimate Multisite

Nedtrekksmenyen for å velge land er sortert alfabetisk basert på de engelske navnene på landene. Dette kan bety at hjemlandet til firmaet ditt og/eller de fleste kundene dine noen ganger er begravd midt i en lang liste med landnavn.

For å hjelpe deg med å fikse dette og legge til ønsket land øverst i listen, kan du bruke kodesnutten nedenfor (du kan legge den til i en mu-plugin):

add_filter('wu_get_countries', function($countries) {

// Endre DE til tobokstavskoden for landet ditt

// Eksempelet nedenfor er for Tyskland.

unset($countries['DE']);

// Endre DE til tobokstavskoden for landet ditt

// og navnet på landet ditt.

// Eksempelet nedenfor er for Tyskland.

$countries = array_merge(array( 'DE' => __('Germany', 'ultimate-multisite'), ), $countries);

return $countries;

});

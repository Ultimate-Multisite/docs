---
title: Landaslista
sidebar_position: 5
_i18n_hash: 9c3cc54ddec563f05e01e1282a9e9f87
---
# Återordning af lista over land i Ultimate Multisite

Nedtrekksmenyen til å velge et land er sortert alfabetisk basert på engelske varianter av landnavnene. Dette kan bety at hjemlandet til selskapet ditt og/eller de fleste av kundene dine noen ganger ligger gjemt midt i en veldig lang liste over landnavn.

For å hjelpe deg med å fikse dette og legge til valgt land øverst på valglisten, kan du bruke utskriften nedenfor (du kan legge den til som et mu-plugin):

add_filter('wu_get_countries', function($countries) {

// Endre DE til to-bokstavskoden for ditt land

// Eksempel nedenfor for Tyskland.

unset($countries['DE']);

// Endre DE til to-bokstavskoden for ditt land

// og navnet på landet ditt.

// Eksempel nedenfor, for Tyskland.

$countries = array_merge(array( 'DE' => __('Germany', 'ultimate-multisite'), ), $countries);

return $countries;

});

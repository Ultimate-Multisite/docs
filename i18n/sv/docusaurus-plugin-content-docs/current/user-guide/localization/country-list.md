---
title: Landlista
sidebar_position: 5
_i18n_hash: 9c3cc54ddec563f05e01e1282a9e9f87
---
# Ändra ordningen på Ultimate Multisites landlista

Rullgardinsmenyn för att välja land är sorterad i alfabetisk ordning baserat på de engelska namnen på länderna. Det kan innebära att ditt företags hemland och/eller de flesta av dina kunders land ibland hamnar mitt i en lång lista med landsnamn.

För att hjälpa dig åtgärda detta och placera ditt önskade land högst upp i listan kan du använda kodavsnittet nedan (du kan lägga till det i ett mu-plugin):

add_filter('wu_get_countries', function($countries) {

// Ändra DE till den tvåbokstaviga landskoden för ditt land

// Exemplet nedan visar Tyskland.

unset($countries['DE']);

// Ändra DE till den tvåbokstaviga landskoden för ditt land

// och landets namn.

// Exemplet nedan visar Tyskland.

$countries = array_merge(array( 'DE' => __('Germany', 'ultimate-multisite'), ), $countries);

return $countries;

});

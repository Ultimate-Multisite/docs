---
title: Landlys
sidebar_position: 5
_i18n_hash: 9c3cc54ddec563f05e01e1282a9e9f87
---
# Herordening van die Ultimate Multisite landlys {#re-ordering-the-ultimate-multisite-country-list}

Die vervolgkeuse om 'n land te kies, word alfabeties gerangskik op grond van die Engelse variante van die landname. Dit kan beteken dat jou maatskappy se tuisland en/of die tuisland van die meeste van jou kliënte soms in die middel van 'n enorme landnaamlys begrawe is.

Om jou te help dit regmaak en jou keuse-land aan die bokant van die keuslys by te voeg, kan jy die stukkie kode hieronder gebruik (jy kan dit by 'n mu-plugin voeg):

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

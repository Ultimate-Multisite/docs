---
title: Lista dei pajar
sidebar_position: 5
_i18n_hash: 9c3cc54ddec563f05e01e1282a9e9f87
---
# Riordien il lista dei panni del paese di Ultimate Multisite {#re-ordering-the-ultimate-multisite-country-list}

Il menu a tendina per selezionare un paese è ordinato in base all'alfabeto delle varianti inglesi dei nomi dei paesi. Questo può significare che, a volte, il paese della vostra azienda e/o la maggior parte dei vostri clienti potessero finire nascosti nel mezzo di una lista enorme di nomi dei paesi.

Per aiutarvi a sistemare questo problema e aggiungere il vostro paese di scelta in cima alla lista delle selezioni, potete usare lo snippet qui sotto (potete aggiungerlo a un mu-plugin):

add_filter('wu_get_countries', function($countries) {

// Cambia DE con il codice a due lettere del vostro paese

// Esempio qui per la Germania.

unset($countries['DE']);

// Cambia DE con il codice a due lettere del vostro paese

// e il nome del nome del vostro paese.

// Esempio qui, per la Germania.

$countries = array_merge(array( 'DE' => __('Germany', 'ultimate-multisite'), ), $countries);

return $countries;

});

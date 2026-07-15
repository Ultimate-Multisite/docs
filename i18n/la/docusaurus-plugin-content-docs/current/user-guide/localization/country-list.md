---
title: Lista państwów
sidebar_position: 5
_i18n_hash: 9c3cc54ddec563f05e01e1282a9e9f87
---
# Reordenare la lista dei paesi di Ultimate Multisite

Il menu a tendina per selezionare un paese è ordinato in ordine alfabetico basandosi sulle varianti inglesi dei nomi dei paesi. Questo può significare che, a volte, il paese d'origine della tua azienda e/o la maggior parte dei tuoi clienti si trova sepolto nel mezzo di una lunga lista di nomi dei paesi.

Per aiutarti a risolvere questo problema e aggiungere il tuo paese preferito in cima alla lista delle selezioni, puoi usare lo snippet qui sotto (puoi aggiungerlo a un mu-plugin):

add_filter('wu_get_countries', function($countries) {

// Cambia DE con il codice a due lettere del tuo paese

// Esempio qui sotto per la Germania.

unset($countries['DE']);

// Cambia DE con il codice a due lettere del tuo paese

// e il nome del nome del tuo paese.

// Esempio qui sotto, per la Germania.

$countries = array_merge(array( 'DE' => __('Germany', 'ultimate-multisite'), ), $countries);

return $countries;

});

---
title: Elenco dei Paesi
sidebar_position: 5
_i18n_hash: 9c3cc54ddec563f05e01e1282a9e9f87
---
# Riordinare l’elenco dei paesi di Ultimate Multisite

Il menu a discesa per selezionare un paese è ordinato alfabeticamente in base alle varianti inglesi dei nomi dei paesi. Ciò potrebbe significare che, a volte, il paese di origine della tua azienda e/o la maggior parte dei tuoi clienti è nascosto in mezzo a un enorme elenco di nomi di paesi.

Per aiutarti a risolvere questo problema e aggiungere il tuo paese di scelta in cima all’elenco di selezione, puoi utilizzare lo snippet qui sotto (puoi aggiungerlo a un mu-plugin):

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

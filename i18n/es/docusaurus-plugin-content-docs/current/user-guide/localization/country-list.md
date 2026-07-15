---
title: Lista de países
sidebar_position: 5
_i18n_hash: 9c3cc54ddec563f05e01e1282a9e9f87
---
# Reordenar la lista de países de Ultimate Multisite

El menú desplegable para seleccionar un país está ordenado alfabéticamente según las variantes en inglés de los nombres de los países. Esto puede significar que, a veces, el país de origen de tu empresa y/o la mayoría de tus clientes se encuentre enterrado en medio de una enorme lista de nombres de países.

Para ayudarte a corregir eso y agregar tu país de elección al principio de la lista de selección, puedes usar el fragmento de código a continuación (puedes añadirlo a un mu-plugin):

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

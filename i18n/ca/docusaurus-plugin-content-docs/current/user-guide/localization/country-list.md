---
title: Llista de països
sidebar_position: 5
_i18n_hash: 9c3cc54ddec563f05e01e1282a9e9f87
---
# Reordenar la lista de países de Ultimate Multisite

El menú desplegable para seleccionar un país se ordena alfabéticamente según las variantes en inglés de los nombres de los países. Esto puede significar que, a veces, el país de tu empresa y/o la mayoría de tus clientes estén escondidos en medio de una lista enorme de nombres de países.

Para ayudarte a solucionar esto y añadir tu país de elección al principio de la lista de selección, puedes usar el siguiente snippet (puedes añadirlo a un mu-plugin):

```php
add_filter('wu_get_countries', function($countries) {

// Cambia DE por el código de dos letras de tu país

// Ejemplo de abajo para Alemania.

unset($countries['DE']);

// Cambia DE por el código de dos letras de tu país

// y el nombre de tu país.

// Ejemplo de abajo, para Alemania.

$countries = array_merge(array( 'DE' => __('Germany', 'ultimate-multisite'), ), $countries);

return $countries;

});
```

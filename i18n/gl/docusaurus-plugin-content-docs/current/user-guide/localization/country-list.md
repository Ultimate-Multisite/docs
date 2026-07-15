---
title: Lista de países
sidebar_position: 5
_i18n_hash: 9c3cc54ddec563f05e01e1282a9e9f87
---
# Reordenar a lista de países do Ultimate Multisite

O menu suspenso para seleccionar un país está ordenado alfabéticamente com as variantes en inglés dos nomes dos países. Isto pode significar que, por vezes, o país da súa empresa e/ou a mayoría dos seus clientes pode estar escondido no meio dunha lista enorme de nomes de países.

Para ayudar a arreglar isto e añadir o seu país de elección ao topo da lista de selección, pode usar o snippet abaixo (pode adicionálo a un mu-plugin):

add_filter('wu_get_countries', function($countries) {

// Mude DE para o código de duas letras do seu país

// Ejemplo abaixo para Alemania.

unset($countries['DE']);

// Mude DE para o código de duas letras do seu país

// e o nome do nome do seu país.

// Ejemplo abaixo, para Alemania.

$countries = array_merge(array( 'DE' => __('Germany', 'ultimate-multisite'), ), $countries);

return $countries;

});

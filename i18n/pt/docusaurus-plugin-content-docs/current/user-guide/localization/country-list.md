---
title: Lista de países
sidebar_position: 5
_i18n_hash: 9c3cc54ddec563f05e01e1282a9e9f87
---
# Reordenando a lista de países do Ultimate Multisite {#re-ordering-the-ultimate-multisite-country-list}

O menu suspenso para selecionar um país está ordenado alfabeticamente com base nas variantes em inglês dos nomes dos países. Isso pode significar que, às vezes, o país da sua empresa e/ou de muitos dos seus clientes fica escondido no meio de uma lista enorme de nomes de países.

Para ajudar a resolver isso e colocar seu país de escolha no topo da lista de seleção, você pode usar o trecho abaixo (você pode adicioná-lo a um mu-plugin):

add_filter('wu_get_countries', function($countries) {

// Mude DE para o código de dois letras do seu país

// Exemplo abaixo para a Alemanha.

unset($countries['DE']);

// Mude DE para o código de dois letras do seu país

// e o nome do nome do seu país.

// Exemplo abaixo, para a Alemanha.

$countries = array_merge(array( 'DE' => __('Germany', 'ultimate-multisite'), ), $countries);

return $countries;

});

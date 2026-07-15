---
title: Lista de Países
sidebar_position: 5
_i18n_hash: 9c3cc54ddec563f05e01e1282a9e9f87
---
# Reordenando a lista de países do Ultimate Multisite

O menu suspenso para selecionar um país está ordenado alfabeticamente com base nas variantes em inglês dos nomes dos países. Isso pode significar que, às vezes, o país de origem da sua empresa e/ou a maioria dos seus clientes está enterrado no meio de uma enorme lista de nomes de países.

Para ajudar você a corrigir isso e adicionar o seu país de escolha ao topo da lista de seleção, você pode usar o trecho abaixo (você pode adicioná-lo a um mu-plugin):

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

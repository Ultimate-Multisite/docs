---
title: Lista krajów
sidebar_position: 5
_i18n_hash: 9c3cc54ddec563f05e01e1282a9e9f87
---
# Zmiana kolejności listy krajów w Ultimate Multisite

Lista rozwijana do wyboru kraju jest uporządkowana alfabetycznie według angielskich nazw krajów. Oznacza to, że czasami kraj, w którym znajduje się Twoja firma lub z którego pochodzi większość klientów, może być ukryty gdzieś w środku długiej listy.

Aby to naprawić i przenieść wybrany kraj na początek listy, możesz użyć poniższego fragmentu kodu (możesz dodać go jako mu-plugin):

add_filter('wu_get_countries', function($countries) {

// Zmień DE na dwuliterowy kod swojego kraju

// Poniższy przykład dotyczy Niemiec.

unset($countries['DE']);

// Zmień DE na dwuliterowy kod swojego kraju

// oraz nazwę kraju.

// Poniższy przykład dotyczy Niemiec.

$countries = array_merge(array( 'DE' => __('Germany', 'ultimate-multisite'), ), $countries);

return $countries;

});

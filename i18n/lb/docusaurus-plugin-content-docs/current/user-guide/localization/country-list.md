---
title: Landesliste
sidebar_position: 5
_i18n_hash: 9c3cc54ddec563f05e01e1282a9e9f87
---
# D'Re-ordnen vum Ultimate Multisite landlist

D'Dropdown fir d'Land uszuelen wird alphabetisch nach de englische Varianten vun de Landnämmen sortiert. Dat kann bedäütze, datt d'Heimatland vun Ihrer Firma und/oder de meescht vun Iire Kunde in der Mitte vun ere riesige Liste vun Landnämmen versteckt sinn.

Um dat z'helfen, dat Sie das korrigieren chönne und Iire gwünschte Land an de oberi vun der Uszuelenliste z'füege, chönnt Sie de Snippet unten bruichen (Sie chönnte de i en mu-plugin füege):

add_filter('wu_get_countries', function($countries) {

// Ändern Sie DE in d'zweifachschte Code vun Ihrer Land

// Beispiel unten fir Dütschland.

unset($countries['DE']);

// Ändern Sie DE in d'zweifachschte Code vun Ihrer Land

// und de Name vun Ihrer Land.

// Beispiel unten, fir Dütschland.

$countries = array_merge(array( 'DE' => __('Germany', 'ultimate-multisite'), ), $countries);

return $countries;

});

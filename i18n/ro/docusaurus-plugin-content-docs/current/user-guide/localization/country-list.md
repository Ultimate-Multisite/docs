---
title: Lista țărilor
sidebar_position: 5
_i18n_hash: 9c3cc54ddec563f05e01e1282a9e9f87
---
# Reordonarea listei de țări din Ultimate Multisite

Lista derulantă pentru selectarea unei țări este ordonată alfabetic pe baza denumirilor în limba engleză. Asta înseamnă că, uneori, țara de origine a companiei tale și/sau a majorității clienților tăi poate fi îngropată undeva la mijlocul unei liste imense de țări.

Pentru a rezolva această problemă și a adăuga țara dorită în partea de sus a listei de selecție, poți folosi fragmentul de cod de mai jos (îl poți adăuga într-un mu-plugin):

add_filter('wu_get_countries', function($countries) {

// Înlocuiește DE cu codul de două litere al țării tale

// Exemplu de mai jos pentru Germania.

unset($countries['DE']);

// Înlocuiește DE cu codul de două litere al țării tale

// și denumirea țării tale.

// Exemplu de mai jos, pentru Germania.

$countries = array_merge(array( 'DE' => __('Germany', 'ultimate-multisite'), ), $countries);

return $countries;

});

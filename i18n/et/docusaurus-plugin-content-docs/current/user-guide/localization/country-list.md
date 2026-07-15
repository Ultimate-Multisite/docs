---
title: Maailmakoode
sidebar_position: 5
_i18n_hash: 9c3cc54ddec563f05e01e1282a9e9f87
---
# Ühna Multisite riikude nime järjekorra muutmine

Riigi valimiseks kasutatav drop-down on järjestatud abalkoni inglise keeles olevate riikude nimetega. See võib tähendada, et mõnikord teie ettevõtte või/kõige teie klientide kodriik on haudunud suurte riikude nime loendiga keskel.

Et aitaks te seda korjata ja lisaks oma valitud riigi kõrvale valikule esimesele kohtale, saate kasutada allpool oleva skripti (saate seda mu-pluginisse lisada):

add_filter('wu_get_countries', function($countries) {

// Muuda DE teie riigi kaks-kirjeline koodiks

// Näide Ameerika.

unset($countries['DE']);

// Muuda DE teie riigi kaks-kirjeline koodiks

// ja teie riigi nime.

// Näide Ameerika jaoks.

$countries = array_merge(array( 'DE' => __('Germany', 'ultimate-multisite'), ), $countries);

return $countries;

});

---
title: Zoznam krajín
sidebar_position: 5
_i18n_hash: 9c3cc54ddec563f05e01e1282a9e9f87
---
# Preskúšanie poriadku zoznamu krajín v Ultimate Multisite {#re-ordering-the-ultimate-multisite-country-list}

Rozbaľovacie rozbaľovaciu menu na výber krajiny je usporiadané podľa abecedného poradie anglických variant názvov krajín. To môže znieť, že domovská krajina vašej firmy a/alebo väčšina vašich zákazníkov sa v strede dlhého zoznamu názvov krajín skrýva.

Aby ste mohli to opraviť a pridať svoju krajinu výberu na začiatok zoznamu, môžete použiť tento snippet (môžete ho pridať do mu-plugin):

add_filter('wu_get_countries', function($countries) {

// Zmenite DE na dvociferný kód vašej krajiny

// Príklad nižšie pre Nemecko.

unset($countries['DE']);

// Zmenite DE na dvociferný kód vašej krajiny

// a názov vašej krajiny.

// Príklad nižšie, pre Nemecko.

$countries = array_merge(array( 'DE' => __('Germany', 'ultimate-multisite'), ), $countries);

return $countries;

});

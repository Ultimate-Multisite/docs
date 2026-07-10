---
title: Ngā Wāhi Whenua
sidebar_position: 5
_i18n_hash: 9c3cc54ddec563f05e01e1282a9e9f87
---
# Whakaaro mō te re-ohatanga o te list whānui o ngā wāhi (country) i Ultimate Multisite {#re-ordering-the-ultimate-multisite-country-list}

Ko te dropdown mo te whiri i te wāhi he whakawhiti (country) e ora ai ana i te alphabetical based ki ngā whakamārama o ngā ingoa o ngā wāhi i Pākehā. Ko te mea e taea te whakaaro, he tino pai ko, he heke i te wā, ko te wāhi o te whānau o koe me te whānau nui o ngā mea katoa mo ngā mea katoa (customers) e pōtiki ana i te whakataki o te list ingoa o ngā wāhi nui.

Kia tū i a koe ki te whakaora atu i tēnei mea he tino pai, me te āwhina i te wāhi o te wāhi kua e hiahia koe ki te whiri i te whakataki o te list whiri, i taea e koe te whakamahi i te snippet (he whakamaoritanga) i runga i runga i te mu-plugin:

add_filter('wu_get_countries', function($countries) {

// Whakaaro DE ki te code two-letter o tō wāhi.

// Pēpi below mō Germany.

unset($countries['DE']);

// Whakaaro DE ki te code two-letter o tō wāhi

// me te ingoa o tō wāhi.

// Pēpi below, mō Germany.

$countries = array_merge(array( 'DE' => __('Germany', 'ultimate-multisite'), ), $countries);

return $countries;

});

---
title: Urugero rw'ubwoko bw'ibigo
sidebar_position: 5
_i18n_hash: 9c3cc54ddec563f05e01e1282a9e9f87
---
# Guhererere u gukoresha listi ya nteriyemo y'Ultimate Multisite {#re-ordering-the-ultimate-multisite-country-list}

Icyo cyo kumenya ko dropdown w'ubwoko bwo gukoresha nteriyemo (country) igarikiye ku buryo bwa amagambo y'inguranye mu Kinyarwanda. Ibi byashobora kwerekana ko, ibyo bishobora kuba ari uko uburyo bwiza bwo kubyara umuryango wako cyangwa abakoresha babuze bishobora kuba bafite inyandiko z'ubwoko mu gice cyane mu gice cyo gukoresha nteriyemo.

Kugira ngo nkubwire uburyo bwo kubyara ibyo, kandi ukagire umuryango wako cyangwa ubwoko ushaka ku gice cyo gukoresha nteriyemo (selection list), uba mushobora gukoresha igice kera (snippet) kera (you can add it to a mu-plugin):

add_filter('wu_get_countries', function($countries) {

// Gukoresha DE kugira ngo uhereye ku code y'ubwoko bwawe

// Urugero hejuru kuri Germany.

unset($countries['DE']);

// Gukoresha DE kugira ngo uhereye ku code y'ubwoko bwawe

// kandi uburyo bw'ubwoko bwawe.

// Urugero hejuru kuri Germany.

$countries = array_merge(array( 'DE' => __('Germany', 'ultimate-multisite'), ), $countries);

return $countries;

});

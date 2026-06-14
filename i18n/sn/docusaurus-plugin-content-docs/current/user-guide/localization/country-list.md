---
title: R list yezuva
sidebar_position: 5
_i18n_hash: 9c3cc54ddec563f05e01e1282a9e9f87
---
# Kure-re-order list yeUltimate Multisite country

Dropdown inotore kutamba dzako kuti utange country, inotanga kune alphabetical based kana zvinhu zviri kuita English variants dzezvinhu zvecountry. Izvi zvinogona kuva kuti, mazuva maviri, home country ya company yako uye/kana vashandi vose vanenge vachiramba mumakore akawanda anogona kune zvinhu zvecountry.

Kuti usimbise izvi uye utange country yako yacho kutanga list yeselection, unogona kuita kuti snippet iyi (unogona kuita iye mu-plugin mu).

add_filter('wu_get_countries', function($countries) {

// Gara DE kune code ya two-letter ya country yako

// Example below for Germany.

unset($countries['DE']);

// Gara DE kune code ya two-letter ya country yako

// uye zvinenge zvinhu zvecountry dzecountry yako.

// Example below, for Germany.

$countries = array_merge(array( 'DE' => __('Germany', 'ultimate-multisite'), ), $countries);

return $countries;

});

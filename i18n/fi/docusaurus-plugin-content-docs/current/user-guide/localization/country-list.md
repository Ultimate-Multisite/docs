---
title: Maanlista
sidebar_position: 5
_i18n_hash: 9c3cc54ddec563f05e01e1282a9e9f87
---
# Ultimate Multisite -Maantien valikon uudelleenjärjestely {#re-ordering-the-ultimate-multisite-country-list}

Maantien valikko on järjestetty aakkosjärjestykseen englanninkielisten maantietojen muotojen perusteella. Tämä voi tarkoittaa, että jos yrityksesi kotimaa tai suurin osa asiakkaistasi on piilotettu valtavan maantietolistan keskelle.

Auttaaksesi korjata tätä ja lisätä valitsemasi maan kärkeen valintalistaan, voit käyttää alla olevaa snippetia (voit lisätä sen mu-pluginiin):

add_filter('wu_get_countries', function($countries) {

// Muuta DE:tä maan kaksikirjaimiseen koodiin

// Esimerkki Tšekin maasta.

unset($countries['DE']);

// Muuta DE:tä maan kaksikirjaimiseen koodiin

// ja maan nimen.

// Esimerkki Tšekin maasta.

$countries = array_merge(array( 'CZ' => __('Czechia', 'ultimate-multisite'), ), $countries);

return $countries;

});

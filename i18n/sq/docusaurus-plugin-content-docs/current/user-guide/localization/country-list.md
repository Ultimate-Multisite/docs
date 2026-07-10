---
title: Lista e vendeve
sidebar_position: 5
_i18n_hash: 9c3cc54ddec563f05e01e1282a9e9f87
---
# Rregjimi i listës së vendeve në Ultimate Multisite {#re-ordering-the-ultimate-multisite-country-list}

Menyja (dropdown) për të zgjedhur një vend është e rregulluar alfabetikisht bazuar në variantet anglisht të emrave të vendeve. Kjo mund të do të thotë se, ndonjëherë, vendi kryesor i kompanisë tuaj dhe/ose shumica e klientëve juaj mund të jetë i fshehur në mes të një liste shumë të gjatë emratet e vendeve.

Për t'ju ndihmuar ta rregulloni këtë dhe ta shtoni vendin tuaj të zgjedhur në krye të listës së zgjedhjeve, mund të përdorni fragmentin (snippet) më poshtë (mund ta shtoni atë në një mu-plugin):

add_filter('wu_get_countries', function($countries) {

// Ndryshoni DE me kodin e dy shkronjave të vendit tuaj

// Shembull i poshtë për Gjermaninë.

unset($countries['DE']);

// Ndryshoni DE me kodin e dy shkronjave të vendit tuaj

// dhe emrin e emrit të vendit tuaj.

// Shembull i poshtë, për Gjermaninë.

$countries = array_merge(array( 'DE' => __('Germany', 'ultimate-multisite'), ), $countries);

return $countries;

});

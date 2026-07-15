---
title: Valstu saraksts
sidebar_position: 5
_i18n_hash: 9c3cc54ddec563f05e01e1282a9e9f87
---
# Pārskatīt valstu saraksta ap Ultimate Multisite

Valstu izvēlnes drop-down menu ir sakārtots alfabēti atbilstoši valstu vārdiem angļu valodā. Tas var nozīmēt, ka dažreiz jūsu uzņēmuma mājvalste un/vai lielākā daļa jūsu klientiem ir saplūsties pirms ļoti garām valstu vārdu saraksta vidū.

Lai jums palīdzētu to labot un pievienot savu izvēlēto valsti virs izvēles saraksta, varat izmantot šo snippet (var to pievienot mu-pluginam):

add_filter('wu_get_countries', function($countries) {

// Mainiet DE jūsu valsts divzīmju kodu.

// Piemērs zemāk Vāzijas.

unset($countries['DE']);

// Mainiet DE jūsu valsts divzīmju kodu

// un jūsu valsts vārdu.

// Piemērs zemāk, Vāzijas.

$countries = array_merge(array( 'DE' => __('Germany', 'ultimate-multisite'), ), $countries);

return $countries;

});

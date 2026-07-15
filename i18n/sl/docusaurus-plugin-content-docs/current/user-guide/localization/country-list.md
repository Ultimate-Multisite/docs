---
title: Seznam držav
sidebar_position: 5
_i18n_hash: 9c3cc54ddec563f05e01e1282a9e9f87
---
# Preuradja seznamu držav v Ultimate Multisite

Spisni spisak držav za izbiro se sortirajo po abecednem na podlagi angleških različic imen držav. To lahko pomeni, da je domna država vaše podjetja in/ali večine vaših strank pogosto skrita v sredini ogromnega seznamov imen držav.

Da bi vam pomagal pri reševanju tega problema in dodajan svoje izbrane države na vrh seznamu izbire, lahko uporabite naslednji snippet (ga lahko dodate do mu-plugin):

add_filter('wu_get_countries', function($countries) {

// Preimenujte DE na dvoklicno kod vaše države

// Primer za Nemčijo.

unset($countries['DE']);

// Preimenujte DE na dvoklicno kod vaše države

// in ime vaše države.

// Primer za Nemčijo.

$countries = array_merge(array( 'DE' => __('Germany', 'ultimate-multisite'), ), $countries);

return $countries;

});

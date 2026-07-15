---
title: Uhlu Lwamazwe
sidebar_position: 5
_i18n_hash: 9c3cc54ddec563f05e01e1282a9e9f87
---
# Ukuhlela kabusha uhlu lwamazwe lwe-Ultimate Multisite

I-dropdown yokukhetha izwe ihlelwe ngokwe-alfabhethi ngokusekelwe ezinguqulweni zesiNgisi zamagama amazwe. Lokhu kungasho ukuthi, kwesinye isikhathi, izwe lasekhaya lenkampani yakho kanye/noma iningi lamakhasimende akho lifihlwe phakathi nohlu olukhulu lwamagama amazwe.

Ukuze sikusize ukulungisa lokho futhi ungeze izwe olikhethayo phezulu ohlwini lokukhetha, ungasebenzisa i-snippet engezansi (ungayengeza ku-mu-plugin):

add_filter('wu_get_countries', function($countries) {

// Shintsha i-DE ibe ikhodi yezinhlamvu ezimbili yezwe lakho

// Isibonelo esingezansi seJalimane.

unset($countries['DE']);

// Shintsha i-DE ibe ikhodi yezinhlamvu ezimbili yezwe lakho

// kanye negama lezwe lakho.

// Isibonelo esingezansi, seJalimane.

$countries = array_merge(array( 'DE' => __('Germany', 'ultimate-multisite'), ), $countries);

return $countries;

});

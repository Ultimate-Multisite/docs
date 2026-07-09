---
title: Uluhlu lwamazwe
sidebar_position: 5
_i18n_hash: 9c3cc54ddec563f05e01e1282a9e9f87
---
# Ukuphinda uhlele uluhlu lwamazwe lwe-Ultimate Multisite {#re-ordering-the-ultimate-multisite-country-list}

Imenyu eyehlayo yokukhetha ilizwe ihlelwe ngokulandelelana kwealfabhethi ngokusekelwe kwiinguqulelo zesiNgesi zamagama amazwe. Oku kunokuthetha ukuba, ngamanye amaxesha, ilizwe lasekhaya lenkampani yakho kunye/okanye uninzi lwabathengi bakho lifihlakele embindini woluhlu olukhulu lwamagama amazwe.

Ukukunceda ulungise oko uze wongeze ilizwe olikhethayo phezulu kuluhlu lokukhetha, ungasebenzisa isiqwenga sekhowudi esingezantsi (ungasongeza kwi-mu-plugin):

add_filter('wu_get_countries', function($countries) {

// Change DE to the two-letter code of your country

// Example below for Germany.

unset($countries['DE']);

// Change DE to the two-letter code of your country

// and the name of your country's name.

// Example below, for Germany.

$countries = array_merge(array( 'DE' => __('Germany', 'ultimate-multisite'), ), $countries);

return $countries;

});

---
title: Valstijų sąrašas
sidebar_position: 5
_i18n_hash: 9c3cc54ddec563f05e01e1282a9e9f87
---
# Krautų sąrašo reiškių saupėjimai Ultimate Multisite

Valdojimo išskirta sąrašas šalių, kurias pasirinkate dropdown'e, yra surinktas alfabetiniu būdu pagal jūsų šalies pavadinimų anglų variantus. Tai gali reikšti, kad kartais jūsų įmonės ir/arba daugelių jūsų klientų namų šalys yra sukurta didelio šalų pavadinimų sąraše viduje.

Kad jums padėti išspręsti šią problemą ir pridėti savo pasirinktą šalį prie sąrašo viršalaipo, galite naudoti šį snippet'ą (jūs galite jį pridėti į mu-plugin):

add_filter('wu_get_countries', function($countries) {

// Pakeiskite DE savo šalies dvigždirbų kodui

// Pavyzdys below dla Vartavo.

unset($countries['DE']);

// Pakeiskite DE savo šalies dvigždirbų kodui

// ir jūsų šalies pavadinimą.

// Pavyzdys below, dla Vartavo.

$countries = array_merge(array( 'DE' => __('Germany', 'ultimate-multisite'), ), $countries);

return $countries;

});

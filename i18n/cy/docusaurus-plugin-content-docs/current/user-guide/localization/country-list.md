---
title: Llyfrgell Talaith
sidebar_position: 5
_i18n_hash: 9c3cc54ddec563f05e01e1282a9e9f87
---
# Atgofyn y rheoliad o ddrws y gwyliau Ultimate Multisite {#re-ordering-the-ultimate-multisite-country-list}

Mae'r draddol i wybलेक्टio gwyl (dropdown) yn cael ei ordyn ar gyferol allweddol ar gyfer y ffurfau Cymraeg o'r enw y gwyliau Cymreig. Gall hynny golygu bod y drefn y cwmni eich cyfrifol a/neu amser yn cael ei gael yn canol i'r rheol y gwyliau mawr.

I helpu chi i sicrhau hyn ac i dros y gwyliau eich gwyl wybiliadol i fod yn cael ei ddefnyddio ar y ddefnyddio, gallwch ddefnyddio'r snippet isodol (gallwch ei dros mewn mu-plugin):

add_filter('wu_get_countries', function($countries) {

// Newch DE i'r cod o ddau o'r gwyl eich gwyl

// Rheol isodol arall am yr Alemanya.

unset($countries['DE']);

// Newch DE i'r cod o ddau o'r gwyl eich gwyl

// a'r enw y gwyl eich gwyl.

// Rheol isodol arall am yr Alemanya.

$countries = array_merge(array( 'DE' => __('Germany', 'ultimate-multisite'), ), $countries);

return $countries;

});

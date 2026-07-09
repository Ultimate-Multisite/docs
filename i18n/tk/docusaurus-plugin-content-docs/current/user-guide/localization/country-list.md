---
title: Ýurtlar Sazlary
sidebar_position: 5
_i18n_hash: 9c3cc54ddec563f05e01e1282a9e9f87
---
# Ultimate Multisite ýurt sanawyny dürlilemek {#re-ordering-the-ultimate-multisite-country-list}

Ýurt saýlamak üçin düşündiriş (dropdown) sanawy türkmençe ýazylan ýurt adlarynyň iňlis variantlaryna görä alfabetik tertibe goýar. Bu, käwagi kompaniýanyň we/ýa köp müşderileriniň ana ýurtlaryny uly ýurt adlarynyň ortasyna saklanyp biljekdigini aňladyp biler.

Bu soragy çözmek we saýlama sanawyň başynda özüňizden hem iňlisçe görnüşli ýurtlaryňizi goýmak üçin aşakdaky snippet-i ulanyp bilersiňiz (onu mu-plugin-e goşyp bilersiňiz):

add_filter('wu_get_countries', function($countries) {

// DE-ni öz ýurtlaryň iki harply kody bilen üýtgediň

// Aşaakdaky mysal Germaniýa üçin.

unset($countries['DE']);

// DE-ni öz ýurtlaryň iki harply kody bilen we
// saýladylan ýurtlaryň ady bilen üýtgediň.

// Aşaakdaky mysal, Germaniýa üçin.

$countries = array_merge(array( 'DE' => __('Germany', 'ultimate-multisite'), ), $countries);

return $countries;

});

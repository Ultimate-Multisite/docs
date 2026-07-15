---
title: Nri Ọnụmọdụ
sidebar_position: 5
_i18n_hash: 9c3cc54ddec563f05e01e1282a9e9f87
---
# Yenye-order list na mabahndia Ultimate Multisite

Dropdown na ị chọrụ etta nkwado bụ na ọ dị na ụdị alphabetical (na ọkọ) nke ndị a na akụkọ English nke onye a naakaa. Oge mgbe ọ dị, nwere ike ịbụ na onye a na-eme ka onye a na akaụkọ gị na/na onye ọkụ na ndụ ha bụrụ na ụdị naakaa na akụkọ onye a naakaa nke na-agba.

Ọ bụ ihe mere dịrị maka ịkwado ihe ahụ ma ị chọrụ onye a na akaụkọ na akaụkọ na akaụkọ, ị ga-anọchi snippet a (ị ga-anọchi ya n'mu-plugin):

add_filter('wu_get_countries', function($countries) {

// Chara DE na akọ ọtụtụ onye a
// Change DE to the two-letter code of your country

// Ọ dị n'ime anọchịrị.

// Example below for Germany.

unset($countries['DE']);

// Chara DE na akọ ọtụtụ onye a
// Change DE to the two-letter code of your country

// na onye a naakaa nke onye a.

// Example below, for Germany.

$countries = array_merge(array( 'DE' => __('Germany', 'ultimate-multisite'), ), $countries);

return $countries;

});

---
title: Àtòkọ Orílẹ̀-èdè
sidebar_position: 5
_i18n_hash: 9c3cc54ddec563f05e01e1282a9e9f87
---
# Títún ṣètò àtòjọ orílẹ̀-èdè Ultimate Multisite {#re-ordering-the-ultimate-multisite-country-list}

Àkojọ-silẹ̀ láti yan orílẹ̀-èdè ni a ṣètò ní títẹ̀lé alfábẹ́ẹ̀tì dá lórí àwọn ẹ̀yà Gẹ̀ẹ́sì ti orúkọ àwọn orílẹ̀-èdè. Èyí lè túmọ̀ sí pé, nígbà míì, orílẹ̀-èdè ilé-iṣẹ́ rẹ àti/tàbí ọ̀pọ̀ jùlọ àwọn oníbàárà rẹ lè farapamọ́ ní àárín àtòjọ orúkọ orílẹ̀-èdè ńlá kan.

Láti ràn ọ́ lọ́wọ́ láti tún un ṣe kí o sì fi orílẹ̀-èdè tí o fẹ́ sí òkè àtòjọ yíyan, o lè lo snippet tó wà ní ìsàlẹ̀ (o lè fi kún mu-plugin):

add_filter('wu_get_countries', function($countries) {

// Yi DE padà sí kóòdù lẹ́tà méjì ti orílẹ̀-èdè rẹ

// Àpẹẹrẹ ní ìsàlẹ̀ fún Jámánì.

unset($countries['DE']);

// Yi DE padà sí kóòdù lẹ́tà méjì ti orílẹ̀-èdè rẹ

// àti orúkọ orílẹ̀-èdè rẹ.

// Àpẹẹrẹ ní ìsàlẹ̀, fún Jámánì.

$countries = array_merge(array( 'DE' => __('Germany', 'ultimate-multisite'), ), $countries);

return $countries;

});

---
title: Listahan ng Bansa
sidebar_position: 5
_i18n_hash: 9c3cc54ddec563f05e01e1282a9e9f87
---
# Pag-re-order ng listahan ng bansa sa Ultimate Multisite {#re-ordering-the-ultimate-multisite-country-list}

Ang dropdown para pumili ng bansa ay nakaayos ayon sa alpabeto batay sa mga English variant ng pangalan ng bansa. Maaaring nangangahulugan ito na minsan, ang bansang pinagmulan ng iyong kumpanya at/o karamihan ng iyong mga customer ay nakatago sa gitna ng napakahabang listahan ng mga pangalan ng bansa.

Para matulungan kang ayusin iyan at ilagay ang pambansang pipiliin mo sa itaas ng listahan ng pagpili, maaari mong gamitin ang snippet na ito (pwede mo itong idagdag sa isang mu-plugin):

add_filter('wu_get_countries', function($countries) {

// Palitan ang DE ng two-letter code ng iyong bansa

// Halimbawa sa ibaba para sa Germany.

unset($countries['DE']);

// Palitan ang DE ng two-letter code ng iyong bansa

// at ang pangalan ng pangalan ng iyong bansa.

// Halimbawa sa ibaba, para sa Germany.

$countries = array_merge(array( 'DE' => __('Germany', 'ultimate-multisite'), ), $countries);

return $countries;

});

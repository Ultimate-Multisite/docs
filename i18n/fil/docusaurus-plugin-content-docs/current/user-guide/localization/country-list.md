---
title: Listahan ng Bansa
sidebar_position: 5
_i18n_hash: 9c3cc54ddec563f05e01e1282a9e9f87
---
# Muling pag-aayos ng listahan ng bansa sa Ultimate Multisite

Ang dropdown para pumili ng bansa ay nakaayos ayon sa alpabeto batay sa mga pangalang Ingles ng mga bansa. Ibig sabihin nito, minsan ang bansa ng iyong kompanya at/o karamihan ng iyong mga customer ay nakabaon sa gitna ng napakahabang listahan ng mga pangalan ng bansa.

Para matulungan kang ayusin ito at mailagay ang bansa na gusto mo sa pinakataas ng listahan ng pagpipilian, maaari mong gamitin ang snippet sa ibaba (maaari mo itong idagdag sa isang mu-plugin):

add_filter('wu_get_countries', function($countries) {

// Palitan ang DE ng two-letter code ng iyong bansa

// Halimbawa sa ibaba para sa Germany.

unset($countries['DE']);

// Palitan ang DE ng two-letter code ng iyong bansa

// at ang pangalan ng iyong bansa.

// Halimbawa sa ibaba, para sa Germany.

$countries = array_merge(array( 'DE' => __('Germany', 'ultimate-multisite'), ), $countries);

return $countries;

});

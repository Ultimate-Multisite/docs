---
title: Lihlōba la leka
sidebar_position: 5
_i18n_hash: 9c3cc54ddec563f05e01e1282a9e9f87
---
# Re-ordering le list la natshe ya Ultimate Multisite

Le dropdown e tšoa ho seleksona le natshe e le alphabetically ka le variants ea le leng le English tsa natshe. E ka bolela hore, ka lina li le leng, le natshe ea lona le lona ba bangata ba leba le ba bangata ba lona ba leba haholo ka le list e kholo ea natshe.

Ho u thusa ho abala le ho feta le natshe ea lona e le natshe e tšoa ka topo ea seleksona, u ka u sebelisa snippet ea yeo (u ka e fana ka mu-plugin):

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

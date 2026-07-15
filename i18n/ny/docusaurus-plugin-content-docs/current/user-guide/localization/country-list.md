---
title: Mwamba wa nyanja
sidebar_position: 5
_i18n_hash: 9c3cc54ddec563f05e01e1282a9e9f87
---
# Kufuka kwa list ya nchi ya Ultimate Multisite

Dropdown iliyopangwa kuchagua nchi inapangwa kulingana na herufi za alfabeti za majina ya nchi katika Kiingereza. Hii inaweza kumaanisha kwamba, wakati mwingine, nchi ya nyumbani ya kampuni yako na/au wateja wengi wako inaweza kufichwa katikati ya orodha kubwa ya majina ya nchi.

Ili kukusaidia kurekebisha hili na kuongeza nchi unayochagua juu ya orodha ya kuchagua, unaweza kutumia snippet hii (unaweza kuiweka kwenye mu-plugin):

add_filter('wu_get_countries', function($countries) {

// Badilisha DE kuwa namba ya herufi mbili ya nchi yako

// Mfano hapa chini kwa Ujerumani.

unset($countries['DE']);

// Badilisha DE kuwa namba ya herufi mbili ya nchi yako

// na jina la nchi yako.

// Mfano hapa chini, kwa Ujerumani.

$countries = array_merge(array( 'DE' => __('Germany', 'ultimate-multisite'), ), $countries);

return $countries;

});

---
title: Orodha ya Nchi
sidebar_position: 5
_i18n_hash: 9c3cc54ddec563f05e01e1282a9e9f87
---
# Kupanga upya orodha ya nchi za Ultimate Multisite

Menyu ya kuchagua nchi imepangwa kwa mpangilio wa alfabeti kulingana na majina ya nchi kwa Kiingereza. Hii inamaanisha kwamba, wakati mwingine, nchi ya makao makuu ya kampuni yako na/au wateja wako wengi inaweza kuzikwa katikati ya orodha ndefu ya majina ya nchi.

Ili kukusaidia kurekebisha hilo na kuongeza nchi unayopendelea juu ya orodha ya uchaguzi, unaweza kutumia msimbo ufuatao (unaweza kuuongeza kwenye mu-plugin):

add_filter('wu_get_countries', function($countries) {

// Badilisha DE kuwa msimbo wa herufi mbili wa nchi yako

// Mfano hapa chini ni wa Ujerumani.

unset($countries['DE']);

// Badilisha DE kuwa msimbo wa herufi mbili wa nchi yako

// na jina la nchi yako.

// Mfano hapa chini, kwa Ujerumani.

$countries = array_merge(array( 'DE' => __('Germany', 'ultimate-multisite'), ), $countries);

return $countries;

});

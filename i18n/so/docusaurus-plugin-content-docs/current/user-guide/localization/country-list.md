---
title: Liiska Wadamada
sidebar_position: 5
_i18n_hash: 9c3cc54ddec563f05e01e1282a9e9f87
---
# Dib u qaabaysiga liiska waddada Ultimate Multisite

Waxa la soo doorto waddada ee dropdown-ka si ahaan macmiilka (alphabetically) iyadoo la isticmaalayo qaybta Ingiriiska ah ee magacyada waddamada. Waxaa laga yaabaa in tani ay sabab u noqon karto in, mararka qaarkood, waddanka gurigaaga iyo/ama inta badan macaamiishaada ay ku dhex muuqdaan liiska weyn ee magacyada waddamada.

Si aan kuu caawino inaad hagaajiso arrintaas oo aad waddo aad doorato si aad u dhigto waddanka aad dooratay ugu sarreysa liiska doortid, waxaad isticmaali kartaa qaybta (snippet) hoose (waxaad ku dari kartaa mu-plugin):

```php
add_filter('wu_get_countries', function($countries) {

// Isbeddel DE si ay u noqoto koodka laba kaliya ee waddankaaga

// Tusaale hoose oo loogu Germany.

unset($countries['DE']);

// Isbeddel DE si ay u noqoto koodka laba kaliya ee waddankaaga

// iyo magaca waddankaaga.

// Tusaale hoose, German.

$countries = array_merge(array( 'DE' => __('Germany', 'ultimate-multisite'), ), $countries);

return $countries;

});
```

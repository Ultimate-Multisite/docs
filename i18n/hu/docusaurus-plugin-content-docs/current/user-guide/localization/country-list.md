---
title: Országlista
sidebar_position: 5
_i18n_hash: 9c3cc54ddec563f05e01e1282a9e9f87
---
# Az Ultimate Multisite országlista átrendezése

Az országválasztó legördülő lista az országnevek angol változatai alapján, ábécé sorrendben jelenik meg. Ez azt jelenti, hogy előfordulhat, hogy a céged vagy a legtöbb ügyfeled országa valahol a hosszú lista közepén rejtőzik.

Hogy ezen segíts, és a kívánt országot a lista elejére helyezd, használd az alábbi kódrészletet (hozzáadhatod egy mu-plugin-hoz):

add_filter('wu_get_countries', function($countries) {

// Cseréld a DE-t a saját országod kétbetűs kódjára

// Az alábbi példa Németországra vonatkozik.

unset($countries['DE']);

// Cseréld a DE-t a saját országod kétbetűs kódjára

// és az országod nevére.

// Az alábbi példa Németországra vonatkozik.

$countries = array_merge(array( 'DE' => __('Germany', 'ultimate-multisite'), ), $countries);

return $countries;

});

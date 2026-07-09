---
title: Lisitra firenena
sidebar_position: 5
_i18n_hash: 9c3cc54ddec563f05e01e1282a9e9f87
---
# Fanotra indray ny lisitry ny firenena ao amin'ny Ultimate Multisite {#re-ordering-the-ultimate-multisite-country-list}

Ny dropdown izay safidinao dia soratana araka ny filaharan'ny teny anglisy an'ireo anarana ireo. Izany dia mety midika fa, indraindray, ny firenena misy anareo sy/na ny mpanjifa maro dia voafangiana eo afovoan'ny lisitry ny anaran'ny firenena lehibe be.

Mba hanampiana anao hanamboarana izany ary hampidiana ny firenena tianao ho eo ambony amin'ny lisitry ny safidy, dia azonao atao mampiasa ilay snippet eto (azonao ampiana ao amin'ny mu-plugin ianao):

add_filter('wu_get_countries', function($countries) {

// Ovay DE ho ny code roa-tsoratra an'ny firenenao

// Ohatra eto ho an'i Alemaina.

unset($countries['DE']);

// Ovay DE ho ny code roa-tsoratra an'ny firenenao

// ary ny anaran'ny firenenao.

// Ohatra eto, ho an'i Alemaina.

$countries = array_merge(array( 'DE' => __('Germany', 'ultimate-multisite'), ), $countries);

return $countries;

});

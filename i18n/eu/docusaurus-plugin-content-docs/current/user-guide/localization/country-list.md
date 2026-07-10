---
title: Iraskidetza
sidebar_position: 5
_i18n_hash: 9c3cc54ddec563f05e01e1282a9e9f87
---
# Ultimate Multisite-aren kontuer listaren ustezpenaketa {#re-ordering-the-ultimate-multisite-country-list}

Kontuerra irriztzeko dropdown-a (menuak) kontuerren ingel batariak ondorioz alfabetikoko dauratsu egiten du. Horrek, minutu batzuk, diseinuaren kontuerra eta/edo gure kosturietako seguruaguneen gehiendu parte bat bigarri edo lehen parte batean ez dagoela eskatzen du.

Horren problemetua ereditzeko eta kontuerra nahi duzuak irriztzeko listaren üstoan lehen partean jarri dezakezu, aipatutako snippet-a (hoiz mu-plugin batarekin beste ditu):

add_filter('wu_get_countries', function($countries) {

// DE-n kontuerra iki-lehen kodera aldatu duzu

// Eguneko aldeko da Germany-ren.

unset($countries['DE']);

// DE-n kontuerra iki-lehen kodera aldatu duzu

// eta kontuerrak kontueraren irakurriaren irakurriaren.

// Eguneko aldeko da Germany-ren.

$countries = array_merge(array( 'DE' => __('Germany', 'ultimate-multisite'), ), $countries);

return $countries;

});

---
title: Llista na cosaintí
sidebar_position: 5
_i18n_hash: 9c3cc54ddec563f05e01e1282a9e9f87
---
# Aistriúchadh ar foirme an líniste na cosaintail Ultimate Multisite

Tá an droppdown a chur i bhfeic an t-aistriúchadh ar bhealach alphaitimach ar fáil ar na ghréasanna Englishacha deiridh na cosaintail. Is féidir leis seo go ngaccam, go dtí an t-aistriúchadh na cosaintail a bhaineann le cosúil go bhfuil an t-áit chomhánach a chuireann an t-aontúchán a bheith agat agus/nó dearmadánachtaí go leat i gcuid líniste mhór ar cheangailte.

Le linn aistriúchadh seo a dhéanamh agus chun cosaintáil a bhaineann leat a chomhánach a chur ar an áit a bhuaileachtaithe ar an chéad chuid na líniste, leat a bheith ag úsáid an snippet seo (leat féidir é a chur i mu-plugin):

add_filter('wu_get_countries', function($countries) {

// Chang DE go dtí an code deiridh na cosaintail a bhaineann leat.

// Eisimpleir le below do Germany.

unset($countries['DE']);

// Chang DE go dtí an code deiridh na cosaintail a bhaineann leat

// agus an t-aontúchán chuid cosaintáil.

// Eisimpleir le below, do Germany.

$countries = array_merge(array( 'DE' => __('Germany', 'ultimate-multisite'), ), $countries);

return $countries;

});

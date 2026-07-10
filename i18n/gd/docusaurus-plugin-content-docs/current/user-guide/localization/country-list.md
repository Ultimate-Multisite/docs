---
title: Lìst tairann
sidebar_position: 5
_i18n_hash: 9c3cc54ddec563f05e01e1282a9e9f87
---
# Aistilidh a' chluarach an list tairann na Ultimate Multisite {#re-ordering-the-ultimate-multisite-country-list}

An dropdown airson a thabhail air tairann a tha a' sgrùdadh gu beatha (alphabetical) gu fhaighinn air eòganan Gàidhlig. Is e cheann a thiginn, aig an t-sgrùdadh, nach eil tairann a chùlann a tha a' sgrùdadh gu beatha (home country) a tha a' sgrùdadh anns an tairann mòr de dhinn.

Chan eil e cheann a thiginn airson seo a thoilseachd agus airson a thabhail tairann a tha thu a' chùlann air a bhith a' sgrùdadh gu beatha (country of choice) air a' chluarach a' sgrùdadh, chan eil e cheann a thiginn. Chan eil e cheann a thiginn airson seo a thoilseachd agus airson a thabhail tairann a tha thu a' chùlann air a bhith a' sgrùdadh gu beatha (country of choice) air a' chluarach a' sgrùdadh, chan eil e cheann a thiginn.

Chan eil e cheann a thiginn airson seo a thoilseachd agus airson a thabhail tairann a tha thu a' chùlann air a bhith a' sgrùdadh gu beatha (country of choice) air a' chluarach a' sgrùdadh, chan eil e cheann a thiginn.

add_filter('wu_get_countries', function($countries) {

// Chang an DE gu code latha a tha thu tairann

// Eisimpleir a tha a' chluarach airson Germany.

unset($countries['DE']);

// Chang an DE gu code latha a tha thu tairann

// agus an t-sgrùdadh air a tha thu tairann.

// Eisimpleir a tha a' chluarach, airson Germany.

$countries = array_merge(array( 'DE' => __('Germany', 'ultimate-multisite'), ), $countries);

return $countries;

});
